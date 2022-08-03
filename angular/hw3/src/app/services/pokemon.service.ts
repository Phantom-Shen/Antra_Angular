import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon.interface.ts';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private path: string = 'https://pokeapi.co/api/v2/pokemon';
  private pokemons: PokemonResponse[] = [];
  public pokemons$: Subject<PokemonResponse[]> = new Subject();

  constructor(private readonly http: HttpClient) {}

  getPokemons(pokemon: string) {
    pokemon = pokemon.toLowerCase();
    return this.http.get([this.path, pokemon].join('/')).pipe(
      tap((data: PokemonResponse) => {
        this.pokemons = [...this.pokemons, data];
        this.pokemons$.next([...this.pokemons]);
      })
    );
  }
}
