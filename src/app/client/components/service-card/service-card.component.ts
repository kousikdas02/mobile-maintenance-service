import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() serviceImg: string = '';
  @Input() serviceTitle: string = '';
  @Input() hasDescription: boolean = false;
  @Input() serviceDescription: string = '';
}
