import { Component, inject, signal } from '@angular/core';
import { UserService } from './services/user-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from './models/user';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // userService = inject(UserService);

  // users = toSignal<User[]>( this.userService.getUsers())

  users = signal<User[]>([]);
  name = signal<string>('');
  email = signal<string>('');

  editingUpdateID = signal<number | null>(null);

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers(); // Load users on component initialization
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users.set(data);
    });
  }

  // Clicked Edit
  editUser(user: User) {
    this.editingUpdateID.set(user.id!);
    this.name.set(user.name);
    this.email.set(user.email);
  }

  //Add and Update User
  submitForm() {
    const payload: User = {
      name: this.name(),
      email: this.email(),
      isActive: false,
    };
    //Update User
    if (this.editingUpdateID() !== null) {
      this.userService.updateUser(this.editingUpdateID()!, payload).subscribe(() => {
        alert('User updated successfully');
        this.afterSave();
      });
    } else {
      //Add User
      this.userService.addUser(payload).subscribe(() => {
        alert('User added successfully');
        this.afterSave();
      });
    }
  }

  toggleStatus(user: User) {
    this.userService.updateUserStatus(user.id!, !user.isActive).subscribe(() =>{
      this.users.update( list =>
        list.map( u =>
          u.id === user.id ? { ...u, isActive: !u.isActive } : u
        )
      )
    })
  }

  deleteUser( user : User){
    const confirmDelete = confirm(`Are you sure you want to delete ${user.name}?`);
    if( !confirmDelete ) return;

    this.userService.deleteUser(user.id!).subscribe(()=>{
      this.users.update( list =>
        list.filter( u => u.id !== user.id )
      )
    })
  }

  afterSave() {
    this.loadUsers();
    this.name.set('');
    this.email.set('');
    this.editingUpdateID.set(null);
  }
}
