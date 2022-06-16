import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ScreenService } from '../services/screen.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private screen: ScreenService) { }

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

  ngAfterViewInit(): void {
    setTimeout(() => this.updateDrawer(), 10);
    this.screen.changed.subscribe(() => this.updateDrawer());
  }
}
