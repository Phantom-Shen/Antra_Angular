import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewsInterface, newActiveInterface } from '../interfaces/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  @Input() news: NewsInterface;
  @Input() activeIndex: number;
  @Input() activated: boolean;
  @Output() newActive = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  passNewToParent(newActive: newActiveInterface) {
    this.newActive.emit(newActive);
  }
}
