/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, NgModule } from '@angular/core';
import { IgxDragDirective } from '../directives/dragdrop/dragdrop.directive';
import { fromEvent } from 'rxjs';
/** @type {?} */
const ghostBackgroundClass = 'igx-grid__tr--ghost';
/** @type {?} */
const gridCellClass = 'igx-grid__td';
/** @type {?} */
const rowSelectedClass = 'igx-grid__tr--selected';
/** @type {?} */
const cellSelectedClass = 'igx-grid__td--selected';
/** @type {?} */
const cellActiveClass = 'igx-grid__td--active';
/**
 * @hidden
 */
export class IgxRowDragDirective extends IgxDragDirective {
    constructor() {
        super(...arguments);
        this._rowDragStarted = false;
        this.transitionEndEvent = (evt) => {
            if (this.dragGhost) {
                this.dragGhost.removeEventListener('transitionend', this.transitionEndEvent, false);
            }
            this.endDragging();
        };
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        this.row = val;
    }
    /**
     * @return {?}
     */
    get data() {
        return this.row;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPointerDown(event) {
        event.preventDefault();
        this._rowDragStarted = false;
        super.onPointerDown(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPointerMove(event) {
        super.onPointerMove(event);
        if (this._dragStarted && !this._rowDragStarted) {
            this._rowDragStarted = true;
            /** @type {?} */
            const args = {
                owner: this,
                dragData: this.row,
                cancel: false
            };
            this.row.grid.onRowDragStart.emit(args);
            if (args.cancel) {
                this.dragGhost.parentNode.removeChild(this.dragGhost);
                this.dragGhost = null;
                this._dragStarted = false;
                this._clicked = false;
                return;
            }
            this.row.dragging = true;
            this.row.grid.rowDragging = true;
            this.row.grid.markForCheck();
            this.subscription$ = fromEvent(this.row.grid.document.defaultView, 'keydown').subscribe((ev) => {
                if (ev.key === "Escape" /* ESCAPE */ || ev.key === "Esc" /* ESCAPE_IE */) {
                    this._lastDropArea = false;
                    this.onPointerUp(event);
                }
            });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPointerUp(event) {
        if (!this._clicked) {
            return;
        }
        /** @type {?} */
        const args = {
            owner: this,
            dragData: this.row,
            animation: false
        };
        this.zone.run(() => {
            this.row.grid.onRowDragEnd.emit(args);
        });
        if (args.animation) {
            this.animateOnRelease = true;
        }
        /** @type {?} */
        const dropArea = this._lastDropArea;
        super.onPointerUp(event);
        if (!dropArea && this.animateOnRelease) {
            this.dragGhost.addEventListener('transitionend', this.transitionEndEvent, false);
        }
        else {
            this.endDragging();
        }
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    createDragGhost(event) {
        this.row.grid.endEdit(true);
        this.row.grid.markForCheck();
        super.createDragGhost(event, this.row.nativeElement);
        /** @type {?} */
        const ghost = this.dragGhost;
        /** @type {?} */
        const gridRect = this.row.grid.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const rowRect = this.row.nativeElement.getBoundingClientRect();
        ghost.style.overflow = 'hidden';
        ghost.style.width = gridRect.width + 'px';
        ghost.style.height = rowRect.height + 'px';
        this.renderer.addClass(ghost, ghostBackgroundClass);
        this.renderer.removeClass(ghost, rowSelectedClass);
        /** @type {?} */
        const ghostCells = ghost.getElementsByClassName(gridCellClass);
        for (let index = 0; index < ghostCells.length; index++) {
            this.renderer.removeClass(ghostCells[index], cellSelectedClass);
            this.renderer.removeClass(ghostCells[index], cellActiveClass);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _unsubscribe() {
        if (this.subscription$ && !this.subscription$.closed) {
            this.subscription$.unsubscribe();
        }
    }
    /**
     * @private
     * @return {?}
     */
    endDragging() {
        this.onTransitionEnd(null);
        this.row.dragging = false;
        this.row.grid.rowDragging = false;
        this.row.grid.markForCheck();
        this._unsubscribe();
    }
}
IgxRowDragDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxRowDrag]'
            },] }
];
IgxRowDragDirective.propDecorators = {
    data: [{ type: Input, args: ['igxRowDrag',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxRowDragDirective.prototype.row;
    /**
     * @type {?}
     * @private
     */
    IgxRowDragDirective.prototype.subscription$;
    /**
     * @type {?}
     * @private
     */
    IgxRowDragDirective.prototype._rowDragStarted;
    /**
     * @type {?}
     * @private
     */
    IgxRowDragDirective.prototype.transitionEndEvent;
}
/**
 * @hidden
 */
export class IgxDragIndicatorIconDirective {
}
IgxDragIndicatorIconDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxDragIndicatorIcon]'
            },] }
];
export class IgxRowDragModule {
}
IgxRowDragModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxRowDragDirective, IgxDragIndicatorIconDirective],
                entryComponents: [],
                exports: [IgxRowDragDirective, IgxDragIndicatorIconDirective],
                imports: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWRyYWcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9yb3ctZHJhZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUc3RSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7TUFJekMsb0JBQW9CLEdBQUcscUJBQXFCOztNQUM1QyxhQUFhLEdBQUcsY0FBYzs7TUFDOUIsZ0JBQWdCLEdBQUcsd0JBQXdCOztNQUMzQyxpQkFBaUIsR0FBRyx3QkFBd0I7O01BQzVDLGVBQWUsR0FBRyxzQkFBc0I7Ozs7QUFROUMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGdCQUFnQjtJQUh6RDs7UUFNWSxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQWlIeEIsdUJBQWtCLEdBQUcsQ0FBQyxHQUFJLEVBQUUsRUFBRTtZQUNsQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN2RjtZQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUE7SUFDTCxDQUFDOzs7OztJQXJIRyxJQUNJLElBQUksQ0FBQyxHQUFHO1FBQ1IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVNLGFBQWEsQ0FBQyxLQUFLO1FBQ3RCLEtBQUssQ0FBQyxjQUFjLEVBQUUs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RUFBRSxlQUFlLENBQUMsQ0FBQztTQUNqRTtJQUNMLENBQUM7Ozs7O0lBRU8sWUFBWTtRQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxXQUFXO1FBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7O1lBckhKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsY0FBYzthQUMzQjs7O21CQU1JLEtBQUssU0FBQyxZQUFZOzs7Ozs7O0lBSm5CLGtDQUF1RTs7Ozs7SUFDdkUsNENBQW9DOzs7OztJQUNwQyw4Q0FBZ0M7Ozs7O0lBaUhoQyxpREFLQzs7Ozs7QUFVTCxNQUFNLE9BQU8sNkJBQTZCOzs7WUFKekMsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7YUFDckM7O0FBWUQsTUFBTSxPQUFPLGdCQUFnQjs7O1lBUDVCLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSw2QkFBNkIsQ0FBQztnQkFDbEUsZUFBZSxFQUFFLEVBQUU7Z0JBQ25CLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLDZCQUE2QixDQUFDO2dCQUM3RCxPQUFPLEVBQUUsRUFBRTthQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25EZXN0cm95LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4RHJhZ0RpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZHJhZ2Ryb3AvZHJhZ2Ryb3AuZGlyZWN0aXZlJztcbmltcG9ydCB7IElSb3dEcmFnRW5kRXZlbnRBcmdzLCBJUm93RHJhZ1N0YXJ0RXZlbnRBcmdzIH0gZnJvbSAnLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJZ3hSb3dDb21wb25lbnQsIElneEdyaWRCYXNlQ29tcG9uZW50LCBJR3JpZERhdGFCaW5kYWJsZSB9IGZyb20gJy4vZ3JpZCc7XG5cblxuY29uc3QgZ2hvc3RCYWNrZ3JvdW5kQ2xhc3MgPSAnaWd4LWdyaWRfX3RyLS1naG9zdCc7XG5jb25zdCBncmlkQ2VsbENsYXNzID0gJ2lneC1ncmlkX190ZCc7XG5jb25zdCByb3dTZWxlY3RlZENsYXNzID0gJ2lneC1ncmlkX190ci0tc2VsZWN0ZWQnO1xuY29uc3QgY2VsbFNlbGVjdGVkQ2xhc3MgPSAnaWd4LWdyaWRfX3RkLS1zZWxlY3RlZCc7XG5jb25zdCBjZWxsQWN0aXZlQ2xhc3MgPSAnaWd4LWdyaWRfX3RkLS1hY3RpdmUnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4Um93RHJhZ10nXG59KVxuZXhwb3J0IGNsYXNzIElneFJvd0RyYWdEaXJlY3RpdmUgZXh0ZW5kcyBJZ3hEcmFnRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHJvdzogSWd4Um93Q29tcG9uZW50PElneEdyaWRCYXNlQ29tcG9uZW50ICYgSUdyaWREYXRhQmluZGFibGU+O1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uJDogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgX3Jvd0RyYWdTdGFydGVkID0gZmFsc2U7XG5cbiAgICBASW5wdXQoJ2lneFJvd0RyYWcnKVxuICAgIHNldCBkYXRhKHZhbCkge1xuICAgICAgICB0aGlzLnJvdyA9IHZhbDtcbiAgICB9XG5cbiAgICBnZXQgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93O1xuICAgIH1cblxuICAgIHB1YmxpYyBvblBvaW50ZXJEb3duKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuX3Jvd0RyYWdTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHN1cGVyLm9uUG9pbnRlckRvd24oZXZlbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblBvaW50ZXJNb3ZlKGV2ZW50KSB7XG4gICAgICAgIHN1cGVyLm9uUG9pbnRlck1vdmUoZXZlbnQpO1xuICAgICAgICBpZiAodGhpcy5fZHJhZ1N0YXJ0ZWQgJiYgIXRoaXMuX3Jvd0RyYWdTdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3dEcmFnU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBhcmdzOiBJUm93RHJhZ1N0YXJ0RXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgICAgIG93bmVyOiB0aGlzLFxuICAgICAgICAgICAgICAgIGRyYWdEYXRhOiB0aGlzLnJvdyxcbiAgICAgICAgICAgICAgICBjYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnJvdy5ncmlkLm9uUm93RHJhZ1N0YXJ0LmVtaXQoYXJncyk7XG4gICAgICAgICAgICBpZiAoYXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdHaG9zdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZHJhZ0dob3N0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdHaG9zdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yb3cuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yb3cuZ3JpZC5yb3dEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvdy5ncmlkLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiQgPSBmcm9tRXZlbnQodGhpcy5yb3cuZ3JpZC5kb2N1bWVudC5kZWZhdWx0VmlldywgJ2tleWRvd24nKS5zdWJzY3JpYmUoKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2LmtleSA9PT0gS0VZUy5FU0NBUEUgfHwgZXYua2V5ID09PSBLRVlTLkVTQ0FQRV9JRSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RHJvcEFyZWEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblBvaW50ZXJVcChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25Qb2ludGVyVXAoZXZlbnQpIHtcblxuICAgICAgICBpZiAoIXRoaXMuX2NsaWNrZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFyZ3M6IElSb3dEcmFnRW5kRXZlbnRBcmdzID0ge1xuICAgICAgICAgICAgb3duZXI6IHRoaXMsXG4gICAgICAgICAgICBkcmFnRGF0YTogdGhpcy5yb3csXG4gICAgICAgICAgICBhbmltYXRpb246IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb3cuZ3JpZC5vblJvd0RyYWdFbmQuZW1pdChhcmdzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGFyZ3MuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVPblJlbGVhc2UgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZHJvcEFyZWEgPSB0aGlzLl9sYXN0RHJvcEFyZWE7XG4gICAgICAgIHN1cGVyLm9uUG9pbnRlclVwKGV2ZW50KTtcbiAgICAgICAgaWYgKCFkcm9wQXJlYSAmJiB0aGlzLmFuaW1hdGVPblJlbGVhc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0dob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAgdGhpcy50cmFuc2l0aW9uRW5kRXZlbnQsIGZhbHNlKTtcbiAgICAgICAgfSAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbmREcmFnZ2luZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZURyYWdHaG9zdChldmVudCkge1xuICAgICAgICB0aGlzLnJvdy5ncmlkLmVuZEVkaXQodHJ1ZSk7XG4gICAgICAgIHRoaXMucm93LmdyaWQubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHN1cGVyLmNyZWF0ZURyYWdHaG9zdChldmVudCwgdGhpcy5yb3cubmF0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgZ2hvc3QgPSB0aGlzLmRyYWdHaG9zdDtcblxuICAgICAgICBjb25zdCBncmlkUmVjdCA9IHRoaXMucm93LmdyaWQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3Qgcm93UmVjdCA9IHRoaXMucm93Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGdob3N0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIGdob3N0LnN0eWxlLndpZHRoID0gZ3JpZFJlY3Qud2lkdGggKyAncHgnO1xuICAgICAgICBnaG9zdC5zdHlsZS5oZWlnaHQgPSByb3dSZWN0LmhlaWdodCArICdweCc7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhnaG9zdCwgZ2hvc3RCYWNrZ3JvdW5kQ2xhc3MpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGdob3N0LCByb3dTZWxlY3RlZENsYXNzKTtcblxuICAgICAgICBjb25zdCBnaG9zdENlbGxzID0gZ2hvc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShncmlkQ2VsbENsYXNzKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdob3N0Q2VsbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGdob3N0Q2VsbHNbaW5kZXhdLCBjZWxsU2VsZWN0ZWRDbGFzcyk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGdob3N0Q2VsbHNbaW5kZXhdLCBjZWxsQWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbiQgJiYgIXRoaXMuc3Vic2NyaXB0aW9uJC5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uJC51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbmREcmFnZ2luZygpIHtcbiAgICAgICAgdGhpcy5vblRyYW5zaXRpb25FbmQobnVsbCk7XG4gICAgICAgIHRoaXMucm93LmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm93LmdyaWQucm93RHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3cuZ3JpZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5fdW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyYW5zaXRpb25FbmRFdmVudCA9IChldnQ/KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdHaG9zdCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMudHJhbnNpdGlvbkVuZEV2ZW50LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmREcmFnZ2luZygpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneERyYWdJbmRpY2F0b3JJY29uXSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hEcmFnSW5kaWNhdG9ySWNvbkRpcmVjdGl2ZSB7XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4Um93RHJhZ0RpcmVjdGl2ZSwgSWd4RHJhZ0luZGljYXRvckljb25EaXJlY3RpdmVdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW10sXG4gICAgZXhwb3J0czogW0lneFJvd0RyYWdEaXJlY3RpdmUsIElneERyYWdJbmRpY2F0b3JJY29uRGlyZWN0aXZlXSxcbiAgICBpbXBvcnRzOiBbXVxufSlcblxuZXhwb3J0IGNsYXNzIElneFJvd0RyYWdNb2R1bGUge1xufVxuIl19