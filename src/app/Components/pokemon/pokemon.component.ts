import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/Model/pokemon.model';

import { PokemonService } from 'src/app/Services/Pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: Pokemon = {
    name: '',
    url: ''
  }

  imgUrl: string | null = ''

  constructor( private pokemonService: PokemonService){}

  ngOnInit(): void {

    this.pokemonService.getImage(this.pokemon.url).subscribe(data =>{
      this.imgUrl = (data.sprites.front_default);
    });

  }

}
