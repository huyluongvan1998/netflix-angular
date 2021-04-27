import { ConfigureService } from './services/configure.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MyLoaderComponent } from './component/my-loader/my-loader.component';
import { BackdropComponent } from './component/backdrop/backdrop.component';
import { MoviesService } from './services/movies.service';
import { SpinnerService } from './interceptor/interceptor-loader/spinner.service';

@NgModule({
  declarations: [MyLoaderComponent, BackdropComponent],
  imports: [HttpClientModule],
  providers: [MoviesService, ConfigureService, SpinnerService],
  exports: [
    CommonModule,
    MyLoaderComponent,
    BackdropComponent,
    HttpClientModule,
  ],
})
export class SharedModule {}
