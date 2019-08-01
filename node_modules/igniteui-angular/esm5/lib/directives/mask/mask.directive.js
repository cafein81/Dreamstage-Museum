/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Directive, ElementRef, EventEmitter, HostListener, Input, NgModule, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { KEYS, MaskHelper } from './mask-helper';
import { isIE } from '../../core/utils';
/** @type {?} */
var noop = function () { };
var ɵ0 = noop;
var IgxMaskDirective = /** @class */ (function () {
    function IgxMaskDirective(elementRef) {
        this.elementRef = elementRef;
        /**
         * Emits an event each time the value changes.
         * Provides `rawValue: string` and `formattedValue: string` as event arguments.
         * ```html
         * <input (onValueChange) = "onValueChange(rawValue: string, formattedValue: string)">
         * ```
         */
        this.onValueChange = new EventEmitter();
        /**
         * @hidden
         */
        this._maskOptions = {
            format: '',
            promptChar: ''
        };
        /**
         * @hidden
         */
        this._onTouchedCallback = noop;
        /**
         * @hidden
         */
        this._onChangeCallback = noop;
        this.maskHelper = new MaskHelper();
    }
    Object.defineProperty(IgxMaskDirective.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placeholder;
        },
        /**
         * Specifies a placeholder.
         * ```html
         * <input placeholder = "enter text...">
         * ```
         * @memberof IgxMaskDirective
         */
        set: /**
         * Specifies a placeholder.
         * ```html
         * <input placeholder = "enter text...">
         * ```
         * \@memberof IgxMaskDirective
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._placeholder = val;
            this.nativeElement.setAttribute('placeholder', this._placeholder);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxMaskDirective.prototype, "value", {
        /**
         *@hidden
         */
        get: /**
         * @hidden
         * @private
         * @return {?}
         */
        function () {
            return this.nativeElement.value;
        },
        /**
         *@hidden
         */
        set: /**
         * @hidden
         * @private
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.nativeElement.value = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxMaskDirective.prototype, "nativeElement", {
        /**
         *@hidden
         */
        get: /**
         * @hidden
         * @private
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxMaskDirective.prototype, "selectionStart", {
        /**
         *@hidden
         */
        get: /**
         * @hidden
         * @private
         * @return {?}
         */
        function () {
            return this.nativeElement.selectionStart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxMaskDirective.prototype, "selectionEnd", {
        /**
         *@hidden
         */
        get: /**
         * @hidden
         * @private
         * @return {?}
         */
        function () {
            return this.nativeElement.selectionEnd;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxMaskDirective.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.promptChar && this.promptChar.length > 1) {
            this._maskOptions.promptChar = this.promptChar = this.promptChar.substring(0, 1);
        }
        this._maskOptions.format = this.mask ? this.mask : 'CCCCCCCCCC';
        this._maskOptions.promptChar = this.promptChar ? this.promptChar : '_';
        this.nativeElement.setAttribute('placeholder', this.placeholder ? this.placeholder : this._maskOptions.format);
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMaskDirective.prototype.onKeydown = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.keyCode || event.charCode;
        if (isIE() && this._stopPropagation) {
            this._stopPropagation = false;
        }
        if (key === KEYS.Ctrl) {
            this._ctrlDown = true;
        }
        if ((this._ctrlDown && key === KEYS.Z) || (this._ctrlDown && key === KEYS.Y)) {
            event.preventDefault();
        }
        this._key = key;
        this._selection = Math.abs(this.selectionEnd - this.selectionStart);
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMaskDirective.prototype.onKeyup = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.keyCode || event.charCode;
        if (key === KEYS.Ctrl) {
            this._ctrlDown = false;
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMaskDirective.prototype.onPaste = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._paste = true;
        this._valOnPaste = this.value;
        this._cursorOnPaste = this.getCursorPosition();
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxMaskDirective.prototype.onInputChanged = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (isIE() && this._stopPropagation) {
            this._stopPropagation = false;
            return;
        }
        if (this._paste) {
            this._paste = false;
            /** @type {?} */
            var clipboardData = this.value.substring(this._cursorOnPaste, this.getCursorPosition());
            this.value = this.maskHelper.parseValueByMaskUponCopyPaste(this._valOnPaste, this._maskOptions, this._cursorOnPaste, clipboardData, this._selection);
            this.setCursorPosition(this.maskHelper.cursor);
        }
        else {
            /** @type {?} */
            var currentCursorPos = this.getCursorPosition();
            this.maskHelper.data = (this._key === KEYS.BACKSPACE) || (this._key === KEYS.DELETE);
            this.value = this._selection && this._selection !== 0 ?
                this.maskHelper.parseValueByMaskUponSelection(this.value, this._maskOptions, currentCursorPos - 1, this._selection) :
                this.maskHelper.parseValueByMask(this.value, this._maskOptions, currentCursorPos - 1);
            this.setCursorPosition(this.maskHelper.cursor);
        }
        /** @type {?} */
        var rawVal = this.maskHelper.restoreValueFromMask(this.value, this._maskOptions);
        this.dataValue = this.includeLiterals ? this.value : rawVal;
        this._onChangeCallback(this.dataValue);
        this.onValueChange.emit({ rawValue: rawVal, formattedValue: this.value });
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxMaskDirective.prototype.onFocus = /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.focusedValuePipe) {
            if (isIE()) {
                this._stopPropagation = true;
            }
            this.value = this.focusedValuePipe.transform(value);
        }
        else {
            this.value = this.maskHelper.parseValueByMaskOnInit(this.value, this._maskOptions);
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxMaskDirective.prototype.onBlur = /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.displayValuePipe) {
            this.value = this.displayValuePipe.transform(value);
        }
        else if (value === this.maskHelper.parseMask(this._maskOptions)) {
            this.value = '';
        }
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    IgxMaskDirective.prototype.getCursorPosition = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        return this.nativeElement.selectionStart;
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    IgxMaskDirective.prototype.setCursorPosition = /**
     * @hidden
     * @private
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    function (start, end) {
        if (end === void 0) { end = start; }
        this.nativeElement.setSelectionRange(start, end);
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxMaskDirective.prototype.writeValue = /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.promptChar && this.promptChar.length > 1) {
            this._maskOptions.promptChar = this.promptChar.substring(0, 1);
        }
        this.value = value ? this.maskHelper.parseValueByMaskOnInit(value, this._maskOptions) : '';
        if (this.displayValuePipe) {
            this.value = this.displayValuePipe.transform(this.value);
        }
        this.dataValue = this.includeLiterals ? this.value : value;
        this._onChangeCallback(this.dataValue);
        this.onValueChange.emit({ rawValue: value, formattedValue: this.value });
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxMaskDirective.prototype.registerOnChange = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onChangeCallback = fn; };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxMaskDirective.prototype.registerOnTouched = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this._onTouchedCallback = fn; };
    IgxMaskDirective.decorators = [
        { type: Directive, args: [{
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: IgxMaskDirective, multi: true }],
                    selector: '[igxMask]'
                },] }
    ];
    /** @nocollapse */
    IgxMaskDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    IgxMaskDirective.propDecorators = {
        mask: [{ type: Input, args: ['igxMask',] }],
        promptChar: [{ type: Input }],
        includeLiterals: [{ type: Input }],
        placeholder: [{ type: Input }],
        displayValuePipe: [{ type: Input }],
        focusedValuePipe: [{ type: Input }],
        dataValue: [{ type: Input }],
        onValueChange: [{ type: Output }],
        onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        onKeyup: [{ type: HostListener, args: ['keyup', ['$event'],] }],
        onPaste: [{ type: HostListener, args: ['paste', ['$event'],] }],
        onInputChanged: [{ type: HostListener, args: ['input', ['$event'],] }],
        onFocus: [{ type: HostListener, args: ['focus', ['$event.target.value'],] }],
        onBlur: [{ type: HostListener, args: ['blur', ['$event.target.value'],] }]
    };
    return IgxMaskDirective;
}());
export { IgxMaskDirective };
if (false) {
    /**
     * Sets the input mask.
     * ```html
     * <input [igxMask] = "'00/00/0000'">
     * ```
     * \@memberof IgxMaskDirective
     * @type {?}
     */
    IgxMaskDirective.prototype.mask;
    /**
     * Sets the character representing a fillable spot in the input mask.
     * Default value is "'_'".
     * ```html
     * <input [promptChar] = "'/'">
     * ```
     * \@memberof IgxMaskDirective
     * @type {?}
     */
    IgxMaskDirective.prototype.promptChar;
    /**
     * Specifies if the bound value includes the formatting symbols.
     * ```html
     * <input [includeLiterals] = "true">
     * ```
     * \@memberof IgxMaskDirective
     * @type {?}
     */
    IgxMaskDirective.prototype.includeLiterals;
    /**
     * Specifies a pipe to be used on blur.
     * ```html
     * <input [displayValuePipe] = "displayFormatPipe">
     * ```
     * \@memberof IgxMaskDirective
     * @type {?}
     */
    IgxMaskDirective.prototype.displayValuePipe;
    /**
     * Specifies a pipe to be used on focus.
     * ```html
     * <input [focusedValuePipe] = "inputFormatPipe">
     * ```
     * \@memberof IgxMaskDirective
     * @type {?}
     */
    IgxMaskDirective.prototype.focusedValuePipe;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMaskDirective.prototype.dataValue;
    /**
     * Emits an event each time the value changes.
     * Provides `rawValue: string` and `formattedValue: string` as event arguments.
     * ```html
     * <input (onValueChange) = "onValueChange(rawValue: string, formattedValue: string)">
     * ```
     * @type {?}
     */
    IgxMaskDirective.prototype.onValueChange;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMaskDirective.prototype._ctrlDown;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMaskDirective.prototype._paste;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMaskDirective.prototype._selection;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMaskDirective.prototype._placeholder;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMaskDirective.prototype._maskOptions;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMaskDirective.prototype._key;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMaskDirective.prototype._cursorOnPaste;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMaskDirective.prototype._valOnPaste;
    /**
     * @type {?}
     * @private
     */
    IgxMaskDirective.prototype._stopPropagation;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMaskDirective.prototype.maskHelper;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMaskDirective.prototype._onTouchedCallback;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxMaskDirective.prototype._onChangeCallback;
    /**
     * @type {?}
     * @private
     */
    IgxMaskDirective.prototype.elementRef;
}
/**
 * The IgxMaskModule provides the {\@link IgxMaskDirective} inside your application.
 * @record
 */
export function IMaskEventArgs() { }
if (false) {
    /** @type {?} */
    IMaskEventArgs.prototype.rawValue;
    /** @type {?} */
    IMaskEventArgs.prototype.formattedValue;
}
/**
 * @hidden
 */
var IgxMaskModule = /** @class */ (function () {
    function IgxMaskModule() {
    }
    IgxMaskModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxMaskDirective],
                    exports: [IgxMaskDirective],
                    imports: [CommonModule]
                },] }
    ];
    return IgxMaskModule;
}());
export { IgxMaskModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbWFzay9tYXNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFFUixNQUFNLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFFbEMsSUFBSSxHQUFHLGNBQVEsQ0FBQzs7QUFFdEI7SUF3TEksMEJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7Ozs7Ozs7O1FBakduQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDOzs7O1FBNERsRCxpQkFBWSxHQUFHO1lBQ25CLE1BQU0sRUFBRSxFQUFFO1lBQ1YsVUFBVSxFQUFFLEVBQUU7U0FDakIsQ0FBQzs7OztRQTJCTSx1QkFBa0IsR0FBZSxJQUFJLENBQUM7Ozs7UUFLdEMsc0JBQWlCLEdBQXFCLElBQUksQ0FBQztRQUcvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQS9JRCxzQkFDVyx5Q0FBVzs7OztRQUt0QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO1FBZkQ7Ozs7OztXQU1HOzs7Ozs7Ozs7O1FBQ0gsVUFDdUIsR0FBVztZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FB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dkMsc0NBQThCOzs7Ozs7QUErSzlDLG9DQUdDOzs7SUFGRyxrQ0FBaUI7O0lBQ2pCLHdDQUF1Qjs7Ozs7QUFNM0I7SUFBQTtJQUs2QixDQUFDOztnQkFMN0IsUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUNoQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDM0IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUMxQjs7SUFDNEIsb0JBQUM7Q0FBQSxBQUw5QixJQUs4QjtTQUFqQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBJbnB1dCxcbiAgICBOZ01vZHVsZSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFBpcGVUcmFuc2Zvcm1cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBLRVlTLCBNYXNrSGVscGVyIH0gZnJvbSAnLi9tYXNrLWhlbHBlcic7XG5pbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7IH07XG5cbkBEaXJlY3RpdmUoe1xuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBJZ3hNYXNrRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZSB9XSxcbiAgICBzZWxlY3RvcjogJ1tpZ3hNYXNrXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4TWFza0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGlucHV0IG1hc2suXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpbnB1dCBbaWd4TWFza10gPSBcIicwMC8wMC8wMDAwJ1wiPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hNYXNrRGlyZWN0aXZlXG4gICAgICovXG4gICAgQElucHV0KCdpZ3hNYXNrJylcbiAgICBwdWJsaWMgbWFzazogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY2hhcmFjdGVyIHJlcHJlc2VudGluZyBhIGZpbGxhYmxlIHNwb3QgaW4gdGhlIGlucHV0IG1hc2suXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBcIidfJ1wiLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aW5wdXQgW3Byb21wdENoYXJdID0gXCInLydcIj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TWFza0RpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHByb21wdENoYXI6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBpZiB0aGUgYm91bmQgdmFsdWUgaW5jbHVkZXMgdGhlIGZvcm1hdHRpbmcgc3ltYm9scy5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlucHV0IFtpbmNsdWRlTGl0ZXJhbHNdID0gXCJ0cnVlXCI+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneE1hc2tEaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpbmNsdWRlTGl0ZXJhbHM6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgYSBwbGFjZWhvbGRlci5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlucHV0IHBsYWNlaG9sZGVyID0gXCJlbnRlciB0ZXh0Li4uXCI+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneE1hc2tEaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcGxhY2Vob2xkZXIodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWw7XG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdGhpcy5fcGxhY2Vob2xkZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBhIHBpcGUgdG8gYmUgdXNlZCBvbiBibHVyLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aW5wdXQgW2Rpc3BsYXlWYWx1ZVBpcGVdID0gXCJkaXNwbGF5Rm9ybWF0UGlwZVwiPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hNYXNrRGlyZWN0aXZlXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzcGxheVZhbHVlUGlwZTogUGlwZVRyYW5zZm9ybTtcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBhIHBpcGUgdG8gYmUgdXNlZCBvbiBmb2N1cy5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlucHV0IFtmb2N1c2VkVmFsdWVQaXBlXSA9IFwiaW5wdXRGb3JtYXRQaXBlXCI+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneE1hc2tEaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBmb2N1c2VkVmFsdWVQaXBlOiBQaXBlVHJhbnNmb3JtO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwcml2YXRlIGRhdGFWYWx1ZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgZWFjaCB0aW1lIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgICAqIFByb3ZpZGVzIGByYXdWYWx1ZTogc3RyaW5nYCBhbmQgYGZvcm1hdHRlZFZhbHVlOiBzdHJpbmdgIGFzIGV2ZW50IGFyZ3VtZW50cy5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlucHV0IChvblZhbHVlQ2hhbmdlKSA9IFwib25WYWx1ZUNoYW5nZShyYXdWYWx1ZTogc3RyaW5nLCBmb3JtYXR0ZWRWYWx1ZTogc3RyaW5nKVwiPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJTWFza0V2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0IHZhbHVlKHZhbCkge1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXQgbmF0aXZlRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0IHNlbGVjdGlvblN0YXJ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0IHNlbGVjdGlvbkVuZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY3RybERvd246IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9wYXN0ZTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3NlbGVjdGlvbjogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX21hc2tPcHRpb25zID0ge1xuICAgICAgICBmb3JtYXQ6ICcnLFxuICAgICAgICBwcm9tcHRDaGFyOiAnJ1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9rZXk7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jdXJzb3JPblBhc3RlO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdmFsT25QYXN0ZTtcblxuICAgIHByaXZhdGUgX3N0b3BQcm9wYWdhdGlvbjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgbWFza0hlbHBlcjogTWFza0hlbHBlcjtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX29uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMubWFza0hlbHBlciA9IG5ldyBNYXNrSGVscGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wcm9tcHRDaGFyICYmIHRoaXMucHJvbXB0Q2hhci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXNrT3B0aW9ucy5wcm9tcHRDaGFyID0gdGhpcy5wcm9tcHRDaGFyID0gdGhpcy5wcm9tcHRDaGFyLnN1YnN0cmluZygwLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21hc2tPcHRpb25zLmZvcm1hdCA9IHRoaXMubWFzayA/IHRoaXMubWFzayA6ICdDQ0NDQ0NDQ0NDJztcbiAgICAgICAgdGhpcy5fbWFza09wdGlvbnMucHJvbXB0Q2hhciA9IHRoaXMucHJvbXB0Q2hhciA/IHRoaXMucHJvbXB0Q2hhciA6ICdfJztcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB0aGlzLnBsYWNlaG9sZGVyID8gdGhpcy5wbGFjZWhvbGRlciA6IHRoaXMuX21hc2tPcHRpb25zLmZvcm1hdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bihldmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LmNoYXJDb2RlO1xuXG4gICAgICAgIGlmIChpc0lFKCkgJiYgdGhpcy5fc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9zdG9wUHJvcGFnYXRpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09IEtFWVMuQ3RybCkge1xuICAgICAgICAgICAgdGhpcy5fY3RybERvd24gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCh0aGlzLl9jdHJsRG93biAmJiBrZXkgPT09IEtFWVMuWikgfHwgKHRoaXMuX2N0cmxEb3duICYmIGtleSA9PT0gS0VZUy5ZKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2tleSA9IGtleTtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gTWF0aC5hYnModGhpcy5zZWxlY3Rpb25FbmQgLSB0aGlzLnNlbGVjdGlvblN0YXJ0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5dXAoZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC5jaGFyQ29kZTtcblxuICAgICAgICBpZiAoa2V5ID09PSBLRVlTLkN0cmwpIHtcbiAgICAgICAgICAgIHRoaXMuX2N0cmxEb3duID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uUGFzdGUoZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGFzdGUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3ZhbE9uUGFzdGUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB0aGlzLl9jdXJzb3JPblBhc3RlID0gdGhpcy5nZXRDdXJzb3JQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25JbnB1dENoYW5nZWQoZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzSUUoKSAmJiB0aGlzLl9zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3BQcm9wYWdhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3Bhc3RlKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXN0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBjbGlwYm9hcmREYXRhID0gdGhpcy52YWx1ZS5zdWJzdHJpbmcodGhpcy5fY3Vyc29yT25QYXN0ZSwgdGhpcy5nZXRDdXJzb3JQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1hc2tIZWxwZXIucGFyc2VWYWx1ZUJ5TWFza1Vwb25Db3B5UGFzdGUoXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsT25QYXN0ZSwgdGhpcy5fbWFza09wdGlvbnMsIHRoaXMuX2N1cnNvck9uUGFzdGUsIGNsaXBib2FyZERhdGEsIHRoaXMuX3NlbGVjdGlvbik7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0Q3Vyc29yUG9zaXRpb24odGhpcy5tYXNrSGVscGVyLmN1cnNvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q3Vyc29yUG9zID0gdGhpcy5nZXRDdXJzb3JQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICB0aGlzLm1hc2tIZWxwZXIuZGF0YSA9ICh0aGlzLl9rZXkgPT09IEtFWVMuQkFDS1NQQUNFKSB8fCAodGhpcy5fa2V5ID09PSBLRVlTLkRFTEVURSk7XG5cbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLl9zZWxlY3Rpb24gJiYgdGhpcy5fc2VsZWN0aW9uICE9PSAwID9cbiAgICAgICAgICAgICAgICB0aGlzLm1hc2tIZWxwZXIucGFyc2VWYWx1ZUJ5TWFza1Vwb25TZWxlY3Rpb24odGhpcy52YWx1ZSwgdGhpcy5fbWFza09wdGlvbnMsIGN1cnJlbnRDdXJzb3JQb3MgLSAxLCB0aGlzLl9zZWxlY3Rpb24pIDpcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2tIZWxwZXIucGFyc2VWYWx1ZUJ5TWFzayh0aGlzLnZhbHVlLCB0aGlzLl9tYXNrT3B0aW9ucywgY3VycmVudEN1cnNvclBvcyAtIDEpO1xuXG4gICAgICAgICAgICB0aGlzLnNldEN1cnNvclBvc2l0aW9uKHRoaXMubWFza0hlbHBlci5jdXJzb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmF3VmFsID0gdGhpcy5tYXNrSGVscGVyLnJlc3RvcmVWYWx1ZUZyb21NYXNrKHRoaXMudmFsdWUsIHRoaXMuX21hc2tPcHRpb25zKTtcblxuICAgICAgICB0aGlzLmRhdGFWYWx1ZSA9IHRoaXMuaW5jbHVkZUxpdGVyYWxzID8gdGhpcy52YWx1ZSA6IHJhd1ZhbDtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh0aGlzLmRhdGFWYWx1ZSk7XG5cbiAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlLmVtaXQoeyByYXdWYWx1ZTogcmF3VmFsLCBmb3JtYXR0ZWRWYWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50LnRhcmdldC52YWx1ZSddKVxuICAgIHB1YmxpYyBvbkZvY3VzKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWRWYWx1ZVBpcGUpIHtcbiAgICAgICAgICAgIGlmIChpc0lFKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdG9wUHJvcGFnYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9jdXNlZFZhbHVlUGlwZS50cmFuc2Zvcm0odmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubWFza0hlbHBlci5wYXJzZVZhbHVlQnlNYXNrT25Jbml0KHRoaXMudmFsdWUsIHRoaXMuX21hc2tPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSlcbiAgICBwdWJsaWMgb25CbHVyKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXlWYWx1ZVBpcGUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmRpc3BsYXlWYWx1ZVBpcGUudHJhbnNmb3JtKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gdGhpcy5tYXNrSGVscGVyLnBhcnNlTWFzayh0aGlzLl9tYXNrT3B0aW9ucykpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0Q3Vyc29yUG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNldEN1cnNvclBvc2l0aW9uKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyID0gc3RhcnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb21wdENoYXIgJiYgdGhpcy5wcm9tcHRDaGFyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX21hc2tPcHRpb25zLnByb21wdENoYXIgPSB0aGlzLnByb21wdENoYXIuc3Vic3RyaW5nKDAsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlID8gdGhpcy5tYXNrSGVscGVyLnBhcnNlVmFsdWVCeU1hc2tPbkluaXQodmFsdWUsIHRoaXMuX21hc2tPcHRpb25zKSA6ICcnO1xuICAgICAgICBpZiAodGhpcy5kaXNwbGF5VmFsdWVQaXBlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5kaXNwbGF5VmFsdWVQaXBlLnRyYW5zZm9ybSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YVZhbHVlID0gdGhpcy5pbmNsdWRlTGl0ZXJhbHMgPyB0aGlzLnZhbHVlIDogdmFsdWU7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy5kYXRhVmFsdWUpO1xuXG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZS5lbWl0KHsgcmF3VmFsdWU6IHZhbHVlLCBmb3JtYXR0ZWRWYWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCkgeyB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gZm47IH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCkgeyB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuOyB9XG59XG5cbi8qKlxuICogVGhlIElneE1hc2tNb2R1bGUgcHJvdmlkZXMgdGhlIHtAbGluayBJZ3hNYXNrRGlyZWN0aXZlfSBpbnNpZGUgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJTWFza0V2ZW50QXJncyB7XG4gICAgcmF3VmFsdWU6IHN0cmluZztcbiAgICBmb3JtYXR0ZWRWYWx1ZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hNYXNrRGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbSWd4TWFza0RpcmVjdGl2ZV0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSWd4TWFza01vZHVsZSB7IH1cbiJdfQ==