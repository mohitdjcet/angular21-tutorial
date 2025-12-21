import { Component, input, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  // name = input<string>();

  // @Output() notify = new EventEmitter<string>();

  // sendToParent(){
  //   this.notify.emit('Hello Parent (EventEmiter')
  // }
  message = signal('Hello Parent (Signal)');

  updateMessage(){
    this.message.set('Updated from Child Component');
  }
}
