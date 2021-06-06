import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';

@NgModule({
  declarations: [
    AdminNavbarComponent,
    AdminSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdminNavbarComponent,
    AdminSidebarComponent
  ],
  providers: [],
})
export class AdminComponentsModule {}
