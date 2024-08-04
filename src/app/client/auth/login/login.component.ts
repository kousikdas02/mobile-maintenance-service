import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EventService, StorageService } from '@services';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from '@services'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, FormsModule, MatSlideToggleModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});

  constructor(private _formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _router: Router,
    private _event: EventService,
    private _storage: StorageService) {
    this.formInit();
  }
  private formInit(): void {
    this.loginForm = this._formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }



  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return
    }
    this._apiService.post('auth/signin', this.loginForm.value).subscribe({
      next: (resp: any) => {
        this._apiService.alert('Successfully logged in.', 'success');
        this._event.isLoggedIn.set(true);
        const userObj = {
          _id: resp._id,
          firstName: resp.firstName,
          lastName: resp.lastName,
          email: resp.email,
          phone: resp.phone,
          gender: resp.gender,
          createdAt: resp.createdAt,
          updatedAt: resp.updatedAt,
        }
        this._event.user.set(userObj);
        this._storage.setUser({
          ...userObj, accessToken: resp.token,
        });
        this._router.navigate(['/home'])
      },
      error: (err: any) => {
        this._apiService.alert(err.message, 'error')
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
