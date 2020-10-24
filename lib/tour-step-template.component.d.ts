import { AfterViewInit, TemplateRef } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { IStepOption, TourHotkeyListenerComponent } from 'ngx-tour-core';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgxmTourService } from './ngx-md-menu-tour.service';
export declare class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterViewInit {
    private tourStepTemplateService;
    tourService: NgxmTourService;
    tourStep: MatMenu;
    stepTemplate: TemplateRef<{
        step: IStepOption;
    }>;
    stepTemplateContent: TemplateRef<{
        step: IStepOption;
    }>;
    step: IStepOption;
    constructor(tourStepTemplateService: TourStepTemplateService, tourService: NgxmTourService);
    ngAfterViewInit(): void;
}
