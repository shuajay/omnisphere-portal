import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSun,
  faMoon,
  faBell,
  faCircleQuestion,
  faCircleUser,
  faMagnifyingGlass,
} from '@omnisphere-portal/util';

@Component({
  selector: 'lib-topbar',
  imports: [FontAwesomeModule],
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

  private readonly router = inject(Router);

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme === 'dark';
    document.documentElement.setAttribute(
      'data-theme',
      savedTheme ?? 'light'
    );
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  logout() {
    localStorage.removeItem('auth_token');
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
