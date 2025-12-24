import { Component } from '@angular/core';
import { FormField } from './form-field/form-field';
@Component({
  selector: 'app-root',
  imports: [FormField],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  email = '';

  onEmailChange(value: string){
    console.log('Email:', value);
    this.email = value;
  }
}
