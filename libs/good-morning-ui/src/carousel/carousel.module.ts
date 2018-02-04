import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './containers/master/master.component';
import { StoreModule } from '@ngrx/store';
import * as fromCarousel from './reducers/carousel.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CarouselEffects } from './effects/carousel.effects';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('carousel', fromCarousel.reducer),
    EffectsModule.forFeature([ CarouselEffects ]),
  ],
  declarations: [ MasterComponent ],
  exports: [ MasterComponent ],
})
export class CarouselModule {}
