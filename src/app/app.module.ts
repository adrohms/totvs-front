import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './layout/home/home.component';

@NgModule({
  declarations: [
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot({ prefix: 'totvs', separator: '-', caseSensitive: true }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-top-right'
    }),
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true, // Set to true to allow multiple interceptors
    },
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
