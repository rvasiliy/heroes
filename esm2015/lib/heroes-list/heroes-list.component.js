import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
const _c0 = function (a1) { return ["detail", a1]; };
function HeroesListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " | ");
    i0.ɵɵelementStart(4, "a", 1);
    i0.ɵɵtext(5, "Detail");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hero_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(hero_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, hero_r1.id));
} }
export class HeroesListComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeroesListComponent.ɵfac = function HeroesListComponent_Factory(t) { return new (t || HeroesListComponent)(); };
HeroesListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeroesListComponent, selectors: [["hero-heroes-list"]], inputs: { list: "list" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function HeroesListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, HeroesListComponent_div_0_Template, 6, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.list);
    } }, directives: [i1.NgForOf, i2.RouterLinkWithHref], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeroesListComponent, [{
        type: Component,
        args: [{
                selector: 'hero-heroes-list',
                templateUrl: './heroes-list.component.html',
                styleUrls: ['./heroes-list.component.css']
            }]
    }], function () { return []; }, { list: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2VzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJ2YXNpbGl5L2hlcm9lcy8iLCJzb3VyY2VzIjpbImxpYi9oZXJvZXMtbGlzdC9oZXJvZXMtbGlzdC5jb21wb25lbnQudHMiLCJsaWIvaGVyb2VzLWxpc3QvaGVyb2VzLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0F2RCwyQkFDRTtJQUFBLDRCQUFNO0lBQUEsWUFBYTtJQUFBLGlCQUFPO0lBQUMsbUJBQUU7SUFBQSw0QkFBc0M7SUFBQSxzQkFBTTtJQUFBLGlCQUFJO0lBQy9FLGlCQUFNOzs7SUFERSxlQUFhO0lBQWIsa0NBQWE7SUFBYSxlQUFrQztJQUFsQyxtRUFBa0M7O0FET3BFLE1BQU0sT0FBTyxtQkFBbUI7SUFHOUI7SUFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7c0ZBTlUsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNSaEMsb0VBQ0U7O1FBREcsa0NBQXlCOztrRERRakIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7a0JBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SGVyb2VzfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZXJvLWhlcm9lcy1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlcm9lcy1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVyb2VzLWxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9lc0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsaXN0OiBIZXJvZXM7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxufVxuIiwiPGRpdiAqbmdGb3I9XCJsZXQgaGVybyBvZiBsaXN0XCI+XG4gIDxzcGFuPnt7aGVyby5uYW1lfX08L3NwYW4+IHwgPGEgW3JvdXRlckxpbmtdPVwiWydkZXRhaWwnLCBoZXJvLmlkXVwiPkRldGFpbDwvYT5cbjwvZGl2PlxuIl19