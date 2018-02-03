import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { User } from '../model/user.model';
import { UserActions, UserActionTypes } from '../actions/user.actions';

export interface State extends EntityState<User> {
  // additional entities state properties
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({});

export const initialState: State = adapter.getInitialState({
  ids: ['123'],
  entities: {
    '123': {
      id: '123',
      name: 'Daisy'
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

export const getPizzaState = createFeatureSelector<State>('user'); // holy fuck this is hard to find.
export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors(getPizzaState);
