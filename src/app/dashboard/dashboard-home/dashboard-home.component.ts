import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  pokemonResults = [];
  searchValue = '';

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getAllPokemons('0','50').subscribe((data)=>{
      this.pokemonResults = data.results;
    });
  }

  searchChaged(searchValue) {
    this.searchValue = searchValue;
  }

}
