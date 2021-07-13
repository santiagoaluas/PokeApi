import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-pokemon',
  templateUrl: './info-pokemon.component.html',
  styleUrls: ['./info-pokemon.component.css']
})
export class InfoPokemonComponent implements OnInit {
  @Input() pokemon: any ;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.pokemon)
  }

}
