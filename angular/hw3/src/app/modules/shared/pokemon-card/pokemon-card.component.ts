import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PokemonResponse } from '../../../interfaces/pokemon.interface.ts';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: PokemonResponse;
  @Output() clickedPokemon = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  @HostListener('click')
  onClick() {
    this.clickedPokemon.emit(this.pokemon);
  }
}
