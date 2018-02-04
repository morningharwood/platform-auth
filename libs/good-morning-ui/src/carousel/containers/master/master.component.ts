import { Component, Input, OnInit } from '@angular/core';
import { Carousel } from '@morningharwood/good-morning-ui';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-carousel-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  @Input() carousel: Carousel;

  constructor() {}

  ngOnInit() {}
}
