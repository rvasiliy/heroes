import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵdefineInjectable, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

class HeroesDetailComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeroesDetailComponent.ɵfac = function HeroesDetailComponent_Factory(t) { return new (t || HeroesDetailComponent)(); };
HeroesDetailComponent.ɵcmp = ɵɵdefineComponent({ type: HeroesDetailComponent, selectors: [["hero-heroes-detail"]], decls: 2, vars: 0, template: function HeroesDetailComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "heroes-detail works!");
        ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeroesDetailComponent, [{
        type: Component,
        args: [{
                selector: 'hero-heroes-detail',
                templateUrl: './heroes-detail.component.html',
                styleUrls: ['./heroes-detail.component.css']
            }]
    }], function () { return []; }, null); })();

class HeroesListComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeroesListComponent.ɵfac = function HeroesListComponent_Factory(t) { return new (t || HeroesListComponent)(); };
HeroesListComponent.ɵcmp = ɵɵdefineComponent({ type: HeroesListComponent, selectors: [["hero-heroes-list"]], decls: 2, vars: 0, template: function HeroesListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "heroes-list works!");
        ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeroesListComponent, [{
        type: Component,
        args: [{
                selector: 'hero-heroes-list',
                templateUrl: './heroes-list.component.html',
                styleUrls: ['./heroes-list.component.css']
            }]
    }], function () { return []; }, null); })();

class HeroesService {
    constructor() {
    }
    getAll() {
        return [];
    }
    getHero(id) {
        return null;
    }
}
HeroesService.ɵfac = function HeroesService_Factory(t) { return new (t || HeroesService)(); };
HeroesService.ɵprov = ɵɵdefineInjectable({ token: HeroesService, factory: HeroesService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeroesService, [{
        type: Injectable
    }], function () { return []; }, null); })();

class HeroesModule {
}
HeroesModule.ɵmod = ɵɵdefineNgModule({ type: HeroesModule });
HeroesModule.ɵinj = ɵɵdefineInjector({ factory: function HeroesModule_Factory(t) { return new (t || HeroesModule)(); }, providers: [HeroesService], imports: [[
            CommonModule,
            RouterModule
        ]] });
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

export { HeroesDetailComponent, HeroesListComponent, HeroesModule };
//# sourceMappingURL=rvasiliy-heroes.js.map
