/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, NgModule, NgZone, Output, Renderer2, ChangeDetectorRef } from '@angular/core';
import { animationFrameScheduler, fromEvent, interval, Subject } from 'rxjs';
import { takeUntil, throttle } from 'rxjs/operators';
/** @enum {number} */
const RestrictDrag = {
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
export class IgxDragDirective {
    /**
     * @param {?} cdr
     * @param {?} element
     * @param {?} zone
     * @param {?} renderer
     */
    constructor(cdr, element, zone, renderer) {
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
    /**
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
    set visible(bVisible) {
        this._visibility = bVisible ? 'visible' : 'hidden';
        this.cdr.detectChanges();
    }
    /**
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
    get visible() {
        return this._visibility === 'visible';
    }
    /**
     * @hidden
     * @param {?} val
     * @return {?}
     */
    set left(val) {
        requestAnimationFrame(() => {
            if (this.dragGhost) {
                this.dragGhost.style.left = val + 'px';
            }
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    get left() {
        return parseInt(this.dragGhost.style.left, 10);
    }
    /**
     * @hidden
     * @param {?} val
     * @return {?}
     */
    set top(val) {
        requestAnimationFrame(() => {
            if (this.dragGhost) {
                this.dragGhost.style.top = val + 'px';
            }
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    get top() {
        return parseInt(this.dragGhost.style.top, 10);
    }
    /**
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
    get pointerEventsEnabled() {
        return typeof PointerEvent !== 'undefined';
    }
    /**
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
    get touchEventsEnabled() {
        return 'ontouchstart' in window;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        this.zone.runOutsideAngular(() => {
            if (this.pointerEventsEnabled) {
                fromEvent(this.element.nativeElement, 'pointerdown').pipe(takeUntil(this._destroy))
                    .subscribe((res) => this.onPointerDown(res));
                fromEvent(this.element.nativeElement, 'pointermove').pipe(throttle(() => interval(0, animationFrameScheduler)), takeUntil(this._destroy)).subscribe((res) => this.onPointerMove(res));
                fromEvent(this.element.nativeElement, 'pointerup').pipe(takeUntil(this._destroy))
                    .subscribe((res) => this.onPointerUp(res));
            }
            else if (this.touchEventsEnabled) {
                fromEvent(this.element.nativeElement, 'touchstart').pipe(takeUntil(this._destroy))
                    .subscribe((res) => this.onPointerDown(res));
                fromEvent(document.defaultView, 'touchmove').pipe(throttle(() => interval(0, animationFrameScheduler)), takeUntil(this._destroy)).subscribe((res) => this.onPointerMove(res));
                fromEvent(document.defaultView, 'touchend').pipe(takeUntil(this._destroy))
                    .subscribe((res) => this.onPointerUp(res));
            }
            else {
                // We don't have pointer events and touch events. Use then mouse events.
                fromEvent(this.element.nativeElement, 'mousedown').pipe(takeUntil(this._destroy))
                    .subscribe((res) => this.onPointerDown(res));
                fromEvent(document.defaultView, 'mousemove').pipe(throttle(() => interval(0, animationFrameScheduler)), takeUntil(this._destroy)).subscribe((res) => this.onPointerMove(res));
                fromEvent(document.defaultView, 'mouseup').pipe(takeUntil(this._destroy))
                    .subscribe((res) => this.onPointerUp(res));
            }
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next(true);
        this._destroy.complete();
        if (this.dragGhost && this._removeOnDestroy) {
            this.dragGhost.parentNode.removeChild(this.dragGhost);
            this.dragGhost = null;
        }
    }
    /**
     * @hidden
     * Method bound to the PointerDown event of the base element igxDrag is initialized.
     * @param {?} event PointerDown event captured
     * @return {?}
     */
    onPointerDown(event) {
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
        const marginTop = parseInt(document.defaultView.getComputedStyle(this.element.nativeElement)['margin-top'], 10);
        /** @type {?} */
        const marginLeft = parseInt(document.defaultView.getComputedStyle(this.element.nativeElement)['margin-left'], 10);
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
    }
    /**
     * @hidden
     * Perfmorm drag move logic when dragging and dispatching events if there is igxDrop under the pointer.
     * This method is bound at first at the base element.
     * If dragging starts and after the dragGhost is rendered the pointerId is reassigned to the dragGhost. Then this method is bound to it.
     * @param {?} event PointerMove event captured
     * @return {?}
     */
    onPointerMove(event) {
        if (this._clicked) {
            /** @type {?} */
            const dragStartArgs = {
                originalEvent: event,
                owner: this,
                cancel: false
            };
            /** @type {?} */
            let pageX;
            /** @type {?} */
            let pageY;
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
            const totalMovedX = pageX - this._startX;
            /** @type {?} */
            const totalMovedY = pageY - this._startY;
            if (!this._dragStarted &&
                (Math.abs(totalMovedX) > this.dragTolerance || Math.abs(totalMovedY) > this.dragTolerance)) {
                this.zone.run(() => {
                    this.dragStart.emit(dragStartArgs);
                });
                if (!dragStartArgs.cancel) {
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
    }
    /**
     * @hidden
     * Perform drag end logic when releasing the dragGhost and dispatching drop event if igxDrop is under the pointer.
     * This method is bound at first at the base element.
     * If dragging starts and after the dragGhost is rendered the pointerId is reassigned to the dragGhost. Then this method is bound to it.
     * @param {?} event PointerUp event captured
     * @return {?}
     */
    onPointerUp(event) {
        if (!this._clicked) {
            return;
        }
        /** @type {?} */
        const eventArgs = {
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
            this.zone.run(() => {
                this.dragEnd.emit(eventArgs);
            });
        }
        else {
            this.zone.run(() => {
                this.dragClicked.emit(eventArgs);
            });
        }
    }
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
    createDragGhost(event, node = null) {
        this.dragGhost = node ? node.cloneNode(true) : this.element.nativeElement.cloneNode(true);
        this.dragGhost.style.transitionDuration = '0.0s';
        this.dragGhost.style.position = 'absolute';
        /** @type {?} */
        const hostLeft = this.dragGhostHost ? this.dragGhostHost.getBoundingClientRect().left : 0;
        /** @type {?} */
        const hostTop = this.dragGhostHost ? this.dragGhostHost.getBoundingClientRect().top : 0;
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
            this.dragGhost.addEventListener('pointermove', (args) => {
                this.onPointerMove(args);
            });
            this.dragGhost.addEventListener('pointerup', (args) => {
                this.onPointerUp(args);
            });
        }
        if (this.animateOnRelease) {
            // Transition animation when the dragGhost is released and it returns to it's original position.
            this.dragGhost.addEventListener('transitionend', (args) => {
                this.onTransitionEnd(args);
            });
        }
        // Hide the base after the dragGhost is created, because otherwise the dragGhost will be not visible.
        if (this.hideBaseOnDrag) {
            this.visible = false;
        }
    }
    /**
     * @hidden
     * Dispatch custom igxDragEnter/igxDragLeave events based on current pointer position and if drop area is under.
     * @protected
     * @param {?} pageX
     * @param {?} pageY
     * @param {?} originalEvent
     * @return {?}
     */
    dispatchDragEvents(pageX, pageY, originalEvent) {
        /** @type {?} */
        let topDropArea;
        /** @type {?} */
        const eventArgs = {
            startX: this._startX,
            startY: this._startY,
            pageX: pageX,
            pageY: pageY,
            owner: this,
            originalEvent: originalEvent
        };
        /** @type {?} */
        const elementsFromPoint = this.getElementsAtPoint(pageX, pageY);
        for (let i = 0; i < elementsFromPoint.length; i++) {
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
    }
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
    dispatchDropEvent(pageX, pageY, originalEvent) {
        /** @type {?} */
        const eventArgs = {
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
    }
    /**
     * @hidden
     * Update relative positions
     * @return {?}
     */
    updateDragRelativePos() {
        if (!this.dragGhost) {
            return;
        }
        // Calculate the new dragGhost position to remain where the mouse is, so it doesn't jump
        /** @type {?} */
        const totalDraggedX = this.left - this._dragStartX;
        /** @type {?} */
        const totalDraggedY = this.top - this._dragStartY;
        /** @type {?} */
        const newPosX = this.element.nativeElement.getBoundingClientRect().left;
        /** @type {?} */
        const newPosY = this.element.nativeElement.getBoundingClientRect().top;
        /** @type {?} */
        const diffStartX = this._dragStartX - newPosX;
        /** @type {?} */
        const diffStartY = this._dragStartY - newPosY;
        this.top = newPosX + totalDraggedX - diffStartX;
        this.left = newPosY + totalDraggedY - diffStartY;
    }
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
    dropFinished() {
        if (this.animateOnRelease && this.dragGhost) {
            this.updateDragRelativePos();
            // Return the dragged element to the start. See onTransitionEnd next.
            // Take margins becuase getBoundingClientRect() doesn't include margins
            /** @type {?} */
            const marginTop = parseInt(document.defaultView.getComputedStyle(this.element.nativeElement)['margin-top'], 10);
            /** @type {?} */
            const marginLeft = parseInt(document.defaultView.getComputedStyle(this.element.nativeElement)['margin-left'], 10);
            /** @type {?} */
            const newPosX = this.element.nativeElement.getBoundingClientRect().left + this.getWindowScrollLeft();
            /** @type {?} */
            const newPosY = this.element.nativeElement.getBoundingClientRect().top + this.getWindowScrollTop();
            this.dragGhost.style.transitionDuration = this.defaultReturnDuration;
            this.left = newPosX - marginLeft;
            this.top = newPosY - marginTop;
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onTransitionEnd(event) {
        if (this._dragStarted && !this._clicked) {
            if (this.hideBaseOnDrag) {
                this.visible = true;
            }
            this.dragGhost.parentNode.removeChild(this.dragGhost);
            this.dragGhost = null;
            this.element.nativeElement.style.transitionDuration = '0.0s';
            this._dragStarted = false;
            this.zone.run(() => {
                this.returnMoveEnd.emit({
                    originalEvent: event,
                    owner: this
                });
            });
        }
    }
    /**
     * @hidden
     * @protected
     * @param {?} pageX
     * @param {?} pageY
     * @return {?}
     */
    getElementsAtPoint(pageX, pageY) {
        // correct the coordinates with the current scroll position, because
        // document.elementsFromPoint conider position within the current viewport
        // window.pageXOffset == window.scrollX; // always true
        // using window.pageXOffset for IE9 compatibility
        /** @type {?} */
        const viewPortX = pageX - window.pageXOffset;
        /** @type {?} */
        const viewPortY = pageY - window.pageYOffset;
        if (document['msElementsFromPoint']) {
            // Edge and IE special snowflakes
            return document['msElementsFromPoint'](viewPortX, viewPortY);
        }
        else {
            // Other browsers like Chrome, Firefox, Opera
            return document.elementsFromPoint(viewPortX, viewPortY);
        }
    }
    /**
     * @hidden
     * @protected
     * @param {?} target
     * @param {?} eventName
     * @param {?} eventArgs
     * @return {?}
     */
    dispatchEvent(target, eventName, eventArgs) {
        // This way is IE11 compatible.
        /** @type {?} */
        const dragLeaveEvent = document.createEvent('CustomEvent');
        dragLeaveEvent.initCustomEvent(eventName, false, false, eventArgs);
        target.dispatchEvent(dragLeaveEvent);
        // Othersie can be used `target.dispatchEvent(new CustomEvent(eventName, eventArgs));`
    }
    /**
     * @protected
     * @return {?}
     */
    getWindowScrollTop() {
        return window.scrollY ? window.scrollY : (window.pageYOffset ? window.pageYOffset : 0);
    }
    /**
     * @protected
     * @return {?}
     */
    getWindowScrollLeft() {
        return window.scrollX ? window.scrollX : (window.pageXOffset ? window.pageXOffset : 0);
    }
}
IgxDragDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxDrag]'
            },] }
];
/** @nocollapse */
IgxDragDirective.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone },
    { type: Renderer2 }
];
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
export class IgxDropDirective {
    /**
     * @param {?} element
     * @param {?} _renderer
     * @param {?} _zone
     */
    constructor(element, _renderer, _zone) {
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
    ngOnInit() {
        this._zone.runOutsideAngular(() => {
            fromEvent(this.element.nativeElement, 'igxDragEnter').pipe(takeUntil(this._destroy))
                .subscribe((res) => this.onDragEnter((/** @type {?} */ (res))));
            fromEvent(this.element.nativeElement, 'igxDragLeave').pipe(takeUntil(this._destroy)).subscribe((res) => this.onDragLeave(res));
            fromEvent(this.element.nativeElement, 'igxDragOver').pipe(takeUntil(this._destroy)).subscribe((res) => this.onDragOver(res));
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next(true);
        this._destroy.complete();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) { }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onDragEnter(event) {
        this.dragover = true;
        /** @type {?} */
        const elementPosX = this.element.nativeElement.getBoundingClientRect().left + this.getWindowScrollLeft();
        /** @type {?} */
        const elementPosY = this.element.nativeElement.getBoundingClientRect().top + this.getWindowScrollTop();
        /** @type {?} */
        const offsetX = event.detail.pageX - elementPosX;
        /** @type {?} */
        const offsetY = event.detail.pageY - elementPosY;
        /** @type {?} */
        const eventArgs = {
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
        this._zone.run(() => {
            this.onEnter.emit(eventArgs);
        });
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        this.dragover = false;
        /** @type {?} */
        const elementPosX = this.element.nativeElement.getBoundingClientRect().left + this.getWindowScrollLeft();
        /** @type {?} */
        const elementPosY = this.element.nativeElement.getBoundingClientRect().top + this.getWindowScrollTop();
        /** @type {?} */
        const offsetX = event.detail.pageX - elementPosX;
        /** @type {?} */
        const offsetY = event.detail.pageY - elementPosY;
        /** @type {?} */
        const eventArgs = {
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
        this._zone.run(() => {
            this.onLeave.emit(eventArgs);
        });
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onDragDrop(event) {
        /** @type {?} */
        const elementPosX = this.element.nativeElement.getBoundingClientRect().left + this.getWindowScrollLeft();
        /** @type {?} */
        const elementPosY = this.element.nativeElement.getBoundingClientRect().top + this.getWindowScrollTop();
        /** @type {?} */
        const offsetX = event.detail.pageX - elementPosX;
        /** @type {?} */
        const offsetY = event.detail.pageY - elementPosY;
        /** @type {?} */
        const args = {
            owner: this,
            originalEvent: event.detail.originalEvent,
            drag: event.detail.owner,
            dragData: event.detail.owner.data,
            offsetX: offsetX,
            offsetY: offsetY,
            cancel: false
        };
        this._zone.run(() => {
            this.onDrop.emit(args);
        });
        if (!args.cancel) {
            // To do for generic scenario
            this._renderer.removeChild(event.detail.owner.element.nativeElement.parentNode, event.detail.owner.element.nativeElement);
            this._renderer.appendChild(this.element.nativeElement, event.detail.owner.element.nativeElement);
            setTimeout(() => {
                event.detail.owner.dropFinished();
            }, 0);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    getWindowScrollTop() {
        return window.scrollY ? window.scrollY : (window.pageYOffset ? window.pageYOffset : 0);
    }
    /**
     * @protected
     * @return {?}
     */
    getWindowScrollLeft() {
        return window.scrollX ? window.scrollX : (window.pageXOffset ? window.pageXOffset : 0);
    }
}
IgxDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxDrop]'
            },] }
];
/** @nocollapse */
IgxDropDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone }
];
IgxDropDirective.propDecorators = {
    data: [{ type: Input, args: ['igxDrop',] }],
    onEnter: [{ type: Output }],
    onLeave: [{ type: Output }],
    onDrop: [{ type: Output }],
    droppable: [{ type: HostBinding, args: ['attr.droppable',] }],
    dragover: [{ type: HostBinding, args: ['class.dragOver',] }],
    onDragDrop: [{ type: HostListener, args: ['igxDrop', ['$event'],] }]
};
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
export class IgxDragDropModule {
}
IgxDragDropModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxDragDirective, IgxDropDirective],
                exports: [IgxDragDirective, IgxDropDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2Ryb3AuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2RyYWdkcm9wL2RyYWdkcm9wLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztJQUdqRCxhQUFVO0lBQ1YsZUFBWTtJQUNaLE9BQUk7Ozs7Ozs7OztBQUdSLCtDQU9DOzs7SUFORywyQ0FBZTs7SUFDZiwyQ0FBZTs7SUFDZiwwQ0FBYzs7SUFDZCwwQ0FBYzs7SUFDZCwwQ0FBd0I7O0lBQ3hCLGtEQUFtQjs7Ozs7QUFHdkIsMkNBb0NDOzs7Ozs7O0lBL0JHLDhDQUFtQjs7Ozs7SUFFbkIsc0NBQXdCOzs7OztJQUV4QixxQ0FBdUI7Ozs7O0lBRXZCLHlDQUFjOzs7OztJQUVkLHVDQUFlOzs7OztJQUVmLHVDQUFlOzs7Ozs7SUFLZixzQ0FBYzs7Ozs7O0lBS2Qsc0NBQWM7Ozs7OztJQUtkLHdDQUFnQjs7Ozs7O0lBS2hCLHdDQUFnQjs7Ozs7QUFHcEIsMkNBb0NDOzs7Ozs7O0lBL0JHLDhDQUFtQjs7Ozs7SUFFbkIsc0NBQXdCOzs7OztJQUV4QixxQ0FBdUI7Ozs7O0lBRXZCLHlDQUFjOzs7OztJQUVkLHVDQUFlOzs7OztJQUVmLHVDQUFlOzs7Ozs7SUFLZixzQ0FBYzs7Ozs7O0lBS2Qsc0NBQWM7Ozs7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USxDQUFDOzs7Ozs7Ozs7O0lBOUluQyxnQ0FDaUI7Ozs7Ozs7Ozs7Ozs7O0lBYWpCLG1DQUMyRDs7Ozs7Ozs7Ozs7Ozs7SUFhM0QsbUNBQzJEOzs7Ozs7Ozs7Ozs7Ozs7O0lBZTNELGtDQUNxRDs7Ozs7SUFLckQscUNBQ3dCOzs7OztJQUt4QixvQ0FDd0I7Ozs7OztJQUt4QixvQ0FBNEM7O0lBRWhDLG1DQUEwQjs7Ozs7SUFBRSxxQ0FBNEI7Ozs7O0lBQUUsaUNBQXFCOzs7OztBQTZIL0YsTUFBTSxPQUFPLGlCQUFpQjs7O1lBSjdCLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDbEQsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgTmdab25lLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFJlbmRlcmVyMixcbiAgICBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLCBmcm9tRXZlbnQsIGludGVydmFsLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIHRocm90dGxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgZW51bSBSZXN0cmljdERyYWcge1xuICAgIFZFUlRJQ0FMTFksXG4gICAgSE9SSVpPTlRBTExZLFxuICAgIE5PTkVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJZ3hEcmFnQ3VzdG9tRXZlbnREZXRhaWxzIHtcbiAgICBzdGFydFg6IG51bWJlcjtcbiAgICBzdGFydFk6IG51bWJlcjtcbiAgICBwYWdlWDogbnVtYmVyO1xuICAgIHBhZ2VZOiBudW1iZXI7XG4gICAgb3duZXI6IElneERyYWdEaXJlY3RpdmU7XG4gICAgb3JpZ2luYWxFdmVudDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElneERyb3BFbnRlckV2ZW50QXJncyB7XG4gICAgICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgZXZlbnQgdGhhdCBjYXVzZWQgdGhlIGRyYWdnYWJsZSBlbGVtZW50IHRvIGVudGVyIHRoZSBpZ3hEcm9wIGVsZW1lbnQuXG4gICAgICogQ2FuIGJlIFBvaW50ZXJFdmVudCwgVG91Y2hFdmVudCBvciBNb3VzZUV2ZW50LlxuICAgICAqL1xuICAgIG9yaWdpbmFsRXZlbnQ6IGFueTtcbiAgICAvKiogVGhlIG93bmVyIGlneERyb3AgZGlyZWN0aXZlIHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnQuICovXG4gICAgb3duZXI6IElneERyb3BEaXJlY3RpdmU7XG4gICAgLyoqIFRoZSBpZ3hEcmFnIGRpcmVjdGl2ZSBpbnN0YW5jZWQgb24gYW4gZWxlbWVudCB0aGF0IGVudGVyZWQgdGhlIGFyZWEgb2YgdGhlIGlneERyb3AgZWxlbWVudCAqL1xuICAgIGRyYWc6IElneERyYWdEaXJlY3RpdmU7XG4gICAgLyoqIFRoZSBkYXRhIGNvbnRhaW5lZCBmb3IgdGhlIGRyYWdnYWJsZSBlbGVtZW50IGluIGlneERyYWcgZGlyZWN0aXZlLiAqL1xuICAgIGRyYWdEYXRhOiBhbnk7XG4gICAgLyoqIFRoZSBpbml0aWFsIHBvc2l0aW9uIG9mIHRoZSBwb2ludGVyIG9uIFggYXhpcyB3aGVuIHRoZSBkcmFnZ2VkIGVsZW1lbnQgYmVnYW4gbW92aW5nICovXG4gICAgc3RhcnRYOiBudW1iZXI7XG4gICAgLyoqIFRoZSBpbml0aWFsIHBvc2l0aW9uIG9mIHRoZSBwb2ludGVyIG9uIFkgYXhpcyB3aGVuIHRoZSBkcmFnZ2VkIGVsZW1lbnQgYmVnYW4gbW92aW5nICovXG4gICAgc3RhcnRZOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXIgb24gWCBheGlzIHdoZW4gdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQuXG4gICAgICogTm90ZTogVGhlIGJyb3dzZXIgbWlnaHQgdHJpZ2dlciB0aGUgZXZlbnQgd2l0aCBzb21lIGRlbGF5IGFuZCBwb2ludGVyIHdvdWxkIGJlIGFscmVhZHkgaW5zaWRlIHRoZSBpZ3hEcm9wLlxuICAgICAqL1xuICAgIHBhZ2VYOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXIgb24gWSBheGlzIHdoZW4gdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQuXG4gICAgICogTm90ZTogVGhlIGJyb3dzZXIgbWlnaHQgdHJpZ2dlciB0aGUgZXZlbnQgd2l0aCBzb21lIGRlbGF5IGFuZCBwb2ludGVyIHdvdWxkIGJlIGFscmVhZHkgaW5zaWRlIHRoZSBpZ3hEcm9wLlxuICAgICAqL1xuICAgIHBhZ2VZOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXIgb24gWCBheGlzIHJlbGF0aXZlIHRvIHRoZSBjb250YWluZXIgdGhhdCBpbml0aWFsaXplcyB0aGUgaWd4RHJvcC5cbiAgICAgKiBOb3RlOiBUaGUgYnJvd3NlciBtaWdodCB0cmlnZ2VyIHRoZSBldmVudCB3aXRoIHNvbWUgZGVsYXkgYW5kIHBvaW50ZXIgd291bGQgYmUgYWxyZWFkeSBpbnNpZGUgdGhlIGlneERyb3AuXG4gICAgICovXG4gICAgb2Zmc2V0WDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBwb2ludGVyIG9uIFkgYXhpcyByZWxhdGl2ZSB0byB0aGUgY29udGFpbmVyIHRoYXQgaW5pdGlhbGl6ZXMgdGhlIGlneERyb3AuXG4gICAgICogTm90ZTogVGhlIGJyb3dzZXIgbWlnaHQgdHJpZ2dlciB0aGUgZXZlbnQgd2l0aCBzb21lIGRlbGF5IGFuZCBwb2ludGVyIHdvdWxkIGJlIGFscmVhZHkgaW5zaWRlIHRoZSBpZ3hEcm9wLlxuICAgICAqL1xuICAgIG9mZnNldFk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJZ3hEcm9wTGVhdmVFdmVudEFyZ3Mge1xuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgZXZlbnQgdGhhdCBjYXVzZWQgdGhlIGRyYWdnYWJsZSBlbGVtZW50IHRvIGVudGVyIHRoZSBpZ3hEcm9wIGVsZW1lbnQuXG4gICAgICogQ2FuIGJlIFBvaW50ZXJFdmVudCwgVG91Y2hFdmVudCBvciBNb3VzZUV2ZW50LlxuICAgICAqL1xuICAgIG9yaWdpbmFsRXZlbnQ6IGFueTtcbiAgICAvKiogVGhlIG93bmVyIGlneERyb3AgZGlyZWN0aXZlIHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnQuICovXG4gICAgb3duZXI6IElneERyb3BEaXJlY3RpdmU7XG4gICAgLyoqIFRoZSBpZ3hEcmFnIGRpcmVjdGl2ZSBpbnN0YW5jZWQgb24gYW4gZWxlbWVudCB0aGF0IGVudGVyZWQgdGhlIGFyZWEgb2YgdGhlIGlneERyb3AgZWxlbWVudCAqL1xuICAgIGRyYWc6IElneERyYWdEaXJlY3RpdmU7XG4gICAgLyoqIFRoZSBkYXRhIGNvbnRhaW5lZCBmb3IgdGhlIGRyYWdnYWJsZSBlbGVtZW50IGluIGlneERyYWcgZGlyZWN0aXZlLiAqL1xuICAgIGRyYWdEYXRhOiBhbnk7XG4gICAgLyoqIFRoZSBpbml0aWFsIHBvc2l0aW9uIG9mIHRoZSBwb2ludGVyIG9uIFggYXhpcyB3aGVuIHRoZSBkcmFnZ2VkIGVsZW1lbnQgYmVnYW4gbW92aW5nICovXG4gICAgc3RhcnRYOiBudW1iZXI7XG4gICAgLyoqIFRoZSBpbml0aWFsIHBvc2l0aW9uIG9mIHRoZSBwb2ludGVyIG9uIFkgYXhpcyB3aGVuIHRoZSBkcmFnZ2VkIGVsZW1lbnQgYmVnYW4gbW92aW5nICovXG4gICAgc3RhcnRZOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXIgb24gWCBheGlzIHdoZW4gdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQuXG4gICAgICogTm90ZTogVGhlIGJyb3dzZXIgbWlnaHQgdHJpZ2dlciB0aGUgZXZlbnQgd2l0aCBzb21lIGRlbGF5IGFuZCBwb2ludGVyIHdvdWxkIGJlIGFscmVhZHkgaW5zaWRlIHRoZSBpZ3hEcm9wLlxuICAgICAqL1xuICAgIHBhZ2VYOiBudW1iZXI7XG4gICAgICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBwb2ludGVyIG9uIFkgYXhpcyB3aGVuIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkLlxuICAgICAqIE5vdGU6IFRoZSBicm93c2VyIG1pZ2h0IHRyaWdnZXIgdGhlIGV2ZW50IHdpdGggc29tZSBkZWxheSBhbmQgcG9pbnRlciB3b3VsZCBiZSBhbHJlYWR5IGluc2lkZSB0aGUgaWd4RHJvcC5cbiAgICAgKi9cbiAgICBwYWdlWTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBwb2ludGVyIG9uIFggYXhpcyByZWxhdGl2ZSB0byB0aGUgY29udGFpbmVyIHRoYXQgaW5pdGlhbGl6ZXMgdGhlIGlneERyb3AuXG4gICAgICogTm90ZTogVGhlIGJyb3dzZXIgbWlnaHQgdHJpZ2dlciB0aGUgZXZlbnQgd2l0aCBzb21lIGRlbGF5IGFuZCBwb2ludGVyIHdvdWxkIGJlIGFscmVhZHkgaW5zaWRlIHRoZSBpZ3hEcm9wLlxuICAgICAqL1xuICAgIG9mZnNldFg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgcG9pbnRlciBvbiBZIGF4aXMgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5lciB0aGF0IGluaXRpYWxpemVzIHRoZSBpZ3hEcm9wLlxuICAgICAqIE5vdGU6IFRoZSBicm93c2VyIG1pZ2h0IHRyaWdnZXIgdGhlIGV2ZW50IHdpdGggc29tZSBkZWxheSBhbmQgcG9pbnRlciB3b3VsZCBiZSBhbHJlYWR5IGluc2lkZSB0aGUgaWd4RHJvcC5cbiAgICAgKi9cbiAgICBvZmZzZXRZOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWd4RHJvcEV2ZW50QXJncyB7XG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBldmVudCB0aGF0IGNhdXNlZCB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgdG8gZW50ZXIgdGhlIGlneERyb3AgZWxlbWVudC5cbiAgICAgKiBDYW4gYmUgUG9pbnRlckV2ZW50LCBUb3VjaEV2ZW50IG9yIE1vdXNlRXZlbnQuXG4gICAgICovXG4gICAgb3JpZ2luYWxFdmVudDogYW55O1xuICAgIC8qKiBUaGUgb3duZXIgaWd4RHJvcCBkaXJlY3RpdmUgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudC4gKi9cbiAgICBvd25lcjogSWd4RHJvcERpcmVjdGl2ZTtcbiAgICAvKiogVGhlIGlneERyYWcgZGlyZWN0aXZlIGluc3RhbmNlZCBvbiBhbiBlbGVtZW50IHRoYXQgZW50ZXJlZCB0aGUgYXJlYSBvZiB0aGUgaWd4RHJvcCBlbGVtZW50ICovXG4gICAgZHJhZzogSWd4RHJhZ0RpcmVjdGl2ZTtcbiAgICAvKiogVGhlIGRhdGEgY29udGFpbmVkIGZvciB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgaW4gaWd4RHJhZyBkaXJlY3RpdmUuICovXG4gICAgZHJhZ0RhdGE6IGFueTtcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgcG9pbnRlciBvbiBYIGF4aXMgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5lciB0aGF0IGluaXRpYWxpemVzIHRoZSBpZ3hEcm9wLlxuICAgICAqIE5vdGU6IFRoZSBicm93c2VyIG1pZ2h0IHRyaWdnZXIgdGhlIGV2ZW50IHdpdGggc29tZSBkZWxheSBhbmQgcG9pbnRlciB3b3VsZCBiZSBhbHJlYWR5IGluc2lkZSB0aGUgaWd4RHJvcC5cbiAgICAgKi9cbiAgICBvZmZzZXRYOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXIgb24gWSBheGlzIHJlbGF0aXZlIHRvIHRoZSBjb250YWluZXIgdGhhdCBpbml0aWFsaXplcyB0aGUgaWd4RHJvcC5cbiAgICAgKiBOb3RlOiBUaGUgYnJvd3NlciBtaWdodCB0cmlnZ2VyIHRoZSBldmVudCB3aXRoIHNvbWUgZGVsYXkgYW5kIHBvaW50ZXIgd291bGQgYmUgYWxyZWFkeSBpbnNpZGUgdGhlIGlneERyb3AuXG4gICAgICovXG4gICAgb2Zmc2V0WTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGRlZmF1bHQgZHJvcCBiZWhhdmlvciBvZiB0aGUgaWd4RHJvcCBkaXJlY3RpdmUgc2hvdWxkIGJlIGNhbmNlbGVkLlxuICAgICAqIE5vdGU6IElmIHlvdSBpbXBsZW1lbnQgY3VzdG9tIGJlaGF2aW9yIGFuZCB5b3UgdXNlIGBhbmltYXRlT25SZWxlYXNlYCBmb3IgdGhlIGlneERyYWcgbWFrZSBzdXJlIHRvIGNhbGwgJ2V2ZW50LmRyYWcuZHJvcEZpbmlzaGVkKCk7J1xuICAgICAqIHRvIG5vdGlmeSB0aGUgaWd4RHJhZyBkaXJlY3RpdmUgdGhhdCBpdCBoYXMgYmVlbiBkcm9wcGVkIHNvIGl0IGFuaW1hdGVzIHByb3Blcmx5LlxuICAgICAqL1xuICAgIGNhbmNlbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ0Jhc2VFdmVudEFyZ3Mge1xuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgZXZlbnQgdGhhdCBjYXVzZWQgdGhlIGludGVyYWN0aW9uIHdpdGggdGhlIGVsZW1lbnQuXG4gICAgICogQ2FuIGJlIFBvaW50ZXJFdmVudCwgVG91Y2hFdmVudCBvciBNb3VzZUV2ZW50LlxuICAgICAqL1xuICAgIG9yaWdpbmFsRXZlbnQ6IFBvaW50ZXJFdmVudCB8IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50O1xuICAgIC8qKiBUaGUgb3duZXIgaWd4RHJhZyBkaXJlY3RpdmUgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudC4gKi9cbiAgICBvd25lcjogSWd4RHJhZ0RpcmVjdGl2ZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdTdGFydEV2ZW50QXJncyBleHRlbmRzIElEcmFnQmFzZUV2ZW50QXJncyB7XG4gICAgLyoqIFNldCBpZiB0aGUgdGhlIGRyYWdnaW5nIHNob3VsZCBiZSBjYW5jZWxlZC4gKi9cbiAgICBjYW5jZWw6IGJvb2xlYW47XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneERyYWddJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hEcmFnRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgLyoqXG4gICAgICogLSBTYXZlIGRhdGEgaW5zaWRlIHRoZSBgaWd4RHJhZ2AgZGlyZWN0aXZlLiBUaGlzIGNhbiBiZSBzZXQgd2hlbiBpbnN0YW5jaW5nIGBpZ3hEcmFnYCBvbiBhbiBlbGVtZW50LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2IFtpZ3hEcmFnXT1cInsgc291cmNlOiBteUVsZW1lbnQgfVwiPjwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4RHJhZycpXG4gICAgcHVibGljIGRhdGE6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGluZGljYXRlcyB3aGVuIHRoZSBkcmFnIHNob3VsZCBzdGFydFxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIGRyYWcgc3RhcnRzIGFmdGVyIHRoZSBkcmFnZ2FibGUgZWxlbWVudCBpcyBtb3ZlZCBieSA1cHhcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdiBpZ3hEcmFnIFtkcmFnVG9sZXJhbmNlXT1cIjEwMFwiPlxuICAgICAqICAgICAgICAgPHNwYW4+RHJhZyBNZSE8L3NwYW4+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZHJhZ1RvbGVyYW5jZSA9IDU7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgY3VzdG9tIGNsYXNzIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgYGRyYWdHaG9zdGAgZWxlbWVudC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdiBpZ3hEcmFnIFtnaG9zdEltYWdlQ2xhc3NdPVwiJ2RyYWdHaG9zdCdcIj5cbiAgICAgKiAgICAgICAgIDxzcGFuPkRyYWcgTWUhPC9zcGFuPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdob3N0SW1hZ2VDbGFzcyA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgaGlkZXMgdGhlIGRyYWdnYWJsZSBlbGVtZW50LlxuICAgICAqIEJ5IGRlZmF1bHQgaXQncyBzZXQgdG8gZmFsc2UuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXYgaWd4RHJhZyBbZHJhZ1RvbGVyYW5jZV09XCIxMDBcIiBbaGlkZUJhc2VPbkRyYWddPVwiJ3RydWUnXCI+XG4gICAgICogICAgICAgICA8c3Bhbj5EcmFnIE1lITwvc3Bhbj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoaWRlQmFzZU9uRHJhZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgZW5hYmxlcy9kaXNhYmxlcyB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgYW5pbWF0aW9uXG4gICAgICogd2hlbiB0aGUgZWxlbWVudCBpcyByZWxlYXNlZC5cbiAgICAgKiBCeSBkZWZhdWx0IGl0J3Mgc2V0IHRvIGZhbHNlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2IGlneERyYWcgW2FuaW1hdGVPblJlbGVhc2VdPVwiJ3RydWUnXCI+XG4gICAgICogICAgICAgICA8c3Bhbj5EcmFnIE1lITwvc3Bhbj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBhbmltYXRlT25SZWxlYXNlID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHRoZSBlbGVtZW50IHRvIHdoaWNoIHRoZSBkcmFnZ2VkIGVsZW1lbnQgd2lsbCBiZSBhcHBlbmRlZC5cbiAgICAgKiBCeSBkZWZhdWx0IGl0J3Mgc2V0IHRvIG51bGwgYW5kIHRoZSBkcmFnZ2VkIGVsZW1lbnQgaXMgYXBwZW5kZWQgdG8gdGhlIGJvZHkuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXYgI2hvc3REaXY+PC9kaXY+XG4gICAgICogPGRpdiBpZ3hEcmFnIFtkcmFnR2hvc3RIb3N0XT1cImhvc3REaXZcIj5cbiAgICAgKiAgICAgICAgIDxzcGFuPkRyYWcgTWUhPC9zcGFuPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRyYWdHaG9zdEhvc3QgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgdHJpZ2dlcmVkIHdoZW4gdGhlIGRyYWdnYWJsZSBlbGVtZW50IGRyYWcgc3RhcnRzLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2IGlneERyYWcgW2FuaW1hdGVPblJlbGVhc2VdPVwiJ3RydWUnXCIgKGRyYWdTdGFydCk9XCJvbkRyYWdTdGFydCgpXCI+XG4gICAgICogICAgICAgICA8c3Bhbj5EcmFnIE1lITwvc3Bhbj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcHVibGljIG9uRHJhZ1N0YXJ0KCl7XG4gICAgICogICAgICBhbGVydChcIlRoZSBkcmFnIGhhcyBzdGFyZWQhXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxJRHJhZ1N0YXJ0RXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgdHJpZ2dlcmVkIHdoZW4gdGhlIGRyYWdnYWJsZSBlbGVtZW50IGlzIHJlbGVhc2VkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2IGlneERyYWcgW2FuaW1hdGVPblJlbGVhc2VdPVwiJ3RydWUnXCIgKGRyYWdFbmQpPVwib25EcmFnRW5kKClcIj5cbiAgICAgKiAgICAgICAgIDxzcGFuPkRyYWcgTWUhPC9zcGFuPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBwdWJsaWMgb25EcmFnRW5kKCl7XG4gICAgICogICAgICBhbGVydChcIlRoZSBkcmFnIGhhcyBlbmRlZCFcIik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxJRHJhZ0Jhc2VFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCB0cmlnZ2VyZWQgYWZ0ZXIgdGhlIGRyYWdnYWJsZSBlbGVtZW50IGlzIHJlbGVhc2VkIGFuZCBhZnRlciBpdHMgYW5pbWF0aW9uIGhhcyBmaW5pc2hlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdiBpZ3hEcmFnIFthbmltYXRlT25SZWxlYXNlXT1cIid0cnVlJ1wiIChyZXR1cm5Nb3ZlRW5kKT1cIm9uTW92ZUVuZCgpXCI+XG4gICAgICogICAgICAgICA8c3Bhbj5EcmFnIE1lITwvc3Bhbj5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcHVibGljIG9uTW92ZUVuZCgpe1xuICAgICAqICAgICAgYWxlcnQoXCJUaGUgbW92ZSBoYXMgZW5kZWQhXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgcmV0dXJuTW92ZUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8SURyYWdCYXNlRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgdHJpZ2dlcmVkIHdoZW4gdGhlIGRyYWdnYWJsZSBlbGVtZW50IGlzIGNsaWNrZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXYgaWd4RHJhZyBbYW5pbWF0ZU9uUmVsZWFzZV09XCIndHJ1ZSdcIiAoZHJhZ0NsaWNrZWQpPVwiZHJhZ0NsaWNrZWQoKVwiPlxuICAgICAqICAgICAgICAgPHNwYW4+RHJhZyBNZSE8L3NwYW4+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHB1YmxpYyBkcmFnQ2xpY2tlZCgpe1xuICAgICAqICAgICAgYWxlcnQoXCJUaGUgZWxlbWVudGVkIGhhcyBiZWVuIGNsaWNrZWQhXCIpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgZHJhZ0NsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElEcmFnQmFzZUV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRvdWNoQWN0aW9uJylcbiAgICBwdWJsaWMgdG91Y2ggPSAnbm9uZSc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS50cmFuc2l0aW9uUHJvcGVydHknKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uUHJvcGVydHkgPSAndG9wLCBsZWZ0JztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLnZpc2liaWxpdHknKVxuICAgIHB1YmxpYyBfdmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGRyYWdnYWJsZSBlbGVtZW50LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKFwibXlEcmFnXCIgLHtyZWFkOiBJZ3hEcmFnRGlyZWN0aXZlfSlcbiAgICAgKiBwdWJsaWMgbXlEcmFnOiBJZ3hEcmFnRGlyZWN0aXZlO1xuICAgICAqIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgICB0aGlzLm15RHJhZy52aXNpYmxlID0gZmFsc2U7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgdmlzaWJsZShiVmlzaWJsZSkge1xuICAgICAgICB0aGlzLl92aXNpYmlsaXR5ID0gYlZpc2libGUgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZpc2liaWxpdHkgc3RhdGUgb2YgdGhlIGRyYWdnYWJsZSBlbGVtZW50LlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBAVmlld0NoaWxkKFwibXlEcmFnXCIgLHtyZWFkOiBJZ3hEcmFnRGlyZWN0aXZlfSlcbiAgICAgKiBwdWJsaWMgbXlEcmFnOiBJZ3hEcmFnRGlyZWN0aXZlO1xuICAgICAqIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgICBsZXQgZHJhZ1Zpc2liaWx0eSA9IHRoaXMubXlEcmFnLnZpc2libGU7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdmlzaWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Zpc2liaWxpdHkgPT09ICd2aXNpYmxlJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHNldCBsZWZ0KHZhbDogbnVtYmVyKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnR2hvc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdHaG9zdC5zdHlsZS5sZWZ0ID0gdmFsICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgbGVmdCgpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZHJhZ0dob3N0LnN0eWxlLmxlZnQsIDEwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHNldCB0b3AodmFsOiBudW1iZXIpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdHaG9zdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0dob3N0LnN0eWxlLnRvcCA9IHZhbCArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHRvcCgpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuZHJhZ0dob3N0LnN0eWxlLnRvcCwgMTApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgcG9pbnRlciBldmVudHMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIEBWaWV3Q2hpbGQoXCJteURyYWdcIiAse3JlYWQ6IElneERyYWdEaXJlY3RpdmV9KVxuICAgICAqIHB1YmxpYyBteURyYWc6IElneERyYWdEaXJlY3RpdmU7XG4gICAgICogbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgIGxldCBwb2ludGVyRXZlbnRzID0gdGhpcy5teURyYWcucG9pbnRlckV2ZW50c0VuYWJsZWQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcG9pbnRlckV2ZW50c0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgUG9pbnRlckV2ZW50ICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRvdWNoIGV2ZW50cy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZChcIm15RHJhZ1wiICx7cmVhZDogSWd4RHJhZ0RpcmVjdGl2ZX0pXG4gICAgICogcHVibGljIG15RHJhZzogSWd4RHJhZ0RpcmVjdGl2ZTtcbiAgICAgKiBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICAgbGV0IHRvdWNoRXZlbnRzID0gdGhpcy5teURyYWcucG9pbnRlckV2ZW50c0VuYWJsZWQ7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdG91Y2hFdmVudHNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVmYXVsdFJldHVybkR1cmF0aW9uID0gJzAuNXMnO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfc3RhcnRYID0gMDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9zdGFydFkgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBkcmFnR2hvc3Q7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfZHJhZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9kcmFnT2Zmc2V0WDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9kcmFnT2Zmc2V0WTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9kcmFnU3RhcnRYO1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2RyYWdTdGFydFk7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfcG9pbnRlckRvd25JZCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9jbGlja2VkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfbGFzdERyb3BBcmVhID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfcmVtb3ZlT25EZXN0cm95ID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIHpvbmU6IE5nWm9uZSwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludGVyRXZlbnRzRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3BvaW50ZXJkb3duJykucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB0aGlzLm9uUG9pbnRlckRvd24ocmVzKSk7XG5cbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdwb2ludGVybW92ZScpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIHRocm90dGxlKCgpID0+IGludGVydmFsKDAsIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKSksXG4gICAgICAgICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KVxuICAgICAgICAgICAgICAgICkuc3Vic2NyaWJlKChyZXMpID0+IHRoaXMub25Qb2ludGVyTW92ZShyZXMpKTtcblxuICAgICAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3BvaW50ZXJ1cCcpLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHRoaXMub25Qb2ludGVyVXAocmVzKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG91Y2hFdmVudHNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndG91Y2hzdGFydCcpLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4gdGhpcy5vblBvaW50ZXJEb3duKHJlcykpO1xuXG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LmRlZmF1bHRWaWV3LCAndG91Y2htb3ZlJykucGlwZShcbiAgICAgICAgICAgICAgICAgICAgdGhyb3R0bGUoKCkgPT4gaW50ZXJ2YWwoMCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpKSxcbiAgICAgICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpXG4gICAgICAgICAgICAgICAgKS5zdWJzY3JpYmUoKHJlcykgPT4gdGhpcy5vblBvaW50ZXJNb3ZlKHJlcykpO1xuXG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LmRlZmF1bHRWaWV3LCAndG91Y2hlbmQnKS5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB0aGlzLm9uUG9pbnRlclVwKHJlcykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBoYXZlIHBvaW50ZXIgZXZlbnRzIGFuZCB0b3VjaCBldmVudHMuIFVzZSB0aGVuIG1vdXNlIGV2ZW50cy5cbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtb3VzZWRvd24nKS5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHRoaXMub25Qb2ludGVyRG93bihyZXMpKTtcblxuICAgICAgICAgICAgICAgIGZyb21FdmVudChkb2N1bWVudC5kZWZhdWx0VmlldywgJ21vdXNlbW92ZScpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIHRocm90dGxlKCgpID0+IGludGVydmFsKDAsIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKSksXG4gICAgICAgICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KVxuICAgICAgICAgICAgICAgICkuc3Vic2NyaWJlKChyZXMpID0+IHRoaXMub25Qb2ludGVyTW92ZShyZXMpKTtcblxuICAgICAgICAgICAgICAgIGZyb21FdmVudChkb2N1bWVudC5kZWZhdWx0VmlldywgJ21vdXNldXAnKS5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB0aGlzLm9uUG9pbnRlclVwKHJlcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveS5jb21wbGV0ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmRyYWdHaG9zdCAmJiB0aGlzLl9yZW1vdmVPbkRlc3Ryb3kpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0dob3N0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kcmFnR2hvc3QpO1xuICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIE1ldGhvZCBib3VuZCB0byB0aGUgUG9pbnRlckRvd24gZXZlbnQgb2YgdGhlIGJhc2UgZWxlbWVudCBpZ3hEcmFnIGlzIGluaXRpYWxpemVkLlxuICAgICAqIEBwYXJhbSBldmVudCBQb2ludGVyRG93biBldmVudCBjYXB0dXJlZFxuICAgICAqL1xuICAgIHB1YmxpYyBvblBvaW50ZXJEb3duKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2NsaWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wb2ludGVyRG93bklkID0gZXZlbnQucG9pbnRlcklkO1xuXG4gICAgICAgIGlmICh0aGlzLnBvaW50ZXJFdmVudHNFbmFibGVkIHx8ICF0aGlzLnRvdWNoRXZlbnRzRW5hYmxlZCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgZmlyc3QgZm9yIHBvaW50ZXIgZXZlbnRzIG9yIG5vbiB0b3VjaCwgYmVjYXVzZSB3ZSBjYW4gaGF2ZSBwb2ludGVyIGV2ZW50cyBhbmQgdG91Y2ggZXZlbnRzIGF0IG9uY2UuXG4gICAgICAgICAgICB0aGlzLl9zdGFydFggPSBldmVudC5wYWdlWDtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0WSA9IGV2ZW50LnBhZ2VZO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG91Y2hFdmVudHNFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFydFggPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgdGhpcy5fc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRha2UgbWFyZ2lucyBiZWNhdXNlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGRvZXNuJ3QgaW5jbHVkZSBtYXJnaW5zIG9mIHRoZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IG1hcmdpblRvcCA9IHBhcnNlSW50KGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpWydtYXJnaW4tdG9wJ10sIDEwKTtcbiAgICAgICAgY29uc3QgbWFyZ2luTGVmdCA9IHBhcnNlSW50KGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpWydtYXJnaW4tbGVmdCddLCAxMCk7XG5cbiAgICAgICAgdGhpcy5fZHJhZ09mZnNldFggPVxuICAgICAgICAgICAgKHRoaXMuX3N0YXJ0WCAtIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSB0aGlzLmdldFdpbmRvd1Njcm9sbExlZnQoKSkgKyBtYXJnaW5MZWZ0O1xuICAgICAgICB0aGlzLl9kcmFnT2Zmc2V0WSA9XG4gICAgICAgICAgICAodGhpcy5fc3RhcnRZIC0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gdGhpcy5nZXRXaW5kb3dTY3JvbGxUb3AoKSkgKyBtYXJnaW5Ub3A7XG4gICAgICAgIHRoaXMuX2RyYWdTdGFydFggPSB0aGlzLl9zdGFydFggLSB0aGlzLl9kcmFnT2Zmc2V0WDtcbiAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0WSA9IHRoaXMuX3N0YXJ0WSAtIHRoaXMuX2RyYWdPZmZzZXRZO1xuXG4gICAgICAgIC8vIFNldCBwb2ludGVyIGNhcHR1cmUgc28gd2UgZGV0ZWN0IHBvaW50ZXJtb3ZlIGV2ZW4gaWYgbW91c2UgaXMgb3V0IG9mIGJvdW5kcyB1bnRpbCBkcmFnR2hvc3QgaXMgY3JlYXRlZC5cbiAgICAgICAgaWYgKHRoaXMucG9pbnRlckV2ZW50c0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNldFBvaW50ZXJDYXB0dXJlKHRoaXMuX3BvaW50ZXJEb3duSWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogUGVyZm1vcm0gZHJhZyBtb3ZlIGxvZ2ljIHdoZW4gZHJhZ2dpbmcgYW5kIGRpc3BhdGNoaW5nIGV2ZW50cyBpZiB0aGVyZSBpcyBpZ3hEcm9wIHVuZGVyIHRoZSBwb2ludGVyLlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGJvdW5kIGF0IGZpcnN0IGF0IHRoZSBiYXNlIGVsZW1lbnQuXG4gICAgICogSWYgZHJhZ2dpbmcgc3RhcnRzIGFuZCBhZnRlciB0aGUgZHJhZ0dob3N0IGlzIHJlbmRlcmVkIHRoZSBwb2ludGVySWQgaXMgcmVhc3NpZ25lZCB0byB0aGUgZHJhZ0dob3N0LiBUaGVuIHRoaXMgbWV0aG9kIGlzIGJvdW5kIHRvIGl0LlxuICAgICAqIEBwYXJhbSBldmVudCBQb2ludGVyTW92ZSBldmVudCBjYXB0dXJlZFxuICAgICAqL1xuICAgIHB1YmxpYyBvblBvaW50ZXJNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9jbGlja2VkKSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnU3RhcnRBcmdzOiBJRHJhZ1N0YXJ0RXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIG93bmVyOiB0aGlzLFxuICAgICAgICAgICAgICAgIGNhbmNlbDogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgcGFnZVgsIHBhZ2VZO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRlckV2ZW50c0VuYWJsZWQgfHwgIXRoaXMudG91Y2hFdmVudHNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZmlyc3QgZm9yIHBvaW50ZXIgZXZlbnRzIG9yIG5vbiB0b3VjaCwgYmVjYXVzZSB3ZSBjYW4gaGF2ZSBwb2ludGVyIGV2ZW50cyBhbmQgdG91Y2ggZXZlbnRzIGF0IG9uY2UuXG4gICAgICAgICAgICAgICAgcGFnZVggPSBldmVudC5wYWdlWDtcbiAgICAgICAgICAgICAgICBwYWdlWSA9IGV2ZW50LnBhZ2VZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvdWNoRXZlbnRzRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHBhZ2VYID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICBwYWdlWSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVk7XG5cbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHNjcm9sbGluZyBvbiB0b3VjaCB3aGlsZSBkcmFnZ2luZ1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRvdGFsTW92ZWRYID0gcGFnZVggLSB0aGlzLl9zdGFydFg7XG4gICAgICAgICAgICBjb25zdCB0b3RhbE1vdmVkWSA9IHBhZ2VZIC0gdGhpcy5fc3RhcnRZO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9kcmFnU3RhcnRlZCAmJlxuICAgICAgICAgICAgICAgIChNYXRoLmFicyh0b3RhbE1vdmVkWCkgPiB0aGlzLmRyYWdUb2xlcmFuY2UgfHwgTWF0aC5hYnModG90YWxNb3ZlZFkpID4gdGhpcy5kcmFnVG9sZXJhbmNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdTdGFydC5lbWl0KGRyYWdTdGFydEFyZ3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFkcmFnU3RhcnRBcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIG1vdmVkIGVub3VnaCBzbyBkcmFnR2hvc3QgY2FuIGJlIHJlbmRlcmVkIGFuZCBhY3R1YWwgZHJhZ2dpbmcgdG8gc3RhcnQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRHJhZ0dob3N0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fZHJhZ1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubGVmdCA9IHRoaXMuX2RyYWdTdGFydFggKyB0b3RhbE1vdmVkWDtcbiAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy5fZHJhZ1N0YXJ0WSArIHRvdGFsTW92ZWRZO1xuXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRHJhZ0V2ZW50cyhwYWdlWCwgcGFnZVksIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBQZXJmb3JtIGRyYWcgZW5kIGxvZ2ljIHdoZW4gcmVsZWFzaW5nIHRoZSBkcmFnR2hvc3QgYW5kIGRpc3BhdGNoaW5nIGRyb3AgZXZlbnQgaWYgaWd4RHJvcCBpcyB1bmRlciB0aGUgcG9pbnRlci5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBib3VuZCBhdCBmaXJzdCBhdCB0aGUgYmFzZSBlbGVtZW50LlxuICAgICAqIElmIGRyYWdnaW5nIHN0YXJ0cyBhbmQgYWZ0ZXIgdGhlIGRyYWdHaG9zdCBpcyByZW5kZXJlZCB0aGUgcG9pbnRlcklkIGlzIHJlYXNzaWduZWQgdG8gdGhlIGRyYWdHaG9zdC4gVGhlbiB0aGlzIG1ldGhvZCBpcyBib3VuZCB0byBpdC5cbiAgICAgKiBAcGFyYW0gZXZlbnQgUG9pbnRlclVwIGV2ZW50IGNhcHR1cmVkXG4gICAgICovXG4gICAgcHVibGljIG9uUG9pbnRlclVwKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5fY2xpY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICBvd25lcjogdGhpc1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9kcmFnU3RhcnRlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xhc3REcm9wQXJlYSAmJiB0aGlzLl9sYXN0RHJvcEFyZWEgIT09IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFuaW1hdGVPblJlbGVhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblRyYW5zaXRpb25FbmQobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gZHJhZ2dpbmcgZW5kZWQgb3ZlciBhIGRyb3AgYXJlYS4gQ2FsbCB0aGlzIGFmdGVyIHRyYW5zaXRpb24gYmVjYXVzZSBvbkRyb3AgbWlnaHQgcmVtb3ZlIHRoZSBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hEcm9wRXZlbnQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZLCBldmVudCk7XG4gICAgICAgICAgICAgICAgLy8gZWxzZSB0aGUgZHJvcCBkaXJlY3RpdmUgbmVlZHMgdG8gY2FsbCB0aGUgZHJvcEZpbmlzaGVkKCkgbWV0aG9kIHNvIHRoZSBhbmltYXRpb24gY2FuIHBlcmZvcm1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hbmltYXRlT25SZWxlYXNlICYmXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmxlZnQgIT09IE1hdGguZmxvb3IodGhpcy5fZHJhZ1N0YXJ0WCkgfHwgdGhpcy50b3AgIT09IE1hdGguZmxvb3IodGhpcy5fZHJhZ1N0YXJ0WSkpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHN0YXJ0IHBvc2l0aW9ucyBhcmUgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdGhlIHRyYW5zaXRpb24gd2lsbCBub3QgZXhlY3V0ZS5cbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhlIGdob3N0IHRvIHN0YXJ0IHBvc2l0aW9uIGJlZm9yZSByZW1vdmluZyBpdC4gU2VlIG9uVHJhbnNpdGlvbkVuZC5cbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdHaG9zdC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLmRlZmF1bHRSZXR1cm5EdXJhdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLl9kcmFnU3RhcnRYO1xuICAgICAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy5fZHJhZ1N0YXJ0WTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblRyYW5zaXRpb25FbmQobnVsbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0VuZC5lbWl0KGV2ZW50QXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ0NsaWNrZWQuZW1pdChldmVudEFyZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQ3JlYXRlIGRyYWdHaG9zdCBlbGVtZW50IC0gaWYgYSBOb2RlIG9iamVjdCBpcyBwcm92aWRlZCBpdCBjcmVhdGVzIGEgY2xvbmUgb2YgdGhhdCBub2RlLFxuICAgICAqIG90aGVyd2lzZSBpdCBjbG9uZXMgdGhlIGhvc3QgZWxlbWVudC5cbiAgICAgKiBCaW5kIGFsbCBuZWVkZWQgZXZlbnRzLlxuICAgICAqIEBwYXJhbSBldmVudCBQb2ludGVyIGV2ZW50IHJlcXVpcmVkIHdoZW4gdGhlIGRyYWdHaG9zdCBpcyBiZWluZyBpbml0aWFsaXplZC5cbiAgICAgKiBAcGFyYW0gbm9kZSBUaGUgTm9kZSBvYmplY3QgdG8gYmUgY2xvbmVkLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjcmVhdGVEcmFnR2hvc3QoZXZlbnQsIG5vZGU6IGFueSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5kcmFnR2hvc3QgPSBub2RlID8gbm9kZS5jbG9uZU5vZGUodHJ1ZSkgOiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuZHJhZ0dob3N0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwLjBzJztcbiAgICAgICAgdGhpcy5kcmFnR2hvc3Quc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBjb25zdCBob3N0TGVmdCA9IHRoaXMuZHJhZ0dob3N0SG9zdCA/IHRoaXMuZHJhZ0dob3N0SG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IDogMDtcbiAgICAgICAgY29uc3QgaG9zdFRvcCA9IHRoaXMuZHJhZ0dob3N0SG9zdCA/IHRoaXMuZHJhZ0dob3N0SG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgOiAwO1xuICAgICAgICB0aGlzLmRyYWdHaG9zdC5zdHlsZS50b3AgPSB0aGlzLl9kcmFnU3RhcnRZIC0gaG9zdFRvcCArICdweCc7XG4gICAgICAgIHRoaXMuZHJhZ0dob3N0LnN0eWxlLmxlZnQgPSB0aGlzLl9kcmFnU3RhcnRYIC0gaG9zdExlZnQgKyAncHgnO1xuXG4gICAgICAgIGlmICh0aGlzLmdob3N0SW1hZ2VDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRyYWdHaG9zdCwgdGhpcy5naG9zdEltYWdlQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ0dob3N0SG9zdCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3RIb3N0LmFwcGVuZENoaWxkKHRoaXMuZHJhZ0dob3N0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kcmFnR2hvc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9pbnRlckV2ZW50c0VuYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIFRoZSBkcmFnR2hvc3QgdGFrZXMgY29udHJvbCBmb3IgbW92aW5nIGFuZCBkcmFnZ2luZyBhZnRlciBpdCBoYXMgYmVlbiBzaG93bi5cbiAgICAgICAgICAgIHRoaXMuZHJhZ0dob3N0LnNldFBvaW50ZXJDYXB0dXJlKHRoaXMuX3BvaW50ZXJEb3duSWQpO1xuICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3QuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25Qb2ludGVyTW92ZShhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3QuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUG9pbnRlclVwKGFyZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmltYXRlT25SZWxlYXNlKSB7XG4gICAgICAgICAgICAvLyBUcmFuc2l0aW9uIGFuaW1hdGlvbiB3aGVuIHRoZSBkcmFnR2hvc3QgaXMgcmVsZWFzZWQgYW5kIGl0IHJldHVybnMgdG8gaXQncyBvcmlnaW5hbCBwb3NpdGlvbi5cbiAgICAgICAgICAgIHRoaXMuZHJhZ0dob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25UcmFuc2l0aW9uRW5kKGFyZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIaWRlIHRoZSBiYXNlIGFmdGVyIHRoZSBkcmFnR2hvc3QgaXMgY3JlYXRlZCwgYmVjYXVzZSBvdGhlcndpc2UgdGhlIGRyYWdHaG9zdCB3aWxsIGJlIG5vdCB2aXNpYmxlLlxuICAgICAgICBpZiAodGhpcy5oaWRlQmFzZU9uRHJhZykge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogRGlzcGF0Y2ggY3VzdG9tIGlneERyYWdFbnRlci9pZ3hEcmFnTGVhdmUgZXZlbnRzIGJhc2VkIG9uIGN1cnJlbnQgcG9pbnRlciBwb3NpdGlvbiBhbmQgaWYgZHJvcCBhcmVhIGlzIHVuZGVyLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBkaXNwYXRjaERyYWdFdmVudHMocGFnZVg6IG51bWJlciwgcGFnZVk6IG51bWJlciwgb3JpZ2luYWxFdmVudCkge1xuICAgICAgICBsZXQgdG9wRHJvcEFyZWE7XG4gICAgICAgIGNvbnN0IGV2ZW50QXJnczogSWd4RHJhZ0N1c3RvbUV2ZW50RGV0YWlscyA9IHtcbiAgICAgICAgICAgIHN0YXJ0WDogdGhpcy5fc3RhcnRYLFxuICAgICAgICAgICAgc3RhcnRZOiB0aGlzLl9zdGFydFksXG4gICAgICAgICAgICBwYWdlWDogcGFnZVgsXG4gICAgICAgICAgICBwYWdlWTogcGFnZVksXG4gICAgICAgICAgICBvd25lcjogdGhpcyxcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IG9yaWdpbmFsRXZlbnRcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBlbGVtZW50c0Zyb21Qb2ludCA9IHRoaXMuZ2V0RWxlbWVudHNBdFBvaW50KHBhZ2VYLCBwYWdlWSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHNGcm9tUG9pbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50c0Zyb21Qb2ludFtpXS5nZXRBdHRyaWJ1dGUoJ2Ryb3BwYWJsZScpID09PSAndHJ1ZScgJiYgZWxlbWVudHNGcm9tUG9pbnRbaV0gIT09IHRoaXMuZHJhZ0dob3N0KSB7XG4gICAgICAgICAgICAgICAgdG9wRHJvcEFyZWEgPSBlbGVtZW50c0Zyb21Qb2ludFtpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b3BEcm9wQXJlYSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRvcERyb3BBcmVhLCAnaWd4RHJhZ092ZXInLCBldmVudEFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvcERyb3BBcmVhICYmXG4gICAgICAgICAgICAoIXRoaXMuX2xhc3REcm9wQXJlYSB8fCAodGhpcy5fbGFzdERyb3BBcmVhICYmIHRoaXMuX2xhc3REcm9wQXJlYSAhPT0gdG9wRHJvcEFyZWEpKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xhc3REcm9wQXJlYSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9sYXN0RHJvcEFyZWEsICdpZ3hEcmFnTGVhdmUnLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9sYXN0RHJvcEFyZWEgPSB0b3BEcm9wQXJlYTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9sYXN0RHJvcEFyZWEsICdpZ3hEcmFnRW50ZXInLCBldmVudEFyZ3MpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0b3BEcm9wQXJlYSAmJiB0aGlzLl9sYXN0RHJvcEFyZWEpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9sYXN0RHJvcEFyZWEsICdpZ3hEcmFnTGVhdmUnLCBldmVudEFyZ3MpO1xuICAgICAgICAgICAgdGhpcy5fbGFzdERyb3BBcmVhID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBEaXNwYXRjaCBjdXN0b20gaWd4RHJvcCBldmVudCBiYXNlZCBvbiBjdXJyZW50IHBvaW50ZXIgcG9zaXRpb24gaWYgdGhlcmUgaXMgbGFzdCByZWNvcmRlciBkcm9wIGFyZWEgdW5kZXIgdGhlIHBvaW50ZXIuXG4gICAgICogTGFzdCByZWNvcmRlciBkcm9wIGFyZWEgaXMgdXBkYXRlZCBpbiBAZGlzcGF0Y2hEcmFnRXZlbnRzIG1ldGhvZC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZGlzcGF0Y2hEcm9wRXZlbnQocGFnZVg6IG51bWJlciwgcGFnZVk6IG51bWJlciwgb3JpZ2luYWxFdmVudCkge1xuICAgICAgICBjb25zdCBldmVudEFyZ3M6IElneERyYWdDdXN0b21FdmVudERldGFpbHMgPSB7XG4gICAgICAgICAgICBzdGFydFg6IHRoaXMuX3N0YXJ0WCxcbiAgICAgICAgICAgIHN0YXJ0WTogdGhpcy5fc3RhcnRZLFxuICAgICAgICAgICAgcGFnZVg6IHBhZ2VYLFxuICAgICAgICAgICAgcGFnZVk6IHBhZ2VZLFxuICAgICAgICAgICAgb3duZXI6IHRoaXMsXG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX2xhc3REcm9wQXJlYSwgJ2lneERyb3AnLCBldmVudEFyZ3MpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fbGFzdERyb3BBcmVhLCAnaWd4RHJhZ0xlYXZlJywgZXZlbnRBcmdzKTtcbiAgICAgICAgdGhpcy5fbGFzdERyb3BBcmVhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogVXBkYXRlIHJlbGF0aXZlIHBvc2l0aW9uc1xuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVEcmFnUmVsYXRpdmVQb3MoKSB7XG4gICAgICAgIGlmICghdGhpcy5kcmFnR2hvc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbmV3IGRyYWdHaG9zdCBwb3NpdGlvbiB0byByZW1haW4gd2hlcmUgdGhlIG1vdXNlIGlzLCBzbyBpdCBkb2Vzbid0IGp1bXBcbiAgICAgICAgY29uc3QgdG90YWxEcmFnZ2VkWCA9IHRoaXMubGVmdCAtIHRoaXMuX2RyYWdTdGFydFg7XG4gICAgICAgIGNvbnN0IHRvdGFsRHJhZ2dlZFkgPSB0aGlzLnRvcCAtIHRoaXMuX2RyYWdTdGFydFk7XG4gICAgICAgIGNvbnN0IG5ld1Bvc1ggPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICBjb25zdCBuZXdQb3NZID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICBjb25zdCBkaWZmU3RhcnRYID0gdGhpcy5fZHJhZ1N0YXJ0WCAtIG5ld1Bvc1g7XG4gICAgICAgIGNvbnN0IGRpZmZTdGFydFkgPSB0aGlzLl9kcmFnU3RhcnRZIC0gbmV3UG9zWTtcbiAgICAgICAgdGhpcy50b3AgPSBuZXdQb3NYICsgdG90YWxEcmFnZ2VkWCAtIGRpZmZTdGFydFg7XG4gICAgICAgIHRoaXMubGVmdCA9IG5ld1Bvc1kgKyB0b3RhbERyYWdnZWRZIC0gZGlmZlN0YXJ0WTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmZvcm1zIHRoZSBgaWd4RHJhZ2AgZGlyZWN0aXZlIHRoYXQgaXQgaGFzIGJlZW4gZHJvcHBlZC9yZWxlYXNlZC5cbiAgICAgKiBUaGlzIHNob3VsZCB1c3VsbHkgYmUgY2FsbGVkIHdoZW4gYGFuaW1hdGVPblJlbGVhc2VgIGlzIHNldCB0byBgdHJ1ZWAuXG4gICAgICogV2hlbiBjYW5jZWxpbmcgb3IgZGVmaW5pbmcgY3VzdG9tIGRyb3AgbG9naWMgdGhpcyB0ZWxscyB0aGUgaWd4RHJhZyB0byB1cGRhdGUgaXQncyBwb3NpdGlvbnMgYW5kXG4gICAgICogYW5pbWF0ZSBjb3JyZWN0bHkgdG8gdGhlIG5ldyBwb3NpdGlvbi5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogcHVibGljIG9uRHJvcEVsZW0oZXZlbnQpIHtcbiAgICAgKiAgICAgLy8gRnVuY3Rpb24gYm91bmQgdG8gdGhlIGlneERyb3AgZGlyZWN0aXZlIGV2ZW50IGBvbkRyb3BgXG4gICAgICogICAgIC8vIFRoaXMgY2FuY2VscyB0aGUgZGVmYXVsdCBkcm9wIGxvZ2ljIG9mIHRoZSBgaWd4RHJvcGBcbiAgICAgKiAgICAgZXZlbnQuY2FuY2VsID0gdHJ1ZTtcbiAgICAgKiAgICAgZXZlbnQuZHJhZy5kcm9wRmluaXNoZWQoKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGRyb3BGaW5pc2hlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZU9uUmVsZWFzZSAmJiB0aGlzLmRyYWdHaG9zdCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEcmFnUmVsYXRpdmVQb3MoKTtcblxuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBkcmFnZ2VkIGVsZW1lbnQgdG8gdGhlIHN0YXJ0LiBTZWUgb25UcmFuc2l0aW9uRW5kIG5leHQuXG4gICAgICAgICAgICAvLyBUYWtlIG1hcmdpbnMgYmVjdWFzZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBkb2Vzbid0IGluY2x1ZGUgbWFyZ2luc1xuICAgICAgICAgICAgY29uc3QgbWFyZ2luVG9wID0gcGFyc2VJbnQoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudClbJ21hcmdpbi10b3AnXSwgMTApO1xuICAgICAgICAgICAgY29uc3QgbWFyZ2luTGVmdCA9IHBhcnNlSW50KGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpWydtYXJnaW4tbGVmdCddLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBuZXdQb3NYID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHRoaXMuZ2V0V2luZG93U2Nyb2xsTGVmdCgpO1xuICAgICAgICAgICAgY29uc3QgbmV3UG9zWSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuZ2V0V2luZG93U2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ0dob3N0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRoaXMuZGVmYXVsdFJldHVybkR1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gbmV3UG9zWCAtIG1hcmdpbkxlZnQ7XG4gICAgICAgICAgICB0aGlzLnRvcCA9IG5ld1Bvc1kgLSBtYXJnaW5Ub3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uVHJhbnNpdGlvbkVuZChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5fZHJhZ1N0YXJ0ZWQgJiYgIXRoaXMuX2NsaWNrZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhpZGVCYXNlT25EcmFnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhZ0dob3N0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kcmFnR2hvc3QpO1xuICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3QgPSBudWxsO1xuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMC4wcyc7XG4gICAgICAgICAgICB0aGlzLl9kcmFnU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXR1cm5Nb3ZlRW5kLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgb3duZXI6IHRoaXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRFbGVtZW50c0F0UG9pbnQocGFnZVg6IG51bWJlciwgcGFnZVk6IG51bWJlcikge1xuICAgICAgICAvLyBjb3JyZWN0IHRoZSBjb29yZGluYXRlcyB3aXRoIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiwgYmVjYXVzZVxuICAgICAgICAvLyBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludCBjb25pZGVyIHBvc2l0aW9uIHdpdGhpbiB0aGUgY3VycmVudCB2aWV3cG9ydFxuICAgICAgICAvLyB3aW5kb3cucGFnZVhPZmZzZXQgPT0gd2luZG93LnNjcm9sbFg7IC8vIGFsd2F5cyB0cnVlXG4gICAgICAgIC8vIHVzaW5nIHdpbmRvdy5wYWdlWE9mZnNldCBmb3IgSUU5IGNvbXBhdGliaWxpdHlcbiAgICAgICAgY29uc3Qgdmlld1BvcnRYID0gcGFnZVggLSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHZpZXdQb3J0WSA9IHBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBpZiAoZG9jdW1lbnRbJ21zRWxlbWVudHNGcm9tUG9pbnQnXSkge1xuICAgICAgICAgICAgLy8gRWRnZSBhbmQgSUUgc3BlY2lhbCBzbm93Zmxha2VzXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRbJ21zRWxlbWVudHNGcm9tUG9pbnQnXSh2aWV3UG9ydFgsIHZpZXdQb3J0WSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPdGhlciBicm93c2VycyBsaWtlIENocm9tZSwgRmlyZWZveCwgT3BlcmFcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludCh2aWV3UG9ydFgsIHZpZXdQb3J0WSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGRpc3BhdGNoRXZlbnQodGFyZ2V0LCBldmVudE5hbWU6IHN0cmluZywgZXZlbnRBcmdzOiBJZ3hEcmFnQ3VzdG9tRXZlbnREZXRhaWxzKSB7XG4gICAgICAgIC8vIFRoaXMgd2F5IGlzIElFMTEgY29tcGF0aWJsZS5cbiAgICAgICAgY29uc3QgZHJhZ0xlYXZlRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgZHJhZ0xlYXZlRXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgZmFsc2UsIGZhbHNlLCBldmVudEFyZ3MpO1xuICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChkcmFnTGVhdmVFdmVudCk7XG4gICAgICAgIC8vIE90aGVyc2llIGNhbiBiZSB1c2VkIGB0YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBldmVudEFyZ3MpKTtgXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFdpbmRvd1Njcm9sbFRvcCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZID8gd2luZG93LnNjcm9sbFkgOiAod2luZG93LnBhZ2VZT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogMCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFdpbmRvd1Njcm9sbExlZnQoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWCA/IHdpbmRvdy5zY3JvbGxYIDogKHdpbmRvdy5wYWdlWE9mZnNldCA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IDApO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4RHJvcF0nXG59KVxuZXhwb3J0IGNsYXNzIElneERyb3BEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICAvKipcbiAgICAgKiAtIFNhdmUgZGF0YSBpbnNpZGUgdGhlIGBpZ3hEcm9wYCBkaXJlY3RpdmUuIFRoaXMgY2FuIGJlIHNldCB3aGVuIGluc3RhbmNpbmcgYGlneERyb3BgIG9uIGFuIGVsZW1lbnQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXYgW2lneERyb3BdPVwieyBzb3VyY2U6IG15RWxlbWVudCB9XCI+PC9kaXY+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hEcm9wJylcbiAgICBwdWJsaWMgZGF0YTogYW55O1xuXG4gICAgLyoqIEV2ZW50IHRyaWdnZXJlZCB3aGVuIGRyYWdnZWQgZWxlbWVudCBlbnRlcnMgdGhlIGFyZWEgb2YgdGhlIGVsZW1lbnQuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxkaXYgY2xhc3M9XCJjYWdlQXJlYVwiIGlneERyb3AgKG9uRW50ZXIpPVwiZHJhZ0VudGVyKClcIiAoaWd4RHJhZ0VudGVyKT1cIm9uRHJhZ0NhZ2VFbnRlcigpXCIgKGlneERyYWdMZWF2ZSk9XCJvbkRyYWdDYWdlTGVhdmUoKVwiPlxuICAgICAqIDwvZGl2PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBwdWJsaWMgZHJhZ0VudGVyKCl7XG4gICAgICogICAgIGFsZXJ0KFwiQSBkcmFnZ2FibGUgZWxlbWVudGUgaGFzIGVudGVyZWQgdGhlIGNoaXAgYXJlYSFcIik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxJZ3hEcm9wRW50ZXJFdmVudEFyZ3M+KCk7XG5cbiAgICAvKiogRXZlbnQgdHJpZ2dlcmVkIHdoZW4gZHJhZ2dlZCBlbGVtZW50IGxlYXZlcyB0aGUgYXJlYSBvZiB0aGUgZWxlbWVudC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGRpdiBjbGFzcz1cImNhZ2VBcmVhXCIgaWd4RHJvcCAob25MZWF2ZSk9XCJkcmFnTGVhdmUoKVwiIChpZ3hEcmFnRW50ZXIpPVwib25EcmFnQ2FnZUVudGVyKClcIiAoaWd4RHJhZ0xlYXZlKT1cIm9uRHJhZ0NhZ2VMZWF2ZSgpXCI+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHB1YmxpYyBkcmFnTGVhdmUoKXtcbiAgICAgKiAgICAgYWxlcnQoXCJBIGRyYWdnYWJsZSBlbGVtZW50ZSBoYXMgbGVmdCB0aGUgY2hpcCBhcmVhIVwiKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPElneERyb3BMZWF2ZUV2ZW50QXJncz4oKTtcblxuICAgIC8qKiBFdmVudCB0cmlnZ2VyZWQgd2hlbiBkcmFnZ2VkIGVsZW1lbnQgaXMgZHJvcHBlZCBpbiB0aGUgYXJlYSBvZiB0aGUgZWxlbWVudC5cbiAgICAgKiBTaW5jZSB0aGUgYGlneERyb3BgIGhhcyBkZWZhdWx0IGxvZ2ljIHRoYXQgYXBwZW5kcyB0aGUgZHJvcHBlZCBlbGVtZW50IGFzIGEgY2hpbGQsIGl0IGNhbiBiZSBjYW5jZWxlZCBoZXJlLlxuICAgICAqIFRvIGNhbmNlbCB0aGUgZGVmYXVsdCBsb2dpYyB0aGUgYGNhbmNlbGAgcHJvcGVydHkgb2YgdGhlIGV2ZW50IG5lZWRzIHRvIGJlIHNldCB0byB0cnVlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8ZGl2IGNsYXNzPVwiY2FnZUFyZWFcIiBpZ3hEcm9wIChvbkRyb3ApPVwiZHJhZ0Ryb3AoKVwiIChpZ3hEcmFnRW50ZXIpPVwib25EcmFnQ2FnZUVudGVyKClcIiAoaWd4RHJhZ0xlYXZlKT1cIm9uRHJhZ0NhZ2VMZWF2ZSgpXCI+XG4gICAgICogPC9kaXY+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHB1YmxpYyBkcmFnRHJvcCgpe1xuICAgICAqICAgICBhbGVydChcIkEgZHJhZ2dhYmxlIGVsZW1lbnRlIGhhcyBiZWVuIGRyb3BwZWQgaW4gdGhlIGNoaXAgYXJlYSFcIik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPElneERyb3BFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmRyb3BwYWJsZScpXG4gICAgcHVibGljIGRyb3BwYWJsZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kcmFnT3ZlcicpXG4gICAgcHVibGljIGRyYWdvdmVyID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9kZXN0cm95ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF96b25lOiBOZ1pvbmUpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdpZ3hEcmFnRW50ZXInKS5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHRoaXMub25EcmFnRW50ZXIocmVzIGFzIEN1c3RvbUV2ZW50PElneERyYWdDdXN0b21FdmVudERldGFpbHM+KSk7XG5cbiAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2lneERyYWdMZWF2ZScpLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKS5zdWJzY3JpYmUoKHJlcykgPT4gdGhpcy5vbkRyYWdMZWF2ZShyZXMpKTtcbiAgICAgICAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2lneERyYWdPdmVyJykucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpLnN1YnNjcmliZSgocmVzKSA9PiB0aGlzLm9uRHJhZ092ZXIocmVzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9kZXN0cm95Lm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uRHJhZ092ZXIoZXZlbnQpIHsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBvbkRyYWdFbnRlcihldmVudDogQ3VzdG9tRXZlbnQ8SWd4RHJhZ0N1c3RvbUV2ZW50RGV0YWlscz4pIHtcbiAgICAgICAgdGhpcy5kcmFnb3ZlciA9IHRydWU7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRQb3NYID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHRoaXMuZ2V0V2luZG93U2Nyb2xsTGVmdCgpO1xuICAgICAgICBjb25zdCBlbGVtZW50UG9zWSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuZ2V0V2luZG93U2Nyb2xsVG9wKCk7XG4gICAgICAgIGNvbnN0IG9mZnNldFggPSBldmVudC5kZXRhaWwucGFnZVggLSBlbGVtZW50UG9zWDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IGV2ZW50LmRldGFpbC5wYWdlWSAtIGVsZW1lbnRQb3NZO1xuICAgICAgICBjb25zdCBldmVudEFyZ3M6IElneERyb3BFbnRlckV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LmRldGFpbC5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgICAgb3duZXI6IHRoaXMsXG4gICAgICAgICAgICBkcmFnOiBldmVudC5kZXRhaWwub3duZXIsXG4gICAgICAgICAgICBkcmFnRGF0YTogZXZlbnQuZGV0YWlsLm93bmVyLmRhdGEsXG4gICAgICAgICAgICBzdGFydFg6IGV2ZW50LmRldGFpbC5zdGFydFgsXG4gICAgICAgICAgICBzdGFydFk6IGV2ZW50LmRldGFpbC5zdGFydFksXG4gICAgICAgICAgICBwYWdlWDogZXZlbnQuZGV0YWlsLnBhZ2VYLFxuICAgICAgICAgICAgcGFnZVk6IGV2ZW50LmRldGFpbC5wYWdlWSxcbiAgICAgICAgICAgIG9mZnNldFg6IG9mZnNldFgsXG4gICAgICAgICAgICBvZmZzZXRZOiBvZmZzZXRZXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25FbnRlci5lbWl0KGV2ZW50QXJncyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25EcmFnTGVhdmUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5kcmFnb3ZlciA9IGZhbHNlO1xuICAgICAgICBjb25zdCBlbGVtZW50UG9zWCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB0aGlzLmdldFdpbmRvd1Njcm9sbExlZnQoKTtcbiAgICAgICAgY29uc3QgZWxlbWVudFBvc1kgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0aGlzLmdldFdpbmRvd1Njcm9sbFRvcCgpO1xuICAgICAgICBjb25zdCBvZmZzZXRYID0gZXZlbnQuZGV0YWlsLnBhZ2VYIC0gZWxlbWVudFBvc1g7XG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSBldmVudC5kZXRhaWwucGFnZVkgLSBlbGVtZW50UG9zWTtcbiAgICAgICAgY29uc3QgZXZlbnRBcmdzOiBJZ3hEcm9wTGVhdmVFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudC5kZXRhaWwub3JpZ2luYWxFdmVudCxcbiAgICAgICAgICAgIG93bmVyOiB0aGlzLFxuICAgICAgICAgICAgZHJhZzogZXZlbnQuZGV0YWlsLm93bmVyLFxuICAgICAgICAgICAgZHJhZ0RhdGE6IGV2ZW50LmRldGFpbC5vd25lci5kYXRhLFxuICAgICAgICAgICAgc3RhcnRYOiBldmVudC5kZXRhaWwuc3RhcnRYLFxuICAgICAgICAgICAgc3RhcnRZOiBldmVudC5kZXRhaWwuc3RhcnRZLFxuICAgICAgICAgICAgcGFnZVg6IGV2ZW50LmRldGFpbC5wYWdlWCxcbiAgICAgICAgICAgIHBhZ2VZOiBldmVudC5kZXRhaWwucGFnZVksXG4gICAgICAgICAgICBvZmZzZXRYOiBvZmZzZXRYLFxuICAgICAgICAgICAgb2Zmc2V0WTogb2Zmc2V0WVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTGVhdmUuZW1pdChldmVudEFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignaWd4RHJvcCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uRHJhZ0Ryb3AoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudFBvc1ggPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgdGhpcy5nZXRXaW5kb3dTY3JvbGxMZWZ0KCk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRQb3NZID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy5nZXRXaW5kb3dTY3JvbGxUb3AoKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IGV2ZW50LmRldGFpbC5wYWdlWCAtIGVsZW1lbnRQb3NYO1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gZXZlbnQuZGV0YWlsLnBhZ2VZIC0gZWxlbWVudFBvc1k7XG4gICAgICAgIGNvbnN0IGFyZ3M6IElneERyb3BFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICBvd25lcjogdGhpcyxcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LmRldGFpbC5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgICAgZHJhZzogZXZlbnQuZGV0YWlsLm93bmVyLFxuICAgICAgICAgICAgZHJhZ0RhdGE6IGV2ZW50LmRldGFpbC5vd25lci5kYXRhLFxuICAgICAgICAgICAgb2Zmc2V0WDogb2Zmc2V0WCxcbiAgICAgICAgICAgIG9mZnNldFk6IG9mZnNldFksXG4gICAgICAgICAgICBjYW5jZWw6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Ecm9wLmVtaXQoYXJncyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghYXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIC8vIFRvIGRvIGZvciBnZW5lcmljIHNjZW5hcmlvXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZChldmVudC5kZXRhaWwub3duZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUsIGV2ZW50LmRldGFpbC5vd25lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGV2ZW50LmRldGFpbC5vd25lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5kZXRhaWwub3duZXIuZHJvcEZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRXaW5kb3dTY3JvbGxUb3AoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWSA/IHdpbmRvdy5zY3JvbGxZIDogKHdpbmRvdy5wYWdlWU9mZnNldCA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IDApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRXaW5kb3dTY3JvbGxMZWZ0KCkge1xuICAgICAgICByZXR1cm4gd2luZG93LnNjcm9sbFggPyB3aW5kb3cuc2Nyb2xsWCA6ICh3aW5kb3cucGFnZVhPZmZzZXQgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiAwKTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4RHJhZ0RpcmVjdGl2ZSwgSWd4RHJvcERpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0lneERyYWdEaXJlY3RpdmUsIElneERyb3BEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIElneERyYWdEcm9wTW9kdWxlIHsgfVxuIl19