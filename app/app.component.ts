import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { HeroService } from './hero.service';
import { ContactService } from './contact.service';
import { HeroesComponent } from './heroes.component';
import { ContactsComponent } from './contacts.component';
import { DashboardComponent } from './dashboard.component';
import { ContactboardComponent } from './contactboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { ContactDetailComponent } from './contact-detail.component';



@Component({
  selector: 'my-app',
  styleUrls: ['app/app.component.css'],
  template: `
  <header></header>
  <router-outlet></router-outlet>
  <footer></footer>
  `,
  directives: [HeaderComponent, FooterComponent, HeroesComponent, ROUTER_DIRECTIVES],
  providers: [HeroService, ContactService, ROUTER_PROVIDERS]
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
  {  path: '/contactboard',
  name: 'Contactboard',
  component: ContactboardComponent
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {  path: '/contacts',
  name: 'Contacts',
  component: ContactsComponent
  },
  {
  path: '/detail/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
},
])
export class AppComponent {
  title = "Contact Now. Stay Connected."
}
