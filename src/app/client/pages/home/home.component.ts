import { Component, EnvironmentInjector, Inject, InjectionToken, Injector, OnInit, Signal, ViewChild, afterNextRender, computed, effect, inject, runInInjectionContext, signal } from '@angular/core';
import { ApiService, EventService, StorageService } from '@services';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Meta } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, JsonPipe, NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { RouterLink } from '@angular/router';

interface Year {
  value: string;
  viewValue: string;
}
interface Manufacturer {
  value: string;
  viewValue: string;
}
interface Model {
  value: string;
  viewValue: string;
}
interface Engine {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgxSkeletonLoaderModule,
    MatIconModule,
    AsyncPipe, JsonPipe,
    NgOptimizedImage, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, SlickCarouselModule, ServiceCardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: {},
  providers: [
   ]
})

export class HomeComponent implements OnInit {

  private storage = inject(StorageService);
  private api = inject(ApiService);
  private meta = inject(Meta);
  private event = inject(EventService);
  protected selectedTime = '02:45';
  protected selectedTime1 = '02:45 AM';
 
 

  // @ViewChild('customScrollBar') private customScrollBar!: WtsScrollComponent;
  isLoggedIn = this.event.isLoggedIn()
 



  constructor(
  ) {
    this.meta.addTag({ name: 'description', content: 'This is the latest angular project\'s home page' });
    // this.event.user.set({ name: 'User Name bind from home page!!' })
    // this.test = toSignal(this.api.get('https://reqres.in/api/users'))();





  }
  ngOnInit(): void {
  }

  abcd(input: HTMLInputElement): void {
    // console.log(this.test);
    const file: FileList = input.files as FileList;
    const data = new FormData();
    for (let index = 0; index < file.length; index++) {
      const _data = {
        info: 'this is file info!!',
        file: file[index]
      }
      data.append(`files[${index}]`, JSON.stringify(_data))
    }
    const object: any = {}
    data.forEach((value, key) => object[key] = value);
    console.log(object);
    this.api.post('/api/upload', data).subscribe((t: any) => {
      console.log(t);
    })
    // this.api.get('/api/user/10990').subscribe((t:any) => {
    //   console.log(t);
    // })
    // this.api.get('/api/foo').subscribe((t:any) => {
    //   console.log(t);
    // })
  }

  protected _onReachedAt(e: any): void {
    console.log(e);
  }

  protected onChange(e: string): void {
    this.selectedTime = e;
  }

  protected getOTP(e: any): void {
    console.log(e);

  }
  getData(): void {
    this.event.isLoggedIn.set(true);
  }


  years: Year[] = [
    {value: '2020', viewValue: '2020'},
    {value: '2021', viewValue: '2021'},
    {value: '2022', viewValue: '2022'},
    {value: '2023', viewValue: '2023'},
    {value: '2024', viewValue: '2024'},
  ];
  manufacturers: Manufacturer[] = [
    {value: 'BMW', viewValue: 'BMW'},
    {value: 'CHEVROLET', viewValue: 'CHEVROLET'},
    {value: 'FORD', viewValue: 'FORD'},
    {value: 'HONDA', viewValue: 'HONDA'},
    {value: 'JAGUAR', viewValue: 'JAGUAR'},
  ];
  models: Model[] = [
    {value: 'Option 1', viewValue: 'Option 1'},
    {value: 'Option 2', viewValue: 'Option 2'},
    {value: 'Option 3', viewValue: 'Option 3'},
    {value: 'Option 4', viewValue: 'Option 4'},
    {value: 'Option 5', viewValue: 'Option 5'},
    
  ];
  engines: Engine[] = [
    {value: 'Option 1', viewValue: 'Option 1'},
    {value: 'Option 2', viewValue: 'Option 2'},
    {value: 'Option 3', viewValue: 'Option 3'},
    {value: 'Option 4', viewValue: 'Option 4'},
    {value: 'Option 5', viewValue: 'Option 5'},
    
  ];


  // service slick slider
  slides = [
    {
      img: "assets/images/oilChange.png",
      serviceName: "Oil Change Services"
    },
    {
      img: "assets/images/brakes.png",
      serviceName: "Brake Services"
    },
    {
      img: "assets/images/battery.webp",
      serviceName: "Battery Services"
    },
    {
      img: "assets/images/cooling-system.webp",
      serviceName: "Air Conditioning Services"
    },
    {
      img: "assets/images/transmission-fluid.webp",
      serviceName: "Transmission Fluid Services"
    },
    {
      img: "assets/images/windshield.webp",
      serviceName: "Windshield Services"
    },
    
  ];
  slideConfig  = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    // autoplaySpeed: 2000,
    arrows: true,
  };

}