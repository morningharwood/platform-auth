import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

import {
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FormlyRole } from '../../model/role.model';
import {
  selectAll,
  State,
} from '../../reducers/role.reducer';


@Component({
  selector: 'mh-role-master',
  templateUrl: './master.component.html',
  styleUrls: [ './master.component.css' ],
})
export class MasterComponent implements OnInit {
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  @Output() add: EventEmitter<any> = new EventEmitter<any>();
  public role: Observable<any>;
  
  constructor(private store: Store<State>) {
    this.role = this.store.pipe(select(selectAll));
  }
  
  ngOnInit() {
    this.role.subscribe(console.log);
  }
  
  public onSubmit(event: any) {
    console.log(event);
    this.update.emit(event);
  }
  
  /** TODO: Make these directives */
  public addEvent() {
    this.add.emit({ role: FormlyRole.create2() });
  }
}
