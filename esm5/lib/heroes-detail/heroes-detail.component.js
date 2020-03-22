import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
var HeroesDetailComponent = /** @class */ (function () {
    function HeroesDetailComponent() {
    }
    HeroesDetailComponent.prototype.ngOnInit = function () {
    };
    HeroesDetailComponent.ɵfac = function HeroesDetailComponent_Factory(t) { return new (t || HeroesDetailComponent)(); };
    HeroesDetailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeroesDetailComponent, selectors: [["hero-heroes-detail"]], inputs: { hero: "hero" }, decls: 5, vars: 2, template: function HeroesDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Id: ", ctx.hero.id, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Name: ", ctx.hero.name, "");
        } }, styles: [""] });
    return HeroesDetailComponent;
}());
export { HeroesDetailComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeroesDetailComponent, [{
        type: Component,
        args: [{
                selector: 'hero-heroes-detail',
                templateUrl: './heroes-detail.component.html',
                styleUrls: ['./heroes-detail.component.css']
            }]
    }], function () { return []; }, { hero: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2VzLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcnZhc2lsaXkvaGVyb2VzLyIsInNvdXJjZXMiOlsibGliL2hlcm9lcy1kZXRhaWwvaGVyb2VzLWRldGFpbC5jb21wb25lbnQudHMiLCJsaWIvaGVyb2VzLWRldGFpbC9oZXJvZXMtZGV0YWlsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDOztBQUd2RDtJQVFFO0lBQWdCLENBQUM7SUFFakIsd0NBQVEsR0FBUjtJQUNBLENBQUM7OEZBTlUscUJBQXFCOzhEQUFyQixxQkFBcUI7WUNSbEMsMkJBQ0U7WUFBQSx5QkFBRztZQUFBLFlBQWU7WUFBQSxpQkFBSTtZQUN0Qix5QkFBRztZQUFBLFlBQW1CO1lBQUEsaUJBQUk7WUFDNUIsaUJBQU07O1lBRkQsZUFBZTtZQUFmLDhDQUFlO1lBQ2YsZUFBbUI7WUFBbkIsa0RBQW1COztnQ0RGeEI7Q0FnQkMsQUFiRCxJQWFDO1NBUlkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOztrQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIZXJvfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZXJvLWhlcm9lcy1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVyb2VzLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlcm9lcy1kZXRhaWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9lc0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGhlcm86IEhlcm87XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8ZGl2PlxuICA8cD5JZDoge3toZXJvLmlkfX08L3A+XG4gIDxwPk5hbWU6IHt7aGVyby5uYW1lfX08L3A+XG48L2Rpdj5cbiJdfQ==