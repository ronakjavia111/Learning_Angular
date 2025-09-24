import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './test/test';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test],
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
