/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { Component, ContentChildren, ChangeDetectorRef, EventEmitter, HostBinding, Inject, Input, NgModule, Output, Optional, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { IgxButtonDirective, IgxButtonModule } from '../directives/button/button.directive';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { IgxIconModule } from '../icon/index';
import { takeUntil } from 'rxjs/operators';
import { DisplayDensityBase, DisplayDensityToken } from '../core/density';
/** @enum {number} */
const ButtonGroupAlignment = {
    horizontal: 0, vertical: 1,
};
export { ButtonGroupAlignment };
ButtonGroupAlignment[ButtonGroupAlignment.horizontal] = 'horizontal';
ButtonGroupAlignment[ButtonGroupAlignment.vertical] = 'vertical';
/** @type {?} */
let NEXT_ID = 0;
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
export class IgxButtonGroupComponent extends DisplayDensityBase {
    /**
     * @param {?} _cdr
     * @param {?} _renderer
     * @param {?} _displayDensityOptions
     */
    constructor(_cdr, _renderer, _displayDensityOptions) {
        super(_displayDensityOptions);
        this._cdr = _cdr;
        this._renderer = _renderer;
        this._displayDensityOptions = _displayDensityOptions;
        this._disabled = false;
        this.buttonClickNotifier$ = new Subject();
        this.queryListNotifier$ = new Subject();
        /**
         * An \@Input property that sets the value of the `id` attribute. If not set it will be automatically generated.
         * ```html
         *  <igx-buttongroup [id]="'igx-dialog-56'" [multiSelection]="!multi" [values]="alignOptions">
         * ```
         */
        this.id = `igx-buttongroup-${NEXT_ID++}`;
        /**
         * An \@Input property that enables selecting multiple buttons. By default, multi-selection is false.
         * ```html
         * <igx-buttongroup [multiSelection]="false" [alignment]="alignment"></igx-buttongroup>
         * ```
         */
        this.multiSelection = false;
        /**
         * @hidden
         */
        this.selectedIndexes = [];
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
        this.onSelect = new EventEmitter();
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
        this.onUnselect = new EventEmitter();
    }
    /**
     * A collection containing all buttons inside the button group.
     * @return {?}
     */
    get buttons() {
        return [...this.viewButtons.toArray(), ...this.templateButtons.toArray()];
    }
    /**
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
    set itemContentCssClass(value) {
        this._itemContentCssClass = value || this._itemContentCssClass;
    }
    /**
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
    get itemContentCssClass() {
        return this._itemContentCssClass;
    }
    /**
     * An \@Input property that allows you to disable the `igx-buttongroup` component. By default it's false.
     * ```html
     * <igx-buttongroup [disabled]="true" [multiSelection]="multi" [values]="fontOptions"></igx-buttongroup>
     * ```
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        if (this._disabled !== value) {
            this._disabled = value;
            if (this.viewButtons && this.templateButtons) {
                this.buttons.forEach((b) => b.disabled = this._disabled);
            }
        }
    }
    /**
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
    set alignment(value) {
        this._isVertical = value === ButtonGroupAlignment.vertical;
    }
    /**
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
    get alignment() {
        return this._isVertical ? ButtonGroupAlignment.vertical : ButtonGroupAlignment.horizontal;
    }
    /**
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
    get isVertical() {
        return this._isVertical;
    }
    /**
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
    get selectedButtons() {
        return this.buttons.filter((b, i) => {
            return this.selectedIndexes.indexOf(i) !== -1;
        });
    }
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
    selectButton(index) {
        if (index >= this.buttons.length || index < 0) {
            return;
        }
        /** @type {?} */
        const button = this.buttons[index];
        /** @type {?} */
        const buttonElement = button.nativeElement;
        if (buttonElement.classList.contains('igx-button--disabled')) {
            return;
        }
        this.selectedIndexes.push(index);
        button.selected = true;
        this._renderer.setAttribute(buttonElement, 'aria-pressed', 'true');
        this._renderer.addClass(buttonElement, 'igx-button-group__item--selected');
        this.onSelect.emit({ button: button, index: index });
        /** @type {?} */
        const indexInViewButtons = this.viewButtons.toArray().indexOf(button);
        if (indexInViewButtons !== -1) {
            this.values[indexInViewButtons].selected = true;
        }
        // deselect other buttons if multiSelection is not enabled
        if (!this.multiSelection && this.selectedIndexes.length > 1) {
            this.buttons.forEach((b, i) => {
                if (i !== index && this.selectedIndexes.indexOf(i) !== -1) {
                    this.deselectButton(i);
                }
            });
        }
    }
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
    deselectButton(index) {
        if (index >= this.buttons.length || index < 0) {
            return;
        }
        /** @type {?} */
        const button = this.buttons[index];
        /** @type {?} */
        const buttonElement = button.nativeElement;
        if (buttonElement.classList.contains('igx-button--disabled')) {
            return;
        }
        this.selectedIndexes.splice(this.selectedIndexes.indexOf(index), 1);
        button.selected = false;
        this._renderer.setAttribute(buttonElement, 'aria-pressed', 'false');
        this._renderer.removeClass(buttonElement, 'igx-button-group__item--selected');
        this.onUnselect.emit({ button: button, index: index });
        /** @type {?} */
        const indexInViewButtons = this.viewButtons.toArray().indexOf(button);
        if (indexInViewButtons !== -1) {
            this.values[indexInViewButtons].selected = false;
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterContentInit() {
        this.templateButtons.forEach((button) => {
            if (!button.initialDensity) {
                button.displayDensity = this.displayDensity;
            }
        });
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const initButtons = () => {
            // Cancel any existing buttonClick subscriptions
            this.buttonClickNotifier$.next();
            this.selectedIndexes.splice(0, this.selectedIndexes.length);
            // initial configuration
            this.buttons.forEach((button, index) => {
                /** @type {?} */
                const buttonElement = button.nativeElement;
                if (this.disabled) {
                    button.disabled = true;
                }
                if (!button.disabled && button.selected) {
                    this.selectButton(index);
                }
                button.buttonClick.pipe(takeUntil(this.buttonClickNotifier$)).subscribe((ev) => this._clickHandler(ev, index));
                this._renderer.addClass(buttonElement, 'igx-button-group__item');
            });
        };
        this.viewButtons.changes.pipe(takeUntil(this.queryListNotifier$)).subscribe(() => initButtons());
        this.templateButtons.changes.pipe(takeUntil(this.queryListNotifier$)).subscribe(() => initButtons());
        initButtons();
        this._cdr.detectChanges();
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this.buttonClickNotifier$.next();
        this.buttonClickNotifier$.complete();
        this.queryListNotifier$.next();
        this.queryListNotifier$.complete();
    }
    /**
     * @hidden
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    _clickHandler(event, i) {
        if (this.selectedIndexes.indexOf(i) !== -1) {
            this.deselectButton(i);
        }
        else {
            this.selectButton(i);
        }
    }
}
IgxButtonGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-buttongroup',
                template: "<div class=\"igx-button-group\" role=\"group\" [class.igx-button-group--vertical]=\"isVertical\">\n    <span *ngFor=\"let button of values; let i = 'index'\" type=\"button\" igxButton=\"flat\" [displayDensity]=\"displayDensity\" [selected]=\"button.selected\"\n        [attr.data-togglable]=\"button.togglable\" [disabled]=\"disabled || button.disabled\" [igxButtonColor]=\"button.color\"\n        [igxButtonBackground]=\"button.bgcolor\" [igxLabel]=\"button.label\" [igxRipple]=\"button.ripple\">\n        <div class=\"igx-button-group__item-content {{ itemContentCssClass }}\">\n            <igx-icon *ngIf=\"button.icon\" fontSet=\"material\">{{button.icon}}</igx-icon>\n            <span *ngIf=\"button.label\">{{button.label}}</span>\n        </div>\n    </span>\n    <ng-content></ng-content>\n</div>\n"
            }] }
];
/** @nocollapse */
IgxButtonGroupComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] }
];
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
export class IgxButtonGroupModule {
}
IgxButtonGroupModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxButtonGroupComponent],
                exports: [IgxButtonGroupComponent],
                imports: [IgxButtonModule, CommonModule, IgxRippleModule, IgxIconModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uR3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25Hcm91cC9idXR0b25Hcm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBR0gsU0FBUyxFQUNULGVBQWUsRUFDZixpQkFBaUIsRUFDakIsWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUVmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQTBDLE1BQU0saUJBQWlCLENBQUM7OztJQUUvRSxhQUFVLEVBQUUsV0FBUTs7Ozs7O0lBQ25ELE9BQU8sR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQmYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGtCQUFrQjs7Ozs7O0lBcU0zRCxZQUFvQixJQUF1QixFQUFVLFNBQW9CLEVBQ2xCLHNCQUE4QztRQUM3RixLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUZsQixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDbEIsMkJB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LE1BQU07Ozs7Ozs7SUE1S1AsNENBQTBCOzs7OztJQUMxQix1REFBd0Q7Ozs7O0lBQ3hELHFEQUFzRDs7Ozs7SUFFdEQsOENBQXFGOzs7OztJQUNyRixrREFBNEY7Ozs7Ozs7O0lBZTVGLHFDQUUyQzs7Ozs7Ozs7SUFxQzNDLGlEQUF1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJCdkMseUNBQTRCOzs7OztJQXdCNUIsa0RBQXNDOzs7Ozs7Ozs7Ozs7Ozs7OztJQTZDdEMsMkNBQXNFOzs7Ozs7Ozs7Ozs7Ozs7OztJQWlCdEUsNkNBQXdFOzs7OztJQW9CeEUsOENBQTZCOzs7OztJQUM3Qix1REFBcUM7Ozs7O0lBRXpCLHVDQUErQjs7Ozs7SUFBRSw0Q0FBNEI7Ozs7O0lBQ3JFLHlEQUFpRzs7Ozs7QUE4S3pHLDJDQUdDOzs7SUFGRyx1Q0FBMkI7O0lBQzNCLHNDQUFjOzs7OztBQVlsQixNQUFNLE9BQU8sb0JBQW9COzs7WUFOaEMsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxDQUFDO2FBQzNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIEluamVjdCxcbiAgICBJbnB1dCxcbiAgICBOZ01vZHVsZSxcbiAgICBPdXRwdXQsXG4gICAgT3B0aW9uYWwsXG4gICAgUXVlcnlMaXN0LFxuICAgIFJlbmRlcmVyMixcbiAgICBWaWV3Q2hpbGRyZW4sXG4gICAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSWd4QnV0dG9uRGlyZWN0aXZlLCBJZ3hCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2J1dHRvbi9idXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IElneFJpcHBsZU1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvcmlwcGxlL3JpcHBsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGlzcGxheURlbnNpdHlCYXNlLCBEaXNwbGF5RGVuc2l0eVRva2VuLCBJRGlzcGxheURlbnNpdHlPcHRpb25zLCBEaXNwbGF5RGVuc2l0eSB9IGZyb20gJy4uL2NvcmUvZGVuc2l0eSc7XG5cbmV4cG9ydCBlbnVtIEJ1dHRvbkdyb3VwQWxpZ25tZW50IHsgaG9yaXpvbnRhbCwgdmVydGljYWwgfVxubGV0IE5FWFRfSUQgPSAwO1xuXG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIEJ1dHRvbiBHcm91cCoqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9idXR0b25ncm91cC5odG1sKVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgQnV0dG9uIEdyb3VwIGRpc3BsYXlzIGEgZ3JvdXAgb2YgYnV0dG9ucyBlaXRoZXIgdmVydGljYWxseSBvciBob3Jpem9udGFsbHkuICBUaGUgZ3JvdXAgc3VwcG9ydHNcbiAqIHNpbmdsZSwgbXVsdGlwbGUgYW5kIHRvZ2dsZSBzZWxlY3Rpb24uXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYGh0bWxcbiAqIDxpZ3gtYnV0dG9uZ3JvdXAgbXVsdGlTZWxlY3Rpb249XCJ0cnVlXCIgW3ZhbHVlc109XCJmb250T3B0aW9uc1wiPlxuICogPC9pZ3gtYnV0dG9uZ3JvdXA+XG4gKiBgYGBcbiAqIFRoZSBgZm9udE9wdGlvbnNgIHZhbHVlIHNob3duIGFib3ZlIGlzIGRlZmluZWQgYXM6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB0aGlzLmZvbnRPcHRpb25zID0gW1xuICogICB7IGljb246ICdmb3JtYXRfYm9sZCcsIHNlbGVjdGVkOiBmYWxzZSB9LFxuICogICB7IGljb246ICdmb3JtYXRfaXRhbGljJywgc2VsZWN0ZWQ6IGZhbHNlIH0sXG4gKiAgIHsgaWNvbjogJ2Zvcm1hdF91bmRlcmxpbmVkJywgc2VsZWN0ZWQ6IGZhbHNlIH1dO1xuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWJ1dHRvbmdyb3VwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2J1dHRvbmdyb3VwLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgSWd4QnV0dG9uR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBEaXNwbGF5RGVuc2l0eUJhc2UgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgYnV0dG9uQ2xpY2tOb3RpZmllciQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIHByb3RlY3RlZCBxdWVyeUxpc3ROb3RpZmllciQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgQFZpZXdDaGlsZHJlbihJZ3hCdXR0b25EaXJlY3RpdmUpIHByaXZhdGUgdmlld0J1dHRvbnM6IFF1ZXJ5TGlzdDxJZ3hCdXR0b25EaXJlY3RpdmU+O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oSWd4QnV0dG9uRGlyZWN0aXZlKSBwcml2YXRlIHRlbXBsYXRlQnV0dG9uczogUXVlcnlMaXN0PElneEJ1dHRvbkRpcmVjdGl2ZT47XG5cbiAgICAvKipcbiAgICAgKiBBIGNvbGxlY3Rpb24gY29udGFpbmluZyBhbGwgYnV0dG9ucyBpbnNpZGUgdGhlIGJ1dHRvbiBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGJ1dHRvbnMoKTogSWd4QnV0dG9uRGlyZWN0aXZlW10ge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMudmlld0J1dHRvbnMudG9BcnJheSgpLCAuLi50aGlzLnRlbXBsYXRlQnV0dG9ucy50b0FycmF5KCldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgdGhlIHZhbHVlIG9mIHRoZSBgaWRgIGF0dHJpYnV0ZS4gSWYgbm90IHNldCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1idXR0b25ncm91cCBbaWRdPVwiJ2lneC1kaWFsb2ctNTYnXCIgW211bHRpU2VsZWN0aW9uXT1cIiFtdWx0aVwiIFt2YWx1ZXNdPVwiYWxpZ25PcHRpb25zXCI+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtYnV0dG9uZ3JvdXAtJHtORVhUX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqIEFsbG93cyB5b3UgdG8gc2V0IGEgc3R5bGUgdXNpbmcgdGhlIGBpdGVtQ29udGVudENzc0NsYXNzYCBpbnB1dC5cbiAgICAgKiBUaGUgdmFsdWUgc2hvdWxkIGJlIHRoZSBDU1MgY2xhc3MgbmFtZSB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgYnV0dG9uIGdyb3VwLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIHN0eWxlMSA9IFwic3R5bGVDbGFzc1wiO1xuICAgICAqIC8vLi5cbiAgICAgKmBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtYnV0dG9uZ3JvdXAgW2l0ZW1Db250ZW50Q3NzQ2xhc3NdPVwic3R5bGUxXCIgW211bHRpU2VsZWN0aW9uXT1cIiFtdWx0aVwiIFt2YWx1ZXNdPVwiYWxpZ25PcHRpb25zXCI+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzZXQgaXRlbUNvbnRlbnRDc3NDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1Db250ZW50Q3NzQ2xhc3MgPSB2YWx1ZSB8fCB0aGlzLl9pdGVtQ29udGVudENzc0NsYXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIENTUyBjbGFzcyBvZiB0aGUgaXRlbSBjb250ZW50IG9mIHRoZSBgSWd4QnV0dG9uR3JvdXBgLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15Q2hpbGRcIilcbiAgICAgKnB1YmxpYyBidXR0b25HOiBJZ3hCdXR0b25Hcm91cENvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgbGV0IGJ1dHRvblNlbGVjdCA9IHRoaXMuYnV0dG9uRy5pdGVtQ29udGVudENzc0NsYXNzO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgZ2V0IGl0ZW1Db250ZW50Q3NzQ2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1Db250ZW50Q3NzQ2xhc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgZW5hYmxlcyBzZWxlY3RpbmcgbXVsdGlwbGUgYnV0dG9ucy4gQnkgZGVmYXVsdCwgbXVsdGktc2VsZWN0aW9uIGlzIGZhbHNlLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWJ1dHRvbmdyb3VwIFttdWx0aVNlbGVjdGlvbl09XCJmYWxzZVwiIFthbGlnbm1lbnRdPVwiYWxpZ25tZW50XCI+PC9pZ3gtYnV0dG9uZ3JvdXA+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIG11bHRpU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgYWxsb3dzIHNldHRpbmcgdGhlIGJ1dHRvbnMgaW4gdGhlIGJ1dHRvbiBncm91cC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgKiAgICAgIHRoaXMuY2l0aWVzID0gW1xuICAgICAqICAgICAgICBuZXcgQnV0dG9uKHtcbiAgICAgKiAgICAgICAgICBsYWJlbDogXCJTb2ZpYVwiXG4gICAgICogICAgICB9KSxcbiAgICAgKiAgICAgICAgbmV3IEJ1dHRvbih7XG4gICAgICogICAgICAgICAgbGFiZWw6IFwiTG9uZG9uXCJcbiAgICAgKiAgICAgIH0pLFxuICAgICAqICAgICAgICBuZXcgQnV0dG9uKHtcbiAgICAgKiAgICAgICAgICBsYWJlbDogXCJOZXcgWW9ya1wiLFxuICAgICAqICAgICAgICAgIHNlbGVjdGVkOiB0cnVlXG4gICAgICogICAgICB9KSxcbiAgICAgKiAgICAgICAgbmV3IEJ1dHRvbih7XG4gICAgICogICAgICAgICAgbGFiZWw6IFwiVG9reW9cIlxuICAgICAqICAgICAgfSlcbiAgICAgKiAgXTtcbiAgICAgKiAgfVxuICAgICAqICAvLy4uXG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWJ1dHRvbmdyb3VwIFttdWx0aVNlbGVjdGlvbl09XCJmYWxzZVwiIFt2YWx1ZXNdPVwiY2l0aWVzXCI+PC9pZ3gtYnV0dG9uZ3JvdXA+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHZhbHVlczogYW55O1xuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGFsbG93cyB5b3UgdG8gZGlzYWJsZSB0aGUgYGlneC1idXR0b25ncm91cGAgY29tcG9uZW50LiBCeSBkZWZhdWx0IGl0J3MgZmFsc2UuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtYnV0dG9uZ3JvdXAgW2Rpc2FibGVkXT1cInRydWVcIiBbbXVsdGlTZWxlY3Rpb25dPVwibXVsdGlcIiBbdmFsdWVzXT1cImZvbnRPcHRpb25zXCI+PC9pZ3gtYnV0dG9uZ3JvdXA+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2Rpc2FibGVkICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudmlld0J1dHRvbnMgJiYgdGhpcy50ZW1wbGF0ZUJ1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYikgPT4gYi5kaXNhYmxlZCA9IHRoaXMuX2Rpc2FibGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0ZWRJbmRleGVzOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQWxsb3dzIHlvdSB0byBzZXQgdGhlIGJ1dHRvbiBncm91cCBhbGlnbm1lbnQuXG4gICAgICogQXZhaWxhYmxlIG9wdGlvbnMgYXJlIGBCdXR0b25Hcm91cEFsaWdubWVudC5ob3Jpem9udGFsYCAoZGVmYXVsdCkgYW5kIGBCdXR0b25Hcm91cEFsaWdubWVudC52ZXJ0aWNhbGAuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqcHVibGljIGFsaWdubWVudCA9IEJ1dHRvbkdyb3VwQWxpZ25tZW50LnZlcnRpY2FsO1xuICAgICAqIC8vLi5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICo8aWd4LWJ1dHRvbmdyb3VwIFttdWx0aVNlbGVjdGlvbl09XCJmYWxzZVwiIFt2YWx1ZXNdPVwiY2l0aWVzXCIgW2FsaWdubWVudF09XCJhbGlnbm1lbnRcIj48L2lneC1idXR0b25ncm91cD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzZXQgYWxpZ25tZW50KHZhbHVlOiBCdXR0b25Hcm91cEFsaWdubWVudCkge1xuICAgICAgICB0aGlzLl9pc1ZlcnRpY2FsID0gdmFsdWUgPT09IEJ1dHRvbkdyb3VwQWxpZ25tZW50LnZlcnRpY2FsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhbGlnbm1lbnQgb2YgdGhlIGBpZ3gtYnV0dG9uZ3JvdXBgLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15Q2hpbGRcIilcbiAgICAgKnB1YmxpYyBidXR0b25HOiBJZ3hCdXR0b25Hcm91cENvbXBvbmVudDtcbiAgICAgKm5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAqICAgIGxldCBidXR0b25BbGlnbm1lbnQgPSB0aGlzLmJ1dHRvbkcuYWxpZ25tZW50O1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgZ2V0IGFsaWdubWVudCgpOiBCdXR0b25Hcm91cEFsaWdubWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1ZlcnRpY2FsID8gQnV0dG9uR3JvdXBBbGlnbm1lbnQudmVydGljYWwgOiBCdXR0b25Hcm91cEFsaWdubWVudC5ob3Jpem9udGFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIEBPdXB1dCBwcm9wZXJ0eSB0aGF0IGVtaXRzIGFuIGV2ZW50IHdoZW4gYSBidXR0b24gaXMgc2VsZWN0ZWQuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwidG9hc3RcIilcbiAgICAgKnByaXZhdGUgdG9hc3Q6IElneFRvYXN0Q29tcG9uZW50O1xuICAgICAqcHVibGljIG9uU2VsZWN0KGJ1dHRvbmdyb3VwKXtcbiAgICAgKiAgICB0aGlzLnRvYXN0LnNob3coKVxuICAgICAqfVxuICAgICAqIC8vLi4uXG4gICAgICpgYGBcbiAgICAgKmBgYGh0bWxcbiAgICAgKiA8aWd4LWJ1dHRvbmdyb3VwICNNeUNoaWxkIFttdWx0aVNlbGVjdGlvbl09XCIhbXVsdGlcIiAob25TZWxlY3QpPVwib25TZWxlY3QoJGV2ZW50KVwiPjwvaWd4LWJ1dHRvbmdyb3VwPlxuICAgICAqPGlneC10b2FzdCAjdG9hc3QgbWVzc2FnZT1cIllvdSBoYXZlIG1hZGUgYSBzZWxlY3Rpb24hXCI+PC9pZ3gtdG9hc3Q+XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgcHVibGljIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxJQnV0dG9uR3JvdXBFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBAT3VwdXQgcHJvcGVydHkgdGhhdCBlbWl0cyBhbiBldmVudCB3aGVuIGEgYnV0dG9uIGlzIGRlc2VsZWN0ZWQuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwidG9hc3RcIilcbiAgICAgKnByaXZhdGUgdG9hc3Q6IElneFRvYXN0Q29tcG9uZW50O1xuICAgICAqcHVibGljIG9uVW5zZWxlY3QoYnV0dG9uZ3JvdXApe1xuICAgICAqICAgIHRoaXMudG9hc3Quc2hvdygpXG4gICAgICp9XG4gICAgICogLy8uLi5cbiAgICAgKmBgYFxuICAgICAqYGBgaHRtbFxuICAgICAqIGlneC1idXR0b25ncm91cCAjTXlDaGlsZCBbbXVsdGlTZWxlY3Rpb25dPVwibXVsdGlcIiAob25VbnNlbGVjdCk9XCJvblVuc2VsZWN0KCRldmVudClcIj48L2lneC1idXR0b25ncm91cD5cbiAgICAgKjxpZ3gtdG9hc3QgI3RvYXN0IG1lc3NhZ2U9XCJZb3UgaGF2ZSBkZXNlbGVjdGVkIGEgYnV0dG9uIVwiPjwvaWd4LXRvYXN0PlxuICAgICAqYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvblVuc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxJQnV0dG9uR3JvdXBFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGBpZ3gtYnV0dG9uZ3JvdXBgIGFsaWdubWVudCBpcyB2ZXJ0aWNhbC5cbiAgICAgKiBOb3RlIHRoYXQgaW4gb3JkZXIgZm9yIHRoZSBhY2Nlc3NvciB0byB3b3JrIGNvcnJlY3RseSB0aGUgcHJvcGVydHkgc2hvdWxkIGJlIHNldCBleHBsaWNpdGx5LlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWJ1dHRvbmdyb3VwICNNeUNoaWxkIFthbGlnbm1lbnRdPVwiYWxpZ25tZW50XCIgW3ZhbHVlc109XCJhbGlnbk9wdGlvbnNcIj5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8uLi5cbiAgICAgKkBWaWV3Q2hpbGQoXCJNeUNoaWxkXCIpXG4gICAgICpwcml2YXRlIGJ1dHRvbkc6IElneEJ1dHRvbkdyb3VwQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgbGV0IG9yaWVudGF0aW9uID0gdGhpcy5idXR0b25HLmlzVmVydGljYWw7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGlzVmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1ZlcnRpY2FsO1xuICAgIH1cbiAgICBwcml2YXRlIF9pc1ZlcnRpY2FsOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2l0ZW1Db250ZW50Q3NzQ2xhc3M6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRGlzcGxheURlbnNpdHlUb2tlbikgcHJvdGVjdGVkIF9kaXNwbGF5RGVuc2l0eU9wdGlvbnM6IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHN1cGVyKF9kaXNwbGF5RGVuc2l0eU9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIGJ1dHRvbi9idXR0b25zLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15Q2hpbGRcIilcbiAgICAgKnByaXZhdGUgYnV0dG9uRzogSWd4QnV0dG9uR3JvdXBDb21wb25lbnQ7XG4gICAgICpuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgKiAgICBsZXQgc2VsZWN0ZWRCdXR0b24gPSB0aGlzLmJ1dHRvbkcuc2VsZWN0ZWRCdXR0b25zO1xuICAgICAqfVxuICAgICAqYGBgXG4gICAgICovXG4gICAgZ2V0IHNlbGVjdGVkQnV0dG9ucygpOiBJZ3hCdXR0b25EaXJlY3RpdmVbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1dHRvbnMuZmlsdGVyKChiLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEluZGV4ZXMuaW5kZXhPZihpKSAhPT0gLTE7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyBhIGJ1dHRvbiBieSBpdHMgaW5kZXguXG4gICAgICogQG1lbWJlck9mIHtAbGluayBJZ3hCdXR0b25Hcm91cENvbXBvbmVudH1cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeUNoaWxkXCIpXG4gICAgICpwcml2YXRlIGJ1dHRvbkc6IElneEJ1dHRvbkdyb3VwQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgdGhpcy5idXR0b25HLnNlbGVjdEJ1dHRvbigyKTtcbiAgICAgKiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0QnV0dG9uKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuYnV0dG9ucy5sZW5ndGggfHwgaW5kZXggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbnNbaW5kZXhdO1xuICAgICAgICBjb25zdCBidXR0b25FbGVtZW50ID0gYnV0dG9uLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpZ3gtYnV0dG9uLS1kaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICAgICAgYnV0dG9uLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoYnV0dG9uRWxlbWVudCwgJ2FyaWEtcHJlc3NlZCcsICd0cnVlJyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGJ1dHRvbkVsZW1lbnQsICdpZ3gtYnV0dG9uLWdyb3VwX19pdGVtLS1zZWxlY3RlZCcpO1xuXG4gICAgICAgIHRoaXMub25TZWxlY3QuZW1pdCh7IGJ1dHRvbjogYnV0dG9uLCBpbmRleDogaW5kZXggfSk7XG5cbiAgICAgICAgY29uc3QgaW5kZXhJblZpZXdCdXR0b25zID0gdGhpcy52aWV3QnV0dG9ucy50b0FycmF5KCkuaW5kZXhPZihidXR0b24pO1xuICAgICAgICBpZiAoaW5kZXhJblZpZXdCdXR0b25zICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNbaW5kZXhJblZpZXdCdXR0b25zXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZXNlbGVjdCBvdGhlciBidXR0b25zIGlmIG11bHRpU2VsZWN0aW9uIGlzIG5vdCBlbmFibGVkXG4gICAgICAgIGlmICghdGhpcy5tdWx0aVNlbGVjdGlvbiAmJiB0aGlzLnNlbGVjdGVkSW5kZXhlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpICE9PSBpbmRleCAmJiB0aGlzLnNlbGVjdGVkSW5kZXhlcy5pbmRleE9mKGkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0QnV0dG9uKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZWxlY3RzIGEgYnV0dG9uIGJ5IGl0cyBpbmRleC5cbiAgICAgKiBAbWVtYmVyT2Yge0BsaW5rIElneEJ1dHRvbkdyb3VwQ29tcG9uZW50fVxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKkBWaWV3Q2hpbGQoXCJNeUNoaWxkXCIpXG4gICAgICpwcml2YXRlIGJ1dHRvbkc6IElneEJ1dHRvbkdyb3VwQ29tcG9uZW50O1xuICAgICAqbmdBZnRlclZpZXdJbml0KCl7XG4gICAgICogICAgdGhpcy5idXR0b25HLmRlc2VsZWN0QnV0dG9uKDIpO1xuICAgICAqICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgKn1cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzZWxlY3RCdXR0b24oaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy5idXR0b25zLmxlbmd0aCB8fCBpbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnV0dG9uc1tpbmRleF07XG4gICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBidXR0b24ubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBpZiAoYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lneC1idXR0b24tLWRpc2FibGVkJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleGVzLnNwbGljZSh0aGlzLnNlbGVjdGVkSW5kZXhlcy5pbmRleE9mKGluZGV4KSwgMSk7XG4gICAgICAgIGJ1dHRvbi5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShidXR0b25FbGVtZW50LCAnYXJpYS1wcmVzc2VkJywgJ2ZhbHNlJyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGJ1dHRvbkVsZW1lbnQsICdpZ3gtYnV0dG9uLWdyb3VwX19pdGVtLS1zZWxlY3RlZCcpO1xuXG4gICAgICAgIHRoaXMub25VbnNlbGVjdC5lbWl0KHsgYnV0dG9uOiBidXR0b24sIGluZGV4OiBpbmRleCB9KTtcblxuICAgICAgICBjb25zdCBpbmRleEluVmlld0J1dHRvbnMgPSB0aGlzLnZpZXdCdXR0b25zLnRvQXJyYXkoKS5pbmRleE9mKGJ1dHRvbik7XG4gICAgICAgIGlmIChpbmRleEluVmlld0J1dHRvbnMgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tpbmRleEluVmlld0J1dHRvbnNdLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUJ1dHRvbnMuZm9yRWFjaCggKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgaWYgKCFidXR0b24uaW5pdGlhbERlbnNpdHkpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uZGlzcGxheURlbnNpdHkgPSB0aGlzLmRpc3BsYXlEZW5zaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgY29uc3QgaW5pdEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBDYW5jZWwgYW55IGV4aXN0aW5nIGJ1dHRvbkNsaWNrIHN1YnNjcmlwdGlvbnNcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2xpY2tOb3RpZmllciQubmV4dCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhlcy5zcGxpY2UoMCwgdGhpcy5zZWxlY3RlZEluZGV4ZXMubGVuZ3RoKTtcblxuICAgICAgICAgICAgLy8gaW5pdGlhbCBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBidXR0b24ubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFidXR0b24uZGlzYWJsZWQgJiYgYnV0dG9uLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0QnV0dG9uKGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidXR0b24uYnV0dG9uQ2xpY2sucGlwZSh0YWtlVW50aWwodGhpcy5idXR0b25DbGlja05vdGlmaWVyJCkpLnN1YnNjcmliZSgoZXYpID0+IHRoaXMuX2NsaWNrSGFuZGxlcihldiwgaW5kZXgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhidXR0b25FbGVtZW50LCAnaWd4LWJ1dHRvbi1ncm91cF9faXRlbScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52aWV3QnV0dG9ucy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMucXVlcnlMaXN0Tm90aWZpZXIkKSkuc3Vic2NyaWJlKCgpID0+IGluaXRCdXR0b25zKCkpO1xuICAgICAgICB0aGlzLnRlbXBsYXRlQnV0dG9ucy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMucXVlcnlMaXN0Tm90aWZpZXIkKSkuc3Vic2NyaWJlKCgpID0+IGluaXRCdXR0b25zKCkpO1xuICAgICAgICBpbml0QnV0dG9ucygpO1xuXG4gICAgICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5idXR0b25DbGlja05vdGlmaWVyJC5uZXh0KCk7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xpY2tOb3RpZmllciQuY29tcGxldGUoKTtcblxuICAgICAgICB0aGlzLnF1ZXJ5TGlzdE5vdGlmaWVyJC5uZXh0KCk7XG4gICAgICAgIHRoaXMucXVlcnlMaXN0Tm90aWZpZXIkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIF9jbGlja0hhbmRsZXIoZXZlbnQsIGkpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleGVzLmluZGV4T2YoaSkgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmRlc2VsZWN0QnV0dG9uKGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdXR0b24oaSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1dHRvbkdyb3VwRXZlbnRBcmdzIHtcbiAgICBidXR0b246IElneEJ1dHRvbkRpcmVjdGl2ZTtcbiAgICBpbmRleDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hCdXR0b25Hcm91cENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0lneEJ1dHRvbkdyb3VwQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbSWd4QnV0dG9uTW9kdWxlLCBDb21tb25Nb2R1bGUsIElneFJpcHBsZU1vZHVsZSwgSWd4SWNvbk1vZHVsZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hCdXR0b25Hcm91cE1vZHVsZSB7XG59XG4iXX0=