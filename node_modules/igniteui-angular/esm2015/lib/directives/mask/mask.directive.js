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
const noop = () => { };
const ɵ0 = noop;
export class IgxMaskDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
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
    /**
     * Specifies a placeholder.
     * ```html
     * <input placeholder = "enter text...">
     * ```
     * \@memberof IgxMaskDirective
     * @param {?} val
     * @return {?}
     */
    set placeholder(val) {
        this._placeholder = val;
        this.nativeElement.setAttribute('placeholder', this._placeholder);
    }
    /**
     * @return {?}
     */
    get placeholder() {
        return this._placeholder;
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    get value() {
        return this.nativeElement.value;
    }
    /**
     * @hidden
     * @private
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        this.nativeElement.value = val;
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    get nativeElement() {
        return this.elementRef.nativeElement;
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    get selectionStart() {
        return this.nativeElement.selectionStart;
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    get selectionEnd() {
        return this.nativeElement.selectionEnd;
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        if (this.promptChar && this.promptChar.length > 1) {
            this._maskOptions.promptChar = this.promptChar = this.promptChar.substring(0, 1);
        }
        this._maskOptions.format = this.mask ? this.mask : 'CCCCCCCCCC';
        this._maskOptions.promptChar = this.promptChar ? this.promptChar : '_';
        this.nativeElement.setAttribute('placeholder', this.placeholder ? this.placeholder : this._maskOptions.format);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydown(event) {
        /** @type {?} */
        const key = event.keyCode || event.charCode;
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
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeyup(event) {
        /** @type {?} */
        const key = event.keyCode || event.charCode;
        if (key === KEYS.Ctrl) {
            this._ctrlDown = false;
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onPaste(event) {
        this._paste = true;
        this._valOnPaste = this.value;
        this._cursorOnPaste = this.getCursorPosition();
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onInputChanged(event) {
        if (isIE() && this._stopPropagation) {
            this._stopPropagation = false;
            return;
        }
        if (this._paste) {
            this._paste = false;
            /** @type {?} */
            const clipboardData = this.value.substring(this._cursorOnPaste, this.getCursorPosition());
            this.value = this.maskHelper.parseValueByMaskUponCopyPaste(this._valOnPaste, this._maskOptions, this._cursorOnPaste, clipboardData, this._selection);
            this.setCursorPosition(this.maskHelper.cursor);
        }
        else {
            /** @type {?} */
            const currentCursorPos = this.getCursorPosition();
            this.maskHelper.data = (this._key === KEYS.BACKSPACE) || (this._key === KEYS.DELETE);
            this.value = this._selection && this._selection !== 0 ?
                this.maskHelper.parseValueByMaskUponSelection(this.value, this._maskOptions, currentCursorPos - 1, this._selection) :
                this.maskHelper.parseValueByMask(this.value, this._maskOptions, currentCursorPos - 1);
            this.setCursorPosition(this.maskHelper.cursor);
        }
        /** @type {?} */
        const rawVal = this.maskHelper.restoreValueFromMask(this.value, this._maskOptions);
        this.dataValue = this.includeLiterals ? this.value : rawVal;
        this._onChangeCallback(this.dataValue);
        this.onValueChange.emit({ rawValue: rawVal, formattedValue: this.value });
    }
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    onFocus(value) {
        if (this.focusedValuePipe) {
            if (isIE()) {
                this._stopPropagation = true;
            }
            this.value = this.focusedValuePipe.transform(value);
        }
        else {
            this.value = this.maskHelper.parseValueByMaskOnInit(this.value, this._maskOptions);
        }
    }
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    onBlur(value) {
        if (this.displayValuePipe) {
            this.value = this.displayValuePipe.transform(value);
        }
        else if (value === this.maskHelper.parseMask(this._maskOptions)) {
            this.value = '';
        }
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    getCursorPosition() {
        return this.nativeElement.selectionStart;
    }
    /**
     * @hidden
     * @private
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    setCursorPosition(start, end = start) {
        this.nativeElement.setSelectionRange(start, end);
    }
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
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
    }
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this._onChangeCallback = fn; }
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this._onTouchedCallback = fn; }
}
IgxMaskDirective.decorators = [
    { type: Directive, args: [{
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: IgxMaskDirective, multi: true }],
                selector: '[igxMask]'
            },] }
];
/** @nocollapse */
IgxMaskDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
export class IgxMaskModule {
}
IgxMaskModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxMaskDirective],
                exports: [IgxMaskDirective],
                imports: [CommonModule]
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbWFzay9tYXNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFFUixNQUFNLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7TUFFbEMsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUM7O0FBTXRCLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFvTHpCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7Ozs7Ozs7O1FBakduQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDOzs7O1FBNERsRCxpQkFBWSxHQUFHO1lBQ25CLE1BQU0sRUFBRSxFQUFFO1lBQ1YsVUFBVSxFQUFFLEVBQUU7U0FDakIsQ0FBQzs7OztRQTJCTSx1QkFBa0IsR0FBZSxJQUFJLENBQUM7Ozs7UUFLdEMsc0JBQWlCLEdBQXFCLElBQUksQ0FBQztRQUcvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Ozs7Ozs7OztJQS9JRCxJQUNXLFdBQVcsQ0FBQyxHQUFXO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7OztJQUVELElBQVcsV0FBVztRQUNsQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQzs7Ozs7O0lBeUNELElBQVksS0FBSztRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQzs7Ozs7OztJQUtELElBQVksS0FBSyxDQUFDLEdBQUc7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUtELElBQVksYUFBYTtRQUNyQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUtELElBQVksY0FBYztRQUN0QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUtELElBQVksWUFBWTtRQUNwQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBcUVNLFFBQVE7UUFDWCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3BGO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN2RSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuSCxDQUFDOzs7Ozs7SUFNTSxTQUFTLENBQUMsS0FBSzs7Y0FDWixHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsUUFBUTtRQUUzQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDMUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzFCO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7OztJQU1NLE9BQU8sQ0FBQyxLQUFLOztjQUNWLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxRQUFRO1FBRTNDLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDMUI7SUFDTCxDQUFDOzs7Ozs7SUFNTSxPQUFPLENBQUMsS0FBSztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFNTSxjQUFjLENBQUMsS0FBSztRQUN2QixJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzlCLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOztrQkFFZCxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6RixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsNkJBQTZCLENBQ3RELElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFOUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEQ7YUFBTTs7a0JBQ0csZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBRWpELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVyRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNySCxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUUxRixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsRDs7Y0FFSyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFbEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7OztJQU1NLE9BQU8sQ0FBQyxLQUFLO1FBQ2hCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLElBQUksSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQzthQUNoQztZQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2RDthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3RGO0lBQ0wsQ0FBQzs7Ozs7O0lBTU0sTUFBTSxDQUFDLEtBQUs7UUFDZixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkQ7YUFBTSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDOzs7Ozs7SUFLTyxpQkFBaUI7UUFDckIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7OztJQUtPLGlCQUFpQixDQUFDLEtBQWEsRUFBRSxNQUFjLEtBQUs7UUFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7O0lBS00sVUFBVSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEU7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDM0YsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7Ozs7SUFLTSxnQkFBZ0IsQ0FBQyxFQUFvQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFLdkUsaUJBQWlCLENBQUMsRUFBYyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7WUFqVzdFLFNBQVMsU0FBQztnQkFDUCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUN2RixRQUFRLEVBQUUsV0FBVzthQUN4Qjs7OztZQWxCRyxVQUFVOzs7bUJBMkJULEtBQUssU0FBQyxTQUFTO3lCQVdmLEtBQUs7OEJBVUwsS0FBSzswQkFVTCxLQUFLOytCQWlCTCxLQUFLOytCQVVMLEtBQUs7d0JBTUwsS0FBSzs0QkFVTCxNQUFNO3dCQXNITixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO3NCQXVCbEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztzQkFZaEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs2QkFXaEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztzQkFzQ2hDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztxQkFlN0MsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLHFCQUFxQixDQUFDOzs7Ozs7Ozs7OztJQW5TN0MsZ0NBQ29COzs7Ozs7Ozs7O0lBVXBCLHNDQUMwQjs7Ozs7Ozs7O0lBUzFCLDJDQUNnQzs7Ozs7Ozs7O0lBMEJoQyw0Q0FDdUM7Ozs7Ozs7OztJQVN2Qyw0Q0FDdUM7Ozs7OztJQUt2QyxxQ0FDMEI7Ozs7Ozs7OztJQVMxQix5Q0FDMEQ7Ozs7OztJQXdDMUQscUNBQTJCOzs7Ozs7SUFLM0Isa0NBQXdCOzs7Ozs7SUFLeEIsc0NBQTJCOzs7Ozs7SUFLM0Isd0NBQTZCOzs7Ozs7SUFLN0Isd0NBR0U7Ozs7OztJQUtGLGdDQUFhOzs7Ozs7SUFLYiwwQ0FBdUI7Ozs7OztJQUt2Qix1Q0FBb0I7Ozs7O0lBRXBCLDRDQUFrQzs7Ozs7O0lBS2xDLHNDQUErQjs7Ozs7O0lBSy9CLDhDQUE4Qzs7Ozs7O0lBSzlDLDZDQUFtRDs7Ozs7SUFFdkMsc0NBQThCOzs7Ozs7QUErSzlDLG9DQUdDOzs7SUFGRyxrQ0FBaUI7O0lBQ2pCLHdDQUF1Qjs7Ozs7QUFXM0IsTUFBTSxPQUFPLGFBQWE7OztZQUx6QixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMzQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgUGlwZVRyYW5zZm9ybVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEtFWVMsIE1hc2tIZWxwZXIgfSBmcm9tICcuL21hc2staGVscGVyJztcbmltcG9ydCB7IGlzSUUgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcblxuY29uc3Qgbm9vcCA9ICgpID0+IHsgfTtcblxuQERpcmVjdGl2ZSh7XG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IElneE1hc2tEaXJlY3RpdmUsIG11bHRpOiB0cnVlIH1dLFxuICAgIHNlbGVjdG9yOiAnW2lneE1hc2tdJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hNYXNrRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaW5wdXQgbWFzay5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlucHV0IFtpZ3hNYXNrXSA9IFwiJzAwLzAwLzAwMDAnXCI+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneE1hc2tEaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoJ2lneE1hc2snKVxuICAgIHB1YmxpYyBtYXNrOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjaGFyYWN0ZXIgcmVwcmVzZW50aW5nIGEgZmlsbGFibGUgc3BvdCBpbiB0aGUgaW5wdXQgbWFzay5cbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIFwiJ18nXCIuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpbnB1dCBbcHJvbXB0Q2hhcl0gPSBcIicvJ1wiPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hNYXNrRGlyZWN0aXZlXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcHJvbXB0Q2hhcjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGlmIHRoZSBib3VuZCB2YWx1ZSBpbmNsdWRlcyB0aGUgZm9ybWF0dGluZyBzeW1ib2xzLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aW5wdXQgW2luY2x1ZGVMaXRlcmFsc10gPSBcInRydWVcIj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TWFza0RpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGluY2x1ZGVMaXRlcmFsczogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBhIHBsYWNlaG9sZGVyLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aW5wdXQgcGxhY2Vob2xkZXIgPSBcImVudGVyIHRleHQuLi5cIj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TWFza0RpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwbGFjZWhvbGRlcih2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbDtcbiAgICAgICAgdGhpcy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB0aGlzLl9wbGFjZWhvbGRlcik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGEgcGlwZSB0byBiZSB1c2VkIG9uIGJsdXIuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpbnB1dCBbZGlzcGxheVZhbHVlUGlwZV0gPSBcImRpc3BsYXlGb3JtYXRQaXBlXCI+XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneE1hc2tEaXJlY3RpdmVcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNwbGF5VmFsdWVQaXBlOiBQaXBlVHJhbnNmb3JtO1xuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGEgcGlwZSB0byBiZSB1c2VkIG9uIGZvY3VzLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aW5wdXQgW2ZvY3VzZWRWYWx1ZVBpcGVdID0gXCJpbnB1dEZvcm1hdFBpcGVcIj5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4TWFza0RpcmVjdGl2ZVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZvY3VzZWRWYWx1ZVBpcGU6IFBpcGVUcmFuc2Zvcm07XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHByaXZhdGUgZGF0YVZhbHVlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudCBlYWNoIHRpbWUgdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAgICogUHJvdmlkZXMgYHJhd1ZhbHVlOiBzdHJpbmdgIGFuZCBgZm9ybWF0dGVkVmFsdWU6IHN0cmluZ2AgYXMgZXZlbnQgYXJndW1lbnRzLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aW5wdXQgKG9uVmFsdWVDaGFuZ2UpID0gXCJvblZhbHVlQ2hhbmdlKHJhd1ZhbHVlOiBzdHJpbmcsIGZvcm1hdHRlZFZhbHVlOiBzdHJpbmcpXCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElNYXNrRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXQgdmFsdWUodmFsKSB7XG4gICAgICAgIHRoaXMubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldCBuYXRpdmVFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXQgc2VsZWN0aW9uU3RhcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXQgc2VsZWN0aW9uRW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jdHJsRG93bjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3Bhc3RlOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc2VsZWN0aW9uOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbWFza09wdGlvbnMgPSB7XG4gICAgICAgIGZvcm1hdDogJycsXG4gICAgICAgIHByb21wdENoYXI6ICcnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2tleTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2N1cnNvck9uUGFzdGU7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF92YWxPblBhc3RlO1xuXG4gICAgcHJpdmF0ZSBfc3RvcFByb3BhZ2F0aW9uOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBtYXNrSGVscGVyOiBNYXNrSGVscGVyO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5tYXNrSGVscGVyID0gbmV3IE1hc2tIZWxwZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnByb21wdENoYXIgJiYgdGhpcy5wcm9tcHRDaGFyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX21hc2tPcHRpb25zLnByb21wdENoYXIgPSB0aGlzLnByb21wdENoYXIgPSB0aGlzLnByb21wdENoYXIuc3Vic3RyaW5nKDAsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWFza09wdGlvbnMuZm9ybWF0ID0gdGhpcy5tYXNrID8gdGhpcy5tYXNrIDogJ0NDQ0NDQ0NDQ0MnO1xuICAgICAgICB0aGlzLl9tYXNrT3B0aW9ucy5wcm9tcHRDaGFyID0gdGhpcy5wcm9tcHRDaGFyID8gdGhpcy5wcm9tcHRDaGFyIDogJ18nO1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHRoaXMucGxhY2Vob2xkZXIgPyB0aGlzLnBsYWNlaG9sZGVyIDogdGhpcy5fbWFza09wdGlvbnMuZm9ybWF0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duKGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQuY2hhckNvZGU7XG5cbiAgICAgICAgaWYgKGlzSUUoKSAmJiB0aGlzLl9zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3BQcm9wYWdhdGlvbiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PT0gS0VZUy5DdHJsKSB7XG4gICAgICAgICAgICB0aGlzLl9jdHJsRG93biA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHRoaXMuX2N0cmxEb3duICYmIGtleSA9PT0gS0VZUy5aKSB8fCAodGhpcy5fY3RybERvd24gJiYga2V5ID09PSBLRVlTLlkpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fa2V5ID0ga2V5O1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb24gPSBNYXRoLmFicyh0aGlzLnNlbGVjdGlvbkVuZCAtIHRoaXMuc2VsZWN0aW9uU3RhcnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXl1cChldmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LmNoYXJDb2RlO1xuXG4gICAgICAgIGlmIChrZXkgPT09IEtFWVMuQ3RybCkge1xuICAgICAgICAgICAgdGhpcy5fY3RybERvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3Bhc3RlJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25QYXN0ZShldmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXN0ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fdmFsT25QYXN0ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMuX2N1cnNvck9uUGFzdGUgPSB0aGlzLmdldEN1cnNvclBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbklucHV0Q2hhbmdlZChldmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoaXNJRSgpICYmIHRoaXMuX3N0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fc3RvcFByb3BhZ2F0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fcGFzdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Bhc3RlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGNsaXBib2FyZERhdGEgPSB0aGlzLnZhbHVlLnN1YnN0cmluZyh0aGlzLl9jdXJzb3JPblBhc3RlLCB0aGlzLmdldEN1cnNvclBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubWFza0hlbHBlci5wYXJzZVZhbHVlQnlNYXNrVXBvbkNvcHlQYXN0ZShcbiAgICAgICAgICAgICAgICB0aGlzLl92YWxPblBhc3RlLCB0aGlzLl9tYXNrT3B0aW9ucywgdGhpcy5fY3Vyc29yT25QYXN0ZSwgY2xpcGJvYXJkRGF0YSwgdGhpcy5fc2VsZWN0aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRDdXJzb3JQb3NpdGlvbih0aGlzLm1hc2tIZWxwZXIuY3Vyc29yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDdXJzb3JQb3MgPSB0aGlzLmdldEN1cnNvclBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMubWFza0hlbHBlci5kYXRhID0gKHRoaXMuX2tleSA9PT0gS0VZUy5CQUNLU1BBQ0UpIHx8ICh0aGlzLl9rZXkgPT09IEtFWVMuREVMRVRFKTtcblxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3NlbGVjdGlvbiAmJiB0aGlzLl9zZWxlY3Rpb24gIT09IDAgP1xuICAgICAgICAgICAgICAgIHRoaXMubWFza0hlbHBlci5wYXJzZVZhbHVlQnlNYXNrVXBvblNlbGVjdGlvbih0aGlzLnZhbHVlLCB0aGlzLl9tYXNrT3B0aW9ucywgY3VycmVudEN1cnNvclBvcyAtIDEsIHRoaXMuX3NlbGVjdGlvbikgOlxuICAgICAgICAgICAgICAgIHRoaXMubWFza0hlbHBlci5wYXJzZVZhbHVlQnlNYXNrKHRoaXMudmFsdWUsIHRoaXMuX21hc2tPcHRpb25zLCBjdXJyZW50Q3Vyc29yUG9zIC0gMSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0Q3Vyc29yUG9zaXRpb24odGhpcy5tYXNrSGVscGVyLmN1cnNvcik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByYXdWYWwgPSB0aGlzLm1hc2tIZWxwZXIucmVzdG9yZVZhbHVlRnJvbU1hc2sodGhpcy52YWx1ZSwgdGhpcy5fbWFza09wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuZGF0YVZhbHVlID0gdGhpcy5pbmNsdWRlTGl0ZXJhbHMgPyB0aGlzLnZhbHVlIDogcmF3VmFsO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZGF0YVZhbHVlKTtcblxuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UuZW1pdCh7IHJhd1ZhbHVlOiByYXdWYWwsIGZvcm1hdHRlZFZhbHVlOiB0aGlzLnZhbHVlIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQudGFyZ2V0LnZhbHVlJ10pXG4gICAgcHVibGljIG9uRm9jdXModmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZFZhbHVlUGlwZSkge1xuICAgICAgICAgICAgaWYgKGlzSUUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0b3BQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb2N1c2VkVmFsdWVQaXBlLnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5tYXNrSGVscGVyLnBhcnNlVmFsdWVCeU1hc2tPbkluaXQodGhpcy52YWx1ZSwgdGhpcy5fbWFza09wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50LnRhcmdldC52YWx1ZSddKVxuICAgIHB1YmxpYyBvbkJsdXIodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzcGxheVZhbHVlUGlwZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZGlzcGxheVZhbHVlUGlwZS50cmFuc2Zvcm0odmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSB0aGlzLm1hc2tIZWxwZXIucGFyc2VNYXNrKHRoaXMuX21hc2tPcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRDdXJzb3JQb3NpdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0Q3Vyc29yUG9zaXRpb24oc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIgPSBzdGFydCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvbXB0Q2hhciAmJiB0aGlzLnByb21wdENoYXIubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5fbWFza09wdGlvbnMucHJvbXB0Q2hhciA9IHRoaXMucHJvbXB0Q2hhci5zdWJzdHJpbmcoMCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWUgPyB0aGlzLm1hc2tIZWxwZXIucGFyc2VWYWx1ZUJ5TWFza09uSW5pdCh2YWx1ZSwgdGhpcy5fbWFza09wdGlvbnMpIDogJyc7XG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXlWYWx1ZVBpcGUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmRpc3BsYXlWYWx1ZVBpcGUudHJhbnNmb3JtKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhVmFsdWUgPSB0aGlzLmluY2x1ZGVMaXRlcmFscyA/IHRoaXMudmFsdWUgOiB2YWx1ZTtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh0aGlzLmRhdGFWYWx1ZSk7XG5cbiAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlLmVtaXQoeyByYXdWYWx1ZTogdmFsdWUsIGZvcm1hdHRlZFZhbHVlOiB0aGlzLnZhbHVlIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKSB7IHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBmbjsgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7IHRoaXMuX29uVG91Y2hlZENhbGxiYWNrID0gZm47IH1cbn1cblxuLyoqXG4gKiBUaGUgSWd4TWFza01vZHVsZSBwcm92aWRlcyB0aGUge0BsaW5rIElneE1hc2tEaXJlY3RpdmV9IGluc2lkZSB5b3VyIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElNYXNrRXZlbnRBcmdzIHtcbiAgICByYXdWYWx1ZTogc3RyaW5nO1xuICAgIGZvcm1hdHRlZFZhbHVlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneE1hc2tEaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtJZ3hNYXNrRGlyZWN0aXZlXSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hNYXNrTW9kdWxlIHsgfVxuIl19