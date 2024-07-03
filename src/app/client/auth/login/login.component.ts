import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EventService, StorageService } from '@services';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, FormsModule, MatSlideToggleModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form!: FormGroup
  private event = inject(EventService);
  private storage = inject(StorageService);
  private router = inject(Router);
  protected credentials: { name: string } = { name: '' }

  constructor() {
    this.formInit();
  }



  protected submitHandle(form: FormGroup): void {
    if (form.valid) {

      this.event.isLoggedIn.set(true);
      this.event.user.set({ name: form.value.name });
      this.storage.setUser({ token: 'MY TOKEN', name: form.value.name });
      this.router.navigate(['/home'])
    } else {
      form instanceof FormGroup && form.markAllAsTouched();
    }
  }

  private formInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required])
    })
  }

}
