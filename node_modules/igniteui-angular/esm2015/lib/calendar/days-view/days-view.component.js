/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, HostListener, ViewChildren, QueryList, HostBinding } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft, slideInRight } from '../../animations/main';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IgxDayItemComponent } from './day-item.component';
import { DateRangeType } from '../../core/dates';
import { IgxCalendarBase, ScrollMonth } from '../calendar-base';
/** @type {?} */
let NEXT_ID = 0;
export class IgxDaysViewComponent extends IgxCalendarBase {
    constructor() {
        super(...arguments);
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
        this.id = `igx-days-view-${NEXT_ID++}`;
        /**
         * @hidden
         */
        this.animationAction = '';
        /**
         * @hidden
         */
        this.changeDaysView = false;
        /**
         * @hidden
         */
        this.onDateSelection = new EventEmitter();
        /**
         * @hidden
         */
        this.onViewChanged = new EventEmitter();
        /**
         * @hidden
         */
        this.isKeydownTrigger = false;
        /**
         * The default css class applied to the component.
         *
         * @hidden
         */
        this.styleClass = true;
    }
    /**
     * @hidden
     * @return {?}
     */
    get getCalendarMonth() {
        return this.calendarModel.monthdatescalendar(this.viewDate.getFullYear(), this.viewDate.getMonth(), true);
    }
    /**
     * @hidden
     * @return {?}
     */
    ngDoCheck() {
        if (!this.changeDaysView && this.dates) {
            this.disableOutOfRangeDates();
        }
    }
    /**
     * Returns the locale representation of the date in the days view.
     *
     * @hidden
     * @param {?} value
     * @return {?}
     */
    formattedDate(value) {
        if (this.formatViews.day) {
            return this.formatterDay.format(value);
        }
        return `${value.getDate()}`;
    }
    /**
     * @hidden
     * @return {?}
     */
    generateWeekHeader() {
        /** @type {?} */
        const dayNames = [];
        /** @type {?} */
        const rv = this.calendarModel.monthdatescalendar(this.viewDate.getFullYear(), this.viewDate.getMonth())[0];
        for (const day of rv) {
            dayNames.push(this.formatterWeekday.format(day.date));
        }
        return dayNames;
    }
    /**
     * @hidden
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    rowTracker(index, item) {
        return `${item[index].date.getMonth()}${item[index].date.getDate()}`;
    }
    /**
     * @hidden
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    dateTracker(index, item) {
        return `${item.date.getMonth()}--${item.date.getDate()}`;
    }
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    isCurrentMonth(value) {
        return this.viewDate.getMonth() === value.getMonth();
    }
    /**
     * @hidden
     * @param {?} value
     * @return {?}
     */
    isCurrentYear(value) {
        return this.viewDate.getFullYear() === value.getFullYear();
    }
    /**
     * @hidden
     * @return {?}
     */
    focusActiveDate() {
        /** @type {?} */
        let date = this.dates.find((d) => d.selected);
        if (!date) {
            date = this.dates.find((d) => d.isToday);
        }
        if (date) {
            date.nativeElement.focus();
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    selectDay(event) {
        this.selectDateFromClient(event.date);
        this.onDateSelection.emit(event);
        this.onSelection.emit(this.selectedDates);
    }
    /**
     * @hidden
     * @param {?} event
     * @param {?} isLast
     * @return {?}
     */
    animationDone(event, isLast) {
        if (isLast) {
            if (this.monthScrollDirection !== ScrollMonth.NONE) {
                this.scrollMonth$.next();
            }
            /** @type {?} */
            const date = this.dates.find((d) => d.selected);
            if (date && !this.isKeydownTrigger) {
                setTimeout(() => {
                    date.nativeElement.focus();
                }, parseInt(slideInRight.options.params.duration, 10));
            }
            else if (this.callback && (event.toState === 'next' || event.toState === 'prev')) {
                this.callback(this.dates, this.nextDate);
            }
        }
    }
    /**
     * @hidden
     * @private
     * @param {?} target
     * @param {?=} prevView
     * @return {?}
     */
    focusPreviousUpDate(target, prevView = false) {
        /** @type {?} */
        const node = this.dates.find((date) => date.nativeElement === target);
        if (!node) {
            return;
        }
        /** @type {?} */
        const dates = this.dates.toArray();
        for (let index = dates.indexOf(node); index - 7 > -1; index -= 7) {
            /** @type {?} */
            const date = prevView ? dates[index] : dates[index - 7];
            if (!date.isDisabled) {
                if (!date.isOutOfRange) {
                    date.nativeElement.focus();
                    break;
                }
            }
        }
        if (this.changeDaysView && dates.indexOf(node) - 7 < 0) {
            /** @type {?} */
            const dayItem = dates[dates.indexOf(node)];
            this.nextDate = new Date(dayItem.date.date);
            this.nextDate.setDate(this.nextDate.getDate() - 7);
            this.isKeydownTrigger = true;
            this.animationAction = 'prev';
            this.callback = (items, next) => {
                /** @type {?} */
                const day = items.find((item) => item.date.date.getTime() === next.getTime());
                if (day) {
                    this.focusPreviousUpDate(day.nativeElement, true);
                }
            };
            this.onViewChanged.emit(this.nextDate);
        }
    }
    /**
     * @hidden
     * @private
     * @param {?} target
     * @param {?=} nextView
     * @return {?}
     */
    focusNextDownDate(target, nextView = false) {
        /** @type {?} */
        const node = this.dates.find((date) => date.nativeElement === target);
        if (!node) {
            return;
        }
        /** @type {?} */
        const dates = this.dates.toArray();
        for (let index = dates.indexOf(node); index + 7 < this.dates.length; index += 7) {
            /** @type {?} */
            const date = nextView ? dates[index] : dates[index + 7];
            if (!date.isDisabled) {
                if (!date.isOutOfRange) {
                    date.nativeElement.focus();
                    break;
                }
            }
        }
        if (this.changeDaysView && dates.indexOf(node) + 7 > this.dates.length - 1) {
            /** @type {?} */
            const dayItem = dates[dates.indexOf(node)];
            this.nextDate = new Date(dayItem.date.date);
            this.nextDate.setDate(this.nextDate.getDate() + 7);
            this.isKeydownTrigger = true;
            this.animationAction = 'next';
            this.callback = (items, next) => {
                /** @type {?} */
                const day = items.find((item) => item.date.date.getTime() === next.getTime());
                if (day) {
                    this.focusNextDownDate(day.nativeElement, true);
                }
            };
            this.onViewChanged.emit(this.nextDate);
        }
    }
    /**
     * @hidden
     * @private
     * @param {?} target
     * @return {?}
     */
    focusPreviousDate(target) {
        /** @type {?} */
        const node = this.dates.find((date) => date.nativeElement === target);
        if (!node) {
            return;
        }
        /** @type {?} */
        const dates = this.dates.toArray();
        for (let index = dates.indexOf(node); index > 0; index--) {
            /** @type {?} */
            const date = dates[index - 1];
            if (!date.isDisabled) {
                if (!date.isOutOfRange) {
                    date.nativeElement.focus();
                    break;
                }
            }
        }
        if (this.changeDaysView && dates.indexOf(node) === 0) {
            /** @type {?} */
            const dayItem = dates[0];
            if (dayItem.isCurrentMonth) {
                this.nextDate = this.calendarModel.timedelta(dayItem.date.date, 'day', -1);
            }
            else {
                this.nextDate = new Date(dayItem.date.date);
            }
            this.isKeydownTrigger = true;
            this.animationAction = 'prev';
            this.callback = (items, next) => {
                /** @type {?} */
                const day = items.find((item) => item.date.date.getTime() === next.getTime());
                if (day) {
                    this.focusPreviousDate(day.nativeElement);
                }
            };
            this.onViewChanged.emit(this.nextDate);
        }
    }
    /**
     * @hidden
     * @private
     * @param {?} target
     * @return {?}
     */
    focusNextDate(target) {
        /** @type {?} */
        const node = this.dates.find((date) => date.nativeElement === target);
        if (!node) {
            return;
        }
        /** @type {?} */
        const dates = this.dates.toArray();
        for (let index = dates.indexOf(node); index < this.dates.length - 1; index++) {
            /** @type {?} */
            const date = dates[index + 1];
            if (!date.isDisabled) {
                if (!date.isOutOfRange) {
                    date.nativeElement.focus();
                    break;
                }
            }
        }
        if (this.changeDaysView && dates.indexOf(node) === this.dates.length - 1) {
            /** @type {?} */
            const dayItem = dates[this.dates.length - 1];
            this.nextDate = new Date(dayItem.date.date);
            this.isKeydownTrigger = true;
            this.animationAction = 'next';
            this.callback = (items, next) => {
                /** @type {?} */
                const day = items.find((item) => item.date.date.getTime() === next.getTime());
                if (day) {
                    this.focusNextDate(day.nativeElement);
                }
            };
            this.onViewChanged.emit(this.nextDate);
        }
    }
    /**
     * @hidden
     * @private
     * @return {?}
     */
    disableOutOfRangeDates() {
        /** @type {?} */
        const dateRange = [];
        this.dates.toArray().forEach((date) => {
            if (!date.isCurrentMonth) {
                dateRange.push(date.date.date);
            }
        });
        this.outOfRangeDates = [{
                type: DateRangeType.Specific,
                dateRange: dateRange
            }];
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowUp(event) {
        event.preventDefault();
        event.stopPropagation();
        this.focusPreviousUpDate(event.target);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowDown(event) {
        event.preventDefault();
        event.stopPropagation();
        this.focusNextDownDate(event.target);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowLeft(event) {
        event.preventDefault();
        event.stopPropagation();
        this.focusPreviousDate(event.target);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownArrowRight(event) {
        event.preventDefault();
        event.stopPropagation();
        this.focusNextDate(event.target);
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownHome(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const dates = this.dates.filter(d => d.isCurrentMonth);
        for (let i = 0; i < dates.length; i++) {
            if (!dates[i].isDisabled) {
                dates[i].nativeElement.focus();
                break;
            }
        }
    }
    /**
     * @hidden
     * @param {?} event
     * @return {?}
     */
    onKeydownEnd(event) {
        event.preventDefault();
        event.stopPropagation();
        /** @type {?} */
        const dates = this.dates.filter(d => d.isCurrentMonth);
        for (let i = dates.length - 1; i >= 0; i--) {
            if (!dates[i].isDisabled) {
                dates[i].nativeElement.focus();
                break;
            }
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5cy12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvZGF5cy12aWV3L2RheXMtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWixLQUFLLEVBQ0wsWUFBWSxFQUNaLFlBQVksRUFDWixTQUFTLEVBQ1QsV0FBVyxFQUVkLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUF1QixhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQUU1RCxPQUFPLEdBQUcsQ0FBQztBQTJCZixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZUFBZTtJQXpCekQ7Ozs7Ozs7Ozs7OztRQXNDVyxPQUFFLEdBQUcsaUJBQWlCLE9BQU8sRUFBRSxFQUFFLENBQUM7Ozs7UUFNbEMsb0JBQWUsR0FBUSxFQUFFLENBQUM7Ozs7UUFNMUIsbUJBQWMsR0FBRyxLQUFLLENBQUM7Ozs7UUFNdkIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQzs7OztRQU1wRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7UUFxQnpDLHFCQUFnQixHQUFHLEtBQUssQ0FBQzs7Ozs7O1FBYXpCLGVBQVUsR0FBRyxJQUFJLENB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QUFDO3FCQUNOLENBQUM7aUJBQ0w7Z0JBQ0QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHl2QkFBdUM7YUFDMUM7OztpQkFZSSxXQUFXLFNBQUMsU0FBUyxjQUNyQixLQUFLOzhCQU1MLEtBQUs7NkJBTUwsS0FBSzs4QkFNTCxNQUFNOzRCQU1OLE1BQU07b0JBTU4sWUFBWSxTQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFO3lCQTRCL0QsV0FBVyxTQUFDLG9CQUFvQjsrQkFrU2hDLFlBQVksU0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQztpQ0FXMUMsWUFBWSxTQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDO2lDQVc1QyxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0NBVzVDLFlBQVksU0FBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs0QkFXN0MsWUFBWSxTQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyQkFpQnZDLFlBQVksU0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBMVp2QyxrQ0FFeUM7Ozs7O0lBS3pDLCtDQUNpQzs7Ozs7SUFLakMsOENBQzhCOzs7OztJQUs5QiwrQ0FDMkQ7Ozs7O0lBSzNELDZDQUNnRDs7Ozs7SUFLaEQscUNBQzZDOzs7OztJQUs3Qyx3Q0FBc0I7Ozs7O0lBS3RCLHdDQUF5Qzs7Ozs7SUFLekMsZ0RBQWdDOzs7OztJQUtoQywrQ0FBOEM7Ozs7Ozs7SUFPOUMsMENBQ3lCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgVmlld0NoaWxkcmVuLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBIb3N0QmluZGluZyxcbiAgICBEb0NoZWNrXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNhbGVuZGFyRGF0ZSB9IGZyb20gJy4uLy4uL2NhbGVuZGFyJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgc2xpZGVJbkxlZnQsIHNsaWRlSW5SaWdodCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvbWFpbic7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElneERheUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2RheS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlUmFuZ2VEZXNjcmlwdG9yLCBEYXRlUmFuZ2VUeXBlIH0gZnJvbSAnLi4vLi4vY29yZS9kYXRlcyc7XG5pbXBvcnQgeyBJZ3hDYWxlbmRhckJhc2UsIFNjcm9sbE1vbnRoIH0gZnJvbSAnLi4vY2FsZW5kYXItYmFzZSc7XG5cbmxldCBORVhUX0lEID0gMDtcblxuQENvbXBvbmVudCh7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogSWd4RGF5c1ZpZXdDb21wb25lbnRcbiAgICAgICAgfVxuICAgIF0sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdhbmltYXRlQ2hhbmdlJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiBwcmV2JywgdXNlQW5pbWF0aW9uKHNsaWRlSW5MZWZ0LCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21Qb3NpdGlvbjogJ3RyYW5zbGF0ZVgoLTMwJSknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiBuZXh0JywgdXNlQW5pbWF0aW9uKHNsaWRlSW5SaWdodCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBmcm9tUG9zaXRpb246ICd0cmFuc2xhdGVYKDMwJSknXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBzZWxlY3RvcjogJ2lneC1kYXlzLXZpZXcnLFxuICAgIHRlbXBsYXRlVXJsOiAnZGF5cy12aWV3LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hEYXlzVmlld0NvbXBvbmVudCBleHRlbmRzIElneENhbGVuZGFyQmFzZSBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGlkYCBvZiB0aGUgZGF5cyB2aWV3LlxuICAgICAqIElmIG5vdCBzZXQsIHRoZSBgaWRgIHdpbGwgaGF2ZSB2YWx1ZSBgXCJpZ3gtZGF5cy12aWV3LTBcImAuXG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZGF5cy12aWV3IGlkPVwibXktZGF5cy12aWV3XCI+PC9pZ3gtZGF5cy12aWV3PlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgZGF5c1ZpZXdJZCA9ICB0aGlzLmRheXNWaWV3LmlkO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LWRheXMtdmlldy0ke05FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGFuaW1hdGlvbkFjdGlvbjogYW55ID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY2hhbmdlRGF5c1ZpZXcgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25EYXRlU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxJQ2FsZW5kYXJEYXRlPigpO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblZpZXdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBWaWV3Q2hpbGRyZW4oSWd4RGF5SXRlbUNvbXBvbmVudCwgeyByZWFkOiBJZ3hEYXlJdGVtQ29tcG9uZW50IH0pXG4gICAgcHVibGljIGRhdGVzOiBRdWVyeUxpc3Q8SWd4RGF5SXRlbUNvbXBvbmVudD47XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5leHREYXRlOiBEYXRlO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBjYWxsYmFjazogKGRhdGVzPywgbmV4dD8pID0+IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGlzS2V5ZG93blRyaWdnZXIgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3V0T2ZSYW5nZURhdGVzOiBEYXRlUmFuZ2VEZXNjcmlwdG9yW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBjc3MgY2xhc3MgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWNhbGVuZGFyJylcbiAgICBwdWJsaWMgc3R5bGVDbGFzcyA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBnZXRDYWxlbmRhck1vbnRoKCk6IElDYWxlbmRhckRhdGVbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsZW5kYXJNb2RlbC5tb250aGRhdGVzY2FsZW5kYXIodGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpLCB0aGlzLnZpZXdEYXRlLmdldE1vbnRoKCksIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdEb0NoZWNrKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2hhbmdlRGF5c1ZpZXcgJiYgdGhpcy5kYXRlcykge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlT3V0T2ZSYW5nZURhdGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsb2NhbGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGRhdGUgaW4gdGhlIGRheXMgdmlldy5cbiAgICAgKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZm9ybWF0dGVkRGF0ZSh2YWx1ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1hdFZpZXdzLmRheSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVyRGF5LmZvcm1hdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3ZhbHVlLmdldERhdGUoKX1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2VuZXJhdGVXZWVrSGVhZGVyKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgZGF5TmFtZXMgPSBbXTtcbiAgICAgICAgY29uc3QgcnYgPSB0aGlzLmNhbGVuZGFyTW9kZWwubW9udGhkYXRlc2NhbGVuZGFyKHRoaXMudmlld0RhdGUuZ2V0RnVsbFllYXIoKSwgdGhpcy52aWV3RGF0ZS5nZXRNb250aCgpKVswXTtcbiAgICAgICAgZm9yIChjb25zdCBkYXkgb2YgcnYpIHtcbiAgICAgICAgICAgIGRheU5hbWVzLnB1c2godGhpcy5mb3JtYXR0ZXJXZWVrZGF5LmZvcm1hdChkYXkuZGF0ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRheU5hbWVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgcm93VHJhY2tlcihpbmRleCwgaXRlbSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHtpdGVtW2luZGV4XS5kYXRlLmdldE1vbnRoKCl9JHtpdGVtW2luZGV4XS5kYXRlLmdldERhdGUoKX1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGF0ZVRyYWNrZXIoaW5kZXgsIGl0ZW0pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7aXRlbS5kYXRlLmdldE1vbnRoKCl9LS0ke2l0ZW0uZGF0ZS5nZXREYXRlKCl9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGlzQ3VycmVudE1vbnRoKHZhbHVlOiBEYXRlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdEYXRlLmdldE1vbnRoKCkgPT09IHZhbHVlLmdldE1vbnRoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBpc0N1cnJlbnRZZWFyKHZhbHVlOiBEYXRlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdEYXRlLmdldEZ1bGxZZWFyKCkgPT09IHZhbHVlLmdldEZ1bGxZZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGZvY3VzQWN0aXZlRGF0ZSgpIHtcbiAgICAgICAgbGV0IGRhdGUgPSB0aGlzLmRhdGVzLmZpbmQoKGQpID0+IGQuc2VsZWN0ZWQpO1xuXG4gICAgICAgIGlmICghZGF0ZSkge1xuICAgICAgICAgICAgZGF0ZSA9IHRoaXMuZGF0ZXMuZmluZCgoZCkgPT4gZC5pc1RvZGF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBkYXRlLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0RGF5KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0RGF0ZUZyb21DbGllbnQoZXZlbnQuZGF0ZSk7XG4gICAgICAgIHRoaXMub25EYXRlU2VsZWN0aW9uLmVtaXQoZXZlbnQpO1xuXG4gICAgICAgIHRoaXMub25TZWxlY3Rpb24uZW1pdCh0aGlzLnNlbGVjdGVkRGF0ZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgYW5pbWF0aW9uRG9uZShldmVudCwgaXNMYXN0OiBib29sZWFuKSB7XG4gICAgICAgIGlmIChpc0xhc3QpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vbnRoU2Nyb2xsRGlyZWN0aW9uICE9PSBTY3JvbGxNb250aC5OT05FKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxNb250aCQubmV4dCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5kYXRlcy5maW5kKChkKSA9PiBkLnNlbGVjdGVkKTtcbiAgICAgICAgICAgIGlmIChkYXRlICYmICF0aGlzLmlzS2V5ZG93blRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VJbnQoc2xpZGVJblJpZ2h0Lm9wdGlvbnMucGFyYW1zLmR1cmF0aW9uLCAxMCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNhbGxiYWNrICYmIChldmVudC50b1N0YXRlID09PSAnbmV4dCcgfHwgZXZlbnQudG9TdGF0ZSA9PT0gJ3ByZXYnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5kYXRlcywgdGhpcy5uZXh0RGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBmb2N1c1ByZXZpb3VzVXBEYXRlKHRhcmdldCwgcHJldlZpZXcgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5kYXRlcy5maW5kKChkYXRlKSA9PiBkYXRlLm5hdGl2ZUVsZW1lbnQgPT09IHRhcmdldCk7XG4gICAgICAgIGlmICghbm9kZSkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBkYXRlcyA9IHRoaXMuZGF0ZXMudG9BcnJheSgpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IGRhdGVzLmluZGV4T2Yobm9kZSk7IGluZGV4IC0gNyA+IC0xOyBpbmRleCAtPSA3KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gcHJldlZpZXcgPyBkYXRlc1tpbmRleF0gOiBkYXRlc1tpbmRleCAtIDddO1xuICAgICAgICAgICAgaWYgKCFkYXRlLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGUuaXNPdXRPZlJhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VEYXlzVmlldyAmJiBkYXRlcy5pbmRleE9mKG5vZGUpIC0gNyA8IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGRheUl0ZW0gPSBkYXRlc1tkYXRlcy5pbmRleE9mKG5vZGUpXTtcbiAgICAgICAgICAgIHRoaXMubmV4dERhdGUgPSBuZXcgRGF0ZShkYXlJdGVtLmRhdGUuZGF0ZSk7XG5cbiAgICAgICAgICAgIHRoaXMubmV4dERhdGUuc2V0RGF0ZSh0aGlzLm5leHREYXRlLmdldERhdGUoKSAtIDcpO1xuXG4gICAgICAgICAgICB0aGlzLmlzS2V5ZG93blRyaWdnZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25BY3Rpb24gPSAncHJldic7XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSAoaXRlbXM/LCBuZXh0PykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IGl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZGF0ZS5kYXRlLmdldFRpbWUoKSA9PT0gbmV4dC5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c1ByZXZpb3VzVXBEYXRlKGRheS5uYXRpdmVFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLm9uVmlld0NoYW5nZWQuZW1pdCh0aGlzLm5leHREYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzTmV4dERvd25EYXRlKHRhcmdldCwgbmV4dFZpZXcgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5kYXRlcy5maW5kKChkYXRlKSA9PiBkYXRlLm5hdGl2ZUVsZW1lbnQgPT09IHRhcmdldCk7XG4gICAgICAgIGlmICghbm9kZSkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBkYXRlcyA9IHRoaXMuZGF0ZXMudG9BcnJheSgpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IGRhdGVzLmluZGV4T2Yobm9kZSk7IGluZGV4ICsgNyA8IHRoaXMuZGF0ZXMubGVuZ3RoOyBpbmRleCArPSA3KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV4dFZpZXcgPyBkYXRlc1tpbmRleF0gOiBkYXRlc1tpbmRleCArIDddO1xuICAgICAgICAgICAgaWYgKCFkYXRlLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGUuaXNPdXRPZlJhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VEYXlzVmlldyAmJiBkYXRlcy5pbmRleE9mKG5vZGUpICsgNyA+IHRoaXMuZGF0ZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgY29uc3QgZGF5SXRlbSA9IGRhdGVzW2RhdGVzLmluZGV4T2Yobm9kZSldO1xuICAgICAgICAgICAgdGhpcy5uZXh0RGF0ZSA9IG5ldyBEYXRlKGRheUl0ZW0uZGF0ZS5kYXRlKTtcblxuICAgICAgICAgICAgdGhpcy5uZXh0RGF0ZS5zZXREYXRlKHRoaXMubmV4dERhdGUuZ2V0RGF0ZSgpICsgNyk7XG5cbiAgICAgICAgICAgIHRoaXMuaXNLZXlkb3duVHJpZ2dlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkFjdGlvbiA9ICduZXh0JztcblxuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IChpdGVtcz8sIG5leHQ/KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5kYXRlLmRhdGUuZ2V0VGltZSgpID09PSBuZXh0LmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgaWYgKGRheSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzTmV4dERvd25EYXRlKGRheS5uYXRpdmVFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLm9uVmlld0NoYW5nZWQuZW1pdCh0aGlzLm5leHREYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzUHJldmlvdXNEYXRlKHRhcmdldCkge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5kYXRlcy5maW5kKChkYXRlKSA9PiBkYXRlLm5hdGl2ZUVsZW1lbnQgPT09IHRhcmdldCk7XG4gICAgICAgIGlmICghbm9kZSkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBkYXRlcyA9IHRoaXMuZGF0ZXMudG9BcnJheSgpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IGRhdGVzLmluZGV4T2Yobm9kZSk7IGluZGV4ID4gMDsgaW5kZXgtLSkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRhdGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICBpZiAoIWRhdGUuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGlmICghZGF0ZS5pc091dE9mUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNoYW5nZURheXNWaWV3ICYmIGRhdGVzLmluZGV4T2Yobm9kZSkgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGRheUl0ZW0gPSBkYXRlc1swXTtcbiAgICAgICAgICAgIGlmIChkYXlJdGVtLmlzQ3VycmVudE1vbnRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0RGF0ZSA9IHRoaXMuY2FsZW5kYXJNb2RlbC50aW1lZGVsdGEoZGF5SXRlbS5kYXRlLmRhdGUsICdkYXknLCAtMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dERhdGUgPSBuZXcgRGF0ZShkYXlJdGVtLmRhdGUuZGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaXNLZXlkb3duVHJpZ2dlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkFjdGlvbiA9ICdwcmV2JztcblxuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IChpdGVtcz8sIG5leHQ/KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5kYXRlLmRhdGUuZ2V0VGltZSgpID09PSBuZXh0LmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgaWYgKGRheSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzUHJldmlvdXNEYXRlKGRheS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLm9uVmlld0NoYW5nZWQuZW1pdCh0aGlzLm5leHREYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGZvY3VzTmV4dERhdGUodGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRhdGVzLmZpbmQoKGRhdGUpID0+IGRhdGUubmF0aXZlRWxlbWVudCA9PT0gdGFyZ2V0KTtcbiAgICAgICAgaWYgKCFub2RlKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGNvbnN0IGRhdGVzID0gdGhpcy5kYXRlcy50b0FycmF5KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBkYXRlcy5pbmRleE9mKG5vZGUpOyBpbmRleCA8IHRoaXMuZGF0ZXMubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRhdGVzW2luZGV4ICsgMV07XG4gICAgICAgICAgICBpZiAoIWRhdGUuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGlmICghZGF0ZS5pc091dE9mUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNoYW5nZURheXNWaWV3ICYmIGRhdGVzLmluZGV4T2Yobm9kZSkgPT09IHRoaXMuZGF0ZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgY29uc3QgZGF5SXRlbSA9IGRhdGVzW3RoaXMuZGF0ZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB0aGlzLm5leHREYXRlID0gbmV3IERhdGUoZGF5SXRlbS5kYXRlLmRhdGUpO1xuXG4gICAgICAgICAgICB0aGlzLmlzS2V5ZG93blRyaWdnZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25BY3Rpb24gPSAnbmV4dCc7XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSAoaXRlbXM/LCBuZXh0PykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IGl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZGF0ZS5kYXRlLmdldFRpbWUoKSA9PT0gbmV4dC5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGlmIChkYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c05leHREYXRlKGRheS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLm9uVmlld0NoYW5nZWQuZW1pdCh0aGlzLm5leHREYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGRpc2FibGVPdXRPZlJhbmdlRGF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IGRhdGVSYW5nZSA9IFtdO1xuICAgICAgICB0aGlzLmRhdGVzLnRvQXJyYXkoKS5mb3JFYWNoKChkYXRlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRhdGUuaXNDdXJyZW50TW9udGgpIHtcbiAgICAgICAgICAgICAgICBkYXRlUmFuZ2UucHVzaChkYXRlLmRhdGUuZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3V0T2ZSYW5nZURhdGVzID0gW3tcbiAgICAgICAgICAgIHR5cGU6IERhdGVSYW5nZVR5cGUuU3BlY2lmaWMsXG4gICAgICAgICAgICBkYXRlUmFuZ2U6IGRhdGVSYW5nZVxuICAgICAgICB9XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd3VwJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgb25LZXlkb3duQXJyb3dVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmZvY3VzUHJldmlvdXNVcERhdGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd2Rvd24nLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25BcnJvd0Rvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5mb2N1c05leHREb3duRGF0ZShldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93bGVmdCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkFycm93TGVmdChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmZvY3VzUHJldmlvdXNEYXRlKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dyaWdodCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkFycm93UmlnaHQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5mb2N1c05leHREYXRlKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uaG9tZScsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uS2V5ZG93bkhvbWUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgZGF0ZXMgPSB0aGlzLmRhdGVzLmZpbHRlcihkID0+IGQuaXNDdXJyZW50TW9udGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWRhdGVzW2ldLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBkYXRlc1tpXS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lbmQnLCBbJyRldmVudCddKVxuICAgIHB1YmxpYyBvbktleWRvd25FbmQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgZGF0ZXMgPSB0aGlzLmRhdGVzLmZpbHRlcihkID0+IGQuaXNDdXJyZW50TW9udGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gZGF0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICghZGF0ZXNbaV0uaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGRhdGVzW2ldLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==