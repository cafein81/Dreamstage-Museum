/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostListener, HostBinding } from '@angular/core';
import { IgxDropDownItemBase } from './drop-down-item.base';
/**
 * The `<igx-drop-down-item>` is a container intended for row items in
 * a `<igx-drop-down>` container.
 */
var IgxDropDownItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxDropDownItemComponent, _super);
    function IgxDropDownItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(IgxDropDownItemComponent.prototype, "focused", {
        /**
         * @inheritdoc
         */
        get: /**
         * \@inheritdoc
         * @return {?}
         */
        function () {
            /** @type {?} */
            var focusedState = this._focused;
            if (this.hasIndex) {
                /** @type {?} */
                var focusedItem = this.selection.first_item(this.dropDown.id + "-active");
                /** @type {?} */
                var focusedIndex = focusedItem ? focusedItem.index : -1;
                focusedState = this._index === focusedIndex;
            }
            return !this.isHeader && !this.disabled && focusedState;
        },
        /**
         * @inheritdoc
         */
        set: /**
         * \@inheritdoc
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._focused = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxDropDownItemComponent.prototype, "selected", {
        /**
         * @inheritdoc
         */
        get: /**
         * \@inheritdoc
         * @return {?}
         */
        function () {
            if (this.hasIndex) {
                /** @type {?} */
                var item = this.selection.first_item("" + this.dropDown.id);
                return item ? item.index === this._index && item.value === this.value : false;
            }
            return this._selected;
        },
        /**
         * @inheritdoc
         */
        set: /**
         * \@inheritdoc
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
    Object.defineProperty(IgxDropDownItemComponent.prototype, "setTabIndex", {
        /**
         * @hidden @internal
         */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            /** @type {?} */
            var shouldSetTabIndex = this.dropDown.allowItemsFocus && !(this.disabled || this.isHeader);
            if (shouldSetTabIndex) {
                return 0;
            }
            else {
                return null;
            }
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
    IgxDropDownItemComponent.prototype.clicked = /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled || this.isHeader) {
            /** @type {?} */
            var focusedItem = this.dropDown.items.find(function (item) { return item.focused; });
            if (this.dropDown.allowItemsFocus && focusedItem) {
                focusedItem.element.nativeElement.focus({ preventScroll: true });
            }
            return;
        }
        if (this.selection) {
            this.dropDown.selectItem(this, event);
        }
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    IgxDropDownItemComponent.prototype.mousedownHandler = /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
    };
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
    return IgxDropDownItemComponent;
}(IgxDropDownItemBase));
export { IgxDropDownItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9kcm9wLWRvd24vZHJvcC1kb3duLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFFVCxZQUFZLEVBQ1osV0FBVyxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQU01RDtJQUk4QyxvREFBbUI7SUFKakU7O0lBaUZBLENBQUM7SUF6RUcsc0JBQUksNkNBQU87UUFIWDs7V0FFRzs7Ozs7UUFDSDs7Z0JBQ1EsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRO1lBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTs7b0JBQ1QsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxZQUFTLENBQUM7O29CQUNyRSxZQUFZLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLFlBQVksQ0FBQzthQUMvQztZQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxZQUFZLENBQUM7UUFDNUQsQ0FBQztRQUVEOztXQUVHOzs7Ozs7UUFDSCxVQUFZLEtBQWM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQzs7O09BUEE7SUFXRCxzQkFBSSw4Q0FBUTtRQUhaOztXQUVHOzs7OztRQUNIO1lBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOztvQkFDVCxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUksQ0FBQztnQkFDN0QsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUNqRjtZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO1FBRUQ7O1dBRUc7Ozs7OztRQUNILFVBQWEsS0FBYztZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsT0FBTzthQUNWO1lBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BVkE7SUFjRCxzQkFDSSxpREFBVztRQUpmOztXQUVHOzs7OztRQUNIOztnQkFFVSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzVGLElBQUksaUJBQWlCLEVBQUU7Z0JBQ25CLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7aUJBQU07Z0JBQ0gsT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7Ozs7OztJQUVILDBDQUFPOzs7OztJQURQLFVBQ1EsS0FBSztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOztnQkFDMUIsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxDQUFDO1lBQ3BFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLElBQUksV0FBVyxFQUFFO2dCQUM5QyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNwRTtZQUNELE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUVILG1EQUFnQjs7Ozs7SUFEaEIsVUFDaUIsS0FBSztRQUNsQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBaEZKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixxQ0FBNEM7aUJBQy9DOzs7OEJBNENJLFdBQVcsU0FBQyxlQUFlOzBCQWEzQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO21DQWlCaEMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFJekMsK0JBQUM7Q0FBQSxBQWpGRCxDQUk4QyxtQkFBbUIsR0E2RWhFO1NBN0VZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIERvQ2hlY2ssXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4RHJvcERvd25JdGVtQmFzZSB9IGZyb20gJy4vZHJvcC1kb3duLWl0ZW0uYmFzZSc7XG5cbi8qKlxuICogVGhlIGA8aWd4LWRyb3AtZG93bi1pdGVtPmAgaXMgYSBjb250YWluZXIgaW50ZW5kZWQgZm9yIHJvdyBpdGVtcyBpblxuICogYSBgPGlneC1kcm9wLWRvd24+YCBjb250YWluZXIuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWRyb3AtZG93bi1pdGVtJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Ryb3AtZG93bi1pdGVtLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hEcm9wRG93bkl0ZW1Db21wb25lbnQgZXh0ZW5kcyBJZ3hEcm9wRG93bkl0ZW1CYXNlIGltcGxlbWVudHMgRG9DaGVjayB7XG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGZvY3VzZWRTdGF0ZSA9IHRoaXMuX2ZvY3VzZWQ7XG4gICAgICAgIGlmICh0aGlzLmhhc0luZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkSXRlbSA9IHRoaXMuc2VsZWN0aW9uLmZpcnN0X2l0ZW0oYCR7dGhpcy5kcm9wRG93bi5pZH0tYWN0aXZlYCk7XG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkSW5kZXggPSBmb2N1c2VkSXRlbSA/IGZvY3VzZWRJdGVtLmluZGV4IDogLTE7XG4gICAgICAgICAgICBmb2N1c2VkU3RhdGUgPSB0aGlzLl9pbmRleCA9PT0gZm9jdXNlZEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0hlYWRlciAmJiAhdGhpcy5kaXNhYmxlZCAmJiBmb2N1c2VkU3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBzZXQgZm9jdXNlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9mb2N1c2VkID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5oYXNJbmRleCkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuc2VsZWN0aW9uLmZpcnN0X2l0ZW0oYCR7dGhpcy5kcm9wRG93bi5pZH1gKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtID8gaXRlbS5pbmRleCA9PT0gdGhpcy5faW5kZXggJiYgaXRlbS52YWx1ZSA9PT0gdGhpcy52YWx1ZSA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHNldCBzZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5pc0hlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBoaWRkZW4gQGludGVybmFsXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBnZXQgc2V0VGFiSW5kZXgoKSB7XG4gICAgICAgIGNvbnN0IHNob3VsZFNldFRhYkluZGV4ID0gdGhpcy5kcm9wRG93bi5hbGxvd0l0ZW1zRm9jdXMgJiYgISh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaXNIZWFkZXIpO1xuICAgICAgICBpZiAoc2hvdWxkU2V0VGFiSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBjbGlja2VkKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaXNIZWFkZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWRJdGVtID0gdGhpcy5kcm9wRG93bi5pdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmZvY3VzZWQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJvcERvd24uYWxsb3dJdGVtc0ZvY3VzICYmIGZvY3VzZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgZm9jdXNlZEl0ZW0uZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcERvd24uc2VsZWN0SXRlbSh0aGlzLCBldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gICAgbW91c2Vkb3duSGFuZGxlcihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn1cbiJdfQ==