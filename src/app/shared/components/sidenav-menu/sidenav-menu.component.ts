import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent {
  isDarkTheme: boolean = true;

  constructor(private themeService: ThemeService ) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  onSliderThemeToggle(event: any) {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.sendEvent(this.isDarkTheme);
  }

}
