import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { Test } from './test/test';
import { Todolist } from './todolist/todolist';

@Component({
  selector: 'app-root',
  imports: [Test, Todolist],
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

  random: string | number = 'ronak';

  dataType() {
    const alph = 15;
    console.log('Alph: ', alph);

    this.random = 100;
    console.log('Random: ', this.random);
  }

  withoutSignal = 10;
  withSignal = signal(10);

  counter(value: string) {
    if (value.toLowerCase() == 'dec') {
      this.withSignal.set(this.withSignal() - 1);
      this.withoutSignal - 1;
    } else if (value.toLowerCase() == 'inc') {
      this.withSignal.set(this.withSignal() + 1);
      this.withoutSignal + 1;
    }

    console.log(this.withSignal());
    console.log(this.withoutSignal);
  }

  demo = signal<number>(10);
  country = signal<String | Number>('Australia');

  // Writeable Signal
  state: WritableSignal<string> = signal('Sydney');

  // Computed Signal
  // city = computed(() => this.country() + ' - ' + this.state());
  countryState: Signal<string> = computed(() => this.country() + ' - ' + this.state());

  updateCount() {
    this.demo.update((val) => val + 1);
  }

  updateSignal() {
    this.country.set('India');
    this.state.set('Goa');
    // this.city.set('Ahmedabad'); Read-Only - Can't Update Computed Signal
  }

  // Effect Signal
  userName = signal('Ronak');
  count = signal(0);
  displayHeader = false;

  constructor() {
    effect(() => {
      console.log(this.userName);

      if (this.count() == 2) {
        this.displayHeader = true;
        setTimeout(() => {
          this.displayHeader = false;
        }, 2000);
      } else {
        this.displayHeader = false;
      }
    });
  }

  // If | Else and Switch
  display = false;
  color = 'black';

  toggle() {
    this.display = !this.display;
  }

  handleEvent(event: Event) {
    this.color = (event.target as HTMLInputElement).value;
  }
}
