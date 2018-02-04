import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { RoleActions, RoleActionTypes } from '../actions/role.actions';

@Injectable()
export class RoleEffects {
  @Effect() effect$ = this.actions$.ofType(RoleActionTypes.RoleAction);

  constructor(private actions$: Actions) {}
}
