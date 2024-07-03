import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WtsScrollComponent, ScrollBarOptions } from 'wts-scroll';
import { DropdownDirective } from '../../../helper';
// import { WtsScrollComponent } from 'src/app/client/shared/wts-scroll/wts-scroll.component';
// import { ScrollBarOptions } from 'src/app/client/shared/wts-scroll/type';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatRippleModule, RouterLink, RouterLinkActive, DropdownDirective, WtsScrollComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  protected options: ScrollBarOptions = {
    direction: 'vertical',
    maxHeight: '100%',
    vertical: {
      scrollBarHanldeWidth: 4,
      scrollBarWidth: 6,
      autohide: true,
      spaceFromContainer: -1,
    }
  };
  protected logout(): void { }
}
