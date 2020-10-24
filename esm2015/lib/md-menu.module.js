import { TourAnchorOpenerComponent } from './tour-anchor-opener.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TourModule, TourService } from 'ngx-tour-core';
import { TourAnchorMatMenuDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { TourBackdropService } from './tour-backdrop.service';
import { NgxmTourService } from './ngx-md-menu-tour.service';
export { TourAnchorMatMenuDirective, TourStepTemplateComponent, NgxmTourService };
export class TourMatMenuModule {
    static forRoot() {
        return {
            ngModule: TourMatMenuModule,
            providers: [
                TourStepTemplateService,
                TourBackdropService,
                TourService,
                NgxmTourService
            ]
        };
    }
}
TourMatMenuModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourAnchorOpenerComponent],
                entryComponents: [TourAnchorOpenerComponent],
                exports: [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourModule],
                imports: [CommonModule, TourModule,
                    MatMenuModule, MatCardModule, MatButtonModule, MatIconModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZGluZXNoL1dvcmtzcGFjZXMvRGluZXNoL25neC10b3VyL3Byb2plY3RzL25neC10b3VyLW1kLW1lbnUvc3JjLyIsInNvdXJjZXMiOlsibGliL21kLW1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRTNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSxlQUFlLEVBQUUsQ0FBQztBQVVsRixNQUFNLE9BQU8saUJBQWlCO0lBQ3JCLE1BQU0sQ0FBQyxPQUFPO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDVCx1QkFBdUI7Z0JBQ3ZCLG1CQUFtQjtnQkFDbkIsV0FBVztnQkFDWCxlQUFlO2FBQ2hCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQW5CRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUseUJBQXlCLENBQUM7Z0JBQ2hHLGVBQWUsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUM1QyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSxVQUFVLENBQUM7Z0JBQzVFLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVO29CQUNoQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxhQUFhO2lCQUM3RDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG91ckFuY2hvck9wZW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG91ci1hbmNob3Itb3BlbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5cbmltcG9ydCB7VG91ck1vZHVsZSwgVG91clNlcnZpY2V9IGZyb20gJ25neC10b3VyLWNvcmUnO1xuaW1wb3J0IHsgVG91ckFuY2hvck1hdE1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL3RvdXItYW5jaG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XG5pbXBvcnQge1RvdXJCYWNrZHJvcFNlcnZpY2V9IGZyb20gJy4vdG91ci1iYWNrZHJvcC5zZXJ2aWNlJztcbmltcG9ydCB7Tmd4bVRvdXJTZXJ2aWNlfSBmcm9tICcuL25neC1tZC1tZW51LXRvdXIuc2VydmljZSc7XG5cbmV4cG9ydCB7IFRvdXJBbmNob3JNYXRNZW51RGlyZWN0aXZlLCBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50LCBOZ3htVG91clNlcnZpY2UgfTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVG91ckFuY2hvck1hdE1lbnVEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQsIFRvdXJBbmNob3JPcGVuZXJDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1RvdXJBbmNob3JNYXRNZW51RGlyZWN0aXZlLCBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50LCBUb3VyTW9kdWxlXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVG91ck1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLCBNYXRDYXJkTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJNYXRNZW51TW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VG91ck1hdE1lbnVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRvdXJNYXRNZW51TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLFxuICAgICAgICBUb3VyQmFja2Ryb3BTZXJ2aWNlLFxuICAgICAgICBUb3VyU2VydmljZSxcbiAgICAgICAgTmd4bVRvdXJTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19