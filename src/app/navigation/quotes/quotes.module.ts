import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes.component';
import { QuotesService } from 'src/app/services/quotes.service';
import { QuoteCardComponent } from './quote-card/quote-card.component';
import { BaseListModule } from 'src/app/shared/components/base/base-list/base-list.module';
import { QuotesGetAllResolver } from 'src/app/resolvers/quotes.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: QuotesComponent,
        resolve: {
          DatasourceResolver: QuotesGetAllResolver
        }
      },
    ]
  }
];

@NgModule({
  declarations: [
    QuotesComponent,
    QuoteCardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    BaseListModule
  ],
  providers: [
    QuotesService,
    QuotesGetAllResolver
  ]
})
export class QuotesModule { }
