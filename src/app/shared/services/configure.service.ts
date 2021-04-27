import { IConfig } from './../interface/config.interface';
import { Observable, BehaviorSubject, observable } from 'rxjs';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { apiConstant } from 'src/app/shared/constant/api.constant';

@Injectable({
  providedIn: 'root',
})
export class ConfigureService {
  configureList = new BehaviorSubject(<any>{});

  constructor(private httpClient: HttpClient) {}

  getConfigure = () => {
    const params = new HttpParams().set('api_key', apiConstant.API_KEY);

    return this.httpClient.get<IConfig>(
      `${environment.API_ENDPOINT}/configuration`,
      {
        params,
      }
    );
  };
}
