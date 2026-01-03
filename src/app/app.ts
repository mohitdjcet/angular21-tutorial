import { Component, inject } from '@angular/core';
import { User } from './user';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userService = inject(User);

  users : any = toSignal(this.userService.getUsers());
}
