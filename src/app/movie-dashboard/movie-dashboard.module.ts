import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { MovieBillboardComponent } from './movie-billboard/movie-billboard.component';
import { MovieDashboardComponent } from './movie-dashboard.component';
import { MovieDashboardRoutingModule } from './movie-dashboard.routing.module';

@NgModule({
  declarations: [MovieDashboardComponent, MovieBillboardComponent],
  imports: [MovieDashboardRoutingModule, SharedModule],
  exports: [MovieDashboardComponent, MovieBillboardComponent],
})
export class MovieDashboardModule {}
