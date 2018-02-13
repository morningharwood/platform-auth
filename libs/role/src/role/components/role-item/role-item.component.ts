import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';


@Component({
  selector: 'mh-role-item',
  templateUrl: './role-item.component.html',
  styleUrls: [ './role-item.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleItemComponent implements OnInit {
  @Output() public update: EventEmitter<any> = new EventEmitter<any>();
  @Output() public add: EventEmitter<any> = new EventEmitter<any>();
  @Input() public role: any;
  @Input() public index: any;
  public roleForm: FormGroup;
  
  constructor() {
  }
  
  ngOnInit() {
    console.log(this.index);
    this.roleForm = new FormGroup({
      id: new FormControl(this.index++ ),
      type: new FormControl('Admin'),
    });
  }
  
  public onSubmit({ value: { id, type } }: FormGroup) {
    const updateRole = {
      role: {
        id,
        changes: {
          type,
        },
      },
    };
    console.log(updateRole);
    this.update.emit(updateRole);
  }
}
