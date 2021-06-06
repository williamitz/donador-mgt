import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameNavbarComponent } from './game-navbar/game-navbar.component';
import { GameFooterComponent } from './game-footer/game-footer.component';

@NgModule({
  declarations: [
    GameNavbarComponent,
    GameFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameNavbarComponent,
    GameFooterComponent
  ],
  providers: [
  ],
})
export class GameComponentsModule {}
