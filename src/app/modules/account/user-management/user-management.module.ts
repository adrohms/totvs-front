
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserManagementComponent } from './user-list/user-management.component';
import { userManagementRoute } from './user-management.routing';
import { UserManagementDetailComponent } from './user-detail/user-management-detail.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userManagementRoute)
  ],
  declarations: [
    UserManagementComponent,
    UserManagementDetailComponent
  ],
})
export class UserManagementModule {}
