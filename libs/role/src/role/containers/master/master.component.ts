import {
  Component,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'mh-role-master',
  templateUrl: './master.component.html',
  styleUrls: [ './master.component.css' ],
})
export class MasterComponent implements OnInit {
  
  constructor(private store: Store<any>) {
  }
  
  ngOnInit() {
  }
  
}
