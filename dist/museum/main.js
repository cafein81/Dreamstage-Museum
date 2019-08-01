(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/hammerjs/hammer.js":
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/a-tour/a-tour.component.css":
/*!*********************************************!*\
  !*** ./src/app/a-tour/a-tour.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2EtdG91ci9hLXRvdXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/a-tour/a-tour.component.html":
/*!**********************************************!*\
  !*** ./src/app/a-tour/a-tour.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  a-tour works!\n</p>\n"

/***/ }),

/***/ "./src/app/a-tour/a-tour.component.ts":
/*!********************************************!*\
  !*** ./src/app/a-tour/a-tour.component.ts ***!
  \********************************************/
/*! exports provided: ATourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATourComponent", function() { return ATourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ATourComponent = /** @class */ (function () {
    function ATourComponent() {
    }
    ATourComponent.prototype.ngOnInit = function () {
    };
    ATourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-a-tour',
            template: __webpack_require__(/*! ./a-tour.component.html */ "./src/app/a-tour/a-tour.component.html"),
            styles: [__webpack_require__(/*! ./a-tour.component.css */ "./src/app/a-tour/a-tour.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ATourComponent);
    return ATourComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-sidenav-container,\n.mat-sidenav-content,\n.mat-tab-body-content {\n  -webkit-transform: none !important;\n          transform: none !important;\n}\n\n.toolbar {\n  height: 100px;\n  color: #00205b;\n}\n\n.mat-toolbar {\n  color: #00205b;\n  background: #00205b;\n}\n\n.logo {\n  font-size: 25px;\n  color: #ffffff;\n  font-weight: 300;\n  margin: 0 auto;\n  font-family: \"Libre Baskerville\", serif;\n  letter-spacing: 2px;\n}\n\n.brief {\n  padding-top: 50px;\n  text-align: center;\n  max-width: 880px;\n  margin: 0 auto;\n}\n\n.title {\n  font-family: \"Libre Baskerville\", serif;\n  font-size: 25px;\n  font-weight: 300;\n  color: #00205b;\n}\n\n.content {\n  margin-top: 40px;\n  text-align: justify;\n  text-justify: inter-word;\n  font-size: 18px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  color: #333333;\n  line-height: 30px;\n}\n\n.mohamadali {\n  width: 100%;\n  height: 700px;\n}\n\n.Int-Hob {\n  height: auto;\n  width: 100%;\n}\n\n.left-side {\n  height: 700px;\n  width: 100%;\n  padding: 40px;\n}\n\n.left-side h1 {\n  font-family: \"Libre Baskerville\", serif;\n  font-size: 25px;\n  font-weight: 300;\n  color: #00205b;\n}\n\n.left-side p {\n  margin-top: 20px;\n  text-align: justify;\n  text-justify: inter-word;\n  font-size: 16px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  color: #333333;\n  line-height: 30px;\n}\n\n.right-side {\n  height: 700px;\n  width: 100%;\n  padding: 112px;\n}\n\n.prop-left-side {\n  height: 700px;\n  width: 100%;\n  padding: 40px;\n}\n\n.prop-left-side h1 {\n  font-family: \"Libre Baskerville\", serif;\n  font-size: 25px;\n  font-weight: 300;\n  color: #00205b;\n}\n\n.prop-left-side p {\n  margin-top: 20px;\n  text-align: justify;\n  text-justify: inter-word;\n  font-size: 16px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  color: #333333;\n  line-height: 30px;\n}\n\n.prop-right-side {\n  height: 700px;\n  width: 100%;\n  padding: 112px;\n}\n\n.tour {\n  padding-top: 40px;\n}\n\n.tour-heading h1 {\n  font-family: \"Libre Baskerville\", serif;\n  font-size: 25px;\n  font-weight: 300;\n  color: #00205b;\n  padding-left: 40px;\n}\n\n.img-1 {\n  width: 250px;\n  height: 250px;\n  background-image: url(\"/assets/M04_1.JPG\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n.img-2 {\n  width: 250px;\n  height: 250px;\n  background-image: url(\"/assets/M04_3.JPG\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n.img-3 {\n  width: 250px;\n  height: 250px;\n  background-image: url(\"/assets/M04_4.JPG\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n.img-4 {\n  width: 250px;\n  height: 250px;\n  background-image: url(\"/assets/M04_5.JPG\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n.img-5 {\n  width: 250px;\n  height: 250px;\n  background-image: url(\"/assets/M04_6.JPG\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n.img-6 {\n  width: 250px;\n  height: 250px;\n  background-image: url(\"/assets/M04_7.JPG\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n.img-7 {\n  width: 250px;\n  height: 250px;\n  background-image: url(\"/assets/M04_8.JPG\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n.img-8 {\n  width: 250px;\n  height: 250px;\n  background-image: url(\"/assets/M02.JPG\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n::ng-deep .mat-step-header .mat-step-icon {\n  background-color: #00205b;\n}\n\n.site-card {\n  width: 100%;\n  height: 500px;\n}\n\n.fur-read {\n  text-align: justify;\n  text-justify: inter-word;\n  font-family: \"Roboto\", sans-serif;\n  color: #333333;\n}\n\n.fur-read-img img {\n  width: 150px;\n  height: 220px;\n}\n\n.mat-tit {\n  color: #666666;\n}\n\n.contact-link a {\n  text-decoration: none;\n  color: #333333;\n}\n\n.contact-link a:hover {\n  text-decoration: none;\n  color: dodgerblue;\n}\n\n.museum-image {\n  height: 250px;\n  width: 100%;\n}\n\n.museum-text {\n  text-align: justify;\n  text-justify: inter-word;\n  font-family: \"Roboto\", sans-serif;\n  color: #333333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixpQ0FBaUM7RUFDakMsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zaWRlbmF2LWNvbnRhaW5lcixcbi5tYXQtc2lkZW5hdi1jb250ZW50LFxuLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50b29sYmFyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgY29sb3I6ICMwMDIwNWI7XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIGNvbG9yOiAjMDAyMDViO1xuICBiYWNrZ3JvdW5kOiAjMDAyMDViO1xufVxuXG4ubG9nbyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LWZhbWlseTogXCJMaWJyZSBCYXNrZXJ2aWxsZVwiLCBzZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLmJyaWVmIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA4ODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxpYnJlIEJhc2tlcnZpbGxlXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAyMDViO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4ubW9oYW1hZGFsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwMHB4O1xufVxuXG4uSW50LUhvYiB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sZWZ0LXNpZGUge1xuICBoZWlnaHQ6IDcwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuLmxlZnQtc2lkZSBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxpYnJlIEJhc2tlcnZpbGxlXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAyMDViO1xufVxuXG4ubGVmdC1zaWRlIHAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLnJpZ2h0LXNpZGUge1xuICBoZWlnaHQ6IDcwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTEycHg7XG59XG5cbi5wcm9wLWxlZnQtc2lkZSB7XG4gIGhlaWdodDogNzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0MHB4O1xufVxuXG4ucHJvcC1sZWZ0LXNpZGUgaDEge1xuICBmb250LWZhbWlseTogXCJMaWJyZSBCYXNrZXJ2aWxsZVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMjA1Yjtcbn1cblxuLnByb3AtbGVmdC1zaWRlIHAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLnByb3AtcmlnaHQtc2lkZSB7XG4gIGhlaWdodDogNzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMTJweDtcbn1cblxuLnRvdXIge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuLnRvdXItaGVhZGluZyBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxpYnJlIEJhc2tlcnZpbGxlXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAyMDViO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbi5pbWctMSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9NMDRfMS5KUEdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG5cbi5pbWctMiB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9NMDRfMy5KUEdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG5cbi5pbWctMyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9NMDRfNC5KUEdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG5cbi5pbWctNCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9NMDRfNS5KUEdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG5cbi5pbWctNSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9NMDRfNi5KUEdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG5cbi5pbWctNiB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9NMDRfNy5KUEdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG5cbi5pbWctNyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9NMDRfOC5KUEdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG5cbi5pbWctOCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9NMDIuSlBHXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDIwNWI7XG59XG5cbi5zaXRlLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLmZ1ci1yZWFkIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uZnVyLXJlYWQtaW1nIGltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyMjBweDtcbn1cblxuLm1hdC10aXQge1xuICBjb2xvcjogIzY2NjY2Njtcbn1cblxuLmNvbnRhY3QtbGluayBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmNvbnRhY3QtbGluayBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogZG9kZ2VyYmx1ZTtcbn1cblxuLm11c2V1bS1pbWFnZSB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXVzZXVtLXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzMzMzMzMztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<mat-toolbar class=\"toolbar\">\n  <span class=\"logo\">Dreamstage Museum</span>\n</mat-toolbar>\n\n<mat-tab-group mat-align-tabs=\"center\">\n  <mat-tab label=\"Home\">\n    <particles\n      [style]=\"myStyle\"\n      [width]=\"width\"\n      [height]=\"height\"\n      [params]=\"myParams\"\n    ></particles>\n\n    <mat-divider></mat-divider>\n    <div class=\"brief\">\n      <h1 class=\"title\">\n        Welcome to the Dreamstage Brain and Sleep Science Museum\n      </h1>\n      <h3 class=\"content\">\n        Over a long and successful career as a sleep and dream researcher, Dr.\n        J. Allan Hobson collected numerous unique pictures, books and other\n        items related to his field of study. His museum offers private access to\n        this collection. Since the museum is located in a remote area of\n        Vermont's \"Northeast Kingdom,\" its exhibits have previously only been\n        accessible to local groups and intrepid travelers. Now you can visit it\n        virtually. So feel free to come in and press the buttons. See Dr.\n        Hobson's private collection and listen to his personal commentaries for\n        a guided tour. Learn about the studies and interests of one of the\n        world's leading experts on sleep, dreams and consciousness.\n      </h3>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"Introduction\">\n    <mat-tab-group headerPosition=\"below\" class=\"low-nav\">\n      <mat-tab label=\"Dr. Hobson\">\n        <div class=\"mohamadali\">\n          <div\n            class=\"Int-Hob\"\n            fxLayout=\"row\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"0.5\"\n            fxLayoutAlign=\"center\"\n          >\n            <div fxFlex=\"40%\" class=\"left-side\">\n              <h1>Dr. J. Allan Hobson</h1>\n              <p>\n                Allan Hobson received his A.B. from Wesleyan University (with\n                honors) in 1955, and his M.D. from Harvard University in 1959.\n                He was introduced to sleep and dream research by Frederick\n                Snyder and Edward Evarts at the National Institute of Mental\n                Health in Bethesda, Maryland, and studied with Michel Jouvet in\n                Lyon, France.\n              </p>\n\n              <p>\n                Dr. Hobson was a Professor of Psychiatry at the Harvard Medical\n                School and directed the Laboratory of Neurophysiology at the\n                Massachusetts Mental Health Center in Boston from 1968 to 2003.\n                He has published more than 200 peer-reviewed articles and 10\n                books on sleep, dreaming and consciousness. His theoretical\n                contributions include the reciprocal interaction model of sleep\n                cycle control and the activation-synthesis theory of dreaming\n                (with Robert McCarley), the AIM model of conscious state\n                variation, and the protoconsciousness theory of dream function.\n                He lectures throughout the world on consciousness, sleep and\n                dreaming.\n              </p>\n\n              <p>\n                He is a member of the American Association for the Advancement\n                of Science, the Association for the Psychophysiological Study of\n                Sleep, the National Institute of Mental Health, the Sleep\n                Research Society, the Society for Neuroscience, and the U.S.\n                Public Health Service. He is the recipient of the Distinguished\n                Investigator Award of the Sleep Research Society, the Farrell\n                Prize of the division of Sleep Medicine at Harvard Medical\n                School, the von Humboldt award of the Max Planck Society, and\n                the Benjamin Rush Gold Medal for the best scientific exhibit\n                (for Dreamstage), from the American Psychiatric Association.\n              </p>\n            </div>\n            <div fxFlex=\"60%\" class=\"right-side\">\n              <img\n                width=\"100%\"\n                height=\"450px\"\n                src=\"./assets/lobsterallan.jpg\"\n                alt=\"Allan Hobson\"\n              />\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n\n      <mat-tab label=\"The Property\">\n        <div class=\"mohamadali\">\n          <div\n            class=\"Int-Hob\"\n            fxLayout=\"row\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"0.5\"\n            fxLayoutAlign=\"center\"\n          >\n            <div fxFlex=\"40%\" class=\"prop-left-side\">\n              <h1>The North Star Farm in East Burke, Vermont</h1>\n              <p>\n                Dr. Hobson bought this property for a second home in 1965. By\n                employing local carpenters and other workers, he has spent many\n                years happily restoring the buildings, and continues to make\n                improvements to this day.\n              </p>\n            </div>\n            <div fxFlex=\"60%\" class=\"prop-right-side\">\n              <img\n                width=\"100%\"\n                height=\"450px\"\n                src=\"./assets/M01.JPG\"\n                alt=\"Property\"\n              />\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"The Barn\">\n        <div class=\"mohamadali\">\n          <div\n            class=\"Int-Hob\"\n            fxLayout=\"row\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"0.5\"\n            fxLayoutAlign=\"center\"\n          >\n            <div fxFlex=\"40%\" class=\"left-side\">\n              <h1>The North Star Farm Barn</h1>\n              <p>\n                This barn was once the heart of a working dairy farm, originally\n                started by an Irish immigrant in 1860. Now it has been restored\n                and houses the Dreamstage Museum. The second floor is\n                partitioned into the entry, the Dreamstage Exhibit, the office,\n                the gallery and a storage area. The silo is now Dr. Hobson's\n                library.\n              </p>\n            </div>\n            <div fxFlex=\"60%\" class=\"right-side\">\n              <img\n                width=\"100%\"\n                height=\"450px\"\n                src=\"./assets/M02.JPG\"\n                alt=\"Property\"\n              />\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"A Tour\">\n        <div class=\"mohamadali\">\n          <div class=\"tour\">\n            <div class=\"tour-heading\">\n              <h1>A Visit From Burke Junior High School Students</h1>\n            </div>\n            <br />\n            <div\n              class=\"tour-1\"\n              fxLayout=\"row\"\n              fxLayout.xs=\"column\"\n              fxLayoutGap=\"0.5\"\n              fxLayoutAlign=\"center\"\n            >\n              <div fxFlex=\"20%\">\n                <img class=\"img-1\" />\n              </div>\n              <div fxFlex=\"20%\">\n                <img class=\"img-2\" />\n              </div>\n              <div fxFlex=\"20%\">\n                <img class=\"img-3\" />\n              </div>\n              <div fxFlex=\"20%\">\n                <img class=\"img-4\" />\n              </div>\n            </div>\n            <br />\n\n            <div\n              class=\"tour-2\"\n              fxLayout=\"row\"\n              fxLayout.xs=\"column\"\n              fxLayoutGap=\"0.5\"\n              fxLayoutAlign=\"center\"\n            >\n              <div fxFlex=\"20%\">\n                <img class=\"img-5\" />\n              </div>\n              <div fxFlex=\"20%\">\n                <img class=\"img-6\" />\n              </div>\n              <div fxFlex=\"20%\">\n                <img class=\"img-7\" />\n              </div>\n              <div fxFlex=\"20%\">\n                <img class=\"img-8\" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </mat-tab>\n\n  <mat-tab label=\"Multimedia\">\n    <mat-tab-group headerPosition=\"below\" class=\"low-nav\">\n      <mat-tab label=\"Photos\">\n        <div class=\"mohamadali\">\n          <div\n            class=\"gallery\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"center\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"0.5\"\n          >\n            <div fxFlex=\"40%\" class=\"left-side\">\n              <h1>Photos From the Museum</h1>\n              <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy\n                text ever since the 1500s, when an unknown printer took a galley\n                of type and scrambled it to make a type specimen book. It has\n                survived not only five centuries, but also the leap into\n                electronic typesetting, remaining essentially unchanged. It was\n                popularised in the 1960s with the release of Letraset sheets\n                containing Lorem Ipsum passages, and more recently with desktop\n                publishing software like Aldus PageMaker including versions of\n                Lorem Ipsum.\n              </p>\n            </div>\n            <div fxFlex=\"60%\" class=\"right-side\">\n              <ngx-gallery\n                [options]=\"galleryOptions\"\n                [images]=\"galleryImages\"\n              ></ngx-gallery>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Audios\">\n        <div class=\"mohamadali\">\n          <div\n            class=\"audio\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"center\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"0.5\"\n          >\n            <div fxFlex=\"40%\" class=\"left-side\">\n              <h1>A Lecture Series by Dr. Hobson</h1>\n              <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy\n                text ever since the 1500s, when an unknown printer took a galley\n                of type and scrambled it to make a type specimen book. It has\n                survived not only five centuries, but also the leap into\n                electronic typesetting, remaining essentially unchanged. It was\n                popularised in the 1960s with the release of Letraset sheets\n                containing Lorem Ipsum passages, and more recently with desktop\n                publishing software like Aldus PageMaker including versions of\n                Lorem Ipsum.\n              </p>\n            </div>\n            <div fxFlex=\"60%\" class=\"right-side\">\n              <iframe\n                width=\"800\"\n                height=\"550\"\n                scrolling=\"yes\"\n                frameborder=\"no\"\n                allow=\"autoplay\"\n                src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/819256512%3Fsecret_token%3Ds-B0oaM&color=%2300205b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true\"\n              ></iframe>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Videos\">\n        <div class=\"mohamadali\">\n          <div\n            class=\"video\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"center\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"0.5\"\n          >\n            <div fxFlex=\"40%\" class=\"left-side\">\n              <h1>\n                Dr. Hobson at the BIAL Foundation\n              </h1>\n              <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy\n                text ever since the 1500s, when an unknown printer took a galley\n                of type and scrambled it to make a type specimen book. It has\n                survived not only five centuries, but also the leap into\n                electronic typesetting, remaining essentially unchanged. It was\n                popularised in the 1960s with the release of Letraset sheets\n                containing Lorem Ipsum passages, and more recently with desktop\n                publishing software like Aldus PageMaker including versions of\n                Lorem Ipsum.\n              </p>\n            </div>\n            <div fxFlex=\"60%\" class=\"right-side\">\n              <mat-video\n                src=\"https://firebasestorage.googleapis.com/v0/b/dreamstage-museum.appspot.com/o/Hobson.mp4?alt=media&token=3f7c7030-77a3-455d-aa0b-1f03499d9173\"\n                type=\"video/mp4\"\n                title=\"Dr. Allan Hobson\"\n                [autoplay]=\"false\"\n                [preload]=\"true\"\n                [fullscreen]=\"true\"\n                [download]=\"true\"\n                color=\"#00205b\"\n                spinner=\"spin\"\n                poster=\"assets/M04_1.JPG\"\n              ></mat-video>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </mat-tab>\n\n  <mat-tab label=\"Museum\">\n    <mat-tab-group headerPosition=\"below\" class=\"low-nav\">\n      <mat-tab label=\"Entry\">\n        <div class=\"mohamadali\">\n          <div\n            class=\"video\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"center\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"0.5\"\n          >\n            <div fxFlex=\"30%\" class=\"left-side\">\n              <h1>\n                The Museum Entry\n              </h1>\n              <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy\n                text ever since the 1500s, when an unknown printer took a galley\n                of type and scrambled it to make a type specimen book. It has\n                survived not only five centuries, but also the leap into\n                electronic typesetting, remaining essentially unchanged. It was\n                popularised in the 1960s with the release of Letraset sheets\n                containing Lorem Ipsum passages, and more recently with desktop\n                publishing software like Aldus PageMaker including versions of\n                Lorem Ipsum.\n              </p>\n            </div>\n            <div fxFlex=\"70%\" class=\"right-side\">\n              <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n                <ng-template matStepperIcon=\"edit\">\n                  <mat-icon>done</mat-icon>\n                </ng-template>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/en1.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        The entry to the Dreamstage Museum displays posters and\n                        an orientation video. Three doors lead into the\n                        Dreamstage Exhibit, the office and the gallery\n                        respectively. This photo shows the stairway up from the\n                        first floor of the barn and the door to the gallery.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/en2.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>A poster of a frog's brain.</p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/en3.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>Another poster of a frog's brain.</p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/en4.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>Poster announcing a lecture given by Dr. Hobson.</p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/en5.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>Another lecture poster.</p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/en6.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Press clippings written in 1977, including from the New\n                        York Times and Boston Globe, about the Dreamstage\n                        Exhibition.\n                      </p>\n\n                      <p>\n                        \"In creating Dreamstage, Dr. Hobson has done a\n                        tremendous service for sleep research, neuroscience, and\n                        science in general. The Dreamstage is a break-through in\n                        scientific exhibits. It is a work of art that must be\n                        returned to again and again to appreciate all the\n                        nuances and intertwining significances as well as the\n                        sheer details of content.... I felt pride for sleep\n                        research and profound gratitude for such renaissance\n                        practitioners of the art.\"\n                      </p>\n\n                      <p>\n                        -- William Dement, M.D. Ph.D., Sleep Disorders Clinic\n                        and Laboratory, Stanford University Medical Center\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                  </div>\n                </mat-step>\n              </mat-vertical-stepper>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Dreamstage\">\n        <div class=\"mohamadali\">\n          <div\n            class=\"video\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"center\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"0.5\"\n          >\n            <div fxFlex=\"30%\" class=\"left-side\">\n              <h1>\n                Dreamstage Exhibit\n              </h1>\n              <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy\n                text ever since the 1500s, when an unknown printer took a galley\n                of type and scrambled it to make a type specimen book. It has\n                survived not only five centuries, but also the leap into\n                electronic typesetting, remaining essentially unchanged. It was\n                popularised in the 1960s with the release of Letraset sheets\n                containing Lorem Ipsum passages, and more recently with desktop\n                publishing software like Aldus PageMaker including versions of\n                Lorem Ipsum.\n              </p>\n            </div>\n            <div fxFlex=\"70%\" class=\"right-side\">\n              <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n                <ng-template matStepperIcon=\"edit\">\n                  <mat-icon>done</mat-icon>\n                </ng-template>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr1.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        The Dreamstage Exhibition first opened at Harvard\n                        University in April of 1977. It toured around the U.S.\n                        from 1978 to 1980 and was recreated in Bordeaux, France\n                        in 1982. After the exhibit stopped touring, Dr. Hobson\n                        stored it in his barn. It now forms the centerpiece of\n                        his Dreamstage Museum.\n                      </p>\n\n                      <p>\n                        The artworks and photographs displayed include works by\n                        Rafael Lorente de No, Santiago Ramon y Cajal, Facundo\n                        Valverde, Thomas Woolsey, Theodore Spagna, Arnold\n                        Scheibel, Alvin Berman, Clinton Woolsey, David Scott,\n                        Ruth Bleier and John Woolsey.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr2.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Dreamstage Poster from the original tour.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr3.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Santiago Ramon y Cajal drawing of a frog's spinal cord.\n                      </p>\n\n                      <p>\n                        The Spanish neuroanatomist Santiago Ramon y Cajal first\n                        proposed that the brain cell (or neuron) was the\n                        structural unit of the nervous system. Our brains\n                        contain roughly 100 billion neurons which work together\n                        to produce our waking and dreaming states of\n                        consciousness.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr4.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>Santiago Ramon y Cajal drawing of nerve cells.</p>\n\n                      <p>\n                        Working with Cajal, Lorente de No studied the\n                        regeneration of nerve cells as may occur when we have\n                        accidents or diseases of the brain. How much recovery\n                        the brain can achieve is still unknown. Many of the\n                        neurons drawn by Lorente were in the cerebral cortex and\n                        brainstem.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr5.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Facundo Valverde drawing of nervous system connections.\n                      </p>\n\n                      <p>\n                        Each neuron contacts at least 10,000 others via its\n                        axons and receives information from thousands of other\n                        brain cells. The contact points, called synapses, can be\n                        on the large body of the cell or on its spider-like\n                        processes, the dendrites, which have tiny spines that\n                        are specialized receivers of brain information.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr6.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Thomas Woolsey computer-generated image of a neuron and\n                        a photograph of nerve cells.\n                      </p>\n\n                      <p>\n                        In order to facilitate the study of the detailed\n                        structure of neurons, Thomas Woolsey designed a\n                        computerized system for representing cell bodies, axons,\n                        and dendrites. Thomas is the scientist son of Clinton\n                        Woolsey.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr7.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Theodore Spagna time-lapse photographs of a sleeper and\n                        his cat, showing their movements throughout their sleep\n                        cycles.\n                      </p>\n\n                      <p>\n                        Using a Zeiss Ikon time-lapse camera, Spagna recorded\n                        the sleep of his friend Peter and Peter's cat. Peter's\n                        frequent posture shifts were indicative of his poor\n                        sleep. Many of Spagna's friends and family were the\n                        subjects of his pioneering studies.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr8.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>Arnold Scheibel drawing of brainstem details.</p>\n\n                      <p>\n                        By using the Golgi method for staining neurons, it was\n                        possible for scientists like Scheibel to show that the\n                        cells of the brainstem received information from all\n                        over the body. Some projected to the eye movement\n                        centers while some projected to the cortex and still\n                        others to the spinal cord. The brain stem is thus the\n                        \"command center\" for the brain's neurons.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr9.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Arnold Scheibel drawing of reticular neurons.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr10.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Another Arnold Scheibel drawing.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr11.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Alvin Berman photograph of a cross section of a cat's\n                        brainstem, from his brain atlas.\n                      </p>\n\n                      <p>\n                        Like star maps, these pages of the atlas of the cat\n                        brainstem enable scientists to aim their probes at\n                        specific cellular regions and to explore both the\n                        spontaneous and chemically induced activity of the\n                        neurons.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr12.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Alvin Berman photograph of a sagittal cross section of a\n                        cat's cerebellum and brainstem, from his brain atlas.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr13.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Alvin Berman photograph of a horizontal cross section of\n                        a cat's hypothalamus and brainstem, from his brain\n                        atlas.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr14.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Clinton Woolsey illustration of the effects on movement\n                        of the stimulation of various locations in the cortex.\n                      </p>\n\n                      <p>\n                        The ability of neurons to control movement and to sense\n                        the environment can be studied by electrical stimulation\n                        and recording techniques. Clinton Woolsey pioneered\n                        these methods and communicated his findings via his\n                        figurine and animalculi drawings.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr15.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Another Clinton Woolsey illustration of the effects on\n                        movement of the stimulation of various locations in the\n                        cortex.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr16.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Clinton Woolsey illustration of how a rabbit's body is\n                        mapped to specific locations in its brain.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr17.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        David Scott and Ruth Bleier electron-micrographic\n                        photographs of cilia in the ventricles of the brain.\n                      </p>\n\n                      <p>\n                        The brain has hollow chambers called ventricles which\n                        are filled with crystal clear liquid. This cerebrospinal\n                        fluid (or CSF) is made by a specialized blood filter\n                        system called the choroid plexus shown above and on the\n                        left. The functions of the CSF are poorly understood but\n                        it may serve to keep the brain afloat and could allow\n                        internal communication. On the floor of these canals are\n                        delicate fronds called cilia, which float as in a tidal\n                        pool, and strange looking creatures that appear to be\n                        cleaning the surface of the ventricles.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr18.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Another David Scott and Ruth Bleier\n                        electron-micrographic photograph.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr19.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        David Scott and Ruth Bleier electron-micrographic\n                        photograph of cells of unknown function.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr20.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Another David Scott and Ruth Bleier\n                        electron-micrographic photograph.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr21.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        John Woolsey lithograph of a cross section of a cat's\n                        lower brainstem.\n                      </p>\n\n                      <p>\n                        The artist son of the neuroscientist Clinton Woolsey\n                        helped Alvin Berman make his atlas of the cat brainstem.\n                        He borrowed some of the slides and copied projections of\n                        them to create images like the silkscreen print shown\n                        here.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr22.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A human brain in a jar.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr23.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Terra cotta figures representing sleepers. In the\n                        original Dreamstage Exhibition, a live sleeper occupied\n                        the sleep chamber.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr24.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        An x-ray of Dr. Hobson's head, taken when he had amnesia\n                        from a car accident.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/dr25.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Posters made from photos of details of the brain.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                  </div>\n                </mat-step>\n              </mat-vertical-stepper>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Library\">\n        <div class=\"mohamadali\">\n          <div\n            class=\"video\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"center\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"0.5\"\n          >\n            <div fxFlex=\"30%\" class=\"left-side\">\n              <h1>\n                The Museum Library\n              </h1>\n              <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy\n                text ever since the 1500s, when an unknown printer took a galley\n                of type and scrambled it to make a type specimen book. It has\n                survived not only five centuries, but also the leap into\n                electronic typesetting, remaining essentially unchanged. It was\n                popularised in the 1960s with the release of Letraset sheets\n                containing Lorem Ipsum passages, and more recently with desktop\n                publishing software like Aldus PageMaker including versions of\n                Lorem Ipsum.\n              </p>\n            </div>\n            <div fxFlex=\"70%\" class=\"right-side\">\n              <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n                <ng-template matStepperIcon=\"edit\">\n                  <mat-icon>done</mat-icon>\n                </ng-template>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/lib1.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        The library was built into the barn's silo, and occupies\n                        the second through the fourth floors. It contains all of\n                        Dr. Hobson's manuscripts, clinical notes, reprints,\n                        laboratory notebooks and histologies, as well as his\n                        personal collection of books about science, the brain,\n                        consciousness, sleep and dreaming.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/lib2.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        The second floor of the silo library stores a complete\n                        collection of scientific reprints of Dr. Hobson's work,\n                        as well as reprints of the works of other scientists. It\n                        also contains Dr. Hobson's manuscripts and clinical\n                        notes.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/lib3.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Posters and photographs decorate the walls above the\n                        filing cabinets on the second floor.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/lib4.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        More posters with another Theodore Spagna time-lapse\n                        photo study of a subject sleeping.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/lib5.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        This is the view of the stairway from the third floor to\n                        the second floor of the library, showing the doorway\n                        leading to the Dreamstage Exhibit room. The first floor\n                        of the silo is a storage area accessible from outside\n                        the barn.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/lib6.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        The third floor of the library stores histology boxes\n                        containing the cross sections of cats' brains that Dr.\n                        Hobson and his associates studied in their laboratory\n                        work.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/lib7.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        The third floor also contains Dr. Hobson's laboratory\n                        notebooks.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/lib8.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        The stairway leading up to the fourth floor of the\n                        library.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/lib9.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        The fourth floor of the library contains collections of\n                        over twenty years of scientific journals, including the\n                        Neuroscience and Journal of Neurophysiology volumes\n                        shown here.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/lib10.jpeg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Both the third and fourth floors contain Dr. Hobson's\n                        personal collection of books relating to his studies.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/lib11.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        The reading room at the top of the silo library has\n                        windows looking out in all directions.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/lib12.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        This is the view of the hillside west of the barn.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/lib13.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        This is the view looking east across the farm property.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/lib14.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        The Burke Mountain Ski Area dominates the view looking\n                        south.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                  </div>\n                </mat-step>\n              </mat-vertical-stepper>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Office\">\n        <div class=\"mohamadali\">\n          <div\n            class=\"video\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"center\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"0.5\"\n          >\n            <div fxFlex=\"30%\" class=\"left-side\">\n              <h1>\n                The Museum Office\n              </h1>\n              <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy\n                text ever since the 1500s, when an unknown printer took a galley\n                of type and scrambled it to make a type specimen book. It has\n                survived not only five centuries, but also the leap into\n                electronic typesetting, remaining essentially unchanged. It was\n                popularised in the 1960s with the release of Letraset sheets\n                containing Lorem Ipsum passages, and more recently with desktop\n                publishing software like Aldus PageMaker including versions of\n                Lorem Ipsum.\n              </p>\n            </div>\n            <div fxFlex=\"70%\" class=\"right-side\">\n              <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n                <ng-template matStepperIcon=\"edit\">\n                  <mat-icon>done</mat-icon>\n                </ng-template>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off1.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A view of the office looking back toward the entry.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off2.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        The 1911 edition of the Encyclopedia Britannica, a\n                        collector's item.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off3.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Psychologist B. F. Skinner's electroencephalogram, proof\n                        that the brain is not just a \"black box.\"\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off4.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Rafael Lorente de No photograph, inscription and\n                        drawings.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off5.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A design student's model for a sleep clinic which was\n                        never built.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off6.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Journal rack with issues of publications pertinent to\n                        sleep and dream research.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off7.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A brainstem drawing and photos of colleagues, among\n                        other items.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off8.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A tree fungus painted as a sagittal section of the brain\n                        by John Woolsey.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off9.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A bookcase with Dr. Hobson's books, plus photos and rare\n                        editions.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off10.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Theodore Spagna time-lapse photos, a framed bookcover\n                        and other items.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off11.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Dr. Hobson's Harvard diploma and other certificates of\n                        recognition.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off12.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Other awards and certificates.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off13.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        More awards and certificates.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off14.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Photos and other items of interest, with a John Woolsey\n                        artwork as the centerpiece.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off15.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Clinton Woolsey drawings with photos.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off16.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A handmade gift from one of Dr. Hobson's psychiatric\n                        patients.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off17.gif\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Photos of Sigmund Freud's office, of Freud and of Dr.\n                        Hobson.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off18.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A stained section of a human brain.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off19.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        The Engine Man's dream journal, which Dr. Hobson used in\n                        his research and writings.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off20-1.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Detailed views of the Engine Man's journal.\n                      </p>\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off20-2.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off20-3.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off20-4.jpg\" alt=\"museum entry\" />\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off21.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A glass front bookcase housing some of Dr. Hobson's\n                        favorite books.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/off22.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A poem by Emily Dickinson about the brain.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                  </div>\n                </mat-step>\n              </mat-vertical-stepper>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Gallery\">\n        <div class=\"mohamadali\">\n          <div\n            class=\"video\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"center\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"0.5\"\n          >\n            <div fxFlex=\"30%\" class=\"left-side\">\n              <h1>\n                The Museum Gallery\n              </h1>\n              <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy\n                text ever since the 1500s, when an unknown printer took a galley\n                of type and scrambled it to make a type specimen book. It has\n                survived not only five centuries, but also the leap into\n                electronic typesetting, remaining essentially unchanged. It was\n                popularised in the 1960s with the release of Letraset sheets\n                containing Lorem Ipsum passages, and more recently with desktop\n                publishing software like Aldus PageMaker including versions of\n                Lorem Ipsum.\n              </p>\n            </div>\n            <div fxFlex=\"70%\" class=\"right-side\">\n              <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n                <ng-template matStepperIcon=\"edit\">\n                  <mat-icon>done</mat-icon>\n                </ng-template>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g1.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        The Art of Life Gallery displays Dr. Hobson's personal\n                        art collection. The works were mostly created by family\n                        members and friends.\n                      </p>\n\n                      <p>\n                        \"The Art of Life is what everyone practices. Knowing\n                        that we are all mortal prompts us all to seek ways to\n                        live on after death. And it prompts all of us to make\n                        our lives more graceful.\" -- Allan Hobson\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g2.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Four oil paintings by Elizabeth Thomson.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g3.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Cabinets created by Bob Limlaw to house Dr. Hobson's\n                        personal journals.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g4.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A drawing and photographs, including a panorama of North\n                        Star Farm created by Christopher Hobson.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g5.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        An oil painting by Jay Vogelsong titled \"Lucid Dream.\"\n                        It shows a scene from one of his many lucid dreaming\n                        experiences.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g6.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A pastel and a watercolor created by two of Dr. Hobson's\n                        patients.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g7.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A portrait by Christopher Hobson of his son Henry with\n                        Dr. Hobson's son Matty.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g8.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A small oil painting by Robert Natkin decorates the\n                        window sill.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g9.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A sewn piece by Chantelle Rhode, the head of a woman by\n                        Gill Page and a watercolor by Kaji Aso.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g10.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A painting by Kaji Aso inspired by Vermont fields.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g11.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Dr. Hobson's first wife Joan created this fabric collage\n                        portrait of their family.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g12.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A circular table with chairs, designed by Dr. Hobson and\n                        created by Bob Limlaw, made from an antique maple syrup\n                        vat and milk cans.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g13.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A painting by Elizabeth Enders titled \"Oceanus 3.\"\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g14.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A reclining figure by Gill Page.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g15.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        An antique Amish quilt, a white alabaster torso by Gill\n                        Page, and hats created at a New Year's Eve party by Dr.\n                        Hobson's daughter Julia and his daughter-in-law Mary\n                        Todd Goodspeed.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g16.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A PET scan rendered into an artwork by Ragnhild\n                        Reingardt and a drawing of nude figures by Francine\n                        Fonta.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g17.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        An embossed box stove bought locally.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button matStepperNext>Next</button>\n                  </div>\n                </mat-step>\n                <mat-step>\n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\" class=\"mus-contain\">\n                    <div fxFlex=\"100%\" class=\"museum-image\">\n                      <img src=\"../assets/g18.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        A drawing by Elizabeth McKim and the fourth sculpture by\n                        Gill Page.\n                      </p>\n                    </div>\n                  </div>\n                  <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                  </div>\n                </mat-step>\n              </mat-vertical-stepper>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Storage\">\n        <div class=\"mohamadali\">\n          <div\n            class=\"video\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"center\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"0.5\"\n          >\n            <div fxFlex=\"50%\" class=\"left-side\">\n              <h1>\n                The Storage Room\n              </h1>\n              <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy\n                text ever since the 1500s, when an unknown printer took a galley\n                of type and scrambled it to make a type specimen book. It has\n                survived not only five centuries, but also the leap into\n                electronic typesetting, remaining essentially unchanged. It was\n                popularised in the 1960s with the release of Letraset sheets\n                containing Lorem Ipsum passages, and more recently with desktop\n                publishing software like Aldus PageMaker including versions of\n                Lorem Ipsum.\n              </p>\n            </div>\n            <div fxFlex=\"50%\" class=\"right-side\">\n              \n                  <div fxLayout=\"column\" fxLayoutGap=\"1.5\">\n                    <div fxFlex=\"100%\">\n                      <img src=\"../assets/s1.jpg\" alt=\"museum entry\" />\n                    </div>\n                    <div fxFlex=\"100%\" class=\"museum-text\">\n                      <p>\n                        Lumber in the storage room.\n                      </p>\n                    </div>\n                  </div>\n                \n            </div>\n          </div>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </mat-tab>\n\n  <mat-tab label=\"Further Reading\">\n    <mat-tab-group headerPosition=\"below\" class=\"low-nav\">\n      <mat-tab label=\"By Dr. Hobson\">\n        <div class=\"mohamadali\">\n          <div\n            class=\"video\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"center\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"0.5\"\n          >\n            <div fxFlex=\"30%\" class=\"left-side\">\n              <h1>\n                Books by Dr. Hobson\n              </h1>\n              <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy\n                text ever since the 1500s, when an unknown printer took a galley\n                of type and scrambled it to make a type specimen book. It has\n                survived not only five centuries, but also the leap into\n                electronic typesetting, remaining essentially unchanged. It was\n                popularised in the 1960s with the release of Letraset sheets\n                containing Lorem Ipsum passages, and more recently with desktop\n                publishing software like Aldus PageMaker including versions of\n                Lorem Ipsum.\n              </p>\n            </div>\n            <div fxFlex=\"70%\" class=\"right-side\">\n              <mat-accordion>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title class=\"mat-tit\">\n                      <strong\n                        >The Dreaming Brain: How the brain creates both the\n                        sense and the nonsense of dreams</strong\n                      >\n                    </mat-panel-title>\n                    <mat-panel-description> </mat-panel-description>\n                  </mat-expansion-panel-header>\n\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"0.5\">\n                    <div fxFlex=\"20%\" class=\"fur-read-img\">\n                      <img src=\"../assets/bk1.jpg\" alt=\"book one\" />\n                    </div>\n                    <div fxFlex=\"80%\" class=\"fur-read\">\n                      <p>\n                        Basic Books, 1988. This is the foundational text which\n                        contrasts Hobson's new theory of dreaming with that of\n                        Freud. Paperback version is still in print and available\n                        in bookstores. \"[Hobson] provides a basis for a formal\n                        analysis of dreams as behavior that is not only valuable\n                        as a contribution to the field but is critical if we are\n                        to proceed in the principal challenge of neurobiology,\n                        the understanding of the human mind..\" -- from a review\n                        by Robert Y. Moore\n                      </p>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title class=\"mat-tit\">\n                      <strong> Sleep </strong>\n                    </mat-panel-title>\n                    <mat-panel-description> </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"0.5\">\n                    <div fxFlex=\"25%\" class=\"fur-read-img\">\n                      <img src=\"../assets/bk2.jpg\" alt=\"book one\" />\n                    </div>\n                    <div fxFlex=\"75%\" class=\"fur-read\">\n                      <p>\n                        Scientific American Library, 1989. Covers basic sleep\n                        and dream research in all of its aspects from biological\n                        rhythms to sleep medicine. Out of print.\n                      </p>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title class=\"mat-tit\">\n                      <strong>\n                        Dreaming as Delirium: How the Brain Goes Out of Its Mind\n                      </strong>\n                    </mat-panel-title>\n                    <mat-panel-description> </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"0.5\">\n                    <div fxFlex=\"20%\" class=\"fur-read-img\">\n                      <img src=\"../assets/bk4.jpg\" alt=\"book one\" />\n                    </div>\n                    <div fxFlex=\"80%\" class=\"fur-read\">\n                      <p>\n                        MIT Press 1994. Same text as The Chemistry of Conscious\n                        States. Limited availability.\n                      </p>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title class=\"mat-tit\">\n                      <strong> Consciousness </strong>\n                    </mat-panel-title>\n                    <mat-panel-description> </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"0.5\">\n                    <div fxFlex=\"20%\" class=\"fur-read-img\">\n                      <img src=\"../assets/bk5.jpg\" alt=\"book one\" />\n                    </div>\n                    <div fxFlex=\"80%\" class=\"fur-read\">\n                      <p>\n                        Scientific American Library 1999. A review of the new\n                        science of consciousness as it is informed by the study\n                        of sleep and dreaming. No longer in print.\n                      </p>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title class=\"mat-tit\">\n                      <strong>\n                        The Dream Drugstore: Chemically Altered States of\n                        Consciousness\n                      </strong>\n                    </mat-panel-title>\n                    <mat-panel-description> </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"0.5\">\n                    <div fxFlex=\"20%\" class=\"fur-read-img\">\n                      <img src=\"../assets/bk7.jpg\" alt=\"book one\" />\n                    </div>\n                    <div fxFlex=\"80%\" class=\"fur-read\">\n                      <p>\n                        MIT Press 2001. The pharmacological tests of the\n                        reciprocal interaction hypothesis are reviewed in the\n                        context of psychopharmacology. The book also champions\n                        first person accounts of exceptional mental states as\n                        described by Aldous Huxley (hypnosis), Albert Hoffmann\n                        (LSD), Thomas de Quincey (opium), Heinrich Kluver\n                        (mescaline), and Samuel Coleridge (morphine). Limited\n                        availability.\n                      </p>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title class=\"mat-tit\">\n                      <strong>\n                        Dreaming: An Introduction to the Science of Sleep\n                      </strong>\n                    </mat-panel-title>\n                    <mat-panel-description> </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"0.5\">\n                    <div fxFlex=\"20%\" class=\"fur-read-img\">\n                      <img src=\"../assets/bk8.jpg\" alt=\"book one\" />\n                    </div>\n                    <div fxFlex=\"80%\" class=\"fur-read\">\n                      <p>\n                        Oxford University Press 2002. First published as a trade\n                        book and now available reissued in the \"A Very Short\n                        Introduction\" series, this user-friendly and concise\n                        text summarizes most of the new findings of sleep and\n                        dream science integrated according to the reciprocal\n                        interaction and activation synthesis models. Ideal for\n                        classroom teaching. Available from Oxford.\n                      </p>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title class=\"mat-tit\">\n                      <strong>\n                        13 Dreams Freud Never Had: The New Mind Science\n                      </strong>\n                    </mat-panel-title>\n                    <mat-panel-description> </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"0.5\">\n                    <div fxFlex=\"20%\" class=\"fur-read-img\">\n                      <img src=\"../assets/bk9.jpg\" alt=\"book one\" />\n                    </div>\n                    <div fxFlex=\"80%\" class=\"fur-read\">\n                      <p>\n                        Pi Press 2005. A radical critique of Freudian dream\n                        theory which is based on neurobiology and the formal\n                        analysis of dream content. By discussing, in detail, 13\n                        of his own dreams, the author insists that meaning and\n                        emotional salience of dreams is superficially obvious\n                        and that dreams need no deep interpretation to be\n                        psychologically informative. Limited availability.\n                      </p>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title class=\"mat-tit\">\n                      <strong> Dream Life: An Experimental Memoir </strong>\n                    </mat-panel-title>\n                    <mat-panel-description> </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"0.5\">\n                    <div fxFlex=\"20%\" class=\"fur-read-img\">\n                      <img src=\"../assets/bk11.jpg\" alt=\"book one\" />\n                    </div>\n                    <div fxFlex=\"80%\" class=\"fur-read\">\n                      <p>\n                        MIT Press, 2011. A \"biopsychography\" discussing biology\n                        and psychology in the context of autobiographical\n                        experiences from the author's life and work.\n                        Illustrated.\n                      </p>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n              </mat-accordion>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Co-authored\">\n        <div class=\"mohamadali\">\n          <div\n            class=\"video\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"center\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"0.5\"\n          >\n            <div fxFlex=\"30%\" class=\"left-side\">\n              <h1>\n                Books Co-authored by Dr. Hobson\n              </h1>\n              <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy\n                text ever since the 1500s, when an unknown printer took a galley\n                of type and scrambled it to make a type specimen book. It has\n                survived not only five centuries, but also the leap into\n                electronic typesetting, remaining essentially unchanged. It was\n                popularised in the 1960s with the release of Letraset sheets\n                containing Lorem Ipsum passages, and more recently with desktop\n                publishing software like Aldus PageMaker including versions of\n                Lorem Ipsum.\n              </p>\n            </div>\n            <div fxFlex=\"70%\" class=\"right-side\">\n              <mat-accordion>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title class=\"mat-tit\">\n                      <strong>\n                        Out of Its Mind: Psychiatry in Crisis - A Call for\n                        Reform\n                      </strong>\n                    </mat-panel-title>\n                    <mat-panel-description> </mat-panel-description>\n                  </mat-expansion-panel-header>\n\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"0.5\">\n                    <div fxFlex=\"20%\" class=\"fur-read-img\">\n                      <img src=\"../assets/bk12.jpg\" alt=\"book one\" />\n                    </div>\n                    <div fxFlex=\"80%\" class=\"fur-read\">\n                      <p>By J. Allan Hobson and Jonathan A. Leonard</p>\n                      <p>\n                        Taking us first on a grand tour of the brain, the\n                        authors then draw from recent advances in cognitive\n                        therapy, brain science, animal behavior, and genetics as\n                        they explore the diagnosis and treatment of a wide range\n                        of mental ills. In the process, they show how patients\n                        with everything from mild anxiety disorders to major\n                        depression and schizophrenia would benefit from their\n                        approach.\n                      </p>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title class=\"mat-tit\">\n                      <strong>\n                        Sleep and Dreaming: Scientific Advances and\n                        Reconsiderations</strong\n                      >\n                    </mat-panel-title>\n                    <mat-panel-description> </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"0.5\">\n                    <div fxFlex=\"20%\" class=\"fur-read-img\">\n                      <img src=\"../assets/bk13.jpg\" alt=\"book one\" />\n                    </div>\n                    <div fxFlex=\"80%\" class=\"fur-read\">\n                      <p>\n                        Edited by Edward F. Pace-Schott, Mark Solms, Mark\n                        Blagrove, and Stevan Harnad\n                      </p>\n                      <p>\n                        This book presents five papers by leading scientists at\n                        the center of the current firmament and more than\n                        seventy-five commentaries on those papers by nearly all\n                        the other leading authorities in the field. Topics\n                        include mechanisms of dreaming in REM sleep, memory\n                        consolidation in REM sleep, and an evolutionary\n                        hypothesis of the function of dreaming.\n                      </p>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title class=\"mat-tit\">\n                      <strong>\n                        From Angels to Neurones: Art and the New Science of\n                        Dreaming\n                      </strong>\n                    </mat-panel-title>\n                    <mat-panel-description> </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"0.5\">\n                    <div fxFlex=\"20%\" class=\"fur-read-img\">\n                      <img src=\"../assets/bk14.jpg\" alt=\"book one\" />\n                    </div>\n                    <div fxFlex=\"80%\" class=\"fur-read\">\n                      <p>By J. Allan Hobson and Hellmut Wohl</p>\n                      <p>\n                        This book presents a new scientific theory of dreaming\n                        which is based upon the findings of brain research and\n                        traces the development of thinking about dreaming in\n                        Western Art from the classical to the modern period.\n                      </p>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title class=\"mat-tit\">\n                      <strong\n                        >Consciousness and Cognition: An International\n                        Journal</strong\n                      >\n                    </mat-panel-title>\n                    <mat-panel-description> </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"0.5\">\n                    <div fxFlex=\"20%\" class=\"fur-read-img\">\n                      <img src=\"../assets/bk15.jpg\" alt=\"book one\" />\n                    </div>\n                    <div fxFlex=\"80%\" class=\"fur-read\">\n                      <p>Edited by Bernard J. Baars and William P. Banks</p>\n                      <p>\n                        The studies reported in the following articles are aimed\n                        at providing a comprehensive, detailed, and quantitative\n                        picture of cognition in human dreaming.\n                      </p>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n              </mat-accordion>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"By Other Authors\">\n        <div class=\"mohamadali\">\n          <div\n            class=\"video\"\n            fxLayout=\"row\"\n            fxLayoutAlign=\"center\"\n            fxLayout.xs=\"column\"\n            fxLayoutGap=\"0.5\"\n          >\n            <div fxFlex=\"30%\" class=\"left-side\">\n              <h1>\n                Books by Other Authors\n              </h1>\n              <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy\n                text ever since the 1500s, when an unknown printer took a galley\n                of type and scrambled it to make a type specimen book. It has\n                survived not only five centuries, but also the leap into\n                electronic typesetting, remaining essentially unchanged. It was\n                popularised in the 1960s with the release of Letraset sheets\n                containing Lorem Ipsum passages, and more recently with desktop\n                publishing software like Aldus PageMaker including versions of\n                Lorem Ipsum.\n              </p>\n            </div>\n            <div fxFlex=\"70%\" class=\"right-side\">\n              <mat-accordion>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title class=\"mat-tit\">\n                      <strong>\n                        Dreaming: A Cognitive-Psychological Analysis</strong\n                      >\n                    </mat-panel-title>\n                    <mat-panel-description> </mat-panel-description>\n                  </mat-expansion-panel-header>\n\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"0.5\">\n                    <div fxFlex=\"20%\" class=\"fur-read-img\">\n                      <img src=\"../assets/bk16.jpeg\" alt=\"book one\" />\n                    </div>\n                    <div fxFlex=\"80%\" class=\"fur-read\">\n                      <p>By David Foulkes</p>\n                      <p>\n                        This book summarizes the findings of empirical dream\n                        psychology and interprets them from a\n                        cognitive-psychological perspective.\n                      </p>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title class=\"mat-tit\">\n                      <strong\n                        >The Paradox of Sleep: The Story of Dreaming</strong\n                      >\n                    </mat-panel-title>\n                    <mat-panel-description> </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"0.5\">\n                    <div fxFlex=\"20%\" class=\"fur-read-img\">\n                      <img src=\"../assets/bk17.jpg\" alt=\"book one\" />\n                    </div>\n                    <div fxFlex=\"80%\" class=\"fur-read\">\n                      <p>By Michel Jouvet <br />Translated by Laurence Garey</p>\n                      <p>\n                        Jouvet tells the story of a handful of neurobiologists,\n                        including himself, who pioneered sleep and dream\n                        research in the 1950s. He describes the technical and\n                        ideological obstacles they faced and opens his own\n                        laboratory to the reader, explaining anatomical,\n                        biochemical, and even genetic techniques. He also\n                        touches on psychological, philosophical, and\n                        metaphysical aspects of sleep and dreaming.\n                      </p>\n                    </div>\n                  </div>\n                </mat-expansion-panel>\n              </mat-accordion>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </mat-tab>\n\n  <mat-tab label=\"Dr. Hobson\">\n    <div class=\"mohamadali\">\n      <div\n        class=\"video\"\n        fxLayout=\"row\"\n        fxLayoutAlign=\"center\"\n        fxLayout.xs=\"column\"\n        fxLayoutGap=\"0.5\"\n      >\n        <div fxFlex=\"40%\" class=\"left-side\">\n          <h1>\n            Visit Dr. Hobson's Personal Website\n          </h1>\n          <p>\n            Lorem Ipsum is simply dummy text of the printing and typesetting\n            industry. Lorem Ipsum has been the industry's standard dummy text\n            ever since the 1500s, when an unknown printer took a galley of type\n            and scrambled it to make a type specimen book. It has survived not\n            only five centuries, but also the leap into electronic typesetting,\n            remaining essentially unchanged. It was popularised in the 1960s\n            with the release of Letraset sheets containing Lorem Ipsum passages,\n            and more recently with desktop publishing software like Aldus\n            PageMaker including versions of Lorem Ipsum.\n          </p>\n        </div>\n        <div fxFlex=\"60%\" class=\"right-side\">\n          <mat-card class=\"site-card\">\n            <img mat-card-image src=\"assets/psite.png\" alt=\"blue-background\" />\n\n            <mat-card-actions class=\"contact-link\">\n              <button mat-button>\n                <a href=\"https://allan-hobson.web.app\" target=\"_blank\"\n                  >Go to Website</a\n                >\n              </button>\n            </mat-card-actions>\n          </mat-card>\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.myParams = {};
        this.width = 100;
        this.height = 100;
        this.myStyle = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        this.galleryOptions = [
            {
                width: "800px",
                height: "550px",
                thumbnailsColumns: 3,
                thumbnailsRows: 1,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxGalleryAnimation"].Slide,
                imagePercent: 70,
                thumbnailsPercent: 30,
                thumbnailsMargin: 2,
                thumbnailMargin: 2,
                previewCloseOnClick: true,
                previewCloseOnEsc: true,
                imageAutoPlay: true,
                imageAutoPlayPauseOnHover: true,
                previewAutoPlay: true,
                previewAutoPlayPauseOnHover: true
            },
            // max-width 800
            {
                breakpoint: 800,
                width: "100%",
                height: "550px",
                imagePercent: 30,
                thumbnailsPercent: 60,
                thumbnailsMargin: 2,
                thumbnailMargin: 2,
                previewCloseOnClick: true,
                previewCloseOnEsc: true,
                imageAutoPlay: true,
                imageAutoPlayPauseOnHover: true,
                previewAutoPlay: true,
                previewAutoPlayPauseOnHover: true
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        this.galleryImages = [
            {
                small: "assets/M02.JPG",
                medium: "assets/M02.JPG",
                big: "assets/M02.JPG"
            },
            {
                small: "assets/H02.JPG",
                medium: "assets/H02.JPG",
                big: "assets/H02.JPG"
            },
            {
                small: "assets/H03.JPG",
                medium: "assets/H03.JPG",
                big: "assets/H03.JPG"
            },
            {
                small: "assets/H05.JPG",
                medium: "assets/H05.JPG",
                big: "assets/H05.JPG"
            },
            {
                small: "assets/H06.JPG",
                medium: "assets/H06.JPG",
                big: "assets/H06.JPG"
            },
            {
                small: "assets/H08.JPG",
                medium: "assets/H08.JPG",
                big: "assets/H08.JPG"
            },
            {
                small: "assets/H10.JPG",
                medium: "assets/H10.JPG",
                big: "assets/H10.JPG"
            },
            {
                small: "assets/H12.JPG",
                medium: "assets/H12.JPG",
                big: "assets/H12.JPG"
            },
            {
                small: "assets/H14.JPG",
                medium: "assets/H14.JPG",
                big: "assets/H14.JPG"
            },
            {
                small: "assets/H16.JPG",
                medium: "assets/H16.JPG",
                big: "assets/H16.JPG"
            },
            {
                small: "assets/H17.JPG",
                medium: "assets/H17.JPG",
                big: "assets/H17.JPG"
            },
            {
                small: "assets/H19.JPG",
                medium: "assets/H19.JPG",
                big: "assets/H19.JPG"
            },
            {
                small: "assets/dr1.jpeg",
                medium: "assets/dr1.jpeg",
                big: "assets/dr1.jpeg"
            },
            {
                small: "assets/dr2.jpeg",
                medium: "assets/dr2.jpeg",
                big: "assets/dr2.jpeg"
            },
            {
                small: "assets/dr3.jpeg",
                medium: "assets/dr3.jpeg",
                big: "assets/dr3.jpeg"
            },
            {
                small: "assets/dr4.jpeg",
                medium: "assets/dr4.jpeg",
                big: "assets/dr4.jpeg"
            },
            {
                small: "assets/dr5.jpeg",
                medium: "assets/dr5.jpeg",
                big: "assets/dr5.jpeg"
            },
            {
                small: "assets/dr6.jpeg",
                medium: "assets/dr6.jpeg",
                big: "assets/dr6.jpeg"
            },
            {
                small: "assets/dr7.jpeg",
                medium: "assets/dr7.jpeg",
                big: "assets/dr7.jpeg"
            },
            {
                small: "assets/dr8.jpeg",
                medium: "assets/dr8.jpeg",
                big: "assets/dr8.jpeg"
            },
            {
                small: "assets/dr9.jpeg",
                medium: "assets/dr9.jpeg",
                big: "assets/dr9.jpeg"
            },
            {
                small: "assets/dr10.jpeg",
                medium: "assets/dr10.jpeg",
                big: "assets/dr10.jpeg"
            },
            {
                small: "assets/lib1.jpeg",
                medium: "assets/lib1.jpeg",
                big: "assets/lib1.jpeg"
            },
            {
                small: "assets/lib2.jpeg",
                medium: "assets/lib2.jpeg",
                big: "assets/lib2.jpeg"
            },
            {
                small: "assets/lib3.jpeg",
                medium: "assets/lib3.jpeg",
                big: "assets/lib3.jpeg"
            },
            {
                small: "assets/lib4.jpeg",
                medium: "assets/lib4.jpeg",
                big: "assets/lib4.jpeg"
            },
            {
                small: "assets/lib5.jpeg",
                medium: "assets/lib5.jpeg",
                big: "assets/lib5.jpeg"
            },
            {
                small: "assets/lib6.jpeg",
                medium: "assets/lib6.jpeg",
                big: "assets/lib6.jpeg"
            },
            {
                small: "assets/lib7.jpeg",
                medium: "assets/lib7.jpeg",
                big: "assets/lib7.jpeg"
            },
            {
                small: "assets/lib8.jpeg",
                medium: "assets/lib8.jpeg",
                big: "assets/lib8.jpeg"
            },
            {
                small: "assets/lib9.jpeg",
                medium: "assets/lib9.jpeg",
                big: "assets/lib9.jpeg"
            },
            {
                small: "assets/lib10.jpeg",
                medium: "assets/lib10.jpeg",
                big: "assets/lib10.jpeg"
            }
        ];
        this.myStyle = {
            width: "100%",
            height: "400px",
            background: "#00205b",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        };
        this.myParams = {
            particles: {
                number: {
                    value: 175,
                    density: {
                        enable: true,
                        value_area: 1420.4657549380909
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 1,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.5,
                        sync: true
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 100,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 0.5
                },
                move: {
                    enable: true,
                    speed: 4,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        };
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");
/* harmony import */ var _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./multimedia/multimedia.component */ "./src/app/multimedia/multimedia.component.ts");
/* harmony import */ var _enter_museum_enter_museum_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./enter-museum/enter-museum.component */ "./src/app/enter-museum/enter-museum.component.ts");
/* harmony import */ var _further_reading_further_reading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./further-reading/further-reading.component */ "./src/app/further-reading/further-reading.component.ts");
/* harmony import */ var _dr_hobson_dr_hobson_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dr-hobson/dr-hobson.component */ "./src/app/dr-hobson/dr-hobson.component.ts");
/* harmony import */ var _the_property_the_property_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./the-property/the-property.component */ "./src/app/the-property/the-property.component.ts");
/* harmony import */ var _the_barn_the_barn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./the-barn/the-barn.component */ "./src/app/the-barn/the-barn.component.ts");
/* harmony import */ var _a_tour_a_tour_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./a-tour/a-tour.component */ "./src/app/a-tour/a-tour.component.ts");
/* harmony import */ var _video_files_video_files_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./video-files/video-files.component */ "./src/app/video-files/video-files.component.ts");
/* harmony import */ var _audio_files_audio_files_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./audio-files/audio-files.component */ "./src/app/audio-files/audio-files.component.ts");
/* harmony import */ var _entry_entry_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./entry/entry.component */ "./src/app/entry/entry.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./storage/storage.component */ "./src/app/storage/storage.component.ts");
/* harmony import */ var _dreamstage_dreamstage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dreamstage/dreamstage.component */ "./src/app/dreamstage/dreamstage.component.ts");
/* harmony import */ var _office_office_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./office/office.component */ "./src/app/office/office.component.ts");
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./library/library.component */ "./src/app/library/library.component.ts");
/* harmony import */ var _recom_readings_recom_readings_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./recom-readings/recom-readings.component */ "./src/app/recom-readings/recom-readings.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var angular2_image_gallery__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angular2-image-gallery */ "./node_modules/angular2-image-gallery/fesm5/angular2-image-gallery.js");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/fesm5/mat-video.js");
/* harmony import */ var ngx_audio_player__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-audio-player */ "./node_modules/ngx-audio-player/fesm5/ngx-audio-player.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");












































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_6__["IntroductionComponent"],
                _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_7__["MultimediaComponent"],
                _enter_museum_enter_museum_component__WEBPACK_IMPORTED_MODULE_8__["EnterMuseumComponent"],
                _further_reading_further_reading_component__WEBPACK_IMPORTED_MODULE_9__["FurtherReadingComponent"],
                _dr_hobson_dr_hobson_component__WEBPACK_IMPORTED_MODULE_10__["DrHobsonComponent"],
                _the_property_the_property_component__WEBPACK_IMPORTED_MODULE_11__["ThePropertyComponent"],
                _the_barn_the_barn_component__WEBPACK_IMPORTED_MODULE_12__["TheBarnComponent"],
                _a_tour_a_tour_component__WEBPACK_IMPORTED_MODULE_13__["ATourComponent"],
                _video_files_video_files_component__WEBPACK_IMPORTED_MODULE_14__["VideoFilesComponent"],
                _audio_files_audio_files_component__WEBPACK_IMPORTED_MODULE_15__["AudioFilesComponent"],
                _entry_entry_component__WEBPACK_IMPORTED_MODULE_16__["EntryComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_17__["GalleryComponent"],
                _storage_storage_component__WEBPACK_IMPORTED_MODULE_18__["StorageComponent"],
                _dreamstage_dreamstage_component__WEBPACK_IMPORTED_MODULE_19__["DreamstageComponent"],
                _office_office_component__WEBPACK_IMPORTED_MODULE_20__["OfficeComponent"],
                _library_library_component__WEBPACK_IMPORTED_MODULE_21__["LibraryComponent"],
                _recom_readings_recom_readings_component__WEBPACK_IMPORTED_MODULE_22__["RecomReadingsComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_25__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_27__["HomepageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_29__["IgxCarouselModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_29__["IgxBottomNavModule"],
                angular2_image_gallery__WEBPACK_IMPORTED_MODULE_32__["Angular2ImageGalleryModule"],
                mat_video__WEBPACK_IMPORTED_MODULE_33__["MatVideoModule"],
                ngx_audio_player__WEBPACK_IMPORTED_MODULE_34__["NgxAudioPlayerModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__["MatStepperModule"],
                angular_particle__WEBPACK_IMPORTED_MODULE_37__["ParticlesModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_38__["FlexLayoutModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_39__["NgxGalleryModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_40__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_41__["MatButtonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_42__["MatExpansionModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/audio-files/audio-files.component.css":
/*!*******************************************************!*\
  !*** ./src/app/audio-files/audio-files.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1ZGlvLWZpbGVzL2F1ZGlvLWZpbGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/audio-files/audio-files.component.html":
/*!********************************************************!*\
  !*** ./src/app/audio-files/audio-files.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  audio-files works!\n</p>\n"

/***/ }),

/***/ "./src/app/audio-files/audio-files.component.ts":
/*!******************************************************!*\
  !*** ./src/app/audio-files/audio-files.component.ts ***!
  \******************************************************/
/*! exports provided: AudioFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioFilesComponent", function() { return AudioFilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AudioFilesComponent = /** @class */ (function () {
    function AudioFilesComponent() {
    }
    AudioFilesComponent.prototype.ngOnInit = function () {
    };
    AudioFilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-audio-files',
            template: __webpack_require__(/*! ./audio-files.component.html */ "./src/app/audio-files/audio-files.component.html"),
            styles: [__webpack_require__(/*! ./audio-files.component.css */ "./src/app/audio-files/audio-files.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AudioFilesComponent);
    return AudioFilesComponent;
}());



/***/ }),

/***/ "./src/app/dr-hobson/dr-hobson.component.css":
/*!***************************************************!*\
  !*** ./src/app/dr-hobson/dr-hobson.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyLWhvYnNvbi9kci1ob2Jzb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dr-hobson/dr-hobson.component.html":
/*!****************************************************!*\
  !*** ./src/app/dr-hobson/dr-hobson.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dr-hobson works!\n</p>\n"

/***/ }),

/***/ "./src/app/dr-hobson/dr-hobson.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dr-hobson/dr-hobson.component.ts ***!
  \**************************************************/
/*! exports provided: DrHobsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrHobsonComponent", function() { return DrHobsonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DrHobsonComponent = /** @class */ (function () {
    function DrHobsonComponent() {
    }
    DrHobsonComponent.prototype.ngOnInit = function () {
    };
    DrHobsonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dr-hobson',
            template: __webpack_require__(/*! ./dr-hobson.component.html */ "./src/app/dr-hobson/dr-hobson.component.html"),
            styles: [__webpack_require__(/*! ./dr-hobson.component.css */ "./src/app/dr-hobson/dr-hobson.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DrHobsonComponent);
    return DrHobsonComponent;
}());



/***/ }),

/***/ "./src/app/dreamstage/dreamstage.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dreamstage/dreamstage.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyZWFtc3RhZ2UvZHJlYW1zdGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dreamstage/dreamstage.component.html":
/*!******************************************************!*\
  !*** ./src/app/dreamstage/dreamstage.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dreamstage works!\n</p>\n"

/***/ }),

/***/ "./src/app/dreamstage/dreamstage.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dreamstage/dreamstage.component.ts ***!
  \****************************************************/
/*! exports provided: DreamstageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DreamstageComponent", function() { return DreamstageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DreamstageComponent = /** @class */ (function () {
    function DreamstageComponent() {
    }
    DreamstageComponent.prototype.ngOnInit = function () {
    };
    DreamstageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dreamstage',
            template: __webpack_require__(/*! ./dreamstage.component.html */ "./src/app/dreamstage/dreamstage.component.html"),
            styles: [__webpack_require__(/*! ./dreamstage.component.css */ "./src/app/dreamstage/dreamstage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DreamstageComponent);
    return DreamstageComponent;
}());



/***/ }),

/***/ "./src/app/enter-museum/enter-museum.component.css":
/*!*********************************************************!*\
  !*** ./src/app/enter-museum/enter-museum.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGVyLW11c2V1bS9lbnRlci1tdXNldW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/enter-museum/enter-museum.component.html":
/*!**********************************************************!*\
  !*** ./src/app/enter-museum/enter-museum.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  enter-museum works!\n</p>\n"

/***/ }),

