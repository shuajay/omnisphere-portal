import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NAVIGATION_ICONS } from '@omnisphere-portal/util';

@Component({
  selector: 'lib-sidebar',
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  readonly icons = NAVIGATION_ICONS;

  faUsers = this.icons.faUsers;
  faUser = this.icons.faUser;
  faMedal = this.icons.faMedal;
  faTachographDigital = this.icons.faTachographDigital;
  faBriefcase = this.icons.faBriefcase;
  faCreditCard = this.icons.faCreditCard;
  faChartSimple = this.icons.faChartSimple;
}
