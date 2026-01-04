import { Component, inject } from '@angular/core';
import { UserService } from './user-service';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userService = inject(UserService);

  users : any = toSignal( this.userService.getUsers())
}
