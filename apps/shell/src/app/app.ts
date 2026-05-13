import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { Sidebar } from '@omnisphere-portal/ui';

@Component({
  imports: [
    NxWelcome, 
    RouterModule,
    Sidebar,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected title = 'shell';
  protected isDarkTheme = false;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme === 'dark';
    document.documentElement.setAttribute(
      `data-theme`,
      savedTheme ?? 'light'  
    );
  }

  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'light';
    document.documentElement.setAttribute(
      `data-theme`,
      theme
    )
    localStorage.setItem('theme', theme);
  }
}
