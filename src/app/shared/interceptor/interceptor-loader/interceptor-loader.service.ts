import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { apiConstant } from '../../constant/api.constant';
import { SpinnerService } from './spinner.service';

@Injectable()
export class InterceptorLoader implements HttpInterceptor {
  request: HttpRequest<any>[] = [];
  error?: any;
  constructor(
    private _toast: ToastrService,
    private spinnerService: SpinnerService
  ) {}

  removeRequest = (req: HttpRequest<any>) => {
    const i = this.request.indexOf(req);
    if (i >= 0) {
      this.spinnerService.isLoading.next(this.request.length > 0);
      this.request.splice(i, 1);
    }
    setTimeout(() => {
      this.spinnerService.isLoading.next(this.request.length > 0);
    }, 3000);
  };

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //Push req to request arr

    const headers = { 'Content-Type': 'application/json' };
    req = req.clone({
      setHeaders: headers,
      setParams: { api_key: apiConstant.API_KEY },
    });

    this.request.push(req);
    return new Observable((ob) => {
      const subscription = next.handle(req).subscribe(
        (e) => {
          if (e instanceof HttpResponse) {
            ob.next(e);
          }
        },
        (err) => {
          this.removeRequest(req);
          this._toast.error(err.error.status_message);
          ob.error(err);
        },
        () => {
          this.removeRequest(req);
          ob.complete();
        }
      );
      return () => {
        this.removeRequest(req);
        subscription.unsubscribe();
      };
    });
  }
}
