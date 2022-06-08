import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersGetAllResolver } from 'src/app/resolvers/characters.resolver';
import { CharactersService } from 'src/app/services/characters.service';
import { BaseListModule } from 'src/app/shared/components/base/base-list/base-list.module';
import { FilterByCharacter } from 'src/app/shared/pipes/filter-by-character.pipe';

import { CharactersComponent } from '../characters/characters.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CharactersComponent,
        resolve: {
          DatasourceResolver: CharactersGetAllResolver
        }
      },
    ]
  }
];

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterCardComponent,
    CharactersListComponent,
    CharacterDetailsComponent,
    FilterByCharacter
  ],
  imports: [
    RouterModule.forChild(routes),
    BaseListModule
  ],
  providers: [
    CharactersService,
    CharactersGetAllResolver
  ]
})
export class CharactersModule { }
