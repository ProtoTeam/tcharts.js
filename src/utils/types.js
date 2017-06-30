/**
 * Created by hustcc.
 */

/**
 *  what( var ) -> String
 *  - var: the var which want to typeof
 *  get what is the type of the input var.
 **/
const what = require('what.js');
// TODO 循环引用
// const Point = require('../core/Point');

/**
 * How to usage
 *

 what({}); // 'object'
 what({abc: 123}); // 'object'

 what([]); // 'array'
 what([123, 'abc']); // 'array'

 what(function() {}); // 'function'
 what(setTimeout); // 'function'

 what(/^what\.js$/); // 'regexp'

 what(new Date()); // 'date'

 what(null); // 'null'
 what(undefined); // 'undefined'

 what('abc'); // 'string'
 what(123); // 'number'
 what(12.3); // 'number'

 what(true); // 'boolean'
 what(false); // 'boolean'

 *
 */

const isNumber = v => what(v) === 'number';

const isString = v => what(v) === 'string';

const isArray = v => what(v) === 'array';

const isObject = v => what(v) === 'object';

const isBool = v => what(v) === 'boolean';

const isEmpty = v => v === null || v === undefined;

const isPoint = v => !!v; // TODO

const typeOf = v => what(v); // TODO

module.exports = {
  isNumber,
  isString,
  isArray,
  isObject,
  isBool,
  isEmpty,
  isPoint,
  typeof: typeOf,
};
