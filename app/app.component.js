System.register(['angular2/core', 'angular2/http', 'angular2/router', './header.component', './footer.component', './home.component', './contact.service', './dashboard.service', './contacts.component', './dashboard.component', './contact-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, header_component_1, footer_component_1, home_component_1, contact_service_1, dashboard_service_1, contacts_component_1, dashboard_component_1, contact_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (dashboard_service_1_1) {
                dashboard_service_1 = dashboard_service_1_1;
            },
            function (contacts_component_1_1) {
                contacts_component_1 = contacts_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (contact_detail_component_1_1) {
                contact_detail_component_1 = contact_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Contact Now. Stay Connected.";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styleUrls: ['app/app.component.css'],
                        template: "\n  <header></header>\n  <router-outlet></router-outlet>\n  <footer></footer>\n  ",
                        directives: [header_component_1.HeaderComponent, footer_component_1.FooterComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [contact_service_1.ContactService, dashboard_service_1.DashboardService, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/home',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        },
                        { path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent
                        },
                        { path: '/contacts',
                            name: 'Contacts',
                            component: contacts_component_1.ContactsComponent
                        },
                        {
                            path: '/contacts/:id',
                            name: 'ContactDetail',
                            component: contact_detail_component_1.ContactDetailComponent
                        },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map