import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var HomePage = /** @class */ (function () {
    function HomePage(router) {
        this.router = router;
        this.articles = [{
                nom: "tele",
                prix: 2000,
                detail: "okok1"
            }, {
                nom: "smartphone",
                prix: 150,
                detail: "okok2"
            }, {
                nom: "ordinateur",
                prix: 150,
                detail: "okok3"
            }];
    }
    HomePage.prototype.showDetails = function (datas) {
        this.router.navigate(['/details'], { datas: datas });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map