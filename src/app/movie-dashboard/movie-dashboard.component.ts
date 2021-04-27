import { Component, OnInit, SimpleChanges } from '@angular/core';

import { IMovie, IMovieList } from './../shared/interface/movie.interface';
import { IConfig } from './../shared/interface/config.interface';
import { ConfigureService } from './../shared/services/configure.service';
import { SpinnerService } from '../shared/interceptor/interceptor-loader/spinner.service';
import { MoviesService } from '../shared/services/movies.service';
import { environment } from 'src/environments/environment';

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
  isLoading?: any;
  configList?: IConfig;
  moviesList: IMovieList[] = [];
  movieDetailsList: IMovie[] = [];

  //CONSTANT FOR IMG
  IMG_SIZE: string = '';

  renderImage(path: string | null): string {
    let IMG_URL = `${environment.API_IMAGE}/${path}`;
    return IMG_URL;
  }

  getMovieDetails = (movies: IMovieList[]): IMovie[] => {
    movies.map((m) =>
      this._MoviesService
        .getMovieDetails(m.id)
        .subscribe((c) => this.movieDetailsList.push(c))
    );

    return this.movieDetailsList;
  };

  ngOnInit() {
    //get config
    this.configureService.getConfigure().subscribe((c) => {
      this.IMG_SIZE = c.images.backdrop_sizes[0];
      this.configList = c;
    });
    //get article
    this._MoviesService.getMovies().subscribe((m) => {
      this.moviesList = m.results.slice(0, 15);
      this.moviesList.filter((m) => m.adult === false);
      this.getMovieDetails(this.moviesList);
    });
  }
  ngAfterContentChecked() {
    this.movieDetailsList.forEach((m) => this.renderImage(m.poster_path));
  }
}
