/**
 * Created by hustcc.
 */

const VT = require('variable-type');
const what = require('what.js');


const isNumber = v => VT.number.check(v);

const isString = v => VT.string.check(v);

const isArray = v => VT.array.check(v);

const isObject = v => VT.object.check(v);

const isBool = v => VT.bool.check(v);

const isEmpty = v => VT.or([
  VT.null,
  VT.undefined
]).check(v);

const isPoint = v => v.CLASSNAME === 'Point';

const typeOf = (v) => {
  if (v && v.CLASSNAME) return v.CLASSNAME;
  return what(v);
};

module.exports = {
  isNumber,
  isString,
  isArray,
  isObject,
  isBool,
  isEmpty,
  isPoint,
  typeOf,
};
