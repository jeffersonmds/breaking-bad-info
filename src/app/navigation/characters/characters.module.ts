import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { SectionTitleModule } from 'src/app/shared/components/section-title/section-title.module';

import { CharactersComponent } from '../characters/characters.component';
import { CharacterCardComponent } from './character-card/character-card.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CharactersComponent
        // resolve: {
        //   DataSourceResolver: AircraftTypeGetAllResolver
        // }
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
    CommonModule,
    SectionTitleModule,
    MatCardModule
  ],
  providers: [
    CharactersService
  ]
})
export class CharactersModule { }
