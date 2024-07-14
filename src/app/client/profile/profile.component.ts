import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent, HeaderComponent } from '@shared';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterLink, RouterLinkActive],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
