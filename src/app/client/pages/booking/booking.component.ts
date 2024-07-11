import { Component } from '@angular/core';
import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, startWith } from 'rxjs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
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
  selector: 'app-booking',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [InnerBannerComponent, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatDatepickerModule, MatInputModule, MatAutocompleteModule, AsyncPipe],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  service = new FormControl('');
  serviceList: string[] = ['Oil Change Services', 'Brake Services', 'Battery Services', 'Cooling System Repair Services', 'Transmission Fluid Services', 'Windshield Services', 'Clutch / Cylinder Services', 'Starting / Charging Services', 'Car Inspection Services', 'Air Conditioning Services', 'Fluid Exchange Services', 'Headlight Services', 'Filter Services', 'Tire Services', 'Car Wash Services', 'Power Steering Services'];

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

  control = new FormControl('');
  streets: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  filteredStreets!: Observable<string[]>;
  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
