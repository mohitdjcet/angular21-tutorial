import { Component, computed, effect, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // count = signal(0);
  // name = signal('Angular');

  // setCount(){
  //   this.count.set(2);
  // }

  count = signal(2);
  price = signal(5);
  // doubleCount = computed(() => this.count() * 2);

  total = computed(() => this.count() * this.price());
  constructor(){
    effect(() =>{
      console.log("Total:", this.count());
    })
  }

  upateCount(){
    this.count.update(c => c + 1);
  }

  upatePrice(){
    this.price.update(p => p + 1);
  }

}
