import { Component, signal } from '@angular/core';

interface User {
  name: string;
  age: number;
}
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = signal<number>(0);
  name = signal<string>('Angular');
  isAdmin = signal<boolean>(true);

  numbers = signal<number[]>([1,20,25,30]);
  user = signal<User>({
    name: 'Mohit',
    age: 24
  })

  directUpdate(){
    this.numbers.set([100,200,300]);
  }

  addNumber(){
    this.numbers.update(arr => [...arr,400])
  }
}
