import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { provideNativeDateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-register',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [ReactiveFormsModule, RouterLink, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form!: FormGroup

  constructor() {
    this.formInit();
  }



  protected submitHandle(form: FormGroup): void {
    if (form.valid) {
      console.log(form.value);
    } else {
      form.markAllAsTouched()
    }
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
