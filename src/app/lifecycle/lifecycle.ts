import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle {
  name: string = 'default-name';
  @Input() countNumber = 0;

  // Called After ngOnChange on 1st call
  ngOnInit() {
    console.log('OnInit Called: ', this.name);
    this.name = 'OnInit_Name';
  }

  // Called 1st
  constructor() {
    console.log('Contructor Called: ', this.name);
    this.name = 'Constructor_Name';
  }

  // If @Input() exist then called before ngOnInit on 1st call
  ngOnChanges() {
    console.log('OnChanges Called: ', this.name);
  }

  updateName(val: string) {
    this.name = val;
  }

  ngOnDestroy() {
    console.log('OnDestroy Called: ', this.name);
  }
}
