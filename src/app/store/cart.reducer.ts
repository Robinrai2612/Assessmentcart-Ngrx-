// store/cart.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { CartItem } from './cart-item.model';
import { addToCart, removeFromCart } from './cart.actions';

export const initialState: CartItem[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { item }) => [...state, item]),
  on(removeFromCart, (state, { item }) =>
    state.filter((cartItem) => cartItem.id !== item.id)
  )
);
