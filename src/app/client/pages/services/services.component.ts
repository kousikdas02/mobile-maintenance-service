import { Component } from '@angular/core';
import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [InnerBannerComponent, ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  serviceList = [
    {
      img: "assets/images/oilChange.png",
      serviceName: "Oil Change Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
    {
      img: "assets/images/brakes.png",
      serviceName: "Brake Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
    {
      img: "assets/images/battery.webp",
      serviceName: "Battery Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
    {
      img: "assets/images/placeholder-image.jpg",
      serviceName: "Cooling System Repair Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
    {
      img: "assets/images/transmission-fluid.webp",
      serviceName: "Transmission Fluid Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
    {
      img: "assets/images/windshield.webp",
      serviceName: "Windshield Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
    {
      img: "assets/images/placeholder-image.jpg",
      serviceName: "Clutch / Cylinder Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
    {
      img: "assets/images/placeholder-image.jpg",
      serviceName: "Starting / Charging Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
    {
      img: "assets/images/placeholder-image.jpg",
      serviceName: "Car Inspection Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
    {
      img: "assets/images/cooling-system.webp",
      serviceName: "Air Conditioning Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
    {
      img: "assets/images/placeholder-image.jpg",
      serviceName: "Fluid Exchange Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
    {
      img: "assets/images/placeholder-image.jpg",
      serviceName: "Headlight Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
    {
      img: "assets/images/placeholder-image.jpg",
      serviceName: "Filter Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
    {
      img: "assets/images/placeholder-image.jpg",
      serviceName: "Tire Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
    {
      img: "assets/images/placeholder-image.jpg",
      serviceName: "Car Wash Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
    {
      img: "assets/images/placeholder-image.jpg",
      serviceName: "Power Steering Services",
      serviceDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit totam facilis assumenda quas quis.",
    },
  ];
}
