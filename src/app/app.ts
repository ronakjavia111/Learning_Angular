import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  ViewChild,
  WritableSignal,
  afterNextRender,
  afterEveryRender,
} from '@angular/core';
import { Routing } from './routing/routing';
import { Lifecycle } from './lifecycle/lifecycle';
import { RouterLink } from '@angular/router';
import { Datapassing } from './datapassing/datapassing';

@Component({
  selector: 'app-root',
  imports: [Routing, Lifecycle, RouterLink, Datapassing],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Learning_Angular');

  countNumber = 0;
  @ViewChild('lifecycle') LifeCycle: any;

  updateCounter() {
    this.countNumber++;
  }

  constructor() {
    afterNextRender(() => {
      // console.log('AfterNextRender Called: ', this.LifeCycle.countNumber);
    });

    afterEveryRender(() => {
      // console.log('AfterEveryRender Called: ', this.countNumber);
    });
  }

  // Dynamic Routing
  users = [
    {
      id: 1,
      name: 'Abc',
    },
    {
      id: 2,
      name: 'Def',
    },
    {
      id: 3,
      name: 'Ghi',
    },
  ];

  // Passing Data from Parent to Child
  // 1
  fullName: string = 'Ronak';

  updateFullName(val: string) {
    this.fullName = val;
  }

  // 2
  fruits = ['Mango', 'Apple', 'Grapes', 'Blueberry', 'Pomegranate'];

  // Passing Data from Child to Parent
  // 1
  fetchedCities: string[] | undefined;

  handleCity(cities: string[]) {
    this.fetchedCities = cities;
  }
}
