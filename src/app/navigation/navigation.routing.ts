import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
      path: '',
      component: NavigationComponent,
      children: [
          {
              path: '',
              title: 'Breaking Bad',
              component: HomeComponent
          },
          {
              path: 'characters',
              title: 'Breaking Bad - Characters',
              loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)
          },
          {
              path: 'episodes',
              title: 'Breaking Bad - Episodes',
              loadChildren: () => import('./episodes/episodes.module').then(m => m.EpisodesModule)
          },
          {
              path: 'quotes',
              title: 'Breaking Bad - Quotes',
              loadChildren: () => import('./quotes/quotes.module').then(m => m.QuotesModule)
          },
          {
              path: 'deaths',
              title: 'Breaking Bad - Deaths',
              loadChildren: () => import('./deaths/deaths.module').then(m => m.DeathsModule)
          },
          {
            path: '**',
            redirectTo: ''
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule {}
