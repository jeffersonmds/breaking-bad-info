import { NgModule } from '@angular/core';
import { MemoryGameComponent } from './memory-game.component';
import { RouterModule, Routes } from '@angular/router';
import { BaseListModule } from 'src/app/shared/components/base/base-list/base-list.module';
import { GuessCardComponent } from './guess-card/guess-card.component';
import { WinnerDialogComponent } from './winner-dialog/winner-dialog.component';
import { CharactersGetAllResolver } from '@BreakingBadResolvers';
import { CharactersService } from '@BreakingBadServices';

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
    GuessCardComponent,
    WinnerDialogComponent
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
