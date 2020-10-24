import { Injectable, Component, Input, ViewChild, RendererFactory2, Directive, ComponentFactoryResolver, Injector, ViewContainerRef, ElementRef, HostBinding, ContentChild, TemplateRef, NgModule } from '@angular/core';
import { TourService, TourState, TourHotkeyListenerComponent, TourModule } from 'ngx-tour-core';
import { MatMenu, MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import withinviewport from 'withinviewport';
import { first } from 'rxjs/operators';

class NgxmTourService extends TourService {
}
NgxmTourService.decorators = [
    { type: Injectable }
];

class TourAnchorOpenerComponent {
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

class TourStepTemplateService {
}
TourStepTemplateService.decorators = [
    { type: Injectable }
];

class TourBackdropService {
    constructor(rendererFactory) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    show(targetElement) {
        const boundingRect = targetElement.nativeElement.getBoundingClientRect();
        if (!this.backdropElement) {
            this.backdropElement = this.renderer.createElement('div');
            this.renderer.addClass(this.backdropElement, 'ngx-tour_backdrop');
            this.renderer.appendChild(document.body, this.backdropElement);
        }
        this.setStyles(boundingRect);
    }
    close() {
        if (this.backdropElement) {
            this.renderer.removeChild(document.body, this.backdropElement);
            this.backdropElement = null;
        }
    }
    setStyles(boundingRect) {
        const styles = {
            position: 'fixed',
            width: boundingRect.width + 'px',
            height: boundingRect.height + 'px',
            top: boundingRect.top + 'px',
            left: boundingRect.left + 'px',
            'box-shadow': '0 0 0 9999px rgba(0, 0, 0, 0.7)',
            'z-index': '100'
        };
        for (const name of Object.keys(styles)) {
            this.renderer.setStyle(this.backdropElement, name, styles[name]);
        }
    }
}
TourBackdropService.decorators = [
    { type: Injectable }
];
TourBackdropService.ctorParameters = () => [
    { type: RendererFactory2 }
];

class TourAnchorMatMenuDirective {
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

class TourStepTemplateComponent extends TourHotkeyListenerComponent {
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

class TourMatMenuModule {
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

/*
 * Public API Surface of ngx-tour-md-menu
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TourAnchorMatMenuDirective, TourMatMenuModule, NgxmTourService as TourService, TourStepTemplateComponent, NgxmTourService as ɵa, TourStepTemplateService as ɵb, TourBackdropService as ɵc, TourAnchorOpenerComponent as ɵd };
//# sourceMappingURL=ngx-tour-md-menu.js.map
