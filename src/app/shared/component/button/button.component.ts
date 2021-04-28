import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}
  @Input() text: string = 'Submit';
  @Input() bg_color: string = '#ffffff';
  @Input() color: string = '#000000';
  ngOnInit(): void {}
}
