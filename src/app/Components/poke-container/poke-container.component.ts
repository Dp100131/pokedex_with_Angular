import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/Model/pokemon.model';
import { PokemonService } from 'src/app/Services/Pokemon/pokemon.service';
import { SearchPokeService } from 'src/app/Services/Search/search-poke.service';

@Component({
  selector: 'app-poke-container',
  templateUrl: './poke-container.component.html',
  styleUrls: ['./poke-container.component.css']
})
export class PokeContainerComponent implements OnInit {

  pokemons: Pokemon[] = []

  pokemonsFiltrados: Pokemon[] = []

  constructor(private pokemonService: PokemonService, private searchPokeService: SearchPokeService){}

  ngOnInit(){
    this.pokemonService.getAllPokemon().subscribe(data => {
      console.log(data.results);
      this.pokemons = data.results;
      this.pokemonsFiltrados = data.results;
    });
    this.searchPokeService.shearchString$.subscribe(data => {
      console.log(data)
      if (data && data.trim() !== '') {
        this.pokemonsFiltrados = this.pokemons.filter(obj => obj.name.toLowerCase().includes(data.toLowerCase()));
      } else {
        // Si la cadena de búsqueda está vacía o es null, no aplicamos el filtro.
        this.pokemonsFiltrados = this.pokemons;
      }
    })
  }

}
