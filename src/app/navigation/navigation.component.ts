import { Component, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isDarkTheme: boolean = true;

  constructor(private themeService: ThemeService ) {
                this.isDarkTheme = this.themeService.isDarkTheme;
              }

  ngAfterViewInit(): void {
    this.onResize(window.innerWidth);
  }

  onSliderThemeToggle(event: any) {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.sendEvent(this.isDarkTheme);
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    if (this.sidenav) {
      if (width > 900) {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      } else {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
    }
  }
}
