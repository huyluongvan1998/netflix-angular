import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SpinnerService } from 'src/app/shared/interceptor/interceptor-loader/spinner.service';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { IAnimationMovie } from './../../shared/interface/movie.interface';

@Component({
  selector: 'app-movie-billboard',
  templateUrl: './movie-billboard.component.html',
  styleUrls: ['./movie-billboard.component.scss'],
})
export class MovieBillboardComponent implements OnChanges {
  @Input() movieList: IAnimationMovie[] = [];
  billboardMovie?: IAnimationMovie;
  LIST_LENGTH = 20;
  IMG_SIZE: string = 'w1280';
  isLoading: boolean = false;
  constructor(
    private moviesService: MoviesService,
    private spinnerService: SpinnerService
  ) {}
  billboardImageUrl: string = '';

  renderImage(path: string | null | undefined): string {
    return `url(${this.moviesService.getUrlImage(path, this.IMG_SIZE)})`;
  }

  ngOnInit() {
    this.spinnerService.isLoading.subscribe(
      (loading) => (this.isLoading = loading)
    );
  }

  getBillboardMovie = () => {
    console.log(this.movieList);
    if (this.movieList?.length > 0) {
      this.billboardMovie = this.movieList[
        Math.floor(Math.random() * (this.LIST_LENGTH - 1))
      ];
      this.billboardImageUrl = this.renderImage(
        this.billboardMovie.backdrop_path
      );
    }
  };

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes ', changes);
    if (this.movieList.length > 0) {
      this.getBillboardMovie();
      console.log('run bitch run', this.billboardImageUrl);
    }
    return;
  }
}
