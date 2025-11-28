import { Component } from '@angular/core';
import { Events } from './events/events';
@Component({
  selector: 'app-root',
  imports: [Events],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
