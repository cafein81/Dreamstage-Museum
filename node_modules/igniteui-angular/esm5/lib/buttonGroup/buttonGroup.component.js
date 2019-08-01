/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { Component, ContentChildren, ChangeDetectorRef, EventEmitter, HostBinding, Inject, Input, NgModule, Output, Optional, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { IgxButtonDirective, IgxButtonModule } from '../directives/button/button.directive';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { IgxIconModule } from '../icon/index';
import { takeUntil } from 'rxjs/operators';
import { DisplayDensityBase, DisplayDensityToken } from '../core/density';
/** @enum {number} */
var ButtonGroupAlignment = {
    horizontal: 0, vertical: 1,
};
export { ButtonGroupAlignment };
ButtonGroupAlignment[ButtonGroupAlignment.horizontal] = 'horizontal';
ButtonGroupAlignment[ButtonGroupAlignment.vertical] = 'vertical';
/** @type {?} */
var NEXT_ID = 0;
/**
 * **Ignite UI for Angular Button Group** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/buttongroup.html)
 *
 * The Ignite UI Button Group displays a group of buttons either vertically or horizontally.  The group supports
 * single, multiple and toggle selection.
 *
 * Example:
 * ```html
 * <igx-buttongroup multiSelection="true" [values]="fontOptions">
 * </igx-buttongroup>
 * ```
 * The `fontOptions` value shown above is defined as:
 * ```typescript
 * this.fontOptions = [
 *   { icon: 'format_bold', selected: false },
 *   { icon: 'format_italic', selected: false },
 *   { icon: 'format_underlined', selected: false }];
 * ```
 */
var IgxButtonGroupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxButtonGroupComponent, _super);
    function IgxButtonGroupComponent(_cdr, _renderer, _displayDensityOptions) {
        var _this = _super.call(this, _displayDensityOptions) || this;
        _this._cdr = _cdr;
        _this._renderer = _renderer;
        _this._displayDensityOptions = _displayDensityOptions;
        _this._disabled = false;
        _this.buttonClickNotifier$ = new Subject();
        _this.queryListNotifier$ = new Subject();
        /**
         * An \@Input property that sets the value of the `id` attribute. If not set it will be automatically generated.
         * ```html
         *  <igx-buttongroup [id]="'igx-dialog-56'" [multiSelection]="!multi" [values]="alignOptions">
         * ```
         */
        _this.id = "igx-buttongroup-" + NEXT_ID++;
        /**
         * An \@Input property that enables selecting multiple buttons. By default, multi-selection is false.
         * ```html
         * <igx-buttongroup [multiSelection]="false" [alignment]="alignment"></igx-buttongroup>
         * ```
         */
        _this.multiSelection = false;
        /**
         * @hidden
         */
        _this.selectedIndexes = [];
        /**
         * An \@Ouput property that emits an event when a button is selected.
         * ```typescript
         * \@ViewChild("toast")
         * private toast: IgxToastComponent;
         * public onSelect(buttongroup){
         *    this.toast.show()
         * }
         * //...
         * ```
         * ```html
         * <igx-buttongroup #MyChild [multiSelection]="!multi" (onSelect)="onSelect($event)"></igx-buttongroup>
         * <igx-toast #toast message="You have made a selection!"></igx-toast>
         * ```
         */
        _this.onSelect = new EventEmitter();
        /**
         * An \@Ouput property that emits an event when a button is deselected.
         * ```typescript
         * \@ViewChild("toast")
         * private toast: IgxToastComponent;
         * public onUnselect(buttongroup){
         *    this.toast.show()
         * }
         * //...
         * ```
         * ```html
         * igx-buttongroup #MyChild [multiSelection]="multi" (onUnselect)="onUnselect($event)"></igx-buttongroup>
         * <igx-toast #toast message="You have deselected a button!"></igx-toast>
         * ```
         */
        _this.onUnselect = new EventEmitter();
        return _this;
    }
    Object.defineProperty(IgxButtonGroupComponent.prototype, "buttons", {
        /**
         * A collection containing all buttons inside the button group.
         */
        get: /**
         * A collection containing all buttons inside the button group.
         * @return {?}
         */
        function () {
            return tslib_1.__spread(this.viewButtons.toArray(), this.templateButtons.toArray());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxButtonGroupComponent.prototype, "itemContentCssClass", {
        /**
         * Returns the CSS class of the item content of the `IgxButtonGroup`.
         *```typescript
         *@ViewChild("MyChild")
         *public buttonG: IgxButtonGroupComponent;
         *ngAfterViewInit(){
         *   let buttonSelect = this.buttonG.itemContentCssClass;
         *}
         *```
         */
        get: /**
         * Returns the CSS class of the item content of the `IgxButtonGroup`.
         * ```typescript
         * \@ViewChild("MyChild")
         * public buttonG: IgxButtonGroupComponent;
         * ngAfterViewInit(){
         *   let buttonSelect = this.buttonG.itemContentCssClass;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this._itemContentCssClass;
        },
        /**
         * Allows you to set a style using the `itemContentCssClass` input.
         * The value should be the CSS class name that will be applied to the button group.
         *```typescript
         *public style1 = "styleClass";
         * //..
         *```
         * ```html
         *<igx-buttongroup [itemContentCssClass]="style1" [multiSelection]="!multi" [values]="alignOptions">
         *```
         */
        set: /**
         * Allows you to set a style using the `itemContentCssClass` input.
         * The value should be the CSS class name that will be applied to the button group.
         * ```typescript
         * public style1 = "styleClass";
         * //..
         * ```
         * ```html
         * <igx-buttongroup [itemContentCssClass]="style1" [multiSelection]="!multi" [values]="alignOptions">
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._itemContentCssClass = value || this._itemContentCssClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxButtonGroupComponent.prototype, "disabled", {
        /**
         * An @Input property that allows you to disable the `igx-buttongroup` component. By default it's false.
         * ```html
         * <igx-buttongroup [disabled]="true" [multiSelection]="multi" [values]="fontOptions"></igx-buttongroup>
         * ```
         */
        get: /**
         * An \@Input property that allows you to disable the `igx-buttongroup` component. By default it's false.
         * ```html
         * <igx-buttongroup [disabled]="true" [multiSelection]="multi" [values]="fontOptions"></igx-buttongroup>
         * ```
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (this._disabled !== value) {
                this._disabled = value;
                if (this.viewButtons && this.templateButtons) {
                    this.buttons.forEach(function (b) { return b.disabled = _this._disabled; });
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxButtonGroupComponent.prototype, "alignment", {
        /**
         * Returns the alignment of the `igx-buttongroup`.
         *```typescript
         *@ViewChild("MyChild")
         *public buttonG: IgxButtonGroupComponent;
         *ngAfterViewInit(){
         *    let buttonAlignment = this.buttonG.alignment;
         *}
         *```
         */
        get: /**
         * Returns the alignment of the `igx-buttongroup`.
         * ```typescript
         * \@ViewChild("MyChild")
         * public buttonG: IgxButtonGroupComponent;
         * ngAfterViewInit(){
         *    let buttonAlignment = this.buttonG.alignment;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this._isVertical ? ButtonGroupAlignment.vertical : ButtonGroupAlignment.horizontal;
        },
        /**
         * Allows you to set the button group alignment.
         * Available options are `ButtonGroupAlignment.horizontal` (default) and `ButtonGroupAlignment.vertical`.
         * ```typescript
         *public alignment = ButtonGroupAlignment.vertical;
         * //..
         * ```
         * ```html
         *<igx-buttongroup [multiSelection]="false" [values]="cities" [alignment]="alignment"></igx-buttongroup>
         * ```
         */
        set: /**
         * Allows you to set the button group alignment.
         * Available options are `ButtonGroupAlignment.horizontal` (default) and `ButtonGroupAlignment.vertical`.
         * ```typescript
         * public alignment = ButtonGroupAlignment.vertical;
         * //..
         * ```
         * ```html
         * <igx-buttongroup [multiSelection]="false" [values]="cities" [alignment]="alignment"></igx-buttongroup>
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isVertical = value === ButtonGroupAlignment.vertical;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxButtonGroupComponent.prototype, "isVertical", {
        /**
         * Returns true if the `igx-buttongroup` alignment is vertical.
         * Note that in order for the accessor to work correctly the property should be set explicitly.
         * ```html
         * <igx-buttongroup #MyChild [alignment]="alignment" [values]="alignOptions">
         * ```
         * ```typescript
         * //...
         *@ViewChild("MyChild")
         *private buttonG: IgxButtonGroupComponent;
         *ngAfterViewInit(){
         *    let orientation = this.buttonG.isVertical;
         *}
         *```
         */
        get: /**
         * Returns true if the `igx-buttongroup` alignment is vertical.
         * Note that in order for the accessor to work correctly the property should be set explicitly.
         * ```html
         * <igx-buttongroup #MyChild [alignment]="alignment" [values]="alignOptions">
         * ```
         * ```typescript
         * //...
         * \@ViewChild("MyChild")
         * private buttonG: IgxButtonGroupComponent;
         * ngAfterViewInit(){
         *    let orientation = this.buttonG.isVertical;
         * }
         * ```
         * @return {?}
         */
        function () {
            return this._isVertical;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxButtonGroupComponent.prototype, "selectedButtons", {
        /**
         * Gets the selected button/buttons.
         *```typescript
         *@ViewChild("MyChild")
         *private buttonG: IgxButtonGroupComponent;
         *ngAfterViewInit(){
         *    let selectedButton = this.buttonG.selectedButtons;
         *}
         *```
         */
        get: /**
         * Gets the selected button/buttons.
         * ```typescript
         * \@ViewChild("MyChild")
         * private buttonG: IgxButtonGroupComponent;
         * ngAfterViewInit(){
         *    let selectedButton = this.buttonG.selectedButtons;
         * }
         * ```
         * @return {?}
         */
        function () {
            var _this = this;
            return this.buttons.filter(function (b, i) {
                return _this.selectedIndexes.indexOf(i) !== -1;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects a button by its index.
     * @memberOf {@link IgxButtonGroupComponent}
     *```typescript
     *@ViewChild("MyChild")
     *private buttonG: IgxButtonGroupComponent;
     *ngAfterViewInit(){
     *    this.buttonG.selectButton(2);
     *    this.cdr.detectChanges();
     *}
     *```
     */
    /**
     * Selects a button by its index.
     * \@memberOf {\@link IgxButtonGroupComponent}
     * ```typescript
     * \@ViewChild("MyChild")
     * private buttonG: IgxButtonGroupComponent;
     * ngAfterViewInit(){
     *    this.buttonG.selectButton(2);
     *    this.cdr.detectChanges();
     * }
     * ```
     * @param {?} index
     * @return {?}
     */
    IgxButtonGroupComponent.prototype.selectButton = /**
     * Selects a button by its index.
     * \@memberOf {\@link IgxButtonGroupComponent}
     * ```typescript
     * \@ViewChild("MyChild")
     * private buttonG: IgxButtonGroupComponent;
     * ngAfterViewInit(){
     *    this.buttonG.selectButton(2);
     *    this.cdr.detectChanges();
     * }
     * ```
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        if (index >= this.buttons.length || index < 0) {
            return;
        }
        /** @type {?} */
        var button = this.buttons[index];
        /** @type {?} */
        var buttonElement = button.nativeElement;
        if (buttonElement.classList.contains('igx-button--disabled')) {
            return;
        }
        this.selectedIndexes.push(index);
        button.selected = true;
        this._renderer.setAttribute(buttonElement, 'aria-pressed', 'true');
        this._renderer.addClass(buttonElement, 'igx-button-group__item--selected');
        this.onSelect.emit({ button: button, index: index });
        /** @type {?} */
        var indexInViewButtons = this.viewButtons.toArray().indexOf(button);
        if (indexInViewButtons !== -1) {
            this.values[indexInViewButtons].selected = true;
        }
        // deselect other buttons if multiSelection is not enabled
        if (!this.multiSelection && this.selectedIndexes.length > 1) {
            this.buttons.forEach(function (b, i) {
                if (i !== index && _this.selectedIndexes.indexOf(i) !== -1) {
                    _this.deselectButton(i);
                }
            });
        }
    };
    /**
     * Deselects a button by its index.
     * @memberOf {@link IgxButtonGroupComponent}
     * ```typescript
     *@ViewChild("MyChild")
     *private buttonG: IgxButtonGroupComponent;
     *ngAfterViewInit(){
     *    this.buttonG.deselectButton(2);
     *    this.cdr.detectChanges();
     *}
     * ```
     */
    /**
     * Deselects a button by its index.
     * \@memberOf {\@link IgxButtonGroupComponent}
     * ```typescript
     * \@ViewChild("MyChild")
     * private buttonG: IgxButtonGroupComponent;
     * ngAfterViewInit(){
     *    this.buttonG.deselectButton(2);
     *    this.cdr.detectChanges();
     * }
     * ```
     * @param {?} index
     * @return {?}
     */
    IgxButtonGroupComponent.prototype.deselectButton = /**
     * Deselects a button by its index.
     * \@memberOf {\@link IgxButtonGroupComponent}
     * ```typescript
     * \@ViewChild("MyChild")
     * private buttonG: IgxButtonGroupComponent;
     * ngAfterViewInit(){
     *    this.buttonG.deselectButton(2);
     *    this.cdr.detectChanges();
     * }
     * ```
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index >= this.buttons.length || index < 0) {
            return;
        }
        /** @type {?} */
        var button = this.buttons[index];
        /** @type {?} */
        var buttonElement = button.nativeElement;
        if (buttonElement.classList.contains('igx-button--disabled')) {
            return;
        }
        this.selectedIndexes.splice(this.selectedIndexes.indexOf(index), 1);
        button.selected = false;
        this._renderer.setAttribute(buttonElement, 'aria-pressed', 'false');
        this._renderer.removeClass(buttonElement, 'igx-button-group__item--selected');
        this.onUnselect.emit({ button: button, index: index });
        /** @type {?} */
        var indexInViewButtons = this.viewButtons.toArray().indexOf(button);
        if (indexInViewButtons !== -1) {
            this.values[indexInViewButtons].selected = false;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxButtonGroupComponent.prototype.ngAfterContentInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        this.templateButtons.forEach(function (button) {
            if (!button.initialDensity) {
                button.displayDensity = _this.displayDensity;
            }
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxButtonGroupComponent.prototype.ngAfterViewInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var initButtons = function () {
            // Cancel any existing buttonClick subscriptions
            _this.buttonClickNotifier$.next();
            _this.selectedIndexes.splice(0, _this.selectedIndexes.length);
            // initial configuration
            _this.buttons.forEach(function (button, index) {
                /** @type {?} */
                var buttonElement = button.nativeElement;
                if (_this.disabled) {
                    button.disabled = true;
                }
                if (!button.disabled && button.selected) {
                    _this.selectButton(index);
                }
                button.buttonClick.pipe(takeUntil(_this.buttonClickNotifier$)).subscribe(function (ev) { return _this._clickHandler(ev, index); });
                _this._renderer.addClass(buttonElement, 'igx-button-group__item');
            });
        };
        this.viewButtons.changes.pipe(takeUntil(this.queryListNotifier$)).subscribe(function () { return initButtons(); });
        this.templateButtons.changes.pipe(takeUntil(this.queryListNotifier$)).subscribe(function () { return initButtons(); });
        initButtons();
        this._cdr.detectChanges();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxButtonGroupComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.buttonClickNotifier$.next();
        this.buttonClickNotifier$.complete();
        this.queryListNotifier$.next();
        this.queryListNotifier$.complete();
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    IgxButtonGroupComponent.prototype._clickHandler = /**
     * @hidden
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    function (event, i) {
        if (this.selectedIndexes.indexOf(i) !== -1) {
            this.deselectButton(i);
        }
        else {
            this.selectButton(i);
        }
    };
    IgxButtonGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-buttongroup',
                    template: "<div class=\"igx-button-group\" role=\"group\" [class.igx-button-group--vertical]=\"isVertical\">\n    <span *ngFor=\"let button of values; let i = 'index'\" type=\"button\" igxButton=\"flat\" [displayDensity]=\"displayDensity\" [selected]=\"button.selected\"\n        [attr.data-togglable]=\"button.togglable\" [disabled]=\"disabled || button.disabled\" [igxButtonColor]=\"button.color\"\n        [igxButtonBackground]=\"button.bgcolor\" [igxLabel]=\"button.label\" [igxRipple]=\"button.ripple\">\n        <div class=\"igx-button-group__item-content {{ itemContentCssClass }}\">\n            <igx-icon *ngIf=\"button.icon\" fontSet=\"material\">{{button.icon}}</igx-icon>\n            <span *ngIf=\"button.label\">{{button.label}}</span>\n        </div>\n    </span>\n    <ng-content></ng-content>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    IgxButtonGroupComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
    ]; };
    IgxButtonGroupComponent.propDecorators = {
        viewButtons: [{ type: ViewChildren, args: [IgxButtonDirective,] }],
        templateButtons: [{ type: ContentChildren, args: [IgxButtonDirective,] }],
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        itemContentCssClass: [{ type: Input }],
        multiSelection: [{ type: Input }],
        values: [{ type: Input }],
        disabled: [{ type: Input }],
        alignment: [{ type: Input }],
        onSelect: [{ type: Output }],
        onUnselect: [{ type: Output }]
    };
    return IgxButtonGroupComponent;
}(DisplayDensityBase));
export { IgxButtonGroupComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxButtonGroupComponent.prototype._disabled;
    /**
     * @type {?}
     * @protected
     */
    IgxButtonGroupComponent.prototype.buttonClickNotifier$;
    /**
     * @type {?}
     * @protected
     */
    IgxButtonGroupComponent.prototype.queryListNotifier$;
    /**
     * @type {?}
     * @private
     */
    IgxButtonGroupComponent.prototype.viewButtons;
    /**
     * @type {?}
     * @private
     */
    IgxButtonGroupComponent.prototype.templateButtons;
    /**
     * An \@Input property that sets the value of the `id` attribute. If not set it will be automatically generated.
     * ```html
     *  <igx-buttongroup [id]="'igx-dialog-56'" [multiSelection]="!multi" [values]="alignOptions">
     * ```
     * @type {?}
     */
    IgxButtonGroupComponent.prototype.id;
    /**
     * An \@Input property that enables selecting multiple buttons. By default, multi-selection is false.
     * ```html
     * <igx-buttongroup [multiSelection]="false" [alignment]="alignment"></igx-buttongroup>
     * ```
     * @type {?}
     */
    IgxButtonGroupComponent.prototype.multiSelection;
    /**
     * An \@Input property that allows setting the buttons in the button group.
     * ```typescript
     *  public ngOnInit() {
     *      this.cities = [
     *        new Button({
     *          label: "Sofia"
     *      }),
     *        new Button({
     *          label: "London"
     *      }),
     *        new Button({
     *          label: "New York",
     *          selected: true
     *      }),
     *        new Button({
     *          label: "Tokyo"
     *      })
     *  ];
     *  }
     *  //..
     * ```
     * ```html
     *  <igx-buttongroup [multiSelection]="false" [values]="cities"></igx-buttongroup>
     * ```
     * @type {?}
     */
    IgxButtonGroupComponent.prototype.values;
    /**
     * @hidden
     * @type {?}
     */
    IgxButtonGroupComponent.prototype.selectedIndexes;
    /**
     * An \@Ouput property that emits an event when a button is selected.
     * ```typescript
     * \@ViewChild("toast")
     * private toast: IgxToastComponent;
     * public onSelect(buttongroup){
     *    this.toast.show()
     * }
     * //...
     * ```
     * ```html
     * <igx-buttongroup #MyChild [multiSelection]="!multi" (onSelect)="onSelect($event)"></igx-buttongroup>
     * <igx-toast #toast message="You have made a selection!"></igx-toast>
     * ```
     * @type {?}
     */
    IgxButtonGroupComponent.prototype.onSelect;
    /**
     * An \@Ouput property that emits an event when a button is deselected.
     * ```typescript
     * \@ViewChild("toast")
     * private toast: IgxToastComponent;
     * public onUnselect(buttongroup){
     *    this.toast.show()
     * }
     * //...
     * ```
     * ```html
     * igx-buttongroup #MyChild [multiSelection]="multi" (onUnselect)="onUnselect($event)"></igx-buttongroup>
     * <igx-toast #toast message="You have deselected a button!"></igx-toast>
     * ```
     * @type {?}
     */
    IgxButtonGroupComponent.prototype.onUnselect;
    /**
     * @type {?}
     * @private
     */
    IgxButtonGroupComponent.prototype._isVertical;
    /**
     * @type {?}
     * @private
     */
    IgxButtonGroupComponent.prototype._itemContentCssClass;
    /**
     * @type {?}
     * @private
     */
    IgxButtonGroupComponent.prototype._cdr;
    /**
     * @type {?}
     * @private
     */
    IgxButtonGroupComponent.prototype._renderer;
    /**
     * @type {?}
     * @protected
     */
    IgxButtonGroupComponent.prototype._displayDensityOptions;
}
/**
 * @record
 */
export function IButtonGroupEventArgs() { }
if (false) {
    /** @type {?} */
    IButtonGroupEventArgs.prototype.button;
    /** @type {?} */
    IButtonGroupEventArgs.prototype.index;
}
/**
 * @hidden
 */
var IgxButtonGroupModule = /** @class */ (function () {
    function IgxButtonGroupModule() {
    }
    IgxButtonGroupModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IgxButtonGroupComponent],
                    exports: [IgxButtonGroupComponent],
                    imports: [IgxButtonModule, CommonModule, IgxRippleModule, IgxIconModule]
                },] }
    ];
    return IgxButtonGroupModule;
}());
export { IgxButtonGroupModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uR3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25Hcm91cC9idXR0b25Hcm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUdILFNBQVMsRUFDVCxlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFFBQVEsRUFDUixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFFZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUEwQyxNQUFNLGlCQUFpQixDQUFDOzs7SUFFL0UsYUFBVSxFQUFFLFdBQVE7Ozs7OztJQUNuRCxPQUFPLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JmO0lBSzZDLG1EQUFrQjtJQXFNM0QsaUNBQW9CLElBQXVCLEVBQVUsU0FBb0IsRUFDbEIsc0JBQThDO1FBRHJHLFlBRVEsa0JBQU0sc0JBQXNCLENBQUMsU0FDcEM7UUFIbUIsVUFBSSxHQUFKLElBQUksQ0FBbUI7UUFBVSxlQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ2xCLDRCQUFzQixHQUF0QixzQkFBc0Is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QUMsdUJBQXVCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQztpQkFDM0U7O0lBR0QsMkJBQUM7Q0FBQSxBQVBELElBT0M7U0FEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQ29tcG9uZW50LFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgSW5qZWN0LFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE91dHB1dCxcbiAgICBPcHRpb25hbCxcbiAgICBRdWVyeUxpc3QsXG4gICAgUmVuZGVyZXIyLFxuICAgIFZpZXdDaGlsZHJlbixcbiAgICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJZ3hCdXR0b25EaXJlY3RpdmUsIElneEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYnV0dG9uL2J1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4UmlwcGxlTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9yaXBwbGUvcmlwcGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pbmRleCc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEaXNwbGF5RGVuc2l0eUJhc2UsIERpc3BsYXlEZW5zaXR5VG9rZW4sIElEaXNwbGF5RGVuc2l0eU9wdGlvbnMsIERpc3BsYXlEZW5zaXR5IH0gZnJvbSAnLi4vY29yZS9kZW5zaXR5JztcblxuZXhwb3J0IGVudW0gQnV0dG9uR3JvdXBBbGlnbm1lbnQgeyBob3Jpem9udGFsLCB2ZXJ0aWNhbCB9XG5sZXQgTkVYVF9JRCA9IDA7XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgQnV0dG9uIEdyb3VwKiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL2J1dHRvbmdyb3VwLmh0bWwpXG4gKlxuICogVGhlIElnbml0ZSBVSSBCdXR0b24gR3JvdXAgZGlzcGxheXMgYSBncm91cCBvZiBidXR0b25zIGVpdGhlciB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseS4gIFRoZSBncm91cCBzdXBwb3J0c1xuICogc2luZ2xlLCBtdWx0aXBsZSBhbmQgdG9nZ2xlIHNlbGVjdGlvbi5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlneC1idXR0b25ncm91cCBtdWx0aVNlbGVjdGlvbj1cInRydWVcIiBbdmFsdWVzXT1cImZvbnRPcHRpb25zXCI+XG4gKiA8L2lneC1idXR0b25ncm91cD5cbiAqIGBgYFxuICogVGhlIGBmb250T3B0aW9uc2AgdmFsdWUgc2hvd24gYWJvdmUgaXMgZGVmaW5lZCBhczpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIHRoaXMuZm9udE9wdGlvbnMgPSBbXG4gKiAgIHsgaWNvbjogJ2Zvcm1hdF9ib2xkJywgc2VsZWN0ZWQ6IGZhbHNlIH0sXG4gKiAgIHsgaWNvbjogJ2Zvcm1hdF9pdGFsaWMnLCBzZWxlY3RlZDogZmFsc2UgfSxcbiAqICAgeyBpY29uOiAnZm9ybWF0X3VuZGVybGluZWQnLCBzZWxlY3RlZDogZmFsc2UgfV07XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtYnV0dG9uZ3JvdXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnYnV0dG9uZ3JvdXAtY29udGVudC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hCdXR0b25Hcm91cENvbXBvbmVudCBleHRlbmRzIERpc3BsYXlEZW5zaXR5QmFzZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBidXR0b25DbGlja05vdGlmaWVyJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHJvdGVjdGVkIHF1ZXJ5TGlzdE5vdGlmaWVyJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgICBAVmlld0NoaWxkcmVuKElneEJ1dHRvbkRpcmVjdGl2ZSkgcHJpdmF0ZSB2aWV3QnV0dG9uczogUXVlcnlMaXN0PElneEJ1dHRvbkRpcmVjdGl2ZT47XG4gICAgQENvbnRlbnRDaGlsZHJlbihJZ3hCdXR0b25EaXJlY3RpdmUpIHByaXZhdGUgdGVtcGxhdGVCdXR0b25zOiBRdWVyeUxpc3Q8SWd4QnV0dG9uRGlyZWN0aXZlPjtcblxuICAgIC8qKlxuICAgICAqIEEgY29sbGVjdGlvbiBjb250YWluaW5nIGFsbCBidXR0b25zIGluc2lkZSB0aGUgYnV0dG9uIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYnV0dG9ucygpOiBJZ3hCdXR0b25EaXJlY3RpdmVbXSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy52aWV3QnV0dG9ucy50b0FycmF5KCksIC4uLnRoaXMudGVtcGxhdGVCdXR0b25zLnRvQXJyYXkoKV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBpZGAgYXR0cmlidXRlLiBJZiBub3Qgc2V0IGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQuXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWJ1dHRvbmdyb3VwIFtpZF09XCInaWd4LWRpYWxvZy01NidcIiBbbXVsdGlTZWxlY3Rpb25dPVwiIW11bHRpXCIgW3ZhbHVlc109XCJhbGlnbk9wdGlvbnNcIj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC1idXR0b25ncm91cC0ke05FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICogQWxsb3dzIHlvdSB0byBzZXQgYSBzdHlsZSB1c2luZyB0aGUgYGl0ZW1Db250ZW50Q3NzQ2xhc3NgIGlucHV0LlxuICAgICAqIFRoZSB2YWx1ZSBzaG91bGQgYmUgdGhlIENTUyBjbGFzcyBuYW1lIHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBidXR0b24gZ3JvdXAuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpwdWJsaWMgc3R5bGUxID0gXCJzdHlsZUNsYXNzXCI7XG4gICAgICogLy8uLlxuICAgICAqYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqPGlneC1idXR0b25ncm91cCBbaXRlbUNvbnRlbnRDc3NDbGFzc109XCJzdHlsZTFcIiBbbXVsdGlTZWxlY3Rpb25dPVwiIW11bHRpXCIgW3ZhbHVlc109XCJhbGlnbk9wdGlvbnNcIj5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHNldCBpdGVtQ29udGVudENzc0NsYXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5faXRlbUNvbnRlbnRDc3NDbGFzcyA9IHZhbHVlIHx8IHRoaXMuX2l0ZW1Db250ZW50Q3NzQ2xhc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgQ1NTIGNsYXNzIG9mIHRoZSBpdGVtIGNvbnRlbnQgb2YgdGhlIGBJZ3hCdXR0b25Hcm91cGAuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlDaGlsZFwiKVxuICAgICAqcHVibGljIGJ1dHRvbkc6IElneEJ1dHRvbkdyb3VwQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICBsZXQgYnV0dG9uU2VsZWN0ID0gdGhpcy5idXR0b25HLml0ZW1Db250ZW50Q3NzQ2xhc3M7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBnZXQgaXRlbUNvbnRlbnRDc3NDbGFzcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbUNvbnRlbnRDc3NDbGFzcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBlbmFibGVzIHNlbGVjdGluZyBtdWx0aXBsZSBidXR0b25zLiBCeSBkZWZhdWx0LCBtdWx0aS1zZWxlY3Rpb24gaXMgZmFsc2UuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtYnV0dG9uZ3JvdXAgW211bHRpU2VsZWN0aW9uXT1cImZhbHNlXCIgW2FsaWdubWVudF09XCJhbGlnbm1lbnRcIj48L2lneC1idXR0b25ncm91cD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgbXVsdGlTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBhbGxvd3Mgc2V0dGluZyB0aGUgYnV0dG9ucyBpbiB0aGUgYnV0dG9uIGdyb3VwLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAqICAgICAgdGhpcy5jaXRpZXMgPSBbXG4gICAgICogICAgICAgIG5ldyBCdXR0b24oe1xuICAgICAqICAgICAgICAgIGxhYmVsOiBcIlNvZmlhXCJcbiAgICAgKiAgICAgIH0pLFxuICAgICAqICAgICAgICBuZXcgQnV0dG9uKHtcbiAgICAgKiAgICAgICAgICBsYWJlbDogXCJMb25kb25cIlxuICAgICAqICAgICAgfSksXG4gICAgICogICAgICAgIG5ldyBCdXR0b24oe1xuICAgICAqICAgICAgICAgIGxhYmVsOiBcIk5ldyBZb3JrXCIsXG4gICAgICogICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICAgKiAgICAgIH0pLFxuICAgICAqICAgICAgICBuZXcgQnV0dG9uKHtcbiAgICAgKiAgICAgICAgICBsYWJlbDogXCJUb2t5b1wiXG4gICAgICogICAgICB9KVxuICAgICAqICBdO1xuICAgICAqICB9XG4gICAgICogIC8vLi5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogIDxpZ3gtYnV0dG9uZ3JvdXAgW211bHRpU2VsZWN0aW9uXT1cImZhbHNlXCIgW3ZhbHVlc109XCJjaXRpZXNcIj48L2lneC1idXR0b25ncm91cD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgdmFsdWVzOiBhbnk7XG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgYWxsb3dzIHlvdSB0byBkaXNhYmxlIHRoZSBgaWd4LWJ1dHRvbmdyb3VwYCBjb21wb25lbnQuIEJ5IGRlZmF1bHQgaXQncyBmYWxzZS5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1idXR0b25ncm91cCBbZGlzYWJsZWRdPVwidHJ1ZVwiIFttdWx0aVNlbGVjdGlvbl09XCJtdWx0aVwiIFt2YWx1ZXNdPVwiZm9udE9wdGlvbnNcIj48L2lneC1idXR0b25ncm91cD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9XG4gICAgcHVibGljIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5fZGlzYWJsZWQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy52aWV3QnV0dG9ucyAmJiB0aGlzLnRlbXBsYXRlQnV0dG9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChiKSA9PiBiLmRpc2FibGVkID0gdGhpcy5fZGlzYWJsZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4ZXM6IG51bWJlcltdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgeW91IHRvIHNldCB0aGUgYnV0dG9uIGdyb3VwIGFsaWdubWVudC5cbiAgICAgKiBBdmFpbGFibGUgb3B0aW9ucyBhcmUgYEJ1dHRvbkdyb3VwQWxpZ25tZW50Lmhvcml6b250YWxgIChkZWZhdWx0KSBhbmQgYEJ1dHRvbkdyb3VwQWxpZ25tZW50LnZlcnRpY2FsYC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICpwdWJsaWMgYWxpZ25tZW50ID0gQnV0dG9uR3JvdXBBbGlnbm1lbnQudmVydGljYWw7XG4gICAgICogLy8uLlxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtYnV0dG9uZ3JvdXAgW211bHRpU2VsZWN0aW9uXT1cImZhbHNlXCIgW3ZhbHVlc109XCJjaXRpZXNcIiBbYWxpZ25tZW50XT1cImFsaWdubWVudFwiPjwvaWd4LWJ1dHRvbmdyb3VwPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHNldCBhbGlnbm1lbnQodmFsdWU6IEJ1dHRvbkdyb3VwQWxpZ25tZW50KSB7XG4gICAgICAgIHRoaXMuX2lzVmVydGljYWwgPSB2YWx1ZSA9PT0gQnV0dG9uR3JvdXBBbGlnbm1lbnQudmVydGljYWw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFsaWdubWVudCBvZiB0aGUgYGlneC1idXR0b25ncm91cGAuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlDaGlsZFwiKVxuICAgICAqcHVibGljIGJ1dHRvbkc6IElneEJ1dHRvbkdyb3VwQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgbGV0IGJ1dHRvbkFsaWdubWVudCA9IHRoaXMuYnV0dG9uRy5hbGlnbm1lbnQ7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBnZXQgYWxpZ25tZW50KCk6IEJ1dHRvbkdyb3VwQWxpZ25tZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmVydGljYWwgPyBCdXR0b25Hcm91cEFsaWdubWVudC52ZXJ0aWNhbCA6IEJ1dHRvbkdyb3VwQWxpZ25tZW50Lmhvcml6b250YWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gQE91cHV0IHByb3BlcnR5IHRoYXQgZW1pdHMgYW4gZXZlbnQgd2hlbiBhIGJ1dHRvbiBpcyBzZWxlY3RlZC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJ0b2FzdFwiKVxuICAgICAqcHJpdmF0ZSB0b2FzdDogSWd4VG9hc3RDb21wb25lbnQ7XG4gICAgICpwdWJsaWMgb25TZWxlY3QoYnV0dG9uZ3JvdXApe1xuICAgICAqICAgIHRoaXMudG9hc3Quc2hvdygpXG4gICAgICp9XG4gICAgICogLy8uLi5cbiAgICAgKmBgYFxuICAgICAqYGBgaHRtbFxuICAgICAqIDxpZ3gtYnV0dG9uZ3JvdXAgI015Q2hpbGQgW211bHRpU2VsZWN0aW9uXT1cIiFtdWx0aVwiIChvblNlbGVjdCk9XCJvblNlbGVjdCgkZXZlbnQpXCI+PC9pZ3gtYnV0dG9uZ3JvdXA+XG4gICAgICo8aWd4LXRvYXN0ICN0b2FzdCBtZXNzYWdlPVwiWW91IGhhdmUgbWFkZSBhIHNlbGVjdGlvbiFcIj48L2lneC10b2FzdD5cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPElCdXR0b25Hcm91cEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBPdXB1dCBwcm9wZXJ0eSB0aGF0IGVtaXRzIGFuIGV2ZW50IHdoZW4gYSBidXR0b24gaXMgZGVzZWxlY3RlZC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJ0b2FzdFwiKVxuICAgICAqcHJpdmF0ZSB0b2FzdDogSWd4VG9hc3RDb21wb25lbnQ7XG4gICAgICpwdWJsaWMgb25VbnNlbGVjdChidXR0b25ncm91cCl7XG4gICAgICogICAgdGhpcy50b2FzdC5zaG93KClcbiAgICAgKn1cbiAgICAgKiAvLy4uLlxuICAgICAqYGBgXG4gICAgICpgYGBodG1sXG4gICAgICogaWd4LWJ1dHRvbmdyb3VwICNNeUNoaWxkIFttdWx0aVNlbGVjdGlvbl09XCJtdWx0aVwiIChvblVuc2VsZWN0KT1cIm9uVW5zZWxlY3QoJGV2ZW50KVwiPjwvaWd4LWJ1dHRvbmdyb3VwPlxuICAgICAqPGlneC10b2FzdCAjdG9hc3QgbWVzc2FnZT1cIllvdSBoYXZlIGRlc2VsZWN0ZWQgYSBidXR0b24hXCI+PC9pZ3gtdG9hc3Q+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uVW5zZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPElCdXR0b25Hcm91cEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYGlneC1idXR0b25ncm91cGAgYWxpZ25tZW50IGlzIHZlcnRpY2FsLlxuICAgICAqIE5vdGUgdGhhdCBpbiBvcmRlciBmb3IgdGhlIGFjY2Vzc29yIHRvIHdvcmsgY29ycmVjdGx5IHRoZSBwcm9wZXJ0eSBzaG91bGQgYmUgc2V0IGV4cGxpY2l0bHkuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtYnV0dG9uZ3JvdXAgI015Q2hpbGQgW2FsaWdubWVudF09XCJhbGlnbm1lbnRcIiBbdmFsdWVzXT1cImFsaWduT3B0aW9uc1wiPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLy4uLlxuICAgICAqQFZpZXdDaGlsZChcIk15Q2hpbGRcIilcbiAgICAgKnByaXZhdGUgYnV0dG9uRzogSWd4QnV0dG9uR3JvdXBDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgb3JpZW50YXRpb24gPSB0aGlzLmJ1dHRvbkcuaXNWZXJ0aWNhbDtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNWZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmVydGljYWw7XG4gICAgfVxuICAgIHByaXZhdGUgX2lzVmVydGljYWw6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfaXRlbUNvbnRlbnRDc3NDbGFzczogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChEaXNwbGF5RGVuc2l0eVRva2VuKSBwcm90ZWN0ZWQgX2Rpc3BsYXlEZW5zaXR5T3B0aW9uczogSURpc3BsYXlEZW5zaXR5T3B0aW9ucykge1xuICAgICAgICAgICAgc3VwZXIoX2Rpc3BsYXlEZW5zaXR5T3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgYnV0dG9uL2J1dHRvbnMuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlDaGlsZFwiKVxuICAgICAqcHJpdmF0ZSBidXR0b25HOiBJZ3hCdXR0b25Hcm91cENvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIGxldCBzZWxlY3RlZEJ1dHRvbiA9IHRoaXMuYnV0dG9uRy5zZWxlY3RlZEJ1dHRvbnM7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRCdXR0b25zKCk6IElneEJ1dHRvbkRpcmVjdGl2ZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnV0dG9ucy5maWx0ZXIoKGIsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSW5kZXhlcy5pbmRleE9mKGkpICE9PSAtMTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIGEgYnV0dG9uIGJ5IGl0cyBpbmRleC5cbiAgICAgKiBAbWVtYmVyT2Yge0BsaW5rIElneEJ1dHRvbkdyb3VwQ29tcG9uZW50fVxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15Q2hpbGRcIilcbiAgICAgKnByaXZhdGUgYnV0dG9uRzogSWd4QnV0dG9uR3JvdXBDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICB0aGlzLmJ1dHRvbkcuc2VsZWN0QnV0dG9uKDIpO1xuICAgICAqICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RCdXR0b24oaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy5idXR0b25zLmxlbmd0aCB8fCBpbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnV0dG9uc1tpbmRleF07XG4gICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBidXR0b24ubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBpZiAoYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lneC1idXR0b24tLWRpc2FibGVkJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleGVzLnB1c2goaW5kZXgpO1xuICAgICAgICBidXR0b24uc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShidXR0b25FbGVtZW50LCAnYXJpYS1wcmVzc2VkJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoYnV0dG9uRWxlbWVudCwgJ2lneC1idXR0b24tZ3JvdXBfX2l0ZW0tLXNlbGVjdGVkJyk7XG5cbiAgICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHsgYnV0dG9uOiBidXR0b24sIGluZGV4OiBpbmRleCB9KTtcblxuICAgICAgICBjb25zdCBpbmRleEluVmlld0J1dHRvbnMgPSB0aGlzLnZpZXdCdXR0b25zLnRvQXJyYXkoKS5pbmRleE9mKGJ1dHRvbik7XG4gICAgICAgIGlmIChpbmRleEluVmlld0J1dHRvbnMgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpbmRleEluVmlld0J1dHRvbnNdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlc2VsZWN0IG90aGVyIGJ1dHRvbnMgaWYgbXVsdGlTZWxlY3Rpb24gaXMgbm90IGVuYWJsZWRcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpU2VsZWN0aW9uICYmIHRoaXMuc2VsZWN0ZWRJbmRleGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChiLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT09IGluZGV4ICYmIHRoaXMuc2VsZWN0ZWRJbmRleGVzLmluZGV4T2YoaSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RCdXR0b24oaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXNlbGVjdHMgYSBidXR0b24gYnkgaXRzIGluZGV4LlxuICAgICAqIEBtZW1iZXJPZiB7QGxpbmsgSWd4QnV0dG9uR3JvdXBDb21wb25lbnR9XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15Q2hpbGRcIilcbiAgICAgKnByaXZhdGUgYnV0dG9uRzogSWd4QnV0dG9uR3JvdXBDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICB0aGlzLmJ1dHRvbkcuZGVzZWxlY3RCdXR0b24oMik7XG4gICAgICogICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAqfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNlbGVjdEJ1dHRvbihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChpbmRleCA+PSB0aGlzLmJ1dHRvbnMubGVuZ3RoIHx8IGluZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5idXR0b25zW2luZGV4XTtcbiAgICAgICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGJ1dHRvbi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIGlmIChidXR0b25FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaWd4LWJ1dHRvbi0tZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ZXMuc3BsaWNlKHRoaXMuc2VsZWN0ZWRJbmRleGVzLmluZGV4T2YoaW5kZXgpLCAxKTtcbiAgICAgICAgYnV0dG9uLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKGJ1dHRvbkVsZW1lbnQsICdhcmlhLXByZXNzZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoYnV0dG9uRWxlbWVudCwgJ2lneC1idXR0b24tZ3JvdXBfX2l0ZW0tLXNlbGVjdGVkJyk7XG5cbiAgICAgICAgdGhpcy5vblVuc2VsZWN0LmVtaXQoeyBidXR0b246IGJ1dHRvbiwgaW5kZXg6IGluZGV4IH0pO1xuXG4gICAgICAgIGNvbnN0IGluZGV4SW5WaWV3QnV0dG9ucyA9IHRoaXMudmlld0J1dHRvbnMudG9BcnJheSgpLmluZGV4T2YoYnV0dG9uKTtcbiAgICAgICAgaWYgKGluZGV4SW5WaWV3QnV0dG9ucyAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2luZGV4SW5WaWV3QnV0dG9uc10uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlQnV0dG9ucy5mb3JFYWNoKCAoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWJ1dHRvbi5pbml0aWFsRGVuc2l0eSkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5kaXNwbGF5RGVuc2l0eSA9IHRoaXMuZGlzcGxheURlbnNpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBjb25zdCBpbml0QnV0dG9ucyA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIENhbmNlbCBhbnkgZXhpc3RpbmcgYnV0dG9uQ2xpY2sgc3Vic2NyaXB0aW9uc1xuICAgICAgICAgICAgdGhpcy5idXR0b25DbGlja05vdGlmaWVyJC5uZXh0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleGVzLnNwbGljZSgwLCB0aGlzLnNlbGVjdGVkSW5kZXhlcy5sZW5ndGgpO1xuXG4gICAgICAgICAgICAvLyBpbml0aWFsIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGJ1dHRvbi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWJ1dHRvbi5kaXNhYmxlZCAmJiBidXR0b24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCdXR0b24oaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJ1dHRvbi5idXR0b25DbGljay5waXBlKHRha2VVbnRpbCh0aGlzLmJ1dHRvbkNsaWNrTm90aWZpZXIkKSkuc3Vic2NyaWJlKChldikgPT4gdGhpcy5fY2xpY2tIYW5kbGVyKGV2LCBpbmRleCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGJ1dHRvbkVsZW1lbnQsICdpZ3gtYnV0dG9uLWdyb3VwX19pdGVtJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZpZXdCdXR0b25zLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5xdWVyeUxpc3ROb3RpZmllciQpKS5zdWJzY3JpYmUoKCkgPT4gaW5pdEJ1dHRvbnMoKSk7XG4gICAgICAgIHRoaXMudGVtcGxhdGVCdXR0b25zLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5xdWVyeUxpc3ROb3RpZmllciQpKS5zdWJzY3JpYmUoKCkgPT4gaW5pdEJ1dHRvbnMoKSk7XG4gICAgICAgIGluaXRCdXR0b25zKCk7XG5cbiAgICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJ1dHRvbkNsaWNrTm90aWZpZXIkLm5leHQoKTtcbiAgICAgICAgdGhpcy5idXR0b25DbGlja05vdGlmaWVyJC5jb21wbGV0ZSgpO1xuXG4gICAgICAgIHRoaXMucXVlcnlMaXN0Tm90aWZpZXIkLm5leHQoKTtcbiAgICAgICAgdGhpcy5xdWVyeUxpc3ROb3RpZmllciQuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgX2NsaWNrSGFuZGxlcihldmVudCwgaSkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ZXMuaW5kZXhPZihpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RCdXR0b24oaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJ1dHRvbihpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQnV0dG9uR3JvdXBFdmVudEFyZ3Mge1xuICAgIGJ1dHRvbjogSWd4QnV0dG9uRGlyZWN0aXZlO1xuICAgIGluZGV4OiBudW1iZXI7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0lneEJ1dHRvbkdyb3VwQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbSWd4QnV0dG9uR3JvdXBDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtJZ3hCdXR0b25Nb2R1bGUsIENvbW1vbk1vZHVsZSwgSWd4UmlwcGxlTW9kdWxlLCBJZ3hJY29uTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIElneEJ1dHRvbkdyb3VwTW9kdWxlIHtcbn1cbiJdfQ==