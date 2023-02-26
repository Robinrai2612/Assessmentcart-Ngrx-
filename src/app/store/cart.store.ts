// cart.store.ts

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '.';
import { CartItem } from './cart-item.model';
import { addToCart, removeFromCart } from './cart.actions';

@Injectable({
  providedIn: 'root',
})
export class CartStore {
  constructor(private store: Store<AppState>) {}

  getItems(): Observable<CartItem[]> {
    return this.store.select((state) => state.cart.items);
  }

  addItem(item: CartItem): void {
    this.store.dispatch(new addToCart(item));
  }

  removeItem(item: CartItem): void {
    this.store.dispatch(new removeFromCart(item));
  }

  getTotal(): Observable<number> {
    return this.store.select((state) => state.cart.total);
  }

  clearCart(): void {
    this.store.dispatch(new ClearCart());
  }
}
