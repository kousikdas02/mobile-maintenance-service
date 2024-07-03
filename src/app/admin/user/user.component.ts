import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, HeaderComponent, SidebarComponent } from '@adminShared';
// import { WtsScrollComponent } from 'src/app/client/shared/wts-scroll/wts-scroll.component';
// import { ScrollBarOptions } from 'src/app/client/shared/wts-scroll/type';
import { WtsScrollComponent, ScrollBarOptions } from 'wts-scroll';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent, WtsScrollComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  protected options: ScrollBarOptions = {
    direction: 'vertical',
    autohide: true,
    vertical: {
      autohide: true,
      scrollBarHanldeWidth: 6,
      scrollBarWidth: 8,
      // spaceFromContainer: -1
    }
  };

}
