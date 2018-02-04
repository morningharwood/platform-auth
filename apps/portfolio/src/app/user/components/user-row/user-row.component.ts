import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'mh-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit {
  @Input() user: User;
  @Input() roles: any;

  constructor() {}

  ngOnInit() {}

  public get roleVal() {
    return this.roles.find(role => {
      return role.id === this.user.carId;
    }).viewValue;
  }
}
