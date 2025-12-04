import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name: string = "";
  city: string = "";
  email: string = "";

  updateName(val:string){
    this.name = val;
  }

  getEmail(val:string){
    this.email = val;
  }
}
