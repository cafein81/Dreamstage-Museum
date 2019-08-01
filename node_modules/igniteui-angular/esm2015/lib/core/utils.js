/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 * @param {?} array
 * @param {?=} deep
 * @return {?}
 */
export function cloneArray(array, deep) {
    /** @type {?} */
    const arr = [];
    if (!array) {
        return arr;
    }
    /** @type {?} */
    let i = array.length;
    while (i--) {
        arr[i] = deep ? cloneValue(array[i]) : array[i];
    }
    return arr;
}
/**
 * Doesn't clone leaf items
 * @hidden
 * @param {?} array
 * @param {?} childDataKey
 * @return {?}
 */
export function cloneHierarchicalArray(array, childDataKey) {
    /** @type {?} */
    const result = [];
    if (!array) {
        return result;
    }
    for (const item of array) {
        /** @type {?} */
        const clonedItem = cloneValue(item);
        if (Array.isArray(item[childDataKey])) {
            clonedItem[childDataKey] = cloneHierarchicalArray(clonedItem[childDataKey], childDataKey);
        }
        result.push(clonedItem);
    }
    return result;
}
/**
 * Deep clones all first level keys of Obj2 and merges them to Obj1
 * @hidden
 * @param {?} obj1 Object to merge into
 * @param {?} obj2 Object to merge from
 * @return {?} Obj1 with merged cloned keys from Obj2
 */
export function mergeObjects(obj1, obj2) {
    if (!isObject(obj1)) {
        throw new Error(`Cannot merge into ${obj1}. First param must be an object.`);
    }
    if (!isObject(obj2)) {
        return obj1;
    }
    for (const key of Object.keys(obj2)) {
        obj1[key] = cloneValue(obj2[key]);
    }
    return obj1;
}
/**
 * Creates deep clone of provided value.
 * Supports primitive values, dates and objects.
 * If passed value is array returns shallow copy of the array.
 * @hidden
 * @param {?} value value to clone
 * @return {?} Deep copy of provided value
 */
export function cloneValue(value) {
    if (isDate(value)) {
        return new Date(value.getTime());
    }
    if (Array.isArray(value)) {
        return [...value];
    }
    if (value instanceof Map || value instanceof Set) {
        return value;
    }
    if (isObject(value)) {
        /** @type {?} */
        const result = {};
        for (const key of Object.keys(value)) {
            result[key] = cloneValue(value[key]);
        }
        return result;
    }
    return value;
}
/**
 * Checks if provided variable is Object
 * @hidden
 * @param {?} value Value to check
 * @return {?} true if provided variable is Object
 */
export function isObject(value) {
    return value && value.toString() === '[object Object]';
}
/**
 * Checks if provided variable is Date
 * @hidden
 * @param {?} value Value to check
 * @return {?} true if provided variable is Date
 */
export function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}
/**
 * Checks if the two passed arguments are equal
 * Currently supports date objects
 * \@returns: `boolean`
 * @hidden
 * @param {?} obj1
 * @param {?} obj2
 * @return {?}
 */
export function isEqual(obj1, obj2) {
    if (isDate(obj1) && isDate(obj2)) {
        return obj1.getTime() === obj2.getTime();
    }
    return obj1 === obj2;
}
/** @enum {number} */
const KEYCODES = {
    ENTER: 13,
    SPACE: 32,
    ESCAPE: 27,
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,
    F2: 113,
    TAB: 9,
};
export { KEYCODES };
/** @enum {string} */
const KEYS = {
    ENTER: 'Enter',
    SPACE: ' ',
    SPACE_IE: 'Spacebar',
    ESCAPE: 'Escape',
    ESCAPE_IE: 'Esc',
    LEFT_ARROW: 'ArrowLeft',
    LEFT_ARROW_IE: 'Left',
    UP_ARROW: 'ArrowUp',
    UP_ARROW_IE: 'Up',
    RIGHT_ARROW: 'ArrowRight',
    RIGHT_ARROW_IE: 'Right',
    DOWN_ARROW: 'ArrowDown',
    DOWN_ARROW_IE: 'Down',
    F2: 'F2',
    TAB: 'Tab',
};
export { KEYS };
/**
 * @hidden
 * Returns the actual size of the node content, using Range
 * ```typescript
 * let range = document.createRange();
 * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
 *
 * let size = getNodeSizeViaRange(range, column.cells[0].nativeElement);
 * ```
 * @param {?} range
 * @param {?} node
 * @return {?}
 */
