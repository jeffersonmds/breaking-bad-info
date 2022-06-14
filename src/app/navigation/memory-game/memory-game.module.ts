import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoryGameComponent } from './memory-game.component';
import { RouterModule, Routes } from '@angular/router';
import { CharactersGetAllResolver } from 'src/app/resolvers/characters.resolver';
import { CharactersService } from 'src/app/services/characters.service';
import { BaseListModule } from 'src/app/shared/components/base/base-list/base-list.module';
import { GuessCardComponent } from './guess-card/guess-card.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MemoryGameComponent,
        resolve: {
          DatasourceResolver: CharactersGetAllResolver
        }
      },
    ]
  }
];

@NgModule({
  declarations: [
    MemoryGameComponent,
    GuessCardComponent
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
export class MemoryGameModule { }
