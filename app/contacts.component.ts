import { Component, OnInit } from 'angular2/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import { ContactDetailComponent } from './contact-detail.component';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-contacts',
  templateUrl: 'app/contacts.component.html',
  styleUrls:  ['app/contacts.component.css'],
  directives: [ContactDetailComponent]
})
export class ContactsComponent implements OnInit {
  title = 'My Contacts';
  contacts: Contact[];
  selectedContact: Contact;

  getContacts() {
    this._contactService.getContacts().then(contacts => this.contacts = contacts);
  }

  ngOnInit() {
    this.getContacts();
  }
  onSelect(contact: Contact) { this.selectedContact = contact; };

  gotoDetail() {
    this._router.navigate(['ContactDetail', { id: this.selectedContact.id }]);
  }

  constructor(private _contactService: ContactService, private _router: Router) { }
}
