import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AUTH_ROUTES } from './auth-layout.routes';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../pages/authPages/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AUTH_ROUTES)
  ],
  exports: [],
  providers: [],
})
export class AuthLayoutModule {}
