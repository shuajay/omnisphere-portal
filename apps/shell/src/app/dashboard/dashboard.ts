import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NAVIGATION_ICONS } from '@omnisphere-portal/util';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  readonly icons = NAVIGATION_ICONS;

  faUsers = this.icons.faUsers;
  faUser = this.icons.faUser;
  faMedal = this.icons.faMedal;
  faTachographDigital = this.icons.faTachographDigital;
  faBriefcase = this.icons.faBriefcase;
  faCreditCard = this.icons.faCreditCard;
  faChartSimple = this.icons.faChartSimple;
}
