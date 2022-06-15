import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private isDarkTheme = true;

  constructor(@Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2,
              private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.themeService.getEvents().subscribe(x => {
      this.isDarkTheme = x;
      this.swithThemeMode();
    })
    this.swithThemeMode();
  }

  swithThemeMode() {
    const hostClass = this.isDarkTheme ? '' : 'light-theme';
    this.renderer.setAttribute(this.document.body, 'class', hostClass);
  }
}
