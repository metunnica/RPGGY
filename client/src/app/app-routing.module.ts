import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'static',
    pathMatch: 'full'
  },
  {
    path: 'static',
    loadChildren: './static/static.module#StaticModule'
  },
  {
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule'
  },
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'games',
    loadChildren: './games/games.module#GamesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
