import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Carousel } from '../model/carousel.model';

export enum CarouselActionTypes {
  LoadCarousels = '[Carousel] Load Carousels',
  AddCarousel = '[Carousel] Add Carousel',
  AddCarousels = '[Carousel] Add Carousels',
  UpdateCarousel = '[Carousel] Update Carousel',
  UpdateCarousels = '[Carousel] Update Carousels',
  DeleteCarousel = '[Carousel] Delete Carousel',
  DeleteCarousels = '[Carousel] Delete Carousels',
  ClearCarousels = '[Carousel] Clear Carousels'
}

export class LoadCarousels implements Action {
  readonly type = CarouselActionTypes.LoadCarousels;

  constructor(public payload: { carousels: Carousel[] }) {}
}

export class AddCarousel implements Action {
  readonly type = CarouselActionTypes.AddCarousel;

  constructor(public payload: { carousel: Carousel }) {}
}

export class AddCarousels implements Action {
  readonly type = CarouselActionTypes.AddCarousels;

  constructor(public payload: { carousels: Carousel[] }) {}
}

export class UpdateCarousel implements Action {
  readonly type = CarouselActionTypes.UpdateCarousel;

  constructor(public payload: { carousel: Update<Carousel> }) {}
}

export class UpdateCarousels implements Action {
  readonly type = CarouselActionTypes.UpdateCarousels;

  constructor(public payload: { carousels: Update<Carousel>[] }) {}
}

export class DeleteCarousel implements Action {
  readonly type = CarouselActionTypes.DeleteCarousel;

  constructor(public payload: { id: string }) {}
}

export class DeleteCarousels implements Action {
  readonly type = CarouselActionTypes.DeleteCarousels;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearCarousels implements Action {
  readonly type = CarouselActionTypes.ClearCarousels;
}

export type CarouselActions =
  | LoadCarousels
  | AddCarousel
  | AddCarousels
  | UpdateCarousel
  | UpdateCarousels
  | DeleteCarousel
  | DeleteCarousels
  | ClearCarousels;
