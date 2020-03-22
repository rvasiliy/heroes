(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@rvasiliy/heroes', ['exports', '@angular/core', '@angular/router', '@angular/common'], factory) :
    (global = global || self, factory((global.rvasiliy = global.rvasiliy || {}, global.rvasiliy.heroes = {}), global.ng.core, global.ng.router, global.ng.common));
}(this, (function (exports, core, router, common) { 'use strict';

    var HeroesDetailComponent = /** @class */ (function () {
        function HeroesDetailComponent() {
        }
        HeroesDetailComponent.prototype.ngOnInit = function () {
        };
        HeroesDetailComponent.ɵfac = function HeroesDetailComponent_Factory(t) { return new (t || HeroesDetailComponent)(); };
        HeroesDetailComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: HeroesDetailComponent, selectors: [["hero-heroes-detail"]], decls: 2, vars: 0, template: function HeroesDetailComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, "heroes-detail works!");
                core["ɵɵelementEnd"]();
            } }, styles: [""] });
        return HeroesDetailComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](HeroesDetailComponent, [{
            type: core.Component,
            args: [{
                    selector: 'hero-heroes-detail',
                    templateUrl: './heroes-detail.component.html',
                    styleUrls: ['./heroes-detail.component.css']
                }]
        }], function () { return []; }, null); })();

    var HeroesListComponent = /** @class */ (function () {
        function HeroesListComponent() {
        }
        HeroesListComponent.prototype.ngOnInit = function () {
        };
        HeroesListComponent.ɵfac = function HeroesListComponent_Factory(t) { return new (t || HeroesListComponent)(); };
        HeroesListComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: HeroesListComponent, selectors: [["hero-heroes-list"]], decls: 2, vars: 0, template: function HeroesListComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, "heroes-list works!");
                core["ɵɵelementEnd"]();
            } }, styles: [""] });
        return HeroesListComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](HeroesListComponent, [{
            type: core.Component,
            args: [{
                    selector: 'hero-heroes-list',
                    templateUrl: './heroes-list.component.html',
                    styleUrls: ['./heroes-list.component.css']
                }]
        }], function () { return []; }, null); })();

    var HeroesService = /** @class */ (function () {
        function HeroesService() {
        }
        HeroesService.prototype.getAll = function () {
            return [];
        };
        HeroesService.prototype.getHero = function (id) {
            return null;
        };
        HeroesService.ɵfac = function HeroesService_Factory(t) { return new (t || HeroesService)(); };
        HeroesService.ɵprov = core["ɵɵdefineInjectable"]({ token: HeroesService, factory: HeroesService.ɵfac });
        return HeroesService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](HeroesService, [{
            type: core.Injectable
        }], function () { return []; }, null); })();

    var HeroesModule = /** @class */ (function () {
        function HeroesModule() {
        }
        HeroesModule.ɵmod = core["ɵɵdefineNgModule"]({ type: HeroesModule });
        HeroesModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function HeroesModule_Factory(t) { return new (t || HeroesModule)(); }, providers: [HeroesService], imports: [[
                    common.CommonModule,
                    router.RouterModule
                ]] });
        return HeroesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](HeroesModule, { declarations: [HeroesListComponent, HeroesDetailComponent], imports: [common.CommonModule,
            router.RouterModule], exports: [HeroesListComponent, HeroesDetailComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](HeroesModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [HeroesListComponent, HeroesDetailComponent],
                    imports: [
                        common.CommonModule,
                        router.RouterModule
                    ],
                    exports: [HeroesListComponent, HeroesDetailComponent],
                    providers: [HeroesService]
                }]
        }], null, null); })();

    exports.HeroesDetailComponent = HeroesDetailComponent;
    exports.HeroesListComponent = HeroesListComponent;
    exports.HeroesModule = HeroesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rvasiliy-heroes.umd.js.map
