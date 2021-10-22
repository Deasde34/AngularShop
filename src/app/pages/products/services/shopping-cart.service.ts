import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class shoppingCartService {
  products: Product[] = [];
  private cartSubject = new Subject<Product[]>();
  private totalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();

  get TotalAction$(): Observable<number> {
    return this.totalSubject.asObservable();
  }
  get QuantityAction$(): Observable<number> {
    return this.quantitySubject.asObservable();
  }

  get CartAction$(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  updateCart(product: Product): void {
    this.addToCart(product);
    this.getQuantityProducts();
    this.getTotal();
  }

  private addToCart(product: Product): void {
    this.products.push(product);
    this.cartSubject.next(this.products);
  }
  private getQuantityProducts(): void {
    const quantity = this.products.length;
    this.quantitySubject.next(quantity);
  }

  private getTotal(): void {
    const total = this.products.reduce((acc, prod) => (acc += prod.price), 0);
    this.totalSubject.next(total);
  }
}
