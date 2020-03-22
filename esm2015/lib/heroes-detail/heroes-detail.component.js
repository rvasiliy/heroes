import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class HeroesDetailComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2VzLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcnZhc2lsaXkvaGVyb2VzLyIsInNvdXJjZXMiOlsibGliL2hlcm9lcy1kZXRhaWwvaGVyb2VzLWRldGFpbC5jb21wb25lbnQudHMiLCJsaWIvaGVyb2VzLWRldGFpbC9oZXJvZXMtZGV0YWlsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDOztBQVF2RCxNQUFNLE9BQU8scUJBQXFCO0lBR2hDO0lBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OzBGQU5VLHFCQUFxQjswREFBckIscUJBQXFCO1FDUmxDLDJCQUNFO1FBQUEseUJBQUc7UUFBQSxZQUFlO1FBQUEsaUJBQUk7UUFDdEIseUJBQUc7UUFBQSxZQUFtQjtRQUFBLGlCQUFJO1FBQzVCLGlCQUFNOztRQUZELGVBQWU7UUFBZiw4Q0FBZTtRQUNmLGVBQW1CO1FBQW5CLGtEQUFtQjs7a0RETVgscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3Qzs7a0JBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SGVyb30gZnJvbSAnLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVyby1oZXJvZXMtZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlcm9lcy1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZXJvZXMtZGV0YWlsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZXJvZXNEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBoZXJvOiBIZXJvO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPGRpdj5cbiAgPHA+SWQ6IHt7aGVyby5pZH19PC9wPlxuICA8cD5OYW1lOiB7e2hlcm8ubmFtZX19PC9wPlxuPC9kaXY+XG4iXX0=