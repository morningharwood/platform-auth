import {
  EntityState,
  EntityAdapter,
  createEntityAdapter,
} from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { Carousel } from '../model/carousel.model';
import {
  CarouselActions,
  CarouselActionTypes,
} from '../actions/carousel.actions';


export interface State extends EntityState<Carousel> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Carousel> = createEntityAdapter<Carousel>();

export const initialState: State = adapter.getInitialState({
  ids: [ '123' ],
  entities: {
    '123': {
      id: '123',
      name: 'Carouselssss',
    },
  },
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
