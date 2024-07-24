import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent, HeaderComponent } from '@shared';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
 // nav button click
 navStatus: boolean = false;
 navBtnClick(){
     this.navStatus = !this.navStatus;    
 }

 navBtnCloseClick(){
   this.navStatus = false;
 }
}
