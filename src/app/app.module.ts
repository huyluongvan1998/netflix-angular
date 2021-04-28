import { MovieDashboardModule } from './movie-dashboard/movie-dashboard.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorLoader } from './shared/interceptor/interceptor-loader/interceptor-loader.service';
import { SharedModule } from './shared/shared.module';
import { MoviesService } from './shared/services/movies.service';
import { ConfigureService } from './shared/services/configure.service';
import { SpinnerService } from './shared/interceptor/interceptor-loader/spinner.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut: 3000 }),
    NgbModule,
    SharedModule,
  ],
  providers: [
    MoviesService,
    ConfigureService,
    SpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorLoader, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
