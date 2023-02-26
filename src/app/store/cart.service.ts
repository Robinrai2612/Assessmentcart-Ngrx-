// cart.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from './cart-item.model';
import { CartStore } from './cart.store';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  removeFromCart(item: CartItem) {
    throw new Error('Method not implemented.');
  }
  addToCart(item: CartItem) {
    throw new Error('Method not implemented.');
  }
  constructor(private cartStore: CartStore) {}

  getItems(): Observable<CartItem[]> {
    return this.cartStore.getItems();
  }

  addItem(item: CartItem): void {
    this.cartStore.addItem(item);
  }

  removeItem(item: CartItem): void {
    this.cartStore.removeItem(item);
  }

  getTotal(): Observable<number> {
    return this.cartStore.getTotal();
  }

  clearCart(): void {
    this.cartStore.clearCart();
  }
}
