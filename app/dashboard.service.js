System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var DashboardService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            DashboardService = (function () {
                function DashboardService(http) {
                    this.http = http;
                    this.userID = localStorage.getItem('userid');
                    this.eventsUrl = ("http://localhost:3000/api/events/" + this.userID);
                    this.remindersUrl = ("http://localhost:3000/api/contacts-date/" + this.userID);
                }
                // private thirdUrl = "http://localhost:3000/api/contacts-date/572bb6ce07c1be4849e38552"
                DashboardService.prototype.getEvents = function () {
                    return this.http.get(this.eventsUrl).map(this.extractData).catch(this.handleError);
                };
                DashboardService.prototype.getContactDate = function () {
                    return this.http.get(this.remindersUrl).map(this.extractData).catch(this.handleError);
                };
                DashboardService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    //  console.log("Body is: " + body);
                    return body || {};
                };
                DashboardService.prototype.handleError = function (error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                DashboardService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DashboardService);
                return DashboardService;
            }());
            exports_1("DashboardService", DashboardService);
            ;
        }
    }
});
//# sourceMappingURL=dashboard.service.js.map