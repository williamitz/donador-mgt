import { Routes } from '@angular/router';


// import { PageNotFoundComponent } from './';
import { HomeComponent } from '../../pages/gamePages/home/home.component';

export const GAME_ROUTES: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    // redirectTo: 'home',
    component: HomeComponent
  },
  { path: 'home', component: HomeComponent },
  // { path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

