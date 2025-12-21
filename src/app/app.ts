import { Component } from '@angular/core';
import { Child } from './child/child';
@Component({
  selector: 'app-root',
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // username: string = 'Mohit Kumar';
  message: string = '';

  onMessage(msg: string){
    this.message = msg;
  }
}
