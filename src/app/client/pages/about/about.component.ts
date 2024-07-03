import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '@services';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private event = inject(EventService);

  constructor(){

  }

 protected get user() {
    return this.event.user()
  }
}
