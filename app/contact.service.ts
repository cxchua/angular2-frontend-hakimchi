import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Contact } from './contact';

@Injectable()
export class ContactService {
  constructor (private http: Http) {}

  private contactsUrl = "http://localhost:3000/api/contacts-alpha/572b51b752f11f984fddeb47"

  private extractData(res: Response) {
   if (res.status < 200 || res.status >= 300) {
     throw new Error('Bad response status: ' + res.status);
   }
   let body = res.json();
  //  console.log("Body is: " + body[0].contactname);
   return body || { };
 }

 private handleError (error: any) {
   // In a real world app, we might send the error to remote logging infrastructure
   let errMsg = error.message || 'Server error';
   console.error(errMsg); // log to console instead
   return Observable.throw(errMsg);
 }

 getContacts (): Observable<Contact[]> {
   return this.http.get(this.contactsUrl).map(this.extractData).catch(this.handleError);
 }

 getContact(id: number): Observable<Contact> {
 return this.http.get(this.contactsUrl).map(this.extractData).catch(this.handleError);
 };

  // getContact(id: number) {
  // return Promise.resolve(CONTACTS).then(
  //   contacts => contacts.filter(contact => contact._id === id)[0]
  // );
  //}

  // See the "Take it slow" appendix
  // getContactsSlowly() {
  //   return new Promise<Contact[]>( (resolve) => {
  //     setTimeout( () => {
  //       resolve(CONTACTS)
  //     }, 2000) // 2 seconds
  //   });
  // }

  // getContactsFromAPI() {
  //   http.get('/contacts')
  //     // Call map on the response observable to get the parsed people object
  //     .map(res => res.json())
  //     // Subscribe to the observable to get the parsed people object and attach it to the
  //     // component
  //     .subscribe(contacts => this.contacts = contacts);
  // }

};
