import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  status: string = "shipped";
  marks:number = 72;

  age:number = 0;

  updateAge(val: string){
    this.age = Number(val);
  }

  section = "home";
}
