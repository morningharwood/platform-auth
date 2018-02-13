import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from '@morningharwood/good-morning-ui';
import { RoleModule } from '@morningharwood/role';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserRowComponent } from './components/user-row/user-row.component';
import { MasterComponent } from './containers/master/master.component';
import { UserEffects } from './effects/user.effects';
import * as fromUser from './reducers/user.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('user', fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
    CarouselModule,
    RoleModule
  ],
  declarations: [MasterComponent, UserRowComponent],
  exports: [MasterComponent]
})
export class UserModule {}
