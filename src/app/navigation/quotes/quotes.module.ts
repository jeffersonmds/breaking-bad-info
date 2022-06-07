import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes.component';
import { QuotesService } from 'src/app/services/quotes.service';
import { SectionTitleModule } from 'src/app/shared/components/section-title/section-title.module';
import { QuoteCardComponent } from './quote-card/quote-card.component';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: QuotesComponent,
        // resolve: {
        //   DataSourceResolver: AircraftTypeGetAllResolver
        // }
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
    CommonModule,
    SectionTitleModule,
    MatCardModule
  ],
  providers: [
    QuotesService
  ]
})
export class QuotesModule { }
