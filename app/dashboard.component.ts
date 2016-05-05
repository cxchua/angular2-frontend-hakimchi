import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Contact } from './contact';
import { Event } from './event';
import { ContactService } from './contact.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  events: Event[] = []
  contacts: Contact[] = [];
  errorMessage: string;

  constructor(private _dashboardService: DashboardService, private _contactService: ContactService, private _router: Router) { }

  ngOnInit() {
    this._contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts.slice(1,5), error => this.errorMessage = <any>error);

    this._dashboardService.getEvents()
      .subscribe(events => this.events = events, error => this.errorMessage = <any>error);
  }
  gotoDetail(contact: Contact) {
    let link = ['ContactDetail', { id: contact.id }];
    this._router.navigate(link);
  }
}
