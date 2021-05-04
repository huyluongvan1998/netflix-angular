import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MyLoaderComponent } from './component/my-loader/my-loader.component';
import { BackdropComponent } from './component/backdrop/backdrop.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ButtonComponent } from './component/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ShortenOverview } from './pipe/movieOverview.pipe';
@NgModule({
  declarations: [
    MyLoaderComponent,
    BackdropComponent,
    NavbarComponent,
    ButtonComponent,
    ShortenOverview,
  ],
  imports: [MatButtonModule, IvyCarouselModule, NgxSkeletonLoaderModule],
  exports: [
    CommonModule,
    MyLoaderComponent,
    BackdropComponent,
    ButtonComponent,
    NavbarComponent,
    ShortenOverview,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    IvyCarouselModule,
    NgxSkeletonLoaderModule,
  ],
})
export class SharedModule {}
