import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from 'src/app/Model/pokemon.model';
import { PokemonService
 } from '../Pokemon/pokemon.service';
@Injectable({
  providedIn: 'root'
})
export class SearchPokeService {

  private shearchString = new BehaviorSubject<String>('');

  shearchString$ = this.shearchString.asObservable();

  constructor(){}

  changeString(str: string){
    this.shearchString.next(str);
  }

}
