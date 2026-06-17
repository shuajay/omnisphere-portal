import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers, faUser, faMedal, faTachographDigital, faBriefcase, faCreditCard, faChartSimple} from '@omnisphere-portal/util'

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
  faUsers = faUsers;
  faUser = faUser;
  faMedal = faMedal;
  faTachographDigital = faTachographDigital;
  faBriefcase = faBriefcase;
  faCreditCard = faCreditCard;
  faChartSimple = faChartSimple;
}
