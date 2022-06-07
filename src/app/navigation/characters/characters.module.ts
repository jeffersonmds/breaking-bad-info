import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersGetAllResolver } from 'src/app/resolvers/characters.resolver';
import { CharactersService } from 'src/app/services/characters.service';
import { BaseListModule } from 'src/app/shared/components/base/base-list/base-list.module';

import { CharactersComponent } from '../characters/characters.component';
import { CharacterCardComponent } from './character-card/character-card.component';

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
    CharacterCardComponent
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
