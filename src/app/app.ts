import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users: any[] = [];

  constructor(private userService: User){}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: any)=>{
      this.users = data;
      console.log(this.users,'users data');
    })
  }
}
