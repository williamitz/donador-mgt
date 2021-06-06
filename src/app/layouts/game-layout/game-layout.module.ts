import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../pages/gamePages/home/home.component';
import { HistoryComponent } from '../../pages/gamePages/history/history.component';
import { RouterModule } from '@angular/router';
import { GAME_ROUTES } from './game-layout.routes';
import { GameComponentsModule } from '../../components/game-components.module';

@NgModule({
  declarations: [
    HomeComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    GameComponentsModule,
    RouterModule.forChild( GAME_ROUTES )
  ],
  exports: [],
  providers: [],
})
export class GameLayoutModule {}
