import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent {
  isDarkTheme: boolean = true;

  constructor(private themeService: ThemeService,
              private router: Router) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  onSliderThemeToggle(event: any) {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.sendEvent(this.isDarkTheme);
  }

  isItemSelected(url: string): boolean {
    return this.router.url === url;
  }

}
