import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
  form!: FormGroup

  constructor() {
    this.formInit();
  }
  private formInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required])
    })
  }

  TypeIndicators: any = {
    password: true,
    confirmPassword: true
  }

  changePasswordType(field: string) {
    this.TypeIndicators[field] = !this.TypeIndicators[field]
  }
}
