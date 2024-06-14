import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientListComponent } from './client-list/client-list.component';
import { crmRouting } from './crm.routing';
import { ClientCreationComponent } from './client-creation/client-creation.component';


@NgModule({
  declarations: [
    ClientListComponent,
    ClientDetailComponent,
    ClientCreationComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(crmRouting)
  ],
})
export class CrmModule { }
