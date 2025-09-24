import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Learning_Angular');

  test = 'Demo';

  num1 = 10;
  num2 = 15;

  str1 = 'Angular';
  str2 = 'angular';
}
