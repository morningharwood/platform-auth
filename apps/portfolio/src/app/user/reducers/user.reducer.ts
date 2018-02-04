import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { User } from '../model/user.model';
import { UserActions, UserActionTypes } from '../actions/user.actions';

import { State as carouselState, reducer as carouselReducer } from '@morningharwood/good-morning-ui';

export interface State extends EntityState<User> {
  // additional entities state properties
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({});

export const initialState: State = adapter.getInitialState({
  ids: ['0', '1'],
  entities: {
    '0': {
      id: '0',
      name: 'Matthew Harwood',
      carId: '0001'
    },
    '1': {
      id: '1',
      name: 'Daisy',
      carId: '0000'
    }
  }
});

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.AddUser: {
      return adapter.addOne(action.payload.user, state);
    }

    case UserActionTypes.AddUsers: {
      return adapter.addMany(action.payload.users, state);
    }

    case UserActionTypes.UpdateUser: {
      console.log(action.payload, state, adapter.updateOne(action.payload.user, state));
      return adapter.updateOne(action.payload.user, state);
    }

    case UserActionTypes.UpdateUsers: {
      return adapter.updateMany(action.payload.users, state);
    }

    case UserActionTypes.DeleteUser: {
      return adapter.removeOne(action.payload.id, state);
    }

    case UserActionTypes.DeleteUsers: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case UserActionTypes.LoadUsers: {
      return adapter.addAll(action.payload.users, state);
    }

    case UserActionTypes.ClearUsers: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const getState = createFeatureSelector<State>('user');
export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors(getState);
