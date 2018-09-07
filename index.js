!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.substateConnect=t():e.substateConnect=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";e.exports=r(2)},function(e,t,r){"use strict";r.r(t),r.d(t,"connect",function(){return i});var n=r(0),o=r.n(n);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i=function(e,t){return function(r){return function(n){var i={};for(var c in t)i[c]=e.getProp(t[c]);return o.a.createElement(r,u({},i,n))}}}},function(e,t,r){"use strict";
/** @license React v16.5.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(3),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.async_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112;o&&Symbol.for("react.placeholder");var d="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,u,i,c){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,o,u,i,c],f=0;(e=Error(t.replace(/%s/g,function(){return l[f++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||b}function g(){}function j(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||b}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var _=j.prototype=new g;_.constructor=j,n(_,m.prototype),_.isPureReactComponent=!0;var O={current:null,currentDispatcher:null},S=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n=void 0,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,n)&&!w.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var f=Array(l),a=0;a<l;a++)f[a]=arguments[a+2];o.children=f}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:u,type:e,key:i,ref:c,props:o,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var k=/\/+/g,$=[];function C(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function E(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function R(e,t,r){return null==e?0:function e(t,r,n,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var l=!1;if(null===t)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case u:case i:l=!0}}if(l)return n(o,t,""===r?"."+A(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var f=0;f<t.length;f++){var a=r+A(c=t[f],f);l+=e(c,a,n,o)}else if(a=null===t||"object"!=typeof t?null:"function"==typeof(a=d&&t[d]||t["@@iterator"])?a:null,"function"==typeof a)for(t=a.call(t),f=0;!(c=t.next()).done;)l+=e(c=c.value,a=r+A(c,f++),n,o);else"object"===c&&v("31","[object Object]"==(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return l}(e,"",t,r)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?T(e,n,r,function(e){return e}):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(k,"$&/")+"/")+r)),n.push(e))}function T(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(k,"$&/")+"/"),R(e,q,t=C(t,u,n,o)),E(t)}var U={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return T(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;R(e,M,t=C(null,null,t,r)),E(t)},count:function(e){return R(e,function(){return null},null)},toArray:function(e){var t=[];return T(e,t,null,function(e){return e}),t},only:function(e){return P(e)||v("143"),e}},createRef:function(){return{current:null}},Component:m,PureComponent:j,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null,unstable_read:null}).Provider={$$typeof:a,_context:e},e.Consumer=e,e.unstable_read=function(e,t){var r=O.currentDispatcher;return null===r&&v("277"),r.readContext(e,t)}.bind(null,e),e},forwardRef:function(e){return{$$typeof:y,render:e}},Fragment:c,StrictMode:l,unstable_AsyncMode:s,unstable_Profiler:f,createElement:x,cloneElement:function(e,t,r){(null===e||void 0===e)&&v("267",e);var o=void 0,i=n({},e.props),c=e.key,l=e.ref,f=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,f=O.current),void 0!==t.key&&(c=""+t.key);var a=void 0;for(o in e.type&&e.type.defaultProps&&(a=e.type.defaultProps),t)S.call(t,o)&&!w.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==a?a[o]:t[o])}if(1===(o=arguments.length-2))i.children=r;else if(1<o){a=Array(o);for(var p=0;p<o;p++)a[p]=arguments[p+2];i.children=a}return{$$typeof:u,type:e.type,key:c,ref:l,props:i,_owner:f}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.5.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:O,assign:n}},I={default:U},F=I&&U||I;e.exports=F.default||F},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,c=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(c[f]=r[f]);if(n){i=n(r);for(var a=0;a<i.length;a++)u.call(r,i[a])&&(c[i[a]]=r[i[a]])}}return c}}])});