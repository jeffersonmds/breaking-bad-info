import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeathsGetAllResolver } from 'src/app/resolvers/deaths.resolver';
import { DeathsService } from 'src/app/services/deaths.service';
import { BaseListModule } from 'src/app/shared/components/base/base-list/base-list.module';

import { DeathCardComponent } from './death-card/death-card.component';
import { DeathsComponent } from './deaths.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DeathsComponent,
        resolve: {
          DatasourceResolver: DeathsGetAllResolver
        }
      },
    ]
  }
];

@NgModule({
  declarations: [
    DeathsComponent,
    DeathCardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    BaseListModule
  ],
  providers: [
    DeathsService,
    DeathsGetAllResolver
  ]
})
export class DeathsModule { }
