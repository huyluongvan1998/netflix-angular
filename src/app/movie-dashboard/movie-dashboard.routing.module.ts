import { MovieBillboardComponent } from './movie-billboard/movie-billboard.component';
import { MovieDashboardComponent } from './movie-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MovieDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDashboardRoutingModule {}