/***/ "./src/app/enter-museum/enter-museum.component.ts":
/*!********************************************************!*\
  !*** ./src/app/enter-museum/enter-museum.component.ts ***!
  \********************************************************/
/*! exports provided: EnterMuseumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterMuseumComponent", function() { return EnterMuseumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EnterMuseumComponent = /** @class */ (function () {
    function EnterMuseumComponent() {
    }
    EnterMuseumComponent.prototype.ngOnInit = function () {
    };
    EnterMuseumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-enter-museum',
            template: __webpack_require__(/*! ./enter-museum.component.html */ "./src/app/enter-museum/enter-museum.component.html"),
            styles: [__webpack_require__(/*! ./enter-museum.component.css */ "./src/app/enter-museum/enter-museum.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EnterMuseumComponent);
    return EnterMuseumComponent;
}());



/***/ }),

/***/ "./src/app/entry/entry.component.css":
/*!*******************************************!*\
  !*** ./src/app/entry/entry.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudHJ5L2VudHJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/entry/entry.component.html":
/*!********************************************!*\
  !*** ./src/app/entry/entry.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  entry works!\n</p>\n"

/***/ }),

/***/ "./src/app/entry/entry.component.ts":
/*!******************************************!*\
  !*** ./src/app/entry/entry.component.ts ***!
  \******************************************/
