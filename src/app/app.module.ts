import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeContainerComponent } from './Components/poke-container/poke-container.component';
import { PokemonComponent } from './Components/pokemon/pokemon.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ImgComponent } from './img/img.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeContainerComponent,
    PokemonComponent,
    NavBarComponent,
    ImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
