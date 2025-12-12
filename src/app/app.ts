import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 lName = "mohit"
 uName = "MOHIT"

 today = new Date();

 amount = 2500;

 per= 0.35;

 user = {
  name: 'Mohit',
  age: 25
 }
}
