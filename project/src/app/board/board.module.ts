import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { RowComponent } from './row/row.component';
import { CardComponent } from './card/card.component';
import { CardlayoutDirective } from './cardlayout.directive';

@NgModule({
  declarations: [BoardComponent, RowComponent, CardComponent, CardlayoutDirective],
  imports: [
    CommonModule
  ],
  exports: [
      BoardComponent
  ]
})

export class BoardModule {}
