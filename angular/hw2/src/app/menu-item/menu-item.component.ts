import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CardInterface } from '../interfaces';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit {
  @Input() card: CardInterface;
  @Input() selected: boolean;
  @Output() selectedCard = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  @HostListener('click')
  handleClick() {
    this.selectedCard.emit(this.card);
  }
}
