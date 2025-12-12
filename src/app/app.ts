import { Component } from '@angular/core';
import { PipeShortNamePipe } from './pipe/pipe-short-name-pipe';
import { ConvertPipe } from './pipe/convert-pipe';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [PipeShortNamePipe,ConvertPipe,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = "Ravi Kumar"

  usd = 10;
  usdToInr= 86;
}
