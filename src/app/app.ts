import { Component, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // username = 'Mohit';
  // name = signal('Mohit');

  user = signal<{ name: string; age: number }>({
    name: 'Mohit',
    age: 25
  })

  updateName(value: string) {
    this.user.update(user => ({ ...user, name: value }));
  }

  updateAge() {
    this.user.update(user => ({ ...user, age:user.age+1 }))
  }
}
