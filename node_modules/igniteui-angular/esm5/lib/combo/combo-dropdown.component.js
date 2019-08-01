/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Inject, QueryList, ContentChildren, Optional } from '@angular/core';
import { IGX_COMBO_COMPONENT } from './combo.common';
import { IGX_DROPDOWN_BASE } from '../drop-down/drop-down.common';
import { IgxDropDownComponent } from '../drop-down/drop-down.component';
import { DropDownActionKey } from '../drop-down/drop-down.common';
import { IgxComboAddItemComponent } from './combo-add-item.component';
import { IgxComboAPIService } from './combo.api';
import { IgxSelectionAPIService } from '../core/selection';
import { IgxComboItemComponent } from './combo-item.component';
import { DisplayDensityToken } from '../core/density';
/**
 * @hidden
 */
var IgxComboDropDownComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxComboDropDownComponent, _super);
    function IgxComboDropDownComponent(elementRef, cdr, selection, combo, comboAPI, _displayDensityOptions) {
        var _this = _super.call(this, elementRef, cdr, selection, _displayDensityOptions) || this;
        _this.elementRef = elementRef;
        _this.cdr = cdr;
        _this.selection = selection;
        _this.combo = combo;
        _this.comboAPI = comboAPI;
        _this._displayDensityOptions = _displayDensityOptions;
        /**
         * @hidden
         * \@internal
         */
        _this.children = null;
        _this.scrollHandler = function () {
            _this.comboAPI.disableTransitions = true;
        };
        return _this;
    }
    Object.defineProperty(IgxComboDropDownComponent.prototype, "scrollContainer", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.virtDir.dc.location.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboDropDownComponent.prototype, "isScrolledToLast", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            /** @type {?} */
            var scrollTop = this.virtDir.getVerticalScroll().scrollTop;
            /** @type {?} */
            var scrollHeight = this.virtDir.getVerticalScroll().scrollHeight;
            return Math.floor(scrollTop + this.virtDir.igxForContainerSize) === scrollHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboDropDownComponent.prototype, "lastVisibleIndex", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.combo.totalItemCount ?
                Math.floor(this.combo.itemsMaxHeight / this.combo.itemHeight) :
                this.items.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.onFocus = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.focusedItem = this._focusedItem || this.items[0];
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?=} evt
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.onBlur = /**
     * @hidden \@internal
     * @param {?=} evt
     * @return {?}
     */
    function (evt) {
        this.focusedItem = null;
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.onToggleOpened = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.onOpened.emit();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.navigateFirst = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.navigateItem(this.virtDir.igxForOf.findIndex(function (e) { return !e.isHeader; }));
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.navigatePrev = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this._focusedItem && this._focusedItem.index === 0 && this.virtDir.state.startIndex === 0) {
            this.combo.focusSearchInput(false);
        }
        else {
            _super.prototype.navigatePrev.call(this);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.navigateNext = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lastIndex = this.combo.totalItemCount ? this.combo.totalItemCount - 1 : this.virtDir.igxForOf.length - 1;
        if (this._focusedItem && this._focusedItem.index === lastIndex) {
            this.focusAddItemButton();
        }
        else {
            _super.prototype.navigateNext.call(this);
        }
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} item
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.selectItem = /**
     * @hidden \@internal
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item === null || item === undefined) {
            return;
        }
        this.comboAPI.set_selected_item(item.itemID);
        this._focusedItem = item;
    };
    /**
     * @private
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.focusAddItemButton = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.combo.isAddButtonVisible()) {
            this.focusedItem = this.items[this.items.length - 1];
        }
    };
    /**
     * @protected
     * @param {?} newItem
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.scrollToHiddenItem = /**
     * @protected
     * @param {?} newItem
     * @return {?}
     */
    function (newItem) { };
    Object.defineProperty(IgxComboDropDownComponent.prototype, "sortedChildren", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            if (this.children !== undefined) {
                return this.children.toArray()
                    .sort(function (a, b) {
                    return a.index - b.index;
                });
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboDropDownComponent.prototype, "items", {
        /**
         * Get all non-header items
         *
         * ```typescript
         * let myDropDownItems = this.dropdown.items;
         * ```
         */
        get: /**
         * Get all non-header items
         *
         * ```typescript
         * let myDropDownItems = this.dropdown.items;
         * ```
         * @return {?}
         */
        function () {
            var e_1, _a;
            /** @type {?} */
            var items = [];
            if (this.children !== undefined) {
                /** @type {?} */
                var sortedChildren = (/** @type {?} */ (this.sortedChildren));
                try {
                    for (var sortedChildren_1 = tslib_1.__values(sortedChildren), sortedChildren_1_1 = sortedChildren_1.next(); !sortedChildren_1_1.done; sortedChildren_1_1 = sortedChildren_1.next()) {
                        var child = sortedChildren_1_1.value;
                        if (!child.isHeader) {
                            items.push(child);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (sortedChildren_1_1 && !sortedChildren_1_1.done && (_a = sortedChildren_1.return)) _a.call(sortedChildren_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return items;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.updateScrollPosition = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.virtDir.getVerticalScroll().scrollTop = this._scrollPosition;
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} key
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.onItemActionKey = /**
     * @hidden \@internal
     * @param {?} key
     * @return {?}
     */
    function (key) {
        switch (key) {
            case DropDownActionKey.ENTER:
                this.handleEnter();
                break;
            case DropDownActionKey.SPACE:
                this.handleSpace();
                break;
            case DropDownActionKey.ESCAPE:
                this.close();
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.handleEnter = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isAddItemFocused()) {
            this.combo.addItemToCollection();
        }
        else {
            this.close();
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.handleSpace = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isAddItemFocused()) {
            return;
        }
        else {
            this.selectItem(this.focusedItem);
        }
    };
    /**
     * @private
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.isAddItemFocused = /**
     * @private
     * @return {?}
     */
    function () {
        return this.focusedItem instanceof IgxComboAddItemComponent;
    };
    /**
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.virtDir.getVerticalScroll().addEventListener('scroll', this.scrollHandler);
    };
    /**
     *@hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxComboDropDownComponent.prototype.ngOnDestroy = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.virtDir.getVerticalScroll().removeEventListener('scroll', this.scrollHandler);
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    IgxComboDropDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-combo-drop-down',
                    template: "<div class=\"igx-drop-down__list\" igxToggle [style.width]=\"width\" [style.height]=\"height\"\n[style.maxHeight]=\"maxHeight\" [attr.id]=\"this.listId\" role=\"listbox\"\n    (onOpening)=\"onToggleOpening($event)\" (onOpened)=\"onToggleOpened()\"\n    (onClosing)=\"onToggleClosing($event)\" (onClosed)=\"onToggleClosed()\">\n    <ng-container *ngIf=\"!collapsed\">\n        <ng-content></ng-content>\n    </ng-container>\n</div>\n",
                    providers: [{ provide: IGX_DROPDOWN_BASE, useExisting: IgxComboDropDownComponent }]
                }] }
    ];
    /** @nocollapse */
    IgxComboDropDownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: IgxSelectionAPIService },
        { type: undefined, decorators: [{ type: Inject, args: [IGX_COMBO_COMPONENT,] }] },
        { type: IgxComboAPIService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
    ]; };
    IgxComboDropDownComponent.propDecorators = {
        children: [{ type: ContentChildren, args: [IgxComboItemComponent, { descendants: true },] }]
    };
    return IgxComboDropDownComponent;
}(IgxDropDownComponent));
export { IgxComboDropDownComponent };
if (false) {
    /**
     * @hidden
     * \@internal
     * @type {?}
     */
    IgxComboDropDownComponent.prototype.children;
    /**
     * @type {?}
     * @protected
     */
    IgxComboDropDownComponent.prototype.scrollHandler;
    /**
     * @type {?}
     * @protected
     */
    IgxComboDropDownComponent.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    IgxComboDropDownComponent.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    IgxComboDropDownComponent.prototype.selection;
    /** @type {?} */
    IgxComboDropDownComponent.prototype.combo;
    /**
     * @type {?}
     * @protected
     */
    IgxComboDropDownComponent.prototype.comboAPI;
    /**
     * @type {?}
     * @protected
     */
    IgxComboDropDownComponent.prototype._displayDensityOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21iby9jb21iby1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUE0QixlQUFlLEVBQUUsUUFBUSxFQUNuSCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdCLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQTBCLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFHOUU7SUFLK0MscURBQW9CO0lBQy9ELG1DQUNjLFVBQXNCLEVBQ3RCLEdBQXNCLEVBQ3RCLFNBQWlDLEVBQ1AsS0FBbUIsRUFDN0MsUUFBNEIsRUFDYSxzQkFBOEM7UUFOckcsWUFPSSxrQkFBTSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxzQkFBc0IsQ0FBQyxTQUM1RDtRQVBhLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RC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bk1ZLHlCQUF5Qjs7Ozs7OztJQStCbEMsNkNBQ3VEOzs7OztJQXlFdkQsa0RBRUM7Ozs7O0lBekdHLCtDQUFnQzs7Ozs7SUFDaEMsd0NBQWdDOzs7OztJQUNoQyw4Q0FBMkM7O0lBQzNDLDBDQUF1RDs7Ozs7SUFDdkQsNkNBQXNDOzs7OztJQUN0QywyREFBaUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgUXVlcnlMaXN0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIENvbnRlbnRDaGlsZHJlbiwgT3B0aW9uYWxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hDb21ib0Jhc2UsIElHWF9DT01CT19DT01QT05FTlQgfSBmcm9tICcuL2NvbWJvLmNvbW1vbic7XG5pbXBvcnQgeyBJRHJvcERvd25CYXNlLCBJR1hfRFJPUERPV05fQkFTRSB9IGZyb20gJy4uL2Ryb3AtZG93bi9kcm9wLWRvd24uY29tbW9uJztcbmltcG9ydCB7IElneERyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcC1kb3duL2Ryb3AtZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJvcERvd25BY3Rpb25LZXkgfSBmcm9tICcuLi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbW1vbic7XG5pbXBvcnQgeyBJZ3hDb21ib0FkZEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbWJvLWFkZC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hDb21ib0FQSVNlcnZpY2UgfSBmcm9tICcuL2NvbWJvLmFwaSc7XG5pbXBvcnQgeyBJZ3hEcm9wRG93bkl0ZW1CYXNlIH0gZnJvbSAnLi4vZHJvcC1kb3duL2Ryb3AtZG93bi1pdGVtLmJhc2UnO1xuaW1wb3J0IHsgSWd4U2VsZWN0aW9uQVBJU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VsZWN0aW9uJztcbmltcG9ydCB7IElneENvbWJvSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tYm8taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlzcGxheURlbnNpdHlUb2tlbiwgSURpc3BsYXlEZW5zaXR5T3B0aW9ucyB9IGZyb20gJy4uL2NvcmUvZGVuc2l0eSc7XG5cbi8qKiBAaGlkZGVuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1jb21iby1kcm9wLWRvd24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi4vZHJvcC1kb3duL2Ryb3AtZG93bi5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBJR1hfRFJPUERPV05fQkFTRSwgdXNlRXhpc3Rpbmc6IElneENvbWJvRHJvcERvd25Db21wb25lbnQgfV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4Q29tYm9Ecm9wRG93bkNvbXBvbmVudCBleHRlbmRzIElneERyb3BEb3duQ29tcG9uZW50IGltcGxlbWVudHMgSURyb3BEb3duQmFzZSwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcm90ZWN0ZWQgc2VsZWN0aW9uOiBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KElHWF9DT01CT19DT01QT05FTlQpIHB1YmxpYyBjb21ibzogSWd4Q29tYm9CYXNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29tYm9BUEk6IElneENvbWJvQVBJU2VydmljZSxcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChEaXNwbGF5RGVuc2l0eVRva2VuKSBwcm90ZWN0ZWQgX2Rpc3BsYXlEZW5zaXR5T3B0aW9uczogSURpc3BsYXlEZW5zaXR5T3B0aW9ucykge1xuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCBjZHIsIHNlbGVjdGlvbiwgX2Rpc3BsYXlEZW5zaXR5T3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBzY3JvbGxDb250YWluZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpcnREaXIuZGMubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGlzU2Nyb2xsZWRUb0xhc3QoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMudmlydERpci5nZXRWZXJ0aWNhbFNjcm9sbCgpLnNjcm9sbFRvcDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy52aXJ0RGlyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihzY3JvbGxUb3AgKyB0aGlzLnZpcnREaXIuaWd4Rm9yQ29udGFpbmVyU2l6ZSkgPT09IHNjcm9sbEhlaWdodDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGxhc3RWaXNpYmxlSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tYm8udG90YWxJdGVtQ291bnQgP1xuICAgICAgICAgICAgTWF0aC5mbG9vcih0aGlzLmNvbWJvLml0ZW1zTWF4SGVpZ2h0IC8gdGhpcy5jb21iby5pdGVtSGVpZ2h0KSA6XG4gICAgICAgICAgICB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGRyZW4oSWd4Q29tYm9JdGVtQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gICAgcHVibGljIGNoaWxkcmVuOiBRdWVyeUxpc3Q8SWd4RHJvcERvd25JdGVtQmFzZT4gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgb25Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkSXRlbSA9IHRoaXMuX2ZvY3VzZWRJdGVtIHx8IHRoaXMuaXRlbXNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgb25CbHVyKGV2dD8pIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkSXRlbSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgb25Ub2dnbGVPcGVuZWQoKSB7XG4gICAgICAgIHRoaXMub25PcGVuZWQuZW1pdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmF2aWdhdGVGaXJzdCgpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUl0ZW0odGhpcy52aXJ0RGlyLmlneEZvck9mLmZpbmRJbmRleChlID0+ICFlLmlzSGVhZGVyKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuYXZpZ2F0ZVByZXYoKSB7XG4gICAgICAgIGlmICh0aGlzLl9mb2N1c2VkSXRlbSAmJiB0aGlzLl9mb2N1c2VkSXRlbS5pbmRleCA9PT0gMCAmJiB0aGlzLnZpcnREaXIuc3RhdGUuc3RhcnRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jb21iby5mb2N1c1NlYXJjaElucHV0KGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLm5hdmlnYXRlUHJldigpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5hdmlnYXRlTmV4dCgpIHtcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5jb21iby50b3RhbEl0ZW1Db3VudCA/IHRoaXMuY29tYm8udG90YWxJdGVtQ291bnQgLSAxIDogdGhpcy52aXJ0RGlyLmlneEZvck9mLmxlbmd0aCAtIDE7XG4gICAgICAgIGlmICh0aGlzLl9mb2N1c2VkSXRlbSAmJiB0aGlzLl9mb2N1c2VkSXRlbS5pbmRleCA9PT0gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzQWRkSXRlbUJ1dHRvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIubmF2aWdhdGVOZXh0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RJdGVtKGl0ZW06IElneERyb3BEb3duSXRlbUJhc2UpIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21ib0FQSS5zZXRfc2VsZWN0ZWRfaXRlbShpdGVtLml0ZW1JRCk7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWRJdGVtID0gaXRlbTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvY3VzQWRkSXRlbUJ1dHRvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tYm8uaXNBZGRCdXR0b25WaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZEl0ZW0gPSB0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2Nyb2xsVG9IaWRkZW5JdGVtKG5ld0l0ZW06IGFueSk6IHZvaWQgeyB9XG5cbiAgICBwcm90ZWN0ZWQgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jb21ib0FQSS5kaXNhYmxlVHJhbnNpdGlvbnMgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgc29ydGVkQ2hpbGRyZW4oKTogSWd4RHJvcERvd25JdGVtQmFzZVtdIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4udG9BcnJheSgpXG4gICAgICAgICAgICAgICAgLnNvcnQoKGE6IElneERyb3BEb3duSXRlbUJhc2UsIGI6IElneERyb3BEb3duSXRlbUJhc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgbm9uLWhlYWRlciBpdGVtc1xuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBteURyb3BEb3duSXRlbXMgPSB0aGlzLmRyb3Bkb3duLml0ZW1zO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXRlbXMoKTogSWd4Q29tYm9JdGVtQ29tcG9uZW50W10ge1xuICAgICAgICBjb25zdCBpdGVtczogSWd4Q29tYm9JdGVtQ29tcG9uZW50W10gPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3Qgc29ydGVkQ2hpbGRyZW4gPSB0aGlzLnNvcnRlZENoaWxkcmVuIGFzIElneENvbWJvSXRlbUNvbXBvbmVudFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBzb3J0ZWRDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmICghY2hpbGQuaXNIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZVNjcm9sbFBvc2l0aW9uKCkge1xuICAgICAgICB0aGlzLnZpcnREaXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxUb3AgPSB0aGlzLl9zY3JvbGxQb3NpdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkl0ZW1BY3Rpb25LZXkoa2V5OiBEcm9wRG93bkFjdGlvbktleSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSBEcm9wRG93bkFjdGlvbktleS5FTlRFUjpcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVudGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERyb3BEb3duQWN0aW9uS2V5LlNQQUNFOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3BhY2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRHJvcERvd25BY3Rpb25LZXkuRVNDQVBFOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRW50ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQWRkSXRlbUZvY3VzZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5jb21iby5hZGRJdGVtVG9Db2xsZWN0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVNwYWNlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0FkZEl0ZW1Gb2N1c2VkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbSh0aGlzLmZvY3VzZWRJdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNBZGRJdGVtRm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9jdXNlZEl0ZW0gaW5zdGFuY2VvZiBJZ3hDb21ib0FkZEl0ZW1Db21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy52aXJ0RGlyLmdldFZlcnRpY2FsU2Nyb2xsKCkuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpcnREaXIuZ2V0VmVydGljYWxTY3JvbGwoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB9XG59XG4iXX0=