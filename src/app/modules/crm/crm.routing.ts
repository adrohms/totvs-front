import { Route } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { routeAccessGuard } from 'src/app/core/auth/user-route-access.guard';

export const crmRouting: Route[] = [
  {
    path: '',
    component: ClientListComponent,
    data: {
      authorities: ['USER']
    }
  },
  {
    path: 'client/:id',
    component: ClientDetailComponent,
    data: {
      authorities: ['USER']
    },
    canActivate: [routeAccessGuard]
  }
];
