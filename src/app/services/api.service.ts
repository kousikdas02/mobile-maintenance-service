import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Signal, effect, inject, signal } from '@angular/core';
import {  catchError, throwError } from 'rxjs';
import { environment } from '@env';
import { StorageService } from './storage.service';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private storage = inject(StorageService);
  private event = inject(EventService);
  private API_URL: string = environment.BASE_API_PATH;
  httpOptions = signal({
    headers: new HttpHeaders({
      Accept: 'multipart/form-data',
      "Cache-Control": "max-age=84600, public"
    })
  });

  private isLoggedIn: Signal<boolean> = signal((typeof this.storage.getDataField('token') === 'string'));

  constructor() {
    effect(() => {
      this.isLoggedIn = signal((typeof this.storage.getDataField('token') === 'string'));
    }, { allowSignalWrites: true });

    this.isLoggedIn() && this.httpOptions.set({
      headers: new HttpHeaders({
        Accept: 'multipart/form-data',
        'x-access-token': this.storage.getDataField('token') + '',
        "Cache-Control": "max-age=84600, public"
      })
    })
  }

  get(path: string, params: object = {}): any {
    // return this.http.get(`${this.API_URL}${path}`).pipe(catchError(this.formatErrors));
    return this.http.get(`${this.API_URL}${path}`, { headers: this.httpOptions().headers, params: { ...params } }).pipe(catchError(this.formatErrors))
    // return this.http.get(`${this.API_URL}${path}`, { headers: this.httpOptions.headers, params: {...params} }).pipe(catchError(this.formatErrors))

  }



  post(path: any, body: object = {}) {
    return this.http.post(`${this.API_URL}${path}`, body, { headers: this.httpOptions().headers }).pipe(catchError(this.formatErrors));
  }

  patch(path: any, body: object = {}) {
    return this.http.patch(`${this.API_URL}${path}`, body, { headers: this.httpOptions().headers }).pipe(catchError(this.formatErrors));
  }

  put(path: any, body: object = {}) {
    return this.http.put(`${this.API_URL}${path}`, body, { headers: this.httpOptions().headers }).pipe(catchError(this.formatErrors));
  }

  delete(path: string, params: HttpParams = new HttpParams()) {
    return this.http.delete(`${this.API_URL}${path}`, { headers: this.httpOptions().headers, params }).pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return throwError(() => error);
  }
}
