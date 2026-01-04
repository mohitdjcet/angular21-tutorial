import { Component, inject, signal } from '@angular/core';
import { UserService } from './services/user-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from './models/user';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // userService = inject(UserService);

  // users = toSignal<User[]>( this.userService.getUsers())

  users = signal<User[]>([]);
  name = signal<string>('');
  email = signal<string>('');

  constructor( private userService: UserService){}

  ngOnInit(){
    this.loadUsers(); // Load users on component initialization
  }

  loadUsers(){
    this.userService.getUsers().subscribe( data =>{
      this.users.set(data);
    });
  }

  submitForm(){
    const payload: User = {
      name: this.name(),
      email: this.email(),
      isActive: false
    };
    this.userService.addUser(payload).subscribe( () =>{
      alert('User added successfully');
      this.loadUsers(); // Refresh the user list after adding a new user
      this.name.set('');
      this.email.set('');
    })
  }
}
