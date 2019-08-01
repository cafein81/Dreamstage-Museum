/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, HostBinding } from '@angular/core';
import { IgxRowComponent } from '../row.component';
import { GridBaseAPIService } from '../api.service';
import { IgxSelectionAPIService } from '../../core/selection';
import { IgxGridSelectionService, IgxGridCRUDService } from '../../core/grid-selection';
var IgxGridRowComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxGridRowComponent, _super);
    function IgxGridRowComponent(gridAPI, crudService, selectionService, selection, element, cdr) {
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
    Object.defineProperty(IgxGridRowComponent.prototype, "hasColumnLayouts", {
        get: /**
         * @return {?}
         */
        function () {
            return this.grid.hasColumnLayouts;
        },
        enumerable: true,
        configurable: true
    });
    IgxGridRowComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-grid-row',
                    template: "<ng-container *ngIf=\"grid.groupingExpressions.length > 0\">\n    <div class=\"igx-grid__row-indentation igx-grid__row-indentation--level-{{grid.groupingExpressions.length}}\"></div>\n</ng-container>\n<ng-container *ngIf=\"rowDraggable\">\n    <div [class]=\"resolveDragIndicatorClasses\" [igxRowDrag]=\"this\">\n        <ng-container *ngTemplateOutlet=\"this.grid.dragIndicatorIconTemplate ? this.grid.dragIndicatorIconTemplate : this.grid.dragIndicatorIconBase\"></ng-container>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"showRowCheckboxes\">\n    <div class=\"igx-grid__cbx-selection\">\n        <igx-checkbox [checked]=\"isSelected\" [disabled]=\"deleted\" (change)=\"onCheckboxClick($event)\" disableRipple=\"true\" [disableTransitions]=\"grid.disableTransitions\" [aria-label]=\"rowCheckboxAriaLabel\"></igx-checkbox>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"!grid.hasColumnLayouts\">\n    <ng-container *ngIf=\"pinnedColumns.length > 0\">\n        <igx-grid-cell *ngFor=\"let col of pinnedColumns | igxNotGrouped\"\n            class=\"igx-grid__td igx-grid__td--fw igx-grid__td--pinned\"\n            [class.igx-grid__td--number]=\"col.dataType === 'number'\"\n            [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n            [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n            [column]=\"col\"\n            [formatter]=\"col.formatter\"\n            [row]=\"this\"\n            [lastPinned]=\"col.isLastPinned\"\n            [style.min-height.px]=\"grid.rowHeight || 32\"\n            [rowData]=\"rowData\"\n            [style.min-width.px]=\"col.width\"\n            [style.flex-basis.px]=\"col.width\"\n            [width]=\"col.getCellWidth()\"\n            [visibleColumnIndex]=\"col.visibleIndex\"\n            [value]=\"rowData[col.field]\"\n            [cellTemplate]=\"col.bodyTemplate\">\n        </igx-grid-cell>\n    </ng-container>\n    <ng-template igxGridFor let-col [igxGridForOf]=\"unpinnedColumns | igxNotGrouped\" [igxForScrollContainer]=\"grid.parentVirtDir\" [igxForScrollOrientation]=\"'horizontal'\" [igxForContainerSize]='grid.unpinnedWidth' [igxForSizePropName]='\"calcPixelWidth\"' [igxForTrackBy]='grid.trackColumnChanges' #igxDirRef>\n        <igx-grid-cell\n            class=\"igx-grid__td igx-grid__td--fw\"\n            [class.igx-grid__td--number]=\"col.dataType === 'number'\"\n            [ngClass]=\"col.cellClasses | igxCellStyles:rowData[col.field]:rowData:col.field\"\n            [editMode]=\"col.editable && crudService.isInEditMode(index, col.index)\"\n            [column]=\"col\"\n            [formatter]=\"col.formatter\"\n            [row]=\"this\"\n            [style.min-height.px]=\"grid.rowHeight || 32\"\n            [rowData]=\"rowData\"\n            [style.min-width.px]=\"col.width\"\n            [style.flex-basis.px]=\"col.width\"\n            [width]=\"col.getCellWidth()\"\n            [visibleColumnIndex]=\"col.visibleIndex\"\n            [value]=\"rowData[col.field]\"\n            [cellTemplate]=\"col.bodyTemplate\">\n        </igx-grid-cell>\n    </ng-template>\n</ng-container>\n\n<ng-container *ngIf=\"grid.hasColumnLayouts\">\n    <ng-container *ngIf=\"pinnedColumns.length > 0\">\n        <div *ngFor=\"let col of pinnedColumns | igxTopLevel\" class=\"igx-grid__mrl-block\"\n        [ngClass]=\"{'igx-grid__td--pinned-last': col.hasLastPinnedChildColumn}\"\n        [ngStyle]=\"{'grid-template-rows':col.getGridTemplate(true, false),\n        'grid-template-columns':col.getGridTemplate(false, false),\n        'z-index': col.pinned ? 1 : null,\n        '-ms-grid-rows':col.getGridTemplate(true, true),\n        '-ms-grid-columns':col.getGridTemplate(false, true)}\">\n            <igx-grid-cell *ngFor=\"let child of col.children\"\n                class=\"igx-grid__td igx-grid__td--fw igx-grid__td--pinned\"\n                [class.igx-grid__td--number]=\"child.dataType === 'number'\"\n                [ngClass]=\"child.cellClasses | igxCellStyles:rowData[child.field]:rowData:child.field\"\n                [editMode]=\"child.editable && crudService.isInEditMode(index, child.index)\"\n                [column]=\"child\"\n                [formatter]=\"child.formatter\"\n                [row]=\"this\"\n                [style.min-height.px]=\"grid.rowHeight || 32\"\n                [rowData]=\"rowData\"\n                [visibleColumnIndex]=\"child.visibleIndex\"\n                [value]=\"rowData[child.field]\"\n                [cellTemplate]=\"child.bodyTemplate\"></igx-grid-cell>\n        </div>\n    </ng-container>\n    <ng-template igxGridFor let-col [igxGridForOf]=\"unpinnedColumns | igxTopLevel\" [igxForScrollContainer]=\"grid.parentVirtDir\" let-colIndex=\"index\" [igxForScrollOrientation]=\"'horizontal'\" [igxForContainerSize]='grid.unpinnedWidth' [igxForSizePropName]='\"calcPixelWidth\"' [igxForTrackBy]='grid.trackColumnChanges' #igxDirRef>\n        <div class=\"igx-grid__mrl-block\"\n        [ngStyle]=\"{'grid-template-rows':col.getGridTemplate(true, false),\n     'grid-template-columns':col.getGridTemplate(false, false),\n     '-ms-grid-rows':col.getGridTemplate(true, true),\n     '-ms-grid-columns':col.getGridTemplate(false, true)}\">\n            <igx-grid-cell *ngFor=\"let child of col.children\"\n                class=\"igx-grid__td igx-grid__td--fw\"\n                [class.igx-grid__td--number]=\"child.dataType === 'number'\"\n                [ngClass]=\"child.cellClasses | igxCellStyles:rowData[child.field]:rowData:child.field\"\n                [editMode]=\"child.editable && crudService.isInEditMode(index, child.index)\"\n                [column]=\"child\"\n                [formatter]=\"child.formatter\"\n                [row]=\"this\"\n                [style.min-height.px]=\"grid.rowHeight || 32\"\n                [rowData]=\"rowData\"\n                [visibleColumnIndex]=\"child.visibleIndex\"\n                [value]=\"rowData[child.field]\"\n                [cellTemplate]=\"child.bodyTemplate\"></igx-grid-cell>\n        </div>\n    </ng-template>\n</ng-container>\n",
                    providers: [{ provide: IgxRowComponent, useExisting: forwardRef(function () { return IgxGridRowComponent; }) }]
                }] }
    ];
    /** @nocollapse */
    IgxGridRowComponent.ctorParameters = function () { return [
        { type: GridBaseAPIService },
        { type: IgxGridCRUDService },
        { type: IgxGridSelectionService },
        { type: IgxSelectionAPIService },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    IgxGridRowComponent.propDecorators = {
        hasColumnLayouts: [{ type: HostBinding, args: ['class.igx-grid__tr--mrl',] }]
    };
    return IgxGridRowComponent;
}(IgxRowComponent));
export { IgxGridRowComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9ncmlkcy9ncmlkL2dyaWQtcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0gsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhGO0lBT3lDLCtDQUFpQztJQUN0RSw2QkFDVyxPQUE2QyxFQUM3QyxXQUErQixFQUMvQixnQkFBeUMsRUFDaEQsU0FBaUMsRUFDMUIsT0FBbUIsRUFDbkIsR0FBc0I7UUFOakM7UUFPUSx1RkFBdUY7UUFDdkYsa0JBQU0sT0FBTyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxTQUN6RTtRQVJNLGFBQU8sR0FBUCxPQUFPLENBQXNDO1FBQzdDLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBRXpDLGFBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsU0FBRyxHQUFILEdBQUcsQ0FBbUI7O0lBRzdCLENBQUM7SUFFRCxzQkFDSSxpREFBZ0I7Ozs7UUFEcEI7WUFFSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7O2dCQXRCUixTQUFTLFNBQUM7b0JBQ1AsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFFBQVEsRUFBRSxjQUFjO29CQUN4QixxK0xBQXdDO29CQUN4QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLENBQUMsRUFBQyxDQUFDO2lCQUM5Rjs7OztnQkFWUSxrQkFBa0I7Z0JBRU8sa0JBQWtCO2dCQUEzQyx1QkFBdUI7Z0JBRHZCLHNCQUFzQjtnQkFKMEIsVUFBVTtnQkFBRSxpQkFBaUI7OzttQ0EwQjdFLFdBQVcsU0FBQyx5QkFBeUI7O0lBSTlDLDBCQUFDO0NBQUEsQUF2QkQsQ0FPeUMsZUFBZSxHQWdCdkQ7U0FoQlksbUJBQW1COzs7SUFFeEIsc0NBQW9EOztJQUNwRCwwQ0FBc0M7O0lBQ3RDLCtDQUFnRDs7SUFFaEQsc0NBQTBCOztJQUMxQixrQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2dyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IElneFJvd0NvbXBvbmVudCB9IGZyb20gJy4uL3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZEJhc2VBUElTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWd4U2VsZWN0aW9uQVBJU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvc2VsZWN0aW9uJztcbmltcG9ydCB7IElneEdyaWRTZWxlY3Rpb25TZXJ2aWNlLCBJZ3hHcmlkQ1JVRFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL2dyaWQtc2VsZWN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gICAgc2VsZWN0b3I6ICdpZ3gtZ3JpZC1yb3cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ncmlkLXJvdy5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IElneFJvd0NvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSWd4R3JpZFJvd0NvbXBvbmVudCl9XVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hHcmlkUm93Q29tcG9uZW50IGV4dGVuZHMgSWd4Um93Q29tcG9uZW50PElneEdyaWRDb21wb25lbnQ+IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGdyaWRBUEk6IEdyaWRCYXNlQVBJU2VydmljZTxJZ3hHcmlkQ29tcG9uZW50PixcbiAgICAgICAgcHVibGljIGNydWRTZXJ2aWNlOiBJZ3hHcmlkQ1JVRFNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBzZWxlY3Rpb25TZXJ2aWNlOiBJZ3hHcmlkU2VsZWN0aW9uU2VydmljZSxcbiAgICAgICAgc2VsZWN0aW9uOiBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgICAgIC8vIEQuUC4gY29uc3RydWN0b3IgZHVwbGljYXRpb24gZHVlIHRvIGVzNiBjb21waWxhdGlvbiwgbWlnaHQgYmUgb2Jzb2xldGUgaW4gdGhlIGZ1dHVyZVxuICAgICAgICAgICAgc3VwZXIoZ3JpZEFQSSwgY3J1ZFNlcnZpY2UsIHNlbGVjdGlvblNlcnZpY2UsIHNlbGVjdGlvbiwgZWxlbWVudCwgY2RyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWdyaWRfX3RyLS1tcmwnKVxuICAgICAgICBnZXQgaGFzQ29sdW1uTGF5b3V0cygpOiBib29sZWFuIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWQuaGFzQ29sdW1uTGF5b3V0cztcbiAgICAgICAgfVxufVxuIl19