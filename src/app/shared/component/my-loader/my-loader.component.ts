import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-loader',
  templateUrl: './my-loader.component.html',
  styleUrls: ['./my-loader.component.scss'],
})
export class MyLoaderComponent implements OnInit {
  constructor() {}
  @Input() isLoading?: boolean;

  ngOnInit() {}
}
