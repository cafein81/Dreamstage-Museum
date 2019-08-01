/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, NgZone } from '@angular/core';
import { ɵgetDOM as getDOM } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
/** @type {?} */
var EVENT_SUFFIX = 'precise';
/**
 * Touch gestures manager based on Hammer.js
 * Use with caution, this will track references for single manager per element. Very TBD. Much TODO.
 * @hidden
 */
var HammerGesturesManager = /** @class */ (function () {
    function HammerGesturesManager(_zone, doc) {
        this._zone = _zone;
        this.doc = doc;
        /**
         * Event option defaults for each recognizer, see http://hammerjs.github.io/api/ for API listing.
         */
        this.hammerOptions = {
            // D.P. #447 Force TouchInput due to PointerEventInput bug (https://github.com/hammerjs/hammer.js/issues/1065)
            // see https://github.com/IgniteUI/igniteui-angular/issues/447#issuecomment-324601803
            inputClass: Hammer.TouchInput,
            recognizers: [
                [Hammer.Pan, { threshold: 0 }],
                [Hammer.Pinch, { enable: true }],
                [Hammer.Rotate, { enable: true }],
                [Hammer.Swipe, {
                        direction: Hammer.DIRECTION_HORIZONTAL
                    }]
            ]
        };
        this._hammerManagers = [];
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    HammerGesturesManager.prototype.supports = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) {
        return eventName.toLowerCase().endsWith('.' + EVENT_SUFFIX);
    };
    /**
     * Add listener extended with options for Hammer.js. Will use defaults if none are provided.
     * Modeling after other event plugins for easy future modifications.
     */
    /**
     * Add listener extended with options for Hammer.js. Will use defaults if none are provided.
     * Modeling after other event plugins for easy future modifications.
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventHandler
     * @param {?=} options
     * @return {?}
     */
    HammerGesturesManager.prototype.addEventListener = /**
     * Add listener extended with options for Hammer.js. Will use defaults if none are provided.
     * Modeling after other event plugins for easy future modifications.
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventHandler
     * @param {?=} options
     * @return {?}
     */
    function (element, eventName, eventHandler, options) {
        var _this = this;
        if (options === void 0) { options = null; }
        // Creating the manager bind events, must be done outside of angular
        return this._zone.runOutsideAngular(function () {
            /** @type {?} */
            var mc = _this.getManagerForElement(element);
            if (mc === null) {
                // new Hammer is a shortcut for Manager with defaults
                mc = new Hammer(element, _this.hammerOptions);
                _this.addManagerForElement(element, mc);
            }
            /** @type {?} */
            var handler = function (eventObj) { _this._zone.run(function () { eventHandler(eventObj); }); };
            mc.on(eventName, handler);
            return function () { mc.off(eventName, handler); };
        });
    };
    /**
     * Add listener extended with options for Hammer.js. Will use defaults if none are provided.
     * Modeling after other event plugins for easy future modifications.
     *
     * @param target Can be one of either window, body or document(fallback default).
     */
    /**
     * Add listener extended with options for Hammer.js. Will use defaults if none are provided.
     * Modeling after other event plugins for easy future modifications.
     *
     * @param {?} target Can be one of either window, body or document(fallback default).
     * @param {?} eventName
     * @param {?} eventHandler
     * @return {?}
     */
    HammerGesturesManager.prototype.addGlobalEventListener = /**
     * Add listener extended with options for Hammer.js. Will use defaults if none are provided.
     * Modeling after other event plugins for easy future modifications.
     *
     * @param {?} target Can be one of either window, body or document(fallback default).
     * @param {?} eventName
     * @param {?} eventHandler
     * @return {?}
     */
    function (target, eventName, eventHandler) {
        /** @type {?} */
        var element = this.getGlobalEventTarget(target);
        // Creating the manager bind events, must be done outside of angular
        return this.addEventListener((/** @type {?} */ (element)), eventName, eventHandler);
    };
    /**
     * Exposes [Dom]Adapter.getGlobalEventTarget to get global event targets.
     * Supported: window, document, body. Defaults to document for invalid args.
     * @param target Target name
     */
    /**
     * Exposes [Dom]Adapter.getGlobalEventTarget to get global event targets.
     * Supported: window, document, body. Defaults to document for invalid args.
     * @param {?} target Target name
     * @return {?}
     */
    HammerGesturesManager.prototype.getGlobalEventTarget = /**
     * Exposes [Dom]Adapter.getGlobalEventTarget to get global event targets.
     * Supported: window, document, body. Defaults to document for invalid args.
     * @param {?} target Target name
     * @return {?}
     */
    function (target) {
        return getDOM().getGlobalEventTarget(this.doc, target);
    };
    /**
     * Set HammerManager options.
     *
     * @param element The DOM element used to create the manager on.
     *
     * ### Example
     *
     * ```ts
     * manager.setManagerOption(myElem, "pan", { pointers: 1 });
     * ```
     */
    /**
     * Set HammerManager options.
     *
     * @param {?} element The DOM element used to create the manager on.
     *
     * ### Example
     *
     * ```ts
     * manager.setManagerOption(myElem, "pan", { pointers: 1 });
     * ```
     * @param {?} event
     * @param {?} options
     * @return {?}
     */
    HammerGesturesManager.prototype.setManagerOption = /**
     * Set HammerManager options.
     *
     * @param {?} element The DOM element used to create the manager on.
     *
     * ### Example
     *
     * ```ts
     * manager.setManagerOption(myElem, "pan", { pointers: 1 });
     * ```
     * @param {?} event
     * @param {?} options
     * @return {?}
     */
    function (element, event, options) {
        /** @type {?} */
        var manager = this.getManagerForElement(element);
        manager.get(event).set(options);
    };
    /**
     * Add an element and manager map to the internal collection.
     *
     * @param element The DOM element used to create the manager on.
     */
    /**
     * Add an element and manager map to the internal collection.
     *
     * @param {?} element The DOM element used to create the manager on.
     * @param {?} manager
     * @return {?}
     */
    HammerGesturesManager.prototype.addManagerForElement = /**
     * Add an element and manager map to the internal collection.
     *
     * @param {?} element The DOM element used to create the manager on.
     * @param {?} manager
     * @return {?}
     */
    function (element, manager) {
        this._hammerManagers.push({ element: element, manager: manager });
    };
    /**
     * Get HammerManager for the element or null
     *
     * @param element The DOM element used to create the manager on.
     */
    /**
     * Get HammerManager for the element or null
     *
     * @param {?} element The DOM element used to create the manager on.
     * @return {?}
     */
    HammerGesturesManager.prototype.getManagerForElement = /**
     * Get HammerManager for the element or null
     *
     * @param {?} element The DOM element used to create the manager on.
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var result = this._hammerManagers.filter(function (value, index, array) {
            return value.element === element;
        });
        return result.length ? result[0].manager : null;
    };
    /**
     * Destroys the HammerManager for the element, removing event listeners in the process.
     *
     * @param element The DOM element used to create the manager on.
     */
    /**
     * Destroys the HammerManager for the element, removing event listeners in the process.
     *
     * @param {?} element The DOM element used to create the manager on.
     * @return {?}
     */
    HammerGesturesManager.prototype.removeManagerForElement = /**
     * Destroys the HammerManager for the element, removing event listeners in the process.
     *
     * @param {?} element The DOM element used to create the manager on.
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var index = null;
        for (var i = 0; i < this._hammerManagers.length; i++) {
            if (element === this._hammerManagers[i].element) {
                index = i;
                break;
            }
        }
        if (index !== null) {
            /** @type {?} */
            var item = this._hammerManagers.splice(index, 1)[0];
            // destroy also
            item.manager.destroy();
        }
    };
    /** Destroys all internally tracked HammerManagers, removing event listeners in the process. */
    /**
     * Destroys all internally tracked HammerManagers, removing event listeners in the process.
     * @return {?}
     */
    HammerGesturesManager.prototype.destroy = /**
     * Destroys all internally tracked HammerManagers, removing event listeners in the process.
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this._hammerManagers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                item.manager.destroy();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._hammerManagers = [];
    };
    HammerGesturesManager.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HammerGesturesManager.ctorParameters = function () { return [
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return HammerGesturesManager;
}());
export { HammerGesturesManager };
if (false) {
    /**
     * Event option defaults for each recognizer, see http://hammerjs.github.io/api/ for API listing.
     * @type {?}
     * @protected
     */
    HammerGesturesManager.prototype.hammerOptions;
    /**
     * @type {?}
     * @private
     */
    HammerGesturesManager.prototype._hammerManagers;
    /**
     * @type {?}
     * @private
     */
    HammerGesturesManager.prototype._zone;
    /**
     * @type {?}
     * @private
     */
    HammerGesturesManager.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91Y2guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvdG91Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLE9BQU8sSUFBSSxNQUFNLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBRXJDLFlBQVksR0FBRyxTQUFTOzs7Ozs7QUFPOUI7SUFxQkksK0JBQW9CLEtBQWEsRUFBNEIsR0FBUTtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQTRCLFFBQUcsR0FBSCxHQUFHLENBQUs7Ozs7UUFoQjNELGtCQUFhLEdBQWtCOzs7WUFHckMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVO1lBQzdCLFdBQVcsRUFBRTtnQkFDVCxDQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUU7Z0JBQ2hDLENBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBRTtnQkFDbEMsQ0FBRSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFFO2dCQUNuQyxDQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUU7d0JBQ1osU0FBUyxFQUFFLE1BQU0sQ0FBQyxvQkFBb0I7cUJBQ3pDLENBQUM7YUFDTDtTQUNKLENBQUM7UUFFTSxvQkFBZSxHQUE2RCxFQUFFLENBQUM7SUFHdkYsQ0FBQzs7Ozs7SUFFTSx3Q0FBUTs7OztJQUFmLFVBQWdCLFNBQWlCO1FBQzdCLE9BQU8sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUM7SUFDaEUsQ0FB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QUssR0FBVyxJQUFJO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtnQkFDN0MsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDVixNQUFNO2FBQ1Q7U0FDSjtRQUNELElBQUksS0FBSyxLQUFLLElBQUksRUFBRTs7Z0JBQ1YsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsZUFBZTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQsK0ZBQStGOzs7OztJQUN4Rix1Q0FBTzs7OztJQUFkOzs7WUFDSSxLQUFtQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGVBQWUsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBcEMsSUFBTSxJQUFJLFdBQUE7Z0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMxQjs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Z0JBeElKLFVBQVU7Ozs7Z0JBWGtCLE1BQU07Z0RBZ0NLLE1BQU0sU0FBQyxRQUFROztJQW9IdkQsNEJBQUM7Q0FBQSxBQXpJRCxJQXlJQztTQXhJWSxxQkFBcUI7Ozs7Ozs7SUFJOUIsOENBWUU7Ozs7O0lBRUYsZ0RBQXVGOzs7OztJQUUzRSxzQ0FBcUI7Ozs7O0lBQUUsb0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IMm1Z2V0RE9NIGFzIGdldERPTSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBFVkVOVF9TVUZGSVggPSAncHJlY2lzZSc7XG5cbi8qKlxuICogVG91Y2ggZ2VzdHVyZXMgbWFuYWdlciBiYXNlZCBvbiBIYW1tZXIuanNcbiAqIFVzZSB3aXRoIGNhdXRpb24sIHRoaXMgd2lsbCB0cmFjayByZWZlcmVuY2VzIGZvciBzaW5nbGUgbWFuYWdlciBwZXIgZWxlbWVudC4gVmVyeSBUQkQuIE11Y2ggVE9ETy5cbiAqIEBoaWRkZW5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhhbW1lckdlc3R1cmVzTWFuYWdlciB7XG4gICAgLyoqXG4gICAgICogRXZlbnQgb3B0aW9uIGRlZmF1bHRzIGZvciBlYWNoIHJlY29nbml6ZXIsIHNlZSBodHRwOi8vaGFtbWVyanMuZ2l0aHViLmlvL2FwaS8gZm9yIEFQSSBsaXN0aW5nLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBoYW1tZXJPcHRpb25zOiBIYW1tZXJPcHRpb25zID0ge1xuICAgICAgICAvLyBELlAuICM0NDcgRm9yY2UgVG91Y2hJbnB1dCBkdWUgdG8gUG9pbnRlckV2ZW50SW5wdXQgYnVnIChodHRwczovL2dpdGh1Yi5jb20vaGFtbWVyanMvaGFtbWVyLmpzL2lzc3Vlcy8xMDY1KVxuICAgICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0lnbml0ZVVJL2lnbml0ZXVpLWFuZ3VsYXIvaXNzdWVzLzQ0NyNpc3N1ZWNvbW1lbnQtMzI0NjAxODAzXG4gICAgICAgIGlucHV0Q2xhc3M6IEhhbW1lci5Ub3VjaElucHV0LFxuICAgICAgICByZWNvZ25pemVyczogW1xuICAgICAgICAgICAgWyBIYW1tZXIuUGFuLCB7IHRocmVzaG9sZDogMCB9IF0sXG4gICAgICAgICAgICBbIEhhbW1lci5QaW5jaCwgeyBlbmFibGU6IHRydWUgfSBdLFxuICAgICAgICAgICAgWyBIYW1tZXIuUm90YXRlLCB7IGVuYWJsZTogdHJ1ZSB9IF0sXG4gICAgICAgICAgICBbIEhhbW1lci5Td2lwZSwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9IT1JJWk9OVEFMXG4gICAgICAgICAgICB9XVxuICAgICAgICBdXG4gICAgfTtcblxuICAgIHByaXZhdGUgX2hhbW1lck1hbmFnZXJzOiBBcnJheTx7IGVsZW1lbnQ6IEV2ZW50VGFyZ2V0LCBtYW5hZ2VyOiBIYW1tZXJNYW5hZ2VyOyB9PiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfem9uZTogTmdab25lLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55KSB7XG4gICAgfVxuXG4gICAgcHVibGljIHN1cHBvcnRzKGV2ZW50TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBldmVudE5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLicgKyBFVkVOVF9TVUZGSVgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBsaXN0ZW5lciBleHRlbmRlZCB3aXRoIG9wdGlvbnMgZm9yIEhhbW1lci5qcy4gV2lsbCB1c2UgZGVmYXVsdHMgaWYgbm9uZSBhcmUgcHJvdmlkZWQuXG4gICAgICogTW9kZWxpbmcgYWZ0ZXIgb3RoZXIgZXZlbnQgcGx1Z2lucyBmb3IgZWFzeSBmdXR1cmUgbW9kaWZpY2F0aW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXI6IChldmVudE9iaikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBvYmplY3QgPSBudWxsKTogKCkgPT4gdm9pZCB7XG5cbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIG1hbmFnZXIgYmluZCBldmVudHMsIG11c3QgYmUgZG9uZSBvdXRzaWRlIG9mIGFuZ3VsYXJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1jOiBIYW1tZXJNYW5hZ2VyID0gdGhpcy5nZXRNYW5hZ2VyRm9yRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChtYyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIG5ldyBIYW1tZXIgaXMgYSBzaG9ydGN1dCBmb3IgTWFuYWdlciB3aXRoIGRlZmF1bHRzXG4gICAgICAgICAgICAgICAgbWMgPSBuZXcgSGFtbWVyKGVsZW1lbnQsIHRoaXMuaGFtbWVyT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNYW5hZ2VyRm9yRWxlbWVudChlbGVtZW50LCBtYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50T2JqKSA9PiB7IHRoaXMuX3pvbmUucnVuKCgpID0+IHsgZXZlbnRIYW5kbGVyKGV2ZW50T2JqKTsgfSk7IH07XG4gICAgICAgICAgICBtYy5vbihldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHsgbWMub2ZmKGV2ZW50TmFtZSwgaGFuZGxlcik7IH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBsaXN0ZW5lciBleHRlbmRlZCB3aXRoIG9wdGlvbnMgZm9yIEhhbW1lci5qcy4gV2lsbCB1c2UgZGVmYXVsdHMgaWYgbm9uZSBhcmUgcHJvdmlkZWQuXG4gICAgICogTW9kZWxpbmcgYWZ0ZXIgb3RoZXIgZXZlbnQgcGx1Z2lucyBmb3IgZWFzeSBmdXR1cmUgbW9kaWZpY2F0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YXJnZXQgQ2FuIGJlIG9uZSBvZiBlaXRoZXIgd2luZG93LCBib2R5IG9yIGRvY3VtZW50KGZhbGxiYWNrIGRlZmF1bHQpLlxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRHbG9iYWxFdmVudExpc3RlbmVyKHRhcmdldDogc3RyaW5nLCBldmVudE5hbWU6IHN0cmluZywgZXZlbnRIYW5kbGVyOiAoZXZlbnRPYmopID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0R2xvYmFsRXZlbnRUYXJnZXQodGFyZ2V0KTtcblxuICAgICAgICAvLyBDcmVhdGluZyB0aGUgbWFuYWdlciBiaW5kIGV2ZW50cywgbXVzdCBiZSBkb25lIG91dHNpZGUgb2YgYW5ndWxhclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRFdmVudExpc3RlbmVyKGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQsIGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBvc2VzIFtEb21dQWRhcHRlci5nZXRHbG9iYWxFdmVudFRhcmdldCB0byBnZXQgZ2xvYmFsIGV2ZW50IHRhcmdldHMuXG4gICAgICogU3VwcG9ydGVkOiB3aW5kb3csIGRvY3VtZW50LCBib2R5LiBEZWZhdWx0cyB0byBkb2N1bWVudCBmb3IgaW52YWxpZCBhcmdzLlxuICAgICAqIEBwYXJhbSB0YXJnZXQgVGFyZ2V0IG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0R2xvYmFsRXZlbnRUYXJnZXQodGFyZ2V0OiBzdHJpbmcpOiBFdmVudFRhcmdldCB7XG4gICAgICAgIHJldHVybiBnZXRET00oKS5nZXRHbG9iYWxFdmVudFRhcmdldCh0aGlzLmRvYywgdGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgSGFtbWVyTWFuYWdlciBvcHRpb25zLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnQgVGhlIERPTSBlbGVtZW50IHVzZWQgdG8gY3JlYXRlIHRoZSBtYW5hZ2VyIG9uLlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGVcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogbWFuYWdlci5zZXRNYW5hZ2VyT3B0aW9uKG15RWxlbSwgXCJwYW5cIiwgeyBwb2ludGVyczogMSB9KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TWFuYWdlck9wdGlvbihlbGVtZW50OiBFdmVudFRhcmdldCwgZXZlbnQ6IHN0cmluZywgb3B0aW9uczogYW55KSB7XG4gICAgICAgIGNvbnN0IG1hbmFnZXIgPSB0aGlzLmdldE1hbmFnZXJGb3JFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBtYW5hZ2VyLmdldChldmVudCkuc2V0KG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhbiBlbGVtZW50IGFuZCBtYW5hZ2VyIG1hcCB0byB0aGUgaW50ZXJuYWwgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50IFRoZSBET00gZWxlbWVudCB1c2VkIHRvIGNyZWF0ZSB0aGUgbWFuYWdlciBvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkTWFuYWdlckZvckVsZW1lbnQoZWxlbWVudDogRXZlbnRUYXJnZXQsIG1hbmFnZXI6IEhhbW1lck1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5faGFtbWVyTWFuYWdlcnMucHVzaCh7ZWxlbWVudCwgbWFuYWdlcn0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBIYW1tZXJNYW5hZ2VyIGZvciB0aGUgZWxlbWVudCBvciBudWxsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgRE9NIGVsZW1lbnQgdXNlZCB0byBjcmVhdGUgdGhlIG1hbmFnZXIgb24uXG4gICAgICovXG4gICAgcHVibGljIGdldE1hbmFnZXJGb3JFbGVtZW50KGVsZW1lbnQ6IEV2ZW50VGFyZ2V0KTogSGFtbWVyTWFuYWdlciB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9ICB0aGlzLl9oYW1tZXJNYW5hZ2Vycy5maWx0ZXIoKHZhbHVlLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5lbGVtZW50ID09PSBlbGVtZW50O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPyByZXN1bHRbMF0ubWFuYWdlciA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgdGhlIEhhbW1lck1hbmFnZXIgZm9yIHRoZSBlbGVtZW50LCByZW1vdmluZyBldmVudCBsaXN0ZW5lcnMgaW4gdGhlIHByb2Nlc3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgRE9NIGVsZW1lbnQgdXNlZCB0byBjcmVhdGUgdGhlIG1hbmFnZXIgb24uXG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZU1hbmFnZXJGb3JFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9oYW1tZXJNYW5hZ2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuX2hhbW1lck1hbmFnZXJzW2ldLmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5faGFtbWVyTWFuYWdlcnMuc3BsaWNlKGluZGV4LCAxKVswXTtcbiAgICAgICAgICAgIC8vIGRlc3Ryb3kgYWxzb1xuICAgICAgICAgICAgaXRlbS5tYW5hZ2VyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBEZXN0cm95cyBhbGwgaW50ZXJuYWxseSB0cmFja2VkIEhhbW1lck1hbmFnZXJzLCByZW1vdmluZyBldmVudCBsaXN0ZW5lcnMgaW4gdGhlIHByb2Nlc3MuICovXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9oYW1tZXJNYW5hZ2Vycykge1xuICAgICAgICAgICAgaXRlbS5tYW5hZ2VyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oYW1tZXJNYW5hZ2VycyA9IFtdO1xuICAgIH1cbn1cbiJdfQ==