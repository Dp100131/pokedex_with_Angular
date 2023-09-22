import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {PokemonDetail, PokemonRest} from '../../Model/pokemon.model'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiGetPoke: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100'

  constructor( private http: HttpClient) { }

  getAllPokemon(){
    return this.http.get<PokemonRest>(this.apiGetPoke);
  }

  getImage(url: string){
    return this.http.get<PokemonDetail>(url);
  }

}
