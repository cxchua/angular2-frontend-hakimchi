import { Component } from 'angular2/core';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeaderComponent } from './header.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'my-app',
  styleUrls: ['app/app.component.css'],
  template: `
  <header></header>
  <nav>
    <h1>{{title}}</h1>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
  </nav>
    <router-outlet></router-outlet>
  `,
  directives: [HeaderComponent, HeroesComponent, ROUTER_DIRECTIVES],
  providers: [HeroService, ROUTER_PROVIDERS]
})
@RouteConfig([
  {  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent//,
  // useAsDefault: true
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
  title = "Tour of Heroes"
}
