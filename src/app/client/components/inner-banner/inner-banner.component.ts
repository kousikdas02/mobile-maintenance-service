import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inner-banner',
  standalone: true,
  imports: [],
  templateUrl: './inner-banner.component.html',
  styleUrl: './inner-banner.component.scss'
})
export class InnerBannerComponent {
  @Input() innerBannerImage: string = '';
  @Input() innerBannerHeading: string =""
}
