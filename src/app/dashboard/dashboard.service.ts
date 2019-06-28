import { Injectable } from '@angular/core';
import { HttpApiService } from '../core/http-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiUrl = 'https://pokeapi.co/api/v2/';
  pokemon = 'pokemon/';

  constructor(private httpApiService: HttpApiService) { }

  getAllPokemons(offset?:string, limit?:string): Observable<any>{
    const url = `${this.apiUrl}${this.pokemon}?offset=${offset}&limit=${limit}`;
    return this.httpApiService.get(url);
  }

  getPokemonByNameId(nameid: string): Observable<any>{
    const url = `${this.apiUrl}${this.pokemon}${nameid}`;
    return this.httpApiService.get(url);
  }

  getPokemon(url:string) {
    return this.httpApiService.get(url);
  }

}
