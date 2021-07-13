import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service'
@Component({
  selector: 'app-pokemos',
  templateUrl: './pokemos.component.html',
  styleUrls: ['./pokemos.component.css']
})
export class PokemosComponent implements OnInit {
  public offset = 0
  public cantidadP = 5
  public ListaPokemons :any = []
  public pokemon : any = {
    nombre:"",
    ancho:"",
    alto:"",
    foto:""
  }
  constructor(private RestService: RestService) { }

  ngOnInit(): void {
    this.load_Pokemons()
    this.One_Pokemons()
  }

  public load_Pokemons(){
    const respuesta = this.RestService.GET_POKEMONS(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${this.cantidadP}`)
    .subscribe(respuesta => {
      var resp: any = respuesta;
      this.ListaPokemons = resp.results;
    })

  }

  public load_Siguiente(){
    this.offset = this.offset + this.cantidadP
    const respuesta = this.RestService.GET_POKEMONS(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.cantidadP}`)
    .subscribe(respuesta => {
      var resp: any = respuesta;
      this.ListaPokemons = resp.results;
    })

  }

  public load_antes(){
    if (this.offset === 0){
      this.load_Pokemons()
      
    }else{
      this.offset = this.offset - this.cantidadP
      const respuesta = this.RestService.GET_POKEMONS(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.cantidadP}`)
      .subscribe(respuesta => {
        var resp: any = respuesta;
        this.ListaPokemons = resp.results;
      })
    }
  }

  public One_Pokemons(urlPokemon:string = "https://pokeapi.co/api/v2/pokemon/1/"){
    this.RestService.GET_POKEMONS(urlPokemon)
    .subscribe(respuesta => {
      var resp: any = respuesta;
      this.pokemon.nombre = resp.name;
      this.pokemon.ancho = resp.weight;
      this.pokemon.alto = resp.height;
      this.pokemon.foto = resp.sprites.front_default; 
    })
  }
}
