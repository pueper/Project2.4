import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { FormsModule } from '@angular/forms';
import { ColorsetterComponent } from './colorsetter/colorsetter.component';
import { TopscoresComponent } from './topscores/topscores.component';
import { SettingsComponent } from './settings/settings.component';
import { GemiddeldeComponent } from './gemiddelde/gemiddelde.component';

@NgModule({
  declarations: [SidebarComponent, ColorsetterComponent, TopscoresComponent, SettingsComponent, GemiddeldeComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
      SidebarComponent
    ]
})
export class SidebarModule { }
