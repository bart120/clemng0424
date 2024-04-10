import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../core/material.module';
import { MaterialFormModule } from '../../core/material-form.module';
//import { AuthenticationService } from '../../core/services/authentication.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MaterialFormModule
  ],
  providers: [
    //AuthenticationService

  ]
})
export class AuthenticationModule { }


