import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RoleItemComponent } from './role/components/role-item/role-item.component';

import { MasterComponent } from './role/containers/master/master.component';
import { RoleEffects } from './role/effects/role.effects';
import * as fromRole
  from './role/reducers/role.reducer';


@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    
    StoreModule.forFeature('role', fromRole.reducer),
    EffectsModule.forFeature([ RoleEffects ]),
  ],
  declarations: [
    MasterComponent,
    RoleItemComponent,
  ],
  exports: [
    MasterComponent,
    RoleItemComponent,
  ],
})
export class RoleModule {}
