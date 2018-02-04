import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  @Input() users: User[];
  @Input() carousels: User[];
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

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
}
