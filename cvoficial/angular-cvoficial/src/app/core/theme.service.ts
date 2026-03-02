import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private dark = false;

  isDark(): boolean {
    return this.dark;
  }

  toggle(): void {
    this.dark = !this.dark;

    if (this.dark) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }
}