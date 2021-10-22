import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';
import { Product } from './interfaces/product.interface';
import { shoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-products',
  template: `
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <app-product (addToCartClick)="addToCart($event)" [product]="product" *ngFor=" let product of products"></app-product>
      </div>
    </div>      [product]="product"
    *ngFor="let product of products"
  >`,
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  constructor(
    private productSvc: ProductsService,
    private shoppingCartSvc: shoppingCartService
  ) {}

  ngOnInit(): void {
    this.productSvc
      .getProducts()
      .pipe(tap((products: Product[]) => (this.products = products)))
      .subscribe();
  }

  addToCart(product: Product): void {
    this.shoppingCartSvc.updateCart(product);
  }
}
