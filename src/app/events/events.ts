import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  count = signal(0);
  increment() {
    this.count.update((c) => c + 1);
  }

  showEvent(e: any) {
    console.log(e);
  }

  username = '';
  updateUser(value: string) {
    this.username = value;
  }

  handleSubmit(e: any) {
    e.preventDefault();
    console.log('Form Submitted');
  }

}
