import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CarouselActions, CarouselActionTypes } from '../actions/carousel.actions';

@Injectable()
export class CarouselEffects {
  

  constructor(private actions$: Actions) {}
}
