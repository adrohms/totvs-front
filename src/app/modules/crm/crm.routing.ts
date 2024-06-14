import { Route } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';

export const crmRouting: Route[] = [
  {
    path: '',
    component: ClientListComponent,
    data: {
      pageTitle: 'CRM',
    },
  }
];
