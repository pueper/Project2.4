import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayGameComponent } from './play-game/play-game.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { GamesComponent } from './users-admin/games/games.component';
import { TopscoresComponent } from './users-admin/topscores/topscores.component';
import { AddUserComponent } from './users-admin/add-user/add-user.component';
import { LoginComponent } from './login/login.component';

import { AuthenticationGuard } from './authentication.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'playgame', component: PlayGameComponent },
  { path: 'admin', component: UsersAdminComponent },
  { path: 'games', component: GamesComponent, canActivate:[AuthenticationGuard] },
  { path: 'adduser', component: AddUserComponent },
  { path: 'topscores/games/:id', component: TopscoresComponent, canActivate:[AuthenticationGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/admin', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
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
