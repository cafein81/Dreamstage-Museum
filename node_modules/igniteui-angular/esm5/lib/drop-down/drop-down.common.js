/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var Navigate = {
    Up: -1,
    Down: 1,
};
export { Navigate };
Navigate[Navigate.Up] = 'Up';
Navigate[Navigate.Down] = 'Down';
/** @enum {string} */
var DropDownActionKey = {
    ESCAPE: 'escape',
    ENTER: 'enter',
    SPACE: 'space',
};
export { DropDownActionKey };
/**
 * Interface that encapsulates onSelection event arguments - old selection, new selection and cancel selection.
 * @export
 * @record
 */
export function ISelectionEventArgs() { }
if (false) {
    /** @type {?} */
    ISelectionEventArgs.prototype.oldSelection;
    /** @type {?} */
    ISelectionEventArgs.prototype.newSelection;
}
/**
 * Interface for an instance of IgxDropDownNavigationDirective
 * @export
 * @record
 */
export function IDropDownNavigationDirective() { }
if (false) {
    /** @type {?} */
    IDropDownNavigationDirective.prototype.target;
    /**
     * @param {?} event
     * @return {?}
     */
    IDropDownNavigationDirective.prototype.handleKeyDown = function (event) { };
    /**
     * @param {?=} event
     * @return {?}
     */
    IDropDownNavigationDirective.prototype.onArrowDownKeyDown = function (event) { };
    /**
     * @param {?=} event
     * @return {?}
     */
    IDropDownNavigationDirective.prototype.onArrowUpKeyDown = function (event) { };
    /**
     * @param {?=} event
     * @return {?}
     */
    IDropDownNavigationDirective.prototype.onEndKeyDown = function (event) { };
    /**
     * @param {?=} event
     * @return {?}
     */
    IDropDownNavigationDirective.prototype.onHomeKeyDown = function (event) { };
}
/** @type {?} */
export var IGX_DROPDOWN_BASE = 'IgxDropDownBaseToken';
/**
 * @hidden
 * @record
 */
export function IDropDownList() { }
if (false) {
    /** @type {?} */
    IDropDownList.prototype.onSelection;
    /** @type {?} */
    IDropDownList.prototype.width;
    /** @type {?} */
    IDropDownList.prototype.height;
    /** @type {?} */
    IDropDownList.prototype.id;
    /** @type {?} */
    IDropDownList.prototype.maxHeight;
    /** @type {?} */
    IDropDownList.prototype.collapsed;
    /** @type {?} */
    IDropDownList.prototype.items;
    /** @type {?} */
    IDropDownList.prototype.headers;
    /** @type {?} */
    IDropDownList.prototype.focusedItem;
    /**
     * @return {?}
     */
    IDropDownList.prototype.navigateFirst = function () { };
    /**
     * @return {?}
     */
    IDropDownList.prototype.navigateLast = function () { };
    /**
     * @return {?}
     */
    IDropDownList.prototype.navigateNext = function () { };
    /**
     * @return {?}
     */
    IDropDownList.prototype.navigatePrev = function () { };
    /**
     * @param {?} newIndex
     * @param {?=} direction
     * @return {?}
     */
    IDropDownList.prototype.navigateItem = function (newIndex, direction) { };
    /**
     * @param {?} key
     * @param {?=} event
     * @return {?}
     */
    IDropDownList.prototype.onItemActionKey = function (key, event) { };
}
/**
 * @hidden
 * @record
 */
