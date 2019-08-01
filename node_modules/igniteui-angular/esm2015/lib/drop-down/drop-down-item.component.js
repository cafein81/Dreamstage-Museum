/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, HostBinding } from '@angular/core';
import { IgxDropDownItemBase } from './drop-down-item.base';
/**
 * The `<igx-drop-down-item>` is a container intended for row items in
 * a `<igx-drop-down>` container.
 */
export class IgxDropDownItemComponent extends IgxDropDownItemBase {
    /**
     * \@inheritdoc
     * @return {?}
     */
    get focused() {
        /** @type {?} */
        let focusedState = this._focused;
        if (this.hasIndex) {
            /** @type {?} */
            const focusedItem = this.selection.first_item(`${this.dropDown.id}-active`);
            /** @type {?} */
            const focusedIndex = focusedItem ? focusedItem.index : -1;
            focusedState = this._index === focusedIndex;
        }
        return !this.isHeader && !this.disabled && focusedState;
    }
    /**
     * \@inheritdoc
     * @param {?} value
     * @return {?}
     */
    set focused(value) {
        this._focused = value;
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    get selected() {
        if (this.hasIndex) {
            /** @type {?} */
            const item = this.selection.first_item(`${this.dropDown.id}`);
            return item ? item.index === this._index && item.value === this.value : false;
        }
        return this._selected;
    }
    /**
     * \@inheritdoc
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
    get setTabIndex() {
        /** @type {?} */
        const shouldSetTabIndex = this.dropDown.allowItemsFocus && !(this.disabled || this.isHeader);
        if (shouldSetTabIndex) {
            return 0;
        }
        else {
            return null;
        }
    }
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    clicked(event) {
        if (this.disabled || this.isHeader) {
            /** @type {?} */
            const focusedItem = this.dropDown.items.find((item) => item.focused);
            if (this.dropDown.allowItemsFocus && focusedItem) {
                focusedItem.element.nativeElement.focus({ preventScroll: true });
            }
            return;
        }
        if (this.selection) {
            this.dropDown.selectItem(this, event);
        }
    }
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    mousedownHandler(event) {
        event.preventDefault();
    }
}
IgxDropDownItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-drop-down-item',
                template: "<ng-content></ng-content>"
            }] }
];
IgxDropDownItemComponent.propDecorators = {
    setTabIndex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    clicked: [{ type: HostListener, args: ['click', ['$event'],] }],
    mousedownHandler: [{ type: HostListener, args: ['mousedown', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kcm9wLWRvd24vZHJvcC1kb3duLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUVULFlBQVksRUFDWixXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBVTVELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxtQkFBbUI7Ozs7O0lBSTdELElBQUksT0FBTzs7WUFDSCxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVE7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOztrQkFDVCxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxDQUFDOztrQkFDckUsWUFBWSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pELFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLFlBQVksQ0FBQztTQUMvQztRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxZQUFZLENBQUM7SUFDNUQsQ0FBQzs7Ozs7O0lBS0QsSUFBSSxPQUFPLENBQUMsS0FBYztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7OztJQUlELElBQUksUUFBUTtRQUNSLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTs7a0JBQ1QsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3RCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ2pGO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUtELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFJRCxJQUNJLFdBQVc7O2NBQ0wsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1RixJQUFJLGlCQUFpQixFQUFFO1lBQ25CLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDOzs7Ozs7SUFNRCxPQUFPLENBQUMsS0FBSztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOztrQkFDMUIsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNwRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxJQUFJLFdBQVcsRUFBRTtnQkFDOUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDcEU7WUFDRCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQzs7Ozs7O0lBTUQsZ0JBQWdCLENBQUMsS0FBSztRQUNsQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBaEZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixxQ0FBNEM7YUFDL0M7OzswQkE0Q0ksV0FBVyxTQUFDLGVBQWU7c0JBYTNCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7K0JBaUJoQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRG9DaGVjayxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hEcm9wRG93bkl0ZW1CYXNlIH0gZnJvbSAnLi9kcm9wLWRvd24taXRlbS5iYXNlJztcblxuLyoqXG4gKiBUaGUgYDxpZ3gtZHJvcC1kb3duLWl0ZW0+YCBpcyBhIGNvbnRhaW5lciBpbnRlbmRlZCBmb3Igcm93IGl0ZW1zIGluXG4gKiBhIGA8aWd4LWRyb3AtZG93bj5gIGNvbnRhaW5lci5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtZHJvcC1kb3duLWl0ZW0nLFxuICAgIHRlbXBsYXRlVXJsOiAnZHJvcC1kb3duLWl0ZW0uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneERyb3BEb3duSXRlbUNvbXBvbmVudCBleHRlbmRzIElneERyb3BEb3duSXRlbUJhc2UgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgZm9jdXNlZFN0YXRlID0gdGhpcy5fZm9jdXNlZDtcbiAgICAgICAgaWYgKHRoaXMuaGFzSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRJdGVtID0gdGhpcy5zZWxlY3Rpb24uZmlyc3RfaXRlbShgJHt0aGlzLmRyb3BEb3duLmlkfS1hY3RpdmVgKTtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRJbmRleCA9IGZvY3VzZWRJdGVtID8gZm9jdXNlZEl0ZW0uaW5kZXggOiAtMTtcbiAgICAgICAgICAgIGZvY3VzZWRTdGF0ZSA9IHRoaXMuX2luZGV4ID09PSBmb2N1c2VkSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICF0aGlzLmlzSGVhZGVyICYmICF0aGlzLmRpc2FibGVkICYmIGZvY3VzZWRTdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHNldCBmb2N1c2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmhhc0luZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5zZWxlY3Rpb24uZmlyc3RfaXRlbShgJHt0aGlzLmRyb3BEb3duLmlkfWApO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmluZGV4ID09PSB0aGlzLl9pbmRleCAmJiBpdGVtLnZhbHVlID09PSB0aGlzLnZhbHVlIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgc2V0IHNlbGVjdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICAgIGdldCBzZXRUYWJJbmRleCgpIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkU2V0VGFiSW5kZXggPSB0aGlzLmRyb3BEb3duLmFsbG93SXRlbXNGb2N1cyAmJiAhKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc0hlYWRlcik7XG4gICAgICAgIGlmIChzaG91bGRTZXRUYWJJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICAgIGNsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc0hlYWRlcikge1xuICAgICAgICAgICAgY29uc3QgZm9jdXNlZEl0ZW0gPSB0aGlzLmRyb3BEb3duLml0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZm9jdXNlZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5kcm9wRG93bi5hbGxvd0l0ZW1zRm9jdXMgJiYgZm9jdXNlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBmb2N1c2VkSXRlbS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5kcm9wRG93bi5zZWxlY3RJdGVtKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgICBtb3VzZWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuIl19