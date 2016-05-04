import { Component } from 'angular2/core';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'my-app',
  styleUrls: ['app/app.component.css'],
  template: `
  <header></header>
  <router-outlet></router-outlet>
  <footer></footer>
  `,
  directives: [HeaderComponent, FooterComponent, HeroesComponent, ROUTER_DIRECTIVES],
  providers: [HeroService, ROUTER_PROVIDERS]
})
@RouteConfig([
  {  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent//,
  // useAsDefault: true
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
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
