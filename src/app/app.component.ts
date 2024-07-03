import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { SwUpdate } from '@angular/service-worker';
import { MatRippleModule } from '@angular/material/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-latest',
  standalone: true,
  imports: [MatIconModule, RouterOutlet, MatRippleModule, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Latest';
  updateAvailable: boolean = false
  constructor(
   private iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private swUpdate: SwUpdate,
  ) {
    this.registerIcons(iconRegistry, sanitizer);
    this.swUpdate.isEnabled && this.swUpdate.checkForUpdate().then((e) => {
      this.updateAvailable = true;
    })
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }


  activateUpdate(): void {
    this.swUpdate.activateUpdate().then(() => {
      window.location.reload();
    });
  }


  private registerIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer): void {
    // iconRegistry.addSvgIcon('rocket', sanitizer.bypassSecurityTrustResourceUrl('./assets/**'))
  }

  showLoader: boolean = true;

}
