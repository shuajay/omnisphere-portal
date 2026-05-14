import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from '../nx-welcome';
import { Sidebar, Topbar } from '@omnisphere-portal/ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon, faBell, faCircleQuestion, faCircleUser } from '@omnisphere-portal/util';

@Component({
  imports: [
    RouterModule,
    Sidebar,
    Topbar,
    FontAwesomeModule,
],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected title = 'shell';
  

}
