import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';
import { iUser } from '../client/types/user.type';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private storage = inject(StorageService);

  isLoggedIn: WritableSignal<boolean> = signal<boolean>(this.storage.isAuthenticate());
  // _isLogedin = new BehaviorSubject(false);
  // _isLogedin = new BehaviorSubject(this.storage.isAuthenticate());
  user: WritableSignal<iUser> = signal<iUser>(this.storage.getUser())

}
