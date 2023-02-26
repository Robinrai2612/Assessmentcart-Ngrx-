// store/cart.actions.ts

import { createAction, props } from '@ngrx/store';
import { CartItem } from './cart-item.model';

export const addToCart = createAction(
  '[Product] Add to Cart',
  props<{ item: CartItem }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove Item',
  props<{ item: CartItem }>()
);
