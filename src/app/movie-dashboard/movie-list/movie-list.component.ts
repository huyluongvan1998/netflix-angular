import { Component, Input, OnInit } from '@angular/core';

import { SpinnerService } from 'src/app/shared/interceptor/interceptor-loader/spinner.service';
import {
  IAnimationMovie,
  IMovie,
} from './../../shared/interface/movie.interface';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Input() movieList: IAnimationMovie[] = [];
  isLoading: boolean = false;
  IMG_SIZE: string = 'w300';
  constructor(
    private spinnerService: SpinnerService,
    private movieService: MoviesService
  ) {}

  renderImage(path: string | null): string {
    return this.movieService.getUrlImage(path, this.IMG_SIZE);
  }

  ngOnInit(): void {
    this.spinnerService.isLoading.subscribe(
      (loading) => (this.isLoading = loading)
    );
  }

  ngOnChanges() {}
}
