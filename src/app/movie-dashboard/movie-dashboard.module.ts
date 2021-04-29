import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieBillboardComponent } from './movie-billboard/movie-billboard.component';
import { MovieDashboardComponent } from './movie-dashboard.component';
import { MovieDashboardRoutingModule } from './movie-dashboard.routing.module';

@NgModule({
  declarations: [
    MovieDashboardComponent,
    MovieBillboardComponent,
    MovieListComponent,
  ],
  imports: [MovieDashboardRoutingModule, SharedModule],
  exports: [
    MovieDashboardComponent,
    MovieBillboardComponent,
    MovieListComponent,
  ],
})
export class MovieDashboardModule {}
