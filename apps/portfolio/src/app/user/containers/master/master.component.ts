import { Component, OnInit } from '@angular/core';
import { Dictionary } from '@ngrx/entity/src/models';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AddUser } from '../../actions/user.actions';
import { User } from '../../model/user.model';
import * as entity from '../../reducers/user.reducer';

@Component({
  selector: 'app-user-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  public usersObs: Observable<User[]>;

  constructor(private store: Store<any>) {
    this.usersObs = store.pipe(select(entity.selectAll));
  }

  ngOnInit() {
    this.usersObs.subscribe(console.log);
  }

  addUser() {
    const user = {
      user: {
        id: new Date().getUTCMilliseconds().toString(),
        name: 'matthew'
      }
    };

    this.store.dispatch(new AddUser(user));
  }
}
