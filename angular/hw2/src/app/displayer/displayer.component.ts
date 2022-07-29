import { Component, Input, OnInit } from '@angular/core';
import { CardInterface } from '../interfaces';

@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.css'],
})
export class DisplayerComponent implements OnInit {
  @Input() card: CardInterface;
  constructor() {}

  ngOnInit() {}
}
