import { ComponentFactoryResolver, Directive, ElementRef, HostBinding, Injector, Input, ViewContainerRef } from '@angular/core';
import { TourState } from 'ngx-tour-core';
import withinviewport from 'withinviewport';
import { TourAnchorOpenerComponent } from './tour-anchor-opener.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { first } from 'rxjs/operators';
import { TourBackdropService } from './tour-backdrop.service';
import { NgxmTourService } from './ngx-md-menu-tour.service';
export class TourAnchorMatMenuDirective {
    constructor(componentFactoryResolver, injector, viewContainer, element, tourService, tourStepTemplate, tourBackdrop) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.viewContainer = viewContainer;
        this.element = element;
        this.tourService = tourService;
        this.tourStepTemplate = tourStepTemplate;
        this.tourBackdrop = tourBackdrop;
        this.opener = this.viewContainer.createComponent(this.componentFactoryResolver.resolveComponentFactory(TourAnchorOpenerComponent)).instance;
    }
    ngOnInit() {
        this.tourService.register(this.tourAnchor, this);
    }
    ngOnDestroy() {
        this.tourService.unregister(this.tourAnchor);
    }
    showTourStep(step) {
        this.isActive = true;
        this.tourStepTemplate.templateComponent.step = step;
        // Ignore step.placement
        if (!step.preventScrolling) {
            if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
                this.element.nativeElement.scrollIntoView(false);
            }
            else if (!withinviewport(this.element.nativeElement, { sides: 'left top right' })) {
                this.element.nativeElement.scrollIntoView(true);
            }
        }
        this.opener.trigger._element = this.element;
        this.opener.trigger.menu = this.tourStepTemplate.templateComponent.tourStep;
        this.opener.trigger.ngAfterContentInit();
        this.opener.trigger.openMenu();
        if (step.enableBackdrop) {
            this.tourBackdrop.show(this.element);
        }
        else {
            this.tourBackdrop.close();
        }
        step.prevBtnTitle = step.prevBtnTitle || 'Prev';
        step.nextBtnTitle = step.nextBtnTitle || 'Next';
        step.endBtnTitle = step.endBtnTitle || 'End';
        if (this.menuCloseSubscription) {
            this.menuCloseSubscription.unsubscribe();
        }
        this.menuCloseSubscription = this.opener.trigger.menuClosed
            .pipe(first())
            .subscribe(() => {
            if (this.tourService.getStatus() !== TourState.OFF) {
                this.tourService.end();
            }
            this.tourBackdrop.close();
        });
    }
    hideTourStep() {
        this.isActive = false;
        if (this.menuCloseSubscription) {
            this.menuCloseSubscription.unsubscribe();
        }
        this.opener.trigger.closeMenu();
        if (this.tourService.getStatus() === TourState.OFF) {
            this.tourBackdrop.close();
        }
    }
}
TourAnchorMatMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tourAnchor]'
            },] }
];
TourAnchorMatMenuDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: ViewContainerRef },
    { type: ElementRef },
    { type: NgxmTourService },
    { type: TourStepTemplateService },
    { type: TourBackdropService }
];
TourAnchorMatMenuDirective.propDecorators = {
    tourAnchor: [{ type: Input }],
    isActive: [{ type: HostBinding, args: ['class.touranchor--is-active',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2RpbmVzaC9Xb3Jrc3BhY2VzL0RpbmVzaC9uZ3gtdG91ci9wcm9qZWN0cy9uZ3gtdG91ci1tZC1tZW51L3NyYy8iLCJzb3VyY2VzIjpbImxpYi90b3VyLWFuY2hvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxRQUFRLEVBQ1IsS0FBSyxFQUNMLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBRUwsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sY0FBYyxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUU1RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFLM0QsTUFBTSxPQUFPLDBCQUEwQjtJQVFyQyxZQUNVLHdCQUFrRCxFQUNsRCxRQUFrQixFQUNsQixhQUErQixFQUMvQixPQUFtQixFQUNuQixXQUE0QixFQUM1QixnQkFBeUMsRUFDekMsWUFBaUM7UUFOakMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUV6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUM5QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQ25ELHlCQUF5QixDQUMxQixDQUNGLENBQUMsUUFBUSxDQUFDO0lBQ2IsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sWUFBWSxDQUFDLElBQWlCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3BELHdCQUF3QjtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFjLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pFO2lCQUFNLElBQ0wsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUN4RTtnQkFDYyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEU7U0FDRjtRQUNLLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1FBQzVFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFL0IsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDO1FBRTdDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVO2FBQ3hELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNiLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUN4QjtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDMUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7O1lBckZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7O1lBekJDLHdCQUF3QjtZQUl4QixRQUFRO1lBRVIsZ0JBQWdCO1lBSmhCLFVBQVU7WUFtQkosZUFBZTtZQUpkLHVCQUF1QjtZQUV4QixtQkFBbUI7Ozt5QkFTeEIsS0FBSzt1QkFJTCxXQUFXLFNBQUMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7T25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVG91ckFuY2hvckRpcmVjdGl2ZSxcbiAgVG91clN0YXRlXG59IGZyb20gJ25neC10b3VyLWNvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgd2l0aGludmlld3BvcnQgZnJvbSAnd2l0aGludmlld3BvcnQnO1xuXG5pbXBvcnQgeyBUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b3VyLWFuY2hvci1vcGVuZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7VG91ckJhY2tkcm9wU2VydmljZX0gZnJvbSAnLi90b3VyLWJhY2tkcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHsgSU5neG1TdGVwT3B0aW9uIGFzIElTdGVwT3B0aW9uIH0gZnJvbSAnLi9zdGVwLW9wdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHtOZ3htVG91clNlcnZpY2V9IGZyb20gJy4vbmd4LW1kLW1lbnUtdG91ci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RvdXJBbmNob3JdJ1xufSlcbmV4cG9ydCBjbGFzcyBUb3VyQW5jaG9yTWF0TWVudURpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBUb3VyQW5jaG9yRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgcHVibGljIHRvdXJBbmNob3I6IHN0cmluZztcbiAgcHVibGljIG9wZW5lcjogVG91ckFuY2hvck9wZW5lckNvbXBvbmVudDtcbiAgcHVibGljIG1lbnVDbG9zZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudG91cmFuY2hvci0taXMtYWN0aXZlJykgcHVibGljIGlzQWN0aXZlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRvdXJTZXJ2aWNlOiBOZ3htVG91clNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b3VyU3RlcFRlbXBsYXRlOiBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIHRvdXJCYWNrZHJvcDogVG91ckJhY2tkcm9wU2VydmljZVxuICApIHtcbiAgICB0aGlzLm9wZW5lciA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoXG4gICAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgVG91ckFuY2hvck9wZW5lckNvbXBvbmVudFxuICAgICAgKVxuICAgICkuaW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50b3VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnRvdXJBbmNob3IsIHRoaXMpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudG91clNlcnZpY2UudW5yZWdpc3Rlcih0aGlzLnRvdXJBbmNob3IpO1xuICB9XG5cbiAgcHVibGljIHNob3dUb3VyU3RlcChzdGVwOiBJU3RlcE9wdGlvbik6IHZvaWQge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMudG91clN0ZXBUZW1wbGF0ZS50ZW1wbGF0ZUNvbXBvbmVudC5zdGVwID0gc3RlcDtcbiAgICAvLyBJZ25vcmUgc3RlcC5wbGFjZW1lbnRcbiAgICBpZiAoIXN0ZXAucHJldmVudFNjcm9sbGluZykge1xuICAgICAgaWYgKCF3aXRoaW52aWV3cG9ydCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgeyBzaWRlczogJ2JvdHRvbScgfSkpIHtcbiAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgIXdpdGhpbnZpZXdwb3J0KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7IHNpZGVzOiAnbGVmdCB0b3AgcmlnaHQnIH0pXG4gICAgICApIHtcbiAgICAgICAgKDxIVE1MRWxlbWVudD50aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgICg8YW55PnRoaXMub3BlbmVyLnRyaWdnZXIpLl9lbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgIHRoaXMub3BlbmVyLnRyaWdnZXIubWVudSA9IHRoaXMudG91clN0ZXBUZW1wbGF0ZS50ZW1wbGF0ZUNvbXBvbmVudC50b3VyU3RlcDtcbiAgICB0aGlzLm9wZW5lci50cmlnZ2VyLm5nQWZ0ZXJDb250ZW50SW5pdCgpO1xuICAgIHRoaXMub3BlbmVyLnRyaWdnZXIub3Blbk1lbnUoKTtcblxuICAgIGlmIChzdGVwLmVuYWJsZUJhY2tkcm9wKSB7XG4gICAgICB0aGlzLnRvdXJCYWNrZHJvcC5zaG93KHRoaXMuZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG91ckJhY2tkcm9wLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgc3RlcC5wcmV2QnRuVGl0bGUgPSBzdGVwLnByZXZCdG5UaXRsZSB8fCAnUHJldic7XG4gICAgc3RlcC5uZXh0QnRuVGl0bGUgPSBzdGVwLm5leHRCdG5UaXRsZSB8fCAnTmV4dCc7XG4gICAgc3RlcC5lbmRCdG5UaXRsZSA9IHN0ZXAuZW5kQnRuVGl0bGUgfHwgJ0VuZCc7XG5cbiAgICBpZiAodGhpcy5tZW51Q2xvc2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMubWVudUNsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMubWVudUNsb3NlU3Vic2NyaXB0aW9uID0gdGhpcy5vcGVuZXIudHJpZ2dlci5tZW51Q2xvc2VkXG4gICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnRvdXJTZXJ2aWNlLmdldFN0YXR1cygpICE9PSBUb3VyU3RhdGUuT0ZGKSB7XG4gICAgICAgICAgdGhpcy50b3VyU2VydmljZS5lbmQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvdXJCYWNrZHJvcC5jbG9zZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaGlkZVRvdXJTdGVwKCk6IHZvaWQge1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5tZW51Q2xvc2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMubWVudUNsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMub3BlbmVyLnRyaWdnZXIuY2xvc2VNZW51KCk7XG4gICAgaWYgKHRoaXMudG91clNlcnZpY2UuZ2V0U3RhdHVzKCkgPT09IFRvdXJTdGF0ZS5PRkYpIHtcbiAgICAgIHRoaXMudG91ckJhY2tkcm9wLmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=