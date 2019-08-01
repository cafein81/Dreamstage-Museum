/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Input, Output, EventEmitter } from '@angular/core';
import { Calendar, isDateInRanges } from './calendar';
import { Subject } from 'rxjs';
/** @enum {string} */
var CalendarSelection = {
    SINGLE: 'single',
    MULTI: 'multi',
    RANGE: 'range',
};
export { CalendarSelection };
/** @enum {string} */
var ScrollMonth = {
    PREV: 'prev',
    NEXT: 'next',
    NONE: 'none',
};
export { ScrollMonth };
var IgxCalendarBase = /** @class */ (function () {
    /**
     * @hidden
     */
    function IgxCalendarBase() {
        /**
         * Emits an event when a date is selected.
         * Provides reference the `selectedDates` property.
         */
        this.onSelection = new EventEmitter();
        /**
         * @hidden
         */
        this._selection = CalendarSelection.SINGLE;
        /**
         * @hidden
         */
        this.rangeStarted = false;
        /**
         * @hidden
         */
        this._locale = 'en';
        /**
         * @hidden
         */
        this._disabledDates = null;
        /**
         * @hidden
         */
        this._specialDates = null;
        /**
         * @hidden
         */
        this._formatOptions = {
            day: 'numeric',
            month: 'short',
            weekday: 'short',
            year: 'numeric'
        };
        /**
         * @hidden
         */
        this._formatViews = {
            day: false,
            month: true,
            year: false
        };
        /**
         * @hidden
         */
        this.monthScrollDirection = ScrollMonth.NONE;
        /**
         * @hidden
         */
        this.scrollMonth$ = new Subject();
        /**
         * @hidden
         */
        this.stopMonthScroll$ = new Subject();
        /**
         * @hidden
         */
        this.startMonthScroll$ = new Subject();
        /**
         * @hidden
         */
        this._onTouchedCallback = function () { };
        /**
         * @hidden
         */
        this._onChangeCallback = function () { };
        this.calendarModel = new Calendar();
        this.viewDate = this.viewDate ? this.viewDate : new Date();
        this.calendarModel.firstWeekDay = this.weekStart;
        this.initFormatters();
    }
    Object.defineProperty(IgxCalendarBase.prototype, "weekStart", {
        /**
         * Gets the start day of the week.
         * Can return a numeric or an enum representation of the week day.
         * Defaults to `Sunday` / `0`.
         */
        get: /**
         * Gets the start day of the week.
         * Can return a numeric or an enum representation of the week day.
         * Defaults to `Sunday` / `0`.
         * @return {?}
         */
        function () {
            return this.calendarModel.firstWeekDay;
        },
        /**
         * Sets the start day of the week.
         * Can be assigned to a numeric value or to `WEEKDAYS` enum value.
         */
        set: /**
         * Sets the start day of the week.
         * Can be assigned to a numeric value or to `WEEKDAYS` enum value.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.calendarModel.firstWeekDay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarBase.prototype, "locale", {
        /**
         * Gets the `locale` of the calendar.
         * Default value is `"en"`.
         */
        get: /**
         * Gets the `locale` of the calendar.
         * Default value is `"en"`.
         * @return {?}
         */
        function () {
            return this._locale;
        },
        /**
         * Sets the `locale` of the calendar.
         * Expects a valid BCP 47 language tag.
         * Default value is `"en"`.
         */
        set: /**
         * Sets the `locale` of the calendar.
         * Expects a valid BCP 47 language tag.
         * Default value is `"en"`.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._locale = value;
            this.initFormatters();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarBase.prototype, "formatOptions", {
        /**
         * Gets the date format options of the days view.
         */
        get: /**
         * Gets the date format options of the days view.
         * @return {?}
         */
        function () {
            return this._formatOptions;
        },
        /**
         * Sets the date format options of the days view.
         * Default is { day: 'numeric', month: 'short', weekday: 'short', year: 'numeric' }
         */
        set: /**
         * Sets the date format options of the days view.
         * Default is { day: 'numeric', month: 'short', weekday: 'short', year: 'numeric' }
         * @param {?} formatOptions
         * @return {?}
         */
        function (formatOptions) {
            this._formatOptions = Object.assign(this._formatOptions, formatOptions);
            this.initFormatters();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarBase.prototype, "formatViews", {
        /**
         * Gets whether the `day`, `month` and `year` should be rendered
         * according to the locale and formatOptions, if any.
         */
        get: /**
         * Gets whether the `day`, `month` and `year` should be rendered
         * according to the locale and formatOptions, if any.
         * @return {?}
         */
        function () {
            return this._formatViews;
        },
        /**
         * Gets whether the `day`, `month` and `year` should be rendered
         * according to the locale and formatOptions, if any.
         */
        set: /**
         * Gets whether the `day`, `month` and `year` should be rendered
         * according to the locale and formatOptions, if any.
         * @param {?} formatViews
         * @return {?}
         */
        function (formatViews) {
            this._formatViews = Object.assign(this._formatViews, formatViews);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarBase.prototype, "selection", {
        /**
         *
         * Gets the selection type.
         * Default value is `"single"`.
         * Changing the type of selection resets the currently
         * selected values if any.
         */
        get: /**
         *
         * Gets the selection type.
         * Default value is `"single"`.
         * Changing the type of selection resets the currently
         * selected values if any.
         * @return {?}
         */
        function () {
            return this._selection;
        },
        /**
         * Sets the selection.
         */
        set: /**
         * Sets the selection.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            switch (value) {
                case CalendarSelection.SINGLE:
                    this.selectedDates = null;
                    break;
                case CalendarSelection.MULTI:
                case CalendarSelection.RANGE:
                    this.selectedDates = [];
                    break;
                default:
                    throw new Error('Invalid selection value');
            }
            this._onChangeCallback(this.selectedDates);
            this.rangeStarted = false;
            this._selection = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarBase.prototype, "value", {
        /**
         * Gets the selected date(s).
         *
         * When selection is set to `single`, it returns
         * a single `Date` object.
         * Otherwise it is an array of `Date` objects.
         */
        get: /**
         * Gets the selected date(s).
         *
         * When selection is set to `single`, it returns
         * a single `Date` object.
         * Otherwise it is an array of `Date` objects.
         * @return {?}
         */
        function () {
            return this.selectedDates;
        },
        /**
         * Sets the selected date(s).
         *
         * When selection is set to `single`, it accepts
         * a single `Date` object.
         * Otherwise it is an array of `Date` objects.
         */
        set: /**
         * Sets the selected date(s).
         *
         * When selection is set to `single`, it accepts
         * a single `Date` object.
         * Otherwise it is an array of `Date` objects.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.selectDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarBase.prototype, "viewDate", {
        /**
         * Gets the date that is presented.
         * By default it is the current date.
         */
        get: /**
         * Gets the date that is presented.
         * By default it is the current date.
         * @return {?}
         */
        function () {
            return this._viewDate;
        },
        /**
         * Sets the date that will be presented in the default view when the component renders.
         */
        set: /**
         * Sets the date that will be presented in the default view when the component renders.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._viewDate = this.getDateOnly(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarBase.prototype, "disabledDates", {
        /**
         * Gets the disabled dates descriptors.
         */
        get: /**
         * Gets the disabled dates descriptors.
         * @return {?}
         */
        function () {
            return this._disabledDates;
        },
        /**
         * Sets the disabled dates' descriptors.
         * ```typescript
         *@ViewChild("MyCalendar")
         *public calendar: IgxCalendarComponent;
         *ngOnInit(){
         *    this.calendar.disabledDates = [
         *     {type: DateRangeType.Between, dateRange: [new Date("2020-1-1"), new Date("2020-1-15")]},
         *     {type: DateRangeType.Weekends}];
         *}
         *```
         */
        set: /**
         * Sets the disabled dates' descriptors.
         * ```typescript
         * \@ViewChild("MyCalendar")
         * public calendar: IgxCalendarComponent;
         * ngOnInit(){
         *    this.calendar.disabledDates = [
         *     {type: DateRangeType.Between, dateRange: [new Date("2020-1-1"), new Date("2020-1-15")]},
         *     {type: DateRangeType.Weekends}];
         * }
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabledDates = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxCalendarBase.prototype, "specialDates", {
        /**
         * Gets the special dates descriptors.
         */
        get: /**
         * Gets the special dates descriptors.
         * @return {?}
         */
        function () {
            return this._specialDates;
        },
        /**
         * Sets the special dates' descriptors.
         * ```typescript
         *@ViewChild("MyCalendar")
         *public calendar: IgxCalendarComponent;
         *ngOnInit(){
         *    this.calendar.specialDates = [
         *     {type: DateRangeType.Between, dateRange: [new Date("2020-1-1"), new Date("2020-1-15")]},
         *     {type: DateRangeType.Weekends}];
         *}
         *```
         */
        set: /**
         * Sets the special dates' descriptors.
         * ```typescript
         * \@ViewChild("MyCalendar")
         * public calendar: IgxCalendarComponent;
         * ngOnInit(){
         *    this.calendar.specialDates = [
         *     {type: DateRangeType.Between, dateRange: [new Date("2020-1-1"), new Date("2020-1-15")]},
         *     {type: DateRangeType.Weekends}];
         * }
         * ```
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._specialDates = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} date
     * @return {?}
     */
    IgxCalendarBase.prototype.getDateOnlyInMs = /**
     * @hidden
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.getDateOnly(date).getTime();
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    IgxCalendarBase.prototype.generateDateRange = /**
     * @hidden
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        /** @type {?} */
        var result = [];
        start = this.getDateOnly(start);
        end = this.getDateOnly(end);
        while (start.getTime() !== end.getTime()) {
            start = this.calendarModel.timedelta(start, 'day', 1);
            result.push(start);
        }
        return result;
    };
    /**
     * Performs a single selection.
     * @hidden
     */
    /**
     * Performs a single selection.
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxCalendarBase.prototype.selectSingle = /**
     * Performs a single selection.
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selectedDates = this.getDateOnly(value);
        this._onChangeCallback(this.selectedDates);
    };
    /**
     * Performs a multiple selection
     * @hidden
     */
    /**
     * Performs a multiple selection
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxCalendarBase.prototype.selectMultiple = /**
     * Performs a multiple selection
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (Array.isArray(value)) {
            this.selectedDates = this.selectedDates.concat(value.map(function (v) { return _this.getDateOnly(v); }));
        }
        else {
            /** @type {?} */
            var valueDateOnly_1 = this.getDateOnly(value);
            /** @type {?} */
            var newSelection = [];
            if (this.selectedDates.every(function (date) { return date.getTime() !== valueDateOnly_1.getTime(); })) {
                newSelection.push(valueDateOnly_1);
            }
            else {
                this.selectedDates = this.selectedDates.filter(function (date) { return date.getTime() !== valueDateOnly_1.getTime(); });
            }
            if (newSelection.length > 0) {
                this.selectedDates = this.selectedDates.concat(newSelection);
            }
        }
        this._onChangeCallback(this.selectedDates);
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} value
     * @param {?=} excludeDisabledDates
     * @return {?}
     */
    IgxCalendarBase.prototype.selectRange = /**
     * @hidden
     * @private
     * @param {?} value
     * @param {?=} excludeDisabledDates
     * @return {?}
     */
    function (value, excludeDisabledDates) {
        var _this = this;
        if (excludeDisabledDates === void 0) { excludeDisabledDates = false; }
        /** @type {?} */
        var start;
        /** @type {?} */
        var end;
        if (Array.isArray(value)) {
            // this.rangeStarted = false;
            value.sort(function (a, b) { return a.valueOf() - b.valueOf(); });
            start = this.getDateOnly(value[0]);
            end = this.getDateOnly(value[value.length - 1]);
            this.selectedDates = tslib_1.__spread([start], this.generateDateRange(start, end));
        }
        else {
            if (!this.rangeStarted) {
                this.rangeStarted = true;
                this.selectedDates = [value];
            }
            else {
                this.rangeStarted = false;
                if (this.selectedDates[0].getTime() === value.getTime()) {
                    this.selectedDates = [];
                    this._onChangeCallback(this.selectedDates);
                    return;
                }
                this.selectedDates.push(value);
                this.selectedDates.sort(function (a, b) { return a.valueOf() - b.valueOf(); });
                start = this.selectedDates.shift();
                end = this.selectedDates.pop();
                this.selectedDates = tslib_1.__spread([start], this.generateDateRange(start, end));
            }
        }
        if (excludeDisabledDates) {
            this.selectedDates = this.selectedDates.filter(function (d) { return !_this.isDateDisabled(d); });
        }
        this._onChangeCallback(this.selectedDates);
    };
    /**
     * Performs a single deselection.
     * @hidden
     */
    /**
     * Performs a single deselection.
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxCalendarBase.prototype.deselectSingle = /**
     * Performs a single deselection.
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.selectedDates !== null &&
            this.getDateOnlyInMs((/** @type {?} */ (value))) === this.getDateOnlyInMs(this.selectedDates)) {
            this.selectedDates = null;
            this._onChangeCallback(this.selectedDates);
        }
    };
    /**
     * Performs a multiple deselection.
     * @hidden
     */
    /**
     * Performs a multiple deselection.
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxCalendarBase.prototype.deselectMultiple = /**
     * Performs a multiple deselection.
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        value = value.filter(function (v) { return v !== null; });
        /** @type {?} */
        var selectedDatesCount = this.selectedDates.length;
        /** @type {?} */
        var datesInMsToDeselect = new Set(value.map(function (v) { return _this.getDateOnlyInMs(v); }));
        for (var i = this.selectedDates.length - 1; i >= 0; i--) {
            if (datesInMsToDeselect.has(this.getDateOnlyInMs(this.selectedDates[i]))) {
                this.selectedDates.splice(i, 1);
            }
        }
        if (this.selectedDates.length !== selectedDatesCount) {
            this._onChangeCallback(this.selectedDates);
        }
    };
    /**
     * Performs a range deselection.
     * @hidden
     */
    /**
     * Performs a range deselection.
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    IgxCalendarBase.prototype.deselectRange = /**
     * Performs a range deselection.
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = value.filter(function (v) { return v !== null; });
        if (value.length < 1) {
            return;
        }
        value.sort(function (a, b) { return a.valueOf() - b.valueOf(); });
        /** @type {?} */
        var valueStart = this.getDateOnlyInMs(value[0]);
        /** @type {?} */
        var valueEnd = this.getDateOnlyInMs(value[value.length - 1]);
        this.selectedDates.sort(function (a, b) { return a.valueOf() - b.valueOf(); });
        /** @type {?} */
        var selectedDatesStart = this.getDateOnlyInMs(this.selectedDates[0]);
        /** @type {?} */
        var selectedDatesEnd = this.getDateOnlyInMs(this.selectedDates[this.selectedDates.length - 1]);
        if (!(valueEnd < selectedDatesStart) && !(valueStart > selectedDatesEnd)) {
            this.selectedDates = [];
            this.rangeStarted = false;
            this._onChangeCallback(this.selectedDates);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    IgxCalendarBase.prototype.initFormatters = /**
     * @hidden
     * @protected
     * @return {?}
     */
    function () {
        this.formatterDay = new Intl.DateTimeFormat(this._locale, { day: this._formatOptions.day });
        this.formatterWeekday = new Intl.DateTimeFormat(this._locale, { weekday: this._formatOptions.weekday });
        this.formatterMonth = new Intl.DateTimeFormat(this._locale, { month: this._formatOptions.month });
        this.formatterYear = new Intl.DateTimeFormat(this._locale, { year: this._formatOptions.year });
        this.formatterMonthday = new Intl.DateTimeFormat(this._locale, { month: this._formatOptions.month, day: this._formatOptions.day });
    };
    /**
     *@hidden
     */
    /**
     * @hidden
     * @protected
     * @param {?} date
     * @return {?}
     */
    IgxCalendarBase.prototype.getDateOnly = /**
     * @hidden
     * @protected
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxCalendarBase.prototype.registerOnChange = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    IgxCalendarBase.prototype.registerOnTouched = /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouchedCallback = fn;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxCalendarBase.prototype.writeValue = /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selectedDates = value;
    };
    /**
     * Checks whether a date is disabled.
     * @hidden
     */
    /**
     * Checks whether a date is disabled.
     * @hidden
     * @param {?} date
     * @return {?}
     */
    IgxCalendarBase.prototype.isDateDisabled = /**
     * Checks whether a date is disabled.
     * @hidden
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (this.disabledDates === null) {
            return false;
        }
        return isDateInRanges(date, this.disabledDates);
    };
    /**
     * Selects date(s) (based on the selection type).
     */
    /**
     * Selects date(s) (based on the selection type).
     * @param {?} value
     * @return {?}
     */
    IgxCalendarBase.prototype.selectDate = /**
     * Selects date(s) (based on the selection type).
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null || value === undefined || (Array.isArray(value) && value.length === 0)) {
            return new Date();
        }
        switch (this.selection) {
            case CalendarSelection.SINGLE:
                this.selectSingle((/** @type {?} */ (value)));
                break;
            case CalendarSelection.MULTI:
                this.selectMultiple(value);
                break;
            case CalendarSelection.RANGE:
                this.selectRange(value, true);
                break;
        }
    };
    /**
     * Deselects date(s) (based on the selection type).
     */
    /**
     * Deselects date(s) (based on the selection type).
     * @param {?=} value
     * @return {?}
     */
    IgxCalendarBase.prototype.deselectDate = /**
     * Deselects date(s) (based on the selection type).
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (this.selectedDates === null || this.selectedDates === []) {
            return;
        }
        if (value === null || value === undefined) {
            this.selectedDates = this.selection === CalendarSelection.SINGLE ? null : [];
            this.rangeStarted = false;
            this._onChangeCallback(this.selectedDates);
            return;
        }
        switch (this.selection) {
            case CalendarSelection.SINGLE:
                this.deselectSingle((/** @type {?} */ (value)));
                break;
            case CalendarSelection.MULTI:
                this.deselectMultiple((/** @type {?} */ (value)));
                break;
            case CalendarSelection.RANGE:
                this.deselectRange((/** @type {?} */ (value)));
                break;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    IgxCalendarBase.prototype.selectDateFromClient = /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    function (value) {
        switch (this.selection) {
            case CalendarSelection.SINGLE:
            case CalendarSelection.MULTI:
                if (!this.isDateDisabled(value)) {
                    this.selectDate(value);
                }
                break;
            case CalendarSelection.RANGE:
                this.selectRange(value, true);
                break;
        }
    };
    IgxCalendarBase.propDecorators = {
        weekStart: [{ type: Input }],
        locale: [{ type: Input }],
        formatOptions: [{ type: Input }],
        formatViews: [{ type: Input }],
        selection: [{ type: Input }],
        value: [{ type: Input }],
        viewDate: [{ type: Input }],
        disabledDates: [{ type: Input }],
        specialDates: [{ type: Input }],
        onSelection: [{ type: Output }]
    };
    return IgxCalendarBase;
}());
export { IgxCalendarBase };
if (false) {
    /**
     * Emits an event when a date is selected.
     * Provides reference the `selectedDates` property.
     * @type {?}
     */
    IgxCalendarBase.prototype.onSelection;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxCalendarBase.prototype._selection;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxCalendarBase.prototype.rangeStarted;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxCalendarBase.prototype._locale;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxCalendarBase.prototype._viewDate;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxCalendarBase.prototype._disabledDates;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxCalendarBase.prototype._specialDates;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxCalendarBase.prototype._formatOptions;
    /**
     * @hidden
     * @type {?}
     * @private
     */
    IgxCalendarBase.prototype._formatViews;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxCalendarBase.prototype.formatterWeekday;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxCalendarBase.prototype.formatterDay;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxCalendarBase.prototype.formatterMonth;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxCalendarBase.prototype.formatterYear;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxCalendarBase.prototype.formatterMonthday;
    /**
     * @hidden
     * @type {?}
     */
    IgxCalendarBase.prototype.calendarModel;
    /**
     * @hidden
     * @type {?}
     */
    IgxCalendarBase.prototype.monthScrollDirection;
    /**
     * @hidden
     * @type {?}
     */
    IgxCalendarBase.prototype.scrollMonth$;
    /**
     * @hidden
     * @type {?}
     */
    IgxCalendarBase.prototype.stopMonthScroll$;
    /**
     * @hidden
     * @type {?}
     */
    IgxCalendarBase.prototype.startMonthScroll$;
    /**
     * @hidden
     * @type {?}
     */
    IgxCalendarBase.prototype.selectedDates;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxCalendarBase.prototype._onTouchedCallback;
    /**
     * @hidden
     * @type {?}
     * @protected
     */
    IgxCalendarBase.prototype._onChangeCallback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXItYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQVksUUFBUSxFQUFFLGNBQWMsRUFBd0MsTUFBTSxZQUFZLENBQUM7QUFHdEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0lBTTNCLFFBQVMsUUFBUTtJQUNqQixPQUFRLE9BQU87SUFDZixPQUFRLE9BQU87Ozs7O0lBSWYsTUFBTyxNQUFNO0lBQ2IsTUFBTyxNQUFNO0lBQ2IsTUFBTyxNQUFNOzs7QUFHakI7SUF1VEk7O09BRUc7SUFDSDs7Ozs7UUF0SE8sZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQzs7OztRQUsvQyxlQUFVLEdBQStCLGlCQUFpQixDQUFDLE1BQU0sQ0FBQzs7OztRQUtsRSxpQkFBWSxHQUFHLEtBQUssQ0FBQzs7OztRQUtyQixZQUFPLEdBQUcsSUFBSSxDQUFDOzs7O1FBVWYsbUJBQWMsR0FBMEIsSUFBSSxDQUFDOzs7O1FBSzdDLGtCQUFhLEdBQTBCLElBQUksQ0FBQzs7OztRQUs1QyxtQkFBYyxHQUF1QjtZQUN6QyxHQUFHLEVBQUUsU0FBUztZQUNkLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLE9BQU87WUFDaEIsSUFBSSxFQUFFLFNBQVM7U0FDbEIsQ0FBQzs7OztRQUtNLGlCQUFZLEdBQXFCO1lBQ3JDLEdBQUcsRUFBRSxLQUFLO1lBQ1YsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsS0FBSztTQUNkLENBQUM7Ozs7UUFtQ0sseUJBQW9CLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQzs7OztRQUt4QyxpQkFBWSxHQUFHLElBQUks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O1NBcmxCWSxlQUFlOzs7Ozs7O0lBbU14QixzQ0FDdUQ7Ozs7OztJQUt2RCxxQ0FBMEU7Ozs7OztJQUsxRSx1Q0FBNkI7Ozs7OztJQUs3QixrQ0FBdUI7Ozs7OztJQUt2QixvQ0FBd0I7Ozs7OztJQUt4Qix5Q0FBcUQ7Ozs7OztJQUtyRCx3Q0FBb0Q7Ozs7OztJQUtwRCx5Q0FLRTs7Ozs7O0lBS0YsdUNBSUU7Ozs7OztJQUtGLDJDQUEyQjs7Ozs7O0lBSzNCLHVDQUF1Qjs7Ozs7O0lBS3ZCLHlDQUF5Qjs7Ozs7O0lBS3pCLHdDQUF3Qjs7Ozs7O0lBS3hCLDRDQUE0Qjs7Ozs7SUFLNUIsd0NBQStCOzs7OztJQUsvQiwrQ0FBK0M7Ozs7O0lBSy9DLHVDQUFvQzs7Ozs7SUFLcEMsMkNBQWlEOzs7OztJQUtqRCw0Q0FBeUM7Ozs7O0lBS3pDLHdDQUFxQjs7Ozs7O0lBS3JCLDZDQUFxRDs7Ozs7O0lBSXJELDRDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV0VFS0RBWVMsIENhbGVuZGFyLCBpc0RhdGVJblJhbmdlcywgSUZvcm1hdHRpbmdPcHRpb25zLCBJRm9ybWF0dGluZ1ZpZXdzIH0gZnJvbSAnLi9jYWxlbmRhcic7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGVSYW5nZURlc2NyaXB0b3IgfSBmcm9tICcuLi9jb3JlL2RhdGVzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBTZXRzIHRoZSBzZWxjdGlvbiB0eXBlIC0gc2luZ2xlLCBtdWx0aSBvciByYW5nZS5cbiAqL1xuZXhwb3J0IGVudW0gQ2FsZW5kYXJTZWxlY3Rpb24ge1xuICAgIFNJTkdMRSA9ICdzaW5nbGUnLFxuICAgIE1VTFRJID0gJ211bHRpJyxcbiAgICBSQU5HRSA9ICdyYW5nZSdcbn1cblxuZXhwb3J0IGVudW0gU2Nyb2xsTW9udGgge1xuICAgIFBSRVYgPSAncHJldicsXG4gICAgTkVYVCA9ICduZXh0JyxcbiAgICBOT05FID0gJ25vbmUnXG59XG5cbmV4cG9ydCBjbGFzcyBJZ3hDYWxlbmRhckJhc2UgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc3RhcnQgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAqIENhbiByZXR1cm4gYSBudW1lcmljIG9yIGFuIGVudW0gcmVwcmVzZW50YXRpb24gb2YgdGhlIHdlZWsgZGF5LlxuICAgICAqIERlZmF1bHRzIHRvIGBTdW5kYXlgIC8gYDBgLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB3ZWVrU3RhcnQoKTogV0VFS0RBWVMgfCBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxlbmRhck1vZGVsLmZpcnN0V2Vla0RheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzdGFydCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICogQ2FuIGJlIGFzc2lnbmVkIHRvIGEgbnVtZXJpYyB2YWx1ZSBvciB0byBgV0VFS0RBWVNgIGVudW0gdmFsdWUuXG4gICAgICovXG4gICAgcHVibGljIHNldCB3ZWVrU3RhcnQodmFsdWU6IFdFRUtEQVlTIHwgbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJNb2RlbC5maXJzdFdlZWtEYXkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgbG9jYWxlYCBvZiB0aGUgY2FsZW5kYXIuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgXCJlblwiYC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYGxvY2FsZWAgb2YgdGhlIGNhbGVuZGFyLlxuICAgICAqIEV4cGVjdHMgYSB2YWxpZCBCQ1AgNDcgbGFuZ3VhZ2UgdGFnLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYFwiZW5cImAuXG4gICAgICovXG4gICAgcHVibGljIHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9sb2NhbGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5pbml0Rm9ybWF0dGVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGRhdGUgZm9ybWF0IG9wdGlvbnMgb2YgdGhlIGRheXMgdmlldy5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZm9ybWF0T3B0aW9ucygpOiBJRm9ybWF0dGluZ09wdGlvbnMge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0T3B0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkYXRlIGZvcm1hdCBvcHRpb25zIG9mIHRoZSBkYXlzIHZpZXcuXG4gICAgICogRGVmYXVsdCBpcyB7IGRheTogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0Jywgd2Vla2RheTogJ3Nob3J0JywgeWVhcjogJ251bWVyaWMnIH1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGZvcm1hdE9wdGlvbnMoZm9ybWF0T3B0aW9uczogSUZvcm1hdHRpbmdPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX2Zvcm1hdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMuX2Zvcm1hdE9wdGlvbnMsIGZvcm1hdE9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRGb3JtYXR0ZXJzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBgZGF5YCwgYG1vbnRoYCBhbmQgYHllYXJgIHNob3VsZCBiZSByZW5kZXJlZFxuICAgICAqIGFjY29yZGluZyB0byB0aGUgbG9jYWxlIGFuZCBmb3JtYXRPcHRpb25zLCBpZiBhbnkuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGZvcm1hdFZpZXdzKCk6IElGb3JtYXR0aW5nVmlld3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0Vmlld3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBgZGF5YCwgYG1vbnRoYCBhbmQgYHllYXJgIHNob3VsZCBiZSByZW5kZXJlZFxuICAgICAqIGFjY29yZGluZyB0byB0aGUgbG9jYWxlIGFuZCBmb3JtYXRPcHRpb25zLCBpZiBhbnkuXG4gICAgICovXG4gICAgcHVibGljIHNldCBmb3JtYXRWaWV3cyhmb3JtYXRWaWV3czogSUZvcm1hdHRpbmdWaWV3cykge1xuICAgICAgICB0aGlzLl9mb3JtYXRWaWV3cyA9IE9iamVjdC5hc3NpZ24odGhpcy5fZm9ybWF0Vmlld3MsIGZvcm1hdFZpZXdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGlvbiB0eXBlLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYFwic2luZ2xlXCJgLlxuICAgICAqIENoYW5naW5nIHRoZSB0eXBlIG9mIHNlbGVjdGlvbiByZXNldHMgdGhlIGN1cnJlbnRseVxuICAgICAqIHNlbGVjdGVkIHZhbHVlcyBpZiBhbnkuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGlvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHNlbGVjdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgQ2FsZW5kYXJTZWxlY3Rpb24uU0lOR0xFOlxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENhbGVuZGFyU2VsZWN0aW9uLk1VTFRJOlxuICAgICAgICAgICAgY2FzZSBDYWxlbmRhclNlbGVjdGlvbi5SQU5HRTpcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNlbGVjdGlvbiB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy5zZWxlY3RlZERhdGVzKTtcbiAgICAgICAgdGhpcy5yYW5nZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgZGF0ZShzKS5cbiAgICAgKlxuICAgICAqIFdoZW4gc2VsZWN0aW9uIGlzIHNldCB0byBgc2luZ2xlYCwgaXQgcmV0dXJuc1xuICAgICAqIGEgc2luZ2xlIGBEYXRlYCBvYmplY3QuXG4gICAgICogT3RoZXJ3aXNlIGl0IGlzIGFuIGFycmF5IG9mIGBEYXRlYCBvYmplY3RzLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBEYXRlIHwgRGF0ZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWREYXRlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzZWxlY3RlZCBkYXRlKHMpLlxuICAgICAqXG4gICAgICogV2hlbiBzZWxlY3Rpb24gaXMgc2V0IHRvIGBzaW5nbGVgLCBpdCBhY2NlcHRzXG4gICAgICogYSBzaW5nbGUgYERhdGVgIG9iamVjdC5cbiAgICAgKiBPdGhlcndpc2UgaXQgaXMgYW4gYXJyYXkgb2YgYERhdGVgIG9iamVjdHMuXG4gICAgICovXG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZSB8IERhdGVbXSkge1xuICAgICAgICB0aGlzLnNlbGVjdERhdGUodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGRhdGUgdGhhdCBpcyBwcmVzZW50ZWQuXG4gICAgICogQnkgZGVmYXVsdCBpdCBpcyB0aGUgY3VycmVudCBkYXRlLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB2aWV3RGF0ZSgpOiBEYXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdEYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRhdGUgdGhhdCB3aWxsIGJlIHByZXNlbnRlZCBpbiB0aGUgZGVmYXVsdCB2aWV3IHdoZW4gdGhlIGNvbXBvbmVudCByZW5kZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgdmlld0RhdGUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgdGhpcy5fdmlld0RhdGUgPSB0aGlzLmdldERhdGVPbmx5KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBkaXNhYmxlZCBkYXRlcyBkZXNjcmlwdG9ycy5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZGlzYWJsZWREYXRlcygpOiBEYXRlUmFuZ2VEZXNjcmlwdG9yW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWREYXRlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkaXNhYmxlZCBkYXRlcycgZGVzY3JpcHRvcnMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15Q2FsZW5kYXJcIilcbiAgICAgKnB1YmxpYyBjYWxlbmRhcjogSWd4Q2FsZW5kYXJDb21wb25lbnQ7XG4gICAgICpuZ09uSW5pdCgpe1xuICAgICAqICAgIHRoaXMuY2FsZW5kYXIuZGlzYWJsZWREYXRlcyA9IFtcbiAgICAgKiAgICAge3R5cGU6IERhdGVSYW5nZVR5cGUuQmV0d2VlbiwgZGF0ZVJhbmdlOiBbbmV3IERhdGUoXCIyMDIwLTEtMVwiKSwgbmV3IERhdGUoXCIyMDIwLTEtMTVcIildfSxcbiAgICAgKiAgICAge3R5cGU6IERhdGVSYW5nZVR5cGUuV2Vla2VuZHN9XTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgZGlzYWJsZWREYXRlcyh2YWx1ZTogRGF0ZVJhbmdlRGVzY3JpcHRvcltdKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkRGF0ZXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzcGVjaWFsIGRhdGVzIGRlc2NyaXB0b3JzLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBzcGVjaWFsRGF0ZXMoKTogRGF0ZVJhbmdlRGVzY3JpcHRvcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwZWNpYWxEYXRlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzcGVjaWFsIGRhdGVzJyBkZXNjcmlwdG9ycy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlDYWxlbmRhclwiKVxuICAgICAqcHVibGljIGNhbGVuZGFyOiBJZ3hDYWxlbmRhckNvbXBvbmVudDtcbiAgICAgKm5nT25Jbml0KCl7XG4gICAgICogICAgdGhpcy5jYWxlbmRhci5zcGVjaWFsRGF0ZXMgPSBbXG4gICAgICogICAgIHt0eXBlOiBEYXRlUmFuZ2VUeXBlLkJldHdlZW4sIGRhdGVSYW5nZTogW25ldyBEYXRlKFwiMjAyMC0xLTFcIiksIG5ldyBEYXRlKFwiMjAyMC0xLTE1XCIpXX0sXG4gICAgICogICAgIHt0eXBlOiBEYXRlUmFuZ2VUeXBlLldlZWtlbmRzfV07XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHNwZWNpYWxEYXRlcyh2YWx1ZTogRGF0ZVJhbmdlRGVzY3JpcHRvcltdKSB7XG4gICAgICAgIHRoaXMuX3NwZWNpYWxEYXRlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gYSBkYXRlIGlzIHNlbGVjdGVkLlxuICAgICAqIFByb3ZpZGVzIHJlZmVyZW5jZSB0aGUgYHNlbGVjdGVkRGF0ZXNgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZSB8IERhdGVbXT4oKTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3NlbGVjdGlvbjogQ2FsZW5kYXJTZWxlY3Rpb24gfCBzdHJpbmcgPSBDYWxlbmRhclNlbGVjdGlvbi5TSU5HTEU7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIHJhbmdlU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgKkBoaWRkZW5cbiAgICAqL1xuICAgIHByaXZhdGUgX2xvY2FsZSA9ICdlbic7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF92aWV3RGF0ZTogRGF0ZTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2Rpc2FibGVkRGF0ZXM6IERhdGVSYW5nZURlc2NyaXB0b3JbXSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9zcGVjaWFsRGF0ZXM6IERhdGVSYW5nZURlc2NyaXB0b3JbXSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9mb3JtYXRPcHRpb25zOiBJRm9ybWF0dGluZ09wdGlvbnMgPSB7XG4gICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgd2Vla2RheTogJ3Nob3J0JyxcbiAgICAgICAgeWVhcjogJ251bWVyaWMnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2Zvcm1hdFZpZXdzOiBJRm9ybWF0dGluZ1ZpZXdzID0ge1xuICAgICAgICBkYXk6IGZhbHNlLFxuICAgICAgICBtb250aDogdHJ1ZSxcbiAgICAgICAgeWVhcjogZmFsc2VcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZvcm1hdHRlcldlZWtkYXk7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZm9ybWF0dGVyRGF5O1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZvcm1hdHRlck1vbnRoO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZvcm1hdHRlclllYXI7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZm9ybWF0dGVyTW9udGhkYXk7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2FsZW5kYXJNb2RlbDogQ2FsZW5kYXI7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG1vbnRoU2Nyb2xsRGlyZWN0aW9uID0gU2Nyb2xsTW9udGguTk9ORTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxNb250aCQgPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHN0b3BNb250aFNjcm9sbCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHN0YXJ0TW9udGhTY3JvbGwkID0gbmV3IFN1YmplY3QoKTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RlZERhdGVzO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9vblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4geyB9O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbGVuZGFyTW9kZWwgPSBuZXcgQ2FsZW5kYXIoKTtcblxuICAgICAgICB0aGlzLnZpZXdEYXRlID0gdGhpcy52aWV3RGF0ZSA/IHRoaXMudmlld0RhdGUgOiBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuY2FsZW5kYXJNb2RlbC5maXJzdFdlZWtEYXkgPSB0aGlzLndlZWtTdGFydDtcbiAgICAgICAgdGhpcy5pbml0Rm9ybWF0dGVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0RGF0ZU9ubHlJbk1zKGRhdGU6IERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0ZU9ubHkoZGF0ZSkuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZ2VuZXJhdGVEYXRlUmFuZ2Uoc3RhcnQ6IERhdGUsIGVuZDogRGF0ZSk6IERhdGVbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBzdGFydCA9IHRoaXMuZ2V0RGF0ZU9ubHkoc3RhcnQpO1xuICAgICAgICBlbmQgPSB0aGlzLmdldERhdGVPbmx5KGVuZCk7XG4gICAgICAgIHdoaWxlIChzdGFydC5nZXRUaW1lKCkgIT09IGVuZC5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5jYWxlbmRhck1vZGVsLnRpbWVkZWx0YShzdGFydCwgJ2RheScsIDEpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goc3RhcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHNpbmdsZSBzZWxlY3Rpb24uXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgc2VsZWN0U2luZ2xlKHZhbHVlOiBEYXRlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IHRoaXMuZ2V0RGF0ZU9ubHkodmFsdWUpO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWREYXRlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBtdWx0aXBsZSBzZWxlY3Rpb25cbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZWxlY3RNdWx0aXBsZSh2YWx1ZTogRGF0ZSB8IERhdGVbXSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IHRoaXMuc2VsZWN0ZWREYXRlcy5jb25jYXQodmFsdWUubWFwKHYgPT4gdGhpcy5nZXREYXRlT25seSh2KSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVEYXRlT25seSA9IHRoaXMuZ2V0RGF0ZU9ubHkodmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gW107XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGVzLmV2ZXJ5KChkYXRlOiBEYXRlKSA9PiBkYXRlLmdldFRpbWUoKSAhPT0gdmFsdWVEYXRlT25seS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICAgICAgbmV3U2VsZWN0aW9uLnB1c2godmFsdWVEYXRlT25seSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IHRoaXMuc2VsZWN0ZWREYXRlcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIChkYXRlOiBEYXRlKSA9PiBkYXRlLmdldFRpbWUoKSAhPT0gdmFsdWVEYXRlT25seS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3U2VsZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSB0aGlzLnNlbGVjdGVkRGF0ZXMuY29uY2F0KG5ld1NlbGVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWREYXRlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZWxlY3RSYW5nZSh2YWx1ZTogRGF0ZSB8IERhdGVbXSwgZXhjbHVkZURpc2FibGVkRGF0ZXM6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgc3RhcnQ6IERhdGU7XG4gICAgICAgIGxldCBlbmQ6IERhdGU7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnJhbmdlU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFsdWUuc29ydCgoYTogRGF0ZSwgYjogRGF0ZSkgPT4gYS52YWx1ZU9mKCkgLSBiLnZhbHVlT2YoKSk7XG4gICAgICAgICAgICBzdGFydCA9IHRoaXMuZ2V0RGF0ZU9ubHkodmFsdWVbMF0pO1xuICAgICAgICAgICAgZW5kID0gdGhpcy5nZXREYXRlT25seSh2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSBbc3RhcnQsIC4uLnRoaXMuZ2VuZXJhdGVEYXRlUmFuZ2Uoc3RhcnQsIGVuZCldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnJhbmdlU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSBbdmFsdWVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRlc1swXS5nZXRUaW1lKCkgPT09IHZhbHVlLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh0aGlzLnNlbGVjdGVkRGF0ZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcy5zb3J0KChhOiBEYXRlLCBiOiBEYXRlKSA9PiBhLnZhbHVlT2YoKSAtIGIudmFsdWVPZigpKTtcblxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5zZWxlY3RlZERhdGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgZW5kID0gdGhpcy5zZWxlY3RlZERhdGVzLnBvcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IFtzdGFydCwgLi4udGhpcy5nZW5lcmF0ZURhdGVSYW5nZShzdGFydCwgZW5kKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhjbHVkZURpc2FibGVkRGF0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IHRoaXMuc2VsZWN0ZWREYXRlcy5maWx0ZXIoZCA9PiAhdGhpcy5pc0RhdGVEaXNhYmxlZChkKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWREYXRlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBzaW5nbGUgZGVzZWxlY3Rpb24uXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZGVzZWxlY3RTaW5nbGUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRlcyAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgdGhpcy5nZXREYXRlT25seUluTXModmFsdWUgYXMgRGF0ZSkgPT09IHRoaXMuZ2V0RGF0ZU9ubHlJbk1zKHRoaXMuc2VsZWN0ZWREYXRlcykpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWREYXRlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIG11bHRpcGxlIGRlc2VsZWN0aW9uLlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGRlc2VsZWN0TXVsdGlwbGUodmFsdWU6IERhdGVbXSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmZpbHRlcih2ID0+IHYgIT09IG51bGwpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZERhdGVzQ291bnQgPSB0aGlzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBkYXRlc0luTXNUb0Rlc2VsZWN0OiBTZXQ8bnVtYmVyPiA9IG5ldyBTZXQ8bnVtYmVyPihcbiAgICAgICAgICAgIHZhbHVlLm1hcCh2ID0+IHRoaXMuZ2V0RGF0ZU9ubHlJbk1zKHYpKSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc2VsZWN0ZWREYXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKGRhdGVzSW5Nc1RvRGVzZWxlY3QuaGFzKHRoaXMuZ2V0RGF0ZU9ubHlJbk1zKHRoaXMuc2VsZWN0ZWREYXRlc1tpXSkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICE9PSBzZWxlY3RlZERhdGVzQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy5zZWxlY3RlZERhdGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmFuZ2UgZGVzZWxlY3Rpb24uXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZGVzZWxlY3RSYW5nZSh2YWx1ZTogRGF0ZVtdKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZmlsdGVyKHYgPT4gdiAhPT0gbnVsbCk7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZS5zb3J0KChhOiBEYXRlLCBiOiBEYXRlKSA9PiBhLnZhbHVlT2YoKSAtIGIudmFsdWVPZigpKTtcbiAgICAgICAgY29uc3QgdmFsdWVTdGFydCA9IHRoaXMuZ2V0RGF0ZU9ubHlJbk1zKHZhbHVlWzBdKTtcbiAgICAgICAgY29uc3QgdmFsdWVFbmQgPSB0aGlzLmdldERhdGVPbmx5SW5Ncyh2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVzLnNvcnQoKGE6IERhdGUsIGI6IERhdGUpID0+IGEudmFsdWVPZigpIC0gYi52YWx1ZU9mKCkpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZERhdGVzU3RhcnQgPSB0aGlzLmdldERhdGVPbmx5SW5Ncyh0aGlzLnNlbGVjdGVkRGF0ZXNbMF0pO1xuICAgICAgICBjb25zdCBzZWxlY3RlZERhdGVzRW5kID0gdGhpcy5nZXREYXRlT25seUluTXModGhpcy5zZWxlY3RlZERhdGVzW3RoaXMuc2VsZWN0ZWREYXRlcy5sZW5ndGggLSAxXSk7XG5cbiAgICAgICAgaWYgKCEodmFsdWVFbmQgPCBzZWxlY3RlZERhdGVzU3RhcnQpICYmICEodmFsdWVTdGFydCA+IHNlbGVjdGVkRGF0ZXNFbmQpKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucmFuZ2VTdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWREYXRlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRGb3JtYXR0ZXJzKCkge1xuICAgICAgICB0aGlzLmZvcm1hdHRlckRheSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMuX2xvY2FsZSwgeyBkYXk6IHRoaXMuX2Zvcm1hdE9wdGlvbnMuZGF5IH0pO1xuICAgICAgICB0aGlzLmZvcm1hdHRlcldlZWtkYXkgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLl9sb2NhbGUsIHsgd2Vla2RheTogdGhpcy5fZm9ybWF0T3B0aW9ucy53ZWVrZGF5IH0pO1xuICAgICAgICB0aGlzLmZvcm1hdHRlck1vbnRoID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5fbG9jYWxlLCB7IG1vbnRoOiB0aGlzLl9mb3JtYXRPcHRpb25zLm1vbnRoIH0pO1xuICAgICAgICB0aGlzLmZvcm1hdHRlclllYXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLl9sb2NhbGUsIHsgeWVhcjogdGhpcy5fZm9ybWF0T3B0aW9ucy55ZWFyIH0pO1xuICAgICAgICB0aGlzLmZvcm1hdHRlck1vbnRoZGF5ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5fbG9jYWxlLCB7IG1vbnRoOiB0aGlzLl9mb3JtYXRPcHRpb25zLm1vbnRoLCBkYXk6IHRoaXMuX2Zvcm1hdE9wdGlvbnMuZGF5IH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXREYXRlT25seShkYXRlOiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHY6IERhdGUpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IERhdGUgfCBEYXRlW10pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgYSBkYXRlIGlzIGRpc2FibGVkLlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNEYXRlRGlzYWJsZWQoZGF0ZTogRGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZERhdGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNEYXRlSW5SYW5nZXMoZGF0ZSwgdGhpcy5kaXNhYmxlZERhdGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIGRhdGUocykgKGJhc2VkIG9uIHRoZSBzZWxlY3Rpb24gdHlwZSkuXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdERhdGUodmFsdWU6IERhdGUgfCBEYXRlW10pIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBDYWxlbmRhclNlbGVjdGlvbi5TSU5HTEU6XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RTaW5nbGUodmFsdWUgYXMgRGF0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENhbGVuZGFyU2VsZWN0aW9uLk1VTFRJOlxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0TXVsdGlwbGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDYWxlbmRhclNlbGVjdGlvbi5SQU5HRTpcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFJhbmdlKHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VsZWN0cyBkYXRlKHMpIChiYXNlZCBvbiB0aGUgc2VsZWN0aW9uIHR5cGUpLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNlbGVjdERhdGUodmFsdWU/OiBEYXRlIHwgRGF0ZVtdKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0ZXMgPT09IG51bGwgfHwgdGhpcy5zZWxlY3RlZERhdGVzID09PSBbXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IHRoaXMuc2VsZWN0aW9uID09PSBDYWxlbmRhclNlbGVjdGlvbi5TSU5HTEUgPyBudWxsIDogW107XG4gICAgICAgICAgICB0aGlzLnJhbmdlU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh0aGlzLnNlbGVjdGVkRGF0ZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBDYWxlbmRhclNlbGVjdGlvbi5TSU5HTEU6XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNlbGVjdFNpbmdsZSh2YWx1ZSBhcyBEYXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ2FsZW5kYXJTZWxlY3Rpb24uTVVMVEk6XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNlbGVjdE11bHRpcGxlKHZhbHVlIGFzIERhdGVbXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENhbGVuZGFyU2VsZWN0aW9uLlJBTkdFOlxuICAgICAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RSYW5nZSh2YWx1ZSBhcyBEYXRlW10pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3REYXRlRnJvbUNsaWVudCh2YWx1ZTogRGF0ZSkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIENhbGVuZGFyU2VsZWN0aW9uLlNJTkdMRTpcbiAgICAgICAgICAgIGNhc2UgQ2FsZW5kYXJTZWxlY3Rpb24uTVVMVEk6XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzRGF0ZURpc2FibGVkKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdERhdGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDYWxlbmRhclNlbGVjdGlvbi5SQU5HRTpcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFJhbmdlKHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==