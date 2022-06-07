import { Component, HostBinding } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private isDarkTheme = true;

  constructor(private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.themeService.getEvents().subscribe(x => {
      this.isDarkTheme = x;
    })
  }

  @HostBinding('class')
  get themeModel() {
    return this.isDarkTheme ? '' : 'light-theme';
  }
}
