import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PaginatedPokemon } from '../pokemon';
import { toApiResponse } from '../utils/to-api-response.util';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private readonly httpClient: HttpClient) {}
  getPokemon(
    limit: number,
    offset: number,
    prev: PaginatedPokemon
  ): Observable<{ status: 'loading' | 'success'; data: PaginatedPokemon }> {
    const params = {
      limit: limit.toString(),
      offset: offset.toString(),
    };

    return this.httpClient
      .get<PaginatedPokemon>('https://pokeapi.co/api/v2/pokemon', { params })
      .pipe(delay(1500), toApiResponse(prev));
  }
  getPokemonDetails(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
}
