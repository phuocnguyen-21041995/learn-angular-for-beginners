import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NzDrawerService } from 'ng-zorro-antd';
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonStateService } from './services/pokemon-state.service';
import { PokemonService } from './services/pokemon.service';
// import { NzTableQueryParams } from 'ng-zorro-antd/table';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PokemonStateService],
})
export class PokemonComponent implements OnInit {
  vm$: any;
  query = new FormControl();
  data: any;
  private $pageChanged = new Subject<{
    page: number;
    rows: number;
    first: number;
  }>();
  loading = true;
  constructor(
    private readonly pokemonStateService: PokemonStateService,
    private service: PokemonService,
    private drawerService: NzDrawerService
  ) {}

  ngOnInit() {
    this.pokemonStateService.connect(
      this.$pageChanged.asObservable().pipe(
        map((data) => ({
          currentPage: data.page,
          limit: data.rows,
          offset: data.first,
        }))
      )
    );
    this.pokemonStateService.connect(
      'query',
      this.query.valueChanges.pipe(debounceTime(300))
    );
    this.vm$ = this.pokemonStateService.vm$;
    // console.log(this.vm$);
  }
  onPageChanged(
    currentLimit: number,
    $event: { page: number; rows: number; first: number }
  ) {
    if ($event.rows !== currentLimit) {
      this.$pageChanged.next({ page: 1, rows: $event.rows, first: 0 });
    } else {
      this.$pageChanged.next({
        page: $event.page,
        rows: $event.rows,
        first: $event.first - $event.rows,
      });
    }
    // Reset query on pageChanged
    this.query.setValue('');
  }
  onQueryParamsChange(params): void {
    this.service.getPokemonDetails(params).subscribe((x) => {
      const drawerRef = this.drawerService.create<PokemonDetailComponent>({
        nzTitle: 'Pokemon detail',
        nzWidth: '480px',
        nzContent: PokemonDetailComponent,
        nzContentParams: {
          dataInput: x,
        },
      });
      console.log(x);
    });
  }
}
