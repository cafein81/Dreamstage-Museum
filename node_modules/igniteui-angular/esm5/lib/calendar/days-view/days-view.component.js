/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input, HostListener, ViewChildren, QueryList, HostBinding } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft, slideInRight } from '../../animations/main';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IgxDayItemComponent } from './day-item.component';
import { DateRangeType } from '../../core/dates';
import { IgxCalendarBase, ScrollMonth } from '../calendar-base';
/** @type {?} */
var NEXT_ID = 0;
var IgxDaysViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxDaysViewComponent, _super);
    function IgxDaysViewComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Sets/gets the `id` of the days view.
         * If not set, the `id` will have value `"igx-days-view-0"`.
         * ```html
         * <igx-days-view id="my-days-view"></igx-days-view>
         * ```
         * ```typescript
         * let daysViewId =  this.daysView.id;
         * ```
         */
        _this.id = "igx-days-view-" + NEXT_ID++;
        /**
         * @hidden
         */
        _this.animationAction = '';
        /**
         * @hidden
         */
        _this.changeDaysView = false;
        /**
         * @hidden
         */
        _this.onDateSelection = new EventEmitter();
        /**
         * @hidden
         */
        _this.onViewChanged = new EventEmitter();
        /**
         * @hidden
         */
        _this.isKeydownTrigger = false;
        /**
         * The default css class applied to the component.
         *
         * @hidden
         */
        _this.styleClass = true;
        return _this;
    }
    Object.defineProperty(IgxDaysViewComponent.prototype, "getCalendarMonth", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.calendarModel.monthdatescalendar(this.viewDate.getFullYear(), this.viewDate.getMonth(), true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxDaysViewComponent.prototype.ngDoCheck = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (!this.changeDaysView && this.dates) {
            this.disableOutOfRangeDates();
        }
    };
    /**
     * Returns the locale representation of the date in the days view.
     *
     * @hidden
     */
    /**
     * Returns the locale representation of the date in the days view.
     *
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxDaysViewComponent.prototype.formattedDate = /**
     * Returns the locale representation of the date in the days view.
     *
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.formatViews.day) {
            return this.formatterDay.format(value);
        }
        return "" + value.getDate();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxDaysViewComponent.prototype.generateWeekHeader = /**
     * @hidden
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var dayNames = [];
        /** @type {?} */
        var rv = this.calendarModel.monthdatescalendar(this.viewDate.getFullYear(), this.viewDate.getMonth())[0];
        try {
            for (var rv_1 = tslib_1.__values(rv), rv_1_1 = rv_1.next(); !rv_1_1.done; rv_1_1 = rv_1.next()) {
                var day = rv_1_1.value;
                dayNames.push(this.formatterWeekday.format(day.date));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (rv_1_1 && !rv_1_1.done && (_a = rv_1.return)) _a.call(rv_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return dayNames;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    IgxDaysViewComponent.prototype.rowTracker = /**
     * @hidden
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return "" + item[index].date.getMonth() + item[index].date.getDate();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    IgxDaysViewComponent.prototype.dateTracker = /**
     * @hidden
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.date.getMonth() + "--" + item.date.getDate();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxDaysViewComponent.prototype.isCurrentMonth = /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.viewDate.getMonth() === value.getMonth();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxDaysViewComponent.prototype.isCurrentYear = /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.viewDate.getFullYear() === value.getFullYear();
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxDaysViewComponent.prototype.focusActiveDate = /**
     * @hidden
     * @return {?}
     */
    function () {
        /** @type {?} */
        var date = this.dates.find(function (d) { return d.selected; });
        if (!date) {
            date = this.dates.find(function (d) { return d.isToday; });
        }
        if (date) {
            date.nativeElement.focus();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxDaysViewComponent.prototype.selectDay = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectDateFromClient(event.date);
        this.onDateSelection.emit(event);
        this.onSelection.emit(this.selectedDates);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @param {?} isLast
     * @return {?}
     */
    IgxDaysViewComponent.prototype.animationDone = /**
     * @hidden
     * @param {?} event
     * @param {?} isLast
     * @return {?}
     */
    function (event, isLast) {
        if (isLast) {
            if (this.monthScrollDirection !== ScrollMonth.NONE) {
                this.scrollMonth$.next();
            }
            /** @type {?} */
            var date_1 = this.dates.find(function (d) { return d.selected; });
            if (date_1 && !this.isKeydownTrigger) {
                setTimeout(function () {
                    date_1.nativeElement.focus();
                }, parseInt(slideInRight.options.params.duration, 10));
            }
            else if (this.callback && (event.toState === 'next' || event.toState === 'prev')) {
                this.callback(this.dates, this.nextDate);
            }
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} target
     * @param {?=} prevView
     * @return {?}
     */
    IgxDaysViewComponent.prototype.focusPreviousUpDate = /**
     * @hidden
     * @private
     * @param {?} target
     * @param {?=} prevView
     * @return {?}
     */
    function (target, prevView) {
        var _this = this;
        if (prevView === void 0) { prevView = false; }
        /** @type {?} */
        var node = this.dates.find(function (date) { return date.nativeElement === target; });
        if (!node) {
            return;
        }
        /** @type {?} */
        var dates = this.dates.toArray();
        for (var index = dates.indexOf(node); index - 7 > -1; index -= 7) {
            /** @type {?} */
            var date = prevView ? dates[index] : dates[index - 7];
            if (!date.isDisabled) {
                if (!date.isOutOfRange) {
                    date.nativeElement.focus();
                    break;
                }
            }
        }
        if (this.changeDaysView && dates.indexOf(node) - 7 < 0) {
            /** @type {?} */
            var dayItem = dates[dates.indexOf(node)];
            this.nextDate = new Date(dayItem.date.date);
            this.nextDate.setDate(this.nextDate.getDate() - 7);
            this.isKeydownTrigger = true;
            this.animationAction = 'prev';
            this.callback = function (items, next) {
                /** @type {?} */
                var day = items.find(function (item) { return item.date.date.getTime() === next.getTime(); });
                if (day) {
                    _this.focusPreviousUpDate(day.nativeElement, true);
                }
            };
            this.onViewChanged.emit(this.nextDate);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} target
     * @param {?=} nextView
     * @return {?}
     */
    IgxDaysViewComponent.prototype.focusNextDownDate = /**
     * @hidden
     * @private
     * @param {?} target
     * @param {?=} nextView
     * @return {?}
     */
    function (target, nextView) {
        var _this = this;
        if (nextView === void 0) { nextView = false; }
        /** @type {?} */
        var node = this.dates.find(function (date) { return date.nativeElement === target; });
        if (!node) {
            return;
        }
        /** @type {?} */
        var dates = this.dates.toArray();
        for (var index = dates.indexOf(node); index + 7 < this.dates.length; index += 7) {
            /** @type {?} */
            var date = nextView ? dates[index] : dates[index + 7];
            if (!date.isDisabled) {
                if (!date.isOutOfRange) {
                    date.nativeElement.focus();
                    break;
                }
            }
        }
        if (this.changeDaysView && dates.indexOf(node) + 7 > this.dates.length - 1) {
            /** @type {?} */
            var dayItem = dates[dates.indexOf(node)];
            this.nextDate = new Date(dayItem.date.date);
            this.nextDate.setDate(this.nextDate.getDate() + 7);
            this.isKeydownTrigger = true;
            this.animationAction = 'next';
            this.callback = function (items, next) {
                /** @type {?} */
                var day = items.find(function (item) { return item.date.date.getTime() === next.getTime(); });
                if (day) {
                    _this.focusNextDownDate(day.nativeElement, true);
                }
            };
            this.onViewChanged.emit(this.nextDate);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} target
     * @return {?}
     */
    IgxDaysViewComponent.prototype.focusPreviousDate = /**
     * @hidden
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        var _this = this;
        /** @type {?} */
        var node = this.dates.find(function (date) { return date.nativeElement === target; });
        if (!node) {
            return;
        }
        /** @type {?} */
        var dates = this.dates.toArray();
        for (var index = dates.indexOf(node); index > 0; index--) {
            /** @type {?} */
            var date = dates[index - 1];
            if (!date.isDisabled) {
                if (!date.isOutOfRange) {
                    date.nativeElement.focus();
                    break;
                }
            }
        }
        if (this.changeDaysView && dates.indexOf(node) === 0) {
            /** @type {?} */
            var dayItem = dates[0];
            if (dayItem.isCurrentMonth) {
                this.nextDate = this.calendarModel.timedelta(dayItem.date.date, 'day', -1);
            }
            else {
                this.nextDate = new Date(dayItem.date.date);
            }
            this.isKeydownTrigger = true;
            this.animationAction = 'prev';
            this.callback = function (items, next) {
                /** @type {?} */
                var day = items.find(function (item) { return item.date.date.getTime() === next.getTime(); });
                if (day) {
                    _this.focusPreviousDate(day.nativeElement);
                }
            };
            this.onViewChanged.emit(this.nextDate);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} target
     * @return {?}
     */
    IgxDaysViewComponent.prototype.focusNextDate = /**
     * @hidden
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        var _this = this;
        /** @type {?} */
        var node = this.dates.find(function (date) { return date.nativeElement === target; });
        if (!node) {
            return;
        }
        /** @type {?} */
        var dates = this.dates.toArray();
        for (var index = dates.indexOf(node); index < this.dates.length - 1; index++) {
            /** @type {?} */
            var date = dates[index + 1];
            if (!date.isDisabled) {
                if (!date.isOutOfRange) {
                    date.nativeElement.focus();
                    break;
                }
            }
        }
        if (this.changeDaysView && dates.indexOf(node) === this.dates.length - 1) {
            /** @type {?} */
            var dayItem = dates[this.dates.length - 1];
            this.nextDate = new Date(dayItem.date.date);
            this.isKeydownTrigger = true;
            this.animationAction = 'next';
            this.callback = function (items, next) {
                /** @type {?} */
                var day = items.find(function (item) { return item.date.date.getTime() === next.getTime(); });
                if (day) {
                    _this.focusNextDate(day.nativeElement);
                }
            };
            this.onViewChanged.emit(this.nextDate);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    IgxDaysViewComponent.prototype.disableOutOfRangeDates = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dateRange = [];
        this.dates.toArray().forEach(function (date) {
            if (!date.isCurrentMonth) {
                dateRange.push(date.date.date);
            }
        });
        this.outOfRangeDates = [{
                type: DateRangeType.Specific,
                dateRange: dateRange
            }];
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxDaysViewComponent.prototype.onKeydownArrowUp = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.focusPreviousUpDate(event.target);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxDaysViewComponent.prototype.onKeydownArrowDown = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.focusNextDownDate(event.target);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxDaysViewComponent.prototype.onKeydownArrowLeft = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.focusPreviousDate(event.target);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxDaysViewComponent.prototype.onKeydownArrowRight = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.focusNextDate(event.target);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxDaysViewComponent.prototype.onKeydownHome = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        var dates = this.dates.filter(function (d) { return d.isCurrentMonth; });
        for (var i = 0; i < dates.length; i++) {
            if (!dates[i].isDisabled) {
                dates[i].nativeElement.focus();
                break;
            }
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    IgxDaysViewComponent.prototype.onKeydownEnd = /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        var dates = this.dates.filter(function (d) { return d.isCurrentMonth; });
        for (var i = dates.length - 1; i >= 0; i--) {
            if (!dates[i].isDisabled) {
                dates[i].nativeElement.focus();
                break;
            }
        }
    };
    IgxDaysViewComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            multi: true,
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: IgxDaysViewComponent
                        }
                    ],
                    animations: [
                        trigger('animateChange', [
                            transition('* => prev', useAnimation(slideInLeft, {
                                params: {
                                    fromPosition: 'translateX(-30%)'
                                }
                            })),
                            transition('* => next', useAnimation(slideInRight, {
                                params: {
                                    fromPosition: 'translateX(30%)'
                                }
                            }))
                        ])
                    ],
                    selector: 'igx-days-view',
                    template: "<div class=\"igx-calendar__body-row\">\n    <span *ngFor=\"let dayName of generateWeekHeader()\" class=\"igx-calendar__label\">\n        {{ dayName | titlecase }}\n    </span>\n</div>\n\n<div *ngFor=\"let week of getCalendarMonth; last as isLast; index as i; trackBy: rowTracker\" class=\"igx-calendar__body-row\" [@animateChange]=\"animationAction\" (@animateChange.done)=\"animationDone($event, isLast)\">\n    <igx-day-item [date]=\"day\" [selection]=\"selection\" [value]=\"value\" [disabledDates]=\"disabledDates\" [specialDates]=\"specialDates\" [outOfRangeDates]=\"outOfRangeDates\" (onDateSelection)=\"selectDay($event)\" *ngFor=\"let day of week; trackBy: dateTracker\">\n        {{ formattedDate(day.date) }}\n    </igx-day-item>\n</div>\n"
                }] }
    ];
    IgxDaysViewComponent.propDecorators = {
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        animationAction: [{ type: Input }],
        changeDaysView: [{ type: Input }],
        onDateSelection: [{ type: Output }],
        onViewChanged: [{ type: Output }],
        dates: [{ type: ViewChildren, args: [IgxDayItemComponent, { read: IgxDayItemComponent },] }],
        styleClass: [{ type: HostBinding, args: ['class.igx-calendar',] }],
        onKeydownArrowUp: [{ type: HostListener, args: ['keydown.arrowup', ['$event'],] }],
        onKeydownArrowDown: [{ type: HostListener, args: ['keydown.arrowdown', ['$event'],] }],
        onKeydownArrowLeft: [{ type: HostListener, args: ['keydown.arrowleft', ['$event'],] }],
        onKeydownArrowRight: [{ type: HostListener, args: ['keydown.arrowright', ['$event'],] }],
        onKeydownHome: [{ type: HostListener, args: ['keydown.home', ['$event'],] }],
        onKeydownEnd: [{ type: HostListener, args: ['keydown.end', ['$event'],] }]
    };
    return IgxDaysViewComponent;
}(IgxCalendarBase));
export { IgxDaysViewComponent };
if (false) {
    /**
     * Sets/gets the `id` of the days view.
     * If not set, the `id` will have value `"igx-days-view-0"`.
     * ```html
     * <igx-days-view id="my-days-view"></igx-days-view>
     * ```
     * ```typescript
     * let daysViewId =  this.daysView.id;
     * ```
     * @type {?}
     */
    IgxDaysViewComponent.prototype.id;
    /**
     * @hidden
     * @type {?}
     */
    IgxDaysViewComponent.prototype.animationAction;
    /**
     * @hidden
     * @type {?}
     */
    IgxDaysViewComponent.prototype.changeDaysView;
    /**
     * @hidden
     * @type {?}
     */
    IgxDaysViewComponent.prototype.onDateSelection;
    /**
     * @hidden
     * @type {?}
     */
    IgxDaysViewComponent.prototype.onViewChanged;
    /**
     * @hidden
     * @type {?}
     */
    IgxDaysViewComponent.prototype.dates;
    /**
     * @hidden
     * @type {?}
     */
    IgxDaysViewComponent.prototype.nextDate;
    /**
     * @hidden
     * @type {?}
     */
    IgxDaysViewComponent.prototype.callback;
    /**
     * @hidden
     * @type {?}
     */
    IgxDaysViewComponent.prototype.isKeydownTrigger;
    /**
     * @hidden
     * @type {?}
     */
    IgxDaysViewComponent.prototype.outOfRangeDates;
    /**
     * The default css class applied to the component.
     *
     * @hidden
     * @type {?}
     */
    IgxDaysViewComponent.prototype.styleClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5cy12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvZGF5cy12aWV3L2RheXMtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osS0FBSyxFQUNMLFlBQVksRUFDWixZQUFZLEVBQ1osU0FBUyxFQUNULFdBQVcsRUFFZCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBdUIsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFFNUQsT0FBTyxHQUFHLENBQUM7QUFFZjtJQXlCMEMsZ0RBQWU7SUF6QnpEO1FBQUEscUVBMmNDOzs7Ozs7Ozs7OztRQXJhVSxRQUFFLEdBQUcsbUJBQWlCLE9BQU8sRUFBSSxDQUFDOzs7O1FBTWxDLHFCQUFlLEdBQVEsRUFBRSxDQUFDOzs7O1FBTTFCLG9CQUFjLEdBQUcsS0FBSyxDQUFDOzs7O1FBTXZCLHFCQUFlLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7Ozs7UUFNcEQsbUJBQWEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOzs7O1FBcUJ6QyxzQkFBZ0IsR0FBRyxLQUFLLENBQUM7Ozs7OztRQWF6QixnQkFBVSxHQUFHLElBQUksQ0FBQzs7SUEy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QUFRLENBQUM7cUNBVzFDLFlBQVksU0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQztxQ0FXNUMsWUFBWSxTQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDO3NDQVc1QyxZQUFZLFNBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0NBVzdDLFlBQVksU0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUM7K0JBaUJ2QyxZQUFZLFNBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQWEzQywyQkFBQztDQUFBLEFBM2NELENBeUIwQyxlQUFlLEdBa2J4RDtTQWxiWSxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7SUFXN0Isa0NBRXlDOzs7OztJQUt6QywrQ0FDaUM7Ozs7O0lBS2pDLDhDQUM4Qjs7Ozs7SUFLOUIsK0NBQzJEOzs7OztJQUszRCw2Q0FDZ0Q7Ozs7O0lBS2hELHFDQUM2Qzs7Ozs7SUFLN0Msd0NBQXNCOzs7OztJQUt0Qix3Q0FBeUM7Ozs7O0lBS3pDLGdEQUFnQzs7Ozs7SUFLaEMsK0NBQThDOzs7Ozs7O0lBTzlDLDBDQUN5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgSG9zdExpc3RlbmVyLFxuICAgIFZpZXdDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgRG9DaGVja1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDYWxlbmRhckRhdGUgfSBmcm9tICcuLi8uLi9jYWxlbmRhcic7XG5pbXBvcnQgeyB0cmlnZ2VyLCB0cmFuc2l0aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IHNsaWRlSW5MZWZ0LCBzbGlkZUluUmlnaHQgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zL21haW4nO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJZ3hEYXlJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9kYXktaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlRGVzY3JpcHRvciwgRGF0ZVJhbmdlVHlwZSB9IGZyb20gJy4uLy4uL2NvcmUvZGF0ZXMnO1xuaW1wb3J0IHsgSWd4Q2FsZW5kYXJCYXNlLCBTY3JvbGxNb250aCB9IGZyb20gJy4uL2NhbGVuZGFyLWJhc2UnO1xuXG5sZXQgTkVYVF9JRCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IElneERheXNWaWV3Q29tcG9uZW50XG4gICAgICAgIH1cbiAgICBdLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignYW5pbWF0ZUNoYW5nZScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gcHJldicsIHVzZUFuaW1hdGlvbihzbGlkZUluTGVmdCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBmcm9tUG9zaXRpb246ICd0cmFuc2xhdGVYKC0zMCUpJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gbmV4dCcsIHVzZUFuaW1hdGlvbihzbGlkZUluUmlnaHQsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVBvc2l0aW9uOiAndHJhbnNsYXRlWCgzMCUpJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgc2VsZWN0b3I6ICdpZ3gtZGF5cy12aWV3JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2RheXMtdmlldy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RGF5c1ZpZXdDb21wb25lbnQgZXh0ZW5kcyBJZ3hDYWxlbmRhckJhc2UgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBpZGAgb2YgdGhlIGRheXMgdmlldy5cbiAgICAgKiBJZiBub3Qgc2V0LCB0aGUgYGlkYCB3aWxsIGhhdmUgdmFsdWUgYFwiaWd4LWRheXMtdmlldy0wXCJgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWRheXMtdmlldyBpZD1cIm15LWRheXMtdmlld1wiPjwvaWd4LWRheXMtdmlldz5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGRheXNWaWV3SWQgPSAgdGhpcy5kYXlzVmlldy5pZDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlkID0gYGlneC1kYXlzLXZpZXctJHtORVhUX0lEKyt9YDtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBhbmltYXRpb25BY3Rpb246IGFueSA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNoYW5nZURheXNWaWV3ID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uRGF0ZVNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8SUNhbGVuZGFyRGF0ZT4oKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25WaWV3Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAVmlld0NoaWxkcmVuKElneERheUl0ZW1Db21wb25lbnQsIHsgcmVhZDogSWd4RGF5SXRlbUNvbXBvbmVudCB9KVxuICAgIHB1YmxpYyBkYXRlczogUXVlcnlMaXN0PElneERheUl0ZW1Db21wb25lbnQ+O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZXh0RGF0ZTogRGF0ZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2FsbGJhY2s6IChkYXRlcz8sIG5leHQ/KSA9PiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBpc0tleWRvd25UcmlnZ2VyID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG91dE9mUmFuZ2VEYXRlczogRGF0ZVJhbmdlRGVzY3JpcHRvcltdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgY3NzIGNsYXNzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlneC1jYWxlbmRhcicpXG4gICAgcHVibGljIHN0eWxlQ2xhc3MgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZ2V0Q2FsZW5kYXJNb250aCgpOiBJQ2FsZW5kYXJEYXRlW11bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGVuZGFyTW9kZWwubW9udGhkYXRlc2NhbGVuZGFyKHRoaXMudmlld0RhdGUuZ2V0RnVsbFllYXIoKSwgdGhpcy52aWV3RGF0ZS5nZXRNb250aCgpLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nRG9DaGVjaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5nZURheXNWaWV3ICYmIHRoaXMuZGF0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZU91dE9mUmFuZ2VEYXRlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbG9jYWxlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBkYXRlIGluIHRoZSBkYXlzIHZpZXcuXG4gICAgICpcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGZvcm1hdHRlZERhdGUodmFsdWU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5mb3JtYXRWaWV3cy5kYXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRlckRheS5mb3JtYXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHt2YWx1ZS5nZXREYXRlKCl9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdlbmVyYXRlV2Vla0hlYWRlcigpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGRheU5hbWVzID0gW107XG4gICAgICAgIGNvbnN0IHJ2ID0gdGhpcy5jYWxlbmRhck1vZGVsLm1vbnRoZGF0ZXNjYWxlbmRhcih0aGlzLnZpZXdEYXRlLmdldEZ1bGxZZWFyKCksIHRoaXMudmlld0RhdGUuZ2V0TW9udGgoKSlbMF07XG4gICAgICAgIGZvciAoY29uc3QgZGF5IG9mIHJ2KSB7XG4gICAgICAgICAgICBkYXlOYW1lcy5wdXNoKHRoaXMuZm9ybWF0dGVyV2Vla2RheS5mb3JtYXQoZGF5LmRhdGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXlOYW1lcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHJvd1RyYWNrZXIoaW5kZXgsIGl0ZW0pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7aXRlbVtpbmRleF0uZGF0ZS5nZXRNb250aCgpfSR7aXRlbVtpbmRleF0uZGF0ZS5nZXREYXRlKCl9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGRhdGVUcmFja2VyKGluZGV4LCBpdGVtKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke2l0ZW0uZGF0ZS5nZXRNb250aCgpfS0tJHtpdGVtLmRhdGUuZ2V0RGF0ZSgpfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBpc0N1cnJlbnRNb250aCh2YWx1ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3RGF0ZS5nZXRNb250aCgpID09PSB2YWx1ZS5nZXRNb250aCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNDdXJyZW50WWVhcih2YWx1ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpID09PSB2YWx1ZS5nZXRGdWxsWWVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBmb2N1c0FjdGl2ZURhdGUoKSB7XG4gICAgICAgIGxldCBkYXRlID0gdGhpcy5kYXRlcy5maW5kKChkKSA9PiBkLnNlbGVjdGVkKTtcblxuICAgICAgICBpZiAoIWRhdGUpIHtcbiAgICAgICAgICAgIGRhdGUgPSB0aGlzLmRhdGVzLmZpbmQoKGQpID0+IGQuaXNUb2RheSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgZGF0ZS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdERheShldmVudCkge1xuICAgICAgICB0aGlzLnNlbGVjdERhdGVGcm9tQ2xpZW50KGV2ZW50LmRhdGUpO1xuICAgICAgICB0aGlzLm9uRGF0ZVNlbGVjdGlvbi5lbWl0KGV2ZW50KTtcblxuICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQodGhpcy5zZWxlY3RlZERhdGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGFuaW1hdGlvbkRvbmUoZXZlbnQsIGlzTGFzdDogYm9vbGVhbikge1xuICAgICAgICBpZiAoaXNMYXN0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tb250aFNjcm9sbERpcmVjdGlvbiAhPT0gU2Nyb2xsTW9udGguTk9ORSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsTW9udGgkLm5leHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZXMuZmluZCgoZCkgPT4gZC5zZWxlY3RlZCk7XG4gICAgICAgICAgICBpZiAoZGF0ZSAmJiAhdGhpcy5pc0tleWRvd25UcmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlSW50KHNsaWRlSW5SaWdodC5vcHRpb25zLnBhcmFtcy5kdXJhdGlvbiwgMTApKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYWxsYmFjayAmJiAoZXZlbnQudG9TdGF0ZSA9PT0gJ25leHQnIHx8IGV2ZW50LnRvU3RhdGUgPT09ICdwcmV2JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMuZGF0ZXMsIHRoaXMubmV4dERhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZm9jdXNQcmV2aW91c1VwRGF0ZSh0YXJnZXQsIHByZXZWaWV3ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZGF0ZXMuZmluZCgoZGF0ZSkgPT4gZGF0ZS5uYXRpdmVFbGVtZW50ID09PSB0YXJnZXQpO1xuICAgICAgICBpZiAoIW5vZGUpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgY29uc3QgZGF0ZXMgPSB0aGlzLmRhdGVzLnRvQXJyYXkoKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBkYXRlcy5pbmRleE9mKG5vZGUpOyBpbmRleCAtIDcgPiAtMTsgaW5kZXggLT0gNykge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHByZXZWaWV3ID8gZGF0ZXNbaW5kZXhdIDogZGF0ZXNbaW5kZXggLSA3XTtcbiAgICAgICAgICAgIGlmICghZGF0ZS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRlLmlzT3V0T2ZSYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlRGF5c1ZpZXcgJiYgZGF0ZXMuaW5kZXhPZihub2RlKSAtIDcgPCAwKSB7XG4gICAgICAgICAgICBjb25zdCBkYXlJdGVtID0gZGF0ZXNbZGF0ZXMuaW5kZXhPZihub2RlKV07XG4gICAgICAgICAgICB0aGlzLm5leHREYXRlID0gbmV3IERhdGUoZGF5SXRlbS5kYXRlLmRhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLm5leHREYXRlLnNldERhdGUodGhpcy5uZXh0RGF0ZS5nZXREYXRlKCkgLSA3KTtcblxuICAgICAgICAgICAgdGhpcy5pc0tleWRvd25UcmlnZ2VyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uQWN0aW9uID0gJ3ByZXYnO1xuXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gKGl0ZW1zPywgbmV4dD8pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXkgPSBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmRhdGUuZGF0ZS5nZXRUaW1lKCkgPT09IG5leHQuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNQcmV2aW91c1VwRGF0ZShkYXkubmF0aXZlRWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5vblZpZXdDaGFuZ2VkLmVtaXQodGhpcy5uZXh0RGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c05leHREb3duRGF0ZSh0YXJnZXQsIG5leHRWaWV3ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZGF0ZXMuZmluZCgoZGF0ZSkgPT4gZGF0ZS5uYXRpdmVFbGVtZW50ID09PSB0YXJnZXQpO1xuICAgICAgICBpZiAoIW5vZGUpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgY29uc3QgZGF0ZXMgPSB0aGlzLmRhdGVzLnRvQXJyYXkoKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBkYXRlcy5pbmRleE9mKG5vZGUpOyBpbmRleCArIDcgPCB0aGlzLmRhdGVzLmxlbmd0aDsgaW5kZXggKz0gNykge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5leHRWaWV3ID8gZGF0ZXNbaW5kZXhdIDogZGF0ZXNbaW5kZXggKyA3XTtcbiAgICAgICAgICAgIGlmICghZGF0ZS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRlLmlzT3V0T2ZSYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlRGF5c1ZpZXcgJiYgZGF0ZXMuaW5kZXhPZihub2RlKSArIDcgPiB0aGlzLmRhdGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRheUl0ZW0gPSBkYXRlc1tkYXRlcy5pbmRleE9mKG5vZGUpXTtcbiAgICAgICAgICAgIHRoaXMubmV4dERhdGUgPSBuZXcgRGF0ZShkYXlJdGVtLmRhdGUuZGF0ZSk7XG5cbiAgICAgICAgICAgIHRoaXMubmV4dERhdGUuc2V0RGF0ZSh0aGlzLm5leHREYXRlLmdldERhdGUoKSArIDcpO1xuXG4gICAgICAgICAgICB0aGlzLmlzS2V5ZG93blRyaWdnZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25BY3Rpb24gPSAnbmV4dCc7XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSAoaXRlbXM/LCBuZXh0PykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IGl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZGF0ZS5kYXRlLmdldFRpbWUoKSA9PT0gbmV4dC5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c05leHREb3duRGF0ZShkYXkubmF0aXZlRWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5vblZpZXdDaGFuZ2VkLmVtaXQodGhpcy5uZXh0RGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c1ByZXZpb3VzRGF0ZSh0YXJnZXQpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZGF0ZXMuZmluZCgoZGF0ZSkgPT4gZGF0ZS5uYXRpdmVFbGVtZW50ID09PSB0YXJnZXQpO1xuICAgICAgICBpZiAoIW5vZGUpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgY29uc3QgZGF0ZXMgPSB0aGlzLmRhdGVzLnRvQXJyYXkoKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBkYXRlcy5pbmRleE9mKG5vZGUpOyBpbmRleCA+IDA7IGluZGV4LS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkYXRlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgaWYgKCFkYXRlLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGUuaXNPdXRPZlJhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VEYXlzVmlldyAmJiBkYXRlcy5pbmRleE9mKG5vZGUpID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBkYXlJdGVtID0gZGF0ZXNbMF07XG4gICAgICAgICAgICBpZiAoZGF5SXRlbS5pc0N1cnJlbnRNb250aCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dERhdGUgPSB0aGlzLmNhbGVuZGFyTW9kZWwudGltZWRlbHRhKGRheUl0ZW0uZGF0ZS5kYXRlLCAnZGF5JywgLTEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHREYXRlID0gbmV3IERhdGUoZGF5SXRlbS5kYXRlLmRhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmlzS2V5ZG93blRyaWdnZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25BY3Rpb24gPSAncHJldic7XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSAoaXRlbXM/LCBuZXh0PykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IGl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZGF0ZS5kYXRlLmdldFRpbWUoKSA9PT0gbmV4dC5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c1ByZXZpb3VzRGF0ZShkYXkubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5vblZpZXdDaGFuZ2VkLmVtaXQodGhpcy5uZXh0RGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c05leHREYXRlKHRhcmdldCkge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5kYXRlcy5maW5kKChkYXRlKSA9PiBkYXRlLm5hdGl2ZUVsZW1lbnQgPT09IHRhcmdldCk7XG4gICAgICAgIGlmICghbm9kZSkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBkYXRlcyA9IHRoaXMuZGF0ZXMudG9BcnJheSgpO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gZGF0ZXMuaW5kZXhPZihub2RlKTsgaW5kZXggPCB0aGlzLmRhdGVzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkYXRlc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgaWYgKCFkYXRlLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGUuaXNPdXRPZlJhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VEYXlzVmlldyAmJiBkYXRlcy5pbmRleE9mKG5vZGUpID09PSB0aGlzLmRhdGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRheUl0ZW0gPSBkYXRlc1t0aGlzLmRhdGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdGhpcy5uZXh0RGF0ZSA9IG5ldyBEYXRlKGRheUl0ZW0uZGF0ZS5kYXRlKTtcblxuICAgICAgICAgICAgdGhpcy5pc0tleWRvd25UcmlnZ2VyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uQWN0aW9uID0gJ25leHQnO1xuXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gKGl0ZW1zPywgbmV4dD8pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXkgPSBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmRhdGUuZGF0ZS5nZXRUaW1lKCkgPT09IG5leHQuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNOZXh0RGF0ZShkYXkubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5vblZpZXdDaGFuZ2VkLmVtaXQodGhpcy5uZXh0RGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBkaXNhYmxlT3V0T2ZSYW5nZURhdGVzKCkge1xuICAgICAgICBjb25zdCBkYXRlUmFuZ2UgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRlcy50b0FycmF5KCkuZm9yRWFjaCgoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFkYXRlLmlzQ3VycmVudE1vbnRoKSB7XG4gICAgICAgICAgICAgICAgZGF0ZVJhbmdlLnB1c2goZGF0ZS5kYXRlLmRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm91dE9mUmFuZ2VEYXRlcyA9IFt7XG4gICAgICAgICAgICB0eXBlOiBEYXRlUmFuZ2VUeXBlLlNwZWNpZmljLFxuICAgICAgICAgICAgZGF0ZVJhbmdlOiBkYXRlUmFuZ2VcbiAgICAgICAgfV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3d1cCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkFycm93VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5mb2N1c1ByZXZpb3VzVXBEYXRlKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dkb3duJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duQXJyb3dEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuZm9jdXNOZXh0RG93bkRhdGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd2xlZnQnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25BcnJvd0xlZnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5mb2N1c1ByZXZpb3VzRGF0ZShldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93cmlnaHQnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25BcnJvd1JpZ2h0KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuZm9jdXNOZXh0RGF0ZShldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmhvbWUnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25Ib21lKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVzID0gdGhpcy5kYXRlcy5maWx0ZXIoZCA9PiBkLmlzQ3VycmVudE1vbnRoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFkYXRlc1tpXS5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgZGF0ZXNbaV0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW5kJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duRW5kKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVzID0gdGhpcy5kYXRlcy5maWx0ZXIoZCA9PiBkLmlzQ3VycmVudE1vbnRoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGRhdGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoIWRhdGVzW2ldLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBkYXRlc1tpXS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=