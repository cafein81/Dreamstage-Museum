/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, NgModule } from '@angular/core';
import { IgxDragDirective } from '../directives/dragdrop/dragdrop.directive';
import { fromEvent } from 'rxjs';
/** @type {?} */
var ghostBackgroundClass = 'igx-grid__tr--ghost';
/** @type {?} */
var gridCellClass = 'igx-grid__td';
/** @type {?} */
var rowSelectedClass = 'igx-grid__tr--selected';
/** @type {?} */
var cellSelectedClass = 'igx-grid__td--selected';
/** @type {?} */
var cellActiveClass = 'igx-grid__td--active';
/**
 * @hidden
 */
var IgxRowDragDirective = /** @class */ (function (_super) {
    tslib_1.__extends(IgxRowDragDirective, _super);
    function IgxRowDragDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rowDragStarted = false;
        _this.transitionEndEvent = function (evt) {
            if (_this.dragGhost) {
                _this.dragGhost.removeEventListener('transitionend', _this.transitionEndEvent, false);
            }
            _this.endDragging();
        };
        return _this;
    }
    Object.defineProperty(IgxRowDragDirective.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this.row;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.row = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    IgxRowDragDirective.prototype.onPointerDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this._rowDragStarted = false;
        _super.prototype.onPointerDown.call(this, event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxRowDragDirective.prototype.onPointerMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        _super.prototype.onPointerMove.call(this, event);
        if (this._dragStarted && !this._rowDragStarted) {
            this._rowDragStarted = true;
            /** @type {?} */
            var args = {
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
            this.subscription$ = fromEvent(this.row.grid.document.defaultView, 'keydown').subscribe(function (ev) {
                if (ev.key === "Escape" /* ESCAPE */ || ev.key === "Esc" /* ESCAPE_IE */) {
                    _this._lastDropArea = false;
                    _this.onPointerUp(event);
                }
            });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxRowDragDirective.prototype.onPointerUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this._clicked) {
            return;
        }
        /** @type {?} */
        var args = {
            owner: this,
            dragData: this.row,
            animation: false
        };
        this.zone.run(function () {
            _this.row.grid.onRowDragEnd.emit(args);
        });
        if (args.animation) {
            this.animateOnRelease = true;
        }
        /** @type {?} */
        var dropArea = this._lastDropArea;
        _super.prototype.onPointerUp.call(this, event);
        if (!dropArea && this.animateOnRelease) {
            this.dragGhost.addEventListener('transitionend', this.transitionEndEvent, false);
        }
        else {
            this.endDragging();
        }
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    IgxRowDragDirective.prototype.createDragGhost = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.row.grid.endEdit(true);
        this.row.grid.markForCheck();
        _super.prototype.createDragGhost.call(this, event, this.row.nativeElement);
        /** @type {?} */
        var ghost = this.dragGhost;
        /** @type {?} */
        var gridRect = this.row.grid.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var rowRect = this.row.nativeElement.getBoundingClientRect();
        ghost.style.overflow = 'hidden';
        ghost.style.width = gridRect.width + 'px';
        ghost.style.height = rowRect.height + 'px';
        this.renderer.addClass(ghost, ghostBackgroundClass);
        this.renderer.removeClass(ghost, rowSelectedClass);
        /** @type {?} */
        var ghostCells = ghost.getElementsByClassName(gridCellClass);
        for (var index = 0; index < ghostCells.length; index++) {
            this.renderer.removeClass(ghostCells[index], cellSelectedClass);
            this.renderer.removeClass(ghostCells[index], cellActiveClass);
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxRowDragDirective.prototype._unsubscribe = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.subscription$ && !this.subscription$.closed) {
            this.subscription$.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxRowDragDirective.prototype.endDragging = /**
     * @private
     * @return {?}
     */
    function () {
        this.onTransitionEnd(null);
        this.row.dragging = false;
        this.row.grid.rowDragging = false;
        this.row.grid.markForCheck();
        this._unsubscribe();
    };
    IgxRowDragDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxRowDrag]'
                },] }
    ];
    IgxRowDragDirective.propDecorators = {
        data: [{ type: Input, args: ['igxRowDrag',] }]
    };
    return IgxRowDragDirective;
}(IgxDragDirective));
export { IgxRowDragDirective };
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
var IgxDragIndicatorIconDirective = /** @class */ (function () {
    function IgxDragIndicatorIconDirective() {
    }
    IgxDragIndicatorIconDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxDragIndicatorIcon]'
                },] }
    ];
    return IgxDragIndicatorIconDirective;
}());
export { IgxDragIndicatorIconDirective };
var IgxRowDragModule = /** @class */ (function () {
    function IgxRowDragModule() {
    }
    IgxRowDragModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxRowDragDirective, IgxDragIndicatorIconDirective],
                    entryComponents: [],
                    exports: [IgxRowDragDirective, IgxDragIndicatorIconDirective],
                    imports: []
                },] }
    ];
    return IgxRowDragModule;
}());
export { IgxRowDragModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWRyYWcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9yb3ctZHJhZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFHN0UsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7O0lBSXpDLG9CQUFvQixHQUFHLHFCQUFxQjs7SUFDNUMsYUFBYSxHQUFHLGNBQWM7O0lBQzlCLGdCQUFnQixHQUFHLHdCQUF3Qjs7SUFDM0MsaUJBQWlCLEdBQUcsd0JBQXdCOztJQUM1QyxlQUFlLEdBQUcsc0JBQXNCOzs7O0FBSzlDO0lBR3lDLCtDQUFnQjtJQUh6RDtRQUFBLHFFQTZIQztRQXZIVyxxQkFBZSxHQUFHLEtBQUssQ0FBQztRQWlIeEIsd0JBQWtCLEdBQUcsVUFBQyxHQUFJO1lBQzlCLElBQUksS0FBSSxDQUFDLFNBQVMsRUFBRTtnQkFDaEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3ZGO1lBQ0QsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQTs7SUFDTCxDQUFDO0lBckhHLHNCQUNJLHFDQUFJOzs7O1FBSVI7WUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQzs7Ozs7UUFQRCxVQUNTLEdBQUc7WUFDUixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNuQixDQUFDOzs7T0FBQTs7Ozs7SUFNTSwyQ0FBYTs7OztJQUFwQixVQUFxQixLQUFLO1FBQ3RCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixpQkFBTSxhQUFhLFlBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFTSwyQ0FBYTs7OztJQUFwQixVQUFxQixLQUFLO1FBQTFCLGlCQTZCQztRQTVCRyxpQkFBTSxhQUFhLFlBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQzs7Z0JBQ3RCLElBQUksR0FBMkI7Z0JBQ2pDLEtBQUssRUFBRSxJQUFJO2dCQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDbEIsTUFBTSxFQUFFLEtBQUs7YUFDaEI7WUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUU3QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUN0RyxJQUFJLEVBQUUsQ0FBQyxHQUFHLDBCQUFnQixJQUFJLEVBQUUsQ0FBQyxHQUFHLDBCQUFtQixFQUFFO29CQUNyRCxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztvQkFDM0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDM0I7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQzs7Ozs7SUFFTSx5Q0FBVzs7OztJQUFsQixVQUFtQixLQUFLO1FBQXhCLGlCQTBCQztRQXhCRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixPQUFPO1NBQ1Y7O1lBRUssSUFBSSxHQUF5QjtZQUMvQixLQUFLLEVBQUUsSUFBSTtZQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNsQixTQUFTLEVBQUUsS0FBSztTQUNuQjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1YsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDOztZQUVLLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYTtRQUNuQyxpQkFBTSxXQUFXLFlBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JGO2FBQVE7WUFDTCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDOzs7Ozs7SUFFUyw2Q0FBZTs7Ozs7SUFBekIsVUFBMEIsS0FBSztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0IsaUJBQU0sZUFBZSxZQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztZQUUvQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVM7O1lBRXRCLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O1lBQzlELE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTtRQUM5RCxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDaEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDMUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7O1lBRTdDLFVBQVUsR0FBRyxLQUFLLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDO1FBQzlELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztTQUNqRTtJQUNMLENBQUM7Ozs7O0lBRU8sMENBQVk7Ozs7SUFBcEI7UUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyx5Q0FBVzs7OztJQUFuQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7O2dCQXJISixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7aUJBQzNCOzs7dUJBTUksS0FBSyxTQUFDLFlBQVk7O0lBcUh2QiwwQkFBQztDQUFBLEFBN0hELENBR3lDLGdCQUFnQixHQTBIeEQ7U0ExSFksbUJBQW1COzs7Ozs7SUFDNUIsa0NBQXVFOzs7OztJQUN2RSw0Q0FBb0M7Ozs7O0lBQ3BDLDhDQUFnQzs7Ozs7SUFpSGhDLGlEQUtDOzs7OztBQU1MO0lBQUE7SUFLQSxDQUFDOztnQkFMQSxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtpQkFDckM7O0lBR0Qsb0NBQUM7Q0FBQSxBQUxELElBS0M7U0FEWSw2QkFBNkI7QUFHMUM7SUFBQTtJQVFBLENBQUM7O2dCQVJBLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSw2QkFBNkIsQ0FBQztvQkFDbEUsZUFBZSxFQUFFLEVBQUU7b0JBQ25CLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLDZCQUE2QixDQUFDO29CQUM3RCxPQUFPLEVBQUUsRUFBRTtpQkFDZDs7SUFHRCx1QkFBQztDQUFBLEFBUkQsSUFRQztTQURZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uRGVzdHJveSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneERyYWdEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2RyYWdkcm9wL2RyYWdkcm9wLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJUm93RHJhZ0VuZEV2ZW50QXJncywgSVJvd0RyYWdTdGFydEV2ZW50QXJncyB9IGZyb20gJy4vZ3JpZC1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBLRVlTIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSWd4Um93Q29tcG9uZW50LCBJZ3hHcmlkQmFzZUNvbXBvbmVudCwgSUdyaWREYXRhQmluZGFibGUgfSBmcm9tICcuL2dyaWQnO1xuXG5cbmNvbnN0IGdob3N0QmFja2dyb3VuZENsYXNzID0gJ2lneC1ncmlkX190ci0tZ2hvc3QnO1xuY29uc3QgZ3JpZENlbGxDbGFzcyA9ICdpZ3gtZ3JpZF9fdGQnO1xuY29uc3Qgcm93U2VsZWN0ZWRDbGFzcyA9ICdpZ3gtZ3JpZF9fdHItLXNlbGVjdGVkJztcbmNvbnN0IGNlbGxTZWxlY3RlZENsYXNzID0gJ2lneC1ncmlkX190ZC0tc2VsZWN0ZWQnO1xuY29uc3QgY2VsbEFjdGl2ZUNsYXNzID0gJ2lneC1ncmlkX190ZC0tYWN0aXZlJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneFJvd0RyYWddJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hSb3dEcmFnRGlyZWN0aXZlIGV4dGVuZHMgSWd4RHJhZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSByb3c6IElneFJvd0NvbXBvbmVudDxJZ3hHcmlkQmFzZUNvbXBvbmVudCAmIElHcmlkRGF0YUJpbmRhYmxlPjtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbiQ6IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIF9yb3dEcmFnU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgQElucHV0KCdpZ3hSb3dEcmFnJylcbiAgICBzZXQgZGF0YSh2YWwpIHtcbiAgICAgICAgdGhpcy5yb3cgPSB2YWw7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdztcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Qb2ludGVyRG93bihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9yb3dEcmFnU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICBzdXBlci5vblBvaW50ZXJEb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Qb2ludGVyTW92ZShldmVudCkge1xuICAgICAgICBzdXBlci5vblBvaW50ZXJNb3ZlKGV2ZW50KTtcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdTdGFydGVkICYmICF0aGlzLl9yb3dEcmFnU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5fcm93RHJhZ1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgYXJnczogSVJvd0RyYWdTdGFydEV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgICAgICBvd25lcjogdGhpcyxcbiAgICAgICAgICAgICAgICBkcmFnRGF0YTogdGhpcy5yb3csXG4gICAgICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5yb3cuZ3JpZC5vblJvd0RyYWdTdGFydC5lbWl0KGFyZ3MpO1xuICAgICAgICAgICAgaWYgKGFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRyYWdHaG9zdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnR2hvc3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdTdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucm93LmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucm93LmdyaWQucm93RHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yb3cuZ3JpZC5tYXJrRm9yQ2hlY2soKTtcblxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24kID0gZnJvbUV2ZW50KHRoaXMucm93LmdyaWQuZG9jdW1lbnQuZGVmYXVsdFZpZXcsICdrZXlkb3duJykuc3Vic2NyaWJlKChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldi5rZXkgPT09IEtFWVMuRVNDQVBFIHx8IGV2LmtleSA9PT0gS0VZUy5FU0NBUEVfSUUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdERyb3BBcmVhID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Qb2ludGVyVXAoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uUG9pbnRlclVwKGV2ZW50KSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9jbGlja2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcmdzOiBJUm93RHJhZ0VuZEV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgIG93bmVyOiB0aGlzLFxuICAgICAgICAgICAgZHJhZ0RhdGE6IHRoaXMucm93LFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucm93LmdyaWQub25Sb3dEcmFnRW5kLmVtaXQoYXJncyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChhcmdzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlT25SZWxlYXNlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRyb3BBcmVhID0gdGhpcy5fbGFzdERyb3BBcmVhO1xuICAgICAgICBzdXBlci5vblBvaW50ZXJVcChldmVudCk7XG4gICAgICAgIGlmICghZHJvcEFyZWEgJiYgdGhpcy5hbmltYXRlT25SZWxlYXNlKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdHaG9zdC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgIHRoaXMudHJhbnNpdGlvbkVuZEV2ZW50LCBmYWxzZSk7XG4gICAgICAgIH0gICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5kRHJhZ2dpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVEcmFnR2hvc3QoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5yb3cuZ3JpZC5lbmRFZGl0KHRydWUpO1xuICAgICAgICB0aGlzLnJvdy5ncmlkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICBzdXBlci5jcmVhdGVEcmFnR2hvc3QoZXZlbnQsIHRoaXMucm93Lm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IGdob3N0ID0gdGhpcy5kcmFnR2hvc3Q7XG5cbiAgICAgICAgY29uc3QgZ3JpZFJlY3QgPSB0aGlzLnJvdy5ncmlkLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHJvd1JlY3QgPSB0aGlzLnJvdy5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBnaG9zdC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICBnaG9zdC5zdHlsZS53aWR0aCA9IGdyaWRSZWN0LndpZHRoICsgJ3B4JztcbiAgICAgICAgZ2hvc3Quc3R5bGUuaGVpZ2h0ID0gcm93UmVjdC5oZWlnaHQgKyAncHgnO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZ2hvc3QsIGdob3N0QmFja2dyb3VuZENsYXNzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhnaG9zdCwgcm93U2VsZWN0ZWRDbGFzcyk7XG5cbiAgICAgICAgY29uc3QgZ2hvc3RDZWxscyA9IGdob3N0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZ3JpZENlbGxDbGFzcyk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBnaG9zdENlbGxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhnaG9zdENlbGxzW2luZGV4XSwgY2VsbFNlbGVjdGVkQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhnaG9zdENlbGxzW2luZGV4XSwgY2VsbEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3Vuc3Vic2NyaWJlKCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24kICYmICF0aGlzLnN1YnNjcmlwdGlvbiQuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZW5kRHJhZ2dpbmcoKSB7XG4gICAgICAgIHRoaXMub25UcmFuc2l0aW9uRW5kKG51bGwpO1xuICAgICAgICB0aGlzLnJvdy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdy5ncmlkLnJvd0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm93LmdyaWQubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cmFuc2l0aW9uRW5kRXZlbnQgPSAoZXZ0PykgPT4ge1xuICAgICAgICBpZiAodGhpcy5kcmFnR2hvc3QpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0dob3N0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25FbmRFdmVudCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5kRHJhZ2dpbmcoKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hEcmFnSW5kaWNhdG9ySWNvbl0nXG59KVxuXG5leHBvcnQgY2xhc3MgSWd4RHJhZ0luZGljYXRvckljb25EaXJlY3RpdmUge1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneFJvd0RyYWdEaXJlY3RpdmUsIElneERyYWdJbmRpY2F0b3JJY29uRGlyZWN0aXZlXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtdLFxuICAgIGV4cG9ydHM6IFtJZ3hSb3dEcmFnRGlyZWN0aXZlLCBJZ3hEcmFnSW5kaWNhdG9ySWNvbkRpcmVjdGl2ZV0sXG4gICAgaW1wb3J0czogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hSb3dEcmFnTW9kdWxlIHtcbn1cbiJdfQ==