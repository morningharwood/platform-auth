import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
} from '@ngrx/effects';
import {
  UserActionTypes,
} from '../actions/user.actions';


@Injectable()
export class UserEffects {
  // @Effect() effect$ = this.actions$.ofType(UserActionTypes.AddUser);
  
  constructor(private actions$: Actions) {
  }
}
