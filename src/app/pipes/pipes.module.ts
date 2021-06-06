import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesPipe } from './roles.pipe';
import { RowIndexPipe } from './row-index.pipe';
import { ColorDinamycPipe } from './color.pipe';
import { MomentPipe } from './moment.pipe';
import { StLotteryPipe } from './status-Lottery.pipe';

@NgModule({
  declarations: [
    RolesPipe,
    RowIndexPipe,
    ColorDinamycPipe,
    MomentPipe,
    StLotteryPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RolesPipe,
    RowIndexPipe,
    ColorDinamycPipe,
    MomentPipe,
    StLotteryPipe
  ],
  providers: [],
})
export class PipesModule {}
