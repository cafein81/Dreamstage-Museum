/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
/**
 * Template directive that allows you to set a custom template representing the lower label value of the {\@link IgxSliderComponent}
 *
 * ```html
 * <igx-slider>
 *  <ng-template igxSliderThumbFrom let-value let-labels>{{value}}</ng-template>
 * </igx-slider>
 * ```
 *
 * \@context {\@link IgxSliderComponent.context}
 */
var IgxThumbFromTemplateDirective = /** @class */ (function () {
    function IgxThumbFromTemplateDirective() {
    }
    IgxThumbFromTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxSliderThumbFrom]'
                },] }
    ];
    return IgxThumbFromTemplateDirective;
}());
export { IgxThumbFromTemplateDirective };
/**
 * Template directive that allows you to set a custom template representing the upper label value of the {\@link IgxSliderComponent}
 *
 * ```html
 * <igx-slider>
 *  <ng-template igxSliderThumbTo let-value let-labels>{{value}}</ng-template>
 * </igx-slider>
 * ```
 *
 * \@context {\@link IgxSliderComponent.context}
 */
var IgxThumbToTemplateDirective = /** @class */ (function () {
    function IgxThumbToTemplateDirective() {
    }
    IgxThumbToTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxSliderThumbTo]'
                },] }
    ];
    return IgxThumbToTemplateDirective;
}());
export { IgxThumbToTemplateDirective };
/** @enum {number} */
var SliderType = {
    /**
     * Slider with single thumb.
     */
    SLIDER: 0,
    /**
     *  Range slider with multiple thumbs, that can mark the range.
     */
    RANGE: 1,
};
export { SliderType };
SliderType[SliderType.SLIDER] = 'SLIDER';
SliderType[SliderType.RANGE] = 'RANGE';
/** @enum {number} */
var SliderHandle = {
    FROM: 0,
    TO: 1,
};
export { SliderHandle };
SliderHandle[SliderHandle.FROM] = 'FROM';
SliderHandle[SliderHandle.TO] = 'TO';
/**
 * @record
 */
export function IRangeSliderValue() { }
if (false) {
    /** @type {?} */
    IRangeSliderValue.prototype.lower;
    /** @type {?} */
    IRangeSliderValue.prototype.upper;
}
/**
 * @record
 */
export function ISliderValueChangeEventArgs() { }
if (false) {
    /** @type {?} */
    ISliderValueChangeEventArgs.prototype.oldValue;
    /** @type {?} */
    ISliderValueChangeEventArgs.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbW1vbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2xpZGVyL3NsaWRlci5jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWExQztJQUFBO0lBRzRDLENBQUM7O2dCQUg1QyxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtpQkFDbkM7O0lBQzJDLG9DQUFDO0NBQUEsQUFIN0MsSUFHNkM7U0FBaEMsNkJBQTZCOzs7Ozs7Ozs7Ozs7QUFhMUM7SUFBQTtJQUcwQyxDQUFDOztnQkFIMUMsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7aUJBQ2pDOztJQUN5QyxrQ0FBQztDQUFBLEFBSDNDLElBRzJDO1NBQTlCLDJCQUEyQjs7O0lBR3BDOztPQUVHO0lBQ0gsU0FBTTtJQUNOOztPQUVHO0lBQ0gsUUFBSzs7Ozs7OztJQUlMLE9BQUk7SUFDSixLQUFFOzs7Ozs7OztBQUdOLHVDQUdDOzs7SUFGRyxrQ0FBYzs7SUFDZCxrQ0FBYzs7Ozs7QUFHbEIsaURBR0M7OztJQUZHLCtDQUFxQzs7SUFDckMsNENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGVtcGxhdGUgZGlyZWN0aXZlIHRoYXQgYWxsb3dzIHlvdSB0byBzZXQgYSBjdXN0b20gdGVtcGxhdGUgcmVwcmVzZW50aW5nIHRoZSBsb3dlciBsYWJlbCB2YWx1ZSBvZiB0aGUge0BsaW5rIElneFNsaWRlckNvbXBvbmVudH1cbiAqXG4gKmBgYGh0bWxcbiAqIDxpZ3gtc2xpZGVyPlxuICogIDxuZy10ZW1wbGF0ZSBpZ3hTbGlkZXJUaHVtYkZyb20gbGV0LXZhbHVlIGxldC1sYWJlbHM+e3t2YWx1ZX19PC9uZy10ZW1wbGF0ZT5cbiAqIDwvaWd4LXNsaWRlcj5cbiAqIGBgYFxuICpcbiAqIEBjb250ZXh0IHtAbGluayBJZ3hTbGlkZXJDb21wb25lbnQuY29udGV4dH1cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4U2xpZGVyVGh1bWJGcm9tXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4VGh1bWJGcm9tVGVtcGxhdGVEaXJlY3RpdmUge31cblxuLyoqXG4gKiBUZW1wbGF0ZSBkaXJlY3RpdmUgdGhhdCBhbGxvd3MgeW91IHRvIHNldCBhIGN1c3RvbSB0ZW1wbGF0ZSByZXByZXNlbnRpbmcgdGhlIHVwcGVyIGxhYmVsIHZhbHVlIG9mIHRoZSB7QGxpbmsgSWd4U2xpZGVyQ29tcG9uZW50fVxuICpcbiAqIGBgYGh0bWxcbiAqIDxpZ3gtc2xpZGVyPlxuICogIDxuZy10ZW1wbGF0ZSBpZ3hTbGlkZXJUaHVtYlRvIGxldC12YWx1ZSBsZXQtbGFiZWxzPnt7dmFsdWV9fTwvbmctdGVtcGxhdGU+XG4gKiA8L2lneC1zbGlkZXI+XG4gKiBgYGBcbiAqXG4gKiBAY29udGV4dCB7QGxpbmsgSWd4U2xpZGVyQ29tcG9uZW50LmNvbnRleHR9XG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneFNsaWRlclRodW1iVG9dJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hUaHVtYlRvVGVtcGxhdGVEaXJlY3RpdmUge31cblxuZXhwb3J0IGVudW0gU2xpZGVyVHlwZSB7XG4gICAgLyoqXG4gICAgICogU2xpZGVyIHdpdGggc2luZ2xlIHRodW1iLlxuICAgICAqL1xuICAgIFNMSURFUixcbiAgICAvKipcbiAgICAgKiAgUmFuZ2Ugc2xpZGVyIHdpdGggbXVsdGlwbGUgdGh1bWJzLCB0aGF0IGNhbiBtYXJrIHRoZSByYW5nZS5cbiAgICAgKi9cbiAgICBSQU5HRVxufVxuXG5leHBvcnQgZW51bSBTbGlkZXJIYW5kbGUge1xuICAgIEZST00sXG4gICAgVE9cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmFuZ2VTbGlkZXJWYWx1ZSB7XG4gICAgbG93ZXI6IG51bWJlcjtcbiAgICB1cHBlcjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTbGlkZXJWYWx1ZUNoYW5nZUV2ZW50QXJncyB7XG4gICAgb2xkVmFsdWU6IG51bWJlciB8IElSYW5nZVNsaWRlclZhbHVlO1xuICAgIHZhbHVlOiBudW1iZXIgfCBJUmFuZ2VTbGlkZXJWYWx1ZTtcbn1cbiJdfQ==