export function getNodeSizeViaRange(range, node) {
    /** @type {?} */
    let overflow = null;
    if (isIE() || isEdge()) {
        overflow = node.style.overflow;
        // we need that hack - otherwise content won't be measured correctly in IE/Edge
        node.style.overflow = 'visible';
    }
    range.selectNodeContents(node);
    /** @type {?} */
    const width = range.getBoundingClientRect().width;
    if (isIE() || isEdge()) {
        // we need that hack - otherwise content won't be measured correctly in IE/Edge
        node.style.overflow = overflow;
    }
    return width;
}
/**
 * @hidden
 * Returns the actual size of the node content, using Canvas
 * ```typescript
 * let ctx = document.createElement('canvas').getContext('2d');
 * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
 *
 * let size = valToPxlsUsingCanvas(ctx, column.cells[0].nativeElement);
 * ```
 * @param {?} canvas2dCtx
 * @param {?} node
 * @return {?}
 */
export function getNodeSizeViaCanvas(canvas2dCtx, node) {
    /** @type {?} */
    const s = this.grid.document.defaultView.getComputedStyle(node);
    // need to set the font to get correct width
    canvas2dCtx.font = s.fontSize + ' ' + s.fontFamily;
    return canvas2dCtx.measureText(node.textContent).width;
}
/**
 * @hidden
 * @return {?}
 */
export function isIE() {
    return navigator.appVersion.indexOf('Trident/') > 0;
}
/**
 * @hidden
 * @return {?}
 */
export function isEdge() {
    /** @type {?} */
    const edgeBrowser = /Edge[\/\s](\d+\.\d+)/.test(navigator.userAgent);
    return edgeBrowser;
}
/**
 * @hidden
 * @return {?}
 */
export function isFirefox() {
    /** @type {?} */
    const firefoxBrowser = /Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent);
    return firefoxBrowser;
}
/**
 * @hidden
 * @param {?} event
 * @return {?}
 */
export function isLeftClick(event) {
    return event.button === 0;
}
/**
 * @hidden
 * @param {?} key
 * @return {?}
 */
export function isNavigationKey(key) {
    return ['down', 'up', 'left', 'right', 'arrowdown', 'arrowup', 'arrowleft', 'arrowright',
        'home', 'end', 'space', 'spacebar', ' '].indexOf(key) !== -1;
}
/**
 * @hidden
 * @param {?} arr
 * @return {?}
 */
export function flatten(arr) {
    /** @type {?} */
    let result = [];
    arr.forEach(el => {
        result.push(el);
        if (el.children) {
            /** @type {?} */
            const children = Array.isArray(el.children) ? el.children : el.children.toArray();
            result = result.concat(flatten(children));
        }
    });
    return result;
}
/**
 * @record
 */
export function CancelableEventArgs() { }
if (false) {
    /**
     * Provides the ability to cancel the event.
     * @type {?}
     */
    CancelableEventArgs.prototype.cancel;
}
/**
 * @record
 */
export function CancelableBrowserEventArgs() { }
if (false) {
    /**
     * Browser event
     * @type {?|undefined}
     */
    CancelableBrowserEventArgs.prototype.event;
}
/** @type {?} */
export const NAVIGATION_KEYS = new Set(['down', 'up', 'left', 'right', 'arrowdown', 'arrowup', 'arrowleft', 'arrowright',
    'home', 'end', 'space', 'spacebar', ' ']);
