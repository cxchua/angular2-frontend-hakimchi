import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { ContactDate } from './contactdate';
import { Event } from './event';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  events: Event[] = []
  contacts: ContactDate[] = [];
  errorMessage: string;

  constructor(private _dashboardService: DashboardService, private _router: Router) { }

  ngOnInit() {
    this._dashboardService.getEvents()
      .subscribe(events => this.events = events, error => this.errorMessage = <any>error);
    this._dashboardService.getContactDate()
      .subscribe(contacts => this.contacts = contacts, error => this.errorMessage = <any>error);

  }
  gotoDetail(contact: ContactDate) {
    let link = ['ContactDetail', { id: contact._id }];
    this._router.navigate(link);
  }
}
