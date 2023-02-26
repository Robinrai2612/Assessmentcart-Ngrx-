// store/cart.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CartService } from './cart.service';
import { addToCart, removeFromCart } from './cart.actions';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  addToCart$ = // createEffect(() =>
    this.actions$.pipe(
      ofType(addToCart),
      switchMap(({ item }) =>
        this.cartService.addToCart(item).pipe(
          map((cartItem) => addToCart({ item: cartItem })),
          catchError((error) => of(console.error(error)))
        )
      )
    );

  removeFromCart$ = //createEffect(() =>
    this.actions$.pipe(
      ofType(removeFromCart),
      switchMap(({ item }) =>
        this.cartService.removeFromCart(item).pipe(
          map(() => removeFromCart({ item })),
          catchError((error) => of(console.error(error)))
        )
      )
    );
}
