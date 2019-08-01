/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, NgModule, NgZone, Output, Renderer2, ChangeDetectorRef } from '@angular/core';
import { animationFrameScheduler, fromEvent, interval, Subject } from 'rxjs';
import { takeUntil, throttle } from 'rxjs/operators';
/** @enum {number} */
var RestrictDrag = {
    VERTICALLY: 0,
    HORIZONTALLY: 1,
    NONE: 2,
};
export { RestrictDrag };
RestrictDrag[RestrictDrag.VERTICALLY] = 'VERTICALLY';
RestrictDrag[RestrictDrag.HORIZONTALLY] = 'HORIZONTALLY';
RestrictDrag[RestrictDrag.NONE] = 'NONE';
/**
 * @record
 */
export function IgxDragCustomEventDetails() { }
if (false) {
    /** @type {?} */
    IgxDragCustomEventDetails.prototype.startX;
    /** @type {?} */
    IgxDragCustomEventDetails.prototype.startY;
    /** @type {?} */
    IgxDragCustomEventDetails.prototype.pageX;
    /** @type {?} */
    IgxDragCustomEventDetails.prototype.pageY;
    /** @type {?} */
    IgxDragCustomEventDetails.prototype.owner;
    /** @type {?} */
    IgxDragCustomEventDetails.prototype.originalEvent;
}
/**
 * @record
 */
export function IgxDropEnterEventArgs() { }
if (false) {
    /**
     * Reference to the original event that caused the draggable element to enter the igxDrop element.
     * Can be PointerEvent, TouchEvent or MouseEvent.
     * @type {?}
     */
    IgxDropEnterEventArgs.prototype.originalEvent;
    /**
     * The owner igxDrop directive that triggered this event.
     * @type {?}
     */
    IgxDropEnterEventArgs.prototype.owner;
    /**
     * The igxDrag directive instanced on an element that entered the area of the igxDrop element
     * @type {?}
     */
    IgxDropEnterEventArgs.prototype.drag;
    /**
     * The data contained for the draggable element in igxDrag directive.
     * @type {?}
     */
    IgxDropEnterEventArgs.prototype.dragData;
    /**
     * The initial position of the pointer on X axis when the dragged element began moving
     * @type {?}
     */
    IgxDropEnterEventArgs.prototype.startX;
    /**
     * The initial position of the pointer on Y axis when the dragged element began moving
     * @type {?}
     */
    IgxDropEnterEventArgs.prototype.startY;
    /**
     * The current position of the pointer on X axis when the event was triggered.
     * Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.
     * @type {?}
     */
    IgxDropEnterEventArgs.prototype.pageX;
    /**
     * The current position of the pointer on Y axis when the event was triggered.
     * Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.
     * @type {?}
     */
    IgxDropEnterEventArgs.prototype.pageY;
    /**
     * The current position of the pointer on X axis relative to the container that initializes the igxDrop.
     * Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.
     * @type {?}
     */
    IgxDropEnterEventArgs.prototype.offsetX;
    /**
     * The current position of the pointer on Y axis relative to the container that initializes the igxDrop.
     * Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.
     * @type {?}
     */
    IgxDropEnterEventArgs.prototype.offsetY;
}
/**
 * @record
 */
export function IgxDropLeaveEventArgs() { }
if (false) {
    /**
     * Reference to the original event that caused the draggable element to enter the igxDrop element.
     * Can be PointerEvent, TouchEvent or MouseEvent.
     * @type {?}
     */
    IgxDropLeaveEventArgs.prototype.originalEvent;
    /**
     * The owner igxDrop directive that triggered this event.
     * @type {?}
     */
    IgxDropLeaveEventArgs.prototype.owner;
    /**
     * The igxDrag directive instanced on an element that entered the area of the igxDrop element
     * @type {?}
     */
    IgxDropLeaveEventArgs.prototype.drag;
    /**
     * The data contained for the draggable element in igxDrag directive.
     * @type {?}
     */
    IgxDropLeaveEventArgs.prototype.dragData;
    /**
     * The initial position of the pointer on X axis when the dragged element began moving
     * @type {?}
     */
    IgxDropLeaveEventArgs.prototype.startX;
    /**
     * The initial position of the pointer on Y axis when the dragged element began moving
     * @type {?}
     */
    IgxDropLeaveEventArgs.prototype.startY;
    /**
     * The current position of the pointer on X axis when the event was triggered.
     * Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.
     * @type {?}
     */
    IgxDropLeaveEventArgs.prototype.pageX;
    /**
     * The current position of the pointer on Y axis when the event was triggered.
     * Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.
     * @type {?}
     */
    IgxDropLeaveEventArgs.prototype.pageY;
    /**
     * The current position of the pointer on X axis relative to the container that initializes the igxDrop.
     * Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.
     * @type {?}
     */
    IgxDropLeaveEventArgs.prototype.offsetX;
    /**
     * The current position of the pointer on Y axis relative to the container that initializes the igxDrop.
     * Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.
     * @type {?}
     */
    IgxDropLeaveEventArgs.prototype.offsetY;
}
/**
 * @record
 */
export function IgxDropEventArgs() { }
if (false) {
    /**
     * Reference to the original event that caused the draggable element to enter the igxDrop element.
     * Can be PointerEvent, TouchEvent or MouseEvent.
     * @type {?}
     */
    IgxDropEventArgs.prototype.originalEvent;
    /**
     * The owner igxDrop directive that triggered this event.
     * @type {?}
     */
    IgxDropEventArgs.prototype.owner;
    /**
     * The igxDrag directive instanced on an element that entered the area of the igxDrop element
     * @type {?}
     */
    IgxDropEventArgs.prototype.drag;
    /**
     * The data contained for the draggable element in igxDrag directive.
     * @type {?}
     */
    IgxDropEventArgs.prototype.dragData;
    /**
     * The current position of the pointer on X axis relative to the container that initializes the igxDrop.
     * Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.
     * @type {?}
     */
    IgxDropEventArgs.prototype.offsetX;
    /**
     * The current position of the pointer on Y axis relative to the container that initializes the igxDrop.
     * Note: The browser might trigger the event with some delay and pointer would be already inside the igxDrop.
     * @type {?}
     */
    IgxDropEventArgs.prototype.offsetY;
    /**
     * Whether the default drop behavior of the igxDrop directive should be canceled.
     * Note: If you implement custom behavior and you use `animateOnRelease` for the igxDrag make sure to call 'event.drag.dropFinished();'
     * to notify the igxDrag directive that it has been dropped so it animates properly.
     * @type {?}
     */
    IgxDropEventArgs.prototype.cancel;
}
/**
 * @record
 */
export function IDragBaseEventArgs() { }
if (false) {
    /**
     * Reference to the original event that caused the interaction with the element.
     * Can be PointerEvent, TouchEvent or MouseEvent.
     * @type {?}
     */
    IDragBaseEventArgs.prototype.originalEvent;
    /**
     * The owner igxDrag directive that triggered this event.
     * @type {?}
     */
    IDragBaseEventArgs.prototype.owner;
}
/**
 * @record
 */
