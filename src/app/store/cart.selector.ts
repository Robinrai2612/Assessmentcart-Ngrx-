// store/cart.selectors.ts

import { createSelector } from '@ngrx/store';
import { AppState } from './index';

export const selectCartItems = createSelector(
  (state: AppState) => state.cart,
  (cartItems) => cartItems
);
