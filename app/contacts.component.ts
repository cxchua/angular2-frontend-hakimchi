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
  errorMessage: string;

  // getContacts() {
  //   this._contactService.getContacts().then(contacts => this.contacts = contacts);
  // }

  getContacts() {
    this._contactService.getContacts()
                        .subscribe(
                            contacts => this.contacts = contacts,
                            error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getContacts();
  }

  onSelect(contact: Contact) { this.selectedContact = contact; console.log(this.selectedContact)};

  gotoDetail() {
    console.log(this.selectedContact._id)
    var userid = localStorage.getItem("userid")
    window.open('http://localhost:3000/api/getcontactdetails/' + userid + '/' + this.selectedContact._id)
    // this._router.navigate(['ContactDetail', { id: this.selectedContact._id }]);

  }

  constructor(private _contactService: ContactService, private _router: Router) { }
}
