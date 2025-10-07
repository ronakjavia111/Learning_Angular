import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from '../interfaces/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<products[]> {
    // const url = 'https://dummyjson.com/products';
    const url = 'http://localhost:3000/posts';
    return this.httpClient.get<products[]>(url);
  }

  addProduct(product: products): Observable<products> {
    // const url = 'https://dummyjson.com/products';
    const url = 'http://localhost:3000/posts';
    return this.httpClient.post<products>(url, product);
  }

  getSelectedProduct(productId: string): Observable<products> {
    // const url = 'https://dummyjson.com/products';
    const url = `http://localhost:3000/posts/${productId}`;
    return this.httpClient.get<products>(url);
  }

  updateProduct(product: products): Observable<products> {
    // const url = 'https://dummyjson.com/products';
    const url = `http://localhost:3000/posts/${product.id}`;
    return this.httpClient.put<products>(url, product);
  }

  deleteProduct(productId: string): Observable<products> {
    // const url = 'https://dummyjson.com/products';
    const url = `http://localhost:3000/posts/${productId}`;
    return this.httpClient.delete<products>(url);
  }
}
