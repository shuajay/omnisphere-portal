import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, 
  faMoon, 
  faBell, 
  faCircleQuestion, 
  faCircleUser, 
  faMagnifyingGlass, 
} from '@omnisphere-portal/util'

@Component({
  selector: 'lib-topbar',
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {
  protected isDarkTheme = false;
  faSun = faSun;
  faMoon = faMoon;
  faBell = faBell;
  faCircleQuestion = faCircleQuestion;
  faCircleUser = faCircleUser;
  faSearch = faMagnifyingGlass;

  private router = inject(Router);

  constructor() {
    let savedTheme: string | null = null;
    try {
      savedTheme = localStorage.getItem('theme');
    } catch {
      // localStorage may be unavailable (e.g. private browsing)
    }
    this.isDarkTheme = savedTheme === 'dark';
    document.documentElement.setAttribute(
      'data-theme',
      savedTheme ?? 'light'
    );
  }

  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'light';
    document.documentElement.setAttribute(
      'data-theme',
      theme
    );
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // localStorage may be unavailable (e.g. private browsing)
    }
  }

  logout() {
    try {
      localStorage.removeItem('token');
      sessionStorage.clear();
    } catch {
      // Storage may be unavailable
    }
    this.router.navigate(['/login']);
  }
}
