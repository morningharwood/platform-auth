import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { UserActions, UserActionTypes } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  @Effect() effect$ = this.actions$.ofType(UserActionTypes.UserAction);

  constructor(private actions$: Actions) {}
}
