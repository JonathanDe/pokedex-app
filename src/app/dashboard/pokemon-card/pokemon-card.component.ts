import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonInfo;
  singleInfo$: Observable<any>;
  constructor(
    private dashboardService: DashboardService,
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.singleInfo$ = this.dashboardService.getPokemon(this.pokemonInfo.url);
  }

  viewDetails(pokemon) {
    this.pokemonService.pokemon = pokemon;
    this.router.navigate(['/pokemon']);
    console.log(pokemon);
  }
}
