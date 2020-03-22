import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesService } from './services';
import * as i0 from "@angular/core";
export class HeroesModule {
}
HeroesModule.ɵmod = i0.ɵɵdefineNgModule({ type: HeroesModule });
HeroesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function HeroesModule_Factory(t) { return new (t || HeroesModule)(); }, providers: [HeroesService], imports: [[
            CommonModule,
            RouterModule
        ]] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2VzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BydmFzaWxpeS9oZXJvZXMvIiwic291cmNlcyI6WyJsaWIvaGVyb2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLFlBQVksQ0FBQzs7QUFXekMsTUFBTSxPQUFPLFlBQVk7O2dEQUFaLFlBQVk7dUdBQVosWUFBWSxtQkFGWixDQUFDLGFBQWEsQ0FBQyxZQUxqQjtZQUNQLFlBQVk7WUFDWixZQUFZO1NBQ2I7d0ZBSVUsWUFBWSxtQkFSUixtQkFBbUIsRUFBRSxxQkFBcUIsYUFFdkQsWUFBWTtRQUNaLFlBQVksYUFFSixtQkFBbUIsRUFBRSxxQkFBcUI7a0RBR3pDLFlBQVk7Y0FUeEIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDO2dCQUMxRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDO2dCQUNyRCxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhlcm9lc0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2hlcm9lcy1saXN0L2hlcm9lcy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZXJvZXNEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2hlcm9lcy1kZXRhaWwvaGVyb2VzLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHtIZXJvZXNTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbSGVyb2VzTGlzdENvbXBvbmVudCwgSGVyb2VzRGV0YWlsQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0hlcm9lc0xpc3RDb21wb25lbnQsIEhlcm9lc0RldGFpbENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0hlcm9lc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9lc01vZHVsZSB7IH1cbiJdfQ==