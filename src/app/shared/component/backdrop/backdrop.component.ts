import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
})
export class BackdropComponent implements OnInit {
  constructor() {}
  @Input() isLoading?: boolean;

  ngOnInit() {}
}
