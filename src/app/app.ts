import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = 0;

  handleClick(){
    let abc="Hi there";
    console.log("Button clicked", abc,this.count);
    this.helloWorld();
  }

  helloWorld() {
    console.log("Hello World");
  }
}
