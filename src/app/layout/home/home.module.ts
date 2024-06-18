import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(homeRouting)],
  declarations: [HomeComponent],
})
export class HomeModule {}
