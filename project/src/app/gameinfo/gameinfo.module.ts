import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameinfoComponent } from './gameinfo.component';
import { TimeleftComponent } from './timeleft/timeleft.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [GameinfoComponent, TimeleftComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
      GameinfoComponent
  ]
})
export class GameinfoModule {
}
