import { Component, OnInit } from '@angular/core';
import { Carousel } from '@morningharwood/good-morning-ui';
import { selectAll } from '@morningharwood/good-morning-ui';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from './reducers';
import { UpdateUser } from './user/actions/user.actions';
import { User } from './user/model/user.model';
import * as fromUser from './user/reducers/user.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public carouselObs: Observable<Carousel[]>;
  public usersObs: Observable<User[]>;

  constructor(private store: Store<State>) {
    this.carouselObs = this.store.pipe(select(selectAll));
    this.usersObs = store.pipe(select(fromUser.selectAll));
  }

  ngOnInit() {}

  public updateUser(event) {
    this.store.dispatch(new UpdateUser(event));
  }
}
