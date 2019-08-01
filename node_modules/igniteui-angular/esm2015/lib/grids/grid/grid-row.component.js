/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, HostBinding } from '@angular/core';
import { IgxRowComponent } from '../row.component';
import { GridBaseAPIService } from '../api.service';
import { IgxSelectionAPIService } from '../../core/selection';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
export class IgxGridRowComponent extends IgxRowComponent {
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
     * @return {?}
     */
    get hasColumnLayouts() {
        return this.grid.hasColumnLayouts;
    }
}
IgxGridRowComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-grid-row',
                template: "<ng-container *ngIf=\"grid.groupingExpressions.length > 0\">\n    <div class=\"igx-grid__row-indentation igx-grid__row-indentation--level-{{grid.groupingExpressions.length}}\"></div>\n</ng-container>\n<ng-container *ngIf=\"rowDraggable\">\n    <div [class]=\"resolveDragIndicatorClasses\" [igxRowDrag]=\"this\">\n        <ng-container *ngTemplateOutlet=\"this.grid.dragIndicatorIconTemplate ? this.grid.dragIndicatorIconTemplate : this.grid.dragIndicatorIconBase\"></ng-container>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"showRowCheckboxes\">\n    <div class=\"igx-grid__cbx-selection\">\n        <igx-checkbox [checked]=\"isSelected\" [disabled]=\"deleted\" (change)=\"onCheckboxClick($event)\" disableRipple=\"true\" [disableTransitions]=\"grid.disableTransitions\" [aria-label]=\"rowCheckboxAriaLabel\"></igx-checkbox>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"!grid.hasColumnLayouts\">\n    <ng-container *ngIf=\"pinnedColumns.length > 0\">\n        <igx-grid-cell *ngFor=\"let col of pinnedColumns | igxNotGrouped\"\n            class=\"igx-grid__td igx-grid__td--fw igx-grid__td--pinned\"\n            [class.igx-grid__td--number]=\"col.dataType === 'number'\"\n            [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n            [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n            [column]=\"col\"\n            [formatter]=\"col.formatter\"\n            [row]=\"this\"\n            [lastPinned]=\"col.isLastPinned\"\n            [style.min-height.px]=\"grid.rowHeight || 32\"\n            [rowData]=\"rowData\"\n            [style.min-width.px]=\"col.width\"\n            [style.flex-basis.px]=\"col.width\"\n            [width]=\"col.getCellWidth()\"\n            [visibleColumnIndex]=\"col.visibleIndex\"\n            [value]=\"rowData[col.field]\"\n            [cellTemplate]=\"col.bodyTemplate\">\n        </igx-grid-cell>\n    </ng-container>\n    <ng-template igxGridFor let-col [igxGridForOf]=\"unpinnedColumns | igxNotGrouped\" [igxForScrollContainer]=\"grid.parentVirtDir\" [igxForScrollOrientation]=\"'horizontal'\" [igxForContainerSize]='grid.unpinnedWidth' [igxForSizePropName]='\"calcPixelWidth\"' [igxForTrackBy]='grid.trackColumnChanges' #igxDirRef>\n        <igx-grid-cell\n            class=\"igx-grid__td igx-grid__td--fw\"\n            [class.igx-grid__td--number]=\"col.dataType === 'number'\"\n            [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n            [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n            [column]=\"col\"\n            [formatter]=\"col.formatter\"\n            [row]=\"this\"\n            [style.min-height.px]=\"grid.rowHeight || 32\"\n            [rowData]=\"rowData\"\n            [style.min-width.px]=\"col.width\"\n            [style.flex-basis.px]=\"col.width\"\n            [width]=\"col.getCellWidth()\"\n            [visibleColumnIndex]=\"col.visibleIndex\"\n            [value]=\"rowData[col.field]\"\n            [cellTemplate]=\"col.bodyTemplate\">\n        </igx-grid-cell>\n    </ng-template>\n</ng-container>\n\n<ng-container *ngIf=\"grid.hasColumnLayouts\">\n    <ng-container *ngIf=\"pinnedColumns.length > 0\">\n        <div *ngFor=\"let col of pinnedColumns | igxTopLevel\" class=\"igx-grid__mrl-block\"\n        [ngClass]=\"{'igx-grid__td--pinned-last': col.hasLastPinnedChildColumn}\"\n        [ngStyle]=\"{'grid-template-rows':col.getGridTemplate(true, false),\n        'grid-template-columns':col.getGridTemplate(false, false),\n        'z-index': col.pinned ? 1 : null,\n        '-ms-grid-rows':col.getGridTemplate(true, true),\n        '-ms-grid-columns':col.getGridTemplate(false, true)}\">\n            <igx-grid-cell *ngFor=\"let child of col.children\"\n                class=\"igx-grid__td igx-grid__td--fw igx-grid__td--pinned\"\n                [class.igx-grid__td--number]=\"child.dataType === 'number'\"\n                [ngClass]=\"child.cellClasses | igxCellStyles:rowData[child.field]:rowData:child.field\"\n                [editMode]=\"child.editable && crudService.isInEditMode(index, child.index)\"\n                [column]=\"child\"\n                [formatter]=\"child.formatter\"\n                [row]=\"this\"\n                [style.min-height.px]=\"grid.rowHeight || 32\"\n                [rowData]=\"rowData\"\n                [visibleColumnIndex]=\"child.visibleIndex\"\n                [value]=\"rowData[child.field]\"\n                [cellTemplate]=\"child.bodyTemplate\"></igx-grid-cell>\n        </div>\n    </ng-container>\n    <ng-template igxGridFor let-col [igxGridForOf]=\"unpinnedColumns | igxTopLevel\" [igxForScrollContainer]=\"grid.parentVirtDir\" let-colIndex=\"index\" [igxForScrollOrientation]=\"'horizontal'\" [igxForContainerSize]='grid.unpinnedWidth' [igxForSizePropName]='\"calcPixelWidth\"' [igxForTrackBy]='grid.trackColumnChanges' #igxDirRef>\n        <div class=\"igx-grid__mrl-block\"\n        [ngStyle]=\"{'grid-template-rows':col.getGridTemplate(true, false),\n     'grid-template-columns':col.getGridTemplate(false, false),\n     '-ms-grid-rows':col.getGridTemplate(true, true),\n     '-ms-grid-columns':col.getGridTemplate(false, true)}\">\n            <igx-grid-cell *ngFor=\"let child of col.children\"\n                class=\"igx-grid__td igx-grid__td--fw\"\n                [class.igx-grid__td--number]=\"child.dataType === 'number'\"\n                [ngClass]=\"child.cellClasses | igxCellStyles:rowData[child.field]:rowData:child.field\"\n                [editMode]=\"child.editable && crudService.isInEditMode(index, child.index)\"\n                [column]=\"child\"\n                [formatter]=\"child.formatter\"\n                [row]=\"this\"\n                [style.min-height.px]=\"grid.rowHeight || 32\"\n                [rowData]=\"rowData\"\n                [visibleColumnIndex]=\"child.visibleIndex\"\n                [value]=\"rowData[child.field]\"\n                [cellTemplate]=\"child.bodyTemplate\"></igx-grid-cell>\n        </div>\n    </ng-template>\n</ng-container>\n",
                providers: [{ provide: IgxRowComponent, useExisting: forwardRef(() => IgxGridRowComponent) }]
            }] }
];
/** @nocollapse */
IgxGridRowComponent.ctorParameters = () => [
    { type: GridBaseAPIService },
    { type: IgxGridCRUDService },
    { type: IgxGridSelectionService },
    { type: IgxSelectionAPIService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
IgxGridRowComponent.propDecorators = {
    hasColumnLayouts: [{ type: HostBinding, args: ['class.igx-grid__tr--mrl',] }]
};
if (false) {
    /** @type {?} */
    IgxGridRowComponent.prototype.gridAPI;
    /** @type {?} */
    IgxGridRowComponent.prototype.crudService;
    /** @type {?} */
    IgxGridRowComponent.prototype.selectionService;
    /** @type {?} */
    IgxGridRowComponent.prototype.element;
    /** @type {?} */
    IgxGridRowComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9ncmlkL2dyaWQtcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFTeEYsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGVBQWlDOzs7Ozs7Ozs7SUFDdEUsWUFDVyxPQUE2QyxFQUM3QyxXQUErQixFQUMvQixnQkFBeUMsRUFDaEQsU0FBaUMsRUFDMUIsT0FBbUIsRUFDbkIsR0FBc0I7UUFDekIsdUZBQXVGO1FBQ3ZGLEtBQUssQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFQcEUsWUFBTyxHQUFQLE9BQU8sQ0FBc0M7UUFDN0MsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFFekMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtJQUc3QixDQUFDOzs7O0lBRUQsSUFDSSxnQkFBZ0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7OztZQXRCUixTQUFTLFNBQUM7Z0JBQ1AsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixxK0xBQXdDO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFDLENBQUM7YUFDOUY7Ozs7WUFWUSxrQkFBa0I7WUFFTyxrQkFBa0I7WUFBM0MsdUJBQXVCO1lBRHZCLHNCQUFzQjtZQUowQixVQUFVO1lBQUUsaUJBQWlCOzs7K0JBMEI3RSxXQUFXLFNBQUMseUJBQXlCOzs7O0lBVnRDLHNDQUFvRDs7SUFDcEQsMENBQXNDOztJQUN0QywrQ0FBZ0Q7O0lBRWhELHNDQUEwQjs7SUFDMUIsa0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hSb3dDb21wb25lbnQgfSBmcm9tICcuLi9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRCYXNlQVBJU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElneFNlbGVjdGlvbkFQSVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSwgSWd4R3JpZENSVURTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9ncmlkLXNlbGVjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LWdyaWQtcm93JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZ3JpZC1yb3cuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBJZ3hSb3dDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElneEdyaWRSb3dDb21wb25lbnQpfV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4R3JpZFJvd0NvbXBvbmVudCBleHRlbmRzIElneFJvd0NvbXBvbmVudDxJZ3hHcmlkQ29tcG9uZW50PiB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBncmlkQVBJOiBHcmlkQmFzZUFQSVNlcnZpY2U8SWd4R3JpZENvbXBvbmVudD4sXG4gICAgICAgIHB1YmxpYyBjcnVkU2VydmljZTogSWd4R3JpZENSVURTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgc2VsZWN0aW9uU2VydmljZTogSWd4R3JpZFNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgIHNlbGVjdGlvbjogSWd4U2VsZWN0aW9uQVBJU2VydmljZSxcbiAgICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgICAgICAvLyBELlAuIGNvbnN0cnVjdG9yIGR1cGxpY2F0aW9uIGR1ZSB0byBlczYgY29tcGlsYXRpb24sIG1pZ2h0IGJlIG9ic29sZXRlIGluIHRoZSBmdXR1cmVcbiAgICAgICAgICAgIHN1cGVyKGdyaWRBUEksIGNydWRTZXJ2aWNlLCBzZWxlY3Rpb25TZXJ2aWNlLCBzZWxlY3Rpb24sIGVsZW1lbnQsIGNkcik7XG4gICAgICAgIH1cblxuICAgICAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1ncmlkX190ci0tbXJsJylcbiAgICAgICAgZ2V0IGhhc0NvbHVtbkxheW91dHMoKTogYm9vbGVhbiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmhhc0NvbHVtbkxheW91dHM7XG4gICAgICAgIH1cbn1cbiJdfQ==