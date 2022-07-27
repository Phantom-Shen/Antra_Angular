import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-set-color',
  templateUrl: './set-color.component.html',
  styleUrls: ['./set-color.component.css'],
})
export class SetColorComponent implements OnInit {
  @Input() color: string;
  @Input() activeIndex: number;
  @Output() newActive = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  handleClick() {
    this.newActive.emit({
      newColor: this.color,
      newActiveIndex: this.activeIndex,
    });
  }
}
