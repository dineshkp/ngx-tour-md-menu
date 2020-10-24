import { ComponentFactoryResolver, ElementRef, Injector, ViewContainerRef } from '@angular/core';
import type { OnDestroy, OnInit } from '@angular/core';
import { TourAnchorDirective } from 'ngx-tour-core';
import { Subscription } from 'rxjs';
import { TourAnchorOpenerComponent } from './tour-anchor-opener.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { TourBackdropService } from './tour-backdrop.service';
import { INgxmStepOption as IStepOption } from './step-option.interface';
import { NgxmTourService } from './ngx-md-menu-tour.service';
export declare class TourAnchorMatMenuDirective implements OnInit, OnDestroy, TourAnchorDirective {
    private componentFactoryResolver;
    private injector;
    private viewContainer;
    private element;
    private tourService;
    private tourStepTemplate;
    private tourBackdrop;
    tourAnchor: string;
    opener: TourAnchorOpenerComponent;
    menuCloseSubscription: Subscription;
    isActive: boolean;
    constructor(componentFactoryResolver: ComponentFactoryResolver, injector: Injector, viewContainer: ViewContainerRef, element: ElementRef, tourService: NgxmTourService, tourStepTemplate: TourStepTemplateService, tourBackdrop: TourBackdropService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    showTourStep(step: IStepOption): void;
    hideTourStep(): void;
}
