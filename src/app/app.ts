import { Component, signal } from '@angular/core';
import { Login } from './login/login';
@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tutorial');
  name = "Angular Tutorial";
  username = "mohitkumar";
  isAdmin = true;
  count = 3;
}
