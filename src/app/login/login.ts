import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  imageUrl = "https://stimg.cardekho.com/images/carexteriorimages/930x620/Land-Rover/Range-Rover-Velar/12767/1758105499465/front-left-side-47.jpg?impolicy=resize&imwidth=420";
  isDisabled = false;
  username = 'Mohit';
  isActive = false;
  boxWidth = 100;
  bGColor = 'red';
  count = signal(0);
}
