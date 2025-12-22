import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // name = signal('');
  // email = signal('');

  // submitForm(){
  //   console.log(`Name: ${this.name()}, Email: ${this.email()}`);
  // }

  userSignal = signal({ name: '', email: '' });

  form : any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      email: ['']
    })

    this.form.valueChanges.subscribe((value: any) => {
      this.userSignal.set(value);
    });
  }

  submitForm() {
    console.log(`Name: ${this.userSignal().name}, Email: ${this.userSignal().email}`);
  }
}
