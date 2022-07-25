import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input() color: string;

  constructor() {
    this.color = '';
  }

  ngOnInit(): void {
    console.log(this.color);
  }
}
