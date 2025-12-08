import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = signal(0); //Signal Created
  val = 20;

  // count.update(c => c + 1); //Signal Updated

  // items.mutate( a => a.push(4) ); //Signal Mutated

  increment(){
    this.count.update(c => c + 1);
  }
  decement(){
    this.count.update(c => c - 1);
  }
  reset(){
    this.count.set(0);
  }
}
