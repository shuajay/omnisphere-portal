import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers, faUser, faMedal, faTachographDigital, faBriefcase, faCreditCard, faChartSimple} from '@omnisphere-portal/util'

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

  faUsers = faUsers;
  faUser = faUser;
  faMedal = faMedal;
  faTachographDigital = faTachographDigital;
  faBriefcase = faBriefcase;
  faCreditCard = faCreditCard;
  faChartSimple = faChartSimple;
}
