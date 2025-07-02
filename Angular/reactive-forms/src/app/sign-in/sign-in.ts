import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenNameValidator, PasswordValidation } from '../password-validation';
import { LoginService } from '../login-service';
import { inject } from '@angular/core';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn {

loginService = inject(LoginService);

  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6), PasswordValidation, forbiddenNameValidator]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), PasswordValidation])
  })

  submitSignIn() {
    if (this.signInForm){
       this.loginService.login(this.signInForm.value).subscribe((result:any) => {
        if(result.token){
          localStorage.setItem('token', result.token)
        }
       })
    }
   
  }
}
