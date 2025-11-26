import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-root',
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
