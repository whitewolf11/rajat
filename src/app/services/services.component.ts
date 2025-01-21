// services.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { name: 'Service 1', details: 'Details about Service 1' },
    // Add more services here
  ];

  selectedService: any;

  openPopup(service: any) {
    this.selectedService = service;
  }

  closePopup() {
    this.selectedService = null;
  }
}
