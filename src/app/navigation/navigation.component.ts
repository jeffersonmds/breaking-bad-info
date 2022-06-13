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

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => { this.onResize(window.innerWidth); }, 10);
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
