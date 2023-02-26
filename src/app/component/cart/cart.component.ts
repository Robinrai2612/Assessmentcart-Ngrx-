// cart.component.ts

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItems } from 'src/app/store/cart.selector';
import { CartItem } from 'src/app/store/cart-item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<CartItem[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.cartItems$;
  }

  addToCart(item: CartItem): void {
    this.cartItems$;
  }

  removeItem() {
    this.cartItems$;
  }
}
