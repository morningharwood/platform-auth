import {
  Component,
  OnInit,
} from '@angular/core';
import { Carousel } from '@morningharwood/good-morning-ui';
import { selectAll } from '@morningharwood/good-morning-ui';
import {
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent implements OnInit {
  private carousel: Observable<Carousel[]>;
  
  constructor(private store: Store<any>) {
    this.carousel = this.store.pipe(select(selectAll));
  }
  
  ngOnInit() {
    this.carousel.subscribe(console.log);
  }
}
