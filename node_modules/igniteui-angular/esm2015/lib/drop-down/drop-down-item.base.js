/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { IGX_DROPDOWN_BASE } from './drop-down.common';
import { Input, HostBinding, HostListener, ElementRef, Optional, Inject } from '@angular/core';
import { IgxSelectionAPIService } from '../core/selection';
import { DeprecateProperty, showMessage } from '../core/deprecateDecorators';
import { IgxDropDownGroupComponent } from './drop-down-group.component';
/** @type {?} */
let NEXT_ID = 0;
/** @type {?} */
let warningShown = false;
/**
 * An abstract class defining a drop-down item:
 * With properties / styles for selection, highlight, height
 * Bindable property for passing data (`value: any`)
 * Parent component (has to be used under a parent with type `IDropDownBase`)
 * Method for handling click on Host()
 * @abstract
 */
export class IgxDropDownItemBase {
    /**
     * @param {?} dropDown
     * @param {?} elementRef
     * @param {?} group
     * @param {?=} selection
     */
    constructor(dropDown, elementRef, group, selection) {
        this.dropDown = dropDown;
        this.elementRef = elementRef;
        this.group = group;
        this.selection = selection;
        /**
         * @hidden
         */
        this._focused = false;
        this._selected = false;
        this._index = null;
        this._disabled = false;
        /**
         * Sets/gets the `id` of the item.
         * ```html
         * <igx-drop-down-item [id] = 'igx-drop-down-item-0'></igx-drop-down-item>
         * ```
         * ```typescript
         * let itemId =  this.item.id;
         * ```
         * \@memberof IgxSelectItemComponent
         */
        this.id = `igx-drop-down-item-${NEXT_ID++}`;
        /**
         * Gets/sets the `role` attribute of the item. Default is 'option'.
         *
         * ```html
         *  <igx-drop-down-item [role]="customRole"></igx-drop-down-item>
         * ```
         */
        this.role = 'option';
    }
    /**
     * @protected
     * @return {?}
     */
    get hasIndex() {
        return this._index !== null && this._index !== undefined;
    }
    /**
     * @hidden \@internal
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    get itemID() {
        return (/** @type {?} */ (this));
    }
    /**
     * The data index of the dropdown item.
     *
     * ```typescript
     * // get the data index of the selected dropdown item
     * let selectedItemIndex = this.dropdown.selectedItem.index
     * ```
     * @return {?}
     */
    get index() {
        if (this._index === null) {
            warningShown = showMessage('IgxDropDownItemBase: Automatic index is deprecated.' +
                'Bind in the template instead using `<igx-drop-down-item [index]="i"` instead.`', warningShown);
            return this.itemIndex;
        }
        return this._index;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set index(value) {
        this._index = value;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get itemStyle() {
        return !this.isHeader;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get itemStyleCosy() {
        return this.dropDown.displayDensity === 'cosy' && !this.isHeader;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get itemStyleCompact() {
        return this.dropDown.displayDensity === 'compact' && !this.isHeader;
    }
    /**
     * Sets/Gets if the item is the currently selected one in the dropdown
     *
     * ```typescript
     *  let mySelectedItem = this.dropdown.selectedItem;
     *  let isMyItemSelected = mySelectedItem.selected; // true
     * ```
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        if (this.isHeader) {
            return;
        }
        this._selected = value;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get isSelected() {
        return this.selected;
    }
    /**
     * @hidden \@internal
     * @param {?} value
     * @return {?}
     */
    set isSelected(value) {
        this.selected = value;
    }
    /**
     * Sets/gets if the given item is focused
     * ```typescript
     *  let mySelectedItem = this.dropdown.selectedItem;
     *  let isMyItemFocused = mySelectedItem.focused;
     * ```
     * @return {?}
     */
    get focused() {
        return (!this.isHeader && !this.disabled) && this._focused;
    }
    /**
     * ```html
     *  <igx-drop-down-item *ngFor="let item of items" focused={{!item.focused}}>
     *      <div>
     *          {{item.field}}
     *      </div>
     *  </igx-drop-down-item>
     * ```
     * @param {?} value
     * @return {?}
     */
    set focused(value) {
        this._focused = value;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get isFocused() {
        return this.focused;
    }
    /**
     * @hidden \@internal
     * @param {?} value
     * @return {?}
     */
    set isFocused(value) {
        this.focused = value;
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get headerClassCosy() {
        return this.isHeader && this.dropDown.displayDensity === 'cosy';
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get headerClassCompact() {
        return this.isHeader && this.dropDown.displayDensity === 'compact';
    }
    /**
     * Sets/gets if the given item is disabled
     *
     * ```typescript
     *  // get
     *  let mySelectedItem = this.dropdown.selectedItem;
     *  let myItemIsDisabled = mySelectedItem.disabled;
     * ```
     *
     * ```html
     *  <igx-drop-down-item *ngFor="let item of items" disabled={{!item.disabled}}>
     *      <div>
     *          {{item.field}}
     *      </div>
     *  </igx-drop-down-item>
     * ```
     * **NOTE:** Drop-down items inside of a disabled `IgxDropDownGroup` will always count as disabled
     * @return {?}
     */
    get disabled() {
        return this.group ? this.group.disabled || this._disabled : this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = value;
    }
    /**
     * Gets item index
     * @hidden \@internal
     * @return {?}
     */
    get itemIndex() {
        return this.dropDown.items.indexOf(this);
    }
    /**
     * Gets item element height
     * @hidden \@internal
     * @return {?}
     */
    get elementHeight() {
        return this.elementRef.nativeElement.clientHeight;
    }
    /**
     * Get item html element
     * @hidden \@internal
     * @return {?}
     */
    get element() {
        return this.elementRef;
    }
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    clicked(event) {
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._selected) {
            /** @type {?} */
            const dropDownSelectedItem = this.dropDown.selectedItem;
            if (!dropDownSelectedItem) {
                this.dropDown.selectItem(this);
            }
            else if (this.hasIndex
                ? this._index !== dropDownSelectedItem.index || this.value !== dropDownSelectedItem.value :
                this !== dropDownSelectedItem) {
                this.dropDown.selectItem(this);
            }
        }
    }
}
/** @nocollapse */
IgxDropDownItemBase.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IGX_DROPDOWN_BASE,] }] },
    { type: ElementRef },
    { type: IgxDropDownGroupComponent, decorators: [{ type: Optional }] },
    { type: IgxSelectionAPIService, decorators: [{ type: Optional }, { type: Inject, args: [IgxSelectionAPIService,] }] }
];
IgxDropDownItemBase.propDecorators = {
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    index: [{ type: Input }],
    value: [{ type: Input }],
    itemStyle: [{ type: HostBinding, args: ['class.igx-drop-down__item',] }],
    itemStyleCosy: [{ type: HostBinding, args: ['class.igx-drop-down__item--cosy',] }],
    itemStyleCompact: [{ type: HostBinding, args: ['class.igx-drop-down__item--compact',] }],
    selected: [{ type: Input }, { type: HostBinding, args: ['attr.aria-selected',] }, { type: HostBinding, args: ['class.igx-drop-down__item--selected',] }],
    isSelected: [{ type: Input }],
    focused: [{ type: HostBinding, args: ['class.igx-drop-down__item--focused',] }],
    isHeader: [{ type: Input }, { type: HostBinding, args: ['class.igx-drop-down__header',] }],
    headerClassCosy: [{ type: HostBinding, args: ['class.igx-drop-down__header--cosy',] }],
    headerClassCompact: [{ type: HostBinding, args: ['class.igx-drop-down__header--compact',] }],
    disabled: [{ type: Input }, { type: HostBinding, args: ['attr.aria-disabled',] }, { type: HostBinding, args: ['class.igx-drop-down__item--disabled',] }],
    role: [{ type: Input }, { type: HostBinding, args: ['attr.role',] }],
    clicked: [{ type: HostListener, args: ['click', ['$event'],] }]
};
tslib_1.__decorate([
    DeprecateProperty(`IgxDropDownItemBase \`isSelected\` property is deprecated.\n` +
        `Use \`selected\` instead.`),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxDropDownItemBase.prototype, "isSelected", null);
tslib_1.__decorate([
    DeprecateProperty(`IgxDropDownItemBase \`isFocused\` property is depracated.\n` +
        `Use \`focused\` instead.`),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], IgxDropDownItemBase.prototype, "isFocused", null);
if (false) {
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxDropDownItemBase.prototype._focused;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownItemBase.prototype._selected;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownItemBase.prototype._index;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownItemBase.prototype._disabled;
    /**
     * Sets/gets the `id` of the item.
     * ```html
     * <igx-drop-down-item [id] = 'igx-drop-down-item-0'></igx-drop-down-item>
     * ```
     * ```typescript
     * let itemId =  this.item.id;
     * ```
     * \@memberof IgxSelectItemComponent
     * @type {?}
     */
    IgxDropDownItemBase.prototype.id;
    /**
     * Gets/sets the value of the item if the item is databound
     *
     * ```typescript
     * // usage in IgxDropDownItemComponent
     * // get
     * let mySelectedItemValue = this.dropdown.selectedItem.value;
     *
     * // set
     * let mySelectedItem = this.dropdown.selectedItem;
     * mySelectedItem.value = { id: 123, name: 'Example Name' }
     *
     * // usage in IgxComboItemComponent
     * // get
     * let myComboItemValue = this.combo.items[0].value;
     * ```
     * @type {?}
     */
    IgxDropDownItemBase.prototype.value;
    /**
     * Sets/gets if the given item is header
     * ```typescript
     *  // get
     *  let mySelectedItem = this.dropdown.selectedItem;
     *  let isMyItemHeader = mySelectedItem.isHeader;
     * ```
     *
     * ```html
     *  <!--set-->
     *  <igx-dropdown-item *ngFor="let item of items">
     *      <div *ngIf="items.indexOf(item) === 5; then item.isHeader = true">
     *          {{item.field}}
     *           </div>
     *  </igx-drop-down-item>
     * ```
     * @type {?}
     */
    IgxDropDownItemBase.prototype.isHeader;
    /**
     * Gets/sets the `role` attribute of the item. Default is 'option'.
     *
     * ```html
     *  <igx-drop-down-item [role]="customRole"></igx-drop-down-item>
     * ```
     * @type {?}
     */
    IgxDropDownItemBase.prototype.role;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownItemBase.prototype.dropDown;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownItemBase.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownItemBase.prototype.group;
    /**
     * @type {?}
     * @protected
     */
    IgxDropDownItemBase.prototype.selection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLWl0ZW0uYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZHJvcC1kb3duL2Ryb3AtZG93bi1pdGVtLmJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEUsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7SUFFcEUsT0FBTyxHQUFHLENBQUM7O0lBQ1gsWUFBWSxHQUFHLEtBQUs7Ozs7Ozs7OztBQVN4QixNQUFNLE9BQWdCLG1CQUFtQjs7Ozs7OztJQXlSckMsWUFDeUMsUUFBdUIsRUFDbEQsVUFBc0IsRUFDVixLQUFnQyxFQUNBLFNBQWtDO1FBSG5ELGFBQVEsR0FBUixRQUFRLENBQWU7UUFDbEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQTJCO1FBQ0EsY0FBUyxHQUFULFNBQVMsQ0FBeUI7Ozs7UUF6UmxGLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7UUFpQnJCLE9BQUUsR0FBRyxzQkFBc0IsT0FBTyxFQUFFLEVBQUUsQ0FBQzs7Ozs7Ozs7UUF1T3ZDLFNBQUksR0FBRyxRQUFRLENBQUM7SUErQm5CLENBQUM7Ozs7O0lBdFJMLElB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LFNBQUMsMkJBQTJCOzRCQVF2QyxXQUFXLFNBQUMsaUNBQWlDOytCQVE3QyxXQUFXLFNBQUMsb0NBQW9DO3VCQWFoRCxLQUFLLFlBQ0wsV0FBVyxTQUFDLG9CQUFvQixjQUNoQyxXQUFXLFNBQUMscUNBQXFDO3lCQWVqRCxLQUFLO3NCQXFCTCxXQUFXLFNBQUMsb0NBQW9DO3VCQWtEaEQsS0FBSyxZQUNMLFdBQVcsU0FBQyw2QkFBNkI7OEJBTXpDLFdBQVcsU0FBQyxtQ0FBbUM7aUNBUS9DLFdBQVcsU0FBQyxzQ0FBc0M7dUJBdUJsRCxLQUFLLFlBQ0wsV0FBVyxTQUFDLG9CQUFvQixjQUNoQyxXQUFXLFNBQUMscUNBQXFDO21CQWdCakQsS0FBSyxZQUNMLFdBQVcsU0FBQyxXQUFXO3NCQXFDdkIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7QUFsS2pDO0lBRkMsaUJBQWlCLENBQUMsOERBQThEO1FBQzdFLDJCQUEyQixDQUFDOzs7cURBRy9CO0FBdUNEO0lBRkMsaUJBQWlCLENBQUMsNkRBQTZEO1FBQzVFLDBCQUEwQixDQUFDOzs7b0RBRzlCOzs7Ozs7O0lBeEtELHVDQUEyQjs7Ozs7SUFDM0Isd0NBQTRCOzs7OztJQUM1QixxQ0FBd0I7Ozs7O0lBQ3hCLHdDQUE0Qjs7Ozs7Ozs7Ozs7O0lBZTVCLGlDQUU4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtEOUMsb0NBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEhsQix1Q0FFeUI7Ozs7Ozs7OztJQXNEekIsbUNBRXVCOzs7OztJQTJCbkIsdUNBQTREOzs7OztJQUM1RCx5Q0FBZ0M7Ozs7O0lBQ2hDLG9DQUFzRDs7Ozs7SUFDdEQsd0NBQXdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSURyb3BEb3duQmFzZSwgSUdYX0RST1BET1dOX0JBU0UgfSBmcm9tICcuL2Ryb3AtZG93bi5jb21tb24nO1xuaW1wb3J0IHsgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIE9wdGlvbmFsLCBJbmplY3QsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneFNlbGVjdGlvbkFQSVNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBEZXByZWNhdGVQcm9wZXJ0eSwgc2hvd01lc3NhZ2UgfSBmcm9tICcuLi9jb3JlL2RlcHJlY2F0ZURlY29yYXRvcnMnO1xuaW1wb3J0IHsgSWd4RHJvcERvd25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vZHJvcC1kb3duLWdyb3VwLmNvbXBvbmVudCc7XG5cbmxldCBORVhUX0lEID0gMDtcbmxldCB3YXJuaW5nU2hvd24gPSBmYWxzZTtcblxuLyoqXG4gKiBBbiBhYnN0cmFjdCBjbGFzcyBkZWZpbmluZyBhIGRyb3AtZG93biBpdGVtOlxuICogV2l0aCBwcm9wZXJ0aWVzIC8gc3R5bGVzIGZvciBzZWxlY3Rpb24sIGhpZ2hsaWdodCwgaGVpZ2h0XG4gKiBCaW5kYWJsZSBwcm9wZXJ0eSBmb3IgcGFzc2luZyBkYXRhIChgdmFsdWU6IGFueWApXG4gKiBQYXJlbnQgY29tcG9uZW50IChoYXMgdG8gYmUgdXNlZCB1bmRlciBhIHBhcmVudCB3aXRoIHR5cGUgYElEcm9wRG93bkJhc2VgKVxuICogTWV0aG9kIGZvciBoYW5kbGluZyBjbGljayBvbiBIb3N0KClcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElneERyb3BEb3duSXRlbUJhc2UgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9mb2N1c2VkID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBfaW5kZXggPSBudWxsO1xuICAgIHByb3RlY3RlZCBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgZ2V0IGhhc0luZGV4KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5kZXggIT09IG51bGwgJiYgdGhpcy5faW5kZXggIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBpZGAgb2YgdGhlIGl0ZW0uXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZHJvcC1kb3duLWl0ZW0gW2lkXSA9ICdpZ3gtZHJvcC1kb3duLWl0ZW0tMCc+PC9pZ3gtZHJvcC1kb3duLWl0ZW0+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpdGVtSWQgPSAgdGhpcy5pdGVtLmlkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTZWxlY3RJdGVtQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtZHJvcC1kb3duLWl0ZW0tJHtORVhUX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCBpdGVtSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIGluZGV4IG9mIHRoZSBkcm9wZG93biBpdGVtLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldCB0aGUgZGF0YSBpbmRleCBvZiB0aGUgc2VsZWN0ZWQgZHJvcGRvd24gaXRlbVxuICAgICAqIGxldCBzZWxlY3RlZEl0ZW1JbmRleCA9IHRoaXMuZHJvcGRvd24uc2VsZWN0ZWRJdGVtLmluZGV4XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9pbmRleCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgd2FybmluZ1Nob3duID0gc2hvd01lc3NhZ2UoXG4gICAgICAgICAgICAgICAgJ0lneERyb3BEb3duSXRlbUJhc2U6IEF1dG9tYXRpYyBpbmRleCBpcyBkZXByZWNhdGVkLicgK1xuICAgICAgICAgICAgICAgICdCaW5kIGluIHRoZSB0ZW1wbGF0ZSBpbnN0ZWFkIHVzaW5nIGA8aWd4LWRyb3AtZG93bi1pdGVtIFtpbmRleF09XCJpXCJgIGluc3RlYWQuYCcsXG4gICAgICAgICAgICAgICAgd2FybmluZ1Nob3duKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1JbmRleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpbmRleCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pbmRleCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGl0ZW0gaWYgdGhlIGl0ZW0gaXMgZGF0YWJvdW5kXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gdXNhZ2UgaW4gSWd4RHJvcERvd25JdGVtQ29tcG9uZW50XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG15U2VsZWN0ZWRJdGVtVmFsdWUgPSB0aGlzLmRyb3Bkb3duLnNlbGVjdGVkSXRlbS52YWx1ZTtcbiAgICAgKlxuICAgICAqIC8vIHNldFxuICAgICAqIGxldCBteVNlbGVjdGVkSXRlbSA9IHRoaXMuZHJvcGRvd24uc2VsZWN0ZWRJdGVtO1xuICAgICAqIG15U2VsZWN0ZWRJdGVtLnZhbHVlID0geyBpZDogMTIzLCBuYW1lOiAnRXhhbXBsZSBOYW1lJyB9XG4gICAgICpcbiAgICAgKiAvLyB1c2FnZSBpbiBJZ3hDb21ib0l0ZW1Db21wb25lbnRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgbXlDb21ib0l0ZW1WYWx1ZSA9IHRoaXMuY29tYm8uaXRlbXNbMF0udmFsdWU7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZHJvcC1kb3duX19pdGVtJylcbiAgICBnZXQgaXRlbVN0eWxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNIZWFkZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1kcm9wLWRvd25fX2l0ZW0tLWNvc3knKVxuICAgIHB1YmxpYyBnZXQgaXRlbVN0eWxlQ29zeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcERvd24uZGlzcGxheURlbnNpdHkgPT09ICdjb3N5JyAmJiAhdGhpcy5pc0hlYWRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWRyb3AtZG93bl9faXRlbS0tY29tcGFjdCcpXG4gICAgcHVibGljIGdldCBpdGVtU3R5bGVDb21wYWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wRG93bi5kaXNwbGF5RGVuc2l0eSA9PT0gJ2NvbXBhY3QnICYmICF0aGlzLmlzSGVhZGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMvR2V0cyBpZiB0aGUgaXRlbSBpcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG9uZSBpbiB0aGUgZHJvcGRvd25cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgbGV0IG15U2VsZWN0ZWRJdGVtID0gdGhpcy5kcm9wZG93bi5zZWxlY3RlZEl0ZW07XG4gICAgICogIGxldCBpc015SXRlbVNlbGVjdGVkID0gbXlTZWxlY3RlZEl0ZW0uc2VsZWN0ZWQ7IC8vIHRydWVcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXNlbGVjdGVkJylcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1kcm9wLWRvd25fX2l0ZW0tLXNlbGVjdGVkJylcbiAgICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgICB9XG5cbiAgICBzZXQgc2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNIZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBARGVwcmVjYXRlUHJvcGVydHkoYElneERyb3BEb3duSXRlbUJhc2UgXFxgaXNTZWxlY3RlZFxcYCBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLlxcbmAgK1xuICAgICAgICBgVXNlIFxcYHNlbGVjdGVkXFxgIGluc3RlYWQuYClcbiAgICBnZXQgaXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBzZXQgaXNTZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIGlmIHRoZSBnaXZlbiBpdGVtIGlzIGZvY3VzZWRcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGxldCBteVNlbGVjdGVkSXRlbSA9IHRoaXMuZHJvcGRvd24uc2VsZWN0ZWRJdGVtO1xuICAgICAqICBsZXQgaXNNeUl0ZW1Gb2N1c2VkID0gbXlTZWxlY3RlZEl0ZW0uZm9jdXNlZDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1kcm9wLWRvd25fX2l0ZW0tLWZvY3VzZWQnKVxuICAgIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKCF0aGlzLmlzSGVhZGVyICYmICF0aGlzLmRpc2FibGVkKSAmJiB0aGlzLl9mb2N1c2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1kcm9wLWRvd24taXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIGZvY3VzZWQ9e3shaXRlbS5mb2N1c2VkfX0+XG4gICAgICogICAgICA8ZGl2PlxuICAgICAqICAgICAgICAgIHt7aXRlbS5maWVsZH19XG4gICAgICogICAgICA8L2Rpdj5cbiAgICAgKiAgPC9pZ3gtZHJvcC1kb3duLWl0ZW0+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgc2V0IGZvY3VzZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZm9jdXNlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQERlcHJlY2F0ZVByb3BlcnR5KGBJZ3hEcm9wRG93bkl0ZW1CYXNlIFxcYGlzRm9jdXNlZFxcYCBwcm9wZXJ0eSBpcyBkZXByYWNhdGVkLlxcbmAgK1xuICAgICAgICBgVXNlIFxcYGZvY3VzZWRcXGAgaW5zdGVhZC5gKVxuICAgIGdldCBpc0ZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvY3VzZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgc2V0IGlzRm9jdXNlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgaWYgdGhlIGdpdmVuIGl0ZW0gaXMgaGVhZGVyXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICAvLyBnZXRcbiAgICAgKiAgbGV0IG15U2VsZWN0ZWRJdGVtID0gdGhpcy5kcm9wZG93bi5zZWxlY3RlZEl0ZW07XG4gICAgICogIGxldCBpc015SXRlbUhlYWRlciA9IG15U2VsZWN0ZWRJdGVtLmlzSGVhZGVyO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8IS0tc2V0LS0+XG4gICAgICogIDxpZ3gtZHJvcGRvd24taXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxuICAgICAqICAgICAgPGRpdiAqbmdJZj1cIml0ZW1zLmluZGV4T2YoaXRlbSkgPT09IDU7IHRoZW4gaXRlbS5pc0hlYWRlciA9IHRydWVcIj5cbiAgICAgKiAgICAgICAgICB7e2l0ZW0uZmllbGR9fVxuKiAgICAgICAgICAgPC9kaXY+XG4gICAgICogIDwvaWd4LWRyb3AtZG93bi1pdGVtPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZHJvcC1kb3duX19oZWFkZXInKVxuICAgIHB1YmxpYyBpc0hlYWRlcjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZHJvcC1kb3duX19oZWFkZXItLWNvc3knKVxuICAgIHB1YmxpYyBnZXQgaGVhZGVyQ2xhc3NDb3N5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0hlYWRlciAmJiB0aGlzLmRyb3BEb3duLmRpc3BsYXlEZW5zaXR5ID09PSAnY29zeSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1kcm9wLWRvd25fX2hlYWRlci0tY29tcGFjdCcpXG4gICAgcHVibGljIGdldCBoZWFkZXJDbGFzc0NvbXBhY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSGVhZGVyICYmIHRoaXMuZHJvcERvd24uZGlzcGxheURlbnNpdHkgPT09ICdjb21wYWN0JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgaWYgdGhlIGdpdmVuIGl0ZW0gaXMgZGlzYWJsZWRcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgLy8gZ2V0XG4gICAgICogIGxldCBteVNlbGVjdGVkSXRlbSA9IHRoaXMuZHJvcGRvd24uc2VsZWN0ZWRJdGVtO1xuICAgICAqICBsZXQgbXlJdGVtSXNEaXNhYmxlZCA9IG15U2VsZWN0ZWRJdGVtLmRpc2FibGVkO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWRyb3AtZG93bi1pdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCIgZGlzYWJsZWQ9e3shaXRlbS5kaXNhYmxlZH19PlxuICAgICAqICAgICAgPGRpdj5cbiAgICAgKiAgICAgICAgICB7e2l0ZW0uZmllbGR9fVxuICAgICAqICAgICAgPC9kaXY+XG4gICAgICogIDwvaWd4LWRyb3AtZG93bi1pdGVtPlxuICAgICAqIGBgYFxuICAgICAqICoqTk9URToqKiBEcm9wLWRvd24gaXRlbXMgaW5zaWRlIG9mIGEgZGlzYWJsZWQgYElneERyb3BEb3duR3JvdXBgIHdpbGwgYWx3YXlzIGNvdW50IGFzIGRpc2FibGVkXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kaXNhYmxlZCcpXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZHJvcC1kb3duX19pdGVtLS1kaXNhYmxlZCcpXG4gICAgcHVibGljIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXAgPyB0aGlzLmdyb3VwLmRpc2FibGVkIHx8IHRoaXMuX2Rpc2FibGVkIDogdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgYHJvbGVgIGF0dHJpYnV0ZSBvZiB0aGUgaXRlbS4gRGVmYXVsdCBpcyAnb3B0aW9uJy5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1kcm9wLWRvd24taXRlbSBbcm9sZV09XCJjdXN0b21Sb2xlXCI+PC9pZ3gtZHJvcC1kb3duLWl0ZW0+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgcHVibGljIHJvbGUgPSAnb3B0aW9uJztcblxuICAgIC8qKlxuICAgICAqIEdldHMgaXRlbSBpbmRleFxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCBpdGVtSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcERvd24uaXRlbXMuaW5kZXhPZih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGl0ZW0gZWxlbWVudCBoZWlnaHRcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZWxlbWVudEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBpdGVtIGh0bWwgZWxlbWVudFxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCBlbGVtZW50KCk6IEVsZW1lbnRSZWYge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KElHWF9EUk9QRE9XTl9CQVNFKSBwcm90ZWN0ZWQgZHJvcERvd246IElEcm9wRG93bkJhc2UsXG4gICAgICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgZ3JvdXA6IElneERyb3BEb3duR3JvdXBDb21wb25lbnQsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoSWd4U2VsZWN0aW9uQVBJU2VydmljZSkgcHJvdGVjdGVkIHNlbGVjdGlvbj86IElneFNlbGVjdGlvbkFQSVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgY2xpY2tlZChldmVudCkge1xuICAgIH1cblxuICAgIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkKSB7XG4gICAgICAgICAgICBjb25zdCBkcm9wRG93blNlbGVjdGVkSXRlbSA9IHRoaXMuZHJvcERvd24uc2VsZWN0ZWRJdGVtO1xuICAgICAgICAgICAgaWYgKCFkcm9wRG93blNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcERvd24uc2VsZWN0SXRlbSh0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNJbmRleFxuICAgICAgICAgICAgICAgID8gdGhpcy5faW5kZXggIT09IGRyb3BEb3duU2VsZWN0ZWRJdGVtLmluZGV4IHx8IHRoaXMudmFsdWUgIT09IGRyb3BEb3duU2VsZWN0ZWRJdGVtLnZhbHVlIDpcbiAgICAgICAgICAgICAgICB0aGlzICE9PSBkcm9wRG93blNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcERvd24uc2VsZWN0SXRlbSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==