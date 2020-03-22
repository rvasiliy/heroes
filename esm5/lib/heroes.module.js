import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesService } from './services';
import * as i0 from "@angular/core";
var HeroesModule = /** @class */ (function () {
    function HeroesModule() {
    }
    HeroesModule.ɵmod = i0.ɵɵdefineNgModule({ type: HeroesModule });
    HeroesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function HeroesModule_Factory(t) { return new (t || HeroesModule)(); }, providers: [HeroesService], imports: [[
                CommonModule,
                RouterModule
            ]] });
    return HeroesModule;
}());
export { HeroesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HeroesModule, { declarations: [HeroesListComponent, HeroesDetailComponent], imports: [CommonModule,
        RouterModule], exports: [HeroesListComponent, HeroesDetailComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeroesModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2VzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BydmFzaWxpeS9oZXJvZXMvIiwic291cmNlcyI6WyJsaWIvaGVyb2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLFlBQVksQ0FBQzs7QUFFekM7SUFBQTtLQVM2QjtvREFBaEIsWUFBWTsyR0FBWixZQUFZLG1CQUZaLENBQUMsYUFBYSxDQUFDLFlBTGpCO2dCQUNQLFlBQVk7Z0JBQ1osWUFBWTthQUNiO3VCQVpIO0NBZ0I2QixBQVQ3QixJQVM2QjtTQUFoQixZQUFZO3dGQUFaLFlBQVksbUJBUlIsbUJBQW1CLEVBQUUscUJBQXFCLGFBRXZELFlBQVk7UUFDWixZQUFZLGFBRUosbUJBQW1CLEVBQUUscUJBQXFCO2tEQUd6QyxZQUFZO2NBVHhCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQztnQkFDMUQsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQztnQkFDckQsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIZXJvZXNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9oZXJvZXMtbGlzdC9oZXJvZXMtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVyb2VzRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9oZXJvZXMtZGV0YWlsL2hlcm9lcy1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7SGVyb2VzU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0hlcm9lc0xpc3RDb21wb25lbnQsIEhlcm9lc0RldGFpbENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtIZXJvZXNMaXN0Q29tcG9uZW50LCBIZXJvZXNEZXRhaWxDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtIZXJvZXNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBIZXJvZXNNb2R1bGUgeyB9XG4iXX0=