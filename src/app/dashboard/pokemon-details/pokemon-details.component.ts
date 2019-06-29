import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  public pokemon;
  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
    this.pokemon = this.pokemonService.pokemon;
    if (!this.pokemon){
      this.router.navigate(['/dashboard']);
    }
  }

  goBack(){
    this.router.navigate(['/dashboard']);
  }

}
