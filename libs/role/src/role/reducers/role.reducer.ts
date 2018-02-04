import { Action } from '@ngrx/store';
import { RoleActions, RoleActionTypes } from '../actions/role.actions';

export interface State {}

export const initialState: State = {};

export function reducer(state = initialState, action: RoleActions): State {
  switch (action.type) {
    case RoleActionTypes.RoleAction:
      return state;

    default:
      return state;
  }
}
