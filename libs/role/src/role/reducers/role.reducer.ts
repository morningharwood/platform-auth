import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { RoleActions, RoleActionTypes } from '../actions/role.actions';
import { FormlyRole, Role } from '../model/role.model';

export interface State extends EntityState<Role> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Role> = createEntityAdapter<Role>();

export const initialState: State = adapter.getInitialState({
  ids: ['1'],
  entities: {
    '1': FormlyRole.create()
  }
});

export function reducer(state = initialState, action: RoleActions): State {
  console.log('add', action, action.type, state);
  switch (action.type) {
    case RoleActionTypes.AddRole: {
      return adapter.addOne(action.payload.role, state);
    }

    case RoleActionTypes.AddRoles: {
      return adapter.addMany(action.payload.roles, state);
    }

    case RoleActionTypes.UpdateRole: {
      console.log(
        'update',
        action.payload,
        action.type,
        state,
        RoleActionTypes.UpdateRole,
        RoleActionTypes.UpdateRole === action.type
      );
      return adapter.updateOne(action.payload.role, state);
    }

    case RoleActionTypes.UpdateRoles: {
      return adapter.updateMany(action.payload.roles, state);
    }

    case RoleActionTypes.DeleteRole: {
      return adapter.removeOne(action.payload.id, state);
    }

    case RoleActionTypes.DeleteRoles: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case RoleActionTypes.LoadRoles: {
      return adapter.addAll(action.payload.roles, state);
    }

    case RoleActionTypes.ClearRoles: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const getState = createFeatureSelector<State>('role');
export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors(getState);
