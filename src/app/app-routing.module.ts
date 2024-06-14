
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routeAccessGuard } from './core/auth/user-route-access.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {
      authorities: ['USER','ADMIN']
    },
    canActivate: [routeAccessGuard]
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'crm',
    loadChildren: () => import('./modules/crm/crm.module').then(m => m.CrmModule),
    data: {
      authorities: ['USER','ADMIN']
    },
    canActivate: [routeAccessGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
