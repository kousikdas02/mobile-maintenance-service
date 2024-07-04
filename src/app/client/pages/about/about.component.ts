import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '@services';
import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, InnerBannerComponent],
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
