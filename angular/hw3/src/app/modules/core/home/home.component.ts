import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from '../../../interfaces/pokemon.interface.ts';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private starterPokemon: string[] = [
    'Bulbasaur',
    'Squirtle',
    'Charmander',
    'pikachu',
  ];
  constructor(private pokemonService: PokemonService) {}

  private pokemons: PokemonResponse[] = [];
  public showedPokemons: PokemonResponse[] = [];
  public showPokemons: PokemonResponse[] = [];
  public pokemon: PokemonResponse;
  ngOnInit() {
    this.pokemonService.pokemons$.subscribe((data) => {
      this.pokemons = data;
      this.showedPokemons = this.pokemons;
    });
    this.starterPokemon.forEach((item) => {
      this.pokemonService.getPokemons(item).subscribe();
    });
  }

  selectPokemon(selectedPokemon: PokemonResponse) {
    this.pokemon = selectedPokemon;
  }

  choosePokemon(chosenPokemon: PokemonResponse) {
    this.showedPokemons = [chosenPokemon];
  }

  recoverPokemon() {
    this.showedPokemons = [...this.pokemons];
  }
}
