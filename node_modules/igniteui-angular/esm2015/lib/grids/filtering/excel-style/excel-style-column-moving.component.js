/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IgxColumnComponent, IgxColumnGroupComponent } from '../../column.component';
import { IgxGridBaseComponent } from '../../grid-base.component';
import { DisplayDensity } from '../../../core/density';
/**
 * @hidden
 */
export class IgxExcelStyleColumnMovingComponent {
    constructor() { }
    /**
     * @private
     * @return {?}
     */
    get visibleColumns() {
        return this.grid.visibleColumns.filter(col => !(col instanceof IgxColumnGroupComponent));
    }
    /**
     * @return {?}
     */
    get canNotMoveLeft() {
        return this.column.visibleIndex === 0 ||
            (this.grid.unpinnedColumns.indexOf(this.column) === 0 && this.column.disablePinning) ||
            (this.column.level !== 0 && !this.findColumn(0, this.visibleColumns));
    }
    /**
     * @return {?}
     */
    get canNotMoveRight() {
        return this.column.visibleIndex === this.visibleColumns.length - 1 ||
            (this.column.level !== 0 && !this.findColumn(1, this.visibleColumns));
    }
    /**
     * @param {?} moveDirection
     * @return {?}
     */
    onMoveButtonClicked(moveDirection) {
        /** @type {?} */
        let targetColumn;
        if (this.column.pinned) {
            if (this.column.isLastPinned && moveDirection === 1) {
                targetColumn = this.grid.unpinnedColumns[0];
                moveDirection = 0;
            }
            else {
                targetColumn = this.findColumn(moveDirection, this.grid.pinnedColumns);
            }
        }
        else if (this.grid.unpinnedColumns.indexOf(this.column) === 0 && moveDirection === 0) {
            targetColumn = this.grid.pinnedColumns[this.grid.pinnedColumns.length - 1];
            moveDirection = 1;
        }
        else {
            targetColumn = this.findColumn(moveDirection, this.grid.unpinnedColumns);
        }
        this.grid.moveColumn(this.column, targetColumn, moveDirection);
    }
    /**
     * @private
     * @param {?} moveDirection
     * @param {?} columns
     * @return {?}
     */
    findColumn(moveDirection, columns) {
        /** @type {?} */
        let index = columns.indexOf(this.column);
        if (moveDirection === 0) {
            while (index > 0) {
                index--;
                if (columns[index].level === this.column.level && columns[index].parent === this.column.parent) {
                    return columns[index];
                }
            }
        }
        else {
            while (index < columns.length - 1) {
                index++;
                if (columns[index].level === this.column.level && columns[index].parent === this.column.parent) {
                    return columns[index];
                }
            }
        }
    }
}
IgxExcelStyleColumnMovingComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-excel-style-column-moving',
                template: "<header>\n    {{ grid.resourceStrings.igx_grid_excel_filter_moving_header }}\n</header>\n<section class=\"igx-excel-filter__move-buttons\">\n    <button [displayDensity]=\"displayDensity\"\n        igxButton\n        [disabled]=\"canNotMoveLeft\"\n        (click)=\"onMoveButtonClicked(0)\">\n        <igx-icon>arrow_back</igx-icon>\n        <span>\n            {{ displayDensity==='compact'?\n            grid.resourceStrings.igx_grid_excel_filter_moving_left_short:\n            grid.resourceStrings.igx_grid_excel_filter_moving_left }}\n        </span>\n    </button>\n    <button [displayDensity]=\"displayDensity\"\n        igxButton\n        [disabled]=\"canNotMoveRight\"\n        (click)=\"onMoveButtonClicked(1)\">\n        <span>\n            {{ displayDensity==='compact'?\n            grid.resourceStrings.igx_grid_excel_filter_moving_right_short:\n            grid.resourceStrings.igx_grid_excel_filter_moving_right }}\n        </span>\n        <igx-icon>arrow_forwards</igx-icon>\n    </button>\n</section>\n"
            }] }
];
/** @nocollapse */
IgxExcelStyleColumnMovingComponent.ctorParameters = () => [];
IgxExcelStyleColumnMovingComponent.propDecorators = {
    column: [{ type: Input }],
    grid: [{ type: Input }],
    displayDensity: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    IgxExcelStyleColumnMovingComponent.prototype.column;
    /** @type {?} */
    IgxExcelStyleColumnMovingComponent.prototype.grid;
    /** @type {?} */
    IgxExcelStyleColumnMovingComponent.prototype.displayDensity;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtc3R5bGUtY29sdW1uLW1vdmluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2ZpbHRlcmluZy9leGNlbC1zdHlsZS9leGNlbC1zdHlsZS1jb2x1bW4tbW92aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBV3ZELE1BQU0sT0FBTyxrQ0FBa0M7SUFXM0MsZ0JBQWUsQ0FBQzs7Ozs7SUFFaEIsSUFBWSxjQUFjO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7OztJQUVELElBQUksY0FBYztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssQ0FBQztZQUNqQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1lBQ3BGLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVELElBQUksZUFBZTtRQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUM5RCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7O0lBRU0sbUJBQW1CLENBQUMsYUFBYTs7WUFDaEMsWUFBWTtRQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksYUFBYSxLQUFLLENBQUMsRUFBRTtnQkFDakQsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNILFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzFFO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLGFBQWEsS0FBSyxDQUFDLEVBQUU7WUFDcEYsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzRSxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO2FBQU07WUFDSCxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUM1RTtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7Ozs7SUFFTyxVQUFVLENBQUMsYUFBcUIsRUFBRSxPQUE2Qjs7WUFDL0QsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4QyxJQUFJLGFBQWEsS0FBSyxDQUFDLEVBQUU7WUFDckIsT0FBTyxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUNkLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO29CQUM1RixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDekI7YUFDSjtTQUNKO2FBQU07WUFDSCxPQUFPLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDL0IsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQzVGLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN6QjthQUNKO1NBQ0o7SUFDTCxDQUFDOzs7WUFyRUosU0FBUyxTQUFDO2dCQUNQLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixRQUFRLEVBQUUsK0JBQStCO2dCQUN6QywwZ0NBQXlEO2FBQzVEOzs7OztxQkFHSSxLQUFLO21CQUdMLEtBQUs7NkJBR0wsS0FBSzs7OztJQU5OLG9EQUNrQzs7SUFFbEMsa0RBQ2tDOztJQUVsQyw0REFDc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50LCBJZ3hDb2x1bW5Hcm91cENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4R3JpZEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9ncmlkLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IERpc3BsYXlEZW5zaXR5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZW5zaXR5JztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LWV4Y2VsLXN0eWxlLWNvbHVtbi1tb3ZpbmcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9leGNlbC1zdHlsZS1jb2x1bW4tbW92aW5nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hFeGNlbFN0eWxlQ29sdW1uTW92aW5nQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ3JpZDogSWd4R3JpZEJhc2VDb21wb25lbnQ7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNwbGF5RGVuc2l0eTogRGlzcGxheURlbnNpdHk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBwcml2YXRlIGdldCB2aXNpYmxlQ29sdW1ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC52aXNpYmxlQ29sdW1ucy5maWx0ZXIoY29sID0+ICEoY29sIGluc3RhbmNlb2YgSWd4Q29sdW1uR3JvdXBDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICBnZXQgY2FuTm90TW92ZUxlZnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi52aXNpYmxlSW5kZXggPT09IDAgfHxcbiAgICAgICAgICAgICh0aGlzLmdyaWQudW5waW5uZWRDb2x1bW5zLmluZGV4T2YodGhpcy5jb2x1bW4pID09PSAwICYmIHRoaXMuY29sdW1uLmRpc2FibGVQaW5uaW5nKSB8fFxuICAgICAgICAgICAgKHRoaXMuY29sdW1uLmxldmVsICE9PSAwICYmICF0aGlzLmZpbmRDb2x1bW4oMCwgdGhpcy52aXNpYmxlQ29sdW1ucykpO1xuICAgIH1cblxuICAgIGdldCBjYW5Ob3RNb3ZlUmlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi52aXNpYmxlSW5kZXggPT09IHRoaXMudmlzaWJsZUNvbHVtbnMubGVuZ3RoIC0gMSB8fFxuICAgICAgICAgICAgKHRoaXMuY29sdW1uLmxldmVsICE9PSAwICYmICF0aGlzLmZpbmRDb2x1bW4oMSwgdGhpcy52aXNpYmxlQ29sdW1ucykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1vdmVCdXR0b25DbGlja2VkKG1vdmVEaXJlY3Rpb24pIHtcbiAgICAgICAgbGV0IHRhcmdldENvbHVtbjtcbiAgICAgICAgaWYgKHRoaXMuY29sdW1uLnBpbm5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uLmlzTGFzdFBpbm5lZCAmJiBtb3ZlRGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Q29sdW1uID0gdGhpcy5ncmlkLnVucGlubmVkQ29sdW1uc1swXTtcbiAgICAgICAgICAgICAgICBtb3ZlRGlyZWN0aW9uID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Q29sdW1uID0gdGhpcy5maW5kQ29sdW1uKG1vdmVEaXJlY3Rpb24sIHRoaXMuZ3JpZC5waW5uZWRDb2x1bW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdyaWQudW5waW5uZWRDb2x1bW5zLmluZGV4T2YodGhpcy5jb2x1bW4pID09PSAwICYmIG1vdmVEaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgICAgIHRhcmdldENvbHVtbiA9IHRoaXMuZ3JpZC5waW5uZWRDb2x1bW5zW3RoaXMuZ3JpZC5waW5uZWRDb2x1bW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgbW92ZURpcmVjdGlvbiA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRDb2x1bW4gPSB0aGlzLmZpbmRDb2x1bW4obW92ZURpcmVjdGlvbiwgdGhpcy5ncmlkLnVucGlubmVkQ29sdW1ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmlkLm1vdmVDb2x1bW4odGhpcy5jb2x1bW4sIHRhcmdldENvbHVtbiwgbW92ZURpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kQ29sdW1uKG1vdmVEaXJlY3Rpb246IG51bWJlciwgY29sdW1uczogSWd4Q29sdW1uQ29tcG9uZW50W10pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gY29sdW1ucy5pbmRleE9mKHRoaXMuY29sdW1uKTtcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5zW2luZGV4XS5sZXZlbCA9PT0gdGhpcy5jb2x1bW4ubGV2ZWwgJiYgY29sdW1uc1tpbmRleF0ucGFyZW50ID09PSB0aGlzLmNvbHVtbi5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IGNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbnNbaW5kZXhdLmxldmVsID09PSB0aGlzLmNvbHVtbi5sZXZlbCAmJiBjb2x1bW5zW2luZGV4XS5wYXJlbnQgPT09IHRoaXMuY29sdW1uLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sdW1uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19