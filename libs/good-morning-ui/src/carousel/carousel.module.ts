import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MasterComponent } from './containers/master/master.component';
import { CarouselEffects } from './effects/carousel.effects';
import * as fromCarousel from './reducers/carousel.reducer';
import { FormlyComponent } from './components/formly/formly.component';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    StoreModule.forFeature('carousel', fromCarousel.reducer),
    EffectsModule.forFeature([CarouselEffects])
  ],
  declarations: [MasterComponent, FormlyComponent],
  exports: [MasterComponent]
})
export class CarouselModule {}
