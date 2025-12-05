import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLoggedIn = true;

  marks = 65;

  showBox = true;

  toggleBox() {
    this.showBox = !this.showBox;
  }

  age = 0;

  updateAge(val: string) {
    this.age = Number(val);
  }
}
