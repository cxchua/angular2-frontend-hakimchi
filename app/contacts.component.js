System.register(['angular2/core', './contact.service', './contact-detail.component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, contact_service_1, contact_detail_component_1, router_1;
    var ContactsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (contact_detail_component_1_1) {
                contact_detail_component_1 = contact_detail_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ContactsComponent = (function () {
                function ContactsComponent(_contactService, _router) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this.title = 'My Contacts';
                }
                ContactsComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._contactService.getContacts().then(function (contacts) { return _this.contacts = contacts; });
                };
                ContactsComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                ContactsComponent.prototype.onSelect = function (contact) { this.selectedContact = contact; };
                ;
                ContactsComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['ContactDetail', { id: this.selectedContact.id }]);
                };
                ContactsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-contacts',
                        templateUrl: 'app/contacts.component.html',
                        styleUrls: ['app/contacts.component.css'],
                        directives: [contact_detail_component_1.ContactDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router])
                ], ContactsComponent);
                return ContactsComponent;
            }());
            exports_1("ContactsComponent", ContactsComponent);
        }
    }
});
//# sourceMappingURL=contacts.component.js.map