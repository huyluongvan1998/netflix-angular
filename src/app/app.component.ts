import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SpinnerService } from './shared/interceptor/interceptor-loader/spinner.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;
  title = 'clone-netflix';

  constructor(public spinnerService: SpinnerService) {}

  ngOnInit() {
    this.spinnerService.isLoading.subscribe((s) => (this.isLoading = s));
  }
}
