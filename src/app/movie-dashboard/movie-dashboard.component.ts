import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import {
  IMovie,
  IMovieList,
  IAnimationMovie,
} from '../shared/interface/movie.interface';
import { IConfig } from '../shared/interface/config.interface';
import { ConfigureService } from '../shared/services/configure.service';
import { SpinnerService } from '../shared/interceptor/interceptor-loader/spinner.service';
import { MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss'],
})
export class MovieDashboardComponent implements OnInit {
  constructor(
    private _MoviesService: MoviesService,
    public spinnerService: SpinnerService,
    private configureService: ConfigureService
  ) {}
  isLoading?: boolean;
  configList?: IConfig;
  moviesList: IMovieList[] = [];
  movieDetailsList: IMovie[] = [];
  animationMovieList: IAnimationMovie[] = [];
  //CONSTANT FOR IMG
  IMG_SIZE: string = 'w300';

  renderImage(path: string): string {
    return this._MoviesService.getUrlImage(path, this.IMG_SIZE);
  }

  getMovieDetails = (movies: IMovieList[]): IMovie[] => {
    movies.forEach((m) =>
      this._MoviesService.getMovieDetailService(m.id).subscribe((c) => {
        c.backdrop_path !== null && this.movieDetailsList.push(c);
      })
    );

    return this.movieDetailsList;
  };

  ngOnInit() {
    //get config
    this.spinnerService.isLoading.subscribe(
      (loading) => (this.isLoading = loading)
    );
    this.configureService.getConfigure().subscribe((c) => {
      this.IMG_SIZE = c.images.backdrop_sizes[0];
      this.configList = c;
    });
    //get animation
    this._MoviesService
      .getAnimationList()
      .subscribe((c) => (this.animationMovieList = c.results));
    //get article
    this._MoviesService.getMovies().subscribe((m) => {
      this.moviesList = m.results.slice(0, 104);
      let filterMovieList = this.moviesList.filter(
        (m) => !m.adult && m.adult !== null
      );
      this.getMovieDetails(filterMovieList);
    });
  }
}
