import { IMovie } from './../interface/movie.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { IMovieChanges } from 'src/app/shared/interface/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  moviesList = new BehaviorSubject(<any>{});
  tvsList = new BehaviorSubject(<any>{});

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
  getMovieDetails = (id: number): Observable<IMovie> => {
    const url = `${environment.API_ENDPOINT}/movie/${id}`;
    return this._httpClient.get<IMovie>(url);
  };
}
