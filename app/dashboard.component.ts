import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'my-contactboard',
  templateUrl: 'app/contactboard.component.html',
  styleUrls: ['app/contactboard.component.css']
})

export class ContactboardComponent implements OnInit {
  contacts: Contact[] = [];
  errorMessage: string;

  constructor(private _contactService: ContactService, private _router: Router) { }

  ngOnInit() {
    this._contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts.slice(1,5), error => this.errorMessage = <any>error);
  }
  gotoDetail(contact: Contact) {
    let link = ['ContactDetail', { id: contact.id }];
    this._router.navigate(link);
  }
}
