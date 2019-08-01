/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input, ViewChildren, QueryList, HostBinding, ElementRef, ChangeDetectorRef } from '@angular/core';
import { IgxRowComponent } from '../row.component';
import { GridBaseAPIService } from '../api.service';
import { IgxSelectionAPIService } from '../../core/selection';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
export class IgxTreeGridRowComponent extends IgxRowComponent {
    /**
     * @param {?} gridAPI
     * @param {?} crudService
     * @param {?} selectionService
     * @param {?} selection
     * @param {?} element
     * @param {?} cdr
     */
    constructor(gridAPI, crudService, selectionService, selection, element, cdr) {
        // D.P. constructor duplication due to es6 compilation, might be obsolete in the future
        super(gridAPI, crudService, selectionService, selection, element, cdr);
        this.gridAPI = gridAPI;
        this.crudService = crudService;
        this.selectionService = selectionService;
        this.element = element;
        this.cdr = cdr;
    }
    /**
     * The `ITreeGridRecord` passed to the row component.
     *
     * ```typescript
     * const row = this.grid.getRowByKey(1) as IgxTreeGridRowComponent;
     * const treeRow = row.treeRow;
     * ```
     * @return {?}
     */
    get treeRow() {
        return this._treeRow;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set treeRow(value) {
        if (this._treeRow !== value) {
            this._treeRow = value;
            this.rowData = this._treeRow.data;
        }
    }
    /**
     * Returns a value indicating whether the row component is expanded.
     *
     * ```typescript
     * const row = this.grid.getRowByKey(1) as IgxTreeGridRowComponent;
     * const expanded = row.expanded;
     * ```
     * @return {?}
     */
    get expanded() {
        return this._treeRow.expanded;
    }
    /**
     * Sets a value indicating whether the row component is expanded.
     *
     * ```typescript
     * const row = this.grid.getRowByKey(1) as IgxTreeGridRowComponent;
     * row.expanded = true;
     * ```
     * @param {?} value
     * @return {?}
     */
    set expanded(value) {
        ((/** @type {?} */ (this.gridAPI))).trigger_row_expansion_toggle(this._treeRow, value);
    }
    /**
     * @hidden
     * @return {?}
     */
    get showIndicator() {
        return this.grid.loadChildrenOnDemand ?
            this.grid.expansionStates.has(this.rowID) ?
                this.treeRow.children && this.treeRow.children.length :
                this.grid.hasChildrenKey ?
                    this.rowData[this.grid.hasChildrenKey] :
                    true :
            this.treeRow.children && this.treeRow.children.length;
    }
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    resolveClasses() {
        /** @type {?} */
        const classes = super.resolveClasses();
        /** @type {?} */
        const filteredClass = this.treeRow.isFilteredOutParent ? 'igx-grid__tr--filtered' : '';
        return `${classes} ${filteredClass}`;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngDoCheck() {
        this.isLoading = this.grid.loadChildrenOnDemand ? this.grid.loadingRows.has(this.rowID) : false;
        super.ngDoCheck();
    }
}
IgxTreeGridRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-tree-grid-row',
                template: "<ng-container *ngIf=\"rowDraggable\">\n    <div [class]=\"resolveDragIndicatorClasses\" [igxRowDrag]=\"this\">\n        <ng-container *ngTemplateOutlet=\"this.grid.dragIndicatorIconTemplate ? this.grid.dragIndicatorIconTemplate : this.grid.dragIndicatorIconBase\"></ng-container>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"rowSelectable\">\n    <div class=\"igx-grid__cbx-selection\">\n        <igx-checkbox [checked]=\"isSelected\" [disabled]=\"deleted\" (change)=\"onCheckboxClick($event)\" disableRipple=\"true\" [disableTransitions]=\"grid.disableTransitions\" [aria-label]=\"rowCheckboxAriaLabel\"></igx-checkbox>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"pinnedColumns.length > 0\">\n    <ng-template ngFor let-col [ngForOf]=\"pinnedColumns | igxNotGrouped\">\n        <ng-template #cellTemplate>\n            <igx-grid-cell\n                class=\"igx-grid__td igx-grid__td--fw igx-grid__td--pinned\"\n                [class.igx-grid__td--number]=\"col.dataType === 'number'\"\n                [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n                [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n                [column]=\"col\"\n                [formatter]=\"col.formatter\"\n                [row]=\"this\"\n                [lastPinned]=\"col.isLastPinned\"\n                [style.min-height.px]=\"grid.rowHeight || 32\"\n                [rowData]=\"rowData\"\n                [style.min-width.px]=\"col.width\"\n                [style.flex-basis.px]=\"col.width\"\n                [width]=\"col.getCellWidth()\"\n                [visibleColumnIndex]=\"col.visibleIndex\"\n                [value]=\"rowData[col.field]\"\n                [cellTemplate]=\"col.bodyTemplate\" #treeCell>\n            </igx-grid-cell>\n            </ng-template>\n        <ng-template #treeCellTemplate>\n            <igx-tree-grid-cell\n                class=\"igx-grid__td igx-grid__td--fw igx-grid__td--tree-cell igx-grid__td--pinned\"\n                [class.igx-grid__td--number]=\"col.dataType === 'number' && col.visibleIndex !== 0\"\n                [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n                [level]=\"treeRow.level\"\n                [expanded]=\"treeRow.expanded\"\n                [showIndicator]=\"showIndicator\"\n                [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n                [column]=\"col\"\n                [formatter]=\"col.formatter\"\n                [row]=\"this\"\n                [lastPinned]=\"col.isLastPinned\"\n                [style.min-height.px]=\"grid.rowHeight || 32\"\n                [rowData]=\"rowData\"\n                [style.min-width.px]=\"col.width\"\n                [style.flex-basis.px]=\"col.width\"\n                [width]=\"col.getCellWidth()\"\n                [visibleColumnIndex]=\"col.visibleIndex\"\n                [value]=\"rowData[col.field]\"\n                [isLoading]=\"isLoading\"\n                [cellTemplate]=\"col.bodyTemplate\" #treeCell>\n            </igx-tree-grid-cell>\n        </ng-template>\n        <ng-container *ngTemplateOutlet=\"col.visibleIndex === 0 ? treeCellTemplate : cellTemplate\"></ng-container>\n    </ng-template>\n</ng-container>\n<ng-template igxGridFor let-col [igxGridForOf]=\"unpinnedColumns | igxNotGrouped\" [igxForScrollContainer]=\"grid.parentVirtDir\" let-colIndex=\"index\" [igxForScrollOrientation]=\"'horizontal'\" [igxForContainerSize]='grid.unpinnedWidth' [igxForSizePropName]=\"'calcPixelWidth'\" [igxForTrackBy]='grid.trackColumnChanges' #igxDirRef>\n    <ng-template #cellTemplate>\n        <igx-grid-cell\n            class=\"igx-grid__td igx-grid__td--fw\"\n            [class.igx-grid__td--number]=\"col.dataType === 'number'\"\n            [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n            [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n            [column]=\"col\"\n            [formatter]=\"col.formatter\"\n            [row]=\"this\"\n            [style.min-height.px]=\"grid.rowHeight || 32\"\n            [rowData]=\"rowData\"\n            [style.min-width.px]=\"col.width\"\n            [style.flex-basis.px]=\"col.width\"\n            [width]=\"col.getCellWidth()\"\n            [visibleColumnIndex]=\"col.visibleIndex\"\n            [value]=\"rowData[col.field]\"\n            [cellTemplate]=\"col.bodyTemplate\" #treeCell>\n        </igx-grid-cell>\n    </ng-template>\n    <ng-template #treeCellTemplate>\n        <igx-tree-grid-cell\n            class=\"igx-grid__td igx-grid__td--fw igx-grid__td--tree-cell\"\n            [class.igx-grid__td--number]=\"col.dataType === 'number' && col.visibleIndex !== 0\"\n            [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n            [level]=\"treeRow.level\"\n            [expanded]=\"treeRow.expanded\"\n            [showIndicator]=\"showIndicator\"\n            [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n            [column]=\"col\"\n            [formatter]=\"col.formatter\"\n            [row]=\"this\"\n            [style.min-height.px]=\"grid.rowHeight || 32\"\n            [rowData]=\"rowData\"\n            [style.min-width.px]=\"col.width\"\n            [style.flex-basis.px]=\"col.width\"\n            [width]=\"col.getCellWidth()\"\n            [visibleColumnIndex]=\"col.visibleIndex\"\n            [value]=\"rowData[col.field]\"\n            [isLoading]=\"isLoading\"\n            [cellTemplate]=\"col.bodyTemplate\" #treeCell>\n        </igx-tree-grid-cell>\n    </ng-template>\n    <ng-container *ngTemplateOutlet=\"col.visibleIndex === 0 ? treeCellTemplate : cellTemplate\"></ng-container>\n</ng-template>\n",
                providers: [{ provide: IgxRowComponent, useExisting: forwardRef(() => IgxTreeGridRowComponent) }]
            }] }
];
/** @nocollapse */
IgxTreeGridRowComponent.ctorParameters = () => [
    { type: GridBaseAPIService },
    { type: IgxGridCRUDService },
    { type: IgxGridSelectionService },
    { type: IgxSelectionAPIService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
IgxTreeGridRowComponent.propDecorators = {
    cells: [{ type: ViewChildren, args: ['treeCell',] }],
    treeRow: [{ type: Input }],
    expanded: [{ type: HostBinding, args: ['attr.aria-expanded',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL3RyZWUtZ3JpZC90cmVlLWdyaWQtcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBVyxNQUFNLGVBQWUsQ0FBQztBQUUzSSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPeEYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGVBQXFDOzs7Ozs7Ozs7SUFDOUUsWUFDVyxPQUFpRCxFQUNqRCxXQUErQixFQUMvQixnQkFBeUMsRUFDaEQsU0FBaUMsRUFDMUIsT0FBbUIsRUFDbkIsR0FBc0I7UUFDekIsdUZBQXVGO1FBQzNGLEtBQUssQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFQaEUsWUFBTyxHQUFQLE9BQU8sQ0FBMEM7UUFDakQsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFFekMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtJQUdqQyxDQUFDOzs7Ozs7Ozs7O0lBc0JELElBQ1csT0FBTztRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQXNCO1FBQ3JDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztTQUNyQztJQUNMLENBQUM7Ozs7Ozs7Ozs7SUFVRCxJQUNJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7Ozs7Ozs7Ozs7O0lBVUQsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN2QixDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQXlCLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7O0lBVUQsSUFBVyxhQUFhO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFLUyxjQUFjOztjQUNkLE9BQU8sR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFOztjQUNoQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDdEYsT0FBTyxHQUFHLE9BQU8sSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUtNLFNBQVM7UUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNoRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7O1lBMUdKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qix1c0xBQTJDO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUM7YUFDcEc7Ozs7WUFSUSxrQkFBa0I7WUFFTyxrQkFBa0I7WUFBM0MsdUJBQXVCO1lBRHZCLHNCQUFzQjtZQU44QyxVQUFVO1lBQUUsaUJBQWlCOzs7b0JBbUNyRyxZQUFZLFNBQUMsVUFBVTtzQkFXdkIsS0FBSzt1QkFtQkwsV0FBVyxTQUFDLG9CQUFvQjs7Ozs7OztJQXhDakMsMkNBQWtDOzs7Ozs7Ozs7O0lBVWxDLHdDQUM2Qjs7Ozs7SUFpRDdCLDRDQUEwQjs7SUFyRXRCLDBDQUF3RDs7SUFDeEQsOENBQXNDOztJQUN0QyxtREFBZ0Q7O0lBRWhELDBDQUEwQjs7SUFDMUIsc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4VHJlZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RyZWUtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4Um93Q29tcG9uZW50IH0gZnJvbSAnLi4vcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJVHJlZUdyaWRSZWNvcmQgfSBmcm9tICcuL3RyZWUtZ3JpZC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IElneFRyZWVHcmlkQVBJU2VydmljZSB9IGZyb20gJy4vdHJlZS1ncmlkLWFwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneFNlbGVjdGlvbkFQSVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSwgSWd4R3JpZENSVURTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9ncmlkLXNlbGVjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LXRyZWUtZ3JpZC1yb3cnLFxuICAgIHRlbXBsYXRlVXJsOiAndHJlZS1ncmlkLXJvdy5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBJZ3hSb3dDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElneFRyZWVHcmlkUm93Q29tcG9uZW50KSB9XVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hUcmVlR3JpZFJvd0NvbXBvbmVudCBleHRlbmRzIElneFJvd0NvbXBvbmVudDxJZ3hUcmVlR3JpZENvbXBvbmVudD4gaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hUcmVlR3JpZENvbXBvbmVudD4sXG4gICAgICAgIHB1YmxpYyBjcnVkU2VydmljZTogSWd4R3JpZENSVURTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgc2VsZWN0aW9uU2VydmljZTogSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgIHNlbGVjdGlvbjogSWd4U2VsZWN0aW9uQVBJU2VydmljZSxcbiAgICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgICAgICAvLyBELlAuIGNvbnN0cnVjdG9yIGR1cGxpY2F0aW9uIGR1ZSB0byBlczYgY29tcGlsYXRpb24sIG1pZ2h0IGJlIG9ic29sZXRlIGluIHRoZSBmdXR1cmVcbiAgICAgICAgc3VwZXIoZ3JpZEFQSSwgY3J1ZFNlcnZpY2UsIHNlbGVjdGlvblNlcnZpY2UsIHNlbGVjdGlvbiwgZWxlbWVudCwgY2RyKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfdHJlZVJvdzogSVRyZWVHcmlkUmVjb3JkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJlbmRlcmVkIGNlbGxzIGluIHRoZSByb3cgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHJvdyA9IHRoaXMuZ3JpZC5nZXRSb3dCeUtleSgxKTtcbiAgICAgKiBjb25zdCBjZWxscyA9IHJvdy5jZWxscztcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAVmlld0NoaWxkcmVuKCd0cmVlQ2VsbCcpXG4gICAgcHVibGljIGNlbGxzOiBRdWVyeUxpc3Q8YW55PjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgSVRyZWVHcmlkUmVjb3JkYCBwYXNzZWQgdG8gdGhlIHJvdyBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogY29uc3Qgcm93ID0gdGhpcy5ncmlkLmdldFJvd0J5S2V5KDEpIGFzIElneFRyZWVHcmlkUm93Q29tcG9uZW50O1xuICAgICAqIGNvbnN0IHRyZWVSb3cgPSByb3cudHJlZVJvdztcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgdHJlZVJvdygpOiBJVHJlZUdyaWRSZWNvcmQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJlZVJvdztcbiAgICB9XG4gICAgcHVibGljIHNldCB0cmVlUm93KHZhbHVlOiBJVHJlZUdyaWRSZWNvcmQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyZWVSb3cgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90cmVlUm93ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnJvd0RhdGEgPSB0aGlzLl90cmVlUm93LmRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSByb3cgY29tcG9uZW50IGlzIGV4cGFuZGVkLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHJvdyA9IHRoaXMuZ3JpZC5nZXRSb3dCeUtleSgxKSBhcyBJZ3hUcmVlR3JpZFJvd0NvbXBvbmVudDtcbiAgICAgKiBjb25zdCBleHBhbmRlZCA9IHJvdy5leHBhbmRlZDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpXG4gICAgZ2V0IGV4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJlZVJvdy5leHBhbmRlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSByb3cgY29tcG9uZW50IGlzIGV4cGFuZGVkLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IHJvdyA9IHRoaXMuZ3JpZC5nZXRSb3dCeUtleSgxKSBhcyBJZ3hUcmVlR3JpZFJvd0NvbXBvbmVudDtcbiAgICAgKiByb3cuZXhwYW5kZWQgPSB0cnVlO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHNldCBleHBhbmRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICAodGhpcy5ncmlkQVBJIGFzIElneFRyZWVHcmlkQVBJU2VydmljZSkudHJpZ2dlcl9yb3dfZXhwYW5zaW9uX3RvZ2dsZSh0aGlzLl90cmVlUm93LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBzaG93SW5kaWNhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmxvYWRDaGlsZHJlbk9uRGVtYW5kID9cbiAgICAgICAgICAgIHRoaXMuZ3JpZC5leHBhbnNpb25TdGF0ZXMuaGFzKHRoaXMucm93SUQpID9cbiAgICAgICAgICAgICAgICB0aGlzLnRyZWVSb3cuY2hpbGRyZW4gJiYgdGhpcy50cmVlUm93LmNoaWxkcmVuLmxlbmd0aCA6XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkLmhhc0NoaWxkcmVuS2V5ID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dEYXRhW3RoaXMuZ3JpZC5oYXNDaGlsZHJlbktleV0gOlxuICAgICAgICAgICAgICAgICAgICB0cnVlIDpcbiAgICAgICAgICAgIHRoaXMudHJlZVJvdy5jaGlsZHJlbiAmJiB0aGlzLnRyZWVSb3cuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZUNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IHN1cGVyLnJlc29sdmVDbGFzc2VzKCk7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkQ2xhc3MgPSB0aGlzLnRyZWVSb3cuaXNGaWx0ZXJlZE91dFBhcmVudCA/ICdpZ3gtZ3JpZF9fdHItLWZpbHRlcmVkJyA6ICcnO1xuICAgICAgICByZXR1cm4gYCR7Y2xhc3Nlc30gJHtmaWx0ZXJlZENsYXNzfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ0RvQ2hlY2soKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdGhpcy5ncmlkLmxvYWRDaGlsZHJlbk9uRGVtYW5kID8gdGhpcy5ncmlkLmxvYWRpbmdSb3dzLmhhcyh0aGlzLnJvd0lEKSA6IGZhbHNlO1xuICAgICAgICBzdXBlci5uZ0RvQ2hlY2soKTtcbiAgICB9XG59XG4iXX0=