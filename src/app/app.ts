import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
@Component({
  selector: 'app-root',
  imports: [CommonModule, Field],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //Form model based on signals
  loginModel = signal({
    email: '',
    password: ''
  })

  //Create form from signal Model
  loginForm = form(this.loginModel);

  submit() {
    console.log(this.loginModel());
  }
}
