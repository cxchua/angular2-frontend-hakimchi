import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { ContactService } from './contact.service';
import { Contact } from './contact';

@Component({
  selector: 'my-contact-detail',
  templateUrl: 'app/contact-detail.component.html',
  styleUrls: ['app/contact-detail.component.css']
})

export class ContactDetailComponent {// implements OnInit {
  @Input() contact: Contact;

  // constructor(
  //   private _contactService: ContactService,
  //   private _routeParams: RouteParams) {}

  // ngOnInit() {
  //   let id = +this._routeParams.get('id');
  //   this._contactService.getContact(id)
  //     .then(contact => this.contact = contact);
  // }

  goBack() {
    window.history.back();
  }
}
