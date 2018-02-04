import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, GoodMorningUiModule } from '@morningharwood/good-morning-ui';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import { MasterComponent } from './containers/master/master.component';
import { UserRowComponent } from './components/user-row/user-row.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('user', fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
    CarouselModule
  ],
  declarations: [MasterComponent, UserRowComponent],
  exports: [MasterComponent]
})
export class UserModule {}
