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
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  @Input() pokemons: PokemonResponse[];
  @Output() recoverPokemon = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  @HostListener('click')
  onClick() {
    this.recoverPokemon.emit();
  }
}
