'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } 
    else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

/**
 * identity: Returns the input value unchanged.
 *
 * @param {Value} value: Any value.
 */
_.identity = function(val) {
    return val;
}

/**
 * typeOf: Returns the type of the input value as a string.
 *
 * @param {*} val: Any value.
 */
_.typeOf = function(val) {
    const valType = typeof val;

    if (valType === 'object') {
        if (val === null) {
            return 'null';
        } 
        else if (Array.isArray(val)) {
            return 'array';
        }
    }

    return valType;
}

/**
 * first: Returns the first element or the first n elements of an array.
 *
 * @param {Array} collection: The input array.
 * @param {Number} number: The number of elements to return (optional).
 */
_.first = function(arr, num) {
    if (!Array.isArray(arr) || num < 0) {
        return [];
    } 
    else if (!num || typeof num !== 'number') {
        return arr[0];
    } 
    else if (num > arr.length) {
        return arr;
    }
    const firstOfNum = [];
    for (let i = 0; i < num; i++) {
        firstOfNum.push(arr[i]);
    }
    return firstOfNum;
}

/**
 * last: Returns the last element or the last n elements of an array.
 *
 * @param {Array} collection: The input array.
 * @param {Number} number: The number of elements to return (optional).
 */
_.last = function(arr, num) {
    if (!Array.isArray(arr) || num < 0) {
        return [];
    } 
    else if (!num || typeof num !== 'number') {
        return arr[arr.length - 1];
    } 
    else if (num > arr.length) {
        return arr;
    }
    return arr.slice(-num);
}

/**
 * indexOf: Returns the index of the first occurrence of the value in the array.
 *
 * @param {Array} collection: The input array.
 * @param {Value} value: The value to search for.
 */
_.indexOf = function(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

/**
 * contains: Returns true if the array contains the specified value, false otherwise.
 *
 * @param {Array} collection: The input array.
 * @param {Value} value: The value to check for.
 */
_.contains = function(array, value) {
    return _.indexOf(array, value) !== -1;
}

/**
 * unique: Returns a new array of all elements from <array> with duplicates removed.
 *
 * @param {Array} collection: The input array.
 */
_.unique = function(arr) {
    const noDuplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (_.indexOf(noDuplicates, arr[i]) === -1) {
            noDuplicates.push(arr[i]);
        }
    }
    return noDuplicates;
}

/**
 * filter: Returns a new array of elements for which calling <function> returned true.
 *
 * @param {Array} collection: The input array.
 * @param {Function} action: The function to call for each element.
 */
_.filter = function(arr, func) {
    const result = [];
    _.each(arr, function(element, i, arr) {
        if (func(element, i, arr)) {
            result.push(element);
        }
    });
    return result;
}

/**
 * reject: Returns a new array of elements for which calling <function> returned false.
 *
 * @param {Array} collection: The input array.
 * @param {Function} action: The function to call for each element.
 */
_.reject = function(arr, func) {
    const rejects = [];
    _.each(arr, function(element, i, arr) {
        if (!func(element, i, arr)) {
            rejects.push(element);
        }
    });
    return rejects;
}

/**
 * partition: Returns an array made up of two sub arrays - one with truthy values and the other with falsy values.
 *
 * @param {Array} collection: The input array.
 * @param {Function} action: The function to call for each element.
 */
_.partition = function(arr, func) {
    const trueValues = [];
    const falseValues = [];

    _.each(arr, function(element, key, arr) {
        if (func(element, key, arr)) {
            trueValues.push(element);
        } 
        else {
            falseValues.push(element);
        }
    });

    return [trueValues, falseValues];
}

/**
 * map: Returns a new array containing the return value of calling <function> on each element of the collection.
 *
 * @param {Array or Object} collection: The input collection.
 * @param {Function} action: The function to call for each element.
 */
_.map = function(collection, func) {
    const final = [];
    if (Array.isArray(collection)) {
        _.each(collection, function(element, i, collection) {
            final.push(func(element, i, collection));
        });
    } 
    else if (typeof collection === 'object' && collection !== null) {
        _.each(collection, function(value, key, collection) {
            final.push(func(value, key, collection));
        });
    }
    return final;
}

/**
 * pluck: Returns an array containing the value of <property> for every element in <array>.
 *
 * @param {Array} collection: An array of objects.
 * @param {string} property: The property to pluck from each object.
 */
_.pluck = function(arr, property) {
    return _.map(arr, function(obj) {
        return obj[property];
    });
}

/**
 * every: Returns true if calling <function> for every element returns true, false otherwise.
 *
 * @param {Array or Object} collection: The input collection.
 * @param {Function} [func]: The function to call for each element (optional).
 */
_.every = function(collection, func) {
    if (func === undefined) {
        for (let i = 0; i < collection.length; i++) {
            if (!Boolean(collection[i])) {
                return false;
            }
        }
        return true;
    }

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (!func(collection[i], i, collection)) {
                return false;
            }
        }

    } 
    else if (typeof collection === 'object' && collection !== null) {
        for (let key in collection) {
            if (!func(collection[key], key, collection)) {
                return false;
            }
        }
    }
    return true;
}

/**
 * some: Returns true if calling <function> for at least one element returns true, false otherwise.
 *
 * @param {Array or Object} collection: The input collection.
 * @param {Function} [func]: The function to call for each element (optional).
 */
_.some = function(collection, func) {
    if (func === undefined) {
        for (let i = 0; i < collection.length; i++) {
            if (Boolean(collection[i])) {
                return true;
            }
        }
        return false;
    }

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (func(collection[i], i, collection)) {
                return true;
            }
        }

    } 
    else if (typeof collection === 'object' && collection !== null) {
        for (let key in collection) {
            if (func(collection[key], key, collection)) {
                return true;
            }
        }
    }
    return false;
}

/**
 * reduce: Applies <function> to each element in <array> and reduces the array to a single value.
 *
 * @param {Array} collection: The input array.
 * @param {Function} action: The function to call for each element.
 * @param {*} [seed]: The initial value for the reduction (optional).
 */
_.reduce = function(arr, func, seed) {
    let final;
    if (seed !== undefined) {
        final = seed;
        for (let i = 0; i < arr.length; i++) {
            final = func(final, arr[i], i);
        }
    } 
    else {
        final = arr[0];
        for (let i = 1; i < arr.length; i++) {
            final = func(final, arr[i], i);
        }
    }
    return final;
}

/**
 * extend: Copies properties from subsequent objects to the first object.
 *
 * @param {Object} collection: The target object.
 * @param {...Object} copiedObject: Objects to copy properties from.
 */
_.extend = function(obj, ...passingObj) {
    Object.assign(obj, ...passingObj);
    return obj;
}

module.exports.each = each;