/*! exports provided: EntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryComponent", function() { return EntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EntryComponent = /** @class */ (function () {
    function EntryComponent() {
    }
    EntryComponent.prototype.ngOnInit = function () {
    };
    EntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entry',
            template: __webpack_require__(/*! ./entry.component.html */ "./src/app/entry/entry.component.html"),
            styles: [__webpack_require__(/*! ./entry.component.css */ "./src/app/entry/entry.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EntryComponent);
    return EntryComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/further-reading/further-reading.component.css":
/*!***************************************************************!*\
  !*** ./src/app/further-reading/further-reading.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1cnRoZXItcmVhZGluZy9mdXJ0aGVyLXJlYWRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/further-reading/further-reading.component.html":
/*!****************************************************************!*\
  !*** ./src/app/further-reading/further-reading.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  further-reading works!\n</p>\n"

/***/ }),

/***/ "./src/app/further-reading/further-reading.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/further-reading/further-reading.component.ts ***!
  \**************************************************************/
/*! exports provided: FurtherReadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurtherReadingComponent", function() { return FurtherReadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FurtherReadingComponent = /** @class */ (function () {
    function FurtherReadingComponent() {
    }
    FurtherReadingComponent.prototype.ngOnInit = function () {
    };
    FurtherReadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-further-reading',
            template: __webpack_require__(/*! ./further-reading.component.html */ "./src/app/further-reading/further-reading.component.html"),
            styles: [__webpack_require__(/*! ./further-reading.component.css */ "./src/app/further-reading/further-reading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FurtherReadingComponent);
    return FurtherReadingComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  gallery works!\n</p>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  homepage works!\n</p>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/introduction/introduction.component.css":
/*!*********************************************************!*\
  !*** ./src/app/introduction/introduction.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/introduction/introduction.component.html":
/*!**********************************************************!*\
  !*** ./src/app/introduction/introduction.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  introduction works!\n</p>\n"

/***/ }),

/***/ "./src/app/introduction/introduction.component.ts":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent() {
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    IntroductionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-introduction',
            template: __webpack_require__(/*! ./introduction.component.html */ "./src/app/introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.css */ "./src/app/introduction/introduction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/app/library/library.component.css":
/*!***********************************************!*\
  !*** ./src/app/library/library.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvbGlicmFyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/library/library.component.html":
/*!************************************************!*\
  !*** ./src/app/library/library.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  library works!\n</p>\n"

/***/ }),

/***/ "./src/app/library/library.component.ts":
/*!**********************************************!*\
  !*** ./src/app/library/library.component.ts ***!
  \**********************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LibraryComponent = /** @class */ (function () {
    function LibraryComponent() {
    }
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! ./library.component.html */ "./src/app/library/library.component.html"),
            styles: [__webpack_require__(/*! ./library.component.css */ "./src/app/library/library.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/multimedia/multimedia.component.css":
/*!*****************************************************!*\
  !*** ./src/app/multimedia/multimedia.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211bHRpbWVkaWEvbXVsdGltZWRpYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/multimedia/multimedia.component.html":
/*!******************************************************!*\
  !*** ./src/app/multimedia/multimedia.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  multimedia works!\n</p>\n"

/***/ }),

/***/ "./src/app/multimedia/multimedia.component.ts":
/*!****************************************************!*\
  !*** ./src/app/multimedia/multimedia.component.ts ***!
  \****************************************************/
/*! exports provided: MultimediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaComponent", function() { return MultimediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MultimediaComponent = /** @class */ (function () {
    function MultimediaComponent() {
    }
    MultimediaComponent.prototype.ngOnInit = function () {
    };
    MultimediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multimedia',
            template: __webpack_require__(/*! ./multimedia.component.html */ "./src/app/multimedia/multimedia.component.html"),
            styles: [__webpack_require__(/*! ./multimedia.component.css */ "./src/app/multimedia/multimedia.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MultimediaComponent);
    return MultimediaComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  nav works!\n</p>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/office/office.component.css":
/*!*********************************************!*\
  !*** ./src/app/office/office.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmljZS9vZmZpY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/office/office.component.html":
/*!**********************************************!*\
  !*** ./src/app/office/office.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  office works!\n</p>\n"

/***/ }),

/***/ "./src/app/office/office.component.ts":
/*!********************************************!*\
  !*** ./src/app/office/office.component.ts ***!
  \********************************************/
/*! exports provided: OfficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeComponent", function() { return OfficeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OfficeComponent = /** @class */ (function () {
    function OfficeComponent() {
    }
    OfficeComponent.prototype.ngOnInit = function () {
    };
    OfficeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-office',
            template: __webpack_require__(/*! ./office.component.html */ "./src/app/office/office.component.html"),
            styles: [__webpack_require__(/*! ./office.component.css */ "./src/app/office/office.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OfficeComponent);
    return OfficeComponent;
}());



/***/ }),

/***/ "./src/app/recom-readings/recom-readings.component.css":
/*!*************************************************************!*\
  !*** ./src/app/recom-readings/recom-readings.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29tLXJlYWRpbmdzL3JlY29tLXJlYWRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/recom-readings/recom-readings.component.html":
/*!**************************************************************!*\
  !*** ./src/app/recom-readings/recom-readings.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  recom-readings works!\n</p>\n"

/***/ }),

/***/ "./src/app/recom-readings/recom-readings.component.ts":
/*!************************************************************!*\
  !*** ./src/app/recom-readings/recom-readings.component.ts ***!
  \************************************************************/
/*! exports provided: RecomReadingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecomReadingsComponent", function() { return RecomReadingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecomReadingsComponent = /** @class */ (function () {
    function RecomReadingsComponent() {
    }
    RecomReadingsComponent.prototype.ngOnInit = function () {
    };
    RecomReadingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recom-readings',
            template: __webpack_require__(/*! ./recom-readings.component.html */ "./src/app/recom-readings/recom-readings.component.html"),
            styles: [__webpack_require__(/*! ./recom-readings.component.css */ "./src/app/recom-readings/recom-readings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecomReadingsComponent);
    return RecomReadingsComponent;
}());



/***/ }),

/***/ "./src/app/storage/storage.component.css":
/*!***********************************************!*\
  !*** ./src/app/storage/storage.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JhZ2Uvc3RvcmFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/storage/storage.component.html":
/*!************************************************!*\
  !*** ./src/app/storage/storage.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  storage works!\n</p>\n"

/***/ }),

/***/ "./src/app/storage/storage.component.ts":
/*!**********************************************!*\
  !*** ./src/app/storage/storage.component.ts ***!
  \**********************************************/
/*! exports provided: StorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageComponent", function() { return StorageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StorageComponent = /** @class */ (function () {
    function StorageComponent() {
    }
    StorageComponent.prototype.ngOnInit = function () {
    };
    StorageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-storage',
            template: __webpack_require__(/*! ./storage.component.html */ "./src/app/storage/storage.component.html"),
            styles: [__webpack_require__(/*! ./storage.component.css */ "./src/app/storage/storage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageComponent);
    return StorageComponent;
}());



/***/ }),

/***/ "./src/app/the-barn/the-barn.component.css":
/*!*************************************************!*\
  !*** ./src/app/the-barn/the-barn.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZS1iYXJuL3RoZS1iYXJuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/the-barn/the-barn.component.html":
/*!**************************************************!*\
  !*** ./src/app/the-barn/the-barn.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  the-barn works!\n</p>\n"

/***/ }),

/***/ "./src/app/the-barn/the-barn.component.ts":
/*!************************************************!*\
  !*** ./src/app/the-barn/the-barn.component.ts ***!
  \************************************************/
/*! exports provided: TheBarnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheBarnComponent", function() { return TheBarnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TheBarnComponent = /** @class */ (function () {
    function TheBarnComponent() {
    }
    TheBarnComponent.prototype.ngOnInit = function () {
    };
    TheBarnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-the-barn',
            template: __webpack_require__(/*! ./the-barn.component.html */ "./src/app/the-barn/the-barn.component.html"),
            styles: [__webpack_require__(/*! ./the-barn.component.css */ "./src/app/the-barn/the-barn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TheBarnComponent);
    return TheBarnComponent;
}());



/***/ }),

/***/ "./src/app/the-property/the-property.component.css":
/*!*********************************************************!*\
  !*** ./src/app/the-property/the-property.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZS1wcm9wZXJ0eS90aGUtcHJvcGVydHkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/the-property/the-property.component.html":
/*!**********************************************************!*\
  !*** ./src/app/the-property/the-property.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  the-property works!\n</p>\n"

/***/ }),

