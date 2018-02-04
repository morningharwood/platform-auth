import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { CarouselActions, CarouselActionTypes } from '../actions/carousel.actions';
import { Carousel } from '../model/carousel.model';

export interface State extends EntityState<Carousel> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Carousel> = createEntityAdapter<Carousel>();

export const initialState: State = adapter.getInitialState({
  ids: ['0000', '0001', '0002'],
  entities: {
    '0000': {
      id: '0000',
      value: 'Guest',
      viewValue: 'Guest'
    },
    '0001': {
      id: '0001',
      value: 'Publisher',
      viewValue: 'Publisher'
    },
    '0002': {
      id: '0002',
      value: 'Admin',
      viewValue: 'Admin'
    }
  }
});

export function reducer(state = initialState, action: CarouselActions): State {
  switch (action.type) {
    case CarouselActionTypes.AddCarousel: {
      return adapter.addOne(action.payload.carousel, state);
    }

    case CarouselActionTypes.AddCarousels: {
      return adapter.addMany(action.payload.carousels, state);
    }

    case CarouselActionTypes.UpdateCarousel: {
      return adapter.updateOne(action.payload.carousel, state);
    }

    case CarouselActionTypes.UpdateCarousels: {
      return adapter.updateMany(action.payload.carousels, state);
    }

    case CarouselActionTypes.DeleteCarousel: {
      return adapter.removeOne(action.payload.id, state);
    }

    case CarouselActionTypes.DeleteCarousels: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case CarouselActionTypes.LoadCarousels: {
      return adapter.addAll(action.payload.carousels, state);
    }

    case CarouselActionTypes.ClearCarousels: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const getState = createFeatureSelector<State>('carousel');
export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors(getState);
