import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromRole from './role/reducers/role.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RoleEffects } from './role/effects/role.effects';
import { MasterComponent } from './role/containers/master/master.component';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('role', fromRole.reducer), EffectsModule.forFeature([RoleEffects])],
  declarations: [MasterComponent]
})
export class RoleModule {}
