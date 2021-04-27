import { SpinnerService } from './../../interceptor/interceptor-loader/spinner.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-loader',
  templateUrl: './my-loader.component.html',
  styleUrls: ['./my-loader.component.scss'],
})
export class MyLoaderComponent implements OnInit {
  constructor(private spinnerService: SpinnerService) {}
  @Input() isLoading?: boolean;

  ngOnInit(): void {}
}
