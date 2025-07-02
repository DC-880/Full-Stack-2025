import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUp } from "./sign-up/sign-up";
import { SignIn } from "./sign-in/sign-in";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'reactive-forms';
}
