import { Routes } from '@angular/router';

// import { PageNotFoundComponent } from './';
import { LoginComponent } from 'src/app/pages/authPages/login/login.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    // redirectTo: 'login',
    component: LoginComponent
  },
  { path: 'login', component: LoginComponent },
  // { path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

