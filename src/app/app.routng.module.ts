import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { GameLayoutComponent } from './layouts/game-layout/game-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { TokenGuard } from './guards/token.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: GameLayoutComponent },
  { path: 'game',
    // pathMatch: 'full',
    // canLoad: [TokenGuard, AuthGuard],
    component: GameLayoutComponent,
    loadChildren: () => import('./layouts/game-layout/game-layout.module').then(m => m.GameLayoutModule)
  },
  { path: 'auth',
    // pathMatch: 'full',
    // canLoad: [TokenGuard, AuthGuard],
    component: AuthLayoutComponent,
    loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
  },
  { path: '**', component: GameLayoutComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
