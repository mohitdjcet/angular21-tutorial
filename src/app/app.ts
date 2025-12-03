import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  handleClick() {
    console.log('Button clicked!');
  }

  onTyping(event: any){
    console.log("Typed", event.target.value);
  }

  onKeyUp(event: any){
    console.log("Key Up Event", event.key);
  }

  onHover(){
    console.log("Hover Event");
  }

  onLeave(){
    console.log("Leave Event");
  }

  onBlur(){
    console.log("Blur Event");
  }

  onFocus(){
    console.log("Focus Event");
  }
}
