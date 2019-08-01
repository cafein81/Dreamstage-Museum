/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, NgModule, Renderer2, HostListener, Optional, Inject } from '@angular/core';
import { DisplayDensityBase, DisplayDensityToken, DisplayDensity } from '../../core/density';
var IgxButtonDirective = /** @class */ (function (_super) {
    tslib_1.__extends(IgxButtonDirective, _super);
    function IgxButtonDirective(element, _renderer, _displayDensityOptions) {
        var _this = _super.call(this, _displayDensityOptions) || this;
        _this.element = element;
        _this._renderer = _renderer;
        _this._displayDensityOptions = _displayDensityOptions;
        /**
         * @hidden
         */
        _this._type = 'flat';
        /**
         * @hidden
         */
        _this._cssClass = 'igx-button';
        /**
         * Called when the button is clicked
         */
        _this.buttonClick = new EventEmitter();
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
        _this.role = 'button';
        /**
         * Gets or sets whether the button is selected.
         * Mainly used in the IgxButtonGroup component and it will have no effect if set separately.
         * ```html
         * <button igxButton="flat" [selected]="button.selected"></button>
         * ```
         * \@memberof IgxButtonDirective
         */
        _this.selected = false;
        return _this;
    }
    Object.defineProperty(IgxButtonDirective.prototype, "nativeElement", {
        /**
         * Returns the underlying DOM element
         */
        get: /**
         * Returns the underlying DOM element
         * @return {?}
         */
        function () {
            return this.element.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxButtonDirective.prototype, "type", {
        /**
         * Sets the type of the button.
         * ```html
         * <button  igxButton= "icon"></button>
         * ```
         * @memberof IgxButtonDirective
         */
        set: /**
         * Sets the type of the button.
         * ```html
         * <button  igxButton= "icon"></button>
         * ```
         * \@memberof IgxButtonDirective
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value || this._type;
            this._renderer.addClass(this.nativeElement, this._cssClass + "--" + this._type);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxButtonDirective.prototype, "color", {
        /**
         * Sets the button text color.
         * ```html
         * <button igxButton="gradient" igxButtonColor="blue"></button>
         * ```
         * @memberof IgxButtonDirective
         */
        set: /**
         * Sets the button text color.
         * ```html
         * <button igxButton="gradient" igxButtonColor="blue"></button>
         * ```
         * \@memberof IgxButtonDirective
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._color = value || this.nativeElement.style.color;
            this._renderer.setStyle(this.nativeElement, 'color', this._color);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxButtonDirective.prototype, "background", {
        /**
         * Sets the background color of the button.
         * ```html
         * <button igxButton="raised" igxButtonBackground="red"></button>
         * ```
         * @memberof IgxButtonDirective
         */
        set: /**
         * Sets the background color of the button.
         * ```html
         * <button igxButton="raised" igxButtonBackground="red"></button>
         * ```
         * \@memberof IgxButtonDirective
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._backgroundColor = value || this._backgroundColor;
            this._renderer.setStyle(this.nativeElement, 'background', this._backgroundColor);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxButtonDirective.prototype, "label", {
        /**
         * Sets the `aria-label` attribute.
         * ```html
         * <button igxButton= "flat" igxLabel="Label"></button>
         * ```
         * @memberof IgxButtonDirective
         */
        set: /**
         * Sets the `aria-label` attribute.
         * ```html
         * <button igxButton= "flat" igxLabel="Label"></button>
         * ```
         * \@memberof IgxButtonDirective
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._label = value || this._label;
            this._renderer.setAttribute(this.nativeElement, "aria-label", this._label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxButtonDirective.prototype, "disabled", {
        /**
         * Enables/disables the button.
         *  ```html
         * <button igxButton= "fab" [disabled]="true"></button>
         * ```
         * @memberof IgxButtonDirective
         */
        set: /**
         * Enables/disables the button.
         *  ```html
         * <button igxButton= "fab" [disabled]="true"></button>
         * ```
         * \@memberof IgxButtonDirective
         * @param {?} val
         * @return {?}
         */
        function (val) {
            val = !!val;
            if (val) {
                this._renderer.addClass(this.nativeElement, this._cssClass + "--disabled");
            }
            else {
                this._renderer.removeClass(this.nativeElement, this._cssClass + "--disabled");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxButtonDirective.prototype, "cssClassCosy", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return (this._type === 'flat' || this._type === 'raised' || this._type === 'outlined') &&
                this.displayDensity === DisplayDensity.cosy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxButtonDirective.prototype, "cssClassCompact", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return (this._type === 'flat' || this._type === 'raised' || this._type === 'outlined') &&
                this.displayDensity === DisplayDensity.compact;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxButtonDirective.prototype, "cssClassCosyFab", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._type === 'fab' && this.displayDensity === DisplayDensity.cosy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxButtonDirective.prototype, "cssClassCompactFab", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this._type === 'fab' && this.displayDensity === DisplayDensity.compact;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} ev
     * @return {?}
     */
    IgxButtonDirective.prototype.onClick = /**
     * @hidden
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        this.buttonClick.emit(ev);
    };
    IgxButtonDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxButton]'
                },] }
    ];
    /** @nocollapse */
    IgxButtonDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
    ]; };
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
    return IgxButtonDirective;
}(DisplayDensityBase));
export { IgxButtonDirective };
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
var IgxButtonModule = /** @class */ (function () {
    function IgxButtonModule() {
    }
    IgxButtonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxButtonDirective],
                    exports: [IgxButtonDirective]
                },] }
    ];
    return IgxButtonModule;
}());
export { IgxButtonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9idXR0b24vYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULFlBQVksRUFDWixRQUFRLEVBQ1IsTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBMEIsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckg7SUFHd0MsOENBQWtCO0lBc0J0RCw0QkFBbUIsT0FBbUIsRUFBVSxTQUFvQixFQUNiLHNCQUE4QztRQURyRyxZQUVRLGtCQUFNLHNCQUFzQixDQUFDLFNBQ2hDO1FBSGMsYUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGVBQVMsR0FBVCxTQUFTLENBQVc7UUFDYiw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCOzs7O1FBbkI3RixXQUFLLEdBQUcsTUFBTSxDQUFDOzs7O1FBSWYsZUFBUyxHQUFHLFlBQVksQ0FBQzs7OztRQThCMUIsaUJBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDOzs7Ozs7Ozs7OztRQVlaLFVBQUksR0FBRyxRQUFRLENBQUM7Ozs7Ozs7OztRQXVHakMsY0FBUSxHQUFHLEtBQUssQ0FBQzs7SUFoSTdCLENBQUM7SUFLTCxzQkFBVyw2Q0FBYTtRQUh4Qjs7V0FFRzs7Ozs7UUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUEwQkQsc0JBQXdCLG9DQUFJO1FBUDVCOzs7Ozs7V0FNRzs7Ozs7Ozs7OztRQUNILFVBQTZCLEtBQWE7WUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFLLElBQUksQ0FBQyxTQUFTLFVBQUssSUFBSSxDQUFDLEtBQU8sQ0FBQyxDQUFDO1FBQ3BGLENBQUM7OztPQUFBO0lBUUQsc0JBQTZCLHFDQUFLO1FBUGxDOzs7Ozs7V0FNRzs7Ozs7Ozs7OztRQUNILFVBQW1DLEtBQWE7WUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RSxDQUFDOzs7T0FBQTtJQVFELHNCQUFrQywwQ0FBVTtRQVA1Qzs7Ozs7O1dBTUc7Ozs7Ozs7Ozs7UUFDSCxVQUE2QyxLQUFhO1lBQ3RELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7OztPQUFBO0lBUUQsc0JBQXVCLHFDQUFLO1FBUDVCOzs7Ozs7V0FNRzs7Ozs7Ozs7OztRQUNILFVBQTZCLEtBQWE7WUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0UsQ0FBQzs7O09BQUE7SUFRRCxzQkFBYSx3Q0FBUTtRQVByQjs7Ozs7O1dBTUc7Ozs7Ozs7Ozs7UUFDSCxVQUFzQixHQUFHO1lBQ3JCLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ1osSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBSyxJQUFJLENBQUMsU0FBUyxlQUFZLENBQUMsQ0FBQzthQUM5RTtpQkFBTTtnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFLLElBQUksQ0FBQyxTQUFTLGVBQVksQ0FBQyxDQUFDO2FBQ2pGO1FBQ0wsQ0FBQzs7O09BQUE7SUFLRCxzQkFDVyw0Q0FBWTtRQUp2Qjs7V0FFRzs7Ozs7UUFDSDtZQUVJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFVBQVUsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLGNBQWMsS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBS0Qsc0JBQ1csK0NBQWU7UUFKMUI7O1dBRUc7Ozs7O1FBQ0g7WUFFSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxVQUFVLENBQUM7Z0JBQ2xGLElBQUksQ0FBQyxjQUFjLEtBQUssY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQUtELHNCQUNXLCtDQUFlO1FBSjFCOztXQUVHOzs7OztRQUNIO1lBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFDL0UsQ0FBQzs7O09BQUE7SUFLRCxzQkFDVyxrREFBa0I7UUFKN0I7O1dBRUc7Ozs7O1FBQ0g7WUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUNsRixDQUFDOzs7T0FBQTtJQVlEOztPQUVHOzs7Ozs7SUFFSSxvQ0FBTzs7Ozs7SUFEZCxVQUNlLEVBQUU7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFwS0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO2lCQUMxQjs7OztnQkFmRyxVQUFVO2dCQU1WLFNBQVM7Z0RBaUNKLFFBQVEsWUFBSSxNQUFNLFNBQUMsbUJBQW1COzs7OEJBYzFDLE1BQU07dUJBYU4sV0FBVyxTQUFDLFdBQVc7dUJBUXZCLEtBQUssU0FBQyxXQUFXO3dCQVdqQixLQUFLLFNBQUMsZ0JBQWdCOzZCQVd0QixLQUFLLFNBQUMscUJBQXFCO3dCQVczQixLQUFLLFNBQUMsVUFBVTsyQkFXaEIsS0FBSzsrQkFZTCxXQUFXLFNBQUMsd0JBQXdCO2tDQVNwQyxXQUFXLFNBQUMsMkJBQTJCO2tDQVN2QyxXQUFXLFNBQUMsNEJBQTRCO3FDQVF4QyxXQUFXLFNBQUMsK0JBQStCOzJCQWEzQyxLQUFLOzBCQUtMLFlBQVksU0FBQyxPQUFPLEVBQUcsQ0FBQyxRQUFRLENBQUM7O0lBSXRDLHlCQUFDO0NBQUEsQUFyS0QsQ0FHd0Msa0JBQWtCLEdBa0t6RDtTQWxLWSxrQkFBa0I7Ozs7Ozs7SUFJM0IsbUNBQXVCOzs7Ozs7SUFJdkIsdUNBQWlDOzs7Ozs7SUFJakMsb0NBQXVCOzs7Ozs7SUFJdkIsb0NBQXVCOzs7Ozs7SUFJdkIsOENBQWlDOzs7OztJQWlCakMseUNBQzZDOzs7Ozs7Ozs7Ozs7SUFZN0Msa0NBQWlEOzs7Ozs7Ozs7O0lBdUdqRCxzQ0FBaUM7O0lBbklyQixxQ0FBMEI7Ozs7O0lBQUUsdUNBQTRCOzs7OztJQUNoRSxvREFBaUc7Ozs7O0FBZ0p6RztJQUFBO0lBSStCLENBQUM7O2dCQUovQixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUNoQzs7SUFDOEIsc0JBQUM7Q0FBQSxBQUpoQyxJQUlnQztTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIFJlbmRlcmVyMixcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgT3B0aW9uYWwsXG4gICAgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcGxheURlbnNpdHlCYXNlLCBEaXNwbGF5RGVuc2l0eVRva2VuLCBJRGlzcGxheURlbnNpdHlPcHRpb25zLCBEaXNwbGF5RGVuc2l0eSB9IGZyb20gJy4uLy4uL2NvcmUvZGVuc2l0eSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneEJ1dHRvbl0nXG59KVxuZXhwb3J0IGNsYXNzIElneEJ1dHRvbkRpcmVjdGl2ZSBleHRlbmRzIERpc3BsYXlEZW5zaXR5QmFzZSB7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdHlwZSA9ICdmbGF0JztcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jc3NDbGFzcyA9ICdpZ3gtYnV0dG9uJztcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2xhYmVsOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChEaXNwbGF5RGVuc2l0eVRva2VuKSBwcm90ZWN0ZWQgX2Rpc3BsYXlEZW5zaXR5T3B0aW9uczogSURpc3BsYXlEZW5zaXR5T3B0aW9ucykge1xuICAgICAgICAgICAgc3VwZXIoX2Rpc3BsYXlEZW5zaXR5T3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHVuZGVybHlpbmcgRE9NIGVsZW1lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG5hdGl2ZUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgYnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYHJvbGVgIGF0dHJpYnV0ZS5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5idXR0b24ucm9sZSA9ICduYXZidXR0b24nO1xuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgYnV0dG9uUm9sZSA9ICB0aGlzLmJ1dHRvbi5yb2xlO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hCdXR0b25EaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHB1YmxpYyByb2xlID0gJ2J1dHRvbic7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdHlwZSBvZiB0aGUgYnV0dG9uLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8YnV0dG9uICBpZ3hCdXR0b249IFwiaWNvblwiPjwvYnV0dG9uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hCdXR0b25EaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneEJ1dHRvbicpIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlIHx8IHRoaXMuX3R5cGU7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMubmF0aXZlRWxlbWVudCwgYCR7dGhpcy5fY3NzQ2xhc3N9LS0ke3RoaXMuX3R5cGV9YCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGJ1dHRvbiB0ZXh0IGNvbG9yLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8YnV0dG9uIGlneEJ1dHRvbj1cImdyYWRpZW50XCIgaWd4QnV0dG9uQ29sb3I9XCJibHVlXCI+PC9idXR0b24+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEJ1dHRvbkRpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4QnV0dG9uQ29sb3InKSBzZXQgY29sb3IodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jb2xvciA9IHZhbHVlIHx8IHRoaXMubmF0aXZlRWxlbWVudC5zdHlsZS5jb2xvcjtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5uYXRpdmVFbGVtZW50LCAnY29sb3InLCB0aGlzLl9jb2xvcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGJ1dHRvbi5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGJ1dHRvbiBpZ3hCdXR0b249XCJyYWlzZWRcIiBpZ3hCdXR0b25CYWNrZ3JvdW5kPVwicmVkXCI+PC9idXR0b24+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEJ1dHRvbkRpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgnaWd4QnV0dG9uQmFja2dyb3VuZCcpIHNldCBiYWNrZ3JvdW5kKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZENvbG9yID0gdmFsdWUgfHwgdGhpcy5fYmFja2dyb3VuZENvbG9yO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kJywgdGhpcy5fYmFja2dyb3VuZENvbG9yKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGJ1dHRvbiBpZ3hCdXR0b249IFwiZmxhdFwiIGlneExhYmVsPVwiTGFiZWxcIj48L2J1dHRvbj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4QnV0dG9uRGlyZWN0aXZlXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hMYWJlbCcpIHNldCBsYWJlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWUgfHwgdGhpcy5fbGFiZWw7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLm5hdGl2ZUVsZW1lbnQsIGBhcmlhLWxhYmVsYCwgdGhpcy5fbGFiZWwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmFibGVzL2Rpc2FibGVzIHRoZSBidXR0b24uXG4gICAgICogIGBgYGh0bWxcbiAgICAgKiA8YnV0dG9uIGlneEJ1dHRvbj0gXCJmYWJcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiPjwvYnV0dG9uPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hCdXR0b25EaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzZXQgZGlzYWJsZWQodmFsKSB7XG4gICAgICAgIHZhbCA9ICEhdmFsO1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLm5hdGl2ZUVsZW1lbnQsIGAke3RoaXMuX2Nzc0NsYXNzfS0tZGlzYWJsZWRgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMubmF0aXZlRWxlbWVudCwgYCR7dGhpcy5fY3NzQ2xhc3N9LS1kaXNhYmxlZGApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWJ1dHRvbi0tY29zeScpXG4gICAgcHVibGljIGdldCBjc3NDbGFzc0Nvc3koKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodGhpcy5fdHlwZSA9PT0gJ2ZsYXQnIHx8IHRoaXMuX3R5cGUgPT09ICdyYWlzZWQnIHx8IHRoaXMuX3R5cGUgPT09ICdvdXRsaW5lZCcpICYmXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlEZW5zaXR5ID09PSBEaXNwbGF5RGVuc2l0eS5jb3N5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1idXR0b24tLWNvbXBhY3QnKVxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3NDb21wYWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3R5cGUgPT09ICdmbGF0JyB8fCB0aGlzLl90eXBlID09PSAncmFpc2VkJyB8fCB0aGlzLl90eXBlID09PSAnb3V0bGluZWQnKSAmJlxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGVuc2l0eSA9PT0gRGlzcGxheURlbnNpdHkuY29tcGFjdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtYnV0dG9uLS1mYWItY29zeScpXG4gICAgcHVibGljIGdldCBjc3NDbGFzc0Nvc3lGYWIoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlID09PSAnZmFiJyAmJiB0aGlzLmRpc3BsYXlEZW5zaXR5ID09PSBEaXNwbGF5RGVuc2l0eS5jb3N5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1idXR0b24tLWZhYi1jb21wYWN0JylcbiAgICBwdWJsaWMgZ2V0IGNzc0NsYXNzQ29tcGFjdEZhYigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGUgPT09ICdmYWInICYmIHRoaXMuZGlzcGxheURlbnNpdHkgPT09IERpc3BsYXlEZW5zaXR5LmNvbXBhY3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIHdoZXRoZXIgdGhlIGJ1dHRvbiBpcyBzZWxlY3RlZC5cbiAgICAgKiBNYWlubHkgdXNlZCBpbiB0aGUgSWd4QnV0dG9uR3JvdXAgY29tcG9uZW50IGFuZCBpdCB3aWxsIGhhdmUgbm8gZWZmZWN0IGlmIHNldCBzZXBhcmF0ZWx5LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8YnV0dG9uIGlneEJ1dHRvbj1cImZsYXRcIiBbc2VsZWN0ZWRdPVwiYnV0dG9uLnNlbGVjdGVkXCI+PC9idXR0b24+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEJ1dHRvbkRpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCAgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25DbGljayhldikge1xuICAgICAgICB0aGlzLmJ1dHRvbkNsaWNrLmVtaXQoZXYpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSWd4QnV0dG9uRGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4QnV0dG9uRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hCdXR0b25Nb2R1bGUgeyB9XG4iXX0=