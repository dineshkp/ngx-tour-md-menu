(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-tour-core'), require('@angular/material/menu'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/card'), require('@angular/material/icon'), require('withinviewport'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ngx-tour-md-menu', ['exports', '@angular/core', 'ngx-tour-core', '@angular/material/menu', '@angular/common', '@angular/material/button', '@angular/material/card', '@angular/material/icon', 'withinviewport', 'rxjs/operators'], factory) :
    (global = global || self, factory(global['ngx-tour-md-menu'] = {}, global.ng.core, global.ngxTourCore, global.ng.material.menu, global.ng.common, global.ng.material.button, global.ng.material.card, global.ng.material.icon, global.withinviewport, global.rxjs.operators));
}(this, (function (exports, core, ngxTourCore, menu, common, button, card, icon, withinviewport, operators) { 'use strict';

    withinviewport = withinviewport && Object.prototype.hasOwnProperty.call(withinviewport, 'default') ? withinviewport['default'] : withinviewport;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var NgxmTourService = /** @class */ (function (_super) {
        __extends(NgxmTourService, _super);
        function NgxmTourService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return NgxmTourService;
    }(ngxTourCore.TourService));
    NgxmTourService.decorators = [
        { type: core.Injectable }
    ];

    var TourAnchorOpenerComponent = /** @class */ (function () {
        function TourAnchorOpenerComponent() {
            this.menu = new menu.MatMenu(undefined, undefined, {
                xPosition: 'after',
                yPosition: 'below',
                overlapTrigger: true,
                backdropClass: ''
            });
        }
        return TourAnchorOpenerComponent;
    }());
    TourAnchorOpenerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'tourAnchorOpener',
                    template: "\n    <span [matMenuTriggerFor]=\"menu\" #trigger=\"matMenuTrigger\"></span>\n  ",
                    styles: ["\n      :host {\n        display: none;\n      }\n    "]
                },] }
    ];
    TourAnchorOpenerComponent.propDecorators = {
        menu: [{ type: core.Input }],
        trigger: [{ type: core.ViewChild, args: [menu.MatMenuTrigger,] }]
    };

    var TourStepTemplateService = /** @class */ (function () {
        function TourStepTemplateService() {
        }
        return TourStepTemplateService;
    }());
    TourStepTemplateService.decorators = [
        { type: core.Injectable }
    ];

    var TourBackdropService = /** @class */ (function () {
        function TourBackdropService(rendererFactory) {
            this.renderer = rendererFactory.createRenderer(null, null);
        }
        TourBackdropService.prototype.show = function (targetElement) {
            var boundingRect = targetElement.nativeElement.getBoundingClientRect();
            if (!this.backdropElement) {
                this.backdropElement = this.renderer.createElement('div');
                this.renderer.addClass(this.backdropElement, 'ngx-tour_backdrop');
                this.renderer.appendChild(document.body, this.backdropElement);
            }
            this.setStyles(boundingRect);
        };
        TourBackdropService.prototype.close = function () {
            if (this.backdropElement) {
                this.renderer.removeChild(document.body, this.backdropElement);
                this.backdropElement = null;
            }
        };
        TourBackdropService.prototype.setStyles = function (boundingRect) {
            var e_1, _a;
            var styles = {
                position: 'fixed',
                width: boundingRect.width + 'px',
                height: boundingRect.height + 'px',
                top: boundingRect.top + 'px',
                left: boundingRect.left + 'px',
                'box-shadow': '0 0 0 9999px rgba(0, 0, 0, 0.7)',
                'z-index': '100'
            };
            try {
                for (var _b = __values(Object.keys(styles)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name = _c.value;
                    this.renderer.setStyle(this.backdropElement, name, styles[name]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        return TourBackdropService;
    }());
    TourBackdropService.decorators = [
        { type: core.Injectable }
    ];
    TourBackdropService.ctorParameters = function () { return [
        { type: core.RendererFactory2 }
    ]; };

    var TourAnchorMatMenuDirective = /** @class */ (function () {
        function TourAnchorMatMenuDirective(componentFactoryResolver, injector, viewContainer, element, tourService, tourStepTemplate, tourBackdrop) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.injector = injector;
            this.viewContainer = viewContainer;
            this.element = element;
            this.tourService = tourService;
            this.tourStepTemplate = tourStepTemplate;
            this.tourBackdrop = tourBackdrop;
            this.opener = this.viewContainer.createComponent(this.componentFactoryResolver.resolveComponentFactory(TourAnchorOpenerComponent)).instance;
        }
        TourAnchorMatMenuDirective.prototype.ngOnInit = function () {
            this.tourService.register(this.tourAnchor, this);
        };
        TourAnchorMatMenuDirective.prototype.ngOnDestroy = function () {
            this.tourService.unregister(this.tourAnchor);
        };
        TourAnchorMatMenuDirective.prototype.showTourStep = function (step) {
            var _this = this;
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
                .pipe(operators.first())
                .subscribe(function () {
                if (_this.tourService.getStatus() !== ngxTourCore.TourState.OFF) {
                    _this.tourService.end();
                }
                _this.tourBackdrop.close();
            });
        };
        TourAnchorMatMenuDirective.prototype.hideTourStep = function () {
            this.isActive = false;
            if (this.menuCloseSubscription) {
                this.menuCloseSubscription.unsubscribe();
            }
            this.opener.trigger.closeMenu();
            if (this.tourService.getStatus() === ngxTourCore.TourState.OFF) {
                this.tourBackdrop.close();
            }
        };
        return TourAnchorMatMenuDirective;
    }());
    TourAnchorMatMenuDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tourAnchor]'
                },] }
    ];
    TourAnchorMatMenuDirective.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.Injector },
        { type: core.ViewContainerRef },
        { type: core.ElementRef },
        { type: NgxmTourService },
        { type: TourStepTemplateService },
        { type: TourBackdropService }
    ]; };
    TourAnchorMatMenuDirective.propDecorators = {
        tourAnchor: [{ type: core.Input }],
        isActive: [{ type: core.HostBinding, args: ['class.touranchor--is-active',] }]
    };

    var TourStepTemplateComponent = /** @class */ (function (_super) {
        __extends(TourStepTemplateComponent, _super);
        function TourStepTemplateComponent(tourStepTemplateService, tourService) {
            var _this = _super.call(this, tourService) || this;
            _this.tourStepTemplateService = tourStepTemplateService;
            _this.tourService = tourService;
            _this.step = {};
            return _this;
        }
        TourStepTemplateComponent.prototype.ngAfterViewInit = function () {
            this.tourStepTemplateService.templateComponent = this;
        };
        return TourStepTemplateComponent;
    }(ngxTourCore.TourHotkeyListenerComponent));
    TourStepTemplateComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'tour-step-template',
                    template: "\n    <mat-menu [overlapTrigger]=\"false\" class=\"tour-step\">\n      <ng-container\n        *ngTemplateOutlet=\"\n          stepTemplate || stepTemplateContent || defaultTemplate;\n          context: { step: step }\n        \"\n      ></ng-container>\n    </mat-menu>\n    <ng-template #defaultTemplate let-step=\"step\">\n      <mat-card (click)=\"$event.stopPropagation()\">\n        <mat-card-title>\n          {{ step?.title }}\n        </mat-card-title>\n        <mat-card-content>\n          {{ step?.content }}\n        </mat-card-content>\n        <mat-card-actions>\n          <button\n            mat-icon-button\n            [disabled]=\"!tourService.hasPrev(step)\"\n            (click)=\"tourService.prev()\"\n          >\n            <mat-icon>chevron_left</mat-icon>\n          </button>\n          <button\n            mat-icon-button\n            [disabled]=\"!tourService.hasNext(step)\"\n            (click)=\"tourService.next()\"\n          >\n            <mat-icon>chevron_right</mat-icon>\n          </button>\n          <button mat-button (click)=\"tourService.end()\">\n            {{ step?.endBtnTitle }}\n          </button>\n        </mat-card-actions>\n      </mat-card>\n    </ng-template>\n  ",
                    styles: ["\n      ::ng-deep .tour-step .mat-menu-content {\n        padding: 0 !important;\n      }\n    "]
                },] }
    ];
    TourStepTemplateComponent.ctorParameters = function () { return [
        { type: TourStepTemplateService },
        { type: NgxmTourService }
    ]; };
    TourStepTemplateComponent.propDecorators = {
        tourStep: [{ type: core.ViewChild, args: [menu.MatMenu,] }],
        stepTemplate: [{ type: core.Input }],
        stepTemplateContent: [{ type: core.ContentChild, args: [core.TemplateRef,] }]
    };

    var TourMatMenuModule = /** @class */ (function () {
        function TourMatMenuModule() {
        }
        TourMatMenuModule.forRoot = function () {
            return {
                ngModule: TourMatMenuModule,
                providers: [
                    TourStepTemplateService,
                    TourBackdropService,
                    ngxTourCore.TourService,
                    NgxmTourService
                ]
            };
        };
        return TourMatMenuModule;
    }());
    TourMatMenuModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourAnchorOpenerComponent],
                    entryComponents: [TourAnchorOpenerComponent],
                    exports: [TourAnchorMatMenuDirective, TourStepTemplateComponent, ngxTourCore.TourModule],
                    imports: [common.CommonModule, ngxTourCore.TourModule,
                        menu.MatMenuModule, card.MatCardModule, button.MatButtonModule, icon.MatIconModule,
                    ],
                },] }
    ];

    /*
     * Public API Surface of ngx-tour-md-menu
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TourAnchorMatMenuDirective = TourAnchorMatMenuDirective;
    exports.TourMatMenuModule = TourMatMenuModule;
    exports.TourService = NgxmTourService;
    exports.TourStepTemplateComponent = TourStepTemplateComponent;
    exports.ɵa = NgxmTourService;
    exports.ɵb = TourStepTemplateService;
    exports.ɵc = TourBackdropService;
    exports.ɵd = TourAnchorOpenerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-tour-md-menu.umd.js.map
