System.register(['angular2/core', 'angular2/router', './contact.service', './contact'], function(exports_1, context_1) {
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
    var core_1, router_1, contact_service_1, contact_1;
    var ContactDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (contact_1_1) {
                contact_1 = contact_1_1;
            }],
        execute: function() {
            ContactDetailComponent = (function () {
                function ContactDetailComponent(_contactService, _routeParams) {
                    this._contactService = _contactService;
                    this._routeParams = _routeParams;
                }
                ContactDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._contactService.getContact(id)
                        .then(function (contact) { return _this.contact = contact; });
                };
                ContactDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', contact_1.Contact)
                ], ContactDetailComponent.prototype, "contact", void 0);
                ContactDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-contact-detail',
                        templateUrl: 'app/contact-detail.component.html',
                        styleUrls: ['app/contact-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.RouteParams])
                ], ContactDetailComponent);
                return ContactDetailComponent;
            }());
            exports_1("ContactDetailComponent", ContactDetailComponent);
        }
    }
});
//# sourceMappingURL=contact-detail.component.js.map