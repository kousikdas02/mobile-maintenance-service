import { Component, Signal, WritableSignal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, HeaderComponent } from '../shared';
import { EventService } from '@services';
import { iUser } from '../types';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {
  private event = inject(EventService);

  get isLoggedIn(): WritableSignal<boolean> {
    return this.event.isLoggedIn
  }

  get user(): WritableSignal<iUser> {
    return this.event.user
  }
}
