"use strict";
/**
 * Utility helper module for Slyn

 * @module util-helper
 */


/*
 * isDefined
 * @param {String} value - the value to check
 */
module.exports.isDefined = function(value) {
    return typeof value !== 'undefined';
};

/*
 * isString
 * @param {String} value - the value to check
 */
module.exports.isString = function(value) {
    return typeof value === 'string';
};

/*
 * isRelative
 * @param {String} stateName - 
 */
module.exports.isRelative = function(stateName) {
    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
};

/*
 * isObject
 * @param {Object} value - the value to check
 */
module.exports.isObject = function(value) {
    // http://jsperf.com/isobject4
    return value !== null && typeof value === 'object';
};


/*
 * isFunction
 * @param {Object} value
 */
module.exports.isFunction = function(value) {
    return typeof value === 'function';
};

/**
 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
 *
 * @param {Object} a The first object.
 * @param {Object} b The second object.
 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
 *                     it defaults to the list of keys in `a`.
 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
 */
module.exports.equalForKeys = function(a, b, keys) {
    if (!keys) {
        keys = [];
        for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
    }

    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
    }
    return true;
};