// store/index.ts

import { ActionReducerMap } from '@ngrx/store';
import { CartItem } from './cart-item.model';
import { cartReducer } from './cart.reducer';

export interface AppState {
  cart: CartItem[];
}

export const reducers: ActionReducerMap<AppState> = {
  cart: cartReducer,
};
