System.register(['angular2/core', './contact'], function(exports_1, context_1) {
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
    var core_1, contact_1;
    var ContactDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_1_1) {
                contact_1 = contact_1_1;
            }],
        execute: function() {
            ContactDetailComponent = (function () {
                function ContactDetailComponent() {
                }
                // constructor(
                //   private _contactService: ContactService,
                //   private _routeParams: RouteParams) {}
                // ngOnInit() {
                //   let id = +this._routeParams.get('id');
                //   this._contactService.getContact(id)
                //     .then(contact => this.contact = contact);
                // }
                ContactDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    // implements OnInit {
                    core_1.Input(), 
                    __metadata('design:type', contact_1.Contact)
                ], ContactDetailComponent.prototype, "contact", void 0);
                ContactDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-contact-detail',
                        templateUrl: 'app/contact-detail.component.html',
                        styleUrls: ['app/contact-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactDetailComponent);
                return ContactDetailComponent;
            }());
            exports_1("ContactDetailComponent", ContactDetailComponent);
        }
    }
});
//# sourceMappingURL=contact-detail.component.js.map