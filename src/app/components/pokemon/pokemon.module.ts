import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LetModule } from '@rx-angular/template';
import { ShareModule } from 'src/app/share.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  imports: [
    CommonModule,
    LetModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule,
  ],
  declarations: [PokemonComponent, PaginatorComponent, PokemonDetailComponent],
})
export class PokemonModule {}
