import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';
import { ScreenService } from '../shared/services/screen.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  langs: string[];
  selectedLang: string;
  constructor(private screen: ScreenService,
              private translate: TranslateService) {
    this.selectedLang = translate.currentLang;
    this.langs = translate.langs;
  }

  updateDrawer() {
    const isSmall = this.screen.sizes['screen-small'] || this.screen.sizes['screen-x-small'];
    if (this.sidenav) {
      if (!isSmall) {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      } else {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
    }
  }

  //Switch language
  translateLanguageTo(lang: string) {
    localStorage.setItem('LANG', lang);
    this.translate.use(lang);
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.updateDrawer(), 10);
    this.screen.changed.subscribe(() => this.updateDrawer());
  }
}
