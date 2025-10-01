import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-others',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule],
  templateUrl: './others.html',
  styleUrl: './others.css',
})
export class Others {
  handleClick() {
    alert('Hello, User.');

    this.greetUser();
  }

  greetUser() {
    console.log('Good Morninig.');
  }

  eventHandler(event: Event) {
    console.log('Event Triggered: ', event.type);
  }

  items: Array<string> = ['A', 'B', 'C', 'D', 'E'];

  // ngIf, ngFor, ngSwitch and ngSwitchCase

  check = true;

  users = ['abc', 'def', 'ghi', 'jkl'];
  students = [
    {
      name: 'mno',
      age: 23,
    },
    {
      name: 'pqr',
      age: 33,
    },
    {
      name: 'stu',
      age: 28,
    },
    {
      name: 'vwx',
      age: 30,
    },
  ];

  user = 'Abc';
  car = '';

  changeUser(val: string) {
    this.user = val;
  }

  // Get Set value
  userName: string = '';

  setUserName(val: string) {
    this.userName = val;
  }
}
