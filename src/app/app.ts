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
import { Api } from './services/api';
import { products } from './interfaces/iproduct';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Routing, Lifecycle, RouterLink, Datapassing, FormsModule],
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

  // constructor() {
  //   afterNextRender(() => {
  //     console.log('AfterNextRender Called: ', this.LifeCycle.countNumber);
  //   });

  //   afterEveryRender(() => {
  //     console.log('AfterEveryRender Called: ', this.countNumber);
  //   });
  // }

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

  // Service
  // 1: Product
  // constructor(private product: Product) {} // Product == Service Name

  productData:
    | {
        id: number;
        name: string;
        category: string;
        price: string;
      }[]
    | undefined;

  // ngOnInit() {
  // loadData() {
  //   // console.log(this.product.getProductData());
  //   this.productData = this.product.getProductData();
  // }

  // 2: API
  productAPIData: products[] = [];
  selectedProduct: products | undefined;

  constructor(private productAPI: Api) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.productAPI.getProductList().subscribe((data: products[]) => {
      console.log('Get Data List: ', data);
      this.productAPIData = data;
    });
  }

  addProduct(form: NgForm) {
    this.productAPI.addProduct(form.value).subscribe((data: products) => {
      console.log('Added Data: ', data);

      if (data) {
        this.getData();
        form.reset();
      }
    });
  }

  updateProduct(productId: string, form: NgForm) {
    console.log('Update: ', productId);

    this.productAPI.getSelectedProduct(productId).subscribe((data: products) => {
      console.log(data);

      this.selectedProduct = data;

      form.setValue({
        id: data.id,
        title: data.title,
        views: data.views,
      });
    });
  }

  updateProductDetails(form: NgForm) {
    const productDetails = { ...form.value, id: form.value.id };

    this.productAPI.updateProduct(productDetails).subscribe((data: products) => {
      console.log('Updated Data: ', data);

      if (data) {
        this.getData();
        form.reset();
      }
    });
  }

  deleteProduct(productId: string) {
    this.productAPI.deleteProduct(productId).subscribe((data: products) => {
      console.log('Deleted Data: ', data);

      if (data) {
        this.getData();
      }
    });
  }
}
