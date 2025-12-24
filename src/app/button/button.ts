import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
 label = input<string>();
 clicked = output<string>();

 onClick(){
  console.log('Card Button Clicked (Child)');
  this.clicked.emit("Button Clicked Successfully")
 }
}
