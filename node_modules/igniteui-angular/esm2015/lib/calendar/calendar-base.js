/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, Output, EventEmitter } from '@angular/core';
import { Calendar, isDateInRanges } from './calendar';
import { Subject } from 'rxjs';
/** @enum {string} */
const CalendarSelection = {
    SINGLE: 'single',
    MULTI: 'multi',
    RANGE: 'range',
};
export { CalendarSelection };
/** @enum {string} */
const ScrollMonth = {
    PREV: 'prev',
    NEXT: 'next',
    NONE: 'none',
};
export { ScrollMonth };
export class IgxCalendarBase {
    /**
     * @hidden
     */
    constructor() {
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
        this._onTouchedCallback = () => { };
        /**
         * @hidden
         */
        this._onChangeCallback = () => { };
        this.calendarModel = new Calendar();
        this.viewDate = this.viewDate ? this.viewDate : new Date();
        this.calendarModel.firstWeekDay = this.weekStart;
        this.initFormatters();
    }
    /**
     * Gets the start day of the week.
     * Can return a numeric or an enum representation of the week day.
     * Defaults to `Sunday` / `0`.
     * @return {?}
     */
    get weekStart() {
        return this.calendarModel.firstWeekDay;
    }
    /**
     * Sets the start day of the week.
     * Can be assigned to a numeric value or to `WEEKDAYS` enum value.
     * @param {?} value
     * @return {?}
     */
    set weekStart(value) {
        this.calendarModel.firstWeekDay = value;
    }
    /**
     * Gets the `locale` of the calendar.
     * Default value is `"en"`.
     * @return {?}
     */
    get locale() {
        return this._locale;
    }
    /**
     * Sets the `locale` of the calendar.
     * Expects a valid BCP 47 language tag.
     * Default value is `"en"`.
     * @param {?} value
     * @return {?}
     */
    set locale(value) {
        this._locale = value;
        this.initFormatters();
    }
    /**
     * Gets the date format options of the days view.
     * @return {?}
     */
    get formatOptions() {
        return this._formatOptions;
    }
    /**
     * Sets the date format options of the days view.
     * Default is { day: 'numeric', month: 'short', weekday: 'short', year: 'numeric' }
     * @param {?} formatOptions
     * @return {?}
     */
    set formatOptions(formatOptions) {
        this._formatOptions = Object.assign(this._formatOptions, formatOptions);
        this.initFormatters();
    }
    /**
     * Gets whether the `day`, `month` and `year` should be rendered
     * according to the locale and formatOptions, if any.
     * @return {?}
     */
    get formatViews() {
        return this._formatViews;
    }
    /**
     * Gets whether the `day`, `month` and `year` should be rendered
     * according to the locale and formatOptions, if any.
     * @param {?} formatViews
     * @return {?}
     */
    set formatViews(formatViews) {
        this._formatViews = Object.assign(this._formatViews, formatViews);
    }
    /**
     *
     * Gets the selection type.
     * Default value is `"single"`.
     * Changing the type of selection resets the currently
     * selected values if any.
     * @return {?}
     */
    get selection() {
        return this._selection;
    }
    /**
     * Sets the selection.
     * @param {?} value
     * @return {?}
     */
    set selection(value) {
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
    }
    /**
     * Gets the selected date(s).
     *
     * When selection is set to `single`, it returns
     * a single `Date` object.
     * Otherwise it is an array of `Date` objects.
     * @return {?}
     */
    get value() {
        return this.selectedDates;
    }
    /**
     * Sets the selected date(s).
     *
     * When selection is set to `single`, it accepts
     * a single `Date` object.
     * Otherwise it is an array of `Date` objects.
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this.selectDate(value);
    }
    /**
     * Gets the date that is presented.
     * By default it is the current date.
     * @return {?}
     */
    get viewDate() {
        return this._viewDate;
    }
    /**
     * Sets the date that will be presented in the default view when the component renders.
     * @param {?} value
     * @return {?}
     */
    set viewDate(value) {
        this._viewDate = this.getDateOnly(value);
    }
    /**
     * Gets the disabled dates descriptors.
     * @return {?}
     */
    get disabledDates() {
        return this._disabledDates;
    }
    /**
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
    set disabledDates(value) {
        this._disabledDates = value;
    }
    /**
     * Gets the special dates descriptors.
     * @return {?}
     */
    get specialDates() {
        return this._specialDates;
    }
    /**
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
    set specialDates(value) {
        this._specialDates = value;
    }
    /**
     * @hidden
     * @private
     * @param {?} date
     * @return {?}
     */
    getDateOnlyInMs(date) {
        return this.getDateOnly(date).getTime();
    }
    /**
     * @hidden
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    generateDateRange(start, end) {
        /** @type {?} */
        const result = [];
        start = this.getDateOnly(start);
        end = this.getDateOnly(end);
        while (start.getTime() !== end.getTime()) {
            start = this.calendarModel.timedelta(start, 'day', 1);
            result.push(start);
        }
        return result;
    }
    /**
     * Performs a single selection.
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    selectSingle(value) {
        this.selectedDates = this.getDateOnly(value);
        this._onChangeCallback(this.selectedDates);
    }
    /**
     * Performs a multiple selection
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    selectMultiple(value) {
        if (Array.isArray(value)) {
            this.selectedDates = this.selectedDates.concat(value.map(v => this.getDateOnly(v)));
        }
        else {
            /** @type {?} */
            const valueDateOnly = this.getDateOnly(value);
            /** @type {?} */
            const newSelection = [];
            if (this.selectedDates.every((date) => date.getTime() !== valueDateOnly.getTime())) {
                newSelection.push(valueDateOnly);
            }
            else {
                this.selectedDates = this.selectedDates.filter((date) => date.getTime() !== valueDateOnly.getTime());
            }
            if (newSelection.length > 0) {
                this.selectedDates = this.selectedDates.concat(newSelection);
            }
        }
        this._onChangeCallback(this.selectedDates);
    }
    /**
     * @hidden
     * @private
     * @param {?} value
     * @param {?=} excludeDisabledDates
     * @return {?}
     */
    selectRange(value, excludeDisabledDates = false) {
        /** @type {?} */
        let start;
        /** @type {?} */
        let end;
        if (Array.isArray(value)) {
            // this.rangeStarted = false;
            value.sort((a, b) => a.valueOf() - b.valueOf());
            start = this.getDateOnly(value[0]);
            end = this.getDateOnly(value[value.length - 1]);
            this.selectedDates = [start, ...this.generateDateRange(start, end)];
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
                this.selectedDates.sort((a, b) => a.valueOf() - b.valueOf());
                start = this.selectedDates.shift();
                end = this.selectedDates.pop();
                this.selectedDates = [start, ...this.generateDateRange(start, end)];
            }
        }
        if (excludeDisabledDates) {
            this.selectedDates = this.selectedDates.filter(d => !this.isDateDisabled(d));
        }
        this._onChangeCallback(this.selectedDates);
    }
    /**
     * Performs a single deselection.
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    deselectSingle(value) {
        if (this.selectedDates !== null &&
            this.getDateOnlyInMs((/** @type {?} */ (value))) === this.getDateOnlyInMs(this.selectedDates)) {
            this.selectedDates = null;
            this._onChangeCallback(this.selectedDates);
        }
    }
    /**
     * Performs a multiple deselection.
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    deselectMultiple(value) {
        value = value.filter(v => v !== null);
        /** @type {?} */
        const selectedDatesCount = this.selectedDates.length;
        /** @type {?} */
        const datesInMsToDeselect = new Set(value.map(v => this.getDateOnlyInMs(v)));
        for (let i = this.selectedDates.length - 1; i >= 0; i--) {
            if (datesInMsToDeselect.has(this.getDateOnlyInMs(this.selectedDates[i]))) {
                this.selectedDates.splice(i, 1);
            }
        }
        if (this.selectedDates.length !== selectedDatesCount) {
            this._onChangeCallback(this.selectedDates);
        }
    }
    /**
     * Performs a range deselection.
     * @hidden
     * @private
     * @param {?} value
     * @return {?}
     */
    deselectRange(value) {
        value = value.filter(v => v !== null);
        if (value.length < 1) {
            return;
        }
        value.sort((a, b) => a.valueOf() - b.valueOf());
        /** @type {?} */
        const valueStart = this.getDateOnlyInMs(value[0]);
        /** @type {?} */
        const valueEnd = this.getDateOnlyInMs(value[value.length - 1]);
        this.selectedDates.sort((a, b) => a.valueOf() - b.valueOf());
        /** @type {?} */
        const selectedDatesStart = this.getDateOnlyInMs(this.selectedDates[0]);
        /** @type {?} */
        const selectedDatesEnd = this.getDateOnlyInMs(this.selectedDates[this.selectedDates.length - 1]);
        if (!(valueEnd < selectedDatesStart) && !(valueStart > selectedDatesEnd)) {
            this.selectedDates = [];
            this.rangeStarted = false;
            this._onChangeCallback(this.selectedDates);
        }
    }
    /**
     * @hidden
     * @protected
     * @return {?}
     */
    initFormatters() {
        this.formatterDay = new Intl.DateTimeFormat(this._locale, { day: this._formatOptions.day });
        this.formatterWeekday = new Intl.DateTimeFormat(this._locale, { weekday: this._formatOptions.weekday });
        this.formatterMonth = new Intl.DateTimeFormat(this._locale, { month: this._formatOptions.month });
        this.formatterYear = new Intl.DateTimeFormat(this._locale, { year: this._formatOptions.year });
        this.formatterMonthday = new Intl.DateTimeFormat(this._locale, { month: this._formatOptions.month, day: this._formatOptions.day });
    }
    /**
     * @hidden
     * @protected
     * @param {?} date
     * @return {?}
     */
    getDateOnly(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    /**
     * @hidden
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouchedCallback = fn;
    }
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.selectedDates = value;
    }
    /**
     * Checks whether a date is disabled.
     * @hidden
     * @param {?} date
     * @return {?}
     */
    isDateDisabled(date) {
        if (this.disabledDates === null) {
            return false;
        }
        return isDateInRanges(date, this.disabledDates);
    }
    /**
     * Selects date(s) (based on the selection type).
     * @param {?} value
     * @return {?}
     */
    selectDate(value) {
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
    }
    /**
     * Deselects date(s) (based on the selection type).
     * @param {?=} value
     * @return {?}
     */
    deselectDate(value) {
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
    }
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    selectDateFromClient(value) {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXItYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBWSxRQUFRLEVBQUUsY0FBYyxFQUF3QyxNQUFNLFlBQVksQ0FBQztBQUd0RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7SUFNM0IsUUFBUyxRQUFRO0lBQ2pCLE9BQVEsT0FBTztJQUNmLE9BQVEsT0FBTzs7Ozs7SUFJZixNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07OztBQUdqQixNQUFNLE9BQU8sZUFBZTs7OztJQTBUeEI7Ozs7O1FBdEhPLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7Ozs7UUFLL0MsZUFBVSxHQUErQixpQkFBaUIsQ0FBQyxNQUFNLENBQUM7Ozs7UUFLbEUsaUJBQVksR0FBRyxLQUFLLENBQUM7Ozs7UUFLckIsWUFBTyxHQUFHLElBQUksQ0FBQzs7OztRQVVmLG1CQUFjLEdBQTBCLElBQUksQ0FBQzs7OztRQUs3QyxrQkFBYSxHQUEwQixJQUFJLENBQUM7Ozs7UUFLNUMsbUJBQWMsR0FBdUI7WUFDekMsR0FBRyxFQUFFLFNBQVM7WUFDZCxLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLElBQUksRUFBRSxTQUFTO1NBQ2xCLENBQUM7Ozs7UUFLTSxpQkFBWSxHQUFxQjtZQUNyQyxHQUFHLEVBQUUsS0FBSztZQUNWLEtBQUssRUFBRSxJQUFJO1lBQ1gsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDOzs7O1FBbUNLLHlCQUFvQixHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7Ozs7UUFLeEMsaUJBQVksR0FB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Z0NMLEtBQUs7dUJBb0JMLEtBQUs7NEJBZUwsS0FBSzsyQkF3QkwsS0FBSzswQkF5QkwsTUFBTTs7Ozs7Ozs7SUFBUCxzQ0FDdUQ7Ozs7OztJQUt2RCxxQ0FBMEU7Ozs7OztJQUsxRSx1Q0FBNkI7Ozs7OztJQUs3QixrQ0FBdUI7Ozs7OztJQUt2QixvQ0FBd0I7Ozs7OztJQUt4Qix5Q0FBcUQ7Ozs7OztJQUtyRCx3Q0FBb0Q7Ozs7OztJQUtwRCx5Q0FLRTs7Ozs7O0lBS0YsdUNBSUU7Ozs7OztJQUtGLDJDQUEyQjs7Ozs7O0lBSzNCLHVDQUF1Qjs7Ozs7O0lBS3ZCLHlDQUF5Qjs7Ozs7O0lBS3pCLHdDQUF3Qjs7Ozs7O0lBS3hCLDRDQUE0Qjs7Ozs7SUFLNUIsd0NBQStCOzs7OztJQUsvQiwrQ0FBK0M7Ozs7O0lBSy9DLHVDQUFvQzs7Ozs7SUFLcEMsMkNBQWlEOzs7OztJQUtqRCw0Q0FBeUM7Ozs7O0lBS3pDLHdDQUFxQjs7Ozs7O0lBS3JCLDZDQUFxRDs7Ozs7O0lBSXJELDRDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV0VFS0RBWVMsIENhbGVuZGFyLCBpc0RhdGVJblJhbmdlcywgSUZvcm1hdHRpbmdPcHRpb25zLCBJRm9ybWF0dGluZ1ZpZXdzIH0gZnJvbSAnLi9jYWxlbmRhcic7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGVSYW5nZURlc2NyaXB0b3IgfSBmcm9tICcuLi9jb3JlL2RhdGVzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBTZXRzIHRoZSBzZWxjdGlvbiB0eXBlIC0gc2luZ2xlLCBtdWx0aSBvciByYW5nZS5cbiAqL1xuZXhwb3J0IGVudW0gQ2FsZW5kYXJTZWxlY3Rpb24ge1xuICAgIFNJTkdMRSA9ICdzaW5nbGUnLFxuICAgIE1VTFRJID0gJ211bHRpJyxcbiAgICBSQU5HRSA9ICdyYW5nZSdcbn1cblxuZXhwb3J0IGVudW0gU2Nyb2xsTW9udGgge1xuICAgIFBSRVYgPSAncHJldicsXG4gICAgTkVYVCA9ICduZXh0JyxcbiAgICBOT05FID0gJ25vbmUnXG59XG5cbmV4cG9ydCBjbGFzcyBJZ3hDYWxlbmRhckJhc2UgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc3RhcnQgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAqIENhbiByZXR1cm4gYSBudW1lcmljIG9yIGFuIGVudW0gcmVwcmVzZW50YXRpb24gb2YgdGhlIHdlZWsgZGF5LlxuICAgICAqIERlZmF1bHRzIHRvIGBTdW5kYXlgIC8gYDBgLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB3ZWVrU3RhcnQoKTogV0VFS0RBWVMgfCBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxlbmRhck1vZGVsLmZpcnN0V2Vla0RheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzdGFydCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICogQ2FuIGJlIGFzc2lnbmVkIHRvIGEgbnVtZXJpYyB2YWx1ZSBvciB0byBgV0VFS0RBWVNgIGVudW0gdmFsdWUuXG4gICAgICovXG4gICAgcHVibGljIHNldCB3ZWVrU3RhcnQodmFsdWU6IFdFRUtEQVlTIHwgbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJNb2RlbC5maXJzdFdlZWtEYXkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBgbG9jYWxlYCBvZiB0aGUgY2FsZW5kYXIuXG4gICAgICogRGVmYXVsdCB2YWx1ZSBpcyBgXCJlblwiYC5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgbG9jYWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYGxvY2FsZWAgb2YgdGhlIGNhbGVuZGFyLlxuICAgICAqIEV4cGVjdHMgYSB2YWxpZCBCQ1AgNDcgbGFuZ3VhZ2UgdGFnLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYFwiZW5cImAuXG4gICAgICovXG4gICAgcHVibGljIHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9sb2NhbGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5pbml0Rm9ybWF0dGVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGRhdGUgZm9ybWF0IG9wdGlvbnMgb2YgdGhlIGRheXMgdmlldy5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZm9ybWF0T3B0aW9ucygpOiBJRm9ybWF0dGluZ09wdGlvbnMge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0T3B0aW9ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkYXRlIGZvcm1hdCBvcHRpb25zIG9mIHRoZSBkYXlzIHZpZXcuXG4gICAgICogRGVmYXVsdCBpcyB7IGRheTogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0Jywgd2Vla2RheTogJ3Nob3J0JywgeWVhcjogJ251bWVyaWMnIH1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGZvcm1hdE9wdGlvbnMoZm9ybWF0T3B0aW9uczogSUZvcm1hdHRpbmdPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX2Zvcm1hdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMuX2Zvcm1hdE9wdGlvbnMsIGZvcm1hdE9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRGb3JtYXR0ZXJzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBgZGF5YCwgYG1vbnRoYCBhbmQgYHllYXJgIHNob3VsZCBiZSByZW5kZXJlZFxuICAgICAqIGFjY29yZGluZyB0byB0aGUgbG9jYWxlIGFuZCBmb3JtYXRPcHRpb25zLCBpZiBhbnkuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGZvcm1hdFZpZXdzKCk6IElGb3JtYXR0aW5nVmlld3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0Vmlld3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIHRoZSBgZGF5YCwgYG1vbnRoYCBhbmQgYHllYXJgIHNob3VsZCBiZSByZW5kZXJlZFxuICAgICAqIGFjY29yZGluZyB0byB0aGUgbG9jYWxlIGFuZCBmb3JtYXRPcHRpb25zLCBpZiBhbnkuXG4gICAgICovXG4gICAgcHVibGljIHNldCBmb3JtYXRWaWV3cyhmb3JtYXRWaWV3czogSUZvcm1hdHRpbmdWaWV3cykge1xuICAgICAgICB0aGlzLl9mb3JtYXRWaWV3cyA9IE9iamVjdC5hc3NpZ24odGhpcy5fZm9ybWF0Vmlld3MsIGZvcm1hdFZpZXdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGlvbiB0eXBlLlxuICAgICAqIERlZmF1bHQgdmFsdWUgaXMgYFwic2luZ2xlXCJgLlxuICAgICAqIENoYW5naW5nIHRoZSB0eXBlIG9mIHNlbGVjdGlvbiByZXNldHMgdGhlIGN1cnJlbnRseVxuICAgICAqIHNlbGVjdGVkIHZhbHVlcyBpZiBhbnkuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGlvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHNlbGVjdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgQ2FsZW5kYXJTZWxlY3Rpb24uU0lOR0xFOlxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENhbGVuZGFyU2VsZWN0aW9uLk1VTFRJOlxuICAgICAgICAgICAgY2FzZSBDYWxlbmRhclNlbGVjdGlvbi5SQU5HRTpcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNlbGVjdGlvbiB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy5zZWxlY3RlZERhdGVzKTtcbiAgICAgICAgdGhpcy5yYW5nZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgZGF0ZShzKS5cbiAgICAgKlxuICAgICAqIFdoZW4gc2VsZWN0aW9uIGlzIHNldCB0byBgc2luZ2xlYCwgaXQgcmV0dXJuc1xuICAgICAqIGEgc2luZ2xlIGBEYXRlYCBvYmplY3QuXG4gICAgICogT3RoZXJ3aXNlIGl0IGlzIGFuIGFycmF5IG9mIGBEYXRlYCBvYmplY3RzLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBEYXRlIHwgRGF0ZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWREYXRlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzZWxlY3RlZCBkYXRlKHMpLlxuICAgICAqXG4gICAgICogV2hlbiBzZWxlY3Rpb24gaXMgc2V0IHRvIGBzaW5nbGVgLCBpdCBhY2NlcHRzXG4gICAgICogYSBzaW5nbGUgYERhdGVgIG9iamVjdC5cbiAgICAgKiBPdGhlcndpc2UgaXQgaXMgYW4gYXJyYXkgb2YgYERhdGVgIG9iamVjdHMuXG4gICAgICovXG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZSB8IERhdGVbXSkge1xuICAgICAgICB0aGlzLnNlbGVjdERhdGUodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGRhdGUgdGhhdCBpcyBwcmVzZW50ZWQuXG4gICAgICogQnkgZGVmYXVsdCBpdCBpcyB0aGUgY3VycmVudCBkYXRlLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB2aWV3RGF0ZSgpOiBEYXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdEYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRhdGUgdGhhdCB3aWxsIGJlIHByZXNlbnRlZCBpbiB0aGUgZGVmYXVsdCB2aWV3IHdoZW4gdGhlIGNvbXBvbmVudCByZW5kZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgdmlld0RhdGUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgdGhpcy5fdmlld0RhdGUgPSB0aGlzLmdldERhdGVPbmx5KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBkaXNhYmxlZCBkYXRlcyBkZXNjcmlwdG9ycy5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZGlzYWJsZWREYXRlcygpOiBEYXRlUmFuZ2VEZXNjcmlwdG9yW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWREYXRlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkaXNhYmxlZCBkYXRlcycgZGVzY3JpcHRvcnMuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqQFZpZXdDaGlsZChcIk15Q2FsZW5kYXJcIilcbiAgICAgKnB1YmxpYyBjYWxlbmRhcjogSWd4Q2FsZW5kYXJDb21wb25lbnQ7XG4gICAgICpuZ09uSW5pdCgpe1xuICAgICAqICAgIHRoaXMuY2FsZW5kYXIuZGlzYWJsZWREYXRlcyA9IFtcbiAgICAgKiAgICAge3R5cGU6IERhdGVSYW5nZVR5cGUuQmV0d2VlbiwgZGF0ZVJhbmdlOiBbbmV3IERhdGUoXCIyMDIwLTEtMVwiKSwgbmV3IERhdGUoXCIyMDIwLTEtMTVcIildfSxcbiAgICAgKiAgICAge3R5cGU6IERhdGVSYW5nZVR5cGUuV2Vla2VuZHN9XTtcbiAgICAgKn1cbiAgICAgKmBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgZGlzYWJsZWREYXRlcyh2YWx1ZTogRGF0ZVJhbmdlRGVzY3JpcHRvcltdKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkRGF0ZXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzcGVjaWFsIGRhdGVzIGRlc2NyaXB0b3JzLlxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBzcGVjaWFsRGF0ZXMoKTogRGF0ZVJhbmdlRGVzY3JpcHRvcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwZWNpYWxEYXRlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzcGVjaWFsIGRhdGVzJyBkZXNjcmlwdG9ycy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICpAVmlld0NoaWxkKFwiTXlDYWxlbmRhclwiKVxuICAgICAqcHVibGljIGNhbGVuZGFyOiBJZ3hDYWxlbmRhckNvbXBvbmVudDtcbiAgICAgKm5nT25Jbml0KCl7XG4gICAgICogICAgdGhpcy5jYWxlbmRhci5zcGVjaWFsRGF0ZXMgPSBbXG4gICAgICogICAgIHt0eXBlOiBEYXRlUmFuZ2VUeXBlLkJldHdlZW4sIGRhdGVSYW5nZTogW25ldyBEYXRlKFwiMjAyMC0xLTFcIiksIG5ldyBEYXRlKFwiMjAyMC0xLTE1XCIpXX0sXG4gICAgICogICAgIHt0eXBlOiBEYXRlUmFuZ2VUeXBlLldlZWtlbmRzfV07XG4gICAgICp9XG4gICAgICpgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHNwZWNpYWxEYXRlcyh2YWx1ZTogRGF0ZVJhbmdlRGVzY3JpcHRvcltdKSB7XG4gICAgICAgIHRoaXMuX3NwZWNpYWxEYXRlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gYSBkYXRlIGlzIHNlbGVjdGVkLlxuICAgICAqIFByb3ZpZGVzIHJlZmVyZW5jZSB0aGUgYHNlbGVjdGVkRGF0ZXNgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZSB8IERhdGVbXT4oKTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX3NlbGVjdGlvbjogQ2FsZW5kYXJTZWxlY3Rpb24gfCBzdHJpbmcgPSBDYWxlbmRhclNlbGVjdGlvbi5TSU5HTEU7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIHJhbmdlU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgKkBoaWRkZW5cbiAgICAqL1xuICAgIHByaXZhdGUgX2xvY2FsZSA9ICdlbic7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF92aWV3RGF0ZTogRGF0ZTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2Rpc2FibGVkRGF0ZXM6IERhdGVSYW5nZURlc2NyaXB0b3JbXSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9zcGVjaWFsRGF0ZXM6IERhdGVSYW5nZURlc2NyaXB0b3JbXSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9mb3JtYXRPcHRpb25zOiBJRm9ybWF0dGluZ09wdGlvbnMgPSB7XG4gICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgd2Vla2RheTogJ3Nob3J0JyxcbiAgICAgICAgeWVhcjogJ251bWVyaWMnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgX2Zvcm1hdFZpZXdzOiBJRm9ybWF0dGluZ1ZpZXdzID0ge1xuICAgICAgICBkYXk6IGZhbHNlLFxuICAgICAgICBtb250aDogdHJ1ZSxcbiAgICAgICAgeWVhcjogZmFsc2VcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZvcm1hdHRlcldlZWtkYXk7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZm9ybWF0dGVyRGF5O1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZvcm1hdHRlck1vbnRoO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZvcm1hdHRlclllYXI7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZm9ybWF0dGVyTW9udGhkYXk7XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2FsZW5kYXJNb2RlbDogQ2FsZW5kYXI7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG1vbnRoU2Nyb2xsRGlyZWN0aW9uID0gU2Nyb2xsTW9udGguTk9ORTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzY3JvbGxNb250aCQgPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHN0b3BNb250aFNjcm9sbCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHN0YXJ0TW9udGhTY3JvbGwkID0gbmV3IFN1YmplY3QoKTtcblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RlZERhdGVzO1xuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9vblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4geyB9O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbGVuZGFyTW9kZWwgPSBuZXcgQ2FsZW5kYXIoKTtcblxuICAgICAgICB0aGlzLnZpZXdEYXRlID0gdGhpcy52aWV3RGF0ZSA/IHRoaXMudmlld0RhdGUgOiBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuY2FsZW5kYXJNb2RlbC5maXJzdFdlZWtEYXkgPSB0aGlzLndlZWtTdGFydDtcbiAgICAgICAgdGhpcy5pbml0Rm9ybWF0dGVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0RGF0ZU9ubHlJbk1zKGRhdGU6IERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0ZU9ubHkoZGF0ZSkuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZ2VuZXJhdGVEYXRlUmFuZ2Uoc3RhcnQ6IERhdGUsIGVuZDogRGF0ZSk6IERhdGVbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBzdGFydCA9IHRoaXMuZ2V0RGF0ZU9ubHkoc3RhcnQpO1xuICAgICAgICBlbmQgPSB0aGlzLmdldERhdGVPbmx5KGVuZCk7XG4gICAgICAgIHdoaWxlIChzdGFydC5nZXRUaW1lKCkgIT09IGVuZC5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5jYWxlbmRhck1vZGVsLnRpbWVkZWx0YShzdGFydCwgJ2RheScsIDEpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goc3RhcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHNpbmdsZSBzZWxlY3Rpb24uXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgc2VsZWN0U2luZ2xlKHZhbHVlOiBEYXRlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IHRoaXMuZ2V0RGF0ZU9ubHkodmFsdWUpO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWREYXRlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBtdWx0aXBsZSBzZWxlY3Rpb25cbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZWxlY3RNdWx0aXBsZSh2YWx1ZTogRGF0ZSB8IERhdGVbXSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IHRoaXMuc2VsZWN0ZWREYXRlcy5jb25jYXQodmFsdWUubWFwKHYgPT4gdGhpcy5nZXREYXRlT25seSh2KSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVEYXRlT25seSA9IHRoaXMuZ2V0RGF0ZU9ubHkodmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gW107XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGVzLmV2ZXJ5KChkYXRlOiBEYXRlKSA9PiBkYXRlLmdldFRpbWUoKSAhPT0gdmFsdWVEYXRlT25seS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICAgICAgbmV3U2VsZWN0aW9uLnB1c2godmFsdWVEYXRlT25seSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IHRoaXMuc2VsZWN0ZWREYXRlcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIChkYXRlOiBEYXRlKSA9PiBkYXRlLmdldFRpbWUoKSAhPT0gdmFsdWVEYXRlT25seS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3U2VsZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSB0aGlzLnNlbGVjdGVkRGF0ZXMuY29uY2F0KG5ld1NlbGVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWREYXRlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZWxlY3RSYW5nZSh2YWx1ZTogRGF0ZSB8IERhdGVbXSwgZXhjbHVkZURpc2FibGVkRGF0ZXM6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgc3RhcnQ6IERhdGU7XG4gICAgICAgIGxldCBlbmQ6IERhdGU7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnJhbmdlU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFsdWUuc29ydCgoYTogRGF0ZSwgYjogRGF0ZSkgPT4gYS52YWx1ZU9mKCkgLSBiLnZhbHVlT2YoKSk7XG4gICAgICAgICAgICBzdGFydCA9IHRoaXMuZ2V0RGF0ZU9ubHkodmFsdWVbMF0pO1xuICAgICAgICAgICAgZW5kID0gdGhpcy5nZXREYXRlT25seSh2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSBbc3RhcnQsIC4uLnRoaXMuZ2VuZXJhdGVEYXRlUmFuZ2Uoc3RhcnQsIGVuZCldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnJhbmdlU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSBbdmFsdWVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRlc1swXS5nZXRUaW1lKCkgPT09IHZhbHVlLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh0aGlzLnNlbGVjdGVkRGF0ZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcy5zb3J0KChhOiBEYXRlLCBiOiBEYXRlKSA9PiBhLnZhbHVlT2YoKSAtIGIudmFsdWVPZigpKTtcblxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5zZWxlY3RlZERhdGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgZW5kID0gdGhpcy5zZWxlY3RlZERhdGVzLnBvcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IFtzdGFydCwgLi4udGhpcy5nZW5lcmF0ZURhdGVSYW5nZShzdGFydCwgZW5kKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhjbHVkZURpc2FibGVkRGF0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IHRoaXMuc2VsZWN0ZWREYXRlcy5maWx0ZXIoZCA9PiAhdGhpcy5pc0RhdGVEaXNhYmxlZChkKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWREYXRlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBzaW5nbGUgZGVzZWxlY3Rpb24uXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZGVzZWxlY3RTaW5nbGUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRlcyAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgdGhpcy5nZXREYXRlT25seUluTXModmFsdWUgYXMgRGF0ZSkgPT09IHRoaXMuZ2V0RGF0ZU9ubHlJbk1zKHRoaXMuc2VsZWN0ZWREYXRlcykpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWREYXRlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIG11bHRpcGxlIGRlc2VsZWN0aW9uLlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGRlc2VsZWN0TXVsdGlwbGUodmFsdWU6IERhdGVbXSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmZpbHRlcih2ID0+IHYgIT09IG51bGwpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZERhdGVzQ291bnQgPSB0aGlzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBkYXRlc0luTXNUb0Rlc2VsZWN0OiBTZXQ8bnVtYmVyPiA9IG5ldyBTZXQ8bnVtYmVyPihcbiAgICAgICAgICAgIHZhbHVlLm1hcCh2ID0+IHRoaXMuZ2V0RGF0ZU9ubHlJbk1zKHYpKSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc2VsZWN0ZWREYXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKGRhdGVzSW5Nc1RvRGVzZWxlY3QuaGFzKHRoaXMuZ2V0RGF0ZU9ubHlJbk1zKHRoaXMuc2VsZWN0ZWREYXRlc1tpXSkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICE9PSBzZWxlY3RlZERhdGVzQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy5zZWxlY3RlZERhdGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmFuZ2UgZGVzZWxlY3Rpb24uXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZGVzZWxlY3RSYW5nZSh2YWx1ZTogRGF0ZVtdKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZmlsdGVyKHYgPT4gdiAhPT0gbnVsbCk7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZS5zb3J0KChhOiBEYXRlLCBiOiBEYXRlKSA9PiBhLnZhbHVlT2YoKSAtIGIudmFsdWVPZigpKTtcbiAgICAgICAgY29uc3QgdmFsdWVTdGFydCA9IHRoaXMuZ2V0RGF0ZU9ubHlJbk1zKHZhbHVlWzBdKTtcbiAgICAgICAgY29uc3QgdmFsdWVFbmQgPSB0aGlzLmdldERhdGVPbmx5SW5Ncyh2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVzLnNvcnQoKGE6IERhdGUsIGI6IERhdGUpID0+IGEudmFsdWVPZigpIC0gYi52YWx1ZU9mKCkpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZERhdGVzU3RhcnQgPSB0aGlzLmdldERhdGVPbmx5SW5Ncyh0aGlzLnNlbGVjdGVkRGF0ZXNbMF0pO1xuICAgICAgICBjb25zdCBzZWxlY3RlZERhdGVzRW5kID0gdGhpcy5nZXREYXRlT25seUluTXModGhpcy5zZWxlY3RlZERhdGVzW3RoaXMuc2VsZWN0ZWREYXRlcy5sZW5ndGggLSAxXSk7XG5cbiAgICAgICAgaWYgKCEodmFsdWVFbmQgPCBzZWxlY3RlZERhdGVzU3RhcnQpICYmICEodmFsdWVTdGFydCA+IHNlbGVjdGVkRGF0ZXNFbmQpKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucmFuZ2VTdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWREYXRlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRGb3JtYXR0ZXJzKCkge1xuICAgICAgICB0aGlzLmZvcm1hdHRlckRheSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMuX2xvY2FsZSwgeyBkYXk6IHRoaXMuX2Zvcm1hdE9wdGlvbnMuZGF5IH0pO1xuICAgICAgICB0aGlzLmZvcm1hdHRlcldlZWtkYXkgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLl9sb2NhbGUsIHsgd2Vla2RheTogdGhpcy5fZm9ybWF0T3B0aW9ucy53ZWVrZGF5IH0pO1xuICAgICAgICB0aGlzLmZvcm1hdHRlck1vbnRoID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5fbG9jYWxlLCB7IG1vbnRoOiB0aGlzLl9mb3JtYXRPcHRpb25zLm1vbnRoIH0pO1xuICAgICAgICB0aGlzLmZvcm1hdHRlclllYXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLl9sb2NhbGUsIHsgeWVhcjogdGhpcy5fZm9ybWF0T3B0aW9ucy55ZWFyIH0pO1xuICAgICAgICB0aGlzLmZvcm1hdHRlck1vbnRoZGF5ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5fbG9jYWxlLCB7IG1vbnRoOiB0aGlzLl9mb3JtYXRPcHRpb25zLm1vbnRoLCBkYXk6IHRoaXMuX2Zvcm1hdE9wdGlvbnMuZGF5IH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXREYXRlT25seShkYXRlOiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHY6IERhdGUpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IERhdGUgfCBEYXRlW10pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgYSBkYXRlIGlzIGRpc2FibGVkLlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNEYXRlRGlzYWJsZWQoZGF0ZTogRGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZERhdGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNEYXRlSW5SYW5nZXMoZGF0ZSwgdGhpcy5kaXNhYmxlZERhdGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIGRhdGUocykgKGJhc2VkIG9uIHRoZSBzZWxlY3Rpb24gdHlwZSkuXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdERhdGUodmFsdWU6IERhdGUgfCBEYXRlW10pIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBDYWxlbmRhclNlbGVjdGlvbi5TSU5HTEU6XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RTaW5nbGUodmFsdWUgYXMgRGF0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENhbGVuZGFyU2VsZWN0aW9uLk1VTFRJOlxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0TXVsdGlwbGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDYWxlbmRhclNlbGVjdGlvbi5SQU5HRTpcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFJhbmdlKHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VsZWN0cyBkYXRlKHMpIChiYXNlZCBvbiB0aGUgc2VsZWN0aW9uIHR5cGUpLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNlbGVjdERhdGUodmFsdWU/OiBEYXRlIHwgRGF0ZVtdKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0ZXMgPT09IG51bGwgfHwgdGhpcy5zZWxlY3RlZERhdGVzID09PSBbXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlcyA9IHRoaXMuc2VsZWN0aW9uID09PSBDYWxlbmRhclNlbGVjdGlvbi5TSU5HTEUgPyBudWxsIDogW107XG4gICAgICAgICAgICB0aGlzLnJhbmdlU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh0aGlzLnNlbGVjdGVkRGF0ZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBDYWxlbmRhclNlbGVjdGlvbi5TSU5HTEU6XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNlbGVjdFNpbmdsZSh2YWx1ZSBhcyBEYXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ2FsZW5kYXJTZWxlY3Rpb24uTVVMVEk6XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNlbGVjdE11bHRpcGxlKHZhbHVlIGFzIERhdGVbXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENhbGVuZGFyU2VsZWN0aW9uLlJBTkdFOlxuICAgICAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RSYW5nZSh2YWx1ZSBhcyBEYXRlW10pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3REYXRlRnJvbUNsaWVudCh2YWx1ZTogRGF0ZSkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIENhbGVuZGFyU2VsZWN0aW9uLlNJTkdMRTpcbiAgICAgICAgICAgIGNhc2UgQ2FsZW5kYXJTZWxlY3Rpb24uTVVMVEk6XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzRGF0ZURpc2FibGVkKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdERhdGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDYWxlbmRhclNlbGVjdGlvbi5SQU5HRTpcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFJhbmdlKHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==