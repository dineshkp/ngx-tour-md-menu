import { ElementRef, RendererFactory2 } from '@angular/core';
export declare class TourBackdropService {
    private renderer;
    private backdropElement;
    constructor(rendererFactory: RendererFactory2);
    show(targetElement: ElementRef): void;
    close(): void;
    private setStyles;
}
