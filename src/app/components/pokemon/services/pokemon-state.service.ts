import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';
import { RxState } from '@rx-angular/state';
import { PokemonService } from './pokemon.service';
import { combineLatest } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
export interface PokemonState {
  status: 'loading' | 'success';
  originalResult: Pokemon[];
  filteredResult: Pokemon[];
  total: number;
  limit: number;
  offset: number;
  currentPage: number;
  query: string;
}
@Injectable({
  providedIn: 'root',
})
export class PokemonStateService extends RxState<PokemonState> {
  readonly originalResult$ = this.select('originalResult');
  readonly total$ = this.select('total');
  readonly limit$ = this.select('limit');
  readonly vm$ = combineLatest([
    this.select('status'),
    this.select('filteredResult'),
    this.select('currentPage'),
    this.total$,
    this.limit$,
  ]).pipe(
    map(([status, filteredResult, currentPage, total, limit]) => ({
      status,
      filteredResult,
      total,
      currentPage,
      limit,
    }))
  );
  constructor(private readonly pokemonService: PokemonService) {
    super();
    this.set({
      query: '',
      filteredResult: [],
      originalResult: [],
      currentPage: 1,
      limit: 20,
      offset: 0,
      total: 0,
    });
    this.connect(this.effect$());
    // console.log(this.effect$());
    this.connect('filteredResult', this.queryEffect$());
  }

  private effect$() {
    return combineLatest([this.limit$, this.select('offset')]).pipe(
      withLatestFrom(this.total$, this.originalResult$),
      switchMap(([[limit, offset], total, original]) =>
        this.pokemonService.getPokemon(limit, offset, {
          count: total,
          next: '',
          previous: '',
          results: original,
        })
      ),
      map(({ status, data }) => ({
        status,
        total: data.count,
        filteredResult: data.results,
        originalResult: data.results,
      }))
    );
  }

  private queryEffect$() {
    return this.select('query').pipe(
      distinctUntilChanged(),
      withLatestFrom(this.originalResult$),
      map(([query, data]) => (!query ? data : this.filter(data, query)))
    );
  }

  private filter(data: Pokemon[], query: string): Pokemon[] {
    return data.filter((res) =>
      res.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}
