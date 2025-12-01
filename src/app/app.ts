import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // value = 10;

  // value= "Mohit"

  name: string | number = 20;
  age: number = 28;
  isValid: boolean = true;

  handleClick() {
    let value;
    value = "Mohit Kumar"
    value = 10;
    console.log(value);
  }

  sum(a:number, b:number){
    console.log(a + b);
  }

   count = signal(0);

  updateCount(value: number): void {
    this.count.update(c => c + value);
  }
}
