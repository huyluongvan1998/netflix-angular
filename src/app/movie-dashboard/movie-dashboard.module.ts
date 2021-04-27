import { MovieDashboardComponent } from './movie-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDashboardRoutingModule } from './movie-dashboard.routing.module';

@NgModule({
  declarations: [MovieDashboardComponent],
  imports: [MovieDashboardRoutingModule],
})
export class MovieDashboardModule {}
