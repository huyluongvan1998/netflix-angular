import { AfterViewChecked, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService implements OnInit {
  public isLoading = new BehaviorSubject(false);

  ngOnInit() {}
}
