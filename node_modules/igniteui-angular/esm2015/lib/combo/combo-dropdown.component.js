/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class IgxComboDropDownComponent extends IgxDropDownComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} selection
     * @param {?} combo
     * @param {?} comboAPI
     * @param {?} _displayDensityOptions
     */
    constructor(elementRef, cdr, selection, combo, comboAPI, _displayDensityOptions) {
        super(elementRef, cdr, selection, _displayDensityOptions);
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.selection = selection;
        this.combo = combo;
        this.comboAPI = comboAPI;
        this._displayDensityOptions = _displayDensityOptions;
        /**
         * @hidden
         * \@internal
         */
        this.children = null;
        this.scrollHandler = () => {
            this.comboAPI.disableTransitions = true;
        };
    }
    /**
     * @protected
     * @return {?}
     */
    get scrollContainer() {
        return this.virtDir.dc.location.nativeElement;
    }
    /**
     * @protected
     * @return {?}
     */
    get isScrolledToLast() {
        /** @type {?} */
        const scrollTop = this.virtDir.getVerticalScroll().scrollTop;
        /** @type {?} */
        const scrollHeight = this.virtDir.getVerticalScroll().scrollHeight;
        return Math.floor(scrollTop + this.virtDir.igxForContainerSize) === scrollHeight;
    }
    /**
     * @protected
     * @return {?}
     */
    get lastVisibleIndex() {
        return this.combo.totalItemCount ?
            Math.floor(this.combo.itemsMaxHeight / this.combo.itemHeight) :
            this.items.length - 1;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    onFocus() {
        this.focusedItem = this._focusedItem || this.items[0];
    }
    /**
     * @hidden \@internal
     * @param {?=} evt
     * @return {?}
     */
    onBlur(evt) {
        this.focusedItem = null;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    onToggleOpened() {
        this.onOpened.emit();
    }
    /**
     * @hidden
     * @return {?}
     */
    navigateFirst() {
        this.navigateItem(this.virtDir.igxForOf.findIndex(e => !e.isHeader));
    }
    /**
     * @hidden
     * @return {?}
     */
    navigatePrev() {
        if (this._focusedItem && this._focusedItem.index === 0 && this.virtDir.state.startIndex === 0) {
            this.combo.focusSearchInput(false);
        }
        else {
            super.navigatePrev();
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    navigateNext() {
        /** @type {?} */
        const lastIndex = this.combo.totalItemCount ? this.combo.totalItemCount - 1 : this.virtDir.igxForOf.length - 1;
        if (this._focusedItem && this._focusedItem.index === lastIndex) {
            this.focusAddItemButton();
        }
        else {
            super.navigateNext();
        }
    }
    /**
     * @hidden \@internal
     * @param {?} item
     * @return {?}
     */
    selectItem(item) {
        if (item === null || item === undefined) {
            return;
        }
        this.comboAPI.set_selected_item(item.itemID);
        this._focusedItem = item;
    }
    /**
     * @private
     * @return {?}
     */
    focusAddItemButton() {
        if (this.combo.isAddButtonVisible()) {
            this.focusedItem = this.items[this.items.length - 1];
        }
    }
    /**
     * @protected
     * @param {?} newItem
     * @return {?}
     */
    scrollToHiddenItem(newItem) { }
    /**
     * @protected
     * @return {?}
     */
    get sortedChildren() {
        if (this.children !== undefined) {
            return this.children.toArray()
                .sort((a, b) => {
                return a.index - b.index;
            });
        }
        return null;
    }
    /**
     * Get all non-header items
     *
     * ```typescript
     * let myDropDownItems = this.dropdown.items;
     * ```
     * @return {?}
     */
    get items() {
        /** @type {?} */
        const items = [];
        if (this.children !== undefined) {
            /** @type {?} */
            const sortedChildren = (/** @type {?} */ (this.sortedChildren));
            for (const child of sortedChildren) {
                if (!child.isHeader) {
                    items.push(child);
                }
            }
        }
        return items;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    updateScrollPosition() {
        this.virtDir.getVerticalScroll().scrollTop = this._scrollPosition;
    }
    /**
     * @hidden \@internal
     * @param {?} key
     * @return {?}
     */
    onItemActionKey(key) {
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
    }
    /**
     * @private
     * @return {?}
     */
    handleEnter() {
        if (this.isAddItemFocused()) {
            this.combo.addItemToCollection();
        }
        else {
            this.close();
        }
    }
    /**
     * @private
     * @return {?}
     */
    handleSpace() {
        if (this.isAddItemFocused()) {
            return;
        }
        else {
            this.selectItem(this.focusedItem);
        }
    }
    /**
     * @private
     * @return {?}
     */
    isAddItemFocused() {
        return this.focusedItem instanceof IgxComboAddItemComponent;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.virtDir.getVerticalScroll().addEventListener('scroll', this.scrollHandler);
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    ngOnDestroy() {
        this.virtDir.getVerticalScroll().removeEventListener('scroll', this.scrollHandler);
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
IgxComboDropDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-combo-drop-down',
                template: "<div class=\"igx-drop-down__list\" igxToggle [style.width]=\"width\" [style.height]=\"height\"\n[style.maxHeight]=\"maxHeight\" [attr.id]=\"this.listId\" role=\"listbox\"\n    (onOpening)=\"onToggleOpening($event)\" (onOpened)=\"onToggleOpened()\"\n    (onClosing)=\"onToggleClosing($event)\" (onClosed)=\"onToggleClosed()\">\n    <ng-container *ngIf=\"!collapsed\">\n        <ng-content></ng-content>\n    </ng-container>\n</div>\n",
                providers: [{ provide: IGX_DROPDOWN_BASE, useExisting: IgxComboDropDownComponent }]
            }] }
];
/** @nocollapse */
IgxComboDropDownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: IgxSelectionAPIService },
    { type: undefined, decorators: [{ type: Inject, args: [IGX_COMBO_COMPONENT,] }] },
    { type: IgxComboAPIService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
];
IgxComboDropDownComponent.propDecorators = {
    children: [{ type: ContentChildren, args: [IgxComboItemComponent, { descendants: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8tZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21iby9jb21iby1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQTRCLGVBQWUsRUFBRSxRQUFRLEVBQ25ILE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZ0IsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWpELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBMEIsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQVE5RSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsb0JBQW9COzs7Ozs7Ozs7SUFDL0QsWUFDYyxVQUFzQixFQUN0QixHQUFzQixFQUN0QixTQUFpQyxFQUNQLEtBQW1CLEVBQzdDLFFBQTRCLEVBQ2Esc0JBQThDO1FBQ2pHLEtBQUssQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBTmhELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsUUFBRyxH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TyxDQUFDLGlCQUFpQixFQUFFLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7OztZQXZNSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsNGJBQW9EO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUseUJBQXlCLEVBQUUsQ0FBQzthQUN0Rjs7OztZQWxCaUMsVUFBVTtZQUF4QyxpQkFBaUI7WUFTWixzQkFBc0I7NENBZXRCLE1BQU0sU0FBQyxtQkFBbUI7WUFqQjFCLGtCQUFrQjs0Q0FtQmxCLFFBQVEsWUFBSSxNQUFNLFNBQUMsbUJBQW1COzs7dUJBd0IxQyxlQUFlLFNBQUMscUJBQXFCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOzs7Ozs7OztJQUE3RCw2Q0FDdUQ7Ozs7O0lBeUV2RCxrREFFQzs7Ozs7SUF6R0csK0NBQWdDOzs7OztJQUNoQyx3Q0FBZ0M7Ozs7O0lBQ2hDLDhDQUEyQzs7SUFDM0MsMENBQXVEOzs7OztJQUN2RCw2Q0FBc0M7Ozs7O0lBQ3RDLDJEQUFpRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBRdWVyeUxpc3QsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgQ29udGVudENoaWxkcmVuLCBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneENvbWJvQmFzZSwgSUdYX0NPTUJPX0NPTVBPTkVOVCB9IGZyb20gJy4vY29tYm8uY29tbW9uJztcbmltcG9ydCB7IElEcm9wRG93bkJhc2UsIElHWF9EUk9QRE9XTl9CQVNFIH0gZnJvbSAnLi4vZHJvcC1kb3duL2Ryb3AtZG93bi5jb21tb24nO1xuaW1wb3J0IHsgSWd4RHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuLi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wRG93bkFjdGlvbktleSB9IGZyb20gJy4uL2Ryb3AtZG93bi9kcm9wLWRvd24uY29tbW9uJztcbmltcG9ydCB7IElneENvbWJvQWRkSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tYm8tYWRkLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IElneENvbWJvQVBJU2VydmljZSB9IGZyb20gJy4vY29tYm8uYXBpJztcbmltcG9ydCB7IElneERyb3BEb3duSXRlbUJhc2UgfSBmcm9tICcuLi9kcm9wLWRvd24vZHJvcC1kb3duLWl0ZW0uYmFzZSc7XG5pbXBvcnQgeyBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgSWd4Q29tYm9JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21iby1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXNwbGF5RGVuc2l0eVRva2VuLCBJRGlzcGxheURlbnNpdHlPcHRpb25zIH0gZnJvbSAnLi4vY29yZS9kZW5zaXR5JztcblxuLyoqIEBoaWRkZW4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWNvbWJvLWRyb3AtZG93bicsXG4gICAgdGVtcGxhdGVVcmw6ICcuLi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IElHWF9EUk9QRE9XTl9CQVNFLCB1c2VFeGlzdGluZzogSWd4Q29tYm9Ecm9wRG93bkNvbXBvbmVudCB9XVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hDb21ib0Ryb3BEb3duQ29tcG9uZW50IGV4dGVuZHMgSWd4RHJvcERvd25Db21wb25lbnQgaW1wbGVtZW50cyBJRHJvcERvd25CYXNlLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3Rpb246IElneFNlbGVjdGlvbkFQSVNlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoSUdYX0NPTUJPX0NPTVBPTkVOVCkgcHVibGljIGNvbWJvOiBJZ3hDb21ib0Jhc2UsXG4gICAgICAgIHByb3RlY3RlZCBjb21ib0FQSTogSWd4Q29tYm9BUElTZXJ2aWNlLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERpc3BsYXlEZW5zaXR5VG9rZW4pIHByb3RlY3RlZCBfZGlzcGxheURlbnNpdHlPcHRpb25zOiBJRGlzcGxheURlbnNpdHlPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIGNkciwgc2VsZWN0aW9uLCBfZGlzcGxheURlbnNpdHlPcHRpb25zKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNjcm9sbENvbnRhaW5lcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlydERpci5kYy5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgaXNTY3JvbGxlZFRvTGFzdCgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy52aXJ0RGlyLmdldFZlcnRpY2FsU2Nyb2xsKCkuc2Nyb2xsVG9wO1xuICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB0aGlzLnZpcnREaXIuZ2V0VmVydGljYWxTY3JvbGwoKS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHNjcm9sbFRvcCArIHRoaXMudmlydERpci5pZ3hGb3JDb250YWluZXJTaXplKSA9PT0gc2Nyb2xsSGVpZ2h0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgbGFzdFZpc2libGVJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21iby50b3RhbEl0ZW1Db3VudCA/XG4gICAgICAgICAgICBNYXRoLmZsb29yKHRoaXMuY29tYm8uaXRlbXNNYXhIZWlnaHQgLyB0aGlzLmNvbWJvLml0ZW1IZWlnaHQpIDpcbiAgICAgICAgICAgIHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZHJlbihJZ3hDb21ib0l0ZW1Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgICBwdWJsaWMgY2hpbGRyZW46IFF1ZXJ5TGlzdDxJZ3hEcm9wRG93bkl0ZW1CYXNlPiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkZvY3VzKCkge1xuICAgICAgICB0aGlzLmZvY3VzZWRJdGVtID0gdGhpcy5fZm9jdXNlZEl0ZW0gfHwgdGhpcy5pdGVtc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBvbkJsdXIoZXZ0Pykge1xuICAgICAgICB0aGlzLmZvY3VzZWRJdGVtID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBvblRvZ2dsZU9wZW5lZCgpIHtcbiAgICAgICAgdGhpcy5vbk9wZW5lZC5lbWl0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuYXZpZ2F0ZUZpcnN0KCkge1xuICAgICAgICB0aGlzLm5hdmlnYXRlSXRlbSh0aGlzLnZpcnREaXIuaWd4Rm9yT2YuZmluZEluZGV4KGUgPT4gIWUuaXNIZWFkZXIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5hdmlnYXRlUHJldigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZvY3VzZWRJdGVtICYmIHRoaXMuX2ZvY3VzZWRJdGVtLmluZGV4ID09PSAwICYmIHRoaXMudmlydERpci5zdGF0ZS5zdGFydEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbWJvLmZvY3VzU2VhcmNoSW5wdXQoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIubmF2aWdhdGVQcmV2KCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmF2aWdhdGVOZXh0KCkge1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSB0aGlzLmNvbWJvLnRvdGFsSXRlbUNvdW50ID8gdGhpcy5jb21iby50b3RhbEl0ZW1Db3VudCAtIDEgOiB0aGlzLnZpcnREaXIuaWd4Rm9yT2YubGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKHRoaXMuX2ZvY3VzZWRJdGVtICYmIHRoaXMuX2ZvY3VzZWRJdGVtLmluZGV4ID09PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNBZGRJdGVtQnV0dG9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5uYXZpZ2F0ZU5leHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdEl0ZW0oaXRlbTogSWd4RHJvcERvd25JdGVtQmFzZSkge1xuICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbWJvQVBJLnNldF9zZWxlY3RlZF9pdGVtKGl0ZW0uaXRlbUlEKTtcbiAgICAgICAgdGhpcy5fZm9jdXNlZEl0ZW0gPSBpdGVtO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9jdXNBZGRJdGVtQnV0dG9uKCkge1xuICAgICAgICBpZiAodGhpcy5jb21iby5pc0FkZEJ1dHRvblZpc2libGUoKSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkSXRlbSA9IHRoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzY3JvbGxUb0hpZGRlbkl0ZW0obmV3SXRlbTogYW55KTogdm9pZCB7IH1cblxuICAgIHByb3RlY3RlZCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbWJvQVBJLmRpc2FibGVUcmFuc2l0aW9ucyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBzb3J0ZWRDaGlsZHJlbigpOiBJZ3hEcm9wRG93bkl0ZW1CYXNlW10ge1xuICAgICAgICBpZiAodGhpcy5jaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi50b0FycmF5KClcbiAgICAgICAgICAgICAgICAuc29ydCgoYTogSWd4RHJvcERvd25JdGVtQmFzZSwgYjogSWd4RHJvcERvd25JdGVtQmFzZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBub24taGVhZGVyIGl0ZW1zXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IG15RHJvcERvd25JdGVtcyA9IHRoaXMuZHJvcGRvd24uaXRlbXM7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGdldCBpdGVtcygpOiBJZ3hDb21ib0l0ZW1Db21wb25lbnRbXSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zOiBJZ3hDb21ib0l0ZW1Db21wb25lbnRbXSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5jaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBzb3J0ZWRDaGlsZHJlbiA9IHRoaXMuc29ydGVkQ2hpbGRyZW4gYXMgSWd4Q29tYm9JdGVtQ29tcG9uZW50W107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHNvcnRlZENoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZC5pc0hlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlU2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgICAgIHRoaXMudmlydERpci5nZXRWZXJ0aWNhbFNjcm9sbCgpLnNjcm9sbFRvcCA9IHRoaXMuX3Njcm9sbFBvc2l0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIG9uSXRlbUFjdGlvbktleShrZXk6IERyb3BEb3duQWN0aW9uS2V5KSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlIERyb3BEb3duQWN0aW9uS2V5LkVOVEVSOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRW50ZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRHJvcERvd25BY3Rpb25LZXkuU1BBQ0U6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTcGFjZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEcm9wRG93bkFjdGlvbktleS5FU0NBUEU6XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVFbnRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBZGRJdGVtRm9jdXNlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbWJvLmFkZEl0ZW1Ub0NvbGxlY3Rpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlU3BhY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQWRkSXRlbUZvY3VzZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKHRoaXMuZm9jdXNlZEl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0FkZEl0ZW1Gb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5mb2N1c2VkSXRlbSBpbnN0YW5jZW9mIElneENvbWJvQWRkSXRlbUNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnZpcnREaXIuZ2V0VmVydGljYWxTY3JvbGwoKS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlydERpci5nZXRWZXJ0aWNhbFNjcm9sbCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIH1cbn1cbiJdfQ==