export function IDropDownBase() { }
if (false) {
    /** @type {?} */
    IDropDownBase.prototype.selectedItem;
    /** @type {?} */
    IDropDownBase.prototype.onOpening;
    /** @type {?} */
    IDropDownBase.prototype.onOpened;
    /** @type {?} */
    IDropDownBase.prototype.onClosing;
    /** @type {?} */
    IDropDownBase.prototype.onClosed;
    /** @type {?|undefined} */
    IDropDownBase.prototype.allowItemsFocus;
    /**
     * @param {?} index
     * @return {?}
     */
    IDropDownBase.prototype.setSelectedItem = function (index) { };
    /**
     * @param {?} item
     * @param {?=} event
     * @return {?}
     */
    IDropDownBase.prototype.selectItem = function (item, event) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLmNvbW1vbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZHJvcC1kb3duL2Ryb3AtZG93bi5jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBUUksTUFBTztJQUNQLE9BQVE7Ozs7Ozs7SUFLUixRQUFTLFFBQVE7SUFDakIsT0FBUSxPQUFPO0lBQ2YsT0FBUSxPQUFPOzs7Ozs7OztBQU9uQix5Q0FHQzs7O0lBRkcsMkNBQWtDOztJQUNsQywyQ0FBa0M7Ozs7Ozs7QUFPdEMsa0RBT0M7OztJQU5HLDhDQUFZOzs7OztJQUNaLDRFQUEwQzs7Ozs7SUFDMUMsaUZBQWdEOzs7OztJQUNoRCwrRUFBOEM7Ozs7O0lBQzlDLDJFQUEwQzs7Ozs7SUFDMUMsNEVBQTJDOzs7QUFHL0MsTUFBTSxLQUFPLGlCQUFpQixHQUFHLHNCQUFzQjs7Ozs7QUFLdkQsbUNBZ0JDOzs7SUFmRyxvQ0FBK0M7O0lBQy9DLDhCQUFjOztJQUNkLCtCQUFlOztJQUNmLDJCQUFXOztJQUNYLGtDQUFrQjs7SUFDbEIsa0NBQW1COztJQUNuQiw4QkFBNkI7O0lBQzdCLGdDQUErQjs7SUFDL0Isb0NBQWlDOzs7O0lBQ2pDLHdEQUFzQjs7OztJQUN0Qix1REFBcUI7Ozs7SUFDckIsdURBQXFCOzs7O0lBQ3JCLHVEQUFxQjs7Ozs7O0lBQ3JCLDBFQUEyRDs7Ozs7O0lBQzNELG9FQUE2RDs7Ozs7O0FBTWpFLG1DQVNDOzs7SUFSRyxxQ0FBa0I7O0lBQ2xCLGtDQUE2Qzs7SUFDN0MsaUNBQTZCOztJQUM3QixrQ0FBb0Q7O0lBQ3BELGlDQUE2Qjs7SUFDN0Isd0NBQTBCOzs7OztJQUMxQiwrREFBcUM7Ozs7OztJQUNyQyxnRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5jZWxhYmxlRXZlbnRBcmdzLCBDYW5jZWxhYmxlQnJvd3NlckV2ZW50QXJncyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgSWd4RHJvcERvd25JdGVtQmFzZSB9IGZyb20gJy4vZHJvcC1kb3duLWl0ZW0uYmFzZSc7XG5pbXBvcnQgeyBJVG9nZ2xlVmlldyB9IGZyb20gJy4uL2NvcmUvbmF2aWdhdGlvbi9JVG9nZ2xlVmlldyc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3BsYXlEZW5zaXR5QmFzZSB9IGZyb20gJy4uL2NvcmUvZGVuc2l0eSc7XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZW51bSBOYXZpZ2F0ZSB7XG4gICAgVXAgPSAtMSxcbiAgICBEb3duID0gMVxufVxuXG4vKiogS2V5IGFjdGlvbnMgdGhhdCBoYXZlIGRlc2lnbmF0ZWQgaGFuZGxlcnMgaW4gSWd4RHJvcERvd25Db21wb25lbnQgKi9cbmV4cG9ydCBlbnVtIERyb3BEb3duQWN0aW9uS2V5IHtcbiAgICBFU0NBUEUgPSAnZXNjYXBlJyxcbiAgICBFTlRFUiA9ICdlbnRlcicsXG4gICAgU1BBQ0UgPSAnc3BhY2UnXG59XG5cbi8qKlxuICogSW50ZXJmYWNlIHRoYXQgZW5jYXBzdWxhdGVzIG9uU2VsZWN0aW9uIGV2ZW50IGFyZ3VtZW50cyAtIG9sZCBzZWxlY3Rpb24sIG5ldyBzZWxlY3Rpb24gYW5kIGNhbmNlbCBzZWxlY3Rpb24uXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdGlvbkV2ZW50QXJncyBleHRlbmRzIENhbmNlbGFibGVFdmVudEFyZ3Mge1xuICAgIG9sZFNlbGVjdGlvbjogSWd4RHJvcERvd25JdGVtQmFzZTtcbiAgICBuZXdTZWxlY3Rpb246IElneERyb3BEb3duSXRlbUJhc2U7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhbiBpbnN0YW5jZSBvZiBJZ3hEcm9wRG93bk5hdmlnYXRpb25EaXJlY3RpdmVcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRHJvcERvd25OYXZpZ2F0aW9uRGlyZWN0aXZlIHtcbiAgICB0YXJnZXQ6IGFueTtcbiAgICBoYW5kbGVLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcbiAgICBvbkFycm93RG93bktleURvd24oZXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcbiAgICBvbkFycm93VXBLZXlEb3duKGV2ZW50PzogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG4gICAgb25FbmRLZXlEb3duKGV2ZW50PzogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG4gICAgb25Ib21lS2V5RG93bihldmVudD86IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgSUdYX0RST1BET1dOX0JBU0UgPSAnSWd4RHJvcERvd25CYXNlVG9rZW4nO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRHJvcERvd25MaXN0IGV4dGVuZHMgRGlzcGxheURlbnNpdHlCYXNlIHtcbiAgICBvblNlbGVjdGlvbjogRXZlbnRFbWl0dGVyPElTZWxlY3Rpb25FdmVudEFyZ3M+O1xuICAgIHdpZHRoOiBzdHJpbmc7XG4gICAgaGVpZ2h0OiBzdHJpbmc7XG4gICAgaWQ6IHN0cmluZztcbiAgICBtYXhIZWlnaHQ6IHN0cmluZztcbiAgICBjb2xsYXBzZWQ6IGJvb2xlYW47XG4gICAgaXRlbXM6IElneERyb3BEb3duSXRlbUJhc2VbXTtcbiAgICBoZWFkZXJzOiBJZ3hEcm9wRG93bkl0ZW1CYXNlW107XG4gICAgZm9jdXNlZEl0ZW06IElneERyb3BEb3duSXRlbUJhc2U7XG4gICAgbmF2aWdhdGVGaXJzdCgpOiB2b2lkO1xuICAgIG5hdmlnYXRlTGFzdCgpOiB2b2lkO1xuICAgIG5hdmlnYXRlTmV4dCgpOiB2b2lkO1xuICAgIG5hdmlnYXRlUHJldigpOiB2b2lkO1xuICAgIG5hdmlnYXRlSXRlbShuZXdJbmRleDogbnVtYmVyLCBkaXJlY3Rpb24/OiBOYXZpZ2F0ZSk6IHZvaWQ7XG4gICAgb25JdGVtQWN0aW9uS2V5KGtleTogRHJvcERvd25BY3Rpb25LZXksIGV2ZW50PzogRXZlbnQpOiB2b2lkO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRHJvcERvd25CYXNlIGV4dGVuZHMgSURyb3BEb3duTGlzdCwgSVRvZ2dsZVZpZXcge1xuICAgIHNlbGVjdGVkSXRlbTogYW55O1xuICAgIG9uT3BlbmluZzogRXZlbnRFbWl0dGVyPENhbmNlbGFibGVFdmVudEFyZ3M+O1xuICAgIG9uT3BlbmVkOiBFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgb25DbG9zaW5nOiBFdmVudEVtaXR0ZXI8Q2FuY2VsYWJsZUJyb3dzZXJFdmVudEFyZ3M+O1xuICAgIG9uQ2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgYWxsb3dJdGVtc0ZvY3VzPzogYm9vbGVhbjtcbiAgICBzZXRTZWxlY3RlZEl0ZW0oaW5kZXg6IG51bWJlcik6IHZvaWQ7XG4gICAgc2VsZWN0SXRlbShpdGVtOiBJZ3hEcm9wRG93bkl0ZW1CYXNlLCBldmVudD86IEV2ZW50KTogdm9pZDtcbn1cblxuIl19