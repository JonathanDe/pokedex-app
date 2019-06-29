import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _pokemon;
  constructor() { }

  public get pokemon(){
    return this._pokemon;
  }

  public set pokemon(_pokemon) {
    this._pokemon = _pokemon;
  }
}
