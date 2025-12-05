import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  value: string = 'contact';

  tab='home';

  categories = '';
  updateCat(val: string) {
    this.categories = val.toLowerCase();
  }
}
