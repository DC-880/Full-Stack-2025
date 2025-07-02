import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { LoginService } from '../login-service';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {

  loginService = inject(LoginService)

    signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirm_password: new FormControl(''),
      status: new FormControl('')
      // name: new FormControl(''),
      // age: new FormControl(''),
      // department: new FormControl(''),
    })

    submitSignUp() {
    if (this.signUpForm){
       this.loginService.signUp(this.signUpForm.value).subscribe(result => {
        console.log(result);
       })
    }
   
  }

   
}
