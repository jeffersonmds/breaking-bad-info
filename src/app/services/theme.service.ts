import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkThemeActive: boolean = true;
  private _eventEmmiter : EventEmitter<boolean>  = new EventEmitter<boolean>();

  constructor() {
    let isDark = localStorage.getItem('isDarkTheme');
    if (isDark === 'false') {
      this.isDarkThemeActive = false;
    } else {
      this.isDarkThemeActive = true;
    }
  }

  getEvents(){
    return this._eventEmmiter;
  }

  sendEvent(event: boolean){
    localStorage.setItem('isDarkTheme', event.toString());
    this._eventEmmiter.emit(event);
  }

  get isDarkTheme() {
    return this.isDarkThemeActive;
  }
}
