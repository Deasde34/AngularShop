import { Component } from '@angular/core';
import { shoppingCartService } from 'src/app/pages/products/services/shopping-cart.service';
@Component({
  selector: 'app-cart',
  template: `<ng-container
    *ngIf="{ total: total$ | async, quantity: quantity$ | async }as
    dataCart"
    
  >
    <ng-container *ngIf=" dataCart.total">
      {{dataCart.total|currency}}
     ( {{dataCart.quantity}} )
    </ng-container>
    <mat-icon>add_shopping_cart</mat-icon>
  </ng-container>`,
})
export class CartComponents {
  quantity$ = this.shoppingCartSvc.QuantityAction$;
  total$ = this.shoppingCartSvc.TotalAction$;
  cart$ = this.shoppingCartSvc.CartAction$;
  constructor(private shoppingCartSvc: shoppingCartService) {}
}
