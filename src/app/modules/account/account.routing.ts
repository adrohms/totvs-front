import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserManagementComponent } from './user-management/user-list/user-management.component';
import { routeAccessGuard } from 'src/app/core/auth/user-route-access.guard';

export const accountRouting: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      pageTitle: 'Login',
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      pageTitle: 'Registrar',
    }
  },
  {
    path: 'gerenciar',
    loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule),
    canActivate: [routeAccessGuard]
  }
];