/***/ "./src/app/the-property/the-property.component.ts":
/*!********************************************************!*\
  !*** ./src/app/the-property/the-property.component.ts ***!
  \********************************************************/
/*! exports provided: ThePropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThePropertyComponent", function() { return ThePropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThePropertyComponent = /** @class */ (function () {
    function ThePropertyComponent() {
    }
    ThePropertyComponent.prototype.ngOnInit = function () {
    };
    ThePropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-the-property',
            template: __webpack_require__(/*! ./the-property.component.html */ "./src/app/the-property/the-property.component.html"),
            styles: [__webpack_require__(/*! ./the-property.component.css */ "./src/app/the-property/the-property.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThePropertyComponent);
    return ThePropertyComponent;
}());



/***/ }),

/***/ "./src/app/video-files/video-files.component.css":
/*!*******************************************************!*\
  !*** ./src/app/video-files/video-files.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWZpbGVzL3ZpZGVvLWZpbGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/video-files/video-files.component.html":
/*!********************************************************!*\
  !*** ./src/app/video-files/video-files.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  video-files works!\n</p>\n"

/***/ }),

/***/ "./src/app/video-files/video-files.component.ts":
/*!******************************************************!*\
  !*** ./src/app/video-files/video-files.component.ts ***!
  \******************************************************/
/*! exports provided: VideoFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoFilesComponent", function() { return VideoFilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoFilesComponent = /** @class */ (function () {
    function VideoFilesComponent() {
    }
    VideoFilesComponent.prototype.ngOnInit = function () {
    };
    VideoFilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-files',
            template: __webpack_require__(/*! ./video-files.component.html */ "./src/app/video-files/video-files.component.html"),
            styles: [__webpack_require__(/*! ./video-files.component.css */ "./src/app/video-files/video-files.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoFilesComponent);
    return VideoFilesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jonathandaniels/Documents/tony/museum/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map