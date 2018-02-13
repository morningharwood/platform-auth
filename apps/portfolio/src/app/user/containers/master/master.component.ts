import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as fromRole from '@morningharwood/role';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/user.model';
import { State } from '../../reducers/user.reducer';

@Component({
  selector: 'mh-user-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  @Input() users: User[];
  @Input() carousels: User[];
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  private role: Observable<fromRole.Role[]>;

  constructor(private store: Store<State>) {
    this.role = this.store.pipe(select(fromRole.selectAll));
  }

  ngOnInit() {}

  public updateUserRole() {
    const updateUser = {
      user: {
        id: '0',
        changes: {
          carId: '0002'
        }
      }
    };
    this.update.emit(updateUser);
  }

  public updateRole($event: any) {
    this.store.dispatch(new fromRole.UpdateRole($event));
  }

  public addRole($event: any) {
    this.store.dispatch(new fromRole.AddRole($event));
  }
}
