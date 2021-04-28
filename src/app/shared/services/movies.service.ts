import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IMovie, IAnimationMovie } from './../interface/movie.interface';
import { environment } from 'src/environments/environment';
import { IMovieChanges } from 'src/app/shared/interface/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  moviesList = new BehaviorSubject(<any>{});
  tvsList = new BehaviorSubject(<any>{});
  billboardMovie = new BehaviorSubject(<IAnimationMovie>{});
  constructor(private _httpClient: HttpClient) {}
  getMovies = () => {
    const params = new HttpParams().set('page', '1');
    const url = `${environment.API_ENDPOINT}/movie/changes`;
    return this._httpClient.get<IMovieChanges>(url, { params });
  };

  getTv = () => {
    const url = `${environment.API_ENDPOINT}/tv/changes`;
    const params = new HttpParams().set('page', '1');
    this._httpClient
      .get(url, { params })
      .subscribe((s) => this.tvsList.next(s));
  };

  getMovieDetailService = (id: number): Observable<IMovie> => {
    const url = `${environment.API_ENDPOINT}/movie/${id}`;
    return this._httpClient.get<IMovie>(url);
  };

  getAnimationList = (): Observable<IMovieChanges> => {
    const params = new HttpParams()
      .set('language', 'en-US')
      .set('sort_by', 'popularity.desc')
      .set('include_adult', 'false')
      .set('include_video', 'false');
    const url = `${environment.API_ENDPOINT}/discover/movie`;

    return this._httpClient.get<IMovieChanges>(url, { params });
  };

  getUrlImage = (path: string | null | undefined, IMG_SIZE: string): string => {
    let IMG_URL = `${environment.API_IMAGE}/${IMG_SIZE + path}`;
    return IMG_URL;
  };
}
