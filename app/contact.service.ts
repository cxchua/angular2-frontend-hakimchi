import { CONTACTS } from './mock-contacts';
import { Contact } from './contact';
import { Injectable } from 'angular2/core';

@Injectable()
export class ContactService {

  getContacts() {
    return Promise.resolve(CONTACTS);
  }

  getContact(id: number) {
  return Promise.resolve(CONTACTS).then(
    contacts => contacts.filter(contact => contact.id === id)[0]
  );
}

  // See the "Take it slow" appendix
  getContactsSlowly() {
    return new Promise<Contact[]>(resolve =>
      setTimeout(()=>resolve(CONTACTS), 2000) // 2 seconds
    );
  }
}