export function IDragStartEventArgs() { }
if (false) {
    /**
     * Set if the the dragging should be canceled.
     * @type {?}
     */
    IDragStartEventArgs.prototype.cancel;
}
var IgxDragDirective = /** @class */ (function () {
    function IgxDragDirective(cdr, element, zone, renderer) {
        this.cdr = cdr;
        this.element = element;
        this.zone = zone;
        this.renderer = renderer;
        /**
         * An \@Input property that indicates when the drag should start
         * By default the drag starts after the draggable element is moved by 5px
         * ```html
         * <div igxDrag [dragTolerance]="100">
         *         <span>Drag Me!</span>
         * </div>
         * ```
         */
        this.dragTolerance = 5;
        /**
         * Sets a custom class that will be added to the `dragGhost` element.
         * ```html
         * <div igxDrag [ghostImageClass]="'dragGhost'">
         *         <span>Drag Me!</span>
         * </div>
         * ```
         */
        this.ghostImageClass = '';
        /**
         * An \@Input property that hides the draggable element.
         * By default it's set to false.
         * ```html
         * <div igxDrag [dragTolerance]="100" [hideBaseOnDrag]="'true'">
         *         <span>Drag Me!</span>
         * </div>
         * ```
         */
        this.hideBaseOnDrag = false;
        /**
         * An \@Input property that enables/disables the draggable element animation
         * when the element is released.
         * By default it's set to false.
         * ```html
         * <div igxDrag [animateOnRelease]="'true'">
         *         <span>Drag Me!</span>
         * </div>
         * ```
         */
        this.animateOnRelease = false;
        /**
         * An \@Input property that sets the element to which the dragged element will be appended.
         * By default it's set to null and the dragged element is appended to the body.
         * ```html
         * <div #hostDiv></div>
         * <div igxDrag [dragGhostHost]="hostDiv">
         *         <span>Drag Me!</span>
         * </div>
         * ```
         */
        this.dragGhostHost = null;
        /**
         * Event triggered when the draggable element drag starts.
         * ```html
         * <div igxDrag [animateOnRelease]="'true'" (dragStart)="onDragStart()">
         *         <span>Drag Me!</span>
         * </div>
         * ```
         * ```typescript
         * public onDragStart(){
         *      alert("The drag has stared!");
         * }
         * ```
         */
        this.dragStart = new EventEmitter();
        /**
         * Event triggered when the draggable element is released.
         * ```html
         * <div igxDrag [animateOnRelease]="'true'" (dragEnd)="onDragEnd()">
         *         <span>Drag Me!</span>
         * </div>
         * ```
         * ```typescript
         * public onDragEnd(){
         *      alert("The drag has ended!");
         * }
         * ```
         */
        this.dragEnd = new EventEmitter();
        /**
         * Event triggered after the draggable element is released and after its animation has finished.
         * ```html
         * <div igxDrag [animateOnRelease]="'true'" (returnMoveEnd)="onMoveEnd()">
         *         <span>Drag Me!</span>
         * </div>
         * ```
         * ```typescript
         * public onMoveEnd(){
         *      alert("The move has ended!");
         * }
         * ```
         */
        this.returnMoveEnd = new EventEmitter();
        /**
         * Event triggered when the draggable element is clicked.
         * ```html
         * <div igxDrag [animateOnRelease]="'true'" (dragClicked)="dragClicked()">
         *         <span>Drag Me!</span>
         * </div>
         * ```
         * ```typescript
         * public dragClicked(){
         *      alert("The elemented has been clicked!");
         * }
         * ```
         */
        this.dragClicked = new EventEmitter();
        /**
         * @hidden
         */
        this.touch = 'none';
        /**
         * @hidden
         */
        this.transitionProperty = 'top, left';
        /**
         * @hidden
         */
        this._visibility = 'visible';
        /**
         * @hidden
         */
        this.defaultReturnDuration = '0.5s';
        /**
         * @hidden
         */
        this._startX = 0;
        /**
         * @hidden
         */
        this._startY = 0;
        /**
         * @hidden
         */
        this._dragStarted = false;
        /**
         * @hidden
         */
        this._pointerDownId = null;
        /**
         * @hidden
         */
        this._clicked = false;
        /**
         * @hidden
         */
        this._lastDropArea = null;
        /**
         * @hidden
         */
        this._destroy = new Subject();
        /**
         * @hidden
         */
        this._removeOnDestroy = true;
    }
    Object.defineProperty(IgxDragDirective.prototype, "visible", {
        /**
         * Returns the visibility state of the draggable element.
         * ```typescript
         * @ViewChild("myDrag" ,{read: IgxDragDirective})
         * public myDrag: IgxDragDirective;
         * ngAfterViewInit(){
         *     let dragVisibilty = this.myDrag.visible;
         * }
         * ```
         */
        get: /**
         * Returns the visibility state of the draggable element.
         * ```typescript
         * \@ViewChild("myDrag" ,{read: IgxDragDirective})
         * public myDrag: IgxDragDirective;
         * ngAfterViewInit(){
         *     let dragVisibilty = this.myDrag.visible;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this._visibility === 'visible';
        },
        /**
         * Sets the visibility of the draggable element.
         * ```typescript
         * @ViewChild("myDrag" ,{read: IgxDragDirective})
         * public myDrag: IgxDragDirective;
         * ngAfterViewInit(){
         *     this.myDrag.visible = false;
         * }
         * ```
         */
        set: /**
         * Sets the visibility of the draggable element.
         * ```typescript
         * \@ViewChild("myDrag" ,{read: IgxDragDirective})
         * public myDrag: IgxDragDirective;
         * ngAfterViewInit(){
         *     this.myDrag.visible = false;
         * }
         * ```
         * @param {?} bVisible
         * @return {?}
         */
        function (bVisible) {
            this._visibility = bVisible ? 'visible' : 'hidden';
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDragDirective.prototype, "left", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return parseInt(this.dragGhost.style.left, 10);
        },
        /**
         * @hidden
         */
        set: /**
         * @hidden
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            requestAnimationFrame(function () {
                if (_this.dragGhost) {
                    _this.dragGhost.style.left = val + 'px';
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDragDirective.prototype, "top", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return parseInt(this.dragGhost.style.top, 10);
        },
        /**
         * @hidden
         */
        set: /**
         * @hidden
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            requestAnimationFrame(function () {
                if (_this.dragGhost) {
                    _this.dragGhost.style.top = val + 'px';
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDragDirective.prototype, "pointerEventsEnabled", {
        /**
         * Returns if the browser supports pointer events.
         * ```typescript
         * @ViewChild("myDrag" ,{read: IgxDragDirective})
         * public myDrag: IgxDragDirective;
         * ngAfterViewInit(){
         *     let pointerEvents = this.myDrag.pointerEventsEnabled;
         * }
         * ```
         */
        get: /**
         * Returns if the browser supports pointer events.
         * ```typescript
         * \@ViewChild("myDrag" ,{read: IgxDragDirective})
         * public myDrag: IgxDragDirective;
         * ngAfterViewInit(){
         *     let pointerEvents = this.myDrag.pointerEventsEnabled;
         * }
         * ```
         * @return {?}
         */
        function () {
            return typeof PointerEvent !== 'undefined';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDragDirective.prototype, "touchEventsEnabled", {
        /**
         * Returns if the browser supports touch events.
         * ```typescript
         * @ViewChild("myDrag" ,{read: IgxDragDirective})
         * public myDrag: IgxDragDirective;
         * ngAfterViewInit(){
         *     let touchEvents = this.myDrag.pointerEventsEnabled;
         * }
         * ```
         */
        get: /**
         * Returns if the browser supports touch events.
         * ```typescript
         * \@ViewChild("myDrag" ,{read: IgxDragDirective})
         * public myDrag: IgxDragDirective;
         * ngAfterViewInit(){
         *     let touchEvents = this.myDrag.pointerEventsEnabled;
         * }
         * ```
         * @return {?}
         */
        function () {
            return 'ontouchstart' in window;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxDragDirective.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.pointerEventsEnabled) {
                fromEvent(_this.element.nativeElement, 'pointerdown').pipe(takeUntil(_this._destroy))
                    .subscribe(function (res) { return _this.onPointerDown(res); });
                fromEvent(_this.element.nativeElement, 'pointermove').pipe(throttle(function () { return interval(0, animationFrameScheduler); }), takeUntil(_this._destroy)).subscribe(function (res) { return _this.onPointerMove(res); });
                fromEvent(_this.element.nativeElement, 'pointerup').pipe(takeUntil(_this._destroy))
                    .subscribe(function (res) { return _this.onPointerUp(res); });
            }
            else if (_this.touchEventsEnabled) {
                fromEvent(_this.element.nativeElement, 'touchstart').pipe(takeUntil(_this._destroy))
                    .subscribe(function (res) { return _this.onPointerDown(res); });
                fromEvent(document.defaultView, 'touchmove').pipe(throttle(function () { return interval(0, animationFrameScheduler); }), takeUntil(_this._destroy)).subscribe(function (res) { return _this.onPointerMove(res); });
                fromEvent(document.defaultView, 'touchend').pipe(takeUntil(_this._destroy))
                    .subscribe(function (res) { return _this.onPointerUp(res); });
            }
            else {
                // We don't have pointer events and touch events. Use then mouse events.
                fromEvent(_this.element.nativeElement, 'mousedown').pipe(takeUntil(_this._destroy))
                    .subscribe(function (res) { return _this.onPointerDown(res); });
                fromEvent(document.defaultView, 'mousemove').pipe(throttle(function () { return interval(0, animationFrameScheduler); }), takeUntil(_this._destroy)).subscribe(function (res) { return _this.onPointerMove(res); });
                fromEvent(document.defaultView, 'mouseup').pipe(takeUntil(_this._destroy))
                    .subscribe(function (res) { return _this.onPointerUp(res); });
            }
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxDragDirective.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this._destroy.next(true);
        this._destroy.complete();
        if (this.dragGhost && this._removeOnDestroy) {
            this.dragGhost.parentNode.removeChild(this.dragGhost);
            this.dragGhost = null;
        }
    };
    /**
     * @hidden
     * Method bound to the PointerDown event of the base element igxDrag is initialized.
     * @param event PointerDown event captured
     */
    /**
     * @hidden
     * Method bound to the PointerDown event of the base element igxDrag is initialized.
     * @param {?} event PointerDown event captured
     * @return {?}
     */
    IgxDragDirective.prototype.onPointerDown = /**
     * @hidden
     * Method bound to the PointerDown event of the base element igxDrag is initialized.
     * @param {?} event PointerDown event captured
     * @return {?}
     */
    function (event) {
        this._clicked = true;
        this._pointerDownId = event.pointerId;
        if (this.pointerEventsEnabled || !this.touchEventsEnabled) {
            // Check first for pointer events or non touch, because we can have pointer events and touch events at once.
            this._startX = event.pageX;
            this._startY = event.pageY;
        }
        else if (this.touchEventsEnabled) {
            this._startX = event.touches[0].pageX;
            this._startY = event.touches[0].pageY;
        }
        // Take margins because getBoundingClientRect() doesn't include margins of the element
        /** @type {?} */
        var marginTop = parseInt(document.defaultView.getComputedStyle(this.element.nativeElement)['margin-top'], 10);
        /** @type {?} */
        var marginLeft = parseInt(document.defaultView.getComputedStyle(this.element.nativeElement)['margin-left'], 10);
        this._dragOffsetX =
            (this._startX - this.element.nativeElement.getBoundingClientRect().left - this.getWindowScrollLeft()) + marginLeft;
        this._dragOffsetY =
            (this._startY - this.element.nativeElement.getBoundingClientRect().top - this.getWindowScrollTop()) + marginTop;
        this._dragStartX = this._startX - this._dragOffsetX;
        this._dragStartY = this._startY - this._dragOffsetY;
        // Set pointer capture so we detect pointermove even if mouse is out of bounds until dragGhost is created.
        if (this.pointerEventsEnabled) {
            this.element.nativeElement.setPointerCapture(this._pointerDownId);
        }
        else {
            this.element.nativeElement.focus();
            event.preventDefault();
        }
    };
    /**
     * @hidden
     * Perfmorm drag move logic when dragging and dispatching events if there is igxDrop under the pointer.
     * This method is bound at first at the base element.
     * If dragging starts and after the dragGhost is rendered the pointerId is reassigned to the dragGhost. Then this method is bound to it.
     * @param event PointerMove event captured
     */
    /**
     * @hidden
     * Perfmorm drag move logic when dragging and dispatching events if there is igxDrop under the pointer.
     * This method is bound at first at the base element.
     * If dragging starts and after the dragGhost is rendered the pointerId is reassigned to the dragGhost. Then this method is bound to it.
     * @param {?} event PointerMove event captured
     * @return {?}
     */
    IgxDragDirective.prototype.onPointerMove = /**
     * @hidden
     * Perfmorm drag move logic when dragging and dispatching events if there is igxDrop under the pointer.
     * This method is bound at first at the base element.
     * If dragging starts and after the dragGhost is rendered the pointerId is reassigned to the dragGhost. Then this method is bound to it.
     * @param {?} event PointerMove event captured
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this._clicked) {
            /** @type {?} */
            var dragStartArgs_1 = {
                originalEvent: event,
                owner: this,
                cancel: false
            };
            /** @type {?} */
            var pageX = void 0;
            /** @type {?} */
            var pageY = void 0;
            if (this.pointerEventsEnabled || !this.touchEventsEnabled) {
                // Check first for pointer events or non touch, because we can have pointer events and touch events at once.
                pageX = event.pageX;
                pageY = event.pageY;
            }
            else if (this.touchEventsEnabled) {
                pageX = event.touches[0].pageX;
                pageY = event.touches[0].pageY;
                // Prevent scrolling on touch while dragging
                event.preventDefault();
            }
            /** @type {?} */
            var totalMovedX = pageX - this._startX;
            /** @type {?} */
            var totalMovedY = pageY - this._startY;
            if (!this._dragStarted &&
                (Math.abs(totalMovedX) > this.dragTolerance || Math.abs(totalMovedY) > this.dragTolerance)) {
                this.zone.run(function () {
                    _this.dragStart.emit(dragStartArgs_1);
                });
                if (!dragStartArgs_1.cancel) {
                    this._dragStarted = true;
                    // We moved enough so dragGhost can be rendered and actual dragging to start.
                    this.createDragGhost(event);
                }
                return;
            }
            else if (!this._dragStarted) {
                return;
            }
            this.left = this._dragStartX + totalMovedX;
            this.top = this._dragStartY + totalMovedY;
            this.dispatchDragEvents(pageX, pageY, event);
        }
    };
    /**
     * @hidden
     * Perform drag end logic when releasing the dragGhost and dispatching drop event if igxDrop is under the pointer.
     * This method is bound at first at the base element.
     * If dragging starts and after the dragGhost is rendered the pointerId is reassigned to the dragGhost. Then this method is bound to it.
     * @param event PointerUp event captured
     */
    /**
     * @hidden
     * Perform drag end logic when releasing the dragGhost and dispatching drop event if igxDrop is under the pointer.
     * This method is bound at first at the base element.
     * If dragging starts and after the dragGhost is rendered the pointerId is reassigned to the dragGhost. Then this method is bound to it.
     * @param {?} event PointerUp event captured
     * @return {?}
     */
    IgxDragDirective.prototype.onPointerUp = /**
     * @hidden
     * Perform drag end logic when releasing the dragGhost and dispatching drop event if igxDrop is under the pointer.
     * This method is bound at first at the base element.
     * If dragging starts and after the dragGhost is rendered the pointerId is reassigned to the dragGhost. Then this method is bound to it.
     * @param {?} event PointerUp event captured
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this._clicked) {
            return;
        }
        /** @type {?} */
        var eventArgs = {
            originalEvent: event,
            owner: this
        };
        this._clicked = false;
        if (this._dragStarted) {
            if (this._lastDropArea && this._lastDropArea !== this.element.nativeElement) {
                if (!this.animateOnRelease) {
                    this.onTransitionEnd(null);
                }
                // dragging ended over a drop area. Call this after transition because onDrop might remove the element.
                this.dispatchDropEvent(event.pageX, event.pageY, event);
                // else the drop directive needs to call the dropFinished() method so the animation can perform
            }
            else if (this.animateOnRelease &&
                (this.left !== Math.floor(this._dragStartX) || this.top !== Math.floor(this._dragStartY))) {
                // If the start positions are the same as the current the transition will not execute.
                // return the ghost to start position before removing it. See onTransitionEnd.
                this.dragGhost.style.transitionDuration = this.defaultReturnDuration;
                this.left = this._dragStartX;
                this.top = this._dragStartY;
            }
            else {
                this.onTransitionEnd(null);
            }
            this.zone.run(function () {
                _this.dragEnd.emit(eventArgs);
            });
        }
        else {
            this.zone.run(function () {
                _this.dragClicked.emit(eventArgs);
            });
        }
    };
    /**
     * @hidden
     * Create dragGhost element - if a Node object is provided it creates a clone of that node,
     * otherwise it clones the host element.
     * Bind all needed events.
     * @param event Pointer event required when the dragGhost is being initialized.
     * @param node The Node object to be cloned.
     */
    /**
     * @hidden
     * Create dragGhost element - if a Node object is provided it creates a clone of that node,
     * otherwise it clones the host element.
     * Bind all needed events.
     * @protected
     * @param {?} event Pointer event required when the dragGhost is being initialized.
     * @param {?=} node The Node object to be cloned.
     * @return {?}
     */
    IgxDragDirective.prototype.createDragGhost = /**
     * @hidden
     * Create dragGhost element - if a Node object is provided it creates a clone of that node,
     * otherwise it clones the host element.
     * Bind all needed events.
     * @protected
     * @param {?} event Pointer event required when the dragGhost is being initialized.
     * @param {?=} node The Node object to be cloned.
     * @return {?}
     */
    function (event, node) {
        var _this = this;
        if (node === void 0) { node = null; }
        this.dragGhost = node ? node.cloneNode(true) : this.element.nativeElement.cloneNode(true);
        this.dragGhost.style.transitionDuration = '0.0s';
        this.dragGhost.style.position = 'absolute';
        /** @type {?} */
        var hostLeft = this.dragGhostHost ? this.dragGhostHost.getBoundingClientRect().left : 0;
        /** @type {?} */
        var hostTop = this.dragGhostHost ? this.dragGhostHost.getBoundingClientRect().top : 0;
        this.dragGhost.style.top = this._dragStartY - hostTop + 'px';
        this.dragGhost.style.left = this._dragStartX - hostLeft + 'px';
        if (this.ghostImageClass) {
            this.renderer.addClass(this.dragGhost, this.ghostImageClass);
        }
        if (this.dragGhostHost) {
            this.dragGhostHost.appendChild(this.dragGhost);
        }
        else {
            document.body.appendChild(this.dragGhost);
        }
        if (this.pointerEventsEnabled) {
            // The dragGhost takes control for moving and dragging after it has been shown.
            this.dragGhost.setPointerCapture(this._pointerDownId);
            this.dragGhost.addEventListener('pointermove', function (args) {
                _this.onPointerMove(args);
            });
            this.dragGhost.addEventListener('pointerup', function (args) {
                _this.onPointerUp(args);
            });
        }
        if (this.animateOnRelease) {
            // Transition animation when the dragGhost is released and it returns to it's original position.
            this.dragGhost.addEventListener('transitionend', function (args) {
                _this.onTransitionEnd(args);
            });
        }
        // Hide the base after the dragGhost is created, because otherwise the dragGhost will be not visible.
        if (this.hideBaseOnDrag) {
            this.visible = false;
        }
    };
    /**
     * @hidden
     * Dispatch custom igxDragEnter/igxDragLeave events based on current pointer position and if drop area is under.
     */
    /**
     * @hidden
     * Dispatch custom igxDragEnter/igxDragLeave events based on current pointer position and if drop area is under.
     * @protected
     * @param {?} pageX
     * @param {?} pageY
     * @param {?} originalEvent
     * @return {?}
     */
    IgxDragDirective.prototype.dispatchDragEvents = /**
     * @hidden
     * Dispatch custom igxDragEnter/igxDragLeave events based on current pointer position and if drop area is under.
     * @protected
     * @param {?} pageX
     * @param {?} pageY
     * @param {?} originalEvent
     * @return {?}
     */
    function (pageX, pageY, originalEvent) {
        /** @type {?} */
        var topDropArea;
        /** @type {?} */
        var eventArgs = {
            startX: this._startX,
            startY: this._startY,
            pageX: pageX,
            pageY: pageY,
            owner: this,
            originalEvent: originalEvent
        };
        /** @type {?} */
        var elementsFromPoint = this.getElementsAtPoint(pageX, pageY);
        for (var i = 0; i < elementsFromPoint.length; i++) {
            if (elementsFromPoint[i].getAttribute('droppable') === 'true' && elementsFromPoint[i] !== this.dragGhost) {
                topDropArea = elementsFromPoint[i];
                break;
            }
        }
        if (topDropArea) {
            this.dispatchEvent(topDropArea, 'igxDragOver', eventArgs);
        }
        if (topDropArea &&
            (!this._lastDropArea || (this._lastDropArea && this._lastDropArea !== topDropArea))) {
            if (this._lastDropArea) {
                this.dispatchEvent(this._lastDropArea, 'igxDragLeave', eventArgs);
            }
            this._lastDropArea = topDropArea;
            this.dispatchEvent(this._lastDropArea, 'igxDragEnter', eventArgs);
        }
        else if (!topDropArea && this._lastDropArea) {
            this.dispatchEvent(this._lastDropArea, 'igxDragLeave', eventArgs);
            this._lastDropArea = null;
        }
    };
    /**
     * @hidden
     * Dispatch custom igxDrop event based on current pointer position if there is last recorder drop area under the pointer.
     * Last recorder drop area is updated in @dispatchDragEvents method.
     */
    /**
     * @hidden
     * Dispatch custom igxDrop event based on current pointer position if there is last recorder drop area under the pointer.
     * Last recorder drop area is updated in \@dispatchDragEvents method.
     * @protected
     * @param {?} pageX
     * @param {?} pageY
     * @param {?} originalEvent
     * @return {?}
     */
    IgxDragDirective.prototype.dispatchDropEvent = /**
     * @hidden
     * Dispatch custom igxDrop event based on current pointer position if there is last recorder drop area under the pointer.
     * Last recorder drop area is updated in \@dispatchDragEvents method.
     * @protected
     * @param {?} pageX
     * @param {?} pageY
     * @param {?} originalEvent
     * @return {?}
     */
    function (pageX, pageY, originalEvent) {
        /** @type {?} */
        var eventArgs = {
            startX: this._startX,
            startY: this._startY,
            pageX: pageX,
            pageY: pageY,
            owner: this,
            originalEvent: originalEvent
        };
        this.dispatchEvent(this._lastDropArea, 'igxDrop', eventArgs);
        this.dispatchEvent(this._lastDropArea, 'igxDragLeave', eventArgs);
        this._lastDropArea = null;
    };
    /**
     * @hidden
     * Update relative positions
     */
    /**
     * @hidden
     * Update relative positions
     * @return {?}
     */
    IgxDragDirective.prototype.updateDragRelativePos = /**
     * @hidden
     * Update relative positions
     * @return {?}
     */
    function () {
        if (!this.dragGhost) {
            return;
        }
        // Calculate the new dragGhost position to remain where the mouse is, so it doesn't jump
        /** @type {?} */
        var totalDraggedX = this.left - this._dragStartX;
        /** @type {?} */
        var totalDraggedY = this.top - this._dragStartY;
        /** @type {?} */
        var newPosX = this.element.nativeElement.getBoundingClientRect().left;
        /** @type {?} */
        var newPosY = this.element.nativeElement.getBoundingClientRect().top;
        /** @type {?} */
        var diffStartX = this._dragStartX - newPosX;
        /** @type {?} */
        var diffStartY = this._dragStartY - newPosY;
        this.top = newPosX + totalDraggedX - diffStartX;
        this.left = newPosY + totalDraggedY - diffStartY;
    };
    /**
     * Informs the `igxDrag` directive that it has been dropped/released.
     * This should usully be called when `animateOnRelease` is set to `true`.
     * When canceling or defining custom drop logic this tells the igxDrag to update it's positions and
     * animate correctly to the new position.
     * ```typescript
     * public onDropElem(event) {
     *     // Function bound to the igxDrop directive event `onDrop`
     *     // This cancels the default drop logic of the `igxDrop`
     *     event.cancel = true;
     *     event.drag.dropFinished();
     * }
     * ```
     */
    /**
     * Informs the `igxDrag` directive that it has been dropped/released.
     * This should usully be called when `animateOnRelease` is set to `true`.
     * When canceling or defining custom drop logic this tells the igxDrag to update it's positions and
     * animate correctly to the new position.
     * ```typescript
     * public onDropElem(event) {
     *     // Function bound to the igxDrop directive event `onDrop`
     *     // This cancels the default drop logic of the `igxDrop`
     *     event.cancel = true;
     *     event.drag.dropFinished();
     * }
     * ```
     * @return {?}
     */
    IgxDragDirective.prototype.dropFinished = /**
     * Informs the `igxDrag` directive that it has been dropped/released.
     * This should usully be called when `animateOnRelease` is set to `true`.
     * When canceling or defining custom drop logic this tells the igxDrag to update it's positions and
     * animate correctly to the new position.
     * ```typescript
     * public onDropElem(event) {
     *     // Function bound to the igxDrop directive event `onDrop`
     *     // This cancels the default drop logic of the `igxDrop`
     *     event.cancel = true;
     *     event.drag.dropFinished();
     * }
     * ```
     * @return {?}
     */
    function () {
        if (this.animateOnRelease && this.dragGhost) {
            this.updateDragRelativePos();
            // Return the dragged element to the start. See onTransitionEnd next.
            // Take margins becuase getBoundingClientRect() doesn't include margins
            /** @type {?} */
            var marginTop = parseInt(document.defaultView.getComputedStyle(this.element.nativeElement)['margin-top'], 10);
            /** @type {?} */
            var marginLeft = parseInt(document.defaultView.getComputedStyle(this.element.nativeElement)['margin-left'], 10);
            /** @type {?} */
            var newPosX = this.element.nativeElement.getBoundingClientRect().left + this.getWindowScrollLeft();
            /** @type {?} */
            var newPosY = this.element.nativeElement.getBoundingClientRect().top + this.getWindowScrollTop();
            this.dragGhost.style.transitionDuration = this.defaultReturnDuration;
            this.left = newPosX - marginLeft;
            this.top = newPosY - marginTop;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxDragDirective.prototype.onTransitionEnd = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this._dragStarted && !this._clicked) {
            if (this.hideBaseOnDrag) {
                this.visible = true;
            }
            this.dragGhost.parentNode.removeChild(this.dragGhost);
            this.dragGhost = null;
            this.element.nativeElement.style.transitionDuration = '0.0s';
            this._dragStarted = false;
            this.zone.run(function () {
                _this.returnMoveEnd.emit({
                    originalEvent: event,
                    owner: _this
                });
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} pageX
     * @param {?} pageY
     * @return {?}
     */
    IgxDragDirective.prototype.getElementsAtPoint = /**
     * @hidden
     * @protected
     * @param {?} pageX
     * @param {?} pageY
     * @return {?}
     */
    function (pageX, pageY) {
        // correct the coordinates with the current scroll position, because
        // document.elementsFromPoint conider position within the current viewport
        // window.pageXOffset == window.scrollX; // always true
        // using window.pageXOffset for IE9 compatibility
        /** @type {?} */
        var viewPortX = pageX - window.pageXOffset;
        /** @type {?} */
        var viewPortY = pageY - window.pageYOffset;
        if (document['msElementsFromPoint']) {
            // Edge and IE special snowflakes
            return document['msElementsFromPoint'](viewPortX, viewPortY);
        }
        else {
            // Other browsers like Chrome, Firefox, Opera
            return document.elementsFromPoint(viewPortX, viewPortY);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} target
     * @param {?} eventName
     * @param {?} eventArgs
     * @return {?}
     */
    IgxDragDirective.prototype.dispatchEvent = /**
     * @hidden
     * @protected
     * @param {?} target
     * @param {?} eventName
     * @param {?} eventArgs
     * @return {?}
     */
    function (target, eventName, eventArgs) {
        // This way is IE11 compatible.
        /** @type {?} */
        var dragLeaveEvent = document.createEvent('CustomEvent');
        dragLeaveEvent.initCustomEvent(eventName, false, false, eventArgs);
        target.dispatchEvent(dragLeaveEvent);
        // Othersie can be used `target.dispatchEvent(new CustomEvent(eventName, eventArgs));`
    };
    /**
     * @protected
     * @return {?}
     */
    IgxDragDirective.prototype.getWindowScrollTop = /**
     * @protected
     * @return {?}
     */
    function () {
        return window.scrollY ? window.scrollY : (window.pageYOffset ? window.pageYOffset : 0);
    };
    /**
     * @protected
     * @return {?}
     */
    IgxDragDirective.prototype.getWindowScrollLeft = /**
     * @protected
     * @return {?}
     */
    function () {
        return window.scrollX ? window.scrollX : (window.pageXOffset ? window.pageXOffset : 0);
    };
    IgxDragDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxDrag]'
                },] }
    ];
    /** @nocollapse */
    IgxDragDirective.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone },
        { type: Renderer2 }
    ]; };
    IgxDragDirective.propDecorators = {
        data: [{ type: Input, args: ['igxDrag',] }],
        dragTolerance: [{ type: Input }],
        ghostImageClass: [{ type: Input }],
        hideBaseOnDrag: [{ type: Input }],
        animateOnRelease: [{ type: Input }],
        dragGhostHost: [{ type: Input }],
        dragStart: [{ type: Output }],
        dragEnd: [{ type: Output }],
        returnMoveEnd: [{ type: Output }],
        dragClicked: [{ type: Output }],
        touch: [{ type: HostBinding, args: ['style.touchAction',] }],
        transitionProperty: [{ type: HostBinding, args: ['style.transitionProperty',] }],
        _visibility: [{ type: HostBinding, args: ['style.visibility',] }]
    };
    return IgxDragDirective;
}());
export { IgxDragDirective };
if (false) {
    /**
     * - Save data inside the `igxDrag` directive. This can be set when instancing `igxDrag` on an element.
     * ```html
     * <div [igxDrag]="{ source: myElement }"></div>
     * ```
     * @type {?}
     */
    IgxDragDirective.prototype.data;
    /**
     * An \@Input property that indicates when the drag should start
     * By default the drag starts after the draggable element is moved by 5px
     * ```html
     * <div igxDrag [dragTolerance]="100">
     *         <span>Drag Me!</span>
     * </div>
     * ```
     * @type {?}
     */
    IgxDragDirective.prototype.dragTolerance;
    /**
     * Sets a custom class that will be added to the `dragGhost` element.
     * ```html
     * <div igxDrag [ghostImageClass]="'dragGhost'">
     *         <span>Drag Me!</span>
     * </div>
     * ```
     * @type {?}
     */
    IgxDragDirective.prototype.ghostImageClass;
    /**
     * An \@Input property that hides the draggable element.
     * By default it's set to false.
     * ```html
     * <div igxDrag [dragTolerance]="100" [hideBaseOnDrag]="'true'">
     *         <span>Drag Me!</span>
     * </div>
     * ```
     * @type {?}
     */
    IgxDragDirective.prototype.hideBaseOnDrag;
    /**
     * An \@Input property that enables/disables the draggable element animation
     * when the element is released.
     * By default it's set to false.
     * ```html
     * <div igxDrag [animateOnRelease]="'true'">
     *         <span>Drag Me!</span>
     * </div>
     * ```
     * @type {?}
     */
    IgxDragDirective.prototype.animateOnRelease;
    /**
     * An \@Input property that sets the element to which the dragged element will be appended.
     * By default it's set to null and the dragged element is appended to the body.
     * ```html
     * <div #hostDiv></div>
     * <div igxDrag [dragGhostHost]="hostDiv">
     *         <span>Drag Me!</span>
     * </div>
     * ```
     * @type {?}
     */
    IgxDragDirective.prototype.dragGhostHost;
    /**
     * Event triggered when the draggable element drag starts.
     * ```html
     * <div igxDrag [animateOnRelease]="'true'" (dragStart)="onDragStart()">
     *         <span>Drag Me!</span>
     * </div>
     * ```
     * ```typescript
     * public onDragStart(){
     *      alert("The drag has stared!");
     * }
     * ```
     * @type {?}
     */
    IgxDragDirective.prototype.dragStart;
    /**
     * Event triggered when the draggable element is released.
     * ```html
     * <div igxDrag [animateOnRelease]="'true'" (dragEnd)="onDragEnd()">
     *         <span>Drag Me!</span>
     * </div>
     * ```
     * ```typescript
     * public onDragEnd(){
     *      alert("The drag has ended!");
     * }
     * ```
     * @type {?}
     */
    IgxDragDirective.prototype.dragEnd;
    /**
     * Event triggered after the draggable element is released and after its animation has finished.
     * ```html
     * <div igxDrag [animateOnRelease]="'true'" (returnMoveEnd)="onMoveEnd()">
     *         <span>Drag Me!</span>
     * </div>
     * ```
     * ```typescript
     * public onMoveEnd(){
     *      alert("The move has ended!");
     * }
     * ```
     * @type {?}
     */
    IgxDragDirective.prototype.returnMoveEnd;
    /**
     * Event triggered when the draggable element is clicked.
     * ```html
     * <div igxDrag [animateOnRelease]="'true'" (dragClicked)="dragClicked()">
     *         <span>Drag Me!</span>
     * </div>
     * ```
     * ```typescript
     * public dragClicked(){
     *      alert("The elemented has been clicked!");
     * }
     * ```
     * @type {?}
     */
    IgxDragDirective.prototype.dragClicked;
    /**
     * @hidden
     * @type {?}
     */
    IgxDragDirective.prototype.touch;
    /**
     * @hidden
     * @type {?}
     */
    IgxDragDirective.prototype.transitionProperty;
    /**
     * @hidden
     * @type {?}
     */
    IgxDragDirective.prototype._visibility;
    /**
     * @hidden
     * @type {?}
     */
    IgxDragDirective.prototype.defaultReturnDuration;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDragDirective.prototype._startX;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDragDirective.prototype._startY;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDragDirective.prototype.dragGhost;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDragDirective.prototype._dragStarted;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDragDirective.prototype._dragOffsetX;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDragDirective.prototype._dragOffsetY;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDragDirective.prototype._dragStartX;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDragDirective.prototype._dragStartY;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDragDirective.prototype._pointerDownId;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDragDirective.prototype._clicked;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDragDirective.prototype._lastDropArea;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDragDirective.prototype._destroy;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDragDirective.prototype._removeOnDestroy;
    /** @type {?} */
    IgxDragDirective.prototype.cdr;
    /** @type {?} */
    IgxDragDirective.prototype.element;
    /** @type {?} */
    IgxDragDirective.prototype.zone;
    /** @type {?} */
    IgxDragDirective.prototype.renderer;
}
var IgxDropDirective = /** @class */ (function () {
    function IgxDropDirective(element, _renderer, _zone) {
        this.element = element;
        this._renderer = _renderer;
        this._zone = _zone;
        /**
         * Event triggered when dragged element enters the area of the element.
         * ```html
         * <div class="cageArea" igxDrop (onEnter)="dragEnter()" (igxDragEnter)="onDragCageEnter()" (igxDragLeave)="onDragCageLeave()">
         * </div>
         * ```
         * ```typescript
         * public dragEnter(){
         *     alert("A draggable elemente has entered the chip area!");
         * }
         * ```
         */
        this.onEnter = new EventEmitter();
        /**
         * Event triggered when dragged element leaves the area of the element.
         * ```html
         * <div class="cageArea" igxDrop (onLeave)="dragLeave()" (igxDragEnter)="onDragCageEnter()" (igxDragLeave)="onDragCageLeave()">
         * </div>
         * ```
         * ```typescript
         * public dragLeave(){
         *     alert("A draggable elemente has left the chip area!");
         * }
         * ```
         */
        this.onLeave = new EventEmitter();
        /**
         * Event triggered when dragged element is dropped in the area of the element.
         * Since the `igxDrop` has default logic that appends the dropped element as a child, it can be canceled here.
         * To cancel the default logic the `cancel` property of the event needs to be set to true.
         * ```html
         * <div class="cageArea" igxDrop (onDrop)="dragDrop()" (igxDragEnter)="onDragCageEnter()" (igxDragLeave)="onDragCageLeave()">
         * </div>
         * ```
         * ```typescript
         * public dragDrop(){
         *     alert("A draggable elemente has been dropped in the chip area!");
         * }
         * ```
         */
        this.onDrop = new EventEmitter();
        /**
         * @hidden
         */
        this.droppable = true;
        /**
         * @hidden
         */
        this.dragover = false;
        /**
         * @hidden
         */
        this._destroy = new Subject();
    }
    /**
     * @return {?}
     */
    IgxDropDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            fromEvent(_this.element.nativeElement, 'igxDragEnter').pipe(takeUntil(_this._destroy))
                .subscribe(function (res) { return _this.onDragEnter((/** @type {?} */ (res))); });
            fromEvent(_this.element.nativeElement, 'igxDragLeave').pipe(takeUntil(_this._destroy)).subscribe(function (res) { return _this.onDragLeave(res); });
            fromEvent(_this.element.nativeElement, 'igxDragOver').pipe(takeUntil(_this._destroy)).subscribe(function (res) { return _this.onDragOver(res); });
        });
    };
    /**
     * @return {?}
     */
    IgxDropDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next(true);
        this._destroy.complete();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxDropDirective.prototype.onDragOver = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxDropDirective.prototype.onDragEnter = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.dragover = true;
        /** @type {?} */
        var elementPosX = this.element.nativeElement.getBoundingClientRect().left + this.getWindowScrollLeft();
        /** @type {?} */
        var elementPosY = this.element.nativeElement.getBoundingClientRect().top + this.getWindowScrollTop();
        /** @type {?} */
        var offsetX = event.detail.pageX - elementPosX;
        /** @type {?} */
        var offsetY = event.detail.pageY - elementPosY;
        /** @type {?} */
        var eventArgs = {
            originalEvent: event.detail.originalEvent,
            owner: this,
            drag: event.detail.owner,
            dragData: event.detail.owner.data,
            startX: event.detail.startX,
            startY: event.detail.startY,
            pageX: event.detail.pageX,
            pageY: event.detail.pageY,
            offsetX: offsetX,
            offsetY: offsetY
        };
        this._zone.run(function () {
            _this.onEnter.emit(eventArgs);
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxDropDirective.prototype.onDragLeave = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.dragover = false;
        /** @type {?} */
        var elementPosX = this.element.nativeElement.getBoundingClientRect().left + this.getWindowScrollLeft();
        /** @type {?} */
        var elementPosY = this.element.nativeElement.getBoundingClientRect().top + this.getWindowScrollTop();
        /** @type {?} */
        var offsetX = event.detail.pageX - elementPosX;
        /** @type {?} */
        var offsetY = event.detail.pageY - elementPosY;
        /** @type {?} */
        var eventArgs = {
            originalEvent: event.detail.originalEvent,
            owner: this,
            drag: event.detail.owner,
            dragData: event.detail.owner.data,
            startX: event.detail.startX,
            startY: event.detail.startY,
            pageX: event.detail.pageX,
            pageY: event.detail.pageY,
            offsetX: offsetX,
            offsetY: offsetY
        };
        this._zone.run(function () {
            _this.onLeave.emit(eventArgs);
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxDropDirective.prototype.onDragDrop = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var elementPosX = this.element.nativeElement.getBoundingClientRect().left + this.getWindowScrollLeft();
        /** @type {?} */
        var elementPosY = this.element.nativeElement.getBoundingClientRect().top + this.getWindowScrollTop();
        /** @type {?} */
        var offsetX = event.detail.pageX - elementPosX;
        /** @type {?} */
        var offsetY = event.detail.pageY - elementPosY;
        /** @type {?} */
        var args = {
            owner: this,
            originalEvent: event.detail.originalEvent,
            drag: event.detail.owner,
            dragData: event.detail.owner.data,
            offsetX: offsetX,
            offsetY: offsetY,
            cancel: false
        };
        this._zone.run(function () {
            _this.onDrop.emit(args);
        });
        if (!args.cancel) {
            // To do for generic scenario
            this._renderer.removeChild(event.detail.owner.element.nativeElement.parentNode, event.detail.owner.element.nativeElement);
            this._renderer.appendChild(this.element.nativeElement, event.detail.owner.element.nativeElement);
            setTimeout(function () {
                event.detail.owner.dropFinished();
            }, 0);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    IgxDropDirective.prototype.getWindowScrollTop = /**
     * @protected
     * @return {?}
     */
    function () {
        return window.scrollY ? window.scrollY : (window.pageYOffset ? window.pageYOffset : 0);
    };
    /**
     * @protected
     * @return {?}
     */
    IgxDropDirective.prototype.getWindowScrollLeft = /**
     * @protected
     * @return {?}
     */
    function () {
        return window.scrollX ? window.scrollX : (window.pageXOffset ? window.pageXOffset : 0);
    };
    IgxDropDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxDrop]'
                },] }
    ];
    /** @nocollapse */
    IgxDropDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    IgxDropDirective.propDecorators = {
        data: [{ type: Input, args: ['igxDrop',] }],
        onEnter: [{ type: Output }],
        onLeave: [{ type: Output }],
        onDrop: [{ type: Output }],
        droppable: [{ type: HostBinding, args: ['attr.droppable',] }],
        dragover: [{ type: HostBinding, args: ['class.dragOver',] }],
        onDragDrop: [{ type: HostListener, args: ['igxDrop', ['$event'],] }]
    };
    return IgxDropDirective;
}());
export { IgxDropDirective };
if (false) {
    /**
     * - Save data inside the `igxDrop` directive. This can be set when instancing `igxDrop` on an element.
     * ```html
     * <div [igxDrop]="{ source: myElement }"></div>
     * ```
     * @type {?}
     */
    IgxDropDirective.prototype.data;
    /**
     * Event triggered when dragged element enters the area of the element.
     * ```html
     * <div class="cageArea" igxDrop (onEnter)="dragEnter()" (igxDragEnter)="onDragCageEnter()" (igxDragLeave)="onDragCageLeave()">
     * </div>
     * ```
     * ```typescript
     * public dragEnter(){
     *     alert("A draggable elemente has entered the chip area!");
     * }
     * ```
     * @type {?}
     */
    IgxDropDirective.prototype.onEnter;
    /**
     * Event triggered when dragged element leaves the area of the element.
     * ```html
     * <div class="cageArea" igxDrop (onLeave)="dragLeave()" (igxDragEnter)="onDragCageEnter()" (igxDragLeave)="onDragCageLeave()">
     * </div>
     * ```
     * ```typescript
     * public dragLeave(){
     *     alert("A draggable elemente has left the chip area!");
     * }
     * ```
     * @type {?}
     */
    IgxDropDirective.prototype.onLeave;
    /**
     * Event triggered when dragged element is dropped in the area of the element.
     * Since the `igxDrop` has default logic that appends the dropped element as a child, it can be canceled here.
     * To cancel the default logic the `cancel` property of the event needs to be set to true.
     * ```html
     * <div class="cageArea" igxDrop (onDrop)="dragDrop()" (igxDragEnter)="onDragCageEnter()" (igxDragLeave)="onDragCageLeave()">
     * </div>
     * ```
     * ```typescript
     * public dragDrop(){
     *     alert("A draggable elemente has been dropped in the chip area!");
     * }
     * ```
     * @type {?}
     */
    IgxDropDirective.prototype.onDrop;
    /**
     * @hidden
     * @type {?}
     */
    IgxDropDirective.prototype.droppable;
    /**
     * @hidden
     * @type {?}
     */
    IgxDropDirective.prototype.dragover;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDropDirective.prototype._destroy;
    /** @type {?} */
    IgxDropDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    IgxDropDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    IgxDropDirective.prototype._zone;
}
/**
 * @hidden
 */
