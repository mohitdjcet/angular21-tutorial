import { Component } from '@angular/core';
import { Card } from './card/card';
@Component({
  selector: 'app-root',
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
