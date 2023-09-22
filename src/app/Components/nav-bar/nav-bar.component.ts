import { Component } from '@angular/core';
import { SearchPokeService } from 'src/app/Services/Search/search-poke.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  pokemonNameShearch: string = '';

  constructor(private searchPokeService: SearchPokeService){}

  onChange(){
    this.searchPokeService.changeString(this.pokemonNameShearch);
  }

}
