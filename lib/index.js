
/**
 * Has own property.
 *
 * @type {Function}
 */

const has = Object.prototype.hasOwnProperty

/**
 * To string.
 *
 * @type {Function}
 */

const toString = Object.prototype.toString

/**
 * Test whether a value is "empty".
 *
 * @param {Mixed} val
 * @return {Boolean}
 */

function itsEmpty(val) {
  // Null...
  if (val === null){
    return true;
  }

  // Undefined...
  if ('undefined' === typeof val){ 
    return true;
  }

  // Booleans...
  if ('boolean' === typeof val){ 
    return false; 
  }

  // Numbers...
  if ('number' === typeof val){
    return val === 0; 
  }

  // Strings... including strings that are all spaces.
  if ('string' === typeof val){ 
    return val.trim().length === 0;
  }

  // Functions...
  if ('function' === typeof val){ 
    return val.length === 0;
  }

  // Arrays...
  if (Array.isArray(val)){ 
    return val.length === 0; 
  }

  // Errors...
  if (val instanceof Error){ 
    return val.message === '';
  }
  
  // Objects...
  if (val.toString == toString) {
    object_type = val.toString();
    switch (object_type) {

      // Maps, Sets, Files and Errors...
      case '[object File]':
      case '[object Map]':
      case '[object Set]': {
        return val.size === 0;
      }

      // Plain objects...
      case '[object Object]': {
        for (var key in val) {
          if (has.call(val, key)){ 
            return false; 
          }
        }

        return true;
      }
    }
  }
  // Anything else...
  return false;
}

/**
 * Export `itsEmpty`.
 *
 * @type {Function}
 */

module.exports = itsEmpty;
