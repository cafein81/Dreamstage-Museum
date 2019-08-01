/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input, ViewChildren, QueryList, HostBinding, ElementRef, ChangeDetectorRef } from '@angular/core';
import { IgxRowComponent } from '../row.component';
import { GridBaseAPIService } from '../api.service';
import { IgxSelectionAPIService } from '../../core/selection';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
var IgxTreeGridRowComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxTreeGridRowComponent, _super);
    function IgxTreeGridRowComponent(gridAPI, crudService, selectionService, selection, element, cdr) {
        var _this = 
        // D.P. constructor duplication due to es6 compilation, might be obsolete in the future
        _super.call(this, gridAPI, crudService, selectionService, selection, element, cdr) || this;
        _this.gridAPI = gridAPI;
        _this.crudService = crudService;
        _this.selectionService = selectionService;
        _this.element = element;
        _this.cdr = cdr;
        return _this;
    }
    Object.defineProperty(IgxTreeGridRowComponent.prototype, "treeRow", {
        /**
         * The `ITreeGridRecord` passed to the row component.
         *
         * ```typescript
         * const row = this.grid.getRowByKey(1) as IgxTreeGridRowComponent;
         * const treeRow = row.treeRow;
         * ```
         */
        get: /**
         * The `ITreeGridRecord` passed to the row component.
         *
         * ```typescript
         * const row = this.grid.getRowByKey(1) as IgxTreeGridRowComponent;
         * const treeRow = row.treeRow;
         * ```
         * @return {?}
         */
        function () {
            return this._treeRow;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._treeRow !== value) {
                this._treeRow = value;
                this.rowData = this._treeRow.data;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTreeGridRowComponent.prototype, "expanded", {
        /**
         * Returns a value indicating whether the row component is expanded.
         *
         * ```typescript
         * const row = this.grid.getRowByKey(1) as IgxTreeGridRowComponent;
         * const expanded = row.expanded;
         * ```
         */
        get: /**
         * Returns a value indicating whether the row component is expanded.
         *
         * ```typescript
         * const row = this.grid.getRowByKey(1) as IgxTreeGridRowComponent;
         * const expanded = row.expanded;
         * ```
         * @return {?}
         */
        function () {
            return this._treeRow.expanded;
        },
        /**
         * Sets a value indicating whether the row component is expanded.
         *
         * ```typescript
         * const row = this.grid.getRowByKey(1) as IgxTreeGridRowComponent;
         * row.expanded = true;
         * ```
         */
        set: /**
         * Sets a value indicating whether the row component is expanded.
         *
         * ```typescript
         * const row = this.grid.getRowByKey(1) as IgxTreeGridRowComponent;
         * row.expanded = true;
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            ((/** @type {?} */ (this.gridAPI))).trigger_row_expansion_toggle(this._treeRow, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTreeGridRowComponent.prototype, "showIndicator", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.grid.loadChildrenOnDemand ?
                this.grid.expansionStates.has(this.rowID) ?
                    this.treeRow.children && this.treeRow.children.length :
                    this.grid.hasChildrenKey ?
                        this.rowData[this.grid.hasChildrenKey] :
                        true :
                this.treeRow.children && this.treeRow.children.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxTreeGridRowComponent.prototype.resolveClasses = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var classes = _super.prototype.resolveClasses.call(this);
        /** @type {?} */
        var filteredClass = this.treeRow.isFilteredOutParent ? 'igx-grid__tr--filtered' : '';
        return classes + " " + filteredClass;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxTreeGridRowComponent.prototype.ngDoCheck = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.isLoading = this.grid.loadChildrenOnDemand ? this.grid.loadingRows.has(this.rowID) : false;
        _super.prototype.ngDoCheck.call(this);
    };
    IgxTreeGridRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-tree-grid-row',
                    template: "<ng-container *ngIf=\"rowDraggable\">\n    <div [class]=\"resolveDragIndicatorClasses\" [igxRowDrag]=\"this\">\n        <ng-container *ngTemplateOutlet=\"this.grid.dragIndicatorIconTemplate ? this.grid.dragIndicatorIconTemplate : this.grid.dragIndicatorIconBase\"></ng-container>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"rowSelectable\">\n    <div class=\"igx-grid__cbx-selection\">\n        <igx-checkbox [checked]=\"isSelected\" [disabled]=\"deleted\" (change)=\"onCheckboxClick($event)\" disableRipple=\"true\" [disableTransitions]=\"grid.disableTransitions\" [aria-label]=\"rowCheckboxAriaLabel\"></igx-checkbox>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"pinnedColumns.length > 0\">\n    <ng-template ngFor let-col [ngForOf]=\"pinnedColumns | igxNotGrouped\">\n        <ng-template #cellTemplate>\n            <igx-grid-cell\n                class=\"igx-grid__td igx-grid__td--fw igx-grid__td--pinned\"\n                [class.igx-grid__td--number]=\"col.dataType === 'number'\"\n                [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n                [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n                [column]=\"col\"\n                [formatter]=\"col.formatter\"\n                [row]=\"this\"\n                [lastPinned]=\"col.isLastPinned\"\n                [style.min-height.px]=\"grid.rowHeight || 32\"\n                [rowData]=\"rowData\"\n                [style.min-width.px]=\"col.width\"\n                [style.flex-basis.px]=\"col.width\"\n                [width]=\"col.getCellWidth()\"\n                [visibleColumnIndex]=\"col.visibleIndex\"\n                [value]=\"rowData[col.field]\"\n                [cellTemplate]=\"col.bodyTemplate\" #treeCell>\n            </igx-grid-cell>\n            </ng-template>\n        <ng-template #treeCellTemplate>\n            <igx-tree-grid-cell\n                class=\"igx-grid__td igx-grid__td--fw igx-grid__td--tree-cell igx-grid__td--pinned\"\n                [class.igx-grid__td--number]=\"col.dataType === 'number' && col.visibleIndex !== 0\"\n                [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n                [level]=\"treeRow.level\"\n                [expanded]=\"treeRow.expanded\"\n                [showIndicator]=\"showIndicator\"\n                [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n                [column]=\"col\"\n                [formatter]=\"col.formatter\"\n                [row]=\"this\"\n                [lastPinned]=\"col.isLastPinned\"\n                [style.min-height.px]=\"grid.rowHeight || 32\"\n                [rowData]=\"rowData\"\n                [style.min-width.px]=\"col.width\"\n                [style.flex-basis.px]=\"col.width\"\n                [width]=\"col.getCellWidth()\"\n                [visibleColumnIndex]=\"col.visibleIndex\"\n                [value]=\"rowData[col.field]\"\n                [isLoading]=\"isLoading\"\n                [cellTemplate]=\"col.bodyTemplate\" #treeCell>\n            </igx-tree-grid-cell>\n        </ng-template>\n        <ng-container *ngTemplateOutlet=\"col.visibleIndex === 0 ? treeCellTemplate : cellTemplate\"></ng-container>\n    </ng-template>\n</ng-container>\n<ng-template igxGridFor let-col [igxGridForOf]=\"unpinnedColumns | igxNotGrouped\" [igxForScrollContainer]=\"grid.parentVirtDir\" let-colIndex=\"index\" [igxForScrollOrientation]=\"'horizontal'\" [igxForContainerSize]='grid.unpinnedWidth' [igxForSizePropName]=\"'calcPixelWidth'\" [igxForTrackBy]='grid.trackColumnChanges' #igxDirRef>\n    <ng-template #cellTemplate>\n        <igx-grid-cell\n            class=\"igx-grid__td igx-grid__td--fw\"\n            [class.igx-grid__td--number]=\"col.dataType === 'number'\"\n            [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n            [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n            [column]=\"col\"\n            [formatter]=\"col.formatter\"\n            [row]=\"this\"\n            [style.min-height.px]=\"grid.rowHeight || 32\"\n            [rowData]=\"rowData\"\n            [style.min-width.px]=\"col.width\"\n            [style.flex-basis.px]=\"col.width\"\n            [width]=\"col.getCellWidth()\"\n            [visibleColumnIndex]=\"col.visibleIndex\"\n            [value]=\"rowData[col.field]\"\n            [cellTemplate]=\"col.bodyTemplate\" #treeCell>\n        </igx-grid-cell>\n    </ng-template>\n    <ng-template #treeCellTemplate>\n        <igx-tree-grid-cell\n            class=\"igx-grid__td igx-grid__td--fw igx-grid__td--tree-cell\"\n            [class.igx-grid__td--number]=\"col.dataType === 'number' && col.visibleIndex !== 0\"\n            [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n            [level]=\"treeRow.level\"\n            [expanded]=\"treeRow.expanded\"\n            [showIndicator]=\"showIndicator\"\n            [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n            [column]=\"col\"\n            [formatter]=\"col.formatter\"\n            [row]=\"this\"\n            [style.min-height.px]=\"grid.rowHeight || 32\"\n            [rowData]=\"rowData\"\n            [style.min-width.px]=\"col.width\"\n            [style.flex-basis.px]=\"col.width\"\n            [width]=\"col.getCellWidth()\"\n            [visibleColumnIndex]=\"col.visibleIndex\"\n            [value]=\"rowData[col.field]\"\n            [isLoading]=\"isLoading\"\n            [cellTemplate]=\"col.bodyTemplate\" #treeCell>\n        </igx-tree-grid-cell>\n    </ng-template>\n    <ng-container *ngTemplateOutlet=\"col.visibleIndex === 0 ? treeCellTemplate : cellTemplate\"></ng-container>\n</ng-template>\n",
                    providers: [{ provide: IgxRowComponent, useExisting: forwardRef(function () { return IgxTreeGridRowComponent; }) }]
                }] }
    ];
    /** @nocollapse */
    IgxTreeGridRowComponent.ctorParameters = function () { return [
        { type: GridBaseAPIService },
        { type: IgxGridCRUDService },
        { type: IgxGridSelectionService },
        { type: IgxSelectionAPIService },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    IgxTreeGridRowComponent.propDecorators = {
        cells: [{ type: ViewChildren, args: ['treeCell',] }],
        treeRow: [{ type: Input }],
        expanded: [{ type: HostBinding, args: ['attr.aria-expanded',] }]
    };
    return IgxTreeGridRowComponent;
}(IgxRowComponent));
export { IgxTreeGridRowComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxTreeGridRowComponent.prototype._treeRow;
    /**
     * The rendered cells in the row component.
     *
     * ```typescript
     * const row = this.grid.getRowByKey(1);
     * const cells = row.cells;
     * ```
     * @type {?}
     */
    IgxTreeGridRowComponent.prototype.cells;
    /**
     * @hidden
     * @type {?}
     */
    IgxTreeGridRowComponent.prototype.isLoading;
    /** @type {?} */
    IgxTreeGridRowComponent.prototype.gridAPI;
    /** @type {?} */
    IgxTreeGridRowComponent.prototype.crudService;
    /** @type {?} */
    IgxTreeGridRowComponent.prototype.selectionService;
    /** @type {?} */
    IgxTreeGridRowComponent.prototype.element;
    /** @type {?} */
    IgxTreeGridRowComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL3RyZWUtZ3JpZC90cmVlLWdyaWQtcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFFM0ksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhGO0lBSzZDLG1EQUFxQztJQUM5RSxpQ0FDVyxPQUFpRCxFQUNqRCxXQUErQixFQUMvQixnQkFBeUMsRUFDaEQsU0FBaUMsRUFDMUIsT0FBbUIsRUFDbkIsR0FBc0I7UUFOakM7UUFPUSx1RkFBdUY7UUFDM0Ysa0JBQU0sT0FBTyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxTQUN6RTtRQVJVLGFBQU8sR0FBUCxPQUFPLENBQTBDO1FBQ2pELGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBRXpDLGFBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsU0FBRyxHQUFILEdBQUcsQ0FBbUI7O0lBR2pDLENBQUM7SUFzQkQsc0JBQ1csNENBQU87UUFUbEI7Ozs7Ozs7V0FPRzs7Ozs7Ozs7OztRQUNIO1lBRUksT0FBTyxJQUFJLENBQUMsUUFBUSxD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SUFDdEMsbURBQWdEOztJQUVoRCwwQ0FBMEI7O0lBQzFCLHNDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneFRyZWVHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi90cmVlLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IElneFJvd0NvbXBvbmVudCB9IGZyb20gJy4uL3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSVRyZWVHcmlkUmVjb3JkIH0gZnJvbSAnLi90cmVlLWdyaWQuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBJZ3hUcmVlR3JpZEFQSVNlcnZpY2UgfSBmcm9tICcuL3RyZWUtZ3JpZC1hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBHcmlkQmFzZUFQSVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsIElneEdyaWRDUlVEU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvZ3JpZC1zZWxlY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC10cmVlLWdyaWQtcm93JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RyZWUtZ3JpZC1yb3cuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogSWd4Um93Q29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJZ3hUcmVlR3JpZFJvd0NvbXBvbmVudCkgfV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4VHJlZUdyaWRSb3dDb21wb25lbnQgZXh0ZW5kcyBJZ3hSb3dDb21wb25lbnQ8SWd4VHJlZUdyaWRDb21wb25lbnQ+IGltcGxlbWVudHMgRG9DaGVjayB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4VHJlZUdyaWRDb21wb25lbnQ+LFxuICAgICAgICBwdWJsaWMgY3J1ZFNlcnZpY2U6IElneEdyaWRDUlVEU2VydmljZSxcbiAgICAgICAgcHVibGljIHNlbGVjdGlvblNlcnZpY2U6IElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICBzZWxlY3Rpb246IElneFNlbGVjdGlvbkFQSVNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICAgICAgLy8gRC5QLiBjb25zdHJ1Y3RvciBkdXBsaWNhdGlvbiBkdWUgdG8gZXM2IGNvbXBpbGF0aW9uLCBtaWdodCBiZSBvYnNvbGV0ZSBpbiB0aGUgZnV0dXJlXG4gICAgICAgIHN1cGVyKGdyaWRBUEksIGNydWRTZXJ2aWNlLCBzZWxlY3Rpb25TZXJ2aWNlLCBzZWxlY3Rpb24sIGVsZW1lbnQsIGNkcik7XG4gICAgfVxuICAgIHByaXZhdGUgX3RyZWVSb3c6IElUcmVlR3JpZFJlY29yZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSByZW5kZXJlZCBjZWxscyBpbiB0aGUgcm93IGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCByb3cgPSB0aGlzLmdyaWQuZ2V0Um93QnlLZXkoMSk7XG4gICAgICogY29uc3QgY2VsbHMgPSByb3cuY2VsbHM7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQFZpZXdDaGlsZHJlbigndHJlZUNlbGwnKVxuICAgIHB1YmxpYyBjZWxsczogUXVlcnlMaXN0PGFueT47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYElUcmVlR3JpZFJlY29yZGAgcGFzc2VkIHRvIHRoZSByb3cgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHJvdyA9IHRoaXMuZ3JpZC5nZXRSb3dCeUtleSgxKSBhcyBJZ3hUcmVlR3JpZFJvd0NvbXBvbmVudDtcbiAgICAgKiBjb25zdCB0cmVlUm93ID0gcm93LnRyZWVSb3c7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHRyZWVSb3coKTogSVRyZWVHcmlkUmVjb3JkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyZWVSb3c7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdHJlZVJvdyh2YWx1ZTogSVRyZWVHcmlkUmVjb3JkKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmVlUm93ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdHJlZVJvdyA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5yb3dEYXRhID0gdGhpcy5fdHJlZVJvdy5kYXRhO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgcm93IGNvbXBvbmVudCBpcyBleHBhbmRlZC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCByb3cgPSB0aGlzLmdyaWQuZ2V0Um93QnlLZXkoMSkgYXMgSWd4VHJlZUdyaWRSb3dDb21wb25lbnQ7XG4gICAgICogY29uc3QgZXhwYW5kZWQgPSByb3cuZXhwYW5kZWQ7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZXhwYW5kZWQnKVxuICAgIGdldCBleHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyZWVSb3cuZXhwYW5kZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgcm93IGNvbXBvbmVudCBpcyBleHBhbmRlZC5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBjb25zdCByb3cgPSB0aGlzLmdyaWQuZ2V0Um93QnlLZXkoMSkgYXMgSWd4VHJlZUdyaWRSb3dDb21wb25lbnQ7XG4gICAgICogcm93LmV4cGFuZGVkID0gdHJ1ZTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBzZXQgZXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgKHRoaXMuZ3JpZEFQSSBhcyBJZ3hUcmVlR3JpZEFQSVNlcnZpY2UpLnRyaWdnZXJfcm93X2V4cGFuc2lvbl90b2dnbGUodGhpcy5fdHJlZVJvdywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2hvd0luZGljYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5sb2FkQ2hpbGRyZW5PbkRlbWFuZCA/XG4gICAgICAgICAgICB0aGlzLmdyaWQuZXhwYW5zaW9uU3RhdGVzLmhhcyh0aGlzLnJvd0lEKSA/XG4gICAgICAgICAgICAgICAgdGhpcy50cmVlUm93LmNoaWxkcmVuICYmIHRoaXMudHJlZVJvdy5jaGlsZHJlbi5sZW5ndGggOlxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZC5oYXNDaGlsZHJlbktleSA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93RGF0YVt0aGlzLmdyaWQuaGFzQ2hpbGRyZW5LZXldIDpcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZSA6XG4gICAgICAgICAgICB0aGlzLnRyZWVSb3cuY2hpbGRyZW4gJiYgdGhpcy50cmVlUm93LmNoaWxkcmVuLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlc29sdmVDbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBzdXBlci5yZXNvbHZlQ2xhc3NlcygpO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZENsYXNzID0gdGhpcy50cmVlUm93LmlzRmlsdGVyZWRPdXRQYXJlbnQgPyAnaWd4LWdyaWRfX3RyLS1maWx0ZXJlZCcgOiAnJztcbiAgICAgICAgcmV0dXJuIGAke2NsYXNzZXN9ICR7ZmlsdGVyZWRDbGFzc31gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdEb0NoZWNrKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRoaXMuZ3JpZC5sb2FkQ2hpbGRyZW5PbkRlbWFuZCA/IHRoaXMuZ3JpZC5sb2FkaW5nUm93cy5oYXModGhpcy5yb3dJRCkgOiBmYWxzZTtcbiAgICAgICAgc3VwZXIubmdEb0NoZWNrKCk7XG4gICAgfVxufVxuIl19