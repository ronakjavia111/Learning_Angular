import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datapassing',
  imports: [],
  templateUrl: './datapassing.html',
  styleUrl: './datapassing.css',
})
export class Datapassing {
  // Passing Data from Parent to Child
  @Input() userName: string = '';
  @Input() fruit: string = '';

  // Data from Child to Parent
  @Output() getCities = new EventEmitter();
  @Output() cities = ['Rajkot', 'Ahmedabad', 'Mumbai', 'Jaipur'];

  // printData(){
  //   return this.getCities.emit(this.cities);
  // }
}
