import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit, OnChanges {
  @Input() dataInput: any;
  pokemonData: any;
  image;
  pokemonsType: any = [];
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    // const { dataInput } = changes;
    // if (dataInput && dataInput.currentValue) {
    //   this.pokemonData = this.dataInput;
    //   console.log(this.pokemonData);
    // }
  }

  ngOnInit() {
    this.pokemonData = this.dataInput;
    this.getURLPokemonsImage(this.pokemonData.id);
    this.getType();
  }
  getURLPokemonsImage(id) {
    this.image = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
  }
  getType() {
    if (
      this.pokemonData &&
      this.pokemonData.types &&
      this.pokemonData.types.length == 2
    ) {
      let type1 = this.pokemonData.types[0].type.name;
      let type2 = this.pokemonData.types[1].type.name;
      this.pokemonsType.push([type1, type2]);
    } else {
      let type1 = this.pokemonData.types[0].type.name;
      this.pokemonsType.push([type1]);
    }
  }
}
