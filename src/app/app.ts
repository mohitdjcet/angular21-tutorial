import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { SigninComponent } from './signin/signin';
@Component({
  selector: 'app-root',
  imports: [Login,SigninComponent],
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
