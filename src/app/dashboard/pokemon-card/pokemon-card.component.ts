import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonInfo;
  singleInfo$: Observable<any>;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.singleInfo$ = this.dashboardService.getPokemon(this.pokemonInfo.url);
  }

}
