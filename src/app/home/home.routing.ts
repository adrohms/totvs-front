import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const homeRouting: Route[] = [
  {
    path: '',
    component: HomeComponent,
    data: {
      pageTitle: 'totvs Gerenciamento',
    },
  }
];
