import { Action } from '@ngrx/store';
import { CarouselActions, CarouselActionTypes } from '../actions/carousel.actions';

export interface State {}

export const initialState: State = {};

export function reducer(state = initialState, action: CarouselActions): State {
  switch (action.type) {
    case CarouselActionTypes.CarouselAction:
      return state;

    default:
      return state;
  }
}
