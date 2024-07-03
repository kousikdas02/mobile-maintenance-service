import { Component, Input, Signal, WritableSignal, afterNextRender, effect, inject, signal } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EventService, StorageService } from '@services';
import { iUser } from '@types';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private event = inject(EventService);
  private storage = inject(StorageService);
  @Input() isLoggedIn: WritableSignal<boolean> = signal(this.event.isLoggedIn());
  @Input() user!: WritableSignal<iUser>;
  protected pageIsLoaded: WritableSignal<boolean> = signal(false);

  constructor() {

    afterNextRender(() => {
      setTimeout(() => { this.pageIsLoaded.set(true) }, 0)
    })
  }


  protected logout(): void {
    this.storage.clearUser();
    this.event.isLoggedIn.set(false);
  }


  // autocomplete for header search
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

