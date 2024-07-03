import { ApplicationConfig, isDevMode, ɵwithDomHydration } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi, withXsrfConfiguration } from '@angular/common/http';
import { authInterceptor, loggingInterceptor } from './client/interceptor/interceptor';
import { provideServiceWorker } from '@angular/service-worker';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(
    // withHttpTransferCacheOptions({
    //   includePostRequests: true,
    // }),
    ),
    provideAnimations(),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor, loggingInterceptor])),
    provideServiceWorker('ngsw-worker.js', {
        enabled: false, //!isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    }), provideAnimationsAsync(),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
]
};
