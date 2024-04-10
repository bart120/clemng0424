import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariableListComponent } from './variable-list/variable-list.component';
import { VariableAddComponent } from './variable-add/variable-add.component';
import { VariableDetailComponent } from './variable-detail/variable-detail.component';
import { VariableComponent } from './variable/variable.component';
import { RouterModule } from '@angular/router';
import { VariableRoutingModule } from './variable-routing.module';
import { MaterialFormModule } from '../../core/material-form.module';
import { MaterialModule } from '../../core/material.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    VariableListComponent,
    VariableAddComponent,
    VariableDetailComponent,
    VariableComponent,

  ],
  imports: [
    CommonModule,
    VariableRoutingModule,
    MaterialModule,
    MaterialFormModule,
    ReactiveFormsModule
  ]
})
export class VariableModule { }
