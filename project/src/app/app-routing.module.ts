import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayGameComponent } from './play-game/play-game.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { GamesComponent } from './users-admin/games/games.component';
import { TopscoresComponent } from './users-admin/topscores/topscores.component';
import { AddUserComponent } from './users-admin/add-user/add-user.component';
import { LoginComponent } from './login/login.component';

import { AuthenticationGuard } from './authentication.guard';

const appRoutes: Routes = [
  { path: 'playgame', component: PlayGameComponent, canActivate:[AuthenticationGuard] },
  { path: 'admin', component: UsersAdminComponent },
  { path: 'games', component: GamesComponent, canActivate:[AuthenticationGuard] },
  { path: 'adduser', component: AddUserComponent },
  { path: 'topscores/games/:id', component: TopscoresComponent, canActivate:[AuthenticationGuard] },
  { path: 'login', component: LoginComponent } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
