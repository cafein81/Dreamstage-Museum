/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, HostListener, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { IgxColumnComponent } from '../column.component';
import { IgxGridSelectionService } from '../../core/grid-selection';
import { SUPPORTED_KEYS } from '../../core/utils';
export class IgxSummaryCellComponent {
    /**
     * @param {?} element
     * @param {?} selectionService
     */
    constructor(element, selectionService) {
        this.element = element;
        this.selectionService = selectionService;
        this.firstCellIndentation = 0;
        this.hasSummary = false;
        this.tabindex = 0;
    }
    /**
     * @return {?}
     */
    get visibleColumnIndex() {
        return this.column.visibleIndex;
    }
    /**
     * @return {?}
     */
    get describeby() {
        return `Summary_${this.column.field}`;
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.focused = true;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.focused = false;
    }
    /**
     * @protected
     * @return {?}
     */
    get selectionNode() {
        return {
            row: this.rowIndex,
            column: this.column.columnLayoutChild ? this.column.parent.visibleIndex : this.visibleColumnIndex,
            isSummaryRow: true
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dispatchEvent(event) {
        // TODO: Refactor
        /** @type {?} */
        const key = event.key.toLowerCase();
        /** @type {?} */
        const ctrl = event.ctrlKey;
        /** @type {?} */
        const shift = event.shiftKey;
        if (!SUPPORTED_KEYS.has(key)) {
            return;
        }
        event.stopPropagation();
        /** @type {?} */
        const args = { targetType: 'summaryCell', target: this, event: event, cancel: false };
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
        const row = this.getRowElementByIndex(this.rowIndex);
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
    }
    /**
     * @return {?}
     */
    get width() {
        return this.column.getCellWidth();
    }
    /**
     * @return {?}
     */
    get nativeElement() {
        return this.element.nativeElement;
    }
    /**
     * @return {?}
     */
    get columnDatatype() {
        return this.column.dataType;
    }
    /**
     * @return {?}
     */
    get itemHeight() {
        return this.column.grid.defaultSummaryHeight;
    }
    /**
     * @hidden
     * @return {?}
     */
    get grid() {
        return ((/** @type {?} */ (this.column.grid)));
    }
    /**
     * @private
     * @param {?} rowIndex
     * @return {?}
     */
    getRowElementByIndex(rowIndex) {
        /** @type {?} */
        const summaryRows = this.grid.summariesRowList.toArray();
        return summaryRows.find((sr) => sr.dataRowIndex === rowIndex).nativeElement;
    }
    /**
     * @private
     * @param {?} key
     * @param {?} ctrl
     * @return {?}
     */
    isKeySupportedInCell(key, ctrl) {
        if (ctrl) {
            return ['arrowup', 'arrowdown', 'up', 'down', 'end', 'home'].indexOf(key) === -1;
        }
        return ['down', 'up', 'left', 'right', 'arrowdown', 'arrowup', 'arrowleft', 'arrowright', 'home', 'end', 'tab'].indexOf(key) !== -1;
    }
    /**
     * @param {?} summary
     * @return {?}
     */
    translateSummary(summary) {
        return this.grid.resourceStrings[`igx_grid_summary_${summary.key}`] || summary.label;
    }
}
IgxSummaryCellComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-grid-summary-cell',
                template: "<ng-container *ngIf=\"hasSummary\">\n    <ng-container *ngFor=\"let summary of summaryResults\">\n            <div class=\"igx-grid-summary__item\" [style.height.px]=\"itemHeight\">\n\n                <ng-container *ngIf=\"visibleColumnIndex === 0 && firstCellIndentation >= 0\">\n                    <div class=\"igx-grid__tree-cell--padding-level-{{firstCellIndentation}}\"></div>\n\n                    <div #indicator class=\"igx-grid__tree-grouping-indicator\" style=\"visibility: hidden\">\n                        <igx-icon fontSet=\"material\">chevron_right</igx-icon>\n                    </div>\n                </ng-container>\n\n                <span class=\"igx-grid-summary__label\" title=\"{{ summary.label }}\">{{ translateSummary(summary) }}</span>\n                <span class=\"igx-grid-summary__result\" title=\"{{ summary.summaryResult }}\">\n                    {{ columnDatatype === 'number' ? (summary.summaryResult | igxdecimal: grid.locale) : columnDatatype === 'date' ? (summary.summaryResult | igxdate: grid.locale) : (summary.summaryResult) }}\n                </span>\n            </div>\n    </ng-container>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
IgxSummaryCellComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: IgxGridSelectionService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvc3VtbWFyaWVzL3N1bW1hcnktY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXpELE9BQU8sRUFBRSx1QkFBdUIsRUFBa0IsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFRbEQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFpQmhDLFlBQW9CLE9BQW1CLEVBQVUsZ0JBQXlDO1FBQXRFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBUm5GLHlCQUFvQixHQUFHLENBQUMsQ0FBQztRQUd6QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBa0JuQixhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBWnBCLENBQUM7Ozs7SUFNRCxJQUNJLGtCQUFrQjtRQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFLRCxJQUNXLFVBQVU7UUFDakIsT0FBTyxXQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7OztJQU1NLE9BQU87UUFDVixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOzs7O0lBR00sTUFBTTtRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsSUFBYyxhQUFhO1FBQ3ZC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QkFBa0I7Ozs7SUFySC9CLGlEQUMwQzs7SUFFMUMseUNBQ2tDOztJQUVsQyx1REFDZ0M7O0lBRWhDLDZDQUMwQjs7SUFFMUIsMENBQ2U7O0lBS2YsMkNBRXdCOztJQU94QiwyQ0FDb0I7O0lBT3BCLDBDQUN3Qjs7Ozs7SUFyQlosMENBQTJCOzs7OztJQUFFLG1EQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hTdW1tYXJ5UmVzdWx0IH0gZnJvbSAnLi9ncmlkLXN1bW1hcnknO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uL2RhdGEtb3BlcmF0aW9ucy9kYXRhLXV0aWwnO1xuaW1wb3J0IHsgSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsIElTZWxlY3Rpb25Ob2RlIH0gZnJvbSAnLi4vLi4vY29yZS9ncmlkLXNlbGVjdGlvbic7XG5pbXBvcnQgeyBTVVBQT1JURURfS0VZUyB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1ncmlkLXN1bW1hcnktY2VsbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3N1bW1hcnktY2VsbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4U3VtbWFyeUNlbGxDb21wb25lbnQge1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc3VtbWFyeVJlc3VsdHM6IElneFN1bW1hcnlSZXN1bHRbXTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZmlyc3RDZWxsSW5kZW50YXRpb24gPSAwO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGFzU3VtbWFyeSA9IGZhbHNlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGVuc2l0eTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBzZWxlY3Rpb25TZXJ2aWNlOiBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSkge1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtcm93SW5kZXgnKVxuICAgIHB1YmxpYyByb3dJbmRleDogbnVtYmVyO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtdmlzaWJsZUluZGV4JylcbiAgICBnZXQgdmlzaWJsZUNvbHVtbkluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi52aXNpYmxlSW5kZXg7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBwdWJsaWMgdGFiaW5kZXggPSAwO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKVxuICAgIHB1YmxpYyBnZXQgZGVzY3JpYmVieSgpIHtcbiAgICAgICAgcmV0dXJuIGBTdW1tYXJ5XyR7dGhpcy5jb2x1bW4uZmllbGR9YDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1ncmlkLXN1bW1hcnktLWFjdGl2ZScpXG4gICAgcHVibGljIGZvY3VzZWQ6IGJvb2xlYW47XG5cbiAgICBASG9zdExpc3RlbmVyKCdmb2N1cycpXG4gICAgcHVibGljIG9uRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gICAgcHVibGljIG9uQmx1cigpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBzZWxlY3Rpb25Ob2RlKCk6IElTZWxlY3Rpb25Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvdzogdGhpcy5yb3dJbmRleCxcbiAgICAgICAgICAgIGNvbHVtbjogdGhpcy5jb2x1bW4uY29sdW1uTGF5b3V0Q2hpbGQgPyB0aGlzLmNvbHVtbi5wYXJlbnQudmlzaWJsZUluZGV4IDogdGhpcy52aXNpYmxlQ29sdW1uSW5kZXgsXG4gICAgICAgICAgICBpc1N1bW1hcnlSb3c6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vIFRPRE86IFJlZmFjdG9yXG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBjdHJsID0gZXZlbnQuY3RybEtleTtcbiAgICAgICAgY29uc3Qgc2hpZnQgPSBldmVudC5zaGlmdEtleTtcblxuICAgICAgICBpZiAoIVNVUFBPUlRFRF9LRVlTLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSB7IHRhcmdldFR5cGU6ICdzdW1tYXJ5Q2VsbCcsIHRhcmdldDogdGhpcywgZXZlbnQ6IGV2ZW50LCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgIHRoaXMuZ3JpZC5vbkdyaWRLZXlkb3duLmVtaXQoYXJncyk7XG4gICAgICAgIGlmIChhcmdzLmNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzS2V5U3VwcG9ydGVkSW5DZWxsKGtleSwgY3RybCkpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmtleWJvYXJkU3RhdGUuc2hpZnQgPSBzaGlmdCAmJiAhKGtleSA9PT0gJ3RhYicpO1xuICAgICAgICBjb25zdCByb3cgPSB0aGlzLmdldFJvd0VsZW1lbnRCeUluZGV4KHRoaXMucm93SW5kZXgpO1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAndGFiJzpcbiAgICAgICAgICAgICAgICBpZiAoc2hpZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ucGVyZm9ybVNoaWZ0VGFiS2V5KHJvdywgdGhpcy5zZWxlY3Rpb25Ob2RlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLnBlcmZvcm1UYWIocm93LCB0aGlzLnNlbGVjdGlvbk5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyb3dsZWZ0JzpcbiAgICAgICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgaWYgKGN0cmwgfHwga2V5ID09PSAnaG9tZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ub25LZXlkb3duSG9tZSh0aGlzLnJvd0luZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5uYXZpZ2F0aW9uLm9uS2V5ZG93bkFycm93TGVmdCh0aGlzLm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2VsZWN0aW9uTm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgY2FzZSAnYXJyb3dyaWdodCc6XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgaWYgKGN0cmwgfHwga2V5ID09PSAnZW5kJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5vbktleWRvd25FbmQodGhpcy5yb3dJbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5vbktleWRvd25BcnJvd1JpZ2h0KHRoaXMubmF0aXZlRWxlbWVudCwgdGhpcy5zZWxlY3Rpb25Ob2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Fycm93dXAnOlxuICAgICAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWQubmF2aWdhdGlvbi5uYXZpZ2F0ZVVwKHJvdywgdGhpcy5zZWxlY3Rpb25Ob2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Fycm93ZG93bic6XG4gICAgICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkLm5hdmlnYXRpb24ubmF2aWdhdGVEb3duKHJvdywgdGhpcy5zZWxlY3Rpb25Ob2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUubWluLXdpZHRoJylcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1heC13aWR0aCcpXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5mbGV4LWJhc2lzJylcbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi5nZXRDZWxsV2lkdGgoKTtcbiAgICB9XG5cbiAgICBnZXQgbmF0aXZlRWxlbWVudCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0IGNvbHVtbkRhdGF0eXBlKCk6IERhdGFUeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sdW1uLmRhdGFUeXBlO1xuICAgIH1cblxuICAgIGdldCBpdGVtSGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uZ3JpZC5kZWZhdWx0U3VtbWFyeUhlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBoaWRkZW5cbiAgICAqL1xuICAgIHB1YmxpYyBnZXQgZ3JpZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbHVtbi5ncmlkIGFzIGFueSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSb3dFbGVtZW50QnlJbmRleChyb3dJbmRleCkge1xuICAgICAgICBjb25zdCBzdW1tYXJ5Um93cyA9IHRoaXMuZ3JpZC5zdW1tYXJpZXNSb3dMaXN0LnRvQXJyYXkoKTtcbiAgICAgICAgcmV0dXJuIHN1bW1hcnlSb3dzLmZpbmQoKHNyKSA9PiBzci5kYXRhUm93SW5kZXggPT09IHJvd0luZGV4KS5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNLZXlTdXBwb3J0ZWRJbkNlbGwoa2V5LCBjdHJsKSB7XG4gICAgICAgIGlmIChjdHJsKSB7XG4gICAgICAgICAgIHJldHVybiBbJ2Fycm93dXAnLCAnYXJyb3dkb3duJywgJ3VwJywgJ2Rvd24nLCAnZW5kJywgJ2hvbWUnXS5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbJ2Rvd24nLCAndXAnLCAnbGVmdCcsICdyaWdodCcsICdhcnJvd2Rvd24nLCAnYXJyb3d1cCcsICdhcnJvd2xlZnQnLCAnYXJyb3dyaWdodCcsICdob21lJywgJ2VuZCcsICd0YWInXS5pbmRleE9mKGtleSkgIT09IC0xO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2xhdGVTdW1tYXJ5KHN1bW1hcnk6IElneFN1bW1hcnlSZXN1bHQpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnJlc291cmNlU3RyaW5nc1tgaWd4X2dyaWRfc3VtbWFyeV8ke3N1bW1hcnkua2V5fWBdIHx8IHN1bW1hcnkubGFiZWw7XG4gICAgfVxufVxuIl19