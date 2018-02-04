import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from '../user/reducers/user.reducer';
import { State as carouselState, reducer as carouselReducer } from '@morningharwood/good-morning-ui';

export interface State {
  user: fromUser.State;
  carousel: carouselState;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
  carousel: carouselReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
