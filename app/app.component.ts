import { Component } from 'angular2/core';
import { Http, Response, HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { ContactService } from './contact.service';
import { DashboardService } from './dashboard.service';
import { ContactsComponent } from './contacts.component';
import { DashboardComponent } from './dashboard.component';
import { ContactDetailComponent } from './contact-detail.component';

@Component({
  selector: 'my-app',
  styleUrls: ['app/app.component.css'],
  template: `
  <header></header>
  <router-outlet></router-outlet>
  <footer></footer>
  `,
  directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES],
  providers: [ContactService, DashboardService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent
  },
  {  path: '/contacts',
  name: 'Contacts',
  component: ContactsComponent
  },
  {
  path: '/contacts/:id',
  name: 'ContactDetail',
  component: ContactDetailComponent
  },
])
export class AppComponent {
  title = "Contact Now. Stay Connected."
}
