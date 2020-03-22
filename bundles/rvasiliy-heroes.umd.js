(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@rvasiliy/heroes', ['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
    (global = global || self, factory((global.rvasiliy = global.rvasiliy || {}, global.rvasiliy.heroes = {}), global.ng.core, global.ng.common, global.ng.router));
}(this, (function (exports, core, common, router) { 'use strict';

    var HeroesDetailComponent = /** @class */ (function () {
        function HeroesDetailComponent() {
        }
        HeroesDetailComponent.prototype.ngOnInit = function () {
        };
        HeroesDetailComponent.ɵfac = function HeroesDetailComponent_Factory(t) { return new (t || HeroesDetailComponent)(); };
        HeroesDetailComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: HeroesDetailComponent, selectors: [["hero-heroes-detail"]], inputs: { hero: "hero" }, decls: 5, vars: 2, template: function HeroesDetailComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div");
                core["ɵɵelementStart"](1, "p");
                core["ɵɵtext"](2);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](3, "p");
                core["ɵɵtext"](4);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](2);
                core["ɵɵtextInterpolate1"]("Id: ", ctx.hero.id, "");
                core["ɵɵadvance"](2);
                core["ɵɵtextInterpolate1"]("Name: ", ctx.hero.name, "");
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
        }], function () { return []; }, { hero: [{
                type: core.Input
            }] }); })();

    var _c0 = function (a1) { return ["detail", a1]; };
    function HeroesListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵelementStart"](1, "span");
        core["ɵɵtext"](2);
        core["ɵɵelementEnd"]();
        core["ɵɵtext"](3, " | ");
        core["ɵɵelementStart"](4, "a", 1);
        core["ɵɵtext"](5, "Detail");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var hero_r3 = ctx.$implicit;
        core["ɵɵadvance"](2);
        core["ɵɵtextInterpolate"](hero_r3.name);
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("routerLink", core["ɵɵpureFunction1"](2, _c0, hero_r3.id));
    } }
    var HeroesListComponent = /** @class */ (function () {
        function HeroesListComponent() {
        }
        HeroesListComponent.prototype.ngOnInit = function () {
        };
        HeroesListComponent.ɵfac = function HeroesListComponent_Factory(t) { return new (t || HeroesListComponent)(); };
        HeroesListComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: HeroesListComponent, selectors: [["hero-heroes-list"]], inputs: { list: "list" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function HeroesListComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, HeroesListComponent_div_0_Template, 6, 4, "div", 0);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngForOf", ctx.list);
            } }, directives: [common.NgForOf, router.RouterLinkWithHref], styles: [""] });
        return HeroesListComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](HeroesListComponent, [{
            type: core.Component,
            args: [{
                    selector: 'hero-heroes-list',
                    templateUrl: './heroes-list.component.html',
                    styleUrls: ['./heroes-list.component.css']
                }]
        }], function () { return []; }, { list: [{
                type: core.Input
            }] }); })();

    var Hero = /** @class */ (function () {
        function Hero() {
        }
        return Hero;
    }());

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

    exports.Hero = Hero;
    exports.HeroesDetailComponent = HeroesDetailComponent;
    exports.HeroesListComponent = HeroesListComponent;
    exports.HeroesModule = HeroesModule;
    exports.HeroesService = HeroesService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rvasiliy-heroes.umd.js.map
