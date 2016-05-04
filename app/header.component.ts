import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'header',
    templateUrl: 'app/header.component.html',
    styleUrls: ['app/header.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent {

}
