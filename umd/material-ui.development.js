/** @license Material-UI v1.1.0
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
  (factory((global['material-ui'] = {}),global.React,global.ReactDOM));
}(this, (function (exports,React,ReactDOM) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  var common = {
    black: '#000',
    white: '#fff'
  };

  var red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
  };

  var pink = {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162'
  };

  var purple = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff'
  };

  var deepPurple = {
    50: '#ede7f6',
    100: '#d1c4e9',
    200: '#b39ddb',
    300: '#9575cd',
    400: '#7e57c2',
    500: '#673ab7',
    600: '#5e35b1',
    700: '#512da8',
    800: '#4527a0',
    900: '#311b92',
    A100: '#b388ff',
    A200: '#7c4dff',
    A400: '#651fff',
    A700: '#6200ea'
  };

  var indigo = {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe'
  };

  var blue = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff'
  };

  var lightBlue = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea'
  };

  var cyan = {
    50: '#e0f7fa',
    100: '#b2ebf2',
    200: '#80deea',
    300: '#4dd0e1',
    400: '#26c6da',
    500: '#00bcd4',
    600: '#00acc1',
    700: '#0097a7',
    800: '#00838f',
    900: '#006064',
    A100: '#84ffff',
    A200: '#18ffff',
    A400: '#00e5ff',
    A700: '#00b8d4'
  };

  var teal = {
    50: '#e0f2f1',
    100: '#b2dfdb',
    200: '#80cbc4',
    300: '#4db6ac',
    400: '#26a69a',
    500: '#009688',
    600: '#00897b',
    700: '#00796b',
    800: '#00695c',
    900: '#004d40',
    A100: '#a7ffeb',
    A200: '#64ffda',
    A400: '#1de9b6',
    A700: '#00bfa5'
  };

  var green = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
  };

  var lightGreen = {
    50: '#f1f8e9',
    100: '#dcedc8',
    200: '#c5e1a5',
    300: '#aed581',
    400: '#9ccc65',
    500: '#8bc34a',
    600: '#7cb342',
    700: '#689f38',
    800: '#558b2f',
    900: '#33691e',
    A100: '#ccff90',
    A200: '#b2ff59',
    A400: '#76ff03',
    A700: '#64dd17'
  };

  var lime = {
    50: '#f9fbe7',
    100: '#f0f4c3',
    200: '#e6ee9c',
    300: '#dce775',
    400: '#d4e157',
    500: '#cddc39',
    600: '#c0ca33',
    700: '#afb42b',
    800: '#9e9d24',
    900: '#827717',
    A100: '#f4ff81',
    A200: '#eeff41',
    A400: '#c6ff00',
    A700: '#aeea00'
  };

  var yellow = {
    50: '#fffde7',
    100: '#fff9c4',
    200: '#fff59d',
    300: '#fff176',
    400: '#ffee58',
    500: '#ffeb3b',
    600: '#fdd835',
    700: '#fbc02d',
    800: '#f9a825',
    900: '#f57f17',
    A100: '#ffff8d',
    A200: '#ffff00',
    A400: '#ffea00',
    A700: '#ffd600'
  };

  var amber = {
    50: '#fff8e1',
    100: '#ffecb3',
    200: '#ffe082',
    300: '#ffd54f',
    400: '#ffca28',
    500: '#ffc107',
    600: '#ffb300',
    700: '#ffa000',
    800: '#ff8f00',
    900: '#ff6f00',
    A100: '#ffe57f',
    A200: '#ffd740',
    A400: '#ffc400',
    A700: '#ffab00'
  };

  var orange = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00'
  };

  var deepOrange = {
    50: '#fbe9e7',
    100: '#ffccbc',
    200: '#ffab91',
    300: '#ff8a65',
    400: '#ff7043',
    500: '#ff5722',
    600: '#f4511e',
    700: '#e64a19',
    800: '#d84315',
    900: '#bf360c',
    A100: '#ff9e80',
    A200: '#ff6e40',
    A400: '#ff3d00',
    A700: '#dd2c00'
  };

  var brown = {
    50: '#efebe9',
    100: '#d7ccc8',
    200: '#bcaaa4',
    300: '#a1887f',
    400: '#8d6e63',
    500: '#795548',
    600: '#6d4c41',
    700: '#5d4037',
    800: '#4e342e',
    900: '#3e2723',
    A100: '#d7ccc8',
    A200: '#bcaaa4',
    A400: '#8d6e63',
    A700: '#5d4037'
  };

  var grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161'
  };

  var blueGrey = {
    50: '#eceff1',
    100: '#cfd8dc',
    200: '#b0bec5',
    300: '#90a4ae',
    400: '#78909c',
    500: '#607d8b',
    600: '#546e7a',
    700: '#455a64',
    800: '#37474f',
    900: '#263238',
    A100: '#cfd8dc',
    A200: '#b0bec5',
    A400: '#78909c',
    A700: '#455a64'
  };



  var index = /*#__PURE__*/Object.freeze({
    common: common,
    red: red,
    pink: pink,
    purple: purple,
    deepPurple: deepPurple,
    indigo: indigo,
    blue: blue,
    lightBlue: lightBlue,
    cyan: cyan,
    teal: teal,
    green: green,
    lightGreen: lightGreen,
    lime: lime,
    yellow: yellow,
    amber: amber,
    orange: orange,
    deepOrange: deepOrange,
    brown: brown,
    grey: grey,
    blueGrey: blueGrey
  });

  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var __DEV__ = "development" !== 'production';

  var warning = function() {};

  if (__DEV__) {
    warning = function(condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      if (format === undefined) {
        throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
        );
      }

      if (format.length < 10 || (/^[s\W]*$/).test(format)) {
        throw new Error(
          'The warning format should be able to uniquely identify this ' +
          'warning. Please, use a more descriptive format than: ' + format
        );
      }

      if (!condition) {
        var argIndex = 0;
        var message = 'Warning: ' +
          format.replace(/%s/g, function() {
            return args[argIndex++];
          });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch(x) {}
      }
    };
  }

  var warning_1 = warning;

  // When new generator function is created, rule counter is reset.
  // We need to reset the rule counter for SSR for each request.
  //
  // It's inspired by
  // https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

  function createGenerateClassName() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _options$dangerouslyU = options.dangerouslyUseGlobalCSS,
        dangerouslyUseGlobalCSS = _options$dangerouslyU === void 0 ? false : _options$dangerouslyU,
        _options$productionPr = options.productionPrefix;
    var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
    var ruleCounter = 0; // - HMR can lead to many class name generators being instantiated,

    return function (rule, styleSheet) {
      ruleCounter += 1;
      warning_1(ruleCounter < 1e10, ['Material-UI: you might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join('')); // Code branch the whole block at the expense of more code.

      if (dangerouslyUseGlobalCSS) {
        if (styleSheet && styleSheet.options.classNamePrefix) {
          var prefix = styleSheet.options.classNamePrefix; // Sanitize the string as will be used to prefix the generated class name.

          prefix = prefix.replace(escapeRegex, '-');

          if (prefix.match(/^Mui/)) {
            return "".concat(prefix, "-").concat(rule.key);
          }

          {
            return "".concat(prefix, "-").concat(rule.key, "-").concat(ruleCounter);
          }
        }

        return "".concat(rule.key, "-").concat(ruleCounter);
      }

      if (styleSheet && styleSheet.options.classNamePrefix) {
        var _prefix = styleSheet.options.classNamePrefix; // Sanitize the string as will be used to prefix the generated class name.

        _prefix = _prefix.replace(escapeRegex, '-');
        return "".concat(_prefix, "-").concat(rule.key, "-").concat(ruleCounter);
      }

      return "".concat(rule.key, "-").concat(ruleCounter);
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var objectSpread = _objectSpread;

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  var objectWithoutProperties = _objectWithoutProperties;

  var isMergeableObject = function isMergeableObject(value) {
  	return isNonNullObject(value)
  		&& !isSpecial(value)
  };

  function isNonNullObject(value) {
  	return !!value && typeof value === 'object'
  }

  function isSpecial(value) {
  	var stringValue = Object.prototype.toString.call(value);

  	return stringValue === '[object RegExp]'
  		|| stringValue === '[object Date]'
  		|| isReactElement(value)
  }

  // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

  function isReactElement(value) {
  	return value.$$typeof === REACT_ELEMENT_TYPE
  }

  function emptyTarget(val) {
  	return Array.isArray(val) ? [] : {}
  }

  function cloneUnlessOtherwiseSpecified(value, options) {
  	return (options.clone !== false && options.isMergeableObject(value))
  		? deepmerge(emptyTarget(value), value, options)
  		: value
  }

  function defaultArrayMerge(target, source, options) {
  	return target.concat(source).map(function(element) {
  		return cloneUnlessOtherwiseSpecified(element, options)
  	})
  }

  function mergeObject(target, source, options) {
  	var destination = {};
  	if (options.isMergeableObject(target)) {
  		Object.keys(target).forEach(function(key) {
  			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
  		});
  	}
  	Object.keys(source).forEach(function(key) {
  		if (!options.isMergeableObject(source[key]) || !target[key]) {
  			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
  		} else {
  			destination[key] = deepmerge(target[key], source[key], options);
  		}
  	});
  	return destination
  }

  function deepmerge(target, source, options) {
  	options = options || {};
  	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

  	var sourceIsArray = Array.isArray(source);
  	var targetIsArray = Array.isArray(target);
  	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  	if (!sourceAndTargetTypesMatch) {
  		return cloneUnlessOtherwiseSpecified(source, options)
  	} else if (sourceIsArray) {
  		return options.arrayMerge(target, source, options)
  	} else {
  		return mergeObject(target, source, options)
  	}
  }

  deepmerge.all = function deepmergeAll(array, options) {
  	if (!Array.isArray(array)) {
  		throw new Error('first argument should be an array')
  	}

  	return array.reduce(function(prev, next) {
  		return deepmerge(prev, next, options)
  	}, {})
  };

  var deepmerge_1 = deepmerge;

  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }

  function createTypography(palette, typography) {
    var _ref = typeof typography === 'function' ? typography(palette) : typography,
        _ref$fontFamily = _ref.fontFamily,
        fontFamily = _ref$fontFamily === void 0 ? '"Roboto", "Helvetica", "Arial", sans-serif' : _ref$fontFamily,
        _ref$fontSize = _ref.fontSize,
        fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
        _ref$fontWeightLight = _ref.fontWeightLight,
        fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
        _ref$fontWeightRegula = _ref.fontWeightRegular,
        fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
        _ref$fontWeightMedium = _ref.fontWeightMedium,
        fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
        _ref$htmlFontSize = _ref.htmlFontSize,
        htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
        other = objectWithoutProperties(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "htmlFontSize"]);

    var coef = fontSize / 14;

    function pxToRem(value) {
      return "".concat(value / htmlFontSize * coef, "rem");
    }

    return deepmerge_1({
      pxToRem: pxToRem,
      round: round,
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeightLight: fontWeightLight,
      fontWeightRegular: fontWeightRegular,
      fontWeightMedium: fontWeightMedium,
      display4: {
        fontSize: pxToRem(112),
        fontWeight: fontWeightLight,
        fontFamily: fontFamily,
        letterSpacing: '-.04em',
        lineHeight: "".concat(round(128 / 112), "em"),
        marginLeft: '-.04em',
        color: palette.text.secondary
      },
      display3: {
        fontSize: pxToRem(56),
        fontWeight: fontWeightRegular,
        fontFamily: fontFamily,
        letterSpacing: '-.02em',
        lineHeight: "".concat(round(73 / 56), "em"),
        marginLeft: '-.02em',
        color: palette.text.secondary
      },
      display2: {
        fontSize: pxToRem(45),
        fontWeight: fontWeightRegular,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(48 / 45), "em"),
        marginLeft: '-.02em',
        color: palette.text.secondary
      },
      display1: {
        fontSize: pxToRem(34),
        fontWeight: fontWeightRegular,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(41 / 34), "em"),
        color: palette.text.secondary
      },
      headline: {
        fontSize: pxToRem(24),
        fontWeight: fontWeightRegular,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(32.5 / 24), "em"),
        color: palette.text.primary
      },
      title: {
        fontSize: pxToRem(21),
        fontWeight: fontWeightMedium,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(24.5 / 21), "em"),
        color: palette.text.primary
      },
      subheading: {
        fontSize: pxToRem(16),
        fontWeight: fontWeightRegular,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(24 / 16), "em"),
        color: palette.text.primary
      },
      body2: {
        fontSize: pxToRem(14),
        fontWeight: fontWeightMedium,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(24 / 14), "em"),
        color: palette.text.primary
      },
      body1: {
        fontSize: pxToRem(14),
        fontWeight: fontWeightRegular,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(20.5 / 14), "em"),
        color: palette.text.primary
      },
      caption: {
        fontSize: pxToRem(12),
        fontWeight: fontWeightRegular,
        fontFamily: fontFamily,
        lineHeight: "".concat(round(16.5 / 12), "em"),
        color: palette.text.secondary
      },
      button: {
        fontSize: pxToRem(14),
        textTransform: 'uppercase',
        fontWeight: fontWeightMedium,
        fontFamily: fontFamily,
        color: palette.text.primary
      }
    }, other, {
      clone: false // No need to clone deep

    });
  }

  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

  function createBreakpoints(breakpoints) {
    var _breakpoints$values = breakpoints.values,
        values = _breakpoints$values === void 0 ? {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    } : _breakpoints$values,
        _breakpoints$unit = breakpoints.unit,
        unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
        _breakpoints$step = breakpoints.step,
        step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
        other = objectWithoutProperties(breakpoints, ["values", "unit", "step"]);

    function up(key) {
      var value = typeof values[key] === 'number' ? values[key] : key;
      return "@media (min-width:".concat(value).concat(unit, ")");
    }

    function down(key) {
      var endIndex = keys.indexOf(key) + 1;
      var upperbound = values[keys[endIndex]];

      if (endIndex === keys.length) {
        // xl down applies to all sizes
        return up('xs');
      }

      var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
      return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
    }

    function between(start, end) {
      var endIndex = keys.indexOf(end) + 1;

      if (endIndex === keys.length) {
        return up(start);
      }

      return "@media (min-width:".concat(values[start]).concat(unit, ") and ") + "(max-width:".concat(values[keys[endIndex]] - step / 100).concat(unit, ")");
    }

    function only(key) {
      return between(key, key);
    }

    function width(key) {
      return values[key];
    }

    return objectSpread({
      keys: keys,
      values: values,
      up: up,
      down: down,
      between: between,
      only: only,
      width: width
    }, other);
  }

  //  weak
  /**
   * Returns a number whose value is limited to the given range.
   *
   * @param {number} value The value to be clamped
   * @param {number} min The lower boundary of the output range
   * @param {number} max The upper boundary of the output range
   * @returns {number} A number in the range [min, max]
   */

  function clamp(value) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    warning_1(value >= min && value <= max, "Material-UI: the value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));

    if (value < min) {
      return min;
    }

    if (value > max) {
      return max;
    }

    return value;
  }
  /**
   * Converts a color from CSS hex format to CSS rgb format.
   *
   * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
   * @returns {string} A CSS rgb color string
   */


  function convertHexToRGB(color) {
    color = color.substr(1);
    var re = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
    var colors = color.match(re);

    if (colors && colors[0].length === 1) {
      colors = colors.map(function (n) {
        return n + n;
      });
    }

    return colors ? "rgb(".concat(colors.map(function (n) {
      return parseInt(n, 16);
    }).join(', '), ")") : '';
  }
  /**
   * Returns an object with the type and values of a color.
   *
   * Note: Does not support rgb % values.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {object} - A MUI color object: {type: string, values: number[]}
   */

  function decomposeColor(color) {
    if (color.charAt(0) === '#') {
      return decomposeColor(convertHexToRGB(color));
    }

    var marker = color.indexOf('(');
    var type = color.substring(0, marker);
    var values = color.substring(marker + 1, color.length - 1).split(',');
    values = values.map(function (value) {
      return parseFloat(value);
    });

    {
      if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
        throw new Error(["Material-UI: unsupported `".concat(color, "` color."), 'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().'].join('\n'));
      }
    }

    return {
      type: type,
      values: values
    };
  }
  /**
   * Converts a color object with type and values to a string.
   *
   * @param {object} color - Decomposed color
   * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
   * @param {array} color.values - [n,n,n] or [n,n,n,n]
   * @returns {string} A CSS color string
   */

  function recomposeColor(color) {
    var type = color.type;
    var values = color.values;

    if (type.indexOf('rgb') !== -1) {
      // Only convert the first 3 values to int (i.e. not alpha)
      values = values.map(function (n, i) {
        return i < 3 ? parseInt(n, 10) : n;
      });
    }

    if (type.indexOf('hsl') !== -1) {
      values[1] = "".concat(values[1], "%");
      values[2] = "".concat(values[2], "%");
    }

    return "".concat(color.type, "(").concat(values.join(', '), ")");
  }
  /**
   * Calculates the contrast ratio between two colors.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   *
   * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} A contrast ratio value in the range 0 - 21.
   */

  function getContrastRatio(foreground, background) {
    var lumA = getLuminance(foreground);
    var lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  }
  /**
   * The relative brightness of any point in a color space,
   * normalized to 0 for darkest black and 1 for lightest white.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} The relative brightness of the color in the range 0 - 1
   */

  function getLuminance(color) {
    var decomposedColor = decomposeColor(color);

    if (decomposedColor.type.indexOf('rgb') !== -1) {
      var rgb = decomposedColor.values.map(function (val) {
        val /= 255; // normalized

        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      }); // Truncate at 3 digits

      return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
    } // else if (decomposedColor.type.indexOf('hsl') !== -1)


    return decomposedColor.values[2] / 100;
  }
  /**
   * Darken or lighten a colour, depending on its luminance.
   * Light colors are darkened, dark colors are lightened.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function emphasize(color) {
    var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
    return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
  }
  /**
   * Set the absolute transparency of a color.
   * Any existing alpha values are overwritten.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} value - value to set the alpha channel to in the range 0 -1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function fade(color, value) {
    warning_1(color, "Material-UI: missing color argument in fade(".concat(color, ", ").concat(value, ")."));
    if (!color) return color;
    color = decomposeColor(color);
    value = clamp(value);

    if (color.type === 'rgb' || color.type === 'hsl') {
      color.type += 'a';
    }

    color.values[3] = value;
    return recomposeColor(color);
  }
  /**
   * Darkens a color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function darken(color, coefficient) {
    warning_1(color, "Material-UI: missing color argument in darken(".concat(color, ", ").concat(coefficient, ")."));
    if (!color) return color;
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] *= 1 - coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
      for (var i = 0; i < 3; i += 1) {
        color.values[i] *= 1 - coefficient;
      }
    }

    return recomposeColor(color);
  }
  /**
   * Lightens a color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function lighten(color, coefficient) {
    warning_1(color, "Material-UI: missing color argument in lighten(".concat(color, ", ").concat(coefficient, ")."));
    if (!color) return color;
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
      for (var i = 0; i < 3; i += 1) {
        color.values[i] += (255 - color.values[i]) * coefficient;
      }
    }

    return recomposeColor(color);
  }

  var light = {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.54)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)',
      // Text hints.
      hint: 'rgba(0, 0, 0, 0.38)'
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common.white,
      default: grey[50]
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.14)',
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)'
    }
  };
  var dark = {
    text: {
      primary: common.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: grey[800],
      default: '#303030'
    },
    action: {
      active: common.white,
      hover: 'rgba(255, 255, 255, 0.1)',
      hoverOpacity: 0.1,
      selected: 'rgba(255, 255, 255, 0.2)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)'
    }
  };

  function addLightOrDark(intent, direction, shade, tonalOffset) {
    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === 'light') {
        intent.light = lighten(intent.main, tonalOffset);
      } else if (direction === 'dark') {
        intent.dark = darken(intent.main, tonalOffset * 1.5);
      }
    }
  }

  function createPalette(palette) {
    var _palette$primary = palette.primary,
        primary = _palette$primary === void 0 ? {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700]
    } : _palette$primary,
        _palette$secondary = palette.secondary,
        secondary = _palette$secondary === void 0 ? {
      light: pink.A200,
      main: pink.A400,
      dark: pink.A700
    } : _palette$secondary,
        _palette$error = palette.error,
        error = _palette$error === void 0 ? {
      light: red[300],
      main: red[500],
      dark: red[700]
    } : _palette$error,
        _palette$type = palette.type,
        type = _palette$type === void 0 ? 'light' : _palette$type,
        _palette$contrastThre = palette.contrastThreshold,
        contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
        _palette$tonalOffset = palette.tonalOffset,
        tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
        other = objectWithoutProperties(palette, ["primary", "secondary", "error", "type", "contrastThreshold", "tonalOffset"]);

    function getContrastText(background) {
      // Use the same logic as
      // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
      // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
      var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

      {
        var contrast = getContrastRatio(background, contrastText);
        warning_1(contrast >= 3, ["Material-UI: the contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WACG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }

      return contrastText;
    }

    function augmentColor(color, mainShade, lightShade, darkShade) {
      if (!color.main && color[mainShade]) {
        color.main = color[mainShade];
      }

      addLightOrDark(color, 'light', lightShade, tonalOffset);
      addLightOrDark(color, 'dark', darkShade, tonalOffset);

      if (!color.contrastText) {
        color.contrastText = getContrastText(color.main);
      }
    }

    augmentColor(primary, 500, 300, 700);
    augmentColor(secondary, 'A400', 'A200', 'A700');
    augmentColor(error, 500, 300, 700);
    var types = {
      dark: dark,
      light: light
    };
    warning_1(types[type], "Material-UI: the palette type `".concat(type, "` is not supported."));
    var paletteOutput = deepmerge_1(objectSpread({
      // A collection of common colors.
      common: common,
      // The palette type, can be light or dark.
      type: type,
      // The colors used to represent primary interface elements for a user.
      primary: primary,
      // The colors used to represent secondary interface elements for a user.
      secondary: secondary,
      // The colors used to represent interface elements that the user should be made aware of.
      error: error,
      // The grey colors.
      grey: grey,
      // Used by `getContrastText()` to maximize the contrast between the background and
      // the text.
      contrastThreshold: contrastThreshold,
      // Take a background color and return the color of the text to maximize the contrast.
      getContrastText: getContrastText,
      // Generate a rich color object.
      augmentColor: augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: tonalOffset
    }, types[type]), other, {
      clone: false // No need to clone deep

    });
    return paletteOutput;
  }

  function createMixins(breakpoints, spacing, mixins) {
    var _toolbar;

    return objectSpread({
      gutters: function gutters() {
        var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return objectSpread({
          paddingLeft: spacing.unit * 2,
          paddingRight: spacing.unit * 2
        }, styles, defineProperty({}, breakpoints.up('sm'), objectSpread({
          paddingLeft: spacing.unit * 3,
          paddingRight: spacing.unit * 3
        }, styles[breakpoints.up('sm')])));
      },
      toolbar: (_toolbar = {
        minHeight: 56
      }, defineProperty(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
        minHeight: 48
      }), defineProperty(_toolbar, breakpoints.up('sm'), {
        minHeight: 64
      }), _toolbar)
    }, mixins);
  }

  var shadowKeyUmbraOpacity = 0.2;
  var shadowKeyPenumbraOpacity = 0.14;
  var shadowAmbientShadowOpacity = 0.12;

  function createShadow() {
    return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0, 0, 0, ").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0, 0, 0, ").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0, 0, 0, ").concat(shadowAmbientShadowOpacity, ")")].join(',');
  }

  var shadows = ['none', createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1), createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2), createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

  // to learn the context in which each easing should be used.

  var easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  }; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
  // to learn when use what timing

  var duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
  };
  var formatMs = function formatMs(milliseconds) {
    return "".concat(Math.round(milliseconds), "ms");
  };
  var isString = function isString(value) {
    return typeof value === 'string';
  };
  var isNumber = function isNumber(value) {
    return !Number.isNaN(parseFloat(value));
  };
  /**
   * @param {string|Array} props
   * @param {object} param
   * @param {string} param.prop
   * @param {number} param.duration
   * @param {string} param.easing
   * @param {number} param.delay
   */

  var transitions = {
    easing: easing,
    duration: duration,
    create: function create() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return function () {
        var _options$duration = options.duration,
            durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
            _options$easing = options.easing,
            easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
            _options$delay = options.delay,
            delay = _options$delay === void 0 ? 0 : _options$delay,
            other = objectWithoutProperties(options, ["duration", "easing", "delay"]);

        warning_1(isString(props) || Array.isArray(props), 'Material-UI: argument "props" must be a string or Array.');
        warning_1(isNumber(durationOption) || isString(durationOption), "Material-UI: argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
        warning_1(isString(easingOption), 'Material-UI: argument "easing" must be a string.');
        warning_1(isNumber(delay) || isString(delay), 'Material-UI: argument "delay" must be a number or a string.');
        warning_1(Object.keys(other).length === 0, "Material-UI: unrecognized argument(s) [".concat(Object.keys(other).join(','), "]"));
        return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
          return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
        }).join(',');
      }();
    },
    getAutoHeightDuration: function getAutoHeightDuration(height) {
      if (!height) {
        return 0;
      }

      var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

      return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
    }
  };

  // We need to centralize the zIndex definitions as they work
  // like global values in the browser.
  var zIndex = {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };

  var spacing = {
    // All components align to an 8dp square baseline grid for mobile, tablet, and desktop.
    // https://material.io/guidelines/layout/metrics-keylines.html#metrics-keylines-baseline-grids
    unit: 8
  };

  function createMuiTheme() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _options$palette = options.palette,
        paletteInput = _options$palette === void 0 ? {} : _options$palette,
        _options$breakpoints = options.breakpoints,
        breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
        _options$mixins = options.mixins,
        mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
        _options$typography = options.typography,
        typographyInput = _options$typography === void 0 ? {} : _options$typography,
        shadowsInput = options.shadows,
        other = objectWithoutProperties(options, ["palette", "breakpoints", "mixins", "typography", "shadows"]);

    var palette = createPalette(paletteInput);
    var breakpoints = createBreakpoints(breakpointsInput);

    var muiTheme = objectSpread({
      breakpoints: breakpoints,
      direction: 'ltr',
      mixins: createMixins(breakpoints, spacing, mixinsInput),
      overrides: {},
      // Inject custom styles
      palette: palette,
      props: {},
      // Inject custom properties
      shadows: shadowsInput || shadows,
      typography: createTypography(palette, typographyInput)
    }, deepmerge_1({
      transitions: transitions,
      spacing: spacing,
      zIndex: zIndex
    }, other));

    warning_1(muiTheme.shadows.length === 25, 'Material-UI: the shadows array provided to createMuiTheme should support 25 elevations.');
    return muiTheme;
  }

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var getDynamicStyles_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  exports['default'] = getDynamicStyles;
  /**
   * Extracts a styles object with only props that contain function values.
   */
  function getDynamicStyles(styles) {
    var to = null;

    for (var key in styles) {
      var value = styles[key];
      var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

      if (type === 'function') {
        if (!to) to = {};
        to[key] = value;
      } else if (type === 'object' && value !== null && !Array.isArray(value)) {
        var extracted = getDynamicStyles(value);
        if (extracted) {
          if (!to) to = {};
          to[key] = extracted;
        }
      }
    }

    return to;
  }
  });

  unwrapExports(getDynamicStyles_1);

  var toCssValue_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = toCssValue;
  var join = function join(value, by) {
    var result = '';
    for (var i = 0; i < value.length; i++) {
      // Remove !important from the value, it will be readded later.
      if (value[i] === '!important') break;
      if (result) result += by;
      result += value[i];
    }
    return result;
  };

  /**
   * Converts array values to string.
   *
   * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
   * `border: ['1px', '2px']` > `border: 1px, 2px;`
   * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
   * `color: ['red', !important]` > `color: red !important;`
   */
  function toCssValue(value) {
    var ignoreImportant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!Array.isArray(value)) return value;

    var cssValue = '';

    // Support space separated values via `[['5px', '10px']]`.
    if (Array.isArray(value[0])) {
      for (var i = 0; i < value.length; i++) {
        if (value[i] === '!important') break;
        if (cssValue) cssValue += ', ';
        cssValue += join(value[i], ' ');
      }
    } else cssValue = join(value, ', ');

    // Add !important, because it was ignored.
    if (!ignoreImportant && value[value.length - 1] === '!important') {
      cssValue += ' !important';
    }

    return cssValue;
  }
  });

  unwrapExports(toCssValue_1);

  var SheetsRegistry_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * Sheets registry to access them all at one place.
   */
  var SheetsRegistry = function () {
    function SheetsRegistry() {
      _classCallCheck(this, SheetsRegistry);

      this.registry = [];
    }

    _createClass(SheetsRegistry, [{
      key: 'add',


      /**
       * Register a Style Sheet.
       */
      value: function add(sheet) {
        var registry = this.registry;
        var index = sheet.options.index;


        if (registry.indexOf(sheet) !== -1) return;

        if (registry.length === 0 || index >= this.index) {
          registry.push(sheet);
          return;
        }

        // Find a position.
        for (var i = 0; i < registry.length; i++) {
          if (registry[i].options.index > index) {
            registry.splice(i, 0, sheet);
            return;
          }
        }
      }

      /**
       * Reset the registry.
       */

    }, {
      key: 'reset',
      value: function reset() {
        this.registry = [];
      }

      /**
       * Remove a Style Sheet.
       */

    }, {
      key: 'remove',
      value: function remove(sheet) {
        var index = this.registry.indexOf(sheet);
        this.registry.splice(index, 1);
      }

      /**
       * Convert all attached sheets to a CSS string.
       */

    }, {
      key: 'toString',
      value: function toString(options) {
        return this.registry.filter(function (sheet) {
          return sheet.attached;
        }).map(function (sheet) {
          return sheet.toString(options);
        }).join('\n');
      }
    }, {
      key: 'index',


      /**
       * Current highest index number.
       */
      get: function get() {
        return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
      }
    }]);

    return SheetsRegistry;
  }();

  exports['default'] = SheetsRegistry;
  });

  unwrapExports(SheetsRegistry_1);

  var SheetsManager_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _warning2 = _interopRequireDefault(warning_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * SheetsManager is like a WeakMap which is designed to count StyleSheet
   * instances and attach/detach automatically.
   */
  var SheetsManager = function () {
    function SheetsManager() {
      _classCallCheck(this, SheetsManager);

      this.sheets = [];
      this.refs = [];
      this.keys = [];
    }

    _createClass(SheetsManager, [{
      key: 'get',
      value: function get(key) {
        var index = this.keys.indexOf(key);
        return this.sheets[index];
      }
    }, {
      key: 'add',
      value: function add(key, sheet) {
        var sheets = this.sheets,
            refs = this.refs,
            keys = this.keys;

        var index = sheets.indexOf(sheet);

        if (index !== -1) return index;

        sheets.push(sheet);
        refs.push(0);
        keys.push(key);

        return sheets.length - 1;
      }
    }, {
      key: 'manage',
      value: function manage(key) {
        var index = this.keys.indexOf(key);
        var sheet = this.sheets[index];
        if (this.refs[index] === 0) sheet.attach();
        this.refs[index]++;
        if (!this.keys[index]) this.keys.splice(index, 0, key);
        return sheet;
      }
    }, {
      key: 'unmanage',
      value: function unmanage(key) {
        var index = this.keys.indexOf(key);
        if (index === -1) {
          // eslint-ignore-next-line no-console
          (0, _warning2['default'])(false, "SheetsManager: can't find sheet to unmanage");
          return;
        }
        if (this.refs[index] > 0) {
          this.refs[index]--;
          if (this.refs[index] === 0) this.sheets[index].detach();
        }
      }
    }, {
      key: 'size',
      get: function get() {
        return this.keys.length;
      }
    }]);

    return SheetsManager;
  }();

  exports['default'] = SheetsManager;
  });

  unwrapExports(SheetsManager_1);

  var toCss_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = toCss;



  var _toCssValue2 = _interopRequireDefault(toCssValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  /**
   * Indent a string.
   * http://jsperf.com/array-join-vs-for
   */
  function indentStr(str, indent) {
    var result = '';
    for (var index = 0; index < indent; index++) {
      result += '  ';
    }return result + str;
  }

  /**
   * Converts a Rule to CSS string.
   */

  function toCss(selector, style) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var result = '';

    if (!style) return result;

    var _options$indent = options.indent,
        indent = _options$indent === undefined ? 0 : _options$indent;
    var fallbacks = style.fallbacks;


    indent++;

    // Apply fallbacks first.
    if (fallbacks) {
      // Array syntax {fallbacks: [{prop: value}]}
      if (Array.isArray(fallbacks)) {
        for (var index = 0; index < fallbacks.length; index++) {
          var fallback = fallbacks[index];
          for (var prop in fallback) {
            var value = fallback[prop];
            if (value != null) {
              result += '\n' + indentStr(prop + ': ' + (0, _toCssValue2['default'])(value) + ';', indent);
            }
          }
        }
      } else {
        // Object syntax {fallbacks: {prop: value}}
        for (var _prop in fallbacks) {
          var _value = fallbacks[_prop];
          if (_value != null) {
            result += '\n' + indentStr(_prop + ': ' + (0, _toCssValue2['default'])(_value) + ';', indent);
          }
        }
      }
    }

    for (var _prop2 in style) {
      var _value2 = style[_prop2];
      if (_value2 != null && _prop2 !== 'fallbacks') {
        result += '\n' + indentStr(_prop2 + ': ' + (0, _toCssValue2['default'])(_value2) + ';', indent);
      }
    }

    // Allow empty style in this case, because properties will be added dynamically.
    if (!result && !options.allowEmpty) return result;

    indent--;
    result = indentStr(selector + ' {' + result + '\n', indent) + indentStr('}', indent);

    return result;
  }
  });

  unwrapExports(toCss_1);

  var StyleRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _warning2 = _interopRequireDefault(warning_1);



  var _toCss2 = _interopRequireDefault(toCss_1);



  var _toCssValue2 = _interopRequireDefault(toCssValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var StyleRule = function () {
    function StyleRule(key, style, options) {
      _classCallCheck(this, StyleRule);

      this.type = 'style';
      this.isProcessed = false;
      var sheet = options.sheet,
          Renderer = options.Renderer,
          selector = options.selector;

      this.key = key;
      this.options = options;
      this.style = style;
      if (selector) this.selectorText = selector;
      this.renderer = sheet ? sheet.renderer : new Renderer();
    }

    /**
     * Set selector string.
     * Attention: use this with caution. Most browsers didn't implement
     * selectorText setter, so this may result in rerendering of entire Style Sheet.
     */


    _createClass(StyleRule, [{
      key: 'prop',


      /**
       * Get or set a style property.
       */
      value: function prop(name, value) {
        // It's a getter.
        if (value === undefined) return this.style[name];

        // Don't do anything if the value has not changed.
        if (this.style[name] === value) return this;

        value = this.options.jss.plugins.onChangeValue(value, name, this);

        var isEmpty = value == null || value === false;
        var isDefined = name in this.style;

        // Value is empty and wasn't defined before.
        if (isEmpty && !isDefined) return this;

        // We are going to remove this value.
        var remove = isEmpty && isDefined;

        if (remove) delete this.style[name];else this.style[name] = value;

        // Renderable is defined if StyleSheet option `link` is true.
        if (this.renderable) {
          if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, value);
          return this;
        }

        var sheet = this.options.sheet;

        if (sheet && sheet.attached) {
          (0, _warning2['default'])(false, 'Rule is not linked. Missing sheet option "link: true".');
        }
        return this;
      }

      /**
       * Apply rule to an element inline.
       */

    }, {
      key: 'applyTo',
      value: function applyTo(renderable) {
        var json = this.toJSON();
        for (var prop in json) {
          this.renderer.setProperty(renderable, prop, json[prop]);
        }return this;
      }

      /**
       * Returns JSON representation of the rule.
       * Fallbacks are not supported.
       * Useful for inline styles.
       */

    }, {
      key: 'toJSON',
      value: function toJSON() {
        var json = {};
        for (var prop in this.style) {
          var value = this.style[prop];
          if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = (0, _toCssValue2['default'])(value);
        }
        return json;
      }

      /**
       * Generates a CSS string.
       */

    }, {
      key: 'toString',
      value: function toString(options) {
        var sheet = this.options.sheet;

        var link = sheet ? sheet.options.link : false;
        var opts = link ? _extends({}, options, { allowEmpty: true }) : options;
        return (0, _toCss2['default'])(this.selector, this.style, opts);
      }
    }, {
      key: 'selector',
      set: function set(selector) {
        if (selector === this.selectorText) return;

        this.selectorText = selector;

        if (!this.renderable) return;

        var hasChanged = this.renderer.setSelector(this.renderable, selector);

        // If selector setter is not implemented, rerender the rule.
        if (!hasChanged && this.renderable) {
          var renderable = this.renderer.replaceRule(this.renderable, this);
          if (renderable) this.renderable = renderable;
        }
      }

      /**
       * Get selector string.
       */
      ,
      get: function get() {
        return this.selectorText;
      }
    }]);

    return StyleRule;
  }();

  exports['default'] = StyleRule;
  });

  unwrapExports(StyleRule_1);

  function symbolObservablePonyfill(root) {
  	var result;
  	var Symbol = root.Symbol;

  	if (typeof Symbol === 'function') {
  		if (Symbol.observable) {
  			result = Symbol.observable;
  		} else {
  			result = Symbol('observable');
  			Symbol.observable = result;
  		}
  	} else {
  		result = '@@observable';
  	}

  	return result;
  }

  /* global window */

  var root;

  if (typeof self !== 'undefined') {
    root = self;
  } else if (typeof window !== 'undefined') {
    root = window;
  } else if (typeof global !== 'undefined') {
    root = global;
  } else if (typeof module !== 'undefined') {
    root = module;
  } else {
    root = Function('return this')();
  }

  var result = symbolObservablePonyfill(root);

  var es = /*#__PURE__*/Object.freeze({
    default: result
  });

  var _symbolObservable = ( es && result ) || es;

  var isObservable = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  exports['default'] = function (value) {
    return value && value[_symbolObservable2['default']] && value === value[_symbolObservable2['default']]();
  };
  });

  unwrapExports(isObservable);

  var cloneStyle_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  exports['default'] = cloneStyle;



  var _isObservable2 = _interopRequireDefault(isObservable);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var isArray = Array.isArray;
  function cloneStyle(style) {
    // Support empty values in case user ends up with them by accident.
    if (style == null) return style;

    // Support string value for SimpleRule.
    var typeOfStyle = typeof style === 'undefined' ? 'undefined' : _typeof(style);

    if (typeOfStyle === 'string' || typeOfStyle === 'number' || typeOfStyle === 'function') {
      return style;
    }

    // Support array for FontFaceRule.
    if (isArray(style)) return style.map(cloneStyle);

    // Support Observable styles.  Observables are immutable, so we don't need to
    // copy them.
    if ((0, _isObservable2['default'])(style)) return style;

    var newStyle = {};
    for (var name in style) {
      var value = style[name];
      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        newStyle[name] = cloneStyle(value);
        continue;
      }
      newStyle[name] = value;
    }

    return newStyle;
  }
  });

  unwrapExports(cloneStyle_1);

  var createRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = createRule;



  var _warning2 = _interopRequireDefault(warning_1);



  var _StyleRule2 = _interopRequireDefault(StyleRule_1);



  var _cloneStyle2 = _interopRequireDefault(cloneStyle_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  /**
   * Create a rule instance.
   */
  function createRule() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unnamed';
    var decl = arguments[1];
    var options = arguments[2];
    var jss = options.jss;

    var declCopy = (0, _cloneStyle2['default'])(decl);

    var rule = jss.plugins.onCreateRule(name, declCopy, options);
    if (rule) return rule;

    // It is an at-rule and it has no instance.
    if (name[0] === '@') {
      (0, _warning2['default'])(false, '[JSS] Unknown at-rule %s', name);
    }

    return new _StyleRule2['default'](name, declCopy, options);
  }
  });

  unwrapExports(createRule_1);

  var linkRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = linkRule;
  /**
   * Link rule with CSSStyleRule and nested rules with corresponding nested cssRules if both exists.
   */
  function linkRule(rule, cssRule) {
    rule.renderable = cssRule;
    if (rule.rules && cssRule.cssRules) rule.rules.link(cssRule.cssRules);
  }
  });

  unwrapExports(linkRule_1);

  var _escape = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var CSS = commonjsGlobal.CSS;

  var env = "development";

  var escapeRegex = /([[\].#*$><+~=|^:(),"'`])/g;

  exports['default'] = function (str) {
    // We don't need to escape it in production, because we are not using user's
    // input for selectors, we are generating a valid selector.
    if (env === 'production') return str;

    if (!CSS || !CSS.escape) {
      return str.replace(escapeRegex, '\\$1');
    }

    return CSS.escape(str);
  };
  });

  unwrapExports(_escape);

  var RuleList_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _createRule2 = _interopRequireDefault(createRule_1);



  var _linkRule2 = _interopRequireDefault(linkRule_1);



  var _StyleRule2 = _interopRequireDefault(StyleRule_1);



  var _escape2 = _interopRequireDefault(_escape);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */
  var RuleList = function () {

    // Original styles object.
    function RuleList(options) {
      _classCallCheck(this, RuleList);

      this.map = {};
      this.raw = {};
      this.index = [];

      this.options = options;
      this.classes = options.classes;
    }

    /**
     * Create and register rule.
     *
     * Will not render after Style Sheet was rendered the first time.
     */


    // Used to ensure correct rules order.

    // Rules registry for access by .get() method.
    // It contains the same rule registered by name and by selector.


    _createClass(RuleList, [{
      key: 'add',
      value: function add(name, decl, options) {
        var _options = this.options,
            parent = _options.parent,
            sheet = _options.sheet,
            jss = _options.jss,
            Renderer = _options.Renderer,
            generateClassName = _options.generateClassName;


        options = _extends({
          classes: this.classes,
          parent: parent,
          sheet: sheet,
          jss: jss,
          Renderer: Renderer,
          generateClassName: generateClassName
        }, options);

        if (!options.selector && this.classes[name]) {
          options.selector = '.' + (0, _escape2['default'])(this.classes[name]);
        }

        this.raw[name] = decl;

        var rule = (0, _createRule2['default'])(name, decl, options);

        var className = void 0;

        if (!options.selector && rule instanceof _StyleRule2['default']) {
          className = generateClassName(rule, sheet);
          rule.selector = '.' + (0, _escape2['default'])(className);
        }

        this.register(rule, className);

        var index = options.index === undefined ? this.index.length : options.index;
        this.index.splice(index, 0, rule);

        return rule;
      }

      /**
       * Get a rule.
       */

    }, {
      key: 'get',
      value: function get(name) {
        return this.map[name];
      }

      /**
       * Delete a rule.
       */

    }, {
      key: 'remove',
      value: function remove(rule) {
        this.unregister(rule);
        this.index.splice(this.indexOf(rule), 1);
      }

      /**
       * Get index of a rule.
       */

    }, {
      key: 'indexOf',
      value: function indexOf(rule) {
        return this.index.indexOf(rule);
      }

      /**
       * Run `onProcessRule()` plugins on every rule.
       */

    }, {
      key: 'process',
      value: function process() {
        var plugins = this.options.jss.plugins;
        // We need to clone array because if we modify the index somewhere else during a loop
        // we end up with very hard-to-track-down side effects.

        this.index.slice(0).forEach(plugins.onProcessRule, plugins);
      }

      /**
       * Register a rule in `.map` and `.classes` maps.
       */

    }, {
      key: 'register',
      value: function register(rule, className) {
        this.map[rule.key] = rule;
        if (rule instanceof _StyleRule2['default']) {
          this.map[rule.selector] = rule;
          if (className) this.classes[rule.key] = className;
        }
      }

      /**
       * Unregister a rule.
       */

    }, {
      key: 'unregister',
      value: function unregister(rule) {
        delete this.map[rule.key];
        if (rule instanceof _StyleRule2['default']) {
          delete this.map[rule.selector];
          delete this.classes[rule.key];
        }
      }

      /**
       * Update the function values with a new data.
       */

    }, {
      key: 'update',
      value: function update(name, data) {
        var _options2 = this.options,
            plugins = _options2.jss.plugins,
            sheet = _options2.sheet;

        if (typeof name === 'string') {
          plugins.onUpdate(data, this.get(name), sheet);
          return;
        }

        for (var index = 0; index < this.index.length; index++) {
          plugins.onUpdate(name, this.index[index], sheet);
        }
      }

      /**
       * Link renderable rules with CSSRuleList.
       */

    }, {
      key: 'link',
      value: function link(cssRules) {
        var map = this.options.sheet.renderer.getUnescapedKeysMap(this.index);

        for (var i = 0; i < cssRules.length; i++) {
          var cssRule = cssRules[i];
          var _key = this.options.sheet.renderer.getKey(cssRule);
          if (map[_key]) _key = map[_key];
          var rule = this.map[_key];
          if (rule) (0, _linkRule2['default'])(rule, cssRule);
        }
      }

      /**
       * Convert rules to a CSS string.
       */

    }, {
      key: 'toString',
      value: function toString(options) {
        var str = '';
        var sheet = this.options.sheet;

        var link = sheet ? sheet.options.link : false;

        for (var index = 0; index < this.index.length; index++) {
          var rule = this.index[index];
          var css = rule.toString(options);

          // No need to render an empty rule.
          if (!css && !link) continue;

          if (str) str += '\n';
          str += css;
        }

        return str;
      }
    }]);

    return RuleList;
  }();

  exports['default'] = RuleList;
  });

  unwrapExports(RuleList_1);

  var sheets = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _SheetsRegistry2 = _interopRequireDefault(SheetsRegistry_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  /**
   * This is a global sheets registry. Only DomRenderer will add sheets to it.
   * On the server one should use an own SheetsRegistry instance and add the
   * sheets to it, because you need to make sure to create a new registry for
   * each request in order to not leak sheets across requests.
   */
  exports['default'] = new _SheetsRegistry2['default']();
  });

  unwrapExports(sheets);

  var StyleSheet_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _linkRule2 = _interopRequireDefault(linkRule_1);



  var _RuleList2 = _interopRequireDefault(RuleList_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var StyleSheet = function () {
    function StyleSheet(styles, options) {
      _classCallCheck(this, StyleSheet);

      this.attached = false;
      this.deployed = false;
      this.linked = false;
      this.classes = {};
      this.options = _extends({}, options, {
        sheet: this,
        parent: this,
        classes: this.classes
      });
      this.renderer = new options.Renderer(this);
      this.rules = new _RuleList2['default'](this.options);

      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }

      this.rules.process();
    }

    /**
     * Attach renderable to the render tree.
     */


    _createClass(StyleSheet, [{
      key: 'attach',
      value: function attach() {
        if (this.attached) return this;
        if (!this.deployed) this.deploy();
        this.renderer.attach();
        if (!this.linked && this.options.link) this.link();
        this.attached = true;
        return this;
      }

      /**
       * Remove renderable from render tree.
       */

    }, {
      key: 'detach',
      value: function detach() {
        if (!this.attached) return this;
        this.renderer.detach();
        this.attached = false;
        return this;
      }

      /**
       * Add a rule to the current stylesheet.
       * Will insert a rule also after the stylesheet has been rendered first time.
       */

    }, {
      key: 'addRule',
      value: function addRule(name, decl, options) {
        var queue = this.queue;

        // Plugins can create rules.
        // In order to preserve the right order, we need to queue all `.addRule` calls,
        // which happen after the first `rules.add()` call.

        if (this.attached && !queue) this.queue = [];

        var rule = this.rules.add(name, decl, options);
        this.options.jss.plugins.onProcessRule(rule);

        if (this.attached) {
          if (!this.deployed) return rule;
          // Don't insert rule directly if there is no stringified version yet.
          // It will be inserted all together when .attach is called.
          if (queue) queue.push(rule);else {
            this.insertRule(rule);
            if (this.queue) {
              this.queue.forEach(this.insertRule, this);
              this.queue = undefined;
            }
          }
          return rule;
        }

        // We can't add rules to a detached style node.
        // We will redeploy the sheet once user will attach it.
        this.deployed = false;

        return rule;
      }

      /**
       * Insert rule into the StyleSheet
       */

    }, {
      key: 'insertRule',
      value: function insertRule(rule) {
        var renderable = this.renderer.insertRule(rule);
        if (renderable && this.options.link) (0, _linkRule2['default'])(rule, renderable);
      }

      /**
       * Create and add rules.
       * Will render also after Style Sheet was rendered the first time.
       */

    }, {
      key: 'addRules',
      value: function addRules(styles, options) {
        var added = [];
        for (var name in styles) {
          added.push(this.addRule(name, styles[name], options));
        }
        return added;
      }

      /**
       * Get a rule by name.
       */

    }, {
      key: 'getRule',
      value: function getRule(name) {
        return this.rules.get(name);
      }

      /**
       * Delete a rule by name.
       * Returns `true`: if rule has been deleted from the DOM.
       */

    }, {
      key: 'deleteRule',
      value: function deleteRule(name) {
        var rule = this.rules.get(name);

        if (!rule) return false;

        this.rules.remove(rule);

        if (this.attached && rule.renderable) {
          return this.renderer.deleteRule(rule.renderable);
        }

        return true;
      }

      /**
       * Get index of a rule.
       */

    }, {
      key: 'indexOf',
      value: function indexOf(rule) {
        return this.rules.indexOf(rule);
      }

      /**
       * Deploy pure CSS string to a renderable.
       */

    }, {
      key: 'deploy',
      value: function deploy() {
        this.renderer.deploy();
        this.deployed = true;
        return this;
      }

      /**
       * Link renderable CSS rules from sheet with their corresponding models.
       */

    }, {
      key: 'link',
      value: function link() {
        var cssRules = this.renderer.getRules();

        // Is undefined when VirtualRenderer is used.
        if (cssRules) this.rules.link(cssRules);
        this.linked = true;
        return this;
      }

      /**
       * Update the function values with a new data.
       */

    }, {
      key: 'update',
      value: function update(name, data) {
        this.rules.update(name, data);
        return this;
      }

      /**
       * Convert rules to a CSS string.
       */

    }, {
      key: 'toString',
      value: function toString(options) {
        return this.rules.toString(options);
      }
    }]);

    return StyleSheet;
  }();

  exports['default'] = StyleSheet;
  });

  unwrapExports(StyleSheet_1);

  var moduleId = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
  if (commonjsGlobal[ns] == null) commonjsGlobal[ns] = 0;

  // Bundle may contain multiple JSS versions at the same time. In order to identify
  // the current version with just one short number and use it for classes generation
  // we use a counter. Also it is more accurate, because user can manually reevaluate
  // the module.
  exports['default'] = commonjsGlobal[ns]++;
  });

  unwrapExports(moduleId);

  var createGenerateClassName$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _warning2 = _interopRequireDefault(warning_1);



  var _StyleSheet2 = _interopRequireDefault(StyleSheet_1);



  var _moduleId2 = _interopRequireDefault(moduleId);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var maxRules = 1e10;


  var env = "development";

  /**
   * Returns a function which generates unique class names based on counters.
   * When new generator function is created, rule counter is reseted.
   * We need to reset the rule counter for SSR for each request.
   */

  exports['default'] = function () {
    var ruleCounter = 0;
    var defaultPrefix = env === 'production' ? 'c' : '';

    return function (rule, sheet) {
      ruleCounter += 1;

      if (ruleCounter > maxRules) {
        (0, _warning2['default'])(false, '[JSS] You might have a memory leak. Rule counter is at %s.', ruleCounter);
      }

      var prefix = defaultPrefix;
      var jssId = '';

      if (sheet) {
        prefix = sheet.options.classNamePrefix || defaultPrefix;
        if (sheet.options.jss.id != null) jssId += sheet.options.jss.id;
      }

      if (env === 'production') {
        return '' + prefix + _moduleId2['default'] + jssId + ruleCounter;
      }

      return prefix + rule.key + '-' + _moduleId2['default'] + (jssId && '-' + jssId) + '-' + ruleCounter;
    };
  };
  });

  unwrapExports(createGenerateClassName$1);

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

  var module$1 = /*#__PURE__*/Object.freeze({
    isBrowser: isBrowser,
    default: isBrowser
  });

  var PluginsRegistry_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _warning2 = _interopRequireDefault(warning_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var PluginsRegistry = function () {
    function PluginsRegistry() {
      _classCallCheck(this, PluginsRegistry);

      this.hooks = {
        onCreateRule: [],
        onProcessRule: [],
        onProcessStyle: [],
        onProcessSheet: [],
        onChangeValue: [],
        onUpdate: []

        /**
         * Call `onCreateRule` hooks and return an object if returned by a hook.
         */
      };
    }

    _createClass(PluginsRegistry, [{
      key: 'onCreateRule',
      value: function onCreateRule(name, decl, options) {
        for (var i = 0; i < this.hooks.onCreateRule.length; i++) {
          var rule = this.hooks.onCreateRule[i](name, decl, options);
          if (rule) return rule;
        }
        return null;
      }

      /**
       * Call `onProcessRule` hooks.
       */

    }, {
      key: 'onProcessRule',
      value: function onProcessRule(rule) {
        if (rule.isProcessed) return;
        var sheet = rule.options.sheet;

        for (var i = 0; i < this.hooks.onProcessRule.length; i++) {
          this.hooks.onProcessRule[i](rule, sheet);
        }

        // $FlowFixMe
        if (rule.style) this.onProcessStyle(rule.style, rule, sheet);

        rule.isProcessed = true;
      }

      /**
       * Call `onProcessStyle` hooks.
       */

    }, {
      key: 'onProcessStyle',
      value: function onProcessStyle(style, rule, sheet) {
        var nextStyle = style;

        for (var i = 0; i < this.hooks.onProcessStyle.length; i++) {
          nextStyle = this.hooks.onProcessStyle[i](nextStyle, rule, sheet);
          // $FlowFixMe
          rule.style = nextStyle;
        }
      }

      /**
       * Call `onProcessSheet` hooks.
       */

    }, {
      key: 'onProcessSheet',
      value: function onProcessSheet(sheet) {
        for (var i = 0; i < this.hooks.onProcessSheet.length; i++) {
          this.hooks.onProcessSheet[i](sheet);
        }
      }

      /**
       * Call `onUpdate` hooks.
       */

    }, {
      key: 'onUpdate',
      value: function onUpdate(data, rule, sheet) {
        for (var i = 0; i < this.hooks.onUpdate.length; i++) {
          this.hooks.onUpdate[i](data, rule, sheet);
        }
      }

      /**
       * Call `onChangeValue` hooks.
       */

    }, {
      key: 'onChangeValue',
      value: function onChangeValue(value, prop, rule) {
        var processedValue = value;
        for (var i = 0; i < this.hooks.onChangeValue.length; i++) {
          processedValue = this.hooks.onChangeValue[i](processedValue, prop, rule);
        }
        return processedValue;
      }

      /**
       * Register a plugin.
       * If function is passed, it is a shortcut for `{onProcessRule}`.
       */

    }, {
      key: 'use',
      value: function use(plugin) {
        for (var name in plugin) {
          if (this.hooks[name]) this.hooks[name].push(plugin[name]);else (0, _warning2['default'])(false, '[JSS] Unknown hook "%s".', name);
        }
      }
    }]);

    return PluginsRegistry;
  }();

  exports['default'] = PluginsRegistry;
  });

  unwrapExports(PluginsRegistry_1);

  var SimpleRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var SimpleRule = function () {
    function SimpleRule(key, value, options) {
      _classCallCheck(this, SimpleRule);

      this.type = 'simple';
      this.isProcessed = false;

      this.key = key;
      this.value = value;
      this.options = options;
    }

    /**
     * Generates a CSS string.
     */
    // eslint-disable-next-line no-unused-vars


    _createClass(SimpleRule, [{
      key: 'toString',
      value: function toString(options) {
        if (Array.isArray(this.value)) {
          var str = '';
          for (var index = 0; index < this.value.length; index++) {
            str += this.key + ' ' + this.value[index] + ';';
            if (this.value[index + 1]) str += '\n';
          }
          return str;
        }

        return this.key + ' ' + this.value + ';';
      }
    }]);

    return SimpleRule;
  }();

  exports['default'] = SimpleRule;
  });

  unwrapExports(SimpleRule_1);

  var KeyframesRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _RuleList2 = _interopRequireDefault(RuleList_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * Rule for @keyframes
   */
  var KeyframesRule = function () {
    function KeyframesRule(key, frames, options) {
      _classCallCheck(this, KeyframesRule);

      this.type = 'keyframes';
      this.isProcessed = false;

      this.key = key;
      this.options = options;
      this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

      for (var name in frames) {
        this.rules.add(name, frames[name], _extends({}, this.options, {
          parent: this,
          selector: name
        }));
      }

      this.rules.process();
    }

    /**
     * Generates a CSS string.
     */


    _createClass(KeyframesRule, [{
      key: 'toString',
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

        var inner = this.rules.toString(options);
        if (inner) inner += '\n';
        return this.key + ' {\n' + inner + '}';
      }
    }]);

    return KeyframesRule;
  }();

  exports['default'] = KeyframesRule;
  });

  unwrapExports(KeyframesRule_1);

  var ConditionalRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _RuleList2 = _interopRequireDefault(RuleList_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * Conditional rule for @media, @supports
   */
  var ConditionalRule = function () {
    function ConditionalRule(key, styles, options) {
      _classCallCheck(this, ConditionalRule);

      this.type = 'conditional';
      this.isProcessed = false;

      this.key = key;
      this.options = options;
      this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }

      this.rules.process();
    }

    /**
     * Get a rule.
     */


    _createClass(ConditionalRule, [{
      key: 'getRule',
      value: function getRule(name) {
        return this.rules.get(name);
      }

      /**
       * Get index of a rule.
       */

    }, {
      key: 'indexOf',
      value: function indexOf(rule) {
        return this.rules.indexOf(rule);
      }

      /**
       * Create and register rule, run plugins.
       */

    }, {
      key: 'addRule',
      value: function addRule(name, style, options) {
        var rule = this.rules.add(name, style, options);
        this.options.jss.plugins.onProcessRule(rule);
        return rule;
      }

      /**
       * Generates a CSS string.
       */

    }, {
      key: 'toString',
      value: function toString() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

        var inner = this.rules.toString(options);
        return inner ? this.key + ' {\n' + inner + '\n}' : '';
      }
    }]);

    return ConditionalRule;
  }();

  exports['default'] = ConditionalRule;
  });

  unwrapExports(ConditionalRule_1);

  var FontFaceRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _toCss2 = _interopRequireDefault(toCss_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var FontFaceRule = function () {
    function FontFaceRule(key, style, options) {
      _classCallCheck(this, FontFaceRule);

      this.type = 'font-face';
      this.isProcessed = false;

      this.key = key;
      this.style = style;
      this.options = options;
    }

    /**
     * Generates a CSS string.
     */


    _createClass(FontFaceRule, [{
      key: 'toString',
      value: function toString(options) {
        if (Array.isArray(this.style)) {
          var str = '';
          for (var index = 0; index < this.style.length; index++) {
            str += (0, _toCss2['default'])(this.key, this.style[index]);
            if (this.style[index + 1]) str += '\n';
          }
          return str;
        }

        return (0, _toCss2['default'])(this.key, this.style, options);
      }
    }]);

    return FontFaceRule;
  }();

  exports['default'] = FontFaceRule;
  });

  unwrapExports(FontFaceRule_1);

  var ViewportRule_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _toCss2 = _interopRequireDefault(toCss_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var ViewportRule = function () {
    function ViewportRule(key, style, options) {
      _classCallCheck(this, ViewportRule);

      this.type = 'viewport';
      this.isProcessed = false;

      this.key = key;
      this.style = style;
      this.options = options;
    }

    /**
     * Generates a CSS string.
     */


    _createClass(ViewportRule, [{
      key: 'toString',
      value: function toString(options) {
        return (0, _toCss2['default'])(this.key, this.style, options);
      }
    }]);

    return ViewportRule;
  }();

  exports['default'] = ViewportRule;
  });

  unwrapExports(ViewportRule_1);

  var rules = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _SimpleRule2 = _interopRequireDefault(SimpleRule_1);



  var _KeyframesRule2 = _interopRequireDefault(KeyframesRule_1);



  var _ConditionalRule2 = _interopRequireDefault(ConditionalRule_1);



  var _FontFaceRule2 = _interopRequireDefault(FontFaceRule_1);



  var _ViewportRule2 = _interopRequireDefault(ViewportRule_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var classes = {
    '@charset': _SimpleRule2['default'],
    '@import': _SimpleRule2['default'],
    '@namespace': _SimpleRule2['default'],
    '@keyframes': _KeyframesRule2['default'],
    '@media': _ConditionalRule2['default'],
    '@supports': _ConditionalRule2['default'],
    '@font-face': _FontFaceRule2['default'],
    '@viewport': _ViewportRule2['default'],
    '@-ms-viewport': _ViewportRule2['default']

    /**
     * Generate plugins which will register all rules.
     */
  };
  exports['default'] = Object.keys(classes).map(function (key) {
    // https://jsperf.com/indexof-vs-substr-vs-regex-at-the-beginning-3
    var re = new RegExp('^' + key);
    var onCreateRule = function onCreateRule(name, decl, options) {
      return re.test(name) ? new classes[key](name, decl, options) : null;
    };
    return { onCreateRule: onCreateRule };
  });
  });

  unwrapExports(rules);

  var observables = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _StyleRule2 = _interopRequireDefault(StyleRule_1);



  var _createRule2 = _interopRequireDefault(createRule_1);



  var _isObservable2 = _interopRequireDefault(isObservable);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  exports['default'] = {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (!(0, _isObservable2['default'])(decl)) return null;

      // Cast `decl` to `Observable`, since it passed the type guard.
      var style$ = decl;

      var rule = (0, _createRule2['default'])(name, {}, options);

      // TODO
      // Call `stream.subscribe()` returns a subscription, which should be explicitly
      // unsubscribed from when we know this sheet is no longer needed.
      style$.subscribe(function (style) {
        for (var prop in style) {
          rule.prop(prop, style[prop]);
        }
      });

      return rule;
    },
    onProcessRule: function onProcessRule(rule) {
      if (!(rule instanceof _StyleRule2['default'])) return;
      var styleRule = rule;
      var style = styleRule.style;

      var _loop = function _loop(prop) {
        var value = style[prop];
        if (!(0, _isObservable2['default'])(value)) return 'continue';
        delete style[prop];
        value.subscribe({
          next: function next(nextValue) {
            styleRule.prop(prop, nextValue);
          }
        });
      };

      for (var prop in style) {
        var _ret = _loop(prop);

        if (_ret === 'continue') continue;
      }
    }
  };
  });

  unwrapExports(observables);

  var functions = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _RuleList2 = _interopRequireDefault(RuleList_1);



  var _StyleRule2 = _interopRequireDefault(StyleRule_1);



  var _createRule2 = _interopRequireDefault(createRule_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  // A symbol replacement.
  var now = Date.now();

  var fnValuesNs = 'fnValues' + now;
  var fnStyleNs = 'fnStyle' + ++now;

  exports['default'] = {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = (0, _createRule2['default'])(name, {}, options);
      rule[fnStyleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      var fn = {};
      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fn[prop] = value;
      }
      rule = rule;
      rule[fnValuesNs] = fn;
      return style;
    },
    onUpdate: function onUpdate(data, rule) {
      // It is a rules container like for e.g. ConditionalRule.
      if (rule.rules instanceof _RuleList2['default']) {
        rule.rules.update(data);
        return;
      }
      if (!(rule instanceof _StyleRule2['default'])) return;

      rule = rule;

      // If we have a fn values map, it is a rule with function values.
      if (rule[fnValuesNs]) {
        for (var prop in rule[fnValuesNs]) {
          rule.prop(prop, rule[fnValuesNs][prop](data));
        }
      }

      rule = rule;

      var fnStyle = rule[fnStyleNs];

      // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.
      if (fnStyle) {
        var style = fnStyle(data);
        for (var _prop in style) {
          rule.prop(_prop, style[_prop]);
        }
      }
    }
  };
  });

  unwrapExports(functions);

  var DomRenderer_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _warning2 = _interopRequireDefault(warning_1);



  var _sheets2 = _interopRequireDefault(sheets);



  var _StyleRule2 = _interopRequireDefault(StyleRule_1);



  var _toCssValue2 = _interopRequireDefault(toCssValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * Cache the value from the first time a function is called.
   */
  var memoize = function memoize(fn) {
    var value = void 0;
    return function () {
      if (!value) value = fn();
      return value;
    };
  };

  /**
   * Get a style property value.
   */
  function getPropertyValue(cssRule, prop) {
    try {
      return cssRule.style.getPropertyValue(prop);
    } catch (err) {
      // IE may throw if property is unknown.
      return '';
    }
  }

  /**
   * Set a style property.
   */
  function setProperty(cssRule, prop, value) {
    try {
      var cssValue = value;

      if (Array.isArray(value)) {
        cssValue = (0, _toCssValue2['default'])(value, true);

        if (value[value.length - 1] === '!important') {
          cssRule.style.setProperty(prop, cssValue, 'important');
          return true;
        }
      }

      cssRule.style.setProperty(prop, cssValue);
    } catch (err) {
      // IE may throw if property is unknown.
      return false;
    }
    return true;
  }

  /**
   * Remove a style property.
   */
  function removeProperty(cssRule, prop) {
    try {
      cssRule.style.removeProperty(prop);
    } catch (err) {
      (0, _warning2['default'])(false, '[JSS] DOMException "%s" was thrown. Tried to remove property "%s".', err.message, prop);
    }
  }

  var CSSRuleTypes = {
    STYLE_RULE: 1,
    KEYFRAMES_RULE: 7

    /**
     * Get the CSS Rule key.
     */

  };var getKey = function () {
    var extractKey = function extractKey(cssText) {
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return cssText.substr(from, cssText.indexOf('{') - 1);
    };

    return function (cssRule) {
      if (cssRule.type === CSSRuleTypes.STYLE_RULE) return cssRule.selectorText;
      if (cssRule.type === CSSRuleTypes.KEYFRAMES_RULE) {
        var name = cssRule.name;

        if (name) return '@keyframes ' + name;

        // There is no rule.name in the following browsers:
        // - IE 9
        // - Safari 7.1.8
        // - Mobile Safari 9.0.0
        var cssText = cssRule.cssText;

        return '@' + extractKey(cssText, cssText.indexOf('keyframes'));
      }

      // Conditionals.
      return extractKey(cssRule.cssText);
    };
  }();

  /**
   * Set the selector.
   */
  function setSelector(cssRule, selectorText) {
    cssRule.selectorText = selectorText;

    // Return false if setter was not successful.
    // Currently works in chrome only.
    return cssRule.selectorText === selectorText;
  }

  /**
   * Gets the `head` element upon the first call and caches it.
   */
  var getHead = memoize(function () {
    return document.head || document.getElementsByTagName('head')[0];
  });

  /**
   * Gets a map of rule keys, where the property is an unescaped key and value
   * is a potentially escaped one.
   * It is used to identify CSS rules and the corresponding JSS rules. As an identifier
   * for CSSStyleRule we normally use `selectorText`. Though if original selector text
   * contains escaped code points e.g. `:not(#\\20)`, CSSOM will compile it to `:not(# )`
   * and so CSS rule's `selectorText` won't match JSS rule selector.
   *
   * https://www.w3.org/International/questions/qa-escapes#cssescapes
   */
  var getUnescapedKeysMap = function () {
    var style = void 0;
    var isAttached = false;

    return function (rules) {
      var map = {};
      // https://github.com/facebook/flow/issues/2696
      if (!style) style = document.createElement('style');
      for (var i = 0; i < rules.length; i++) {
        var rule = rules[i];
        if (!(rule instanceof _StyleRule2['default'])) continue;
        var selector = rule.selector;
        // Only unescape selector over CSSOM if it contains a back slash.

        if (selector && selector.indexOf('\\') !== -1) {
          // Lazilly attach when needed.
          if (!isAttached) {
            getHead().appendChild(style);
            isAttached = true;
          }
          style.textContent = selector + ' {}';
          var _style = style,
              sheet = _style.sheet;

          if (sheet) {
            var cssRules = sheet.cssRules;

            if (cssRules) map[cssRules[0].selectorText] = rule.key;
          }
        }
      }
      if (isAttached) {
        getHead().removeChild(style);
        isAttached = false;
      }
      return map;
    };
  }();

  /**
   * Find attached sheet with an index higher than the passed one.
   */
  function findHigherSheet(registry, options) {
    for (var i = 0; i < registry.length; i++) {
      var sheet = registry[i];
      if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }
    return null;
  }

  /**
   * Find attached sheet with the highest index.
   */
  function findHighestSheet(registry, options) {
    for (var i = registry.length - 1; i >= 0; i--) {
      var sheet = registry[i];
      if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }
    return null;
  }

  /**
   * Find a comment with "jss" inside.
   */
  function findCommentNode(text) {
    var head = getHead();
    for (var i = 0; i < head.childNodes.length; i++) {
      var node = head.childNodes[i];
      if (node.nodeType === 8 && node.nodeValue.trim() === text) {
        return node;
      }
    }
    return null;
  }

  /**
   * Find a node before which we can insert the sheet.
   */
  function findPrevNode(options) {
    var registry = _sheets2['default'].registry;


    if (registry.length > 0) {
      // Try to insert before the next higher sheet.
      var sheet = findHigherSheet(registry, options);
      if (sheet) return sheet.renderer.element;

      // Otherwise insert after the last attached.
      sheet = findHighestSheet(registry, options);
      if (sheet) return sheet.renderer.element.nextElementSibling;
    }

    // Try to find a comment placeholder if registry is empty.
    var insertionPoint = options.insertionPoint;

    if (insertionPoint && typeof insertionPoint === 'string') {
      var comment = findCommentNode(insertionPoint);
      if (comment) return comment.nextSibling;
      // If user specifies an insertion point and it can't be found in the document -
      // bad specificity issues may appear.
      (0, _warning2['default'])(insertionPoint === 'jss', '[JSS] Insertion point "%s" not found.', insertionPoint);
    }

    return null;
  }

  /**
   * Insert style element into the DOM.
   */
  function insertStyle(style, options) {
    var insertionPoint = options.insertionPoint;

    var prevNode = findPrevNode(options);

    if (prevNode) {
      var parentNode = prevNode.parentNode;

      if (parentNode) parentNode.insertBefore(style, prevNode);
      return;
    }

    // Works with iframes and any node types.
    if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
      // https://stackoverflow.com/questions/41328728/force-casting-in-flow
      var insertionPointElement = insertionPoint;
      var _parentNode = insertionPointElement.parentNode;

      if (_parentNode) _parentNode.insertBefore(style, insertionPointElement.nextSibling);else (0, _warning2['default'])(false, '[JSS] Insertion point is not in the DOM.');
      return;
    }

    getHead().insertBefore(style, prevNode);
  }

  /**
   * Read jss nonce setting from the page if the user has set it.
   */
  var getNonce = memoize(function () {
    var node = document.querySelector('meta[property="csp-nonce"]');
    return node ? node.getAttribute('content') : null;
  });

  var DomRenderer = function () {
    function DomRenderer(sheet) {
      _classCallCheck(this, DomRenderer);

      this.getPropertyValue = getPropertyValue;
      this.setProperty = setProperty;
      this.removeProperty = removeProperty;
      this.setSelector = setSelector;
      this.getKey = getKey;
      this.getUnescapedKeysMap = getUnescapedKeysMap;
      this.hasInsertedRules = false;

      // There is no sheet when the renderer is used from a standalone StyleRule.
      if (sheet) _sheets2['default'].add(sheet);

      this.sheet = sheet;

      var _ref = this.sheet ? this.sheet.options : {},
          media = _ref.media,
          meta = _ref.meta,
          element = _ref.element;

      this.element = element || document.createElement('style');
      this.element.type = 'text/css';
      this.element.setAttribute('data-jss', '');
      if (media) this.element.setAttribute('media', media);
      if (meta) this.element.setAttribute('data-meta', meta);
      var nonce = getNonce();
      if (nonce) this.element.setAttribute('nonce', nonce);
    }

    /**
     * Insert style element into render tree.
     */


    // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696


    _createClass(DomRenderer, [{
      key: 'attach',
      value: function attach() {
        // In the case the element node is external and it is already in the DOM.
        if (this.element.parentNode || !this.sheet) return;

        // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
        // browsers remove those rules.
        // TODO figure out if its a bug and if it is known.
        // Workaround is to redeploy the sheet before attaching as a string.
        if (this.hasInsertedRules) {
          this.deploy();
          this.hasInsertedRules = false;
        }

        insertStyle(this.element, this.sheet.options);
      }

      /**
       * Remove style element from render tree.
       */

    }, {
      key: 'detach',
      value: function detach() {
        this.element.parentNode.removeChild(this.element);
      }

      /**
       * Inject CSS string into element.
       */

    }, {
      key: 'deploy',
      value: function deploy() {
        if (!this.sheet) return;
        this.element.textContent = '\n' + this.sheet.toString() + '\n';
      }

      /**
       * Insert a rule into element.
       */

    }, {
      key: 'insertRule',
      value: function insertRule(rule, index) {
        var sheet = this.element.sheet;
        var cssRules = sheet.cssRules;

        var str = rule.toString();
        if (!index) index = cssRules.length;

        if (!str) return false;

        try {
          sheet.insertRule(str, index);
        } catch (err) {
          (0, _warning2['default'])(false, '[JSS] Can not insert an unsupported rule \n\r%s', rule);
          return false;
        }
        this.hasInsertedRules = true;

        return cssRules[index];
      }

      /**
       * Delete a rule.
       */

    }, {
      key: 'deleteRule',
      value: function deleteRule(cssRule) {
        var sheet = this.element.sheet;

        var index = this.indexOf(cssRule);
        if (index === -1) return false;
        sheet.deleteRule(index);
        return true;
      }

      /**
       * Get index of a CSS Rule.
       */

    }, {
      key: 'indexOf',
      value: function indexOf(cssRule) {
        var cssRules = this.element.sheet.cssRules;

        for (var _index = 0; _index < cssRules.length; _index++) {
          if (cssRule === cssRules[_index]) return _index;
        }
        return -1;
      }

      /**
       * Generate a new CSS rule and replace the existing one.
       */

    }, {
      key: 'replaceRule',
      value: function replaceRule(cssRule, rule) {
        var index = this.indexOf(cssRule);
        var newCssRule = this.insertRule(rule, index);
        this.element.sheet.deleteRule(index);
        return newCssRule;
      }

      /**
       * Get all rules elements.
       */

    }, {
      key: 'getRules',
      value: function getRules() {
        return this.element.sheet.cssRules;
      }
    }]);

    return DomRenderer;
  }();

  exports['default'] = DomRenderer;
  });

  unwrapExports(DomRenderer_1);

  var VirtualRenderer_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /* eslint-disable class-methods-use-this */

  /**
   * Rendering backend to do nothing in nodejs.
   */
  var VirtualRenderer = function () {
    function VirtualRenderer() {
      _classCallCheck(this, VirtualRenderer);
    }

    _createClass(VirtualRenderer, [{
      key: 'setProperty',
      value: function setProperty() {
        return true;
      }
    }, {
      key: 'getPropertyValue',
      value: function getPropertyValue() {
        return '';
      }
    }, {
      key: 'removeProperty',
      value: function removeProperty() {}
    }, {
      key: 'setSelector',
      value: function setSelector() {
        return true;
      }
    }, {
      key: 'getKey',
      value: function getKey() {
        return '';
      }
    }, {
      key: 'attach',
      value: function attach() {}
    }, {
      key: 'detach',
      value: function detach() {}
    }, {
      key: 'deploy',
      value: function deploy() {}
    }, {
      key: 'insertRule',
      value: function insertRule() {
        return false;
      }
    }, {
      key: 'deleteRule',
      value: function deleteRule() {
        return true;
      }
    }, {
      key: 'replaceRule',
      value: function replaceRule() {
        return false;
      }
    }, {
      key: 'getRules',
      value: function getRules() {}
    }, {
      key: 'indexOf',
      value: function indexOf() {
        return -1;
      }
    }]);

    return VirtualRenderer;
  }();

  exports['default'] = VirtualRenderer;
  });

  unwrapExports(VirtualRenderer_1);

  var _isInBrowser = ( module$1 && isBrowser ) || module$1;

  var Jss_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



  var _isInBrowser2 = _interopRequireDefault(_isInBrowser);



  var _StyleSheet2 = _interopRequireDefault(StyleSheet_1);



  var _PluginsRegistry2 = _interopRequireDefault(PluginsRegistry_1);



  var _rules2 = _interopRequireDefault(rules);



  var _observables2 = _interopRequireDefault(observables);



  var _functions2 = _interopRequireDefault(functions);



  var _sheets2 = _interopRequireDefault(sheets);



  var _StyleRule2 = _interopRequireDefault(StyleRule_1);



  var _createGenerateClassName2 = _interopRequireDefault(createGenerateClassName$1);



  var _createRule3 = _interopRequireDefault(createRule_1);



  var _DomRenderer2 = _interopRequireDefault(DomRenderer_1);



  var _VirtualRenderer2 = _interopRequireDefault(VirtualRenderer_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var defaultPlugins = _rules2['default'].concat([_observables2['default'], _functions2['default']]);

  var instanceCounter = 0;

  var Jss = function () {
    function Jss(options) {
      _classCallCheck(this, Jss);

      this.id = instanceCounter++;
      this.version = "9.8.1";
      this.plugins = new _PluginsRegistry2['default']();
      this.options = {
        createGenerateClassName: _createGenerateClassName2['default'],
        Renderer: _isInBrowser2['default'] ? _DomRenderer2['default'] : _VirtualRenderer2['default'],
        plugins: []
      };
      this.generateClassName = (0, _createGenerateClassName2['default'])();

      // eslint-disable-next-line prefer-spread
      this.use.apply(this, defaultPlugins);
      this.setup(options);
    }

    _createClass(Jss, [{
      key: 'setup',
      value: function setup() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (options.createGenerateClassName) {
          this.options.createGenerateClassName = options.createGenerateClassName;
          // $FlowFixMe
          this.generateClassName = options.createGenerateClassName();
        }

        if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;
        if (options.virtual || options.Renderer) {
          this.options.Renderer = options.Renderer || (options.virtual ? _VirtualRenderer2['default'] : _DomRenderer2['default']);
        }

        // eslint-disable-next-line prefer-spread
        if (options.plugins) this.use.apply(this, options.plugins);

        return this;
      }

      /**
       * Create a Style Sheet.
       */

    }, {
      key: 'createStyleSheet',
      value: function createStyleSheet(styles) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var index = options.index;
        if (typeof index !== 'number') {
          index = _sheets2['default'].index === 0 ? 0 : _sheets2['default'].index + 1;
        }
        var sheet = new _StyleSheet2['default'](styles, _extends({}, options, {
          jss: this,
          generateClassName: options.generateClassName || this.generateClassName,
          insertionPoint: this.options.insertionPoint,
          Renderer: this.options.Renderer,
          index: index
        }));
        this.plugins.onProcessSheet(sheet);

        return sheet;
      }

      /**
       * Detach the Style Sheet and remove it from the registry.
       */

    }, {
      key: 'removeStyleSheet',
      value: function removeStyleSheet(sheet) {
        sheet.detach();
        _sheets2['default'].remove(sheet);
        return this;
      }

      /**
       * Create a rule without a Style Sheet.
       */

    }, {
      key: 'createRule',
      value: function createRule(name) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        // Enable rule without name for inline styles.
        if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
          options = style;
          style = name;
          name = undefined;
        }

        // Cast from RuleFactoryOptions to RuleOptions
        // https://stackoverflow.com/questions/41328728/force-casting-in-flow
        var ruleOptions = options;

        ruleOptions.jss = this;
        ruleOptions.Renderer = this.options.Renderer;
        if (!ruleOptions.generateClassName) ruleOptions.generateClassName = this.generateClassName;
        if (!ruleOptions.classes) ruleOptions.classes = {};
        var rule = (0, _createRule3['default'])(name, style, ruleOptions);

        if (!ruleOptions.selector && rule instanceof _StyleRule2['default']) {
          rule.selector = '.' + ruleOptions.generateClassName(rule);
        }

        this.plugins.onProcessRule(rule);

        return rule;
      }

      /**
       * Register plugin. Passed function will be invoked with a rule instance.
       */

    }, {
      key: 'use',
      value: function use() {
        var _this = this;

        for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
          plugins[_key] = arguments[_key];
        }

        plugins.forEach(function (plugin) {
          // Avoids applying same plugin twice, at least based on ref.
          if (_this.options.plugins.indexOf(plugin) === -1) {
            _this.options.plugins.push(plugin);
            _this.plugins.use(plugin);
          }
        });

        return this;
      }
    }]);

    return Jss;
  }();

  exports['default'] = Jss;
  });

  unwrapExports(Jss_1);

  var lib = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.create = exports.createGenerateClassName = exports.sheets = exports.RuleList = exports.SheetsManager = exports.SheetsRegistry = exports.toCssValue = exports.getDynamicStyles = undefined;



  Object.defineProperty(exports, 'getDynamicStyles', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(getDynamicStyles_1)['default'];
    }
  });



  Object.defineProperty(exports, 'toCssValue', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(toCssValue_1)['default'];
    }
  });



  Object.defineProperty(exports, 'SheetsRegistry', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(SheetsRegistry_1)['default'];
    }
  });



  Object.defineProperty(exports, 'SheetsManager', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(SheetsManager_1)['default'];
    }
  });



  Object.defineProperty(exports, 'RuleList', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(RuleList_1)['default'];
    }
  });



  Object.defineProperty(exports, 'sheets', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(sheets)['default'];
    }
  });



  Object.defineProperty(exports, 'createGenerateClassName', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(createGenerateClassName$1)['default'];
    }
  });



  var _Jss2 = _interopRequireDefault(Jss_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  /**
   * Creates a new instance of Jss.
   */
  var create = exports.create = function create(options) {
    return new _Jss2['default'](options);
  };

  /**
   * A global Jss instance.
   */
  exports['default'] = create();
  });

  unwrapExports(lib);
  var lib_1 = lib.create;
  var lib_2 = lib.createGenerateClassName;
  var lib_3 = lib.sheets;
  var lib_4 = lib.RuleList;
  var lib_5 = lib.SheetsManager;
  var lib_6 = lib.SheetsRegistry;
  var lib_7 = lib.toCssValue;
  var lib_8 = lib.getDynamicStyles;

  var lib$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  exports['default'] = jssGlobal;



  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var propKey = '@global';
  var prefixKey = '@global ';

  var GlobalContainerRule = function () {
    function GlobalContainerRule(key, styles, options) {
      _classCallCheck(this, GlobalContainerRule);

      this.type = 'global';

      this.key = key;
      this.options = options;
      this.rules = new lib.RuleList(_extends({}, options, {
        parent: this
      }));

      for (var selector in styles) {
        this.rules.add(selector, styles[selector], { selector: selector });
      }

      this.rules.process();
    }

    /**
     * Get a rule.
     */


    _createClass(GlobalContainerRule, [{
      key: 'getRule',
      value: function getRule(name) {
        return this.rules.get(name);
      }

      /**
       * Create and register rule, run plugins.
       */

    }, {
      key: 'addRule',
      value: function addRule(name, style, options) {
        var rule = this.rules.add(name, style, options);
        this.options.jss.plugins.onProcessRule(rule);
        return rule;
      }

      /**
       * Get index of a rule.
       */

    }, {
      key: 'indexOf',
      value: function indexOf(rule) {
        return this.rules.indexOf(rule);
      }

      /**
       * Generates a CSS string.
       */

    }, {
      key: 'toString',
      value: function toString() {
        return this.rules.toString();
      }
    }]);

    return GlobalContainerRule;
  }();

  var GlobalPrefixedRule = function () {
    function GlobalPrefixedRule(name, style, options) {
      _classCallCheck(this, GlobalPrefixedRule);

      this.name = name;
      this.options = options;
      var selector = name.substr(prefixKey.length);
      this.rule = options.jss.createRule(selector, style, _extends({}, options, {
        parent: this,
        selector: selector
      }));
    }

    _createClass(GlobalPrefixedRule, [{
      key: 'toString',
      value: function toString(options) {
        return this.rule.toString(options);
      }
    }]);

    return GlobalPrefixedRule;
  }();

  var separatorRegExp = /\s*,\s*/g;

  function addScope(selector, scope) {
    var parts = selector.split(separatorRegExp);
    var scoped = '';
    for (var i = 0; i < parts.length; i++) {
      scoped += scope + ' ' + parts[i].trim();
      if (parts[i + 1]) scoped += ', ';
    }
    return scoped;
  }

  function handleNestedGlobalContainerRule(rule) {
    var options = rule.options,
        style = rule.style;

    var rules = style[propKey];

    if (!rules) return;

    for (var name in rules) {
      options.sheet.addRule(name, rules[name], _extends({}, options, {
        selector: addScope(name, rule.selector)
      }));
    }

    delete style[propKey];
  }

  function handlePrefixedGlobalRule(rule) {
    var options = rule.options,
        style = rule.style;

    for (var prop in style) {
      if (prop.substr(0, propKey.length) !== propKey) continue;

      var selector = addScope(prop.substr(propKey.length), rule.selector);
      options.sheet.addRule(selector, style[prop], _extends({}, options, {
        selector: selector
      }));
      delete style[prop];
    }
  }

  /**
   * Convert nested rules to separate, remove them from original styles.
   *
   * @param {Rule} rule
   * @api public
   */
  function jssGlobal() {
    function onCreateRule(name, styles, options) {
      if (name === propKey) {
        return new GlobalContainerRule(name, styles, options);
      }

      if (name[0] === '@' && name.substr(0, prefixKey.length) === prefixKey) {
        return new GlobalPrefixedRule(name, styles, options);
      }

      var parent = options.parent;


      if (parent) {
        if (parent.type === 'global' || parent.options.parent.type === 'global') {
          options.global = true;
        }
      }

      if (options.global) options.selector = name;

      return null;
    }

    function onProcessRule(rule) {
      if (rule.type !== 'style') return;

      handleNestedGlobalContainerRule(rule);
      handlePrefixedGlobalRule(rule);
    }

    return { onCreateRule: onCreateRule, onProcessRule: onProcessRule };
  }
  });

  var jssGlobal = unwrapExports(lib$1);

  var lib$2 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  exports.default = jssNested;



  var _warning2 = _interopRequireDefault(warning_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var separatorRegExp = /\s*,\s*/g;
  var parentRegExp = /&/g;
  var refRegExp = /\$([\w-]+)/g;

  /**
   * Convert nested rules to separate, remove them from original styles.
   *
   * @param {Rule} rule
   * @api public
   */
  function jssNested() {
    // Get a function to be used for $ref replacement.
    function getReplaceRef(container) {
      return function (match, key) {
        var rule = container.getRule(key);
        if (rule) return rule.selector;
        (0, _warning2.default)(false, '[JSS] Could not find the referenced rule %s in %s.', key, container.options.meta || container);
        return key;
      };
    }

    var hasAnd = function hasAnd(str) {
      return str.indexOf('&') !== -1;
    };

    function replaceParentRefs(nestedProp, parentProp) {
      var parentSelectors = parentProp.split(separatorRegExp);
      var nestedSelectors = nestedProp.split(separatorRegExp);

      var result = '';

      for (var i = 0; i < parentSelectors.length; i++) {
        var parent = parentSelectors[i];

        for (var j = 0; j < nestedSelectors.length; j++) {
          var nested = nestedSelectors[j];
          if (result) result += ', ';
          // Replace all & by the parent or prefix & with the parent.
          result += hasAnd(nested) ? nested.replace(parentRegExp, parent) : parent + ' ' + nested;
        }
      }

      return result;
    }

    function getOptions(rule, container, options) {
      // Options has been already created, now we only increase index.
      if (options) return _extends({}, options, { index: options.index + 1 });

      var nestingLevel = rule.options.nestingLevel;

      nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

      return _extends({}, rule.options, {
        nestingLevel: nestingLevel,
        index: container.indexOf(rule) + 1
      });
    }

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var container = rule.options.parent;
      var options = void 0;
      var replaceRef = void 0;
      for (var prop in style) {
        var isNested = hasAnd(prop);
        var isNestedConditional = prop[0] === '@';

        if (!isNested && !isNestedConditional) continue;

        options = getOptions(rule, container, options);

        if (isNested) {
          var selector = replaceParentRefs(prop, rule.selector
          // Lazily create the ref replacer function just once for
          // all nested rules within the sheet.
          );if (!replaceRef) replaceRef = getReplaceRef(container
          // Replace all $refs.
          );selector = selector.replace(refRegExp, replaceRef);

          container.addRule(selector, style[prop], _extends({}, options, { selector: selector }));
        } else if (isNestedConditional) {
          container
          // Place conditional right after the parent rule to ensure right ordering.
          .addRule(prop, null, options).addRule(rule.key, style[prop], { selector: rule.selector });
        }

        delete style[prop];
      }

      return style;
    }

    return { onProcessStyle: onProcessStyle };
  }
  });

  var jssNested = unwrapExports(lib$2);

  var uppercasePattern = /[A-Z]/g;
  var msPattern = /^ms-/;
  var cache = {};

  function hyphenateStyleName(string) {
      return string in cache
      ? cache[string]
      : cache[string] = string
        .replace(uppercasePattern, '-$&')
        .toLowerCase()
        .replace(msPattern, '-ms-');
  }

  var hyphenateStyleName_1 = hyphenateStyleName;

  var lib$3 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = camelCase;



  var _hyphenateStyleName2 = _interopRequireDefault(hyphenateStyleName_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  /**
   * Convert camel cased property names to dash separated.
   *
   * @param {Object} style
   * @return {Object}
   */
  function convertCase(style) {
    var converted = {};

    for (var prop in style) {
      converted[(0, _hyphenateStyleName2['default'])(prop)] = style[prop];
    }

    if (style.fallbacks) {
      if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
    }

    return converted;
  }

  /**
   * Allow camel cased property names by converting them back to dasherized.
   *
   * @param {Rule} rule
   */
  function camelCase() {
    function onProcessStyle(style) {
      if (Array.isArray(style)) {
        // Handle rules like @font-face, which can have multiple styles in an array
        for (var index = 0; index < style.length; index++) {
          style[index] = convertCase(style[index]);
        }
        return style;
      }

      return convertCase(style);
    }

    function onChangeValue(value, prop, rule) {
      var hyphenatedProp = (0, _hyphenateStyleName2['default'])(prop);

      // There was no camel case in place
      if (prop === hyphenatedProp) return value;

      rule.prop(hyphenatedProp, value);

      // Core will ignore that property value we set the proper one above.
      return null;
    }

    return { onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
  }
  });

  var jssCamelCase = unwrapExports(lib$3);

  var defaultUnits = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * Generated jss-default-unit CSS property units
   *
   * @type object
   */
  exports['default'] = {
    'animation-delay': 'ms',
    'animation-duration': 'ms',
    'background-position': 'px',
    'background-position-x': 'px',
    'background-position-y': 'px',
    'background-size': 'px',
    border: 'px',
    'border-bottom': 'px',
    'border-bottom-left-radius': 'px',
    'border-bottom-right-radius': 'px',
    'border-bottom-width': 'px',
    'border-left': 'px',
    'border-left-width': 'px',
    'border-radius': 'px',
    'border-right': 'px',
    'border-right-width': 'px',
    'border-spacing': 'px',
    'border-top': 'px',
    'border-top-left-radius': 'px',
    'border-top-right-radius': 'px',
    'border-top-width': 'px',
    'border-width': 'px',
    'border-after-width': 'px',
    'border-before-width': 'px',
    'border-end-width': 'px',
    'border-horizontal-spacing': 'px',
    'border-start-width': 'px',
    'border-vertical-spacing': 'px',
    bottom: 'px',
    'box-shadow': 'px',
    'column-gap': 'px',
    'column-rule': 'px',
    'column-rule-width': 'px',
    'column-width': 'px',
    'flex-basis': 'px',
    'font-size': 'px',
    'font-size-delta': 'px',
    height: 'px',
    left: 'px',
    'letter-spacing': 'px',
    'logical-height': 'px',
    'logical-width': 'px',
    margin: 'px',
    'margin-after': 'px',
    'margin-before': 'px',
    'margin-bottom': 'px',
    'margin-left': 'px',
    'margin-right': 'px',
    'margin-top': 'px',
    'max-height': 'px',
    'max-width': 'px',
    'margin-end': 'px',
    'margin-start': 'px',
    'mask-position-x': 'px',
    'mask-position-y': 'px',
    'mask-size': 'px',
    'max-logical-height': 'px',
    'max-logical-width': 'px',
    'min-height': 'px',
    'min-width': 'px',
    'min-logical-height': 'px',
    'min-logical-width': 'px',
    motion: 'px',
    'motion-offset': 'px',
    outline: 'px',
    'outline-offset': 'px',
    'outline-width': 'px',
    padding: 'px',
    'padding-bottom': 'px',
    'padding-left': 'px',
    'padding-right': 'px',
    'padding-top': 'px',
    'padding-after': 'px',
    'padding-before': 'px',
    'padding-end': 'px',
    'padding-start': 'px',
    'perspective-origin-x': '%',
    'perspective-origin-y': '%',
    perspective: 'px',
    right: 'px',
    'shape-margin': 'px',
    size: 'px',
    'text-indent': 'px',
    'text-stroke': 'px',
    'text-stroke-width': 'px',
    top: 'px',
    'transform-origin': '%',
    'transform-origin-x': '%',
    'transform-origin-y': '%',
    'transform-origin-z': '%',
    'transition-delay': 'ms',
    'transition-duration': 'ms',
    'vertical-align': 'px',
    width: 'px',
    'word-spacing': 'px',
    // Not existing properties.
    // Used to avoid issues with jss-expand intergration.
    'box-shadow-x': 'px',
    'box-shadow-y': 'px',
    'box-shadow-blur': 'px',
    'box-shadow-spread': 'px',
    'font-line-height': 'px',
    'text-shadow-x': 'px',
    'text-shadow-y': 'px',
    'text-shadow-blur': 'px'
  };
  });

  unwrapExports(defaultUnits);

  var lib$4 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  exports['default'] = defaultUnit;



  var _defaultUnits2 = _interopRequireDefault(defaultUnits);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  /**
   * Clones the object and adds a camel cased property version.
   */
  function addCamelCasedVersion(obj) {
    var regExp = /(-[a-z])/g;
    var replace = function replace(str) {
      return str[1].toUpperCase();
    };
    var newObj = {};
    for (var key in obj) {
      newObj[key] = obj[key];
      newObj[key.replace(regExp, replace)] = obj[key];
    }
    return newObj;
  }

  var units = addCamelCasedVersion(_defaultUnits2['default']);

  /**
   * Recursive deep style passing function
   *
   * @param {String} current property
   * @param {(Object|Array|Number|String)} property value
   * @param {Object} options
   * @return {(Object|Array|Number|String)} resulting value
   */
  function iterate(prop, value, options) {
    if (!value) return value;

    var convertedValue = value;

    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    if (type === 'object' && Array.isArray(value)) type = 'array';

    switch (type) {
      case 'object':
        if (prop === 'fallbacks') {
          for (var innerProp in value) {
            value[innerProp] = iterate(innerProp, value[innerProp], options);
          }
          break;
        }
        for (var _innerProp in value) {
          value[_innerProp] = iterate(prop + '-' + _innerProp, value[_innerProp], options);
        }
        break;
      case 'array':
        for (var i = 0; i < value.length; i++) {
          value[i] = iterate(prop, value[i], options);
        }
        break;
      case 'number':
        if (value !== 0) {
          convertedValue = value + (options[prop] || units[prop] || '');
        }
        break;
      default:
        break;
    }

    return convertedValue;
  }

  /**
   * Add unit to numeric values.
   */
  function defaultUnit() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var camelCasedOptions = addCamelCasedVersion(options);

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;

      for (var prop in style) {
        style[prop] = iterate(prop, style[prop], camelCasedOptions);
      }

      return style;
    }

    function onChangeValue(value, prop) {
      return iterate(prop, value, camelCasedOptions);
    }

    return { onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
  }
  });

  var jssDefaultUnit = unwrapExports(lib$4);

  var prefix = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var js = ''; /**
                * Export javascript style and css style vendor prefixes.
                * Based on "transform" support test.
                */

  var css = '';

  // We should not do anything if required serverside.
  if (_isInBrowser2['default']) {
    // Order matters. We need to check Webkit the last one because
    // other vendors use to add Webkit prefixes to some properties
    var jsCssMap = {
      Moz: '-moz-',
      // IE did it wrong again ...
      ms: '-ms-',
      O: '-o-',
      Webkit: '-webkit-'
    };
    var style = document.createElement('p').style;
    var testProp = 'Transform';

    for (var key in jsCssMap) {
      if (key + testProp in style) {
        js = key;
        css = jsCssMap[key];
        break;
      }
    }
  }

  /**
   * Vendor prefix string for the current browser.
   *
   * @type {{js: String, css: String}}
   * @api public
   */
  exports['default'] = { js: js, css: css };
  });

  unwrapExports(prefix);

  var camelize_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = camelize;
  var regExp = /[-\s]+(.)?/g;

  /**
   * Convert dash separated strings to camel cased.
   *
   * @param {String} str
   * @return {String}
   */
  function camelize(str) {
    return str.replace(regExp, toUpper);
  }

  function toUpper(match, c) {
    return c ? c.toUpperCase() : '';
  }
  });

  unwrapExports(camelize_1);

  var supportedProperty_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = supportedProperty;



  var _isInBrowser2 = _interopRequireDefault(_isInBrowser);



  var _prefix2 = _interopRequireDefault(prefix);



  var _camelize2 = _interopRequireDefault(camelize_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var el = void 0;
  var cache = {};

  if (_isInBrowser2['default']) {
    el = document.createElement('p');

    /**
     * We test every property on vendor prefix requirement.
     * Once tested, result is cached. It gives us up to 70% perf boost.
     * http://jsperf.com/element-style-object-access-vs-plain-object
     *
     * Prefill cache with known css properties to reduce amount of
     * properties we need to feature test at runtime.
     * http://davidwalsh.name/vendor-prefix
     */
    var computed = window.getComputedStyle(document.documentElement, '');
    for (var key in computed) {
      if (!isNaN(key)) cache[computed[key]] = computed[key];
    }
  }

  /**
   * Test if a property is supported, returns supported property with vendor
   * prefix if required. Returns `false` if not supported.
   *
   * @param {String} prop dash separated
   * @return {String|Boolean}
   * @api public
   */
  function supportedProperty(prop) {
    // For server-side rendering.
    if (!el) return prop;

    // We have not tested this prop yet, lets do the test.
    if (cache[prop] != null) return cache[prop];

    // Camelization is required because we can't test using
    // css syntax for e.g. in FF.
    // Test if property is supported as it is.
    if ((0, _camelize2['default'])(prop) in el.style) {
      cache[prop] = prop;
    }
    // Test if property is supported with vendor prefix.
    else if (_prefix2['default'].js + (0, _camelize2['default'])('-' + prop) in el.style) {
        cache[prop] = _prefix2['default'].css + prop;
      } else {
        cache[prop] = false;
      }

    return cache[prop];
  }
  });

  unwrapExports(supportedProperty_1);

  var supportedValue_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = supportedValue;



  var _isInBrowser2 = _interopRequireDefault(_isInBrowser);



  var _prefix2 = _interopRequireDefault(prefix);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var cache = {};
  var el = void 0;

  if (_isInBrowser2['default']) el = document.createElement('p');

  /**
   * Returns prefixed value if needed. Returns `false` if value is not supported.
   *
   * @param {String} property
   * @param {String} value
   * @return {String|Boolean}
   * @api public
   */
  function supportedValue(property, value) {
    // For server-side rendering.
    if (!el) return value;

    // It is a string or a number as a string like '1'.
    // We want only prefixable values here.
    if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value;

    var cacheKey = property + value;

    if (cache[cacheKey] != null) return cache[cacheKey];

    // IE can even throw an error in some cases, for e.g. style.content = 'bar'
    try {
      // Test value as it is.
      el.style[property] = value;
    } catch (err) {
      cache[cacheKey] = false;
      return false;
    }

    // Value is supported as it is.
    if (el.style[property] !== '') {
      cache[cacheKey] = value;
    } else {
      // Test value with vendor prefix.
      value = _prefix2['default'].css + value;

      // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
      if (value === '-ms-flex') value = '-ms-flexbox';

      el.style[property] = value;

      // Value is supported with vendor prefix.
      if (el.style[property] !== '') cache[cacheKey] = value;
    }

    if (!cache[cacheKey]) cache[cacheKey] = false;

    // Reset style value.
    el.style[property] = '';

    return cache[cacheKey];
  }
  });

  unwrapExports(supportedValue_1);

  var lib$5 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.supportedValue = exports.supportedProperty = exports.prefix = undefined;



  var _prefix2 = _interopRequireDefault(prefix);



  var _supportedProperty2 = _interopRequireDefault(supportedProperty_1);



  var _supportedValue2 = _interopRequireDefault(supportedValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  exports['default'] = {
    prefix: _prefix2['default'],
    supportedProperty: _supportedProperty2['default'],
    supportedValue: _supportedValue2['default']
  }; /**
      * CSS Vendor prefix detection and property feature testing.
      *
      * @copyright Oleg Slobodskoi 2015
      * @website https://github.com/jsstyles/css-vendor
      * @license MIT
      */

  exports.prefix = _prefix2['default'];
  exports.supportedProperty = _supportedProperty2['default'];
  exports.supportedValue = _supportedValue2['default'];
  });

  unwrapExports(lib$5);
  var lib_1$1 = lib$5.supportedValue;
  var lib_2$1 = lib$5.supportedProperty;
  var lib_3$1 = lib$5.prefix;

  var lib$6 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = jssVendorPrefixer;



  var vendor = _interopRequireWildcard(lib$5);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

  /**
   * Add vendor prefix to a property name when needed.
   *
   * @param {Rule} rule
   * @api public
   */
  function jssVendorPrefixer() {
    function onProcessRule(rule) {
      if (rule.type === 'keyframes') {
        rule.key = '@' + vendor.prefix.css + rule.key.substr(1);
      }
    }

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;

      for (var prop in style) {
        var value = style[prop];

        var changeProp = false;
        var supportedProp = vendor.supportedProperty(prop);
        if (supportedProp && supportedProp !== prop) changeProp = true;

        var changeValue = false;
        var supportedValue = vendor.supportedValue(supportedProp, value);
        if (supportedValue && supportedValue !== value) changeValue = true;

        if (changeProp || changeValue) {
          if (changeProp) delete style[prop];
          style[supportedProp || prop] = supportedValue || value;
        }
      }

      return style;
    }

    function onChangeValue(value, prop) {
      return vendor.supportedValue(prop, value);
    }

    return { onProcessRule: onProcessRule, onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
  }
  });

  var jssVendorPrefixer = unwrapExports(lib$6);

  var lib$7 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports['default'] = jssPropsSort;
  /**
   * Sort props by length.
   */
  function jssPropsSort() {
    function sort(prop0, prop1) {
      return prop0.length - prop1.length;
    }

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;

      var newStyle = {};
      var props = Object.keys(style).sort(sort);
      for (var prop in props) {
        newStyle[props[prop]] = style[props[prop]];
      }
      return newStyle;
    }

    return { onProcessStyle: onProcessStyle };
  }
  });

  var jssPropsSort = unwrapExports(lib$7);

  // components are using.

  function jssPreset() {
    return {
      plugins: [jssGlobal(), jssNested(), jssCamelCase(), jssDefaultUnit(), jssVendorPrefixer(), jssPropsSort()]
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    setPrototypeOf(subClass.prototype, superClass && superClass.prototype);
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

  function makeEmptyFunction(arg) {
    return function () {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  var emptyFunction = function emptyFunction() {};

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function () {
    return this;
  };
  emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
  };

  var emptyFunction_1 = emptyFunction;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var validateFormat = function validateFormat(format) {};

  {
    validateFormat = function validateFormat(format) {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    };
  }

  function invariant(condition, format, a, b, c, d, e, f) {
    validateFormat(format);

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  }

  var invariant_1 = invariant;

  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var warning$1 = emptyFunction_1;

  {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning$1 = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  }

  var warning_1$1 = warning$1;

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  {
    var invariant$1 = invariant_1;
    var warning$2 = warning_1$1;
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    {
      for (var typeSpecName in typeSpecs) {
        if (typeSpecs.hasOwnProperty(typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
          } catch (ex) {
            error = ex;
          }
          warning$2(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            warning$2(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
          }
        }
      }
    }
  }

  var checkPropTypes_1 = checkPropTypes;

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            invariant_1(
              false,
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
          } else if (typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              warning_1$1(
                false,
                'You are manually calling a React.PropTypes validation ' +
                'function for the `%s` prop on `%s`. This is deprecated ' +
                'and will throw in the standalone `prop-types` package. ' +
                'You may be seeing this warning due to a third-party PropTypes ' +
                'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
                propFullName,
                componentName
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        warning_1$1(false, 'Invalid argument supplied to oneOf, expected an instance of array.');
        return emptyFunction_1.thatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (propValue.hasOwnProperty(key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        warning_1$1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.');
        return emptyFunction_1.thatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          warning_1$1(
            false,
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received %s at index %s.',
            getPostfixForTypeWarning(checker),
            i
          );
          return emptyFunction_1.thatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
      Symbol.for &&
      Symbol.for('react.element')) ||
      0xeac7;

    var isValidElement = function(object) {
      return typeof object === 'object' &&
        object !== null &&
        object.$$typeof === REACT_ELEMENT_TYPE;
    };

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
  }
  });

  function createBroadcast (initialState) {
    var listeners = {};
    var id = 1;
    var _state = initialState;

    function getState () {
      return _state
    }

    function setState (state) {
      _state = state;
      var keys = Object.keys(listeners);
      var i = 0;
      var len = keys.length;
      for (; i < len; i++) {
        // if a listener gets unsubscribed during setState we just skip it
        if (listeners[keys[i]]) { listeners[keys[i]](state); }
      }
    }

    // subscribe to changes and return the subscriptionId
    function subscribe (listener) {
      if (typeof listener !== 'function') {
        throw new Error('listener must be a function.')
      }
      var currentId = id;
      listeners[currentId] = listener;
      id += 1;
      return currentId
    }

    // remove subscription by removing the listener function
    function unsubscribe (id) {
      listeners[id] = undefined;
    }

    return { getState: getState, setState: setState, subscribe: subscribe, unsubscribe: unsubscribe }
  }

  var CHANNEL = '__THEMING__';
  var themeListener = {
    contextTypes: defineProperty({}, CHANNEL, propTypes.object),
    initial: function initial(context) {
      if (!context[CHANNEL]) {
        return null;
      }

      return context[CHANNEL].getState();
    },
    subscribe: function subscribe(context, cb) {
      if (!context[CHANNEL]) {
        return null;
      }

      return context[CHANNEL].subscribe(cb);
    },
    unsubscribe: function unsubscribe(context, subscriptionId) {
      if (context[CHANNEL]) {
        context[CHANNEL].unsubscribe(subscriptionId);
      }
    }
  };

  // This module is based on https://github.com/airbnb/prop-types-exact repository.
  // However, in order to reduce the number of dependencies and to remove some extra safe checks
  // the module was forked.
  var specialProperty = "exact-prop: \u200B";
  function exactProp(propTypes, componentNameInError) {
    return objectSpread({}, propTypes, defineProperty({}, specialProperty, function (props) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !propTypes.hasOwnProperty(prop);
      });

      if (unknownProps.length > 0) {
        return new TypeError("".concat(componentNameInError, ": unknown props found: ").concat(unknownProps.join(', '), ". Please remove the unknown properties."));
      }

      return null;
    }));
  }

  /**
   * This component takes a `theme` property.
   * It makes the `theme` available down the React tree thanks to React context.
   * This component should preferably be used at **the root of your component tree**.
   */

  var MuiThemeProvider =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(MuiThemeProvider, _React$Component);

    function MuiThemeProvider(props, context) {
      var _this;

      classCallCheck(this, MuiThemeProvider);

      _this = possibleConstructorReturn(this, (MuiThemeProvider.__proto__ || Object.getPrototypeOf(MuiThemeProvider)).call(this, props, context)); // Get the outer theme from the context, can be null

      _this.broadcast = createBroadcast();
      _this.unsubscribeId = null;
      _this.outerTheme = null;
      _this.outerTheme = themeListener.initial(context); // Propagate the theme so it can be accessed by the children

      _this.broadcast.setState(_this.mergeOuterLocalTheme(_this.props.theme));

      return _this;
    }

    createClass(MuiThemeProvider, [{
      key: "getChildContext",
      value: function getChildContext() {
        var _ref;

        var _props = this.props,
            sheetsManager = _props.sheetsManager,
            disableStylesGeneration = _props.disableStylesGeneration;
        var muiThemeProviderOptions = this.context.muiThemeProviderOptions || {};

        if (sheetsManager !== undefined) {
          muiThemeProviderOptions.sheetsManager = sheetsManager;
        }

        if (disableStylesGeneration !== undefined) {
          muiThemeProviderOptions.disableStylesGeneration = disableStylesGeneration;
        }

        return _ref = {}, defineProperty(_ref, CHANNEL, this.broadcast), defineProperty(_ref, "muiThemeProviderOptions", muiThemeProviderOptions), _ref;
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // Subscribe on the outer theme, if present
        this.unsubscribeId = themeListener.subscribe(this.context, function (outerTheme) {
          _this2.outerTheme = outerTheme; // Forward the parent theme update to the children

          _this2.broadcast.setState(_this2.mergeOuterLocalTheme(_this2.props.theme));
        });
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        // Propagate a local theme update
        if (this.props.theme !== prevProps.theme) {
          this.broadcast.setState(this.mergeOuterLocalTheme(this.props.theme));
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.unsubscribeId !== null) {
          themeListener.unsubscribe(this.context, this.unsubscribeId);
        }
      }
    }, {
      key: "mergeOuterLocalTheme",
      // Simple merge between the outer theme and the local theme
      value: function mergeOuterLocalTheme(localTheme) {
        // To support composition of theme.
        if (typeof localTheme === 'function') {
          warning_1(this.outerTheme, ['Material-UI: you are providing a theme function property ' + 'to the MuiThemeProvider component:', '<MuiThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
          return localTheme(this.outerTheme);
        }

        if (!this.outerTheme) {
          return localTheme;
        }

        return objectSpread({}, this.outerTheme, localTheme);
      }
    }, {
      key: "render",
      value: function render() {
        // TODO move the sheetsManager property to a different component.
        // warning(
        //   typeof window !== 'undefined' || this.props.sheetsManager,
        //   [
        //     'Material-UI: you need to provide a sheetsManager to the MuiThemeProvider ' +
        //       'when rendering on the server.',
        //     'If you do not, you might experience a memory leak',
        //   ].join('\n'),
        // );
        return this.props.children;
      }
    }]);

    return MuiThemeProvider;
  }(React__default.Component);

  MuiThemeProvider.propTypes = {
    /**
     * You can wrap a node.
     */
    children: propTypes.node.isRequired,

    /**
     * You can disable the generation of the styles with this option.
     * It can be useful when traversing the React tree outside of the HTML
     * rendering step on the server.
     * Let's say you are using react-apollo to extract all
     * the queries made by the interface server side.
     * You can significantly speed up the traversal with this property.
     */
    disableStylesGeneration: propTypes.bool,

    /**
     * The sheetsManager is used to deduplicate style sheet injection in the page.
     * It's deduplicating using the (theme, styles) couple.
     * On the server, you should provide a new instance for each request.
     */
    sheetsManager: propTypes.object,

    /**
     * A theme object.
     */
    theme: propTypes.oneOfType([propTypes.object, propTypes.func]).isRequired
  };
  MuiThemeProvider.propTypes = exactProp(MuiThemeProvider.propTypes, 'MuiThemeProvider');
  MuiThemeProvider.childContextTypes = objectSpread({}, themeListener.contextTypes, {
    muiThemeProviderOptions: propTypes.object
  });
  MuiThemeProvider.contextTypes = objectSpread({}, themeListener.contextTypes, {
    muiThemeProviderOptions: propTypes.object
  });

  var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
  });

  var hoistNonReactStatics = createCommonjsModule(function (module, exports) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  (function (global, factory) {
      module.exports = factory();
  }(commonjsGlobal, (function () {
      
      var REACT_STATICS = {
          childContextTypes: true,
          contextTypes: true,
          defaultProps: true,
          displayName: true,
          getDefaultProps: true,
          getDerivedStateFromProps: true,
          mixins: true,
          propTypes: true,
          type: true
      };
      
      var KNOWN_STATICS = {
          name: true,
          length: true,
          prototype: true,
          caller: true,
          callee: true,
          arguments: true,
          arity: true
      };
      
      var defineProperty = Object.defineProperty;
      var getOwnPropertyNames = Object.getOwnPropertyNames;
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var getPrototypeOf = Object.getPrototypeOf;
      var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
      
      return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
          if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
              
              if (objectPrototype) {
                  var inheritedComponent = getPrototypeOf(sourceComponent);
                  if (inheritedComponent && inheritedComponent !== objectPrototype) {
                      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                  }
              }
              
              var keys = getOwnPropertyNames(sourceComponent);
              
              if (getOwnPropertySymbols) {
                  keys = keys.concat(getOwnPropertySymbols(sourceComponent));
              }
              
              for (var i = 0; i < keys.length; ++i) {
                  var key = keys[i];
                  if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                      var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                      try { // Avoid failures from read-only properties
                          defineProperty(targetComponent, key, descriptor);
                      } catch (e) {}
                  }
              }
              
              return targetComponent;
          }
          
          return targetComponent;
      };
  })));
  });

  var getDisplayName_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var getDisplayName = function getDisplayName(Component) {
    if (typeof Component === 'string') {
      return Component;
    }

    if (!Component) {
      return undefined;
    }

    return Component.displayName || Component.name || 'Component';
  };

  exports.default = getDisplayName;
  });

  var getDisplayName = unwrapExports(getDisplayName_1);

  var wrapDisplayName_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _getDisplayName2 = _interopRequireDefault(getDisplayName_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
    return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
  };

  exports.default = wrapDisplayName;
  });

  var wrapDisplayName = unwrapExports(wrapDisplayName_1);

  var ns = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * Namespaces to avoid conflicts on the context.
   */
  var jss = exports.jss = '64a55d578f856d258dc345b094a2a2b3';
  var sheetsRegistry = exports.sheetsRegistry = 'd4bd0baacbc52bbd48bbb9eb24344ecd';
  var managers = exports.managers = 'b768b78919504fba9de2c03545c5cd3a';
  var sheetOptions = exports.sheetOptions = '6fc570d6bd61383819d0f9e7407c452d';
  });

  unwrapExports(ns);
  var ns_1 = ns.jss;
  var ns_2 = ns.sheetsRegistry;
  var ns_3 = ns.managers;
  var ns_4 = ns.sheetOptions;

  var propTypes$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  exports['default'] = {
    jss: (0, propTypes.shape)({
      options: (0, propTypes.shape)({
        createGenerateClassName: propTypes.func.isRequired
      }).isRequired,
      createStyleSheet: propTypes.func.isRequired,
      removeStyleSheet: propTypes.func.isRequired
    }),
    registry: (0, propTypes.shape)({
      add: propTypes.func.isRequired,
      toString: propTypes.func.isRequired
    })
  };
  });

  unwrapExports(propTypes$1);

  var contextTypes = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _ns$jss$ns$sheetOptio;





  var ns$$1 = _interopRequireWildcard(ns);



  var _propTypes3 = _interopRequireDefault(propTypes$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  exports['default'] = (_ns$jss$ns$sheetOptio = {}, _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.jss, _propTypes3['default'].jss), _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.sheetOptions, propTypes.object), _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.sheetsRegistry, _propTypes3['default'].registry), _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.managers, propTypes.object), _ns$jss$ns$sheetOptio);
  });

  var contextTypes$1 = unwrapExports(contextTypes);

  // Support for the jss-expand plugin.

  function arrayMerge(destination, source) {
    return source;
  }

  function getStylesCreator(stylesOrCreator) {
    var themingEnabled = typeof stylesOrCreator === 'function';

    function create(theme, name) {
      var styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;

      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }

      var overrides = theme.overrides[name];

      var stylesWithOverrides = objectSpread({}, styles);

      Object.keys(overrides).forEach(function (key) {
        warning_1(stylesWithOverrides[key], ['Material-UI: you are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n'));
        stylesWithOverrides[key] = deepmerge_1(stylesWithOverrides[key], overrides[key], {
          arrayMerge: arrayMerge
        });
      });
      return stylesWithOverrides;
    }

    return {
      create: create,
      options: {},
      themingEnabled: themingEnabled
    };
  }

  function getThemeProps(params) {
    var theme = params.theme,
        name = params.name;

    if (!name || !theme.props || !theme.props[name]) {
      return {};
    }

    return theme.props[name];
  }

  var jss = lib_1(jssPreset()); // Use a singleton or the provided one by the context.

  var generateClassName = createGenerateClassName(); // Global index counter to preserve source order.
  // We create the style sheet during at the creation of the component,
  // children are handled after the parents, so the order of style elements would be parent->child.
  // It is a problem though when a parent passes a className
  // which needs to override any childs styles.
  // StyleSheet of the child has a higher specificity, because of the source order.
  // So our solution is to render sheets them in the reverse order child->sheet, so
  // that parent has a higher specificity.

  var indexCounter = -10e10; // Exported for test purposes

  var sheetsManager = new Map(); // We use the same empty object to ref count the styles that don't need a theme object.

  var noopTheme = {}; // In order to have self-supporting components, we rely on default theme when not provided.

  var defaultTheme;

  function getDefaultTheme() {
    if (defaultTheme) {
      return defaultTheme;
    }

    defaultTheme = createMuiTheme();
    return defaultTheme;
  } // Link a style sheet with a component.
  // It does not modify the component passed to it;
  // instead, it returns a new component, with a `classes` property.


  var withStyles = function withStyles(stylesOrCreator) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function (Component) {
      var _options$withTheme = options.withTheme,
          withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
          _options$flip = options.flip,
          flip = _options$flip === void 0 ? null : _options$flip,
          name = options.name,
          styleSheetOptions = objectWithoutProperties(options, ["withTheme", "flip", "name"]);

      var stylesCreator = getStylesCreator(stylesOrCreator);
      var listenToTheme = stylesCreator.themingEnabled || withTheme || typeof name === 'string';
      indexCounter += 1;
      stylesCreator.options.index = indexCounter;
      warning_1(indexCounter < 0, ['Material-UI: you might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join(' '));

      var WithStyles =
      /*#__PURE__*/
      function (_React$Component) {
        inherits(WithStyles, _React$Component);

        function WithStyles(props, context) {
          var _this;

          classCallCheck(this, WithStyles);

          _this = possibleConstructorReturn(this, (WithStyles.__proto__ || Object.getPrototypeOf(WithStyles)).call(this, props, context));
          _this.state = {};
          _this.disableStylesGeneration = false;
          _this.jss = null;
          _this.sheetOptions = null;
          _this.sheetsManager = sheetsManager;
          _this.stylesCreatorSaved = null;
          _this.theme = null;
          _this.unsubscribeId = null;
          _this.jss = _this.context[ns_1] || jss;
          var muiThemeProviderOptions = _this.context.muiThemeProviderOptions;

          if (muiThemeProviderOptions) {
            if (muiThemeProviderOptions.sheetsManager) {
              _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
            }

            _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
          } // Attach the stylesCreator to the instance of the component as in the context
          // of react-hot-loader the hooks can be executed in a different closure context:
          // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107


          _this.stylesCreatorSaved = stylesCreator;
          _this.sheetOptions = objectSpread({
            generateClassName: generateClassName
          }, _this.context[ns_4]); // We use || as the function call is lazy evaluated.

          _this.theme = listenToTheme ? themeListener.initial(context) || getDefaultTheme() : noopTheme;

          _this.attach(_this.theme);

          _this.cacheClasses = {
            // Cache for the finalized classes value.
            value: null,
            // Cache for the last used classes prop pointer.
            lastProp: null,
            // Cache for the last used rendered classes pointer.
            lastJSS: {}
          };
          return _this;
        }

        createClass(WithStyles, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this2 = this;

            if (!listenToTheme) {
              return;
            }

            this.unsubscribeId = themeListener.subscribe(this.context, function (theme) {
              var oldTheme = _this2.theme;
              _this2.theme = theme;

              _this2.attach(_this2.theme); // Rerender the component so the underlying component gets the theme update.
              // By theme update we mean receiving and applying the new class names.


              _this2.setState({}, function () {
                _this2.detach(oldTheme);
              });
            });
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate() {
            // react-hot-loader specific logic
            if (this.stylesCreatorSaved === stylesCreator || "development" === 'production') {
              return;
            }

            this.detach(this.theme);
            this.stylesCreatorSaved = stylesCreator;
            this.attach(this.theme);
            this.forceUpdate();
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.detach(this.theme);

            if (this.unsubscribeId !== null) {
              themeListener.unsubscribe(this.context, this.unsubscribeId);
            }
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this3 = this;

            // Tracks if either the rendered classes or classes prop has changed,
            // requiring the generation of a new finalized classes object.
            var generate = false;

            if (!this.disableStylesGeneration) {
              var sheetManager = this.sheetsManager.get(this.stylesCreatorSaved);
              var sheetsManagerTheme = sheetManager.get(this.theme);

              if (sheetsManagerTheme.sheet.classes !== this.cacheClasses.lastJSS) {
                this.cacheClasses.lastJSS = sheetsManagerTheme.sheet.classes;
                generate = true;
              }
            }

            if (this.props.classes !== this.cacheClasses.lastProp) {
              this.cacheClasses.lastProp = this.props.classes;
              generate = true;
            }

            if (generate) {
              if (this.props.classes) {
                this.cacheClasses.value = objectSpread({}, this.cacheClasses.lastJSS, Object.keys(this.props.classes).reduce(function (accumulator, key) {
                  warning_1(_this3.cacheClasses.lastJSS[key] || _this3.disableStylesGeneration, ["Material-UI: the key `".concat(key, "` ") + "provided to the classes property is not implemented in ".concat(getDisplayName(Component), "."), "You can only override one of the following: ".concat(Object.keys(_this3.cacheClasses.lastJSS).join(','))].join('\n'));
                  warning_1(!_this3.props.classes[key] || typeof _this3.props.classes[key] === 'string', ["Material-UI: the key `".concat(key, "` ") + "provided to the classes property is not valid for ".concat(getDisplayName(Component), "."), "You need to provide a non empty string instead of: ".concat(_this3.props.classes[key], ".")].join('\n'));

                  if (_this3.props.classes[key]) {
                    accumulator[key] = "".concat(_this3.cacheClasses.lastJSS[key], " ").concat(_this3.props.classes[key]);
                  }

                  return accumulator;
                }, {}));
              } else {
                this.cacheClasses.value = this.cacheClasses.lastJSS;
              }
            }

            return this.cacheClasses.value;
          }
        }, {
          key: "attach",
          value: function attach(theme) {
            if (this.disableStylesGeneration) {
              return;
            }

            var stylesCreatorSaved = this.stylesCreatorSaved;
            var sheetManager = this.sheetsManager.get(stylesCreatorSaved);

            if (!sheetManager) {
              sheetManager = new Map();
              this.sheetsManager.set(stylesCreatorSaved, sheetManager);
            }

            var sheetManagerTheme = sheetManager.get(theme);

            if (!sheetManagerTheme) {
              sheetManagerTheme = {
                refs: 0,
                sheet: null
              };
              sheetManager.set(theme, sheetManagerTheme);
            }

            if (sheetManagerTheme.refs === 0) {
              var styles = stylesCreatorSaved.create(theme, name);
              var meta = name;

              if (!meta) {
                meta = getDisplayName(Component);
              }

              var sheet = this.jss.createStyleSheet(styles, objectSpread({
                meta: meta,
                classNamePrefix: meta,
                flip: typeof flip === 'boolean' ? flip : theme.direction === 'rtl',
                link: false
              }, this.sheetOptions, stylesCreatorSaved.options, {
                name: name
              }, styleSheetOptions));
              sheetManagerTheme.sheet = sheet;
              sheet.attach();
              var sheetsRegistry = this.context[ns_2];

              if (sheetsRegistry) {
                sheetsRegistry.add(sheet);
              }
            }

            sheetManagerTheme.refs += 1;
          }
        }, {
          key: "detach",
          value: function detach(theme) {
            if (this.disableStylesGeneration) {
              return;
            }

            var stylesCreatorSaved = this.stylesCreatorSaved;
            var sheetManager = this.sheetsManager.get(stylesCreatorSaved);
            var sheetManagerTheme = sheetManager.get(theme);
            sheetManagerTheme.refs -= 1;

            if (sheetManagerTheme.refs === 0) {
              sheetManager.delete(theme);
              this.jss.removeStyleSheet(sheetManagerTheme.sheet);
              var sheetsRegistry = this.context[ns_2];

              if (sheetsRegistry) {
                sheetsRegistry.remove(sheetManagerTheme.sheet);
              }
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _props = this.props,
                classes = _props.classes,
                innerRef = _props.innerRef,
                other = objectWithoutProperties(_props, ["classes", "innerRef"]);

            var more = getThemeProps({
              theme: this.theme,
              name: name
            }); // Provide the theme to the wrapped component.
            // So we don't have to use the `withTheme()` Higher-order Component.

            if (withTheme) {
              more.theme = this.theme;
            }

            return React__default.createElement(Component, _extends_1({}, more, {
              classes: this.getClasses(),
              ref: innerRef
            }, other));
          }
        }]);

        return WithStyles;
      }(React__default.Component);

      WithStyles.propTypes = {
        /**
         * Override or extend the styles applied to the component.
         */
        classes: propTypes.object,

        /**
         * Use that property to pass a ref callback to the decorated component.
         */
        innerRef: propTypes.oneOfType([propTypes.func, propTypes.object])
      };
      WithStyles.contextTypes = objectSpread({
        muiThemeProviderOptions: propTypes.object
      }, contextTypes$1, listenToTheme ? themeListener.contextTypes : {});

      {
        WithStyles.displayName = wrapDisplayName(Component, 'WithStyles');
      }

      hoistNonReactStatics(WithStyles, Component);

      {
        // Exposed for test purposes.
        WithStyles.Naked = Component;
        WithStyles.options = options;
      }

      return WithStyles;
    };
  };

  var defaultTheme$1;

  function getDefaultTheme$1() {
    if (defaultTheme$1) {
      return defaultTheme$1;
    }

    defaultTheme$1 = createMuiTheme();
    return defaultTheme$1;
  } // Provide the theme object as a property to the input component.


  var withTheme = function withTheme() {
    return function (Component) {
      var WithTheme =
      /*#__PURE__*/
      function (_React$Component) {
        inherits(WithTheme, _React$Component);

        function WithTheme(props, context) {
          var _this;

          classCallCheck(this, WithTheme);

          _this = possibleConstructorReturn(this, (WithTheme.__proto__ || Object.getPrototypeOf(WithTheme)).call(this, props, context));
          _this.state = {};
          _this.unsubscribeId = null;
          _this.state = {
            // We use || as the function call is lazy evaluated.
            theme: themeListener.initial(context) || getDefaultTheme$1()
          };
          return _this;
        }

        createClass(WithTheme, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this2 = this;

            this.unsubscribeId = themeListener.subscribe(this.context, function (theme) {
              _this2.setState({
                theme: theme
              });
            });
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            if (this.unsubscribeId !== null) {
              themeListener.unsubscribe(this.context, this.unsubscribeId);
            }
          }
        }, {
          key: "render",
          value: function render() {
            return React__default.createElement(Component, _extends_1({
              theme: this.state.theme
            }, this.props));
          }
        }]);

        return WithTheme;
      }(React__default.Component);

      WithTheme.contextTypes = themeListener.contextTypes;

      {
        WithTheme.displayName = wrapDisplayName(Component, 'WithTheme');
      }

      hoistNonReactStatics(WithTheme, Component);

      {
        // Exposed for test purposes.
        WithTheme.Naked = Component;
      }

      return WithTheme;
    };
  };

  var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2016 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames () {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg)) {
  				classes.push(classNames.apply(null, arg));
  			} else if (argType === 'object') {
  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes.push(key);
  					}
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if (module.exports) {
  		module.exports = classNames;
  	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
  		// register as 'classnames', consistent with npm package name
  		undefined('classnames', [], function () {
  			return classNames;
  		});
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  function capitalize(string) {
    if (typeof string !== 'string') {
      throw new Error('Material-UI: capitalize(string) expects a string argument.');
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function contains(obj, pred) {
    return Object.keys(pred).every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === pred[key];
    });
  }
  function findIndex(arr, pred) {
    var predType = _typeof_1(pred);

    for (var i = 0; i < arr.length; i += 1) {
      if (predType === 'function' && !!pred(arr[i], i, arr) === true) {
        return i;
      }

      if (predType === 'object' && contains(arr[i], pred)) {
        return i;
      }

      if (['string', 'number', 'boolean'].indexOf(predType) !== -1) {
        return arr.indexOf(pred);
      }
    }

    return -1;
  }
  function find(arr, pred) {
    var index = findIndex(arr, pred);
    return index > -1 ? arr[index] : undefined;
  }
  /**
   * Safe chained function
   *
   * Will only create a new function if needed,
   * otherwise will pass back existing functions or null.
   *
   * @param {function} functions to chain
   * @returns {function|null}
   */

  function createChainedFunction() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    return funcs.filter(function (func) {
      return func != null;
    }).reduce(function (acc, func) {
      warning_1(typeof func === 'function', 'Material-UI: invalid Argument Type, must only provide functions, undefined, or null.');
      return function chainedFunction() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        acc.apply(this, args);
        func.apply(this, args);
      };
    }, function () {});
  }

  var styles = function styles(theme) {
    var elevations = {};
    theme.shadows.forEach(function (shadow, index) {
      elevations["elevation".concat(index)] = {
        boxShadow: shadow
      };
    });
    return objectSpread({
      root: {
        backgroundColor: theme.palette.background.paper
      },
      rounded: {
        borderRadius: 2
      }
    }, elevations);
  };

  function Paper(props) {
    var classes = props.classes,
        classNameProp = props.className,
        Component = props.component,
        square = props.square,
        elevation = props.elevation,
        other = objectWithoutProperties(props, ["classes", "className", "component", "square", "elevation"]);

    warning_1(elevation >= 0 && elevation < 25, "Material-UI: this elevation `".concat(elevation, "` is not implemented."));
    var className = classnames(classes.root, classes["elevation".concat(elevation)], defineProperty({}, classes.rounded, !square), classNameProp);
    return React__default.createElement(Component, _extends_1({
      className: className
    }, other));
  }

  Paper.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * Shadow depth, corresponds to `dp` in the spec.
     * It's accepting values between 0 and 24 inclusive.
     */
    elevation: propTypes.number,

    /**
     * If `true`, rounded corners are disabled.
     */
    square: propTypes.bool
  };
  Paper.defaultProps = {
    component: 'div',
    elevation: 2,
    square: false
  };
  var Paper$1 = withStyles(styles, {
    name: 'MuiPaper'
  })(Paper);

  var styles$1 = function styles(theme) {
    var backgroundColorDefault = theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
    return {
      root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        boxSizing: 'border-box',
        // Prevent padding issue with the Modal and fixed positioned AppBar.
        zIndex: theme.zIndex.appBar,
        flexShrink: 0
      },
      positionFixed: {
        position: 'fixed',
        top: 0,
        left: 'auto',
        right: 0
      },
      positionAbsolute: {
        position: 'absolute',
        top: 0,
        left: 'auto',
        right: 0
      },
      positionSticky: {
        position: 'sticky',
        top: 0,
        left: 'auto',
        right: 0
      },
      positionStatic: {
        position: 'static'
      },
      colorDefault: {
        backgroundColor: backgroundColorDefault,
        color: theme.palette.getContrastText(backgroundColorDefault)
      },
      colorPrimary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
      },
      colorSecondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
      }
    };
  };

  function AppBar(props) {
    var _classNames;

    var children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        color = props.color,
        position = props.position,
        other = objectWithoutProperties(props, ["children", "classes", "className", "color", "position"]);

    var className = classnames(classes.root, classes["position".concat(capitalize(position))], (_classNames = {}, defineProperty(_classNames, classes["color".concat(capitalize(color))], color !== 'inherit'), defineProperty(_classNames, 'mui-fixed', position === 'fixed'), _classNames), classNameProp);
    return React__default.createElement(Paper$1, _extends_1({
      square: true,
      component: "header",
      elevation: 4,
      className: className
    }, other), children);
  }

  AppBar.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: propTypes.oneOf(['inherit', 'primary', 'secondary', 'default']),

    /**
     * The positioning type. The behavior of the different options is described
     * [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
     * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
     */
    position: propTypes.oneOf(['fixed', 'absolute', 'sticky', 'static'])
  };
  AppBar.defaultProps = {
    color: 'primary',
    position: 'fixed'
  };
  var AppBar$1 = withStyles(styles$1, {
    name: 'MuiAppBar'
  })(AppBar);

  var styles$2 = function styles(theme) {
    return {
      root: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: theme.spacing.unit * 5,
        height: theme.spacing.unit * 5,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(20),
        borderRadius: '50%',
        overflow: 'hidden',
        userSelect: 'none'
      },
      colorDefault: {
        color: theme.palette.background.default,
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
      },
      img: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        // Handle non-square image. The property isn't supported by IE11.
        objectFit: 'cover'
      }
    };
  };

  function Avatar(props) {
    var alt = props.alt,
        childrenProp = props.children,
        childrenClassNameProp = props.childrenClassName,
        classes = props.classes,
        classNameProp = props.className,
        Component = props.component,
        imgProps = props.imgProps,
        sizes = props.sizes,
        src = props.src,
        srcSet = props.srcSet,
        other = objectWithoutProperties(props, ["alt", "children", "childrenClassName", "classes", "className", "component", "imgProps", "sizes", "src", "srcSet"]);

    var className = classnames(classes.root, defineProperty({}, classes.colorDefault, childrenProp && !src && !srcSet), classNameProp);
    var children = null;

    if (childrenProp) {
      if (childrenClassNameProp && typeof childrenProp !== 'string' && React__default.isValidElement(childrenProp)) {
        var childrenClassName = classnames(childrenClassNameProp, childrenProp.props.className);
        children = React__default.cloneElement(childrenProp, {
          className: childrenClassName
        });
      } else {
        children = childrenProp;
      }
    } else if (src || srcSet) {
      children = React__default.createElement("img", _extends_1({
        alt: alt,
        src: src,
        srcSet: srcSet,
        sizes: sizes,
        className: classes.img
      }, imgProps));
    }

    return React__default.createElement(Component, _extends_1({
      className: className
    }, other), children);
  }

  Avatar.propTypes = {
    /**
     * Used in combination with `src` or `srcSet` to
     * provide an alt attribute for the rendered `img` element.
     */
    alt: propTypes.string,

    /**
     * Used to render icon or text elements inside the Avatar.
     * `src` and `alt` props will not be used and no `img` will
     * be rendered by default.
     *
     * This can be an element, or just a string.
     */
    children: propTypes.node,

    /**
     * @ignore
     * The className of the child element.
     * Used by Chip and ListItemIcon to style the Avatar icon.
     */
    childrenClassName: propTypes.string,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * Properties applied to the `img` element when the component
     * is used to display an image.
     */
    imgProps: propTypes.object,

    /**
     * The `sizes` attribute for the `img` element.
     */
    sizes: propTypes.string,

    /**
     * The `src` attribute for the `img` element.
     */
    src: propTypes.string,

    /**
     * The `srcSet` attribute for the `img` element.
     */
    srcSet: propTypes.string
  };
  Avatar.defaultProps = {
    component: 'div'
  };
  var Avatar$1 = withStyles(styles$2, {
    name: 'MuiAvatar'
  })(Avatar);

  var PropTypes = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.classNamesShape = exports.timeoutsShape = undefined;
  exports.transitionTimeout = transitionTimeout;



  var _propTypes2 = _interopRequireDefault(propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function transitionTimeout(transitionType) {
    var timeoutPropName = 'transition' + transitionType + 'Timeout';
    var enabledPropName = 'transition' + transitionType;

    return function (props) {
      // If the transition is enabled
      if (props[enabledPropName]) {
        // If no timeout duration is provided
        if (props[timeoutPropName] == null) {
          return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

          // If the duration isn't a number
        } else if (typeof props[timeoutPropName] !== 'number') {
          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
        }
      }

      return null;
    };
  }

  var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
    enter: _propTypes2.default.number,
    exit: _propTypes2.default.number
  }).isRequired]);

  var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    exit: _propTypes2.default.string,
    active: _propTypes2.default.string
  }), _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    enterDone: _propTypes2.default.string,
    enterActive: _propTypes2.default.string,
    exit: _propTypes2.default.string,
    exitDone: _propTypes2.default.string,
    exitActive: _propTypes2.default.string
  })]);
  });

  unwrapExports(PropTypes);
  var PropTypes_1 = PropTypes.classNamesShape;
  var PropTypes_2 = PropTypes.timeoutsShape;
  var PropTypes_3 = PropTypes.transitionTimeout;

  var Transition_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;



  var PropTypes$$1 = _interopRequireWildcard(propTypes);



  var _react2 = _interopRequireDefault(React__default);



  var _reactDom2 = _interopRequireDefault(ReactDOM);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
  var EXITED = exports.EXITED = 'exited';
  var ENTERING = exports.ENTERING = 'entering';
  var ENTERED = exports.ENTERED = 'entered';
  var EXITING = exports.EXITING = 'exiting';

  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the components.
   * It's up to you to give meaning and effect to those states. For example we can
   * add styles to a component when it enters or exits:
   *
   * ```jsx
   * import Transition from 'react-transition-group/Transition';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 0 },
   *   entered:  { opacity: 1 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {(state) => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
   * What it does do is track transition states over time so you can update the
   * component (such as by adding styles or classes) when it changes states.
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component begins the
   * "Enter" stage. During this stage, the component will shift from its current transition state,
   * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
   * it's complete. Let's take the following example:
   *
   * ```jsx
   * state = { in: false };
   *
   * toggleEnterState = () => {
   *   this.setState({ in: true });
   * }
   *
   * render() {
   *   return (
   *     <div>
   *       <Transition in={this.state.in} timeout={500} />
   *       <button onClick={this.toggleEnterState}>Click to Enter</button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state and
   * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
   *
   * ## Timing
   *
   * Timing is often the trickiest part of animation, mistakes can result in slight delays
   * that are hard to pin down. A common example is when you want to add an exit transition,
   * you should set the desired final styles when the state is `'exiting'`. That's when the
   * transition to those styles will start and, if you matched the `timeout` prop with the
   * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
   *
   * > **Note**: For simpler transitions the `Transition` component might be enough, but
   * > take into account that it's platform-agnostic, while the `CSSTransition` component
   * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
   * > in order to make more complex transitions more predictable. For example, even though
   * > classes `example-enter` and `example-enter-active` are applied immediately one after
   * > another, you can still transition from one to the other because of the forced reflow
   * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
   * > for more info). Take this into account when choosing between `Transition` and
   * > `CSSTransition`.
   *
   * ## Example
   *
   * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
   *
   */

  var Transition = function (_React$Component) {
    _inherits(Transition, _React$Component);

    function Transition(props, context) {
      _classCallCheck(this, Transition);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

      var parentGroup = context.transitionGroup;
      // In the context of a TransitionGroup all enters are really appears
      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;

      var initialStatus = void 0;
      _this.nextStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.nextStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = { status: initialStatus };

      _this.nextCallback = null;
      return _this;
    }

    Transition.prototype.getChildContext = function getChildContext() {
      return { transitionGroup: null }; // allows for nested Transitions
    };

    Transition.prototype.componentDidMount = function componentDidMount() {
      this.updateStatus(true);
    };

    Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _ref = this.pendingState || this.state,
          status = _ref.status;

      if (nextProps.in) {
        if (status === UNMOUNTED) {
          this.setState({ status: EXITED });
        }
        if (status !== ENTERING && status !== ENTERED) {
          this.nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          this.nextStatus = EXITING;
        }
      }
    };

    Transition.prototype.componentDidUpdate = function componentDidUpdate() {
      this.updateStatus();
    };

    Transition.prototype.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    Transition.prototype.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;

      var exit = void 0,
          enter = void 0,
          appear = void 0;

      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter;
        appear = timeout.appear;
      }
      return { exit: exit, enter: enter, appear: appear };
    };

    Transition.prototype.updateStatus = function updateStatus() {
      var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var nextStatus = this.nextStatus;

      if (nextStatus !== null) {
        this.nextStatus = null;
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();
        var node = _reactDom2.default.findDOMNode(this);

        if (nextStatus === ENTERING) {
          this.performEnter(node, mounting);
        } else {
          this.performExit(node);
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({ status: UNMOUNTED });
      }
    };

    Transition.prototype.performEnter = function performEnter(node, mounting) {
      var _this2 = this;

      var enter = this.props.enter;

      var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;

      var timeouts = this.getTimeouts();

      // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set
      if (!mounting && !enter) {
        this.safeSetState({ status: ENTERED }, function () {
          _this2.props.onEntered(node);
        });
        return;
      }

      this.props.onEnter(node, appearing);

      this.safeSetState({ status: ENTERING }, function () {
        _this2.props.onEntering(node, appearing);

        // FIXME: appear timeout?
        _this2.onTransitionEnd(node, timeouts.enter, function () {
          _this2.safeSetState({ status: ENTERED }, function () {
            _this2.props.onEntered(node, appearing);
          });
        });
      });
    };

    Transition.prototype.performExit = function performExit(node) {
      var _this3 = this;

      var exit = this.props.exit;

      var timeouts = this.getTimeouts();

      // no exit animation skip right to EXITED
      if (!exit) {
        this.safeSetState({ status: EXITED }, function () {
          _this3.props.onExited(node);
        });
        return;
      }
      this.props.onExit(node);

      this.safeSetState({ status: EXITING }, function () {
        _this3.props.onExiting(node);

        _this3.onTransitionEnd(node, timeouts.exit, function () {
          _this3.safeSetState({ status: EXITED }, function () {
            _this3.props.onExited(node);
          });
        });
      });
    };

    Transition.prototype.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
      var _this4 = this;

      // We need to track pending updates for instances where a cWRP fires quickly
      // after cDM and before the state flushes, which would double trigger a
      // transition
      this.pendingState = nextState;

      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, function () {
        _this4.pendingState = null;
        callback();
      });
    };

    Transition.prototype.setNextCallback = function setNextCallback(callback) {
      var _this5 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this5.nextCallback = null;

          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
      this.setNextCallback(handler);

      if (node) {
        if (this.props.addEndListener) {
          this.props.addEndListener(node, this.nextCallback);
        }
        if (timeout != null) {
          setTimeout(this.nextCallback, timeout);
        }
      } else {
        setTimeout(this.nextCallback, 0);
      }
    };

    Transition.prototype.render = function render() {
      var status = this.state.status;
      if (status === UNMOUNTED) {
        return null;
      }

      var _props = this.props,
          children = _props.children,
          childProps = _objectWithoutProperties(_props, ['children']);
      // filter props for Transtition


      delete childProps.in;
      delete childProps.mountOnEnter;
      delete childProps.unmountOnExit;
      delete childProps.appear;
      delete childProps.enter;
      delete childProps.exit;
      delete childProps.timeout;
      delete childProps.addEndListener;
      delete childProps.onEnter;
      delete childProps.onEntering;
      delete childProps.onEntered;
      delete childProps.onExit;
      delete childProps.onExiting;
      delete childProps.onExited;

      if (typeof children === 'function') {
        return children(status, childProps);
      }

      var child = _react2.default.Children.only(children);
      return _react2.default.cloneElement(child, childProps);
    };

    return Transition;
  }(_react2.default.Component);

  Transition.contextTypes = {
    transitionGroup: PropTypes$$1.object
  };
  Transition.childContextTypes = {
    transitionGroup: function transitionGroup() {}
  };


  Transition.propTypes = {
    /**
     * A `function` child can be used instead of a React element.
     * This function is called with the current transition status
     * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
     * to apply context specific props to a component.
     *
     * ```jsx
     * <Transition timeout={150}>
     *   {(status) => (
     *     <MyComponent className={`fade fade-${status}`} />
     *   )}
     * </Transition>
     * ```
     */
    children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,

    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes$$1.bool,

    /**
     * By default the child component is mounted immediately along with
     * the parent `Transition` component. If you want to "lazy mount" the component on the
     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
     * mounted, even on "exited", unless you also specify `unmountOnExit`.
     */
    mountOnEnter: PropTypes$$1.bool,

    /**
     * By default the child component stays mounted after it reaches the `'exited'` state.
     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
     */
    unmountOnExit: PropTypes$$1.bool,

    /**
     * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
     * If you want to transition on the first mount set `appear` to `true`, and the
     * component will transition in as soon as the `<Transition>` mounts.
     *
     * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
     */
    appear: PropTypes$$1.bool,

    /**
     * Enable or disable enter transitions.
     */
    enter: PropTypes$$1.bool,

    /**
     * Enable or disable exit transitions.
     */
    exit: PropTypes$$1.bool,

    /**
     * The duration of the transition, in milliseconds.
     * Required unless `addEndListener` is provided
     *
     * You may specify a single timeout for all transitions like: `timeout={500}`,
     * or individually like:
     *
     * ```jsx
     * timeout={{
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     *
     * @type {number | { enter?: number, exit?: number }}
     */
    timeout: function timeout(props) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var pt = PropTypes.timeoutsShape;
      if (!props.addEndListener) pt = pt.isRequired;
      return pt.apply(undefined, [props].concat(args));
    },

    /**
     * Add a custom transition end trigger. Called with the transitioning
     * DOM node and a `done` callback. Allows for more fine grained transition end
     * logic. **Note:** Timeouts are still used as a fallback if provided.
     *
     * ```jsx
     * addEndListener={(node, done) => {
     *   // use the css transitionend event to mark the finish of a transition
     *   node.addEventListener('transitionend', done, false);
     * }}
     * ```
     */
    addEndListener: PropTypes$$1.func,

    /**
     * Callback fired before the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEnter: PropTypes$$1.func,

    /**
     * Callback fired after the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: PropTypes$$1.func,

    /**
     * Callback fired after the "entered" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEntered: PropTypes$$1.func,

    /**
     * Callback fired before the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExit: PropTypes$$1.func,

    /**
     * Callback fired after the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExiting: PropTypes$$1.func,

    /**
     * Callback fired after the "exited" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExited: PropTypes$$1.func
  };

  // Name the function so it is clearer in the documentation
  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,

    onEnter: noop,
    onEntering: noop,
    onEntered: noop,

    onExit: noop,
    onExiting: noop,
    onExited: noop
  };

  Transition.UNMOUNTED = 0;
  Transition.EXITED = 1;
  Transition.ENTERING = 2;
  Transition.ENTERED = 3;
  Transition.EXITING = 4;

  exports.default = Transition;
  });

  var Transition = unwrapExports(Transition_1);
  var Transition_2 = Transition_1.EXITING;
  var Transition_3 = Transition_1.ENTERED;
  var Transition_4 = Transition_1.ENTERING;
  var Transition_5 = Transition_1.EXITED;
  var Transition_6 = Transition_1.UNMOUNTED;

  var reflow = function reflow(node) {
    return node.scrollTop;
  };
  function getTransitionProps(props, options) {
    var timeout = props.timeout,
        _props$style = props.style,
        style = _props$style === void 0 ? {} : _props$style;
    return {
      duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode],
      delay: style.transitionDelay
    };
  }

  var styles$3 = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  /**
   * The Fade transition is used by the [Modal](/utils/modals) component.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  var Fade =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Fade, _React$Component);

    function Fade() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, Fade);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = Fade.__proto__ || Object.getPrototypeOf(Fade)).call.apply(_ref, [this].concat(args))), _this.handleEnter = function (node) {
        var theme = _this.props.theme;
        reflow(node); // So the animation always start from the start.

        var transitionProps = getTransitionProps(_this.props, {
          mode: 'enter'
        });
        node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
        node.style.transition = theme.transitions.create('opacity', transitionProps);

        if (_this.props.onEnter) {
          _this.props.onEnter(node);
        }
      }, _this.handleExit = function (node) {
        var theme = _this.props.theme;
        var transitionProps = getTransitionProps(_this.props, {
          mode: 'exit'
        });
        node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
        node.style.transition = theme.transitions.create('opacity', transitionProps);

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      }, _temp));
    }

    createClass(Fade, [{
      key: "render",
      value: function render() {
        var _props = this.props,
            children = _props.children,
            onEnter = _props.onEnter,
            onExit = _props.onExit,
            styleProp = _props.style,
            theme = _props.theme,
            other = objectWithoutProperties(_props, ["children", "onEnter", "onExit", "style", "theme"]);

        var style = objectSpread({}, styleProp, React__default.isValidElement(children) ? children.props.style : {});

        return React__default.createElement(Transition, _extends_1({
          appear: true,
          onEnter: this.handleEnter,
          onExit: this.handleExit
        }, other), function (state, childProps) {
          return React__default.cloneElement(children, objectSpread({
            style: objectSpread({
              opacity: 0,
              willChange: 'opacity'
            }, styles$3[state], style)
          }, childProps));
        });
      }
    }]);

    return Fade;
  }(React__default.Component);

  Fade.propTypes = {
    /**
     * A single child content element.
     */
    children: propTypes.oneOfType([propTypes.element, propTypes.func]),

    /**
     * If `true`, the component will transition in.
     */
    in: propTypes.bool,

    /**
     * @ignore
     */
    onEnter: propTypes.func,

    /**
     * @ignore
     */
    onExit: propTypes.func,

    /**
     * @ignore
     */
    style: propTypes.object,

    /**
     * @ignore
     */
    theme: propTypes.object.isRequired,

    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    timeout: propTypes.oneOfType([propTypes.number, propTypes.shape({
      enter: propTypes.number,
      exit: propTypes.number
    })])
  };
  Fade.defaultProps = {
    timeout: {
      enter: duration.enteringScreen,
      exit: duration.leavingScreen
    }
  };
  var Fade$1 = withTheme()(Fade);

  var styles$4 = {
    root: {
      zIndex: -1,
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    invisible: {
      backgroundColor: 'transparent'
    }
  };

  function Backdrop(props) {
    var classes = props.classes,
        className = props.className,
        invisible = props.invisible,
        open = props.open,
        transitionDuration = props.transitionDuration,
        other = objectWithoutProperties(props, ["classes", "className", "invisible", "open", "transitionDuration"]);

    return React__default.createElement(Fade$1, _extends_1({
      appear: true,
      "in": open,
      timeout: transitionDuration
    }, other), React__default.createElement("div", {
      className: classnames(classes.root, defineProperty({}, classes.invisible, invisible), className),
      "aria-hidden": "true"
    }));
  }

  Backdrop.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * If `true`, the backdrop is invisible.
     * It can be used when rendering a popover or a custom select component.
     */
    invisible: propTypes.bool,

    /**
     * If `true`, the backdrop is open.
     */
    open: propTypes.bool.isRequired,

    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    transitionDuration: propTypes.oneOfType([propTypes.number, propTypes.shape({
      enter: propTypes.number,
      exit: propTypes.number
    })])
  };
  Backdrop.defaultProps = {
    invisible: false
  };
  var Backdrop$1 = withStyles(styles$4, {
    name: 'MuiBackdrop'
  })(Backdrop);

  var RADIUS = 12;
  var styles$5 = function styles(theme) {
    return {
      root: {
        position: 'relative',
        display: 'inline-flex',
        // For correct alignment with the text.
        verticalAlign: 'middle'
      },
      badge: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -RADIUS,
        right: -RADIUS,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeight,
        fontSize: theme.typography.pxToRem(RADIUS),
        width: RADIUS * 2,
        height: RADIUS * 2,
        borderRadius: '50%',
        backgroundColor: theme.palette.color,
        color: theme.palette.textColor,
        zIndex: 1 // Render the badge on top of potential ripples.

      },
      colorPrimary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
      },
      colorSecondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
      },
      colorError: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText
      }
    };
  };

  function Badge(props) {
    var badgeContent = props.badgeContent,
        children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        color = props.color,
        ComponentProp = props.component,
        other = objectWithoutProperties(props, ["badgeContent", "children", "classes", "className", "color", "component"]);

    var badgeClassName = classnames(classes.badge, defineProperty({}, classes["color".concat(capitalize(color))], color !== 'default'));
    return React__default.createElement(ComponentProp, _extends_1({
      className: classnames(classes.root, classNameProp)
    }, other), children, React__default.createElement("span", {
      className: badgeClassName
    }, badgeContent));
  }

  Badge.propTypes = {
    /**
     * The content rendered within the badge.
     */
    badgeContent: propTypes.node.isRequired,

    /**
     * The badge will be added relative to this node.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: propTypes.oneOf(['default', 'primary', 'secondary', 'error']),

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func])
  };
  Badge.defaultProps = {
    color: 'default',
    component: 'span'
  };
  var Badge$1 = withStyles(styles$5, {
    name: 'MuiBadge'
  })(Badge);

  var styles$6 = function styles(theme) {
    return {
      root: {
        display: 'flex',
        justifyContent: 'center',
        height: 56,
        backgroundColor: theme.palette.background.paper
      }
    };
  };

  function BottomNavigation(props) {
    var childrenProp = props.children,
        classes = props.classes,
        classNameProp = props.className,
        onChange = props.onChange,
        showLabels = props.showLabels,
        value = props.value,
        other = objectWithoutProperties(props, ["children", "classes", "className", "onChange", "showLabels", "value"]);

    var className = classnames(classes.root, classNameProp);
    var children = React__default.Children.map(childrenProp, function (child, childIndex) {
      if (!React__default.isValidElement(child)) {
        return null;
      }

      var childValue = child.props.value === undefined ? childIndex : child.props.value;
      return React__default.cloneElement(child, {
        selected: childValue === value,
        showLabel: child.props.showLabel !== undefined ? child.props.showLabel : showLabels,
        value: childValue,
        onChange: onChange
      });
    });
    return React__default.createElement("div", _extends_1({
      className: className
    }, other), children);
  }

  BottomNavigation.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * Callback fired when the value changes.
     *
     * @param {object} event The event source of the callback
     * @param {any} value We default to the index of the child
     */
    onChange: propTypes.func,

    /**
     * If `true`, all `BottomNavigationAction`s will show their labels.
     * By default, only the selected `BottomNavigationAction` will show its label.
     */
    showLabels: propTypes.bool,

    /**
     * The value of the currently selected `BottomNavigationAction`.
     */
    value: propTypes.any
  };
  BottomNavigation.defaultProps = {
    showLabels: false
  };
  var BottomNavigation$1 = withStyles(styles$6, {
    name: 'MuiBottomNavigation'
  })(BottomNavigation);

  var keycode = createCommonjsModule(function (module, exports) {
  // Source: http://jsfiddle.net/vWx8V/
  // http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

  /**
   * Conenience method returns corresponding value for given keyName or keyCode.
   *
   * @param {Mixed} keyCode {Number} or keyName {String}
   * @return {Mixed}
   * @api public
   */

  function keyCode(searchInput) {
    // Keyboard Events
    if (searchInput && 'object' === typeof searchInput) {
      var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
      if (hasKeyCode) searchInput = hasKeyCode;
    }

    // Numbers
    if ('number' === typeof searchInput) return names[searchInput]

    // Everything else (cast to string)
    var search = String(searchInput);

    // check codes
    var foundNamedKey = codes[search.toLowerCase()];
    if (foundNamedKey) return foundNamedKey

    // check aliases
    var foundNamedKey = aliases[search.toLowerCase()];
    if (foundNamedKey) return foundNamedKey

    // weird character?
    if (search.length === 1) return search.charCodeAt(0)

    return undefined
  }

  /**
   * Compares a keyboard event with a given keyCode or keyName.
   *
   * @param {Event} event Keyboard event that should be tested
   * @param {Mixed} keyCode {Number} or keyName {String}
   * @return {Boolean}
   * @api public
   */
  keyCode.isEventKey = function isEventKey(event, nameOrCode) {
    if (event && 'object' === typeof event) {
      var keyCode = event.which || event.keyCode || event.charCode;
      if (keyCode === null || keyCode === undefined) { return false; }
      if (typeof nameOrCode === 'string') {
        // check codes
        var foundNamedKey = codes[nameOrCode.toLowerCase()];
        if (foundNamedKey) { return foundNamedKey === keyCode; }
      
        // check aliases
        var foundNamedKey = aliases[nameOrCode.toLowerCase()];
        if (foundNamedKey) { return foundNamedKey === keyCode; }
      } else if (typeof nameOrCode === 'number') {
        return nameOrCode === keyCode;
      }
      return false;
    }
  };

  exports = module.exports = keyCode;

  /**
   * Get by name
   *
   *   exports.code['enter'] // => 13
   */

  var codes = exports.code = exports.codes = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift': 16,
    'ctrl': 17,
    'alt': 18,
    'pause/break': 19,
    'caps lock': 20,
    'esc': 27,
    'space': 32,
    'page up': 33,
    'page down': 34,
    'end': 35,
    'home': 36,
    'left': 37,
    'up': 38,
    'right': 39,
    'down': 40,
    'insert': 45,
    'delete': 46,
    'command': 91,
    'left command': 91,
    'right command': 93,
    'numpad *': 106,
    'numpad +': 107,
    'numpad -': 109,
    'numpad .': 110,
    'numpad /': 111,
    'num lock': 144,
    'scroll lock': 145,
    'my computer': 182,
    'my calculator': 183,
    ';': 186,
    '=': 187,
    ',': 188,
    '-': 189,
    '.': 190,
    '/': 191,
    '`': 192,
    '[': 219,
    '\\': 220,
    ']': 221,
    "'": 222
  };

  // Helper aliases

  var aliases = exports.aliases = {
    'windows': 91,
    '⇧': 16,
    '⌥': 18,
    '⌃': 17,
    '⌘': 91,
    'ctl': 17,
    'control': 17,
    'option': 18,
    'pause': 19,
    'break': 19,
    'caps': 20,
    'return': 13,
    'escape': 27,
    'spc': 32,
    'spacebar': 32,
    'pgup': 33,
    'pgdn': 34,
    'ins': 45,
    'del': 46,
    'cmd': 91
  };

  /*!
   * Programatically add the following
   */

  // lower case chars
  for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32;

  // numbers
  for (var i = 48; i < 58; i++) codes[i - 48] = i;

  // function keys
  for (i = 1; i < 13; i++) codes['f'+i] = i + 111;

  // numpad keys
  for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96;

  /**
   * Get by code
   *
   *   exports.name[13] // => 'Enter'
   */

  var names = exports.names = exports.title = {}; // title for backward compat

  // Create reverse mapping
  for (i in codes) names[codes[i]] = i;

  // Add aliases
  for (var alias in aliases) {
    codes[alias] = aliases[alias];
  }
  });
  var keycode_1 = keycode.code;
  var keycode_2 = keycode.codes;
  var keycode_3 = keycode.aliases;
  var keycode_4 = keycode.names;
  var keycode_5 = keycode.title;

  var ownerDocument_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = ownerDocument;
  function ownerDocument(node) {
    return node && node.ownerDocument || document;
  }
  module.exports = exports["default"];
  });

  var ownerDocument = unwrapExports(ownerDocument_1);

  var ownerWindow = function ownerWindow(node) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
    var doc = ownerDocument(node);
    return doc.defaultView || doc.parentView || fallback;
  };

  var inDOM = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  module.exports = exports['default'];
  });

  var inDOM$1 = unwrapExports(inDOM);

  var contains$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _inDOM2 = _interopRequireDefault(inDOM);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function () {
    // HTML DOM and SVG DOM may have different support levels,
    // so we need to check on context instead of a document root element.
    return _inDOM2.default ? function (context, node) {
      if (context.contains) {
        return context.contains(node);
      } else if (context.compareDocumentPosition) {
        return context === node || !!(context.compareDocumentPosition(node) & 16);
      } else {
        return fallback(context, node);
      }
    } : fallback;
  }();

  function fallback(context, node) {
    if (node) do {
      if (node === context) return true;
    } while (node = node.parentNode);

    return false;
  }
  module.exports = exports['default'];
  });

  var contains$2 = unwrapExports(contains$1);

  //  weak
  var internal = {
    focusKeyPressed: false,
    keyUpEventTimeout: -1
  };
  function detectFocusVisible(instance, element, callback) {
    var attempt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    warning_1(instance.focusVisibleCheckTime, 'Material-UI: missing instance.focusVisibleCheckTime.');
    warning_1(instance.focusVisibleMaxCheckTimes, 'Material-UI: missing instance.focusVisibleMaxCheckTimes.');
    instance.focusVisibleTimeout = setTimeout(function () {
      var doc = ownerDocument(element);

      if (internal.focusKeyPressed && (doc.activeElement === element || contains$2(element, doc.activeElement))) {
        callback();
      } else if (attempt < instance.focusVisibleMaxCheckTimes) {
        detectFocusVisible(instance, element, callback, attempt + 1);
      }
    }, instance.focusVisibleCheckTime);
  }
  var FOCUS_KEYS = ['tab', 'enter', 'space', 'esc', 'up', 'down', 'left', 'right'];

  function isFocusKey(event) {
    return FOCUS_KEYS.indexOf(keycode(event)) > -1;
  }

  var handleKeyUpEvent = function handleKeyUpEvent(event) {
    if (isFocusKey(event)) {
      internal.focusKeyPressed = true; // Let's consider that the user is using a keyboard during a window frame of 1s.

      clearTimeout(internal.keyUpEventTimeout);
      internal.keyUpEventTimeout = setTimeout(function () {
        internal.focusKeyPressed = false;
      }, 1e3);
    }
  };

  function listenForFocusKeys(win) {
    // The event listener will only be added once per window.
    // Duplicate event listeners will be ignored by addEventListener.
    // Also, this logic is client side only, we don't need a teardown.
    win.addEventListener('keyup', handleKeyUpEvent);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  var arrayWithoutHoles = _arrayWithoutHoles;

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  var iterableToArray = _iterableToArray;

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var nonIterableSpread = _nonIterableSpread;

  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
  }

  var toConsumableArray = _toConsumableArray;

  var ChildMapping = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.getChildMapping = getChildMapping;
  exports.mergeChildMappings = mergeChildMappings;



  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */
  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && (0, React__default.isValidElement)(child) ? mapFn(child) : child;
    };

    var result = Object.create(null);
    if (children) React__default.Children.map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
    return result;
  }

  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */
  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    }

    // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = Object.create(null);

    var pendingKeys = [];
    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i = void 0;
    var childMapping = {};
    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    }

    // Finally, add the keys which didn't appear before any key in `next`
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }
  });

  unwrapExports(ChildMapping);
  var ChildMapping_1 = ChildMapping.getChildMapping;
  var ChildMapping_2 = ChildMapping.mergeChildMappings;

  var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _react2 = _interopRequireDefault(React__default);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var values = Object.values || function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };

  var propTypes$$1 = {
    /**
     * `<TransitionGroup>` renders a `<div>` by default. You can change this
     * behavior by providing a `component` prop.
     * If you use React v16+ and would like to avoid a wrapping `<div>` element
     * you can pass in `component={null}`. This is useful if the wrapping div
     * borks your css styles.
     */
    component: _propTypes2.default.any,
    /**
     * A set of `<Transition>` components, that are toggled `in` and out as they
     * leave. the `<TransitionGroup>` will inject specific transition props, so
     * remember to spread them through if you are wrapping the `<Transition>` as
     * with our `<Fade>` example.
     */
    children: _propTypes2.default.node,

    /**
     * A convenience prop that enables or disables appear animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    appear: _propTypes2.default.bool,
    /**
     * A convenience prop that enables or disables enter animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    enter: _propTypes2.default.bool,
    /**
      * A convenience prop that enables or disables exit animations
      * for all children. Note that specifying this will override any defaults set
      * on individual children Transitions.
      */
    exit: _propTypes2.default.bool,

    /**
     * You may need to apply reactive updates to a child as it is exiting.
     * This is generally done by using `cloneElement` however in the case of an exiting
     * child the element has already been removed and not accessible to the consumer.
     *
     * If you do need to update a child as it leaves you can provide a `childFactory`
     * to wrap every child, even the ones that are leaving.
     *
     * @type Function(child: ReactElement) -> ReactElement
     */
    childFactory: _propTypes2.default.func
  };

  var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
      return child;
    }
  };

  /**
   * The `<TransitionGroup>` component manages a set of `<Transition>` components
   * in a list. Like with the `<Transition>` component, `<TransitionGroup>`, is a
   * state machine for managing the mounting and unmounting of components over
   * time.
   *
   * Consider the example below using the `Fade` CSS transition from before.
   * As items are removed or added to the TodoList the `in` prop is toggled
   * automatically by the `<TransitionGroup>`. You can use _any_ `<Transition>`
   * component in a `<TransitionGroup>`, not just css.
   *
   * ## Example
   *
   * <iframe src="https://codesandbox.io/embed/00rqyo26kn?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual `<Transition>`
   * components. This means you can mix and match animations across different
   * list items.
   */

  var TransitionGroup = function (_React$Component) {
    _inherits(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      _classCallCheck(this, TransitionGroup);

      // Initial children should all be entering, dependent on appear
      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

      _this.state = {
        children: (0, ChildMapping.getChildMapping)(props.children, function (child) {
          return (0, React__default.cloneElement)(child, {
            onExited: _this.handleExited.bind(_this, child),
            in: true,
            appear: _this.getProp(child, 'appear'),
            enter: _this.getProp(child, 'enter'),
            exit: _this.getProp(child, 'exit')
          });
        })
      };
      return _this;
    }

    TransitionGroup.prototype.getChildContext = function getChildContext() {
      return {
        transitionGroup: { isMounting: !this.appeared }
      };
    };
    // use child config unless explictly set by the Group


    TransitionGroup.prototype.getProp = function getProp(child, prop) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props;

      return props[prop] != null ? props[prop] : child.props[prop];
    };

    TransitionGroup.prototype.componentDidMount = function componentDidMount() {
      this.appeared = true;
    };

    TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var prevChildMapping = this.state.children;
      var nextChildMapping = (0, ChildMapping.getChildMapping)(nextProps.children);

      var children = (0, ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping);

      Object.keys(children).forEach(function (key) {
        var child = children[key];

        if (!(0, React__default.isValidElement)(child)) return;

        var hasPrev = key in prevChildMapping;
        var hasNext = key in nextChildMapping;

        var prevChild = prevChildMapping[key];
        var isLeaving = (0, React__default.isValidElement)(prevChild) && !prevChild.props.in;

        // item is new (entering)
        if (hasNext && (!hasPrev || isLeaving)) {
          // console.log('entering', key)
          children[key] = (0, React__default.cloneElement)(child, {
            onExited: _this2.handleExited.bind(_this2, child),
            in: true,
            exit: _this2.getProp(child, 'exit', nextProps),
            enter: _this2.getProp(child, 'enter', nextProps)
          });
        }
        // item is old (exiting)
        else if (!hasNext && hasPrev && !isLeaving) {
            // console.log('leaving', key)
            children[key] = (0, React__default.cloneElement)(child, { in: false });
          }
          // item hasn't changed transition states
          // copy over the last transition props;
          else if (hasNext && hasPrev && (0, React__default.isValidElement)(prevChild)) {
              // console.log('unchanged', key)
              children[key] = (0, React__default.cloneElement)(child, {
                onExited: _this2.handleExited.bind(_this2, child),
                in: prevChild.props.in,
                exit: _this2.getProp(child, 'exit', nextProps),
                enter: _this2.getProp(child, 'enter', nextProps)
              });
            }
      });

      this.setState({ children: children });
    };

    TransitionGroup.prototype.handleExited = function handleExited(child, node) {
      var currentChildMapping = (0, ChildMapping.getChildMapping)(this.props.children);

      if (child.key in currentChildMapping) return;

      if (child.props.onExited) {
        child.props.onExited(node);
      }

      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return { children: children };
      });
    };

    TransitionGroup.prototype.render = function render() {
      var _props = this.props,
          Component = _props.component,
          childFactory = _props.childFactory,
          props = _objectWithoutProperties(_props, ['component', 'childFactory']);

      var children = values(this.state.children).map(childFactory);

      delete props.appear;
      delete props.enter;
      delete props.exit;

      if (Component === null) {
        return children;
      }
      return _react2.default.createElement(
        Component,
        props,
        children
      );
    };

    return TransitionGroup;
  }(_react2.default.Component);

  TransitionGroup.childContextTypes = {
    transitionGroup: _propTypes2.default.object.isRequired
  };


  TransitionGroup.propTypes = propTypes$$1;
  TransitionGroup.defaultProps = defaultProps;

  exports.default = TransitionGroup;
  module.exports = exports['default'];
  });

  var TransitionGroup = unwrapExports(TransitionGroup_1);

  /**
   * @ignore - internal component.
   */

  var Ripple =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Ripple, _React$Component);

    function Ripple() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, Ripple);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = Ripple.__proto__ || Object.getPrototypeOf(Ripple)).call.apply(_ref, [this].concat(args))), _this.state = {
        visible: false,
        leaving: false
      }, _this.handleEnter = function () {
        _this.setState({
          visible: true
        });
      }, _this.handleExit = function () {
        _this.setState({
          leaving: true
        });
      }, _temp));
    }

    createClass(Ripple, [{
      key: "render",
      value: function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            classes = _props.classes,
            classNameProp = _props.className,
            pulsate = _props.pulsate,
            rippleX = _props.rippleX,
            rippleY = _props.rippleY,
            rippleSize = _props.rippleSize,
            other = objectWithoutProperties(_props, ["classes", "className", "pulsate", "rippleX", "rippleY", "rippleSize"]);

        var _state = this.state,
            visible = _state.visible,
            leaving = _state.leaving;
        var rippleClassName = classnames(classes.ripple, (_classNames = {}, defineProperty(_classNames, classes.rippleVisible, visible), defineProperty(_classNames, classes.ripplePulsate, pulsate), _classNames), classNameProp);
        var rippleStyles = {
          width: rippleSize,
          height: rippleSize,
          top: -(rippleSize / 2) + rippleY,
          left: -(rippleSize / 2) + rippleX
        };
        var childClassName = classnames(classes.child, (_classNames2 = {}, defineProperty(_classNames2, classes.childLeaving, leaving), defineProperty(_classNames2, classes.childPulsate, pulsate), _classNames2));
        return React__default.createElement(Transition, _extends_1({
          onEnter: this.handleEnter,
          onExit: this.handleExit
        }, other), React__default.createElement("span", {
          className: rippleClassName,
          style: rippleStyles
        }, React__default.createElement("span", {
          className: childClassName
        })));
      }
    }]);

    return Ripple;
  }(React__default.Component);

  Ripple.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
     */
    pulsate: propTypes.bool,

    /**
     * Diameter of the ripple.
     */
    rippleSize: propTypes.number,

    /**
     * Horizontal position of the ripple center.
     */
    rippleX: propTypes.number,

    /**
     * Vertical position of the ripple center.
     */
    rippleY: propTypes.number
  };
  Ripple.defaultProps = {
    pulsate: false
  };

  var DURATION = 550;
  var DELAY_RIPPLE = 80;
  var styles$7 = function styles(theme) {
    return {
      root: {
        display: 'block',
        position: 'absolute',
        overflow: 'hidden',
        borderRadius: 'inherit',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        zIndex: 0
      },
      ripple: {
        width: 50,
        height: 50,
        left: 0,
        top: 0,
        opacity: 0,
        position: 'absolute'
      },
      rippleVisible: {
        opacity: 0.3,
        transform: 'scale(1)',
        animation: "mui-ripple-enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
      },
      ripplePulsate: {
        animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
      },
      child: {
        opacity: 1,
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: 'currentColor'
      },
      childLeaving: {
        opacity: 0,
        animation: "mui-ripple-exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
      },
      childPulsate: {
        position: 'absolute',
        left: 0,
        top: 0,
        animation: "mui-ripple-pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
      },
      '@keyframes mui-ripple-enter': {
        '0%': {
          transform: 'scale(0)',
          opacity: 0.1
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 0.3
        }
      },
      '@keyframes mui-ripple-exit': {
        '0%': {
          opacity: 1
        },
        '100%': {
          opacity: 0
        }
      },
      '@keyframes mui-ripple-pulsate': {
        '0%': {
          transform: 'scale(1)'
        },
        '50%': {
          transform: 'scale(0.92)'
        },
        '100%': {
          transform: 'scale(1)'
        }
      }
    };
  };

  var TouchRipple =
  /*#__PURE__*/
  function (_React$PureComponent) {
    inherits(TouchRipple, _React$PureComponent);

    function TouchRipple() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, TouchRipple);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = TouchRipple.__proto__ || Object.getPrototypeOf(TouchRipple)).call.apply(_ref, [this].concat(args))), _this.state = {
        nextKey: 0,
        ripples: []
      }, _this.ignoringMouseDown = false, _this.startTimer = null, _this.startTimerCommit = null, _this.pulsate = function () {
        _this.start({}, {
          pulsate: true
        });
      }, _this.start = function () {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var cb = arguments.length > 2 ? arguments[2] : undefined;
        var _options$pulsate = options.pulsate,
            pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
            _options$center = options.center,
            center = _options$center === void 0 ? _this.props.center || options.pulsate : _options$center,
            _options$fakeElement = options.fakeElement,
            fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

        if (event.type === 'mousedown' && _this.ignoringMouseDown) {
          _this.ignoringMouseDown = false;
          return;
        }

        if (event.type === 'touchstart') {
          _this.ignoringMouseDown = true;
        }

        var element = fakeElement ? null : ReactDOM.findDOMNode(assertThisInitialized(_this));
        var rect = element ? element.getBoundingClientRect() : {
          width: 0,
          height: 0,
          left: 0,
          top: 0
        }; // Get the size of the ripple

        var rippleX;
        var rippleY;
        var rippleSize;

        if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
          rippleX = Math.round(rect.width / 2);
          rippleY = Math.round(rect.height / 2);
        } else {
          var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
          var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
          rippleX = Math.round(clientX - rect.left);
          rippleY = Math.round(clientY - rect.top);
        }

        if (center) {
          rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

          if (rippleSize % 2 === 0) {
            rippleSize += 1;
          }
        } else {
          var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
          var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
          rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
        } // Touche devices


        if (event.touches) {
          // Prepare the ripple effect.
          _this.startTimerCommit = function () {
            _this.startCommit({
              pulsate: pulsate,
              rippleX: rippleX,
              rippleY: rippleY,
              rippleSize: rippleSize,
              cb: cb
            });
          }; // Deplay the execution of the ripple effect.


          _this.startTimer = setTimeout(function () {
            _this.startTimerCommit();

            _this.startTimerCommit = null;
          }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
        } else {
          _this.startCommit({
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize,
            cb: cb
          });
        }
      }, _this.startCommit = function (params) {
        var pulsate = params.pulsate,
            rippleX = params.rippleX,
            rippleY = params.rippleY,
            rippleSize = params.rippleSize,
            cb = params.cb;
        var ripples = _this.state.ripples; // Add a ripple to the ripples array.

        ripples = toConsumableArray(ripples).concat([React__default.createElement(Ripple, {
          key: _this.state.nextKey,
          classes: _this.props.classes,
          timeout: {
            exit: DURATION,
            enter: DURATION
          },
          pulsate: pulsate,
          rippleX: rippleX,
          rippleY: rippleY,
          rippleSize: rippleSize
        })]);

        _this.setState({
          nextKey: _this.state.nextKey + 1,
          ripples: ripples
        }, cb);
      }, _this.stop = function (event, cb) {
        clearTimeout(_this.startTimer);
        var ripples = _this.state.ripples; // The touch interaction occures to quickly.
        // We still want to show ripple effect.

        if (event.type === 'touchend' && _this.startTimerCommit) {
          event.persist();

          _this.startTimerCommit();

          _this.startTimerCommit = null;
          _this.startTimer = setTimeout(function () {
            _this.stop(event, cb);
          }, 0);
          return;
        }

        _this.startTimerCommit = null;

        if (ripples && ripples.length) {
          _this.setState({
            ripples: ripples.slice(1)
          }, cb);
        }
      }, _temp));
    }

    createClass(TouchRipple, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.startTimer);
      } // Used to filter out mouse emulated events on mobile.

    }, {
      key: "render",
      value: function render() {
        var _props = this.props,
            center = _props.center,
            classes = _props.classes,
            className = _props.className,
            other = objectWithoutProperties(_props, ["center", "classes", "className"]);

        return React__default.createElement(TransitionGroup, _extends_1({
          component: "span",
          enter: true,
          exit: true,
          className: classnames(classes.root, className)
        }, other), this.state.ripples);
      }
    }]);

    return TouchRipple;
  }(React__default.PureComponent);

  TouchRipple.propTypes = {
    /**
     * If `true`, the ripple starts at the center of the component
     * rather than at the point of interaction.
     */
    center: propTypes.bool,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string
  };
  TouchRipple.defaultProps = {
    center: false
  };
  var TouchRipple$1 = withStyles(styles$7, {
    flip: false,
    name: 'MuiTouchRipple'
  })(TouchRipple);

  function createRippleHandler(instance, eventName, action, cb) {
    return function handleEvent(event) {
      if (cb) {
        cb.call(instance, event);
      }

      if (event.defaultPrevented) {
        return false;
      }

      if (instance.ripple) {
        instance.ripple[action](event);
      }

      if (instance.props && typeof instance.props["on".concat(eventName)] === 'function') {
        instance.props["on".concat(eventName)](event);
      }

      return true;
    };
  }

  var styles$8 = {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      backgroundColor: 'transparent',
      // Reset default value
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 'none',
      border: 0,
      margin: 0,
      // Remove the margin in Safari
      borderRadius: 0,
      padding: 0,
      // Remove the padding in Firefox
      cursor: 'pointer',
      userSelect: 'none',
      verticalAlign: 'middle',
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      textDecoration: 'none',
      // So we take precedent over the style of a native <a /> element.
      color: 'inherit',
      '&::-moz-focus-inner': {
        borderStyle: 'none' // Remove Firefox dotted outline.

      },
      '&$disabled': {
        pointerEvents: 'none',
        // Disable link interactions
        cursor: 'default'
      }
    },
    disabled: {},
    focusVisible: {}
  };
  /**
   * `ButtonBase` contains as few styles as possible.
   * It aims to be a simple building block for creating a button.
   * It contains a load of style reset and some focus/ripple logic.
   */

  var ButtonBase =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(ButtonBase, _React$Component);

    function ButtonBase() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, ButtonBase);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = ButtonBase.__proto__ || Object.getPrototypeOf(ButtonBase)).call.apply(_ref, [this].concat(args))), _this.state = {}, _this.onFocusVisibleHandler = function (event) {
        _this.keyDown = false;

        _this.setState({
          focusVisible: true
        });

        if (_this.props.onFocusVisible) {
          _this.props.onFocusVisible(event);
        }
      }, _this.onRippleRef = function (node) {
        _this.ripple = node;
      }, _this.ripple = null, _this.keyDown = false, _this.button = null, _this.focusVisibleTimeout = null, _this.focusVisibleCheckTime = 50, _this.focusVisibleMaxCheckTimes = 5, _this.handleKeyDown = function (event) {
        var _this$props = _this.props,
            component = _this$props.component,
            focusRipple = _this$props.focusRipple,
            onKeyDown = _this$props.onKeyDown,
            onClick = _this$props.onClick;
        var key = keycode(event); // Check if key is already down to avoid repeats being counted as multiple activations

        if (focusRipple && !_this.keyDown && _this.state.focusVisible && _this.ripple && key === 'space') {
          _this.keyDown = true;
          event.persist();

          _this.ripple.stop(event, function () {
            _this.ripple.start(event);
          });
        }

        if (onKeyDown) {
          onKeyDown(event);
        } // Keyboard accessibility for non interactive elements


        if (event.target === event.currentTarget && component && component !== 'button' && (key === 'space' || key === 'enter') && !(_this.button.tagName === 'A' && _this.button.href)) {
          event.preventDefault();

          if (onClick) {
            onClick(event);
          }
        }
      }, _this.handleKeyUp = function (event) {
        if (_this.props.focusRipple && keycode(event) === 'space' && _this.ripple && _this.state.focusVisible) {
          _this.keyDown = false;
          event.persist();

          _this.ripple.stop(event, function () {
            _this.ripple.pulsate(event);
          });
        }

        if (_this.props.onKeyUp) {
          _this.props.onKeyUp(event);
        }
      }, _this.handleMouseDown = createRippleHandler(assertThisInitialized(_this), 'MouseDown', 'start', function () {
        clearTimeout(_this.focusVisibleTimeout);

        if (_this.state.focusVisible) {
          _this.setState({
            focusVisible: false
          });
        }
      }), _this.handleMouseUp = createRippleHandler(assertThisInitialized(_this), 'MouseUp', 'stop'), _this.handleMouseLeave = createRippleHandler(assertThisInitialized(_this), 'MouseLeave', 'stop', function (event) {
        if (_this.state.focusVisible) {
          event.preventDefault();
        }
      }), _this.handleTouchStart = createRippleHandler(assertThisInitialized(_this), 'TouchStart', 'start'), _this.handleTouchEnd = createRippleHandler(assertThisInitialized(_this), 'TouchEnd', 'stop'), _this.handleTouchMove = createRippleHandler(assertThisInitialized(_this), 'TouchMove', 'stop'), _this.handleBlur = createRippleHandler(assertThisInitialized(_this), 'Blur', 'stop', function () {
        clearTimeout(_this.focusVisibleTimeout);

        if (_this.state.focusVisible) {
          _this.setState({
            focusVisible: false
          });
        }
      }), _this.handleFocus = function (event) {
        if (_this.props.disabled) {
          return;
        } // Fix for https://github.com/facebook/react/issues/7769


        if (!_this.button) {
          _this.button = event.currentTarget;
        }

        event.persist();
        detectFocusVisible(assertThisInitialized(_this), _this.button, function () {
          _this.onFocusVisibleHandler(event);
        });

        if (_this.props.onFocus) {
          _this.props.onFocus(event);
        }
      }, _temp));
    }

    createClass(ButtonBase, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.button = ReactDOM.findDOMNode(this);
        listenForFocusKeys(ownerWindow(this.button));

        if (this.props.action) {
          this.props.action({
            focusVisible: function focusVisible() {
              _this2.setState({
                focusVisible: true
              });

              _this2.button.focus();
            }
          });
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (this.props.focusRipple && !this.props.disableRipple && !prevState.focusVisible && this.state.focusVisible) {
          this.ripple.pulsate();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.button = null;
        clearTimeout(this.focusVisibleTimeout);
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames;

        var _props = this.props,
            action = _props.action,
            buttonRef = _props.buttonRef,
            centerRipple = _props.centerRipple,
            children = _props.children,
            classes = _props.classes,
            classNameProp = _props.className,
            component = _props.component,
            disabled = _props.disabled,
            disableRipple = _props.disableRipple,
            focusRipple = _props.focusRipple,
            focusVisibleClassName = _props.focusVisibleClassName,
            onBlur = _props.onBlur,
            onFocus = _props.onFocus,
            onFocusVisible = _props.onFocusVisible,
            onKeyDown = _props.onKeyDown,
            onKeyUp = _props.onKeyUp,
            onMouseDown = _props.onMouseDown,
            onMouseLeave = _props.onMouseLeave,
            onMouseUp = _props.onMouseUp,
            onTouchEnd = _props.onTouchEnd,
            onTouchMove = _props.onTouchMove,
            onTouchStart = _props.onTouchStart,
            tabIndex = _props.tabIndex,
            TouchRippleProps = _props.TouchRippleProps,
            type = _props.type,
            other = objectWithoutProperties(_props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"]);

        var className = classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.disabled, disabled), defineProperty(_classNames, classes.focusVisible, this.state.focusVisible), defineProperty(_classNames, focusVisibleClassName, this.state.focusVisible), _classNames), classNameProp);
        var buttonProps = {};
        var ComponentProp = component;

        if (ComponentProp === 'button' && other.href) {
          ComponentProp = 'a';
        }

        if (ComponentProp === 'button') {
          buttonProps.type = type || 'button';
          buttonProps.disabled = disabled;
        } else {
          buttonProps.role = 'button';
        }

        return React__default.createElement(ComponentProp, _extends_1({
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onMouseDown: this.handleMouseDown,
          onMouseLeave: this.handleMouseLeave,
          onMouseUp: this.handleMouseUp,
          onTouchEnd: this.handleTouchEnd,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          tabIndex: disabled ? '-1' : tabIndex,
          className: className,
          ref: buttonRef
        }, buttonProps, other), children, !disableRipple && !disabled ? React__default.createElement(TouchRipple$1, _extends_1({
          innerRef: this.onRippleRef,
          center: centerRipple
        }, TouchRippleProps)) : null);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        if (typeof prevState.focusVisible === 'undefined') {
          return {
            focusVisible: false,
            lastDisabled: nextProps.disabled
          };
        } // The blur won't fire when the disabled state is set on a focused input.
        // We need to book keep the focused state manually.


        if (!prevState.prevState && nextProps.disabled && prevState.focusVisible) {
          return {
            focusVisible: false,
            lastDisabled: nextProps.disabled
          };
        }

        return {
          lastDisabled: nextProps.disabled
        };
      }
    }]);

    return ButtonBase;
  }(React__default.Component);

  ButtonBase.propTypes = {
    /**
     * Callback fired when the component mounts.
     * This is useful when you want to trigger an action programmatically.
     * It currently only supports `focusVisible()` action.
     *
     * @param {object} actions This object contains all possible actions
     * that can be triggered programmatically.
     */
    action: propTypes.func,

    /**
     * Use that property to pass a ref callback to the native button component.
     */
    buttonRef: propTypes.oneOfType([propTypes.func, propTypes.object]),

    /**
     * If `true`, the ripples will be centered.
     * They won't start at the cursor interaction position.
     */
    centerRipple: propTypes.bool,

    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * If `true`, the base button will be disabled.
     */
    disabled: propTypes.bool,

    /**
     * If `true`, the ripple effect will be disabled.
     */
    disableRipple: propTypes.bool,

    /**
     * If `true`, the base button will have a keyboard focus ripple.
     * `disableRipple` must also be `false`.
     */
    focusRipple: propTypes.bool,

    /**
     * This property can help a person know which element has the keyboard focus.
     * The class name will be applied when the element gain the focus throught a keyboard interaction.
     * It's a polyfill for the [CSS :focus-visible feature](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
     * The rational for using this feature [is explain here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
     */
    focusVisibleClassName: propTypes.string,

    /**
     * @ignore
     */
    onBlur: propTypes.func,

    /**
     * @ignore
     */
    onClick: propTypes.func,

    /**
     * @ignore
     */
    onFocus: propTypes.func,

    /**
     * Callback fired when the component is focused with a keyboard.
     * We trigger a `onFocus` callback too.
     */
    onFocusVisible: propTypes.func,

    /**
     * @ignore
     */
    onKeyDown: propTypes.func,

    /**
     * @ignore
     */
    onKeyUp: propTypes.func,

    /**
     * @ignore
     */
    onMouseDown: propTypes.func,

    /**
     * @ignore
     */
    onMouseLeave: propTypes.func,

    /**
     * @ignore
     */
    onMouseUp: propTypes.func,

    /**
     * @ignore
     */
    onTouchEnd: propTypes.func,

    /**
     * @ignore
     */
    onTouchMove: propTypes.func,

    /**
     * @ignore
     */
    onTouchStart: propTypes.func,

    /**
     * @ignore
     */
    role: propTypes.string,

    /**
     * @ignore
     */
    tabIndex: propTypes.oneOfType([propTypes.number, propTypes.string]),

    /**
     * Properties applied to the `TouchRipple` element.
     */
    TouchRippleProps: propTypes.object,

    /**
     * @ignore
     */
    type: propTypes.string
  };
  ButtonBase.defaultProps = {
    centerRipple: false,
    component: 'button',
    disableRipple: false,
    focusRipple: false,
    tabIndex: '0',
    type: 'button'
  };
  var ButtonBase$1 = withStyles(styles$8, {
    name: 'MuiButtonBase'
  })(ButtonBase);

  var styles$9 = function styles(theme) {
    return {
      root: {
        transition: theme.transitions.create(['color', 'padding-top'], {
          duration: theme.transitions.duration.short
        }),
        paddingTop: theme.spacing.unit,
        paddingBottom: 10,
        paddingLeft: 12,
        paddingRight: 12,
        minWidth: 80,
        maxWidth: 168,
        color: theme.palette.text.secondary,
        flex: '1',
        '&$iconOnly': {
          paddingTop: theme.spacing.unit * 2
        },
        '&$selected': {
          paddingTop: 6,
          color: theme.palette.primary.main
        }
      },
      selected: {},
      iconOnly: {},
      wrapper: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column'
      },
      label: {
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(12),
        opacity: 1,
        transition: 'font-size 0.2s, opacity 0.2s',
        transitionDelay: '0.1s',
        '&$iconOnly': {
          opacity: 0,
          transitionDelay: '0s'
        },
        '&$selected': {
          fontSize: theme.typography.pxToRem(14)
        }
      }
    };
  };

  var BottomNavigationAction =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(BottomNavigationAction, _React$Component);

    function BottomNavigationAction() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, BottomNavigationAction);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = BottomNavigationAction.__proto__ || Object.getPrototypeOf(BottomNavigationAction)).call.apply(_ref, [this].concat(args))), _this.handleChange = function (event) {
        var _this$props = _this.props,
            onChange = _this$props.onChange,
            value = _this$props.value,
            onClick = _this$props.onClick;

        if (onChange) {
          onChange(event, value);
        }

        if (onClick) {
          onClick(event);
        }
      }, _temp));
    }

    createClass(BottomNavigationAction, [{
      key: "render",
      value: function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            classes = _props.classes,
            classNameProp = _props.className,
            icon = _props.icon,
            label = _props.label,
            onChange = _props.onChange,
            onClick = _props.onClick,
            selected = _props.selected,
            showLabelProp = _props.showLabel,
            value = _props.value,
            other = objectWithoutProperties(_props, ["classes", "className", "icon", "label", "onChange", "onClick", "selected", "showLabel", "value"]);

        var className = classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.selected, selected), defineProperty(_classNames, classes.iconOnly, !showLabelProp && !selected), _classNames), classNameProp);
        var labelClassName = classnames(classes.label, (_classNames2 = {}, defineProperty(_classNames2, classes.selected, selected), defineProperty(_classNames2, classes.iconOnly, !showLabelProp && !selected), _classNames2));
        return React__default.createElement(ButtonBase$1, _extends_1({
          className: className,
          focusRipple: true,
          onClick: this.handleChange
        }, other), React__default.createElement("span", {
          className: classes.wrapper
        }, icon, React__default.createElement("span", {
          className: labelClassName
        }, label)));
      }
    }]);

    return BottomNavigationAction;
  }(React__default.Component);

  BottomNavigationAction.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The icon element.
     */
    icon: propTypes.node,

    /**
     * The label element.
     */
    label: propTypes.node,

    /**
     * @ignore
     */
    onChange: propTypes.func,

    /**
     * @ignore
     */
    onClick: propTypes.func,

    /**
     * @ignore
     */
    selected: propTypes.bool,

    /**
     * If `true`, the BottomNavigationAction will show its label.
     */
    showLabel: propTypes.bool,

    /**
     * You can provide your own value. Otherwise, we fallback to the child position index.
     */
    value: propTypes.any
  };
  var BottomNavigationAction$1 = withStyles(styles$9, {
    name: 'MuiBottomNavigationAction'
  })(BottomNavigationAction);

  var styles$10 = function styles(theme) {
    return {
      root: objectSpread({}, theme.typography.button, {
        lineHeight: '1.4em',
        // Improve readability for multiline button.
        boxSizing: 'border-box',
        minWidth: theme.spacing.unit * 11,
        minHeight: 36,
        padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 2, "px"),
        borderRadius: 2,
        color: theme.palette.text.primary,
        transition: theme.transitions.create(['background-color', 'box-shadow'], {
          duration: theme.transitions.duration.short
        }),
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          },
          '&$disabled': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      }),
      label: {
        width: '100%',
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit'
      },
      flatPrimary: {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      flatSecondary: {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      outlined: {
        border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
        borderRadius: 4
      },
      colorInherit: {
        color: 'inherit'
      },
      raised: {
        color: theme.palette.getContrastText(theme.palette.grey[300]),
        backgroundColor: theme.palette.grey[300],
        boxShadow: theme.shadows[2],
        '&$focusVisible': {
          boxShadow: theme.shadows[6]
        },
        '&:active': {
          boxShadow: theme.shadows[8]
        },
        '&$disabled': {
          color: theme.palette.action.disabled,
          boxShadow: theme.shadows[0],
          backgroundColor: theme.palette.action.disabledBackground
        },
        '&:hover': {
          backgroundColor: theme.palette.grey.A100,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.grey[300]
          },
          '&$disabled': {
            backgroundColor: theme.palette.action.disabledBackground
          }
        }
      },
      raisedPrimary: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.primary.main
          }
        }
      },
      raisedSecondary: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.secondary.main
          }
        }
      },
      focusVisible: {},
      disabled: {},
      fab: {
        borderRadius: '50%',
        padding: 0,
        minWidth: 0,
        width: 56,
        fontSize: 24,
        height: 56,
        boxShadow: theme.shadows[6],
        '&:active': {
          boxShadow: theme.shadows[12]
        }
      },
      mini: {
        width: 40,
        height: 40
      },
      sizeSmall: {
        padding: "".concat(theme.spacing.unit - 1, "px ").concat(theme.spacing.unit, "px"),
        minWidth: theme.spacing.unit * 8,
        minHeight: 32,
        fontSize: theme.typography.pxToRem(13)
      },
      sizeLarge: {
        padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 3, "px"),
        minWidth: theme.spacing.unit * 14,
        minHeight: 40,
        fontSize: theme.typography.pxToRem(15)
      },
      fullWidth: {
        width: '100%'
      }
    };
  };

  function Button(props) {
    var _classNames;

    var children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        color = props.color,
        disabled = props.disabled,
        disableFocusRipple = props.disableFocusRipple,
        fullWidth = props.fullWidth,
        focusVisibleClassName = props.focusVisibleClassName,
        mini = props.mini,
        size = props.size,
        variant = props.variant,
        other = objectWithoutProperties(props, ["children", "classes", "className", "color", "disabled", "disableFocusRipple", "fullWidth", "focusVisibleClassName", "mini", "size", "variant"]);

    var fab = variant === 'fab';
    var raised = variant === 'raised';
    var flat = !raised && !fab;
    var className = classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.raised, raised || fab), defineProperty(_classNames, classes.fab, fab), defineProperty(_classNames, classes.mini, fab && mini), defineProperty(_classNames, classes.colorInherit, color === 'inherit'), defineProperty(_classNames, classes.flatPrimary, flat && color === 'primary'), defineProperty(_classNames, classes.flatSecondary, flat && color === 'secondary'), defineProperty(_classNames, classes.raisedPrimary, !flat && color === 'primary'), defineProperty(_classNames, classes.raisedSecondary, !flat && color === 'secondary'), defineProperty(_classNames, classes.outlined, variant === 'outlined'), defineProperty(_classNames, classes["size".concat(capitalize(size))], size !== 'medium'), defineProperty(_classNames, classes.disabled, disabled), defineProperty(_classNames, classes.fullWidth, fullWidth), _classNames), classNameProp);
    return React__default.createElement(ButtonBase$1, _extends_1({
      className: className,
      disabled: disabled,
      focusRipple: !disableFocusRipple,
      focusVisibleClassName: classnames(classes.focusVisible, focusVisibleClassName)
    }, other), React__default.createElement("span", {
      className: classes.label
    }, children));
  }

  Button.propTypes = {
    /**
     * The content of the button.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: propTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * If `true`, the button will be disabled.
     */
    disabled: propTypes.bool,

    /**
     * If `true`, the  keyboard focus ripple will be disabled.
     * `disableRipple` must also be true.
     */
    disableFocusRipple: propTypes.bool,

    /**
     * If `true`, the ripple effect will be disabled.
     */
    disableRipple: propTypes.bool,

    /**
     * @ignore
     */
    focusVisibleClassName: propTypes.string,

    /**
     * If `true`, the button will take up the full width of its container.
     */
    fullWidth: propTypes.bool,

    /**
     * The URL to link to when the button is clicked.
     * If defined, an `a` element will be used as the root node.
     */
    href: propTypes.string,

    /**
     * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
     */
    mini: propTypes.bool,

    /**
     * The size of the button.
     * `small` is equivalent to the dense button styling.
     */
    size: propTypes.oneOf(['small', 'medium', 'large']),

    /**
     * @ignore
     */
    type: propTypes.string,

    /**
     * The type of button.
     */
    variant: propTypes.oneOf(['flat', 'outlined', 'raised', 'fab'])
  };
  Button.defaultProps = {
    color: 'default',
    component: 'button',
    disabled: false,
    disableFocusRipple: false,
    fullWidth: false,
    mini: false,
    size: 'medium',
    type: 'button',
    variant: 'flat'
  };
  var Button$1 = withStyles(styles$10, {
    name: 'MuiButton'
  })(Button);

  var styles$11 = {
    root: {
      overflow: 'hidden'
    }
  };

  function Card(props) {
    var classes = props.classes,
        className = props.className,
        raised = props.raised,
        other = objectWithoutProperties(props, ["classes", "className", "raised"]);

    return React__default.createElement(Paper$1, _extends_1({
      className: classnames(classes.root, className),
      elevation: raised ? 8 : 2
    }, other));
  }

  Card.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * If `true`, the card will use raised styling.
     */
    raised: propTypes.bool
  };
  Card.defaultProps = {
    raised: false
  };
  var Card$1 = withStyles(styles$11, {
    name: 'MuiCard'
  })(Card);

  /* eslint-disable import/prefer-default-export */
  function cloneElementWithClassName(child, className) {
    return React__default.cloneElement(child, {
      className: classnames(child.props.className, className)
    });
  }
  function cloneChildrenWithClassName(children, className) {
    return React__default.Children.map(children, function (child) {
      return React__default.isValidElement(child) && cloneElementWithClassName(child, className);
    });
  }
  function isMuiElement(element, muiNames) {
    return React__default.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
  }

  var styles$12 = function styles(theme) {
    return {
      root: defineProperty({
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit / 2, "px")
      }, theme.breakpoints.up('sm'), {
        padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 1.5, "px")
      }),
      action: {
        margin: "0 ".concat(theme.spacing.unit / 2, "px")
      }
    };
  };

  function CardActions(props) {
    var disableActionSpacing = props.disableActionSpacing,
        children = props.children,
        classes = props.classes,
        className = props.className,
        other = objectWithoutProperties(props, ["disableActionSpacing", "children", "classes", "className"]);

    return React__default.createElement("div", _extends_1({
      className: classnames(classes.root, className)
    }, other), disableActionSpacing ? children : cloneChildrenWithClassName(children, classes.action));
  }

  CardActions.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * If `true`, the card actions do not have additional margin.
     */
    disableActionSpacing: propTypes.bool
  };
  CardActions.defaultProps = {
    disableActionSpacing: false
  };
  var CardActions$1 = withStyles(styles$12, {
    name: 'MuiCardActions'
  })(CardActions);

  var styles$13 = function styles(theme) {
    return {
      root: theme.mixins.gutters({
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        '&:last-child': {
          paddingBottom: theme.spacing.unit * 3
        }
      })
    };
  };

  function CardContent(props) {
    var classes = props.classes,
        className = props.className,
        Component = props.component,
        other = objectWithoutProperties(props, ["classes", "className", "component"]);

    return React__default.createElement(Component, _extends_1({
      className: classnames(classes.root, className)
    }, other));
  }

  CardContent.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func])
  };
  CardContent.defaultProps = {
    component: 'div'
  };
  var CardContent$1 = withStyles(styles$13, {
    name: 'MuiCardContent'
  })(CardContent);

  var styles$14 = function styles(theme) {
    return {
      root: {
        display: 'block',
        margin: 0
      },
      display4: theme.typography.display4,
      display3: theme.typography.display3,
      display2: theme.typography.display2,
      display1: theme.typography.display1,
      headline: theme.typography.headline,
      title: theme.typography.title,
      subheading: theme.typography.subheading,
      body2: theme.typography.body2,
      body1: theme.typography.body1,
      caption: theme.typography.caption,
      button: theme.typography.button,
      alignLeft: {
        textAlign: 'left'
      },
      alignCenter: {
        textAlign: 'center'
      },
      alignRight: {
        textAlign: 'right'
      },
      alignJustify: {
        textAlign: 'justify'
      },
      noWrap: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      gutterBottom: {
        marginBottom: '0.35em'
      },
      paragraph: {
        marginBottom: theme.spacing.unit * 2
      },
      colorInherit: {
        color: 'inherit'
      },
      colorPrimary: {
        color: theme.palette.primary.main
      },
      colorSecondary: {
        color: theme.palette.secondary.main
      },
      colorTextSecondary: {
        color: theme.palette.text.secondary
      },
      colorError: {
        color: theme.palette.error.main
      }
    };
  };

  function Typography(props) {
    var _classNames;

    var align = props.align,
        classes = props.classes,
        classNameProp = props.className,
        componentProp = props.component,
        color = props.color,
        gutterBottom = props.gutterBottom,
        headlineMapping = props.headlineMapping,
        noWrap = props.noWrap,
        paragraph = props.paragraph,
        variant = props.variant,
        other = objectWithoutProperties(props, ["align", "classes", "className", "component", "color", "gutterBottom", "headlineMapping", "noWrap", "paragraph", "variant"]);

    var className = classnames(classes.root, classes[variant], (_classNames = {}, defineProperty(_classNames, classes["color".concat(capitalize(color))], color !== 'default'), defineProperty(_classNames, classes.noWrap, noWrap), defineProperty(_classNames, classes.gutterBottom, gutterBottom), defineProperty(_classNames, classes.paragraph, paragraph), defineProperty(_classNames, classes["align".concat(capitalize(align))], align !== 'inherit'), _classNames), classNameProp);
    var Component = componentProp || (paragraph ? 'p' : headlineMapping[variant]) || 'span';
    return React__default.createElement(Component, _extends_1({
      className: className
    }, other));
  }

  Typography.propTypes = {
    /**
     * Set the text-align on the component.
     */
    align: propTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),

    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: propTypes.oneOf(['inherit', 'primary', 'textSecondary', 'secondary', 'error', 'default']),

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     * By default, it maps the variant to a good default headline component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * If `true`, the text will have a bottom margin.
     */
    gutterBottom: propTypes.bool,

    /**
     * We are empirically mapping the variant property to a range of different DOM element types.
     * For instance, h1 to h6. If you wish to change that mapping, you can provide your own.
     * Alternatively, you can use the `component` property.
     */
    headlineMapping: propTypes.object,

    /**
     * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
     */
    noWrap: propTypes.bool,

    /**
     * If `true`, the text will have a bottom margin.
     */
    paragraph: propTypes.bool,

    /**
     * Applies the theme typography styles.
     */
    variant: propTypes.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button'])
  };
  Typography.defaultProps = {
    align: 'inherit',
    color: 'default',
    gutterBottom: false,
    headlineMapping: {
      display4: 'h1',
      display3: 'h1',
      display2: 'h1',
      display1: 'h1',
      headline: 'h1',
      title: 'h2',
      subheading: 'h3',
      body2: 'aside',
      body1: 'p'
    },
    noWrap: false,
    paragraph: false,
    variant: 'body1'
  };
  var Typography$1 = withStyles(styles$14, {
    name: 'MuiTypography'
  })(Typography);

  var styles$15 = function styles(theme) {
    return {
      root: theme.mixins.gutters({
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
      }),
      avatar: {
        flex: '0 0 auto',
        marginRight: theme.spacing.unit * 2
      },
      action: {
        flex: '0 0 auto',
        alignSelf: 'flex-start',
        marginTop: theme.spacing.unit * -1,
        marginRight: theme.spacing.unit * -2
      },
      content: {
        flex: '1 1 auto'
      },
      title: {},
      subheader: {}
    };
  };

  function CardHeader(props) {
    var action = props.action,
        avatar = props.avatar,
        classes = props.classes,
        classNameProp = props.className,
        Component = props.component,
        subheader = props.subheader,
        title = props.title,
        other = objectWithoutProperties(props, ["action", "avatar", "classes", "className", "component", "subheader", "title"]);

    return React__default.createElement(Component, _extends_1({
      className: classnames(classes.root, classNameProp)
    }, other), avatar && React__default.createElement("div", {
      className: classes.avatar
    }, avatar), React__default.createElement("div", {
      className: classes.content
    }, React__default.createElement(Typography$1, {
      variant: avatar ? 'body2' : 'headline',
      component: "span",
      className: classes.title
    }, title), subheader && React__default.createElement(Typography$1, {
      variant: avatar ? 'body2' : 'body1',
      component: "span",
      color: "textSecondary",
      className: classes.subheader
    }, subheader)), action && React__default.createElement("div", {
      className: classes.action
    }, action));
  }

  CardHeader.propTypes = {
    /**
     * The action to display in the card header.
     */
    action: propTypes.node,

    /**
     * The Avatar for the Card Header.
     */
    avatar: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * The content of the component.
     */
    subheader: propTypes.node,

    /**
     * The content of the Card Title.
     */
    title: propTypes.node
  };
  CardHeader.defaultProps = {
    component: 'div'
  };
  var CardHeader$1 = withStyles(styles$15, {
    name: 'MuiCardHeader'
  })(CardHeader);

  var styles$16 = {
    root: {
      display: 'block',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    media: {
      width: '100%'
    }
  };
  var MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];

  function CardMedia(props) {
    var classes = props.classes,
        className = props.className,
        Component = props.component,
        image = props.image,
        src = props.src,
        style = props.style,
        other = objectWithoutProperties(props, ["classes", "className", "component", "image", "src", "style"]);

    warning_1(Boolean(image || src), 'Material-UI: either `image` or `src` property must be specified.');
    var isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
    var composedStyle = !isMediaComponent && image ? objectSpread({
      backgroundImage: "url(\"".concat(image, "\")")
    }, style) : style;
    return React__default.createElement(Component, _extends_1({
      className: classnames(classes.root, defineProperty({}, classes.media, isMediaComponent), className),
      style: composedStyle,
      src: isMediaComponent ? image || src : undefined
    }, other));
  }

  CardMedia.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * Component for rendering image.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * Image to be displayed as a background image.
     * Either `image` or `src` prop must be specified.
     * Note that caller must specify height otherwise the image will not be visible.
     */
    image: propTypes.string,

    /**
     * An alias for `image` property.
     * Available only with media components.
     * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
     */
    src: propTypes.string,

    /**
     * @ignore
     */
    style: propTypes.object
  };
  CardMedia.defaultProps = {
    component: 'div'
  };
  var CardMedia$1 = withStyles(styles$16, {
    name: 'MuiCardMedia'
  })(CardMedia);

  var styles$17 = function styles(theme) {
    return {
      root: {
        textAlign: 'center',
        flex: '0 0 auto',
        fontSize: theme.typography.pxToRem(24),
        width: 48,
        height: 48,
        padding: 0,
        borderRadius: '50%',
        color: theme.palette.action.active,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shortest
        }),
        '&:hover': {
          backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          },
          '&$disabled': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      },
      colorInherit: {
        color: 'inherit'
      },
      colorPrimary: {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      colorSecondary: {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      disabled: {},
      label: {
        width: '100%',
        display: 'flex',
        alignItems: 'inherit',
        justifyContent: 'inherit'
      }
    };
  };
  /**
   * Refer to the [Icons](/style/icons) section of the documentation
   * regarding the available icon options.
   */

  function IconButton(props) {
    var _classNames;

    var children = props.children,
        classes = props.classes,
        className = props.className,
        color = props.color,
        disabled = props.disabled,
        other = objectWithoutProperties(props, ["children", "classes", "className", "color", "disabled"]);

    return React__default.createElement(ButtonBase$1, _extends_1({
      className: classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes["color".concat(capitalize(color))], color !== 'default'), defineProperty(_classNames, classes.disabled, disabled), _classNames), className),
      centerRipple: true,
      focusRipple: true,
      disabled: disabled
    }, other), React__default.createElement("span", {
      className: classes.label
    }, children));
  }

  IconButton.propTypes = {
    /**
     * The icon element.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: propTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),

    /**
     * If `true`, the button will be disabled.
     */
    disabled: propTypes.bool,

    /**
     * If `true`, the ripple will be disabled.
     */
    disableRipple: propTypes.bool
  };
  IconButton.defaultProps = {
    color: 'default',
    disabled: false
  };
  var IconButton$1 = withStyles(styles$17, {
    name: 'MuiIconButton'
  })(IconButton);

  var styles$18 = {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'none',
      '&:hover': {
        // Disable the hover effect for the IconButton.
        backgroundColor: 'transparent'
      }
    },
    checked: {},
    disabled: {},
    input: {
      cursor: 'inherit',
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0
    }
  };

  var SwitchBase =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(SwitchBase, _React$Component);

    function SwitchBase(props, context) {
      var _this;

      classCallCheck(this, SwitchBase);

      _this = possibleConstructorReturn(this, (SwitchBase.__proto__ || Object.getPrototypeOf(SwitchBase)).call(this, props, context));
      _this.state = {};
      _this.input = null;
      _this.isControlled = null;

      _this.handleInputChange = function (event) {
        var checked = event.target.checked;

        if (!_this.isControlled) {
          _this.setState({
            checked: checked
          });
        }

        if (_this.props.onChange) {
          _this.props.onChange(event, checked);
        }
      };

      _this.isControlled = props.checked != null;

      if (!_this.isControlled) {
        // not controlled, use internal state
        _this.state.checked = props.defaultChecked !== undefined ? props.defaultChecked : false;
      }

      return _this;
    }

    createClass(SwitchBase, [{
      key: "render",
      value: function render() {
        var _classNames;

        var _props = this.props,
            checkedProp = _props.checked,
            checkedIcon = _props.checkedIcon,
            classes = _props.classes,
            classNameProp = _props.className,
            disabledProp = _props.disabled,
            icon = _props.icon,
            id = _props.id,
            inputProps = _props.inputProps,
            inputRef = _props.inputRef,
            name = _props.name,
            onChange = _props.onChange,
            tabIndex = _props.tabIndex,
            type = _props.type,
            value = _props.value,
            other = objectWithoutProperties(_props, ["checked", "checkedIcon", "classes", "className", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onChange", "tabIndex", "type", "value"]);

        var muiFormControl = this.context.muiFormControl;
        var disabled = disabledProp;

        if (muiFormControl) {
          if (typeof disabled === 'undefined') {
            disabled = muiFormControl.disabled;
          }
        }

        var checked = this.isControlled ? checkedProp : this.state.checked;
        var hasLabelFor = type === 'checkbox' || type === 'radio';
        return React__default.createElement(IconButton$1, _extends_1({
          component: "span",
          className: classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.checked, checked), defineProperty(_classNames, classes.disabled, disabled), _classNames), classNameProp),
          disabled: disabled,
          tabIndex: null,
          role: undefined
        }, other), checked ? checkedIcon : icon, React__default.createElement("input", _extends_1({
          id: hasLabelFor && id,
          type: type,
          name: name,
          checked: checked,
          onChange: this.handleInputChange,
          className: classes.input,
          disabled: disabled,
          tabIndex: tabIndex,
          value: value,
          ref: inputRef
        }, inputProps)));
      }
    }]);

    return SwitchBase;
  }(React__default.Component); // NB: If changed, please update Checkbox, Switch and Radio
  // so that the API documentation is updated.


  SwitchBase.propTypes = {
    /**
     * If `true`, the component is checked.
     */
    checked: propTypes.oneOfType([propTypes.bool, propTypes.string]),

    /**
     * The icon to display when the component is checked.
     */
    checkedIcon: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * @ignore
     */
    defaultChecked: propTypes.bool,

    /**
     * If `true`, the switch will be disabled.
     */
    disabled: propTypes.bool,

    /**
     * If `true`, the ripple effect will be disabled.
     */
    disableRipple: propTypes.bool,

    /**
     * The icon to display when the component is unchecked.
     */
    icon: propTypes.node.isRequired,

    /**
     * The id of the `input` element.
     */
    id: propTypes.string,

    /**
     * If `true`, the component appears indeterminate.
     */
    indeterminate: propTypes.bool,

    /**
     * The icon to display when the component is indeterminate.
     */
    indeterminateIcon: propTypes.node,

    /**
     * Properties applied to the `input` element.
     */
    inputProps: propTypes.object,

    /**
     * Use that property to pass a ref callback to the native input component.
     */
    inputRef: propTypes.func,

    /*
     * @ignore
     */
    name: propTypes.string,

    /**
     * Callback fired when the state is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.checked`.
     * @param {boolean} checked The `checked` value of the switch
     */
    onChange: propTypes.func,

    /**
     * @ignore
     */
    tabIndex: propTypes.oneOfType([propTypes.number, propTypes.string]),

    /**
     * The input component property `type`.
     */
    type: propTypes.string,

    /**
     * The value of the component.
     */
    value: propTypes.string
  };
  SwitchBase.defaultProps = {
    type: 'checkbox'
  };
  SwitchBase.contextTypes = {
    muiFormControl: propTypes.object
  };
  var SwitchBase$1 = withStyles(styles$18, {
    name: 'MuiSwitchBase'
  })(SwitchBase);

  var classCallCheck$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  exports.default = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  });

  unwrapExports(classCallCheck$1);

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _library = true;

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.5.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty$1 = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty$1.call(it, key);
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var IS_WRAP = type & $export.W;
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE];
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
    var key, own, out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      if (own && _has(exports, key)) continue;
      // export native or passed
      out = own ? target[key] : source[key];
      // prevent global pollution for namespaces
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
      // bind timers to global for call from export context
      : IS_BIND && own ? _ctx(out, _global)
      // wrap global constructors for prevent change them in library
      : IS_WRAP && target[key] == out ? (function (C) {
        var F = function (a, b, c) {
          if (this instanceof C) {
            switch (arguments.length) {
              case 0: return new C();
              case 1: return new C(a);
              case 2: return new C(a, b);
            } return new C(a, b, c);
          } return C.apply(this, arguments);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      // make static versions for prototype methods
      })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out;
        // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
        if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
      }
    }
  };
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  var _redefine = _hide;

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode: _library ? 'pure' : 'global',
    copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var shared = _shared('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var document$2 = _global.document;
  var _html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



  var IE_PROTO$1 = _sharedKey('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');

  var Symbol = _global.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
  };

  $exports.store = store;
  });

  var def = _objectDp.f;

  var TAG = _wks('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
  };

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide(IteratorPrototype, _wks('iterator'), function () { return this; });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

  var ITERATOR = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () { return this; };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS: return function keys() { return new Constructor(this, kind); };
        case VALUES: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      _hide(proto, ITERATOR, $default);
    }
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  var $at = _stringAt(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });

  var _iterStep = function (done, value) {
    return { value: value, done: !!done };
  };

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }
    if (kind == 'keys') return _iterStep(0, index);
    if (kind == 'values') return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
  }, 'values');

  var TO_STRING_TAG = _wks('toStringTag');

  var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
    'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
    'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
    'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
    'TextTrackList,TouchList').split(',');

  for (var i = 0; i < DOMIterables.length; i++) {
    var NAME = DOMIterables[i];
    var Collection = _global[NAME];
    var proto = Collection && Collection.prototype;
    if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  }

  var f$1 = _wks;

  var _wksExt = {
  	f: f$1
  };

  var iterator = _wksExt.f('iterator');

  var iterator$1 = createCommonjsModule(function (module) {
  module.exports = { "default": iterator, __esModule: true };
  });

  unwrapExports(iterator$1);

  var _meta = createCommonjsModule(function (module) {
  var META = _uid('meta');


  var setDesc = _objectDp.f;
  var id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !_fails(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function (it) {
    setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {}          // weak collections IDs
    } });
  };
  var fastKey = function (it, create) {
    // return primitive with prefix
    if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
    // return object ID
    } return it[META].i;
  };
  var getWeak = function (it, create) {
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
    // return hash weak collections IDs
    } return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
  });
  var _meta_1 = _meta.KEY;
  var _meta_2 = _meta.NEED;
  var _meta_3 = _meta.fastKey;
  var _meta_4 = _meta.getWeak;
  var _meta_5 = _meta.onFreeze;

  var defineProperty$1 = _objectDp.f;
  var _wksDefine = function (name) {
    var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$1($Symbol, name, { value: _wksExt.f(name) });
  };

  var f$2 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$2
  };

  var f$3 = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f$3
  };

  // all enumerable object keys, includes symbols



  var _enumKeys = function (it) {
    var result = _objectKeys(it);
    var getSymbols = _objectGops.f;
    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum = _objectPie.f;
      var i = 0;
      var key;
      while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
    } return result;
  };

  // 7.2.2 IsArray(argument)

  var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
  };

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

  var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

  var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return _objectKeysInternal(O, hiddenKeys);
  };

  var _objectGopn = {
  	f: f$4
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

  var gOPN = _objectGopn.f;
  var toString$1 = {}.toString;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return gOPN(it);
    } catch (e) {
      return windowNames.slice();
    }
  };

  var f$5 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
  };

  var _objectGopnExt = {
  	f: f$5
  };

  var gOPD = Object.getOwnPropertyDescriptor;

  var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = _toIobject(O);
    P = _toPrimitive(P, true);
    if (_ie8DomDefine) try {
      return gOPD(O, P);
    } catch (e) { /* empty */ }
    if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
  };

  var _objectGopd = {
  	f: f$6
  };

  // ECMAScript 6 symbols shim





  var META = _meta.KEY;



















  var gOPD$1 = _objectGopd.f;
  var dP$1 = _objectDp.f;
  var gOPN$1 = _objectGopnExt.f;
  var $Symbol = _global.Symbol;
  var $JSON = _global.JSON;
  var _stringify = $JSON && $JSON.stringify;
  var PROTOTYPE$2 = 'prototype';
  var HIDDEN = _wks('_hidden');
  var TO_PRIMITIVE = _wks('toPrimitive');
  var isEnum = {}.propertyIsEnumerable;
  var SymbolRegistry = _shared('symbol-registry');
  var AllSymbols = _shared('symbols');
  var OPSymbols = _shared('op-symbols');
  var ObjectProto$1 = Object[PROTOTYPE$2];
  var USE_NATIVE = typeof $Symbol == 'function';
  var QObject = _global.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDesc = _descriptors && _fails(function () {
    return _objectCreate(dP$1({}, 'a', {
      get: function () { return dP$1(this, 'a', { value: 7 }).a; }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD$1(ObjectProto$1, key);
    if (protoDesc) delete ObjectProto$1[key];
    dP$1(it, key, D);
    if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
  } : dP$1;

  var wrap = function (tag) {
    var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
    sym._k = tag;
    return sym;
  };

  var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
    _anObject(it);
    key = _toPrimitive(key, true);
    _anObject(D);
    if (_has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
      } return setSymbolDesc(it, key, D);
    } return dP$1(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P) {
    _anObject(it);
    var keys = _enumKeys(P = _toIobject(P));
    var i = 0;
    var l = keys.length;
    var key;
    while (l > i) $defineProperty(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create(it, P) {
    return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = _toPrimitive(key, true));
    if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
    return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = _toIobject(it);
    key = _toPrimitive(key, true);
    if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
    var D = gOPD$1(it, key);
    if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN$1(_toIobject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    } return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto$1;
    var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
    } return result;
  };

  // 19.4.1.1 Symbol([description])
  if (!USE_NATIVE) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
      var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
      var $set = function (value) {
        if (this === ObjectProto$1) $set.call(OPSymbols, value);
        if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, _propertyDesc(1, value));
      };
      if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
      return wrap(tag);
    };
    _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
      return this._k;
    });

    _objectGopd.f = $getOwnPropertyDescriptor;
    _objectDp.f = $defineProperty;
    _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
    _objectPie.f = $propertyIsEnumerable;
    _objectGops.f = $getOwnPropertySymbols;

    if (_descriptors && !_library) {
      _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }

    _wksExt.f = function (name) {
      return wrap(_wks(name));
    };
  }

  _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

  for (var es6Symbols = (
    // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

  for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

  _export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function (key) {
      return _has(SymbolRegistry, key += '')
        ? SymbolRegistry[key]
        : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
      for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
    },
    useSetter: function () { setter = true; },
    useSimple: function () { setter = false; }
  });

  _export(_export.S + _export.F * !USE_NATIVE, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
  });

  // 24.3.2 JSON.stringify(value [, replacer [, space]])
  $JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
    var S = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;
      while (arguments.length > i) args.push(arguments[i++]);
      $replacer = replacer = args[1];
      if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!_isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  });

  // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
  $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
  // 19.4.3.5 Symbol.prototype[@@toStringTag]
  _setToStringTag($Symbol, 'Symbol');
  // 20.2.1.9 Math[@@toStringTag]
  _setToStringTag(Math, 'Math', true);
  // 24.3.3 JSON[@@toStringTag]
  _setToStringTag(_global.JSON, 'JSON', true);

  _wksDefine('asyncIterator');

  _wksDefine('observable');

  var symbol = _core.Symbol;

  var symbol$1 = createCommonjsModule(function (module) {
  module.exports = { "default": symbol, __esModule: true };
  });

  unwrapExports(symbol$1);

  var _typeof_1$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _iterator2 = _interopRequireDefault(iterator$1);



  var _symbol2 = _interopRequireDefault(symbol$1);

  var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof(obj);
  } : function (obj) {
    return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
  };
  });

  unwrapExports(_typeof_1$1);

  var possibleConstructorReturn$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _typeof3 = _interopRequireDefault(_typeof_1$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  };
  });

  unwrapExports(possibleConstructorReturn$1);

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */


  var check = function (O, proto) {
    _anObject(O);
    if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  var _setProto = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function (test, buggy, set) {
        try {
          set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch (e) { buggy = true; }
        return function setPrototypeOf(O, proto) {
          check(O, proto);
          if (buggy) O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }({}, false) : undefined),
    check: check
  };

  // 19.1.3.19 Object.setPrototypeOf(O, proto)

  _export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

  var setPrototypeOf$1 = _core.Object.setPrototypeOf;

  var setPrototypeOf$2 = createCommonjsModule(function (module) {
  module.exports = { "default": setPrototypeOf$1, __esModule: true };
  });

  unwrapExports(setPrototypeOf$2);

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  _export(_export.S, 'Object', { create: _objectCreate });

  var $Object = _core.Object;
  var create = function create(P, D) {
    return $Object.create(P, D);
  };

  var create$1 = createCommonjsModule(function (module) {
  module.exports = { "default": create, __esModule: true };
  });

  unwrapExports(create$1);

  var inherits$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf$2);



  var _create2 = _interopRequireDefault(create$1);



  var _typeof3 = _interopRequireDefault(_typeof_1$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }

    subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  };
  });

  unwrapExports(inherits$1);

  var setStatic_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var setStatic = function setStatic(key, value) {
    return function (BaseComponent) {
      /* eslint-disable no-param-reassign */
      BaseComponent[key] = value;
      /* eslint-enable no-param-reassign */
      return BaseComponent;
    };
  };

  exports.default = setStatic;
  });

  unwrapExports(setStatic_1);

  var setDisplayName_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _setStatic2 = _interopRequireDefault(setStatic_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var setDisplayName = function setDisplayName(displayName) {
    return (0, _setStatic2.default)('displayName', displayName);
  };

  exports.default = setDisplayName;
  });

  unwrapExports(setDisplayName_1);

  var shouldUpdate_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _classCallCheck3 = _interopRequireDefault(classCallCheck$1);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn$1);



  var _inherits3 = _interopRequireDefault(inherits$1);





  var _setDisplayName2 = _interopRequireDefault(setDisplayName_1);



  var _wrapDisplayName2 = _interopRequireDefault(wrapDisplayName_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var shouldUpdate = function shouldUpdate(test) {
    return function (BaseComponent) {
      var factory = (0, React__default.createFactory)(BaseComponent);

      var ShouldUpdate = function (_Component) {
        (0, _inherits3.default)(ShouldUpdate, _Component);

        function ShouldUpdate() {
          (0, _classCallCheck3.default)(this, ShouldUpdate);
          return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
        }

        ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
          return test(this.props, nextProps);
        };

        ShouldUpdate.prototype.render = function render() {
          return factory(this.props);
        };

        return ShouldUpdate;
      }(React__default.Component);

      {
        return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
      }
      return ShouldUpdate;
    };
  };

  exports.default = shouldUpdate;
  });

  unwrapExports(shouldUpdate_1);

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   * 
   */

  var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  function is$1(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      // Added the nonzero y check to make Flow happy, but it is redundant
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }

  /**
   * Performs equality by iterating through keys on an object and returning false
   * when any key has values which are not strictly equal between the arguments.
   * Returns true when the values of all keys are strictly equal.
   */
  function shallowEqual(objA, objB) {
    if (is$1(objA, objB)) {
      return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    // Test for A's keys different from B.
    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwnProperty$2.call(objB, keysA[i]) || !is$1(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }

    return true;
  }

  var shallowEqual_1 = shallowEqual;

  var shallowEqual$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _shallowEqual2 = _interopRequireDefault(shallowEqual_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _shallowEqual2.default;
  });

  unwrapExports(shallowEqual$1);

  var pure_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _shouldUpdate2 = _interopRequireDefault(shouldUpdate_1);



  var _shallowEqual2 = _interopRequireDefault(shallowEqual$1);



  var _setDisplayName2 = _interopRequireDefault(setDisplayName_1);



  var _wrapDisplayName2 = _interopRequireDefault(wrapDisplayName_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var pure = function pure(BaseComponent) {
    var hoc = (0, _shouldUpdate2.default)(function (props, nextProps) {
      return !(0, _shallowEqual2.default)(props, nextProps);
    });

    {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'pure'))(hoc(BaseComponent));
    }

    return hoc(BaseComponent);
  };

  exports.default = pure;
  });

  var pure = unwrapExports(pure_1);

  var styles$19 = function styles(theme) {
    return {
      root: {
        userSelect: 'none',
        fontSize: 24,
        width: '1em',
        height: '1em',
        display: 'inline-block',
        fill: 'currentColor',
        flexShrink: 0,
        transition: theme.transitions.create('fill', {
          duration: theme.transitions.duration.shorter
        })
      },
      colorPrimary: {
        color: theme.palette.primary.main
      },
      colorSecondary: {
        color: theme.palette.secondary.main
      },
      colorAction: {
        color: theme.palette.action.active
      },
      colorError: {
        color: theme.palette.error.main
      },
      colorDisabled: {
        color: theme.palette.action.disabled
      }
    };
  };

  function SvgIcon(props) {
    var children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        color = props.color,
        nativeColor = props.nativeColor,
        titleAccess = props.titleAccess,
        viewBox = props.viewBox,
        other = objectWithoutProperties(props, ["children", "classes", "className", "color", "nativeColor", "titleAccess", "viewBox"]);

    var className = classnames(classes.root, defineProperty({}, classes["color".concat(capitalize(color))], color !== 'inherit'), classNameProp);
    return React__default.createElement("svg", _extends_1({
      className: className,
      focusable: "false",
      viewBox: viewBox,
      color: nativeColor,
      "aria-hidden": titleAccess ? 'false' : 'true'
    }, other), titleAccess ? React__default.createElement("title", null, titleAccess) : null, children);
  }

  SvgIcon.propTypes = {
    /**
     * Node passed into the SVG element.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * You can use the `nativeColor` property to apply a color attribute to the SVG element.
     */
    color: propTypes.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),

    /**
     * Applies a color attribute to the SVG element.
     */
    nativeColor: propTypes.string,

    /**
     * Provides a human-readable title for the element that contains it.
     * https://www.w3.org/TR/SVG-access/#Equivalent
     */
    titleAccess: propTypes.string,

    /**
     * Allows you to redefine what the coordinates without units mean inside an SVG element.
     * For example, if the SVG element is 500 (width) by 200 (height),
     * and you pass viewBox="0 0 50 20",
     * this means that the coordinates inside the SVG will go from the top left corner (0,0)
     * to bottom right (50,20) and each unit will be worth 10px.
     */
    viewBox: propTypes.string
  };
  SvgIcon.defaultProps = {
    color: 'inherit',
    viewBox: '0 0 24 24'
  };
  SvgIcon.muiName = 'SvgIcon';
  var SvgIcon$1 = withStyles(styles$19, {
    name: 'MuiSvgIcon'
  })(SvgIcon);

  /**
   * @ignore - internal component.
   */

  var _ref = React__default.createElement("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  });

  var CheckBoxOutlineBlank = function CheckBoxOutlineBlank(props) {
    return React__default.createElement(SvgIcon$1, props, _ref);
  };

  CheckBoxOutlineBlank = pure(CheckBoxOutlineBlank);
  CheckBoxOutlineBlank.muiName = 'SvgIcon';
  var CheckBoxOutlineBlankIcon = CheckBoxOutlineBlank;

  /**
   * @ignore - internal component.
   */

  var _ref$1 = React__default.createElement("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  });

  var CheckBox = function CheckBox(props) {
    return React__default.createElement(SvgIcon$1, props, _ref$1);
  };

  CheckBox = pure(CheckBox);
  CheckBox.muiName = 'SvgIcon';
  var CheckBoxIcon = CheckBox;

  /**
   * @ignore - internal component.
   */

  var _ref$2 = React__default.createElement("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
  });

  var IndeterminateCheckBox = function IndeterminateCheckBox(props) {
    return React__default.createElement(SvgIcon$1, props, _ref$2);
  };

  IndeterminateCheckBox = pure(IndeterminateCheckBox);
  IndeterminateCheckBox.muiName = 'SvgIcon';
  var IndeterminateCheckBoxIcon = IndeterminateCheckBox;

  var styles$20 = function styles(theme) {
    return {
      root: {
        color: theme.palette.text.secondary
      },
      checked: {},
      disabled: {},
      colorPrimary: {
        '&$checked': {
          color: theme.palette.primary.main
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      },
      colorSecondary: {
        '&$checked': {
          color: theme.palette.secondary.main
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      }
    };
  };

  function Checkbox(props) {
    var checkedIcon = props.checkedIcon,
        classes = props.classes,
        color = props.color,
        icon = props.icon,
        indeterminate = props.indeterminate,
        indeterminateIcon = props.indeterminateIcon,
        other = objectWithoutProperties(props, ["checkedIcon", "classes", "color", "icon", "indeterminate", "indeterminateIcon"]);

    return React__default.createElement(SwitchBase$1, _extends_1({
      checkedIcon: indeterminate ? indeterminateIcon : checkedIcon,
      classes: {
        root: classnames(classes.root, classes["color".concat(capitalize(color))]),
        checked: classes.checked,
        disabled: classes.disabled
      },
      icon: indeterminate ? indeterminateIcon : icon
    }, other));
  }

  Checkbox.propTypes = {
    /**
     * If `true`, the component is checked.
     */
    checked: propTypes.oneOfType([propTypes.bool, propTypes.string]),

    /**
     * The icon to display when the component is checked.
     */
    checkedIcon: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: propTypes.oneOf(['primary', 'secondary', 'default']),

    /**
     * If `true`, the switch will be disabled.
     */
    disabled: propTypes.bool,

    /**
     * If `true`, the ripple effect will be disabled.
     */
    disableRipple: propTypes.bool,

    /**
     * The icon to display when the component is unchecked.
     */
    icon: propTypes.node,

    /**
     * The id of the `input` element.
     */
    id: propTypes.string,

    /**
     * If `true`, the component appears indeterminate.
     */
    indeterminate: propTypes.bool,

    /**
     * The icon to display when the component is indeterminate.
     */
    indeterminateIcon: propTypes.node,

    /**
     * Properties applied to the `input` element.
     */
    inputProps: propTypes.object,

    /**
     * Use that property to pass a ref callback to the native input component.
     */
    inputRef: propTypes.func,

    /**
     * Callback fired when the state is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.checked`.
     * @param {boolean} checked The `checked` value of the switch
     */
    onChange: propTypes.func,

    /**
     * The input component property `type`.
     */
    type: propTypes.string,

    /**
     * The value of the component.
     */
    value: propTypes.string
  };
  Checkbox.defaultProps = {
    checkedIcon: React__default.createElement(CheckBoxIcon, null),
    color: 'secondary',
    icon: React__default.createElement(CheckBoxOutlineBlankIcon, null),
    indeterminate: false,
    indeterminateIcon: React__default.createElement(IndeterminateCheckBoxIcon, null)
  };
  var Checkbox$1 = withStyles(styles$20, {
    name: 'MuiCheckbox'
  })(Checkbox);

  /**
   * @ignore - internal component.
   */

  var _ref$3 = React__default.createElement("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  });

  var Cancel = function Cancel(props) {
    return React__default.createElement(SvgIcon$1, props, _ref$3);
  };

  Cancel = pure(Cancel);
  Cancel.muiName = 'SvgIcon';
  var CancelIcon = Cancel;

  var styles$21 = function styles(theme) {
    var height = 32;
    var backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
    var deleteIconColor = fade(theme.palette.text.primary, 0.26);
    return {
      root: {
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(13),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: height,
        color: theme.palette.getContrastText(backgroundColor),
        backgroundColor: backgroundColor,
        borderRadius: height / 2,
        whiteSpace: 'nowrap',
        transition: theme.transitions.create(['background-color', 'box-shadow']),
        // label will inherit this from root, then `clickable` class overrides this for both
        cursor: 'default',
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 'none',
        border: 'none',
        // Remove `button` border
        padding: 0 // Remove `button` padding

      },
      clickable: {
        // Remove grey highlight
        WebkitTapHighlightColor: 'transparent',
        cursor: 'pointer',
        '&:hover, &:focus': {
          backgroundColor: emphasize(backgroundColor, 0.08)
        },
        '&:active': {
          boxShadow: theme.shadows[1],
          backgroundColor: emphasize(backgroundColor, 0.12)
        }
      },
      deletable: {
        '&:focus': {
          backgroundColor: emphasize(backgroundColor, 0.08)
        }
      },
      avatar: {
        marginRight: -4,
        width: height,
        height: height,
        color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
        fontSize: theme.typography.pxToRem(16)
      },
      avatarChildren: {
        width: 19,
        height: 19
      },
      label: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 12,
        userSelect: 'none',
        whiteSpace: 'nowrap',
        cursor: 'inherit'
      },
      deleteIcon: {
        // Remove grey highlight
        WebkitTapHighlightColor: 'transparent',
        color: deleteIconColor,
        cursor: 'pointer',
        height: 'auto',
        margin: '0 4px 0 -8px',
        '&:hover': {
          color: fade(deleteIconColor, 0.4)
        }
      }
    };
  };
  /**
   * Chips represent complex entities in small blocks, such as a contact.
   */

  var Chip =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Chip, _React$Component);

    function Chip() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, Chip);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = Chip.__proto__ || Object.getPrototypeOf(Chip)).call.apply(_ref, [this].concat(args))), _this.chipRef = null, _this.handleDeleteIconClick = function (event) {
        // Stop the event from bubbling up to the `Chip`
        event.stopPropagation();
        var onDelete = _this.props.onDelete;

        if (onDelete) {
          onDelete(event);
        }
      }, _this.handleKeyDown = function (event) {
        // Ignore events from children of `Chip`.
        if (event.currentTarget !== event.target) {
          return;
        }

        var _this$props = _this.props,
            onClick = _this$props.onClick,
            onDelete = _this$props.onDelete,
            onKeyDown = _this$props.onKeyDown;
        var key = keycode(event);

        if (onClick && (key === 'space' || key === 'enter')) {
          event.preventDefault();
          onClick(event);
        } else if (onDelete && key === 'backspace') {
          event.preventDefault();
          onDelete(event);
        } else if (key === 'esc') {
          event.preventDefault();

          if (_this.chipRef) {
            _this.chipRef.blur();
          }
        }

        if (onKeyDown) {
          onKeyDown(event);
        }
      }, _temp));
    }

    createClass(Chip, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            avatarProp = _props.avatar,
            classes = _props.classes,
            classNameProp = _props.className,
            Component = _props.component,
            deleteIconProp = _props.deleteIcon,
            label = _props.label,
            onClick = _props.onClick,
            onDelete = _props.onDelete,
            onKeyDown = _props.onKeyDown,
            tabIndexProp = _props.tabIndex,
            other = objectWithoutProperties(_props, ["avatar", "classes", "className", "component", "deleteIcon", "label", "onClick", "onDelete", "onKeyDown", "tabIndex"]);

        var className = classnames(classes.root, defineProperty({}, classes.clickable, onClick), defineProperty({}, classes.deletable, onDelete), classNameProp);
        var deleteIcon = null;

        if (onDelete) {
          deleteIcon = deleteIconProp && React__default.isValidElement(deleteIconProp) ? React__default.cloneElement(deleteIconProp, {
            className: classnames(deleteIconProp.props.className, classes.deleteIcon),
            onClick: this.handleDeleteIconClick
          }) : React__default.createElement(CancelIcon, {
            className: classes.deleteIcon,
            onClick: this.handleDeleteIconClick
          });
        }

        var avatar = null;

        if (avatarProp && React__default.isValidElement(avatarProp)) {
          avatar = React__default.cloneElement(avatarProp, {
            className: classnames(classes.avatar, avatarProp.props.className),
            childrenClassName: classnames(classes.avatarChildren, avatarProp.props.childrenClassName)
          });
        }

        var tabIndex = tabIndexProp;

        if (!tabIndex) {
          tabIndex = onClick || onDelete ? 0 : -1;
        }

        return React__default.createElement(Component, _extends_1({
          role: "button",
          className: className,
          tabIndex: tabIndex,
          onClick: onClick,
          onKeyDown: this.handleKeyDown,
          ref: function ref(node) {
            _this2.chipRef = node;
          }
        }, other), avatar, React__default.createElement("span", {
          className: classes.label
        }, label), deleteIcon);
      }
    }]);

    return Chip;
  }(React__default.Component);

  Chip.propTypes = {
    /**
     * Avatar element.
     */
    avatar: propTypes.element,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * Override the default delete icon element. Shown only if `onDelete` is set.
     */
    deleteIcon: propTypes.element,

    /**
     * The content of the label.
     */
    label: propTypes.node,

    /**
     * @ignore
     */
    onClick: propTypes.func,

    /**
     * Callback function fired when the delete icon is clicked.
     * If set, the delete icon will be shown.
     */
    onDelete: propTypes.func,

    /**
     * @ignore
     */
    onKeyDown: propTypes.func,

    /**
     * @ignore
     */
    tabIndex: propTypes.oneOfType([propTypes.number, propTypes.string])
  };
  Chip.defaultProps = {
    component: 'div'
  };
  var Chip$1 = withStyles(styles$21, {
    name: 'MuiChip'
  })(Chip);

  var SIZE = 50;

  function getRelativeValue(value, min, max) {
    var clampedValue = Math.min(Math.max(min, value), max);
    return (clampedValue - min) / (max - min);
  }

  function easeOut(t) {
    t = getRelativeValue(t, 0, 1); // https://gist.github.com/gre/1650294

    t = (t -= 1) * t * t + 1;
    return t;
  }

  function easeIn(t) {
    return t * t;
  }

  var styles$22 = function styles(theme) {
    return {
      root: {
        display: 'inline-block'
      },
      static: {
        transition: theme.transitions.create('transform')
      },
      indeterminate: {
        animation: 'mui-progress-circular-rotate 1.4s linear infinite'
      },
      colorPrimary: {
        color: theme.palette.primary.main
      },
      colorSecondary: {
        color: theme.palette.secondary.main
      },
      svg: {},
      circle: {
        stroke: 'currentColor',
        strokeLinecap: 'round'
      },
      circleStatic: {
        transition: theme.transitions.create('stroke-dashoffset')
      },
      circleIndeterminate: {
        animation: 'mui-progress-circular-dash 1.4s ease-in-out infinite',
        // Some default value that looks fine waiting for the animation to kicks in.
        strokeDasharray: '80px, 200px',
        strokeDashoffset: '0px' // Add the unit to fix a Edge 16 and below bug.

      },
      '@keyframes mui-progress-circular-rotate': {
        '100%': {
          transform: 'rotate(360deg)'
        }
      },
      '@keyframes mui-progress-circular-dash': {
        '0%': {
          strokeDasharray: '1px, 200px',
          strokeDashoffset: '0px'
        },
        '50%': {
          strokeDasharray: '100px, 200px',
          strokeDashoffset: '-15px'
        },
        '100%': {
          strokeDasharray: '100px, 200px',
          strokeDashoffset: '-120px'
        }
      }
    };
  };
  /**
   * ## ARIA
   *
   * If the progress bar is describing the loading progress of a particular region of a page,
   * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
   * attribute to `true` on that region until it has finished loading.
   */

  function CircularProgress(props) {
    var _classNames, _classNames2;

    var classes = props.classes,
        className = props.className,
        color = props.color,
        size = props.size,
        style = props.style,
        thickness = props.thickness,
        value = props.value,
        variant = props.variant,
        other = objectWithoutProperties(props, ["classes", "className", "color", "size", "style", "thickness", "value", "variant"]);

    var circleStyle = {};
    var rootStyle = {};
    var rootProps = {};

    if (variant === 'determinate' || variant === 'static') {
      var circumference = 2 * Math.PI * (SIZE / 2 - 5);
      circleStyle.strokeDasharray = circumference.toFixed(3);
      rootProps['aria-valuenow'] = Math.round(value);

      if (variant === 'static') {
        circleStyle.strokeDashoffset = "".concat(((100 - value) / 100 * circumference).toFixed(3), "px");
        rootStyle.transform = 'rotate(-90deg)';
      } else {
        circleStyle.strokeDashoffset = "".concat((easeIn((100 - value) / 100) * circumference).toFixed(3), "px");
        rootStyle.transform = "rotate(".concat((easeOut(value / 70) * 270).toFixed(3), "deg)");
      }
    }

    return React__default.createElement("div", _extends_1({
      className: classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes["color".concat(capitalize(color))], color !== 'inherit'), defineProperty(_classNames, classes.indeterminate, variant === 'indeterminate'), defineProperty(_classNames, classes.static, variant === 'static'), _classNames), className),
      style: objectSpread({
        width: size,
        height: size
      }, rootStyle, style),
      role: "progressbar"
    }, rootProps, other), React__default.createElement("svg", {
      className: classes.svg,
      viewBox: "0 0 ".concat(SIZE, " ").concat(SIZE)
    }, React__default.createElement("circle", {
      className: classnames(classes.circle, (_classNames2 = {}, defineProperty(_classNames2, classes.circleIndeterminate, variant === 'indeterminate'), defineProperty(_classNames2, classes.circleStatic, variant === 'static'), _classNames2)),
      style: circleStyle,
      cx: SIZE / 2,
      cy: SIZE / 2,
      r: SIZE / 2 - 5,
      fill: "none",
      strokeWidth: thickness
    })));
  }

  CircularProgress.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: propTypes.oneOf(['primary', 'secondary', 'inherit']),

    /**
     * The size of the circle.
     */
    size: propTypes.oneOfType([propTypes.number, propTypes.string]),

    /**
     * @ignore
     */
    style: propTypes.object,

    /**
     * The thickness of the circle.
     */
    thickness: propTypes.number,

    /**
     * The value of the progress indicator for the determinate and static variants.
     * Value between 0 and 100.
     */
    value: propTypes.number,

    /**
     * The variant of progress indicator. Use indeterminate
     * when there is no progress value.
     */
    variant: propTypes.oneOf(['determinate', 'indeterminate', 'static'])
  };
  CircularProgress.defaultProps = {
    color: 'primary',
    size: 40,
    thickness: 3.6,
    value: 0,
    variant: 'indeterminate'
  };
  var CircularProgress$1 = withStyles(styles$22, {
    name: 'MuiCircularProgress',
    flip: false
  })(CircularProgress);

  var reactEventListener_cjs = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', { value: true });

  function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

  var _classCallCheck = _interopDefault(classCallCheck);
  var _createClass = _interopDefault(createClass);
  var _possibleConstructorReturn = _interopDefault(possibleConstructorReturn);
  var _inherits = _interopDefault(inherits);
  var _typeof = _interopDefault(_typeof_1);
  var _objectWithoutProperties = _interopDefault(objectWithoutProperties);
  var _objectSpread = _interopDefault(objectSpread);
  var React$$1 = _interopDefault(React__default);
  var PropTypes = _interopDefault(propTypes);
  var shallowEqual = _interopDefault(shallowEqual_1);
  var warning = _interopDefault(warning_1);

  function defineProperty(object, property, attr) {
    return Object.defineProperty(object, property, attr);
  } // Passive options
  // Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js


  var passiveOption = function () {
    var cache = null;
    return function () {
      if (cache !== null) {
        return cache;
      }

      var supportsPassiveOption = false;

      try {
        window.addEventListener('test', null, defineProperty({}, 'passive', {
          get: function get() {
            supportsPassiveOption = true;
          }
        }));
      } catch (err) {//
      }

      cache = supportsPassiveOption;
      return supportsPassiveOption;
    }();
  }();

  var defaultEventOptions = {
    capture: false,
    passive: false
  };

  function mergeDefaultEventOptions(options) {
    return _objectSpread({}, defaultEventOptions, options);
  }

  function getEventListenerArgs(eventName, callback, options) {
    var args = [eventName, callback];
    args.push(passiveOption ? options : options.capture);
    return args;
  }

  function on(target, eventName, callback, options) {
    // eslint-disable-next-line prefer-spread
    target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  }

  function off(target, eventName, callback, options) {
    // eslint-disable-next-line prefer-spread
    target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  }

  function forEachListener(props, iteratee) {
    var children = props.children,
        target = props.target,
        eventProps = _objectWithoutProperties(props, ["children", "target"]);

    Object.keys(eventProps).forEach(function (name) {
      if (name.substring(0, 2) !== 'on') {
        return;
      }

      var prop = eventProps[name];

      var type = _typeof(prop);

      var isObject = type === 'object';
      var isFunction = type === 'function';

      if (!isObject && !isFunction) {
        return;
      }

      var capture = name.substr(-7).toLowerCase() === 'capture';
      var eventName = name.substring(2).toLowerCase();
      eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

      if (isObject) {
        iteratee(eventName, prop.handler, prop.options);
      } else {
        iteratee(eventName, prop, mergeDefaultEventOptions({
          capture: capture
        }));
      }
    });
  }

  function withOptions(handler, options) {
    warning(options, 'react-event-listener: should be specified options in withOptions.');
    return {
      handler: handler,
      options: mergeDefaultEventOptions(options)
    };
  }

  var EventListener =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(EventListener, _React$Component);

    function EventListener() {
      _classCallCheck(this, EventListener);

      return _possibleConstructorReturn(this, (EventListener.__proto__ || Object.getPrototypeOf(EventListener)).apply(this, arguments));
    }

    _createClass(EventListener, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.addListeners();
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        return !shallowEqual(this.props, nextProps);
      }
    }, {
      key: "componentWillUpdate",
      value: function componentWillUpdate() {
        this.removeListeners();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.addListeners();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.removeListeners();
      }
    }, {
      key: "addListeners",
      value: function addListeners() {
        this.applyListeners(on);
      }
    }, {
      key: "removeListeners",
      value: function removeListeners() {
        this.applyListeners(off);
      }
    }, {
      key: "applyListeners",
      value: function applyListeners(onOrOff) {
        var target = this.props.target;

        if (target) {
          var element = target;

          if (typeof target === 'string') {
            element = window[target];
          }

          forEachListener(this.props, onOrOff.bind(null, element));
        }
      }
    }, {
      key: "render",
      value: function render() {
        return this.props.children || null;
      }
    }]);

    return EventListener;
  }(React$$1.Component);

  EventListener.propTypes = {
    /**
     * You can provide a single child too.
     */
    children: PropTypes.node,

    /**
     * The DOM target to listen to.
     */
    target: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
  };

  exports.withOptions = withOptions;
  exports.default = EventListener;
  });

  var EventListener = unwrapExports(reactEventListener_cjs);
  var reactEventListener_cjs_1 = reactEventListener_cjs.withOptions;

  var isDescendant = function isDescendant(el, target) {
    if (target !== null && target.parentNode) {
      return el === target || isDescendant(el, target.parentNode);
    }

    return false;
  };
  /**
   * Listen for click events that are triggered outside of the component children.
   */


  var ClickAwayListener =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(ClickAwayListener, _React$Component);

    function ClickAwayListener() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, ClickAwayListener);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = ClickAwayListener.__proto__ || Object.getPrototypeOf(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this.mounted = false, _this.handleClickAway = function (event) {
        // Ignore events that have been `event.preventDefault()` marked.
        if (event.defaultPrevented) {
          return;
        } // IE11 support, which trigger the handleClickAway even after the unbind


        if (!_this.mounted) {
          return;
        }

        var el = ReactDOM.findDOMNode(assertThisInitialized(_this));
        var doc = ownerDocument(el);

        if (doc.documentElement && doc.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
          _this.props.onClickAway(event);
        }
      }, _temp));
    }

    createClass(ClickAwayListener, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.mounted = true;
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: "render",
      value: function render() {
        var _props = this.props,
            children = _props.children,
            mouseEvent = _props.mouseEvent,
            touchEvent = _props.touchEvent,
            onClickAway = _props.onClickAway,
            other = objectWithoutProperties(_props, ["children", "mouseEvent", "touchEvent", "onClickAway"]);

        var listenerProps = {};

        if (mouseEvent !== false) {
          listenerProps[mouseEvent] = this.handleClickAway;
        }

        if (touchEvent !== false) {
          listenerProps[touchEvent] = this.handleClickAway;
        }

        return React__default.createElement(EventListener, _extends_1({
          target: "document"
        }, listenerProps, other), children);
      }
    }]);

    return ClickAwayListener;
  }(React__default.Component);

  ClickAwayListener.propTypes = {
    children: propTypes.node.isRequired,
    mouseEvent: propTypes.oneOf(['onClick', 'onMouseDown', 'onMouseUp', false]),
    onClickAway: propTypes.func.isRequired,
    touchEvent: propTypes.oneOf(['onTouchStart', 'onTouchEnd', false])
  };
  ClickAwayListener.defaultProps = {
    mouseEvent: 'onMouseUp',
    touchEvent: 'onTouchEnd'
  };

  var styles$23 = function styles(theme) {
    return {
      container: {
        height: 0,
        overflow: 'hidden',
        transition: theme.transitions.create('height')
      },
      entered: {
        height: 'auto'
      },
      wrapper: {
        // Hack to get children with a negative margin to not falsify the height computation.
        display: 'flex'
      },
      wrapperInner: {
        width: '100%'
      }
    };
  };
  /**
   * The Collapse transition is used by the
   * [Vertical Stepper](/demos/steppers#vertical-stepper) StepContent component.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  var Collapse =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Collapse, _React$Component);

    function Collapse() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, Collapse);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call.apply(_ref, [this].concat(args))), _this.wrapper = null, _this.autoTransitionDuration = undefined, _this.timer = null, _this.handleEnter = function (node) {
        node.style.height = _this.props.collapsedHeight;

        if (_this.props.onEnter) {
          _this.props.onEnter(node);
        }
      }, _this.handleEntering = function (node) {
        var _this$props = _this.props,
            timeout = _this$props.timeout,
            theme = _this$props.theme;
        var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

        var _getTransitionProps = getTransitionProps(_this.props, {
          mode: 'enter'
        }),
            transitionDuration = _getTransitionProps.duration;

        if (timeout === 'auto') {
          var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
          node.style.transitionDuration = "".concat(duration2, "ms");
          _this.autoTransitionDuration = duration2;
        } else {
          node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
        }

        node.style.height = "".concat(wrapperHeight, "px");

        if (_this.props.onEntering) {
          _this.props.onEntering(node);
        }
      }, _this.handleEntered = function (node) {
        node.style.height = 'auto';

        if (_this.props.onEntered) {
          _this.props.onEntered(node);
        }
      }, _this.handleExit = function (node) {
        var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;
        node.style.height = "".concat(wrapperHeight, "px");

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      }, _this.handleExiting = function (node) {
        var _this$props2 = _this.props,
            timeout = _this$props2.timeout,
            theme = _this$props2.theme;
        var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

        var _getTransitionProps2 = getTransitionProps(_this.props, {
          mode: 'exit'
        }),
            transitionDuration = _getTransitionProps2.duration;

        if (timeout === 'auto') {
          var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
          node.style.transitionDuration = "".concat(duration2, "ms");
          _this.autoTransitionDuration = duration2;
        } else {
          node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
        }

        node.style.height = _this.props.collapsedHeight;

        if (_this.props.onExiting) {
          _this.props.onExiting(node);
        }
      }, _this.addEndListener = function (_, next) {
        if (_this.props.timeout === 'auto') {
          _this.timer = setTimeout(next, _this.autoTransitionDuration || 0);
        }
      }, _temp));
    }

    createClass(Collapse, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.timer);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            classes = _props.classes,
            className = _props.className,
            collapsedHeight = _props.collapsedHeight,
            Component = _props.component,
            onEnter = _props.onEnter,
            onEntered = _props.onEntered,
            onEntering = _props.onEntering,
            onExit = _props.onExit,
            onExiting = _props.onExiting,
            style = _props.style,
            theme = _props.theme,
            timeout = _props.timeout,
            other = objectWithoutProperties(_props, ["children", "classes", "className", "collapsedHeight", "component", "onEnter", "onEntered", "onEntering", "onExit", "onExiting", "style", "theme", "timeout"]);

        return React__default.createElement(Transition, _extends_1({
          onEnter: this.handleEnter,
          onEntered: this.handleEntered,
          onEntering: this.handleEntering,
          onExit: this.handleExit,
          onExiting: this.handleExiting,
          addEndListener: this.addEndListener,
          timeout: timeout === 'auto' ? null : timeout
        }, other), function (state, childProps) {
          return React__default.createElement(Component, _extends_1({
            className: classnames(classes.container, defineProperty({}, classes.entered, state === 'entered'), className),
            style: objectSpread({}, style, {
              minHeight: collapsedHeight
            })
          }, childProps), React__default.createElement("div", {
            className: classes.wrapper,
            ref: function ref(node) {
              _this2.wrapper = node;
            }
          }, React__default.createElement("div", {
            className: classes.wrapperInner
          }, children)));
        });
      }
    }]);

    return Collapse;
  }(React__default.Component);

  Collapse.propTypes = {
    /**
     * The content node to be collapsed.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The height of the container when collapsed.
     */
    collapsedHeight: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * If `true`, the component will transition in.
     */
    in: propTypes.bool,

    /**
     * @ignore
     */
    onEnter: propTypes.func,

    /**
     * @ignore
     */
    onEntered: propTypes.func,

    /**
     * @ignore
     */
    onEntering: propTypes.func,

    /**
     * @ignore
     */
    onExit: propTypes.func,

    /**
     * @ignore
     */
    onExiting: propTypes.func,

    /**
     * @ignore
     */
    style: propTypes.object,

    /**
     * @ignore
     */
    theme: propTypes.object.isRequired,

    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     *
     * Set to 'auto' to automatically calculate transition time based on height.
     */
    timeout: propTypes.oneOfType([propTypes.number, propTypes.shape({
      enter: propTypes.number,
      exit: propTypes.number
    }), propTypes.oneOf(['auto'])])
  };
  Collapse.defaultProps = {
    collapsedHeight: '0px',
    component: 'div',
    timeout: duration.standard
  };
  var Collapse$1 = withStyles(styles$23, {
    withTheme: true,
    name: 'MuiCollapse'
  })(Collapse);

  var styles$24 = function styles(theme) {
    return {
      '@global': {
        html: {
          WebkitFontSmoothing: 'antialiased',
          // Antialiasing.
          MozOsxFontSmoothing: 'grayscale',
          // Antialiasing.
          // Change from `box-sizing: content-box` so that `width`
          // is not affected by `padding` or `border`.
          boxSizing: 'border-box'
        },
        '*, *::before, *::after': {
          boxSizing: 'inherit'
        },
        body: {
          margin: 0,
          // Remove the margin in all browsers.
          backgroundColor: theme.palette.background.default,
          '@media print': {
            // Save printer ink.
            backgroundColor: theme.palette.common.white
          }
        }
      }
    };
  };
  /**
   * Kickstart an elegant, consistent, and simple baseline to build upon.
   */


  var CssBaseline =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(CssBaseline, _React$Component);

    function CssBaseline() {
      classCallCheck(this, CssBaseline);

      return possibleConstructorReturn(this, (CssBaseline.__proto__ || Object.getPrototypeOf(CssBaseline)).apply(this, arguments));
    }

    createClass(CssBaseline, [{
      key: "render",
      value: function render() {
        return this.props.children;
      }
    }]);

    return CssBaseline;
  }(React__default.Component);

  CssBaseline.propTypes = {
    /**
     * You can wrap a node.
     */
    children: propTypes.node,

    /**
     * @ignore
     */
    classes: propTypes.object.isRequired
  };
  CssBaseline.propTypes = exactProp(CssBaseline.propTypes, 'CssBaseline');
  CssBaseline.defaultProps = {
    children: null
  };
  var CssBaseline$1 = withStyles(styles$24, {
    name: 'MuiCssBaseline'
  })(CssBaseline);

  var activeElement_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = activeElement;



  var _ownerDocument2 = _interopRequireDefault(ownerDocument_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function activeElement() {
    var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _ownerDocument2.default)();

    try {
      return doc.activeElement;
    } catch (e) {/* ie throws if no active element */}
  }
  module.exports = exports['default'];
  });

  var activeElement = unwrapExports(activeElement_1);

  /**
   * Helper component to allow attaching a ref to a
   * child element that may not accept refs (functional component).
   * It's higly inspired by https://github.com/facebook/react/issues/11401#issuecomment-340543801
   */

  var RootRef =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(RootRef, _React$Component);

    function RootRef() {
      classCallCheck(this, RootRef);

      return possibleConstructorReturn(this, (RootRef.__proto__ || Object.getPrototypeOf(RootRef)).apply(this, arguments));
    }

    createClass(RootRef, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.rootRef(ReactDOM.findDOMNode(this));
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.props.rootRef(null);
      }
    }, {
      key: "render",
      value: function render() {
        return this.props.children;
      }
    }]);

    return RootRef;
  }(React__default.Component);

  RootRef.propTypes = {
    children: propTypes.element.isRequired,
    rootRef: propTypes.func.isRequired
  };

  function getContainer(container, defaultContainer) {
    container = typeof container === 'function' ? container() : container;
    return ReactDOM.findDOMNode(container) || defaultContainer;
  }

  function getOwnerDocument(element) {
    return ownerDocument(ReactDOM.findDOMNode(element));
  }
  /**
   * This component shares many concepts with
   * [react-overlays](https://react-bootstrap.github.io/react-overlays/#portals)
   * But has been forked in order to fix some bugs, reduce the number of dependencies
   * and take the control of our destiny.
   */


  var Portal =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Portal, _React$Component);

    function Portal() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, Portal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = Portal.__proto__ || Object.getPrototypeOf(Portal)).call.apply(_ref, [this].concat(args))), _this.getMountNode = function () {
        return _this.mountNode;
      }, _temp));
    }

    createClass(Portal, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setContainer(this.props.container);
        this.forceUpdate(this.props.onRendered);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.container !== this.props.container) {
          this.setContainer(this.props.container);
          this.forceUpdate();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mountNode = null;
      }
    }, {
      key: "setContainer",
      value: function setContainer(container) {
        this.mountNode = getContainer(container, getOwnerDocument(this).body);
      }
      /**
       * @public
       */

    }, {
      key: "render",
      value: function render() {
        var children = this.props.children;
        return this.mountNode ? ReactDOM.createPortal(children, this.mountNode) : null;
      }
    }]);

    return Portal;
  }(React__default.Component);

  Portal.propTypes = {
    /**
     * The children to render into the `container`.
     */
    children: propTypes.node.isRequired,

    /**
     * A node, component instance, or function that returns either.
     * The `container` will have the portal children appended to it.
     * By default, it uses the body of the top-level document object,
     * so it's simply `document.body` most of the time.
     */
    container: propTypes.oneOfType([propTypes.object, propTypes.func]),

    /**
     * Callback fired once the children has been mounted into the `container`.
     */
    onRendered: propTypes.func
  };
  Portal.propTypes = exactProp(Portal.propTypes, 'Portal');

  var camelize_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = camelize;
  var rHyphen = /-(.)/g;

  function camelize(string) {
    return string.replace(rHyphen, function (_, chr) {
      return chr.toUpperCase();
    });
  }
  module.exports = exports["default"];
  });

  unwrapExports(camelize_1$1);

  var camelizeStyle = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = camelizeStyleName;



  var _camelize2 = _interopRequireDefault(camelize_1$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var msPattern = /^-ms-/; /**
                            * Copyright 2014-2015, Facebook, Inc.
                            * All rights reserved.
                            * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
                            */
  function camelizeStyleName(string) {
    return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
  }
  module.exports = exports['default'];
  });

  unwrapExports(camelizeStyle);

  var hyphenate_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = hyphenate;

  var rUpper = /([A-Z])/g;

  function hyphenate(string) {
    return string.replace(rUpper, '-$1').toLowerCase();
  }
  module.exports = exports['default'];
  });

  unwrapExports(hyphenate_1);

  var hyphenateStyle = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = hyphenateStyleName;



  var _hyphenate2 = _interopRequireDefault(hyphenate_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var msPattern = /^ms-/; /**
                           * Copyright 2013-2014, Facebook, Inc.
                           * All rights reserved.
                           * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
                           */

  function hyphenateStyleName(string) {
    return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
  }
  module.exports = exports['default'];
  });

  unwrapExports(hyphenateStyle);

  var getComputedStyle$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _getComputedStyle;



  var _camelizeStyle2 = _interopRequireDefault(camelizeStyle);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var rposition = /^(top|right|bottom|left)$/;
  var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

  function _getComputedStyle(node) {
    if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
    var doc = node.ownerDocument;

    return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
      //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
      getPropertyValue: function getPropertyValue(prop) {
        var style = node.style;

        prop = (0, _camelizeStyle2.default)(prop);

        if (prop == 'float') prop = 'styleFloat';

        var current = node.currentStyle[prop] || null;

        if (current == null && style && style[prop]) current = style[prop];

        if (rnumnonpx.test(current) && !rposition.test(prop)) {
          // Remember the original values
          var left = style.left;
          var runStyle = node.runtimeStyle;
          var rsLeft = runStyle && runStyle.left;

          // Put in the new values to get a computed value out
          if (rsLeft) runStyle.left = node.currentStyle.left;

          style.left = prop === 'fontSize' ? '1em' : current;
          current = style.pixelLeft + 'px';

          // Revert the changed values
          style.left = left;
          if (rsLeft) runStyle.left = rsLeft;
        }

        return current;
      }
    };
  }
  module.exports = exports['default'];
  });

  unwrapExports(getComputedStyle$1);

  var removeStyle_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = removeStyle;
  function removeStyle(node, key) {
    return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
  }
  module.exports = exports['default'];
  });

  unwrapExports(removeStyle_1);

  var properties = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;



  var _inDOM2 = _interopRequireDefault(inDOM);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var transform = 'transform';
  var prefix = void 0,
      transitionEnd = void 0,
      animationEnd = void 0;
  var transitionProperty = void 0,
      transitionDuration = void 0,
      transitionTiming = void 0,
      transitionDelay = void 0;
  var animationName = void 0,
      animationDuration = void 0,
      animationTiming = void 0,
      animationDelay = void 0;

  if (_inDOM2.default) {
    var _getTransitionPropert = getTransitionProperties();

    prefix = _getTransitionPropert.prefix;
    exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
    exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


    exports.transform = transform = prefix + '-' + transform;
    exports.transitionProperty = transitionProperty = prefix + '-transition-property';
    exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
    exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
    exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

    exports.animationName = animationName = prefix + '-animation-name';
    exports.animationDuration = animationDuration = prefix + '-animation-duration';
    exports.animationTiming = animationTiming = prefix + '-animation-delay';
    exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
  }

  exports.transform = transform;
  exports.transitionProperty = transitionProperty;
  exports.transitionTiming = transitionTiming;
  exports.transitionDelay = transitionDelay;
  exports.transitionDuration = transitionDuration;
  exports.transitionEnd = transitionEnd;
  exports.animationName = animationName;
  exports.animationDuration = animationDuration;
  exports.animationTiming = animationTiming;
  exports.animationDelay = animationDelay;
  exports.animationEnd = animationEnd;
  exports.default = {
    transform: transform,
    end: transitionEnd,
    property: transitionProperty,
    timing: transitionTiming,
    delay: transitionDelay,
    duration: transitionDuration
  };


  function getTransitionProperties() {
    var style = document.createElement('div').style;

    var vendorMap = {
      O: function O(e) {
        return 'o' + e.toLowerCase();
      },
      Moz: function Moz(e) {
        return e.toLowerCase();
      },
      Webkit: function Webkit(e) {
        return 'webkit' + e;
      },
      ms: function ms(e) {
        return 'MS' + e;
      }
    };

    var vendors = Object.keys(vendorMap);

    var transitionEnd = void 0,
        animationEnd = void 0;
    var prefix = '';

    for (var i = 0; i < vendors.length; i++) {
      var vendor = vendors[i];

      if (vendor + 'TransitionProperty' in style) {
        prefix = '-' + vendor.toLowerCase();
        transitionEnd = vendorMap[vendor]('TransitionEnd');
        animationEnd = vendorMap[vendor]('AnimationEnd');
        break;
      }
    }

    if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

    if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

    style = null;

    return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
  }
  });

  unwrapExports(properties);
  var properties_1 = properties.animationEnd;
  var properties_2 = properties.animationDelay;
  var properties_3 = properties.animationTiming;
  var properties_4 = properties.animationDuration;
  var properties_5 = properties.animationName;
  var properties_6 = properties.transitionEnd;
  var properties_7 = properties.transitionDuration;
  var properties_8 = properties.transitionDelay;
  var properties_9 = properties.transitionTiming;
  var properties_10 = properties.transitionProperty;
  var properties_11 = properties.transform;

  var isTransform_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isTransform;
  var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

  function isTransform(property) {
    return !!(property && supportedTransforms.test(property));
  }
  module.exports = exports["default"];
  });

  unwrapExports(isTransform_1);

  var style_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = style;



  var _camelizeStyle2 = _interopRequireDefault(camelizeStyle);



  var _hyphenateStyle2 = _interopRequireDefault(hyphenateStyle);



  var _getComputedStyle3 = _interopRequireDefault(getComputedStyle$1);



  var _removeStyle2 = _interopRequireDefault(removeStyle_1);





  var _isTransform2 = _interopRequireDefault(isTransform_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function style(node, property, value) {
    var css = '';
    var transforms = '';
    var props = property;

    if (typeof property === 'string') {
      if (value === undefined) {
        return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
      } else {
        (props = {})[property] = value;
      }
    }

    Object.keys(props).forEach(function (key) {
      var value = props[key];
      if (!value && value !== 0) {
        (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
      } else if ((0, _isTransform2.default)(key)) {
        transforms += key + '(' + value + ') ';
      } else {
        css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
      }
    });

    if (transforms) {
      css += properties.transform + ': ' + transforms + ';';
    }

    node.style.cssText += ';' + css;
  }
  module.exports = exports['default'];
  });

  var css = unwrapExports(style_1);

  var scrollbarSize = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (recalc) {
    if (!size && size !== 0 || recalc) {
      if (_inDOM2.default) {
        var scrollDiv = document.createElement('div');

        scrollDiv.style.position = 'absolute';
        scrollDiv.style.top = '-9999px';
        scrollDiv.style.width = '50px';
        scrollDiv.style.height = '50px';
        scrollDiv.style.overflow = 'scroll';

        document.body.appendChild(scrollDiv);
        size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
      }
    }

    return size;
  };



  var _inDOM2 = _interopRequireDefault(inDOM);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var size = void 0;

  module.exports = exports['default'];
  });

  var getScrollbarSize = unwrapExports(scrollbarSize);

  var isWindow = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getWindow;
  function getWindow(node) {
    return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
  }
  module.exports = exports["default"];
  });

  var isWindow$1 = unwrapExports(isWindow);

  function isBody(node) {
    return node && node.tagName.toLowerCase() === 'body';
  } // Do we have a scroll bar?

  function isOverflowing(container) {
    var doc = ownerDocument(container);
    var win = ownerWindow(doc);
    /* istanbul ignore next */

    if (!isWindow$1(doc) && !isBody(container)) {
      return container.scrollHeight > container.clientHeight;
    } // Takes in account potential non zero margin on the body.


    var style = win.getComputedStyle(doc.body);
    var marginLeft = parseInt(style.getPropertyValue('margin-left'), 10);
    var marginRight = parseInt(style.getPropertyValue('margin-right'), 10);
    return marginLeft + doc.body.clientWidth + marginRight < win.innerWidth;
  }

  var BLACKLIST = ['template', 'script', 'style'];

  function isHidable(node) {
    return node.nodeType === 1 && BLACKLIST.indexOf(node.tagName.toLowerCase()) === -1;
  }

  function siblings(container, mount, callback) {
    mount = [].concat(mount); // eslint-disable-line no-param-reassign

    [].forEach.call(container.children, function (node) {
      if (mount.indexOf(node) === -1 && isHidable(node)) {
        callback(node);
      }
    });
  }

  function ariaHidden(show, node) {
    if (!node) {
      return;
    }

    if (show) {
      node.setAttribute('aria-hidden', 'true');
    } else {
      node.removeAttribute('aria-hidden');
    }
  }
  function hideSiblings(container, mountNode) {
    siblings(container, mountNode, function (node) {
      return ariaHidden(true, node);
    });
  }
  function showSiblings(container, mountNode) {
    siblings(container, mountNode, function (node) {
      return ariaHidden(false, node);
    });
  }

  function findIndexOf(data, callback) {
    var idx = -1;
    data.some(function (item, index) {
      if (callback(item)) {
        idx = index;
        return true;
      }

      return false;
    });
    return idx;
  }

  function getPaddingRight(node) {
    return parseInt(css(node, 'paddingRight') || 0, 10);
  }

  function setContainerStyle(data, container) {
    var style = {
      overflow: 'hidden'
    }; // We are only interested in the actual `style` here because we will override it.

    data.style = {
      overflow: container.style.overflow,
      paddingRight: container.style.paddingRight
    };

    if (data.overflowing) {
      var scrollbarSize$$1 = getScrollbarSize(); // Use computed style, here to get the real padding to add our scrollbar width.

      style.paddingRight = "".concat(getPaddingRight(container) + scrollbarSize$$1, "px"); // .mui-fixed is a global helper.

      var fixedNodes = ownerDocument(container).querySelectorAll('.mui-fixed');

      for (var i = 0; i < fixedNodes.length; i += 1) {
        var paddingRight = getPaddingRight(fixedNodes[i]);
        data.prevPaddings.push(paddingRight);
        fixedNodes[i].style.paddingRight = "".concat(paddingRight + scrollbarSize$$1, "px");
      }
    }

    Object.keys(style).forEach(function (key) {
      container.style[key] = style[key];
    });
  }

  function removeContainerStyle(data, container) {
    Object.keys(data.style).forEach(function (key) {
      container.style[key] = data.style[key];
    });
    var fixedNodes = ownerDocument(container).querySelectorAll('.mui-fixed');

    for (var i = 0; i < fixedNodes.length; i += 1) {
      fixedNodes[i].style.paddingRight = "".concat(data.prevPaddings[i], "px");
    }
  }
  /**
   * @ignore - do not document.
   *
   * Proper state managment for containers and the modals in those containers.
   * Simplified, but inspired by react-overlay's ModalManager class
   * Used by the Modal to ensure proper styling of containers.
   */


  var ModalManager =
  /*#__PURE__*/
  function () {
    function ModalManager() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, ModalManager);

      var _options$hideSiblingN = options.hideSiblingNodes,
          hideSiblingNodes = _options$hideSiblingN === void 0 ? true : _options$hideSiblingN,
          _options$handleContai = options.handleContainerOverflow,
          handleContainerOverflow = _options$handleContai === void 0 ? true : _options$handleContai;
      this.hideSiblingNodes = hideSiblingNodes;
      this.handleContainerOverflow = handleContainerOverflow; // this.modals[modalIdx] = modal

      this.modals = []; // this.containers[containerIdx] = container

      this.containers = []; // this.data[containerIdx] = {
      //   modals: [],
      // }

      this.data = [];
    }

    createClass(ModalManager, [{
      key: "add",
      value: function add(modal, container) {
        var modalIdx = this.modals.indexOf(modal);

        if (modalIdx !== -1) {
          return modalIdx;
        }

        modalIdx = this.modals.length;
        this.modals.push(modal);

        if (this.hideSiblingNodes) {
          hideSiblings(container, modal.mountNode);
        }

        var containerIdx = this.containers.indexOf(container);

        if (containerIdx !== -1) {
          this.data[containerIdx].modals.push(modal);
          return modalIdx;
        }

        var data = {
          modals: [modal],
          overflowing: isOverflowing(container),
          prevPaddings: []
        };

        if (this.handleContainerOverflow) {
          setContainerStyle(data, container);
        }

        this.containers.push(container);
        this.data.push(data);
        return modalIdx;
      }
    }, {
      key: "remove",
      value: function remove(modal) {
        var modalIdx = this.modals.indexOf(modal);

        if (modalIdx === -1) {
          return modalIdx;
        }

        var containerIdx = findIndexOf(this.data, function (item) {
          return item.modals.indexOf(modal) !== -1;
        });
        var data = this.data[containerIdx];
        var container = this.containers[containerIdx];
        data.modals.splice(data.modals.indexOf(modal), 1);
        this.modals.splice(modalIdx, 1); // If that was the last modal in a container, clean up the container.

        if (data.modals.length === 0) {
          if (this.handleContainerOverflow) {
            removeContainerStyle(data, container);
          }

          if (this.hideSiblingNodes) {
            showSiblings(container, modal.mountNode);
          }

          this.containers.splice(containerIdx, 1);
          this.data.splice(containerIdx, 1);
        } else if (this.hideSiblingNodes) {
          // Otherwise make sure the next top modal is visible to a screan reader.
          ariaHidden(false, data.modals[data.modals.length - 1].mountNode);
        }

        return modalIdx;
      }
    }, {
      key: "isTopModal",
      value: function isTopModal(modal) {
        return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
      }
    }]);

    return ModalManager;
  }();

  function getContainer$1(container, defaultContainer) {
    container = typeof container === 'function' ? container() : container;
    return ReactDOM.findDOMNode(container) || defaultContainer;
  }

  function getHasTransition(props) {
    return props.children ? props.children.props.hasOwnProperty('in') : false;
  }

  var styles$25 = function styles(theme) {
    return {
      root: {
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: theme.zIndex.modal,
        top: 0,
        left: 0
      },
      hidden: {
        visibility: 'hidden'
      }
    };
  };

  var Modal =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Modal, _React$Component);

    createClass(Modal, null, [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps) {
        if (nextProps.open) {
          return {
            exited: false
          };
        } else if (!getHasTransition(nextProps)) {
          // Otherwise let handleExited take care of marking exited.
          return {
            exited: true
          };
        }

        return null;
      }
    }]);

    function Modal(props, context) {
      var _this;

      classCallCheck(this, Modal);

      _this = possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props, context));
      _this.dialogElement = null;
      _this.mounted = false;
      _this.mountNode = null;

      _this.handleRendered = function () {
        _this.autoFocus();

        if (_this.props.onRendered) {
          _this.props.onRendered();
        }
      };

      _this.handleOpen = function () {
        var doc = ownerDocument(_this.mountNode);
        var container = getContainer$1(_this.props.container, doc.body);

        _this.props.manager.add(assertThisInitialized(_this), container);

        doc.addEventListener('keydown', _this.handleDocumentKeyDown);
        doc.addEventListener('focus', _this.enforceFocus, true);
      };

      _this.handleClose = function () {
        _this.props.manager.remove(assertThisInitialized(_this));

        var doc = ownerDocument(_this.mountNode);
        doc.removeEventListener('keydown', _this.handleDocumentKeyDown);
        doc.removeEventListener('focus', _this.enforceFocus);

        _this.restoreLastFocus();
      };

      _this.handleExited = function () {
        _this.setState({
          exited: true
        });

        _this.handleClose();
      };

      _this.handleBackdropClick = function (event) {
        if (event.target !== event.currentTarget) {
          return;
        }

        if (_this.props.onBackdropClick) {
          _this.props.onBackdropClick(event);
        }

        if (!_this.props.disableBackdropClick && _this.props.onClose) {
          _this.props.onClose(event, 'backdropClick');
        }
      };

      _this.handleDocumentKeyDown = function (event) {
        if (!_this.isTopModal() || keycode(event) !== 'esc') {
          return;
        }

        if (_this.props.onEscapeKeyDown) {
          _this.props.onEscapeKeyDown(event);
        }

        if (!_this.props.disableEscapeKeyDown && _this.props.onClose) {
          _this.props.onClose(event, 'escapeKeyDown');
        }
      };

      _this.checkForFocus = function () {
        if (inDOM$1) {
          _this.lastFocus = activeElement();
        }
      };

      _this.enforceFocus = function () {
        if (_this.props.disableEnforceFocus || !_this.mounted || !_this.isTopModal()) {
          return;
        }

        var currentActiveElement = activeElement(ownerDocument(_this.mountNode));

        if (_this.dialogElement && !contains$2(_this.dialogElement, currentActiveElement)) {
          _this.dialogElement.focus();
        }
      };

      _this.state = {
        exited: !_this.props.open
      };
      return _this;
    }

    createClass(Modal, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.mounted = true;

        if (this.props.open) {
          this.handleOpen();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (!prevProps.open && this.props.open) {
          this.checkForFocus();
        }

        if (prevProps.open && !this.props.open && !getHasTransition(this.props)) {
          // Otherwise handleExited will call this.
          this.handleClose();
        } else if (!prevProps.open && this.props.open) {
          this.handleOpen();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;

        if (this.props.open || getHasTransition(this.props) && !this.state.exited) {
          this.handleClose();
        }
      }
    }, {
      key: "autoFocus",
      value: function autoFocus() {
        if (this.props.disableAutoFocus) {
          return;
        }

        var currentActiveElement = activeElement(ownerDocument(this.mountNode));

        if (this.dialogElement && !contains$2(this.dialogElement, currentActiveElement)) {
          this.lastFocus = currentActiveElement;

          if (!this.dialogElement.hasAttribute('tabIndex')) {
            warning_1(false, ['Material-UI: the modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n'));
            this.dialogElement.setAttribute('tabIndex', -1);
          }

          this.dialogElement.focus();
        }
      }
    }, {
      key: "restoreLastFocus",
      value: function restoreLastFocus() {
        if (this.props.disableRestoreFocus) {
          return;
        }

        if (this.lastFocus) {
          // Not all elements in IE11 have a focus method.
          // Because IE11 market share is low, we accept the restore focus being broken
          // and we silent the issue.
          if (this.lastFocus.focus) {
            this.lastFocus.focus();
          }

          this.lastFocus = null;
        }
      }
    }, {
      key: "isTopModal",
      value: function isTopModal() {
        return this.props.manager.isTopModal(this);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            BackdropComponent = _props.BackdropComponent,
            BackdropProps = _props.BackdropProps,
            children = _props.children,
            classes = _props.classes,
            className = _props.className,
            container = _props.container,
            disableAutoFocus = _props.disableAutoFocus,
            disableBackdropClick = _props.disableBackdropClick,
            disableEnforceFocus = _props.disableEnforceFocus,
            disableEscapeKeyDown = _props.disableEscapeKeyDown,
            disableRestoreFocus = _props.disableRestoreFocus,
            hideBackdrop = _props.hideBackdrop,
            keepMounted = _props.keepMounted,
            onBackdropClick = _props.onBackdropClick,
            onClose = _props.onClose,
            onEscapeKeyDown = _props.onEscapeKeyDown,
            onRendered = _props.onRendered,
            open = _props.open,
            manager = _props.manager,
            other = objectWithoutProperties(_props, ["BackdropComponent", "BackdropProps", "children", "classes", "className", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disableRestoreFocus", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open", "manager"]);

        var exited = this.state.exited;
        var hasTransition = getHasTransition(this.props);
        var childProps = {};

        if (!keepMounted && !open && (!hasTransition || exited)) {
          return null;
        } // It's a Transition like component


        if (hasTransition) {
          childProps.onExited = createChainedFunction(this.handleExited, children.props.onExited);
        }

        if (children.props.role === undefined) {
          childProps.role = children.props.role || 'document';
        }

        if (children.props.tabIndex === undefined) {
          childProps.tabIndex = children.props.tabIndex || '-1';
        }

        return React__default.createElement(Portal, {
          ref: function ref(node) {
            _this2.mountNode = node ? node.getMountNode() : node;
          },
          container: container,
          onRendered: this.handleRendered
        }, React__default.createElement("div", _extends_1({
          className: classnames(classes.root, className, defineProperty({}, classes.hidden, exited))
        }, other), hideBackdrop ? null : React__default.createElement(BackdropComponent, _extends_1({
          open: open,
          onClick: this.handleBackdropClick
        }, BackdropProps)), React__default.createElement(RootRef, {
          rootRef: function rootRef(node) {
            _this2.dialogElement = node;
          }
        }, React__default.cloneElement(children, childProps))));
      }
    }]);

    return Modal;
  }(React__default.Component);

  Modal.propTypes = {
    /**
     * A backdrop component. This property enables custom backdrop rendering.
     */
    BackdropComponent: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * Properties applied to the `Backdrop` element.
     */
    BackdropProps: propTypes.object,

    /**
     * A single child content element.
     */
    children: propTypes.element,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * A node, component instance, or function that returns either.
     * The `container` will have the portal children appended to it.
     */
    container: propTypes.oneOfType([propTypes.object, propTypes.func]),

    /**
     * If `true`, the modal will not automatically shift focus to itself when it opens, and
     * replace it to the last focused element when it closes.
     * This also works correctly with any modal children that have the `disableAutoFocus` prop.
     *
     * Generally this should never be set to `true` as it makes the modal less
     * accessible to assistive technologies, like screen readers.
     */
    disableAutoFocus: propTypes.bool,

    /**
     * If `true`, clicking the backdrop will not fire any callback.
     */
    disableBackdropClick: propTypes.bool,

    /**
     * If `true`, the modal will not prevent focus from leaving the modal while open.
     *
     * Generally this should never be set to `true` as it makes the modal less
     * accessible to assistive technologies, like screen readers.
     */
    disableEnforceFocus: propTypes.bool,

    /**
     * If `true`, hitting escape will not fire any callback.
     */
    disableEscapeKeyDown: propTypes.bool,

    /**
     * If `true`, the modal will not restore focus to previously focused element once
     * modal is hidden.
     */
    disableRestoreFocus: propTypes.bool,

    /**
     * If `true`, the backdrop is not rendered.
     */
    hideBackdrop: propTypes.bool,

    /**
     * Always keep the children in the DOM.
     * This property can be useful in SEO situation or
     * when you want to maximize the responsiveness of the Modal.
     */
    keepMounted: propTypes.bool,

    /**
     * A modal manager used to track and manage the state of open
     * Modals. This enables customizing how modals interact within a container.
     */
    manager: propTypes.object,

    /**
     * Callback fired when the backdrop is clicked.
     */
    onBackdropClick: propTypes.func,

    /**
     * Callback fired when the component requests to be closed.
     * The `reason` parameter can optionally be used to control the response to `onClose`.
     *
     * @param {object} event The event source of the callback
     * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
     */
    onClose: propTypes.func,

    /**
     * Callback fired when the escape key is pressed,
     * `disableEscapeKeyDown` is false and the modal is in focus.
     */
    onEscapeKeyDown: propTypes.func,

    /**
     * Callback fired once the children has been mounted into the `container`.
     * It signals that the `open={true}` property took effect.
     */
    onRendered: propTypes.func,

    /**
     * If `true`, the modal is open.
     */
    open: propTypes.bool.isRequired
  };
  Modal.defaultProps = {
    disableAutoFocus: false,
    disableBackdropClick: false,
    disableEnforceFocus: false,
    disableEscapeKeyDown: false,
    disableRestoreFocus: false,
    hideBackdrop: false,
    keepMounted: false,
    // Modals don't open on the server so this won't conflict with concurrent requests.
    manager: new ModalManager(),
    BackdropComponent: Backdrop$1
  };
  var Modal$1 = withStyles(styles$25, {
    flip: false,
    name: 'MuiModal'
  })(Modal);

  var styles$26 = function styles(theme) {
    return {
      root: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      paper: {
        display: 'flex',
        margin: theme.spacing.unit * 4,
        flexDirection: 'column',
        flex: '0 1 auto',
        position: 'relative',
        maxHeight: '90vh',
        overflowY: 'auto',
        // Fix IE11 issue, to remove at some point.
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 'none'
      },
      paperWidthXs: {
        maxWidth: Math.max(theme.breakpoints.values.xs, 360)
      },
      paperWidthSm: {
        maxWidth: theme.breakpoints.values.sm
      },
      paperWidthMd: {
        maxWidth: theme.breakpoints.values.md
      },
      paperFullWidth: {
        width: '100%'
      },
      paperFullScreen: {
        margin: 0,
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        maxHeight: '100%',
        borderRadius: 0
      }
    };
  };
  /**
   * Dialogs are overlaid modal paper based components with a backdrop.
   */

  function Dialog(props) {
    var _classNames;

    var BackdropProps = props.BackdropProps,
        children = props.children,
        classes = props.classes,
        className = props.className,
        disableBackdropClick = props.disableBackdropClick,
        disableEscapeKeyDown = props.disableEscapeKeyDown,
        fullScreen = props.fullScreen,
        fullWidth = props.fullWidth,
        maxWidth = props.maxWidth,
        onBackdropClick = props.onBackdropClick,
        onClose = props.onClose,
        onEnter = props.onEnter,
        onEntered = props.onEntered,
        onEntering = props.onEntering,
        onEscapeKeyDown = props.onEscapeKeyDown,
        onExit = props.onExit,
        onExited = props.onExited,
        onExiting = props.onExiting,
        open = props.open,
        PaperProps = props.PaperProps,
        TransitionComponent = props.TransitionComponent,
        transitionDuration = props.transitionDuration,
        TransitionProps = props.TransitionProps,
        other = objectWithoutProperties(props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperProps", "TransitionComponent", "transitionDuration", "TransitionProps"]);

    return React__default.createElement(Modal$1, _extends_1({
      className: classnames(classes.root, className),
      BackdropProps: objectSpread({
        transitionDuration: transitionDuration
      }, BackdropProps),
      disableBackdropClick: disableBackdropClick,
      disableEscapeKeyDown: disableEscapeKeyDown,
      onBackdropClick: onBackdropClick,
      onEscapeKeyDown: onEscapeKeyDown,
      onClose: onClose,
      open: open,
      role: "dialog"
    }, other), React__default.createElement(TransitionComponent, _extends_1({
      appear: true,
      "in": open,
      timeout: transitionDuration,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: onExited
    }, TransitionProps), React__default.createElement(Paper$1, _extends_1({
      elevation: 24,
      className: classnames(classes.paper, (_classNames = {}, defineProperty(_classNames, classes["paperWidth".concat(maxWidth ? capitalize(maxWidth) : '')], maxWidth), defineProperty(_classNames, classes.paperFullScreen, fullScreen), defineProperty(_classNames, classes.paperFullWidth, fullWidth), _classNames))
    }, PaperProps), children)));
  }

  Dialog.propTypes = {
    /**
     * @ignore
     */
    BackdropProps: propTypes.object,

    /**
     * Dialog children, usually the included sub-components.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * If `true`, clicking the backdrop will not fire the `onClose` callback.
     */
    disableBackdropClick: propTypes.bool,

    /**
     * If `true`, hitting escape will not fire the `onClose` callback.
     */
    disableEscapeKeyDown: propTypes.bool,

    /**
     * If `true`, the dialog will be full-screen
     */
    fullScreen: propTypes.bool,

    /**
     * If `true`, the dialog stretches to `maxWidth`.
     */
    fullWidth: propTypes.bool,

    /**
     * Determine the max width of the dialog.
     * The dialog width grows with the size of the screen, this property is useful
     * on the desktop where you might need some coherent different width size across your
     * application. Set to `false` to disable `maxWidth`.
     */
    maxWidth: propTypes.oneOf(['xs', 'sm', 'md', false]),

    /**
     * Callback fired when the backdrop is clicked.
     */
    onBackdropClick: propTypes.func,

    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback
     */
    onClose: propTypes.func,

    /**
     * Callback fired before the dialog enters.
     */
    onEnter: propTypes.func,

    /**
     * Callback fired when the dialog has entered.
     */
    onEntered: propTypes.func,

    /**
     * Callback fired when the dialog is entering.
     */
    onEntering: propTypes.func,

    /**
     * Callback fired when the escape key is pressed,
     * `disableKeyboard` is false and the modal is in focus.
     */
    onEscapeKeyDown: propTypes.func,

    /**
     * Callback fired before the dialog exits.
     */
    onExit: propTypes.func,

    /**
     * Callback fired when the dialog has exited.
     */
    onExited: propTypes.func,

    /**
     * Callback fired when the dialog is exiting.
     */
    onExiting: propTypes.func,

    /**
     * If `true`, the Dialog is open.
     */
    open: propTypes.bool.isRequired,

    /**
     * Properties applied to the `Paper` element.
     */
    PaperProps: propTypes.object,

    /**
     * Transition component.
     */
    TransitionComponent: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    transitionDuration: propTypes.oneOfType([propTypes.number, propTypes.shape({
      enter: propTypes.number,
      exit: propTypes.number
    })]),

    /**
     * Properties applied to the `Transition` element.
     */
    TransitionProps: propTypes.object
  };
  Dialog.defaultProps = {
    disableBackdropClick: false,
    disableEscapeKeyDown: false,
    fullScreen: false,
    fullWidth: false,
    maxWidth: 'sm',
    TransitionComponent: Fade$1,
    transitionDuration: {
      enter: duration.enteringScreen,
      exit: duration.leavingScreen
    }
  };
  var Dialog$1 = withStyles(styles$26, {
    name: 'MuiDialog'
  })(Dialog);

  var styles$27 = function styles(theme) {
    return {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: '0 0 auto',
        margin: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit / 2, "px")
      },
      action: {
        margin: "0 ".concat(theme.spacing.unit / 2, "px"),
        minWidth: 64
      }
    };
  };

  function DialogActions(props) {
    var disableActionSpacing = props.disableActionSpacing,
        children = props.children,
        classes = props.classes,
        className = props.className,
        other = objectWithoutProperties(props, ["disableActionSpacing", "children", "classes", "className"]);

    return React__default.createElement("div", _extends_1({
      className: classnames(classes.root, className)
    }, other), disableActionSpacing ? children : cloneChildrenWithClassName(children, classes.action));
  }

  DialogActions.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * If `true`, the dialog actions do not have additional margin.
     */
    disableActionSpacing: propTypes.bool
  };
  DialogActions.defaultProps = {
    disableActionSpacing: false
  };
  var DialogActions$1 = withStyles(styles$27, {
    name: 'MuiDialogActions'
  })(DialogActions);

  var styles$28 = function styles(theme) {
    var spacing = theme.spacing.unit * 3;
    return {
      root: {
        flex: '1 1 auto',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        // Add iOS momentum scrolling.
        padding: "0 ".concat(spacing, "px ").concat(spacing, "px ").concat(spacing, "px"),
        '&:first-child': {
          paddingTop: spacing
        }
      }
    };
  };

  function DialogContent(props) {
    var classes = props.classes,
        children = props.children,
        className = props.className,
        other = objectWithoutProperties(props, ["classes", "children", "className"]);

    return React__default.createElement("div", _extends_1({
      className: classnames(classes.root, className)
    }, other), children);
  }

  DialogContent.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string
  };
  var DialogContent$1 = withStyles(styles$28, {
    name: 'MuiDialogContent'
  })(DialogContent);

  var styles$29 = function styles(theme) {
    return {
      root: {
        color: theme.palette.text.secondary
      }
    };
  };

  function DialogContentText(props) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        other = objectWithoutProperties(props, ["children", "classes", "className"]);

    return React__default.createElement(Typography$1, _extends_1({
      component: "p",
      variant: "subheading",
      className: classnames(classes.root, className)
    }, other), children);
  }

  DialogContentText.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string
  };
  var DialogContentText$1 = withStyles(styles$29, {
    name: 'MuiDialogContentText'
  })(DialogContentText);

  var styles$30 = function styles(theme) {
    return {
      root: {
        margin: 0,
        padding: "".concat(theme.spacing.unit * 3, "px ").concat(theme.spacing.unit * 3, "px       20px ").concat(theme.spacing.unit * 3, "px"),
        flex: '0 0 auto'
      }
    };
  };

  function DialogTitle(props) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        disableTypography = props.disableTypography,
        other = objectWithoutProperties(props, ["children", "classes", "className", "disableTypography"]);

    return React__default.createElement("div", _extends_1({
      className: classnames(classes.root, className)
    }, other), disableTypography ? children : React__default.createElement(Typography$1, {
      variant: "title"
    }, children));
  }

  DialogTitle.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * If `true`, the children won't be wrapped by a typography component.
     * For instance, this can be useful to render an h4 instead of the default h2.
     */
    disableTypography: propTypes.bool
  };
  DialogTitle.defaultProps = {
    disableTypography: false
  };
  var DialogTitle$1 = withStyles(styles$30, {
    name: 'MuiDialogTitle'
  })(DialogTitle);

  var styles$31 = function styles(theme) {
    return {
      root: {
        height: 1,
        margin: 0,
        // Reset browser default style.
        border: 'none',
        flexShrink: 0,
        backgroundColor: theme.palette.divider
      },
      absolute: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
      },
      inset: {
        marginLeft: theme.spacing.unit * 9
      },
      light: {
        backgroundColor: fade(theme.palette.divider, 0.08)
      }
    };
  };

  function Divider(props) {
    var _classNames;

    var absolute = props.absolute,
        classes = props.classes,
        classNameProp = props.className,
        Component = props.component,
        inset = props.inset,
        light = props.light,
        other = objectWithoutProperties(props, ["absolute", "classes", "className", "component", "inset", "light"]);

    var className = classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.absolute, absolute), defineProperty(_classNames, classes.inset, inset), defineProperty(_classNames, classes.light, light), _classNames), classNameProp);
    return React__default.createElement(Component, _extends_1({
      className: className
    }, other));
  }

  Divider.propTypes = {
    absolute: propTypes.bool,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * If `true`, the divider will be indented.
     */
    inset: propTypes.bool,

    /**
     * If `true`, the divider will have a lighter color.
     */
    light: propTypes.bool
  };
  Divider.defaultProps = {
    absolute: false,
    component: 'hr',
    inset: false,
    light: false
  };
  var Divider$1 = withStyles(styles$31, {
    name: 'MuiDivider'
  })(Divider);

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing. The function also has a property 'clear' 
   * that is a function which will clear the timer to prevent previously scheduled executions. 
   *
   * @source underscore.js
   * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
   * @param {Function} function to wrap
   * @param {Number} timeout in ms (`100`)
   * @param {Boolean} whether to execute at the beginning (`false`)
   * @api public
   */

  var debounce = function debounce(func, wait, immediate){
    var timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;

    function later() {
      var last = Date.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    }
    var debounced = function(){
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };

    debounced.clear = function() {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };
    
    debounced.flush = function() {
      if (timeout) {
        result = func.apply(context, args);
        context = args = null;
        
        clearTimeout(timeout);
        timeout = null;
      }
    };

    return debounced;
  };

  var GUTTER = 24; // Translate the node so he can't be seen on the screen.
  // Later, we gonna translate back the node to his original location
  // with `translate3d(0, 0, 0)`.`

  function getTranslateValue(props, node) {
    var direction = props.direction;
    var rect = node.getBoundingClientRect();
    var transform;

    if (node.fakeTransform) {
      transform = node.fakeTransform;
    } else {
      var computedStyle = ownerWindow(node).getComputedStyle(node);
      transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
    }

    var offsetX = 0;
    var offsetY = 0;

    if (transform && transform !== 'none' && typeof transform === 'string') {
      var transformValues = transform.split('(')[1].split(')')[0].split(',');
      offsetX = parseInt(transformValues[4], 10);
      offsetY = parseInt(transformValues[5], 10);
    }

    if (direction === 'left') {
      return "translateX(100vw) translateX(-".concat(rect.left - offsetX, "px)");
    } else if (direction === 'right') {
      return "translateX(-".concat(rect.left + rect.width + GUTTER - offsetX, "px)");
    } else if (direction === 'up') {
      return "translateY(100vh) translateY(-".concat(rect.top - offsetY, "px)");
    } // direction === 'down'


    return "translateY(-".concat(rect.top + rect.height + GUTTER - offsetY, "px)");
  }

  function setTranslateValue(props, node) {
    var transform = getTranslateValue(props, node);

    if (transform) {
      node.style.webkitTransform = transform;
      node.style.transform = transform;
    }
  }
  /**
   * The Slide transition is used by the [Snackbar](/demos/snackbars) component.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  var Slide =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Slide, _React$Component);

    function Slide() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, Slide);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = Slide.__proto__ || Object.getPrototypeOf(Slide)).call.apply(_ref, [this].concat(args))), _this.mounted = false, _this.transition = null, _this.handleResize = debounce(function () {
        // Skip configuration where the position is screen size invariant.
        if (_this.props.in || _this.props.direction === 'down' || _this.props.direction === 'right') {
          return;
        }

        var node = ReactDOM.findDOMNode(_this.transition);

        if (node) {
          setTranslateValue(_this.props, node);
        }
      }, 166), _this.handleEnter = function (node) {
        setTranslateValue(_this.props, node);
        reflow(node);

        if (_this.props.onEnter) {
          _this.props.onEnter(node);
        }
      }, _this.handleEntering = function (node) {
        var theme = _this.props.theme;
        var transitionProps = getTransitionProps(_this.props, {
          mode: 'enter'
        });
        node.style.webkitTransition = theme.transitions.create('-webkit-transform', objectSpread({}, transitionProps, {
          easing: theme.transitions.easing.easeOut
        }));
        node.style.transition = theme.transitions.create('transform', objectSpread({}, transitionProps, {
          easing: theme.transitions.easing.easeOut
        }));
        node.style.webkitTransform = 'translate(0, 0)';
        node.style.transform = 'translate(0, 0)';

        if (_this.props.onEntering) {
          _this.props.onEntering(node);
        }
      }, _this.handleExit = function (node) {
        var theme = _this.props.theme;
        var transitionProps = getTransitionProps(_this.props, {
          mode: 'exit'
        });
        node.style.webkitTransition = theme.transitions.create('-webkit-transform', objectSpread({}, transitionProps, {
          easing: theme.transitions.easing.sharp
        }));
        node.style.transition = theme.transitions.create('transform', objectSpread({}, transitionProps, {
          easing: theme.transitions.easing.sharp
        }));
        setTranslateValue(_this.props, node);

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      }, _this.handleExited = function (node) {
        // No need for transitions when the component is hidden
        node.style.webkitTransition = '';
        node.style.transition = '';

        if (_this.props.onExited) {
          _this.props.onExited(node);
        }
      }, _temp));
    }

    createClass(Slide, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // state.mounted handle SSR, once the component is mounted, we need
        // to properly hide it.
        if (!this.props.in) {
          // We need to set initial translate values of transition element
          // otherwise component will be shown when in=false.
          this.updatePosition();
        }

        this.mounted = true;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.direction !== this.props.direction && !this.props.in) {
          // We need to update the position of the drawer when the direction change and
          // when it's hidden.
          this.updatePosition();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.handleResize.clear();
      }
    }, {
      key: "updatePosition",
      value: function updatePosition() {
        var node = ReactDOM.findDOMNode(this.transition);

        if (node) {
          node.style.visibility = 'inherit';
          setTranslateValue(this.props, node);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            onEnter = _props.onEnter,
            onEntering = _props.onEntering,
            onExit = _props.onExit,
            onExited = _props.onExited,
            styleProp = _props.style,
            theme = _props.theme,
            other = objectWithoutProperties(_props, ["children", "onEnter", "onEntering", "onExit", "onExited", "style", "theme"]);

        var style = {}; // We use this state to handle the server-side rendering.
        // We don't know the width of the children ahead of time.
        // We need to render it.

        if (!this.props.in && !this.mounted) {
          style.visibility = 'hidden';
        }

        style = objectSpread({}, style, styleProp, React__default.isValidElement(children) ? children.props.style : {});
        return React__default.createElement(EventListener, {
          target: "window",
          onResize: this.handleResize
        }, React__default.createElement(Transition, _extends_1({
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onExit: this.handleExit,
          onExited: this.handleExited,
          appear: true,
          style: style,
          ref: function ref(node) {
            _this2.transition = node;
          }
        }, other), children));
      }
    }]);

    return Slide;
  }(React__default.Component);

  Slide.propTypes = {
    /**
     * A single child content element.
     */
    children: propTypes.oneOfType([propTypes.element, propTypes.func]),

    /**
     * Direction the child node will enter from.
     */
    direction: propTypes.oneOf(['left', 'right', 'up', 'down']),

    /**
     * If `true`, show the component; triggers the enter or exit animation.
     */
    in: propTypes.bool,

    /**
     * @ignore
     */
    onEnter: propTypes.func,

    /**
     * @ignore
     */
    onEntering: propTypes.func,

    /**
     * @ignore
     */
    onExit: propTypes.func,

    /**
     * @ignore
     */
    onExited: propTypes.func,

    /**
     * @ignore
     */
    style: propTypes.object,

    /**
     * @ignore
     */
    theme: propTypes.object.isRequired,

    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    timeout: propTypes.oneOfType([propTypes.number, propTypes.shape({
      enter: propTypes.number,
      exit: propTypes.number
    })])
  };
  Slide.defaultProps = {
    direction: 'down',
    timeout: {
      enter: duration.enteringScreen,
      exit: duration.leavingScreen
    }
  };
  var Slide$1 = withTheme()(Slide);

  var oppositeDirection = {
    left: 'right',
    right: 'left',
    top: 'down',
    bottom: 'up'
  };
  function isHorizontal(props) {
    return ['left', 'right'].indexOf(props.anchor) !== -1;
  }
  function getAnchor(props) {
    return props.theme.direction === 'rtl' && isHorizontal(props) ? oppositeDirection[props.anchor] : props.anchor;
  }
  var styles$32 = function styles(theme) {
    return {
      docked: {
        flex: '0 0 auto'
      },
      paper: {
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        flex: '1 0 auto',
        zIndex: theme.zIndex.drawer,
        WebkitOverflowScrolling: 'touch',
        // Add iOS momentum scrolling.
        // temporary style
        position: 'fixed',
        top: 0,
        // We disable the focus ring for mouse, touch and keyboard users.
        // At some point, it would be better to keep it for keyboard users.
        // :focus-ring CSS pseudo-class will help.
        outline: 'none'
      },
      paperAnchorLeft: {
        left: 0,
        right: 'auto'
      },
      paperAnchorRight: {
        left: 'auto',
        right: 0
      },
      paperAnchorTop: {
        top: 0,
        left: 0,
        bottom: 'auto',
        right: 0,
        height: 'auto',
        maxHeight: '100vh'
      },
      paperAnchorBottom: {
        top: 'auto',
        left: 0,
        bottom: 0,
        right: 0,
        height: 'auto',
        maxHeight: '100vh'
      },
      paperAnchorDockedLeft: {
        borderRight: "1px solid ".concat(theme.palette.divider)
      },
      paperAnchorDockedTop: {
        borderBottom: "1px solid ".concat(theme.palette.divider)
      },
      paperAnchorDockedRight: {
        borderLeft: "1px solid ".concat(theme.palette.divider)
      },
      paperAnchorDockedBottom: {
        borderTop: "1px solid ".concat(theme.palette.divider)
      },
      modal: {} // Just here so people can override the style.

    };
  };
  /**
   * The properties of the [Modal](/api/modal) component are available
   * when `variant="temporary"` is set.
   */

  var Drawer =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Drawer, _React$Component);

    function Drawer() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, Drawer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call.apply(_ref, [this].concat(args))), _this.mounted = false, _temp));
    }

    createClass(Drawer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.mounted = true;
      } // Let's assume that the Drawer will always be rendered on user space.
      // We use that state is order to skip the appear transition during the
      // initial mount of the component.

    }, {
      key: "render",
      value: function render() {
        var _props = this.props,
            anchorProp = _props.anchor,
            children = _props.children,
            classes = _props.classes,
            className = _props.className,
            elevation = _props.elevation,
            _props$ModalProps = _props.ModalProps;
        _props$ModalProps = _props$ModalProps === void 0 ? {} : _props$ModalProps;

        var BackdropPropsProp = _props$ModalProps.BackdropProps,
            ModalProps = objectWithoutProperties(_props$ModalProps, ["BackdropProps"]),
            onClose = _props.onClose,
            open = _props.open,
            PaperProps = _props.PaperProps,
            SlideProps = _props.SlideProps,
            theme = _props.theme,
            transitionDuration = _props.transitionDuration,
            variant = _props.variant,
            other = objectWithoutProperties(_props, ["anchor", "children", "classes", "className", "elevation", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "theme", "transitionDuration", "variant"]);

        var anchor = getAnchor(this.props);
        var drawer = React__default.createElement(Paper$1, _extends_1({
          elevation: variant === 'temporary' ? elevation : 0,
          square: true,
          className: classnames(classes.paper, classes["paperAnchor".concat(capitalize(anchor))], defineProperty({}, classes["paperAnchorDocked".concat(capitalize(anchor))], variant !== 'temporary'))
        }, PaperProps), children);

        if (variant === 'permanent') {
          return React__default.createElement("div", _extends_1({
            className: classnames(classes.docked, className)
          }, other), drawer);
        }

        var slidingDrawer = React__default.createElement(Slide$1, _extends_1({
          "in": open,
          direction: oppositeDirection[anchor],
          timeout: transitionDuration,
          appear: this.mounted
        }, SlideProps), drawer);

        if (variant === 'persistent') {
          return React__default.createElement("div", _extends_1({
            className: classnames(classes.docked, className)
          }, other), slidingDrawer);
        } // variant === temporary


        return React__default.createElement(Modal$1, _extends_1({
          BackdropProps: objectSpread({}, BackdropPropsProp, {
            transitionDuration: transitionDuration
          }),
          className: classnames(classes.modal, className),
          open: open,
          onClose: onClose
        }, other, ModalProps), slidingDrawer);
      }
    }]);

    return Drawer;
  }(React__default.Component);

  Drawer.propTypes = {
    /**
     * Side from which the drawer will appear.
     */
    anchor: propTypes.oneOf(['left', 'top', 'right', 'bottom']),

    /**
     * The contents of the drawer.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The elevation of the drawer.
     */
    elevation: propTypes.number,

    /**
     * Properties applied to the `Modal` element.
     */
    ModalProps: propTypes.object,

    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback
     */
    onClose: propTypes.func,

    /**
     * If `true`, the drawer is open.
     */
    open: propTypes.bool,

    /**
     * Properties applied to the `Paper` element.
     */
    PaperProps: propTypes.object,

    /**
     * Properties applied to the `Slide` element.
     */
    SlideProps: propTypes.object,

    /**
     * @ignore
     */
    theme: propTypes.object.isRequired,

    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    transitionDuration: propTypes.oneOfType([propTypes.number, propTypes.shape({
      enter: propTypes.number,
      exit: propTypes.number
    })]),

    /**
     * The variant of drawer.
     */
    variant: propTypes.oneOf(['permanent', 'persistent', 'temporary'])
  };
  Drawer.defaultProps = {
    anchor: 'left',
    elevation: 16,
    open: false,
    transitionDuration: {
      enter: duration.enteringScreen,
      exit: duration.leavingScreen
    },
    variant: 'temporary' // Mobile first.

  };
  var Drawer$1 = withStyles(styles$32, {
    name: 'MuiDrawer',
    flip: false,
    withTheme: true
  })(Drawer);

  var edgeFix = typeof window !== 'undefined' && /jsdom/.test(window.navigator.userAgent) ? {} : {
    // Fix a rendering issue on Edge
    '@supports (-ms-ime-align: auto)': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }
  };
  var styles$33 = function styles(theme) {
    var transition = {
      duration: theme.transitions.duration.shortest
    };
    return {
      root: {
        position: 'relative',
        transition: theme.transitions.create(['margin'], transition),
        '&:before': {
          position: 'absolute',
          left: 0,
          top: -1,
          right: 0,
          height: 1,
          content: '""',
          opacity: 1,
          backgroundColor: theme.palette.divider,
          transition: theme.transitions.create(['opacity', 'background-color'], transition)
        },
        '&:first-child': {
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2,
          '&:before': {
            display: 'none'
          }
        },
        '&:last-child': objectSpread({
          borderBottomLeftRadius: 2,
          borderBottomRightRadius: 2
        }, edgeFix),
        '&$expanded + &': {
          '&:before': {
            display: 'none'
          }
        }
      },
      expanded: {
        margin: "".concat(theme.spacing.unit * 2, "px 0"),
        '&:first-child': {
          marginTop: 0
        },
        '&:last-child': {
          marginBottom: 0
        },
        '&:before': {
          opacity: 0
        }
      },
      disabled: {
        backgroundColor: theme.palette.action.disabledBackground
      }
    };
  };

  var ExpansionPanel =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(ExpansionPanel, _React$Component);

    function ExpansionPanel(props, context) {
      var _this;

      classCallCheck(this, ExpansionPanel);

      _this = possibleConstructorReturn(this, (ExpansionPanel.__proto__ || Object.getPrototypeOf(ExpansionPanel)).call(this, props, context));
      _this.state = {};
      _this.isControlled = null;

      _this.handleChange = function (event) {
        var expanded = _this.isControlled ? _this.props.expanded : _this.state.expanded;

        if (!_this.isControlled) {
          _this.setState({
            expanded: !expanded
          });
        }

        if (_this.props.onChange) {
          _this.props.onChange(event, !expanded);
        }
      };

      _this.isControlled = props.expanded != null;

      if (!_this.isControlled) {
        // not controlled, use internal state
        _this.state.expanded = props.defaultExpanded !== undefined ? props.defaultExpanded : false;
      }

      return _this;
    }

    createClass(ExpansionPanel, [{
      key: "render",
      value: function render() {
        var _classNames,
            _this2 = this;

        var _props = this.props,
            childrenProp = _props.children,
            classes = _props.classes,
            classNameProp = _props.className,
            CollapsePropsProp = _props.CollapseProps,
            defaultExpanded = _props.defaultExpanded,
            disabled = _props.disabled,
            expandedProp = _props.expanded,
            onChange = _props.onChange,
            other = objectWithoutProperties(_props, ["children", "classes", "className", "CollapseProps", "defaultExpanded", "disabled", "expanded", "onChange"]);

        var expanded = this.isControlled ? expandedProp : this.state.expanded;
        var className = classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.expanded, expanded), defineProperty(_classNames, classes.disabled, disabled), _classNames), classNameProp);
        var summary = null;
        var children = React__default.Children.map(childrenProp, function (child) {
          if (!React__default.isValidElement(child)) {
            return null;
          }

          if (isMuiElement(child, ['ExpansionPanelSummary'])) {
            summary = React__default.cloneElement(child, {
              disabled: disabled,
              expanded: expanded,
              onChange: _this2.handleChange
            });
            return null;
          }

          return child;
        });
        var CollapseProps = !expanded ? {
          'aria-hidden': 'true'
        } : null;
        return React__default.createElement(Paper$1, _extends_1({
          className: className,
          elevation: 1,
          square: true
        }, other), summary, React__default.createElement(Collapse$1, _extends_1({
          "in": expanded,
          timeout: "auto"
        }, CollapseProps, CollapsePropsProp), children));
      }
    }]);

    return ExpansionPanel;
  }(React__default.Component);

  ExpansionPanel.propTypes = {
    /**
     * The content of the expansion panel.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * Properties applied to the `Collapse` element.
     */
    CollapseProps: propTypes.object,

    /**
     * If `true`, expands the panel by default.
     */
    defaultExpanded: propTypes.bool,

    /**
     * If `true`, the panel will be displayed in a disabled state.
     */
    disabled: propTypes.bool,

    /**
     * If `true`, expands the panel, otherwise collapse it.
     * Setting this prop enables control over the panel.
     */
    expanded: propTypes.bool,

    /**
     * Callback fired when the expand/collapse state is changed.
     *
     * @param {object} event The event source of the callback
     * @param {boolean} expanded The `expanded` state of the panel
     */
    onChange: propTypes.func
  };
  ExpansionPanel.defaultProps = {
    defaultExpanded: false,
    disabled: false
  };
  var ExpansionPanel$1 = withStyles(styles$33, {
    name: 'MuiExpansionPanel'
  })(ExpansionPanel);

  var styles$34 = function styles(theme) {
    return {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: "".concat(theme.spacing.unit * 2, "px ").concat(theme.spacing.unit, "px")
      },
      action: {
        marginLeft: theme.spacing.unit
      }
    };
  };

  function ExpansionPanelActions(props) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        other = objectWithoutProperties(props, ["children", "classes", "className"]);

    return React__default.createElement("div", _extends_1({
      className: classnames(classes.root, className)
    }, other), cloneChildrenWithClassName(children, classes.action));
  }

  ExpansionPanelActions.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string
  };
  var ExpansionPanelActions$1 = withStyles(styles$34, {
    name: 'MuiExpansionPanelActions'
  })(ExpansionPanelActions);

  var styles$35 = function styles(theme) {
    return {
      root: {
        display: 'flex',
        padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 3, "px ").concat(theme.spacing.unit * 3, "px")
      }
    };
  };

  function ExpansionPanelDetails(props) {
    var classes = props.classes,
        children = props.children,
        className = props.className,
        other = objectWithoutProperties(props, ["classes", "children", "className"]);

    return React__default.createElement("div", _extends_1({
      className: classnames(classes.root, className)
    }, other), children);
  }

  ExpansionPanelDetails.propTypes = {
    /**
     * The content of the expansion panel details.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string
  };
  var ExpansionPanelDetails$1 = withStyles(styles$35, {
    name: 'MuiExpansionPanelDetails'
  })(ExpansionPanelDetails);

  var styles$36 = function styles(theme) {
    var transition = {
      duration: theme.transitions.duration.shortest
    };
    return {
      root: {
        display: 'flex',
        minHeight: theme.spacing.unit * 6,
        transition: theme.transitions.create(['min-height', 'background-color'], transition),
        padding: "0 ".concat(theme.spacing.unit * 3, "px 0 ").concat(theme.spacing.unit * 3, "px"),
        '&:hover:not($disabled)': {
          cursor: 'pointer'
        },
        '&$expanded': {
          minHeight: 64
        },
        '&$focused': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          opacity: 0.38
        }
      },
      expanded: {},
      focused: {},
      disabled: {},
      content: {
        display: 'flex',
        flexGrow: 1,
        transition: theme.transitions.create(['margin'], transition),
        margin: '12px 0',
        '& > :last-child': {
          paddingRight: theme.spacing.unit * 4
        },
        '&$expanded': {
          margin: '20px 0'
        }
      },
      expandIcon: {
        position: 'absolute',
        top: '50%',
        right: theme.spacing.unit,
        transform: 'translateY(-50%) rotate(0deg)',
        transition: theme.transitions.create('transform', transition),
        '&:hover': {
          // Disable the hover effect for the IconButton,
          // because a hover effect should apply to the entire Expand button and
          // not only to the IconButton.
          backgroundColor: 'transparent'
        },
        '&$expanded': {
          transform: 'translateY(-50%) rotate(180deg)'
        }
      }
    };
  };

  var ExpansionPanelSummary =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(ExpansionPanelSummary, _React$Component);

    function ExpansionPanelSummary() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, ExpansionPanelSummary);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = ExpansionPanelSummary.__proto__ || Object.getPrototypeOf(ExpansionPanelSummary)).call.apply(_ref, [this].concat(args))), _this.state = {
        focused: false
      }, _this.handleFocus = function () {
        _this.setState({
          focused: true
        });
      }, _this.handleBlur = function () {
        _this.setState({
          focused: false
        });
      }, _this.handleChange = function (event) {
        var _this$props = _this.props,
            onChange = _this$props.onChange,
            onClick = _this$props.onClick;

        if (onChange) {
          onChange(event);
        }

        if (onClick) {
          onClick(event);
        }
      }, _temp));
    }

    createClass(ExpansionPanelSummary, [{
      key: "render",
      value: function render() {
        var _classNames;

        var _props = this.props,
            children = _props.children,
            classes = _props.classes,
            className = _props.className,
            disabled = _props.disabled,
            expanded = _props.expanded,
            expandIcon = _props.expandIcon,
            onChange = _props.onChange,
            other = objectWithoutProperties(_props, ["children", "classes", "className", "disabled", "expanded", "expandIcon", "onChange"]);

        var focused = this.state.focused;
        return React__default.createElement(ButtonBase$1, _extends_1({
          focusRipple: false,
          disableRipple: true,
          disabled: disabled,
          component: "div",
          "aria-expanded": expanded,
          className: classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.disabled, disabled), defineProperty(_classNames, classes.expanded, expanded), defineProperty(_classNames, classes.focused, focused), _classNames), className)
        }, other, {
          onFocusVisible: this.handleFocus,
          onBlur: this.handleBlur,
          onClick: this.handleChange
        }), React__default.createElement("div", {
          className: classnames(classes.content, defineProperty({}, classes.expanded, expanded))
        }, children), expandIcon && React__default.createElement(IconButton$1, {
          disabled: disabled,
          className: classnames(classes.expandIcon, defineProperty({}, classes.expanded, expanded)),
          component: "div",
          tabIndex: -1,
          "aria-hidden": "true"
        }, expandIcon));
      }
    }]);

    return ExpansionPanelSummary;
  }(React__default.Component);

  ExpansionPanelSummary.propTypes = {
    /**
     * The content of the expansion panel summary.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * @ignore
     * If `true`, the summary will be displayed in a disabled state.
     */
    disabled: propTypes.bool,

    /**
     * @ignore
     * If `true`, expands the summary, otherwise collapse it.
     */
    expanded: propTypes.bool,

    /**
     * The icon to display as the expand indicator.
     */
    expandIcon: propTypes.node,

    /**
     * @ignore
     */
    onChange: propTypes.func,

    /**
     * @ignore
     */
    onClick: propTypes.func
  };
  ExpansionPanelSummary.defaultProps = {
    disabled: false
  };
  ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';
  var ExpansionPanelSummary$1 = withStyles(styles$36, {
    name: 'MuiExpansionPanelSummary'
  })(ExpansionPanelSummary);

  var ROWS_HEIGHT = 19;
  var styles$37 = {
    root: {
      position: 'relative',
      // because the shadow has position: 'absolute',
      width: '100%'
    },
    textarea: {
      width: '100%',
      height: '100%',
      resize: 'none',
      font: 'inherit',
      padding: 0,
      cursor: 'inherit',
      boxSizing: 'border-box',
      lineHeight: 'inherit',
      border: 'none',
      outline: 'none',
      background: 'transparent'
    },
    shadow: {
      resize: 'none',
      // Overflow also needed to here to remove the extra row
      // added to textareas in Firefox.
      overflow: 'hidden',
      // Visibility needed to hide the extra text area on ipads
      visibility: 'hidden',
      position: 'absolute',
      height: 'auto',
      whiteSpace: 'pre-wrap'
    }
  };
  /**
   * @ignore - internal component.
   */

  var Textarea =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Textarea, _React$Component);

    function Textarea(props, context) {
      var _this;

      classCallCheck(this, Textarea);

      _this = possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props, context)); // <Input> expects the components it renders to respond to 'value'
      // so that it can check whether they are filled.

      _this.state = {
        height: null
      };
      _this.shadow = null;
      _this.singlelineShadow = null;
      _this.input = null;
      _this.value = null;
      _this.handleResize = debounce(function () {
        _this.syncHeightWithShadow();
      }, 166);

      _this.handleRefInput = function (node) {
        _this.input = node;

        if (_this.props.textareaRef) {
          _this.props.textareaRef(node);
        }
      };

      _this.handleRefSinglelineShadow = function (node) {
        _this.singlelineShadow = node;
      };

      _this.handleRefShadow = function (node) {
        _this.shadow = node;
      };

      _this.handleChange = function (event) {
        _this.value = event.target.value;

        if (typeof _this.props.value === 'undefined' && _this.shadow) {
          // The component is not controlled, we need to update the shallow value.
          _this.shadow.value = _this.value;

          _this.syncHeightWithShadow();
        }

        if (_this.props.onChange) {
          _this.props.onChange(event);
        }
      };

      _this.value = props.value || props.defaultValue || '';
      _this.state = {
        height: Number(props.rows) * ROWS_HEIGHT
      };
      return _this;
    }

    createClass(Textarea, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.syncHeightWithShadow();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.syncHeightWithShadow();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.handleResize.clear();
      }
    }, {
      key: "syncHeightWithShadow",
      // Corresponds to 10 frames at 60 Hz.
      value: function syncHeightWithShadow() {
        var props = this.props;

        if (!this.shadow || !this.singlelineShadow) {
          return;
        } // The component is controlled, we need to update the shallow value.


        if (typeof props.value !== 'undefined') {
          this.shadow.value = props.value == null ? '' : String(props.value);
        }

        var lineHeight = this.singlelineShadow.scrollHeight;
        var newHeight = this.shadow.scrollHeight; // Guarding for jsdom, where scrollHeight isn't present.
        // See https://github.com/tmpvar/jsdom/issues/1013

        if (newHeight === undefined) {
          return;
        }

        if (Number(props.rowsMax) >= Number(props.rows)) {
          newHeight = Math.min(Number(props.rowsMax) * lineHeight, newHeight);
        }

        newHeight = Math.max(newHeight, lineHeight); // Need a large enough different to update the height.
        // This prevents infinite rendering loop.

        if (Math.abs(this.state.height - newHeight) > 1) {
          this.setState({
            height: newHeight
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _props = this.props,
            classes = _props.classes,
            className = _props.className,
            defaultValue = _props.defaultValue,
            onChange = _props.onChange,
            rows = _props.rows,
            rowsMax = _props.rowsMax,
            textareaRef = _props.textareaRef,
            value = _props.value,
            other = objectWithoutProperties(_props, ["classes", "className", "defaultValue", "onChange", "rows", "rowsMax", "textareaRef", "value"]);

        return React__default.createElement("div", {
          className: classes.root,
          style: {
            height: this.state.height
          }
        }, React__default.createElement(EventListener, {
          target: "window",
          onResize: this.handleResize
        }), React__default.createElement("textarea", {
          ref: this.handleRefSinglelineShadow,
          className: classnames(classes.shadow, classes.textarea),
          tabIndex: -1,
          rows: "1",
          readOnly: true,
          "aria-hidden": "true",
          value: ""
        }), React__default.createElement("textarea", {
          ref: this.handleRefShadow,
          className: classnames(classes.shadow, classes.textarea),
          tabIndex: -1,
          rows: rows,
          "aria-hidden": "true",
          readOnly: true,
          defaultValue: defaultValue,
          value: value
        }), React__default.createElement("textarea", _extends_1({
          rows: rows,
          className: classnames(classes.textarea, className),
          defaultValue: defaultValue,
          value: value,
          onChange: this.handleChange,
          ref: this.handleRefInput
        }, other)));
      }
    }]);

    return Textarea;
  }(React__default.Component);

  Textarea.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * @ignore
     */
    defaultValue: propTypes.oneOfType([propTypes.string, propTypes.number]),

    /**
     * @ignore
     */
    disabled: propTypes.bool,

    /**
     * @ignore
     */
    onChange: propTypes.func,

    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows: propTypes.oneOfType([propTypes.string, propTypes.number]),

    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    rowsMax: propTypes.oneOfType([propTypes.string, propTypes.number]),

    /**
     * Use that property to pass a ref callback to the native textarea element.
     */
    textareaRef: propTypes.func,

    /**
     * @ignore
     */
    value: propTypes.oneOfType([propTypes.string, propTypes.number])
  };
  Textarea.defaultProps = {
    rows: 1
  };
  var Textarea$1 = withStyles(styles$37)(Textarea);

  // Controlled input accepts its current value as a prop.
  //
  // @see https://facebook.github.io/react/docs/forms.html#controlled-components
  // @param value
  // @returns {boolean} true if string (including '') or number (including zero)

  function hasValue(value) {
    return value != null && !(Array.isArray(value) && value.length === 0);
  } // Determine if field is empty or filled.
  // Response determines if label is presented above field or as placeholder.
  //
  // @param obj
  // @param SSR
  // @returns {boolean} False when not present or empty string.
  //                    True when any number or string with length.

  function isFilled(obj) {
    var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
  } // Determine if an Input is adorned on start.
  // It's corresponding to the left with LTR.
  //
  // @param obj
  // @returns {boolean} False when no adornments.
  //                    True when adorned at the start.

  function isAdornedStart(obj) {
    return obj.startAdornment;
  }
  var styles$38 = function styles(theme) {
    var light = theme.palette.type === 'light';
    var placeholder = {
      color: 'currentColor',
      opacity: light ? 0.42 : 0.5,
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shorter
      })
    };
    var placeholderHidden = {
      opacity: 0
    };
    var placeholderVisible = {
      opacity: light ? 0.42 : 0.5
    };
    var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
    return {
      root: {
        // Mimics the default input display property used by browsers for an input.
        display: 'inline-flex',
        position: 'relative',
        fontFamily: theme.typography.fontFamily,
        color: light ? 'rgba(0, 0, 0, 0.87)' : theme.palette.common.white,
        fontSize: theme.typography.pxToRem(16),
        lineHeight: '1.1875em',
        // Reset (19px), match the native input line-height
        '&$disabled': {
          color: theme.palette.text.disabled
        }
      },
      formControl: {
        'label + &': {
          marginTop: theme.spacing.unit * 2
        }
      },
      focused: {},
      disabled: {},
      underline: {
        '&:after': {
          borderBottom: "2px solid ".concat(theme.palette.primary[light ? 'dark' : 'light']),
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: 'absolute',
          right: 0,
          transform: 'scaleX(0)',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: 'none' // Transparent to the hover style.

        },
        '&$focused:after': {
          transform: 'scaleX(1)'
        },
        '&$error:after': {
          borderBottomColor: theme.palette.error.main,
          transform: 'scaleX(1)' // error is always underlined in red

        },
        '&:before': {
          borderBottom: "1px solid ".concat(bottomLineColor),
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"need text here to prevent subpixel zoom issue"',
          color: 'transparent',
          position: 'absolute',
          right: 0,
          transition: theme.transitions.create('border-bottom-color', {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: 'none' // Transparent to the hover style.

        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: "2px solid ".concat(theme.palette.text.primary)
        },
        '&$disabled:before': {
          borderBottom: "1px dotted ".concat(bottomLineColor)
        }
      },
      error: {},
      multiline: {
        padding: "".concat(theme.spacing.unit - 2, "px 0 ").concat(theme.spacing.unit - 1, "px")
      },
      fullWidth: {
        width: '100%'
      },
      input: {
        font: 'inherit',
        color: 'currentColor',
        padding: "".concat(theme.spacing.unit - 2, "px 0 ").concat(theme.spacing.unit - 1, "px"),
        border: 0,
        boxSizing: 'content-box',
        verticalAlign: 'middle',
        background: 'none',
        margin: 0,
        // Reset for Safari
        // Remove grey highlight
        WebkitTapHighlightColor: 'transparent',
        display: 'block',
        // Make the flex item shrink with Firefox
        minWidth: 0,
        flexGrow: 1,
        '&::-webkit-input-placeholder': placeholder,
        '&::-moz-placeholder': placeholder,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholder,
        // IE 11
        '&::-ms-input-placeholder': placeholder,
        // Edge
        '&:focus': {
          outline: 0
        },
        // Reset Firefox invalid required input style
        '&:invalid': {
          boxShadow: 'none'
        },
        '&::-webkit-search-decoration': {
          // Remove the padding when type=search.
          '-webkit-appearance': 'none'
        },
        // Show and hide the placeholder logic
        'label[data-shrink=false] + $formControl &': {
          '&::-webkit-input-placeholder': placeholderHidden,
          '&::-moz-placeholder': placeholderHidden,
          // Firefox 19+
          '&:-ms-input-placeholder': placeholderHidden,
          // IE 11
          '&::-ms-input-placeholder': placeholderHidden,
          // Edge
          '&:focus::-webkit-input-placeholder': placeholderVisible,
          '&:focus::-moz-placeholder': placeholderVisible,
          // Firefox 19+
          '&:focus:-ms-input-placeholder': placeholderVisible,
          // IE 11
          '&:focus::-ms-input-placeholder': placeholderVisible // Edge

        },
        '&$disabled': {
          opacity: 1 // Reset iOS opacity

        }
      },
      inputMarginDense: {
        paddingTop: theme.spacing.unit / 2 - 1
      },
      inputMultiline: {
        resize: 'none',
        padding: 0
      },
      inputType: {
        // type="date" or type="time", etc. have specific styles we need to reset.
        height: '1.1875em' // Reset (19px), match the native input line-height

      },
      inputTypeSearch: {
        // Improve type search style.
        '-moz-appearance': 'textfield',
        '-webkit-appearance': 'textfield'
      }
    };
  };

  function formControlState(props, context) {
    var disabled = props.disabled;
    var error = props.error;
    var margin = props.margin;

    if (context && context.muiFormControl) {
      if (typeof disabled === 'undefined') {
        disabled = context.muiFormControl.disabled;
      }

      if (typeof error === 'undefined') {
        error = context.muiFormControl.error;
      }

      if (typeof margin === 'undefined') {
        margin = context.muiFormControl.margin;
      }
    }

    return {
      disabled: disabled,
      error: error,
      margin: margin
    };
  }

  var Input =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Input, _React$Component);

    function Input(props, context) {
      var _this;

      classCallCheck(this, Input);

      _this = possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props, context));
      _this.state = {
        focused: false
      };
      _this.isControlled = _this.props.value != null;
      _this.input = null;

      _this.handleFocus = function (event) {
        // Fix an bug with IE11 where the focus/blur events are triggered
        // while the input is disabled.
        if (formControlState(_this.props, _this.context).disabled) {
          event.stopPropagation();
          return;
        }

        _this.setState({
          focused: true
        });

        if (_this.props.onFocus) {
          _this.props.onFocus(event);
        }
      };

      _this.handleBlur = function (event) {
        _this.setState({
          focused: false
        });

        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }
      };

      _this.handleChange = function (event) {
        if (!_this.isControlled) {
          _this.checkDirty(_this.input);
        } // Perform in the willUpdate


        if (_this.props.onChange) {
          _this.props.onChange(event);
        }
      };

      _this.handleRefInput = function (node) {
        _this.input = node;

        if (_this.props.inputRef) {
          _this.props.inputRef(node);
        } else if (_this.props.inputProps && _this.props.inputProps.ref) {
          _this.props.inputProps.ref(node);
        }
      };

      if (_this.isControlled) {
        _this.checkDirty(props);
      }

      var componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
        // The blur won't fire when the disabled state is set on a focused input.
        // We need to book keep the focused state manually.
        if (!formControlState(_this.props, _this.context).disabled && formControlState(nextProps, nextContext).disabled) {
          _this.setState({
            focused: false
          });
        }
      };

      var componentWillUpdate = function componentWillUpdate(nextProps, nextState, nextContext) {
        // Book keep the focused state.
        if (!formControlState(_this.props, _this.context).disabled && formControlState(nextProps, nextContext).disabled) {
          var muiFormControl = _this.context.muiFormControl;

          if (muiFormControl && muiFormControl.onBlur) {
            muiFormControl.onBlur();
          }
        }
      }; // Support for react >= 16.3.0 && < 17.0.0

      /* istanbul ignore else */


      if (React__default.createContext) {
        _this.UNSAFE_componentWillReceiveProps = componentWillReceiveProps;
        _this.UNSAFE_componentWillUpdate = componentWillUpdate;
      } else {
        _this.componentWillReceiveProps = componentWillReceiveProps;
        _this.componentWillUpdate = componentWillUpdate;
      }

      return _this;
    }

    createClass(Input, [{
      key: "getChildContext",
      value: function getChildContext() {
        // We are consuming the parent muiFormControl context.
        // We don't want a child to consume it a second time.
        return {
          muiFormControl: null
        };
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!this.isControlled) {
          this.checkDirty(this.input);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (this.isControlled) {
          this.checkDirty(this.props);
        } // else performed in the onChange

      }
    }, {
      key: "checkDirty",
      value: function checkDirty(obj) {
        var muiFormControl = this.context.muiFormControl;

        if (isFilled(obj)) {
          if (muiFormControl && muiFormControl.onFilled) {
            muiFormControl.onFilled();
          }

          if (this.props.onFilled) {
            this.props.onFilled();
          }

          return;
        }

        if (muiFormControl && muiFormControl.onEmpty) {
          muiFormControl.onEmpty();
        }

        if (this.props.onEmpty) {
          this.props.onEmpty();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            autoComplete = _props.autoComplete,
            autoFocus = _props.autoFocus,
            classes = _props.classes,
            classNameProp = _props.className,
            defaultValue = _props.defaultValue,
            disabledProp = _props.disabled,
            disableUnderline = _props.disableUnderline,
            endAdornment = _props.endAdornment,
            errorProp = _props.error,
            fullWidth = _props.fullWidth,
            id = _props.id,
            inputComponent = _props.inputComponent,
            _props$inputProps = _props.inputProps;
        _props$inputProps = _props$inputProps === void 0 ? {} : _props$inputProps;

        var inputPropsClassName = _props$inputProps.className,
            inputPropsProp = objectWithoutProperties(_props$inputProps, ["className"]),
            inputRef = _props.inputRef,
            marginProp = _props.margin,
            multiline = _props.multiline,
            name = _props.name,
            onBlur = _props.onBlur,
            onChange = _props.onChange,
            onEmpty = _props.onEmpty,
            onFilled = _props.onFilled,
            onFocus = _props.onFocus,
            onKeyDown = _props.onKeyDown,
            onKeyUp = _props.onKeyUp,
            placeholder = _props.placeholder,
            readOnly = _props.readOnly,
            rows = _props.rows,
            rowsMax = _props.rowsMax,
            startAdornment = _props.startAdornment,
            type = _props.type,
            value = _props.value,
            other = objectWithoutProperties(_props, ["autoComplete", "autoFocus", "classes", "className", "defaultValue", "disabled", "disableUnderline", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onEmpty", "onFilled", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "rows", "rowsMax", "startAdornment", "type", "value"]);

        var muiFormControl = this.context.muiFormControl;

        var _formControlState = formControlState(this.props, this.context),
            disabled = _formControlState.disabled,
            error = _formControlState.error,
            margin = _formControlState.margin;

        var className = classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.disabled, disabled), defineProperty(_classNames, classes.error, error), defineProperty(_classNames, classes.fullWidth, fullWidth), defineProperty(_classNames, classes.focused, this.state.focused), defineProperty(_classNames, classes.formControl, muiFormControl), defineProperty(_classNames, classes.multiline, multiline), defineProperty(_classNames, classes.underline, !disableUnderline), _classNames), classNameProp);
        var inputClassName = classnames(classes.input, (_classNames2 = {}, defineProperty(_classNames2, classes.disabled, disabled), defineProperty(_classNames2, classes.inputType, type !== 'text'), defineProperty(_classNames2, classes.inputTypeSearch, type === 'search'), defineProperty(_classNames2, classes.inputMultiline, multiline), defineProperty(_classNames2, classes.inputMarginDense, margin === 'dense'), _classNames2), inputPropsClassName);
        var required = muiFormControl && muiFormControl.required === true;
        var InputComponent = 'input';

        var inputProps = objectSpread({}, inputPropsProp, {
          ref: this.handleRefInput
        });

        if (inputComponent) {
          InputComponent = inputComponent;
          inputProps = objectSpread({
            // Rename ref to inputRef as we don't know the
            // provided `inputComponent` structure.
            inputRef: this.handleRefInput
          }, inputProps, {
            ref: null
          });
        } else if (multiline) {
          if (rows && !rowsMax) {
            InputComponent = 'textarea';
          } else {
            inputProps = objectSpread({
              rowsMax: rowsMax,
              textareaRef: this.handleRefInput
            }, inputProps, {
              ref: null
            });
            InputComponent = Textarea$1;
          }
        }

        return React__default.createElement("div", _extends_1({
          className: className
        }, other), startAdornment, React__default.createElement(InputComponent, _extends_1({
          "aria-invalid": error,
          "aria-required": required,
          autoComplete: autoComplete,
          autoFocus: autoFocus,
          className: inputClassName,
          defaultValue: defaultValue,
          disabled: disabled,
          id: id,
          name: name,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onKeyDown: onKeyDown,
          onKeyUp: onKeyUp,
          placeholder: placeholder,
          readOnly: readOnly,
          required: required ? true : undefined,
          rows: rows,
          type: type,
          value: value
        }, inputProps)), endAdornment);
      }
    }]);

    return Input;
  }(React__default.Component);

  Input.propTypes = {
    /**
     * This property helps users to fill forms faster, especially on mobile devices.
     * The name can be confusing, as it's more like an autofill.
     * You can learn more about it here:
     * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
     */
    autoComplete: propTypes.string,

    /**
     * If `true`, the input will be focused during the first mount.
     */
    autoFocus: propTypes.bool,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * The CSS class name of the wrapper element.
     */
    className: propTypes.string,

    /**
     * The default input value, useful when not controlling the component.
     */
    defaultValue: propTypes.oneOfType([propTypes.string, propTypes.number]),

    /**
     * If `true`, the input will be disabled.
     */
    disabled: propTypes.bool,

    /**
     * If `true`, the input will not have an underline.
     */
    disableUnderline: propTypes.bool,

    /**
     * End `InputAdornment` for this component.
     */
    endAdornment: propTypes.node,

    /**
     * If `true`, the input will indicate an error. This is normally obtained via context from
     * FormControl.
     */
    error: propTypes.bool,

    /**
     * If `true`, the input will take up the full width of its container.
     */
    fullWidth: propTypes.bool,

    /**
     * The id of the `input` element.
     */
    id: propTypes.string,

    /**
     * The component used for the native input.
     * Either a string to use a DOM element or a component.
     */
    inputComponent: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * Properties applied to the `input` element.
     */
    inputProps: propTypes.object,

    /**
     * Use that property to pass a ref callback to the native input component.
     */
    inputRef: propTypes.func,

    /**
     * If `dense`, will adjust vertical spacing. This is normally obtained via context from
     * FormControl.
     */
    margin: propTypes.oneOf(['dense', 'none']),

    /**
     * If `true`, a textarea element will be rendered.
     */
    multiline: propTypes.bool,

    /**
     * Name attribute of the `input` element.
     */
    name: propTypes.string,

    /**
     * @ignore
     */
    onBlur: propTypes.func,

    /**
     * Callback fired when the value is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     */
    onChange: propTypes.func,

    /**
     * @ignore
     */
    onEmpty: propTypes.func,

    /**
     * @ignore
     */
    onFilled: propTypes.func,

    /**
     * @ignore
     */
    onFocus: propTypes.func,

    /**
     * @ignore
     */
    onKeyDown: propTypes.func,

    /**
     * @ignore
     */
    onKeyUp: propTypes.func,

    /**
     * The short hint displayed in the input before the user enters a value.
     */
    placeholder: propTypes.string,

    /**
     * @ignore
     */
    readOnly: propTypes.bool,

    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows: propTypes.oneOfType([propTypes.string, propTypes.number]),

    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    rowsMax: propTypes.oneOfType([propTypes.string, propTypes.number]),

    /**
     * Start `InputAdornment` for this component.
     */
    startAdornment: propTypes.node,

    /**
     * Type of the input element. It should be a valid HTML5 input type.
     */
    type: propTypes.string,

    /**
     * The input value, required for a controlled component.
     */
    value: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.number]))])
  };
  Input.muiName = 'Input';
  Input.defaultProps = {
    disableUnderline: false,
    fullWidth: false,
    multiline: false,
    type: 'text'
  };
  Input.contextTypes = {
    muiFormControl: propTypes.object
  };
  Input.childContextTypes = {
    muiFormControl: propTypes.object
  };
  var Input$1 = withStyles(styles$38, {
    name: 'MuiInput'
  })(Input);

  var styles$39 = function styles(theme) {
    return {
      root: {
        display: 'inline-flex',
        flexDirection: 'column',
        position: 'relative',
        // Reset fieldset default style
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0
      },
      marginNormal: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit
      },
      marginDense: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit / 2
      },
      fullWidth: {
        width: '100%'
      }
    };
  };
  /**
   * Provides context such as filled/focused/error/required for form inputs.
   * Relying on the context provides high flexibilty and ensures that the state always stay
   * consitent across the children of the `FormControl`.
   * This context is used by the following components:
   *  - FormLabel
   *  - FormHelperText
   *  - Input
   *  - InputLabel
   */

  var FormControl =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(FormControl, _React$Component);

    function FormControl(props, context) {
      var _this;

      classCallCheck(this, FormControl);

      _this = possibleConstructorReturn(this, (FormControl.__proto__ || Object.getPrototypeOf(FormControl)).call(this, props, context)); // We need to iterate through the children and find the Input in order
      // to fully support server side rendering.

      _this.state = {
        adornedStart: false,
        filled: false,
        focused: false
      };

      _this.handleFocus = function (event) {
        if (_this.props.onFocus) {
          _this.props.onFocus(event);
        }

        _this.setState(function (state) {
          return !state.focused ? {
            focused: true
          } : null;
        });
      };

      _this.handleBlur = function (event) {
        // The event might be undefined.
        // For instance, a child component might call this hook
        // when an input is disabled but still having the focus.
        if (_this.props.onBlur && event) {
          _this.props.onBlur(event);
        }

        _this.setState(function (state) {
          return state.focused ? {
            focused: false
          } : null;
        });
      };

      _this.handleDirty = function () {
        if (!_this.state.filled) {
          _this.setState({
            filled: true
          });
        }
      };

      _this.handleClean = function () {
        if (_this.state.filled) {
          _this.setState({
            filled: false
          });
        }
      };

      var children = _this.props.children;

      if (children) {
        React__default.Children.forEach(children, function (child) {
          if (!isMuiElement(child, ['Input', 'Select', 'NativeSelect'])) {
            return;
          }

          if (isFilled(child.props, true)) {
            _this.state.filled = true;
          }

          var input = isMuiElement(child, ['Select', 'NativeSelect']) ? child.props.input : child;

          if (input && isAdornedStart(input.props)) {
            _this.state.adornedStart = true;
          }
        });
      }

      return _this;
    }

    createClass(FormControl, [{
      key: "getChildContext",
      value: function getChildContext() {
        var _props = this.props,
            disabled = _props.disabled,
            error = _props.error,
            required = _props.required,
            margin = _props.margin;
        var _state = this.state,
            adornedStart = _state.adornedStart,
            filled = _state.filled,
            focused = _state.focused;
        return {
          muiFormControl: {
            adornedStart: adornedStart,
            disabled: disabled,
            error: error,
            filled: filled,
            focused: focused,
            margin: margin,
            onBlur: this.handleBlur,
            onEmpty: this.handleClean,
            onFilled: this.handleDirty,
            onFocus: this.handleFocus,
            required: required
          }
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames;

        var _props2 = this.props,
            classes = _props2.classes,
            className = _props2.className,
            Component = _props2.component,
            disabled = _props2.disabled,
            error = _props2.error,
            fullWidth = _props2.fullWidth,
            margin = _props2.margin,
            required = _props2.required,
            other = objectWithoutProperties(_props2, ["classes", "className", "component", "disabled", "error", "fullWidth", "margin", "required"]);

        return React__default.createElement(Component, _extends_1({
          className: classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes["margin".concat(capitalize(margin))], margin !== 'none'), defineProperty(_classNames, classes.fullWidth, fullWidth), _classNames), className)
        }, other, {
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }));
      }
    }]);

    return FormControl;
  }(React__default.Component);

  FormControl.propTypes = {
    /**
     * The contents of the form control.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * If `true`, the label, input and helper text should be displayed in a disabled state.
     */
    disabled: propTypes.bool,

    /**
     * If `true`, the label should be displayed in an error state.
     */
    error: propTypes.bool,

    /**
     * If `true`, the component will take up the full width of its container.
     */
    fullWidth: propTypes.bool,

    /**
     * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
     */
    margin: propTypes.oneOf(['none', 'dense', 'normal']),

    /**
     * @ignore
     */
    onBlur: propTypes.func,

    /**
     * @ignore
     */
    onFocus: propTypes.func,

    /**
     * If `true`, the label will indicate that the input is required.
     */
    required: propTypes.bool
  };
  FormControl.defaultProps = {
    component: 'div',
    disabled: false,
    error: false,
    fullWidth: false,
    margin: 'none',
    required: false
  };
  FormControl.childContextTypes = {
    muiFormControl: propTypes.object
  };
  var FormControl$1 = withStyles(styles$39, {
    name: 'MuiFormControl'
  })(FormControl);

  var styles$40 = function styles(theme) {
    return {
      root: {
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        // For correct alignment with the text.
        verticalAlign: 'middle',
        // Remove grey highlight
        WebkitTapHighlightColor: 'transparent',
        marginLeft: -14,
        marginRight: theme.spacing.unit * 2,
        // used for row presentation of radio/checkbox
        '&$disabled': {
          cursor: 'default'
        }
      },
      disabled: {},
      label: {
        '&$disabled': {
          color: theme.palette.text.disabled
        }
      }
    };
  };
  /**
   * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
   * Use this component if you want to display an extra label.
   */

  function FormControlLabel(props, context) {
    var checked = props.checked,
        classes = props.classes,
        classNameProp = props.className,
        control = props.control,
        disabledProp = props.disabled,
        inputRef = props.inputRef,
        label = props.label,
        name = props.name,
        onChange = props.onChange,
        value = props.value,
        other = objectWithoutProperties(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "name", "onChange", "value"]);

    var muiFormControl = context.muiFormControl;
    var disabled = disabledProp;

    if (typeof control.props.disabled !== 'undefined') {
      if (typeof disabled === 'undefined') {
        disabled = control.props.disabled;
      }
    }

    if (muiFormControl) {
      if (typeof disabled === 'undefined') {
        disabled = muiFormControl.disabled;
      }
    }

    var className = classnames(classes.root, defineProperty({}, classes.disabled, disabled), classNameProp);
    return React__default.createElement("label", _extends_1({
      className: className
    }, other), React__default.cloneElement(control, {
      disabled: disabled,
      checked: typeof control.props.checked === 'undefined' ? checked : control.props.checked,
      name: control.props.name || name,
      onChange: control.props.onChange || onChange,
      value: control.props.value || value,
      inputRef: control.props.inputRef || inputRef
    }), React__default.createElement(Typography$1, {
      component: "span",
      className: classnames(classes.label, defineProperty({}, classes.disabled, disabled))
    }, label));
  }

  FormControlLabel.propTypes = {
    /**
     * If `true`, the component appears selected.
     */
    checked: propTypes.oneOfType([propTypes.bool, propTypes.string]),

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
     */
    control: propTypes.element,

    /**
     * If `true`, the control will be disabled.
     */
    disabled: propTypes.bool,

    /**
     * Use that property to pass a ref callback to the native input component.
     */
    inputRef: propTypes.func,

    /**
     * The text to be used in an enclosing label element.
     */
    label: propTypes.node,

    /*
     * @ignore
     */
    name: propTypes.string,

    /**
     * Callback fired when the state is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.checked`.
     * @param {boolean} checked The `checked` value of the switch
     */
    onChange: propTypes.func,

    /**
     * The value of the component.
     */
    value: propTypes.string
  };
  FormControlLabel.contextTypes = {
    muiFormControl: propTypes.object
  };
  var FormControlLabel$1 = withStyles(styles$40, {
    name: 'MuiFormControlLabel'
  })(FormControlLabel);

  var styles$41 = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap'
    },
    row: {
      flexDirection: 'row'
    }
  };
  /**
   * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
   * It provides compact row layout.
   * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
   */

  function FormGroup(props) {
    var classes = props.classes,
        className = props.className,
        children = props.children,
        row = props.row,
        other = objectWithoutProperties(props, ["classes", "className", "children", "row"]);

    return React__default.createElement("div", _extends_1({
      className: classnames(classes.root, defineProperty({}, classes.row, row), className)
    }, other), children);
  }

  FormGroup.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * Display group of elements in a compact row.
     */
    row: propTypes.bool
  };
  FormGroup.defaultProps = {
    row: false
  };
  var FormGroup$1 = withStyles(styles$41, {
    name: 'MuiFormGroup'
  })(FormGroup);

  var styles$42 = function styles(theme) {
    return {
      root: {
        color: theme.palette.text.secondary,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(12),
        textAlign: 'left',
        marginTop: theme.spacing.unit,
        lineHeight: '1em',
        minHeight: '1em',
        margin: 0,
        '&$error': {
          color: theme.palette.error.main
        },
        '&$disabled': {
          color: theme.palette.text.disabled
        }
      },
      error: {},
      disabled: {},
      marginDense: {
        marginTop: theme.spacing.unit / 2
      }
    };
  };

  function FormHelperText(props, context) {
    var _classNames;

    var classes = props.classes,
        classNameProp = props.className,
        disabledProp = props.disabled,
        errorProp = props.error,
        marginProp = props.margin,
        Component = props.component,
        other = objectWithoutProperties(props, ["classes", "className", "disabled", "error", "margin", "component"]);

    var muiFormControl = context.muiFormControl;
    var disabled = disabledProp;
    var error = errorProp;
    var margin = marginProp;

    if (muiFormControl) {
      if (typeof disabled === 'undefined') {
        disabled = muiFormControl.disabled;
      }

      if (typeof error === 'undefined') {
        error = muiFormControl.error;
      }

      if (typeof margin === 'undefined') {
        margin = muiFormControl.margin;
      }
    }

    var className = classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.disabled, disabled), defineProperty(_classNames, classes.error, error), defineProperty(_classNames, classes.marginDense, margin === 'dense'), _classNames), classNameProp);
    return React__default.createElement(Component, _extends_1({
      className: className
    }, other));
  }

  FormHelperText.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * If `true`, the helper text should be displayed in a disabled state.
     */
    disabled: propTypes.bool,

    /**
     * If `true`, helper text should be displayed in an error state.
     */
    error: propTypes.bool,

    /**
     * If `dense`, will adjust vertical spacing. This is normally obtained via context from
     * FormControl.
     */
    margin: propTypes.oneOf(['dense'])
  };
  FormHelperText.defaultProps = {
    component: 'p'
  };
  FormHelperText.contextTypes = {
    muiFormControl: propTypes.object
  };
  var FormHelperText$1 = withStyles(styles$42, {
    name: 'MuiFormHelperText'
  })(FormHelperText);

  var styles$43 = function styles(theme) {
    return {
      root: {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(16),
        lineHeight: 1,
        padding: 0,
        '&$focused': {
          color: theme.palette.primary[theme.palette.type === 'light' ? 'dark' : 'light']
        },
        '&$disabled': {
          color: theme.palette.text.disabled
        },
        '&$error': {
          color: theme.palette.error.main
        }
      },
      focused: {},
      disabled: {},
      error: {},
      asterisk: {
        '&$error': {
          color: theme.palette.error.main
        }
      }
    };
  };

  function FormLabel(props, context) {
    var _classNames;

    var children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        Component = props.component,
        disabledProp = props.disabled,
        errorProp = props.error,
        focusedProp = props.focused,
        requiredProp = props.required,
        other = objectWithoutProperties(props, ["children", "classes", "className", "component", "disabled", "error", "focused", "required"]);

    var muiFormControl = context.muiFormControl;
    var required = requiredProp;
    var focused = focusedProp;
    var disabled = disabledProp;
    var error = errorProp;

    if (muiFormControl) {
      if (typeof required === 'undefined') {
        required = muiFormControl.required;
      }

      if (typeof focused === 'undefined') {
        focused = muiFormControl.focused;
      }

      if (typeof disabled === 'undefined') {
        disabled = muiFormControl.disabled;
      }

      if (typeof error === 'undefined') {
        error = muiFormControl.error;
      }
    }

    var className = classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.focused, focused), defineProperty(_classNames, classes.disabled, disabled), defineProperty(_classNames, classes.error, error), _classNames), classNameProp);
    return React__default.createElement(Component, _extends_1({
      className: className
    }, other), children, required && React__default.createElement("span", {
      className: classnames(classes.asterisk, defineProperty({}, classes.error, error))
    }, "\u2009*"));
  }

  FormLabel.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * If `true`, the label should be displayed in a disabled state.
     */
    disabled: propTypes.bool,

    /**
     * If `true`, the label should be displayed in an error state.
     */
    error: propTypes.bool,

    /**
     * If `true`, the input of this label is focused (used by `FormGroup` components).
     */
    focused: propTypes.bool,

    /**
     * If `true`, the label will indicate that the input is required.
     */
    required: propTypes.bool
  };
  FormLabel.defaultProps = {
    component: 'label'
  };
  FormLabel.contextTypes = {
    muiFormControl: propTypes.object
  };
  var FormLabel$1 = withStyles(styles$43, {
    name: 'MuiFormLabel'
  })(FormLabel);

  //  weak
  var requirePropFactory = function requirePropFactory(componentNameInError) {
    var requireProp = function requireProp(requiredProp) {
      return function (props, propName, componentName, location, propFullName) {
        var propFullNameSafe = propFullName || propName;

        if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
          return new Error("The property `".concat(propFullNameSafe, "` of ") + "`".concat(componentNameInError, "` must be used on `").concat(requiredProp, "`."));
        }

        return null;
      };
    };

    return requireProp;
  };

  var GUTTERS = [0, 8, 16, 24, 32, 40];
  var GRID_SIZES = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  function generateGrid(globalStyles, theme, breakpoint) {
    // For the auto layouting
    var styles = defineProperty({}, "grid-".concat(breakpoint), {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: '100%'
    });

    GRID_SIZES.forEach(function (size) {
      if (typeof size === 'boolean') {
        // Skip the first one as handle above.
        return;
      } // Only keep 6 significant numbers.


      var width = "".concat(Math.round(size / 12 * 10e6) / 10e4, "%");
      /* eslint-disable max-len */
      // Close to the bootstrap implementation:
      // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

      /* eslint-enable max-len */

      styles["grid-".concat(breakpoint, "-").concat(size)] = {
        flexBasis: width,
        maxWidth: width
      };
    }); // No need for a media query for the first size.

    if (breakpoint === 'xs') {
      _extends_1(globalStyles, styles);
    } else {
      globalStyles[theme.breakpoints.up(breakpoint)] = styles;
    }
  }

  function generateGutter(theme, breakpoint) {
    var styles = {};
    GUTTERS.forEach(function (spacing, index) {
      if (index === 0) {
        // Skip the default style.
        return;
      }

      styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
        margin: -spacing / 2,
        width: "calc(100% + ".concat(spacing, "px)"),
        '& > $item': {
          padding: spacing / 2
        }
      };
    });
    return styles;
  } // Default CSS values
  // flex: '0 1 auto',
  // flexDirection: 'row',
  // alignItems: 'flex-start',
  // flexWrap: 'nowrap',
  // justifyContent: 'flex-start',


  var styles$44 = function styles(theme) {
    return objectSpread({
      container: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%'
      },
      item: {
        boxSizing: 'border-box',
        margin: '0' // For instance, it's useful when used with a `figure` element.

      },
      zeroMinWidth: {
        minWidth: 0
      },
      'direction-xs-column': {
        flexDirection: 'column'
      },
      'direction-xs-column-reverse': {
        flexDirection: 'column-reverse'
      },
      'direction-xs-row-reverse': {
        flexDirection: 'row-reverse'
      },
      'wrap-xs-nowrap': {
        flexWrap: 'nowrap'
      },
      'wrap-xs-wrap-reverse': {
        flexWrap: 'wrap-reverse'
      },
      'align-items-xs-center': {
        alignItems: 'center'
      },
      'align-items-xs-flex-start': {
        alignItems: 'flex-start'
      },
      'align-items-xs-flex-end': {
        alignItems: 'flex-end'
      },
      'align-items-xs-baseline': {
        alignItems: 'baseline'
      },
      'align-content-xs-center': {
        alignContent: 'center'
      },
      'align-content-xs-flex-start': {
        alignContent: 'flex-start'
      },
      'align-content-xs-flex-end': {
        alignContent: 'flex-end'
      },
      'align-content-xs-space-between': {
        alignContent: 'space-between'
      },
      'align-content-xs-space-around': {
        alignContent: 'space-around'
      },
      'justify-xs-center': {
        justifyContent: 'center'
      },
      'justify-xs-flex-end': {
        justifyContent: 'flex-end'
      },
      'justify-xs-space-between': {
        justifyContent: 'space-between'
      },
      'justify-xs-space-around': {
        justifyContent: 'space-around'
      }
    }, generateGutter(theme, 'xs'), keys.reduce(function (accumulator, key) {
      // Use side effect over immutability for better performance.
      generateGrid(accumulator, theme, key);
      return accumulator;
    }, {}));
  };

  function Grid(props) {
    var _classNames;

    var alignContent = props.alignContent,
        alignItems = props.alignItems,
        classes = props.classes,
        classNameProp = props.className,
        Component = props.component,
        container = props.container,
        direction = props.direction,
        item = props.item,
        justify = props.justify,
        lg = props.lg,
        md = props.md,
        sm = props.sm,
        spacing = props.spacing,
        wrap = props.wrap,
        xl = props.xl,
        xs = props.xs,
        zeroMinWidth = props.zeroMinWidth,
        other = objectWithoutProperties(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);

    var className = classnames((_classNames = {}, defineProperty(_classNames, classes.container, container), defineProperty(_classNames, classes.item, item), defineProperty(_classNames, classes.zeroMinWidth, zeroMinWidth), defineProperty(_classNames, classes["spacing-xs-".concat(String(spacing))], container && spacing !== 0), defineProperty(_classNames, classes["direction-xs-".concat(String(direction))], direction !== Grid.defaultProps.direction), defineProperty(_classNames, classes["wrap-xs-".concat(String(wrap))], wrap !== Grid.defaultProps.wrap), defineProperty(_classNames, classes["align-items-xs-".concat(String(alignItems))], alignItems !== Grid.defaultProps.alignItems), defineProperty(_classNames, classes["align-content-xs-".concat(String(alignContent))], alignContent !== Grid.defaultProps.alignContent), defineProperty(_classNames, classes["justify-xs-".concat(String(justify))], justify !== Grid.defaultProps.justify), defineProperty(_classNames, classes['grid-xs'], xs === true), defineProperty(_classNames, classes["grid-xs-".concat(String(xs))], xs && xs !== true), defineProperty(_classNames, classes['grid-sm'], sm === true), defineProperty(_classNames, classes["grid-sm-".concat(String(sm))], sm && sm !== true), defineProperty(_classNames, classes['grid-md'], md === true), defineProperty(_classNames, classes["grid-md-".concat(String(md))], md && md !== true), defineProperty(_classNames, classes['grid-lg'], lg === true), defineProperty(_classNames, classes["grid-lg-".concat(String(lg))], lg && lg !== true), defineProperty(_classNames, classes['grid-xl'], xl === true), defineProperty(_classNames, classes["grid-xl-".concat(String(xl))], xl && xl !== true), _classNames), classNameProp);
    return React__default.createElement(Component, _extends_1({
      className: className
    }, other));
  }

  Grid.propTypes = {
    /**
     * Defines the `align-content` style property.
     * It's applied for all screen sizes.
     */
    alignContent: propTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around']),

    /**
     * Defines the `align-items` style property.
     * It's applied for all screen sizes.
     */
    alignItems: propTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),

    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * If `true`, the component will have the flex *container* behavior.
     * You should be wrapping *items* with a *container*.
     */
    container: propTypes.bool,

    /**
     * Defines the `flex-direction` style property.
     * It is applied for all screen sizes.
     */
    direction: propTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

    /**
     * If `true`, the component will have the flex *item* behavior.
     * You should be wrapping *items* with a *container*.
     */
    item: propTypes.bool,

    /**
     * Defines the `justify-content` style property.
     * It is applied for all screen sizes.
     */
    justify: propTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),

    /**
     * Defines the number of grids the component is going to use.
     * It's applied for the `lg` breakpoint and wider screens if not overridden.
     */
    lg: propTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

    /**
     * Defines the number of grids the component is going to use.
     * It's applied for the `md` breakpoint and wider screens if not overridden.
     */
    md: propTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

    /**
     * Defines the number of grids the component is going to use.
     * It's applied for the `sm` breakpoint and wider screens if not overridden.
     */
    sm: propTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

    /**
     * Defines the space between the type `item` component.
     * It can only be used on a type `container` component.
     */
    spacing: propTypes.oneOf(GUTTERS),

    /**
     * Defines the `flex-wrap` style property.
     * It's applied for all screen sizes.
     */
    wrap: propTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

    /**
     * Defines the number of grids the component is going to use.
     * It's applied for the `xl` breakpoint and wider screens.
     */
    xl: propTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

    /**
     * Defines the number of grids the component is going to use.
     * It's applied for all the screen sizes with the lowest priority.
     */
    xs: propTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

    /**
     * If `true`, it sets `min-width: 0` on the item.
     * Refer to the limitations section of the documentation to better understand the use case.
     */
    zeroMinWidth: propTypes.bool
  };
  Grid.defaultProps = {
    alignContent: 'stretch',
    alignItems: 'stretch',
    component: 'div',
    container: false,
    direction: 'row',
    item: false,
    justify: 'flex-start',
    lg: false,
    md: false,
    sm: false,
    spacing: 0,
    wrap: 'wrap',
    xl: false,
    xs: false,
    zeroMinWidth: false
  }; // Add a wrapper component to generate some helper messages in the development
  // environment.

  /* eslint-disable react/no-multi-comp */
  // eslint-disable-next-line import/no-mutable-exports

  var GridWrapper = Grid;

  {
    GridWrapper = function GridWrapper(props) {
      return React__default.createElement(Grid, props);
    };

    var requireProp = requirePropFactory('Grid');
    GridWrapper.propTypes = {
      alignContent: requireProp('container'),
      alignItems: requireProp('container'),
      direction: requireProp('container'),
      justify: requireProp('container'),
      lg: requireProp('item'),
      md: requireProp('item'),
      sm: requireProp('item'),
      spacing: requireProp('container'),
      wrap: requireProp('container'),
      xs: requireProp('item'),
      zeroMinWidth: requireProp('zeroMinWidth')
    };
  }

  var Grid$1 = withStyles(styles$44, {
    name: 'MuiGrid'
  })(GridWrapper);

  var styles$45 = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      overflowY: 'auto',
      listStyle: 'none',
      padding: 0,
      WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.

    }
  };

  function GridList(props) {
    var cellHeight = props.cellHeight,
        children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        cols = props.cols,
        Component = props.component,
        spacing = props.spacing,
        style = props.style,
        other = objectWithoutProperties(props, ["cellHeight", "children", "classes", "className", "cols", "component", "spacing", "style"]);

    return React__default.createElement(Component, _extends_1({
      className: classnames(classes.root, classNameProp),
      style: objectSpread({
        margin: -spacing / 2
      }, style)
    }, other), React__default.Children.map(children, function (currentChild) {
      if (!React__default.isValidElement(currentChild)) {
        return null;
      }

      var childCols = currentChild.props.cols || 1;
      var childRows = currentChild.props.rows || 1;
      return React__default.cloneElement(currentChild, {
        style: _extends_1({
          width: "".concat(100 / cols * childCols, "%"),
          height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
          padding: spacing / 2
        }, currentChild.props.style)
      });
    }));
  }

  GridList.propTypes = {
    /**
     * Number of px for one cell height.
     * You can set `'auto'` if you want to let the children determine the height.
     */
    cellHeight: propTypes.oneOfType([propTypes.number, propTypes.oneOf(['auto'])]),

    /**
     * Grid Tiles that will be in Grid List.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * Number of columns.
     */
    cols: propTypes.number,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * Number of px for the spacing between tiles.
     */
    spacing: propTypes.number,

    /**
     * @ignore
     */
    style: propTypes.object
  };
  GridList.defaultProps = {
    cellHeight: 180,
    cols: 2,
    component: 'ul',
    spacing: 4
  };
  var GridList$1 = withStyles(styles$45, {
    name: 'MuiGridList'
  })(GridList);

  var styles$46 = {
    root: {
      boxSizing: 'border-box',
      flexShrink: 0
    },
    tile: {
      position: 'relative',
      display: 'block',
      // In case it's not renderd with a div.
      height: '100%',
      overflow: 'hidden'
    },
    imgFullHeight: {
      height: '100%',
      transform: 'translateX(-50%)',
      position: 'relative',
      left: '50%'
    },
    imgFullWidth: {
      width: '100%',
      position: 'relative',
      transform: 'translateY(-50%)',
      top: '50%'
    }
  };

  var GridListTile =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(GridListTile, _React$Component);

    function GridListTile() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, GridListTile);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = GridListTile.__proto__ || Object.getPrototypeOf(GridListTile)).call.apply(_ref, [this].concat(args))), _this.imgElement = null, _this.handleResize = debounce(function () {
        _this.fit();
      }, 166), _this.fit = function () {
        var imgElement = _this.imgElement;

        if (!imgElement) {
          return;
        }

        if (!imgElement.complete) {
          return;
        }

        if (imgElement.width / imgElement.height > imgElement.parentNode.offsetWidth / imgElement.parentNode.offsetHeight) {
          var _imgElement$classList, _imgElement$classList2;

          (_imgElement$classList = imgElement.classList).remove.apply(_imgElement$classList, toConsumableArray(_this.props.classes.imgFullWidth.split(' ')));

          (_imgElement$classList2 = imgElement.classList).add.apply(_imgElement$classList2, toConsumableArray(_this.props.classes.imgFullHeight.split(' ')));
        } else {
          var _imgElement$classList3, _imgElement$classList4;

          (_imgElement$classList3 = imgElement.classList).remove.apply(_imgElement$classList3, toConsumableArray(_this.props.classes.imgFullHeight.split(' ')));

          (_imgElement$classList4 = imgElement.classList).add.apply(_imgElement$classList4, toConsumableArray(_this.props.classes.imgFullWidth.split(' ')));
        }

        imgElement.removeEventListener('load', _this.fit);
      }, _temp));
    }

    createClass(GridListTile, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.ensureImageCover();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.ensureImageCover();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.handleResize.clear();
      }
    }, {
      key: "ensureImageCover",
      value: function ensureImageCover() {
        if (!this.imgElement) {
          return;
        }

        if (this.imgElement.complete) {
          this.fit();
        } else {
          this.imgElement.addEventListener('load', this.fit);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            classes = _props.classes,
            className = _props.className,
            cols = _props.cols,
            Component = _props.component,
            rows = _props.rows,
            other = objectWithoutProperties(_props, ["children", "classes", "className", "cols", "component", "rows"]);

        return React__default.createElement(Component, _extends_1({
          className: classnames(classes.root, className)
        }, other), React__default.createElement(EventListener, {
          target: "window",
          onResize: this.handleResize
        }), React__default.createElement("div", {
          className: classes.tile
        }, React__default.Children.map(children, function (child) {
          if (child && child.type === 'img') {
            return React__default.cloneElement(child, {
              key: 'img',
              ref: function ref(node) {
                _this2.imgElement = node;
              }
            });
          }

          return child;
        })));
      }
    }]);

    return GridListTile;
  }(React__default.Component);

  GridListTile.propTypes = {
    /**
     * Theoretically you can pass any node as children, but the main use case is to pass an img,
     * in which case GridListTile takes care of making the image "cover" available space
     * (similar to `background-size: cover` or to `object-fit: cover`).
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * Width of the tile in number of grid cells.
     */
    cols: propTypes.number,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * Height of the tile in number of grid cells.
     */
    rows: propTypes.number
  };
  GridListTile.defaultProps = {
    cols: 1,
    component: 'li',
    rows: 1
  };
  var GridListTile$1 = withStyles(styles$46, {
    name: 'MuiGridListTile'
  })(GridListTile);

  var styles$47 = function styles(theme) {
    return {
      root: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 48,
        background: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        alignItems: 'center',
        fontFamily: theme.typography.fontFamily
      },
      titlePositionBottom: {
        bottom: 0
      },
      titlePositionTop: {
        top: 0
      },
      rootSubtitle: {
        height: 68
      },
      titleWrap: {
        flexGrow: 1,
        marginLeft: theme.mixins.gutters().paddingLeft,
        marginRight: theme.mixins.gutters().paddingRight,
        color: theme.palette.common.white,
        overflow: 'hidden'
      },
      titleWrapActionPosLeft: {
        marginLeft: 0
      },
      titleWrapActionPosRight: {
        marginRight: 0
      },
      title: {
        fontSize: theme.typography.pxToRem(16),
        lineHeight: '24px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      },
      subtitle: {
        fontSize: theme.typography.pxToRem(12),
        lineHeight: 1,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      },
      actionIcon: {},
      actionIconActionPosLeft: {
        order: -1
      }
    };
  };

  function GridListTileBar(props) {
    var _classNames, _classNames2;

    var actionIcon = props.actionIcon,
        actionPosition = props.actionPosition,
        classes = props.classes,
        classNameProp = props.className,
        subtitle = props.subtitle,
        title = props.title,
        titlePosition = props.titlePosition,
        other = objectWithoutProperties(props, ["actionIcon", "actionPosition", "classes", "className", "subtitle", "title", "titlePosition"]);

    var actionPos = actionIcon && actionPosition;
    var className = classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.titlePositionBottom, titlePosition === 'bottom'), defineProperty(_classNames, classes.titlePositionTop, titlePosition === 'top'), defineProperty(_classNames, classes.rootSubtitle, subtitle), _classNames), classNameProp); // Remove the margin between the title / subtitle wrapper, and the Action Icon

    var titleWrapClassName = classnames(classes.titleWrap, (_classNames2 = {}, defineProperty(_classNames2, classes.titleWrapActionPosLeft, actionPos === 'left'), defineProperty(_classNames2, classes.titleWrapActionPosRight, actionPos === 'right'), _classNames2));
    return React__default.createElement("div", _extends_1({
      className: className
    }, other), React__default.createElement("div", {
      className: titleWrapClassName
    }, React__default.createElement("div", {
      className: classes.title
    }, title), subtitle ? React__default.createElement("div", {
      className: classes.subtitle
    }, subtitle) : null), actionIcon ? React__default.createElement("div", {
      className: classnames(classes.actionIcon, defineProperty({}, classes.actionIconActionPosLeft, actionPos === 'left'))
    }, actionIcon) : null);
  }

  GridListTileBar.propTypes = {
    /**
     * An IconButton element to be used as secondary action target
     * (primary action target is the tile itself).
     */
    actionIcon: propTypes.node,

    /**
     * Position of secondary action IconButton.
     */
    actionPosition: propTypes.oneOf(['left', 'right']),

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * String or element serving as subtitle (support text).
     */
    subtitle: propTypes.node,

    /**
     * Title to be displayed on tile.
     */
    title: propTypes.node,

    /**
     * Position of the title bar.
     */
    titlePosition: propTypes.oneOf(['top', 'bottom'])
  };
  GridListTileBar.defaultProps = {
    actionPosition: 'right',
    titlePosition: 'bottom'
  };
  var GridListTileBar$1 = withStyles(styles$47, {
    name: 'MuiGridListTileBar'
  })(GridListTileBar);

  function getScale(value) {
    return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
  }

  var styles$48 = {
    entering: {
      opacity: 1,
      transform: getScale(1)
    },
    entered: {
      opacity: 1,
      transform: getScale(1)
    }
  };
  /**
   * The Grow transition is used by the [Popover](/utils/popovers) component.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  var Grow =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Grow, _React$Component);

    function Grow() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, Grow);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = Grow.__proto__ || Object.getPrototypeOf(Grow)).call.apply(_ref, [this].concat(args))), _this.autoTimeout = undefined, _this.timer = null, _this.handleEnter = function (node) {
        var _this$props = _this.props,
            theme = _this$props.theme,
            timeout = _this$props.timeout;
        reflow(node); // So the animation always start from the start.

        var _getTransitionProps = getTransitionProps(_this.props, {
          mode: 'enter'
        }),
            transitionDuration = _getTransitionProps.duration,
            delay = _getTransitionProps.delay;

        var duration = 0;

        if (timeout === 'auto') {
          duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
          _this.autoTimeout = duration;
        } else {
          duration = transitionDuration;
        }

        node.style.transition = [theme.transitions.create('opacity', {
          duration: duration,
          delay: delay
        }), theme.transitions.create('transform', {
          duration: duration * 0.666,
          delay: delay
        })].join(',');

        if (_this.props.onEnter) {
          _this.props.onEnter(node);
        }
      }, _this.handleExit = function (node) {
        var _this$props2 = _this.props,
            theme = _this$props2.theme,
            timeout = _this$props2.timeout;
        var duration = 0;

        var _getTransitionProps2 = getTransitionProps(_this.props, {
          mode: 'exit'
        }),
            transitionDuration = _getTransitionProps2.duration,
            delay = _getTransitionProps2.delay;

        if (timeout === 'auto') {
          duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
          _this.autoTimeout = duration;
        } else {
          duration = transitionDuration;
        }

        node.style.transition = [theme.transitions.create('opacity', {
          duration: duration,
          delay: delay
        }), theme.transitions.create('transform', {
          duration: duration * 0.666,
          delay: delay || duration * 0.333
        })].join(',');
        node.style.opacity = '0';
        node.style.transform = getScale(0.75);

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      }, _this.addEndListener = function (_, next) {
        if (_this.props.timeout === 'auto') {
          _this.timer = setTimeout(next, _this.autoTimeout || 0);
        }
      }, _temp));
    }

    createClass(Grow, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.timer);
      }
    }, {
      key: "render",
      value: function render() {
        var _props = this.props,
            children = _props.children,
            onEnter = _props.onEnter,
            onExit = _props.onExit,
            styleProp = _props.style,
            theme = _props.theme,
            timeout = _props.timeout,
            other = objectWithoutProperties(_props, ["children", "onEnter", "onExit", "style", "theme", "timeout"]);

        var style = objectSpread({}, styleProp, React__default.isValidElement(children) ? children.props.style : {});

        return React__default.createElement(Transition, _extends_1({
          appear: true,
          onEnter: this.handleEnter,
          onExit: this.handleExit,
          addEndListener: this.addEndListener,
          timeout: timeout === 'auto' ? null : timeout
        }, other), function (state, childProps) {
          return React__default.cloneElement(children, objectSpread({
            style: objectSpread({
              opacity: 0,
              transform: getScale(0.75)
            }, styles$48[state], style)
          }, childProps));
        });
      }
    }]);

    return Grow;
  }(React__default.Component);

  Grow.propTypes = {
    /**
     * A single child content element.
     */
    children: propTypes.oneOfType([propTypes.element, propTypes.func]),

    /**
     * If `true`, show the component; triggers the enter or exit animation.
     */
    in: propTypes.bool,

    /**
     * @ignore
     */
    onEnter: propTypes.func,

    /**
     * @ignore
     */
    onExit: propTypes.func,

    /**
     * @ignore
     */
    style: propTypes.object,

    /**
     * @ignore
     */
    theme: propTypes.object.isRequired,

    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     *
     * Set to 'auto' to automatically calculate transition time based on height.
     */
    timeout: propTypes.oneOfType([propTypes.number, propTypes.shape({
      enter: propTypes.number,
      exit: propTypes.number
    }), propTypes.oneOf(['auto'])])
  };
  Grow.defaultProps = {
    timeout: 'auto'
  };
  var Grow$1 = withTheme()(Grow);

  var isWidthUp = function isWidthUp(breakpoint, width) {
    var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (inclusive) {
      return keys.indexOf(breakpoint) <= keys.indexOf(width);
    }

    return keys.indexOf(breakpoint) < keys.indexOf(width);
  }; // By default, returns true if screen width is the same or less than the given breakpoint.

  var isWidthDown = function isWidthDown(breakpoint, width) {
    var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (inclusive) {
      return keys.indexOf(width) <= keys.indexOf(breakpoint);
    }

    return keys.indexOf(width) < keys.indexOf(breakpoint);
  };

  var withWidth = function withWidth() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (Component) {
      var _options$resizeInterv = options.resizeInterval,
          resizeInterval = _options$resizeInterv === void 0 ? 166 : _options$resizeInterv,
          _options$withTheme = options.withTheme,
          withThemeOption = _options$withTheme === void 0 ? false : _options$withTheme;

      var WithWidth =
      /*#__PURE__*/
      function (_React$Component) {
        inherits(WithWidth, _React$Component);

        function WithWidth() {
          var _ref;

          var _temp, _this;

          classCallCheck(this, WithWidth);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = WithWidth.__proto__ || Object.getPrototypeOf(WithWidth)).call.apply(_ref, [this].concat(args))), _this.state = {
            width: undefined
          }, _this.handleResize = debounce(function () {
            _this.updateWidth(window.innerWidth);
          }, resizeInterval), _temp));
        }

        createClass(WithWidth, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            this.updateWidth(window.innerWidth);
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.handleResize.clear();
          }
        }, {
          key: "updateWidth",
          value: function updateWidth(innerWidth) {
            var breakpoints = this.props.theme.breakpoints;
            var width = null;
            /**
             * Start with the slowest value as low end devices often have a small screen.
             *
             * innerWidth |xs      sm      md      lg      xl
             *            |-------|-------|-------|-------|------>
             * width      |  xs   |  sm   |  md   |  lg   |  xl
             */

            var index = 1;

            while (width === null && index < keys.length) {
              var currentWidth = keys[index]; // @media are inclusive, so reproduce the behavior here.

              if (innerWidth < breakpoints.values[currentWidth]) {
                width = keys[index - 1];
                break;
              }

              index += 1;
            }

            width = width || 'xl';

            if (width !== this.state.width) {
              this.setState({
                width: width
              });
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _props = this.props,
                initialWidth = _props.initialWidth,
                theme = _props.theme,
                width = _props.width,
                other = objectWithoutProperties(_props, ["initialWidth", "theme", "width"]);

            var props = objectSpread({
              width: width || this.state.width || initialWidth
            }, other);

            var more = {};

            if (withThemeOption) {
              more.theme = theme;
            } // When rendering the component on the server,
            // we have no idea about the client browser screen width.
            // In order to prevent blinks and help the reconciliation of the React tree
            // we are not rendering the child component.
            //
            // An alternative is to use the `initialWidth` property.


            if (props.width === undefined) {
              return null;
            }

            return React__default.createElement(EventListener, {
              target: "window",
              onResize: this.handleResize
            }, React__default.createElement(Component, _extends_1({}, more, props)));
          }
        }]);

        return WithWidth;
      }(React__default.Component);

      WithWidth.propTypes = {
        /**
         * As `window.innerWidth` is unavailable on the server,
         * we default to rendering an empty componenent during the first mount.
         * In some situation you might want to use an heristic to approximate
         * the screen width of the client browser screen width.
         *
         * For instance, you could be using the user-agent or the client-hints.
         * http://caniuse.com/#search=client%20hint
         */
        initialWidth: propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

        /**
         * @ignore
         */
        theme: propTypes.object.isRequired,

        /**
         * Bypass the width calculation logic.
         */
        width: propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
      };

      {
        WithWidth.displayName = wrapDisplayName(Component, 'WithWidth');
      }

      hoistNonReactStatics(WithWidth, Component);
      return withTheme()(WithWidth);
    };
  };

  /**
   * @ignore - internal component.
   */

  function HiddenJs(props) {
    var children = props.children,
        only = props.only,
        width = props.width;
    var visible = true; // `only` check is faster to get out sooner if used.

    if (only) {
      if (Array.isArray(only)) {
        for (var i = 0; i < only.length; i += 1) {
          var breakpoint = only[i];

          if (width === breakpoint) {
            visible = false;
            break;
          }
        }
      } else if (only && width === only) {
        visible = false;
      }
    } // Allow `only` to be combined with other props. If already hidden, no need to check others.


    if (visible) {
      // determine visibility based on the smallest size up
      for (var _i = 0; _i < keys.length; _i += 1) {
        var _breakpoint = keys[_i];
        var breakpointUp = props["".concat(_breakpoint, "Up")];
        var breakpointDown = props["".concat(_breakpoint, "Down")];

        if (breakpointUp && isWidthUp(_breakpoint, width) || breakpointDown && isWidthDown(_breakpoint, width)) {
          visible = false;
          break;
        }
      }
    }

    if (!visible) {
      return null;
    }

    return children;
  }

  HiddenJs.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * Specify which implementation to use.  'js' is the default, 'css' works better for server
     * side rendering.
     */
    implementation: propTypes.oneOf(['js', 'css']),

    /**
     * You can use this property when choosing the `js` implementation with server side rendering.
     *
     * As `window.innerWidth` is unavailable on the server,
     * we default to rendering an empty componenent during the first mount.
     * In some situation you might want to use an heristic to approximate
     * the screen width of the client browser screen width.
     *
     * For instance, you could be using the user-agent or the client-hints.
     * http://caniuse.com/#search=client%20hint
     */
    initialWidth: propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

    /**
     * If true, screens this size and down will be hidden.
     */
    lgDown: propTypes.bool,

    /**
     * If true, screens this size and up will be hidden.
     */
    lgUp: propTypes.bool,

    /**
     * If true, screens this size and down will be hidden.
     */
    mdDown: propTypes.bool,

    /**
     * If true, screens this size and up will be hidden.
     */
    mdUp: propTypes.bool,

    /**
     * Hide the given breakpoint(s).
     */
    only: propTypes.oneOfType([propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']), propTypes.arrayOf(propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),

    /**
     * If true, screens this size and down will be hidden.
     */
    smDown: propTypes.bool,

    /**
     * If true, screens this size and up will be hidden.
     */
    smUp: propTypes.bool,

    /**
     * @ignore
     * width prop provided by withWidth decorator.
     */
    width: propTypes.string.isRequired,

    /**
     * If true, screens this size and down will be hidden.
     */
    xlDown: propTypes.bool,

    /**
     * If true, screens this size and up will be hidden.
     */
    xlUp: propTypes.bool,

    /**
     * If true, screens this size and down will be hidden.
     */
    xsDown: propTypes.bool,

    /**
     * If true, screens this size and up will be hidden.
     */
    xsUp: propTypes.bool
  };
  HiddenJs.propTypes = exactProp(HiddenJs.propTypes, 'HiddenJs');
  var HiddenJs$1 = withWidth()(HiddenJs);

  var styles$49 = function styles(theme) {
    var hidden = {
      display: 'none'
    };
    return keys.reduce(function (acc, key) {
      acc["only".concat(capitalize(key))] = defineProperty({}, theme.breakpoints.only(key), hidden);
      acc["".concat(key, "Up")] = defineProperty({}, theme.breakpoints.up(key), hidden);
      acc["".concat(key, "Down")] = defineProperty({}, theme.breakpoints.down(key), hidden);
      return acc;
    }, {});
  };
  /**
   * @ignore - internal component.
   */


  function HiddenCss(props) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        lgDown = props.lgDown,
        lgUp = props.lgUp,
        mdDown = props.mdDown,
        mdUp = props.mdUp,
        only = props.only,
        smDown = props.smDown,
        smUp = props.smUp,
        xlDown = props.xlDown,
        xlUp = props.xlUp,
        xsDown = props.xsDown,
        xsUp = props.xsUp,
        other = objectWithoutProperties(props, ["children", "classes", "className", "lgDown", "lgUp", "mdDown", "mdUp", "only", "smDown", "smUp", "xlDown", "xlUp", "xsDown", "xsUp"]);

    warning_1(Object.keys(other).length === 0 || Object.keys(other).length === 1 && other.hasOwnProperty('ref'), "Material-UI: unsupported properties received ".concat(Object.keys(other).join(', '), " by `<Hidden />`."));
    var classNames = [];

    if (className) {
      classNames.push(className);
    }

    for (var i = 0; i < keys.length; i += 1) {
      var breakpoint = keys[i];
      var breakpointUp = props["".concat(breakpoint, "Up")];
      var breakpointDown = props["".concat(breakpoint, "Down")];

      if (breakpointUp) {
        classNames.push(classes["".concat(breakpoint, "Up")]);
      }

      if (breakpointDown) {
        classNames.push(classes["".concat(breakpoint, "Down")]);
      }
    }

    if (only) {
      var onlyBreakpoints = Array.isArray(only) ? only : [only];
      onlyBreakpoints.forEach(function (breakpoint) {
        classNames.push(classes["only".concat(capitalize(breakpoint))]);
      });
    }

    return React__default.createElement("div", {
      className: classNames.join(' ')
    }, children);
  }

  HiddenCss.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * Specify which implementation to use.  'js' is the default, 'css' works better for server
     * side rendering.
     */
    implementation: propTypes.oneOf(['js', 'css']),

    /**
     * If true, screens this size and down will be hidden.
     */
    lgDown: propTypes.bool,

    /**
     * If true, screens this size and up will be hidden.
     */
    lgUp: propTypes.bool,

    /**
     * If true, screens this size and down will be hidden.
     */
    mdDown: propTypes.bool,

    /**
     * If true, screens this size and up will be hidden.
     */
    mdUp: propTypes.bool,

    /**
     * Hide the given breakpoint(s).
     */
    only: propTypes.oneOfType([propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']), propTypes.arrayOf(propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),

    /**
     * If true, screens this size and down will be hidden.
     */
    smDown: propTypes.bool,

    /**
     * If true, screens this size and up will be hidden.
     */
    smUp: propTypes.bool,

    /**
     * If true, screens this size and down will be hidden.
     */
    xlDown: propTypes.bool,

    /**
     * If true, screens this size and up will be hidden.
     */
    xlUp: propTypes.bool,

    /**
     * If true, screens this size and down will be hidden.
     */
    xsDown: propTypes.bool,

    /**
     * If true, screens this size and up will be hidden.
     */
    xsUp: propTypes.bool
  };
  var HiddenCss$1 = withStyles(styles$49)(HiddenCss);

  /**
   * Responsively hides children based on the selected implementation.
   */

  function Hidden(props) {
    var implementation = props.implementation,
        other = objectWithoutProperties(props, ["implementation"]);

    if (implementation === 'js') {
      return React__default.createElement(HiddenJs$1, other);
    }

    return React__default.createElement(HiddenCss$1, other);
  }

  Hidden.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * Specify which implementation to use.  'js' is the default, 'css' works better for server
     * side rendering.
     */
    implementation: propTypes.oneOf(['js', 'css']),

    /**
     * You can use this property when choosing the `js` implementation with server side rendering.
     *
     * As `window.innerWidth` is unavailable on the server,
     * we default to rendering an empty componenent during the first mount.
     * In some situation you might want to use an heristic to approximate
     * the screen width of the client browser screen width.
     *
     * For instance, you could be using the user-agent or the client-hints.
     * http://caniuse.com/#search=client%20hint
     */
    initialWidth: propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

    /**
     * If true, screens this size and down will be hidden.
     */
    lgDown: propTypes.bool,

    /**
     * If true, screens this size and up will be hidden.
     */
    lgUp: propTypes.bool,

    /**
     * If true, screens this size and down will be hidden.
     */
    mdDown: propTypes.bool,

    /**
     * If true, screens this size and up will be hidden.
     */
    mdUp: propTypes.bool,

    /**
     * Hide the given breakpoint(s).
     */
    only: propTypes.oneOfType([propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']), propTypes.arrayOf(propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),

    /**
     * If true, screens this size and down will be hidden.
     */
    smDown: propTypes.bool,

    /**
     * If true, screens this size and up will be hidden.
     */
    smUp: propTypes.bool,

    /**
     * If true, screens this size and down will be hidden.
     */
    xlDown: propTypes.bool,

    /**
     * If true, screens this size and up will be hidden.
     */
    xlUp: propTypes.bool,

    /**
     * If true, screens this size and down will be hidden.
     */
    xsDown: propTypes.bool,

    /**
     * If true, screens this size and up will be hidden.
     */
    xsUp: propTypes.bool
  };
  Hidden.defaultProps = {
    implementation: 'js',
    lgDown: false,
    lgUp: false,
    mdDown: false,
    mdUp: false,
    smDown: false,
    smUp: false,
    xlDown: false,
    xlUp: false,
    xsDown: false,
    xsUp: false
  };

  var styles$50 = function styles(theme) {
    return {
      root: {
        userSelect: 'none',
        fontSize: 24,
        width: '1em',
        height: '1em',
        // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
        // To remove at some point.
        overflow: 'hidden',
        flexShrink: 0
      },
      colorPrimary: {
        color: theme.palette.primary.main
      },
      colorSecondary: {
        color: theme.palette.secondary.main
      },
      colorAction: {
        color: theme.palette.action.active
      },
      colorError: {
        color: theme.palette.error.main
      },
      colorDisabled: {
        color: theme.palette.action.disabled
      }
    };
  };

  function Icon(props) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        color = props.color,
        other = objectWithoutProperties(props, ["children", "classes", "className", "color"]);

    return React__default.createElement("span", _extends_1({
      className: classnames('material-icons', classes.root, defineProperty({}, classes["color".concat(capitalize(color))], color !== 'inherit'), className),
      "aria-hidden": "true"
    }, other), children);
  }

  Icon.propTypes = {
    /**
     * The name of the icon font ligature.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: propTypes.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled'])
  };
  Icon.defaultProps = {
    color: 'inherit'
  };
  Icon.muiName = 'Icon';
  var Icon$1 = withStyles(styles$50, {
    name: 'MuiIcon'
  })(Icon);

  var styles$51 = function styles(theme) {
    return {
      root: {
        display: 'flex',
        maxHeight: '2em',
        alignItems: 'center'
      },
      positionStart: {
        marginRight: theme.spacing.unit
      },
      positionEnd: {
        marginLeft: theme.spacing.unit
      }
    };
  };

  function InputAdornment(props) {
    var _classNames;

    var children = props.children,
        Component = props.component,
        classes = props.classes,
        className = props.className,
        disableTypography = props.disableTypography,
        position = props.position,
        other = objectWithoutProperties(props, ["children", "component", "classes", "className", "disableTypography", "position"]);

    return React__default.createElement(Component, _extends_1({
      className: classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.positionStart, position === 'start'), defineProperty(_classNames, classes.positionEnd, position === 'end'), _classNames), className)
    }, other), typeof children === 'string' && !disableTypography ? React__default.createElement(Typography$1, {
      color: "textSecondary"
    }, children) : children);
  }

  InputAdornment.propTypes = {
    /**
     * The content of the component, normally an `IconButton` or string.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * If children is a string then disable wrapping in a Typography component.
     */
    disableTypography: propTypes.bool,

    /**
     * The position this adornment should appear relative to the `Input`.
     */
    position: propTypes.oneOf(['start', 'end'])
  };
  InputAdornment.defaultProps = {
    component: 'div',
    disableTypography: false
  };
  var InputAdornment$1 = withStyles(styles$51, {
    name: 'MuiInputAdornment'
  })(InputAdornment);

  var styles$52 = function styles(theme) {
    return {
      root: {
        transformOrigin: 'top left'
      },
      formControl: {
        position: 'absolute',
        left: 0,
        top: 0,
        // slight alteration to spec spacing to match visual spec result
        transform: "translate(0, ".concat(theme.spacing.unit * 3, "px) scale(1)")
      },
      marginDense: {
        // Compensation for the `Input.inputDense` style.
        transform: "translate(0, ".concat(theme.spacing.unit * 2.5 + 1, "px) scale(1)")
      },
      shrink: {
        transform: 'translate(0, 1.5px) scale(0.75)',
        transformOrigin: 'top left'
      },
      animated: {
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        })
      }
    };
  };

  function InputLabel(props, context) {
    var _classNames;

    var children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        disableAnimation = props.disableAnimation,
        FormLabelClasses = props.FormLabelClasses,
        marginProp = props.margin,
        shrinkProp = props.shrink,
        other = objectWithoutProperties(props, ["children", "classes", "className", "disableAnimation", "FormLabelClasses", "margin", "shrink"]);

    var muiFormControl = context.muiFormControl;
    var shrink = shrinkProp;

    if (typeof shrink === 'undefined' && muiFormControl) {
      shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
    }

    var margin = marginProp;

    if (typeof margin === 'undefined' && muiFormControl) {
      margin = muiFormControl.margin;
    }

    var className = classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.formControl, muiFormControl), defineProperty(_classNames, classes.animated, !disableAnimation), defineProperty(_classNames, classes.shrink, shrink), defineProperty(_classNames, classes.marginDense, margin === 'dense'), _classNames), classNameProp);
    return React__default.createElement(FormLabel$1, _extends_1({
      "data-shrink": shrink,
      className: className,
      classes: FormLabelClasses
    }, other), children);
  }

  InputLabel.propTypes = {
    /**
     * The contents of the `InputLabel`.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * If `true`, the transition animation is disabled.
     */
    disableAnimation: propTypes.bool,

    /**
     * If `true`, apply disabled class.
     */
    disabled: propTypes.bool,

    /**
     * If `true`, the label will be displayed in an error state.
     */
    error: propTypes.bool,

    /**
     * If `true`, the input of this label is focused.
     */
    focused: propTypes.bool,

    /**
     * `classes` property applied to the `FormLabel` element.
     */
    FormLabelClasses: propTypes.object,

    /**
     * If `dense`, will adjust vertical spacing. This is normally obtained via context from
     * FormControl.
     */
    margin: propTypes.oneOf(['dense']),

    /**
     * if `true`, the label will indicate that the input is required.
     */
    required: propTypes.bool,

    /**
     * If `true`, the label is shrunk.
     */
    shrink: propTypes.bool
  };
  InputLabel.defaultProps = {
    disableAnimation: false
  };
  InputLabel.contextTypes = {
    muiFormControl: propTypes.object
  };
  var InputLabel$1 = withStyles(styles$52, {
    name: 'MuiInputLabel'
  })(InputLabel);

  var TRANSITION_DURATION = 4; // seconds

  var styles$53 = function styles(theme) {
    return {
      root: {
        position: 'relative',
        overflow: 'hidden',
        height: 5
      },
      colorPrimary: {
        backgroundColor: lighten(theme.palette.primary.light, 0.6)
      },
      colorSecondary: {
        backgroundColor: lighten(theme.palette.secondary.light, 0.4)
      },
      buffer: {
        backgroundColor: 'transparent'
      },
      query: {
        transform: 'rotate(180deg)'
      },
      dashed: {
        position: 'absolute',
        marginTop: 0,
        height: '100%',
        width: '100%',
        animation: 'buffer 3s infinite linear'
      },
      dashedColorPrimary: {
        backgroundImage: "radial-gradient(".concat(lighten(theme.palette.primary.light, 0.6), " 0%, ").concat(lighten(theme.palette.primary.light, 0.6), " 16%, transparent 42%)"),
        backgroundSize: '10px 10px',
        backgroundPosition: '0px -23px'
      },
      dashedColorSecondary: {
        backgroundImage: "radial-gradient(".concat(lighten(theme.palette.secondary.light, 0.4), " 0%, ").concat(lighten(theme.palette.secondary.light, 0.6), " 16%, transparent 42%)"),
        backgroundSize: '10px 10px',
        backgroundPosition: '0px -23px'
      },
      bar: {
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        top: 0,
        transition: 'transform 0.2s linear',
        transformOrigin: 'left'
      },
      barColorPrimary: {
        backgroundColor: theme.palette.primary.main
      },
      barColorSecondary: {
        backgroundColor: theme.palette.secondary.main
      },
      bar1Indeterminate: {
        width: 'auto',
        willChange: 'left, right',
        animation: 'mui-indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
      },
      bar2Indeterminate: {
        width: 'auto',
        willChange: 'left, right',
        animation: 'mui-indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
        animationDelay: '1.15s'
      },
      bar1Determinate: {
        willChange: 'transform',
        transition: "transform .".concat(TRANSITION_DURATION, "s linear")
      },
      bar1Buffer: {
        zIndex: 1,
        transition: "transform .".concat(TRANSITION_DURATION, "s linear")
      },
      bar2Buffer: {
        transition: "transform .".concat(TRANSITION_DURATION, "s linear")
      },
      // Legends:
      // || represents the viewport
      // -  represents a light background
      // x  represents a dark background
      '@keyframes mui-indeterminate1': {
        //  |-----|---x-||-----||-----|
        '0%': {
          left: '-35%',
          right: '100%'
        },
        //  |-----|-----||-----||xxxx-|
        '60%': {
          left: '100%',
          right: '-90%'
        },
        '100%': {
          left: '100%',
          right: '-90%'
        }
      },
      '@keyframes mui-indeterminate2': {
        //  |xxxxx|xxxxx||-----||-----|
        '0%': {
          left: '-200%',
          right: '100%'
        },
        //  |-----|-----||-----||-x----|
        '60%': {
          left: '107%',
          right: '-8%'
        },
        '100%': {
          left: '107%',
          right: '-8%'
        }
      },
      '@keyframes buffer': {
        '0%': {
          opacity: 1,
          backgroundPosition: '0px -23px'
        },
        '50%': {
          opacity: 0,
          backgroundPosition: '0px -23px'
        },
        '100%': {
          opacity: 1,
          backgroundPosition: '-200px -23px'
        }
      }
    };
  };
  /**
   * ## ARIA
   *
   * If the progress bar is describing the loading progress of a particular region of a page,
   * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
   * attribute to `true` on that region until it has finished loading.
   */

  function LinearProgress(props) {
    var _classNames, _classNames2, _classNames3, _classNames4;

    var classes = props.classes,
        classNameProp = props.className,
        color = props.color,
        value = props.value,
        valueBuffer = props.valueBuffer,
        variant = props.variant,
        other = objectWithoutProperties(props, ["classes", "className", "color", "value", "valueBuffer", "variant"]);

    var className = classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.colorPrimary, color === 'primary'), defineProperty(_classNames, classes.colorSecondary, color === 'secondary'), defineProperty(_classNames, classes.buffer, variant === 'buffer'), defineProperty(_classNames, classes.query, variant === 'query'), _classNames), classNameProp);
    var dashedClass = classnames(classes.dashed, (_classNames2 = {}, defineProperty(_classNames2, classes.dashedColorPrimary, color === 'primary'), defineProperty(_classNames2, classes.dashedColorSecondary, color === 'secondary'), _classNames2));
    var bar1ClassName = classnames(classes.bar, (_classNames3 = {}, defineProperty(_classNames3, classes.barColorPrimary, color === 'primary'), defineProperty(_classNames3, classes.barColorSecondary, color === 'secondary'), defineProperty(_classNames3, classes.bar1Indeterminate, variant === 'indeterminate' || variant === 'query'), defineProperty(_classNames3, classes.bar1Determinate, variant === 'determinate'), defineProperty(_classNames3, classes.bar1Buffer, variant === 'buffer'), _classNames3));
    var bar2ClassName = classnames(classes.bar, (_classNames4 = {}, defineProperty(_classNames4, classes.barColorPrimary, color === 'primary' && variant !== 'buffer'), defineProperty(_classNames4, classes.colorPrimary, color === 'primary' && variant === 'buffer'), defineProperty(_classNames4, classes.barColorSecondary, color === 'secondary' && variant !== 'buffer'), defineProperty(_classNames4, classes.colorSecondary, color === 'secondary' && variant === 'buffer'), defineProperty(_classNames4, classes.bar2Indeterminate, variant === 'indeterminate' || variant === 'query'), defineProperty(_classNames4, classes.bar2Buffer, variant === 'buffer'), _classNames4));
    var rootProps = {};
    var inlineStyles = {
      bar1: {},
      bar2: {}
    };

    if (variant === 'determinate' || variant === 'buffer') {
      if (value !== undefined) {
        rootProps['aria-valuenow'] = Math.round(value);
        inlineStyles.bar1.transform = "scaleX(".concat(value / 100, ")");
      } else {
        warning_1(false, 'Material-UI: you need to provide a value property ' + 'when using the determinate or buffer variant of LinearProgress .');
      }
    }

    if (variant === 'buffer') {
      if (valueBuffer !== undefined) {
        inlineStyles.bar2.transform = "scaleX(".concat((valueBuffer || 0) / 100, ")");
      } else {
        warning_1(false, 'Material-UI: you need to provide a valueBuffer property ' + 'when using the buffer variant of LinearProgress.');
      }
    }

    return React__default.createElement("div", _extends_1({
      className: className,
      role: "progressbar"
    }, rootProps, other), variant === 'buffer' ? React__default.createElement("div", {
      className: dashedClass
    }) : null, React__default.createElement("div", {
      className: bar1ClassName,
      style: inlineStyles.bar1
    }), variant === 'determinate' ? null : React__default.createElement("div", {
      className: bar2ClassName,
      style: inlineStyles.bar2
    }));
  }

  LinearProgress.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: propTypes.oneOf(['primary', 'secondary']),

    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: propTypes.number,

    /**
     * The value for the buffer variant.
     * Value between 0 and 100.
     */
    valueBuffer: propTypes.number,

    /**
     * The variant of progress indicator. Use indeterminate or query
     * when there is no progress value.
     */
    variant: propTypes.oneOf(['determinate', 'indeterminate', 'buffer', 'query'])
  };
  LinearProgress.defaultProps = {
    color: 'primary',
    variant: 'indeterminate'
  };
  var LinearProgress$1 = withStyles(styles$53, {
    name: 'MuiLinearProgress'
  })(LinearProgress);

  var styles$54 = function styles(theme) {
    return {
      root: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        position: 'relative'
      },
      padding: {
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit
      },
      dense: {
        paddingTop: theme.spacing.unit / 2,
        paddingBottom: theme.spacing.unit / 2
      },
      subheader: {
        paddingTop: 0
      }
    };
  };

  var List =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(List, _React$Component);

    function List() {
      classCallCheck(this, List);

      return possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    createClass(List, [{
      key: "getChildContext",
      value: function getChildContext() {
        return {
          dense: this.props.dense
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames;

        var _props = this.props,
            children = _props.children,
            classes = _props.classes,
            classNameProp = _props.className,
            Component = _props.component,
            dense = _props.dense,
            disablePadding = _props.disablePadding,
            subheader = _props.subheader,
            other = objectWithoutProperties(_props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);

        var className = classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.dense, dense && !disablePadding), defineProperty(_classNames, classes.padding, !disablePadding), defineProperty(_classNames, classes.subheader, subheader), _classNames), classNameProp);
        return React__default.createElement(Component, _extends_1({
          className: className
        }, other), subheader, children);
      }
    }]);

    return List;
  }(React__default.Component);

  List.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
     * the list and list items. The property is available to descendant components as the
     * `dense` context.
     */
    dense: propTypes.bool,

    /**
     * If `true`, vertical padding will be removed from the list.
     */
    disablePadding: propTypes.bool,

    /**
     * The content of the subheader, normally `ListSubheader`.
     */
    subheader: propTypes.node
  };
  List.defaultProps = {
    component: 'ul',
    dense: false,
    disablePadding: false
  };
  List.childContextTypes = {
    dense: propTypes.bool
  };
  var List$1 = withStyles(styles$54, {
    name: 'MuiList'
  })(List);

  var styles$55 = function styles(theme) {
    return {
      root: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        width: '100%',
        boxSizing: 'border-box',
        textAlign: 'left'
      },
      container: {
        position: 'relative'
      },
      focusVisible: {
        backgroundColor: theme.palette.action.hover
      },
      default: {
        paddingTop: 12,
        paddingBottom: 12
      },
      dense: {
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit
      },
      disabled: {
        opacity: 0.5
      },
      divider: {
        borderBottom: "1px solid ".concat(theme.palette.divider),
        backgroundClip: 'padding-box'
      },
      gutters: theme.mixins.gutters(),
      button: {
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shortest
        }),
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: theme.palette.action.hover,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      secondaryAction: {
        // Add some space to avoid collision as `ListItemSecondaryAction`
        // is absolutely positionned.
        paddingRight: theme.spacing.unit * 4
      }
    };
  };

  var ListItem =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(ListItem, _React$Component);

    function ListItem() {
      classCallCheck(this, ListItem);

      return possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
    }

    createClass(ListItem, [{
      key: "getChildContext",
      value: function getChildContext() {
        return {
          dense: this.props.dense || this.context.dense || false
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames;

        var _props = this.props,
            button = _props.button,
            childrenProp = _props.children,
            classes = _props.classes,
            classNameProp = _props.className,
            componentProp = _props.component,
            ContainerComponent = _props.ContainerComponent,
            _props$ContainerProps = _props.ContainerProps;
        _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;

        var ContainerClassName = _props$ContainerProps.className,
            ContainerProps = objectWithoutProperties(_props$ContainerProps, ["className"]),
            dense = _props.dense,
            disabled = _props.disabled,
            disableGutters = _props.disableGutters,
            divider = _props.divider,
            focusVisibleClassName = _props.focusVisibleClassName,
            other = objectWithoutProperties(_props, ["button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName"]);

        var isDense = dense || this.context.dense || false;
        var children = React__default.Children.toArray(childrenProp);
        var hasAvatar = children.some(function (value) {
          return isMuiElement(value, ['ListItemAvatar']);
        });
        var hasSecondaryAction = children.length && isMuiElement(children[children.length - 1], ['ListItemSecondaryAction']);
        var className = classnames(classes.root, isDense || hasAvatar ? classes.dense : classes.default, (_classNames = {}, defineProperty(_classNames, classes.gutters, !disableGutters), defineProperty(_classNames, classes.divider, divider), defineProperty(_classNames, classes.disabled, disabled), defineProperty(_classNames, classes.button, button), defineProperty(_classNames, classes.secondaryAction, hasSecondaryAction), _classNames), classNameProp);

        var componentProps = objectSpread({
          className: className,
          disabled: disabled
        }, other);

        var Component = componentProp || 'li';

        if (button) {
          componentProps.component = componentProp || 'div';
          componentProps.focusVisibleClassName = classnames(classes.focusVisible, focusVisibleClassName);
          Component = ButtonBase$1;
        }

        if (hasSecondaryAction) {
          // Use div by default.
          Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

          if (ContainerComponent === 'li') {
            if (Component === 'li') {
              Component = 'div';
            } else if (componentProps.component === 'li') {
              componentProps.component = 'div';
            }
          }

          return React__default.createElement(ContainerComponent, _extends_1({
            className: classnames(classes.container, ContainerClassName)
          }, ContainerProps), React__default.createElement(Component, componentProps, children), children.pop());
        }

        return React__default.createElement(Component, componentProps, children);
      }
    }]);

    return ListItem;
  }(React__default.Component);

  ListItem.propTypes = {
    /**
     * If `true`, the list item will be a button (using `ButtonBase`).
     */
    button: propTypes.bool,

    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * The container component used when a `ListItemSecondaryAction` is rendered.
     */
    ContainerComponent: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * Properties applied to the container element when the component
     * is used to display a `ListItemSecondaryAction`.
     */
    ContainerProps: propTypes.object,

    /**
     * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
     */
    dense: propTypes.bool,

    /**
     * @ignore
     */
    disabled: propTypes.bool,

    /**
     * If `true`, the left and right padding is removed.
     */
    disableGutters: propTypes.bool,

    /**
     * If `true`, a 1px light border is added to the bottom of the list item.
     */
    divider: propTypes.bool,

    /**
     * @ignore
     */
    focusVisibleClassName: propTypes.string
  };
  ListItem.defaultProps = {
    button: false,
    ContainerComponent: 'li',
    dense: false,
    disabled: false,
    disableGutters: false,
    divider: false
  };
  ListItem.contextTypes = {
    dense: propTypes.bool
  };
  ListItem.childContextTypes = {
    dense: propTypes.bool
  };
  var ListItem$1 = withStyles(styles$55, {
    name: 'MuiListItem'
  })(ListItem);

  var styles$56 = function styles(theme) {
    return {
      root: {
        width: 36,
        height: 36,
        fontSize: theme.typography.pxToRem(18),
        marginRight: 4
      },
      icon: {
        width: 20,
        height: 20,
        fontSize: theme.typography.pxToRem(20)
      }
    };
  };
  /**
   * It's a simple wrapper to apply the `dense` mode styles to `Avatar`.
   */

  function ListItemAvatar(props, context) {
    var children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        other = objectWithoutProperties(props, ["children", "classes", "className"]);

    if (context.dense === undefined) {
      warning_1(false, "Material-UI: <ListItemAvatar> is a simple wrapper to apply the dense styles\n      to <Avatar>. You do not need it unless you are controlling the <List> dense property.");
      return props.children;
    }

    return React__default.cloneElement(children, objectSpread({
      className: classnames(defineProperty({}, classes.root, context.dense), classNameProp, children.props.className),
      childrenClassName: classnames(defineProperty({}, classes.icon, context.dense), children.props.childrenClassName)
    }, other));
  }

  ListItemAvatar.propTypes = {
    /**
     * The content of the component, normally `Avatar`.
     */
    children: propTypes.element.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string
  };
  ListItemAvatar.contextTypes = {
    dense: propTypes.bool
  };
  ListItemAvatar.muiName = 'ListItemAvatar';
  var ListItemAvatar$1 = withStyles(styles$56, {
    name: 'MuiListItemAvatar'
  })(ListItemAvatar);

  var styles$57 = function styles(theme) {
    return {
      root: {
        marginRight: theme.spacing.unit * 2,
        color: theme.palette.action.active,
        flexShrink: 0
      }
    };
  };
  /**
   * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
   */

  function ListItemIcon(props) {
    var children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        other = objectWithoutProperties(props, ["children", "classes", "className"]);

    return React__default.cloneElement(children, objectSpread({
      className: classnames(classes.root, classNameProp, children.props.className)
    }, other));
  }

  ListItemIcon.propTypes = {
    /**
     * The content of the component, normally `Icon`, `SvgIcon`,
     * or a `@material-ui/icons` SVG icon element.
     */
    children: propTypes.element.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string
  };
  var ListItemIcon$1 = withStyles(styles$57, {
    name: 'MuiListItemIcon'
  })(ListItemIcon);

  var styles$58 = {
    root: {
      position: 'absolute',
      right: 4,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  };

  function ListItemSecondaryAction(props) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        other = objectWithoutProperties(props, ["children", "classes", "className"]);

    return React__default.createElement("div", _extends_1({
      className: classnames(classes.root, className)
    }, other), children);
  }

  ListItemSecondaryAction.propTypes = {
    /**
     * The content of the component, normally an `IconButton` or selection control.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string
  };
  ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';
  var ListItemSecondaryAction$1 = withStyles(styles$58, {
    name: 'MuiListItemSecondaryAction'
  })(ListItemSecondaryAction);

  var styles$59 = function styles(theme) {
    return {
      root: {
        flex: '1 1 auto',
        minWidth: 0,
        padding: "0 ".concat(theme.spacing.unit * 2, "px"),
        '&:first-child': {
          paddingLeft: 0
        }
      },
      inset: {
        '&:first-child': {
          paddingLeft: theme.spacing.unit * 7
        }
      },
      dense: {
        fontSize: theme.typography.pxToRem(13)
      },
      primary: {
        '&$textDense': {
          fontSize: 'inherit'
        }
      },
      secondary: {
        '&$textDense': {
          fontSize: 'inherit'
        }
      },
      textDense: {}
    };
  };

  function ListItemText(props, context) {
    var _classNames3;

    var children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        disableTypography = props.disableTypography,
        inset = props.inset,
        primaryProp = props.primary,
        secondaryProp = props.secondary,
        other = objectWithoutProperties(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "secondary"]);

    var dense = context.dense;
    var primary = primaryProp || children;

    if (primary && !disableTypography) {
      primary = React__default.createElement(Typography$1, {
        variant: "subheading",
        className: classnames(classes.primary, defineProperty({}, classes.textDense, dense)),
        component: "span"
      }, primary);
    }

    var secondary = secondaryProp;

    if (secondary && !disableTypography) {
      secondary = React__default.createElement(Typography$1, {
        variant: "body1",
        className: classnames(classes.secondary, defineProperty({}, classes.textDense, dense)),
        color: "textSecondary"
      }, secondary);
    }

    return React__default.createElement("div", _extends_1({
      className: classnames(classes.root, (_classNames3 = {}, defineProperty(_classNames3, classes.dense, dense), defineProperty(_classNames3, classes.inset, inset), _classNames3), classNameProp)
    }, other), primary, secondary);
  }

  ListItemText.propTypes = {
    /**
     * Alias for the `primary` property.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * If `true`, the children won't be wrapped by a Typography component.
     * This can be useful to render an alternative Typography variant by wrapping
     * the `children` (or `primary`) text, and optional `secondary` text
     * with the Typography component.
     */
    disableTypography: propTypes.bool,

    /**
     * If `true`, the children will be indented.
     * This should be used if there is no left avatar or left icon.
     */
    inset: propTypes.bool,

    /**
     * The main content element.
     */
    primary: propTypes.node,

    /**
     * The secondary content element.
     */
    secondary: propTypes.node
  };
  ListItemText.defaultProps = {
    disableTypography: false,
    inset: false
  };
  ListItemText.contextTypes = {
    dense: propTypes.bool
  };
  var ListItemText$1 = withStyles(styles$59, {
    name: 'MuiListItemText'
  })(ListItemText);

  var styles$60 = function styles(theme) {
    return {
      root: theme.mixins.gutters({
        boxSizing: 'border-box',
        lineHeight: '48px',
        listStyle: 'none',
        color: theme.palette.text.secondary,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.pxToRem(14)
      }),
      colorPrimary: {
        color: theme.palette.primary.main
      },
      colorInherit: {
        color: 'inherit'
      },
      inset: {
        paddingLeft: theme.spacing.unit * 9
      },
      sticky: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: 'inherit'
      }
    };
  };

  function ListSubheader(props) {
    var _classNames;

    var classes = props.classes,
        className = props.className,
        color = props.color,
        Component = props.component,
        disableSticky = props.disableSticky,
        inset = props.inset,
        other = objectWithoutProperties(props, ["classes", "className", "color", "component", "disableSticky", "inset"]);

    return React__default.createElement(Component, _extends_1({
      className: classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes["color".concat(capitalize(color))], color !== 'default'), defineProperty(_classNames, classes.inset, inset), defineProperty(_classNames, classes.sticky, !disableSticky), _classNames), className)
    }, other));
  }

  ListSubheader.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: propTypes.oneOf(['default', 'primary', 'inherit']),

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * If `true`, the List Subheader will not stick to the top during scroll.
     */
    disableSticky: propTypes.bool,

    /**
     * If `true`, the List Subheader will be indented.
     */
    inset: propTypes.bool
  };
  ListSubheader.defaultProps = {
    color: 'default',
    component: 'li',
    disableSticky: false,
    inset: false
  };
  ListSubheader.muiName = 'ListSubheader';
  var ListSubheader$1 = withStyles(styles$60, {
    name: 'MuiListSubheader'
  })(ListSubheader);

  function getOffsetTop(rect, vertical) {
    var offset = 0;

    if (typeof vertical === 'number') {
      offset = vertical;
    } else if (vertical === 'center') {
      offset = rect.height / 2;
    } else if (vertical === 'bottom') {
      offset = rect.height;
    }

    return offset;
  }

  function getOffsetLeft(rect, horizontal) {
    var offset = 0;

    if (typeof horizontal === 'number') {
      offset = horizontal;
    } else if (horizontal === 'center') {
      offset = rect.width / 2;
    } else if (horizontal === 'right') {
      offset = rect.width;
    }

    return offset;
  }

  function getTransformOriginValue(transformOrigin) {
    return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
      return typeof n === 'number' ? "".concat(n, "px") : n;
    }).join(' ');
  } // Sum the scrollTop between two elements.


  function getScrollParent(parent, child) {
    var element = child;
    var scrollTop = 0;

    while (element && element !== parent) {
      element = element.parentNode;
      scrollTop += element.scrollTop;
    }

    return scrollTop;
  }

  function getAnchorEl(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
  }

  var styles$61 = {
    paper: {
      position: 'absolute',
      overflowY: 'auto',
      overflowX: 'hidden',
      // So we see the popover when it's empty.
      // It's most likely on issue on userland.
      minWidth: 16,
      minHeight: 16,
      maxWidth: 'calc(100% - 32px)',
      maxHeight: 'calc(100% - 32px)',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 'none'
    }
  };

  var Popover =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Popover, _React$Component);

    function Popover() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, Popover);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = Popover.__proto__ || Object.getPrototypeOf(Popover)).call.apply(_ref, [this].concat(args))), _this.componentWillUnmount = function () {
        _this.handleResize.clear();
      }, _this.setPositioningStyles = function (element) {
        if (element && element.style) {
          var positioning = _this.getPositioningStyle(element);

          if (positioning.top !== null) {
            element.style.top = positioning.top;
          }

          if (positioning.left !== null) {
            element.style.left = positioning.left;
          }

          element.style.transformOrigin = positioning.transformOrigin;
        }
      }, _this.getPositioningStyle = function (element) {
        var _this$props = _this.props,
            anchorEl = _this$props.anchorEl,
            anchorReference = _this$props.anchorReference,
            marginThreshold = _this$props.marginThreshold; // Check if the parent has requested anchoring on an inner content node

        var contentAnchorOffset = _this.getContentAnchorOffset(element);

        var elemRect = {
          width: element.clientWidth,
          height: element.clientHeight
        }; // Get the transform origin point on the element itself

        var transformOrigin = _this.getTransformOrigin(elemRect, contentAnchorOffset);

        if (anchorReference === 'none') {
          return {
            top: null,
            left: null,
            transformOrigin: getTransformOriginValue(transformOrigin)
          };
        } // Get the offset of of the anchoring element


        var anchorOffset = _this.getAnchorOffset(contentAnchorOffset); // Calculate element positioning


        var top = anchorOffset.top - transformOrigin.vertical;
        var left = anchorOffset.left - transformOrigin.horizontal;
        var bottom = top + elemRect.height;
        var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

        var containerWindow = ownerWindow(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

        var heightThreshold = containerWindow.innerHeight - marginThreshold;
        var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

        if (top < marginThreshold) {
          var diff = top - marginThreshold;
          top -= diff;
          transformOrigin.vertical += diff;
        } else if (bottom > heightThreshold) {
          var _diff = bottom - heightThreshold;

          top -= _diff;
          transformOrigin.vertical += _diff;
        }

        warning_1(elemRect.height < heightThreshold || !elemRect.height || !heightThreshold, ['Material-UI: the popover component is too tall.', "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold, "px)."), 'Please consider adding a `max-height` to improve the user-experience.'].join('\n')); // Check if the horizontal axis needs shifting

        if (left < marginThreshold) {
          var _diff2 = left - marginThreshold;

          left -= _diff2;
          transformOrigin.horizontal += _diff2;
        } else if (right > widthThreshold) {
          var _diff3 = right - widthThreshold;

          left -= _diff3;
          transformOrigin.horizontal += _diff3;
        }

        return {
          top: "".concat(top, "px"),
          left: "".concat(left, "px"),
          transformOrigin: getTransformOriginValue(transformOrigin)
        };
      }, _this.transitionEl = undefined, _this.handleGetOffsetTop = getOffsetTop, _this.handleGetOffsetLeft = getOffsetLeft, _this.handleEnter = function (element) {
        if (_this.props.onEnter) {
          _this.props.onEnter(element);
        }

        _this.setPositioningStyles(element);
      }, _this.handleResize = debounce(function () {
        var element = ReactDOM.findDOMNode(_this.transitionEl);

        _this.setPositioningStyles(element);
      }, 166), _temp));
    }

    createClass(Popover, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.action) {
          this.props.action({
            updatePosition: this.handleResize
          });
        }
      }
    }, {
      key: "getAnchorOffset",
      // Returns the top/left offset of the position
      // to attach to on the anchor element (or body if none is provided)
      value: function getAnchorOffset(contentAnchorOffset) {
        var _props = this.props,
            anchorEl = _props.anchorEl,
            anchorOrigin = _props.anchorOrigin,
            anchorReference = _props.anchorReference,
            anchorPosition = _props.anchorPosition;

        if (anchorReference === 'anchorPosition') {
          warning_1(anchorPosition, 'Material-UI: you need to provide a `anchorPosition` property when using ' + '<Popover anchorReference="anchorPosition" />.');
          return anchorPosition;
        } // If an anchor element wasn't provided, just use the parent body element of this Popover


        var anchorElement = getAnchorEl(anchorEl) || ownerDocument(ReactDOM.findDOMNode(this.transitionEl)).body;
        var anchorRect = anchorElement.getBoundingClientRect();
        var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
        return {
          top: anchorRect.top + this.handleGetOffsetTop(anchorRect, anchorVertical),
          left: anchorRect.left + this.handleGetOffsetLeft(anchorRect, anchorOrigin.horizontal)
        };
      } // Returns the vertical offset of inner content to anchor the transform on if provided

    }, {
      key: "getContentAnchorOffset",
      value: function getContentAnchorOffset(element) {
        var _props2 = this.props,
            getContentAnchorEl = _props2.getContentAnchorEl,
            anchorReference = _props2.anchorReference;
        var contentAnchorOffset = 0;

        if (getContentAnchorEl && anchorReference === 'anchorEl') {
          var contentAnchorEl = getContentAnchorEl(element);

          if (contentAnchorEl && contains$2(element, contentAnchorEl)) {
            var scrollTop = getScrollParent(element, contentAnchorEl);
            contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
          } // != the default value


          warning_1(this.props.anchorOrigin.vertical === 'top', ['Material-UI: you can not change the default `anchorOrigin.vertical` value ', 'when also providing the `getContentAnchorEl` property to the popover component.', 'Only use one of the two properties.', 'Set `getContentAnchorEl` to null or left `anchorOrigin.vertical` unchanged.'].join('\n'));
        }

        return contentAnchorOffset;
      } // Return the base transform origin using the element
      // and taking the content anchor offset into account if in use

    }, {
      key: "getTransformOrigin",
      value: function getTransformOrigin(elemRect) {
        var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var transformOrigin = this.props.transformOrigin;
        return {
          vertical: this.handleGetOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
          horizontal: this.handleGetOffsetLeft(elemRect, transformOrigin.horizontal)
        };
      }
    }, {
      key: "render",
      // Corresponds to 10 frames at 60 Hz.
      value: function render() {
        var _this2 = this;

        var _props3 = this.props,
            action = _props3.action,
            anchorEl = _props3.anchorEl,
            anchorOrigin = _props3.anchorOrigin,
            anchorPosition = _props3.anchorPosition,
            anchorReference = _props3.anchorReference,
            children = _props3.children,
            classes = _props3.classes,
            containerProp = _props3.container,
            elevation = _props3.elevation,
            getContentAnchorEl = _props3.getContentAnchorEl,
            marginThreshold = _props3.marginThreshold,
            onEnter = _props3.onEnter,
            onEntered = _props3.onEntered,
            onEntering = _props3.onEntering,
            onExit = _props3.onExit,
            onExited = _props3.onExited,
            onExiting = _props3.onExiting,
            open = _props3.open,
            PaperProps = _props3.PaperProps,
            role = _props3.role,
            transformOrigin = _props3.transformOrigin,
            TransitionComponent = _props3.TransitionComponent,
            transitionDuration = _props3.transitionDuration,
            TransitionProps = _props3.TransitionProps,
            other = objectWithoutProperties(_props3, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "role", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]); // If the container prop is provided, use that
        // If the anchorEl prop is provided, use its parent body element as the container
        // If neither are provided let the Modal take care of choosing the container


        var container = containerProp || (anchorEl ? ownerDocument(getAnchorEl(anchorEl)).body : undefined);
        return React__default.createElement(Modal$1, _extends_1({
          container: container,
          open: open,
          BackdropProps: {
            invisible: true
          }
        }, other), React__default.createElement(TransitionComponent, _extends_1({
          appear: true,
          "in": open,
          onEnter: this.handleEnter,
          onEntered: onEntered,
          onEntering: onEntering,
          onExit: onExit,
          onExited: onExited,
          onExiting: onExiting,
          role: role,
          ref: function ref(node) {
            _this2.transitionEl = node;
          }
        }, TransitionProps), React__default.createElement(Paper$1, _extends_1({
          className: classes.paper,
          elevation: elevation
        }, PaperProps), React__default.createElement(EventListener, {
          target: "window",
          onResize: this.handleResize
        }), children)));
      }
    }]);

    return Popover;
  }(React__default.Component);

  Popover.propTypes = {
    /**
     * This is callback property. It's called by the component on mount.
     * This is useful when you want to trigger an action programmatically.
     * It currently only supports updatePosition() action.
     *
     * @param {object} actions This object contains all posible actions
     * that can be triggered programmatically.
     */
    action: propTypes.func,

    /**
     * This is the DOM element, or a function that returns the DOM element,
     * that may be used to set the position of the popover.
     */
    anchorEl: propTypes.oneOfType([propTypes.object, propTypes.func]),

    /**
     * This is the point on the anchor where the popover's
     * `anchorEl` will attach to. This is not used when the
     * anchorReference is 'anchorPosition'.
     *
     * Options:
     * vertical: [top, center, bottom];
     * horizontal: [left, center, right].
     */
    anchorOrigin: propTypes.shape({
      horizontal: propTypes.oneOfType([propTypes.number, propTypes.oneOf(['left', 'center', 'right'])]),
      vertical: propTypes.oneOfType([propTypes.number, propTypes.oneOf(['top', 'center', 'bottom'])])
    }),

    /**
     * This is the position that may be used
     * to set the position of the popover.
     * The coordinates are relative to
     * the application's client area.
     */
    anchorPosition: propTypes.shape({
      top: propTypes.number,
      left: propTypes.number
    }),

    /*
     * This determines which anchor prop to refer to to set
     * the position of the popover.
     */
    anchorReference: propTypes.oneOf(['anchorEl', 'anchorPosition', 'none']),

    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * A node, component instance, or function that returns either.
     * The `container` will passed to the Modal component.
     * By default, it uses the body of the anchorEl's top-level document object,
     * so it's simply `document.body` most of the time.
     */
    container: propTypes.oneOfType([propTypes.object, propTypes.func]),

    /**
     * The elevation of the popover.
     */
    elevation: propTypes.number,

    /**
     * This function is called in order to retrieve the content anchor element.
     * It's the opposite of the `anchorEl` property.
     * The content anchor element should be an element inside the popover.
     * It's used to correctly scroll and set the position of the popover.
     * The positioning strategy tries to make the content anchor element just above the
     * anchor element.
     */
    getContentAnchorEl: propTypes.func,

    /**
     * Specifies how close to the edge of the window the popover can appear.
     */
    marginThreshold: propTypes.number,

    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback.
     */
    onClose: propTypes.func,

    /**
     * Callback fired before the component is entering.
     */
    onEnter: propTypes.func,

    /**
     * Callback fired when the component has entered.
     */
    onEntered: propTypes.func,

    /**
     * Callback fired when the component is entering.
     */
    onEntering: propTypes.func,

    /**
     * Callback fired before the component is exiting.
     */
    onExit: propTypes.func,

    /**
     * Callback fired when the component has exited.
     */
    onExited: propTypes.func,

    /**
     * Callback fired when the component is exiting.
     */
    onExiting: propTypes.func,

    /**
     * If `true`, the popover is visible.
     */
    open: propTypes.bool.isRequired,

    /**
     * Properties applied to the `Paper` element.
     */
    PaperProps: propTypes.object,

    /**
     * @ignore
     */
    role: propTypes.string,

    /**
     * This is the point on the popover which
     * will attach to the anchor's origin.
     *
     * Options:
     * vertical: [top, center, bottom, x(px)];
     * horizontal: [left, center, right, x(px)].
     */
    transformOrigin: propTypes.shape({
      horizontal: propTypes.oneOfType([propTypes.number, propTypes.oneOf(['left', 'center', 'right'])]),
      vertical: propTypes.oneOfType([propTypes.number, propTypes.oneOf(['top', 'center', 'bottom'])])
    }),

    /**
     * Transition component.
     */
    TransitionComponent: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * Set to 'auto' to automatically calculate transition time based on height.
     */
    transitionDuration: propTypes.oneOfType([propTypes.number, propTypes.shape({
      enter: propTypes.number,
      exit: propTypes.number
    }), propTypes.oneOf(['auto'])]),

    /**
     * Properties applied to the `Transition` element.
     */
    TransitionProps: propTypes.object
  };
  Popover.defaultProps = {
    anchorReference: 'anchorEl',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    elevation: 8,
    marginThreshold: 16,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    TransitionComponent: Grow$1,
    transitionDuration: 'auto'
  };
  var Popover$1 = withStyles(styles$61, {
    name: 'MuiPopover'
  })(Popover);

  var MenuList =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(MenuList, _React$Component);

    function MenuList() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, MenuList);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = MenuList.__proto__ || Object.getPrototypeOf(MenuList)).call.apply(_ref, [this].concat(args))), _this.state = {
        currentTabIndex: undefined
      }, _this.list = undefined, _this.selectedItem = undefined, _this.blurTimer = undefined, _this.handleBlur = function (event) {
        _this.blurTimer = setTimeout(function () {
          if (_this.list) {
            var list = ReactDOM.findDOMNode(_this.list);
            var currentFocus = activeElement(ownerDocument(list));

            if (!contains$2(list, currentFocus)) {
              _this.resetTabIndex();
            }
          }
        }, 30);

        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }
      }, _this.handleKeyDown = function (event) {
        var list = ReactDOM.findDOMNode(_this.list);
        var key = keycode(event);
        var currentFocus = activeElement(ownerDocument(list));

        if ((key === 'up' || key === 'down') && (!currentFocus || currentFocus && !contains$2(list, currentFocus))) {
          if (_this.selectedItem) {
            ReactDOM.findDOMNode(_this.selectedItem).focus();
          } else {
            list.firstChild.focus();
          }
        } else if (key === 'down') {
          event.preventDefault();

          if (currentFocus.nextElementSibling) {
            currentFocus.nextElementSibling.focus();
          }
        } else if (key === 'up') {
          event.preventDefault();

          if (currentFocus.previousElementSibling) {
            currentFocus.previousElementSibling.focus();
          }
        }

        if (_this.props.onKeyDown) {
          _this.props.onKeyDown(event, key);
        }
      }, _this.handleItemFocus = function (event) {
        var list = ReactDOM.findDOMNode(_this.list);

        if (list) {
          for (var i = 0; i < list.children.length; i += 1) {
            if (list.children[i] === event.currentTarget) {
              _this.setTabIndex(i);

              break;
            }
          }
        }
      }, _temp));
    }

    createClass(MenuList, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.resetTabIndex();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.blurTimer);
      }
    }, {
      key: "setTabIndex",
      value: function setTabIndex(index) {
        this.setState({
          currentTabIndex: index
        });
      }
    }, {
      key: "focus",
      value: function focus() {
        var currentTabIndex = this.state.currentTabIndex;
        var list = ReactDOM.findDOMNode(this.list);

        if (!list || !list.children || !list.firstChild) {
          return;
        }

        if (currentTabIndex && currentTabIndex >= 0) {
          list.children[currentTabIndex].focus();
        } else {
          list.firstChild.focus();
        }
      }
    }, {
      key: "resetTabIndex",
      value: function resetTabIndex() {
        var list = ReactDOM.findDOMNode(this.list);
        var currentFocus = activeElement(ownerDocument(list));

        var items = toConsumableArray(list.children);

        var currentFocusIndex = items.indexOf(currentFocus);

        if (currentFocusIndex !== -1) {
          return this.setTabIndex(currentFocusIndex);
        }

        if (this.selectedItem) {
          return this.setTabIndex(items.indexOf(ReactDOM.findDOMNode(this.selectedItem)));
        }

        return this.setTabIndex(0);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            className = _props.className,
            onBlur = _props.onBlur,
            onKeyDown = _props.onKeyDown,
            other = objectWithoutProperties(_props, ["children", "className", "onBlur", "onKeyDown"]);

        return React__default.createElement(List$1, _extends_1({
          role: "menu",
          ref: function ref(node) {
            _this2.list = node;
          },
          className: className,
          onKeyDown: this.handleKeyDown,
          onBlur: this.handleBlur
        }, other), React__default.Children.map(children, function (child, index) {
          if (!React__default.isValidElement(child)) {
            return null;
          }

          return React__default.cloneElement(child, {
            tabIndex: index === _this2.state.currentTabIndex ? 0 : -1,
            ref: child.props.selected ? function (node) {
              _this2.selectedItem = node;
            } : undefined,
            onFocus: _this2.handleItemFocus
          });
        }));
      }
    }]);

    return MenuList;
  }(React__default.Component);

  MenuList.propTypes = {
    /**
     * MenuList contents, normally `MenuItem`s.
     */
    children: propTypes.node,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * @ignore
     */
    onBlur: propTypes.func,

    /**
     * @ignore
     */
    onKeyDown: propTypes.func
  };

  var RTL_ORIGIN = {
    vertical: 'top',
    horizontal: 'right'
  };
  var LTR_ORIGIN = {
    vertical: 'top',
    horizontal: 'left'
  };
  var styles$62 = {
    paper: {
      // specZ: The maximum height of a simple menu should be one or more rows less than the view
      // height. This ensures a tappable area outside of the simple menu with which to dismiss
      // the menu.
      maxHeight: 'calc(100% - 96px)',
      // Add iOS momentum scrolling.
      WebkitOverflowScrolling: 'touch'
    }
  };

  var Menu =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Menu, _React$Component);

    function Menu() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, Menu);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this.getContentAnchorEl = function () {
        if (!_this.menuList || !_this.menuList.selectedItem) {
          return ReactDOM.findDOMNode(_this.menuList).firstChild;
        }

        return ReactDOM.findDOMNode(_this.menuList.selectedItem);
      }, _this.menuList = undefined, _this.focus = function () {
        if (_this.menuList && _this.menuList.selectedItem) {
          ReactDOM.findDOMNode(_this.menuList.selectedItem).focus();
          return;
        }

        var menuList = ReactDOM.findDOMNode(_this.menuList);

        if (menuList && menuList.firstChild) {
          menuList.firstChild.focus();
        }
      }, _this.handleEnter = function (element) {
        var theme = _this.props.theme;
        var menuList = ReactDOM.findDOMNode(_this.menuList); // Focus so the scroll computation of the Popover works as expected.

        _this.focus(); // Let's ignore that piece of logic if users are already overriding the width
        // of the menu.


        if (menuList && element.clientHeight < menuList.clientHeight && !menuList.style.width) {
          var size = "".concat(getScrollbarSize(), "px");
          menuList.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = size;
          menuList.style.width = "calc(100% + ".concat(size, ")");
        }

        if (_this.props.onEnter) {
          _this.props.onEnter(element);
        }
      }, _this.handleListKeyDown = function (event, key) {
        if (key === 'tab') {
          event.preventDefault();

          if (_this.props.onClose) {
            _this.props.onClose(event);
          }
        }
      }, _temp));
    }

    createClass(Menu, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.open) {
          this.focus();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            classes = _props.classes,
            MenuListProps = _props.MenuListProps,
            onEnter = _props.onEnter,
            _props$PaperProps = _props.PaperProps,
            PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
            PopoverClasses = _props.PopoverClasses,
            theme = _props.theme,
            other = objectWithoutProperties(_props, ["children", "classes", "MenuListProps", "onEnter", "PaperProps", "PopoverClasses", "theme"]);

        return React__default.createElement(Popover$1, _extends_1({
          getContentAnchorEl: this.getContentAnchorEl,
          classes: PopoverClasses,
          onEnter: this.handleEnter,
          anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
          transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
          PaperProps: objectSpread({}, PaperProps, {
            classes: objectSpread({}, PaperProps.classes, {
              root: classes.paper
            })
          })
        }, other), React__default.createElement(MenuList, _extends_1({
          role: "menu",
          onKeyDown: this.handleListKeyDown
        }, MenuListProps, {
          ref: function ref(node) {
            _this2.menuList = node;
          }
        }), children));
      }
    }]);

    return Menu;
  }(React__default.Component);

  Menu.propTypes = {
    /**
     * The DOM element used to set the position of the menu.
     */
    anchorEl: propTypes.object,

    /**
     * Menu contents, normally `MenuItem`s.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * Properties applied to the `MenuList` element.
     */
    MenuListProps: propTypes.object,

    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback
     */
    onClose: propTypes.func,

    /**
     * Callback fired before the Menu enters.
     */
    onEnter: propTypes.func,

    /**
     * Callback fired when the Menu has entered.
     */
    onEntered: propTypes.func,

    /**
     * Callback fired when the Menu is entering.
     */
    onEntering: propTypes.func,

    /**
     * Callback fired before the Menu exits.
     */
    onExit: propTypes.func,

    /**
     * Callback fired when the Menu has exited.
     */
    onExited: propTypes.func,

    /**
     * Callback fired when the Menu is exiting.
     */
    onExiting: propTypes.func,

    /**
     * If `true`, the menu is visible.
     */
    open: propTypes.bool.isRequired,

    /**
     * @ignore
     */
    PaperProps: propTypes.object,

    /**
     * `classes` property applied to the `Popover` element.
     */
    PopoverClasses: propTypes.object,

    /**
     * @ignore
     */
    theme: propTypes.object.isRequired,

    /**
     * The length of the transition in `ms`, or 'auto'
     */
    transitionDuration: propTypes.oneOfType([propTypes.number, propTypes.shape({
      enter: propTypes.number,
      exit: propTypes.number
    }), propTypes.oneOf(['auto'])])
  };
  Menu.defaultProps = {
    transitionDuration: 'auto'
  };
  var Menu$1 = withStyles(styles$62, {
    name: 'MuiMenu',
    withTheme: true
  })(Menu);

  var styles$63 = function styles(theme) {
    return {
      root: objectSpread({}, theme.typography.subheading, {
        height: theme.spacing.unit * 3,
        boxSizing: 'content-box',
        width: 'auto',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        '&$selected': {
          backgroundColor: theme.palette.action.selected
        }
      }),
      selected: {}
    };
  };

  function MenuItem(props) {
    var classes = props.classes,
        className = props.className,
        component = props.component,
        selected = props.selected,
        role = props.role,
        other = objectWithoutProperties(props, ["classes", "className", "component", "selected", "role"]);

    return React__default.createElement(ListItem$1, _extends_1({
      button: true,
      role: role,
      tabIndex: -1,
      className: classnames(classes.root, defineProperty({}, classes.selected, selected), className),
      component: component
    }, other));
  }

  MenuItem.propTypes = {
    /**
     * Menu item contents.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * @ignore
     */
    role: propTypes.string,

    /**
     * Use to apply selected styling.
     */
    selected: propTypes.bool
  };
  MenuItem.defaultProps = {
    component: 'li',
    role: 'menuitem',
    selected: false
  };
  var MenuItem$1 = withStyles(styles$63, {
    name: 'MuiMenuItem'
  })(MenuItem);

  var styles$64 = function styles(theme) {
    return {
      root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: theme.palette.background.default,
        padding: theme.spacing.unit
      },
      positionBottom: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.mobileStepper
      },
      positionTop: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.mobileStepper
      },
      positionStatic: {},
      dots: {
        display: 'flex',
        flexDirection: 'row'
      },
      dot: {
        backgroundColor: theme.palette.action.disabled,
        borderRadius: '50%',
        width: theme.spacing.unit,
        height: theme.spacing.unit,
        margin: '0 2px'
      },
      dotActive: {
        backgroundColor: theme.palette.primary.main
      },
      progress: {
        width: '50%'
      }
    };
  };

  function MobileStepper(props) {
    var activeStep = props.activeStep,
        backButton = props.backButton,
        classes = props.classes,
        classNameProp = props.className,
        nextButton = props.nextButton,
        position = props.position,
        steps = props.steps,
        variant = props.variant,
        other = objectWithoutProperties(props, ["activeStep", "backButton", "classes", "className", "nextButton", "position", "steps", "variant"]);

    var className = classnames(classes.root, classes["position".concat(capitalize(position))], classNameProp);
    return React__default.createElement(Paper$1, _extends_1({
      square: true,
      elevation: 0,
      className: className
    }, other), backButton, variant === 'dots' && React__default.createElement("div", {
      className: classes.dots
    }, toConsumableArray(new Array(steps)).map(function (_, step) {
      var dotClassName = classnames(classes.dot, defineProperty({}, classes.dotActive, step === activeStep)); // eslint-disable-next-line react/no-array-index-key

      return React__default.createElement("div", {
        key: step,
        className: dotClassName
      });
    })), variant === 'progress' && React__default.createElement(LinearProgress$1, {
      className: classes.progress,
      variant: "determinate",
      value: Math.ceil(activeStep / (steps - 1) * 100)
    }), nextButton);
  }

  MobileStepper.propTypes = {
    /**
     * Set the active step (zero based index).
     * Defines which dot is highlighted when the variant is 'dots'.
     */
    activeStep: propTypes.number,

    /**
     * A back button element. For instance, it can be be a `Button` or a `IconButton`.
     */
    backButton: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * A next button element. For instance, it can be be a `Button` or a `IconButton`.
     */
    nextButton: propTypes.node,

    /**
     * Set the positioning type.
     */
    position: propTypes.oneOf(['bottom', 'top', 'static']),

    /**
     * The total steps.
     */
    steps: propTypes.number.isRequired,

    /**
     * The type of mobile stepper to use.
     */
    variant: propTypes.oneOf(['text', 'dots', 'progress'])
  };
  MobileStepper.defaultProps = {
    activeStep: 0,
    position: 'bottom',
    variant: 'dots'
  };
  var MobileStepper$1 = withStyles(styles$64, {
    name: 'MuiMobileStepper'
  })(MobileStepper);

  /**
   * @ignore - internal component.
   */

  function NativeSelectInput(props) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        disabled = props.disabled,
        IconComponent = props.IconComponent,
        inputRef = props.inputRef,
        name = props.name,
        onChange = props.onChange,
        value = props.value,
        other = objectWithoutProperties(props, ["children", "classes", "className", "disabled", "IconComponent", "inputRef", "name", "onChange", "value"]);

    return React__default.createElement("div", {
      className: classes.root
    }, React__default.createElement("select", _extends_1({
      className: classnames(classes.select, defineProperty({}, classes.disabled, disabled), className),
      name: name,
      disabled: disabled,
      onChange: onChange,
      value: value,
      ref: inputRef
    }, other), children), React__default.createElement(IconComponent, {
      className: classes.icon
    }));
  }

  NativeSelectInput.propTypes = {
    /**
     * The option elements to populate the select with.
     * Can be some `<option>` elements.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * The CSS class name of the select element.
     */
    className: propTypes.string,

    /**
     * If `true`, the select will be disabled.
     */
    disabled: propTypes.bool,

    /**
     * The icon that displays the arrow.
     */
    IconComponent: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * Use that property to pass a ref callback to the native select element.
     */
    inputRef: propTypes.func,

    /**
     * Name attribute of the `select` or hidden `input` element.
     */
    name: propTypes.string,

    /**
     * Callback function fired when a menu item is selected.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     */
    onChange: propTypes.func,

    /**
     * The input value.
     */
    value: propTypes.oneOfType([propTypes.string, propTypes.number])
  };

  /**
   * @ignore - internal component.
   */

  var _ref$4 = React__default.createElement("path", {
    d: "M7 10l5 5 5-5z"
  });

  var ArrowDropDown = function ArrowDropDown(props) {
    return React__default.createElement(SvgIcon$1, props, _ref$4);
  };

  ArrowDropDown = pure(ArrowDropDown);
  ArrowDropDown.muiName = 'SvgIcon';
  var ArrowDropDownIcon = ArrowDropDown;

  var styles$65 = function styles(theme) {
    return {
      root: {
        position: 'relative',
        width: '100%'
      },
      select: {
        '-moz-appearance': 'none',
        // Reset
        '-webkit-appearance': 'none',
        // Reset
        // When interacting quickly, the text can end up selected.
        // Native select can't be selected either.
        userSelect: 'none',
        paddingRight: theme.spacing.unit * 4,
        width: "calc(100% - ".concat(theme.spacing.unit * 4, "px)"),
        minWidth: theme.spacing.unit * 2,
        // So it doesn't collapse.
        cursor: 'pointer',
        '&:focus': {
          // Show that it's not an text input
          background: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
          borderRadius: 0 // Reset Chrome style

        },
        // Remove Firefox focus border
        '&:-moz-focusring': {
          color: 'transparent',
          textShadow: '0 0 0 #000'
        },
        // Remove IE11 arrow
        '&::-ms-expand': {
          display: 'none'
        },
        '&$disabled': {
          cursor: 'default'
        }
      },
      selectMenu: {
        width: 'auto',
        // Fix Safari textOverflow
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        minHeight: '1.1875em' // Reset (19px), match the native input line-height

      },
      disabled: {},
      icon: {
        // We use a position absolute over a flexbox in order to forward the pointer events
        // to the input.
        position: 'absolute',
        right: 0,
        top: 'calc(50% - 12px)',
        // Center vertically
        color: theme.palette.action.active,
        'pointer-events': 'none' // Don't block pointer events on the select under the icon.

      }
    };
  };
  /**
   * An alternative to `<Select native />` with a much smaller dependency graph.
   */

  function NativeSelect(props) {
    var children = props.children,
        classes = props.classes,
        IconComponent = props.IconComponent,
        input = props.input,
        inputProps = props.inputProps,
        other = objectWithoutProperties(props, ["children", "classes", "IconComponent", "input", "inputProps"]);

    return React__default.cloneElement(input, objectSpread({
      // Most of the logic is implemented in `NativeSelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: NativeSelectInput,
      inputProps: objectSpread({
        children: children,
        classes: classes,
        IconComponent: IconComponent,
        type: undefined
      }, inputProps, input ? input.props.inputProps : {})
    }, other));
  }

  NativeSelect.propTypes = {
    /**
     * The option elements to populate the select with.
     * Can be some `<option>` elements.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * The icon that displays the arrow.
     */
    IconComponent: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * An `Input` element; does not have to be a material-ui specific `Input`.
     */
    input: propTypes.element,

    /**
     * Properties applied to the `input` element.
     * The properties are applied on the `select` element.
     */
    inputProps: propTypes.object,

    /**
     * Callback function fired when a menu item is selected.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     */
    onChange: propTypes.func,

    /**
     * The input value.
     */
    value: propTypes.oneOfType([propTypes.string, propTypes.number])
  };
  NativeSelect.defaultProps = {
    IconComponent: ArrowDropDownIcon,
    input: React__default.createElement(Input$1, null)
  };
  NativeSelect.muiName = 'NativeSelect';
  var NativeSelect$1 = withStyles(styles$65, {
    name: 'MuiNativeSelect'
  })(NativeSelect);

  /**
   * @ignore - internal component.
   */

  var _ref$5 = React__default.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  });

  var RadioButtonUnchecked = function RadioButtonUnchecked(props) {
    return React__default.createElement(SvgIcon$1, props, _ref$5);
  };

  RadioButtonUnchecked = pure(RadioButtonUnchecked);
  RadioButtonUnchecked.muiName = 'SvgIcon';
  var RadioButtonUncheckedIcon = RadioButtonUnchecked;

  /**
   * @ignore - internal component.
   */

  var _ref$6 = React__default.createElement("path", {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  });

  var RadioButtonChecked = function RadioButtonChecked(props) {
    return React__default.createElement(SvgIcon$1, props, _ref$6);
  };

  RadioButtonChecked = pure(RadioButtonChecked);
  RadioButtonChecked.muiName = 'SvgIcon';
  var RadioButtonCheckedIcon = RadioButtonChecked;

  var styles$66 = function styles(theme) {
    return {
      root: {
        color: theme.palette.text.secondary
      },
      checked: {},
      disabled: {},
      colorPrimary: {
        '&$checked': {
          color: theme.palette.primary.main
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      },
      colorSecondary: {
        '&$checked': {
          color: theme.palette.secondary.main
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      }
    };
  };

  var _ref$7 = React__default.createElement(RadioButtonUncheckedIcon, null);

  var _ref2 = React__default.createElement(RadioButtonCheckedIcon, null);

  function Radio(props) {
    var classes = props.classes,
        color = props.color,
        other = objectWithoutProperties(props, ["classes", "color"]);

    return React__default.createElement(SwitchBase$1, _extends_1({
      type: "radio",
      icon: _ref$7,
      checkedIcon: _ref2,
      classes: {
        root: classnames(classes.root, classes["color".concat(capitalize(color))]),
        checked: classes.checked,
        disabled: classes.disabled
      }
    }, other));
  }

  Radio.propTypes = {
    /**
     * If `true`, the component is checked.
     */
    checked: propTypes.oneOfType([propTypes.bool, propTypes.string]),

    /**
     * The icon to display when the component is checked.
     */
    checkedIcon: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: propTypes.oneOf(['primary', 'secondary', 'default']),

    /**
     * If `true`, the switch will be disabled.
     */
    disabled: propTypes.bool,

    /**
     * If `true`, the ripple effect will be disabled.
     */
    disableRipple: propTypes.bool,

    /**
     * The icon to display when the component is unchecked.
     */
    icon: propTypes.node,

    /**
     * The id of the `input` element.
     */
    id: propTypes.string,

    /**
     * Properties applied to the `input` element.
     */
    inputProps: propTypes.object,

    /**
     * Use that property to pass a ref callback to the native input component.
     */
    inputRef: propTypes.func,

    /**
     * Callback fired when the state is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     * @param {boolean} checked The `checked` value of the switch
     */
    onChange: propTypes.func,

    /**
     * The input component property `type`.
     */
    type: propTypes.string,

    /**
     * The value of the component.
     */
    value: propTypes.string
  };
  Radio.defaultProps = {
    color: 'secondary'
  };
  var Radio$1 = withStyles(styles$66, {
    name: 'MuiRadio'
  })(Radio);

  var RadioGroup =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(RadioGroup, _React$Component);

    function RadioGroup() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, RadioGroup);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call.apply(_ref, [this].concat(args))), _this.radios = [], _this.focus = function () {
        if (!_this.radios || !_this.radios.length) {
          return;
        }

        var focusRadios = _this.radios.filter(function (n) {
          return !n.disabled;
        });

        if (!focusRadios.length) {
          return;
        }

        var selectedRadio = find(focusRadios, function (n) {
          return n.checked;
        });

        if (selectedRadio) {
          selectedRadio.focus();
          return;
        }

        focusRadios[0].focus();
      }, _this.handleRadioChange = function (event, checked) {
        if (checked && _this.props.onChange) {
          _this.props.onChange(event, event.target.value);
        }
      }, _temp));
    }

    createClass(RadioGroup, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            name = _props.name,
            value = _props.value,
            onChange = _props.onChange,
            other = objectWithoutProperties(_props, ["children", "name", "value", "onChange"]);

        this.radios = [];
        return React__default.createElement(FormGroup$1, _extends_1({
          role: "radiogroup"
        }, other), React__default.Children.map(children, function (child, index) {
          if (!React__default.isValidElement(child)) {
            return null;
          }

          return React__default.cloneElement(child, {
            key: index,
            name: name,
            inputRef: function inputRef(node) {
              if (node) {
                _this2.radios.push(node);
              }
            },
            checked: value === child.props.value,
            onChange: _this2.handleRadioChange
          });
        }));
      }
    }]);

    return RadioGroup;
  }(React__default.Component);

  RadioGroup.propTypes = {
    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * The name used to reference the value of the control.
     */
    name: propTypes.string,

    /**
     * @ignore
     */
    onBlur: propTypes.func,

    /**
     * Callback fired when a radio button is selected.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     * @param {string} value The `value` of the selected radio button
     */
    onChange: propTypes.func,

    /**
     * @ignore
     */
    onKeyDown: propTypes.func,

    /**
     * Value of the selected radio button.
     */
    value: propTypes.string
  };

  /**
   * @ignore - internal component.
   */

  var SelectInput =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(SelectInput, _React$Component);

    function SelectInput() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, SelectInput);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).call.apply(_ref, [this].concat(args))), _this.state = {
        open: false
      }, _this.ignoreNextBlur = false, _this.displayNode = null, _this.displayWidth = null, _this.isOpenControlled = _this.props.open !== undefined, _this.updateDisplayWidth = function () {
        // Perfom the layout computation outside of the render method.
        if (_this.displayNode) {
          _this.displayWidth = _this.displayNode.clientWidth;
        }
      }, _this.update = _this.isOpenControlled ? function (_ref2) {
        var event = _ref2.event,
            open = _ref2.open;

        if (open) {
          _this.props.onOpen(event);
        } else {
          _this.props.onClose(event);
        }
      } : function (_ref3) {
        var open = _ref3.open;
        return _this.setState({
          open: open
        });
      }, _this.handleClick = function (event) {
        // Opening the menu is going to blur the. It will be focused back when closed.
        _this.ignoreNextBlur = true;

        _this.update({
          open: true,
          event: event
        });
      }, _this.handleClose = function (event) {
        _this.update({
          open: false,
          event: event
        });
      }, _this.handleItemClick = function (child) {
        return function (event) {
          if (!_this.props.multiple) {
            _this.update({
              open: false,
              event: event
            });
          }

          var _this$props = _this.props,
              onChange = _this$props.onChange,
              name = _this$props.name;

          if (onChange) {
            var value;
            var target;

            if (event.target) {
              target = event.target;
            }

            if (_this.props.multiple) {
              value = Array.isArray(_this.props.value) ? toConsumableArray(_this.props.value) : [];
              var itemIndex = value.indexOf(child.props.value);

              if (itemIndex === -1) {
                value.push(child.props.value);
              } else {
                value.splice(itemIndex, 1);
              }
            } else {
              value = child.props.value;
            }

            event.persist();
            event.target = objectSpread({}, target, {
              value: value,
              name: name
            });
            onChange(event, child);
          }
        };
      }, _this.handleBlur = function (event) {
        if (_this.ignoreNextBlur === true) {
          // The parent components are relying on the bubbling of the event.
          event.stopPropagation();
          _this.ignoreNextBlur = false;
          return;
        }

        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }
      }, _this.handleKeyDown = function (event) {
        if (_this.props.readOnly) {
          return;
        }

        if (['space', 'up', 'down'].indexOf(keycode(event)) !== -1) {
          event.preventDefault(); // Opening the menu is going to blur the. It will be focused back when closed.

          _this.ignoreNextBlur = true;

          _this.update({
            open: true,
            event: event
          });
        }
      }, _this.handleDisplayRef = function (node) {
        _this.displayNode = node;

        _this.updateDisplayWidth();
      }, _this.handleSelectRef = function (node) {
        if (!_this.props.inputRef) {
          return;
        }

        _this.props.inputRef({
          node: node,
          // By pass the native input as we expose a rich object (array).
          value: _this.props.value
        });
      }, _temp));
    }

    createClass(SelectInput, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.isOpenControlled && this.props.open) {
          // Focus the display node so the focus is restored on this element once
          // the menu is closed.
          this.displayNode.focus(); // Rerender with the resolve `displayNode` reference.

          this.forceUpdate();
        }

        if (this.props.autoFocus) {
          this.displayNode.focus();
        }
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate() {
        this.updateDisplayWidth();
        return true;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            autoWidth = _props.autoWidth,
            children = _props.children,
            classes = _props.classes,
            className = _props.className,
            disabled = _props.disabled,
            displayEmpty = _props.displayEmpty,
            IconComponent = _props.IconComponent,
            inputRef = _props.inputRef,
            _props$MenuProps = _props.MenuProps,
            MenuProps = _props$MenuProps === void 0 ? {} : _props$MenuProps,
            multiple = _props.multiple,
            name = _props.name,
            onBlur = _props.onBlur,
            onChange = _props.onChange,
            onClose = _props.onClose,
            onFocus = _props.onFocus,
            onOpen = _props.onOpen,
            openProp = _props.open,
            readOnly = _props.readOnly,
            renderValue = _props.renderValue,
            SelectDisplayProps = _props.SelectDisplayProps,
            tabIndexProp = _props.tabIndex,
            _props$type = _props.type,
            type = _props$type === void 0 ? 'hidden' : _props$type,
            value = _props.value,
            other = objectWithoutProperties(_props, ["autoWidth", "children", "classes", "className", "disabled", "displayEmpty", "IconComponent", "inputRef", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value"]);

        var open = this.isOpenControlled && this.displayNode ? openProp : this.state.open;
        var display;
        var displaySingle = '';
        var displayMultiple = [];
        var computeDisplay = false; // No need to display any value if the field is empty.

        if (isFilled(this.props) || displayEmpty) {
          if (renderValue) {
            display = renderValue(value);
          } else {
            computeDisplay = true;
          }
        }

        var items = React__default.Children.map(children, function (child) {
          if (!React__default.isValidElement(child)) {
            return null;
          }

          var selected;

          if (multiple) {
            if (!Array.isArray(value)) {
              throw new Error('Material-UI: the `value` property must be an array ' + 'when using the `Select` component with `multiple`.');
            }

            selected = value.indexOf(child.props.value) !== -1;

            if (selected && computeDisplay) {
              displayMultiple.push(child.props.children);
            }
          } else {
            selected = value === child.props.value;

            if (selected && computeDisplay) {
              displaySingle = child.props.children;
            }
          }

          return React__default.cloneElement(child, {
            onClick: _this2.handleItemClick(child),
            role: 'option',
            selected: selected,
            value: undefined,
            // The value is most likely not a valid HTML attribute.
            'data-value': child.props.value // Instead, we provide it as a data attribute.

          });
        });

        if (computeDisplay) {
          display = multiple ? displayMultiple.join(', ') : displaySingle;
        }

        var MenuMinWidth = this.displayNode && !autoWidth ? this.displayWidth : undefined;
        var tabIndex;

        if (typeof tabIndexProp !== 'undefined') {
          tabIndex = tabIndexProp;
        } else {
          tabIndex = disabled ? null : 0;
        }

        return React__default.createElement("div", {
          className: classes.root
        }, React__default.createElement("div", _extends_1({
          className: classnames(classes.select, classes.selectMenu, defineProperty({}, classes.disabled, disabled), className),
          ref: this.handleDisplayRef,
          "aria-pressed": open ? 'true' : 'false',
          tabIndex: tabIndex,
          role: "button",
          "aria-owns": open ? "menu-".concat(name || '') : null,
          "aria-haspopup": "true",
          onKeyDown: this.handleKeyDown,
          onBlur: this.handleBlur,
          onClick: disabled || readOnly ? null : this.handleClick,
          onFocus: onFocus
        }, SelectDisplayProps), display || React__default.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: '&#8203'
          }
        })), React__default.createElement("input", _extends_1({
          value: Array.isArray(value) ? value.join(',') : value,
          name: name,
          readOnly: readOnly,
          ref: this.handleSelectRef,
          type: type
        }, other)), React__default.createElement(IconComponent, {
          className: classes.icon
        }), React__default.createElement(Menu$1, _extends_1({
          id: "menu-".concat(name || ''),
          anchorEl: this.displayNode,
          open: open,
          onClose: this.handleClose
        }, MenuProps, {
          MenuListProps: objectSpread({
            role: 'listbox'
          }, MenuProps.MenuListProps),
          PaperProps: objectSpread({}, MenuProps.PaperProps, {
            style: objectSpread({
              minWidth: MenuMinWidth
            }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
          })
        }), items));
      }
    }]);

    return SelectInput;
  }(React__default.Component);

  SelectInput.propTypes = {
    /**
     * @ignore
     */
    autoFocus: propTypes.bool,

    /**
     * If true, the width of the popover will automatically be set according to the items inside the
     * menu, otherwise it will be at least the width of the select input.
     */
    autoWidth: propTypes.bool,

    /**
     * The option elements to populate the select with.
     * Can be some `<MenuItem>` elements.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * The CSS class name of the select element.
     */
    className: propTypes.string,

    /**
     * If `true`, the select will be disabled.
     */
    disabled: propTypes.bool,

    /**
     * If `true`, the selected item is displayed even if its value is empty.
     */
    displayEmpty: propTypes.bool,

    /**
     * The icon that displays the arrow.
     */
    IconComponent: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * Use that property to pass a ref callback to the native select element.
     */
    inputRef: propTypes.func,

    /**
     * Properties applied to the `Menu` element.
     */
    MenuProps: propTypes.object,

    /**
     * If true, `value` must be an array and the menu will support multiple selections.
     */
    multiple: propTypes.bool,

    /**
     * Name attribute of the `select` or hidden `input` element.
     */
    name: propTypes.string,

    /**
     * @ignore
     */
    onBlur: propTypes.func,

    /**
     * Callback function fired when a menu item is selected.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     * @param {object} [child] The react element that was selected.
     */
    onChange: propTypes.func,

    /**
     * Callback fired when the component requests to be closed.
     * Use in controlled mode (see open).
     *
     * @param {object} event The event source of the callback
     */
    onClose: propTypes.func,

    /**
     * @ignore
     */
    onFocus: propTypes.func,

    /**
     * Callback fired when the component requests to be opened.
     * Use in controlled mode (see open).
     *
     * @param {object} event The event source of the callback
     */
    onOpen: propTypes.func,

    /**
     * Control `select` open state.
     */
    open: propTypes.bool,

    /**
     * @ignore
     */
    readOnly: propTypes.bool,

    /**
     * Render the selected value.
     *
     * @param {*} value The `value` provided to the component.
     * @returns {ReactElement}
     */
    renderValue: propTypes.func,

    /**
     * Properties applied to the clickable div element.
     */
    SelectDisplayProps: propTypes.object,

    /**
     * @ignore
     */
    tabIndex: propTypes.oneOfType([propTypes.number, propTypes.string]),

    /**
     * @ignore
     */
    type: propTypes.string,

    /**
     * The input value.
     */
    value: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.number]))]).isRequired
  };

  function Select(props) {
    var autoWidth = props.autoWidth,
        children = props.children,
        classes = props.classes,
        displayEmpty = props.displayEmpty,
        IconComponent = props.IconComponent,
        input = props.input,
        inputProps = props.inputProps,
        MenuProps = props.MenuProps,
        multiple = props.multiple,
        native = props.native,
        onClose = props.onClose,
        onOpen = props.onOpen,
        open = props.open,
        renderValue = props.renderValue,
        SelectDisplayProps = props.SelectDisplayProps,
        other = objectWithoutProperties(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "input", "inputProps", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps"]);

    var inputComponent = native ? NativeSelectInput : SelectInput;
    var inputNativeProps = {
      children: children,
      classes: classes,
      IconComponent: IconComponent,
      type: undefined // We render a select. We can ignore the type provided by the `Input`.

    };
    return React__default.cloneElement(input, objectSpread({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: inputComponent,
      inputProps: objectSpread({}, inputNativeProps, native ? {} : {
        autoWidth: autoWidth,
        children: children,
        classes: classes,
        displayEmpty: displayEmpty,
        MenuProps: MenuProps,
        multiple: multiple,
        onClose: onClose,
        onOpen: onOpen,
        open: open,
        renderValue: renderValue,
        SelectDisplayProps: SelectDisplayProps
      }, inputProps, input ? input.props.inputProps : {})
    }, other));
  }

  Select.propTypes = {
    /**
     * If true, the width of the popover will automatically be set according to the items inside the
     * menu, otherwise it will be at least the width of the select input.
     */
    autoWidth: propTypes.bool,

    /**
     * The option elements to populate the select with.
     * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * If `true`, the selected item is displayed even if its value is empty.
     * You can only use it when the `native` property is `false` (default).
     */
    displayEmpty: propTypes.bool,

    /**
     * The icon that displays the arrow.
     */
    IconComponent: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * An `Input` element; does not have to be a material-ui specific `Input`.
     */
    input: propTypes.element,

    /**
     * Properties applied to the `input` element.
     * When `native` is `true`, the properties are applied on the `select` element.
     */
    inputProps: propTypes.object,

    /**
     * Properties applied to the `Menu` element.
     */
    MenuProps: propTypes.object,

    /**
     * If true, `value` must be an array and the menu will support multiple selections.
     * You can only use it when the `native` property is `false` (default).
     */
    multiple: propTypes.bool,

    /**
     * If `true`, the component will be using a native `select` element.
     */
    native: propTypes.bool,

    /**
     * Callback function fired when a menu item is selected.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     * @param {object} [child] The react element that was selected when `native` is `false` (default).
     */
    onChange: propTypes.func,

    /**
     * Callback fired when the component requests to be closed.
     * Use in controlled mode (see open).
     *
     * @param {object} event The event source of the callback
     */
    onClose: propTypes.func,

    /**
     * Callback fired when the component requests to be opened.
     * Use in controlled mode (see open).
     *
     * @param {object} event The event source of the callback
     */
    onOpen: propTypes.func,

    /**
     * Control `select` open state.
     * You can only use it when the `native` property is `false` (default).
     */
    open: propTypes.bool,

    /**
     * Render the selected value.
     * You can only use it when the `native` property is `false` (default).
     *
     * @param {*} value The `value` provided to the component.
     * @returns {ReactElement}
     */
    renderValue: propTypes.func,

    /**
     * Properties applied to the clickable div element.
     */
    SelectDisplayProps: propTypes.object,

    /**
     * The input value.
     * This property is required when the `native` property is `false` (default).
     */
    value: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.number]))])
  };
  Select.defaultProps = {
    autoWidth: false,
    displayEmpty: false,
    IconComponent: ArrowDropDownIcon,
    input: React__default.createElement(Input$1, null),
    multiple: false,
    native: false
  };
  Select.muiName = 'Select';
  var Select$1 = withStyles(styles$65, {
    name: 'MuiSelect'
  })(Select);

  var styles$68 = function styles(theme) {
    var _root;

    var emphasis = theme.palette.type === 'light' ? 0.8 : 0.98;
    var backgroundColor = emphasize(theme.palette.background.default, emphasis);
    return {
      root: (_root = {
        pointerEvents: 'initial',
        color: theme.palette.getContrastText(backgroundColor),
        backgroundColor: backgroundColor,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: "6px ".concat(theme.spacing.unit * 3, "px")
      }, defineProperty(_root, theme.breakpoints.up('md'), {
        minWidth: 288,
        maxWidth: 568,
        borderRadius: 2
      }), defineProperty(_root, theme.breakpoints.down('sm'), {
        flexGrow: 1
      }), _root),
      message: {
        padding: "".concat(theme.spacing.unit, "px 0")
      },
      action: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        paddingLeft: theme.spacing.unit * 3,
        marginRight: -theme.spacing.unit
      }
    };
  };

  function SnackbarContent(props) {
    var action = props.action,
        classes = props.classes,
        className = props.className,
        message = props.message,
        other = objectWithoutProperties(props, ["action", "classes", "className", "message"]);

    return React__default.createElement(Paper$1, _extends_1({
      component: Typography$1,
      headlineMapping: {
        body1: 'div'
      },
      role: "alertdialog",
      square: true,
      elevation: 6,
      className: classnames(classes.root, className)
    }, other), React__default.createElement("div", {
      className: classes.message
    }, message), action ? React__default.createElement("div", {
      className: classes.action
    }, action) : null);
  }

  SnackbarContent.propTypes = {
    /**
     * The action to display.
     */
    action: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The message to display.
     */
    message: propTypes.node
  };
  var SnackbarContent$1 = withStyles(styles$68, {
    name: 'MuiSnackbarContent'
  })(SnackbarContent);

  var styles$69 = function styles(theme) {
    var gutter = theme.spacing.unit * 3;
    var top = {
      top: 0
    };
    var bottom = {
      bottom: 0
    };
    var right = {
      justifyContent: 'flex-end'
    };
    var left = {
      justifyContent: 'flex-start'
    };
    var topSpace = {
      top: gutter
    };
    var bottomSpace = {
      bottom: gutter
    };
    var rightSpace = {
      right: gutter
    };
    var leftSpace = {
      left: gutter
    };
    var center = {
      left: '50%',
      right: 'auto',
      transform: 'translateX(-50%)'
    };
    return {
      root: {
        zIndex: theme.zIndex.snackbar,
        position: 'fixed',
        display: 'flex',
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
      },
      anchorOriginTopCenter: objectSpread({}, top, defineProperty({}, theme.breakpoints.up('md'), objectSpread({}, center))),
      anchorOriginBottomCenter: objectSpread({}, bottom, defineProperty({}, theme.breakpoints.up('md'), objectSpread({}, center))),
      anchorOriginTopRight: objectSpread({}, top, right, defineProperty({}, theme.breakpoints.up('md'), objectSpread({
        left: 'auto'
      }, topSpace, rightSpace))),
      anchorOriginBottomRight: objectSpread({}, bottom, right, defineProperty({}, theme.breakpoints.up('md'), objectSpread({
        left: 'auto'
      }, bottomSpace, rightSpace))),
      anchorOriginTopLeft: objectSpread({}, top, left, defineProperty({}, theme.breakpoints.up('md'), objectSpread({
        right: 'auto'
      }, topSpace, leftSpace))),
      anchorOriginBottomLeft: objectSpread({}, bottom, left, defineProperty({}, theme.breakpoints.up('md'), objectSpread({
        right: 'auto'
      }, bottomSpace, leftSpace)))
    };
  };

  var Snackbar =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Snackbar, _React$Component);

    function Snackbar() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, Snackbar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).call.apply(_ref, [this].concat(args))), _this.state = {}, _this.timerAutoHide = null, _this.handleMouseEnter = function (event) {
        if (_this.props.onMouseEnter) {
          _this.props.onMouseEnter(event);
        }

        _this.handlePause();
      }, _this.handleMouseLeave = function (event) {
        if (_this.props.onMouseLeave) {
          _this.props.onMouseLeave(event);
        }

        _this.handleResume();
      }, _this.handleClickAway = function (event) {
        if (_this.props.onClose) {
          _this.props.onClose(event, 'clickaway');
        }
      }, _this.handlePause = function () {
        clearTimeout(_this.timerAutoHide);
      }, _this.handleResume = function () {
        if (_this.props.autoHideDuration != null) {
          if (_this.props.resumeHideDuration !== undefined) {
            _this.setAutoHideTimer(_this.props.resumeHideDuration);

            return;
          }

          _this.setAutoHideTimer((_this.props.autoHideDuration || 0) * 0.5);
        }
      }, _this.handleExited = function () {
        _this.setState({
          exited: true
        });
      }, _temp));
    }

    createClass(Snackbar, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.open) {
          this.setAutoHideTimer();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.open !== this.props.open) {
          if (this.props.open) {
            this.setAutoHideTimer();
          } else {
            clearTimeout(this.timerAutoHide);
          }
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.timerAutoHide);
      } // Timer that controls delay before snackbar auto hides

    }, {
      key: "setAutoHideTimer",
      value: function setAutoHideTimer() {
        var _this2 = this;

        var autoHideDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (!this.props.onClose || this.props.autoHideDuration == null) {
          return;
        }

        clearTimeout(this.timerAutoHide);
        this.timerAutoHide = setTimeout(function () {
          if (!_this2.props.onClose || _this2.props.autoHideDuration == null) {
            return;
          }

          _this2.props.onClose(null, 'timeout');
        }, autoHideDuration || this.props.autoHideDuration || 0);
      }
    }, {
      key: "render",
      value: function render() {
        var _props = this.props,
            action = _props.action,
            _props$anchorOrigin = _props.anchorOrigin,
            vertical = _props$anchorOrigin.vertical,
            horizontal = _props$anchorOrigin.horizontal,
            autoHideDuration = _props.autoHideDuration,
            children = _props.children,
            classes = _props.classes,
            className = _props.className,
            ContentProps = _props.ContentProps,
            disableWindowBlurListener = _props.disableWindowBlurListener,
            message = _props.message,
            onClose = _props.onClose,
            onEnter = _props.onEnter,
            onEntered = _props.onEntered,
            onEntering = _props.onEntering,
            onExit = _props.onExit,
            onExited = _props.onExited,
            onExiting = _props.onExiting,
            onMouseEnter = _props.onMouseEnter,
            onMouseLeave = _props.onMouseLeave,
            open = _props.open,
            resumeHideDuration = _props.resumeHideDuration,
            TransitionComponent = _props.TransitionComponent,
            transitionDuration = _props.transitionDuration,
            TransitionProps = _props.TransitionProps,
            other = objectWithoutProperties(_props, ["action", "anchorOrigin", "autoHideDuration", "children", "classes", "className", "ContentProps", "disableWindowBlurListener", "message", "onClose", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"]); // So we only render active snackbars.


        if (!open && this.state.exited) {
          return null;
        }

        return React__default.createElement(ClickAwayListener, {
          onClickAway: this.handleClickAway
        }, React__default.createElement("div", _extends_1({
          className: classnames(classes.root, classes["anchorOrigin".concat(capitalize(vertical)).concat(capitalize(horizontal))], className),
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        }, other), React__default.createElement(EventListener, {
          target: "window",
          onFocus: disableWindowBlurListener ? undefined : this.handleResume,
          onBlur: disableWindowBlurListener ? undefined : this.handlePause
        }), React__default.createElement(TransitionComponent, _extends_1({
          appear: true,
          "in": open,
          onEnter: onEnter,
          onEntered: onEntered,
          onEntering: onEntering,
          onExit: onExit,
          onExited: createChainedFunction(this.handleExited, onExited),
          onExiting: onExiting,
          timeout: transitionDuration,
          direction: vertical === 'top' ? 'down' : 'up'
        }, TransitionProps), children || React__default.createElement(SnackbarContent$1, _extends_1({
          message: message,
          action: action
        }, ContentProps)))));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        if (typeof prevState.exited === 'undefined') {
          return {
            exited: !nextProps.open
          };
        }

        if (nextProps.open) {
          return {
            exited: false
          };
        }

        return null;
      }
    }]);

    return Snackbar;
  }(React__default.Component);

  Snackbar.propTypes = {
    /**
     * The action to display.
     */
    action: propTypes.node,

    /**
     * The anchor of the `Snackbar`.
     */
    anchorOrigin: propTypes.shape({
      horizontal: propTypes.oneOfType([propTypes.number, propTypes.oneOf(['left', 'center', 'right'])]),
      vertical: propTypes.oneOfType([propTypes.number, propTypes.oneOf(['top', 'center', 'bottom'])])
    }),

    /**
     * The number of milliseconds to wait before automatically calling the
     * `onClose` function. `onClose` should then set the state of the `open`
     * prop to hide the Snackbar. This behavior is disabled by default with
     * the `null` value.
     */
    autoHideDuration: propTypes.number,

    /**
     * If you wish the take control over the children of the component you can use this property.
     * When used, you replace the `SnackbarContent` component with the children.
     */
    children: propTypes.element,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * Properties applied to the `SnackbarContent` element.
     */
    ContentProps: propTypes.object,

    /**
     * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
     */
    disableWindowBlurListener: propTypes.bool,

    /**
     * When displaying multiple consecutive Snackbars from a parent rendering a single
     * <Snackbar/>, add the key property to ensure independent treatment of each message.
     * e.g. <Snackbar key={message} />, otherwise, the message may update-in-place and
     * features such as autoHideDuration may be canceled.
     */
    key: propTypes.any,

    /**
     * The message to display.
     */
    message: propTypes.node,

    /**
     * Callback fired when the component requests to be closed.
     * Typically `onClose` is used to set state in the parent component,
     * which is used to control the `Snackbar` `open` prop.
     * The `reason` parameter can optionally be used to control the response to `onClose`,
     * for example ignoring `clickaway`.
     *
     * @param {object} event The event source of the callback
     * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
     */
    onClose: propTypes.func,

    /**
     * Callback fired before the transition is entering.
     */
    onEnter: propTypes.func,

    /**
     * Callback fired when the transition has entered.
     */
    onEntered: propTypes.func,

    /**
     * Callback fired when the transition is entering.
     */
    onEntering: propTypes.func,

    /**
     * Callback fired before the transition is exiting.
     */
    onExit: propTypes.func,

    /**
     * Callback fired when the transition has exited.
     */
    onExited: propTypes.func,

    /**
     * Callback fired when the transition is exiting.
     */
    onExiting: propTypes.func,

    /**
     * @ignore
     */
    onMouseEnter: propTypes.func,

    /**
     * @ignore
     */
    onMouseLeave: propTypes.func,

    /**
     * If true, `Snackbar` is open.
     */
    open: propTypes.bool,

    /**
     * The number of milliseconds to wait before dismissing after user interaction.
     * If `autoHideDuration` property isn't specified, it does nothing.
     * If `autoHideDuration` property is specified but `resumeHideDuration` isn't,
     * we default to `autoHideDuration / 2` ms.
     */
    resumeHideDuration: propTypes.number,

    /**
     * Transition component.
     */
    TransitionComponent: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    transitionDuration: propTypes.oneOfType([propTypes.number, propTypes.shape({
      enter: propTypes.number,
      exit: propTypes.number
    })]),

    /**
     * Properties applied to the `Transition` element.
     */
    TransitionProps: propTypes.object
  };
  Snackbar.defaultProps = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    disableWindowBlurListener: false,
    TransitionComponent: Slide$1,
    transitionDuration: {
      enter: duration.enteringScreen,
      exit: duration.leavingScreen
    }
  };
  var Snackbar$1 = withStyles(styles$69, {
    flip: false,
    name: 'MuiSnackbar'
  })(Snackbar);

  var styles$70 = function styles(theme) {
    return {
      root: {},
      horizontal: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        '&:first-child': {
          paddingLeft: 0
        },
        '&:last-child': {
          paddingRight: 0
        }
      },
      vertical: {},
      alternativeLabel: {
        flex: 1,
        position: 'relative'
      }
    };
  };

  function Step(props) {
    var active = props.active,
        alternativeLabel = props.alternativeLabel,
        children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        completed = props.completed,
        connector = props.connector,
        disabled = props.disabled,
        index = props.index,
        last = props.last,
        orientation = props.orientation,
        other = objectWithoutProperties(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "connector", "disabled", "index", "last", "orientation"]);

    var className = classnames(classes.root, classes[orientation], defineProperty({}, classes.alternativeLabel, alternativeLabel), classNameProp);
    return React__default.createElement("div", _extends_1({
      className: className
    }, other), React__default.Children.map(children, function (child) {
      return React__default.cloneElement(child, objectSpread({
        active: active,
        alternativeLabel: alternativeLabel,
        completed: completed,
        disabled: disabled,
        icon: index + 1,
        last: last,
        orientation: orientation
      }, child.props));
    }), connector && alternativeLabel && !last && React__default.cloneElement(connector, {
      orientation: orientation,
      alternativeLabel: alternativeLabel
    }));
  }

  Step.propTypes = {
    /**
     * Sets the step as active. Is passed to child components.
     */
    active: propTypes.bool,

    /**
     * @ignore
     * Set internally by Stepper when it's supplied with the alternativeLabel property.
     */
    alternativeLabel: propTypes.bool,

    /**
     * Should be `Step` sub-components such as `StepLabel`, `StepContent`.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: propTypes.bool,

    /**
     * @ignore
     * Passed down from Stepper if alternativeLabel is also set.
     */
    connector: propTypes.element,

    /**
     * Mark the step as disabled, will also disable the button if
     * `StepButton` is a child of `Step`. Is passed to child components.
     */
    disabled: propTypes.bool,

    /**
     * @ignore
     * Used internally for numbering.
     */
    index: propTypes.number,

    /**
     * @ignore
     */
    last: propTypes.bool,

    /**
     * @ignore
     */
    orientation: propTypes.oneOf(['horizontal', 'vertical'])
  };
  Step.defaultProps = {
    active: false,
    completed: false,
    disabled: false
  };
  var Step$1 = withStyles(styles$70, {
    name: 'MuiStep'
  })(Step);

  /**
   * @ignore - internal component.
   */

  var _ref$8 = React__default.createElement("path", {
    d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"
  });

  var CheckCircle = function CheckCircle(props) {
    return React__default.createElement(SvgIcon$1, props, _ref$8);
  };

  CheckCircle = pure(CheckCircle);
  CheckCircle.muiName = 'SvgIcon';
  var CheckCircle$1 = CheckCircle;

  /**
   * @ignore - internal component.
   */

  var _ref$9 = React__default.createElement("path", {
    d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
  });

  var Warning = function Warning(props) {
    return React__default.createElement(SvgIcon$1, props, _ref$9);
  };

  Warning = pure(Warning);
  Warning.muiName = 'SvgIcon';
  var Warning$1 = Warning;

  var styles$71 = function styles(theme) {
    return {
      root: {
        color: theme.palette.text.disabled
      },
      text: {
        fill: theme.palette.primary.contrastText,
        fontSize: theme.typography.caption.fontSize,
        fontFamily: theme.typography.fontFamily
      }
    };
  };
  /**
   * @ignore - internal component.
   */

  var _ref$10 = React__default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "12"
  });

  function StepPositionIcon(props) {
    var position = props.position,
        classes = props.classes,
        className = props.className;
    return React__default.createElement(SvgIcon$1, {
      className: classnames(classes.root, className)
    }, _ref$10, React__default.createElement("text", {
      className: classes.text,
      x: "12",
      y: "16",
      textAnchor: "middle"
    }, position));
  }

  StepPositionIcon.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The step position as a number.
     */
    position: propTypes.node
  };
  var StepPositionIcon$1 = withStyles(styles$71)(StepPositionIcon);

  var styles$72 = function styles(theme) {
    return {
      root: {
        display: 'block',
        '&$active': {
          color: theme.palette.primary.main
        },
        '&$completed': {
          color: theme.palette.primary.main
        },
        '&$error': {
          color: theme.palette.error.main
        }
      },
      active: {},
      completed: {},
      error: {}
    };
  };

  function StepIcon(props) {
    var completed = props.completed,
        icon = props.icon,
        active = props.active,
        error = props.error,
        classes = props.classes;

    if (typeof icon === 'number' || typeof icon === 'string') {
      if (error) {
        return React__default.createElement(Warning$1, {
          className: classnames(classes.root, classes.error)
        });
      }

      if (completed) {
        return React__default.createElement(CheckCircle$1, {
          className: classnames(classes.root, classes.completed)
        });
      }

      return React__default.createElement(StepPositionIcon$1, {
        className: classnames(classes.root, defineProperty({}, classes.active, active)),
        position: icon
      });
    }

    return icon;
  }

  StepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: propTypes.bool,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: propTypes.bool,

    /**
     * Mark the step as failed.
     */
    error: propTypes.bool,

    /**
     * The icon displayed by the step label.
     */
    icon: propTypes.node.isRequired
  };
  StepIcon.defaultProps = {
    active: false,
    completed: false,
    error: false
  };
  var StepIcon$1 = withStyles(styles$72, {
    name: 'MuiStepIcon'
  })(StepIcon);

  var styles$73 = function styles(theme) {
    return {
      root: {
        display: 'flex',
        alignItems: 'center',
        '&$alternativeLabel': {
          flexDirection: 'column'
        },
        '&$disabled': {
          cursor: 'default'
        }
      },
      horizontal: {},
      vertical: {},
      active: {},
      completed: {},
      alternativeLabel: {},
      error: {},
      disabled: {},
      label: {
        color: theme.palette.text.secondary,
        '&$active': {
          color: theme.palette.text.primary,
          fontWeight: 500
        },
        '&$completed': {
          color: theme.palette.text.primary,
          fontWeight: 500
        },
        '&$alternativeLabel': {
          textAlign: 'center',
          marginTop: theme.spacing.unit * 2
        },
        '&$error': {
          color: theme.palette.error.main
        }
      },
      iconContainer: {
        paddingRight: theme.spacing.unit,
        '&$alternativeLabel': {
          paddingRight: 0
        }
      },
      labelContainer: {
        width: '100%'
      }
    };
  };

  function StepLabel(props) {
    var _classNames, _classNames3;

    var active = props.active,
        alternativeLabel = props.alternativeLabel,
        children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        completed = props.completed,
        disabled = props.disabled,
        error = props.error,
        icon = props.icon,
        last = props.last,
        optional = props.optional,
        orientation = props.orientation,
        StepIconProps = props.StepIconProps,
        other = objectWithoutProperties(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "disabled", "error", "icon", "last", "optional", "orientation", "StepIconProps"]);

    return React__default.createElement("span", _extends_1({
      className: classnames(classes.root, classes[orientation], (_classNames = {}, defineProperty(_classNames, classes.disabled, disabled), defineProperty(_classNames, classes.alternativeLabel, alternativeLabel), defineProperty(_classNames, classes.error, error), _classNames), classNameProp)
    }, other), icon && React__default.createElement("span", {
      className: classnames(classes.iconContainer, defineProperty({}, classes.alternativeLabel, alternativeLabel))
    }, React__default.createElement(StepIcon$1, _extends_1({
      completed: completed,
      active: active,
      error: error,
      icon: icon
    }, StepIconProps))), React__default.createElement("span", {
      className: classes.labelContainer
    }, React__default.createElement(Typography$1, {
      variant: "body1",
      component: "span",
      className: classnames(classes.label, (_classNames3 = {}, defineProperty(_classNames3, classes.alternativeLabel, alternativeLabel), defineProperty(_classNames3, classes.completed, completed), defineProperty(_classNames3, classes.active, active), defineProperty(_classNames3, classes.error, error), _classNames3))
    }, children), optional));
  }

  StepLabel.propTypes = {
    /**
     * @ignore
     * Sets the step as active. Is passed to child components.
     */
    active: propTypes.bool,

    /**
     * @ignore
     * Set internally by Stepper when it's supplied with the alternativeLabel property.
     */
    alternativeLabel: propTypes.bool,

    /**
     * In most cases will simply be a string containing a title for the label.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * @ignore
     * Mark the step as completed. Is passed to child components.
     */
    completed: propTypes.bool,

    /**
     * Mark the step as disabled, will also disable the button if
     * `StepLabelButton` is a child of `StepLabel`. Is passed to child components.
     */
    disabled: propTypes.bool,

    /**
     * Mark the step as failed.
     */
    error: propTypes.bool,

    /**
     * Override the default icon.
     */
    icon: propTypes.node,

    /**
     * @ignore
     */
    last: propTypes.bool,

    /**
     * The optional node to display.
     */
    optional: propTypes.node,

    /**
     * @ignore
     */
    orientation: propTypes.oneOf(['horizontal', 'vertical']),

    /**
     * Properties applied to the `StepIcon` element.
     */
    StepIconProps: propTypes.object
  };
  StepLabel.defaultProps = {
    active: false,
    alternativeLabel: false,
    completed: false,
    disabled: false,
    error: false,
    last: false,
    orientation: 'horizontal'
  };
  StepLabel.muiName = 'StepLabel';
  var StepLabel$1 = withStyles(styles$73, {
    name: 'MuiStepLabel'
  })(StepLabel);

  var styles$74 = function styles(theme) {
    return {
      root: {
        width: '100%',
        padding: "".concat(theme.spacing.unit * 3, "px ").concat(theme.spacing.unit * 2, "px"),
        margin: "".concat(-theme.spacing.unit * 3, "px ").concat(-theme.spacing.unit * 2, "px"),
        boxSizing: 'content-box'
      },
      vertical: {
        justifyContent: 'left'
      },
      touchRipple: {
        color: 'rgba(0, 0, 0, 0.3)'
      }
    };
  };

  function StepButton(props) {
    var active = props.active,
        alternativeLabel = props.alternativeLabel,
        children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        completed = props.completed,
        disabled = props.disabled,
        icon = props.icon,
        last = props.last,
        optional = props.optional,
        orientation = props.orientation,
        other = objectWithoutProperties(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "disabled", "icon", "last", "optional", "orientation"]);

    var childProps = {
      active: active,
      alternativeLabel: alternativeLabel,
      completed: completed,
      disabled: disabled,
      icon: icon,
      optional: optional,
      orientation: orientation
    };
    var child = isMuiElement(children, ['StepLabel']) ? React__default.cloneElement(children, childProps) : React__default.createElement(StepLabel$1, childProps, children);
    return React__default.createElement(ButtonBase$1, _extends_1({
      disabled: disabled,
      TouchRippleProps: {
        className: classes.touchRipple
      },
      className: classnames(classes.root, defineProperty({}, classes.vertical, orientation === 'vertical'), classNameProp)
    }, other), child);
  }

  StepButton.propTypes = {
    /**
     * @ignore
     * Passed in via `Step` - passed through to `StepLabel`.
     */
    active: propTypes.bool,

    /**
     * @ignore
     * Set internally by Stepper when it's supplied with the alternativeLabel property.
     */
    alternativeLabel: propTypes.bool,

    /**
     * Can be a `StepLabel` or a node to place inside `StepLabel` as children.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * @ignore
     * Sets completed styling. Is passed to StepLabel.
     */
    completed: propTypes.bool,

    /**
     * @ignore
     * Disables the button and sets disabled styling. Is passed to StepLabel.
     */
    disabled: propTypes.bool,

    /**
     * The icon displayed by the step label.
     */
    icon: propTypes.node,

    /**
     * @ignore
     */
    last: propTypes.bool,

    /**
     * The optional node to display.
     */
    optional: propTypes.node,

    /**
     * @ignore
     */
    orientation: propTypes.oneOf(['horizontal', 'vertical'])
  };
  var StepButton$1 = withStyles(styles$74, {
    name: 'MuiStepButton'
  })(StepButton);

  var styles$75 = function styles(theme) {
    return {
      root: {
        flex: '1 1 auto'
      },
      horizontal: {},
      vertical: {
        marginLeft: 12,
        // half icon
        padding: "0 0 ".concat(theme.spacing.unit, "px")
      },
      alternativeLabel: {
        position: 'absolute',
        top: theme.spacing.unit + 4,
        left: 'calc(50% + 20px)',
        right: 'calc(-50% + 20px)'
      },
      line: {
        display: 'block',
        borderColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
      },
      lineHorizontal: {
        borderTopStyle: 'solid',
        borderTopWidth: 1
      },
      lineVertical: {
        borderLeftStyle: 'solid',
        borderLeftWidth: 1,
        minHeight: theme.spacing.unit * 3
      }
    };
  };

  function StepConnector(props) {
    var _classNames2;

    var alternativeLabel = props.alternativeLabel,
        classNameProp = props.className,
        classes = props.classes,
        orientation = props.orientation,
        other = objectWithoutProperties(props, ["alternativeLabel", "className", "classes", "orientation"]);

    var className = classnames(classes.root, classes[orientation], defineProperty({}, classes.alternativeLabel, alternativeLabel), classNameProp);
    var lineClassName = classnames(classes.line, (_classNames2 = {}, defineProperty(_classNames2, classes.lineHorizontal, orientation === 'horizontal'), defineProperty(_classNames2, classes.lineVertical, orientation === 'vertical'), _classNames2));
    return React__default.createElement("div", _extends_1({
      className: className
    }, other), React__default.createElement("span", {
      className: lineClassName
    }));
  }

  StepConnector.propTypes = {
    /**
     * @ignore
     * Set internally by Step when it's supplied with the alternativeLabel property.
     */
    alternativeLabel: propTypes.bool,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * @ignore
     */
    orientation: propTypes.oneOf(['horizontal', 'vertical'])
  };
  StepConnector.defaultProps = {
    alternativeLabel: false,
    orientation: 'horizontal'
  };
  var StepConnector$1 = withStyles(styles$75, {
    name: 'MuiStepConnector'
  })(StepConnector);

  var styles$76 = function styles(theme) {
    return {
      root: {
        marginTop: theme.spacing.unit,
        marginLeft: 12,
        // half icon
        paddingLeft: theme.spacing.unit + 12,
        // margin + half icon
        paddingRight: theme.spacing.unit,
        borderLeft: "1px solid ".concat(theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600])
      },
      last: {
        borderLeft: 'none'
      },
      transition: {}
    };
  };

  function StepContent(props) {
    var active = props.active,
        alternativeLabel = props.alternativeLabel,
        children = props.children,
        classes = props.classes,
        className = props.className,
        completed = props.completed,
        last = props.last,
        optional = props.optional,
        orientation = props.orientation,
        TransitionComponent = props.TransitionComponent,
        transitionDuration = props.transitionDuration,
        TransitionProps = props.TransitionProps,
        other = objectWithoutProperties(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "last", "optional", "orientation", "TransitionComponent", "transitionDuration", "TransitionProps"]);

    warning_1(orientation === 'vertical', 'Material-UI: <StepContent /> is only designed for use with the vertical stepper.');
    return React__default.createElement("div", _extends_1({
      className: classnames(classes.root, defineProperty({}, classes.last, last), className)
    }, other), React__default.createElement(TransitionComponent, _extends_1({
      "in": active,
      className: classes.transition,
      timeout: transitionDuration,
      unmountOnExit: true
    }, TransitionProps), children));
  }

  StepContent.propTypes = {
    /**
     * @ignore
     * Expands the content.
     */
    active: propTypes.bool,

    /**
     * @ignore
     * Set internally by Step when it's supplied with the alternativeLabel property.
     */
    alternativeLabel: propTypes.bool,

    /**
     * Step content.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * @ignore
     */
    completed: propTypes.bool,

    /**
     * @ignore
     */
    last: propTypes.bool,

    /**
     * @ignore
     * Set internally by Step when it's supplied with the optional property.
     */
    optional: propTypes.bool,

    /**
     * @ignore
     */
    orientation: propTypes.oneOf(['horizontal', 'vertical']),

    /**
     * Collapse component.
     */
    TransitionComponent: propTypes.func,

    /**
     * Adjust the duration of the content expand transition.
     * Passed as a property to the transition component.
     *
     * Set to 'auto' to automatically calculate transition time based on height.
     */
    transitionDuration: propTypes.oneOfType([propTypes.number, propTypes.shape({
      enter: propTypes.number,
      exit: propTypes.number
    }), propTypes.oneOf(['auto'])]),

    /**
     * Properties applied to the `Transition` element.
     */
    TransitionProps: propTypes.object
  };
  StepContent.defaultProps = {
    TransitionComponent: Collapse$1,
    transitionDuration: 'auto'
  };
  var StepContent$1 = withStyles(styles$76, {
    name: 'MuiStepContent'
  })(StepContent);

  var styles$77 = function styles(theme) {
    return {
      root: {
        display: 'flex',
        padding: theme.spacing.unit * 3
      },
      horizontal: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      vertical: {
        flexDirection: 'column'
      },
      alternativeLabel: {
        alignItems: 'flex-start'
      }
    };
  };

  function Stepper(props) {
    var activeStep = props.activeStep,
        alternativeLabel = props.alternativeLabel,
        children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        connectorProp = props.connector,
        nonLinear = props.nonLinear,
        orientation = props.orientation,
        other = objectWithoutProperties(props, ["activeStep", "alternativeLabel", "children", "classes", "className", "connector", "nonLinear", "orientation"]);

    var className = classnames(classes.root, classes[orientation], defineProperty({}, classes.alternativeLabel, alternativeLabel), classNameProp);
    var connector = React__default.isValidElement(connectorProp) ? React__default.cloneElement(connectorProp, {
      orientation: orientation
    }) : null;
    var childrenArray = React__default.Children.toArray(children);
    var steps = childrenArray.map(function (step, index) {
      var controlProps = {
        index: index,
        orientation: orientation,
        active: false,
        completed: false,
        disabled: false,
        last: index + 1 === childrenArray.length,
        alternativeLabel: alternativeLabel,
        connector: connectorProp
      };

      if (activeStep === index) {
        controlProps.active = true;
      } else if (!nonLinear && activeStep > index) {
        controlProps.completed = true;
      } else if (!nonLinear && activeStep < index) {
        controlProps.disabled = true;
      }

      return [!alternativeLabel && connector && index > 0 && React__default.cloneElement(connector, {
        key: index // eslint-disable-line react/no-array-index-key

      }), React__default.cloneElement(step, objectSpread({}, controlProps, step.props))];
    });
    return React__default.createElement(Paper$1, _extends_1({
      square: true,
      elevation: 0,
      className: className
    }, other), steps);
  }

  Stepper.propTypes = {
    /**
     * Set the active step (zero based index).
     */
    activeStep: propTypes.number,

    /**
     * If set to 'true' and orientation is horizontal,
     * then the step label will be positioned under the icon.
     */
    alternativeLabel: propTypes.bool,

    /**
     * Two or more `<Step />` components.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * A component to be placed between each step.
     */
    connector: propTypes.element,

    /**
     * If set the `Stepper` will not assist in controlling steps for linear flow.
     */
    nonLinear: propTypes.bool,

    /**
     * The stepper orientation (layout flow direction).
     */
    orientation: propTypes.oneOf(['horizontal', 'vertical'])
  };
  Stepper.defaultProps = {
    activeStep: 0,
    alternativeLabel: false,
    connector: React__default.createElement(StepConnector$1, null),
    nonLinear: false,
    orientation: 'horizontal'
  };
  Stepper.muiName = 'Stepper';
  var Stepper$1 = withStyles(styles$77, {
    name: 'MuiStepper'
  })(Stepper);

  var styles$78 = function styles(theme) {
    return {
      root: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        zIndex: theme.zIndex.drawer - 1
      },
      discoveryAnchorLeft: {
        right: 'auto'
      },
      discoveryAnchorRight: {
        left: 'auto',
        right: 0
      },
      discoveryAnchorTop: {
        bottom: 'auto',
        right: 0
      },
      discoveryAnchorBottom: {
        top: 'auto',
        bottom: 0,
        right: 0
      }
    };
  };
  /**
   * @ignore - internal component.
   */

  function SwipeArea(props) {
    var anchor = props.anchor,
        classes = props.classes,
        swipeAreaWidth = props.swipeAreaWidth,
        other = objectWithoutProperties(props, ["anchor", "classes", "swipeAreaWidth"]);

    return React__default.createElement("div", _extends_1({
      className: classnames(classes.root, classes["discoveryAnchor".concat(capitalize(anchor))]),
      style: defineProperty({}, isHorizontal(props) ? 'width' : 'height', swipeAreaWidth)
    }, other));
  }

  SwipeArea.propTypes = {
    /**
     * Side on which to attach the discovery area.
     */
    anchor: propTypes.oneOf(['left', 'top', 'right', 'bottom']).isRequired,

    /**
     * @ignore
     */
    classes: propTypes.object.isRequired,

    /**
     * The width of the left most (or right most) area in pixels where the
     * drawer can be swiped open from.
     */
    swipeAreaWidth: propTypes.number.isRequired
  };
  var SwipeArea$1 = withStyles(styles$78)(SwipeArea);

  var Fragment = React__default.Fragment || 'div'; // This value is closed to what browsers are using internally to
  // trigger a native scroll.

  var UNCERTAINTY_THRESHOLD = 3; // px
  // We can only have one node at the time claiming ownership for handling the swipe.
  // Otherwise, the UX would be confusing.
  // That's why we use a singleton here.

  var nodeThatClaimedTheSwipe = null; // Exported for test purposes.

  var SwipeableDrawer =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(SwipeableDrawer, _React$Component);

    function SwipeableDrawer() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, SwipeableDrawer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = SwipeableDrawer.__proto__ || Object.getPrototypeOf(SwipeableDrawer)).call.apply(_ref, [this].concat(args))), _this.state = {}, _this.handleBodyTouchStart = function (event) {
        // We are not supposed to hanlde this touch move.
        if (nodeThatClaimedTheSwipe !== null && nodeThatClaimedTheSwipe !== assertThisInitialized(_this)) {
          return;
        }

        var _this$props = _this.props,
            disableDiscovery = _this$props.disableDiscovery,
            disableSwipeToOpen = _this$props.disableSwipeToOpen,
            open = _this$props.open,
            swipeAreaWidth = _this$props.swipeAreaWidth;
        var anchor = getAnchor(_this.props);
        var currentX = anchor === 'right' ? document.body.offsetWidth - event.touches[0].pageX : event.touches[0].pageX;
        var currentY = anchor === 'bottom' ? window.innerHeight - event.touches[0].clientY : event.touches[0].clientY;

        if (!open) {
          if (disableSwipeToOpen) {
            return;
          }

          if (isHorizontal(_this.props)) {
            if (currentX > swipeAreaWidth) {
              return;
            }
          } else if (currentY > swipeAreaWidth) {
            return;
          }
        }

        nodeThatClaimedTheSwipe = assertThisInitialized(_this);
        _this.startX = currentX;
        _this.startY = currentY;

        _this.setState({
          maybeSwiping: true
        });

        if (!open && _this.paper) {
          // the ref may be null when a parent component updates while swiping
          _this.setPosition(_this.getMaxTranslate() + (disableDiscovery ? 20 : -swipeAreaWidth), {
            changeTransition: false
          });
        }

        document.body.addEventListener('touchmove', _this.handleBodyTouchMove, {
          passive: false
        });
        document.body.addEventListener('touchend', _this.handleBodyTouchEnd); // https://plus.google.com/+PaulIrish/posts/KTwfn1Y2238

        document.body.addEventListener('touchcancel', _this.handleBodyTouchEnd);
      }, _this.handleBodyTouchMove = function (event) {
        // the ref may be null when a parent component updates while swiping
        if (!_this.paper) return;
        var anchor = getAnchor(_this.props);
        var horizontalSwipe = isHorizontal(_this.props);
        var currentX = anchor === 'right' ? document.body.offsetWidth - event.touches[0].pageX : event.touches[0].pageX;
        var currentY = anchor === 'bottom' ? window.innerHeight - event.touches[0].clientY : event.touches[0].clientY; // We don't know yet.

        if (_this.isSwiping == null) {
          var dx = Math.abs(currentX - _this.startX);
          var dy = Math.abs(currentY - _this.startY); // We are likely to be swiping, let's prevent the scroll event on iOS.

          if (dx > dy) {
            event.preventDefault();
          }

          var isSwiping = horizontalSwipe ? dx > dy && dx > UNCERTAINTY_THRESHOLD : dy > dx && dy > UNCERTAINTY_THRESHOLD;

          if (isSwiping === true || (horizontalSwipe ? dy > UNCERTAINTY_THRESHOLD : dx > UNCERTAINTY_THRESHOLD)) {
            _this.isSwiping = isSwiping;

            if (!isSwiping) {
              _this.handleBodyTouchEnd(event);

              return;
            } // Shift the starting point.


            _this.startX = currentX;
            _this.startY = currentY; // Compensate for the part of the drawer displayed on touch start.

            if (!_this.props.disableDiscovery && !_this.props.open) {
              if (horizontalSwipe) {
                _this.startX -= _this.props.swipeAreaWidth;
              } else {
                _this.startY -= _this.props.swipeAreaWidth;
              }
            }
          }
        }

        if (!_this.isSwiping) {
          return;
        } // We are swiping, let's prevent the scroll event on iOS.


        event.preventDefault();

        _this.setPosition(_this.getTranslate(horizontalSwipe ? currentX : currentY));
      }, _this.handleBodyTouchEnd = function (event) {
        nodeThatClaimedTheSwipe = null;

        _this.removeBodyTouchListeners();

        _this.setState({
          maybeSwiping: false
        }); // The swipe wasn't started.


        if (!_this.isSwiping) {
          _this.isSwiping = null;
          return;
        }

        var anchor = getAnchor(_this.props);
        var current;

        if (isHorizontal(_this.props)) {
          current = anchor === 'right' ? document.body.offsetWidth - event.changedTouches[0].pageX : event.changedTouches[0].pageX;
        } else {
          current = anchor === 'bottom' ? window.innerHeight - event.changedTouches[0].clientY : event.changedTouches[0].clientY;
        }

        var translateRatio = _this.getTranslate(current) / _this.getMaxTranslate(); // We have to open or close after setting swiping to null,
        // because only then CSS transition is enabled.


        if (translateRatio > 0.5) {
          if (_this.isSwiping && !_this.props.open) {
            // Reset the position, the swipe was aborted.
            _this.setPosition(_this.getMaxTranslate(), {
              mode: 'enter'
            });
          } else {
            _this.props.onClose();
          }
        } else if (_this.isSwiping && !_this.props.open) {
          _this.props.onOpen();
        } else {
          // Reset the position, the swipe was aborted.
          _this.setPosition(0, {
            mode: 'exit'
          });
        }

        _this.isSwiping = null;
      }, _this.backdrop = null, _this.paper = null, _this.isSwiping = null, _this.startX = null, _this.startY = null, _this.handleBackdropRef = function (node) {
        _this.backdrop = node ? ReactDOM.findDOMNode(node) : null;
      }, _this.handlePaperRef = function (node) {
        _this.paper = node ? ReactDOM.findDOMNode(node) : null;
      }, _temp));
    }

    createClass(SwipeableDrawer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.variant === 'temporary') {
          this.listenTouchStart();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var variant = this.props.variant;
        var prevVariant = prevProps.variant;

        if (variant !== prevVariant) {
          if (variant === 'temporary') {
            this.listenTouchStart();
          } else if (prevVariant === 'temporary') {
            this.removeTouchStart();
          }
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.removeTouchStart();
        this.removeBodyTouchListeners(); // We need to release the lock.

        if (nodeThatClaimedTheSwipe === this) {
          nodeThatClaimedTheSwipe = null;
        }
      }
    }, {
      key: "getMaxTranslate",
      value: function getMaxTranslate() {
        return isHorizontal(this.props) ? this.paper.clientWidth : this.paper.clientHeight;
      }
    }, {
      key: "getTranslate",
      value: function getTranslate(current) {
        var start = isHorizontal(this.props) ? this.startX : this.startY;
        return Math.min(Math.max(this.props.open ? start - current : this.getMaxTranslate() + start - current, 0), this.getMaxTranslate());
      }
    }, {
      key: "setPosition",
      value: function setPosition(translate) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$mode = options.mode,
            mode = _options$mode === void 0 ? null : _options$mode,
            _options$changeTransi = options.changeTransition,
            changeTransition = _options$changeTransi === void 0 ? true : _options$changeTransi;
        var anchor = getAnchor(this.props);
        var rtlTranslateMultiplier = ['right', 'bottom'].indexOf(anchor) !== -1 ? 1 : -1;
        var transform = isHorizontal(this.props) ? "translate(".concat(rtlTranslateMultiplier * translate, "px, 0)") : "translate(0, ".concat(rtlTranslateMultiplier * translate, "px)");
        var drawerStyle = this.paper.style;
        drawerStyle.webkitTransform = transform;
        drawerStyle.transform = transform;
        var transition = '';

        if (mode) {
          transition = this.props.theme.transitions.create('all', getTransitionProps({
            timeout: this.props.transitionDuration
          }, {
            mode: mode
          }));
        }

        if (changeTransition) {
          drawerStyle.webkitTransition = transition;
          drawerStyle.transition = transition;
        }

        if (!this.props.disableBackdropTransition) {
          var backdropStyle = this.backdrop.style;
          backdropStyle.opacity = 1 - translate / this.getMaxTranslate();

          if (changeTransition) {
            backdropStyle.webkitTransition = transition;
            backdropStyle.transition = transition;
          }
        }
      }
    }, {
      key: "listenTouchStart",
      value: function listenTouchStart() {
        document.body.addEventListener('touchstart', this.handleBodyTouchStart);
      }
    }, {
      key: "removeTouchStart",
      value: function removeTouchStart() {
        document.body.removeEventListener('touchstart', this.handleBodyTouchStart);
      }
    }, {
      key: "removeBodyTouchListeners",
      value: function removeBodyTouchListeners() {
        document.body.removeEventListener('touchmove', this.handleBodyTouchMove, {
          passive: false
        });
        document.body.removeEventListener('touchend', this.handleBodyTouchEnd);
        document.body.removeEventListener('touchcancel', this.handleBodyTouchEnd);
      }
    }, {
      key: "render",
      value: function render() {
        var _props = this.props,
            disableBackdropTransition = _props.disableBackdropTransition,
            disableDiscovery = _props.disableDiscovery,
            disableSwipeToOpen = _props.disableSwipeToOpen,
            _props$ModalProps = _props.ModalProps;
        _props$ModalProps = _props$ModalProps === void 0 ? {} : _props$ModalProps;

        var BackdropProps = _props$ModalProps.BackdropProps,
            ModalPropsProp = objectWithoutProperties(_props$ModalProps, ["BackdropProps"]),
            onOpen = _props.onOpen,
            open = _props.open,
            PaperProps = _props.PaperProps,
            swipeAreaWidth = _props.swipeAreaWidth,
            variant = _props.variant,
            other = objectWithoutProperties(_props, ["disableBackdropTransition", "disableDiscovery", "disableSwipeToOpen", "ModalProps", "onOpen", "open", "PaperProps", "swipeAreaWidth", "variant"]);

        var maybeSwiping = this.state.maybeSwiping;
        return React__default.createElement(Fragment, null, React__default.createElement(Drawer$1, _extends_1({
          open: variant === 'temporary' && maybeSwiping ? true : open,
          variant: variant,
          ModalProps: objectSpread({
            BackdropProps: objectSpread({}, BackdropProps, {
              ref: this.handleBackdropRef
            })
          }, ModalPropsProp),
          PaperProps: objectSpread({}, PaperProps, {
            style: {
              pointerEvents: variant === 'temporary' && !open ? 'none' : ''
            },
            ref: this.handlePaperRef
          })
        }, other)), !disableDiscovery && !disableSwipeToOpen && variant === 'temporary' && React__default.createElement(SwipeArea$1, {
          anchor: other.anchor,
          swipeAreaWidth: swipeAreaWidth
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps() {
        // Reset the maybeSwiping state everytime we receive new properties.
        return {
          maybeSwiping: false
        };
      }
    }]);

    return SwipeableDrawer;
  }(React__default.Component);

  SwipeableDrawer.propTypes = {
    /**
     * @ignore
     */
    anchor: propTypes.oneOf(['left', 'top', 'right', 'bottom']),

    /**
     * Disable the backdrop transition.
     * This can improve the FPS on low-end devices.
     */
    disableBackdropTransition: propTypes.bool,

    /**
     * If `true`, touching the screen near the edge of the drawer will not slide in the drawer a bit
     * to promote accidental discovery of the swipe gesture.
     */
    disableDiscovery: propTypes.bool,

    /**
     * If `true`, swipe to open is disabled. This is useful in browsers where swiping triggers
     * navigation actions. Swipe to open is disabled on iOS browsers by default.
     */
    disableSwipeToOpen: propTypes.bool,

    /**
     * @ignore
     */
    ModalProps: propTypes.object,

    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback
     */
    onClose: propTypes.func.isRequired,

    /**
     * Callback fired when the component requests to be opened.
     *
     * @param {object} event The event source of the callback
     */
    onOpen: propTypes.func.isRequired,

    /**
     * If `true`, the drawer is open.
     */
    open: propTypes.bool.isRequired,

    /**
     * @ignore
     */
    PaperProps: propTypes.object,

    /**
     * The width of the left most (or right most) area in pixels where the
     * drawer can be swiped open from.
     */
    swipeAreaWidth: propTypes.number,

    /**
     * @ignore
     */
    theme: propTypes.object.isRequired,

    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    transitionDuration: propTypes.oneOfType([propTypes.number, propTypes.shape({
      enter: propTypes.number,
      exit: propTypes.number
    })]),

    /**
     * @ignore
     */
    variant: propTypes.oneOf(['permanent', 'persistent', 'temporary'])
  };
  SwipeableDrawer.defaultProps = {
    anchor: 'left',
    disableBackdropTransition: false,
    disableDiscovery: false,
    disableSwipeToOpen: typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent),
    swipeAreaWidth: 20,
    transitionDuration: {
      enter: duration.enteringScreen,
      exit: duration.leavingScreen
    },
    variant: 'temporary' // Mobile first.

  };
  var SwipeableDrawer$1 = withTheme()(SwipeableDrawer);

  var styles$79 = function styles(theme) {
    return {
      root: {
        display: 'inline-flex',
        width: 62,
        position: 'relative',
        flexShrink: 0,
        // For correct alignment with the text.
        verticalAlign: 'middle'
      },
      icon: {
        boxShadow: theme.shadows[1],
        backgroundColor: 'currentColor',
        width: 20,
        height: 20,
        borderRadius: '50%'
      },
      iconChecked: {
        boxShadow: theme.shadows[2]
      },
      switchBase: {
        zIndex: 1,
        color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest
        })
      },
      checked: {
        transform: 'translateX(14px)',
        '& + $bar': {
          opacity: 0.5
        }
      },
      colorPrimary: {
        '&$checked': {
          color: theme.palette.primary.main,
          '& + $bar': {
            backgroundColor: theme.palette.primary.main
          }
        }
      },
      colorSecondary: {
        '&$checked': {
          color: theme.palette.secondary.main,
          '& + $bar': {
            backgroundColor: theme.palette.secondary.main
          }
        }
      },
      disabled: {
        '& + $bar': {
          opacity: theme.palette.type === 'light' ? 0.12 : 0.1
        },
        '& $icon': {
          boxShadow: theme.shadows[1]
        },
        '&$switchBase': {
          color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800],
          '& + $bar': {
            backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
          }
        }
      },
      bar: {
        borderRadius: 7,
        display: 'block',
        position: 'absolute',
        width: 34,
        height: 14,
        top: '50%',
        left: '50%',
        marginTop: -7,
        marginLeft: -17,
        transition: theme.transitions.create(['opacity', 'background-color'], {
          duration: theme.transitions.duration.shortest
        }),
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
        opacity: theme.palette.type === 'light' ? 0.38 : 0.3
      }
    };
  };

  function Switch(props) {
    var classes = props.classes,
        className = props.className,
        color = props.color,
        other = objectWithoutProperties(props, ["classes", "className", "color"]);

    return React__default.createElement("span", {
      className: classnames(classes.root, className)
    }, React__default.createElement(SwitchBase$1, _extends_1({
      icon: React__default.createElement("span", {
        className: classes.icon
      }),
      classes: {
        root: classnames(classes.switchBase, classes["color".concat(capitalize(color))]),
        checked: classes.checked,
        disabled: classes.disabled
      },
      checkedIcon: React__default.createElement("span", {
        className: classnames(classes.icon, classes.iconChecked)
      })
    }, other)), React__default.createElement("span", {
      className: classes.bar
    }));
  }

  Switch.propTypes = {
    /**
     * If `true`, the component is checked.
     */
    checked: propTypes.oneOfType([propTypes.bool, propTypes.string]),

    /**
     * The icon to display when the component is checked.
     */
    checkedIcon: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: propTypes.oneOf(['primary', 'secondary', 'default']),

    /**
     * @ignore
     */
    defaultChecked: propTypes.bool,

    /**
     * If `true`, the switch will be disabled.
     */
    disabled: propTypes.bool,

    /**
     * If `true`, the ripple effect will be disabled.
     */
    disableRipple: propTypes.bool,

    /**
     * The icon to display when the component is unchecked.
     */
    icon: propTypes.node,

    /**
     * The id of the `input` element.
     */
    id: propTypes.string,

    /**
     * Properties applied to the `input` element.
     */
    inputProps: propTypes.object,

    /**
     * Use that property to pass a ref callback to the native input component.
     */
    inputRef: propTypes.func,

    /**
     * Callback fired when the state is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.checked`.
     * @param {boolean} checked The `checked` value of the switch
     */
    onChange: propTypes.func,

    /**
     * The input component property `type`.
     */
    type: propTypes.string,

    /**
     * The value of the component.
     */
    value: propTypes.string
  };
  Switch.defaultProps = {
    color: 'secondary'
  };
  var Switch$1 = withStyles(styles$79, {
    name: 'MuiSwitch'
  })(Switch);

  var styles$80 = function styles(theme) {
    return {
      root: {
        display: 'table',
        fontFamily: theme.typography.fontFamily,
        width: '100%',
        borderCollapse: 'collapse',
        borderSpacing: 0
      }
    };
  };

  var Table =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Table, _React$Component);

    function Table() {
      classCallCheck(this, Table);

      return possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
    }

    createClass(Table, [{
      key: "getChildContext",
      value: function getChildContext() {
        // eslint-disable-line class-methods-use-this
        return {
          table: {}
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _props = this.props,
            classes = _props.classes,
            className = _props.className,
            Component = _props.component,
            other = objectWithoutProperties(_props, ["classes", "className", "component"]);

        return React__default.createElement(Component, _extends_1({
          className: classnames(classes.root, className)
        }, other));
      }
    }]);

    return Table;
  }(React__default.Component);

  Table.propTypes = {
    /**
     * The content of the table, normally `TableHeader` and `TableBody`.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func])
  };
  Table.defaultProps = {
    component: 'table'
  };
  Table.childContextTypes = {
    table: propTypes.object
  };
  var Table$1 = withStyles(styles$80, {
    name: 'MuiTable'
  })(Table);

  var styles$81 = {
    root: {
      display: 'table-row-group'
    }
  };

  var TableBody =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(TableBody, _React$Component);

    function TableBody() {
      classCallCheck(this, TableBody);

      return possibleConstructorReturn(this, (TableBody.__proto__ || Object.getPrototypeOf(TableBody)).apply(this, arguments));
    }

    createClass(TableBody, [{
      key: "getChildContext",
      value: function getChildContext() {
        // eslint-disable-line class-methods-use-this
        return {
          table: {
            body: true
          }
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _props = this.props,
            classes = _props.classes,
            className = _props.className,
            Component = _props.component,
            other = objectWithoutProperties(_props, ["classes", "className", "component"]);

        return React__default.createElement(Component, _extends_1({
          className: classnames(classes.root, className)
        }, other));
      }
    }]);

    return TableBody;
  }(React__default.Component);

  TableBody.propTypes = {
    /**
     * The content of the component, normally `TableRow`.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func])
  };
  TableBody.defaultProps = {
    component: 'tbody'
  };
  TableBody.childContextTypes = {
    table: propTypes.object
  };
  var TableBody$1 = withStyles(styles$81, {
    name: 'MuiTableBody'
  })(TableBody);

  var styles$82 = function styles(theme) {
    return {
      root: {
        display: 'table-cell',
        verticalAlign: 'inherit',
        // Workaround for a rendering bug with spanned columns in Chrome 62.0.
        // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
        borderBottom: "1px solid\n    ".concat(theme.palette.type === 'light' ? lighten(fade(theme.palette.divider, 1), 0.88) : darken(fade(theme.palette.divider, 1), 0.8)),
        textAlign: 'left',
        padding: "".concat(theme.spacing.unit / 2, "px ").concat(theme.spacing.unit * 7, "px ").concat(theme.spacing.unit / 2, "px ").concat(theme.spacing.unit * 3, "px"),
        '&:last-child': {
          paddingRight: theme.spacing.unit * 3
        }
      },
      head: {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(12),
        fontWeight: theme.typography.fontWeightMedium
      },
      body: {
        color: theme.palette.text.primary,
        fontSize: theme.typography.pxToRem(13),
        fontWeight: theme.typography.fontWeightRegular
      },
      footer: {
        borderBottom: 0,
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(12)
      },
      numeric: {
        textAlign: 'right',
        flexDirection: 'row-reverse' // can be dynamically inherited at runtime by contents

      },
      paddingDense: {
        paddingRight: theme.spacing.unit * 3
      },
      paddingCheckbox: {
        padding: '0 12px',
        '&:last-child': {
          paddingRight: 12
        }
      },
      paddingNone: {
        padding: 0,
        '&:last-child': {
          padding: 0
        }
      }
    };
  };

  function TableCell(props, context) {
    var _classNames;

    var children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        component = props.component,
        sortDirection = props.sortDirection,
        numeric = props.numeric,
        padding = props.padding,
        scopeProp = props.scope,
        variant = props.variant,
        other = objectWithoutProperties(props, ["children", "classes", "className", "component", "sortDirection", "numeric", "padding", "scope", "variant"]);

    var table = context.table;
    var Component;

    if (component) {
      Component = component;
    } else {
      Component = table && table.head ? 'th' : 'td';
    }

    var scope = scopeProp;

    if (!scope && table && table.head) {
      scope = 'col';
    }

    var className = classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.head, variant ? variant === 'head' : table && table.head), defineProperty(_classNames, classes.body, variant ? variant === 'body' : table && table.body), defineProperty(_classNames, classes.footer, variant ? variant === 'footer' : table && table.footer), defineProperty(_classNames, classes.numeric, numeric), defineProperty(_classNames, classes["padding".concat(capitalize(padding))], padding !== 'default'), _classNames), classNameProp);
    var ariaSort = null;

    if (sortDirection) {
      ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
    }

    return React__default.createElement(Component, _extends_1({
      className: className,
      "aria-sort": ariaSort,
      scope: scope
    }, other), children);
  }

  TableCell.propTypes = {
    /**
     * The table cell contents.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * If `true`, content will align to the right.
     */
    numeric: propTypes.bool,

    /**
     * Sets the padding applied to the cell.
     */
    padding: propTypes.oneOf(['default', 'checkbox', 'dense', 'none']),

    /**
     * Set scope attribute.
     */
    scope: propTypes.string,

    /**
     * Set aria-sort direction.
     */
    sortDirection: propTypes.oneOf(['asc', 'desc', false]),

    /**
     * Specify the cell type.
     * By default, the TableHead, TableBody or TableFooter parent component set the value.
     */
    variant: propTypes.oneOf(['head', 'body', 'footer'])
  };
  TableCell.defaultProps = {
    numeric: false,
    padding: 'default'
  };
  TableCell.contextTypes = {
    table: propTypes.object.isRequired
  };
  var TableCell$1 = withStyles(styles$82, {
    name: 'MuiTableCell'
  })(TableCell);

  var styles$83 = {
    root: {
      display: 'table-footer-group'
    }
  };

  var TableFooter =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(TableFooter, _React$Component);

    function TableFooter() {
      classCallCheck(this, TableFooter);

      return possibleConstructorReturn(this, (TableFooter.__proto__ || Object.getPrototypeOf(TableFooter)).apply(this, arguments));
    }

    createClass(TableFooter, [{
      key: "getChildContext",
      value: function getChildContext() {
        // eslint-disable-line class-methods-use-this
        return {
          table: {
            footer: true
          }
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _props = this.props,
            classes = _props.classes,
            className = _props.className,
            Component = _props.component,
            other = objectWithoutProperties(_props, ["classes", "className", "component"]);

        return React__default.createElement(Component, _extends_1({
          className: classnames(classes.root, className)
        }, other));
      }
    }]);

    return TableFooter;
  }(React__default.Component);

  TableFooter.propTypes = {
    /**
     * The content of the component, normally `TableRow`.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func])
  };
  TableFooter.defaultProps = {
    component: 'tfoot'
  };
  TableFooter.childContextTypes = {
    table: propTypes.object
  };
  var TableFooter$1 = withStyles(styles$83, {
    name: 'MuiTableFooter'
  })(TableFooter);

  var styles$84 = {
    root: {
      display: 'table-header-group'
    }
  };

  var TableHead =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(TableHead, _React$Component);

    function TableHead() {
      classCallCheck(this, TableHead);

      return possibleConstructorReturn(this, (TableHead.__proto__ || Object.getPrototypeOf(TableHead)).apply(this, arguments));
    }

    createClass(TableHead, [{
      key: "getChildContext",
      value: function getChildContext() {
        // eslint-disable-line class-methods-use-this
        return {
          table: {
            head: true
          }
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _props = this.props,
            classes = _props.classes,
            className = _props.className,
            Component = _props.component,
            other = objectWithoutProperties(_props, ["classes", "className", "component"]);

        return React__default.createElement(Component, _extends_1({
          className: classnames(classes.root, className)
        }, other));
      }
    }]);

    return TableHead;
  }(React__default.Component);

  TableHead.propTypes = {
    /**
     * The content of the component, normally `TableRow`.
     */
    children: propTypes.node.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func])
  };
  TableHead.defaultProps = {
    component: 'thead'
  };
  TableHead.childContextTypes = {
    table: propTypes.object
  };
  var TableHead$1 = withStyles(styles$84, {
    name: 'MuiTableHead'
  })(TableHead);

  var styles$85 = function styles(theme) {
    return {
      root: objectSpread({}, theme.mixins.toolbar, {
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }),
      gutters: theme.mixins.gutters()
    };
  };

  function Toolbar(props) {
    var children = props.children,
        classes = props.classes,
        classNameProp = props.className,
        disableGutters = props.disableGutters,
        other = objectWithoutProperties(props, ["children", "classes", "className", "disableGutters"]);

    var className = classnames(classes.root, defineProperty({}, classes.gutters, !disableGutters), classNameProp);
    return React__default.createElement("div", _extends_1({
      className: className
    }, other), children);
  }

  Toolbar.propTypes = {
    /**
     * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * If `true`, disables gutter padding.
     */
    disableGutters: propTypes.bool
  };
  Toolbar.defaultProps = {
    disableGutters: false
  };
  var Toolbar$1 = withStyles(styles$85, {
    name: 'MuiToolbar'
  })(Toolbar);

  /**
   * @ignore - internal component.
   */

  var _ref$11 = React__default.createElement("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  });

  var KeyboardArrowLeft = function KeyboardArrowLeft(props) {
    return React__default.createElement(SvgIcon$1, props, _ref$11);
  };

  KeyboardArrowLeft = pure(KeyboardArrowLeft);
  KeyboardArrowLeft.muiName = 'SvgIcon';
  var KeyboardArrowLeft$1 = KeyboardArrowLeft;

  /**
   * @ignore - internal component.
   */

  var _ref$12 = React__default.createElement("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  });

  var KeyboardArrowRight = function KeyboardArrowRight(props) {
    return React__default.createElement(SvgIcon$1, props, _ref$12);
  };

  KeyboardArrowRight = pure(KeyboardArrowRight);
  KeyboardArrowRight.muiName = 'SvgIcon';
  var KeyboardArrowRight$1 = KeyboardArrowRight;

  /**
   * @ignore - internal component.
   */

  var _ref2$1 = React__default.createElement(KeyboardArrowRight$1, null);

  var _ref3 = React__default.createElement(KeyboardArrowLeft$1, null);

  var _ref4 = React__default.createElement(KeyboardArrowLeft$1, null);

  var _ref5 = React__default.createElement(KeyboardArrowRight$1, null);

  var TablePaginationActions =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(TablePaginationActions, _React$Component);

    function TablePaginationActions() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, TablePaginationActions);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = TablePaginationActions.__proto__ || Object.getPrototypeOf(TablePaginationActions)).call.apply(_ref, [this].concat(args))), _this.handleBackButtonClick = function (event) {
        _this.props.onChangePage(event, _this.props.page - 1);
      }, _this.handleNextButtonClick = function (event) {
        _this.props.onChangePage(event, _this.props.page + 1);
      }, _temp));
    }

    createClass(TablePaginationActions, [{
      key: "render",
      value: function render() {
        var _props = this.props,
            backIconButtonProps = _props.backIconButtonProps,
            count = _props.count,
            nextIconButtonProps = _props.nextIconButtonProps,
            onChangePage = _props.onChangePage,
            page = _props.page,
            rowsPerPage = _props.rowsPerPage,
            theme = _props.theme,
            other = objectWithoutProperties(_props, ["backIconButtonProps", "count", "nextIconButtonProps", "onChangePage", "page", "rowsPerPage", "theme"]);

        return React__default.createElement("div", other, React__default.createElement(IconButton$1, _extends_1({
          onClick: this.handleBackButtonClick,
          disabled: page === 0
        }, backIconButtonProps), theme.direction === 'rtl' ? _ref2$1 : _ref3), React__default.createElement(IconButton$1, _extends_1({
          onClick: this.handleNextButtonClick,
          disabled: page >= Math.ceil(count / rowsPerPage) - 1
        }, nextIconButtonProps), theme.direction === 'rtl' ? _ref4 : _ref5));
      }
    }]);

    return TablePaginationActions;
  }(React__default.Component);

  TablePaginationActions.propTypes = {
    /**
     * Properties applied to the back arrow `IconButton` element.
     */
    backIconButtonProps: propTypes.object,

    /**
     * The total number of rows.
     */
    count: propTypes.number.isRequired,

    /**
     * Properties applied to the next arrow `IconButton` element.
     */
    nextIconButtonProps: propTypes.object,

    /**
     * Callback fired when the page is changed.
     *
     * @param {object} event The event source of the callback
     * @param {number} page The page selected
     */
    onChangePage: propTypes.func.isRequired,

    /**
     * The zero-based index of the current page.
     */
    page: propTypes.number.isRequired,

    /**
     * The number of rows per page.
     */
    rowsPerPage: propTypes.number.isRequired,

    /**
     * @ignore
     */
    theme: propTypes.object.isRequired
  };
  var TablePaginationActions$1 = withTheme()(TablePaginationActions);

  var styles$86 = function styles(theme) {
    return {
      root: {
        fontSize: theme.typography.pxToRem(12),
        // Increase the specificity to override TableCell.
        '&:last-child': {
          padding: 0
        }
      },
      toolbar: {
        height: 56,
        minHeight: 56,
        paddingRight: 2
      },
      spacer: {
        flex: '1 1 100%'
      },
      menuItem: {},
      caption: {
        flexShrink: 0
      },
      input: {
        fontSize: 'inherit',
        flexShrink: 0
      },
      selectRoot: {
        marginRight: theme.spacing.unit * 4,
        marginLeft: theme.spacing.unit,
        color: theme.palette.text.secondary
      },
      select: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit * 2
      },
      selectIcon: {
        top: 1
      },
      actions: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5
      }
    };
  };
  /**
   * A `TableCell` based component for placing inside `TableFooter` for pagination.
   */

  var TablePagination =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(TablePagination, _React$Component);

    function TablePagination() {
      classCallCheck(this, TablePagination);

      return possibleConstructorReturn(this, (TablePagination.__proto__ || Object.getPrototypeOf(TablePagination)).apply(this, arguments));
    }

    createClass(TablePagination, [{
      key: "componentDidUpdate",
      // This logic would be better handled on userside.
      // However, we have it just in case.
      value: function componentDidUpdate() {
        var _props = this.props,
            count = _props.count,
            onChangePage = _props.onChangePage,
            page = _props.page,
            rowsPerPage = _props.rowsPerPage;
        var newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);

        if (page > newLastPage) {
          onChangePage(null, newLastPage);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _props2 = this.props,
            ActionsComponent = _props2.ActionsComponent,
            backIconButtonProps = _props2.backIconButtonProps,
            classes = _props2.classes,
            colSpanProp = _props2.colSpan,
            Component = _props2.component,
            count = _props2.count,
            labelDisplayedRows = _props2.labelDisplayedRows,
            labelRowsPerPage = _props2.labelRowsPerPage,
            nextIconButtonProps = _props2.nextIconButtonProps,
            onChangePage = _props2.onChangePage,
            onChangeRowsPerPage = _props2.onChangeRowsPerPage,
            page = _props2.page,
            rowsPerPage = _props2.rowsPerPage,
            rowsPerPageOptions = _props2.rowsPerPageOptions,
            SelectProps = _props2.SelectProps,
            other = objectWithoutProperties(_props2, ["ActionsComponent", "backIconButtonProps", "classes", "colSpan", "component", "count", "labelDisplayedRows", "labelRowsPerPage", "nextIconButtonProps", "onChangePage", "onChangeRowsPerPage", "page", "rowsPerPage", "rowsPerPageOptions", "SelectProps"]);

        var colSpan;

        if (Component === TableCell$1 || Component === 'td') {
          colSpan = colSpanProp || 1000; // col-span over everything
        }

        return React__default.createElement(Component, _extends_1({
          className: classes.root,
          colSpan: colSpan
        }, other), React__default.createElement(Toolbar$1, {
          className: classes.toolbar
        }, React__default.createElement("div", {
          className: classes.spacer
        }), rowsPerPageOptions.length > 1 && React__default.createElement(Typography$1, {
          variant: "caption",
          className: classes.caption
        }, labelRowsPerPage), rowsPerPageOptions.length > 1 && React__default.createElement(Select$1, _extends_1({
          classes: {
            root: classes.selectRoot,
            select: classes.select,
            icon: classes.selectIcon
          },
          input: React__default.createElement(Input$1, {
            className: classes.input,
            disableUnderline: true
          }),
          value: rowsPerPage,
          onChange: onChangeRowsPerPage
        }, SelectProps), rowsPerPageOptions.map(function (rowsPerPageOption) {
          return React__default.createElement(MenuItem$1, {
            className: classes.menuItem,
            key: rowsPerPageOption,
            value: rowsPerPageOption
          }, rowsPerPageOption);
        })), React__default.createElement(Typography$1, {
          variant: "caption",
          className: classes.caption
        }, labelDisplayedRows({
          from: count === 0 ? 0 : page * rowsPerPage + 1,
          to: Math.min(count, (page + 1) * rowsPerPage),
          count: count,
          page: page
        })), React__default.createElement(ActionsComponent, {
          className: classes.actions,
          backIconButtonProps: backIconButtonProps,
          count: count,
          nextIconButtonProps: nextIconButtonProps,
          onChangePage: onChangePage,
          page: page,
          rowsPerPage: rowsPerPage
        })));
      }
    }]);

    return TablePagination;
  }(React__default.Component);

  TablePagination.propTypes = {
    /**
     * The component used for displaying the actions.
     * Either a string to use a DOM element or a component.
     */
    ActionsComponent: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * Properties applied to the back arrow `IconButton` component.
     */
    backIconButtonProps: propTypes.object,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    colSpan: propTypes.number,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * The total number of rows.
     */
    count: propTypes.number.isRequired,

    /**
     * Customize the displayed rows label.
     */
    labelDisplayedRows: propTypes.func,

    /**
     * Customize the rows per page label. Invoked with a `{ from, to, count, page }`
     * object.
     */
    labelRowsPerPage: propTypes.node,

    /**
     * Properties applied to the next arrow `IconButton` element.
     */
    nextIconButtonProps: propTypes.object,

    /**
     * Callback fired when the page is changed.
     *
     * @param {object} event The event source of the callback
     * @param {number} page The page selected
     */
    onChangePage: propTypes.func.isRequired,

    /**
     * Callback fired when the number of rows per page is changed.
     *
     * @param {object} event The event source of the callback
     */
    onChangeRowsPerPage: propTypes.func,

    /**
     * The zero-based index of the current page.
     */
    page: propTypes.number.isRequired,

    /**
     * The number of rows per page.
     */
    rowsPerPage: propTypes.number.isRequired,

    /**
     * Customizes the options of the rows per page select field. If less than two options are
     * available, no select field will be displayed.
     */
    rowsPerPageOptions: propTypes.array,

    /**
     * Properties applied to the rows per page `Select` element.
     */
    SelectProps: propTypes.object
  };
  TablePagination.defaultProps = {
    ActionsComponent: TablePaginationActions$1,
    component: TableCell$1,
    labelDisplayedRows: function labelDisplayedRows(_ref) {
      var from = _ref.from,
          to = _ref.to,
          count = _ref.count;
      return "".concat(from, "-").concat(to, " of ").concat(count);
    },
    labelRowsPerPage: 'Rows per page:',
    rowsPerPageOptions: [5, 10, 25]
  };
  var TablePagination$1 = withStyles(styles$86, {
    name: 'MuiTablePagination'
  })(TablePagination);

  var styles$87 = function styles(theme) {
    return {
      root: {
        color: 'inherit',
        display: 'table-row',
        height: 48,
        verticalAlign: 'middle',
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 'none',
        '&$selected': {
          backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.04)' // grey[100]
          : 'rgba(255, 255, 255, 0.08)'
        },
        '&$hover:hover': {
          backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.07)' // grey[200]
          : 'rgba(255, 255, 255, 0.14)'
        }
      },
      selected: {},
      hover: {},
      head: {
        height: 56
      },
      footer: {
        height: 56
      }
    };
  };
  /**
   * Will automatically set dynamic row height
   * based on the material table element parent (head, body, etc).
   */

  function TableRow(props, context) {
    var _classNames;

    var classes = props.classes,
        classNameProp = props.className,
        Component = props.component,
        hover = props.hover,
        selected = props.selected,
        other = objectWithoutProperties(props, ["classes", "className", "component", "hover", "selected"]);

    var table = context.table;
    var className = classnames(classes.root, (_classNames = {}, defineProperty(_classNames, classes.head, table && table.head), defineProperty(_classNames, classes.footer, table && table.footer), defineProperty(_classNames, classes.hover, table && hover), defineProperty(_classNames, classes.selected, table && selected), _classNames), classNameProp);
    return React__default.createElement(Component, _extends_1({
      className: className
    }, other));
  }

  TableRow.propTypes = {
    /**
     * Should be valid <tr> children such as `TableCell`.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * If `true`, the table row will shade on hover.
     */
    hover: propTypes.bool,

    /**
     * If `true`, the table row will have the selected shading.
     */
    selected: propTypes.bool
  };
  TableRow.defaultProps = {
    component: 'tr',
    hover: false,
    selected: false
  };
  TableRow.contextTypes = {
    table: propTypes.object
  };
  var TableRow$1 = withStyles(styles$87, {
    name: 'MuiTableRow'
  })(TableRow);

  /**
   * @ignore - internal component.
   */

  var _ref$13 = React__default.createElement("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  });

  var ArrowDownward = function ArrowDownward(props) {
    return React__default.createElement(SvgIcon$1, props, _ref$13);
  };

  ArrowDownward = pure(ArrowDownward);
  ArrowDownward.muiName = 'SvgIcon';
  var ArrowDownwardIcon = ArrowDownward;

  var styles$88 = function styles(theme) {
    return {
      root: {
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'flex-start',
        flexDirection: 'inherit',
        alignItems: 'center',
        '&:hover': {
          color: theme.palette.text.primary
        },
        '&:focus': {
          color: theme.palette.text.primary
        }
      },
      active: {
        color: theme.palette.text.primary,
        '& $icon': {
          opacity: 1
        }
      },
      icon: {
        height: 16,
        marginRight: 4,
        marginLeft: 4,
        opacity: 0,
        transition: theme.transitions.create(['opacity', 'transform'], {
          duration: theme.transitions.duration.shorter
        }),
        userSelect: 'none',
        width: 16
      },
      iconDirectionDesc: {
        transform: 'rotate(0deg)'
      },
      iconDirectionAsc: {
        transform: 'rotate(180deg)'
      }
    };
  };
  /**
   * A button based label for placing inside `TableCell` for column sorting.
   */

  function TableSortLabel(props) {
    var active = props.active,
        classes = props.classes,
        className = props.className,
        children = props.children,
        direction = props.direction,
        other = objectWithoutProperties(props, ["active", "classes", "className", "children", "direction"]);

    return React__default.createElement(ButtonBase$1, _extends_1({
      className: classnames(classes.root, defineProperty({}, classes.active, active), className),
      component: "span",
      disableRipple: true
    }, other), children, React__default.createElement(ArrowDownwardIcon, {
      className: classnames(classes.icon, classes["iconDirection".concat(capitalize(direction))])
    }));
  }

  TableSortLabel.propTypes = {
    /**
     * If `true`, the label will have the active styling (should be true for the sorted column).
     */
    active: propTypes.bool,

    /**
     * Label contents, the arrow will be appended automatically.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The current sort direction.
     */
    direction: propTypes.oneOf(['asc', 'desc'])
  };
  TableSortLabel.defaultProps = {
    active: false,
    direction: 'desc'
  };
  var TableSortLabel$1 = withStyles(styles$88, {
    name: 'MuiTableSortLabel'
  })(TableSortLabel);

  var main = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  // Based on https://github.com/react-bootstrap/dom-helpers/blob/master/src/util/inDOM.js
  var inDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  var cachedType;
  function _setScrollType(type) {
      cachedType = type;
  }
  exports._setScrollType = _setScrollType;
  // Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
  function detectScrollType() {
      if (cachedType) {
          return cachedType;
      }
      if (!inDOM || !window.document.body) {
          return 'indeterminate';
      }
      var dummy = window.document.createElement('div');
      dummy.appendChild(document.createTextNode('ABCD'));
      dummy.dir = 'rtl';
      dummy.style.fontSize = '14px';
      dummy.style.width = '4px';
      dummy.style.height = '1px';
      dummy.style.position = 'absolute';
      dummy.style.top = '-1000px';
      dummy.style.overflow = 'scroll';
      document.body.appendChild(dummy);
      cachedType = 'reverse';
      if (dummy.scrollLeft > 0) {
          cachedType = 'default';
      }
      else {
          dummy.scrollLeft = 1;
          if (dummy.scrollLeft === 0) {
              cachedType = 'negative';
          }
      }
      document.body.removeChild(dummy);
      return cachedType;
  }
  exports.detectScrollType = detectScrollType;
  // Based on https://stackoverflow.com/a/24394376
  function getNormalizedScrollLeft(element, direction) {
      var scrollLeft = element.scrollLeft;
      // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior
      if (direction !== 'rtl') {
          return scrollLeft;
      }
      var type = detectScrollType();
      if (type === 'indeterminate') {
          return Number.NaN;
      }
      switch (type) {
          case 'negative':
              return element.scrollWidth - element.clientWidth + scrollLeft;
          case 'reverse':
              return element.scrollWidth - element.clientWidth - scrollLeft;
      }
      return scrollLeft;
  }
  exports.getNormalizedScrollLeft = getNormalizedScrollLeft;
  function setNormalizedScrollLeft(element, scrollLeft, direction) {
      // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior
      if (direction !== 'rtl') {
          element.scrollLeft = scrollLeft;
          return;
      }
      var type = detectScrollType();
      if (type === 'indeterminate') {
          return;
      }
      switch (type) {
          case 'negative':
              element.scrollLeft = element.clientWidth - element.scrollWidth + scrollLeft;
              break;
          case 'reverse':
              element.scrollLeft = element.scrollWidth - element.clientWidth - scrollLeft;
              break;
          default:
              element.scrollLeft = scrollLeft;
              break;
      }
  }
  exports.setNormalizedScrollLeft = setNormalizedScrollLeft;
  });

  unwrapExports(main);
  var main_1 = main._setScrollType;
  var main_2 = main.detectScrollType;
  var main_3 = main.getNormalizedScrollLeft;
  var main_4 = main.setNormalizedScrollLeft;

  var win;

  if (typeof window !== "undefined") {
      win = window;
  } else if (typeof commonjsGlobal !== "undefined") {
      win = commonjsGlobal;
  } else if (typeof self !== "undefined"){
      win = self;
  } else {
      win = {};
  }

  var window_1 = win;

  var rafl = createCommonjsModule(function (module, exports) {
  /**
   * `requestAnimationFrame()`
   */

  var request = window_1.requestAnimationFrame
    || window_1.webkitRequestAnimationFrame
    || window_1.mozRequestAnimationFrame
    || fallback;

  var prev = +new Date;
  function fallback (fn) {
    var curr = +new Date;
    var ms = Math.max(0, 16 - (curr - prev));
    var req = setTimeout(fn, ms);
    return prev = curr, req
  }

  /**
   * `cancelAnimationFrame()`
   */

  var cancel = window_1.cancelAnimationFrame
    || window_1.webkitCancelAnimationFrame
    || window_1.mozCancelAnimationFrame
    || clearTimeout;

  if (Function.prototype.bind) {
    request = request.bind(window_1);
    cancel = cancel.bind(window_1);
  }

  exports = module.exports = request;
  exports.cancel = cancel;
  });
  var rafl_1 = rafl.cancel;

  var E_NOSCROLL = new Error('Element already at target scroll position');
  var E_CANCELLED = new Error('Scroll cancelled');
  var min$2 = Math.min;

  var scroll = {
    left: make('scrollLeft'),
    top: make('scrollTop')
  };

  function make (prop) {
    return function scroll (el, to, opts, cb) {
      opts = opts || {};

      if (typeof opts == 'function') cb = opts, opts = {};
      if (typeof cb != 'function') cb = noop;

      var start = +new Date;
      var from = el[prop];
      var ease = opts.ease || inOutSine;
      var duration = !isNaN(opts.duration) ? +opts.duration : 350;
      var cancelled = false;

      return from === to ?
        cb(E_NOSCROLL, el[prop]) :
        rafl(animate), cancel

      function cancel () {
        cancelled = true;
      }

      function animate (timestamp) {
        if (cancelled) return cb(E_CANCELLED, el[prop])

        var now = +new Date;
        var time = min$2(1, ((now - start) / duration));
        var eased = ease(time);

        el[prop] = (eased * (to - from)) + from;

        time < 1 ? rafl(animate) : rafl(function () {
          cb(null, el[prop]);
        });
      }
    }
  }

  function inOutSine (n) {
    return 0.5 * (1 - Math.cos(Math.PI * n))
  }

  function noop () {}

  var styles$89 = {
    width: '100px',
    height: '100px',
    position: 'absolute',
    top: '-10000px',
    overflow: 'scroll',
    msOverflowStyle: 'scrollbar'
  };
  /**
   * @ignore - internal component.
   * The component is originates from https://github.com/STORIS/react-scrollbar-size.
   * It has been moved into the core in order to minimize the bundle size.
   */

  var ScrollbarSize =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(ScrollbarSize, _React$Component);

    function ScrollbarSize() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, ScrollbarSize);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = ScrollbarSize.__proto__ || Object.getPrototypeOf(ScrollbarSize)).call.apply(_ref, [this].concat(args))), _this.setMeasurements = function () {
        if (!_this.node) {
          return;
        }

        _this.scrollbarHeight = _this.node.offsetHeight - _this.node.clientHeight;
        _this.scrollbarWidth = _this.node.offsetWidth - _this.node.clientWidth;
      }, _this.handleResize = debounce(function () {
        var onChange = _this.props.onChange;
        var prevHeight = _this.scrollbarHeight;
        var prevWidth = _this.scrollbarWidth;

        _this.setMeasurements();

        if (prevHeight !== _this.scrollbarHeight || prevWidth !== _this.scrollbarWidth) {
          onChange({
            scrollbarHeight: _this.scrollbarHeight,
            scrollbarWidth: _this.scrollbarWidth
          });
        }
      }, 166), _temp));
    }

    createClass(ScrollbarSize, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setMeasurements();
        this.props.onLoad({
          scrollbarHeight: this.scrollbarHeight,
          scrollbarWidth: this.scrollbarWidth
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.handleResize.clear();
      }
    }, {
      key: "render",
      // Corresponds to 10 frames at 60 Hz.
      value: function render() {
        var _this2 = this;

        var onChange = this.props.onChange;
        return React__default.createElement("div", null, onChange ? React__default.createElement(EventListener, {
          target: "window",
          onResize: this.handleResize
        }) : null, React__default.createElement("div", {
          style: styles$89,
          ref: function ref(node) {
            _this2.node = node;
          }
        }));
      }
    }]);

    return ScrollbarSize;
  }(React__default.Component);

  ScrollbarSize.propTypes = {
    onChange: propTypes.func.isRequired,
    onLoad: propTypes.func.isRequired
  };

  var styles$90 = function styles(theme) {
    return {
      root: {
        position: 'absolute',
        height: 2,
        bottom: 0,
        width: '100%',
        transition: theme.transitions.create(),
        willChange: 'left, width'
      },
      colorPrimary: {
        backgroundColor: theme.palette.primary.main
      },
      colorSecondary: {
        backgroundColor: theme.palette.secondary.main
      }
    };
  };
  /**
   * @ignore - internal component.
   */

  function TabIndicator(props) {
    var classes = props.classes,
        className = props.className,
        color = props.color,
        other = objectWithoutProperties(props, ["classes", "className", "color"]);

    return React__default.createElement("span", _extends_1({
      className: classnames(classes.root, classes["color".concat(capitalize(color))], className)
    }, other));
  }

  TabIndicator.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * @ignore
     * The color of the tab indicator.
     */
    color: propTypes.oneOf(['primary', 'secondary'])
  };
  var TabIndicator$1 = withStyles(styles$90)(TabIndicator);

  var styles$91 = function styles(theme) {
    return {
      root: {
        color: 'inherit',
        flex: "0 0 ".concat(theme.spacing.unit * 7, "px")
      }
    };
  };
  /**
   * @ignore - internal component.
   */

  var _ref$14 = React__default.createElement(KeyboardArrowLeft$1, null);

  var _ref2$2 = React__default.createElement(KeyboardArrowRight$1, null);

  function TabScrollButton(props) {
    var classes = props.classes,
        classNameProp = props.className,
        direction = props.direction,
        onClick = props.onClick,
        visible = props.visible,
        other = objectWithoutProperties(props, ["classes", "className", "direction", "onClick", "visible"]);

    var className = classnames(classes.root, classNameProp);

    if (!visible) {
      return React__default.createElement("div", {
        className: className
      });
    }

    return React__default.createElement(ButtonBase$1, _extends_1({
      className: className,
      onClick: onClick,
      tabIndex: -1
    }, other), direction === 'left' ? _ref$14 : _ref2$2);
  }

  TabScrollButton.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * Which direction should the button indicate?
     */
    direction: propTypes.oneOf(['left', 'right']),

    /**
     * Callback to execute for button press.
     */
    onClick: propTypes.func,

    /**
     * Should the button be present or just consume space.
     */
    visible: propTypes.bool
  };
  TabScrollButton.defaultProps = {
    visible: true
  };
  var TabScrollButton$1 = withStyles(styles$91, {
    name: 'MuiTabScrollButton'
  })(TabScrollButton);

  var styles$92 = function styles(theme) {
    return {
      root: {
        overflow: 'hidden',
        minHeight: 48,
        WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.

      },
      flexContainer: {
        display: 'flex'
      },
      scroller: {
        position: 'relative',
        display: 'inline-block',
        flex: '1 1 auto',
        whiteSpace: 'nowrap'
      },
      fixed: {
        overflowX: 'hidden',
        width: '100%'
      },
      scrollable: {
        overflowX: 'scroll'
      },
      centered: {
        justifyContent: 'center'
      },
      scrollButtons: {},
      scrollButtonsAuto: defineProperty({}, theme.breakpoints.down('xs'), {
        display: 'none'
      }),
      indicator: {}
    };
  };

  var Tabs =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Tabs, _React$Component);

    function Tabs() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, Tabs);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this.state = {
        indicatorStyle: {},
        scrollerStyle: {
          marginBottom: 0
        },
        showLeftScroll: false,
        showRightScroll: false,
        mounted: false
      }, _this.getConditionalElements = function () {
        var _this$props = _this.props,
            classes = _this$props.classes,
            scrollable = _this$props.scrollable,
            ScrollButtonComponent = _this$props.ScrollButtonComponent,
            scrollButtons = _this$props.scrollButtons,
            theme = _this$props.theme;
        var conditionalElements = {};
        conditionalElements.scrollbarSizeListener = scrollable ? React__default.createElement(ScrollbarSize, {
          onLoad: _this.handleScrollbarSizeChange,
          onChange: _this.handleScrollbarSizeChange
        }) : null;
        var showScrollButtons = scrollable && (scrollButtons === 'auto' || scrollButtons === 'on');
        conditionalElements.scrollButtonLeft = showScrollButtons ? React__default.createElement(ScrollButtonComponent, {
          direction: theme && theme.direction === 'rtl' ? 'right' : 'left',
          onClick: _this.handleLeftScrollClick,
          visible: _this.state.showLeftScroll,
          className: classnames(classes.scrollButtons, defineProperty({}, classes.scrollButtonsAuto, scrollButtons === 'auto'))
        }) : null;
        conditionalElements.scrollButtonRight = showScrollButtons ? React__default.createElement(ScrollButtonComponent, {
          direction: theme && theme.direction === 'rtl' ? 'left' : 'right',
          onClick: _this.handleRightScrollClick,
          visible: _this.state.showRightScroll,
          className: classnames(classes.scrollButtons, defineProperty({}, classes.scrollButtonsAuto, scrollButtons === 'auto'))
        }) : null;
        return conditionalElements;
      }, _this.getTabsMeta = function (value, direction) {
        var tabsMeta;

        if (_this.tabs) {
          var rect = _this.tabs.getBoundingClientRect(); // create a new object with ClientRect class props + scrollLeft


          tabsMeta = {
            clientWidth: _this.tabs ? _this.tabs.clientWidth : 0,
            scrollLeft: _this.tabs ? _this.tabs.scrollLeft : 0,
            scrollLeftNormalized: _this.tabs ? main_3(_this.tabs, direction) : 0,
            scrollWidth: _this.tabs ? _this.tabs.scrollWidth : 0,
            left: rect.left,
            right: rect.right
          };
        }

        var tabMeta;

        if (_this.tabs && value !== false) {
          var children = _this.tabs.children[0].children;

          if (children.length > 0) {
            var tab = children[_this.valueToIndex[value]];
            warning_1(tab, "Material-UI: the value provided `".concat(value, "` is invalid"));
            tabMeta = tab ? tab.getBoundingClientRect() : null;
          }
        }

        return {
          tabsMeta: tabsMeta,
          tabMeta: tabMeta
        };
      }, _this.tabs = undefined, _this.valueToIndex = {}, _this.handleResize = debounce(function () {
        _this.updateIndicatorState(_this.props);

        _this.updateScrollButtonState();
      }, 166), _this.handleLeftScrollClick = function () {
        if (_this.tabs) {
          _this.moveTabsScroll(-_this.tabs.clientWidth);
        }
      }, _this.handleRightScrollClick = function () {
        if (_this.tabs) {
          _this.moveTabsScroll(_this.tabs.clientWidth);
        }
      }, _this.handleScrollbarSizeChange = function (_ref2) {
        var scrollbarHeight = _ref2.scrollbarHeight;

        _this.setState({
          scrollerStyle: {
            marginBottom: -scrollbarHeight
          }
        });
      }, _this.handleTabsScroll = debounce(function () {
        _this.updateScrollButtonState();
      }, 166), _this.moveTabsScroll = function (delta) {
        var theme = _this.props.theme;

        if (_this.tabs) {
          var multiplier = theme.direction === 'rtl' ? -1 : 1;
          var nextScrollLeft = _this.tabs.scrollLeft + delta * multiplier; // Fix for Edge

          var invert = theme.direction === 'rtl' && main_2() === 'reverse' ? -1 : 1;
          scroll.left(_this.tabs, invert * nextScrollLeft);
        }
      }, _this.scrollSelectedIntoView = function () {
        var _this$props2 = _this.props,
            theme = _this$props2.theme,
            value = _this$props2.value;

        var _this$getTabsMeta = _this.getTabsMeta(value, theme.direction),
            tabsMeta = _this$getTabsMeta.tabsMeta,
            tabMeta = _this$getTabsMeta.tabMeta;

        if (!tabMeta || !tabsMeta) {
          return;
        }

        if (tabMeta.left < tabsMeta.left) {
          // left side of button is out of view
          var nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);
          scroll.left(_this.tabs, nextScrollLeft);
        } else if (tabMeta.right > tabsMeta.right) {
          // right side of button is out of view
          var _nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);

          scroll.left(_this.tabs, _nextScrollLeft);
        }
      }, _this.updateScrollButtonState = function () {
        var _this$props3 = _this.props,
            scrollable = _this$props3.scrollable,
            scrollButtons = _this$props3.scrollButtons,
            theme = _this$props3.theme;

        if (_this.tabs && scrollable && scrollButtons !== 'off') {
          var _this$tabs = _this.tabs,
              scrollWidth = _this$tabs.scrollWidth,
              clientWidth = _this$tabs.clientWidth;
          var scrollLeft = main_3(_this.tabs, theme.direction);
          var showLeftScroll = theme.direction === 'rtl' ? scrollWidth > clientWidth + scrollLeft : scrollLeft > 0;
          var showRightScroll = theme.direction === 'rtl' ? scrollLeft > 0 : scrollWidth > clientWidth + scrollLeft;

          if (showLeftScroll !== _this.state.showLeftScroll || showRightScroll !== _this.state.showRightScroll) {
            _this.setState({
              showLeftScroll: showLeftScroll,
              showRightScroll: showRightScroll
            });
          }
        }
      }, _temp));
    }

    createClass(Tabs, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
          mounted: true
        });
        this.updateIndicatorState(this.props);
        this.updateScrollButtonState();

        if (this.props.action) {
          this.props.action({
            updateIndicator: this.handleResize
          });
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        this.updateScrollButtonState(); // The index might have changed at the same time.
        // We need to check again the right indicator position.

        this.updateIndicatorState(this.props);

        if (this.state.indicatorStyle !== prevState.indicatorStyle) {
          this.scrollSelectedIntoView();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.handleResize.clear();
        this.handleTabsScroll.clear();
      }
    }, {
      key: "updateIndicatorState",
      value: function updateIndicatorState(props) {
        var theme = props.theme,
            value = props.value;

        var _getTabsMeta = this.getTabsMeta(value, theme.direction),
            tabsMeta = _getTabsMeta.tabsMeta,
            tabMeta = _getTabsMeta.tabMeta;

        var left = 0;

        if (tabMeta && tabsMeta) {
          var correction = theme.direction === 'rtl' ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
          left = tabMeta.left - tabsMeta.left + correction;
        }

        var indicatorStyle = {
          left: left,
          // May be wrong until the font is loaded.
          width: tabMeta ? tabMeta.width : 0
        };

        if ((indicatorStyle.left !== this.state.indicatorStyle.left || indicatorStyle.width !== this.state.indicatorStyle.width) && !Number.isNaN(indicatorStyle.left) && !Number.isNaN(indicatorStyle.width)) {
          this.setState({
            indicatorStyle: indicatorStyle
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames3,
            _this2 = this;

        var _props = this.props,
            action = _props.action,
            centered = _props.centered,
            childrenProp = _props.children,
            classes = _props.classes,
            classNameProp = _props.className,
            fullWidth = _props.fullWidth,
            indicatorColor = _props.indicatorColor,
            onChange = _props.onChange,
            scrollable = _props.scrollable,
            ScrollButtonComponent = _props.ScrollButtonComponent,
            scrollButtons = _props.scrollButtons,
            _props$TabIndicatorPr = _props.TabIndicatorProps,
            TabIndicatorProps = _props$TabIndicatorPr === void 0 ? {} : _props$TabIndicatorPr,
            textColor = _props.textColor,
            theme = _props.theme,
            value = _props.value,
            other = objectWithoutProperties(_props, ["action", "centered", "children", "classes", "className", "fullWidth", "indicatorColor", "onChange", "scrollable", "ScrollButtonComponent", "scrollButtons", "TabIndicatorProps", "textColor", "theme", "value"]);

        warning_1(!centered || !scrollable, 'Material-UI: you can not use the `centered={true}` and `scrollable={true}` properties ' + 'at the same time on a `Tabs` component.');
        var className = classnames(classes.root, classNameProp);
        var scrollerClassName = classnames(classes.scroller, (_classNames3 = {}, defineProperty(_classNames3, classes.fixed, !scrollable), defineProperty(_classNames3, classes.scrollable, scrollable), _classNames3));
        var flexContainerClassName = classnames(classes.flexContainer, defineProperty({}, classes.centered, centered && !scrollable));
        var indicator = React__default.createElement(TabIndicator$1, _extends_1({
          className: classes.indicator,
          color: indicatorColor
        }, TabIndicatorProps, {
          style: objectSpread({}, this.state.indicatorStyle, TabIndicatorProps.style)
        }));
        this.valueToIndex = {};
        var childIndex = 0;
        var children = React__default.Children.map(childrenProp, function (child) {
          if (!React__default.isValidElement(child)) {
            return null;
          }

          var childValue = child.props.value === undefined ? childIndex : child.props.value;
          _this2.valueToIndex[childValue] = childIndex;
          var selected = childValue === value;
          childIndex += 1;
          return React__default.cloneElement(child, {
            fullWidth: fullWidth,
            indicator: selected && !_this2.state.mounted && indicator,
            selected: selected,
            onChange: onChange,
            textColor: textColor,
            value: childValue
          });
        });
        var conditionalElements = this.getConditionalElements();
        return React__default.createElement("div", _extends_1({
          className: className
        }, other), React__default.createElement(EventListener, {
          target: "window",
          onResize: this.handleResize
        }), conditionalElements.scrollbarSizeListener, React__default.createElement("div", {
          className: classes.flexContainer
        }, conditionalElements.scrollButtonLeft, React__default.createElement("div", {
          className: scrollerClassName,
          style: this.state.scrollerStyle,
          ref: function ref(node) {
            _this2.tabs = node;
          },
          role: "tablist",
          onScroll: this.handleTabsScroll
        }, React__default.createElement("div", {
          className: flexContainerClassName
        }, children), this.state.mounted && indicator), conditionalElements.scrollButtonRight));
      }
    }]);

    return Tabs;
  }(React__default.Component);

  Tabs.propTypes = {
    /**
     * Callback fired when the component mounts.
     * This is useful when you want to trigger an action programmatically.
     * It currently only supports `updateIndicator()` action.
     *
     * @param {object} actions This object contains all possible actions
     * that can be triggered programmatically.
     */
    action: propTypes.func,

    /**
     * If `true`, the tabs will be centered.
     * This property is intended for large views.
     */
    centered: propTypes.bool,

    /**
     * The content of the component.
     */
    children: propTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * If `true`, the tabs will grow to use all the available space.
     * This property is intended for small views, like on mobile.
     */
    fullWidth: propTypes.bool,

    /**
     * Determines the color of the indicator.
     */
    indicatorColor: propTypes.oneOf(['secondary', 'primary']),

    /**
     * Callback fired when the value changes.
     *
     * @param {object} event The event source of the callback
     * @param {number} value We default to the index of the child
     */
    onChange: propTypes.func,

    /**
     * True invokes scrolling properties and allow for horizontally scrolling
     * (or swiping) the tab bar.
     */
    scrollable: propTypes.bool,

    /**
     * The component used to render the scroll buttons.
     */
    ScrollButtonComponent: propTypes.oneOfType([propTypes.string, propTypes.func]),

    /**
     * Determine behavior of scroll buttons when tabs are set to scroll
     * `auto` will only present them on medium and larger viewports
     * `on` will always present them
     * `off` will never present them
     */
    scrollButtons: propTypes.oneOf(['auto', 'on', 'off']),

    /**
     * Properties applied to the `TabIndicator` element.
     */
    TabIndicatorProps: propTypes.object,

    /**
     * Determines the color of the `Tab`.
     */
    textColor: propTypes.oneOf(['secondary', 'primary', 'inherit']),

    /**
     * @ignore
     */
    theme: propTypes.object.isRequired,

    /**
     * The value of the currently selected `Tab`.
     * If you don't want any selected `Tab`, you can set this property to `false`.
     */
    value: propTypes.any
  };
  Tabs.defaultProps = {
    centered: false,
    fullWidth: false,
    indicatorColor: 'secondary',
    scrollable: false,
    ScrollButtonComponent: TabScrollButton$1,
    scrollButtons: 'auto',
    textColor: 'inherit'
  };
  var Tabs$1 = withStyles(styles$92, {
    name: 'MuiTabs',
    withTheme: true
  })(Tabs);

  var styles$93 = function styles(theme) {
    return {
      root: objectSpread({}, theme.typography.button, defineProperty({
        maxWidth: 264,
        position: 'relative',
        minWidth: 72,
        padding: 0,
        height: 48,
        flex: 'none',
        overflow: 'hidden'
      }, theme.breakpoints.up('md'), {
        minWidth: 160
      })),
      labelIcon: {
        height: 72
      },
      textColorInherit: {
        color: 'inherit',
        opacity: 0.7,
        '&$selected': {
          opacity: 1
        },
        '&$disabled': {
          opacity: 0.4
        }
      },
      textColorPrimary: {
        color: theme.palette.text.secondary,
        '&$selected': {
          color: theme.palette.primary.main
        },
        '&$disabled': {
          color: theme.palette.text.disabled
        }
      },
      textColorSecondary: {
        color: theme.palette.text.secondary,
        '&$selected': {
          color: theme.palette.secondary.main
        },
        '&$disabled': {
          color: theme.palette.text.disabled
        }
      },
      selected: {},
      disabled: {},
      fullWidth: {
        flexGrow: 1
      },
      wrapper: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column'
      },
      labelContainer: defineProperty({
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12
      }, theme.breakpoints.up('md'), {
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3
      }),
      label: defineProperty({
        fontSize: theme.typography.pxToRem(14),
        whiteSpace: 'normal'
      }, theme.breakpoints.up('md'), {
        fontSize: theme.typography.pxToRem(13)
      }),
      labelWrapped: defineProperty({}, theme.breakpoints.down('sm'), {
        fontSize: theme.typography.pxToRem(12)
      })
    };
  };

  var Tab =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Tab, _React$Component);

    function Tab() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, Tab);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this.state = {
        wrappedText: false
      }, _this.handleChange = function (event) {
        var _this$props = _this.props,
            onChange = _this$props.onChange,
            value = _this$props.value,
            onClick = _this$props.onClick;

        if (onChange) {
          onChange(event, value);
        }

        if (onClick) {
          onClick(event);
        }
      }, _this.label = undefined, _this.checkTextWrap = function () {
        if (_this.label) {
          var wrappedText = _this.label.getClientRects().length > 1;

          if (_this.state.wrappedText !== wrappedText) {
            _this.setState({
              wrappedText: wrappedText
            });
          }
        }
      }, _temp));
    }

    createClass(Tab, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.checkTextWrap();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (this.state.wrappedText === prevState.wrappedText) {
          /**
           * At certain text and tab lengths, a larger font size may wrap to two lines while the smaller
           * font size still only requires one line.  This check will prevent an infinite render loop
           * fron occurring in that scenario.
           */
          this.checkTextWrap();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this,
            _classNames2;

        var _props = this.props,
            classes = _props.classes,
            classNameProp = _props.className,
            disabled = _props.disabled,
            fullWidth = _props.fullWidth,
            icon = _props.icon,
            indicator = _props.indicator,
            labelProp = _props.label,
            onChange = _props.onChange,
            selected = _props.selected,
            textColor = _props.textColor,
            value = _props.value,
            other = objectWithoutProperties(_props, ["classes", "className", "disabled", "fullWidth", "icon", "indicator", "label", "onChange", "selected", "textColor", "value"]);

        var label;

        if (labelProp !== undefined) {
          label = React__default.createElement("span", {
            className: classes.labelContainer
          }, React__default.createElement("span", {
            className: classnames(classes.label, defineProperty({}, classes.labelWrapped, this.state.wrappedText)),
            ref: function ref(node) {
              _this2.label = node;
            }
          }, labelProp));
        }

        var className = classnames(classes.root, classes["textColor".concat(capitalize(textColor))], (_classNames2 = {}, defineProperty(_classNames2, classes.disabled, disabled), defineProperty(_classNames2, classes.selected, selected), defineProperty(_classNames2, classes.labelIcon, icon && label), defineProperty(_classNames2, classes.fullWidth, fullWidth), _classNames2), classNameProp);
        return React__default.createElement(ButtonBase$1, _extends_1({
          focusRipple: true,
          className: className,
          role: "tab",
          "aria-selected": selected,
          disabled: disabled
        }, other, {
          onClick: this.handleChange
        }), React__default.createElement("span", {
          className: classes.wrapper
        }, icon, label), indicator);
      }
    }]);

    return Tab;
  }(React__default.Component);

  Tab.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * If `true`, the tab will be disabled.
     */
    disabled: propTypes.bool,

    /**
     * @ignore
     */
    fullWidth: propTypes.bool,

    /**
     * The icon element.
     */
    icon: propTypes.node,

    /**
     * @ignore
     * For server side rendering consideration, we let the selected tab
     * render the indicator.
     */
    indicator: propTypes.node,

    /**
     * The label element.
     */
    label: propTypes.node,

    /**
     * @ignore
     */
    onChange: propTypes.func,

    /**
     * @ignore
     */
    onClick: propTypes.func,

    /**
     * @ignore
     */
    selected: propTypes.bool,

    /**
     * @ignore
     */
    textColor: propTypes.oneOf(['secondary', 'primary', 'inherit']),

    /**
     * You can provide your own value. Otherwise, we fallback to the child position index.
     */
    value: propTypes.any
  };
  Tab.defaultProps = {
    disabled: false,
    textColor: 'inherit'
  };
  var Tab$1 = withStyles(styles$93, {
    name: 'MuiTab'
  })(Tab);

  /**
   * The `TextField` is a convenience wrapper for the most common cases (80%).
   * It cannot be all things to all people, otherwise the API would grow out of control.
   *
   * ## Advanced Configuration
   *
   * It's important to understand that the text field is a simple abstraction
   * on top of the following components:
   * - [FormControl](/api/form-control)
   * - [InputLabel](/api/input-label)
   * - [Input](/api/input)
   * - [FormHelperText](/api/form-helper-text)
   *
   * If you wish to alter the properties applied to the native input, you can do as follow:
   *
   * ```jsx
   * const inputProps = {
   *   step: 300,
   * };
   *
   * return <TextField id="time" type="time" inputProps={inputProps} />;
   * ```
   *
   * For advanced cases, please look at the source of TextField by clicking on the
   * "Edit this page" button above. Consider either:
   * - using the upper case props for passing values direct to the components.
   * - using the underlying components directly as shown in the demos.
   */

  function TextField(props) {
    var autoComplete = props.autoComplete,
        autoFocus = props.autoFocus,
        children = props.children,
        className = props.className,
        defaultValue = props.defaultValue,
        disabled = props.disabled,
        error = props.error,
        FormHelperTextProps = props.FormHelperTextProps,
        fullWidth = props.fullWidth,
        helperText = props.helperText,
        id = props.id,
        InputLabelProps = props.InputLabelProps,
        inputProps = props.inputProps,
        InputProps = props.InputProps,
        inputRef = props.inputRef,
        label = props.label,
        multiline = props.multiline,
        name = props.name,
        onBlur = props.onBlur,
        onChange = props.onChange,
        onFocus = props.onFocus,
        placeholder = props.placeholder,
        required = props.required,
        rows = props.rows,
        rowsMax = props.rowsMax,
        select = props.select,
        SelectProps = props.SelectProps,
        type = props.type,
        value = props.value,
        other = objectWithoutProperties(props, ["autoComplete", "autoFocus", "children", "className", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value"]);

    warning_1(!select || Boolean(children), 'Material-UI: `children` must be passed when using the `TextField` component with `select`.');
    var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
    var InputElement = React__default.createElement(Input$1, _extends_1({
      autoComplete: autoComplete,
      autoFocus: autoFocus,
      defaultValue: defaultValue,
      disabled: disabled,
      fullWidth: fullWidth,
      multiline: multiline,
      name: name,
      rows: rows,
      rowsMax: rowsMax,
      type: type,
      value: value,
      id: id,
      inputRef: inputRef,
      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,
      placeholder: placeholder,
      inputProps: inputProps
    }, InputProps));
    return React__default.createElement(FormControl$1, _extends_1({
      "aria-describedby": helperTextId,
      className: className,
      error: error,
      fullWidth: fullWidth,
      required: required
    }, other), label && React__default.createElement(InputLabel$1, _extends_1({
      htmlFor: id
    }, InputLabelProps), label), select ? React__default.createElement(Select$1, _extends_1({
      value: value,
      input: InputElement
    }, SelectProps), children) : InputElement, helperText && React__default.createElement(FormHelperText$1, _extends_1({
      id: helperTextId
    }, FormHelperTextProps), helperText));
  }

  TextField.propTypes = {
    /**
     * This property helps users to fill forms faster, especially on mobile devices.
     * The name can be confusing, as it's more like an autofill.
     * You can learn more about it here:
     * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
     */
    autoComplete: propTypes.string,

    /**
     * If `true`, the input will be focused during the first mount.
     */
    autoFocus: propTypes.bool,

    /**
     * @ignore
     */
    children: propTypes.node,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * The default value of the `Input` element.
     */
    defaultValue: propTypes.oneOfType([propTypes.string, propTypes.number]),

    /**
     * If `true`, the input will be disabled.
     */
    disabled: propTypes.bool,

    /**
     * If `true`, the label will be displayed in an error state.
     */
    error: propTypes.bool,

    /**
     * Properties applied to the `FormHelperText` element.
     */
    FormHelperTextProps: propTypes.object,

    /**
     * If `true`, the input will take up the full width of its container.
     */
    fullWidth: propTypes.bool,

    /**
     * The helper text content.
     */
    helperText: propTypes.node,

    /**
     * The id of the `input` element.
     * Use that property to make `label` and `helperText` accessible for screen readers.
     */
    id: propTypes.string,

    /**
     * Properties applied to the `InputLabel` element.
     */
    InputLabelProps: propTypes.object,

    /**
     * Properties applied to the `Input` element.
     */
    InputProps: propTypes.object,

    /**
     * Properties applied to the native `input` element.
     */
    inputProps: propTypes.object,

    /**
     * Use that property to pass a ref callback to the native input component.
     */
    inputRef: propTypes.func,

    /**
     * The label content.
     */
    label: propTypes.node,

    /**
     * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
     */
    margin: propTypes.oneOf(['none', 'dense', 'normal']),

    /**
     * If `true`, a textarea element will be rendered instead of an input.
     */
    multiline: propTypes.bool,

    /**
     * Name attribute of the `input` element.
     */
    name: propTypes.string,

    /**
     * @ignore
     */
    onBlur: propTypes.func,

    /**
     * Callback fired when the value is changed.
     *
     * @param {object} event The event source of the callback.
     * You can pull out the new value by accessing `event.target.value`.
     */
    onChange: propTypes.func,

    /**
     * @ignore
     */
    onFocus: propTypes.func,

    /**
     * The short hint displayed in the input before the user enters a value.
     */
    placeholder: propTypes.string,

    /**
     * If `true`, the label is displayed as required.
     */
    required: propTypes.bool,

    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows: propTypes.oneOfType([propTypes.string, propTypes.number]),

    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    rowsMax: propTypes.oneOfType([propTypes.string, propTypes.number]),

    /**
     * Render a `Select` element while passing the `Input` element to `Select` as `input` parameter.
     * If this option is set you must pass the options of the select as children.
     */
    select: propTypes.bool,

    /**
     * Properties applied to the `Select` element.
     */
    SelectProps: propTypes.object,

    /**
     * Type attribute of the `Input` element. It should be a valid HTML5 input type.
     */
    type: propTypes.string,

    /**
     * The value of the `Input` element, required for a controlled component.
     */
    value: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.number]))])
  };
  TextField.defaultProps = {
    required: false,
    select: false
  };

  var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Manager = function (_Component) {
    _inherits$1(Manager, _Component);

    function Manager() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck$1(this, Manager);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
        _this._targetNode = node;
      }, _this._getTargetNode = function () {
        return _this._targetNode;
      }, _temp), _possibleConstructorReturn$1(_this, _ret);
    }

    _createClass$1(Manager, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          popperManager: {
            setTargetNode: this._setTargetNode,
            getTargetNode: this._getTargetNode
          }
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            tag = _props.tag,
            children = _props.children,
            restProps = _objectWithoutProperties$1(_props, ['tag', 'children']);

        if (tag !== false) {
          return React.createElement(tag, restProps, children);
        } else {
          return children;
        }
      }
    }]);

    return Manager;
  }(React.Component);

  Manager.childContextTypes = {
    popperManager: propTypes.object.isRequired
  };
  Manager.propTypes = {
    tag: propTypes.oneOfType([propTypes.string, propTypes.bool]),
    children: propTypes.oneOfType([propTypes.node, propTypes.func])
  };
  Manager.defaultProps = {
    tag: 'div'
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var Target = function Target(props, context) {
    var _props$component = props.component,
        component = _props$component === undefined ? 'div' : _props$component,
        innerRef = props.innerRef,
        children = props.children,
        restProps = _objectWithoutProperties$2(props, ['component', 'innerRef', 'children']);

    var popperManager = context.popperManager;

    var targetRef = function targetRef(node) {
      popperManager.setTargetNode(node);
      if (typeof innerRef === 'function') {
        innerRef(node);
      }
    };

    if (typeof children === 'function') {
      var targetProps = { ref: targetRef };
      return children({ targetProps: targetProps, restProps: restProps });
    }

    var componentProps = _extends({}, restProps);

    if (typeof component === 'string') {
      componentProps.ref = targetRef;
    } else {
      componentProps.innerRef = targetRef;
    }

    return React.createElement(component, componentProps, children);
  };

  Target.contextTypes = {
    popperManager: propTypes.object.isRequired
  };

  Target.propTypes = {
    component: propTypes.oneOfType([propTypes.node, propTypes.func]),
    innerRef: propTypes.func,
    children: propTypes.oneOfType([propTypes.node, propTypes.func])
  };

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.14.3
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var isBrowser$1 = typeof window !== 'undefined' && typeof document !== 'undefined';

  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  var timeoutDuration = 0;
  for (var i$1 = 0; i$1 < longerTimeoutBrowsers.length; i$1 += 1) {
    if (isBrowser$1 && navigator.userAgent.indexOf(longerTimeoutBrowsers[i$1]) >= 0) {
      timeoutDuration = 1;
      break;
    }
  }

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }
      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser$1 && window.Promise;

  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
  var debounce$1 = supportsMicroTasks ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var css = getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent$1(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent$1(getParentNode(element));
  }

  var isIE11 = isBrowser$1 && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser$1 && /MSIE 10/.test(navigator.userAgent);

  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
  function isIE(version) {
    if (version === 11) {
      return isIE11;
    }
    if (version === 10) {
      return isIE10;
    }
    return isIE11 || isIE10;
  }

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

    return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
  }

  function getWindowSizes() {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);

    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck$3 = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass$1 = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();





  var defineProperty$2 = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return _extends$1({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
    var width = sizes.width || element.clientWidth || result.right - result.left;
    var height = sizes.height || element.clientHeight || result.bottom - result.top;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');

      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent$1(children);

    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && parent.nodeName === 'HTML') {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop, 10);
      var marginLeft = parseFloat(styles.marginLeft, 10);

      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };

    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    return isFixed(getParentNode(element));
  }

  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */

  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
      el = el.parentElement;
    }
    return el || document.documentElement;
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

    // Handle viewport case
    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;
      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent$1(getParentNode(reference));
        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    }

    // Add paddings
    boundaries.left += padding;
    boundaries.top += padding;
    boundaries.right -= padding;
    boundaries.bottom -= padding;

    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };

    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends$1({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });

    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });

    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation = placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var styles = getComputedStyle(element);
    var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
    var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find$1(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex$1(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find$1(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex$1(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }
      var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
      if (modifier.enabled && isFunction(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);

        data = fn(data, modifier);
      }
    });

    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;

    data.positionFixed = this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroy the popper
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style.left = '';
      this.popper.style.right = '';
      this.popper.style.bottom = '';
      this.popper.style.willChange = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners();

    // remove the popper if user explicity asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */
  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
      attachToScrollParents(getScrollParent$1(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent$1(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;

    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger onUpdate callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = '';
      // add unit if the value is numeric and is one of the following
      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

    return options;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find$1(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
      position: popper.position
    };

    // Avoid blurry text by using full pixel integers.
    // For pixel-perfect positioning, top/bottom prefers rounded
    // values, while left/right prefers floored values.
    var offsets = {
      left: Math.floor(popper.left),
      top: Math.round(popper.top),
      bottom: Math.round(popper.bottom),
      right: Math.floor(popper.right)
    };

    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
        top = void 0;
    if (sideA === 'bottom') {
      top = -offsetParentRect.height + offsets.bottom;
    } else {
      top = offsets.top;
    }
    if (sideB === 'right') {
      left = -offsetParentRect.width + offsets.right;
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    }

    // Attributes
    var attributes = {
      'x-placement': data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends$1({}, attributes, data.attributes);
    data.styles = _extends$1({}, styles, data.styles);
    data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find$1(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });

    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';
      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    var _data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjuction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$2(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$2(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-right` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements = placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;
      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);

      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

      // flip the variation if required
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
      var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : '');

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;
      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;
        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;
      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find$1(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op
      // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, [])
      // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var basePlacement = placement.split('-')[0];

    var offsets = void 0;
    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top,
        left = popperStyles.left,
        transform = popperStyles[transformProp];

    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;

    options.boundaries = boundaries;

    var order = options.priority;
    var popper = data.offsets.popper;

    var check = {
      primary: function primary(placement) {
        var value = popper[placement];
        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty$2({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }
        return defineProperty$2({}, mainSide, value);
      }
    };

    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends$1({}, popper, check[side](placement));
    });

    data.offsets.popper = popper;

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;

      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';

      var shiftOffsets = {
        start: defineProperty$2({}, side, reference[side]),
        end: defineProperty$2({}, side, reference[side] + reference[measurement] - popper[measurement])
      };

      data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find$1(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);

    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unitless, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the height.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * An scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],
      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper this makes sure the popper has always a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier, can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near eachothers
     * without leaving any gap between the two. Expecially useful when the arrow is
     * enabled and you want to assure it to point to its reference element.
     * It cares only about the first axis, you can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjuction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations).
       */
      behavior: 'flip',
      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position,
       * the popper will never be placed outside of the defined boundaries
       * (except if keepTogether is enabled)
       */
      boundariesElement: 'viewport'
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3d transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties.
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',
      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define you own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3d transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties.
       */
      gpuAcceleration: undefined
    }
  };

  /**
   * The `dataObject` is an object containing all the informations used by Popper.js
   * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overriden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass as 3rd argument an object with the same
   * structure of this object, example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults = {
    /**
     * Popper's placement
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated, this callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js
     * @prop {modifiers}
     */
    modifiers: modifiers
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper = function () {
    /**
     * Create a new Popper.js instance
     * @class Popper
     * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as popper.
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck$3(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce$1(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = _extends$1({}, Popper.Defaults, options);

      // init state
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers = {};
      Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends$1({
          name: name
        }, _this.options.modifiers[name]);
      })
      // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });

      // fire the first update to position the popper in the right place
      this.update();

      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass$1(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }

      /**
       * Schedule an update, it will run on the next UI update available
       * @method scheduleUpdate
       * @memberof Popper
       */


      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;

  var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _objectWithoutProperties$3(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var placements$1 = Popper.placements;

  var Popper$1 = function (_Component) {
    _inherits$2(Popper$$1, _Component);

    function Popper$$1() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck$2(this, Popper$$1);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, (_ref = Popper$$1.__proto__ || Object.getPrototypeOf(Popper$$1)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
        _this._arrowNode = node;
      }, _this._getTargetNode = function () {
        if (_this.props.target) {
          return _this.props.target;
        } else if (!_this.context.popperManager || !_this.context.popperManager.getTargetNode()) {
          throw new Error('Target missing. Popper must be given a target from the Popper Manager, or as a prop.');
        }
        return _this.context.popperManager.getTargetNode();
      }, _this._getOffsets = function (data) {
        return Object.keys(data.offsets).map(function (key) {
          return data.offsets[key];
        });
      }, _this._isDataDirty = function (data) {
        if (_this.state.data) {
          return JSON.stringify(_this._getOffsets(_this.state.data)) !== JSON.stringify(_this._getOffsets(data));
        } else {
          return true;
        }
      }, _this._updateStateModifier = {
        enabled: true,
        order: 900,
        fn: function fn(data) {
          if (_this._isDataDirty(data)) {
            _this.setState({ data: data });
          }
          return data;
        }
      }, _this._getPopperStyle = function () {
        var data = _this.state.data;


        if (!_this._popper || !data) {
          return {
            position: 'absolute',
            pointerEvents: 'none',
            opacity: 0
          };
        }

        return _extends$2({
          position: data.offsets.popper.position
        }, data.styles);
      }, _this._getPopperPlacement = function () {
        return _this.state.data ? _this.state.data.placement : undefined;
      }, _this._getPopperHide = function () {
        return !!_this.state.data && _this.state.data.hide ? '' : undefined;
      }, _this._getArrowStyle = function () {
        if (!_this.state.data || !_this.state.data.offsets.arrow) {
          return {};
        } else {
          var _this$state$data$offs = _this.state.data.offsets.arrow,
              top = _this$state$data$offs.top,
              left = _this$state$data$offs.left;

          return { top: top, left: left };
        }
      }, _this._handlePopperRef = function (node) {
        _this._popperNode = node;
        if (node) {
          _this._createPopper();
        } else {
          _this._destroyPopper();
        }
        if (_this.props.innerRef) {
          _this.props.innerRef(node);
        }
      }, _this._scheduleUpdate = function () {
        _this._popper && _this._popper.scheduleUpdate();
      }, _temp), _possibleConstructorReturn$2(_this, _ret);
    }

    _createClass$2(Popper$$1, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          popper: {
            setArrowNode: this._setArrowNode,
            getArrowStyle: this._getArrowStyle
          }
        };
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(lastProps) {
        if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled || lastProps.target !== this.props.target) {
          this._destroyPopper();
          this._createPopper();
        }
        if (lastProps.children !== this.props.children) {
          this._scheduleUpdate();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._destroyPopper();
      }
    }, {
      key: '_createPopper',
      value: function _createPopper() {
        var _this2 = this;

        var _props = this.props,
            placement = _props.placement,
            eventsEnabled = _props.eventsEnabled,
            positionFixed = _props.positionFixed;

        var modifiers = _extends$2({}, this.props.modifiers, {
          applyStyle: { enabled: false },
          updateState: this._updateStateModifier
        });
        if (this._arrowNode) {
          modifiers.arrow = _extends$2({}, this.props.modifiers.arrow || {}, {
            element: this._arrowNode
          });
        }
        this._popper = new Popper(this._getTargetNode(), this._popperNode, {
          placement: placement,
          positionFixed: positionFixed,
          eventsEnabled: eventsEnabled,
          modifiers: modifiers
        });

        // TODO: look into setTimeout scheduleUpdate call, without it, the popper will not position properly on creation
        setTimeout(function () {
          return _this2._scheduleUpdate();
        });
      }
    }, {
      key: '_destroyPopper',
      value: function _destroyPopper() {
        if (this._popper) {
          this._popper.destroy();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            component = _props2.component,
            innerRef = _props2.innerRef,
            placement = _props2.placement,
            eventsEnabled = _props2.eventsEnabled,
            positionFixed = _props2.positionFixed,
            modifiers = _props2.modifiers,
            children = _props2.children,
            restProps = _objectWithoutProperties$3(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'positionFixed', 'modifiers', 'children']);

        var popperStyle = this._getPopperStyle();
        var popperPlacement = this._getPopperPlacement();
        var popperHide = this._getPopperHide();

        if (typeof children === 'function') {
          var popperProps = {
            ref: this._handlePopperRef,
            style: popperStyle,
            'data-placement': popperPlacement,
            'data-x-out-of-boundaries': popperHide
          };
          return children({
            popperProps: popperProps,
            restProps: restProps,
            scheduleUpdate: this._scheduleUpdate
          });
        }

        var componentProps = _extends$2({}, restProps, {
          style: _extends$2({}, restProps.style, popperStyle),
          'data-placement': popperPlacement,
          'data-x-out-of-boundaries': popperHide
        });

        if (typeof component === 'string') {
          componentProps.ref = this._handlePopperRef;
        } else {
          componentProps.innerRef = this._handlePopperRef;
        }

        return React.createElement(component, componentProps, children);
      }
    }]);

    return Popper$$1;
  }(React.Component);

  Popper$1.contextTypes = {
    popperManager: propTypes.object
  };
  Popper$1.childContextTypes = {
    popper: propTypes.object.isRequired
  };
  Popper$1.propTypes = {
    component: propTypes.oneOfType([propTypes.node, propTypes.func]),
    innerRef: propTypes.func,
    placement: propTypes.oneOf(placements$1),
    eventsEnabled: propTypes.bool,
    positionFixed: propTypes.bool,
    modifiers: propTypes.object,
    children: propTypes.oneOfType([propTypes.node, propTypes.func]),
    target: propTypes.oneOfType([
    // the following check is needed for SSR
    propTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object), propTypes.shape({
      getBoundingClientRect: propTypes.func.isRequired,
      clientWidth: propTypes.number.isRequired,
      clientHeight: propTypes.number.isRequired
    })])
  };
  Popper$1.defaultProps = {
    component: 'div',
    placement: 'bottom',
    eventsEnabled: true,
    positionFixed: false,
    modifiers: {}
  };

  var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _objectWithoutProperties$4(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var Arrow = function Arrow(props, context) {
    var _props$component = props.component,
        component = _props$component === undefined ? 'span' : _props$component,
        innerRef = props.innerRef,
        children = props.children,
        restProps = _objectWithoutProperties$4(props, ['component', 'innerRef', 'children']);

    var popper = context.popper;

    var arrowRef = function arrowRef(node) {
      popper.setArrowNode(node);
      if (typeof innerRef === 'function') {
        innerRef(node);
      }
    };
    var arrowStyle = popper.getArrowStyle();

    if (typeof children === 'function') {
      var arrowProps = {
        ref: arrowRef,
        style: arrowStyle
      };
      return children({ arrowProps: arrowProps, restProps: restProps });
    }

    var componentProps = _extends$3({}, restProps, {
      style: _extends$3({}, arrowStyle, restProps.style)
    });

    if (typeof component === 'string') {
      componentProps.ref = arrowRef;
    } else {
      componentProps.innerRef = arrowRef;
    }

    return React.createElement(component, componentProps, children);
  };

  Arrow.contextTypes = {
    popper: propTypes.object.isRequired
  };

  Arrow.propTypes = {
    component: propTypes.oneOfType([propTypes.node, propTypes.func]),
    innerRef: propTypes.func,
    children: propTypes.oneOfType([propTypes.node, propTypes.func])
  };

  var styles$94 = function styles(theme) {
    return {
      popper: {
        zIndex: theme.zIndex.tooltip,
        pointerEvents: 'none',
        '&$open': {
          pointerEvents: 'auto'
        }
      },
      open: {},
      tooltip: {
        backgroundColor: theme.palette.grey[700],
        borderRadius: 2,
        color: common.white,
        fontFamily: theme.typography.fontFamily,
        opacity: 0,
        transform: 'scale(0)',
        transition: theme.transitions.create(['opacity', 'transform'], {
          duration: theme.transitions.duration.shortest,
          easing: theme.transitions.easing.easeIn
        }),
        minHeight: 0,
        padding: "".concat(theme.spacing.unit / 2, "px ").concat(theme.spacing.unit, "px"),
        fontSize: theme.typography.pxToRem(10),
        lineHeight: "".concat(theme.typography.round(14 / 10), "em"),
        '&$open': {
          opacity: 0.9,
          transform: 'scale(1)',
          transition: theme.transitions.create(['opacity', 'transform'], {
            duration: theme.transitions.duration.shortest,
            easing: theme.transitions.easing.easeOut
          })
        }
      },
      touch: {
        padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 2, "px"),
        fontSize: theme.typography.pxToRem(14),
        lineHeight: "".concat(theme.typography.round(16 / 14), "em")
      },
      tooltipPlacementLeft: defineProperty({
        transformOrigin: 'right center',
        margin: "0 ".concat(theme.spacing.unit * 3, "px")
      }, theme.breakpoints.up('sm'), {
        margin: '0 14px'
      }),
      tooltipPlacementRight: defineProperty({
        transformOrigin: 'left center',
        margin: "0 ".concat(theme.spacing.unit * 3, "px")
      }, theme.breakpoints.up('sm'), {
        margin: '0 14px'
      }),
      tooltipPlacementTop: defineProperty({
        transformOrigin: 'center bottom',
        margin: "".concat(theme.spacing.unit * 3, "px 0")
      }, theme.breakpoints.up('sm'), {
        margin: '14px 0'
      }),
      tooltipPlacementBottom: defineProperty({
        transformOrigin: 'center top',
        margin: "".concat(theme.spacing.unit * 3, "px 0")
      }, theme.breakpoints.up('sm'), {
        margin: '14px 0'
      })
    };
  };

  function flipPlacement(placement) {
    switch (placement) {
      case 'bottom-end':
        return 'bottom-start';

      case 'bottom-start':
        return 'bottom-end';

      case 'top-end':
        return 'top-start';

      case 'top-start':
        return 'top-end';

      default:
        return placement;
    }
  }

  var Tooltip =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Tooltip, _React$Component);

    function Tooltip(props, context) {
      var _this;

      classCallCheck(this, Tooltip);

      _this = possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props, context));
      _this.state = {};
      _this.enterTimer = null;
      _this.leaveTimer = null;
      _this.touchTimer = null;
      _this.closeTimer = null;
      _this.isControlled = null;
      _this.popper = null;
      _this.children = null;
      _this.ignoreNonTouchEvents = false;
      _this.handleResize = debounce(function () {
        if (_this.popper) {
          _this.popper._popper.scheduleUpdate();
        }
      }, 166);

      _this.handleEnter = function (event) {
        var _this$props = _this.props,
            children = _this$props.children,
            enterDelay = _this$props.enterDelay;
        var childrenProps = children.props;

        if (event.type === 'focus' && childrenProps.onFocus) {
          childrenProps.onFocus(event);
        }

        if (event.type === 'mouseover' && childrenProps.onMouseOver) {
          childrenProps.onMouseOver(event);
        }

        if (_this.ignoreNonTouchEvents && event.type !== 'touchstart') {
          return;
        }

        clearTimeout(_this.enterTimer);
        clearTimeout(_this.leaveTimer);

        if (enterDelay) {
          event.persist();
          _this.enterTimer = setTimeout(function () {
            _this.handleOpen(event);
          }, enterDelay);
        } else {
          _this.handleOpen(event);
        }
      };

      _this.handleOpen = function (event) {
        if (!_this.isControlled) {
          _this.setState({
            open: true
          });
        }

        if (_this.props.onOpen) {
          _this.props.onOpen(event, true);
        }
      };

      _this.handleLeave = function (event) {
        var _this$props2 = _this.props,
            children = _this$props2.children,
            leaveDelay = _this$props2.leaveDelay;
        var childrenProps = children.props;

        if (event.type === 'blur' && childrenProps.onBlur) {
          childrenProps.onBlur(event);
        }

        if (event.type === 'mouseleave' && childrenProps.onMouseLeave) {
          childrenProps.onMouseLeave(event);
        }

        clearTimeout(_this.enterTimer);
        clearTimeout(_this.leaveTimer);

        if (leaveDelay) {
          event.persist();
          _this.leaveTimer = setTimeout(function () {
            _this.handleClose(event);
          }, leaveDelay);
        } else {
          _this.handleClose(event);
        }
      };

      _this.handleClose = function (event) {
        if (!_this.isControlled) {
          _this.setState({
            open: false
          });
        }

        if (_this.props.onClose) {
          _this.props.onClose(event, false);
        }

        clearTimeout(_this.closeTimer);
        _this.closeTimer = setTimeout(function () {
          _this.ignoreNonTouchEvents = false;
        }, _this.props.theme.transitions.duration.shortest);
      };

      _this.handleTouchStart = function (event) {
        _this.ignoreNonTouchEvents = true;
        var _this$props3 = _this.props,
            children = _this$props3.children,
            enterTouchDelay = _this$props3.enterTouchDelay;
        var childrenProps = children.props;

        if (childrenProps.onTouchStart) {
          childrenProps.onTouchStart(event);
        }

        clearTimeout(_this.leaveTimer);
        clearTimeout(_this.closeTimer);
        clearTimeout(_this.touchTimer);
        event.persist();
        _this.touchTimer = setTimeout(function () {
          _this.handleEnter(event);
        }, enterTouchDelay);
      };

      _this.handleTouchEnd = function (event) {
        var _this$props4 = _this.props,
            children = _this$props4.children,
            leaveTouchDelay = _this$props4.leaveTouchDelay;
        var childrenProps = children.props;

        if (childrenProps.onTouchEnd) {
          childrenProps.onTouchEnd(event);
        }

        clearTimeout(_this.touchTimer);
        clearTimeout(_this.leaveTimer);
        event.persist();
        _this.leaveTimer = setTimeout(function () {
          _this.handleClose(event);
        }, leaveTouchDelay);
      };

      _this.isControlled = props.open != null;

      if (!_this.isControlled) {
        // not controlled, use internal state
        _this.state.open = false;
      }

      return _this;
    }

    createClass(Tooltip, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        warning_1(!this.children || !this.children.disabled || !this.children.tagName.toLowerCase() === 'button', ['Material-UI: you are providing a disabled `button` child to the Tooltip component.', 'A disabled element does not fire events.', "Tooltip needs to listen to the child element's events to display the title.", '', 'Place a `div` container on top of the element.'].join('\n'));
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.enterTimer);
        clearTimeout(this.leaveTimer);
        clearTimeout(this.touchTimer);
        clearTimeout(this.closeTimer);
        this.handleResize.clear();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            classes = _props.classes,
            className = _props.className,
            disableFocusListener = _props.disableFocusListener,
            disableHoverListener = _props.disableHoverListener,
            disableTouchListener = _props.disableTouchListener,
            enterDelay = _props.enterDelay,
            enterTouchDelay = _props.enterTouchDelay,
            id = _props.id,
            leaveDelay = _props.leaveDelay,
            leaveTouchDelay = _props.leaveTouchDelay,
            onClose = _props.onClose,
            onOpen = _props.onOpen,
            openProp = _props.open,
            placementProp = _props.placement,
            _props$PopperProps = _props.PopperProps;
        _props$PopperProps = _props$PopperProps === void 0 ? {} : _props$PopperProps;

        var PopperClassName = _props$PopperProps.className,
            PopperProps = objectWithoutProperties(_props$PopperProps, ["className"]),
            theme = _props.theme,
            title = _props.title,
            other = objectWithoutProperties(_props, ["children", "classes", "className", "disableFocusListener", "disableHoverListener", "disableTouchListener", "enterDelay", "enterTouchDelay", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperProps", "theme", "title"]);

        var placement = theme.direction === 'rtl' ? flipPlacement(placementProp) : placementProp;
        var open = this.isControlled ? openProp : this.state.open;
        var childrenProps = {
          'aria-describedby': id
        }; // There is no point at displaying an empty tooltip.

        if (title === '') {
          open = false;
        }

        if (!disableTouchListener) {
          childrenProps.onTouchStart = this.handleTouchStart;
          childrenProps.onTouchEnd = this.handleTouchEnd;
        }

        if (!disableHoverListener) {
          childrenProps.onMouseOver = this.handleEnter;
          childrenProps.onMouseLeave = this.handleLeave;
        }

        if (!disableFocusListener) {
          childrenProps.onFocus = this.handleEnter;
          childrenProps.onBlur = this.handleLeave;
        }

        warning_1(!children.props.title, ['Material-UI: you have been providing a `title` property to the child of <Tooltip />.', "Remove this title property `".concat(children.props.title, "` or the Tooltip component.")].join('\n'));
        return React__default.createElement(Manager, _extends_1({
          tag: false
        }, other), React__default.createElement(EventListener, {
          target: "window",
          onResize: this.handleResize
        }), React__default.createElement(Target, null, function (_ref) {
          var targetProps = _ref.targetProps;
          return React__default.createElement(RootRef, {
            rootRef: function rootRef(node) {
              _this2.children = node;
              targetProps.ref(_this2.children);
            }
          }, React__default.cloneElement(children, childrenProps));
        }), React__default.createElement(Portal, null, React__default.createElement(Popper$1, _extends_1({
          placement: placement,
          eventsEnabled: open,
          className: classnames(classes.popper, defineProperty({}, classes.open, open), PopperClassName),
          ref: function ref(node) {
            _this2.popper = node;
          }
        }, PopperProps), function (_ref2) {
          var popperProps = _ref2.popperProps,
              restProps = _ref2.restProps;
          var actualPlacement = (popperProps['data-placement'] || placement).split('-')[0];
          return React__default.createElement("div", _extends_1({}, popperProps, restProps, {
            style: objectSpread({}, popperProps.style, {
              top: popperProps.style.top || 0,
              left: popperProps.style.left || 0
            }, restProps.style)
          }), React__default.createElement("div", {
            id: id,
            role: "tooltip",
            "aria-hidden": !open,
            className: classnames(classes.tooltip, defineProperty({}, classes.open, open), defineProperty({}, classes.touch, _this2.ignoreNonTouchEvents), classes["tooltipPlacement".concat(capitalize(actualPlacement))])
          }, title));
        })));
      }
    }]);

    return Tooltip;
  }(React__default.Component);

  Tooltip.propTypes = {
    /**
     * Tooltip reference element.
     */
    children: propTypes.element.isRequired,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: propTypes.object.isRequired,

    /**
     * @ignore
     */
    className: propTypes.string,

    /**
     * Do not respond to focus events.
     */
    disableFocusListener: propTypes.bool,

    /**
     * Do not respond to hover events.
     */
    disableHoverListener: propTypes.bool,

    /**
     * Do not respond to long press touch events.
     */
    disableTouchListener: propTypes.bool,

    /**
     * The number of milliseconds to wait before showing the tooltip.
     * This property won't impact the enter touch delay (`enterTouchDelay`).
     */
    enterDelay: propTypes.number,

    /**
     * The number of milliseconds a user must touch the element before showing the tooltip.
     */
    enterTouchDelay: propTypes.number,

    /**
     * The relationship between the tooltip and the wrapper component is not clear from the DOM.
     * By providing this property, we can use aria-describedby to solve the accessibility issue.
     */
    id: propTypes.string,

    /**
     * The number of milliseconds to wait before hiding the tooltip.
     * This property won't impact the leave touch delay (`leaveTouchDelay`).
     */
    leaveDelay: propTypes.number,

    /**
     * The number of milliseconds after the user stops touching an element before hiding the tooltip.
     */
    leaveTouchDelay: propTypes.number,

    /**
     * Callback fired when the tooltip requests to be closed.
     *
     * @param {object} event The event source of the callback
     */
    onClose: propTypes.func,

    /**
     * Callback fired when the tooltip requests to be open.
     *
     * @param {object} event The event source of the callback
     */
    onOpen: propTypes.func,

    /**
     * If `true`, the tooltip is shown.
     */
    open: propTypes.bool,

    /**
     * Tooltip placement
     */
    placement: propTypes.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),

    /**
     * Properties applied to the `Popper` element.
     */
    PopperProps: propTypes.object,

    /**
     * @ignore
     */
    theme: propTypes.object.isRequired,

    /**
     * Tooltip title. Zero-length titles string are never displayed.
     */
    title: propTypes.node.isRequired
  };
  Tooltip.defaultProps = {
    disableFocusListener: false,
    disableHoverListener: false,
    disableTouchListener: false,
    enterDelay: 0,
    enterTouchDelay: 1000,
    leaveDelay: 0,
    leaveTouchDelay: 1500,
    placement: 'bottom'
  };
  var Tooltip$1 = withStyles(styles$94, {
    name: 'MuiTooltip',
    withTheme: true
  })(Tooltip);

  /**
   * Dialog will responsively be full screen *at or below* the given breakpoint
   * (defaults to 'sm' for mobile devices).
   * Notice that this Higher-order Component is incompatible with server side rendering.
   */

  var withMobileDialog = function withMobileDialog() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (Component) {
      var _options$breakpoint = options.breakpoint,
          breakpoint = _options$breakpoint === void 0 ? 'sm' : _options$breakpoint;

      function WithMobileDialog(props) {
        return React__default.createElement(Component, _extends_1({
          fullScreen: isWidthDown(breakpoint, props.width)
        }, props));
      }

      WithMobileDialog.propTypes = {
        width: propTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
      };
      return withWidth()(WithMobileDialog);
    };
  };

  var styles$95 = {
    entering: {
      transform: 'scale(1)'
    },
    entered: {
      transform: 'scale(1)'
    }
  };
  /**
   * The Zoom transition can be used for the floating variant of the
   * [Button](https://material-ui.com/demos/buttons/#floating-action-buttons) component.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  var Zoom =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Zoom, _React$Component);

    function Zoom() {
      var _ref;

      var _temp, _this;

      classCallCheck(this, Zoom);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return possibleConstructorReturn(_this, (_temp = _this = possibleConstructorReturn(this, (_ref = Zoom.__proto__ || Object.getPrototypeOf(Zoom)).call.apply(_ref, [this].concat(args))), _this.handleEnter = function (node) {
        var theme = _this.props.theme;
        reflow(node); // So the animation always start from the start.

        var transitionProps = getTransitionProps(_this.props, {
          mode: 'enter'
        });
        node.style.webkitTransition = theme.transitions.create('transform', transitionProps);
        node.style.transition = theme.transitions.create('transform', transitionProps);

        if (_this.props.onEnter) {
          _this.props.onEnter(node);
        }
      }, _this.handleExit = function (node) {
        var theme = _this.props.theme;
        var transitionProps = getTransitionProps(_this.props, {
          mode: 'exit'
        });
        node.style.webkitTransition = theme.transitions.create('transform', transitionProps);
        node.style.transition = theme.transitions.create('transform', transitionProps);

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      }, _temp));
    }

    createClass(Zoom, [{
      key: "render",
      value: function render() {
        var _props = this.props,
            children = _props.children,
            onEnter = _props.onEnter,
            onExit = _props.onExit,
            styleProp = _props.style,
            theme = _props.theme,
            other = objectWithoutProperties(_props, ["children", "onEnter", "onExit", "style", "theme"]);

        var style = objectSpread({}, styleProp, React__default.isValidElement(children) ? children.props.style : {});

        return React__default.createElement(Transition, _extends_1({
          appear: true,
          onEnter: this.handleEnter,
          onExit: this.handleExit
        }, other), function (state, childProps) {
          return React__default.cloneElement(children, objectSpread({
            style: objectSpread({
              transform: 'scale(0)',
              willChange: 'transform'
            }, styles$95[state], style)
          }, childProps));
        });
      }
    }]);

    return Zoom;
  }(React__default.Component);

  Zoom.propTypes = {
    /**
     * A single child content element.
     */
    children: propTypes.oneOfType([propTypes.element, propTypes.func]),

    /**
     * If `true`, the component will transition in.
     */
    in: propTypes.bool,

    /**
     * @ignore
     */
    onEnter: propTypes.func,

    /**
     * @ignore
     */
    onExit: propTypes.func,

    /**
     * @ignore
     */
    style: propTypes.object,

    /**
     * @ignore
     */
    theme: propTypes.object.isRequired,

    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    timeout: propTypes.oneOfType([propTypes.number, propTypes.shape({
      enter: propTypes.number,
      exit: propTypes.number
    })])
  };
  Zoom.defaultProps = {
    timeout: {
      enter: duration.enteringScreen,
      exit: duration.leavingScreen
    }
  };
  var Zoom$1 = withTheme()(Zoom);

  exports.colors = index;
  exports.createGenerateClassName = createGenerateClassName;
  exports.createMuiTheme = createMuiTheme;
  exports.jssPreset = jssPreset;
  exports.MuiThemeProvider = MuiThemeProvider;
  exports.withStyles = withStyles;
  exports.withTheme = withTheme;
  exports.AppBar = AppBar$1;
  exports.Avatar = Avatar$1;
  exports.Backdrop = Backdrop$1;
  exports.Badge = Badge$1;
  exports.BottomNavigation = BottomNavigation$1;
  exports.BottomNavigationAction = BottomNavigationAction$1;
  exports.Button = Button$1;
  exports.ButtonBase = ButtonBase$1;
  exports.Card = Card$1;
  exports.CardActions = CardActions$1;
  exports.CardContent = CardContent$1;
  exports.CardHeader = CardHeader$1;
  exports.CardMedia = CardMedia$1;
  exports.Checkbox = Checkbox$1;
  exports.Chip = Chip$1;
  exports.CircularProgress = CircularProgress$1;
  exports.ClickAwayListener = ClickAwayListener;
  exports.Collapse = Collapse$1;
  exports.CssBaseline = CssBaseline$1;
  exports.Dialog = Dialog$1;
  exports.DialogActions = DialogActions$1;
  exports.DialogContent = DialogContent$1;
  exports.DialogContentText = DialogContentText$1;
  exports.DialogTitle = DialogTitle$1;
  exports.Divider = Divider$1;
  exports.Drawer = Drawer$1;
  exports.ExpansionPanel = ExpansionPanel$1;
  exports.ExpansionPanelActions = ExpansionPanelActions$1;
  exports.ExpansionPanelDetails = ExpansionPanelDetails$1;
  exports.ExpansionPanelSummary = ExpansionPanelSummary$1;
  exports.Fade = Fade$1;
  exports.FormControl = FormControl$1;
  exports.FormControlLabel = FormControlLabel$1;
  exports.FormGroup = FormGroup$1;
  exports.FormHelperText = FormHelperText$1;
  exports.FormLabel = FormLabel$1;
  exports.Grid = Grid$1;
  exports.GridList = GridList$1;
  exports.GridListTile = GridListTile$1;
  exports.GridListTileBar = GridListTileBar$1;
  exports.Grow = Grow$1;
  exports.Hidden = Hidden;
  exports.Icon = Icon$1;
  exports.IconButton = IconButton$1;
  exports.Input = Input$1;
  exports.InputAdornment = InputAdornment$1;
  exports.InputLabel = InputLabel$1;
  exports.LinearProgress = LinearProgress$1;
  exports.List = List$1;
  exports.ListItem = ListItem$1;
  exports.ListItemAvatar = ListItemAvatar$1;
  exports.ListItemIcon = ListItemIcon$1;
  exports.ListItemSecondaryAction = ListItemSecondaryAction$1;
  exports.ListItemText = ListItemText$1;
  exports.ListSubheader = ListSubheader$1;
  exports.Menu = Menu$1;
  exports.MenuItem = MenuItem$1;
  exports.MenuList = MenuList;
  exports.MobileStepper = MobileStepper$1;
  exports.Modal = Modal$1;
  exports.ModalManager = ModalManager;
  exports.NativeSelect = NativeSelect$1;
  exports.Paper = Paper$1;
  exports.Popover = Popover$1;
  exports.Portal = Portal;
  exports.Radio = Radio$1;
  exports.RadioGroup = RadioGroup;
  exports.Select = Select$1;
  exports.Slide = Slide$1;
  exports.Snackbar = Snackbar$1;
  exports.SnackbarContent = SnackbarContent$1;
  exports.Step = Step$1;
  exports.StepButton = StepButton$1;
  exports.StepConnector = StepConnector$1;
  exports.StepContent = StepContent$1;
  exports.StepIcon = StepIcon$1;
  exports.StepLabel = StepLabel$1;
  exports.Stepper = Stepper$1;
  exports.SvgIcon = SvgIcon$1;
  exports.SwipeableDrawer = SwipeableDrawer$1;
  exports.Switch = Switch$1;
  exports.Table = Table$1;
  exports.TableBody = TableBody$1;
  exports.TableCell = TableCell$1;
  exports.TableFooter = TableFooter$1;
  exports.TableHead = TableHead$1;
  exports.TablePagination = TablePagination$1;
  exports.TableRow = TableRow$1;
  exports.TableSortLabel = TableSortLabel$1;
  exports.Tabs = Tabs$1;
  exports.Tab = Tab$1;
  exports.TextField = TextField;
  exports.Toolbar = Toolbar$1;
  exports.Tooltip = Tooltip$1;
  exports.Typography = Typography$1;
  exports.withMobileDialog = withMobileDialog;
  exports.withWidth = withWidth;
  exports.Zoom = Zoom$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