var IgxDragDropModule = /** @class */ (function () {
    function IgxDragDropModule() {
    }
    IgxDragDropModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxDragDirective, IgxDropDirective],
                    exports: [IgxDragDirective, IgxDropDirective]
                },] }
    ];
    return IgxDragDropModule;
}());
export { IgxDragDropModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2Ryb3AuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2RyYWdkcm9wL2RyYWdkcm9wLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztJQUdqRCxhQUFVO0lBQ1YsZUFBWTtJQUNaLE9BQUk7Ozs7Ozs7OztBQUdSLCtDQU9DOzs7SUFORywyQ0FBZTs7SUFDZiwyQ0FBZTs7SUFDZiwwQ0FBYzs7SUFDZCwwQ0FBYzs7SUFDZCwwQ0FBd0I7O0lBQ3hCLGtEQUFtQjs7Ozs7QUFHdkIsMkNBb0NDOzs7Ozs7O0lBL0JHLDhDQUFtQjs7Ozs7SUFFbkIsc0NBQXdCOzs7OztJQUV4QixxQ0FBdUI7Ozs7O0lBRXZCLHlDQUFjOzs7OztJQUVkLHVDQUFlOzs7OztJQUVmLHVDQUFlOzs7Ozs7SUFLZixzQ0FBYzs7Ozs7O0lBS2Qsc0NBQWM7Ozs7OztJQUtkLHdDQUFnQjs7Ozs7O0lBS2hCLHdDQUFnQjs7Ozs7QUFHcEIsMkNBb0NDOzs7Ozs7O0lBL0JHLDhDQUFtQjs7Ozs7SUFFbkIsc0NBQXdCOzs7OztJQUV4QixxQ0FBdUI7Ozs7O0lBRXZCLHlDQUFjOzs7OztJQUVkLHVDQUFlOzs7OztJQUVmLHVDQUFlOzs7Ozs7SUFLZixzQ0FBYzs7Ozs7O0lBS2Qsc0NBQWM7Ozs7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YTNELG1DQUMyRDs7Ozs7Ozs7Ozs7Ozs7OztJQWUzRCxrQ0FDcUQ7Ozs7O0lBS3JELHFDQUN3Qjs7Ozs7SUFLeEIsb0NBQ3dCOzs7Ozs7SUFLeEIsb0NBQTRDOztJQUVoQyxtQ0FBMEI7Ozs7O0lBQUUscUNBQTRCOzs7OztJQUFFLGlDQUFxQjs7Ozs7QUF5SC9GO0lBQUE7SUFJaUMsQ0FBQzs7Z0JBSmpDLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDbEQsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUM7aUJBQ2hEOztJQUNnQyx3QkFBQztDQUFBLEFBSmxDLElBSWtDO1NBQXJCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBJbnB1dCxcbiAgICBOZ01vZHVsZSxcbiAgICBOZ1pvbmUsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgUmVuZGVyZXIyLFxuICAgIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIGZyb21FdmVudCwgaW50ZXJ2YWwsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgdGhyb3R0bGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBlbnVtIFJlc3RyaWN0RHJhZyB7XG4gICAgVkVSVElDQUxMWSxcbiAgICBIT1JJWk9OVEFMTFksXG4gICAgTk9ORVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElneERyYWdDdXN0b21FdmVudERldGFpbHMge1xuICAgIHN0YXJ0WDogbnVtYmVyO1xuICAgIHN0YXJ0WTogbnVtYmVyO1xuICAgIHBhZ2VYOiBudW1iZXI7XG4gICAgcGFnZVk6IG51bWJlcjtcbiAgICBvd25lcjogSWd4RHJhZ0RpcmVjdGl2ZTtcbiAgICBvcmlnaW5hbEV2ZW50OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWd4RHJvcEVudGVyRXZlbnRBcmdzIHtcbiAgICAgICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBldmVudCB0aGF0IGNhdXNlZCB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgdG8gZW50ZXIgdGhlIGlneERyb3AgZWxlbWVudC5cbiAgICAgKiBDYW4gYmUgUG9pbnRlckV2ZW50LCBUb3VjaEV2ZW50IG9yIE1vdXNlRXZlbnQuXG4gICAgICovXG4gICAgb3JpZ2luYWxFdmVudDogYW55O1xuICAgIC8qKiBUaGUgb3duZXIgaWd4RHJvcCBkaXJlY3RpdmUgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudC4gKi9cbiAgICBvd25lcjogSWd4RHJvcERpcmVjdGl2ZTtcbiAgICAvKiogVGhlIGlneERyYWcgZGlyZWN0aXZlIGluc3RhbmNlZCBvbiBhbiBlbGVtZW50IHRoYXQgZW50ZXJlZCB0aGUgYXJlYSBvZiB0aGUgaWd4RHJvcCBlbGVtZW50ICovXG4gICAgZHJhZzogSWd4RHJhZ0RpcmVjdGl2ZTtcbiAgICAvKiogVGhlIGRhdGEgY29udGFpbmVkIGZvciB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgaW4gaWd4RHJhZyBkaXJlY3RpdmUuICovXG4gICAgZHJhZ0RhdGE6IGFueTtcbiAgICAvKiogVGhlIGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXIgb24gWCBheGlzIHdoZW4gdGhlIGRyYWdnZWQgZWxlbWVudCBiZWdhbiBtb3ZpbmcgKi9cbiAgICBzdGFydFg6IG51bWJlcjtcbiAgICAvKiogVGhlIGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXIgb24gWSBheGlzIHdoZW4gdGhlIGRyYWdnZWQgZWxlbWVudCBiZWdhbiBtb3ZpbmcgKi9cbiAgICBzdGFydFk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgcG9pbnRlciBvbiBYIGF4aXMgd2hlbiB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZC5cbiAgICAgKiBOb3RlOiBUaGUgYnJvd3NlciBtaWdodCB0cmlnZ2VyIHRoZSBldmVudCB3aXRoIHNvbWUgZGVsYXkgYW5kIHBvaW50ZXIgd291bGQgYmUgYWxyZWFkeSBpbnNpZGUgdGhlIGlneERyb3AuXG4gICAgICovXG4gICAgcGFnZVg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgcG9pbnRlciBvbiBZIGF4aXMgd2hlbiB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZC5cbiAgICAgKiBOb3RlOiBUaGUgYnJvd3NlciBtaWdodCB0cmlnZ2VyIHRoZSBldmVudCB3aXRoIHNvbWUgZGVsYXkgYW5kIHBvaW50ZXIgd291bGQgYmUgYWxyZWFkeSBpbnNpZGUgdGhlIGlneERyb3AuXG4gICAgICovXG4gICAgcGFnZVk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgcG9pbnRlciBvbiBYIGF4aXMgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5lciB0aGF0IGluaXRpYWxpemVzIHRoZSBpZ3hEcm9wLlxuICAgICAqIE5vdGU6IFRoZSBicm93c2VyIG1pZ2h0IHRyaWdnZXIgdGhlIGV2ZW50IHdpdGggc29tZSBkZWxheSBhbmQgcG9pbnRlciB3b3VsZCBiZSBhbHJlYWR5IGluc2lkZSB0aGUgaWd4RHJvcC5cbiAgICAgKi9cbiAgICBvZmZzZXRYOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXIgb24gWSBheGlzIHJlbGF0aXZlIHRvIHRoZSBjb250YWluZXIgdGhhdCBpbml0aWFsaXplcyB0aGUgaWd4RHJvcC5cbiAgICAgKiBOb3RlOiBUaGUgYnJvd3NlciBtaWdodCB0cmlnZ2VyIHRoZSBldmVudCB3aXRoIHNvbWUgZGVsYXkgYW5kIHBvaW50ZXIgd291bGQgYmUgYWxyZWFkeSBpbnNpZGUgdGhlIGlneERyb3AuXG4gICAgICovXG4gICAgb2Zmc2V0WTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElneERyb3BMZWF2ZUV2ZW50QXJncyB7XG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBldmVudCB0aGF0IGNhdXNlZCB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgdG8gZW50ZXIgdGhlIGlneERyb3AgZWxlbWVudC5cbiAgICAgKiBDYW4gYmUgUG9pbnRlckV2ZW50LCBUb3VjaEV2ZW50IG9yIE1vdXNlRXZlbnQuXG4gICAgICovXG4gICAgb3JpZ2luYWxFdmVudDogYW55O1xuICAgIC8qKiBUaGUgb3duZXIgaWd4RHJvcCBkaXJlY3RpdmUgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudC4gKi9cbiAgICBvd25lcjogSWd4RHJvcERpcmVjdGl2ZTtcbiAgICAvKiogVGhlIGlneERyYWcgZGlyZWN0aXZlIGluc3RhbmNlZCBvbiBhbiBlbGVtZW50IHRoYXQgZW50ZXJlZCB0aGUgYXJlYSBvZiB0aGUgaWd4RHJvcCBlbGVtZW50ICovXG4gICAgZHJhZzogSWd4RHJhZ0RpcmVjdGl2ZTtcbiAgICAvKiogVGhlIGRhdGEgY29udGFpbmVkIGZvciB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgaW4gaWd4RHJhZyBkaXJlY3RpdmUuICovXG4gICAgZHJhZ0RhdGE6IGFueTtcbiAgICAvKiogVGhlIGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXIgb24gWCBheGlzIHdoZW4gdGhlIGRyYWdnZWQgZWxlbWVudCBiZWdhbiBtb3ZpbmcgKi9cbiAgICBzdGFydFg6IG51bWJlcjtcbiAgICAvKiogVGhlIGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXIgb24gWSBheGlzIHdoZW4gdGhlIGRyYWdnZWQgZWxlbWVudCBiZWdhbiBtb3ZpbmcgKi9cbiAgICBzdGFydFk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgcG9pbnRlciBvbiBYIGF4aXMgd2hlbiB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZC5cbiAgICAgKiBOb3RlOiBUaGUgYnJvd3NlciBtaWdodCB0cmlnZ2VyIHRoZSBldmVudCB3aXRoIHNvbWUgZGVsYXkgYW5kIHBvaW50ZXIgd291bGQgYmUgYWxyZWFkeSBpbnNpZGUgdGhlIGlneERyb3AuXG4gICAgICovXG4gICAgcGFnZVg6IG51bWJlcjtcbiAgICAgICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXIgb24gWSBheGlzIHdoZW4gdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQuXG4gICAgICogTm90ZTogVGhlIGJyb3dzZXIgbWlnaHQgdHJpZ2dlciB0aGUgZXZlbnQgd2l0aCBzb21lIGRlbGF5IGFuZCBwb2ludGVyIHdvdWxkIGJlIGFscmVhZHkgaW5zaWRlIHRoZSBpZ3hEcm9wLlxuICAgICAqL1xuICAgIHBhZ2VZOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXIgb24gWCBheGlzIHJlbGF0aXZlIHRvIHRoZSBjb250YWluZXIgdGhhdCBpbml0aWFsaXplcyB0aGUgaWd4RHJvcC5cbiAgICAgKiBOb3RlOiBUaGUgYnJvd3NlciBtaWdodCB0cmlnZ2VyIHRoZSBldmVudCB3aXRoIHNvbWUgZGVsYXkgYW5kIHBvaW50ZXIgd291bGQgYmUgYWxyZWFkeSBpbnNpZGUgdGhlIGlneERyb3AuXG4gICAgICovXG4gICAgb2Zmc2V0WDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBwb2ludGVyIG9uIFkgYXhpcyByZWxhdGl2ZSB0byB0aGUgY29udGFpbmVyIHRoYXQgaW5pdGlhbGl6ZXMgdGhlIGlneERyb3AuXG4gICAgICogTm90ZTogVGhlIGJyb3dzZXIgbWlnaHQgdHJpZ2dlciB0aGUgZXZlbnQgd2l0aCBzb21lIGRlbGF5IGFuZCBwb2ludGVyIHdvdWxkIGJlIGFscmVhZHkgaW5zaWRlIHRoZSBpZ3hEcm9wLlxuICAgICAqL1xuICAgIG9mZnNldFk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJZ3hEcm9wRXZlbnRBcmdzIHtcbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIGV2ZW50IHRoYXQgY2F1c2VkIHRoZSBkcmFnZ2FibGUgZWxlbWVudCB0byBlbnRlciB0aGUgaWd4RHJvcCBlbGVtZW50LlxuICAgICAqIENhbiBiZSBQb2ludGVyRXZlbnQsIFRvdWNoRXZlbnQgb3IgTW91c2VFdmVudC5cbiAgICAgKi9cbiAgICBvcmlnaW5hbEV2ZW50OiBhbnk7XG4gICAgLyoqIFRoZSBvd25lciBpZ3hEcm9wIGRpcmVjdGl2ZSB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50LiAqL1xuICAgIG93bmVyOiBJZ3hEcm9wRGlyZWN0aXZlO1xuICAgIC8qKiBUaGUgaWd4RHJhZyBkaXJlY3RpdmUgaW5zdGFuY2VkIG9uIGFuIGVsZW1lbnQgdGhhdCBlbnRlcmVkIHRoZSBhcmVhIG9mIHRoZSBpZ3hEcm9wIGVsZW1lbnQgKi9cbiAgICBkcmFnOiBJZ3hEcmFnRGlyZWN0aXZlO1xuICAgIC8qKiBUaGUgZGF0YSBjb250YWluZWQgZm9yIHRoZSBkcmFnZ2FibGUgZWxlbWVudCBpbiBpZ3hEcmFnIGRpcmVjdGl2ZS4gKi9cbiAgICBkcmFnRGF0YTogYW55O1xuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBwb2ludGVyIG9uIFggYXhpcyByZWxhdGl2ZSB0byB0aGUgY29udGFpbmVyIHRoYXQgaW5pdGlhbGl6ZXMgdGhlIGlneERyb3AuXG4gICAgICogTm90ZTogVGhlIGJyb3dzZXIgbWlnaHQgdHJpZ2dlciB0aGUgZXZlbnQgd2l0aCBzb21lIGRlbGF5IGFuZCBwb2ludGVyIHdvdWxkIGJlIGFscmVhZHkgaW5zaWRlIHRoZSBpZ3hEcm9wLlxuICAgICAqL1xuICAgIG9mZnNldFg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgcG9pbnRlciBvbiBZIGF4aXMgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5lciB0aGF0IGluaXRpYWxpemVzIHRoZSBpZ3hEcm9wLlxuICAgICAqIE5vdGU6IFRoZSBicm93c2VyIG1pZ2h0IHRyaWdnZXIgdGhlIGV2ZW50IHdpdGggc29tZSBkZWxheSBhbmQgcG9pbnRlciB3b3VsZCBiZSBhbHJlYWR5IGluc2lkZSB0aGUgaWd4RHJvcC5cbiAgICAgKi9cbiAgICBvZmZzZXRZOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgZGVmYXVsdCBkcm9wIGJlaGF2aW9yIG9mIHRoZSBpZ3hEcm9wIGRpcmVjdGl2ZSBzaG91bGQgYmUgY2FuY2VsZWQuXG4gICAgICogTm90ZTogSWYgeW91IGltcGxlbWVudCBjdXN0b20gYmVoYXZpb3IgYW5kIHlvdSB1c2UgYGFuaW1hdGVPblJlbGVhc2VgIGZvciB0aGUgaWd4RHJhZyBtYWtlIHN1cmUgdG8gY2FsbCAnZXZlbnQuZHJhZy5kcm9wRmluaXNoZWQoKTsnXG4gICAgICogdG8gbm90aWZ5IHRoZSBpZ3hEcmFnIGRpcmVjdGl2ZSB0aGF0IGl0IGhhcyBiZWVuIGRyb3BwZWQgc28gaXQgYW5pbWF0ZXMgcHJvcGVybHkuXG4gICAgICovXG4gICAgY2FuY2VsOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnQmFzZUV2ZW50QXJncyB7XG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBldmVudCB0aGF0IGNhdXNlZCB0aGUgaW50ZXJhY3Rpb24gd2l0aCB0aGUgZWxlbWVudC5cbiAgICAgKiBDYW4gYmUgUG9pbnRlckV2ZW50LCBUb3VjaEV2ZW50IG9yIE1vdXNlRXZlbnQuXG4gICAgICovXG4gICAgb3JpZ2luYWxFdmVudDogUG9pbnRlckV2ZW50IHwgTW91c2VFdmVudCB8IFRvdWNoRXZlbnQ7XG4gICAgLyoqIFRoZSBvd25lciBpZ3hEcmFnIGRpcmVjdGl2ZSB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50LiAqL1xuICAgIG93bmVyOiBJZ3hEcmFnRGlyZWN0aXZlO1xufVxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ1N0YXJ0RXZlbnRBcmdzIGV4dGVuZHMgSURyYWdCYXNlRXZlbnRBcmdzIHtcbiAgICAvKiogU2V0IGlmIHRoZSB0aGUgZHJhZ2dpbmcgc2hvdWxkIGJlIGNhbmNlbGVkLiAqL1xuICAgIGNhbmNlbDogYm9vbGVhbjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4RHJhZ10nXG59KVxuZXhwb3J0IGNsYXNzIElneERyYWdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICAvKipcbiAgICAgKiAtIFNhdmUgZGF0YSBpbnNpZGUgdGhlIGBpZ3hEcmFnYCBkaXJlY3RpdmUuIFRoaXMgY2FuIGJlIHNldCB3aGVuIGluc3RhbmNpbmcgYGlneERyYWdgIG9uIGFuIGVsZW1lbnQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXYgW2lneERyYWddPVwieyBzb3VyY2U6IG15RWxlbWVudCB9XCI+PC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hEcmFnJylcbiAgICBwdWJsaWMgZGF0YTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgaW5kaWNhdGVzIHdoZW4gdGhlIGRyYWcgc2hvdWxkIHN0YXJ0XG4gICAgICogQnkgZGVmYXVsdCB0aGUgZHJhZyBzdGFydHMgYWZ0ZXIgdGhlIGRyYWdnYWJsZSBlbGVtZW50IGlzIG1vdmVkIGJ5IDVweFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2IGlneERyYWcgW2RyYWdUb2xlcmFuY2VdPVwiMTAwXCI+XG4gICAgICogICAgICAgICA8c3Bhbj5EcmFnIE1lITwvc3Bhbj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkcmFnVG9sZXJhbmNlID0gNTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgYSBjdXN0b20gY2xhc3MgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBgZHJhZ0dob3N0YCBlbGVtZW50LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2IGlneERyYWcgW2dob3N0SW1hZ2VDbGFzc109XCInZHJhZ0dob3N0J1wiPlxuICAgICAqICAgICAgICAgPHNwYW4+RHJhZyBNZSE8L3NwYW4+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2hvc3RJbWFnZUNsYXNzID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBoaWRlcyB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQuXG4gICAgICogQnkgZGVmYXVsdCBpdCdzIHNldCB0byBmYWxzZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdiBpZ3hEcmFnIFtkcmFnVG9sZXJhbmNlXT1cIjEwMFwiIFtoaWRlQmFzZU9uRHJhZ109XCIndHJ1ZSdcIj5cbiAgICAgKiAgICAgICAgIDxzcGFuPkRyYWcgTWUhPC9zcGFuPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhpZGVCYXNlT25EcmFnID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBlbmFibGVzL2Rpc2FibGVzIHRoZSBkcmFnZ2FibGUgZWxlbWVudCBhbmltYXRpb25cbiAgICAgKiB3aGVuIHRoZSBlbGVtZW50IGlzIHJlbGVhc2VkLlxuICAgICAqIEJ5IGRlZmF1bHQgaXQncyBzZXQgdG8gZmFsc2UuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXYgaWd4RHJhZyBbYW5pbWF0ZU9uUmVsZWFzZV09XCIndHJ1ZSdcIj5cbiAgICAgKiAgICAgICAgIDxzcGFuPkRyYWcgTWUhPC9zcGFuPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGFuaW1hdGVPblJlbGVhc2UgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhlIGRyYWdnZWQgZWxlbWVudCB3aWxsIGJlIGFwcGVuZGVkLlxuICAgICAqIEJ5IGRlZmF1bHQgaXQncyBzZXQgdG8gbnVsbCBhbmQgdGhlIGRyYWdnZWQgZWxlbWVudCBpcyBhcHBlbmRlZCB0byB0aGUgYm9keS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdiAjaG9zdERpdj48L2Rpdj5cbiAgICAgKiA8ZGl2IGlneERyYWcgW2RyYWdHaG9zdEhvc3RdPVwiaG9zdERpdlwiPlxuICAgICAqICAgICAgICAgPHNwYW4+RHJhZyBNZSE8L3NwYW4+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZHJhZ0dob3N0SG9zdCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCB0cmlnZ2VyZWQgd2hlbiB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgZHJhZyBzdGFydHMuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXYgaWd4RHJhZyBbYW5pbWF0ZU9uUmVsZWFzZV09XCIndHJ1ZSdcIiAoZHJhZ1N0YXJ0KT1cIm9uRHJhZ1N0YXJ0KClcIj5cbiAgICAgKiAgICAgICAgIDxzcGFuPkRyYWcgTWUhPC9zcGFuPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBwdWJsaWMgb25EcmFnU3RhcnQoKXtcbiAgICAgKiAgICAgIGFsZXJ0KFwiVGhlIGRyYWcgaGFzIHN0YXJlZCFcIik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBkcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPElEcmFnU3RhcnRFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCB0cmlnZ2VyZWQgd2hlbiB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgaXMgcmVsZWFzZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXYgaWd4RHJhZyBbYW5pbWF0ZU9uUmVsZWFzZV09XCIndHJ1ZSdcIiAoZHJhZ0VuZCk9XCJvbkRyYWdFbmQoKVwiPlxuICAgICAqICAgICAgICAgPHNwYW4+RHJhZyBNZSE8L3NwYW4+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHB1YmxpYyBvbkRyYWdFbmQoKXtcbiAgICAgKiAgICAgIGFsZXJ0KFwiVGhlIGRyYWcgaGFzIGVuZGVkIVwiKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPElEcmFnQmFzZUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IHRyaWdnZXJlZCBhZnRlciB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgaXMgcmVsZWFzZWQgYW5kIGFmdGVyIGl0cyBhbmltYXRpb24gaGFzIGZpbmlzaGVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2IGlneERyYWcgW2FuaW1hdGVPblJlbGVhc2VdPVwiJ3RydWUnXCIgKHJldHVybk1vdmVFbmQpPVwib25Nb3ZlRW5kKClcIj5cbiAgICAgKiAgICAgICAgIDxzcGFuPkRyYWcgTWUhPC9zcGFuPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBwdWJsaWMgb25Nb3ZlRW5kKCl7XG4gICAgICogICAgICBhbGVydChcIlRoZSBtb3ZlIGhhcyBlbmRlZCFcIik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyByZXR1cm5Nb3ZlRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxJRHJhZ0Jhc2VFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCB0cmlnZ2VyZWQgd2hlbiB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgaXMgY2xpY2tlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdiBpZ3hEcmFnIFthbmltYXRlT25SZWxlYXNlXT1cIid0cnVlJ1wiIChkcmFnQ2xpY2tlZCk9XCJkcmFnQ2xpY2tlZCgpXCI+XG4gICAgICogICAgICAgICA8c3Bhbj5EcmFnIE1lITwvc3Bhbj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcHVibGljIGRyYWdDbGlja2VkKCl7XG4gICAgICogICAgICBhbGVydChcIlRoZSBlbGVtZW50ZWQgaGFzIGJlZW4gY2xpY2tlZCFcIik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBkcmFnQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SURyYWdCYXNlRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUudG91Y2hBY3Rpb24nKVxuICAgIHB1YmxpYyB0b3VjaCA9ICdub25lJztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eScpXG4gICAgcHVibGljIHRyYW5zaXRpb25Qcm9wZXJ0eSA9ICd0b3AsIGxlZnQnO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUudmlzaWJpbGl0eScpXG4gICAgcHVibGljIF92aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoXCJteURyYWdcIiAse3JlYWQ6IElneERyYWdEaXJlY3RpdmV9KVxuICAgICAqIHB1YmxpYyBteURyYWc6IElneERyYWdEaXJlY3RpdmU7XG4gICAgICogbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgIHRoaXMubXlEcmFnLnZpc2libGUgPSBmYWxzZTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHNldCB2aXNpYmxlKGJWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMuX3Zpc2liaWxpdHkgPSBiVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmlzaWJpbGl0eSBzdGF0ZSBvZiB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoXCJteURyYWdcIiAse3JlYWQ6IElneERyYWdEaXJlY3RpdmV9KVxuICAgICAqIHB1YmxpYyBteURyYWc6IElneERyYWdEaXJlY3RpdmU7XG4gICAgICogbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgIGxldCBkcmFnVmlzaWJpbHR5ID0gdGhpcy5teURyYWcudmlzaWJsZTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCB2aXNpYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlzaWJpbGl0eSA9PT0gJ3Zpc2libGUnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGxlZnQodmFsOiBudW1iZXIpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdHaG9zdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0dob3N0LnN0eWxlLmxlZnQgPSB2YWwgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBsZWZ0KCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5kcmFnR2hvc3Quc3R5bGUubGVmdCwgMTApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHRvcCh2YWw6IG51bWJlcikge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ0dob3N0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3Quc3R5bGUudG9wID0gdmFsICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdG9wKCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5kcmFnR2hvc3Quc3R5bGUudG9wLCAxMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBwb2ludGVyIGV2ZW50cy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZChcIm15RHJhZ1wiICx7cmVhZDogSWd4RHJhZ0RpcmVjdGl2ZX0pXG4gICAgICogcHVibGljIG15RHJhZzogSWd4RHJhZ0RpcmVjdGl2ZTtcbiAgICAgKiBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICAgbGV0IHBvaW50ZXJFdmVudHMgPSB0aGlzLm15RHJhZy5wb2ludGVyRXZlbnRzRW5hYmxlZDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBwb2ludGVyRXZlbnRzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBQb2ludGVyRXZlbnQgIT09ICd1bmRlZmluZWQnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdG91Y2ggZXZlbnRzLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKFwibXlEcmFnXCIgLHtyZWFkOiBJZ3hEcmFnRGlyZWN0aXZlfSlcbiAgICAgKiBwdWJsaWMgbXlEcmFnOiBJZ3hEcmFnRGlyZWN0aXZlO1xuICAgICAqIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgICBsZXQgdG91Y2hFdmVudHMgPSB0aGlzLm15RHJhZy5wb2ludGVyRXZlbnRzRW5hYmxlZDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCB0b3VjaEV2ZW50c0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBkZWZhdWx0UmV0dXJuRHVyYXRpb24gPSAnMC41cyc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9zdGFydFggPSAwO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3N0YXJ0WSA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGRyYWdHaG9zdDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9kcmFnU3RhcnRlZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2RyYWdPZmZzZXRYO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2RyYWdPZmZzZXRZO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2RyYWdTdGFydFg7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfZHJhZ1N0YXJ0WTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9wb2ludGVyRG93bklkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2NsaWNrZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9sYXN0RHJvcEFyZWEgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfZGVzdHJveSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9yZW1vdmVPbkRlc3Ryb3kgPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgem9uZTogTmdab25lLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50ZXJFdmVudHNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAncG9pbnRlcmRvd24nKS5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHRoaXMub25Qb2ludGVyRG93bihyZXMpKTtcblxuICAgICAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3BvaW50ZXJtb3ZlJykucGlwZShcbiAgICAgICAgICAgICAgICAgICAgdGhyb3R0bGUoKCkgPT4gaW50ZXJ2YWwoMCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpKSxcbiAgICAgICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpXG4gICAgICAgICAgICAgICAgKS5zdWJzY3JpYmUoKHJlcykgPT4gdGhpcy5vblBvaW50ZXJNb3ZlKHJlcykpO1xuXG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAncG9pbnRlcnVwJykucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4gdGhpcy5vblBvaW50ZXJVcChyZXMpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50b3VjaEV2ZW50c0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0b3VjaHN0YXJ0JykucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB0aGlzLm9uUG9pbnRlckRvd24ocmVzKSk7XG5cbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQoZG9jdW1lbnQuZGVmYXVsdFZpZXcsICd0b3VjaG1vdmUnKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICB0aHJvdHRsZSgoKSA9PiBpbnRlcnZhbCgwLCBhbmltYXRpb25GcmFtZVNjaGVkdWxlcikpLFxuICAgICAgICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSlcbiAgICAgICAgICAgICAgICApLnN1YnNjcmliZSgocmVzKSA9PiB0aGlzLm9uUG9pbnRlck1vdmUocmVzKSk7XG5cbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQoZG9jdW1lbnQuZGVmYXVsdFZpZXcsICd0b3VjaGVuZCcpLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHRoaXMub25Qb2ludGVyVXAocmVzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IGhhdmUgcG9pbnRlciBldmVudHMgYW5kIHRvdWNoIGV2ZW50cy4gVXNlIHRoZW4gbW91c2UgZXZlbnRzLlxuICAgICAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21vdXNlZG93bicpLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4gdGhpcy5vblBvaW50ZXJEb3duKHJlcykpO1xuXG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LmRlZmF1bHRWaWV3LCAnbW91c2Vtb3ZlJykucGlwZShcbiAgICAgICAgICAgICAgICAgICAgdGhyb3R0bGUoKCkgPT4gaW50ZXJ2YWwoMCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpKSxcbiAgICAgICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpXG4gICAgICAgICAgICAgICAgKS5zdWJzY3JpYmUoKHJlcykgPT4gdGhpcy5vblBvaW50ZXJNb3ZlKHJlcykpO1xuXG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LmRlZmF1bHRWaWV3LCAnbW91c2V1cCcpLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHRoaXMub25Qb2ludGVyVXAocmVzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveS5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLl9kZXN0cm95LmNvbXBsZXRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ0dob3N0ICYmIHRoaXMuX3JlbW92ZU9uRGVzdHJveSkge1xuICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRyYWdHaG9zdCk7XG4gICAgICAgICAgICB0aGlzLmRyYWdHaG9zdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogTWV0aG9kIGJvdW5kIHRvIHRoZSBQb2ludGVyRG93biBldmVudCBvZiB0aGUgYmFzZSBlbGVtZW50IGlneERyYWcgaXMgaW5pdGlhbGl6ZWQuXG4gICAgICogQHBhcmFtIGV2ZW50IFBvaW50ZXJEb3duIGV2ZW50IGNhcHR1cmVkXG4gICAgICovXG4gICAgcHVibGljIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fY2xpY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BvaW50ZXJEb3duSWQgPSBldmVudC5wb2ludGVySWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucG9pbnRlckV2ZW50c0VuYWJsZWQgfHwgIXRoaXMudG91Y2hFdmVudHNFbmFibGVkKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBmaXJzdCBmb3IgcG9pbnRlciBldmVudHMgb3Igbm9uIHRvdWNoLCBiZWNhdXNlIHdlIGNhbiBoYXZlIHBvaW50ZXIgZXZlbnRzIGFuZCB0b3VjaCBldmVudHMgYXQgb25jZS5cbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0WCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICAgICAgdGhpcy5fc3RhcnRZID0gZXZlbnQucGFnZVk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b3VjaEV2ZW50c0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0WCA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICB0aGlzLl9zdGFydFkgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGFrZSBtYXJnaW5zIGJlY2F1c2UgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgZG9lc24ndCBpbmNsdWRlIG1hcmdpbnMgb2YgdGhlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgbWFyZ2luVG9wID0gcGFyc2VJbnQoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudClbJ21hcmdpbi10b3AnXSwgMTApO1xuICAgICAgICBjb25zdCBtYXJnaW5MZWZ0ID0gcGFyc2VJbnQoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudClbJ21hcmdpbi1sZWZ0J10sIDEwKTtcblxuICAgICAgICB0aGlzLl9kcmFnT2Zmc2V0WCA9XG4gICAgICAgICAgICAodGhpcy5fc3RhcnRYIC0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIHRoaXMuZ2V0V2luZG93U2Nyb2xsTGVmdCgpKSArIG1hcmdpbkxlZnQ7XG4gICAgICAgIHRoaXMuX2RyYWdPZmZzZXRZID1cbiAgICAgICAgICAgICh0aGlzLl9zdGFydFkgLSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0aGlzLmdldFdpbmRvd1Njcm9sbFRvcCgpKSArIG1hcmdpblRvcDtcbiAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0WCA9IHRoaXMuX3N0YXJ0WCAtIHRoaXMuX2RyYWdPZmZzZXRYO1xuICAgICAgICB0aGlzLl9kcmFnU3RhcnRZID0gdGhpcy5fc3RhcnRZIC0gdGhpcy5fZHJhZ09mZnNldFk7XG5cbiAgICAgICAgLy8gU2V0IHBvaW50ZXIgY2FwdHVyZSBzbyB3ZSBkZXRlY3QgcG9pbnRlcm1vdmUgZXZlbiBpZiBtb3VzZSBpcyBvdXQgb2YgYm91bmRzIHVudGlsIGRyYWdHaG9zdCBpcyBjcmVhdGVkLlxuICAgICAgICBpZiAodGhpcy5wb2ludGVyRXZlbnRzRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0UG9pbnRlckNhcHR1cmUodGhpcy5fcG9pbnRlckRvd25JZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBQZXJmbW9ybSBkcmFnIG1vdmUgbG9naWMgd2hlbiBkcmFnZ2luZyBhbmQgZGlzcGF0Y2hpbmcgZXZlbnRzIGlmIHRoZXJlIGlzIGlneERyb3AgdW5kZXIgdGhlIHBvaW50ZXIuXG4gICAgICogVGhpcyBtZXRob2QgaXMgYm91bmQgYXQgZmlyc3QgYXQgdGhlIGJhc2UgZWxlbWVudC5cbiAgICAgKiBJZiBkcmFnZ2luZyBzdGFydHMgYW5kIGFmdGVyIHRoZSBkcmFnR2hvc3QgaXMgcmVuZGVyZWQgdGhlIHBvaW50ZXJJZCBpcyByZWFzc2lnbmVkIHRvIHRoZSBkcmFnR2hvc3QuIFRoZW4gdGhpcyBtZXRob2QgaXMgYm91bmQgdG8gaXQuXG4gICAgICogQHBhcmFtIGV2ZW50IFBvaW50ZXJNb3ZlIGV2ZW50IGNhcHR1cmVkXG4gICAgICovXG4gICAgcHVibGljIG9uUG9pbnRlck1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NsaWNrZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdTdGFydEFyZ3M6IElEcmFnU3RhcnRFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICAgICAgb3duZXI6IHRoaXMsXG4gICAgICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBwYWdlWCwgcGFnZVk7XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludGVyRXZlbnRzRW5hYmxlZCB8fCAhdGhpcy50b3VjaEV2ZW50c0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmaXJzdCBmb3IgcG9pbnRlciBldmVudHMgb3Igbm9uIHRvdWNoLCBiZWNhdXNlIHdlIGNhbiBoYXZlIHBvaW50ZXIgZXZlbnRzIGFuZCB0b3VjaCBldmVudHMgYXQgb25jZS5cbiAgICAgICAgICAgICAgICBwYWdlWCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgICAgICAgICAgIHBhZ2VZID0gZXZlbnQucGFnZVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG91Y2hFdmVudHNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgcGFnZVggPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgIHBhZ2VZID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWTtcblxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgc2Nyb2xsaW5nIG9uIHRvdWNoIHdoaWxlIGRyYWdnaW5nXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdG90YWxNb3ZlZFggPSBwYWdlWCAtIHRoaXMuX3N0YXJ0WDtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsTW92ZWRZID0gcGFnZVkgLSB0aGlzLl9zdGFydFk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2RyYWdTdGFydGVkICYmXG4gICAgICAgICAgICAgICAgKE1hdGguYWJzKHRvdGFsTW92ZWRYKSA+IHRoaXMuZHJhZ1RvbGVyYW5jZSB8fCBNYXRoLmFicyh0b3RhbE1vdmVkWSkgPiB0aGlzLmRyYWdUb2xlcmFuY2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0LmVtaXQoZHJhZ1N0YXJ0QXJncyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRyYWdTdGFydEFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgbW92ZWQgZW5vdWdoIHNvIGRyYWdHaG9zdCBjYW4gYmUgcmVuZGVyZWQgYW5kIGFjdHVhbCBkcmFnZ2luZyB0byBzdGFydC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEcmFnR2hvc3QoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLl9kcmFnU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5fZHJhZ1N0YXJ0WCArIHRvdGFsTW92ZWRYO1xuICAgICAgICAgICAgdGhpcy50b3AgPSB0aGlzLl9kcmFnU3RhcnRZICsgdG90YWxNb3ZlZFk7XG5cbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hEcmFnRXZlbnRzKHBhZ2VYLCBwYWdlWSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFBlcmZvcm0gZHJhZyBlbmQgbG9naWMgd2hlbiByZWxlYXNpbmcgdGhlIGRyYWdHaG9zdCBhbmQgZGlzcGF0Y2hpbmcgZHJvcCBldmVudCBpZiBpZ3hEcm9wIGlzIHVuZGVyIHRoZSBwb2ludGVyLlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGJvdW5kIGF0IGZpcnN0IGF0IHRoZSBiYXNlIGVsZW1lbnQuXG4gICAgICogSWYgZHJhZ2dpbmcgc3RhcnRzIGFuZCBhZnRlciB0aGUgZHJhZ0dob3N0IGlzIHJlbmRlcmVkIHRoZSBwb2ludGVySWQgaXMgcmVhc3NpZ25lZCB0byB0aGUgZHJhZ0dob3N0LiBUaGVuIHRoaXMgbWV0aG9kIGlzIGJvdW5kIHRvIGl0LlxuICAgICAqIEBwYXJhbSBldmVudCBQb2ludGVyVXAgZXZlbnQgY2FwdHVyZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgb25Qb2ludGVyVXAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jbGlja2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBldmVudEFyZ3MgPSB7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIG93bmVyOiB0aGlzXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2NsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdTdGFydGVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGFzdERyb3BBcmVhICYmIHRoaXMuX2xhc3REcm9wQXJlYSAhPT0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYW5pbWF0ZU9uUmVsZWFzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVHJhbnNpdGlvbkVuZChudWxsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBkcmFnZ2luZyBlbmRlZCBvdmVyIGEgZHJvcCBhcmVhLiBDYWxsIHRoaXMgYWZ0ZXIgdHJhbnNpdGlvbiBiZWNhdXNlIG9uRHJvcCBtaWdodCByZW1vdmUgdGhlIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaERyb3BFdmVudChldmVudC5wYWdlWCwgZXZlbnQucGFnZVksIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAvLyBlbHNlIHRoZSBkcm9wIGRpcmVjdGl2ZSBuZWVkcyB0byBjYWxsIHRoZSBkcm9wRmluaXNoZWQoKSBtZXRob2Qgc28gdGhlIGFuaW1hdGlvbiBjYW4gcGVyZm9ybVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFuaW1hdGVPblJlbGVhc2UgJiZcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMubGVmdCAhPT0gTWF0aC5mbG9vcih0aGlzLl9kcmFnU3RhcnRYKSB8fCB0aGlzLnRvcCAhPT0gTWF0aC5mbG9vcih0aGlzLl9kcmFnU3RhcnRZKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgc3RhcnQgcG9zaXRpb25zIGFyZSB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCB0aGUgdHJhbnNpdGlvbiB3aWxsIG5vdCBleGVjdXRlLlxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgZ2hvc3QgdG8gc3RhcnQgcG9zaXRpb24gYmVmb3JlIHJlbW92aW5nIGl0LiBTZWUgb25UcmFuc2l0aW9uRW5kLlxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0dob3N0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRoaXMuZGVmYXVsdFJldHVybkR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IHRoaXMuX2RyYWdTdGFydFg7XG4gICAgICAgICAgICAgICAgdGhpcy50b3AgPSB0aGlzLl9kcmFnU3RhcnRZO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVHJhbnNpdGlvbkVuZChudWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnRW5kLmVtaXQoZXZlbnRBcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnQ2xpY2tlZC5lbWl0KGV2ZW50QXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBDcmVhdGUgZHJhZ0dob3N0IGVsZW1lbnQgLSBpZiBhIE5vZGUgb2JqZWN0IGlzIHByb3ZpZGVkIGl0IGNyZWF0ZXMgYSBjbG9uZSBvZiB0aGF0IG5vZGUsXG4gICAgICogb3RoZXJ3aXNlIGl0IGNsb25lcyB0aGUgaG9zdCBlbGVtZW50LlxuICAgICAqIEJpbmQgYWxsIG5lZWRlZCBldmVudHMuXG4gICAgICogQHBhcmFtIGV2ZW50IFBvaW50ZXIgZXZlbnQgcmVxdWlyZWQgd2hlbiB0aGUgZHJhZ0dob3N0IGlzIGJlaW5nIGluaXRpYWxpemVkLlxuICAgICAqIEBwYXJhbSBub2RlIFRoZSBOb2RlIG9iamVjdCB0byBiZSBjbG9uZWQuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNyZWF0ZURyYWdHaG9zdChldmVudCwgbm9kZTogYW55ID0gbnVsbCkge1xuICAgICAgICB0aGlzLmRyYWdHaG9zdCA9IG5vZGUgPyBub2RlLmNsb25lTm9kZSh0cnVlKSA6IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgdGhpcy5kcmFnR2hvc3Quc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzAuMHMnO1xuICAgICAgICB0aGlzLmRyYWdHaG9zdC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIGNvbnN0IGhvc3RMZWZ0ID0gdGhpcy5kcmFnR2hvc3RIb3N0ID8gdGhpcy5kcmFnR2hvc3RIb3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgOiAwO1xuICAgICAgICBjb25zdCBob3N0VG9wID0gdGhpcy5kcmFnR2hvc3RIb3N0ID8gdGhpcy5kcmFnR2hvc3RIb3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA6IDA7XG4gICAgICAgIHRoaXMuZHJhZ0dob3N0LnN0eWxlLnRvcCA9IHRoaXMuX2RyYWdTdGFydFkgLSBob3N0VG9wICsgJ3B4JztcbiAgICAgICAgdGhpcy5kcmFnR2hvc3Quc3R5bGUubGVmdCA9IHRoaXMuX2RyYWdTdGFydFggLSBob3N0TGVmdCArICdweCc7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2hvc3RJbWFnZUNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZHJhZ0dob3N0LCB0aGlzLmdob3N0SW1hZ2VDbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kcmFnR2hvc3RIb3N0KSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdHaG9zdEhvc3QuYXBwZW5kQ2hpbGQodGhpcy5kcmFnR2hvc3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRyYWdHaG9zdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb2ludGVyRXZlbnRzRW5hYmxlZCkge1xuICAgICAgICAgICAgLy8gVGhlIGRyYWdHaG9zdCB0YWtlcyBjb250cm9sIGZvciBtb3ZpbmcgYW5kIGRyYWdnaW5nIGFmdGVyIGl0IGhhcyBiZWVuIHNob3duLlxuICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3Quc2V0UG9pbnRlckNhcHR1cmUodGhpcy5fcG9pbnRlckRvd25JZCk7XG4gICAgICAgICAgICB0aGlzLmRyYWdHaG9zdC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBvaW50ZXJNb3ZlKGFyZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRyYWdHaG9zdC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25Qb2ludGVyVXAoYXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGVPblJlbGVhc2UpIHtcbiAgICAgICAgICAgIC8vIFRyYW5zaXRpb24gYW5pbWF0aW9uIHdoZW4gdGhlIGRyYWdHaG9zdCBpcyByZWxlYXNlZCBhbmQgaXQgcmV0dXJucyB0byBpdCdzIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3QuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblRyYW5zaXRpb25FbmQoYXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhpZGUgdGhlIGJhc2UgYWZ0ZXIgdGhlIGRyYWdHaG9zdCBpcyBjcmVhdGVkLCBiZWNhdXNlIG90aGVyd2lzZSB0aGUgZHJhZ0dob3N0IHdpbGwgYmUgbm90IHZpc2libGUuXG4gICAgICAgIGlmICh0aGlzLmhpZGVCYXNlT25EcmFnKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBEaXNwYXRjaCBjdXN0b20gaWd4RHJhZ0VudGVyL2lneERyYWdMZWF2ZSBldmVudHMgYmFzZWQgb24gY3VycmVudCBwb2ludGVyIHBvc2l0aW9uIGFuZCBpZiBkcm9wIGFyZWEgaXMgdW5kZXIuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGRpc3BhdGNoRHJhZ0V2ZW50cyhwYWdlWDogbnVtYmVyLCBwYWdlWTogbnVtYmVyLCBvcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgIGxldCB0b3BEcm9wQXJlYTtcbiAgICAgICAgY29uc3QgZXZlbnRBcmdzOiBJZ3hEcmFnQ3VzdG9tRXZlbnREZXRhaWxzID0ge1xuICAgICAgICAgICAgc3RhcnRYOiB0aGlzLl9zdGFydFgsXG4gICAgICAgICAgICBzdGFydFk6IHRoaXMuX3N0YXJ0WSxcbiAgICAgICAgICAgIHBhZ2VYOiBwYWdlWCxcbiAgICAgICAgICAgIHBhZ2VZOiBwYWdlWSxcbiAgICAgICAgICAgIG93bmVyOiB0aGlzLFxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogb3JpZ2luYWxFdmVudFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzRnJvbVBvaW50ID0gdGhpcy5nZXRFbGVtZW50c0F0UG9pbnQocGFnZVgsIHBhZ2VZKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50c0Zyb21Qb2ludC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRzRnJvbVBvaW50W2ldLmdldEF0dHJpYnV0ZSgnZHJvcHBhYmxlJykgPT09ICd0cnVlJyAmJiBlbGVtZW50c0Zyb21Qb2ludFtpXSAhPT0gdGhpcy5kcmFnR2hvc3QpIHtcbiAgICAgICAgICAgICAgICB0b3BEcm9wQXJlYSA9IGVsZW1lbnRzRnJvbVBvaW50W2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvcERyb3BBcmVhKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodG9wRHJvcEFyZWEsICdpZ3hEcmFnT3ZlcicsIGV2ZW50QXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9wRHJvcEFyZWEgJiZcbiAgICAgICAgICAgICghdGhpcy5fbGFzdERyb3BBcmVhIHx8ICh0aGlzLl9sYXN0RHJvcEFyZWEgJiYgdGhpcy5fbGFzdERyb3BBcmVhICE9PSB0b3BEcm9wQXJlYSkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGFzdERyb3BBcmVhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX2xhc3REcm9wQXJlYSwgJ2lneERyYWdMZWF2ZScsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2xhc3REcm9wQXJlYSA9IHRvcERyb3BBcmVhO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX2xhc3REcm9wQXJlYSwgJ2lneERyYWdFbnRlcicsIGV2ZW50QXJncyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRvcERyb3BBcmVhICYmIHRoaXMuX2xhc3REcm9wQXJlYSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX2xhc3REcm9wQXJlYSwgJ2lneERyYWdMZWF2ZScsIGV2ZW50QXJncyk7XG4gICAgICAgICAgICB0aGlzLl9sYXN0RHJvcEFyZWEgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIERpc3BhdGNoIGN1c3RvbSBpZ3hEcm9wIGV2ZW50IGJhc2VkIG9uIGN1cnJlbnQgcG9pbnRlciBwb3NpdGlvbiBpZiB0aGVyZSBpcyBsYXN0IHJlY29yZGVyIGRyb3AgYXJlYSB1bmRlciB0aGUgcG9pbnRlci5cbiAgICAgKiBMYXN0IHJlY29yZGVyIGRyb3AgYXJlYSBpcyB1cGRhdGVkIGluIEBkaXNwYXRjaERyYWdFdmVudHMgbWV0aG9kLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBkaXNwYXRjaERyb3BFdmVudChwYWdlWDogbnVtYmVyLCBwYWdlWTogbnVtYmVyLCBvcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGV2ZW50QXJnczogSWd4RHJhZ0N1c3RvbUV2ZW50RGV0YWlscyA9IHtcbiAgICAgICAgICAgIHN0YXJ0WDogdGhpcy5fc3RhcnRYLFxuICAgICAgICAgICAgc3RhcnRZOiB0aGlzLl9zdGFydFksXG4gICAgICAgICAgICBwYWdlWDogcGFnZVgsXG4gICAgICAgICAgICBwYWdlWTogcGFnZVksXG4gICAgICAgICAgICBvd25lcjogdGhpcyxcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IG9yaWdpbmFsRXZlbnRcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fbGFzdERyb3BBcmVhLCAnaWd4RHJvcCcsIGV2ZW50QXJncyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9sYXN0RHJvcEFyZWEsICdpZ3hEcmFnTGVhdmUnLCBldmVudEFyZ3MpO1xuICAgICAgICB0aGlzLl9sYXN0RHJvcEFyZWEgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBVcGRhdGUgcmVsYXRpdmUgcG9zaXRpb25zXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZURyYWdSZWxhdGl2ZVBvcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyYWdHaG9zdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBuZXcgZHJhZ0dob3N0IHBvc2l0aW9uIHRvIHJlbWFpbiB3aGVyZSB0aGUgbW91c2UgaXMsIHNvIGl0IGRvZXNuJ3QganVtcFxuICAgICAgICBjb25zdCB0b3RhbERyYWdnZWRYID0gdGhpcy5sZWZ0IC0gdGhpcy5fZHJhZ1N0YXJ0WDtcbiAgICAgICAgY29uc3QgdG90YWxEcmFnZ2VkWSA9IHRoaXMudG9wIC0gdGhpcy5fZHJhZ1N0YXJ0WTtcbiAgICAgICAgY29uc3QgbmV3UG9zWCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgIGNvbnN0IG5ld1Bvc1kgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIGNvbnN0IGRpZmZTdGFydFggPSB0aGlzLl9kcmFnU3RhcnRYIC0gbmV3UG9zWDtcbiAgICAgICAgY29uc3QgZGlmZlN0YXJ0WSA9IHRoaXMuX2RyYWdTdGFydFkgLSBuZXdQb3NZO1xuICAgICAgICB0aGlzLnRvcCA9IG5ld1Bvc1ggKyB0b3RhbERyYWdnZWRYIC0gZGlmZlN0YXJ0WDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbmV3UG9zWSArIHRvdGFsRHJhZ2dlZFkgLSBkaWZmU3RhcnRZO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluZm9ybXMgdGhlIGBpZ3hEcmFnYCBkaXJlY3RpdmUgdGhhdCBpdCBoYXMgYmVlbiBkcm9wcGVkL3JlbGVhc2VkLlxuICAgICAqIFRoaXMgc2hvdWxkIHVzdWxseSBiZSBjYWxsZWQgd2hlbiBgYW5pbWF0ZU9uUmVsZWFzZWAgaXMgc2V0IHRvIGB0cnVlYC5cbiAgICAgKiBXaGVuIGNhbmNlbGluZyBvciBkZWZpbmluZyBjdXN0b20gZHJvcCBsb2dpYyB0aGlzIHRlbGxzIHRoZSBpZ3hEcmFnIHRvIHVwZGF0ZSBpdCdzIHBvc2l0aW9ucyBhbmRcbiAgICAgKiBhbmltYXRlIGNvcnJlY3RseSB0byB0aGUgbmV3IHBvc2l0aW9uLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBwdWJsaWMgb25Ecm9wRWxlbShldmVudCkge1xuICAgICAqICAgICAvLyBGdW5jdGlvbiBib3VuZCB0byB0aGUgaWd4RHJvcCBkaXJlY3RpdmUgZXZlbnQgYG9uRHJvcGBcbiAgICAgKiAgICAgLy8gVGhpcyBjYW5jZWxzIHRoZSBkZWZhdWx0IGRyb3AgbG9naWMgb2YgdGhlIGBpZ3hEcm9wYFxuICAgICAqICAgICBldmVudC5jYW5jZWwgPSB0cnVlO1xuICAgICAqICAgICBldmVudC5kcmFnLmRyb3BGaW5pc2hlZCgpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZHJvcEZpbmlzaGVkKCkge1xuICAgICAgICBpZiAodGhpcy5hbmltYXRlT25SZWxlYXNlICYmIHRoaXMuZHJhZ0dob3N0KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURyYWdSZWxhdGl2ZVBvcygpO1xuXG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGRyYWdnZWQgZWxlbWVudCB0byB0aGUgc3RhcnQuIFNlZSBvblRyYW5zaXRpb25FbmQgbmV4dC5cbiAgICAgICAgICAgIC8vIFRha2UgbWFyZ2lucyBiZWN1YXNlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGRvZXNuJ3QgaW5jbHVkZSBtYXJnaW5zXG4gICAgICAgICAgICBjb25zdCBtYXJnaW5Ub3AgPSBwYXJzZUludChkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KVsnbWFyZ2luLXRvcCddLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBtYXJnaW5MZWZ0ID0gcGFyc2VJbnQoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudClbJ21hcmdpbi1sZWZ0J10sIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Bvc1ggPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgdGhpcy5nZXRXaW5kb3dTY3JvbGxMZWZ0KCk7XG4gICAgICAgICAgICBjb25zdCBuZXdQb3NZID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy5nZXRXaW5kb3dTY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3Quc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5kZWZhdWx0UmV0dXJuRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBuZXdQb3NYIC0gbWFyZ2luTGVmdDtcbiAgICAgICAgICAgIHRoaXMudG9wID0gbmV3UG9zWSAtIG1hcmdpblRvcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25UcmFuc2l0aW9uRW5kKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9kcmFnU3RhcnRlZCAmJiAhdGhpcy5fY2xpY2tlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZUJhc2VPbkRyYWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRyYWdHaG9zdCk7XG4gICAgICAgICAgICB0aGlzLmRyYWdHaG9zdCA9IG51bGw7XG5cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwLjBzJztcbiAgICAgICAgICAgIHRoaXMuX2RyYWdTdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJldHVybk1vdmVFbmQuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICBvd25lcjogdGhpc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEVsZW1lbnRzQXRQb2ludChwYWdlWDogbnVtYmVyLCBwYWdlWTogbnVtYmVyKSB7XG4gICAgICAgIC8vIGNvcnJlY3QgdGhlIGNvb3JkaW5hdGVzIHdpdGggdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uLCBiZWNhdXNlXG4gICAgICAgIC8vIGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50IGNvbmlkZXIgcG9zaXRpb24gd2l0aGluIHRoZSBjdXJyZW50IHZpZXdwb3J0XG4gICAgICAgIC8vIHdpbmRvdy5wYWdlWE9mZnNldCA9PSB3aW5kb3cuc2Nyb2xsWDsgLy8gYWx3YXlzIHRydWVcbiAgICAgICAgLy8gdXNpbmcgd2luZG93LnBhZ2VYT2Zmc2V0IGZvciBJRTkgY29tcGF0aWJpbGl0eVxuICAgICAgICBjb25zdCB2aWV3UG9ydFggPSBwYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgICAgICAgY29uc3Qgdmlld1BvcnRZID0gcGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIGlmIChkb2N1bWVudFsnbXNFbGVtZW50c0Zyb21Qb2ludCddKSB7XG4gICAgICAgICAgICAvLyBFZGdlIGFuZCBJRSBzcGVjaWFsIHNub3dmbGFrZXNcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudFsnbXNFbGVtZW50c0Zyb21Qb2ludCddKHZpZXdQb3J0WCwgdmlld1BvcnRZKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyIGJyb3dzZXJzIGxpa2UgQ2hyb21lLCBGaXJlZm94LCBPcGVyYVxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KHZpZXdQb3J0WCwgdmlld1BvcnRZKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZGlzcGF0Y2hFdmVudCh0YXJnZXQsIGV2ZW50TmFtZTogc3RyaW5nLCBldmVudEFyZ3M6IElneERyYWdDdXN0b21FdmVudERldGFpbHMpIHtcbiAgICAgICAgLy8gVGhpcyB3YXkgaXMgSUUxMSBjb21wYXRpYmxlLlxuICAgICAgICBjb25zdCBkcmFnTGVhdmVFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICBkcmFnTGVhdmVFdmVudC5pbml0Q3VzdG9tRXZlbnQoZXZlbnROYW1lLCBmYWxzZSwgZmFsc2UsIGV2ZW50QXJncyk7XG4gICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KGRyYWdMZWF2ZUV2ZW50KTtcbiAgICAgICAgLy8gT3RoZXJzaWUgY2FuIGJlIHVzZWQgYHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIGV2ZW50QXJncykpO2BcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0V2luZG93U2Nyb2xsVG9wKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LnNjcm9sbFkgPyB3aW5kb3cuc2Nyb2xsWSA6ICh3aW5kb3cucGFnZVlPZmZzZXQgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiAwKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0V2luZG93U2Nyb2xsTGVmdCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxYID8gd2luZG93LnNjcm9sbFggOiAod2luZG93LnBhZ2VYT2Zmc2V0ID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogMCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hEcm9wXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RHJvcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIC8qKlxuICAgICAqIC0gU2F2ZSBkYXRhIGluc2lkZSB0aGUgYGlneERyb3BgIGRpcmVjdGl2ZS4gVGhpcyBjYW4gYmUgc2V0IHdoZW4gaW5zdGFuY2luZyBgaWd4RHJvcGAgb24gYW4gZWxlbWVudC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdiBbaWd4RHJvcF09XCJ7IHNvdXJjZTogbXlFbGVtZW50IH1cIj48L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneERyb3AnKVxuICAgIHB1YmxpYyBkYXRhOiBhbnk7XG5cbiAgICAvKiogRXZlbnQgdHJpZ2dlcmVkIHdoZW4gZHJhZ2dlZCBlbGVtZW50IGVudGVycyB0aGUgYXJlYSBvZiB0aGUgZWxlbWVudC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdiBjbGFzcz1cImNhZ2VBcmVhXCIgaWd4RHJvcCAob25FbnRlcik9XCJkcmFnRW50ZXIoKVwiIChpZ3hEcmFnRW50ZXIpPVwib25EcmFnQ2FnZUVudGVyKClcIiAoaWd4RHJhZ0xlYXZlKT1cIm9uRHJhZ0NhZ2VMZWF2ZSgpXCI+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHB1YmxpYyBkcmFnRW50ZXIoKXtcbiAgICAgKiAgICAgYWxlcnQoXCJBIGRyYWdnYWJsZSBlbGVtZW50ZSBoYXMgZW50ZXJlZCB0aGUgY2hpcCBhcmVhIVwiKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPElneERyb3BFbnRlckV2ZW50QXJncz4oKTtcblxuICAgIC8qKiBFdmVudCB0cmlnZ2VyZWQgd2hlbiBkcmFnZ2VkIGVsZW1lbnQgbGVhdmVzIHRoZSBhcmVhIG9mIHRoZSBlbGVtZW50LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2IGNsYXNzPVwiY2FnZUFyZWFcIiBpZ3hEcm9wIChvbkxlYXZlKT1cImRyYWdMZWF2ZSgpXCIgKGlneERyYWdFbnRlcik9XCJvbkRyYWdDYWdlRW50ZXIoKVwiIChpZ3hEcmFnTGVhdmUpPVwib25EcmFnQ2FnZUxlYXZlKClcIj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcHVibGljIGRyYWdMZWF2ZSgpe1xuICAgICAqICAgICBhbGVydChcIkEgZHJhZ2dhYmxlIGVsZW1lbnRlIGhhcyBsZWZ0IHRoZSBjaGlwIGFyZWEhXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25MZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8SWd4RHJvcExlYXZlRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqIEV2ZW50IHRyaWdnZXJlZCB3aGVuIGRyYWdnZWQgZWxlbWVudCBpcyBkcm9wcGVkIGluIHRoZSBhcmVhIG9mIHRoZSBlbGVtZW50LlxuICAgICAqIFNpbmNlIHRoZSBgaWd4RHJvcGAgaGFzIGRlZmF1bHQgbG9naWMgdGhhdCBhcHBlbmRzIHRoZSBkcm9wcGVkIGVsZW1lbnQgYXMgYSBjaGlsZCwgaXQgY2FuIGJlIGNhbmNlbGVkIGhlcmUuXG4gICAgICogVG8gY2FuY2VsIHRoZSBkZWZhdWx0IGxvZ2ljIHRoZSBgY2FuY2VsYCBwcm9wZXJ0eSBvZiB0aGUgZXZlbnQgbmVlZHMgdG8gYmUgc2V0IHRvIHRydWUuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXYgY2xhc3M9XCJjYWdlQXJlYVwiIGlneERyb3AgKG9uRHJvcCk9XCJkcmFnRHJvcCgpXCIgKGlneERyYWdFbnRlcik9XCJvbkRyYWdDYWdlRW50ZXIoKVwiIChpZ3hEcmFnTGVhdmUpPVwib25EcmFnQ2FnZUxlYXZlKClcIj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcHVibGljIGRyYWdEcm9wKCl7XG4gICAgICogICAgIGFsZXJ0KFwiQSBkcmFnZ2FibGUgZWxlbWVudGUgaGFzIGJlZW4gZHJvcHBlZCBpbiB0aGUgY2hpcCBhcmVhIVwiKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8SWd4RHJvcEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuZHJvcHBhYmxlJylcbiAgICBwdWJsaWMgZHJvcHBhYmxlID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRyYWdPdmVyJylcbiAgICBwdWJsaWMgZHJhZ292ZXIgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX3pvbmU6IE5nWm9uZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2lneERyYWdFbnRlcicpLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4gdGhpcy5vbkRyYWdFbnRlcihyZXMgYXMgQ3VzdG9tRXZlbnQ8SWd4RHJhZ0N1c3RvbUV2ZW50RGV0YWlscz4pKTtcblxuICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnaWd4RHJhZ0xlYXZlJykucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpLnN1YnNjcmliZSgocmVzKSA9PiB0aGlzLm9uRHJhZ0xlYXZlKHJlcykpO1xuICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnaWd4RHJhZ092ZXInKS5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSkuc3Vic2NyaWJlKChyZXMpID0+IHRoaXMub25EcmFnT3ZlcihyZXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveS5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25EcmFnT3ZlcihldmVudCkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uRHJhZ0VudGVyKGV2ZW50OiBDdXN0b21FdmVudDxJZ3hEcmFnQ3VzdG9tRXZlbnREZXRhaWxzPikge1xuICAgICAgICB0aGlzLmRyYWdvdmVyID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZWxlbWVudFBvc1ggPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgdGhpcy5nZXRXaW5kb3dTY3JvbGxMZWZ0KCk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRQb3NZID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy5nZXRXaW5kb3dTY3JvbGxUb3AoKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IGV2ZW50LmRldGFpbC5wYWdlWCAtIGVsZW1lbnRQb3NYO1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gZXZlbnQuZGV0YWlsLnBhZ2VZIC0gZWxlbWVudFBvc1k7XG4gICAgICAgIGNvbnN0IGV2ZW50QXJnczogSWd4RHJvcEVudGVyRXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQuZGV0YWlsLm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICBvd25lcjogdGhpcyxcbiAgICAgICAgICAgIGRyYWc6IGV2ZW50LmRldGFpbC5vd25lcixcbiAgICAgICAgICAgIGRyYWdEYXRhOiBldmVudC5kZXRhaWwub3duZXIuZGF0YSxcbiAgICAgICAgICAgIHN0YXJ0WDogZXZlbnQuZGV0YWlsLnN0YXJ0WCxcbiAgICAgICAgICAgIHN0YXJ0WTogZXZlbnQuZGV0YWlsLnN0YXJ0WSxcbiAgICAgICAgICAgIHBhZ2VYOiBldmVudC5kZXRhaWwucGFnZVgsXG4gICAgICAgICAgICBwYWdlWTogZXZlbnQuZGV0YWlsLnBhZ2VZLFxuICAgICAgICAgICAgb2Zmc2V0WDogb2Zmc2V0WCxcbiAgICAgICAgICAgIG9mZnNldFk6IG9mZnNldFlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkVudGVyLmVtaXQoZXZlbnRBcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvbkRyYWdMZWF2ZShldmVudCkge1xuICAgICAgICB0aGlzLmRyYWdvdmVyID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRQb3NYID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHRoaXMuZ2V0V2luZG93U2Nyb2xsTGVmdCgpO1xuICAgICAgICBjb25zdCBlbGVtZW50UG9zWSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuZ2V0V2luZG93U2Nyb2xsVG9wKCk7XG4gICAgICAgIGNvbnN0IG9mZnNldFggPSBldmVudC5kZXRhaWwucGFnZVggLSBlbGVtZW50UG9zWDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IGV2ZW50LmRldGFpbC5wYWdlWSAtIGVsZW1lbnRQb3NZO1xuICAgICAgICBjb25zdCBldmVudEFyZ3M6IElneERyb3BMZWF2ZUV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LmRldGFpbC5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgICAgb3duZXI6IHRoaXMsXG4gICAgICAgICAgICBkcmFnOiBldmVudC5kZXRhaWwub3duZXIsXG4gICAgICAgICAgICBkcmFnRGF0YTogZXZlbnQuZGV0YWlsLm93bmVyLmRhdGEsXG4gICAgICAgICAgICBzdGFydFg6IGV2ZW50LmRldGFpbC5zdGFydFgsXG4gICAgICAgICAgICBzdGFydFk6IGV2ZW50LmRldGFpbC5zdGFydFksXG4gICAgICAgICAgICBwYWdlWDogZXZlbnQuZGV0YWlsLnBhZ2VYLFxuICAgICAgICAgICAgcGFnZVk6IGV2ZW50LmRldGFpbC5wYWdlWSxcbiAgICAgICAgICAgIG9mZnNldFg6IG9mZnNldFgsXG4gICAgICAgICAgICBvZmZzZXRZOiBvZmZzZXRZXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25MZWF2ZS5lbWl0KGV2ZW50QXJncyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdpZ3hEcm9wJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25EcmFnRHJvcChldmVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50UG9zWCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB0aGlzLmdldFdpbmRvd1Njcm9sbExlZnQoKTtcbiAgICAgICAgY29uc3QgZWxlbWVudFBvc1kgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0aGlzLmdldFdpbmRvd1Njcm9sbFRvcCgpO1xuICAgICAgICBjb25zdCBvZmZzZXRYID0gZXZlbnQuZGV0YWlsLnBhZ2VYIC0gZWxlbWVudFBvc1g7XG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSBldmVudC5kZXRhaWwucGFnZVkgLSBlbGVtZW50UG9zWTtcbiAgICAgICAgY29uc3QgYXJnczogSWd4RHJvcEV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgIG93bmVyOiB0aGlzLFxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQuZGV0YWlsLm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICBkcmFnOiBldmVudC5kZXRhaWwub3duZXIsXG4gICAgICAgICAgICBkcmFnRGF0YTogZXZlbnQuZGV0YWlsLm93bmVyLmRhdGEsXG4gICAgICAgICAgICBvZmZzZXRYOiBvZmZzZXRYLFxuICAgICAgICAgICAgb2Zmc2V0WTogb2Zmc2V0WSxcbiAgICAgICAgICAgIGNhbmNlbDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkRyb3AuZW1pdChhcmdzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFhcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgLy8gVG8gZG8gZm9yIGdlbmVyaWMgc2NlbmFyaW9cbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKGV2ZW50LmRldGFpbC5vd25lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSwgZXZlbnQuZGV0YWlsLm93bmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgZXZlbnQuZGV0YWlsLm93bmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LmRldGFpbC5vd25lci5kcm9wRmluaXNoZWQoKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFdpbmRvd1Njcm9sbFRvcCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZID8gd2luZG93LnNjcm9sbFkgOiAod2luZG93LnBhZ2VZT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogMCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFdpbmRvd1Njcm9sbExlZnQoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWCA/IHdpbmRvdy5zY3JvbGxYIDogKHdpbmRvdy5wYWdlWE9mZnNldCA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IDApO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hEcmFnRGlyZWN0aXZlLCBJZ3hEcm9wRGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4RHJhZ0RpcmVjdGl2ZSwgSWd4RHJvcERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4RHJhZ0Ryb3BNb2R1bGUgeyB9XG4iXX0=