import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemosComponent } from './pokemos/pokemos.component';
import { InfoPokemonComponent } from './info-pokemon/info-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemosComponent,
    InfoPokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
