import { Component, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger, MatMenu } from '@angular/material/menu';
export class TourAnchorOpenerComponent {
    constructor() {
        this.menu = new MatMenu(undefined, undefined, {
            xPosition: 'after',
            yPosition: 'below',
            overlapTrigger: true,
            backdropClass: ''
        });
    }
}
TourAnchorOpenerComponent.decorators = [
    { type: Component, args: [{
                selector: 'tourAnchorOpener',
                template: `
    <span [matMenuTriggerFor]="menu" #trigger="matMenuTrigger"></span>
  `,
                styles: [`
      :host {
        display: none;
      }
    `]
            },] }
];
TourAnchorOpenerComponent.propDecorators = {
    menu: [{ type: Input }],
    trigger: [{ type: ViewChild, args: [MatMenuTrigger,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3Itb3BlbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9kaW5lc2gvV29ya3NwYWNlcy9EaW5lc2gvbmd4LXRvdXIvcHJvamVjdHMvbmd4LXRvdXItbWQtbWVudS9zcmMvIiwic291cmNlcyI6WyJsaWIvdG91ci1hbmNob3Itb3BlbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWVqRSxNQUFNLE9BQU8seUJBQXlCO0lBYnRDO1FBY1csU0FBSSxHQUFZLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7WUFDekQsU0FBUyxFQUFFLE9BQU87WUFDbEIsU0FBUyxFQUFFLE9BQU87WUFDbEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsYUFBYSxFQUFFLEVBQUU7U0FDbEIsQ0FBQyxDQUFDO0lBR0wsQ0FBQzs7O1lBdEJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQVE1QixRQUFRLEVBQUU7O0dBRVQ7eUJBUkM7Ozs7S0FJQzthQUtKOzs7bUJBRUUsS0FBSztzQkFPTCxTQUFTLFNBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0TWVudVRyaWdnZXIsIE1hdE1lbnUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG91ckFuY2hvck9wZW5lcicsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICBgXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiAjdHJpZ2dlcj1cIm1hdE1lbnVUcmlnZ2VyXCI+PC9zcGFuPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJBbmNob3JPcGVuZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBtZW51OiBNYXRNZW51ID0gbmV3IE1hdE1lbnUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHtcbiAgICB4UG9zaXRpb246ICdhZnRlcicsXG4gICAgeVBvc2l0aW9uOiAnYmVsb3cnLFxuICAgIG92ZXJsYXBUcmlnZ2VyOiB0cnVlLFxuICAgIGJhY2tkcm9wQ2xhc3M6ICcnXG4gIH0pO1xuXG4gIEBWaWV3Q2hpbGQoTWF0TWVudVRyaWdnZXIpIHB1YmxpYyB0cmlnZ2VyOiBNYXRNZW51VHJpZ2dlcjtcbn1cbiJdfQ==