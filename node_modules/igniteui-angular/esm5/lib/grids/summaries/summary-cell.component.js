/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, HostListener, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { IgxColumnComponent } from '../column.component';
import { IgxGridSelectionService } from '../../core/grid-selection';
import { SUPPORTED_KEYS } from '../../core/utils';
var IgxSummaryCellComponent = /** @class */ (function () {
    function IgxSummaryCellComponent(element, selectionService) {
        this.element = element;
        this.selectionService = selectionService;
        this.firstCellIndentation = 0;
        this.hasSummary = false;
        this.tabindex = 0;
    }
    Object.defineProperty(IgxSummaryCellComponent.prototype, "visibleColumnIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.visibleIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSummaryCellComponent.prototype, "describeby", {
        get: /**
         * @return {?}
         */
        function () {
            return "Summary_" + this.column.field;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxSummaryCellComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.focused = true;
    };
    /**
     * @return {?}
     */
    IgxSummaryCellComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.focused = false;
    };
    Object.defineProperty(IgxSummaryCellComponent.prototype, "selectionNode", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return {
                row: this.rowIndex,
                column: this.column.columnLayoutChild ? this.column.parent.visibleIndex : this.visibleColumnIndex,
                isSummaryRow: true
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    IgxSummaryCellComponent.prototype.dispatchEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // TODO: Refactor
        /** @type {?} */
        var key = event.key.toLowerCase();
        /** @type {?} */
        var ctrl = event.ctrlKey;
        /** @type {?} */
        var shift = event.shiftKey;
        if (!SUPPORTED_KEYS.has(key)) {
            return;
        }
        event.stopPropagation();
        /** @type {?} */
        var args = { targetType: 'summaryCell', target: this, event: event, cancel: false };
        this.grid.onGridKeydown.emit(args);
        if (args.cancel) {
            return;
        }
        event.preventDefault();
        if (!this.isKeySupportedInCell(key, ctrl)) {
            return;
        }
        this.selectionService.keyboardState.shift = shift && !(key === 'tab');
        /** @type {?} */
        var row = this.getRowElementByIndex(this.rowIndex);
        switch (key) {
            case 'tab':
                if (shift) {
                    this.grid.navigation.performShiftTabKey(row, this.selectionNode);
                    break;
                }
                this.grid.navigation.performTab(row, this.selectionNode);
                break;
            case 'arrowleft':
            case 'home':
            case 'left':
                if (ctrl || key === 'home') {
                    this.grid.navigation.onKeydownHome(this.rowIndex, true);
                    break;
                }
                this.grid.navigation.onKeydownArrowLeft(this.nativeElement, this.selectionNode);
                break;
            case 'end':
            case 'arrowright':
            case 'right':
                if (ctrl || key === 'end') {
                    this.grid.navigation.onKeydownEnd(this.rowIndex, true);
                    break;
                }
                this.grid.navigation.onKeydownArrowRight(this.nativeElement, this.selectionNode);
                break;
            case 'arrowup':
            case 'up':
                this.grid.navigation.navigateUp(row, this.selectionNode);
                break;
            case 'arrowdown':
            case 'down':
                this.grid.navigation.navigateDown(row, this.selectionNode);
                break;
        }
    };
    Object.defineProperty(IgxSummaryCellComponent.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.getCellWidth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSummaryCellComponent.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSummaryCellComponent.prototype, "columnDatatype", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.dataType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSummaryCellComponent.prototype, "itemHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.grid.defaultSummaryHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSummaryCellComponent.prototype, "grid", {
        /**
        * @hidden
        */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ (this.column.grid)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} rowIndex
     * @return {?}
     */
    IgxSummaryCellComponent.prototype.getRowElementByIndex = /**
     * @private
     * @param {?} rowIndex
     * @return {?}
     */
    function (rowIndex) {
        /** @type {?} */
        var summaryRows = this.grid.summariesRowList.toArray();
        return summaryRows.find(function (sr) { return sr.dataRowIndex === rowIndex; }).nativeElement;
    };
    /**
     * @private
     * @param {?} key
     * @param {?} ctrl
     * @return {?}
     */
    IgxSummaryCellComponent.prototype.isKeySupportedInCell = /**
     * @private
     * @param {?} key
     * @param {?} ctrl
     * @return {?}
     */
    function (key, ctrl) {
        if (ctrl) {
            return ['arrowup', 'arrowdown', 'up', 'down', 'end', 'home'].indexOf(key) === -1;
        }
        return ['down', 'up', 'left', 'right', 'arrowdown', 'arrowup', 'arrowleft', 'arrowright', 'home', 'end', 'tab'].indexOf(key) !== -1;
    };
    /**
     * @param {?} summary
     * @return {?}
     */
    IgxSummaryCellComponent.prototype.translateSummary = /**
     * @param {?} summary
     * @return {?}
     */
    function (summary) {
        return this.grid.resourceStrings["igx_grid_summary_" + summary.key] || summary.label;
    };
    IgxSummaryCellComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-grid-summary-cell',
                    template: "<ng-container *ngIf=\"hasSummary\">\n    <ng-container *ngFor=\"let summary of summaryResults\">\n            <div class=\"igx-grid-summary__item\" [style.height.px]=\"itemHeight\">\n\n                <ng-container *ngIf=\"visibleColumnIndex === 0 && firstCellIndentation >= 0\">\n                    <div class=\"igx-grid__tree-cell--padding-level-{{firstCellIndentation}}\"></div>\n\n                    <div #indicator class=\"igx-grid__tree-grouping-indicator\" style=\"visibility: hidden\">\n                        <igx-icon fontSet=\"material\">chevron_right</igx-icon>\n                    </div>\n                </ng-container>\n\n                <span class=\"igx-grid-summary__label\" title=\"{{ summary.label }}\">{{ translateSummary(summary) }}</span>\n                <span class=\"igx-grid-summary__result\" title=\"{{ summary.summaryResult }}\">\n                    {{ columnDatatype === 'number' ? (summary.summaryResult | igxdecimal: grid.locale) : columnDatatype === 'date' ? (summary.summaryResult | igxdate: grid.locale) : (summary.summaryResult) }}\n                </span>\n            </div>\n    </ng-container>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    IgxSummaryCellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: IgxGridSelectionService }
    ]; };
    IgxSummaryCellComponent.propDecorators = {
        summaryResults: [{ type: Input }],
        column: [{ type: Input }],
        firstCellIndentation: [{ type: Input }],
        hasSummary: [{ type: Input }],
        density: [{ type: Input }],
        rowIndex: [{ type: Input }, { type: HostBinding, args: ['attr.data-rowIndex',] }],
        visibleColumnIndex: [{ type: HostBinding, args: ['attr.data-visibleIndex',] }],
        tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
        describeby: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
        focused: [{ type: HostBinding, args: ['class.igx-grid-summary--active',] }],
        onFocus: [{ type: HostListener, args: ['focus',] }],
        onBlur: [{ type: HostListener, args: ['blur',] }],
        dispatchEvent: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        width: [{ type: HostBinding, args: ['style.min-width',] }, { type: HostBinding, args: ['style.max-width',] }, { type: HostBinding, args: ['style.flex-basis',] }]
    };
    return IgxSummaryCellComponent;
}());
export { IgxSummaryCellComponent };
if (false) {
    /** @type {?} */
    IgxSummaryCellComponent.prototype.summaryResults;
    /** @type {?} */
    IgxSummaryCellComponent.prototype.column;
    /** @type {?} */
    IgxSummaryCellComponent.prototype.firstCellIndentation;
    /** @type {?} */
    IgxSummaryCellComponent.prototype.hasSummary;
    /** @type {?} */
    IgxSummaryCellComponent.prototype.density;
    /** @type {?} */
    IgxSummaryCellComponent.prototype.rowIndex;
    /** @type {?} */
    IgxSummaryCellComponent.prototype.tabindex;
    /** @type {?} */
    IgxSummaryCellComponent.prototype.focused;
    /**
     * @type {?}
     * @private
     */
    IgxSummaryCellComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    IgxSummaryCellComponent.prototype.selectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvc3VtbWFyaWVzL3N1bW1hcnktY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXpELE9BQU8sRUFBRSx1QkFBdUIsRUFBa0IsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQ7SUF1QkksaUNBQW9CLE9BQW1CLEVBQVUsZ0JBQXlDO1FBQXRFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBUm5GLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUd6QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBa0JuQixhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBWnBCLENBQUM7SUFNRCxzQkFDSSx1REFBa0I7Ozs7UUFEdEI7WUFFSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBS0Qsc0JBQ1csK0NBQVU7Ozs7UUFEckI7WUFFSSxPQUFPLGFBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFPLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7Ozs7SUFNTSx5Q0FBTzs7O0lBRGQ7UUFFSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOzs7O0lBR00sd0NBQU07OztJQURiO1FBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELHNC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LFNBQUMsZ0NBQWdDOzBCQUc1QyxZQUFZLFNBQUMsT0FBTzt5QkFLcEIsWUFBWSxTQUFDLE1BQU07Z0NBYW5CLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBMkRsQyxXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLFdBQVcsU0FBQyxpQkFBaUIsY0FDN0IsV0FBVyxTQUFDLGtCQUFrQjs7SUF1Q25DLDhCQUFDO0NBQUEsQUFwS0QsSUFvS0M7U0E5SlksdUJBQXVCOzs7SUFFaEMsaURBQzBDOztJQUUxQyx5Q0FDa0M7O0lBRWxDLHVEQUNnQzs7SUFFaEMsNkNBQzBCOztJQUUxQiwwQ0FDZTs7SUFLZiwyQ0FFd0I7O0lBT3hCLDJDQUNvQjs7SUFPcEIsMENBQ3dCOzs7OztJQXJCWiwwQ0FBMkI7Ozs7O0lBQUUsbURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneFN1bW1hcnlSZXN1bHQgfSBmcm9tICcuL2dyaWQtc3VtbWFyeSc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vZGF0YS1vcGVyYXRpb25zL2RhdGEtdXRpbCc7XG5pbXBvcnQgeyBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSwgSVNlbGVjdGlvbk5vZGUgfSBmcm9tICcuLi8uLi9jb3JlL2dyaWQtc2VsZWN0aW9uJztcbmltcG9ydCB7IFNVUFBPUlRFRF9LRVlTIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LWdyaWQtc3VtbWFyeS1jZWxsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc3VtbWFyeS1jZWxsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hTdW1tYXJ5Q2VsbENvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzdW1tYXJ5UmVzdWx0czogSWd4U3VtbWFyeVJlc3VsdFtdO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQ7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBmaXJzdENlbGxJbmRlbnRhdGlvbiA9IDA7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoYXNTdW1tYXJ5ID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkZW5zaXR5O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHNlbGVjdGlvblNlcnZpY2U6IElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1yb3dJbmRleCcpXG4gICAgcHVibGljIHJvd0luZGV4OiBudW1iZXI7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS12aXNpYmxlSW5kZXgnKVxuICAgIGdldCB2aXNpYmxlQ29sdW1uSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLnZpc2libGVJbmRleDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICAgIHB1YmxpYyB0YWJpbmRleCA9IDA7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpXG4gICAgcHVibGljIGdldCBkZXNjcmliZWJ5KCkge1xuICAgICAgICByZXR1cm4gYFN1bW1hcnlfJHt0aGlzLmNvbHVtbi5maWVsZH1gO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWdyaWQtc3VtbWFyeS0tYWN0aXZlJylcbiAgICBwdWJsaWMgZm9jdXNlZDogYm9vbGVhbjtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcbiAgICBwdWJsaWMgb25Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgICBwdWJsaWMgb25CbHVyKCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNlbGVjdGlvbk5vZGUoKTogSVNlbGVjdGlvbk5vZGUge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93OiB0aGlzLnJvd0luZGV4LFxuICAgICAgICAgICAgY29sdW1uOiB0aGlzLmNvbHVtbi5jb2x1bW5MYXlvdXRDaGlsZCA/IHRoaXMuY29sdW1uLnBhcmVudC52aXNpYmxlSW5kZXggOiB0aGlzLnZpc2libGVDb2x1bW5JbmRleCxcbiAgICAgICAgICAgIGlzU3VtbWFyeVJvdzogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgLy8gVE9ETzogUmVmYWN0b3JcbiAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGN0cmwgPSBldmVudC5jdHJsS2V5O1xuICAgICAgICBjb25zdCBzaGlmdCA9IGV2ZW50LnNoaWZ0S2V5O1xuXG4gICAgICAgIGlmICghU1VQUE9SVEVEX0tFWVMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgYXJncyA9IHsgdGFyZ2V0VHlwZTogJ3N1bW1hcnlDZWxsJywgdGFyZ2V0OiB0aGlzLCBldmVudDogZXZlbnQsIGNhbmNlbDogZmFsc2UgfTtcbiAgICAgICAgdGhpcy5ncmlkLm9uR3JpZEtleWRvd24uZW1pdChhcmdzKTtcbiAgICAgICAgaWYgKGFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNLZXlTdXBwb3J0ZWRJbkNlbGwoa2V5LCBjdHJsKSkgeyByZXR1cm47IH1cblxuICAgICAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2Uua2V5Ym9hcmRTdGF0ZS5zaGlmdCA9IHNoaWZ0ICYmICEoa2V5ID09PSAndGFiJyk7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ2V0Um93RWxlbWVudEJ5SW5kZXgodGhpcy5yb3dJbmRleCk7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICd0YWInOlxuICAgICAgICAgICAgICAgIGlmIChzaGlmdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5wZXJmb3JtU2hpZnRUYWJLZXkocm93LCB0aGlzLnNlbGVjdGlvbk5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ucGVyZm9ybVRhYihyb3csIHRoaXMuc2VsZWN0aW9uTm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcnJvd2xlZnQnOlxuICAgICAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICBpZiAoY3RybCB8fCBrZXkgPT09ICdob21lJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5vbktleWRvd25Ib21lKHRoaXMucm93SW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ub25LZXlkb3duQXJyb3dMZWZ0KHRoaXMubmF0aXZlRWxlbWVudCwgdGhpcy5zZWxlY3Rpb25Ob2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICBjYXNlICdhcnJvd3JpZ2h0JzpcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBpZiAoY3RybCB8fCBrZXkgPT09ICdlbmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLm9uS2V5ZG93bkVuZCh0aGlzLnJvd0luZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLm9uS2V5ZG93bkFycm93UmlnaHQodGhpcy5uYXRpdmVFbGVtZW50LCB0aGlzLnNlbGVjdGlvbk5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyb3d1cCc6XG4gICAgICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLm5hdmlnYXRlVXAocm93LCB0aGlzLnNlbGVjdGlvbk5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyb3dkb3duJzpcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5uYXZpZ2F0ZURvd24ocm93LCB0aGlzLnNlbGVjdGlvbk5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5taW4td2lkdGgnKVxuICAgIEBIb3N0QmluZGluZygnc3R5bGUubWF4LXdpZHRoJylcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmZsZXgtYmFzaXMnKVxuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmdldENlbGxXaWR0aCgpO1xuICAgIH1cblxuICAgIGdldCBuYXRpdmVFbGVtZW50KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBnZXQgY29sdW1uRGF0YXR5cGUoKTogRGF0YVR5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uZGF0YVR5cGU7XG4gICAgfVxuXG4gICAgZ2V0IGl0ZW1IZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi5ncmlkLmRlZmF1bHRTdW1tYXJ5SGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQGhpZGRlblxuICAgICovXG4gICAgcHVibGljIGdldCBncmlkKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY29sdW1uLmdyaWQgYXMgYW55KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJvd0VsZW1lbnRCeUluZGV4KHJvd0luZGV4KSB7XG4gICAgICAgIGNvbnN0IHN1bW1hcnlSb3dzID0gdGhpcy5ncmlkLnN1bW1hcmllc1Jvd0xpc3QudG9BcnJheSgpO1xuICAgICAgICByZXR1cm4gc3VtbWFyeVJvd3MuZmluZCgoc3IpID0+IHNyLmRhdGFSb3dJbmRleCA9PT0gcm93SW5kZXgpLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0tleVN1cHBvcnRlZEluQ2VsbChrZXksIGN0cmwpIHtcbiAgICAgICAgaWYgKGN0cmwpIHtcbiAgICAgICAgICAgcmV0dXJuIFsnYXJyb3d1cCcsICdhcnJvd2Rvd24nLCAndXAnLCAnZG93bicsICdlbmQnLCAnaG9tZSddLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsnZG93bicsICd1cCcsICdsZWZ0JywgJ3JpZ2h0JywgJ2Fycm93ZG93bicsICdhcnJvd3VwJywgJ2Fycm93bGVmdCcsICdhcnJvd3JpZ2h0JywgJ2hvbWUnLCAnZW5kJywgJ3RhYiddLmluZGV4T2Yoa2V5KSAhPT0gLTE7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zbGF0ZVN1bW1hcnkoc3VtbWFyeTogSWd4U3VtbWFyeVJlc3VsdCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQucmVzb3VyY2VTdHJpbmdzW2BpZ3hfZ3JpZF9zdW1tYXJ5XyR7c3VtbWFyeS5rZXl9YF0gfHwgc3VtbWFyeS5sYWJlbDtcbiAgICB9XG59XG4iXX0=