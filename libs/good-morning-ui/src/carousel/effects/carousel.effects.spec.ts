import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { CarouselEffects } from './carousel.effects';

describe('CarouselService', () => {
  let actions$: Observable<any>;
  let effects: CarouselEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(CarouselEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
