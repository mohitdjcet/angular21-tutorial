import { Component, effect, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // count = signal(0);

  // constructor(){
  //   effect(()=>{
  //     console.log("count Value:", this.count())
  //   });
  // }

  // increment(){
  //   this.count.update(c => c + 1);
  // }

  // isDarkMode = signal(false);

  // constructor(){
  //   effect(()=>{
  //     if(this.isDarkMode()){
  //       document.body.style.backgroundColor = 'black';
  //       document.body.style.color = 'white';
  //     }
  //     else{
  //       document.body.style.backgroundColor = 'white';
  //       document.body.style.color = 'black';
  //     }
  //   });
  // }

  // toggle(){
  //   this.isDarkMode.update(mode => !mode);
  // }

  message = signal("");

  constructor(){
    effect(()=>{
      if(this.message()){
        setTimeout(() => {
          this.message.set("");
        }, 2000);
      }
    });
  }

  showMessage(){
    this.message.set("Hello, this is a temporary message!");
  }
}
