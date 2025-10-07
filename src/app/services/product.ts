import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor() {
    console.log('Service Called.');
  }

  getProductData() {
    return [
      { id: 1, name: 'iPhone 17', category: 'Mobile', price: '$1000' },
      { id: 2, name: 'Samsang S25', category: 'Mobile', price: '$800' },
      { id: 3, name: 'MacBook Pro', category: 'Laptop', price: '$1300' },
    ];
  }
}
