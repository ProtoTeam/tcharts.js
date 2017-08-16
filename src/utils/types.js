/**
 * Created by hustcc.
 */

const VT = require('variable-type');
const what = require('what.js');


const isNumber = v => VT.check(v, VT.number);

const isString = v => VT.check(v, VT.string);

const isArray = v => VT.check(v, VT.array);

const isObject = v => VT.check(v, VT.object);

const isBool = v => VT.check(v, VT.bool);

const isEmpty = v => VT.check(v, VT.or([
  VT.null,
  VT.undefined
]));

const isPoint = v => v.CLASSNAME === 'Point';

const typeOf = v => v.CLASSNAME || what(v);

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
