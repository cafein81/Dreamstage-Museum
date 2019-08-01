/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, NgModule, Renderer2, HostListener, Optional, Inject } from '@angular/core';
import { DisplayDensityBase, DisplayDensityToken, DisplayDensity } from '../../core/density';
export class IgxButtonDirective extends DisplayDensityBase {
    /**
     * @param {?} element
     * @param {?} _renderer
     * @param {?} _displayDensityOptions
     */
    constructor(element, _renderer, _displayDensityOptions) {
        super(_displayDensityOptions);
        this.element = element;
        this._renderer = _renderer;
        this._displayDensityOptions = _displayDensityOptions;
        /**
         * @hidden
         */
        this._type = 'flat';
        /**
         * @hidden
         */
        this._cssClass = 'igx-button';
        /**
         * Called when the button is clicked
         */
        this.buttonClick = new EventEmitter();
        /**
         * Sets/gets the `role` attribute.
         * ```typescript
         * this.button.role = 'navbutton';
         * ```
         * ```typescript
         * let buttonRole =  this.button.role;
         * ```
         * \@memberof IgxButtonDirective
         */
        this.role = 'button';
        /**
         * Gets or sets whether the button is selected.
         * Mainly used in the IgxButtonGroup component and it will have no effect if set separately.
         * ```html
         * <button igxButton="flat" [selected]="button.selected"></button>
         * ```
         * \@memberof IgxButtonDirective
         */
        this.selected = false;
    }
    /**
     * Returns the underlying DOM element
     * @return {?}
     */
    get nativeElement() {
        return this.element.nativeElement;
    }
    /**
     * Sets the type of the button.
     * ```html
     * <button  igxButton= "icon"></button>
     * ```
     * \@memberof IgxButtonDirective
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value || this._type;
        this._renderer.addClass(this.nativeElement, `${this._cssClass}--${this._type}`);
    }
    /**
     * Sets the button text color.
     * ```html
     * <button igxButton="gradient" igxButtonColor="blue"></button>
     * ```
     * \@memberof IgxButtonDirective
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        this._color = value || this.nativeElement.style.color;
        this._renderer.setStyle(this.nativeElement, 'color', this._color);
    }
    /**
     * Sets the background color of the button.
     * ```html
     * <button igxButton="raised" igxButtonBackground="red"></button>
     * ```
     * \@memberof IgxButtonDirective
     * @param {?} value
     * @return {?}
     */
    set background(value) {
        this._backgroundColor = value || this._backgroundColor;
        this._renderer.setStyle(this.nativeElement, 'background', this._backgroundColor);
    }
    /**
     * Sets the `aria-label` attribute.
     * ```html
     * <button igxButton= "flat" igxLabel="Label"></button>
     * ```
     * \@memberof IgxButtonDirective
     * @param {?} value
     * @return {?}
     */
    set label(value) {
        this._label = value || this._label;
        this._renderer.setAttribute(this.nativeElement, `aria-label`, this._label);
    }
    /**
     * Enables/disables the button.
     *  ```html
     * <button igxButton= "fab" [disabled]="true"></button>
     * ```
     * \@memberof IgxButtonDirective
     * @param {?} val
     * @return {?}
     */
    set disabled(val) {
        val = !!val;
        if (val) {
            this._renderer.addClass(this.nativeElement, `${this._cssClass}--disabled`);
        }
        else {
            this._renderer.removeClass(this.nativeElement, `${this._cssClass}--disabled`);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    get cssClassCosy() {
        return (this._type === 'flat' || this._type === 'raised' || this._type === 'outlined') &&
            this.displayDensity === DisplayDensity.cosy;
    }
    /**
     * @hidden
     * @return {?}
     */
    get cssClassCompact() {
        return (this._type === 'flat' || this._type === 'raised' || this._type === 'outlined') &&
            this.displayDensity === DisplayDensity.compact;
    }
    /**
     * @hidden
     * @return {?}
     */
    get cssClassCosyFab() {
        return this._type === 'fab' && this.displayDensity === DisplayDensity.cosy;
    }
    /**
     * @hidden
     * @return {?}
     */
    get cssClassCompactFab() {
        return this._type === 'fab' && this.displayDensity === DisplayDensity.compact;
    }
    /**
     * @hidden
     * @param {?} ev
     * @return {?}
     */
    onClick(ev) {
        this.buttonClick.emit(ev);
    }
}
IgxButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxButton]'
            },] }
];
/** @nocollapse */
IgxButtonDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
];
IgxButtonDirective.propDecorators = {
    buttonClick: [{ type: Output }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    type: [{ type: Input, args: ['igxButton',] }],
    color: [{ type: Input, args: ['igxButtonColor',] }],
    background: [{ type: Input, args: ['igxButtonBackground',] }],
    label: [{ type: Input, args: ['igxLabel',] }],
    disabled: [{ type: Input }],
    cssClassCosy: [{ type: HostBinding, args: ['class.igx-button--cosy',] }],
    cssClassCompact: [{ type: HostBinding, args: ['class.igx-button--compact',] }],
    cssClassCosyFab: [{ type: HostBinding, args: ['class.igx-button--fab-cosy',] }],
    cssClassCompactFab: [{ type: HostBinding, args: ['class.igx-button--fab-compact',] }],
    selected: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxButtonDirective.prototype._type;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxButtonDirective.prototype._cssClass;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxButtonDirective.prototype._color;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxButtonDirective.prototype._label;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxButtonDirective.prototype._backgroundColor;
    /**
     * Called when the button is clicked
     * @type {?}
     */
    IgxButtonDirective.prototype.buttonClick;
    /**
     * Sets/gets the `role` attribute.
     * ```typescript
     * this.button.role = 'navbutton';
     * ```
     * ```typescript
     * let buttonRole =  this.button.role;
     * ```
     * \@memberof IgxButtonDirective
     * @type {?}
     */
    IgxButtonDirective.prototype.role;
    /**
     * Gets or sets whether the button is selected.
     * Mainly used in the IgxButtonGroup component and it will have no effect if set separately.
     * ```html
     * <button igxButton="flat" [selected]="button.selected"></button>
     * ```
     * \@memberof IgxButtonDirective
     * @type {?}
     */
    IgxButtonDirective.prototype.selected;
    /** @type {?} */
    IgxButtonDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    IgxButtonDirective.prototype._renderer;
    /**
     * @type {?}
     * @protected
     */
    IgxButtonDirective.prototype._displayDensityOptions;
}
/**
 * @hidden
 */
export class IgxButtonModule {
}
IgxButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxButtonDirective],
                exports: [IgxButtonDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9idXR0b24vYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsWUFBWSxFQUNaLFFBQVEsRUFDUixNQUFNLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUEwQixjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUtySCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsa0JBQWtCOzs7Ozs7SUFzQnRELFlBQW1CLE9BQW1CLEVBQVUsU0FBb0IsRUFDYixzQkFBOEM7UUFDN0YsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFGbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDYiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCOzs7O1FBbkI3RixVQUFLLEdBQUcsTUFBTSxDQUFDOzs7O1FBSWYsY0FBUyxHQUFHLFlBQVksQ0FBQzs7OztRQThCMUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDOzs7Ozs7Ozs7OztRQVlaLFNBQUksR0FBRyxRQUFRLENBQUM7Ozs7Ozs7OztRQXVHakMsYUFBUSxHQUFHLEtBQUssQ0FBQztJQWhJN0IsQ0FBQzs7Ozs7SUFLTCxJQUFXLGFBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7Ozs7O0lBMEJELElBQXdCLElBQUksQ0FBQyxLQUFhO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FB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LFNBQUMsbUJBQW1COzs7MEJBYzFDLE1BQU07bUJBYU4sV0FBVyxTQUFDLFdBQVc7bUJBUXZCLEtBQUssU0FBQyxXQUFXO29CQVdqQixLQUFLLFNBQUMsZ0JBQWdCO3lCQVd0QixLQUFLLFNBQUMscUJBQXFCO29CQVczQixLQUFLLFNBQUMsVUFBVTt1QkFXaEIsS0FBSzsyQkFZTCxXQUFXLFNBQUMsd0JBQXdCOzhCQVNwQyxXQUFXLFNBQUMsMkJBQTJCOzhCQVN2QyxXQUFXLFNBQUMsNEJBQTRCO2lDQVF4QyxXQUFXLFNBQUMsK0JBQStCO3VCQWEzQyxLQUFLO3NCQUtMLFlBQVksU0FBQyxPQUFPLEVBQUcsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7O0lBMUpsQyxtQ0FBdUI7Ozs7OztJQUl2Qix1Q0FBaUM7Ozs7OztJQUlqQyxvQ0FBdUI7Ozs7OztJQUl2QixvQ0FBdUI7Ozs7OztJQUl2Qiw4Q0FBaUM7Ozs7O0lBaUJqQyx5Q0FDNkM7Ozs7Ozs7Ozs7OztJQVk3QyxrQ0FBaUQ7Ozs7Ozs7Ozs7SUF1R2pELHNDQUFpQzs7SUFuSXJCLHFDQUEwQjs7Ozs7SUFBRSx1Q0FBNEI7Ozs7O0lBQ2hFLG9EQUFpRzs7Ozs7QUFvSnpHLE1BQU0sT0FBTyxlQUFlOzs7WUFKM0IsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBOZ01vZHVsZSxcbiAgICBSZW5kZXJlcjIsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIE9wdGlvbmFsLFxuICAgIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3BsYXlEZW5zaXR5QmFzZSwgRGlzcGxheURlbnNpdHlUb2tlbiwgSURpc3BsYXlEZW5zaXR5T3B0aW9ucywgRGlzcGxheURlbnNpdHkgfSBmcm9tICcuLi8uLi9jb3JlL2RlbnNpdHknO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hCdXR0b25dJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hCdXR0b25EaXJlY3RpdmUgZXh0ZW5kcyBEaXNwbGF5RGVuc2l0eUJhc2Uge1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3R5cGUgPSAnZmxhdCc7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY3NzQ2xhc3MgPSAnaWd4LWJ1dHRvbic7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9sYWJlbDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2JhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRGlzcGxheURlbnNpdHlUb2tlbikgcHJvdGVjdGVkIF9kaXNwbGF5RGVuc2l0eU9wdGlvbnM6IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHN1cGVyKF9kaXNwbGF5RGVuc2l0eU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB1bmRlcmx5aW5nIERPTSBlbGVtZW50XG4gICAgICovXG4gICAgcHVibGljIGdldCBuYXRpdmVFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGByb2xlYCBhdHRyaWJ1dGUuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuYnV0dG9uLnJvbGUgPSAnbmF2YnV0dG9uJztcbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGJ1dHRvblJvbGUgPSAgdGhpcy5idXR0b24ucm9sZTtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4QnV0dG9uRGlyZWN0aXZlXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSBwdWJsaWMgcm9sZSA9ICdidXR0b24nO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHR5cGUgb2YgdGhlIGJ1dHRvbi5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGJ1dHRvbiAgaWd4QnV0dG9uPSBcImljb25cIj48L2J1dHRvbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4QnV0dG9uRGlyZWN0aXZlXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hCdXR0b24nKSBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZSB8fCB0aGlzLl90eXBlO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLm5hdGl2ZUVsZW1lbnQsIGAke3RoaXMuX2Nzc0NsYXNzfS0tJHt0aGlzLl90eXBlfWApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBidXR0b24gdGV4dCBjb2xvci5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGJ1dHRvbiBpZ3hCdXR0b249XCJncmFkaWVudFwiIGlneEJ1dHRvbkNvbG9yPVwiYmx1ZVwiPjwvYnV0dG9uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hCdXR0b25EaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneEJ1dHRvbkNvbG9yJykgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY29sb3IgPSB2YWx1ZSB8fCB0aGlzLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY29sb3I7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMubmF0aXZlRWxlbWVudCwgJ2NvbG9yJywgdGhpcy5fY29sb3IpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBidXR0b24uXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxidXR0b24gaWd4QnV0dG9uPVwicmFpc2VkXCIgaWd4QnV0dG9uQmFja2dyb3VuZD1cInJlZFwiPjwvYnV0dG9uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hCdXR0b25EaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneEJ1dHRvbkJhY2tncm91bmQnKSBzZXQgYmFja2dyb3VuZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2JhY2tncm91bmRDb2xvciA9IHZhbHVlIHx8IHRoaXMuX2JhY2tncm91bmRDb2xvcjtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZCcsIHRoaXMuX2JhY2tncm91bmRDb2xvcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGBhcmlhLWxhYmVsYCBhdHRyaWJ1dGUuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxidXR0b24gaWd4QnV0dG9uPSBcImZsYXRcIiBpZ3hMYWJlbD1cIkxhYmVsXCI+PC9idXR0b24+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEJ1dHRvbkRpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4TGFiZWwnKSBzZXQgbGFiZWwodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9sYWJlbCA9IHZhbHVlIHx8IHRoaXMuX2xhYmVsO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5uYXRpdmVFbGVtZW50LCBgYXJpYS1sYWJlbGAsIHRoaXMuX2xhYmVsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5hYmxlcy9kaXNhYmxlcyB0aGUgYnV0dG9uLlxuICAgICAqICBgYGBodG1sXG4gICAgICogPGJ1dHRvbiBpZ3hCdXR0b249IFwiZmFiXCIgW2Rpc2FibGVkXT1cInRydWVcIj48L2J1dHRvbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4QnV0dG9uRGlyZWN0aXZlXG4gICAgICovXG4gICAgQElucHV0KCkgc2V0IGRpc2FibGVkKHZhbCkge1xuICAgICAgICB2YWwgPSAhIXZhbDtcbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5uYXRpdmVFbGVtZW50LCBgJHt0aGlzLl9jc3NDbGFzc30tLWRpc2FibGVkYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLm5hdGl2ZUVsZW1lbnQsIGAke3RoaXMuX2Nzc0NsYXNzfS0tZGlzYWJsZWRgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1idXR0b24tLWNvc3knKVxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3NDb3N5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3R5cGUgPT09ICdmbGF0JyB8fCB0aGlzLl90eXBlID09PSAncmFpc2VkJyB8fCB0aGlzLl90eXBlID09PSAnb3V0bGluZWQnKSAmJlxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGVuc2l0eSA9PT0gRGlzcGxheURlbnNpdHkuY29zeTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtYnV0dG9uLS1jb21wYWN0JylcbiAgICBwdWJsaWMgZ2V0IGNzc0NsYXNzQ29tcGFjdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl90eXBlID09PSAnZmxhdCcgfHwgdGhpcy5fdHlwZSA9PT0gJ3JhaXNlZCcgfHwgdGhpcy5fdHlwZSA9PT0gJ291dGxpbmVkJykgJiZcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheURlbnNpdHkgPT09IERpc3BsYXlEZW5zaXR5LmNvbXBhY3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWJ1dHRvbi0tZmFiLWNvc3knKVxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3NDb3N5RmFiKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZSA9PT0gJ2ZhYicgJiYgdGhpcy5kaXNwbGF5RGVuc2l0eSA9PT0gRGlzcGxheURlbnNpdHkuY29zeTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtYnV0dG9uLS1mYWItY29tcGFjdCcpXG4gICAgcHVibGljIGdldCBjc3NDbGFzc0NvbXBhY3RGYWIoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlID09PSAnZmFiJyAmJiB0aGlzLmRpc3BsYXlEZW5zaXR5ID09PSBEaXNwbGF5RGVuc2l0eS5jb21wYWN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB3aGV0aGVyIHRoZSBidXR0b24gaXMgc2VsZWN0ZWQuXG4gICAgICogTWFpbmx5IHVzZWQgaW4gdGhlIElneEJ1dHRvbkdyb3VwIGNvbXBvbmVudCBhbmQgaXQgd2lsbCBoYXZlIG5vIGVmZmVjdCBpZiBzZXQgc2VwYXJhdGVseS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGJ1dHRvbiBpZ3hCdXR0b249XCJmbGF0XCIgW3NlbGVjdGVkXT1cImJ1dHRvbi5zZWxlY3RlZFwiPjwvYnV0dG9uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hCdXR0b25EaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uQ2xpY2soZXYpIHtcbiAgICAgICAgdGhpcy5idXR0b25DbGljay5lbWl0KGV2KTtcbiAgICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneEJ1dHRvbkRpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0lneEJ1dHRvbkRpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4QnV0dG9uTW9kdWxlIHsgfVxuIl19