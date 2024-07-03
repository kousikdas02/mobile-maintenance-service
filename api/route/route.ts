import express, { Request, Response } from 'express';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { SitemapStream } from 'sitemap';
const apiRoutes = express.Router();

apiRoutes.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');

  try {
    const smStream = new SitemapStream({ hostname: process.env['APP_URL'] });

    (async () => {
      const dir = './sitemap';
      const existingData = existsSync(dir + '/sitemap.txt') ? readFileSync(dir + '/sitemap.txt', { encoding: 'utf-8' }) : JSON.stringify([]);
      const ROUTES = JSON.parse(existingData) || [];
      for (const route of ROUTES) {
        smStream.write(route);
      }

      smStream.end();

      smStream.pipe(res).on('error', (e) => {
        throw e;
      });
    })();
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});

apiRoutes.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  const dir = './robots';
  !existsSync(dir) && mkdirSync(dir);
  if (!existsSync(dir)) return
  let data = "User-agent: *\n"
    + "Disallow: /cgi-bin/\n"
    + "Sitemap: https://bluetees-golf-ui.dedicateddevelopers.us/sitemap.xml";

  writeFileSync(dir + '/robots.txt', data);
  // writeFileSync(dir + '/robots.txt', 'Disallow:');
  // writeFileSync(dir + '/robots.txt', 'Disallow: /cgi-bin/');
  // writeFileSync(dir + '/robots.txt', 'Sitemap: https://bluetees-golf-ui.dedicateddevelopers.us/sitemap.xml');
  res.send(readFileSync(dir + '/robots.txt', { encoding: 'utf-8' }));
});

export default apiRoutes;