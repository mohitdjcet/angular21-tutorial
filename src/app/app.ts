import { Component } from '@angular/core';
// import { CounterStore } from './core/store/counter';
import { UserStore } from './core/store/user';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // constructor(public counterStore: CounterStore) {}
  constructor(public userStore: UserStore) {}
}
