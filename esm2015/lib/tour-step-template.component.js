import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { TourHotkeyListenerComponent } from 'ngx-tour-core';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgxmTourService } from './ngx-md-menu-tour.service';
export class TourStepTemplateComponent extends TourHotkeyListenerComponent {
    constructor(tourStepTemplateService, tourService) {
        super(tourService);
        this.tourStepTemplateService = tourStepTemplateService;
        this.tourService = tourService;
        this.step = {};
    }
    ngAfterViewInit() {
        this.tourStepTemplateService.templateComponent = this;
    }
}
TourStepTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'tour-step-template',
                template: `
    <mat-menu [overlapTrigger]="false" class="tour-step">
      <ng-container
        *ngTemplateOutlet="
          stepTemplate || stepTemplateContent || defaultTemplate;
          context: { step: step }
        "
      ></ng-container>
    </mat-menu>
    <ng-template #defaultTemplate let-step="step">
      <mat-card (click)="$event.stopPropagation()">
        <mat-card-title>
          {{ step?.title }}
        </mat-card-title>
        <mat-card-content>
          {{ step?.content }}
        </mat-card-content>
        <mat-card-actions>
          <button
            mat-icon-button
            [disabled]="!tourService.hasPrev(step)"
            (click)="tourService.prev()"
          >
            <mat-icon>chevron_left</mat-icon>
          </button>
          <button
            mat-icon-button
            [disabled]="!tourService.hasNext(step)"
            (click)="tourService.next()"
          >
            <mat-icon>chevron_right</mat-icon>
          </button>
          <button mat-button (click)="tourService.end()">
            {{ step?.endBtnTitle }}
          </button>
        </mat-card-actions>
      </mat-card>
    </ng-template>
  `,
                styles: [`
      ::ng-deep .tour-step .mat-menu-content {
        padding: 0 !important;
      }
    `]
            },] }
];
TourStepTemplateComponent.ctorParameters = () => [
    { type: TourStepTemplateService },
    { type: NgxmTourService }
];
TourStepTemplateComponent.propDecorators = {
    tourStep: [{ type: ViewChild, args: [MatMenu,] }],
    stepTemplate: [{ type: Input }],
    stepTemplateContent: [{ type: ContentChild, args: [TemplateRef,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9kaW5lc2gvV29ya3NwYWNlcy9EaW5lc2gvbmd4LXRvdXIvcHJvamVjdHMvbmd4LXRvdXItbWQtbWVudS9zcmMvIiwic291cmNlcyI6WyJsaWIvdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFlLDJCQUEyQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQW1EN0QsTUFBTSxPQUFPLHlCQUEwQixTQUFRLDJCQUEyQjtJQVl4RSxZQUNVLHVCQUFnRCxFQUNqRCxXQUE0QjtRQUVuQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFIWCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2pELGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUo5QixTQUFJLEdBQWdCLEVBQUUsQ0FBQztJQU85QixDQUFDO0lBRU0sZUFBZTtRQUNwQixJQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQ3hELENBQUM7OztZQXRFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFROUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNDVDt5QkE1Q0M7Ozs7S0FJQzthQXlDSjs7O1lBbkRRLHVCQUF1QjtZQUN2QixlQUFlOzs7dUJBcURyQixTQUFTLFNBQUMsT0FBTzsyQkFFakIsS0FBSztrQ0FHTCxZQUFZLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdE1lbnUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7IElTdGVwT3B0aW9uLCBUb3VySG90a2V5TGlzdGVuZXJDb21wb25lbnQgfSBmcm9tICduZ3gtdG91ci1jb3JlJztcblxuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5neG1Ub3VyU2VydmljZSB9IGZyb20gJy4vbmd4LW1kLW1lbnUtdG91ci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG91ci1zdGVwLXRlbXBsYXRlJyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgOjpuZy1kZWVwIC50b3VyLXN0ZXAgLm1hdC1tZW51LWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgYFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtbWVudSBbb3ZlcmxhcFRyaWdnZXJdPVwiZmFsc2VcIiBjbGFzcz1cInRvdXItc3RlcFwiPlxuICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cIlxuICAgICAgICAgIHN0ZXBUZW1wbGF0ZSB8fCBzdGVwVGVtcGxhdGVDb250ZW50IHx8IGRlZmF1bHRUZW1wbGF0ZTtcbiAgICAgICAgICBjb250ZXh0OiB7IHN0ZXA6IHN0ZXAgfVxuICAgICAgICBcIlxuICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgIDwvbWF0LW1lbnU+XG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGUgbGV0LXN0ZXA9XCJzdGVwXCI+XG4gICAgICA8bWF0LWNhcmQgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+XG4gICAgICAgICAge3sgc3RlcD8udGl0bGUgfX1cbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAge3sgc3RlcD8uY29udGVudCB9fVxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiF0b3VyU2VydmljZS5oYXNQcmV2KHN0ZXApXCJcbiAgICAgICAgICAgIChjbGljayk9XCJ0b3VyU2VydmljZS5wcmV2KClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtYXQtaWNvbj5jaGV2cm9uX2xlZnQ8L21hdC1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiF0b3VyU2VydmljZS5oYXNOZXh0KHN0ZXApXCJcbiAgICAgICAgICAgIChjbGljayk9XCJ0b3VyU2VydmljZS5uZXh0KClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtYXQtaWNvbj5jaGV2cm9uX3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInRvdXJTZXJ2aWNlLmVuZCgpXCI+XG4gICAgICAgICAgICB7eyBzdGVwPy5lbmRCdG5UaXRsZSB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XG4gICAgICA8L21hdC1jYXJkPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKE1hdE1lbnUpIHB1YmxpYyB0b3VyU3RlcDogTWF0TWVudTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc3RlcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7IHN0ZXA6IElTdGVwT3B0aW9uIH0+O1xuXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpXG4gIHB1YmxpYyBzdGVwVGVtcGxhdGVDb250ZW50OiBUZW1wbGF0ZVJlZjx7IHN0ZXA6IElTdGVwT3B0aW9uIH0+O1xuXG4gIHB1YmxpYyBzdGVwOiBJU3RlcE9wdGlvbiA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdG91clN0ZXBUZW1wbGF0ZVNlcnZpY2U6IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLFxuICAgIHB1YmxpYyB0b3VyU2VydmljZTogTmd4bVRvdXJTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKHRvdXJTZXJ2aWNlKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy50b3VyU3RlcFRlbXBsYXRlU2VydmljZS50ZW1wbGF0ZUNvbXBvbmVudCA9IHRoaXM7XG4gIH1cbn1cbiJdfQ==