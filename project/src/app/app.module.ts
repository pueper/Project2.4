import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PlayGameComponent } from './play-game/play-game.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { TopscoresComponent } from './users-admin/topscores/topscores.component';

import { CommonModule } from '@angular/common';
import { SidebarModule } from './sidebar/sidebar.module';
import { BoardModule } from './board/board.module';
import { GameinfoModule } from './gameinfo/gameinfo.module';
import { GamesComponent } from './users-admin/games/games.component';
import { AddUserComponent } from './users-admin/add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PlayGameComponent,
    UsersAdminComponent,
    TopscoresComponent,
    GamesComponent,
    AddUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SidebarModule,
    BoardModule,
    GameinfoModule
  ],
  providers: [ {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorInterceptor, multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
