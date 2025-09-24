import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  handleClick() {
    alert('Hello, User.');

    this.greetUser();
  }

  greetUser() {
    console.log('Good Morninig.');
  }

  eventHandler(event:Event){
    console.log("Event Triggered: ", event.type);
  }
}