/** @type {?} */
export const ROW_EXPAND_KEYS = new Set('right down arrowright arrowdown'.split(' '));
/** @type {?} */
export const ROW_COLLAPSE_KEYS = new Set('left up arrowleft arrowup'.split(' '));
/** @type {?} */
export const SUPPORTED_KEYS = new Set([...Array.from(NAVIGATION_KEYS), 'tab', 'enter', 'f2', 'escape', 'esc']);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQU0sVUFBVSxVQUFVLENBQUMsS0FBWSxFQUFFLElBQWM7O1VBQzdDLEdBQUcsR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNSLE9BQU8sR0FBRyxDQUFDO0tBQ2Q7O1FBQ0csQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNO0lBQ3BCLE9BQU8sQ0FBQyxFQUFFLEVBQUU7UUFDUixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuRDtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7Ozs7QUFNRCxNQUFNLFVBQVUsc0JBQXNCLENBQUMsS0FBWSxFQUFFLFlBQWlCOztVQUM1RCxNQUFNLEdBQVUsRUFBRTtJQUN4QixJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1IsT0FBTyxNQUFNLENBQUM7S0FDakI7SUFFRCxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTs7Y0FDaEIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFO1lBQ25DLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDN0Y7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQzs7Ozs7Ozs7QUFTRCxN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Q0FBYzs7O0FBR2xCLE1BQU0sT0FBTyxlQUFlLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWTtJQUN4RixNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7O0FBQ3pFLE1BQU0sT0FBTyxlQUFlLEdBQUcsSUFBSSxHQUFHLENBQUMsaUNBQWlDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUNwRixNQUFNLE9BQU8saUJBQWlCLEdBQUcsSUFBSSxHQUFHLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUNoRixNQUFNLE9BQU8sY0FBYyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUFycmF5KGFycmF5OiBhbnlbXSwgZGVlcD86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBpZiAoIWFycmF5KSB7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGxldCBpID0gYXJyYXkubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgYXJyW2ldID0gZGVlcCA/IGNsb25lVmFsdWUoYXJyYXlbaV0pIDogYXJyYXlbaV07XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59XG5cbi8qKlxuICogRG9lc24ndCBjbG9uZSBsZWFmIGl0ZW1zXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUhpZXJhcmNoaWNhbEFycmF5KGFycmF5OiBhbnlbXSwgY2hpbGREYXRhS2V5OiBhbnkpOiBhbnlbXSB7XG4gICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgIGlmICghYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyYXkpIHtcbiAgICAgICAgY29uc3QgY2xvbmVkSXRlbSA9IGNsb25lVmFsdWUoaXRlbSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1bY2hpbGREYXRhS2V5XSkpIHtcbiAgICAgICAgICAgIGNsb25lZEl0ZW1bY2hpbGREYXRhS2V5XSA9IGNsb25lSGllcmFyY2hpY2FsQXJyYXkoY2xvbmVkSXRlbVtjaGlsZERhdGFLZXldLCBjaGlsZERhdGFLZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKGNsb25lZEl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERlZXAgY2xvbmVzIGFsbCBmaXJzdCBsZXZlbCBrZXlzIG9mIE9iajIgYW5kIG1lcmdlcyB0aGVtIHRvIE9iajFcbiAqIEBwYXJhbSBvYmoxIE9iamVjdCB0byBtZXJnZSBpbnRvXG4gKiBAcGFyYW0gb2JqMiBPYmplY3QgdG8gbWVyZ2UgZnJvbVxuICogQHJldHVybnMgT2JqMSB3aXRoIG1lcmdlZCBjbG9uZWQga2V5cyBmcm9tIE9iajJcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhvYmoxOiB7fSwgb2JqMjoge30pOiBhbnkge1xuICAgIGlmICghaXNPYmplY3Qob2JqMSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgbWVyZ2UgaW50byAke29iajF9LiBGaXJzdCBwYXJhbSBtdXN0IGJlIGFuIG9iamVjdC5gKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzT2JqZWN0KG9iajIpKSB7XG4gICAgICAgIHJldHVybiBvYmoxO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iajIpKSB7XG4gICAgICAgIG9iajFba2V5XSA9IGNsb25lVmFsdWUob2JqMltrZXldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqMTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGRlZXAgY2xvbmUgb2YgcHJvdmlkZWQgdmFsdWUuXG4gKiBTdXBwb3J0cyBwcmltaXRpdmUgdmFsdWVzLCBkYXRlcyBhbmQgb2JqZWN0cy5cbiAqIElmIHBhc3NlZCB2YWx1ZSBpcyBhcnJheSByZXR1cm5zIHNoYWxsb3cgY29weSBvZiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gdmFsdWUgdmFsdWUgdG8gY2xvbmVcbiAqIEByZXR1cm5zIERlZXAgY29weSBvZiBwcm92aWRlZCB2YWx1ZVxuICpAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZS5nZXRUaW1lKCkpO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIFsuLi52YWx1ZV07XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwIHx8IHZhbHVlIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBjbG9uZVZhbHVlKHZhbHVlW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgcHJvdmlkZWQgdmFyaWFibGUgaXMgT2JqZWN0XG4gKiBAcGFyYW0gdmFsdWUgVmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHRydWUgaWYgcHJvdmlkZWQgdmFyaWFibGUgaXMgT2JqZWN0XG4gKkBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHByb3ZpZGVkIHZhcmlhYmxlIGlzIERhdGVcbiAqIEBwYXJhbSB2YWx1ZSBWYWx1ZSB0byBjaGVja1xuICogQHJldHVybnMgdHJ1ZSBpZiBwcm92aWRlZCB2YXJpYWJsZSBpcyBEYXRlXG4gKkBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHR3byBwYXNzZWQgYXJndW1lbnRzIGFyZSBlcXVhbFxuICogQ3VycmVudGx5IHN1cHBvcnRzIGRhdGUgb2JqZWN0c1xuICogQHBhcmFtIG9iajFcbiAqIEBwYXJhbSBvYmoyXG4gKiBAcmV0dXJuczogYGJvb2xlYW5gXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VxdWFsKG9iajEsIG9iajIpOiBib29sZWFuIHtcbiAgICBpZiAoaXNEYXRlKG9iajEpICYmIGlzRGF0ZShvYmoyKSkge1xuICAgICAgICByZXR1cm4gb2JqMS5nZXRUaW1lKCkgPT09IG9iajIuZ2V0VGltZSgpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqMSA9PT0gb2JqMjtcbn1cblxuLyoqXG4gKkBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gS0VZQ09ERVMge1xuICAgIEVOVEVSID0gMTMsXG4gICAgU1BBQ0UgPSAzMixcbiAgICBFU0NBUEUgPSAyNyxcbiAgICBMRUZUX0FSUk9XID0gMzcsXG4gICAgVVBfQVJST1cgPSAzOCxcbiAgICBSSUdIVF9BUlJPVyA9IDM5LFxuICAgIERPV05fQVJST1cgPSA0MCxcbiAgICBGMiA9IDExMyxcbiAgICBUQUIgPSA5XG59XG5cbi8qKlxuICpAaGlkZGVuXG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIEtFWVMge1xuICAgIEVOVEVSID0gJ0VudGVyJyxcbiAgICBTUEFDRSA9ICcgJyxcbiAgICBTUEFDRV9JRSA9ICdTcGFjZWJhcicsXG4gICAgRVNDQVBFID0gJ0VzY2FwZScsXG4gICAgRVNDQVBFX0lFID0gJ0VzYycsXG4gICAgTEVGVF9BUlJPVyA9ICdBcnJvd0xlZnQnLFxuICAgIExFRlRfQVJST1dfSUUgPSAnTGVmdCcsXG4gICAgVVBfQVJST1cgPSAnQXJyb3dVcCcsXG4gICAgVVBfQVJST1dfSUUgPSAnVXAnLFxuICAgIFJJR0hUX0FSUk9XID0gJ0Fycm93UmlnaHQnLFxuICAgIFJJR0hUX0FSUk9XX0lFID0gJ1JpZ2h0JyxcbiAgICBET1dOX0FSUk9XID0gJ0Fycm93RG93bicsXG4gICAgRE9XTl9BUlJPV19JRSA9ICdEb3duJyxcbiAgICBGMiA9ICdGMicsXG4gICAgVEFCID0gJ1RhYidcbn1cblxuLyoqXG4gKkBoaWRkZW5cbiogUmV0dXJucyB0aGUgYWN0dWFsIHNpemUgb2YgdGhlIG5vZGUgY29udGVudCwgdXNpbmcgUmFuZ2VcbiogYGBgdHlwZXNjcmlwdFxuKiBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuKiBsZXQgY29sdW1uID0gdGhpcy5ncmlkLmNvbHVtbkxpc3QuZmlsdGVyKGMgPT4gYy5maWVsZCA9PT0gJ0lEJylbMF07XG4qXG4qIGxldCBzaXplID0gZ2V0Tm9kZVNpemVWaWFSYW5nZShyYW5nZSwgY29sdW1uLmNlbGxzWzBdLm5hdGl2ZUVsZW1lbnQpO1xuKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVTaXplVmlhUmFuZ2UocmFuZ2U6IFJhbmdlLCBub2RlOiBhbnkpOiBudW1iZXIge1xuICAgIGxldCBvdmVyZmxvdyA9IG51bGw7XG4gICAgaWYgKGlzSUUoKSB8fCBpc0VkZ2UoKSkge1xuICAgICAgICBvdmVyZmxvdyA9IG5vZGUuc3R5bGUub3ZlcmZsb3c7XG4gICAgICAgIC8vIHdlIG5lZWQgdGhhdCBoYWNrIC0gb3RoZXJ3aXNlIGNvbnRlbnQgd29uJ3QgYmUgbWVhc3VyZWQgY29ycmVjdGx5IGluIElFL0VkZ2VcbiAgICAgICAgbm9kZS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICB9XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XG4gICAgY29uc3Qgd2lkdGggPSByYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblxuICAgIGlmIChpc0lFKCkgfHwgaXNFZGdlKCkpIHtcbiAgICAgICAgLy8gd2UgbmVlZCB0aGF0IGhhY2sgLSBvdGhlcndpc2UgY29udGVudCB3b24ndCBiZSBtZWFzdXJlZCBjb3JyZWN0bHkgaW4gSUUvRWRnZVxuICAgICAgICBub2RlLnN0eWxlLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xufVxuLyoqXG4gKkBoaWRkZW5cbiogUmV0dXJucyB0aGUgYWN0dWFsIHNpemUgb2YgdGhlIG5vZGUgY29udGVudCwgdXNpbmcgQ2FudmFzXG4qIGBgYHR5cGVzY3JpcHRcbiogbGV0IGN0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XG4qIGxldCBjb2x1bW4gPSB0aGlzLmdyaWQuY29sdW1uTGlzdC5maWx0ZXIoYyA9PiBjLmZpZWxkID09PSAnSUQnKVswXTtcbipcbiogbGV0IHNpemUgPSB2YWxUb1B4bHNVc2luZ0NhbnZhcyhjdHgsIGNvbHVtbi5jZWxsc1swXS5uYXRpdmVFbGVtZW50KTtcbiogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlU2l6ZVZpYUNhbnZhcyhjYW52YXMyZEN0eDogYW55LCBub2RlOiBhbnkpOiBudW1iZXIge1xuICAgIGNvbnN0IHMgPSB0aGlzLmdyaWQuZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICAgIC8vIG5lZWQgdG8gc2V0IHRoZSBmb250IHRvIGdldCBjb3JyZWN0IHdpZHRoXG4gICAgY2FudmFzMmRDdHguZm9udCA9IHMuZm9udFNpemUgKyAnICcgKyBzLmZvbnRGYW1pbHk7XG5cbiAgICByZXR1cm4gY2FudmFzMmRDdHgubWVhc3VyZVRleHQobm9kZS50ZXh0Q29udGVudCkud2lkdGg7XG59XG4vKipcbiAqQGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNJRSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZignVHJpZGVudC8nKSA+IDA7XG59XG4vKipcbiAqQGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFZGdlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGVkZ2VCcm93c2VyID0gL0VkZ2VbXFwvXFxzXShcXGQrXFwuXFxkKykvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgcmV0dXJuIGVkZ2VCcm93c2VyO1xufVxuXG4vKipcbiAqQGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGaXJlZm94KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGZpcmVmb3hCcm93c2VyID0gL0ZpcmVmb3hbXFwvXFxzXShcXGQrXFwuXFxkKykvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgcmV0dXJuIGZpcmVmb3hCcm93c2VyO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTGVmdENsaWNrKGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcbiAgICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTmF2aWdhdGlvbktleShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBbJ2Rvd24nLCAndXAnLCAnbGVmdCcsICdyaWdodCcsICdhcnJvd2Rvd24nLCAnYXJyb3d1cCcsICdhcnJvd2xlZnQnLCAnYXJyb3dyaWdodCcsXG4gICAgICAgICdob21lJywgJ2VuZCcsICdzcGFjZScsICdzcGFjZWJhcicsICcgJ10uaW5kZXhPZihrZXkpICE9PSAtMTtcbn1cblxuLyoqXG4gKkBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyOiBhbnlbXSkge1xuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgIGFyci5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgcmVzdWx0LnB1c2goZWwpO1xuICAgICAgICBpZiAoZWwuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuaXNBcnJheShlbC5jaGlsZHJlbikgPyBlbC5jaGlsZHJlbiA6IGVsLmNoaWxkcmVuLnRvQXJyYXkoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoZmxhdHRlbihjaGlsZHJlbikpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW5jZWxhYmxlRXZlbnRBcmdzIHtcbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyB0aGUgYWJpbGl0eSB0byBjYW5jZWwgdGhlIGV2ZW50LlxuICAgICAqL1xuICAgIGNhbmNlbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW5jZWxhYmxlQnJvd3NlckV2ZW50QXJncyBleHRlbmRzIENhbmNlbGFibGVFdmVudEFyZ3Mge1xuICAgIC8qKiBCcm93c2VyIGV2ZW50ICovXG4gICAgZXZlbnQ/OiBFdmVudDtcbn1cblxuZXhwb3J0IGNvbnN0IE5BVklHQVRJT05fS0VZUyA9IG5ldyBTZXQoWydkb3duJywgJ3VwJywgJ2xlZnQnLCAncmlnaHQnLCAnYXJyb3dkb3duJywgJ2Fycm93dXAnLCAnYXJyb3dsZWZ0JywgJ2Fycm93cmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9tZScsICdlbmQnLCAnc3BhY2UnLCAnc3BhY2ViYXInLCAnICddKTtcbmV4cG9ydCBjb25zdCBST1dfRVhQQU5EX0tFWVMgPSBuZXcgU2V0KCdyaWdodCBkb3duIGFycm93cmlnaHQgYXJyb3dkb3duJy5zcGxpdCgnICcpKTtcbmV4cG9ydCBjb25zdCBST1dfQ09MTEFQU0VfS0VZUyA9IG5ldyBTZXQoJ2xlZnQgdXAgYXJyb3dsZWZ0IGFycm93dXAnLnNwbGl0KCcgJykpO1xuZXhwb3J0IGNvbnN0IFNVUFBPUlRFRF9LRVlTID0gbmV3IFNldChbLi4uQXJyYXkuZnJvbShOQVZJR0FUSU9OX0tFWVMpLCAndGFiJywgJ2VudGVyJywgJ2YyJywgJ2VzY2FwZScsICdlc2MnXSk7XG4iXX0=