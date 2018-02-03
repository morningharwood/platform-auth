import { Action } from '@ngrx/store';

export enum CarouselActionTypes {
  CarouselAction = '[Carousel] Action'
}

export class Carousel implements Action {
  readonly type = CarouselActionTypes.CarouselAction;
}

export type CarouselActions = Carousel;
