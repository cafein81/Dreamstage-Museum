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
var NEXT_ID = 0;
/** @type {?} */
var warningShown = false;
/**
 * An abstract class defining a drop-down item:
 * With properties / styles for selection, highlight, height
 * Bindable property for passing data (`value: any`)
 * Parent component (has to be used under a parent with type `IDropDownBase`)
 * Method for handling click on Host()
 * @abstract
 */
var IgxDropDownItemBase = /** @class */ (function () {
    function IgxDropDownItemBase(dropDown, elementRef, group, selection) {
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
        this.id = "igx-drop-down-item-" + NEXT_ID++;
        /**
         * Gets/sets the `role` attribute of the item. Default is 'option'.
         *
         * ```html
         *  <igx-drop-down-item [role]="customRole"></igx-drop-down-item>
         * ```
         */
        this.role = 'option';
    }
    Object.defineProperty(IgxDropDownItemBase.prototype, "hasIndex", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this._index !== null && this._index !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemBase.prototype, "itemID", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            return (/** @type {?} */ (this));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemBase.prototype, "index", {
        /**
         * The data index of the dropdown item.
         *
         * ```typescript
         * // get the data index of the selected dropdown item
         * let selectedItemIndex = this.dropdown.selectedItem.index
         * ```
         */
        get: /**
         * The data index of the dropdown item.
         *
         * ```typescript
         * // get the data index of the selected dropdown item
         * let selectedItemIndex = this.dropdown.selectedItem.index
         * ```
         * @return {?}
         */
        function () {
            if (this._index === null) {
                warningShown = showMessage('IgxDropDownItemBase: Automatic index is deprecated.' +
                    'Bind in the template instead using `<igx-drop-down-item [index]="i"` instead.`', warningShown);
                return this.itemIndex;
            }
            return this._index;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._index = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemBase.prototype, "itemStyle", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return !this.isHeader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemBase.prototype, "itemStyleCosy", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.dropDown.displayDensity === 'cosy' && !this.isHeader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemBase.prototype, "itemStyleCompact", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.dropDown.displayDensity === 'compact' && !this.isHeader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemBase.prototype, "selected", {
        /**
         * Sets/Gets if the item is the currently selected one in the dropdown
         *
         * ```typescript
         *  let mySelectedItem = this.dropdown.selectedItem;
         *  let isMyItemSelected = mySelectedItem.selected; // true
         * ```
         */
        get: /**
         * Sets/Gets if the item is the currently selected one in the dropdown
         *
         * ```typescript
         *  let mySelectedItem = this.dropdown.selectedItem;
         *  let isMyItemSelected = mySelectedItem.selected; // true
         * ```
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.isHeader) {
                return;
            }
            this._selected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemBase.prototype, "isSelected", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.selected;
        },
        /**
         * @hidden @internal
         */
        set: /**
         * @hidden \@internal
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.selected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemBase.prototype, "focused", {
        /**
         * Sets/gets if the given item is focused
         * ```typescript
         *  let mySelectedItem = this.dropdown.selectedItem;
         *  let isMyItemFocused = mySelectedItem.focused;
         * ```
         */
        get: /**
         * Sets/gets if the given item is focused
         * ```typescript
         *  let mySelectedItem = this.dropdown.selectedItem;
         *  let isMyItemFocused = mySelectedItem.focused;
         * ```
         * @return {?}
         */
        function () {
            return (!this.isHeader && !this.disabled) && this._focused;
        },
        /**
         * ```html
         *  <igx-drop-down-item *ngFor="let item of items" focused={{!item.focused}}>
         *      <div>
         *          {{item.field}}
         *      </div>
         *  </igx-drop-down-item>
         * ```
         */
        set: /**
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
        function (value) {
            this._focused = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemBase.prototype, "isFocused", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.focused;
        },
        /**
         * @hidden @internal
         */
        set: /**
         * @hidden \@internal
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.focused = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemBase.prototype, "headerClassCosy", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.isHeader && this.dropDown.displayDensity === 'cosy';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemBase.prototype, "headerClassCompact", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.isHeader && this.dropDown.displayDensity === 'compact';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemBase.prototype, "disabled", {
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
         */
        get: /**
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
        function () {
            return this.group ? this.group.disabled || this._disabled : this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemBase.prototype, "itemIndex", {
        /**
         * Gets item index
         * @hidden @internal
         */
        get: /**
         * Gets item index
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.dropDown.items.indexOf(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemBase.prototype, "elementHeight", {
        /**
         * Gets item element height
         * @hidden @internal
         */
        get: /**
         * Gets item element height
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement.clientHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemBase.prototype, "element", {
        /**
         * Get item html element
         * @hidden @internal
         */
        get: /**
         * Get item html element
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.elementRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    IgxDropDownItemBase.prototype.clicked = /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
    };
    /**
     * @return {?}
     */
    IgxDropDownItemBase.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._selected) {
            /** @type {?} */
            var dropDownSelectedItem = this.dropDown.selectedItem;
            if (!dropDownSelectedItem) {
                this.dropDown.selectItem(this);
            }
            else if (this.hasIndex
                ? this._index !== dropDownSelectedItem.index || this.value !== dropDownSelectedItem.value :
                this !== dropDownSelectedItem) {
                this.dropDown.selectItem(this);
            }
        }
    };
    /** @nocollapse */
    IgxDropDownItemBase.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [IGX_DROPDOWN_BASE,] }] },
        { type: ElementRef },
        { type: IgxDropDownGroupComponent, decorators: [{ type: Optional }] },
        { type: IgxSelectionAPIService, decorators: [{ type: Optional }, { type: Inject, args: [IgxSelectionAPIService,] }] }
    ]; };
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
        DeprecateProperty("IgxDropDownItemBase `isSelected` property is deprecated.\n" +
            "Use `selected` instead."),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], IgxDropDownItemBase.prototype, "isSelected", null);
    tslib_1.__decorate([
        DeprecateProperty("IgxDropDownItemBase `isFocused` property is depracated.\n" +
            "Use `focused` instead."),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], IgxDropDownItemBase.prototype, "isFocused", null);
    return IgxDropDownItemBase;
}());
export { IgxDropDownItemBase };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLWl0ZW0uYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZHJvcC1kb3duL2Ryb3AtZG93bi1pdGVtLmJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEUsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7SUFFcEUsT0FBTyxHQUFHLENBQUM7O0lBQ1gsWUFBWSxHQUFHLEtBQUs7Ozs7Ozs7OztBQVN4QjtJQXlSSSw2QkFDeUMsUUFBdUIsRUFDbEQsVUFBc0IsRUFDVixLQUFnQyxFQUNBLFNBQWtDO1FBSG5ELGFBQVEsR0FBUixRQUFRLENBQWU7UUFDbEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQTJCO1FBQ0EsY0FBUyxHQUFULFNBQVMsQ0FBeUI7Ozs7UUF6UmxGLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7UUFpQnJCLE9BQUUsR0FBRyx3QkFBc0IsT0FBTyxFQUFJLENBQUM7Ozs7Ozs7O1FBdU92QyxTQUFJLEdBQUcsUUFBUSxDQUFDO0lBK0JuQixDQUFDO0lBdFJMLHNCQUFjLHlDQUFROzs7OztRQUF0QjtZQUNJLE9BQU8sSUFB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SUF1SUwsMEJBQUM7Q0FBQSxBQW5URCxJQW1UQztTQW5UcUIsbUJBQW1COzs7Ozs7O0lBSXJDLHVDQUEyQjs7Ozs7SUFDM0Isd0NBQTRCOzs7OztJQUM1QixxQ0FBd0I7Ozs7O0lBQ3hCLHdDQUE0Qjs7Ozs7Ozs7Ozs7O0lBZTVCLGlDQUU4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtEOUMsb0NBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEhsQix1Q0FFeUI7Ozs7Ozs7OztJQXNEekIsbUNBRXVCOzs7OztJQTJCbkIsdUNBQTREOzs7OztJQUM1RCx5Q0FBZ0M7Ozs7O0lBQ2hDLG9DQUFzRDs7Ozs7SUFDdEQsd0NBQXdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSURyb3BEb3duQmFzZSwgSUdYX0RST1BET1dOX0JBU0UgfSBmcm9tICcuL2Ryb3AtZG93bi5jb21tb24nO1xuaW1wb3J0IHsgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIE9wdGlvbmFsLCBJbmplY3QsIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneFNlbGVjdGlvbkFQSVNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBEZXByZWNhdGVQcm9wZXJ0eSwgc2hvd01lc3NhZ2UgfSBmcm9tICcuLi9jb3JlL2RlcHJlY2F0ZURlY29yYXRvcnMnO1xuaW1wb3J0IHsgSWd4RHJvcERvd25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vZHJvcC1kb3duLWdyb3VwLmNvbXBvbmVudCc7XG5cbmxldCBORVhUX0lEID0gMDtcbmxldCB3YXJuaW5nU2hvd24gPSBmYWxzZTtcblxuLyoqXG4gKiBBbiBhYnN0cmFjdCBjbGFzcyBkZWZpbmluZyBhIGRyb3AtZG93biBpdGVtOlxuICogV2l0aCBwcm9wZXJ0aWVzIC8gc3R5bGVzIGZvciBzZWxlY3Rpb24sIGhpZ2hsaWdodCwgaGVpZ2h0XG4gKiBCaW5kYWJsZSBwcm9wZXJ0eSBmb3IgcGFzc2luZyBkYXRhIChgdmFsdWU6IGFueWApXG4gKiBQYXJlbnQgY29tcG9uZW50IChoYXMgdG8gYmUgdXNlZCB1bmRlciBhIHBhcmVudCB3aXRoIHR5cGUgYElEcm9wRG93bkJhc2VgKVxuICogTWV0aG9kIGZvciBoYW5kbGluZyBjbGljayBvbiBIb3N0KClcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElneERyb3BEb3duSXRlbUJhc2UgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9mb2N1c2VkID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBfaW5kZXggPSBudWxsO1xuICAgIHByb3RlY3RlZCBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgZ2V0IGhhc0luZGV4KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5kZXggIT09IG51bGwgJiYgdGhpcy5faW5kZXggIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBpZGAgb2YgdGhlIGl0ZW0uXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZHJvcC1kb3duLWl0ZW0gW2lkXSA9ICdpZ3gtZHJvcC1kb3duLWl0ZW0tMCc+PC9pZ3gtZHJvcC1kb3duLWl0ZW0+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpdGVtSWQgPSAgdGhpcy5pdGVtLmlkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hTZWxlY3RJdGVtQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtZHJvcC1kb3duLWl0ZW0tJHtORVhUX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCBpdGVtSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIGluZGV4IG9mIHRoZSBkcm9wZG93biBpdGVtLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIGdldCB0aGUgZGF0YSBpbmRleCBvZiB0aGUgc2VsZWN0ZWQgZHJvcGRvd24gaXRlbVxuICAgICAqIGxldCBzZWxlY3RlZEl0ZW1JbmRleCA9IHRoaXMuZHJvcGRvd24uc2VsZWN0ZWRJdGVtLmluZGV4XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9pbmRleCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgd2FybmluZ1Nob3duID0gc2hvd01lc3NhZ2UoXG4gICAgICAgICAgICAgICAgJ0lneERyb3BEb3duSXRlbUJhc2U6IEF1dG9tYXRpYyBpbmRleCBpcyBkZXByZWNhdGVkLicgK1xuICAgICAgICAgICAgICAgICdCaW5kIGluIHRoZSB0ZW1wbGF0ZSBpbnN0ZWFkIHVzaW5nIGA8aWd4LWRyb3AtZG93bi1pdGVtIFtpbmRleF09XCJpXCJgIGluc3RlYWQuYCcsXG4gICAgICAgICAgICAgICAgd2FybmluZ1Nob3duKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1JbmRleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpbmRleCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pbmRleCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGl0ZW0gaWYgdGhlIGl0ZW0gaXMgZGF0YWJvdW5kXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gdXNhZ2UgaW4gSWd4RHJvcERvd25JdGVtQ29tcG9uZW50XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IG15U2VsZWN0ZWRJdGVtVmFsdWUgPSB0aGlzLmRyb3Bkb3duLnNlbGVjdGVkSXRlbS52YWx1ZTtcbiAgICAgKlxuICAgICAqIC8vIHNldFxuICAgICAqIGxldCBteVNlbGVjdGVkSXRlbSA9IHRoaXMuZHJvcGRvd24uc2VsZWN0ZWRJdGVtO1xuICAgICAqIG15U2VsZWN0ZWRJdGVtLnZhbHVlID0geyBpZDogMTIzLCBuYW1lOiAnRXhhbXBsZSBOYW1lJyB9XG4gICAgICpcbiAgICAgKiAvLyB1c2FnZSBpbiBJZ3hDb21ib0l0ZW1Db21wb25lbnRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgbXlDb21ib0l0ZW1WYWx1ZSA9IHRoaXMuY29tYm8uaXRlbXNbMF0udmFsdWU7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZHJvcC1kb3duX19pdGVtJylcbiAgICBnZXQgaXRlbVN0eWxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNIZWFkZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1kcm9wLWRvd25fX2l0ZW0tLWNvc3knKVxuICAgIHB1YmxpYyBnZXQgaXRlbVN0eWxlQ29zeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcERvd24uZGlzcGxheURlbnNpdHkgPT09ICdjb3N5JyAmJiAhdGhpcy5pc0hlYWRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWRyb3AtZG93bl9faXRlbS0tY29tcGFjdCcpXG4gICAgcHVibGljIGdldCBpdGVtU3R5bGVDb21wYWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wRG93bi5kaXNwbGF5RGVuc2l0eSA9PT0gJ2NvbXBhY3QnICYmICF0aGlzLmlzSGVhZGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMvR2V0cyBpZiB0aGUgaXRlbSBpcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG9uZSBpbiB0aGUgZHJvcGRvd25cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgbGV0IG15U2VsZWN0ZWRJdGVtID0gdGhpcy5kcm9wZG93bi5zZWxlY3RlZEl0ZW07XG4gICAgICogIGxldCBpc015SXRlbVNlbGVjdGVkID0gbXlTZWxlY3RlZEl0ZW0uc2VsZWN0ZWQ7IC8vIHRydWVcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXNlbGVjdGVkJylcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1kcm9wLWRvd25fX2l0ZW0tLXNlbGVjdGVkJylcbiAgICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgICB9XG5cbiAgICBzZXQgc2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNIZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBARGVwcmVjYXRlUHJvcGVydHkoYElneERyb3BEb3duSXRlbUJhc2UgXFxgaXNTZWxlY3RlZFxcYCBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLlxcbmAgK1xuICAgICAgICBgVXNlIFxcYHNlbGVjdGVkXFxgIGluc3RlYWQuYClcbiAgICBnZXQgaXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBzZXQgaXNTZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIGlmIHRoZSBnaXZlbiBpdGVtIGlzIGZvY3VzZWRcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGxldCBteVNlbGVjdGVkSXRlbSA9IHRoaXMuZHJvcGRvd24uc2VsZWN0ZWRJdGVtO1xuICAgICAqICBsZXQgaXNNeUl0ZW1Gb2N1c2VkID0gbXlTZWxlY3RlZEl0ZW0uZm9jdXNlZDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1kcm9wLWRvd25fX2l0ZW0tLWZvY3VzZWQnKVxuICAgIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKCF0aGlzLmlzSGVhZGVyICYmICF0aGlzLmRpc2FibGVkKSAmJiB0aGlzLl9mb2N1c2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1kcm9wLWRvd24taXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIGZvY3VzZWQ9e3shaXRlbS5mb2N1c2VkfX0+XG4gICAgICogICAgICA8ZGl2PlxuICAgICAqICAgICAgICAgIHt7aXRlbS5maWVsZH19XG4gICAgICogICAgICA8L2Rpdj5cbiAgICAgKiAgPC9pZ3gtZHJvcC1kb3duLWl0ZW0+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgc2V0IGZvY3VzZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZm9jdXNlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQERlcHJlY2F0ZVByb3BlcnR5KGBJZ3hEcm9wRG93bkl0ZW1CYXNlIFxcYGlzRm9jdXNlZFxcYCBwcm9wZXJ0eSBpcyBkZXByYWNhdGVkLlxcbmAgK1xuICAgICAgICBgVXNlIFxcYGZvY3VzZWRcXGAgaW5zdGVhZC5gKVxuICAgIGdldCBpc0ZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvY3VzZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgc2V0IGlzRm9jdXNlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgaWYgdGhlIGdpdmVuIGl0ZW0gaXMgaGVhZGVyXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICAvLyBnZXRcbiAgICAgKiAgbGV0IG15U2VsZWN0ZWRJdGVtID0gdGhpcy5kcm9wZG93bi5zZWxlY3RlZEl0ZW07XG4gICAgICogIGxldCBpc015SXRlbUhlYWRlciA9IG15U2VsZWN0ZWRJdGVtLmlzSGVhZGVyO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8IS0tc2V0LS0+XG4gICAgICogIDxpZ3gtZHJvcGRvd24taXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxuICAgICAqICAgICAgPGRpdiAqbmdJZj1cIml0ZW1zLmluZGV4T2YoaXRlbSkgPT09IDU7IHRoZW4gaXRlbS5pc0hlYWRlciA9IHRydWVcIj5cbiAgICAgKiAgICAgICAgICB7e2l0ZW0uZmllbGR9fVxuKiAgICAgICAgICAgPC9kaXY+XG4gICAgICogIDwvaWd4LWRyb3AtZG93bi1pdGVtPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZHJvcC1kb3duX19oZWFkZXInKVxuICAgIHB1YmxpYyBpc0hlYWRlcjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZHJvcC1kb3duX19oZWFkZXItLWNvc3knKVxuICAgIHB1YmxpYyBnZXQgaGVhZGVyQ2xhc3NDb3N5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0hlYWRlciAmJiB0aGlzLmRyb3BEb3duLmRpc3BsYXlEZW5zaXR5ID09PSAnY29zeSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1kcm9wLWRvd25fX2hlYWRlci0tY29tcGFjdCcpXG4gICAgcHVibGljIGdldCBoZWFkZXJDbGFzc0NvbXBhY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSGVhZGVyICYmIHRoaXMuZHJvcERvd24uZGlzcGxheURlbnNpdHkgPT09ICdjb21wYWN0JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgaWYgdGhlIGdpdmVuIGl0ZW0gaXMgZGlzYWJsZWRcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgLy8gZ2V0XG4gICAgICogIGxldCBteVNlbGVjdGVkSXRlbSA9IHRoaXMuZHJvcGRvd24uc2VsZWN0ZWRJdGVtO1xuICAgICAqICBsZXQgbXlJdGVtSXNEaXNhYmxlZCA9IG15U2VsZWN0ZWRJdGVtLmRpc2FibGVkO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWRyb3AtZG93bi1pdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCIgZGlzYWJsZWQ9e3shaXRlbS5kaXNhYmxlZH19PlxuICAgICAqICAgICAgPGRpdj5cbiAgICAgKiAgICAgICAgICB7e2l0ZW0uZmllbGR9fVxuICAgICAqICAgICAgPC9kaXY+XG4gICAgICogIDwvaWd4LWRyb3AtZG93bi1pdGVtPlxuICAgICAqIGBgYFxuICAgICAqICoqTk9URToqKiBEcm9wLWRvd24gaXRlbXMgaW5zaWRlIG9mIGEgZGlzYWJsZWQgYElneERyb3BEb3duR3JvdXBgIHdpbGwgYWx3YXlzIGNvdW50IGFzIGRpc2FibGVkXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kaXNhYmxlZCcpXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZHJvcC1kb3duX19pdGVtLS1kaXNhYmxlZCcpXG4gICAgcHVibGljIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXAgPyB0aGlzLmdyb3VwLmRpc2FibGVkIHx8IHRoaXMuX2Rpc2FibGVkIDogdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMvc2V0cyB0aGUgYHJvbGVgIGF0dHJpYnV0ZSBvZiB0aGUgaXRlbS4gRGVmYXVsdCBpcyAnb3B0aW9uJy5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1kcm9wLWRvd24taXRlbSBbcm9sZV09XCJjdXN0b21Sb2xlXCI+PC9pZ3gtZHJvcC1kb3duLWl0ZW0+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgcHVibGljIHJvbGUgPSAnb3B0aW9uJztcblxuICAgIC8qKlxuICAgICAqIEdldHMgaXRlbSBpbmRleFxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCBpdGVtSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcERvd24uaXRlbXMuaW5kZXhPZih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGl0ZW0gZWxlbWVudCBoZWlnaHRcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZWxlbWVudEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBpdGVtIGh0bWwgZWxlbWVudFxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGdldCBlbGVtZW50KCk6IEVsZW1lbnRSZWYge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KElHWF9EUk9QRE9XTl9CQVNFKSBwcm90ZWN0ZWQgZHJvcERvd246IElEcm9wRG93bkJhc2UsXG4gICAgICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgZ3JvdXA6IElneERyb3BEb3duR3JvdXBDb21wb25lbnQsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoSWd4U2VsZWN0aW9uQVBJU2VydmljZSkgcHJvdGVjdGVkIHNlbGVjdGlvbj86IElneFNlbGVjdGlvbkFQSVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgY2xpY2tlZChldmVudCkge1xuICAgIH1cblxuICAgIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkKSB7XG4gICAgICAgICAgICBjb25zdCBkcm9wRG93blNlbGVjdGVkSXRlbSA9IHRoaXMuZHJvcERvd24uc2VsZWN0ZWRJdGVtO1xuICAgICAgICAgICAgaWYgKCFkcm9wRG93blNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcERvd24uc2VsZWN0SXRlbSh0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNJbmRleFxuICAgICAgICAgICAgICAgID8gdGhpcy5faW5kZXggIT09IGRyb3BEb3duU2VsZWN0ZWRJdGVtLmluZGV4IHx8IHRoaXMudmFsdWUgIT09IGRyb3BEb3duU2VsZWN0ZWRJdGVtLnZhbHVlIDpcbiAgICAgICAgICAgICAgICB0aGlzICE9PSBkcm9wRG93blNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcERvd24uc2VsZWN0SXRlbSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==