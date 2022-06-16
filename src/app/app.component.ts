import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, Renderer2 } from '@angular/core';
import { ScreenService } from './services/screen.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private isDarkTheme = true;

  constructor(@Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2,
              private themeService: ThemeService,
              private screen: ScreenService) {
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

  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }
}
