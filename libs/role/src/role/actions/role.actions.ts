import { Action } from '@ngrx/store';

export enum RoleActionTypes {
  RoleAction = '[Role] Action'
}

export class Role implements Action {
  readonly type = RoleActionTypes.RoleAction;
}

export type RoleActions = Role;
