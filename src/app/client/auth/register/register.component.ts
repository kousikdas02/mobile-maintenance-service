import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ApiService } from '@services'
@Component({
  selector: 'app-register',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [ReactiveFormsModule, FormsModule, RouterLink, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  RegisterForm: FormGroup = new FormGroup({});
  termsCondition: boolean = true;

  constructor(private _formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _router:Router
  ) {
    this.formInit();
  }
  formInit(): void {
    this.RegisterForm = this._formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*(\+[a-zA-Z0-9-]+)?@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/)]),
      phone: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()-+={[}\]\|\:;"'<,>.\?])[A-Za-z\d~`!@#$%^&*()-+={[}\]\|\:;"'<,>.\?]{8,}$/)]),
      cPassword: new FormControl('', [Validators.required])
    },
      {
        validator: this.ConfirmedValidator('password', 'cPassword'),
      }
    );
  }
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }


  protected submitHandle(): void {
    if(!this.termsCondition){
      this._apiService.alert('Please check the box to continue.','info');
      return;
    }
    if (this.RegisterForm.invalid) {
      this.RegisterForm.markAllAsTouched()
      return;
    }
    const postBody = {
        firstName: this.RegisterForm.value.firstName,
        lastName: this.RegisterForm.value.lastName,
        email: this.RegisterForm.value.email,
        phone: this.RegisterForm.value.phone,
        gender: this.RegisterForm.value.gender,
        password: this.RegisterForm.value.password
    }
    this._apiService.post('auth/signup',postBody).subscribe({
      next:(resp:any)=>{
        this._apiService.alert('Successfully registered.','success');
        this._router.navigate(['login']);
      },
      error:(err:any)=>{
        this._apiService.alert(err.message,'error')
      }
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
