import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵsetClassMetadata, Component, Input, ɵɵtextInterpolate, ɵɵproperty, ɵɵpureFunction1, ɵɵtemplate, ɵɵdefineInjectable, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgForOf, CommonModule } from '@angular/common';
import { RouterLinkWithHref, RouterModule } from '@angular/router';

var HeroesDetailComponent = /** @class */ (function () {
    function HeroesDetailComponent() {
    }
    HeroesDetailComponent.prototype.ngOnInit = function () {
    };
    HeroesDetailComponent.ɵfac = function HeroesDetailComponent_Factory(t) { return new (t || HeroesDetailComponent)(); };
    HeroesDetailComponent.ɵcmp = ɵɵdefineComponent({ type: HeroesDetailComponent, selectors: [["hero-heroes-detail"]], inputs: { hero: "hero" }, decls: 5, vars: 2, template: function HeroesDetailComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div");
            ɵɵelementStart(1, "p");
            ɵɵtext(2);
            ɵɵelementEnd();
            ɵɵelementStart(3, "p");
            ɵɵtext(4);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵtextInterpolate1("Id: ", ctx.hero.id, "");
            ɵɵadvance(2);
            ɵɵtextInterpolate1("Name: ", ctx.hero.name, "");
        } }, styles: [""] });
    return HeroesDetailComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeroesDetailComponent, [{
        type: Component,
        args: [{
                selector: 'hero-heroes-detail',
                templateUrl: './heroes-detail.component.html',
                styleUrls: ['./heroes-detail.component.css']
            }]
    }], function () { return []; }, { hero: [{
            type: Input
        }] }); })();

var _c0 = function (a1) { return ["detail", a1]; };
function HeroesListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3, " | ");
    ɵɵelementStart(4, "a", 1);
    ɵɵtext(5, "Detail");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var hero_r3 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(hero_r3.name);
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c0, hero_r3.id));
} }
var HeroesListComponent = /** @class */ (function () {
    function HeroesListComponent() {
    }
    HeroesListComponent.prototype.ngOnInit = function () {
    };
    HeroesListComponent.ɵfac = function HeroesListComponent_Factory(t) { return new (t || HeroesListComponent)(); };
    HeroesListComponent.ɵcmp = ɵɵdefineComponent({ type: HeroesListComponent, selectors: [["hero-heroes-list"]], inputs: { list: "list" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function HeroesListComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, HeroesListComponent_div_0_Template, 6, 4, "div", 0);
        } if (rf & 2) {
            ɵɵproperty("ngForOf", ctx.list);
        } }, directives: [NgForOf, RouterLinkWithHref], styles: [""] });
    return HeroesListComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeroesListComponent, [{
        type: Component,
        args: [{
                selector: 'hero-heroes-list',
                templateUrl: './heroes-list.component.html',
                styleUrls: ['./heroes-list.component.css']
            }]
    }], function () { return []; }, { list: [{
            type: Input
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
    HeroesService.ɵprov = ɵɵdefineInjectable({ token: HeroesService, factory: HeroesService.ɵfac });
    return HeroesService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeroesService, [{
        type: Injectable
    }], function () { return []; }, null); })();

var HeroesModule = /** @class */ (function () {
    function HeroesModule() {
    }
    HeroesModule.ɵmod = ɵɵdefineNgModule({ type: HeroesModule });
    HeroesModule.ɵinj = ɵɵdefineInjector({ factory: function HeroesModule_Factory(t) { return new (t || HeroesModule)(); }, providers: [HeroesService], imports: [[
                CommonModule,
                RouterModule
            ]] });
    return HeroesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(HeroesModule, { declarations: [HeroesListComponent, HeroesDetailComponent], imports: [CommonModule,
        RouterModule], exports: [HeroesListComponent, HeroesDetailComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeroesModule, [{
        type: NgModule,
        args: [{
                declarations: [HeroesListComponent, HeroesDetailComponent],
                imports: [
                    CommonModule,
                    RouterModule
                ],
                exports: [HeroesListComponent, HeroesDetailComponent],
                providers: [HeroesService]
            }]
    }], null, null); })();

/*
 * Public API Surface of heroes
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Hero, HeroesDetailComponent, HeroesListComponent, HeroesModule, HeroesService };
//# sourceMappingURL=rvasiliy-heroes.js.map
