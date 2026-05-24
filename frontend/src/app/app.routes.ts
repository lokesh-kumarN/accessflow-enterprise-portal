import { Routes } from '@angular/router';

import { Login } from './modules/auth/login/login';
import { DashboardHome } from './modules/dashboard/dashboard-home/dashboard-home';

export const routes: Routes = [

  {
    path: '',
    component: Login
  },

  {
    path: 'dashboard',
    component: DashboardHome
  }

];