import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonResponse } from '../../../interfaces/pokemon.interface.ts';

@Component({
  selector: 'app-click-notification',
  templateUrl: './click-notification.component.html',
  styleUrls: ['./click-notification.component.css'],
})
export class ClickNotificationComponent implements OnInit {
  @Input() pokemon: PokemonResponse;
  @Output() clickedNo = new EventEmitter();
  @Output() clickedYes = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  handleNo() {
    this.clickedNo.emit(null);
  }

  handleYes() {
    this.clickedNo.emit(null);
    this.clickedYes.emit(this.pokemon);
  }
}
