(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[2],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(137);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(141);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var validateFormat =  false ? undefined : function (format) {
  if (format === undefined) {
    throw new Error('invariant(...): Second argument must be a string.');
  }
};
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments to provide
 * information about what broke and what you were expecting.
 *
 * The invariant message will be stripped in production, but the invariant will
 * remain to ensure logic does not differ in production.
 */

function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  validateFormat(format);

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return String(args[argIndex++]);
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // Skip invariant's own stack frame.

    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _modules_pick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _hooks_useElementLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
/* harmony import */ var _modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _hooks_usePlatformMethods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var _hooks_useResponderEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53);
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
/* harmony import */ var _Text_TextAncestorContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45);
var forwardPropsList={accessibilityLabel:true,accessibilityLiveRegion:true,accessibilityRole:true,accessibilityState:true,accessibilityValue:true,accessible:true,children:true,classList:true,disabled:true,importantForAccessibility:true,nativeID:true,onBlur:true,onClick:true,onClickCapture:true,onContextMenu:true,onFocus:true,onKeyDown:true,onKeyUp:true,onTouchCancel:true,onTouchCancelCapture:true,onTouchEnd:true,onTouchEndCapture:true,onTouchMove:true,onTouchMoveCapture:true,onTouchStart:true,onTouchStartCapture:true,pointerEvents:true,ref:true,style:true,testID:true,dataSet:true,onMouseDown:true,onMouseEnter:true,onMouseLeave:true,onMouseMove:true,onMouseOver:true,onMouseOut:true,onMouseUp:true,onScroll:true,onWheel:true,href:true,rel:true,target:true};var pickProps=function pickProps(props){return Object(_modules_pick__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(props,forwardPropsList);};var View=Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function(props,forwardedRef){var onLayout=props.onLayout,onMoveShouldSetResponder=props.onMoveShouldSetResponder,onMoveShouldSetResponderCapture=props.onMoveShouldSetResponderCapture,onResponderEnd=props.onResponderEnd,onResponderGrant=props.onResponderGrant,onResponderMove=props.onResponderMove,onResponderReject=props.onResponderReject,onResponderRelease=props.onResponderRelease,onResponderStart=props.onResponderStart,onResponderTerminate=props.onResponderTerminate,onResponderTerminationRequest=props.onResponderTerminationRequest,onScrollShouldSetResponder=props.onScrollShouldSetResponder,onScrollShouldSetResponderCapture=props.onScrollShouldSetResponderCapture,onSelectionChangeShouldSetResponder=props.onSelectionChangeShouldSetResponder,onSelectionChangeShouldSetResponderCapture=props.onSelectionChangeShouldSetResponderCapture,onStartShouldSetResponder=props.onStartShouldSetResponder,onStartShouldSetResponderCapture=props.onStartShouldSetResponderCapture;if(false){}var hasTextAncestor=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Text_TextAncestorContext__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);var hostRef=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);var classList=[classes.view];var style=_StyleSheet__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].compose(hasTextAncestor&&styles.inline,props.style);Object(_hooks_useElementLayout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(hostRef,onLayout);Object(_hooks_useResponderEvents__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(hostRef,{onMoveShouldSetResponder:onMoveShouldSetResponder,onMoveShouldSetResponderCapture:onMoveShouldSetResponderCapture,onResponderEnd:onResponderEnd,onResponderGrant:onResponderGrant,onResponderMove:onResponderMove,onResponderReject:onResponderReject,onResponderRelease:onResponderRelease,onResponderStart:onResponderStart,onResponderTerminate:onResponderTerminate,onResponderTerminationRequest:onResponderTerminationRequest,onScrollShouldSetResponder:onScrollShouldSetResponder,onScrollShouldSetResponderCapture:onScrollShouldSetResponderCapture,onSelectionChangeShouldSetResponder:onSelectionChangeShouldSetResponder,onSelectionChangeShouldSetResponderCapture:onSelectionChangeShouldSetResponderCapture,onStartShouldSetResponder:onStartShouldSetResponder,onStartShouldSetResponderCapture:onStartShouldSetResponderCapture});var supportedProps=pickProps(props);supportedProps.classList=classList;supportedProps.style=style;var platformMethodsRef=Object(_hooks_usePlatformMethods__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(supportedProps);var setRef=Object(_modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(hostRef,platformMethodsRef,forwardedRef);supportedProps.ref=setRef;return Object(_createElement__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('div',supportedProps);});View.displayName='View';var classes=_StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].create({view:{alignItems:'stretch',border:'0 solid black',boxSizing:'border-box',display:'flex',flexBasis:'auto',flexDirection:'column',flexShrink:0,margin:0,minHeight:0,minWidth:0,padding:0,position:'relative',zIndex:0}});var styles=_StyleSheet__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].create({inline:{display:'inline-flex'}});/* harmony default export */ __webpack_exports__["a"] = (View);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(5);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/ReactNativePropRegistry.js
var ReactNativePropRegistry = __webpack_require__(65);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js
var flattenStyle = __webpack_require__(64);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/StyleSheet.js
var absoluteFillObject={position:'absolute',left:0,right:0,top:0,bottom:0};var absoluteFill=ReactNativePropRegistry["a" /* default */].register(absoluteFillObject);var StyleSheet={absoluteFill:absoluteFill,absoluteFillObject:absoluteFillObject,compose:function compose(style1,style2){if(false){ var readableStyles, len; }if(style1&&style2){return[style1,style2];}else{return style1||style2;}},create:function create(styles){var result={};Object.keys(styles).forEach(function(key){if(false){ var interopValidate, validate; }var id=styles[key]&&ReactNativePropRegistry["a" /* default */].register(styles[key]);result[key]=id;});return result;},flatten:flattenStyle["a" /* default */],hairlineWidth:1};/* harmony default export */ var StyleSheet_StyleSheet = (StyleSheet);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/index.js
if(ExecutionEnvironment["canUseDOM"]&&window.__REACT_DEVTOOLS_GLOBAL_HOOK__){window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle=StyleSheet_StyleSheet.flatten;}/* harmony default export */ var exports_StyleSheet = __webpack_exports__["a"] = (StyleSheet_StyleSheet);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */

var ExecutionEnvironment = {
  canUseDOM: canUseDOM,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen,
  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};
module.exports = ExecutionEnvironment;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ generateNewAnimationId; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ shouldUseNativeDriver; });

// UNUSED EXPORTS: API, addWhitelistedStyleProp, addWhitelistedTransformProp, addWhitelistedInterpolationParam, validateStyles, validateTransform, validateInterpolation, generateNewNodeTag, assertNativeAnimatedModule, transformDataType

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/NativeEventEmitter/index.js
var NativeEventEmitter = __webpack_require__(84);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__(2);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/TurboModule/TurboModuleRegistry.js
function get(name){return null;}function getEnforcing(name){var module=get(name);invariant_default()(module!=null,"TurboModuleRegistry.getEnforcing(...): '"+name+"' could not be found. "+'Verify that a module by this name is registered in the native binary.');return module;}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/NativeAnimatedModule.js
/* harmony default export */ var NativeAnimatedModule = (get('NativeAnimatedModule'));
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/NativeAnimatedHelper.js
var __nativeAnimatedNodeTagCount=1;var __nativeAnimationIdCount=1;var nativeEventEmitter;var queueConnections=false;var queue=[];var API={enableQueue:function enableQueue(){queueConnections=true;},disableQueue:function disableQueue(){invariant_default()(NativeAnimatedModule,'Native animated module is not available');queueConnections=false;for(var q=0,l=queue.length;q<l;q++){var args=queue[q];NativeAnimatedModule.connectAnimatedNodes(args[0],args[1]);}queue.length=0;},createAnimatedNode:function createAnimatedNode(tag,config){invariant_default()(NativeAnimatedModule,'Native animated module is not available');NativeAnimatedModule.createAnimatedNode(tag,config);},startListeningToAnimatedNodeValue:function startListeningToAnimatedNodeValue(tag){invariant_default()(NativeAnimatedModule,'Native animated module is not available');NativeAnimatedModule.startListeningToAnimatedNodeValue(tag);},stopListeningToAnimatedNodeValue:function stopListeningToAnimatedNodeValue(tag){invariant_default()(NativeAnimatedModule,'Native animated module is not available');NativeAnimatedModule.stopListeningToAnimatedNodeValue(tag);},connectAnimatedNodes:function connectAnimatedNodes(parentTag,childTag){invariant_default()(NativeAnimatedModule,'Native animated module is not available');if(queueConnections){queue.push([parentTag,childTag]);return;}NativeAnimatedModule.connectAnimatedNodes(parentTag,childTag);},disconnectAnimatedNodes:function disconnectAnimatedNodes(parentTag,childTag){invariant_default()(NativeAnimatedModule,'Native animated module is not available');NativeAnimatedModule.disconnectAnimatedNodes(parentTag,childTag);},startAnimatingNode:function startAnimatingNode(animationId,nodeTag,config,endCallback){invariant_default()(NativeAnimatedModule,'Native animated module is not available');NativeAnimatedModule.startAnimatingNode(animationId,nodeTag,config,endCallback);},stopAnimation:function stopAnimation(animationId){invariant_default()(NativeAnimatedModule,'Native animated module is not available');NativeAnimatedModule.stopAnimation(animationId);},setAnimatedNodeValue:function setAnimatedNodeValue(nodeTag,value){invariant_default()(NativeAnimatedModule,'Native animated module is not available');NativeAnimatedModule.setAnimatedNodeValue(nodeTag,value);},setAnimatedNodeOffset:function setAnimatedNodeOffset(nodeTag,offset){invariant_default()(NativeAnimatedModule,'Native animated module is not available');NativeAnimatedModule.setAnimatedNodeOffset(nodeTag,offset);},flattenAnimatedNodeOffset:function flattenAnimatedNodeOffset(nodeTag){invariant_default()(NativeAnimatedModule,'Native animated module is not available');NativeAnimatedModule.flattenAnimatedNodeOffset(nodeTag);},extractAnimatedNodeOffset:function extractAnimatedNodeOffset(nodeTag){invariant_default()(NativeAnimatedModule,'Native animated module is not available');NativeAnimatedModule.extractAnimatedNodeOffset(nodeTag);},connectAnimatedNodeToView:function connectAnimatedNodeToView(nodeTag,viewTag){invariant_default()(NativeAnimatedModule,'Native animated module is not available');NativeAnimatedModule.connectAnimatedNodeToView(nodeTag,viewTag);},disconnectAnimatedNodeFromView:function disconnectAnimatedNodeFromView(nodeTag,viewTag){invariant_default()(NativeAnimatedModule,'Native animated module is not available');NativeAnimatedModule.disconnectAnimatedNodeFromView(nodeTag,viewTag);},dropAnimatedNode:function dropAnimatedNode(tag){invariant_default()(NativeAnimatedModule,'Native animated module is not available');NativeAnimatedModule.dropAnimatedNode(tag);},addAnimatedEventToView:function addAnimatedEventToView(viewTag,eventName,eventMapping){invariant_default()(NativeAnimatedModule,'Native animated module is not available');NativeAnimatedModule.addAnimatedEventToView(viewTag,eventName,eventMapping);},removeAnimatedEventFromView:function removeAnimatedEventFromView(viewTag,eventName,animatedNodeTag){invariant_default()(NativeAnimatedModule,'Native animated module is not available');NativeAnimatedModule.removeAnimatedEventFromView(viewTag,eventName,animatedNodeTag);}};var STYLES_WHITELIST={opacity:true,transform:true,borderRadius:true,borderBottomEndRadius:true,borderBottomLeftRadius:true,borderBottomRightRadius:true,borderBottomStartRadius:true,borderTopEndRadius:true,borderTopLeftRadius:true,borderTopRightRadius:true,borderTopStartRadius:true,elevation:true,shadowOpacity:true,shadowRadius:true,scaleX:true,scaleY:true,translateX:true,translateY:true};var TRANSFORM_WHITELIST={translateX:true,translateY:true,scale:true,scaleX:true,scaleY:true,rotate:true,rotateX:true,rotateY:true,perspective:true};var SUPPORTED_INTERPOLATION_PARAMS={inputRange:true,outputRange:true,extrapolate:true,extrapolateRight:true,extrapolateLeft:true};function addWhitelistedStyleProp(prop){STYLES_WHITELIST[prop]=true;}function addWhitelistedTransformProp(prop){TRANSFORM_WHITELIST[prop]=true;}function addWhitelistedInterpolationParam(param){SUPPORTED_INTERPOLATION_PARAMS[param]=true;}function validateTransform(configs){configs.forEach(function(config){if(!TRANSFORM_WHITELIST.hasOwnProperty(config.property)){throw new Error("Property '"+config.property+"' is not supported by native animated module");}});}function validateStyles(styles){for(var _key in styles){if(!STYLES_WHITELIST.hasOwnProperty(_key)){throw new Error("Style property '"+_key+"' is not supported by native animated module");}}}function validateInterpolation(config){for(var _key2 in config){if(!SUPPORTED_INTERPOLATION_PARAMS.hasOwnProperty(_key2)){throw new Error("Interpolation property '"+_key2+"' is not supported by native animated module");}}}function generateNewNodeTag(){return __nativeAnimatedNodeTagCount++;}function generateNewAnimationId(){return __nativeAnimationIdCount++;}function assertNativeAnimatedModule(){invariant_default()(NativeAnimatedModule,'Native animated module is not available');}function shouldUseNativeDriver(config){if(config.useNativeDriver===true&&!NativeAnimatedModule){return false;}return config.useNativeDriver||false;}function transformDataType(value){if(typeof value!=='string'){return value;}if(/deg$/.test(value)){var degrees=parseFloat(value)||0;var radians=degrees*Math.PI/180.0;return radians;}else{return value;}}var NativeAnimatedHelper={API:API,addWhitelistedStyleProp:addWhitelistedStyleProp,addWhitelistedTransformProp:addWhitelistedTransformProp,addWhitelistedInterpolationParam:addWhitelistedInterpolationParam,validateStyles:validateStyles,validateTransform:validateTransform,validateInterpolation:validateInterpolation,generateNewNodeTag:generateNewNodeTag,generateNewAnimationId:generateNewAnimationId,assertNativeAnimatedModule:assertNativeAnimatedModule,shouldUseNativeDriver:shouldUseNativeDriver,transformDataType:transformDataType,get nativeEventEmitter(){if(!nativeEventEmitter){nativeEventEmitter=new NativeEventEmitter["a" /* default */](NativeAnimatedModule);}return nativeEventEmitter;}};/* harmony default export */ var Animated_NativeAnimatedHelper = __webpack_exports__["a"] = (NativeAnimatedHelper);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(138);

var iterableToArray = __webpack_require__(139);

var unsupportedIterableToArray = __webpack_require__(108);

var nonIterableSpread = __webpack_require__(140);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__);
var NativeAnimatedAPI=_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].API;var _uniqueId=1;var AnimatedNode=function(){var _proto=AnimatedNode.prototype;_proto.__attach=function __attach(){};_proto.__detach=function __detach(){if(this.__isNative&&this.__nativeTag!=null){_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].API.dropAnimatedNode(this.__nativeTag);this.__nativeTag=undefined;}};_proto.__getValue=function __getValue(){};_proto.__getAnimatedValue=function __getAnimatedValue(){return this.__getValue();};_proto.__addChild=function __addChild(child){};_proto.__removeChild=function __removeChild(child){};_proto.__getChildren=function __getChildren(){return[];};function AnimatedNode(){this._listeners={};}_proto.__makeNative=function __makeNative(){if(!this.__isNative){throw new Error('This node cannot be made a "native" animated node');}if(this.hasListeners()){this._startListeningToNativeValueUpdates();}};_proto.addListener=function addListener(callback){var id=String(_uniqueId++);this._listeners[id]=callback;if(this.__isNative){this._startListeningToNativeValueUpdates();}return id;};_proto.removeListener=function removeListener(id){delete this._listeners[id];if(this.__isNative&&!this.hasListeners()){this._stopListeningForNativeValueUpdates();}};_proto.removeAllListeners=function removeAllListeners(){this._listeners={};if(this.__isNative){this._stopListeningForNativeValueUpdates();}};_proto.hasListeners=function hasListeners(){return!!Object.keys(this._listeners).length;};_proto._startListeningToNativeValueUpdates=function _startListeningToNativeValueUpdates(){var _this=this;if(this.__nativeAnimatedValueListener&&!this.__shouldUpdateListenersForNewNativeTag){return;}if(this.__shouldUpdateListenersForNewNativeTag){this.__shouldUpdateListenersForNewNativeTag=false;this._stopListeningForNativeValueUpdates();}NativeAnimatedAPI.startListeningToAnimatedNodeValue(this.__getNativeTag());this.__nativeAnimatedValueListener=_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].nativeEventEmitter.addListener('onAnimatedValueUpdate',function(data){if(data.tag!==_this.__getNativeTag()){return;}_this._onAnimatedValueUpdateReceived(data.value);});};_proto._onAnimatedValueUpdateReceived=function _onAnimatedValueUpdateReceived(value){this.__callListeners(value);};_proto.__callListeners=function __callListeners(value){for(var _key in this._listeners){this._listeners[_key]({value:value});}};_proto._stopListeningForNativeValueUpdates=function _stopListeningForNativeValueUpdates(){if(!this.__nativeAnimatedValueListener){return;}this.__nativeAnimatedValueListener.remove();this.__nativeAnimatedValueListener=null;NativeAnimatedAPI.stopListeningToAnimatedNodeValue(this.__getNativeTag());};_proto.__getNativeTag=function __getNativeTag(){_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].assertNativeAnimatedModule();fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default()(this.__isNative,'Attempt to get native tag from node not marked as "native"');if(this.__nativeTag==null){var nativeTag=_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].generateNewNodeTag();this.__nativeTag=nativeTag;_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].API.createAnimatedNode(nativeTag,this.__getNativeConfig());this.__shouldUpdateListenersForNewNativeTag=true;}return this.__nativeTag;};_proto.__getNativeConfig=function __getNativeConfig(){throw new Error('This JS animated node type cannot be used as native animated node');};_proto.toJSON=function toJSON(){return this.__getValue();};return AnimatedNode;}();/* harmony default export */ __webpack_exports__["a"] = (AnimatedNode);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedValue.js
var AnimatedValue = __webpack_require__(11);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/NativeAnimatedHelper.js + 2 modules
var NativeAnimatedHelper = __webpack_require__(6);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/findNodeHandle/index.js
var findNodeHandle = __webpack_require__(24);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__(2);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/AnimatedEvent.js
var shouldUseNativeDriver=NativeAnimatedHelper["a" /* default */].shouldUseNativeDriver;function attachNativeEvent(viewRef,eventName,argMapping){var eventMappings=[];var traverse=function traverse(value,path){if(value instanceof AnimatedValue["a" /* default */]){value.__makeNative();eventMappings.push({nativeEventPath:path,animatedValueTag:value.__getNativeTag()});}else if(typeof value==='object'){for(var _key in value){traverse(value[_key],path.concat(_key));}}};invariant_default()(argMapping[0]&&argMapping[0].nativeEvent,'Native driven events only support animated values contained inside `nativeEvent`.');traverse(argMapping[0].nativeEvent,[]);var viewTag=Object(findNodeHandle["a" /* default */])(viewRef);eventMappings.forEach(function(mapping){NativeAnimatedHelper["a" /* default */].API.addAnimatedEventToView(viewTag,eventName,mapping);});return{detach:function detach(){eventMappings.forEach(function(mapping){NativeAnimatedHelper["a" /* default */].API.removeAnimatedEventFromView(viewTag,eventName,mapping.animatedValueTag);});}};}var AnimatedEvent_AnimatedEvent=function(){function AnimatedEvent(argMapping,config){if(config===void 0){config={};}this._listeners=[];this._argMapping=argMapping;if(config.listener){this.__addListener(config.listener);}this._callListeners=this._callListeners.bind(this);this._attachedEvent=null;this.__isNative=shouldUseNativeDriver(config);if(false){}}var _proto=AnimatedEvent.prototype;_proto.__addListener=function __addListener(callback){this._listeners.push(callback);};_proto.__removeListener=function __removeListener(callback){this._listeners=this._listeners.filter(function(listener){return listener!==callback;});};_proto.__attach=function __attach(viewRef,eventName){invariant_default()(this.__isNative,'Only native driven events need to be attached.');this._attachedEvent=attachNativeEvent(viewRef,eventName,this._argMapping);};_proto.__detach=function __detach(viewTag,eventName){invariant_default()(this.__isNative,'Only native driven events need to be detached.');this._attachedEvent&&this._attachedEvent.detach();};_proto.__getHandler=function __getHandler(){var _this=this;if(this.__isNative){return this._callListeners;}return function(){for(var _len=arguments.length,args=new Array(_len),_key2=0;_key2<_len;_key2++){args[_key2]=arguments[_key2];}var traverse=function traverse(recMapping,recEvt,key){if(typeof recEvt==='number'&&recMapping instanceof AnimatedValue["a" /* default */]){recMapping.setValue(recEvt);}else if(typeof recMapping==='object'){for(var mappingKey in recMapping){traverse(recMapping[mappingKey],recEvt[mappingKey],mappingKey);}}};if(!_this.__isNative){_this._argMapping.forEach(function(mapping,idx){traverse(mapping,args[idx],'arg'+idx);});}_this._callListeners.apply(_this,args);};};_proto._callListeners=function _callListeners(){for(var _len2=arguments.length,args=new Array(_len2),_key3=0;_key3<_len2;_key3++){args[_key3]=arguments[_key3];}this._listeners.forEach(function(listener){return listener.apply(void 0,args);});};_proto._validateMapping=function _validateMapping(){var traverse=function traverse(recMapping,recEvt,key){if(typeof recEvt==='number'){invariant_default()(recMapping instanceof AnimatedValue["a" /* default */],'Bad mapping of type '+typeof recMapping+' for key '+key+', event value must map to AnimatedValue');return;}invariant_default()(typeof recMapping==='object','Bad mapping of type '+typeof recMapping+' for key '+key);invariant_default()(typeof recEvt==='object','Bad event of type '+typeof recEvt+' for key '+key);for(var mappingKey in recMapping){traverse(recMapping[mappingKey],recEvt[mappingKey],mappingKey);}};};return AnimatedEvent;}();/* harmony default export */ var Animated_AnimatedEvent = ({AnimatedEvent:AnimatedEvent_AnimatedEvent,attachNativeEvent:attachNativeEvent});
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedInterpolation.js
var AnimatedInterpolation = __webpack_require__(21);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedWithChildren.js
var AnimatedWithChildren = __webpack_require__(13);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedAddition.js
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var AnimatedAddition_AnimatedAddition=function(_AnimatedWithChildren){_inheritsLoose(AnimatedAddition,_AnimatedWithChildren);function AnimatedAddition(a,b){var _this;_this=_AnimatedWithChildren.call(this)||this;_this._a=typeof a==='number'?new AnimatedValue["a" /* default */](a):a;_this._b=typeof b==='number'?new AnimatedValue["a" /* default */](b):b;return _this;}var _proto=AnimatedAddition.prototype;_proto.__makeNative=function __makeNative(){this._a.__makeNative();this._b.__makeNative();_AnimatedWithChildren.prototype.__makeNative.call(this);};_proto.__getValue=function __getValue(){return this._a.__getValue()+this._b.__getValue();};_proto.interpolate=function interpolate(config){return new AnimatedInterpolation["a" /* default */](this,config);};_proto.__attach=function __attach(){this._a.__addChild(this);this._b.__addChild(this);};_proto.__detach=function __detach(){this._a.__removeChild(this);this._b.__removeChild(this);_AnimatedWithChildren.prototype.__detach.call(this);};_proto.__getNativeConfig=function __getNativeConfig(){return{type:'addition',input:[this._a.__getNativeTag(),this._b.__getNativeTag()]};};return AnimatedAddition;}(AnimatedWithChildren["a" /* default */]);/* harmony default export */ var nodes_AnimatedAddition = (AnimatedAddition_AnimatedAddition);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedDiffClamp.js
function AnimatedDiffClamp_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var AnimatedDiffClamp_AnimatedDiffClamp=function(_AnimatedWithChildren){AnimatedDiffClamp_inheritsLoose(AnimatedDiffClamp,_AnimatedWithChildren);function AnimatedDiffClamp(a,min,max){var _this;_this=_AnimatedWithChildren.call(this)||this;_this._a=a;_this._min=min;_this._max=max;_this._value=_this._lastValue=_this._a.__getValue();return _this;}var _proto=AnimatedDiffClamp.prototype;_proto.__makeNative=function __makeNative(){this._a.__makeNative();_AnimatedWithChildren.prototype.__makeNative.call(this);};_proto.interpolate=function interpolate(config){return new AnimatedInterpolation["a" /* default */](this,config);};_proto.__getValue=function __getValue(){var value=this._a.__getValue();var diff=value-this._lastValue;this._lastValue=value;this._value=Math.min(Math.max(this._value+diff,this._min),this._max);return this._value;};_proto.__attach=function __attach(){this._a.__addChild(this);};_proto.__detach=function __detach(){this._a.__removeChild(this);_AnimatedWithChildren.prototype.__detach.call(this);};_proto.__getNativeConfig=function __getNativeConfig(){return{type:'diffclamp',input:this._a.__getNativeTag(),min:this._min,max:this._max};};return AnimatedDiffClamp;}(AnimatedWithChildren["a" /* default */]);/* harmony default export */ var nodes_AnimatedDiffClamp = (AnimatedDiffClamp_AnimatedDiffClamp);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedDivision.js
function AnimatedDivision_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var AnimatedDivision_AnimatedDivision=function(_AnimatedWithChildren){AnimatedDivision_inheritsLoose(AnimatedDivision,_AnimatedWithChildren);function AnimatedDivision(a,b){var _this;_this=_AnimatedWithChildren.call(this)||this;_this._a=typeof a==='number'?new AnimatedValue["a" /* default */](a):a;_this._b=typeof b==='number'?new AnimatedValue["a" /* default */](b):b;return _this;}var _proto=AnimatedDivision.prototype;_proto.__makeNative=function __makeNative(){this._a.__makeNative();this._b.__makeNative();_AnimatedWithChildren.prototype.__makeNative.call(this);};_proto.__getValue=function __getValue(){var a=this._a.__getValue();var b=this._b.__getValue();if(b===0){console.error('Detected division by zero in AnimatedDivision');}return a/b;};_proto.interpolate=function interpolate(config){return new AnimatedInterpolation["a" /* default */](this,config);};_proto.__attach=function __attach(){this._a.__addChild(this);this._b.__addChild(this);};_proto.__detach=function __detach(){this._a.__removeChild(this);this._b.__removeChild(this);_AnimatedWithChildren.prototype.__detach.call(this);};_proto.__getNativeConfig=function __getNativeConfig(){return{type:'division',input:[this._a.__getNativeTag(),this._b.__getNativeTag()]};};return AnimatedDivision;}(AnimatedWithChildren["a" /* default */]);/* harmony default export */ var nodes_AnimatedDivision = (AnimatedDivision_AnimatedDivision);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedModulo.js
function AnimatedModulo_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var AnimatedModulo_AnimatedModulo=function(_AnimatedWithChildren){AnimatedModulo_inheritsLoose(AnimatedModulo,_AnimatedWithChildren);function AnimatedModulo(a,modulus){var _this;_this=_AnimatedWithChildren.call(this)||this;_this._a=a;_this._modulus=modulus;return _this;}var _proto=AnimatedModulo.prototype;_proto.__makeNative=function __makeNative(){this._a.__makeNative();_AnimatedWithChildren.prototype.__makeNative.call(this);};_proto.__getValue=function __getValue(){return(this._a.__getValue()%this._modulus+this._modulus)%this._modulus;};_proto.interpolate=function interpolate(config){return new AnimatedInterpolation["a" /* default */](this,config);};_proto.__attach=function __attach(){this._a.__addChild(this);};_proto.__detach=function __detach(){this._a.__removeChild(this);_AnimatedWithChildren.prototype.__detach.call(this);};_proto.__getNativeConfig=function __getNativeConfig(){return{type:'modulus',input:this._a.__getNativeTag(),modulus:this._modulus};};return AnimatedModulo;}(AnimatedWithChildren["a" /* default */]);/* harmony default export */ var nodes_AnimatedModulo = (AnimatedModulo_AnimatedModulo);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedMultiplication.js
function AnimatedMultiplication_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var AnimatedMultiplication_AnimatedMultiplication=function(_AnimatedWithChildren){AnimatedMultiplication_inheritsLoose(AnimatedMultiplication,_AnimatedWithChildren);function AnimatedMultiplication(a,b){var _this;_this=_AnimatedWithChildren.call(this)||this;_this._a=typeof a==='number'?new AnimatedValue["a" /* default */](a):a;_this._b=typeof b==='number'?new AnimatedValue["a" /* default */](b):b;return _this;}var _proto=AnimatedMultiplication.prototype;_proto.__makeNative=function __makeNative(){this._a.__makeNative();this._b.__makeNative();_AnimatedWithChildren.prototype.__makeNative.call(this);};_proto.__getValue=function __getValue(){return this._a.__getValue()*this._b.__getValue();};_proto.interpolate=function interpolate(config){return new AnimatedInterpolation["a" /* default */](this,config);};_proto.__attach=function __attach(){this._a.__addChild(this);this._b.__addChild(this);};_proto.__detach=function __detach(){this._a.__removeChild(this);this._b.__removeChild(this);_AnimatedWithChildren.prototype.__detach.call(this);};_proto.__getNativeConfig=function __getNativeConfig(){return{type:'multiplication',input:[this._a.__getNativeTag(),this._b.__getNativeTag()]};};return AnimatedMultiplication;}(AnimatedWithChildren["a" /* default */]);/* harmony default export */ var nodes_AnimatedMultiplication = (AnimatedMultiplication_AnimatedMultiplication);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedNode.js
var AnimatedNode = __webpack_require__(8);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedTransform.js
function AnimatedTransform_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var AnimatedTransform_AnimatedTransform=function(_AnimatedWithChildren){AnimatedTransform_inheritsLoose(AnimatedTransform,_AnimatedWithChildren);function AnimatedTransform(transforms){var _this;_this=_AnimatedWithChildren.call(this)||this;_this._transforms=transforms;return _this;}var _proto=AnimatedTransform.prototype;_proto.__makeNative=function __makeNative(){_AnimatedWithChildren.prototype.__makeNative.call(this);this._transforms.forEach(function(transform){for(var key in transform){var value=transform[key];if(value instanceof AnimatedNode["a" /* default */]){value.__makeNative();}}});};_proto.__getValue=function __getValue(){return this._transforms.map(function(transform){var result={};for(var key in transform){var value=transform[key];if(value instanceof AnimatedNode["a" /* default */]){result[key]=value.__getValue();}else{result[key]=value;}}return result;});};_proto.__getAnimatedValue=function __getAnimatedValue(){return this._transforms.map(function(transform){var result={};for(var key in transform){var value=transform[key];if(value instanceof AnimatedNode["a" /* default */]){result[key]=value.__getAnimatedValue();}else{result[key]=value;}}return result;});};_proto.__attach=function __attach(){var _this2=this;this._transforms.forEach(function(transform){for(var key in transform){var value=transform[key];if(value instanceof AnimatedNode["a" /* default */]){value.__addChild(_this2);}}});};_proto.__detach=function __detach(){var _this3=this;this._transforms.forEach(function(transform){for(var key in transform){var value=transform[key];if(value instanceof AnimatedNode["a" /* default */]){value.__removeChild(_this3);}}});_AnimatedWithChildren.prototype.__detach.call(this);};_proto.__getNativeConfig=function __getNativeConfig(){var transConfigs=[];this._transforms.forEach(function(transform){for(var key in transform){var value=transform[key];if(value instanceof AnimatedNode["a" /* default */]){transConfigs.push({type:'animated',property:key,nodeTag:value.__getNativeTag()});}else{transConfigs.push({type:'static',property:key,value:value});}}});NativeAnimatedHelper["a" /* default */].validateTransform(transConfigs);return{type:'transform',transforms:transConfigs};};return AnimatedTransform;}(AnimatedWithChildren["a" /* default */]);/* harmony default export */ var nodes_AnimatedTransform = (AnimatedTransform_AnimatedTransform);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/index.js + 1 modules
var StyleSheet = __webpack_require__(4);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedStyle.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function AnimatedStyle_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var flattenStyle=StyleSheet["a" /* default */].flatten;var AnimatedStyle_AnimatedStyle=function(_AnimatedWithChildren){AnimatedStyle_inheritsLoose(AnimatedStyle,_AnimatedWithChildren);function AnimatedStyle(style){var _this;_this=_AnimatedWithChildren.call(this)||this;style=flattenStyle(style)||{};if(style.transform){style=_objectSpread({},style,{transform:new nodes_AnimatedTransform(style.transform)});}_this._style=style;return _this;}var _proto=AnimatedStyle.prototype;_proto._walkStyleAndGetValues=function _walkStyleAndGetValues(style){var updatedStyle={};for(var key in style){var value=style[key];if(value instanceof AnimatedNode["a" /* default */]){if(!value.__isNative){updatedStyle[key]=value.__getValue();}}else if(value&&!Array.isArray(value)&&typeof value==='object'){updatedStyle[key]=this._walkStyleAndGetValues(value);}else{updatedStyle[key]=value;}}return updatedStyle;};_proto.__getValue=function __getValue(){return this._walkStyleAndGetValues(this._style);};_proto._walkStyleAndGetAnimatedValues=function _walkStyleAndGetAnimatedValues(style){var updatedStyle={};for(var key in style){var value=style[key];if(value instanceof AnimatedNode["a" /* default */]){updatedStyle[key]=value.__getAnimatedValue();}else if(value&&!Array.isArray(value)&&typeof value==='object'){updatedStyle[key]=this._walkStyleAndGetAnimatedValues(value);}}return updatedStyle;};_proto.__getAnimatedValue=function __getAnimatedValue(){return this._walkStyleAndGetAnimatedValues(this._style);};_proto.__attach=function __attach(){for(var key in this._style){var value=this._style[key];if(value instanceof AnimatedNode["a" /* default */]){value.__addChild(this);}}};_proto.__detach=function __detach(){for(var key in this._style){var value=this._style[key];if(value instanceof AnimatedNode["a" /* default */]){value.__removeChild(this);}}_AnimatedWithChildren.prototype.__detach.call(this);};_proto.__makeNative=function __makeNative(){for(var key in this._style){var value=this._style[key];if(value instanceof AnimatedNode["a" /* default */]){value.__makeNative();}}_AnimatedWithChildren.prototype.__makeNative.call(this);};_proto.__getNativeConfig=function __getNativeConfig(){var styleConfig={};for(var styleKey in this._style){if(this._style[styleKey]instanceof AnimatedNode["a" /* default */]){var style=this._style[styleKey];style.__makeNative();styleConfig[styleKey]=style.__getNativeTag();}}NativeAnimatedHelper["a" /* default */].validateStyles(styleConfig);return{type:'style',style:styleConfig};};return AnimatedStyle;}(AnimatedWithChildren["a" /* default */]);/* harmony default export */ var nodes_AnimatedStyle = (AnimatedStyle_AnimatedStyle);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedProps.js
function AnimatedProps_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function AnimatedProps_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){AnimatedProps_ownKeys(Object(source),true).forEach(function(key){AnimatedProps_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{AnimatedProps_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function AnimatedProps_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function AnimatedProps_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var AnimatedProps_AnimatedProps=function(_AnimatedNode){AnimatedProps_inheritsLoose(AnimatedProps,_AnimatedNode);function AnimatedProps(props,callback){var _this;_this=_AnimatedNode.call(this)||this;if(props.style){props=AnimatedProps_objectSpread({},props,{style:new nodes_AnimatedStyle(props.style)});}_this._props=props;_this._callback=callback;_this.__attach();return _this;}var _proto=AnimatedProps.prototype;_proto.__getValue=function __getValue(){var props={};for(var key in this._props){var value=this._props[key];if(value instanceof AnimatedNode["a" /* default */]){if(!value.__isNative||value instanceof nodes_AnimatedStyle){props[key]=value.__getValue();}}else if(value instanceof AnimatedEvent_AnimatedEvent){props[key]=value.__getHandler();}else{props[key]=value;}}return props;};_proto.__getAnimatedValue=function __getAnimatedValue(){var props={};for(var key in this._props){var value=this._props[key];if(value instanceof AnimatedNode["a" /* default */]){props[key]=value.__getAnimatedValue();}}return props;};_proto.__attach=function __attach(){for(var key in this._props){var value=this._props[key];if(value instanceof AnimatedNode["a" /* default */]){value.__addChild(this);}}};_proto.__detach=function __detach(){if(this.__isNative&&this._animatedView){this.__disconnectAnimatedView();}for(var key in this._props){var value=this._props[key];if(value instanceof AnimatedNode["a" /* default */]){value.__removeChild(this);}}_AnimatedNode.prototype.__detach.call(this);};_proto.update=function update(){this._callback();};_proto.__makeNative=function __makeNative(){if(!this.__isNative){this.__isNative=true;for(var key in this._props){var value=this._props[key];if(value instanceof AnimatedNode["a" /* default */]){value.__makeNative();}}if(this._animatedView){this.__connectAnimatedView();}}};_proto.setNativeView=function setNativeView(animatedView){if(this._animatedView===animatedView){return;}this._animatedView=animatedView;if(this.__isNative){this.__connectAnimatedView();}};_proto.__connectAnimatedView=function __connectAnimatedView(){invariant_default()(this.__isNative,'Expected node to be marked as "native"');var nativeViewTag=Object(findNodeHandle["a" /* default */])(this._animatedView);invariant_default()(nativeViewTag!=null,'Unable to locate attached view in the native tree');NativeAnimatedHelper["a" /* default */].API.connectAnimatedNodeToView(this.__getNativeTag(),nativeViewTag);};_proto.__disconnectAnimatedView=function __disconnectAnimatedView(){invariant_default()(this.__isNative,'Expected node to be marked as "native"');var nativeViewTag=Object(findNodeHandle["a" /* default */])(this._animatedView);invariant_default()(nativeViewTag!=null,'Unable to locate attached view in the native tree');NativeAnimatedHelper["a" /* default */].API.disconnectAnimatedNodeFromView(this.__getNativeTag(),nativeViewTag);};_proto.__getNativeConfig=function __getNativeConfig(){var propsConfig={};for(var propKey in this._props){var value=this._props[propKey];if(value instanceof AnimatedNode["a" /* default */]){value.__makeNative();propsConfig[propKey]=value.__getNativeTag();}}return{type:'props',props:propsConfig};};return AnimatedProps;}(AnimatedNode["a" /* default */]);/* harmony default export */ var nodes_AnimatedProps = (AnimatedProps_AnimatedProps);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedSubtraction.js
function AnimatedSubtraction_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var AnimatedSubtraction_AnimatedSubtraction=function(_AnimatedWithChildren){AnimatedSubtraction_inheritsLoose(AnimatedSubtraction,_AnimatedWithChildren);function AnimatedSubtraction(a,b){var _this;_this=_AnimatedWithChildren.call(this)||this;_this._a=typeof a==='number'?new AnimatedValue["a" /* default */](a):a;_this._b=typeof b==='number'?new AnimatedValue["a" /* default */](b):b;return _this;}var _proto=AnimatedSubtraction.prototype;_proto.__makeNative=function __makeNative(){this._a.__makeNative();this._b.__makeNative();_AnimatedWithChildren.prototype.__makeNative.call(this);};_proto.__getValue=function __getValue(){return this._a.__getValue()-this._b.__getValue();};_proto.interpolate=function interpolate(config){return new AnimatedInterpolation["a" /* default */](this,config);};_proto.__attach=function __attach(){this._a.__addChild(this);this._b.__addChild(this);};_proto.__detach=function __detach(){this._a.__removeChild(this);this._b.__removeChild(this);_AnimatedWithChildren.prototype.__detach.call(this);};_proto.__getNativeConfig=function __getNativeConfig(){return{type:'subtraction',input:[this._a.__getNativeTag(),this._b.__getNativeTag()]};};return AnimatedSubtraction;}(AnimatedWithChildren["a" /* default */]);/* harmony default export */ var nodes_AnimatedSubtraction = (AnimatedSubtraction_AnimatedSubtraction);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedTracking.js
function AnimatedTracking_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function AnimatedTracking_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){AnimatedTracking_ownKeys(Object(source),true).forEach(function(key){AnimatedTracking_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{AnimatedTracking_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function AnimatedTracking_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function AnimatedTracking_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var AnimatedTracking_AnimatedTracking=function(_AnimatedNode){AnimatedTracking_inheritsLoose(AnimatedTracking,_AnimatedNode);function AnimatedTracking(value,parent,animationClass,animationConfig,callback){var _this;_this=_AnimatedNode.call(this)||this;_this._value=value;_this._parent=parent;_this._animationClass=animationClass;_this._animationConfig=animationConfig;_this._useNativeDriver=Object(NativeAnimatedHelper["c" /* shouldUseNativeDriver */])(animationConfig);_this._callback=callback;_this.__attach();return _this;}var _proto=AnimatedTracking.prototype;_proto.__makeNative=function __makeNative(){this.__isNative=true;this._parent.__makeNative();_AnimatedNode.prototype.__makeNative.call(this);this._value.__makeNative();};_proto.__getValue=function __getValue(){return this._parent.__getValue();};_proto.__attach=function __attach(){this._parent.__addChild(this);if(this._useNativeDriver){this.__makeNative();}};_proto.__detach=function __detach(){this._parent.__removeChild(this);_AnimatedNode.prototype.__detach.call(this);};_proto.update=function update(){this._value.animate(new this._animationClass(AnimatedTracking_objectSpread({},this._animationConfig,{toValue:this._animationConfig.toValue.__getValue()})),this._callback);};_proto.__getNativeConfig=function __getNativeConfig(){var animation=new this._animationClass(AnimatedTracking_objectSpread({},this._animationConfig,{toValue:undefined}));var animationConfig=animation.__getNativeAnimationConfig();return{type:'tracking',animationId:Object(NativeAnimatedHelper["b" /* generateNewAnimationId */])(),animationConfig:animationConfig,toValue:this._parent.__getNativeTag(),value:this._value.__getNativeTag()};};return AnimatedTracking;}(AnimatedNode["a" /* default */]);/* harmony default export */ var nodes_AnimatedTracking = (AnimatedTracking_AnimatedTracking);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedValueXY.js
var AnimatedValueXY = __webpack_require__(62);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/animations/DecayAnimation.js
var DecayAnimation = __webpack_require__(128);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/animations/SpringAnimation.js
var SpringAnimation = __webpack_require__(102);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/animations/TimingAnimation.js
var TimingAnimation = __webpack_require__(104);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/mergeRefs/index.js
var mergeRefs = __webpack_require__(87);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/createAnimatedComponent.js
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function createAnimatedComponent_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function createAnimatedComponent(Component,defaultProps){invariant_default()(typeof Component!=='function'||Component.prototype&&Component.prototype.isReactComponent,'`createAnimatedComponent` does not support stateless functional components; '+'use a class component instead.');var AnimatedComponent=function(_React$Component){createAnimatedComponent_inheritsLoose(AnimatedComponent,_React$Component);function AnimatedComponent(props){var _this;_this=_React$Component.call(this,props)||this;_this._invokeAnimatedPropsCallbackOnMount=false;_this._eventDetachers=[];_this._animatedPropsCallback=function(){if(_this._component==null){_this._invokeAnimatedPropsCallbackOnMount=true;}else if(AnimatedComponent.__skipSetNativeProps_FOR_TESTS_ONLY||typeof _this._component.setNativeProps!=='function'){_this.forceUpdate();}else if(!_this._propsAnimated.__isNative){_this._component.setNativeProps(_this._propsAnimated.__getAnimatedValue());}else{throw new Error('Attempting to run JS driven animation on animated '+'node that has been moved to "native" earlier by starting an '+'animation with `useNativeDriver: true`');}};_this._setComponentRef=Object(mergeRefs["a" /* default */])(_this.props.forwardedRef,function(ref){_this._prevComponent=_this._component;_this._component=ref;if(ref!=null&&ref.getNode==null){ref.getNode=function(){var _ref$constructor$name;console.warn('%s: Calling `getNode()` on the ref of an Animated component '+'is no longer necessary. You can now directly use the ref '+'instead. This method will be removed in a future release.',(_ref$constructor$name=ref.constructor.name)!==null&&_ref$constructor$name!==void 0?_ref$constructor$name:'<<anonymous>>');return ref;};}});return _this;}var _proto=AnimatedComponent.prototype;_proto.componentWillUnmount=function componentWillUnmount(){this._propsAnimated&&this._propsAnimated.__detach();this._detachNativeEvents();};_proto.UNSAFE_componentWillMount=function UNSAFE_componentWillMount(){this._attachProps(this.props);};_proto.componentDidMount=function componentDidMount(){if(this._invokeAnimatedPropsCallbackOnMount){this._invokeAnimatedPropsCallbackOnMount=false;this._animatedPropsCallback();}this._propsAnimated.setNativeView(this._component);this._attachNativeEvents();};_proto._attachNativeEvents=function _attachNativeEvents(){var _this2=this;var scrollableNode=this._component&&this._component.getScrollableNode?this._component.getScrollableNode():this._component;var _loop=function _loop(key){var prop=_this2.props[key];if(prop instanceof AnimatedEvent_AnimatedEvent&&prop.__isNative){prop.__attach(scrollableNode,key);_this2._eventDetachers.push(function(){return prop.__detach(scrollableNode,key);});}};for(var key in this.props){_loop(key);}};_proto._detachNativeEvents=function _detachNativeEvents(){this._eventDetachers.forEach(function(remove){return remove();});this._eventDetachers=[];};_proto._attachProps=function _attachProps(nextProps){var oldPropsAnimated=this._propsAnimated;this._propsAnimated=new nodes_AnimatedProps(nextProps,this._animatedPropsCallback);oldPropsAnimated&&oldPropsAnimated.__detach();};_proto.UNSAFE_componentWillReceiveProps=function UNSAFE_componentWillReceiveProps(newProps){this._attachProps(newProps);};_proto.componentDidUpdate=function componentDidUpdate(prevProps){if(this._component!==this._prevComponent){this._propsAnimated.setNativeView(this._component);}if(this._component!==this._prevComponent||prevProps!==this.props){this._detachNativeEvents();this._attachNativeEvents();}};_proto.render=function render(){var props=this._propsAnimated.__getValue();return react_default.a.createElement(Component,_extends({},defaultProps,props,{ref:this._setComponentRef,collapsable:false}));};return AnimatedComponent;}(react_default.a.Component);AnimatedComponent.__skipSetNativeProps_FOR_TESTS_ONLY=false;var propTypes=Component.propTypes;return react_default.a.forwardRef(function AnimatedComponentWrapper(props,ref){return react_default.a.createElement(AnimatedComponent,_extends({},props,ref==null?null:{forwardedRef:ref}));});}/* harmony default export */ var Animated_createAnimatedComponent = (createAnimatedComponent);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Animated/AnimatedImplementation.js
function AnimatedImplementation_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function AnimatedImplementation_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){AnimatedImplementation_ownKeys(Object(source),true).forEach(function(key){AnimatedImplementation_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{AnimatedImplementation_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function AnimatedImplementation_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var AnimatedImplementation_add=function add(a,b){return new nodes_AnimatedAddition(a,b);};var AnimatedImplementation_subtract=function subtract(a,b){return new nodes_AnimatedSubtraction(a,b);};var AnimatedImplementation_divide=function divide(a,b){return new nodes_AnimatedDivision(a,b);};var AnimatedImplementation_multiply=function multiply(a,b){return new nodes_AnimatedMultiplication(a,b);};var AnimatedImplementation_modulo=function modulo(a,modulus){return new nodes_AnimatedModulo(a,modulus);};var AnimatedImplementation_diffClamp=function diffClamp(a,min,max){return new nodes_AnimatedDiffClamp(a,min,max);};var _combineCallbacks=function _combineCallbacks(callback,config){if(callback&&config.onComplete){return function(){config.onComplete&&config.onComplete.apply(config,arguments);callback&&callback.apply(void 0,arguments);};}else{return callback||config.onComplete;}};var AnimatedImplementation_maybeVectorAnim=function maybeVectorAnim(value,config,anim){if(value instanceof AnimatedValueXY["a" /* default */]){var configX=AnimatedImplementation_objectSpread({},config);var configY=AnimatedImplementation_objectSpread({},config);for(var key in config){var _config$key=config[key],x=_config$key.x,y=_config$key.y;if(x!==undefined&&y!==undefined){configX[key]=x;configY[key]=y;}}var aX=anim(value.x,configX);var aY=anim(value.y,configY);return parallel([aX,aY],{stopTogether:false});}return null;};var AnimatedImplementation_spring=function spring(value,config){var _start=function start(animatedValue,configuration,callback){callback=_combineCallbacks(callback,configuration);var singleValue=animatedValue;var singleConfig=configuration;singleValue.stopTracking();if(configuration.toValue instanceof AnimatedNode["a" /* default */]){singleValue.track(new nodes_AnimatedTracking(singleValue,configuration.toValue,SpringAnimation["a" /* default */],singleConfig,callback));}else{singleValue.animate(new SpringAnimation["a" /* default */](singleConfig),callback);}};return AnimatedImplementation_maybeVectorAnim(value,config,spring)||{start:function start(callback){_start(value,config,callback);},stop:function stop(){value.stopAnimation();},reset:function reset(){value.resetAnimation();},_startNativeLoop:function _startNativeLoop(iterations){var singleConfig=AnimatedImplementation_objectSpread({},config,{iterations:iterations});_start(value,singleConfig);},_isUsingNativeDriver:function _isUsingNativeDriver(){return config.useNativeDriver||false;}};};var AnimatedImplementation_timing=function timing(value,config){var _start2=function start(animatedValue,configuration,callback){callback=_combineCallbacks(callback,configuration);var singleValue=animatedValue;var singleConfig=configuration;singleValue.stopTracking();if(configuration.toValue instanceof AnimatedNode["a" /* default */]){singleValue.track(new nodes_AnimatedTracking(singleValue,configuration.toValue,TimingAnimation["a" /* default */],singleConfig,callback));}else{singleValue.animate(new TimingAnimation["a" /* default */](singleConfig),callback);}};return AnimatedImplementation_maybeVectorAnim(value,config,timing)||{start:function start(callback){_start2(value,config,callback);},stop:function stop(){value.stopAnimation();},reset:function reset(){value.resetAnimation();},_startNativeLoop:function _startNativeLoop(iterations){var singleConfig=AnimatedImplementation_objectSpread({},config,{iterations:iterations});_start2(value,singleConfig);},_isUsingNativeDriver:function _isUsingNativeDriver(){return config.useNativeDriver||false;}};};var AnimatedImplementation_decay=function decay(value,config){var _start3=function start(animatedValue,configuration,callback){callback=_combineCallbacks(callback,configuration);var singleValue=animatedValue;var singleConfig=configuration;singleValue.stopTracking();singleValue.animate(new DecayAnimation["a" /* default */](singleConfig),callback);};return AnimatedImplementation_maybeVectorAnim(value,config,decay)||{start:function start(callback){_start3(value,config,callback);},stop:function stop(){value.stopAnimation();},reset:function reset(){value.resetAnimation();},_startNativeLoop:function _startNativeLoop(iterations){var singleConfig=AnimatedImplementation_objectSpread({},config,{iterations:iterations});_start3(value,singleConfig);},_isUsingNativeDriver:function _isUsingNativeDriver(){return config.useNativeDriver||false;}};};var sequence=function sequence(animations){var current=0;return{start:function start(callback){var onComplete=function onComplete(result){if(!result.finished){callback&&callback(result);return;}current++;if(current===animations.length){callback&&callback(result);return;}animations[current].start(onComplete);};if(animations.length===0){callback&&callback({finished:true});}else{animations[current].start(onComplete);}},stop:function stop(){if(current<animations.length){animations[current].stop();}},reset:function reset(){animations.forEach(function(animation,idx){if(idx<=current){animation.reset();}});current=0;},_startNativeLoop:function _startNativeLoop(){throw new Error('Loops run using the native driver cannot contain Animated.sequence animations');},_isUsingNativeDriver:function _isUsingNativeDriver(){return false;}};};var parallel=function parallel(animations,config){var doneCount=0;var hasEnded={};var stopTogether=!(config&&config.stopTogether===false);var result={start:function start(callback){if(doneCount===animations.length){callback&&callback({finished:true});return;}animations.forEach(function(animation,idx){var cb=function cb(endResult){hasEnded[idx]=true;doneCount++;if(doneCount===animations.length){doneCount=0;callback&&callback(endResult);return;}if(!endResult.finished&&stopTogether){result.stop();}};if(!animation){cb({finished:true});}else{animation.start(cb);}});},stop:function stop(){animations.forEach(function(animation,idx){!hasEnded[idx]&&animation.stop();hasEnded[idx]=true;});},reset:function reset(){animations.forEach(function(animation,idx){animation.reset();hasEnded[idx]=false;doneCount=0;});},_startNativeLoop:function _startNativeLoop(){throw new Error('Loops run using the native driver cannot contain Animated.parallel animations');},_isUsingNativeDriver:function _isUsingNativeDriver(){return false;}};return result;};var AnimatedImplementation_delay=function delay(time){return AnimatedImplementation_timing(new AnimatedValue["a" /* default */](0),{toValue:0,delay:time,duration:0});};var stagger=function stagger(time,animations){return parallel(animations.map(function(animation,i){return sequence([AnimatedImplementation_delay(time*i),animation]);}));};var loop=function loop(animation,_temp){var _ref=_temp===void 0?{}:_temp,_ref$iterations=_ref.iterations,iterations=_ref$iterations===void 0?-1:_ref$iterations,_ref$resetBeforeItera=_ref.resetBeforeIteration,resetBeforeIteration=_ref$resetBeforeItera===void 0?true:_ref$resetBeforeItera;var isFinished=false;var iterationsSoFar=0;return{start:function start(callback){var restart=function restart(result){if(result===void 0){result={finished:true};}if(isFinished||iterationsSoFar===iterations||result.finished===false){callback&&callback(result);}else{iterationsSoFar++;resetBeforeIteration&&animation.reset();animation.start(restart);}};if(!animation||iterations===0){callback&&callback({finished:true});}else{if(animation._isUsingNativeDriver()){animation._startNativeLoop(iterations);}else{restart();}}},stop:function stop(){isFinished=true;animation.stop();},reset:function reset(){iterationsSoFar=0;isFinished=false;animation.reset();},_startNativeLoop:function _startNativeLoop(){throw new Error('Loops run using the native driver cannot contain Animated.loop animations');},_isUsingNativeDriver:function _isUsingNativeDriver(){return animation._isUsingNativeDriver();}};};function forkEvent(event,listener){if(!event){return listener;}else if(event instanceof AnimatedEvent_AnimatedEvent){event.__addListener(listener);return event;}else{return function(){typeof event==='function'&&event.apply(void 0,arguments);listener.apply(void 0,arguments);};}}function unforkEvent(event,listener){if(event&&event instanceof AnimatedEvent_AnimatedEvent){event.__removeListener(listener);}}var AnimatedImplementation_event=function event(argMapping,config){var animatedEvent=new AnimatedEvent_AnimatedEvent(argMapping,config);if(animatedEvent.__isNative){return animatedEvent;}else{return animatedEvent.__getHandler();}};var AnimatedImplementation={Value:AnimatedValue["a" /* default */],ValueXY:AnimatedValueXY["a" /* default */],Interpolation:AnimatedInterpolation["a" /* default */],Node:AnimatedNode["a" /* default */],decay:AnimatedImplementation_decay,timing:AnimatedImplementation_timing,spring:AnimatedImplementation_spring,add:AnimatedImplementation_add,subtract:AnimatedImplementation_subtract,divide:AnimatedImplementation_divide,multiply:AnimatedImplementation_multiply,modulo:AnimatedImplementation_modulo,diffClamp:AnimatedImplementation_diffClamp,delay:AnimatedImplementation_delay,sequence:sequence,parallel:parallel,stagger:stagger,loop:loop,event:AnimatedImplementation_event,createAnimatedComponent:Animated_createAnimatedComponent,attachNativeEvent:attachNativeEvent,forkEvent:forkEvent,unforkEvent:unforkEvent,Event:AnimatedEvent_AnimatedEvent,__PropsOnlyForTests:nodes_AnimatedProps};/* harmony default export */ var Animated_AnimatedImplementation = (AnimatedImplementation);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/FlatList/index.js + 2 modules
var FlatList = __webpack_require__(80);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Image/index.js + 1 modules
var Image = __webpack_require__(37);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/SectionList/index.js + 2 modules
var SectionList = __webpack_require__(81);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/ScrollView/index.js + 2 modules
var ScrollView = __webpack_require__(36);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Text/index.js
var Text = __webpack_require__(30);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__(3);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Animated/index.js
function Animated_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function Animated_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){Animated_ownKeys(Object(source),true).forEach(function(key){Animated_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{Animated_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function Animated_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var Animated=Animated_objectSpread({},Animated_AnimatedImplementation,{FlatList:Animated_AnimatedImplementation.createAnimatedComponent(FlatList["a" /* default */],{scrollEventThrottle:0.0001}),Image:Animated_AnimatedImplementation.createAnimatedComponent(Image["a" /* default */]),ScrollView:Animated_AnimatedImplementation.createAnimatedComponent(ScrollView["a" /* default */],{scrollEventThrottle:0.0001}),SectionList:Animated_AnimatedImplementation.createAnimatedComponent(SectionList["a" /* default */],{scrollEventThrottle:0.0001}),View:Animated_AnimatedImplementation.createAnimatedComponent(View["a" /* default */]),Text:Animated_AnimatedImplementation.createAnimatedComponent(Text["a" /* default */])});/* harmony default export */ var exports_Animated = __webpack_exports__["a"] = (Animated);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AnimatedInterpolation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _AnimatedWithChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _exports_InteractionManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var NativeAnimatedAPI=_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].API;function _flush(rootNode){var animatedStyles=new Set();function findAnimatedStyles(node){if(typeof node.update==='function'){animatedStyles.add(node);}else{node.__getChildren().forEach(findAnimatedStyles);}}findAnimatedStyles(rootNode);animatedStyles.forEach(function(animatedStyle){return animatedStyle.update();});}var AnimatedValue=function(_AnimatedWithChildren){_inheritsLoose(AnimatedValue,_AnimatedWithChildren);function AnimatedValue(value){var _this;_this=_AnimatedWithChildren.call(this)||this;_this._startingValue=_this._value=value;_this._offset=0;_this._animation=null;return _this;}var _proto=AnimatedValue.prototype;_proto.__detach=function __detach(){this.stopAnimation();_AnimatedWithChildren.prototype.__detach.call(this);};_proto.__getValue=function __getValue(){return this._value+this._offset;};_proto.setValue=function setValue(value){if(this._animation){this._animation.stop();this._animation=null;}this._updateValue(value,!this.__isNative);if(this.__isNative){NativeAnimatedAPI.setAnimatedNodeValue(this.__getNativeTag(),value);}};_proto.setOffset=function setOffset(offset){this._offset=offset;if(this.__isNative){NativeAnimatedAPI.setAnimatedNodeOffset(this.__getNativeTag(),offset);}};_proto.flattenOffset=function flattenOffset(){this._value+=this._offset;this._offset=0;if(this.__isNative){NativeAnimatedAPI.flattenAnimatedNodeOffset(this.__getNativeTag());}};_proto.extractOffset=function extractOffset(){this._offset+=this._value;this._value=0;if(this.__isNative){NativeAnimatedAPI.extractAnimatedNodeOffset(this.__getNativeTag());}};_proto.stopAnimation=function stopAnimation(callback){this.stopTracking();this._animation&&this._animation.stop();this._animation=null;callback&&callback(this.__getValue());};_proto.resetAnimation=function resetAnimation(callback){this.stopAnimation(callback);this._value=this._startingValue;};_proto._onAnimatedValueUpdateReceived=function _onAnimatedValueUpdateReceived(value){this._updateValue(value,false);};_proto.interpolate=function interpolate(config){return new _AnimatedInterpolation__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](this,config);};_proto.animate=function animate(animation,callback){var _this2=this;var handle=null;if(animation.__isInteraction){handle=_exports_InteractionManager__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].createInteractionHandle();}var previousAnimation=this._animation;this._animation&&this._animation.stop();this._animation=animation;animation.start(this._value,function(value){_this2._updateValue(value,true);},function(result){_this2._animation=null;if(handle!==null){_exports_InteractionManager__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].clearInteractionHandle(handle);}callback&&callback(result);},previousAnimation,this);};_proto.stopTracking=function stopTracking(){this._tracking&&this._tracking.__detach();this._tracking=null;};_proto.track=function track(tracking){this.stopTracking();this._tracking=tracking;};_proto._updateValue=function _updateValue(value,flush){this._value=value;if(flush){_flush(this);}_AnimatedWithChildren.prototype.__callListeners.call(this,this.__getValue());};_proto.__getNativeConfig=function __getNativeConfig(){return{type:'value',value:this._value,offset:this._offset};};return AnimatedValue;}(_AnimatedWithChildren__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);/* harmony default export */ __webpack_exports__["a"] = (AnimatedValue);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(274)();
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AnimatedNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var AnimatedWithChildren=function(_AnimatedNode){_inheritsLoose(AnimatedWithChildren,_AnimatedNode);function AnimatedWithChildren(){var _this;_this=_AnimatedNode.call(this)||this;_this._children=[];return _this;}var _proto=AnimatedWithChildren.prototype;_proto.__makeNative=function __makeNative(){if(!this.__isNative){this.__isNative=true;for(var _iterator=this._children,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var child=_ref;child.__makeNative();_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].API.connectAnimatedNodes(this.__getNativeTag(),child.__getNativeTag());}}_AnimatedNode.prototype.__makeNative.call(this);};_proto.__addChild=function __addChild(child){if(this._children.length===0){this.__attach();}this._children.push(child);if(this.__isNative){child.__makeNative();_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].API.connectAnimatedNodes(this.__getNativeTag(),child.__getNativeTag());}};_proto.__removeChild=function __removeChild(child){var index=this._children.indexOf(child);if(index===-1){console.warn("Trying to remove a child that doesn't exist");return;}if(this.__isNative&&child.__isNative){_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].API.disconnectAnimatedNodes(this.__getNativeTag(),child.__getNativeTag());}this._children.splice(index,1);if(this._children.length===0){this.__detach();}};_proto.__getChildren=function __getChildren(){return this._children;};_proto.__callListeners=function __callListeners(value){_AnimatedNode.prototype.__callListeners.call(this,value);if(!this.__isNative){for(var _iterator2=this._children,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var child=_ref2;if(child.__getValue){child.__callListeners(child.__getValue());}}}};return AnimatedWithChildren;}(_AnimatedNode__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);/* harmony default export */ __webpack_exports__["a"] = (AnimatedWithChildren);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js
var getBoundingClientRect = __webpack_require__(57);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/unitlessNumbers/index.js
var unitlessNumbers = __webpack_require__(63);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-dom/dangerousStyleValue/index.js
function dangerousStyleValue(name,value,isCustomProperty){var isEmpty=value==null||typeof value==='boolean'||value==='';if(isEmpty){return'';}if(!isCustomProperty&&typeof value==='number'&&value!==0&&!(unitlessNumbers["a" /* default */].hasOwnProperty(name)&&unitlessNumbers["a" /* default */][name])){return value+'px';}return(''+value).trim();}/* harmony default export */ var react_dom_dangerousStyleValue = (dangerousStyleValue);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-dom/setValueForStyles/index.js
function setValueForStyles(node,styles){var style=node.style;for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}var isCustomProperty=styleName.indexOf('--')===0;var styleValue=react_dom_dangerousStyleValue(styleName,styles[styleName],isCustomProperty);if(styleName==='float'){styleName='cssFloat';}if(isCustomProperty){style.setProperty(styleName,styleValue);}else{style[styleName]=styleValue;}}}/* harmony default export */ var react_dom_setValueForStyles = (setValueForStyles);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/UIManager/index.js
var UIManager_getRect=function getRect(node){var _getBoundingClientRec=Object(getBoundingClientRect["a" /* default */])(node),x=_getBoundingClientRec.x,y=_getBoundingClientRec.y,top=_getBoundingClientRec.top,left=_getBoundingClientRec.left;var width=node.offsetWidth;var height=node.offsetHeight;return{x:x,y:y,width:width,height:height,top:top,left:left};};var _measureLayout=function measureLayout(node,relativeToNativeNode,callback){var relativeNode=relativeToNativeNode||node&&node.parentNode;if(node&&relativeNode){setTimeout(function(){var relativeRect=Object(getBoundingClientRect["a" /* default */])(relativeNode);var _getRect=UIManager_getRect(node),height=_getRect.height,left=_getRect.left,top=_getRect.top,width=_getRect.width;var x=left-relativeRect.left;var y=top-relativeRect.top;callback(x,y,width,height,left,top);},0);}};var focusableElements={A:true,INPUT:true,SELECT:true,TEXTAREA:true};var UIManager={blur:function blur(node){try{node.blur();}catch(err){}},focus:function focus(node){try{var name=node.nodeName;if(node.getAttribute('tabIndex')==null&&focusableElements[name]==null){node.setAttribute('tabIndex','-1');}node.focus();}catch(err){}},measure:function measure(node,callback){_measureLayout(node,null,callback);},measureInWindow:function measureInWindow(node,callback){if(node){setTimeout(function(){var _getRect2=UIManager_getRect(node),height=_getRect2.height,left=_getRect2.left,top=_getRect2.top,width=_getRect2.width;callback(left,top,width,height);},0);}},measureLayout:function measureLayout(node,relativeToNativeNode,onFail,onSuccess){_measureLayout(node,relativeToNativeNode,onSuccess);},updateView:function updateView(node,props){for(var prop in props){if(!Object.prototype.hasOwnProperty.call(props,prop)){continue;}var value=props[prop];switch(prop){case'style':{react_dom_setValueForStyles(node,value);break;}case'class':case'className':{node.setAttribute('class',value);break;}case'text':case'value':node.value=value;break;default:node.setAttribute(prop,value);}}},configureNextLayoutAnimation:function configureNextLayoutAnimation(config,onAnimationDidEnd){onAnimationDidEnd();},setLayoutAnimationEnabledExperimental:function setLayoutAnimationEnabledExperimental(){}};/* harmony default export */ var exports_UIManager = __webpack_exports__["a"] = (UIManager);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Platform={OS:'web',select:function select(obj){return'web'in obj?obj.web:obj.default;},get isTesting(){if(Object({"NODE_ENV":"production","PUBLIC_URL":"/InventedSpellingRelease","APP_MANIFEST":{"name":"InventedSpellingApp","slug":"InventedSpellingApp","version":"1.0.0","assetBundlePatterns":["**/*"],"_internal":{"isDebug":false,"projectRoot":"/home/danny/Projects/InventedSpelling","dynamicConfigPath":null,"staticConfigPath":"/home/danny/Projects/InventedSpelling/app.json","packageJsonPath":"/home/danny/Projects/InventedSpelling/package.json"},"sdkVersion":"41.0.0","platforms":["ios","android","web"],"web":{}}}).NODE_DEV==='test'){return true;}return false;}};/* harmony default export */ __webpack_exports__["a"] = (Platform);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

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

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dimensions; });
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__);
var win=fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]?window:{devicePixelRatio:undefined,innerHeight:undefined,innerWidth:undefined,screen:{height:undefined,width:undefined}};var dimensions={};var listeners={};var Dimensions=function(){function Dimensions(){}Dimensions.get=function get(dimension){fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default()(dimensions[dimension],"No dimension set for key "+dimension);return dimensions[dimension];};Dimensions.set=function set(initialDimensions){if(initialDimensions){if(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]){fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default()(false,'Dimensions cannot be set in the browser');}else{dimensions.screen=initialDimensions.screen;dimensions.window=initialDimensions.window;}}};Dimensions._update=function _update(){dimensions.window={fontScale:1,height:win.innerHeight,scale:win.devicePixelRatio||1,width:win.innerWidth};dimensions.screen={fontScale:1,height:win.screen.height,scale:win.devicePixelRatio||1,width:win.screen.width};if(Array.isArray(listeners['change'])){listeners['change'].forEach(function(handler){return handler(dimensions);});}};Dimensions.addEventListener=function addEventListener(type,handler){listeners[type]=listeners[type]||[];listeners[type].push(handler);};Dimensions.removeEventListener=function removeEventListener(type,handler){if(Array.isArray(listeners[type])){listeners[type]=listeners[type].filter(function(_handler){return _handler!==handler;});}};return Dimensions;}();Dimensions._update();if(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]){window.addEventListener('resize',Dimensions._update,false);}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _modules_AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _modules_createDOMProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var createElement=function createElement(component,props){var accessibilityComponent;if(component&&component.constructor===String){accessibilityComponent=_modules_AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].propsToAccessibilityComponent(props);}var Component=accessibilityComponent||component;var domProps=Object(_modules_createDOMProps__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Component,props);for(var _len=arguments.length,children=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){children[_key-2]=arguments[_key];}return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement.apply(react__WEBPACK_IMPORTED_MODULE_2___default.a,[Component,domProps].concat(children));};/* harmony default export */ __webpack_exports__["a"] = (createElement);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AnimatedWithChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(normalize_css_color__WEBPACK_IMPORTED_MODULE_3__);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var linear=function linear(t){return t;};function createInterpolation(config){if(config.outputRange&&typeof config.outputRange[0]==='string'){return createInterpolationFromStringOutputRange(config);}var outputRange=config.outputRange;checkInfiniteRange('outputRange',outputRange);var inputRange=config.inputRange;checkInfiniteRange('inputRange',inputRange);checkValidInputRange(inputRange);fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(inputRange.length===outputRange.length,'inputRange ('+inputRange.length+') and outputRange ('+outputRange.length+') must have the same length');var easing=config.easing||linear;var extrapolateLeft='extend';if(config.extrapolateLeft!==undefined){extrapolateLeft=config.extrapolateLeft;}else if(config.extrapolate!==undefined){extrapolateLeft=config.extrapolate;}var extrapolateRight='extend';if(config.extrapolateRight!==undefined){extrapolateRight=config.extrapolateRight;}else if(config.extrapolate!==undefined){extrapolateRight=config.extrapolate;}return function(input){fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(typeof input==='number','Cannot interpolation an input which is not a number');var range=findRange(input,inputRange);return interpolate(input,inputRange[range],inputRange[range+1],outputRange[range],outputRange[range+1],easing,extrapolateLeft,extrapolateRight);};}function interpolate(input,inputMin,inputMax,outputMin,outputMax,easing,extrapolateLeft,extrapolateRight){var result=input;if(result<inputMin){if(extrapolateLeft==='identity'){return result;}else if(extrapolateLeft==='clamp'){result=inputMin;}else if(extrapolateLeft==='extend'){}}if(result>inputMax){if(extrapolateRight==='identity'){return result;}else if(extrapolateRight==='clamp'){result=inputMax;}else if(extrapolateRight==='extend'){}}if(outputMin===outputMax){return outputMin;}if(inputMin===inputMax){if(input<=inputMin){return outputMin;}return outputMax;}if(inputMin===-Infinity){result=-result;}else if(inputMax===Infinity){result=result-inputMin;}else{result=(result-inputMin)/(inputMax-inputMin);}result=easing(result);if(outputMin===-Infinity){result=-result;}else if(outputMax===Infinity){result=result+outputMin;}else{result=result*(outputMax-outputMin)+outputMin;}return result;}function colorToRgba(input){var int32Color=normalize_css_color__WEBPACK_IMPORTED_MODULE_3___default()(input);if(int32Color===null){return input;}int32Color=int32Color||0;var r=(int32Color&0xff000000)>>>24;var g=(int32Color&0x00ff0000)>>>16;var b=(int32Color&0x0000ff00)>>>8;var a=(int32Color&0x000000ff)/255;return"rgba("+r+", "+g+", "+b+", "+a+")";}var stringShapeRegex=/[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;function createInterpolationFromStringOutputRange(config){var outputRange=config.outputRange;fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(outputRange.length>=2,'Bad output range');outputRange=outputRange.map(colorToRgba);checkPattern(outputRange);var outputRanges=outputRange[0].match(stringShapeRegex).map(function(){return[];});outputRange.forEach(function(value){value.match(stringShapeRegex).forEach(function(number,i){outputRanges[i].push(+number);});});var interpolations=outputRange[0].match(stringShapeRegex).map(function(value,i){return createInterpolation(_objectSpread({},config,{outputRange:outputRanges[i]}));});var shouldRound=isRgbOrRgba(outputRange[0]);return function(input){var i=0;return outputRange[0].replace(stringShapeRegex,function(){var val=+interpolations[i++](input);if(shouldRound){val=i<4?Math.round(val):Math.round(val*1000)/1000;}return String(val);});};}function isRgbOrRgba(range){return typeof range==='string'&&range.startsWith('rgb');}function checkPattern(arr){var pattern=arr[0].replace(stringShapeRegex,'');for(var i=1;i<arr.length;++i){fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(pattern===arr[i].replace(stringShapeRegex,''),'invalid pattern '+arr[0]+' and '+arr[i]);}}function findRange(input,inputRange){var i;for(i=1;i<inputRange.length-1;++i){if(inputRange[i]>=input){break;}}return i-1;}function checkValidInputRange(arr){fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(arr.length>=2,'inputRange must have at least 2 elements');for(var i=1;i<arr.length;++i){fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(arr[i]>=arr[i-1],'inputRange must be monotonically non-decreasing '+arr);}}function checkInfiniteRange(name,arr){fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(arr.length>=2,name+' must have at least 2 elements');fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(arr.length!==2||arr[0]!==-Infinity||arr[1]!==Infinity,name+'cannot be ]-infinity;+infinity[ '+arr);}var AnimatedInterpolation=function(_AnimatedWithChildren){_inheritsLoose(AnimatedInterpolation,_AnimatedWithChildren);function AnimatedInterpolation(parent,config){var _this;_this=_AnimatedWithChildren.call(this)||this;_this._parent=parent;_this._config=config;_this._interpolation=createInterpolation(config);return _this;}var _proto=AnimatedInterpolation.prototype;_proto.__makeNative=function __makeNative(){this._parent.__makeNative();_AnimatedWithChildren.prototype.__makeNative.call(this);};_proto.__getValue=function __getValue(){var parentValue=this._parent.__getValue();fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(typeof parentValue==='number','Cannot interpolate an input which is not a number.');return this._interpolation(parentValue);};_proto.interpolate=function interpolate(config){return new AnimatedInterpolation(this,config);};_proto.__attach=function __attach(){this._parent.__addChild(this);};_proto.__detach=function __detach(){this._parent.__removeChild(this);_AnimatedWithChildren.prototype.__detach.call(this);};_proto.__transformDataType=function __transformDataType(range){return range.map(_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].transformDataType);};_proto.__getNativeConfig=function __getNativeConfig(){if(false){}return{inputRange:this._config.inputRange,outputRange:this.__transformDataType(this._config.outputRange),extrapolateLeft:this._config.extrapolateLeft||this._config.extrapolate||'extend',extrapolateRight:this._config.extrapolateRight||this._config.extrapolate||'extend',type:'interpolation'};};return AnimatedInterpolation;}(_AnimatedWithChildren__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);AnimatedInterpolation.__createInterpolation=createInterpolation;/* harmony default export */ __webpack_exports__["a"] = (AnimatedInterpolation);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mergeRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);
function useMergeRefs(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function(){return _mergeRefs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].apply(void 0,args);},[].concat(args));}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STYLE_ELEMENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return STYLE_GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STYLE_SHORT_FORM_EXPANSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MONOSPACE_FONT_STACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SYSTEM_FONT_STACK; });
var STYLE_ELEMENT_ID='react-native-stylesheet';var STYLE_GROUPS={reset:0,modality:0.1,classicReset:0.5,classic:1,atomic:2.2,custom:{borderColor:2,borderRadius:2,borderStyle:2,borderWidth:2,display:2,flex:2,margin:2,overflow:2,overscrollBehavior:2,padding:2,marginHorizontal:2.1,marginVertical:2.1,paddingHorizontal:2.1,paddingVertical:2.1}};var STYLE_SHORT_FORM_EXPANSIONS={borderColor:['borderTopColor','borderRightColor','borderBottomColor','borderLeftColor'],borderRadius:['borderTopLeftRadius','borderTopRightRadius','borderBottomRightRadius','borderBottomLeftRadius'],borderStyle:['borderTopStyle','borderRightStyle','borderBottomStyle','borderLeftStyle'],borderWidth:['borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth'],margin:['marginTop','marginRight','marginBottom','marginLeft'],marginHorizontal:['marginRight','marginLeft'],marginVertical:['marginTop','marginBottom'],overflow:['overflowX','overflowY'],overscrollBehavior:['overscrollBehaviorX','overscrollBehaviorY'],padding:['paddingTop','paddingRight','paddingBottom','paddingLeft'],paddingHorizontal:['paddingRight','paddingLeft'],paddingVertical:['paddingTop','paddingBottom']};var MONOSPACE_FONT_STACK='monospace,monospace';var SYSTEM_FONT_STACK='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif';

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
var findNodeHandle=function findNodeHandle(component){var node;try{node=Object(react_dom__WEBPACK_IMPORTED_MODULE_0__["findDOMNode"])(component);}catch(e){}return node;};/* harmony default export */ __webpack_exports__["a"] = (findNodeHandle);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeValueWithProperty; });
/* harmony import */ var _modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _modules_normalizeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91);
var colorProps={backgroundColor:true,borderColor:true,borderTopColor:true,borderRightColor:true,borderBottomColor:true,borderLeftColor:true,color:true,shadowColor:true,textDecorationColor:true,textShadowColor:true};function normalizeValueWithProperty(value,property){var returnValue=value;if((property==null||!_modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"][property])&&typeof value==='number'){returnValue=value+"px";}else if(property!=null&&colorProps[property]){returnValue=Object(_modules_normalizeColor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value);}return returnValue;}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(94);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var emptyFunction=function emptyFunction(){};function StatusBar(){return null;}StatusBar.setBackgroundColor=emptyFunction;StatusBar.setBarStyle=emptyFunction;StatusBar.setHidden=emptyFunction;StatusBar.setNetworkActivityIndicatorVisible=emptyFunction;StatusBar.setTranslucent=emptyFunction;/* harmony default export */ __webpack_exports__["a"] = (StatusBar);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
var TextInputState={_currentlyFocusedNode:null,currentlyFocusedField:function currentlyFocusedField(){if(document.activeElement!==this._currentlyFocusedNode){this._currentlyFocusedNode=null;}return this._currentlyFocusedNode;},focusTextInput:function focusTextInput(textFieldNode){if(textFieldNode!==null){this._currentlyFocusedNode=textFieldNode;if(document.activeElement!==textFieldNode){_exports_UIManager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].focus(textFieldNode);}}},blurTextInput:function blurTextInput(textFieldNode){if(textFieldNode!==null){this._currentlyFocusedNode=null;if(document.activeElement===textFieldNode){_exports_UIManager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].blur(textFieldNode);}}}};/* harmony default export */ __webpack_exports__["a"] = (TextInputState);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(106)["default"];

var assertThisInitialized = __webpack_require__(71);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _modules_pick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _hooks_useElementLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
/* harmony import */ var _modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _hooks_usePlatformMethods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var _hooks_useResponderEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53);
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
/* harmony import */ var _TextAncestorContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45);
var forwardPropsList={accessibilityLabel:true,accessibilityLiveRegion:true,accessibilityRole:true,accessibilityState:true,accessibilityValue:true,accessible:true,children:true,classList:true,dir:true,importantForAccessibility:true,lang:true,nativeID:true,onBlur:true,onClick:true,onClickCapture:true,onContextMenu:true,onFocus:true,onKeyDown:true,onKeyUp:true,onTouchCancel:true,onTouchCancelCapture:true,onTouchEnd:true,onTouchEndCapture:true,onTouchMove:true,onTouchMoveCapture:true,onTouchStart:true,onTouchStartCapture:true,pointerEvents:true,ref:true,style:true,testID:true,dataSet:true,onMouseDown:true,onMouseEnter:true,onMouseLeave:true,onMouseMove:true,onMouseOver:true,onMouseOut:true,onMouseUp:true,onScroll:true,onWheel:true,href:true,rel:true,target:true};var pickProps=function pickProps(props){return Object(_modules_pick__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(props,forwardPropsList);};var Text=Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function(props,forwardedRef){var dir=props.dir,numberOfLines=props.numberOfLines,onClick=props.onClick,onLayout=props.onLayout,onPress=props.onPress,onMoveShouldSetResponder=props.onMoveShouldSetResponder,onMoveShouldSetResponderCapture=props.onMoveShouldSetResponderCapture,onResponderEnd=props.onResponderEnd,onResponderGrant=props.onResponderGrant,onResponderMove=props.onResponderMove,onResponderReject=props.onResponderReject,onResponderRelease=props.onResponderRelease,onResponderStart=props.onResponderStart,onResponderTerminate=props.onResponderTerminate,onResponderTerminationRequest=props.onResponderTerminationRequest,onScrollShouldSetResponder=props.onScrollShouldSetResponder,onScrollShouldSetResponderCapture=props.onScrollShouldSetResponderCapture,onSelectionChangeShouldSetResponder=props.onSelectionChangeShouldSetResponder,onSelectionChangeShouldSetResponderCapture=props.onSelectionChangeShouldSetResponderCapture,onStartShouldSetResponder=props.onStartShouldSetResponder,onStartShouldSetResponderCapture=props.onStartShouldSetResponderCapture,selectable=props.selectable;var hasTextAncestor=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_TextAncestorContext__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);var hostRef=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);var classList=[classes.text,hasTextAncestor===true&&classes.textHasAncestor,numberOfLines===1&&classes.textOneLine,numberOfLines!=null&&numberOfLines>1&&classes.textMultiLine];var style=[props.style,numberOfLines!=null&&numberOfLines>1&&{WebkitLineClamp:numberOfLines},selectable===true&&styles.selectable,selectable===false&&styles.notSelectable,onPress&&styles.pressable];Object(_hooks_useElementLayout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(hostRef,onLayout);Object(_hooks_useResponderEvents__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(hostRef,{onMoveShouldSetResponder:onMoveShouldSetResponder,onMoveShouldSetResponderCapture:onMoveShouldSetResponderCapture,onResponderEnd:onResponderEnd,onResponderGrant:onResponderGrant,onResponderMove:onResponderMove,onResponderReject:onResponderReject,onResponderRelease:onResponderRelease,onResponderStart:onResponderStart,onResponderTerminate:onResponderTerminate,onResponderTerminationRequest:onResponderTerminationRequest,onScrollShouldSetResponder:onScrollShouldSetResponder,onScrollShouldSetResponderCapture:onScrollShouldSetResponderCapture,onSelectionChangeShouldSetResponder:onSelectionChangeShouldSetResponder,onSelectionChangeShouldSetResponderCapture:onSelectionChangeShouldSetResponderCapture,onStartShouldSetResponder:onStartShouldSetResponder,onStartShouldSetResponderCapture:onStartShouldSetResponderCapture});function handleClick(e){if(onClick!=null){onClick(e);}if(onClick==null&&onPress!=null){e.stopPropagation();onPress(e);}}var component=hasTextAncestor?'span':'div';var supportedProps=pickProps(props);supportedProps.classList=classList;supportedProps.dir=dir;if(!hasTextAncestor){supportedProps.dir=dir!=null?dir:'auto';}supportedProps.onClick=handleClick;supportedProps.style=style;var platformMethodsRef=Object(_hooks_usePlatformMethods__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(supportedProps);var setRef=Object(_modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(hostRef,platformMethodsRef,forwardedRef);supportedProps.ref=setRef;var element=Object(_createElement__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(component,supportedProps);return hasTextAncestor?element:react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TextAncestorContext__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].Provider,{value:true},element);});Text.displayName='Text';var classes=_StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].create({text:{border:'0 solid black',boxSizing:'border-box',color:'black',display:'inline',font:'14px System',margin:0,padding:0,whiteSpace:'pre-wrap',wordWrap:'break-word'},textHasAncestor:{color:'inherit',font:'inherit',whiteSpace:'inherit'},textOneLine:{maxWidth:'100%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'},textMultiLine:{display:'-webkit-box',maxWidth:'100%',overflow:'hidden',textOverflow:'ellipsis',WebkitBoxOrient:'vertical'}});var styles=_StyleSheet__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].create({notSelectable:{userSelect:'none'},selectable:{userSelect:'text'},pressable:{cursor:'pointer'}});/* harmony default export */ __webpack_exports__["a"] = (Text);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _styleResolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
var css={create:function create(rules,group){return _styleResolver__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].createCSS(rules,group);}};/* harmony default export */ __webpack_exports__["a"] = (css);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__(2);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(5);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/requestIdleCallback/index.js
var _requestIdleCallback=function _requestIdleCallback(cb,options){return setTimeout(function(){var start=Date.now();cb({didTimeout:false,timeRemaining:function timeRemaining(){return Math.max(0,50-(Date.now()-start));}});},1);};var _cancelIdleCallback=function _cancelIdleCallback(id){clearTimeout(id);};var isSupported=ExecutionEnvironment["canUseDOM"]&&typeof window.requestIdleCallback!=='undefined';var requestIdleCallback=isSupported?window.requestIdleCallback:_requestIdleCallback;var cancelIdleCallback=isSupported?window.cancelIdleCallback:_cancelIdleCallback;/* harmony default export */ var modules_requestIdleCallback = (requestIdleCallback);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/InteractionManager/index.js
var InteractionManager={Events:{interactionStart:'interactionStart',interactionComplete:'interactionComplete'},runAfterInteractions:function runAfterInteractions(task){var handle;var promise=new Promise(function(resolve){handle=modules_requestIdleCallback(function(){if(task){resolve(task());}else{resolve();}});});return{then:promise.then.bind(promise),done:promise.then.bind(promise),cancel:function cancel(){cancelIdleCallback(handle);}};},createInteractionHandle:function createInteractionHandle(){return 1;},clearInteractionHandle:function clearInteractionHandle(handle){invariant_default()(!!handle,'Must provide a handle to clear.');},addListener:function addListener(){}};/* harmony default export */ var exports_InteractionManager = __webpack_exports__["a"] = (InteractionManager);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
var doLeftAndRightSwapInRTL=true;var isPreferredLanguageRTL=false;var isRTLAllowed=true;var isRTLForced=false;var isRTL=function isRTL(){if(isRTLForced){return true;}return isRTLAllowed&&isPreferredLanguageRTL;};var onDirectionChange=function onDirectionChange(){if(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default.a.canUseDOM){if(document.documentElement&&document.documentElement.setAttribute){document.documentElement.setAttribute('dir',isRTL()?'rtl':'ltr');}}};var I18nManager={allowRTL:function allowRTL(bool){isRTLAllowed=bool;onDirectionChange();},forceRTL:function forceRTL(bool){isRTLForced=bool;onDirectionChange();},setPreferredLanguageRTL:function setPreferredLanguageRTL(bool){isPreferredLanguageRTL=bool;onDirectionChange();},swapLeftAndRightInRTL:function swapLeftAndRightInRTL(bool){doLeftAndRightSwapInRTL=bool;},get doLeftAndRightSwapInRTL(){return doLeftAndRightSwapInRTL;},get isRTL(){return isRTL();}};/* harmony default export */ __webpack_exports__["a"] = (I18nManager);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IS_MANAGED_ENV */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IS_ENV_WITH_UPDATES_ENABLED; });
/* unused harmony export IS_ENV_WITHOUT_UPDATES_ENABLED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return manifestBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return downloadAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getManifest; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
var IS_MANAGED_ENV=false;var IS_ENV_WITH_UPDATES_ENABLED=false;var IS_ENV_WITHOUT_UPDATES_ENABLED=false;var manifestBaseUrl=null;function downloadAsync(uri,hash,type,name){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function downloadAsync$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",uri);case 1:case"end":return _context.stop();}}},null,null,null,Promise);}function getManifest(){return{};}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vendor_react_native_Animated_Easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony default export */ __webpack_exports__["a"] = (_vendor_react_native_Animated_Easing__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/create-react-class/index.js
var create_react_class = __webpack_require__(129);
var create_react_class_default = /*#__PURE__*/__webpack_require__.n(create_react_class);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/dismissKeyboard/index.js
var dismissKeyboard = __webpack_require__(88);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__(2);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Dimensions/index.js
var Dimensions = __webpack_require__(17);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/findNodeHandle/index.js
var findNodeHandle = __webpack_require__(24);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Platform/index.js
var Platform = __webpack_require__(15);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/TextInputState/index.js
var TextInputState = __webpack_require__(28);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/UIManager/index.js + 2 modules
var UIManager = __webpack_require__(14);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/warning.js
var warning = __webpack_require__(50);
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/ScrollResponder/index.js
var emptyObject={};var IS_ANIMATING_TOUCH_START_THRESHOLD_MS=16;var ScrollResponderMixin={scrollResponderMixinGetInitialState:function scrollResponderMixinGetInitialState(){return{isTouching:false,lastMomentumScrollBeginTime:0,lastMomentumScrollEndTime:0,observedScrollSinceBecomingResponder:false,becameResponderWhileAnimating:false};},scrollResponderHandleScrollShouldSetResponder:function scrollResponderHandleScrollShouldSetResponder(){return this.state.isTouching;},scrollResponderHandleStartShouldSetResponder:function scrollResponderHandleStartShouldSetResponder(){return false;},scrollResponderHandleStartShouldSetResponderCapture:function scrollResponderHandleStartShouldSetResponderCapture(e){return this.scrollResponderIsAnimating();},scrollResponderHandleResponderReject:function scrollResponderHandleResponderReject(){warning_default()(false,"ScrollView doesn't take rejection well - scrolls anyway");},scrollResponderHandleTerminationRequest:function scrollResponderHandleTerminationRequest(){return!this.state.observedScrollSinceBecomingResponder;},scrollResponderHandleTouchEnd:function scrollResponderHandleTouchEnd(e){var nativeEvent=e.nativeEvent;this.state.isTouching=nativeEvent.touches.length!==0;this.props.onTouchEnd&&this.props.onTouchEnd(e);},scrollResponderHandleResponderRelease:function scrollResponderHandleResponderRelease(e){this.props.onResponderRelease&&this.props.onResponderRelease(e);var currentlyFocusedTextInput=TextInputState["a" /* default */].currentlyFocusedField();if(!this.props.keyboardShouldPersistTaps&&currentlyFocusedTextInput!=null&&e.target!==currentlyFocusedTextInput&&!this.state.observedScrollSinceBecomingResponder&&!this.state.becameResponderWhileAnimating){this.props.onScrollResponderKeyboardDismissed&&this.props.onScrollResponderKeyboardDismissed(e);TextInputState["a" /* default */].blurTextInput(currentlyFocusedTextInput);}},scrollResponderHandleScroll:function scrollResponderHandleScroll(e){this.state.observedScrollSinceBecomingResponder=true;this.props.onScroll&&this.props.onScroll(e);},scrollResponderHandleResponderGrant:function scrollResponderHandleResponderGrant(e){this.state.observedScrollSinceBecomingResponder=false;this.props.onResponderGrant&&this.props.onResponderGrant(e);this.state.becameResponderWhileAnimating=this.scrollResponderIsAnimating();},scrollResponderHandleScrollBeginDrag:function scrollResponderHandleScrollBeginDrag(e){this.props.onScrollBeginDrag&&this.props.onScrollBeginDrag(e);},scrollResponderHandleScrollEndDrag:function scrollResponderHandleScrollEndDrag(e){this.props.onScrollEndDrag&&this.props.onScrollEndDrag(e);},scrollResponderHandleMomentumScrollBegin:function scrollResponderHandleMomentumScrollBegin(e){this.state.lastMomentumScrollBeginTime=Date.now();this.props.onMomentumScrollBegin&&this.props.onMomentumScrollBegin(e);},scrollResponderHandleMomentumScrollEnd:function scrollResponderHandleMomentumScrollEnd(e){this.state.lastMomentumScrollEndTime=Date.now();this.props.onMomentumScrollEnd&&this.props.onMomentumScrollEnd(e);},scrollResponderHandleTouchStart:function scrollResponderHandleTouchStart(e){this.state.isTouching=true;this.props.onTouchStart&&this.props.onTouchStart(e);},scrollResponderHandleTouchMove:function scrollResponderHandleTouchMove(e){this.props.onTouchMove&&this.props.onTouchMove(e);},scrollResponderIsAnimating:function scrollResponderIsAnimating(){var now=Date.now();var timeSinceLastMomentumScrollEnd=now-this.state.lastMomentumScrollEndTime;var isAnimating=timeSinceLastMomentumScrollEnd<IS_ANIMATING_TOUCH_START_THRESHOLD_MS||this.state.lastMomentumScrollEndTime<this.state.lastMomentumScrollBeginTime;return isAnimating;},scrollResponderGetScrollableNode:function scrollResponderGetScrollableNode(){return this.getScrollableNode?this.getScrollableNode():Object(findNodeHandle["a" /* default */])(this);},scrollResponderScrollTo:function scrollResponderScrollTo(x,y,animated){if(typeof x==='number'){console.warn('`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.');}else{var _ref=x||emptyObject;x=_ref.x;y=_ref.y;animated=_ref.animated;}var node=this.scrollResponderGetScrollableNode();var left=x||0;var top=y||0;if(typeof node.scroll==='function'){node.scroll({top:top,left:left,behavior:!animated?'auto':'smooth'});}else{node.scrollLeft=left;node.scrollTop=top;}},scrollResponderZoomTo:function scrollResponderZoomTo(rect,animated){if(Platform["a" /* default */].OS!=='ios'){invariant_default()('zoomToRect is not implemented');}},scrollResponderFlashScrollIndicators:function scrollResponderFlashScrollIndicators(){},scrollResponderScrollNativeHandleToKeyboard:function scrollResponderScrollNativeHandleToKeyboard(nodeHandle,additionalOffset,preventNegativeScrollOffset){this.additionalScrollOffset=additionalOffset||0;this.preventNegativeScrollOffset=!!preventNegativeScrollOffset;UIManager["a" /* default */].measureLayout(nodeHandle,Object(findNodeHandle["a" /* default */])(this.getInnerViewNode()),this.scrollResponderTextInputFocusError,this.scrollResponderInputMeasureAndScrollToKeyboard);},scrollResponderInputMeasureAndScrollToKeyboard:function scrollResponderInputMeasureAndScrollToKeyboard(left,top,width,height){var keyboardScreenY=Dimensions["a" /* default */].get('window').height;if(this.keyboardWillOpenTo){keyboardScreenY=this.keyboardWillOpenTo.endCoordinates.screenY;}var scrollOffsetY=top-keyboardScreenY+height+this.additionalScrollOffset;if(this.preventNegativeScrollOffset){scrollOffsetY=Math.max(0,scrollOffsetY);}this.scrollResponderScrollTo({x:0,y:scrollOffsetY,animated:true});this.additionalOffset=0;this.preventNegativeScrollOffset=false;},scrollResponderTextInputFocusError:function scrollResponderTextInputFocusError(e){console.error('Error measuring text field: ',e);},UNSAFE_componentWillMount:function UNSAFE_componentWillMount(){this.keyboardWillOpenTo=null;this.additionalScrollOffset=0;},scrollResponderKeyboardWillShow:function scrollResponderKeyboardWillShow(e){this.keyboardWillOpenTo=e;this.props.onKeyboardWillShow&&this.props.onKeyboardWillShow(e);},scrollResponderKeyboardWillHide:function scrollResponderKeyboardWillHide(e){this.keyboardWillOpenTo=null;this.props.onKeyboardWillHide&&this.props.onKeyboardWillHide(e);},scrollResponderKeyboardDidShow:function scrollResponderKeyboardDidShow(e){if(e){this.keyboardWillOpenTo=e;}this.props.onKeyboardDidShow&&this.props.onKeyboardDidShow(e);},scrollResponderKeyboardDidHide:function scrollResponderKeyboardDidHide(e){this.keyboardWillOpenTo=null;this.props.onKeyboardDidHide&&this.props.onKeyboardDidHide(e);}};var ScrollResponder={Mixin:ScrollResponderMixin};/* harmony default export */ var modules_ScrollResponder = (ScrollResponder);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/index.js + 1 modules
var StyleSheet = __webpack_require__(4);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__(3);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/ScrollView/ScrollViewBase.js
function normalizeScrollEvent(e){return{nativeEvent:{contentOffset:{get x(){return e.target.scrollLeft;},get y(){return e.target.scrollTop;}},contentSize:{get height(){return e.target.scrollHeight;},get width(){return e.target.scrollWidth;}},layoutMeasurement:{get height(){return e.target.offsetHeight;},get width(){return e.target.offsetWidth;}}},timeStamp:Date.now()};}function shouldEmitScrollEvent(lastTick,eventThrottle){var timeSinceLastTick=Date.now()-lastTick;return eventThrottle>0&&timeSinceLastTick>=eventThrottle;}var ScrollViewBase=Object(react["forwardRef"])(function(props,forwardedRef){var accessibilityLabel=props.accessibilityLabel,accessibilityRole=props.accessibilityRole,accessibilityState=props.accessibilityState,children=props.children,importantForAccessibility=props.importantForAccessibility,nativeID=props.nativeID,onLayout=props.onLayout,onScroll=props.onScroll,onTouchMove=props.onTouchMove,onWheel=props.onWheel,pointerEvents=props.pointerEvents,_props$scrollEnabled=props.scrollEnabled,scrollEnabled=_props$scrollEnabled===void 0?true:_props$scrollEnabled,_props$scrollEventThr=props.scrollEventThrottle,scrollEventThrottle=_props$scrollEventThr===void 0?0:_props$scrollEventThr,showsHorizontalScrollIndicator=props.showsHorizontalScrollIndicator,showsVerticalScrollIndicator=props.showsVerticalScrollIndicator,style=props.style,dataSet=props.dataSet,testID=props.testID;var scrollState=Object(react["useRef"])({isScrolling:false,scrollLastTick:0});var scrollTimeout=Object(react["useRef"])(null);function createPreventableScrollHandler(handler){return function(e){if(scrollEnabled){if(handler){handler(e);}}};}function handleScroll(e){e.persist();e.stopPropagation();if(scrollTimeout.current!=null){clearTimeout(scrollTimeout.current);}scrollTimeout.current=setTimeout(function(){handleScrollEnd(e);},100);if(scrollState.current.isScrolling){if(shouldEmitScrollEvent(scrollState.current.scrollLastTick,scrollEventThrottle)){handleScrollTick(e);}}else{handleScrollStart(e);}}function handleScrollStart(e){scrollState.current.isScrolling=true;scrollState.current.scrollLastTick=Date.now();}function handleScrollTick(e){scrollState.current.scrollLastTick=Date.now();if(onScroll){onScroll(normalizeScrollEvent(e));}}function handleScrollEnd(e){scrollState.current.isScrolling=false;if(onScroll){onScroll(normalizeScrollEvent(e));}}var hideScrollbar=showsHorizontalScrollIndicator===false||showsVerticalScrollIndicator===false;return react["createElement"](View["a" /* default */],{accessibilityLabel:accessibilityLabel,accessibilityRole:accessibilityRole,accessibilityState:accessibilityState,children:children,dataSet:dataSet,importantForAccessibility:importantForAccessibility,nativeID:nativeID,onLayout:onLayout,onScroll:handleScroll,onTouchMove:createPreventableScrollHandler(onTouchMove),onWheel:createPreventableScrollHandler(onWheel),pointerEvents:pointerEvents,ref:forwardedRef,style:[style,!scrollEnabled&&styles.scrollDisabled,hideScrollbar&&styles.hideScrollbar],testID:testID});});var styles=StyleSheet["a" /* default */].create({scrollDisabled:{overflowX:'hidden',overflowY:'hidden',touchAction:'none'},hideScrollbar:{scrollbarWidth:'none'}});/* harmony default export */ var ScrollView_ScrollViewBase = (ScrollViewBase);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/ScrollView/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var ScrollView_emptyObject={};var ScrollView=create_react_class_default()({displayName:"ScrollView",mixins:[modules_ScrollResponder.Mixin],getInitialState:function getInitialState(){return this.scrollResponderMixinGetInitialState();},flashScrollIndicators:function flashScrollIndicators(){this.scrollResponderFlashScrollIndicators();},setNativeProps:function setNativeProps(props){if(this._scrollNodeRef){this._scrollNodeRef.setNativeProps(props);}},getScrollResponder:function getScrollResponder(){return this;},getScrollableNode:function getScrollableNode(){return this._scrollNodeRef;},getInnerViewNode:function getInnerViewNode(){return this._innerViewRef;},scrollTo:function scrollTo(y,x,animated){if(typeof y==='number'){console.warn('`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.');}else{var _ref=y||ScrollView_emptyObject;x=_ref.x;y=_ref.y;animated=_ref.animated;}this.getScrollResponder().scrollResponderScrollTo({x:x||0,y:y||0,animated:animated!==false});},scrollToEnd:function scrollToEnd(options){var animated=(options&&options.animated)!==false;var horizontal=this.props.horizontal;var scrollResponder=this.getScrollResponder();var scrollResponderNode=scrollResponder.scrollResponderGetScrollableNode();var x=horizontal?scrollResponderNode.scrollWidth:0;var y=horizontal?0:scrollResponderNode.scrollHeight;scrollResponder.scrollResponderScrollTo({x:x,y:y,animated:animated});},render:function render(){var _this$props=this.props,contentContainerStyle=_this$props.contentContainerStyle,horizontal=_this$props.horizontal,onContentSizeChange=_this$props.onContentSizeChange,refreshControl=_this$props.refreshControl,stickyHeaderIndices=_this$props.stickyHeaderIndices,pagingEnabled=_this$props.pagingEnabled,keyboardDismissMode=_this$props.keyboardDismissMode,onScroll=_this$props.onScroll,other=_objectWithoutPropertiesLoose(_this$props,["contentContainerStyle","horizontal","onContentSizeChange","refreshControl","stickyHeaderIndices","pagingEnabled","keyboardDismissMode","onScroll"]);if(false){ var childLayoutProps, style; }var contentSizeChangeProps={};if(onContentSizeChange){contentSizeChangeProps={onLayout:this._handleContentOnLayout};}var hasStickyHeaderIndices=!horizontal&&Array.isArray(stickyHeaderIndices);var children=hasStickyHeaderIndices||pagingEnabled?react_default.a.Children.map(this.props.children,function(child,i){var isSticky=hasStickyHeaderIndices&&stickyHeaderIndices.indexOf(i)>-1;if(child!=null&&(isSticky||pagingEnabled)){return react_default.a.createElement(View["a" /* default */],{style:StyleSheet["a" /* default */].compose(isSticky&&ScrollView_styles.stickyHeader,pagingEnabled&&ScrollView_styles.pagingEnabledChild)},child);}else{return child;}}):this.props.children;var contentContainer=react_default.a.createElement(View["a" /* default */],_extends({},contentSizeChangeProps,{children:children,collapsable:false,ref:this._setInnerViewRef,style:StyleSheet["a" /* default */].compose(horizontal&&ScrollView_styles.contentContainerHorizontal,contentContainerStyle)}));var baseStyle=horizontal?ScrollView_styles.baseHorizontal:ScrollView_styles.baseVertical;var pagingEnabledStyle=horizontal?ScrollView_styles.pagingEnabledHorizontal:ScrollView_styles.pagingEnabledVertical;var props=_objectSpread({},other,{style:[baseStyle,pagingEnabled&&pagingEnabledStyle,this.props.style],onTouchStart:this.scrollResponderHandleTouchStart,onTouchMove:this.scrollResponderHandleTouchMove,onTouchEnd:this.scrollResponderHandleTouchEnd,onScrollBeginDrag:this.scrollResponderHandleScrollBeginDrag,onScrollEndDrag:this.scrollResponderHandleScrollEndDrag,onMomentumScrollBegin:this.scrollResponderHandleMomentumScrollBegin,onMomentumScrollEnd:this.scrollResponderHandleMomentumScrollEnd,onStartShouldSetResponder:this.scrollResponderHandleStartShouldSetResponder,onStartShouldSetResponderCapture:this.scrollResponderHandleStartShouldSetResponderCapture,onScrollShouldSetResponder:this.scrollResponderHandleScrollShouldSetResponder,onScroll:this._handleScroll,onResponderGrant:this.scrollResponderHandleResponderGrant,onResponderTerminationRequest:this.scrollResponderHandleTerminationRequest,onResponderTerminate:this.scrollResponderHandleTerminate,onResponderRelease:this.scrollResponderHandleResponderRelease,onResponderReject:this.scrollResponderHandleResponderReject});var ScrollViewClass=ScrollView_ScrollViewBase;invariant_default()(ScrollViewClass!==undefined,'ScrollViewClass must not be undefined');if(refreshControl){return react_default.a.cloneElement(refreshControl,{style:props.style},react_default.a.createElement(ScrollViewClass,_extends({},props,{ref:this._setScrollNodeRef,style:baseStyle}),contentContainer));}return react_default.a.createElement(ScrollViewClass,_extends({},props,{ref:this._setScrollNodeRef}),contentContainer);},_handleContentOnLayout:function _handleContentOnLayout(e){var _e$nativeEvent$layout=e.nativeEvent.layout,width=_e$nativeEvent$layout.width,height=_e$nativeEvent$layout.height;this.props.onContentSizeChange(width,height);},_handleScroll:function _handleScroll(e){if(false){}if(this.props.keyboardDismissMode==='on-drag'){Object(dismissKeyboard["a" /* default */])();}this.scrollResponderHandleScroll(e);},_setInnerViewRef:function _setInnerViewRef(component){this._innerViewRef=component;},_setScrollNodeRef:function _setScrollNodeRef(component){this._scrollNodeRef=component;}});var commonStyle={flexGrow:1,flexShrink:1,transform:[{translateZ:0}],WebkitOverflowScrolling:'touch'};var ScrollView_styles=StyleSheet["a" /* default */].create({baseVertical:_objectSpread({},commonStyle,{flexDirection:'column',overflowX:'hidden',overflowY:'auto'}),baseHorizontal:_objectSpread({},commonStyle,{flexDirection:'row',overflowX:'auto',overflowY:'hidden'}),contentContainerHorizontal:{flexDirection:'row'},stickyHeader:{position:'sticky',top:0,zIndex:10},pagingEnabledHorizontal:{scrollSnapType:'x mandatory'},pagingEnabledVertical:{scrollSnapType:'y mandatory'},pagingEnabledChild:{scrollSnapAlign:'start'}});/* harmony default export */ var exports_ScrollView = __webpack_exports__["a"] = (ScrollView);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/createElement/index.js
var createElement = __webpack_require__(18);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/css.js
var css = __webpack_require__(31);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/AssetRegistry/index.js
var AssetRegistry = __webpack_require__(93);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/resolveShadowValue.js
var resolveShadowValue = __webpack_require__(83);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/ImageLoader/index.js
var dataUriPattern=/^data:/;var ImageUriCache=function(){function ImageUriCache(){}ImageUriCache.has=function has(uri){var entries=ImageUriCache._entries;var isDataUri=dataUriPattern.test(uri);return isDataUri||Boolean(entries[uri]);};ImageUriCache.add=function add(uri){var entries=ImageUriCache._entries;var lastUsedTimestamp=Date.now();if(entries[uri]){entries[uri].lastUsedTimestamp=lastUsedTimestamp;entries[uri].refCount+=1;}else{entries[uri]={lastUsedTimestamp:lastUsedTimestamp,refCount:1};}};ImageUriCache.remove=function remove(uri){var entries=ImageUriCache._entries;if(entries[uri]){entries[uri].refCount-=1;}ImageUriCache._cleanUpIfNeeded();};ImageUriCache._cleanUpIfNeeded=function _cleanUpIfNeeded(){var entries=ImageUriCache._entries;var imageUris=Object.keys(entries);if(imageUris.length+1>ImageUriCache._maximumEntries){var leastRecentlyUsedKey;var leastRecentlyUsedEntry;imageUris.forEach(function(uri){var entry=entries[uri];if((!leastRecentlyUsedEntry||entry.lastUsedTimestamp<leastRecentlyUsedEntry.lastUsedTimestamp)&&entry.refCount===0){leastRecentlyUsedKey=uri;leastRecentlyUsedEntry=entry;}});if(leastRecentlyUsedKey){delete entries[leastRecentlyUsedKey];}}};return ImageUriCache;}();ImageUriCache._maximumEntries=256;ImageUriCache._entries={};var ImageLoader_id=0;var requests={};var ImageLoader={abort:function abort(requestId){var image=requests[""+requestId];if(image){image.onerror=null;image.onload=null;image=null;delete requests[""+requestId];}},getSize:function getSize(uri,success,failure){var complete=false;var interval=setInterval(callback,16);var requestId=ImageLoader.load(uri,callback,errorCallback);function callback(){var image=requests[""+requestId];if(image){var naturalHeight=image.naturalHeight,naturalWidth=image.naturalWidth;if(naturalHeight&&naturalWidth){success(naturalWidth,naturalHeight);complete=true;}}if(complete){ImageLoader.abort(requestId);clearInterval(interval);}}function errorCallback(){if(typeof failure==='function'){failure();}ImageLoader.abort(requestId);clearInterval(interval);}},has:function has(uri){return ImageUriCache.has(uri);},load:function load(uri,onLoad,onError){ImageLoader_id+=1;var image=new window.Image();image.onerror=onError;image.onload=function(e){var onDecode=function onDecode(){return onLoad({nativeEvent:e});};if(typeof image.decode==='function'){image.decode().then(onDecode,onDecode);}else{setTimeout(onDecode,0);}};image.src=uri;requests[""+ImageLoader_id]=image;return ImageLoader_id;},prefetch:function prefetch(uri){return new Promise(function(resolve,reject){ImageLoader.load(uri,function(){ImageUriCache.add(uri);ImageUriCache.remove(uri);resolve();},reject);});},queryCache:function queryCache(uris){var result={};uris.forEach(function(u){if(ImageUriCache.has(u)){result[u]='disk/memory';}});return Promise.resolve(result);}};/* harmony default export */ var modules_ImageLoader = (ImageLoader);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/PixelRatio/index.js
var PixelRatio = __webpack_require__(47);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/index.js + 1 modules
var StyleSheet = __webpack_require__(4);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Text/TextAncestorContext.js
var TextAncestorContext = __webpack_require__(45);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__(3);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Image/index.js
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var ERRORED='ERRORED';var LOADED='LOADED';var LOADING='LOADING';var IDLE='IDLE';var _filterId=0;var svgDataUriPattern=/^(data:image\/svg\+xml;utf8,)(.*)/;function createTintColorSVG(tintColor,id){return tintColor&&id!=null?react_default.a.createElement("svg",{style:{position:'absolute',height:0,visibility:'hidden',width:0}},react_default.a.createElement("defs",null,react_default.a.createElement("filter",{id:"tint-"+id,suppressHydrationWarning:true},react_default.a.createElement("feFlood",{floodColor:""+tintColor,key:tintColor}),react_default.a.createElement("feComposite",{in2:"SourceAlpha",operator:"atop"})))):null;}function getFlatStyle(style,blurRadius,filterId){var flatStyle=_objectSpread({},StyleSheet["a" /* default */].flatten(style));var filter=flatStyle.filter,resizeMode=flatStyle.resizeMode,shadowOffset=flatStyle.shadowOffset,tintColor=flatStyle.tintColor;var filters=[];var _filter=null;if(filter){filters.push(filter);}if(blurRadius){filters.push("blur("+blurRadius+"px)");}if(shadowOffset){var shadowString=Object(resolveShadowValue["a" /* default */])(flatStyle);if(shadowString){filters.push("drop-shadow("+shadowString+")");}}if(tintColor&&filterId!=null){filters.push("url(#tint-"+filterId+")");}if(filters.length>0){_filter=filters.join(' ');}delete flatStyle.shadowColor;delete flatStyle.shadowOpacity;delete flatStyle.shadowOffset;delete flatStyle.shadowRadius;delete flatStyle.tintColor;delete flatStyle.overlayColor;delete flatStyle.resizeMode;return[flatStyle,resizeMode,_filter,tintColor];}function resolveAssetDimensions(source){if(typeof source==='number'){var _getAssetByID=Object(AssetRegistry["a" /* getAssetByID */])(source),height=_getAssetByID.height,width=_getAssetByID.width;return{height:height,width:width};}else if(source!=null&&!Array.isArray(source)&&typeof source==='object'){var _height=source.height,_width=source.width;return{height:_height,width:_width};}}function resolveAssetUri(source){var uri=null;if(typeof source==='number'){var asset=Object(AssetRegistry["a" /* getAssetByID */])(source);var scale=asset.scales[0];if(asset.scales.length>1){var preferredScale=PixelRatio["a" /* default */].get();scale=asset.scales.reduce(function(prev,curr){return Math.abs(curr-preferredScale)<Math.abs(prev-preferredScale)?curr:prev;});}var scaleSuffix=scale!==1?"@"+scale+"x":'';uri=asset?asset.httpServerLocation+"/"+asset.name+scaleSuffix+"."+asset.type:'';}else if(typeof source==='string'){uri=source;}else if(source&&typeof source.uri==='string'){uri=source.uri;}if(uri){var match=uri.match(svgDataUriPattern);if(match){var prefix=match[1],svg=match[2];var encodedSvg=encodeURIComponent(svg);return""+prefix+encodedSvg;}}return uri;}var Image=Object(react["forwardRef"])(function(props,ref){var accessibilityLabel=props.accessibilityLabel,blurRadius=props.blurRadius,defaultSource=props.defaultSource,draggable=props.draggable,onError=props.onError,onLayout=props.onLayout,onLoad=props.onLoad,onLoadEnd=props.onLoadEnd,onLoadStart=props.onLoadStart,pointerEvents=props.pointerEvents,source=props.source,style=props.style,rest=_objectWithoutPropertiesLoose(props,["accessibilityLabel","blurRadius","defaultSource","draggable","onError","onLayout","onLoad","onLoadEnd","onLoadStart","pointerEvents","source","style"]);if(false){}var _useState=Object(react["useState"])(function(){var uri=resolveAssetUri(source);if(uri!=null){var isLoaded=modules_ImageLoader.has(uri);if(isLoaded){return LOADED;}}return IDLE;}),state=_useState[0],updateState=_useState[1];var _useState2=Object(react["useState"])({}),layout=_useState2[0],updateLayout=_useState2[1];var hasTextAncestor=Object(react["useContext"])(TextAncestorContext["a" /* default */]);var hiddenImageRef=Object(react["useRef"])(null);var filterRef=Object(react["useRef"])(_filterId++);var requestRef=Object(react["useRef"])(null);var shouldDisplaySource=state===LOADED||state===LOADING&&defaultSource==null;var _getFlatStyle=getFlatStyle(style,blurRadius,filterRef.current),flatStyle=_getFlatStyle[0],_resizeMode=_getFlatStyle[1],filter=_getFlatStyle[2],tintColor=_getFlatStyle[3];var resizeMode=props.resizeMode||_resizeMode||'cover';var selectedSource=shouldDisplaySource?source:defaultSource;var displayImageUri=resolveAssetUri(selectedSource);var imageSizeStyle=resolveAssetDimensions(selectedSource);var backgroundImage=displayImageUri?"url(\""+displayImageUri+"\")":null;var backgroundSize=getBackgroundSize();var hiddenImage=displayImageUri?Object(createElement["a" /* default */])('img',{alt:accessibilityLabel||'',classList:[classes.accessibilityImage],draggable:draggable||false,ref:hiddenImageRef,src:displayImageUri}):null;function getBackgroundSize(){if(hiddenImageRef.current!=null&&(resizeMode==='center'||resizeMode==='repeat')){var _hiddenImageRef$curre=hiddenImageRef.current,naturalHeight=_hiddenImageRef$curre.naturalHeight,naturalWidth=_hiddenImageRef$curre.naturalWidth;var height=layout.height,width=layout.width;if(naturalHeight&&naturalWidth&&height&&width){var scaleFactor=Math.min(1,width/naturalWidth,height/naturalHeight);var x=Math.ceil(scaleFactor*naturalWidth);var y=Math.ceil(scaleFactor*naturalHeight);return x+"px "+y+"px";}}}function handleLayout(e){if(resizeMode==='center'||resizeMode==='repeat'||onLayout){var _layout=e.nativeEvent.layout;onLayout&&onLayout(e);updateLayout(_layout);}}Object(react["useEffect"])(function(){abortPendingRequest();var uri=resolveAssetUri(source);if(uri!=null){updateState(LOADING);if(onLoadStart){onLoadStart();}requestRef.current=modules_ImageLoader.load(uri,function load(e){updateState(LOADED);if(onLoad){onLoad(e);}if(onLoadEnd){onLoadEnd();}},function error(){updateState(ERRORED);if(onError){onError({nativeEvent:{error:"Failed to load resource "+uri+" (404)"}});}if(onLoadEnd){onLoadEnd();}});}function abortPendingRequest(){if(requestRef.current!=null){modules_ImageLoader.abort(requestRef.current);requestRef.current=null;}}return abortPendingRequest;},[source,requestRef,updateState,onError,onLoad,onLoadEnd,onLoadStart]);return react_default.a.createElement(View["a" /* default */],_extends({},rest,{accessibilityLabel:accessibilityLabel,onLayout:handleLayout,pointerEvents:pointerEvents,ref:ref,style:[styles.root,hasTextAncestor&&styles.inline,imageSizeStyle,flatStyle]}),react_default.a.createElement(View["a" /* default */],{style:[styles.image,resizeModeStyles[resizeMode],{backgroundImage:backgroundImage,filter:filter},backgroundSize!=null&&{backgroundSize:backgroundSize}],suppressHydrationWarning:true}),hiddenImage,createTintColorSVG(tintColor,filterRef.current));});Image.displayName='Image';Image.getSize=function(uri,success,failure){modules_ImageLoader.getSize(uri,success,failure);};Image.prefetch=function(uri){return modules_ImageLoader.prefetch(uri);};Image.queryCache=function(uris){return modules_ImageLoader.queryCache(uris);};var classes=css["a" /* default */].create({accessibilityImage:_objectSpread({},StyleSheet["a" /* default */].absoluteFillObject,{height:'100%',opacity:0,width:'100%',zIndex:-1})});var styles=StyleSheet["a" /* default */].create({root:{flexBasis:'auto',overflow:'hidden',zIndex:0},inline:{display:'inline-flex'},image:_objectSpread({},StyleSheet["a" /* default */].absoluteFillObject,{backgroundColor:'transparent',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100%',width:'100%',zIndex:-1})});var resizeModeStyles=StyleSheet["a" /* default */].create({center:{backgroundSize:'auto'},contain:{backgroundSize:'contain'},cover:{backgroundSize:'cover'},none:{backgroundPosition:'0 0',backgroundSize:'auto'},repeat:{backgroundPosition:'0 0',backgroundRepeat:'repeat',backgroundSize:'auto'},stretch:{backgroundSize:'100% 100%'}});/* harmony default export */ var exports_Image = __webpack_exports__["a"] = (Image);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pick; });
function pick(obj,list){var nextObj={};for(var key in obj){if(obj.hasOwnProperty(key)){if(list[key]===true||key.indexOf('aria-')===0){nextObj[key]=obj[key];}}}return nextObj;}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePlatformMethods; });
/* harmony import */ var _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _modules_createDOMProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function setNativeProps(node,nativeProps,classList,pointerEvents,style,previousStyleRef){if(node!=null&&nativeProps){var domProps=Object(_modules_createDOMProps__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(null,_objectSpread({pointerEvents:pointerEvents},nativeProps,{classList:[classList,nativeProps.className],style:[style,nativeProps.style]}));var nextDomStyle=domProps.style;if(previousStyleRef.current!=null){if(domProps.style==null){domProps.style={};}for(var styleName in previousStyleRef.current){if(domProps.style[styleName]==null){domProps.style[styleName]='';}}}previousStyleRef.current=nextDomStyle;_exports_UIManager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].updateView(node,domProps);}}function usePlatformMethods(props){var previousStyleRef=Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);var classList=props.classList,style=props.style,pointerEvents=props.pointerEvents;return Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function(){return function(hostNode){if(hostNode!=null){hostNode.measure=function(callback){return _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].measure(hostNode,callback);};hostNode.measureLayout=function(relativeToNode,success,failure){return _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].measureLayout(hostNode,relativeToNode,failure,success);};hostNode.measureInWindow=function(callback){return _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].measureInWindow(hostNode,callback);};hostNode.setNativeProps=function(nativeProps){return setNativeProps(hostNode,nativeProps,classList,pointerEvents,style,previousStyleRef);};}return hostNode;};},[classList,pointerEvents,style]);}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ usePressEvents; });

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/hooks/usePressEvents/PressResponder.js
var DELAY='DELAY';var ERROR='ERROR';var LONG_PRESS_DETECTED='LONG_PRESS_DETECTED';var NOT_RESPONDER='NOT_RESPONDER';var RESPONDER_ACTIVE_LONG_PRESS_START='RESPONDER_ACTIVE_LONG_PRESS_START';var RESPONDER_ACTIVE_PRESS_START='RESPONDER_ACTIVE_PRESS_START';var RESPONDER_INACTIVE_PRESS_START='RESPONDER_INACTIVE_PRESS_START';var RESPONDER_GRANT='RESPONDER_GRANT';var RESPONDER_RELEASE='RESPONDER_RELEASE';var RESPONDER_TERMINATED='RESPONDER_TERMINATED';var Transitions=Object.freeze({NOT_RESPONDER:{DELAY:ERROR,RESPONDER_GRANT:RESPONDER_INACTIVE_PRESS_START,RESPONDER_RELEASE:ERROR,RESPONDER_TERMINATED:ERROR,LONG_PRESS_DETECTED:ERROR},RESPONDER_INACTIVE_PRESS_START:{DELAY:RESPONDER_ACTIVE_PRESS_START,RESPONDER_GRANT:ERROR,RESPONDER_RELEASE:NOT_RESPONDER,RESPONDER_TERMINATED:NOT_RESPONDER,LONG_PRESS_DETECTED:ERROR},RESPONDER_ACTIVE_PRESS_START:{DELAY:ERROR,RESPONDER_GRANT:ERROR,RESPONDER_RELEASE:NOT_RESPONDER,RESPONDER_TERMINATED:NOT_RESPONDER,LONG_PRESS_DETECTED:RESPONDER_ACTIVE_LONG_PRESS_START},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:ERROR,RESPONDER_GRANT:ERROR,RESPONDER_RELEASE:NOT_RESPONDER,RESPONDER_TERMINATED:NOT_RESPONDER,LONG_PRESS_DETECTED:RESPONDER_ACTIVE_LONG_PRESS_START},ERROR:{DELAY:NOT_RESPONDER,RESPONDER_GRANT:RESPONDER_INACTIVE_PRESS_START,RESPONDER_RELEASE:NOT_RESPONDER,RESPONDER_TERMINATED:NOT_RESPONDER,LONG_PRESS_DETECTED:NOT_RESPONDER}});var isActiveSignal=function isActiveSignal(signal){return signal===RESPONDER_ACTIVE_PRESS_START||signal===RESPONDER_ACTIVE_LONG_PRESS_START;};var isPressStartSignal=function isPressStartSignal(signal){return signal===RESPONDER_INACTIVE_PRESS_START||signal===RESPONDER_ACTIVE_PRESS_START||signal===RESPONDER_ACTIVE_LONG_PRESS_START;};var isTerminalSignal=function isTerminalSignal(signal){return signal===RESPONDER_TERMINATED||signal===RESPONDER_RELEASE;};var isValidKeyPress=function isValidKeyPress(event){var key=event.key;var target=event.currentTarget;var role=target.getAttribute('role');var isSpacebar=key===' '||key==='Spacebar';return!event.repeat&&(key==='Enter'||isSpacebar&&(role==='button'||role==='menuitem'));};var DEFAULT_LONG_PRESS_DELAY_MS=450;var DEFAULT_PRESS_DELAY_MS=50;var PressResponder=function(){function PressResponder(config){this._eventHandlers=null;this._isPointerTouch=false;this._longPressDelayTimeout=null;this._longPressDispatched=false;this._pressDelayTimeout=null;this._pressOutDelayTimeout=null;this._touchState=NOT_RESPONDER;this.configure(config);}var _proto=PressResponder.prototype;_proto.configure=function configure(config){this._config=config;};_proto.reset=function reset(){this._cancelLongPressDelayTimeout();this._cancelPressDelayTimeout();this._cancelPressOutDelayTimeout();};_proto.getEventHandlers=function getEventHandlers(){if(this._eventHandlers==null){this._eventHandlers=this._createEventHandlers();}return this._eventHandlers;};_proto._createEventHandlers=function _createEventHandlers(){var _this=this;var start=function start(event,shouldDelay){event.persist();_this._cancelPressOutDelayTimeout();_this._longPressDispatched=false;_this._responder=event.currentTarget;_this._selectionTerminated=false;_this._touchState=NOT_RESPONDER;_this._isPointerTouch=event.nativeEvent.type==='touchstart';_this._receiveSignal(RESPONDER_GRANT,event);var delayPressStart=normalizeDelay(_this._config.delayPressStart,0,DEFAULT_PRESS_DELAY_MS);if(shouldDelay!==false&&delayPressStart>0){_this._pressDelayTimeout=setTimeout(function(){_this._receiveSignal(DELAY,event);},delayPressStart);}else{_this._receiveSignal(DELAY,event);}var delayLongPress=normalizeDelay(_this._config.delayLongPress,10,DEFAULT_LONG_PRESS_DELAY_MS);_this._longPressDelayTimeout=setTimeout(function(){_this._handleLongPress(event);},delayLongPress+delayPressStart);};var end=function end(event){_this._receiveSignal(RESPONDER_RELEASE,event);};var keyupHandler=function keyupHandler(event){if(_this._touchState!==NOT_RESPONDER){end(event);document.removeEventListener('keyup',keyupHandler);}};return{onStartShouldSetResponder:function onStartShouldSetResponder(){var disabled=_this._config.disabled;if(disabled==null){return true;}return!disabled;},onKeyDown:function onKeyDown(event){if(isValidKeyPress(event)){if(_this._touchState===NOT_RESPONDER){start(event,false);document.addEventListener('keyup',keyupHandler);}event.stopPropagation();}},onResponderGrant:function onResponderGrant(event){return start(event);},onResponderMove:function onResponderMove(event){if(_this._config.onPressMove!=null){_this._config.onPressMove(event);}var touch=getTouchFromResponderEvent(event);if(_this._touchActivatePosition!=null){var deltaX=_this._touchActivatePosition.pageX-touch.pageX;var deltaY=_this._touchActivatePosition.pageY-touch.pageY;if(Math.hypot(deltaX,deltaY)>10){_this._cancelLongPressDelayTimeout();}}},onResponderRelease:function onResponderRelease(event){return end(event);},onResponderTerminate:function onResponderTerminate(event){if(event.nativeEvent.type==='selectionchange'){_this._selectionTerminated=true;}_this._receiveSignal(RESPONDER_TERMINATED,event);},onResponderTerminationRequest:function onResponderTerminationRequest(event){var _this$_config=_this._config,cancelable=_this$_config.cancelable,disabled=_this$_config.disabled,onLongPress=_this$_config.onLongPress;if(!disabled&&onLongPress!=null&&_this._isPointerTouch&&event.nativeEvent.type==='contextmenu'){return false;}if(cancelable==null){return true;}return cancelable;},onClick:function onClick(event){var _this$_config2=_this._config,disabled=_this$_config2.disabled,onPress=_this$_config2.onPress;if(!disabled){if(_this._longPressDispatched||_this._selectionTerminated){event.preventDefault();}else if(onPress!=null&&event.ctrlKey===false&&event.altKey===false){onPress(event);}}event.stopPropagation();},onContextMenu:function onContextMenu(event){var _this$_config3=_this._config,disabled=_this$_config3.disabled,onLongPress=_this$_config3.onLongPress;if(!disabled&&onLongPress!=null&&_this._isPointerTouch&&!event.defaultPrevented){event.preventDefault();}event.stopPropagation();}};};_proto._receiveSignal=function _receiveSignal(signal,event){var prevState=this._touchState;var nextState=null;if(Transitions[prevState]!=null){nextState=Transitions[prevState][signal];}if(this._responder==null&&signal===RESPONDER_RELEASE){return;}if(nextState==null||nextState===ERROR){console.error("PressResponder: Invalid signal "+signal+" for state "+prevState+" on responder");}else if(prevState!==nextState){this._performTransitionSideEffects(prevState,nextState,signal,event);this._touchState=nextState;}};_proto._performTransitionSideEffects=function _performTransitionSideEffects(prevState,nextState,signal,event){if(isTerminalSignal(signal)){this._isPointerTouch=false;this._touchActivatePosition=null;this._cancelLongPressDelayTimeout();}if(isPressStartSignal(prevState)&&signal===LONG_PRESS_DETECTED){var onLongPress=this._config.onLongPress;if(onLongPress!=null&&event.nativeEvent.key==null){onLongPress(event);this._longPressDispatched=true;}}var isPrevActive=isActiveSignal(prevState);var isNextActive=isActiveSignal(nextState);if(!isPrevActive&&isNextActive){this._activate(event);}else if(isPrevActive&&!isNextActive){this._deactivate(event);}if(isPressStartSignal(prevState)&&signal===RESPONDER_RELEASE){var _this$_config4=this._config,_onLongPress=_this$_config4.onLongPress,onPress=_this$_config4.onPress;if(onPress!=null){var isPressCanceledByLongPress=_onLongPress!=null&&prevState===RESPONDER_ACTIVE_LONG_PRESS_START;if(!isPressCanceledByLongPress){if(!isNextActive&&!isPrevActive){this._activate(event);this._deactivate(event);}}}}this._cancelPressDelayTimeout();};_proto._activate=function _activate(event){var _this$_config5=this._config,onPressChange=_this$_config5.onPressChange,onPressStart=_this$_config5.onPressStart;var touch=getTouchFromResponderEvent(event);this._touchActivatePosition={pageX:touch.pageX,pageY:touch.pageY};if(onPressStart!=null){onPressStart(event);}if(onPressChange!=null){onPressChange(true);}};_proto._deactivate=function _deactivate(event){var _this$_config6=this._config,onPressChange=_this$_config6.onPressChange,onPressEnd=_this$_config6.onPressEnd;function end(){if(onPressEnd!=null){onPressEnd(event);}if(onPressChange!=null){onPressChange(false);}}var delayPressEnd=normalizeDelay(this._config.delayPressEnd);if(delayPressEnd>0){this._pressOutDelayTimeout=setTimeout(function(){end();},delayPressEnd);}else{end();}};_proto._handleLongPress=function _handleLongPress(event){if(this._touchState===RESPONDER_ACTIVE_PRESS_START||this._touchState===RESPONDER_ACTIVE_LONG_PRESS_START){this._receiveSignal(LONG_PRESS_DETECTED,event);}};_proto._cancelLongPressDelayTimeout=function _cancelLongPressDelayTimeout(){if(this._longPressDelayTimeout!=null){clearTimeout(this._longPressDelayTimeout);this._longPressDelayTimeout=null;}};_proto._cancelPressDelayTimeout=function _cancelPressDelayTimeout(){if(this._pressDelayTimeout!=null){clearTimeout(this._pressDelayTimeout);this._pressDelayTimeout=null;}};_proto._cancelPressOutDelayTimeout=function _cancelPressOutDelayTimeout(){if(this._pressOutDelayTimeout!=null){clearTimeout(this._pressOutDelayTimeout);this._pressOutDelayTimeout=null;}};return PressResponder;}();function normalizeDelay(delay,min,fallback){if(min===void 0){min=0;}if(fallback===void 0){fallback=0;}return Math.max(min,delay!==null&&delay!==void 0?delay:fallback);}function getTouchFromResponderEvent(event){var _event$nativeEvent=event.nativeEvent,changedTouches=_event$nativeEvent.changedTouches,touches=_event$nativeEvent.touches;if(touches!=null&&touches.length>0){return touches[0];}if(changedTouches!=null&&changedTouches.length>0){return changedTouches[0];}return event.nativeEvent;}
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react/index.js
var react = __webpack_require__(0);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/hooks/usePressEvents/index.js
function usePressEvents(hostRef,config){var pressResponderRef=Object(react["useRef"])(null);if(pressResponderRef.current==null){pressResponderRef.current=new PressResponder(config);}var pressResponder=pressResponderRef.current;Object(react["useEffect"])(function(){pressResponder.configure(config);},[config,pressResponder]);Object(react["useEffect"])(function(){return function(){pressResponder.reset();};},[pressResponder]);Object(react["useDebugValue"])(config);return pressResponder.getEventHandlers();}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/InteractionManager/index.js + 1 modules
var InteractionManager = __webpack_require__(32);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/Batchinator/index.js
var Batchinator_Batchinator=function(){function Batchinator(callback,delayMS){this._delay=delayMS;this._callback=callback;}var _proto=Batchinator.prototype;_proto.dispose=function dispose(options){if(options===void 0){options={abort:false};}if(this._taskHandle){this._taskHandle.cancel();if(!options.abort){this._callback();}this._taskHandle=null;}};_proto.schedule=function schedule(){var _this=this;if(this._taskHandle){return;}var timeoutHandle=setTimeout(function(){_this._taskHandle=InteractionManager["a" /* default */].runAfterInteractions(function(){_this._taskHandle=null;_this._callback();});},this._delay);this._taskHandle={cancel:function cancel(){return clearTimeout(timeoutHandle);}};};return Batchinator;}();/* harmony default export */ var react_native_Batchinator = (Batchinator_Batchinator);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/performanceNow.js
var performanceNow = __webpack_require__(92);
var performanceNow_default = /*#__PURE__*/__webpack_require__.n(performanceNow);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/warning.js
var warning = __webpack_require__(50);
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/FillRateHelper/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var Info=function Info(){this.any_blank_count=0;this.any_blank_ms=0;this.any_blank_speed_sum=0;this.mostly_blank_count=0;this.mostly_blank_ms=0;this.pixels_blank=0;this.pixels_sampled=0;this.pixels_scrolled=0;this.total_time_spent=0;this.sample_count=0;};var DEBUG=false;var _listeners=[];var _minSampleCount=10;var _sampleRate=DEBUG?1:null;var FillRateHelper_FillRateHelper=function(){FillRateHelper.addListener=function addListener(callback){warning_default()(_sampleRate!==null,'Call `FillRateHelper.setSampleRate` before `addListener`.');_listeners.push(callback);return{remove:function remove(){_listeners=_listeners.filter(function(listener){return callback!==listener;});}};};FillRateHelper.setSampleRate=function setSampleRate(sampleRate){_sampleRate=sampleRate;};FillRateHelper.setMinSampleCount=function setMinSampleCount(minSampleCount){_minSampleCount=minSampleCount;};function FillRateHelper(getFrameMetrics){this._anyBlankStartTime=null;this._enabled=false;this._info=new Info();this._mostlyBlankStartTime=null;this._samplesStartTime=null;this._getFrameMetrics=getFrameMetrics;this._enabled=(_sampleRate||0)>Math.random();this._resetData();}var _proto=FillRateHelper.prototype;_proto.activate=function activate(){if(this._enabled&&this._samplesStartTime==null){DEBUG&&console.debug('FillRateHelper: activate');this._samplesStartTime=performanceNow_default()();}};_proto.deactivateAndFlush=function deactivateAndFlush(){if(!this._enabled){return;}var start=this._samplesStartTime;if(start==null){DEBUG&&console.debug('FillRateHelper: bail on deactivate with no start time');return;}if(this._info.sample_count<_minSampleCount){this._resetData();return;}var total_time_spent=performanceNow_default()()-start;var info=_objectSpread({},this._info,{total_time_spent:total_time_spent});if(DEBUG){var derived={avg_blankness:this._info.pixels_blank/this._info.pixels_sampled,avg_speed:this._info.pixels_scrolled/(total_time_spent/1000),avg_speed_when_any_blank:this._info.any_blank_speed_sum/this._info.any_blank_count,any_blank_per_min:this._info.any_blank_count/(total_time_spent/1000/60),any_blank_time_frac:this._info.any_blank_ms/total_time_spent,mostly_blank_per_min:this._info.mostly_blank_count/(total_time_spent/1000/60),mostly_blank_time_frac:this._info.mostly_blank_ms/total_time_spent};for(var key in derived){derived[key]=Math.round(1000*derived[key])/1000;}console.debug('FillRateHelper deactivateAndFlush: ',{derived:derived,info:info});}_listeners.forEach(function(listener){return listener(info);});this._resetData();};_proto.computeBlankness=function computeBlankness(props,state,scrollMetrics){if(!this._enabled||props.getItemCount(props.data)===0||this._samplesStartTime==null){return 0;}var dOffset=scrollMetrics.dOffset,offset=scrollMetrics.offset,velocity=scrollMetrics.velocity,visibleLength=scrollMetrics.visibleLength;this._info.sample_count++;this._info.pixels_sampled+=Math.round(visibleLength);this._info.pixels_scrolled+=Math.round(Math.abs(dOffset));var scrollSpeed=Math.round(Math.abs(velocity)*1000);var now=performanceNow_default()();if(this._anyBlankStartTime!=null){this._info.any_blank_ms+=now-this._anyBlankStartTime;}this._anyBlankStartTime=null;if(this._mostlyBlankStartTime!=null){this._info.mostly_blank_ms+=now-this._mostlyBlankStartTime;}this._mostlyBlankStartTime=null;var blankTop=0;var first=state.first;var firstFrame=this._getFrameMetrics(first);while(first<=state.last&&(!firstFrame||!firstFrame.inLayout)){firstFrame=this._getFrameMetrics(first);first++;}if(firstFrame&&first>0){blankTop=Math.min(visibleLength,Math.max(0,firstFrame.offset-offset));}var blankBottom=0;var last=state.last;var lastFrame=this._getFrameMetrics(last);while(last>=state.first&&(!lastFrame||!lastFrame.inLayout)){lastFrame=this._getFrameMetrics(last);last--;}if(lastFrame&&last<props.getItemCount(props.data)-1){var bottomEdge=lastFrame.offset+lastFrame.length;blankBottom=Math.min(visibleLength,Math.max(0,offset+visibleLength-bottomEdge));}var pixels_blank=Math.round(blankTop+blankBottom);var blankness=pixels_blank/visibleLength;if(blankness>0){this._anyBlankStartTime=now;this._info.any_blank_speed_sum+=scrollSpeed;this._info.any_blank_count++;this._info.pixels_blank+=pixels_blank;if(blankness>0.5){this._mostlyBlankStartTime=now;this._info.mostly_blank_count++;}}else if(scrollSpeed<0.01||Math.abs(dOffset)<1){this.deactivateAndFlush();}return blankness;};_proto.enabled=function enabled(){return this._enabled;};_proto._resetData=function _resetData(){this._anyBlankStartTime=null;this._info=new Info();this._mostlyBlankStartTime=null;this._samplesStartTime=null;};return FillRateHelper;}();/* harmony default export */ var react_native_FillRateHelper = (FillRateHelper_FillRateHelper);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/prop-types/index.js
var prop_types = __webpack_require__(12);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/RefreshControl/index.js
var RefreshControl = __webpack_require__(75);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/ScrollView/index.js + 2 modules
var ScrollView = __webpack_require__(36);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/index.js + 1 modules
var StyleSheet = __webpack_require__(4);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__(3);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__(2);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/ViewabilityHelper/index.js
function ViewabilityHelper_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function ViewabilityHelper_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ViewabilityHelper_ownKeys(Object(source),true).forEach(function(key){ViewabilityHelper_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ViewabilityHelper_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function ViewabilityHelper_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var ViewabilityHelper_ViewabilityHelper=function(){function ViewabilityHelper(config){if(config===void 0){config={viewAreaCoveragePercentThreshold:0};}this._hasInteracted=false;this._timers=new Set();this._viewableIndices=[];this._viewableItems=new Map();this._config=config;}var _proto=ViewabilityHelper.prototype;_proto.dispose=function dispose(){this._timers.forEach(clearTimeout);};_proto.computeViewableItems=function computeViewableItems(itemCount,scrollOffset,viewportHeight,getFrameMetrics,renderRange){var _this$_config=this._config,itemVisiblePercentThreshold=_this$_config.itemVisiblePercentThreshold,viewAreaCoveragePercentThreshold=_this$_config.viewAreaCoveragePercentThreshold;var viewAreaMode=viewAreaCoveragePercentThreshold!=null;var viewablePercentThreshold=viewAreaMode?viewAreaCoveragePercentThreshold:itemVisiblePercentThreshold;invariant_default()(viewablePercentThreshold!=null&&itemVisiblePercentThreshold!=null!==(viewAreaCoveragePercentThreshold!=null),'Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold');var viewableIndices=[];if(itemCount===0){return viewableIndices;}var firstVisible=-1;var _ref=renderRange||{first:0,last:itemCount-1},first=_ref.first,last=_ref.last;if(last>=itemCount){console.warn('Invalid render range computing viewability '+JSON.stringify({renderRange:renderRange,itemCount:itemCount}));return[];}for(var idx=first;idx<=last;idx++){var metrics=getFrameMetrics(idx);if(!metrics){continue;}var top=metrics.offset-scrollOffset;var bottom=top+metrics.length;if(top<viewportHeight&&bottom>0){firstVisible=idx;if(_isViewable(viewAreaMode,viewablePercentThreshold,top,bottom,viewportHeight,metrics.length)){viewableIndices.push(idx);}}else if(firstVisible>=0){break;}}return viewableIndices;};_proto.onUpdate=function onUpdate(itemCount,scrollOffset,viewportHeight,getFrameMetrics,createViewToken,onViewableItemsChanged,renderRange){var _this=this;if(this._config.waitForInteraction&&!this._hasInteracted||itemCount===0||!getFrameMetrics(0)){return;}var viewableIndices=[];if(itemCount){viewableIndices=this.computeViewableItems(itemCount,scrollOffset,viewportHeight,getFrameMetrics,renderRange);}if(this._viewableIndices.length===viewableIndices.length&&this._viewableIndices.every(function(v,ii){return v===viewableIndices[ii];})){return;}this._viewableIndices=viewableIndices;if(this._config.minimumViewTime){var handle=setTimeout(function(){_this._timers.delete(handle);_this._onUpdateSync(viewableIndices,onViewableItemsChanged,createViewToken);},this._config.minimumViewTime);this._timers.add(handle);}else{this._onUpdateSync(viewableIndices,onViewableItemsChanged,createViewToken);}};_proto.resetViewableIndices=function resetViewableIndices(){this._viewableIndices=[];};_proto.recordInteraction=function recordInteraction(){this._hasInteracted=true;};_proto._onUpdateSync=function _onUpdateSync(viewableIndicesToCheck,onViewableItemsChanged,createViewToken){var _this2=this;viewableIndicesToCheck=viewableIndicesToCheck.filter(function(ii){return _this2._viewableIndices.includes(ii);});var prevItems=this._viewableItems;var nextItems=new Map(viewableIndicesToCheck.map(function(ii){var viewable=createViewToken(ii,true);return[viewable.key,viewable];}));var changed=[];for(var _iterator=nextItems,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref2;if(_isArray){if(_i>=_iterator.length)break;_ref2=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref2=_i.value;}var _ref4=_ref2,key=_ref4[0],viewable=_ref4[1];if(!prevItems.has(key)){changed.push(viewable);}}for(var _iterator2=prevItems,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref3;if(_isArray2){if(_i2>=_iterator2.length)break;_ref3=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref3=_i2.value;}var _ref5=_ref3,_key=_ref5[0],_viewable=_ref5[1];if(!nextItems.has(_key)){changed.push(ViewabilityHelper_objectSpread({},_viewable,{isViewable:false}));}}if(changed.length>0){this._viewableItems=nextItems;onViewableItemsChanged({viewableItems:Array.from(nextItems.values()),changed:changed,viewabilityConfig:this._config});}};return ViewabilityHelper;}();function _isViewable(viewAreaMode,viewablePercentThreshold,top,bottom,viewportHeight,itemLength){if(_isEntirelyVisible(top,bottom,viewportHeight)){return true;}else{var pixels=_getPixelsVisible(top,bottom,viewportHeight);var percent=100*(viewAreaMode?pixels/viewportHeight:pixels/itemLength);return percent>=viewablePercentThreshold;}}function _getPixelsVisible(top,bottom,viewportHeight){var visibleHeight=Math.min(bottom,viewportHeight)-Math.max(top,0);return Math.max(0,visibleHeight);}function _isEntirelyVisible(top,bottom,viewportHeight){return top>=0&&bottom<=viewportHeight&&bottom>top;}/* harmony default export */ var react_native_ViewabilityHelper = (ViewabilityHelper_ViewabilityHelper);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/findNodeHandle/index.js
var findNodeHandle = __webpack_require__(24);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/infoLog/index.js
function infoLog(){var _console;return(_console=console).log.apply(_console,arguments);}/* harmony default export */ var react_native_infoLog = (infoLog);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/VirtualizeUtils/index.js
function elementsThatOverlapOffsets(offsets,itemCount,getFrameMetrics){var out=[];var outLength=0;for(var ii=0;ii<itemCount;ii++){var frame=getFrameMetrics(ii);var trailingOffset=frame.offset+frame.length;for(var kk=0;kk<offsets.length;kk++){if(out[kk]==null&&trailingOffset>=offsets[kk]){out[kk]=ii;outLength++;if(kk===offsets.length-1){invariant_default()(outLength===offsets.length,'bad offsets input, should be in increasing order: %s',JSON.stringify(offsets));return out;}}}}return out;}function newRangeCount(prev,next){return next.last-next.first+1-Math.max(0,1+Math.min(next.last,prev.last)-Math.max(next.first,prev.first));}function computeWindowedRenderLimits(props,prev,getFrameMetricsApprox,scrollMetrics){var data=props.data,getItemCount=props.getItemCount,maxToRenderPerBatch=props.maxToRenderPerBatch,windowSize=props.windowSize;var itemCount=getItemCount(data);if(itemCount===0){return prev;}var offset=scrollMetrics.offset,velocity=scrollMetrics.velocity,visibleLength=scrollMetrics.visibleLength;var visibleBegin=Math.max(0,offset);var visibleEnd=visibleBegin+visibleLength;var overscanLength=(windowSize-1)*visibleLength;var leadFactor=0.5;var fillPreference=velocity>1?'after':velocity<-1?'before':'none';var overscanBegin=Math.max(0,visibleBegin-(1-leadFactor)*overscanLength);var overscanEnd=Math.max(0,visibleEnd+leadFactor*overscanLength);var lastItemOffset=getFrameMetricsApprox(itemCount-1).offset;if(lastItemOffset<overscanBegin){return{first:Math.max(0,itemCount-1-maxToRenderPerBatch),last:itemCount-1};}var _elementsThatOverlapO=elementsThatOverlapOffsets([overscanBegin,visibleBegin,visibleEnd,overscanEnd],props.getItemCount(props.data),getFrameMetricsApprox),overscanFirst=_elementsThatOverlapO[0],first=_elementsThatOverlapO[1],last=_elementsThatOverlapO[2],overscanLast=_elementsThatOverlapO[3];overscanFirst=overscanFirst==null?0:overscanFirst;first=first==null?Math.max(0,overscanFirst):first;overscanLast=overscanLast==null?itemCount-1:overscanLast;last=last==null?Math.min(overscanLast,first+maxToRenderPerBatch-1):last;var visible={first:first,last:last};var newCellCount=newRangeCount(prev,visible);while(true){if(first<=overscanFirst&&last>=overscanLast){break;}var maxNewCells=newCellCount>=maxToRenderPerBatch;var firstWillAddMore=first<=prev.first||first>prev.last;var firstShouldIncrement=first>overscanFirst&&(!maxNewCells||!firstWillAddMore);var lastWillAddMore=last>=prev.last||last<prev.first;var lastShouldIncrement=last<overscanLast&&(!maxNewCells||!lastWillAddMore);if(maxNewCells&&!firstShouldIncrement&&!lastShouldIncrement){break;}if(firstShouldIncrement&&!(fillPreference==='after'&&lastShouldIncrement&&lastWillAddMore)){if(firstWillAddMore){newCellCount++;}first--;}if(lastShouldIncrement&&!(fillPreference==='before'&&firstShouldIncrement&&firstWillAddMore)){if(lastWillAddMore){newCellCount++;}last++;}}if(!(last>=first&&first>=0&&last<itemCount&&first>=overscanFirst&&last<=overscanLast&&first<=visible.first&&last>=visible.last)){throw new Error('Bad window calculation '+JSON.stringify({first:first,last:last,itemCount:itemCount,overscanFirst:overscanFirst,overscanLast:overscanLast,visible:visible}));}return{first:first,last:last};}var VirtualizeUtils={computeWindowedRenderLimits:computeWindowedRenderLimits,elementsThatOverlapOffsets:elementsThatOverlapOffsets,newRangeCount:newRangeCount};/* harmony default export */ var react_native_VirtualizeUtils = (VirtualizeUtils);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/index.js
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function VirtualizedList_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function VirtualizedList_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){VirtualizedList_ownKeys(Object(source),true).forEach(function(key){VirtualizedList_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{VirtualizedList_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function VirtualizedList_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var flattenStyle=StyleSheet["a" /* default */].flatten;var __DEV__="production"!=='production';var _usedIndexForKey=false;var _keylessItemComponentName='';var VirtualizedList_VirtualizedList=function(_React$PureComponent){_inheritsLoose(VirtualizedList,_React$PureComponent);var _proto=VirtualizedList.prototype;_proto.scrollToEnd=function scrollToEnd(params){var animated=params?params.animated:true;var veryLast=this.props.getItemCount(this.props.data)-1;var frame=this._getFrameMetricsApprox(veryLast);var offset=Math.max(0,frame.offset+frame.length+this._footerLength-this._scrollMetrics.visibleLength);this._scrollRef.scrollTo(this.props.horizontal?{x:offset,animated:animated}:{y:offset,animated:animated});};_proto.scrollToIndex=function scrollToIndex(params){var _this$props=this.props,data=_this$props.data,horizontal=_this$props.horizontal,getItemCount=_this$props.getItemCount,getItemLayout=_this$props.getItemLayout,onScrollToIndexFailed=_this$props.onScrollToIndexFailed;var animated=params.animated,index=params.index,viewOffset=params.viewOffset,viewPosition=params.viewPosition;invariant_default()(index>=0&&index<getItemCount(data),"scrollToIndex out of range: "+index+" vs "+(getItemCount(data)-1));if(!getItemLayout&&index>this._highestMeasuredFrameIndex){invariant_default()(!!onScrollToIndexFailed,'scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, '+'otherwise there is no way to know the location of offscreen indices or handle failures.');onScrollToIndexFailed({averageItemLength:this._averageCellLength,highestMeasuredFrameIndex:this._highestMeasuredFrameIndex,index:index});return;}var frame=this._getFrameMetricsApprox(index);var offset=Math.max(0,frame.offset-(viewPosition||0)*(this._scrollMetrics.visibleLength-frame.length))-(viewOffset||0);this._scrollRef.scrollTo(horizontal?{x:offset,animated:animated}:{y:offset,animated:animated});};_proto.scrollToItem=function scrollToItem(params){var item=params.item;var _this$props2=this.props,data=_this$props2.data,getItem=_this$props2.getItem,getItemCount=_this$props2.getItemCount;var itemCount=getItemCount(data);for(var _index=0;_index<itemCount;_index++){if(getItem(data,_index)===item){this.scrollToIndex(VirtualizedList_objectSpread({},params,{index:_index}));break;}}};_proto.scrollToOffset=function scrollToOffset(params){var animated=params.animated,offset=params.offset;this._scrollRef.scrollTo(this.props.horizontal?{x:offset,animated:animated}:{y:offset,animated:animated});};_proto.recordInteraction=function recordInteraction(){this._nestedChildLists.forEach(function(childList){childList.ref&&childList.ref.recordInteraction();});this._viewabilityTuples.forEach(function(t){t.viewabilityHelper.recordInteraction();});this._updateViewableItems(this.props.data);};_proto.flashScrollIndicators=function flashScrollIndicators(){this._scrollRef.flashScrollIndicators();};_proto.getScrollResponder=function getScrollResponder(){if(this._scrollRef&&this._scrollRef.getScrollResponder){return this._scrollRef.getScrollResponder();}};_proto.getScrollableNode=function getScrollableNode(){if(this._scrollRef&&this._scrollRef.getScrollableNode){return this._scrollRef.getScrollableNode();}else{return Object(findNodeHandle["a" /* default */])(this._scrollRef);}};_proto.getScrollRef=function getScrollRef(){if(this._scrollRef&&this._scrollRef.getScrollRef){return this._scrollRef.getScrollRef();}else{return this._scrollRef;}};_proto.setNativeProps=function setNativeProps(props){if(this._scrollRef){this._scrollRef.setNativeProps(props);}};_proto.getChildContext=function getChildContext(){return{virtualizedList:{getScrollMetrics:this._getScrollMetrics,horizontal:this.props.horizontal,getOutermostParentListRef:this._getOutermostParentListRef,getNestedChildState:this._getNestedChildState,registerAsNestedChild:this._registerAsNestedChild,unregisterAsNestedChild:this._unregisterAsNestedChild}};};_proto._getCellKey=function _getCellKey(){return this.context.virtualizedCell&&this.context.virtualizedCell.cellKey||'rootList';};_proto.hasMore=function hasMore(){return this._hasMore;};function VirtualizedList(_props,context){var _this;_this=_React$PureComponent.call(this,_props,context)||this;_this._getScrollMetrics=function(){return _this._scrollMetrics;};_this._getOutermostParentListRef=function(){if(_this._isNestedWithSameOrientation()){return _this.context.virtualizedList.getOutermostParentListRef();}else{return _assertThisInitialized(_this);}};_this._getNestedChildState=function(key){var existingChildData=_this._nestedChildLists.get(key);return existingChildData&&existingChildData.state;};_this._registerAsNestedChild=function(childList){var childListsInCell=_this._cellKeysToChildListKeys.get(childList.cellKey)||new Set();childListsInCell.add(childList.key);_this._cellKeysToChildListKeys.set(childList.cellKey,childListsInCell);var existingChildData=_this._nestedChildLists.get(childList.key);if(existingChildData&&existingChildData.ref!==null){console.error('A VirtualizedList contains a cell which itself contains '+'more than one VirtualizedList of the same orientation as the parent '+'list. You must pass a unique listKey prop to each sibling list.');}_this._nestedChildLists.set(childList.key,{ref:childList.ref,state:null});if(_this._hasInteracted){childList.ref.recordInteraction();}};_this._unregisterAsNestedChild=function(childList){_this._nestedChildLists.set(childList.key,{ref:null,state:childList.state});};_this._onUpdateSeparators=function(keys,newProps){keys.forEach(function(key){var ref=key!=null&&_this._cellRefs[key];ref&&ref.updateSeparatorProps(newProps);});};_this._averageCellLength=0;_this._cellKeysToChildListKeys=new Map();_this._cellRefs={};_this._frames={};_this._footerLength=0;_this._hasDataChangedSinceEndReached=true;_this._hasDoneInitialScroll=false;_this._hasInteracted=false;_this._hasMore=false;_this._hasWarned={};_this._headerLength=0;_this._hiPriInProgress=false;_this._highestMeasuredFrameIndex=0;_this._indicesToKeys=new Map();_this._nestedChildLists=new Map();_this._offsetFromParentVirtualizedList=0;_this._prevParentOffset=0;_this._scrollMetrics={contentLength:0,dOffset:0,dt:10,offset:0,timestamp:0,velocity:0,visibleLength:0};_this._scrollRef=null;_this._sentEndForContentLength=0;_this._totalCellLength=0;_this._totalCellsMeasured=0;_this._viewabilityTuples=[];_this._captureScrollRef=function(ref){_this._scrollRef=ref;};_this._defaultRenderScrollComponent=function(props){var onRefresh=props.onRefresh;if(_this._isNestedWithSameOrientation()){return react["createElement"](View["a" /* default */],props);}else if(onRefresh){invariant_default()(typeof props.refreshing==='boolean','`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `'+JSON.stringify(props.refreshing)+'`');return react["createElement"](ScrollView["a" /* default */],_extends({},props,{refreshControl:props.refreshControl==null?react["createElement"](RefreshControl["a" /* default */],{refreshing:props.refreshing,onRefresh:onRefresh,progressViewOffset:props.progressViewOffset}):props.refreshControl}));}else{return react["createElement"](ScrollView["a" /* default */],props);}};_this._onCellUnmount=function(cellKey){var curr=_this._frames[cellKey];if(curr){_this._frames[cellKey]=VirtualizedList_objectSpread({},curr,{inLayout:false});}};_this._onLayout=function(e){if(_this._isNestedWithSameOrientation()){_this.measureLayoutRelativeToContainingList();}else{_this._scrollMetrics.visibleLength=_this._selectLength(e.nativeEvent.layout);}_this.props.onLayout&&_this.props.onLayout(e);_this._scheduleCellsToRenderUpdate();_this._maybeCallOnEndReached();};_this._onLayoutEmpty=function(e){_this.props.onLayout&&_this.props.onLayout(e);};_this._onLayoutFooter=function(e){_this._footerLength=_this._selectLength(e.nativeEvent.layout);};_this._onLayoutHeader=function(e){_this._headerLength=_this._selectLength(e.nativeEvent.layout);};_this._onContentSizeChange=function(width,height){if(width>0&&height>0&&_this.props.initialScrollIndex!=null&&_this.props.initialScrollIndex>0&&!_this._hasDoneInitialScroll){_this.scrollToIndex({animated:false,index:_this.props.initialScrollIndex});_this._hasDoneInitialScroll=true;}if(_this.props.onContentSizeChange){_this.props.onContentSizeChange(width,height);}_this._scrollMetrics.contentLength=_this._selectLength({height:height,width:width});_this._scheduleCellsToRenderUpdate();_this._maybeCallOnEndReached();};_this._convertParentScrollMetrics=function(metrics){var offset=metrics.offset-_this._offsetFromParentVirtualizedList;var visibleLength=metrics.visibleLength;var dOffset=offset-_this._scrollMetrics.offset;var contentLength=_this._scrollMetrics.contentLength;return{visibleLength:visibleLength,contentLength:contentLength,offset:offset,dOffset:dOffset};};_this._onScroll=function(e){_this._nestedChildLists.forEach(function(childList){childList.ref&&childList.ref._onScroll(e);});if(_this.props.onScroll){_this.props.onScroll(e);}var timestamp=e.timeStamp;var visibleLength=_this._selectLength(e.nativeEvent.layoutMeasurement);var contentLength=_this._selectLength(e.nativeEvent.contentSize);var offset=_this._selectOffset(e.nativeEvent.contentOffset);var dOffset=offset-_this._scrollMetrics.offset;if(_this._isNestedWithSameOrientation()){if(_this._scrollMetrics.contentLength===0){return;}var _this$_convertParentS=_this._convertParentScrollMetrics({visibleLength:visibleLength,offset:offset});visibleLength=_this$_convertParentS.visibleLength;contentLength=_this$_convertParentS.contentLength;offset=_this$_convertParentS.offset;dOffset=_this$_convertParentS.dOffset;}var dt=_this._scrollMetrics.timestamp?Math.max(1,timestamp-_this._scrollMetrics.timestamp):1;var velocity=dOffset/dt;if(dt>500&&_this._scrollMetrics.dt>500&&contentLength>5*visibleLength&&!_this._hasWarned.perf){react_native_infoLog('VirtualizedList: You have a large list that is slow to update - make sure your '+'renderItem function renders components that follow React performance best practices '+'like PureComponent, shouldComponentUpdate, etc.',{dt:dt,prevDt:_this._scrollMetrics.dt,contentLength:contentLength});_this._hasWarned.perf=true;}_this._scrollMetrics={contentLength:contentLength,dt:dt,dOffset:dOffset,offset:offset,timestamp:timestamp,velocity:velocity,visibleLength:visibleLength};_this._updateViewableItems(_this.props.data);if(!_this.props){return;}_this._maybeCallOnEndReached();if(velocity!==0){_this._fillRateHelper.activate();}_this._computeBlankness();_this._scheduleCellsToRenderUpdate();};_this._onScrollBeginDrag=function(e){_this._nestedChildLists.forEach(function(childList){childList.ref&&childList.ref._onScrollBeginDrag(e);});_this._viewabilityTuples.forEach(function(tuple){tuple.viewabilityHelper.recordInteraction();});_this._hasInteracted=true;_this.props.onScrollBeginDrag&&_this.props.onScrollBeginDrag(e);};_this._onScrollEndDrag=function(e){var velocity=e.nativeEvent.velocity;if(velocity){_this._scrollMetrics.velocity=_this._selectOffset(velocity);}_this._computeBlankness();_this.props.onScrollEndDrag&&_this.props.onScrollEndDrag(e);};_this._onMomentumScrollEnd=function(e){_this._scrollMetrics.velocity=0;_this._computeBlankness();_this.props.onMomentumScrollEnd&&_this.props.onMomentumScrollEnd(e);};_this._updateCellsToRender=function(){var _this$props3=_this.props,data=_this$props3.data,getItemCount=_this$props3.getItemCount,onEndReachedThreshold=_this$props3.onEndReachedThreshold;var isVirtualizationDisabled=_this._isVirtualizationDisabled();_this._updateViewableItems(data);if(!data){return;}_this.setState(function(state){var newState;if(!isVirtualizationDisabled){if(_this._scrollMetrics.visibleLength){if(!_this.props.initialScrollIndex||_this._scrollMetrics.offset){newState=computeWindowedRenderLimits(_this.props,state,_this._getFrameMetricsApprox,_this._scrollMetrics);}}}else{var _this$_scrollMetrics=_this._scrollMetrics,contentLength=_this$_scrollMetrics.contentLength,offset=_this$_scrollMetrics.offset,visibleLength=_this$_scrollMetrics.visibleLength;var distanceFromEnd=contentLength-visibleLength-offset;var renderAhead=distanceFromEnd<onEndReachedThreshold*visibleLength?_this.props.maxToRenderPerBatch:0;newState={first:0,last:Math.min(state.last+renderAhead,getItemCount(data)-1)};}if(newState&&_this._nestedChildLists.size>0){var newFirst=newState.first;var newLast=newState.last;for(var ii=newFirst;ii<=newLast;ii++){var cellKeyForIndex=_this._indicesToKeys.get(ii);var childListKeys=cellKeyForIndex&&_this._cellKeysToChildListKeys.get(cellKeyForIndex);if(!childListKeys){continue;}var someChildHasMore=false;for(var _iterator=childListKeys,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var childKey=_ref;var childList=_this._nestedChildLists.get(childKey);if(childList&&childList.ref&&childList.ref.hasMore()){someChildHasMore=true;break;}}if(someChildHasMore){newState.last=ii;break;}}}return newState;});};_this._createViewToken=function(index,isViewable){var _this$props4=_this.props,data=_this$props4.data,getItem=_this$props4.getItem,keyExtractor=_this$props4.keyExtractor;var item=getItem(data,index);return{index:index,item:item,key:keyExtractor(item,index),isViewable:isViewable};};_this._getFrameMetricsApprox=function(index){var frame=_this._getFrameMetrics(index);if(frame&&frame.index===index){return frame;}else{var getItemLayout=_this.props.getItemLayout;invariant_default()(!getItemLayout,'Should not have to estimate frames when a measurement metrics function is provided');return{length:_this._averageCellLength,offset:_this._averageCellLength*index};}};_this._getFrameMetrics=function(index){var _this$props5=_this.props,data=_this$props5.data,getItem=_this$props5.getItem,getItemCount=_this$props5.getItemCount,getItemLayout=_this$props5.getItemLayout,keyExtractor=_this$props5.keyExtractor;invariant_default()(getItemCount(data)>index,'Tried to get frame for out of range index '+index);var item=getItem(data,index);var frame=item&&_this._frames[keyExtractor(item,index)];if(!frame||frame.index!==index){if(getItemLayout){frame=getItemLayout(data,index);if(__DEV__){var frameType=prop_types_default.a.shape({length:prop_types_default.a.number.isRequired,offset:prop_types_default.a.number.isRequired,index:prop_types_default.a.number.isRequired}).isRequired;prop_types_default.a.checkPropTypes({frame:frameType},{frame:frame},'frame','VirtualizedList.getItemLayout');}}}return frame;};invariant_default()(!_props.onScroll||!_props.onScroll.__isNative,'Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent '+'to support native onScroll events with useNativeDriver');invariant_default()(_props.windowSize>0,'VirtualizedList: The windowSize prop must be present and set to a value greater than 0.');_this._fillRateHelper=new react_native_FillRateHelper(_this._getFrameMetrics);_this._updateCellsToRenderBatcher=new react_native_Batchinator(_this._updateCellsToRender,_this.props.updateCellsBatchingPeriod);if(_this.props.viewabilityConfigCallbackPairs){_this._viewabilityTuples=_this.props.viewabilityConfigCallbackPairs.map(function(pair){return{viewabilityHelper:new react_native_ViewabilityHelper(pair.viewabilityConfig),onViewableItemsChanged:pair.onViewableItemsChanged};});}else if(_this.props.onViewableItemsChanged){_this._viewabilityTuples.push({viewabilityHelper:new react_native_ViewabilityHelper(_this.props.viewabilityConfig),onViewableItemsChanged:_this.props.onViewableItemsChanged});}var initialState={first:_this.props.initialScrollIndex||0,last:Math.min(_this.props.getItemCount(_this.props.data),(_this.props.initialScrollIndex||0)+_this.props.initialNumToRender)-1};if(_this._isNestedWithSameOrientation()){var storedState=_this.context.virtualizedList.getNestedChildState(_this.props.listKey||_this._getCellKey());if(storedState){initialState=storedState;_this.state=storedState;_this._frames=storedState.frames;}}_this.state=initialState;return _this;}_proto.componentDidMount=function componentDidMount(){if(this._isNestedWithSameOrientation()){this.context.virtualizedList.registerAsNestedChild({cellKey:this._getCellKey(),key:this.props.listKey||this._getCellKey(),ref:this});}};_proto.componentWillUnmount=function componentWillUnmount(){if(this._isNestedWithSameOrientation()){this.context.virtualizedList.unregisterAsNestedChild({key:this.props.listKey||this._getCellKey(),state:{first:this.state.first,last:this.state.last,frames:this._frames}});}this._updateViewableItems(null);this._updateCellsToRenderBatcher.dispose({abort:true});this._viewabilityTuples.forEach(function(tuple){tuple.viewabilityHelper.dispose();});this._fillRateHelper.deactivateAndFlush();};VirtualizedList.getDerivedStateFromProps=function getDerivedStateFromProps(newProps,prevState){var data=newProps.data,getItemCount=newProps.getItemCount,maxToRenderPerBatch=newProps.maxToRenderPerBatch;return{first:Math.max(0,Math.min(prevState.first,getItemCount(data)-1-maxToRenderPerBatch)),last:Math.max(0,Math.min(prevState.last,getItemCount(data)-1))};};_proto._pushCells=function _pushCells(cells,stickyHeaderIndices,stickyIndicesFromProps,first,last,inversionStyle){var _this2=this;var _this$props6=this.props,CellRendererComponent=_this$props6.CellRendererComponent,ItemSeparatorComponent=_this$props6.ItemSeparatorComponent,data=_this$props6.data,getItem=_this$props6.getItem,getItemCount=_this$props6.getItemCount,horizontal=_this$props6.horizontal,keyExtractor=_this$props6.keyExtractor;var stickyOffset=this.props.ListHeaderComponent?1:0;var end=getItemCount(data)-1;var prevCellKey;last=Math.min(end,last);var _loop=function _loop(ii){var item=getItem(data,ii);var key=keyExtractor(item,ii);_this2._indicesToKeys.set(ii,key);if(stickyIndicesFromProps.has(ii+stickyOffset)){stickyHeaderIndices.push(cells.length);}cells.push(react["createElement"](VirtualizedList_CellRenderer,{CellRendererComponent:CellRendererComponent,ItemSeparatorComponent:ii<end?ItemSeparatorComponent:undefined,cellKey:key,fillRateHelper:_this2._fillRateHelper,horizontal:horizontal,index:ii,inversionStyle:inversionStyle,item:item,key:key,prevCellKey:prevCellKey,onUpdateSeparators:_this2._onUpdateSeparators,onLayout:function onLayout(e){return _this2._onCellLayout(e,key,ii);},onUnmount:_this2._onCellUnmount,parentProps:_this2.props,ref:function ref(_ref2){_this2._cellRefs[key]=_ref2;}}));prevCellKey=key;};for(var ii=first;ii<=last;ii++){_loop(ii);}};_proto._isVirtualizationDisabled=function _isVirtualizationDisabled(){return this.props.disableVirtualization||false;};_proto._isNestedWithSameOrientation=function _isNestedWithSameOrientation(){var nestedContext=this.context.virtualizedList;return!!(nestedContext&&!!nestedContext.horizontal===!!this.props.horizontal);};_proto.render=function render(){var _this3=this;if(__DEV__){var flatStyles=flattenStyle(this.props.contentContainerStyle);warning_default()(flatStyles==null||flatStyles.flexWrap!=='wrap','`flexWrap: `wrap`` is not supported with the `VirtualizedList` components.'+'Consider using `numColumns` with `FlatList` instead.');}var _this$props7=this.props,ListEmptyComponent=_this$props7.ListEmptyComponent,ListFooterComponent=_this$props7.ListFooterComponent,ListHeaderComponent=_this$props7.ListHeaderComponent;var _this$props8=this.props,data=_this$props8.data,horizontal=_this$props8.horizontal;var isVirtualizationDisabled=this._isVirtualizationDisabled();var inversionStyle=this.props.inverted?this.props.horizontal?styles.horizontallyInverted:styles.verticallyInverted:null;var cells=[];var stickyIndicesFromProps=new Set(this.props.stickyHeaderIndices);var stickyHeaderIndices=[];if(ListHeaderComponent){if(stickyIndicesFromProps.has(0)){stickyHeaderIndices.push(0);}var element=react["isValidElement"](ListHeaderComponent)?ListHeaderComponent:react["createElement"](ListHeaderComponent,null);cells.push(react["createElement"](VirtualizedCellWrapper,{cellKey:this._getCellKey()+'-header',key:"$header"},react["createElement"](View["a" /* default */],{onLayout:this._onLayoutHeader,style:StyleSheet["a" /* default */].compose(inversionStyle,this.props.ListHeaderComponentStyle)},element)));}var itemCount=this.props.getItemCount(data);if(itemCount>0){_usedIndexForKey=false;_keylessItemComponentName='';var spacerKey=!horizontal?'height':'width';var lastInitialIndex=this.props.initialScrollIndex?-1:this.props.initialNumToRender-1;var _this$state=this.state,first=_this$state.first,last=_this$state.last;this._pushCells(cells,stickyHeaderIndices,stickyIndicesFromProps,0,lastInitialIndex,inversionStyle);var firstAfterInitial=Math.max(lastInitialIndex+1,first);if(!isVirtualizationDisabled&&first>lastInitialIndex+1){var insertedStickySpacer=false;if(stickyIndicesFromProps.size>0){var stickyOffset=ListHeaderComponent?1:0;for(var ii=firstAfterInitial-1;ii>lastInitialIndex;ii--){if(stickyIndicesFromProps.has(ii+stickyOffset)){var _ref3,_ref4;var initBlock=this._getFrameMetricsApprox(lastInitialIndex);var stickyBlock=this._getFrameMetricsApprox(ii);var leadSpace=stickyBlock.offset-initBlock.offset-(this.props.initialScrollIndex?0:initBlock.length);cells.push(react["createElement"](View["a" /* default */],{key:"$sticky_lead",style:(_ref3={},_ref3[spacerKey]=leadSpace,_ref3)}));this._pushCells(cells,stickyHeaderIndices,stickyIndicesFromProps,ii,ii,inversionStyle);var trailSpace=this._getFrameMetricsApprox(first).offset-(stickyBlock.offset+stickyBlock.length);cells.push(react["createElement"](View["a" /* default */],{key:"$sticky_trail",style:(_ref4={},_ref4[spacerKey]=trailSpace,_ref4)}));insertedStickySpacer=true;break;}}}if(!insertedStickySpacer){var _ref5;var _initBlock=this._getFrameMetricsApprox(lastInitialIndex);var firstSpace=this._getFrameMetricsApprox(first).offset-(_initBlock.offset+_initBlock.length);cells.push(react["createElement"](View["a" /* default */],{key:"$lead_spacer",style:(_ref5={},_ref5[spacerKey]=firstSpace,_ref5)}));}}this._pushCells(cells,stickyHeaderIndices,stickyIndicesFromProps,firstAfterInitial,last,inversionStyle);if(!this._hasWarned.keys&&_usedIndexForKey){console.warn('VirtualizedList: missing keys for items, make sure to specify a key or id property on each '+'item or provide a custom keyExtractor.',_keylessItemComponentName);this._hasWarned.keys=true;}if(!isVirtualizationDisabled&&last<itemCount-1){var _ref6;var lastFrame=this._getFrameMetricsApprox(last);var end=this.props.getItemLayout?itemCount-1:Math.min(itemCount-1,this._highestMeasuredFrameIndex);var endFrame=this._getFrameMetricsApprox(end);var tailSpacerLength=endFrame.offset+endFrame.length-(lastFrame.offset+lastFrame.length);cells.push(react["createElement"](View["a" /* default */],{key:"$tail_spacer",style:(_ref6={},_ref6[spacerKey]=tailSpacerLength,_ref6)}));}}else if(ListEmptyComponent){var _element=react["isValidElement"](ListEmptyComponent)?ListEmptyComponent:react["createElement"](ListEmptyComponent,null);cells.push(react["cloneElement"](_element,{key:'$empty',onLayout:function onLayout(event){_this3._onLayoutEmpty(event);if(_element.props.onLayout){_element.props.onLayout(event);}},style:StyleSheet["a" /* default */].compose(inversionStyle,_element.props.style)}));}if(ListFooterComponent){var _element2=react["isValidElement"](ListFooterComponent)?ListFooterComponent:react["createElement"](ListFooterComponent,null);cells.push(react["createElement"](VirtualizedCellWrapper,{cellKey:this._getCellKey()+'-footer',key:"$footer"},react["createElement"](View["a" /* default */],{onLayout:this._onLayoutFooter,style:StyleSheet["a" /* default */].compose(inversionStyle,this.props.ListFooterComponentStyle)},_element2)));}var scrollProps=VirtualizedList_objectSpread({},this.props,{onContentSizeChange:this._onContentSizeChange,onLayout:this._onLayout,onScroll:this._onScroll,onScrollBeginDrag:this._onScrollBeginDrag,onScrollEndDrag:this._onScrollEndDrag,onMomentumScrollEnd:this._onMomentumScrollEnd,scrollEventThrottle:this.props.scrollEventThrottle,invertStickyHeaders:this.props.invertStickyHeaders!==undefined?this.props.invertStickyHeaders:this.props.inverted,stickyHeaderIndices:stickyHeaderIndices});if(inversionStyle){scrollProps.style=[inversionStyle,this.props.style];}this._hasMore=this.state.last<this.props.getItemCount(this.props.data)-1;var ret=react["cloneElement"]((this.props.renderScrollComponent||this._defaultRenderScrollComponent)(scrollProps),{ref:this._captureScrollRef},cells);if(this.props.debug){return react["createElement"](View["a" /* default */],{style:styles.debug},ret,this._renderDebugOverlay());}else{return ret;}};_proto.componentDidUpdate=function componentDidUpdate(prevProps){var _this$props9=this.props,data=_this$props9.data,extraData=_this$props9.extraData;if(data!==prevProps.data||extraData!==prevProps.extraData){this._hasDataChangedSinceEndReached=true;this._viewabilityTuples.forEach(function(tuple){tuple.viewabilityHelper.resetViewableIndices();});}var hiPriInProgress=this._hiPriInProgress;this._scheduleCellsToRenderUpdate();if(hiPriInProgress){this._hiPriInProgress=false;}};_proto._computeBlankness=function _computeBlankness(){this._fillRateHelper.computeBlankness(this.props,this.state,this._scrollMetrics);};_proto._onCellLayout=function _onCellLayout(e,cellKey,index){var layout=e.nativeEvent.layout;var next={offset:this._selectOffset(layout),length:this._selectLength(layout),index:index,inLayout:true};var curr=this._frames[cellKey];if(!curr||next.offset!==curr.offset||next.length!==curr.length||index!==curr.index){this._totalCellLength+=next.length-(curr?curr.length:0);this._totalCellsMeasured+=curr?0:1;this._averageCellLength=this._totalCellLength/this._totalCellsMeasured;this._frames[cellKey]=next;this._highestMeasuredFrameIndex=Math.max(this._highestMeasuredFrameIndex,index);this._scheduleCellsToRenderUpdate();}else{this._frames[cellKey].inLayout=true;}var childListKeys=this._cellKeysToChildListKeys.get(cellKey);if(childListKeys){for(var _iterator2=childListKeys,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref7;if(_isArray2){if(_i2>=_iterator2.length)break;_ref7=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref7=_i2.value;}var childKey=_ref7;var childList=this._nestedChildLists.get(childKey);childList&&childList.ref&&childList.ref.measureLayoutRelativeToContainingList();}}this._computeBlankness();this._updateViewableItems(this.props.data);};_proto.measureLayoutRelativeToContainingList=function measureLayoutRelativeToContainingList(){var _this4=this;try{if(!this._scrollRef){return;}this._scrollRef.measureLayout(this.context.virtualizedList.getOutermostParentListRef().getScrollRef().getNativeScrollRef(),function(x,y,width,height){_this4._offsetFromParentVirtualizedList=_this4._selectOffset({x:x,y:y});_this4._scrollMetrics.contentLength=_this4._selectLength({width:width,height:height});var scrollMetrics=_this4._convertParentScrollMetrics(_this4.context.virtualizedList.getScrollMetrics());_this4._scrollMetrics.visibleLength=scrollMetrics.visibleLength;_this4._scrollMetrics.offset=scrollMetrics.offset;},function(error){console.warn("VirtualizedList: Encountered an error while measuring a list's"+' offset from its containing VirtualizedList.');});}catch(error){console.warn('measureLayoutRelativeToContainingList threw an error',error.stack);}};_proto._renderDebugOverlay=function _renderDebugOverlay(){var normalize=this._scrollMetrics.visibleLength/(this._scrollMetrics.contentLength||1);var framesInLayout=[];var itemCount=this.props.getItemCount(this.props.data);for(var ii=0;ii<itemCount;ii++){var frame=this._getFrameMetricsApprox(ii);if(frame.inLayout){framesInLayout.push(frame);}}var windowTop=this._getFrameMetricsApprox(this.state.first).offset;var frameLast=this._getFrameMetricsApprox(this.state.last);var windowLen=frameLast.offset+frameLast.length-windowTop;var visTop=this._scrollMetrics.offset;var visLen=this._scrollMetrics.visibleLength;return react["createElement"](View["a" /* default */],{style:[styles.debugOverlayBase,styles.debugOverlay]},framesInLayout.map(function(f,ii){return react["createElement"](View["a" /* default */],{key:'f'+ii,style:[styles.debugOverlayBase,styles.debugOverlayFrame,{top:f.offset*normalize,height:f.length*normalize}]});}),react["createElement"](View["a" /* default */],{style:[styles.debugOverlayBase,styles.debugOverlayFrameLast,{top:windowTop*normalize,height:windowLen*normalize}]}),react["createElement"](View["a" /* default */],{style:[styles.debugOverlayBase,styles.debugOverlayFrameVis,{top:visTop*normalize,height:visLen*normalize}]}));};_proto._selectLength=function _selectLength(metrics){return!this.props.horizontal?metrics.height:metrics.width;};_proto._selectOffset=function _selectOffset(metrics){return!this.props.horizontal?metrics.y:metrics.x;};_proto._maybeCallOnEndReached=function _maybeCallOnEndReached(){var _this$props10=this.props,data=_this$props10.data,getItemCount=_this$props10.getItemCount,onEndReached=_this$props10.onEndReached,onEndReachedThreshold=_this$props10.onEndReachedThreshold;var _this$_scrollMetrics2=this._scrollMetrics,contentLength=_this$_scrollMetrics2.contentLength,visibleLength=_this$_scrollMetrics2.visibleLength,offset=_this$_scrollMetrics2.offset;var distanceFromEnd=contentLength-visibleLength-offset;if(onEndReached&&this.state.last===getItemCount(data)-1&&distanceFromEnd<onEndReachedThreshold*visibleLength&&(this._hasDataChangedSinceEndReached||this._scrollMetrics.contentLength!==this._sentEndForContentLength)){this._hasDataChangedSinceEndReached=false;this._sentEndForContentLength=this._scrollMetrics.contentLength;onEndReached({distanceFromEnd:distanceFromEnd});}};_proto._scheduleCellsToRenderUpdate=function _scheduleCellsToRenderUpdate(){var _this$state2=this.state,first=_this$state2.first,last=_this$state2.last;var _this$_scrollMetrics3=this._scrollMetrics,offset=_this$_scrollMetrics3.offset,visibleLength=_this$_scrollMetrics3.visibleLength,velocity=_this$_scrollMetrics3.velocity;var itemCount=this.props.getItemCount(this.props.data);var hiPri=false;var scrollingThreshold=this.props.onEndReachedThreshold*visibleLength/2;if(first>0){var distTop=offset-this._getFrameMetricsApprox(first).offset;hiPri=hiPri||distTop<0||velocity<-2&&distTop<scrollingThreshold;}if(last<itemCount-1){var distBottom=this._getFrameMetricsApprox(last).offset-(offset+visibleLength);hiPri=hiPri||distBottom<0||velocity>2&&distBottom<scrollingThreshold;}if(hiPri&&(this._averageCellLength||this.props.getItemLayout)&&!this._hiPriInProgress){this._hiPriInProgress=true;this._updateCellsToRenderBatcher.dispose({abort:true});this._updateCellsToRender();return;}else{this._updateCellsToRenderBatcher.schedule();}};_proto._updateViewableItems=function _updateViewableItems(data){var _this5=this;var getItemCount=this.props.getItemCount;this._viewabilityTuples.forEach(function(tuple){tuple.viewabilityHelper.onUpdate(getItemCount(data),_this5._scrollMetrics.offset,_this5._scrollMetrics.visibleLength,_this5._getFrameMetrics,_this5._createViewToken,tuple.onViewableItemsChanged,_this5.state);});};return VirtualizedList;}(react["PureComponent"]);VirtualizedList_VirtualizedList.defaultProps={disableVirtualization:false,horizontal:false,initialNumToRender:10,keyExtractor:function keyExtractor(item,index){if(item.key!=null){return item.key;}if(item.id!=null){return item.id;}_usedIndexForKey=true;if(item.type&&item.type.displayName){_keylessItemComponentName=item.type.displayName;}return String(index);},maxToRenderPerBatch:10,onEndReachedThreshold:2,scrollEventThrottle:50,updateCellsBatchingPeriod:50,windowSize:21};VirtualizedList_VirtualizedList.contextTypes={virtualizedCell:prop_types_default.a.shape({cellKey:prop_types_default.a.string}),virtualizedList:prop_types_default.a.shape({getScrollMetrics:prop_types_default.a.func,horizontal:prop_types_default.a.bool,getOutermostParentListRef:prop_types_default.a.func,getNestedChildState:prop_types_default.a.func,registerAsNestedChild:prop_types_default.a.func,unregisterAsNestedChild:prop_types_default.a.func})};VirtualizedList_VirtualizedList.childContextTypes={virtualizedList:prop_types_default.a.shape({getScrollMetrics:prop_types_default.a.func,horizontal:prop_types_default.a.bool,getOutermostParentListRef:prop_types_default.a.func,getNestedChildState:prop_types_default.a.func,registerAsNestedChild:prop_types_default.a.func,unregisterAsNestedChild:prop_types_default.a.func})};var VirtualizedList_CellRenderer=function(_React$Component){_inheritsLoose(CellRenderer,_React$Component);function CellRenderer(){var _this6;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this6=_React$Component.call.apply(_React$Component,[this].concat(args))||this;_this6.state={separatorProps:{highlighted:false,leadingItem:_this6.props.item}};_this6._separators={highlight:function highlight(){var _this6$props=_this6.props,cellKey=_this6$props.cellKey,prevCellKey=_this6$props.prevCellKey;_this6.props.onUpdateSeparators([cellKey,prevCellKey],{highlighted:true});},unhighlight:function unhighlight(){var _this6$props2=_this6.props,cellKey=_this6$props2.cellKey,prevCellKey=_this6$props2.prevCellKey;_this6.props.onUpdateSeparators([cellKey,prevCellKey],{highlighted:false});},updateProps:function updateProps(select,newProps){var _this6$props3=_this6.props,cellKey=_this6$props3.cellKey,prevCellKey=_this6$props3.prevCellKey;_this6.props.onUpdateSeparators([select==='leading'?prevCellKey:cellKey],newProps);}};return _this6;}var _proto2=CellRenderer.prototype;_proto2.getChildContext=function getChildContext(){return{virtualizedCell:{cellKey:this.props.cellKey}};};_proto2.updateSeparatorProps=function updateSeparatorProps(newProps){this.setState(function(state){return{separatorProps:VirtualizedList_objectSpread({},state.separatorProps,{},newProps)};});};_proto2.componentWillUnmount=function componentWillUnmount(){this.props.onUnmount(this.props.cellKey);};_proto2.render=function render(){var _this$props11=this.props,CellRendererComponent=_this$props11.CellRendererComponent,ItemSeparatorComponent=_this$props11.ItemSeparatorComponent,fillRateHelper=_this$props11.fillRateHelper,horizontal=_this$props11.horizontal,item=_this$props11.item,index=_this$props11.index,inversionStyle=_this$props11.inversionStyle,parentProps=_this$props11.parentProps;var renderItem=parentProps.renderItem,getItemLayout=parentProps.getItemLayout;invariant_default()(renderItem,'no renderItem!');var element=renderItem({item:item,index:index,separators:this._separators});var onLayout=getItemLayout&&!parentProps.debug&&!fillRateHelper.enabled()?undefined:this.props.onLayout;var itemSeparator=ItemSeparatorComponent&&react["createElement"](ItemSeparatorComponent,this.state.separatorProps);var cellStyle=inversionStyle?horizontal?[styles.rowReverse,inversionStyle]:[styles.columnReverse,inversionStyle]:horizontal?[styles.row,inversionStyle]:inversionStyle;if(!CellRendererComponent){return react["createElement"](View["a" /* default */],{style:cellStyle,onLayout:onLayout},element,itemSeparator);}return react["createElement"](CellRendererComponent,_extends({},this.props,{style:cellStyle,onLayout:onLayout}),element,itemSeparator);};return CellRenderer;}(react["Component"]);VirtualizedList_CellRenderer.childContextTypes={virtualizedCell:prop_types_default.a.shape({cellKey:prop_types_default.a.string})};var VirtualizedCellWrapper=function(_React$Component2){_inheritsLoose(VirtualizedCellWrapper,_React$Component2);function VirtualizedCellWrapper(){return _React$Component2.apply(this,arguments)||this;}var _proto3=VirtualizedCellWrapper.prototype;_proto3.getChildContext=function getChildContext(){return{virtualizedCell:{cellKey:this.props.cellKey}};};_proto3.render=function render(){return this.props.children;};return VirtualizedCellWrapper;}(react["Component"]);VirtualizedCellWrapper.childContextTypes={virtualizedCell:prop_types_default.a.shape({cellKey:prop_types_default.a.string})};var styles=StyleSheet["a" /* default */].create({verticallyInverted:{transform:[{scaleY:-1}]},horizontallyInverted:{transform:[{scaleX:-1}]},row:{flexDirection:'row'},rowReverse:{flexDirection:'row-reverse'},columnReverse:{flexDirection:'column-reverse'},debug:{flex:1},debugOverlayBase:{position:'absolute',top:0,right:0},debugOverlay:{bottom:0,width:20,borderColor:'blue',borderWidth:1},debugOverlayFrame:{left:0,backgroundColor:'orange'},debugOverlayFrameLast:{left:0,borderColor:'green',borderWidth:2},debugOverlayFrameVis:{left:0,borderColor:'red',borderWidth:2}});/* harmony default export */ var react_native_VirtualizedList = __webpack_exports__["a"] = (VirtualizedList_VirtualizedList);

/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(271);
} else {}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AppRegistry_AppRegistry; });

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__(2);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/unmountComponentAtNode/index.js
var unmountComponentAtNode = __webpack_require__(74);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/index.js + 1 modules
var StyleSheet = __webpack_require__(4);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__(3);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/AppRegistry/AppContainer.js
var RootTagContext=Object(react["createContext"])(null);function AppContainer(props){var children=props.children,WrapperComponent=props.WrapperComponent;var innerView=react_default.a.createElement(View["a" /* default */],{children:children,key:1,pointerEvents:"box-none",style:styles.appContainer});if(WrapperComponent){innerView=react_default.a.createElement(WrapperComponent,null,innerView);}return react_default.a.createElement(RootTagContext.Provider,{value:props.rootTag},react_default.a.createElement(View["a" /* default */],{pointerEvents:"box-none",style:styles.appContainer},innerView));}var styles=StyleSheet["a" /* default */].create({appContainer:{flex:1}});
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-dom/index.js
var react_dom = __webpack_require__(43);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/render/index.js
var render = __webpack_require__(73);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js + 13 modules
var styleResolver = __webpack_require__(52);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/AppRegistry/renderApplication.js
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function renderApplication(RootComponent,WrapperComponent,callback,options){var shouldHydrate=options.hydrate,initialProps=options.initialProps,rootTag=options.rootTag;var renderFn=shouldHydrate?react_dom["hydrate"]:render["a" /* default */];invariant_default()(rootTag,'Expect to have a valid rootTag, instead got ',rootTag);renderFn(react_default.a.createElement(AppContainer,{rootTag:rootTag,WrapperComponent:WrapperComponent},react_default.a.createElement(RootComponent,initialProps)),rootTag,callback);}function renderApplication_getApplication(RootComponent,initialProps,WrapperComponent){var element=react_default.a.createElement(AppContainer,{rootTag:{},WrapperComponent:WrapperComponent},react_default.a.createElement(RootComponent,initialProps));var getStyleElement=function getStyleElement(props){var sheet=styleResolver["a" /* default */].getStyleSheet();return react_default.a.createElement("style",_extends({},props,{dangerouslySetInnerHTML:{__html:sheet.textContent},id:sheet.id}));};return{element:element,getStyleElement:getStyleElement};}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/AppRegistry/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var emptyObject={};var runnables={};var componentProviderInstrumentationHook=function componentProviderInstrumentationHook(component){return component();};var wrapperComponentProvider;var AppRegistry_AppRegistry=function(){function AppRegistry(){}AppRegistry.getAppKeys=function getAppKeys(){return Object.keys(runnables);};AppRegistry.getApplication=function getApplication(appKey,appParameters){invariant_default()(runnables[appKey]&&runnables[appKey].getApplication,"Application "+appKey+" has not been registered. "+'This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.');return runnables[appKey].getApplication(appParameters);};AppRegistry.registerComponent=function registerComponent(appKey,componentProvider){runnables[appKey]={getApplication:function getApplication(appParameters){return renderApplication_getApplication(componentProviderInstrumentationHook(componentProvider),appParameters?appParameters.initialProps:emptyObject,wrapperComponentProvider&&wrapperComponentProvider(appParameters));},run:function run(appParameters){return renderApplication(componentProviderInstrumentationHook(componentProvider),wrapperComponentProvider&&wrapperComponentProvider(appParameters),appParameters.callback,{hydrate:appParameters.hydrate||false,initialProps:appParameters.initialProps||emptyObject,rootTag:appParameters.rootTag});}};return appKey;};AppRegistry.registerConfig=function registerConfig(config){config.forEach(function(_ref){var appKey=_ref.appKey,component=_ref.component,run=_ref.run;if(run){AppRegistry.registerRunnable(appKey,run);}else{invariant_default()(component,'No component provider passed in');AppRegistry.registerComponent(appKey,component);}});};AppRegistry.registerRunnable=function registerRunnable(appKey,run){runnables[appKey]={run:run};return appKey;};AppRegistry.runApplication=function runApplication(appKey,appParameters){var isDevelopment= false&&false;if(isDevelopment){var params=_objectSpread({},appParameters);params.rootTag="#"+params.rootTag.id;console.log("Running application \""+appKey+"\" with appParams:\n",params,"\nDevelopment-level warnings: "+(isDevelopment?'ON':'OFF')+"."+("\nPerformance optimizations: "+(isDevelopment?'OFF':'ON')+"."));}invariant_default()(runnables[appKey]&&runnables[appKey].run,"Application \""+appKey+"\" has not been registered. "+'This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.');runnables[appKey].run(appParameters);};AppRegistry.setComponentProviderInstrumentationHook=function setComponentProviderInstrumentationHook(hook){componentProviderInstrumentationHook=hook;};AppRegistry.setWrapperComponentProvider=function setWrapperComponentProvider(provider){wrapperComponentProvider=provider;};AppRegistry.unmountApplicationComponentAtRootTag=function unmountApplicationComponentAtRootTag(rootTag){Object(unmountComponentAtNode["a" /* default */])(rootTag);};return AppRegistry;}();

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var TextAncestorContext=Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);/* harmony default export */ __webpack_exports__["a"] = (TextAncestorContext);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var required = __webpack_require__(281)
  , qs = __webpack_require__(282)
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/
  , protocolre = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i
  , whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]'
  , left = new RegExp('^'+ whitespace +'+');

/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  address = trimLeft(address);

  var match = protocolre.exec(address)
    , protocol = match[1] ? match[1].toLowerCase() : ''
    , slashes = !!(match[2] && match[2].length >= 2)
    , rest =  match[2] && match[2].length === 1 ? '/' + match[3] : match[3];

  return {
    protocol: protocol,
    slashes: slashes,
    rest: rest
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // Default to a / for pathname if none exists. This normalizes the URL
  // to always have a /
  //
  if (url.pathname.charAt(0) !== '/' && url.hostname) {
    url.pathname = '/' + url.pathname;
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

module.exports = Url;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(70)))

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PixelRatio; });
/* harmony import */ var _Dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
var PixelRatio=function(){function PixelRatio(){}PixelRatio.get=function get(){return _Dimensions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('window').scale;};PixelRatio.getFontScale=function getFontScale(){return _Dimensions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('window').fontScale||PixelRatio.get();};PixelRatio.getPixelSizeForLayoutSize=function getPixelSizeForLayoutSize(layoutSize){return Math.round(layoutSize*PixelRatio.get());};PixelRatio.roundToNearestPixel=function roundToNearestPixel(layoutSize){var ratio=PixelRatio.get();return Math.round(layoutSize*ratio)/ratio;};return PixelRatio;}();

/***/ }),
/* 48 */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color;
    }
    return null;
  }

  // Ordered based on occurrences on Facebook codebase
  if ((match = matchers.hex6.exec(color))) {
    return parseInt(match[1] + 'ff', 16) >>> 0;
  }

  if (names.hasOwnProperty(color)) {
    return names[color];
  }

  if ((match = matchers.rgb.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.rgba.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        parse1(match[4]) // a
      ) >>> 0;
  }

  if ((match = matchers.hex3.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        'ff', // a
        16
      ) >>> 0;
  }

  // https://drafts.csswg.org/css-color-4/#hex-notation
  if ((match = matchers.hex8.exec(color))) {
    return parseInt(match[1], 16) >>> 0;
  }

  if ((match = matchers.hex4.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        match[4] + match[4], // a
        16
      ) >>> 0;
  }

  if ((match = matchers.hsl.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.hsla.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        parse1(match[4]) // a
      ) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);

  return (
    Math.round(r * 255) << 24 |
    Math.round(g * 255) << 16 |
    Math.round(b * 255) << 8
  );
}

// var INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
}

function call() {
  return '\\(\\s*(' + toArray(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var matchers = {
  rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/,
};

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (((int % 360) + 360) % 360) / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}

var names = {
  transparent: 0x00000000,

  // http://www.w3.org/TR/css3-color/#svg-color
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff,
};

function rgba(colorInt) {
  var r = Math.round(((colorInt & 0xff000000) >>> 24));
  var g = Math.round(((colorInt & 0x00ff0000) >>> 16));
  var b = Math.round(((colorInt & 0x0000ff00) >>> 8));
  var a = ((colorInt & 0x000000ff) >>> 0) / 255;
  return {
    r: r,
    g: g,
    b: b,
    a: a,
  };
};

normalizeColor.rgba = rgba;

module.exports = normalizeColor;


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
var Animation=function(){function Animation(){}var _proto=Animation.prototype;_proto.start=function start(fromValue,onUpdate,onEnd,previousAnimation,animatedValue){};_proto.stop=function stop(){if(this.__nativeId){_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].API.stopAnimation(this.__nativeId);}};_proto.__getNativeAnimationConfig=function __getNativeAnimationConfig(){throw new Error('This animation type cannot be offloaded to native');};_proto.__debouncedOnEnd=function __debouncedOnEnd(result){var onEnd=this.__onEnd;this.__onEnd=null;onEnd&&onEnd(result);};_proto.__startNativeAnimation=function __startNativeAnimation(animatedValue){_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].API.enableQueue();animatedValue.__makeNative();_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].API.disableQueue();this.__nativeId=_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].generateNewAnimationId();_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].API.startAnimatingNode(this.__nativeId,animatedValue.__getNativeTag(),this.__getNativeAnimationConfig(),this.__debouncedOnEnd.bind(this));};return Animation;}();/* harmony default export */ __webpack_exports__["a"] = (Animation);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var emptyFunction = __webpack_require__(276);
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */


function printWarning(format) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
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
}

var warning =  false ? undefined : emptyFunction;
module.exports = warning;

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useElementLayout; });
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _exports_UIManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
var DOM_LAYOUT_HANDLER_NAME='__reactLayoutHandler';var didWarn=!fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"];var resizeObserver=null;function getResizeObserver(){if(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]&&typeof window.ResizeObserver!=='undefined'){if(resizeObserver==null){resizeObserver=new window.ResizeObserver(function(entries){entries.forEach(function(entry){var node=entry.target;var onLayout=node[DOM_LAYOUT_HANDLER_NAME];if(typeof onLayout==='function'){_exports_UIManager__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].measure(node,function(x,y,width,height,left,top){var event={nativeEvent:{layout:{x:x,y:y,width:width,height:height,left:left,top:top}},timeStamp:Date.now()};Object.defineProperty(event.nativeEvent,'target',{enumerable:true,get:function get(){return entry.target;}});onLayout(event);});}});});}}else if(!didWarn){if(false){}}return resizeObserver;}function useElementLayout(ref,onLayout){var observer=getResizeObserver();Object(_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function(){var node=ref.current;if(node!=null){node[DOM_LAYOUT_HANDLER_NAME]=onLayout;}},[ref,onLayout]);Object(_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function(){var node=ref.current;if(node!=null&&observer!=null){if(typeof node[DOM_LAYOUT_HANDLER_NAME]==='function'){observer.observe(node);}else{observer.unobserve(node);}}return function(){if(node!=null&&observer!=null){observer.unobserve(node);}};},[ref,observer]);}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(5);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/createCSSStyleSheet.js
function createCSSStyleSheet(id){if(ExecutionEnvironment["canUseDOM"]){var element=document.getElementById(id);if(element!=null){return element.sheet;}else{var _element=document.createElement('style');_element.setAttribute('id',id);var head=document.head;if(head){head.insertBefore(_element,head.firstChild);}return _element.sheet;}}else{return null;}}
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js
var normalizeValueWithProperty = __webpack_require__(25);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/resolveShadowValue.js
var resolveShadowValue = __webpack_require__(83);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/createCompileableStyle.js
function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var defaultOffset={height:0,width:0};function boxShadowReducer(resolvedStyle,style){var boxShadow=style.boxShadow;var shadow=Object(resolveShadowValue["a" /* default */])(style);if(shadow!=null){resolvedStyle.boxShadow=boxShadow?boxShadow+", "+shadow:shadow;}}function textShadowReducer(resolvedStyle,style){var textShadowColor=style.textShadowColor,textShadowOffset=style.textShadowOffset,textShadowRadius=style.textShadowRadius;var _ref=textShadowOffset||defaultOffset,height=_ref.height,width=_ref.width;var radius=textShadowRadius||0;var offsetX=Object(normalizeValueWithProperty["a" /* default */])(width);var offsetY=Object(normalizeValueWithProperty["a" /* default */])(height);var blurRadius=Object(normalizeValueWithProperty["a" /* default */])(radius);var color=Object(normalizeValueWithProperty["a" /* default */])(textShadowColor,'textShadowColor');if(color&&(height!==0||width!==0||radius!==0)&&offsetX!=null&&offsetY!=null&&blurRadius!=null){resolvedStyle.textShadow=offsetX+" "+offsetY+" "+blurRadius+" "+color;}}var createCompileableStyle=function createCompileableStyle(styles){var shadowColor=styles.shadowColor,shadowOffset=styles.shadowOffset,shadowOpacity=styles.shadowOpacity,shadowRadius=styles.shadowRadius,textShadowColor=styles.textShadowColor,textShadowOffset=styles.textShadowOffset,textShadowRadius=styles.textShadowRadius,nextStyles=_objectWithoutPropertiesLoose(styles,["shadowColor","shadowOffset","shadowOpacity","shadowRadius","textShadowColor","textShadowOffset","textShadowRadius"]);if(shadowColor!=null||shadowOffset!=null||shadowOpacity!=null||shadowRadius!=null){boxShadowReducer(nextStyles,styles);}if(textShadowColor!=null||textShadowOffset!=null||textShadowRadius!=null){textShadowReducer(nextStyles,styles);}return nextStyles;};/* harmony default export */ var StyleSheet_createCompileableStyle = (createCompileableStyle);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/createOrderedCSSStyleSheet.js
var slice=Array.prototype.slice;function createOrderedCSSStyleSheet(sheet){var groups={};var selectors={};if(sheet!=null){var group;slice.call(sheet.cssRules).forEach(function(cssRule,i){var cssText=cssRule.cssText;if(cssText.indexOf('stylesheet-group')>-1){group=decodeGroupRule(cssRule);groups[group]={start:i,rules:[cssText]};}else{var selectorText=getSelectorText(cssText);if(selectorText!=null){selectors[selectorText]=true;groups[group].rules.push(cssText);}}});}function sheetInsert(sheet,group,text){var orderedGroups=getOrderedGroups(groups);var groupIndex=orderedGroups.indexOf(group);var nextGroupIndex=groupIndex+1;var nextGroup=orderedGroups[nextGroupIndex];var position=nextGroup!=null&&groups[nextGroup].start!=null?groups[nextGroup].start:sheet.cssRules.length;var isInserted=insertRuleAt(sheet,text,position);if(isInserted){if(groups[group].start==null){groups[group].start=position;}for(var i=nextGroupIndex;i<orderedGroups.length;i+=1){var groupNumber=orderedGroups[i];var previousStart=groups[groupNumber].start;groups[groupNumber].start=previousStart+1;}}return isInserted;}var OrderedCSSStyleSheet={getTextContent:function getTextContent(){return getOrderedGroups(groups).map(function(group){var rules=groups[group].rules;return rules.join('\n');}).join('\n');},insert:function insert(cssText,groupValue){var group=Number(groupValue);if(groups[group]==null){var markerRule=encodeGroupRule(group);groups[group]={start:null,rules:[markerRule]};if(sheet!=null){sheetInsert(sheet,group,markerRule);}}var selectorText=getSelectorText(cssText);if(selectorText!=null&&selectors[selectorText]==null){selectors[selectorText]=true;groups[group].rules.push(cssText);if(sheet!=null){var isInserted=sheetInsert(sheet,group,cssText);if(!isInserted){groups[group].rules.pop();}}}}};return OrderedCSSStyleSheet;}function encodeGroupRule(group){return"[stylesheet-group=\""+group+"\"]{}";}function decodeGroupRule(cssRule){return Number(cssRule.selectorText.split(/["']/)[1]);}function getOrderedGroups(obj){return Object.keys(obj).map(Number).sort(function(a,b){return a>b?1:-1;});}var pattern=/\s*([,])\s*/g;function getSelectorText(cssText){var selector=cssText.split('{')[0].trim();return selector!==''?selector.replace(pattern,'$1'):null;}function insertRuleAt(root,cssText,position){try{root.insertRule(cssText,position);return true;}catch(e){return false;}}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/flattenArray/index.js
function flattenArray(array){function flattenDown(array,result){for(var i=0;i<array.length;i++){var value=array[i];if(Array.isArray(value)){flattenDown(value,result);}else if(value!=null&&value!==false){result.push(value);}}return result;}return flattenDown(array,[]);}/* harmony default export */ var modules_flattenArray = (flattenArray);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js
var flattenStyle = __webpack_require__(64);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/I18nManager/index.js
var I18nManager = __webpack_require__(33);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js
var multiplyStyleLengthValue = __webpack_require__(56);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/i18nStyle.js
var emptyObject={};var borderTopLeftRadius='borderTopLeftRadius';var borderTopRightRadius='borderTopRightRadius';var borderBottomLeftRadius='borderBottomLeftRadius';var borderBottomRightRadius='borderBottomRightRadius';var borderLeftColor='borderLeftColor';var borderLeftStyle='borderLeftStyle';var borderLeftWidth='borderLeftWidth';var borderRightColor='borderRightColor';var borderRightStyle='borderRightStyle';var borderRightWidth='borderRightWidth';var right='right';var marginLeft='marginLeft';var marginRight='marginRight';var paddingLeft='paddingLeft';var paddingRight='paddingRight';var left='left';var PROPERTIES_FLIP={borderTopLeftRadius:borderTopRightRadius,borderTopRightRadius:borderTopLeftRadius,borderBottomLeftRadius:borderBottomRightRadius,borderBottomRightRadius:borderBottomLeftRadius,borderLeftColor:borderRightColor,borderLeftStyle:borderRightStyle,borderLeftWidth:borderRightWidth,borderRightColor:borderLeftColor,borderRightStyle:borderLeftStyle,borderRightWidth:borderLeftWidth,left:right,marginLeft:marginRight,marginRight:marginLeft,paddingLeft:paddingRight,paddingRight:paddingLeft,right:left};var PROPERTIES_I18N={borderTopStartRadius:borderTopLeftRadius,borderTopEndRadius:borderTopRightRadius,borderBottomStartRadius:borderBottomLeftRadius,borderBottomEndRadius:borderBottomRightRadius,borderStartColor:borderLeftColor,borderStartStyle:borderLeftStyle,borderStartWidth:borderLeftWidth,borderEndColor:borderRightColor,borderEndStyle:borderRightStyle,borderEndWidth:borderRightWidth,end:right,marginStart:marginLeft,marginEnd:marginRight,paddingStart:paddingLeft,paddingEnd:paddingRight,start:left};var PROPERTIES_VALUE={clear:true,float:true,textAlign:true};var i18nStyle_additiveInverse=function additiveInverse(value){return Object(multiplyStyleLengthValue["a" /* default */])(value,-1);};var i18nStyle_i18nStyle=function i18nStyle(originalStyle){var doLeftAndRightSwapInRTL=I18nManager["a" /* default */].doLeftAndRightSwapInRTL,isRTL=I18nManager["a" /* default */].isRTL;var style=originalStyle||emptyObject;var frozenProps={};var nextStyle={};for(var originalProp in style){if(!Object.prototype.hasOwnProperty.call(style,originalProp)){continue;}var originalValue=style[originalProp];var prop=originalProp;var value=originalValue;if(PROPERTIES_I18N.hasOwnProperty(originalProp)){var convertedProp=PROPERTIES_I18N[originalProp];prop=isRTL?PROPERTIES_FLIP[convertedProp]:convertedProp;}else if(isRTL&&doLeftAndRightSwapInRTL&&PROPERTIES_FLIP[originalProp]){prop=PROPERTIES_FLIP[originalProp];}if(PROPERTIES_VALUE.hasOwnProperty(originalProp)){if(originalValue==='start'){value=isRTL?'right':'left';}else if(originalValue==='end'){value=isRTL?'left':'right';}else if(isRTL&&doLeftAndRightSwapInRTL){if(originalValue==='left'){value='right';}else if(originalValue==='right'){value='left';}}}if(prop==='transitionProperty'){if(PROPERTIES_I18N.hasOwnProperty(value)){var convertedValue=PROPERTIES_I18N[originalValue];value=isRTL?PROPERTIES_FLIP[convertedValue]:convertedValue;}else if(isRTL&&doLeftAndRightSwapInRTL&&PROPERTIES_FLIP[originalValue]){value=PROPERTIES_FLIP[originalValue];}}if(isRTL&&prop==='textShadowOffset'){nextStyle[prop]=value;nextStyle[prop].width=i18nStyle_additiveInverse(value.width);}else if(!frozenProps[prop]){nextStyle[prop]=value;}if(PROPERTIES_I18N[originalProp]){frozenProps[prop]=true;}}return nextStyle;};/* harmony default export */ var StyleSheet_i18nStyle = (i18nStyle_i18nStyle);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/constants.js
var constants = __webpack_require__(23);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js
var createReactDOMStyle_emptyObject={};var supportsCSS3TextDecoration=!ExecutionEnvironment["canUseDOM"]||window.CSS!=null&&window.CSS.supports!=null&&(window.CSS.supports('text-decoration-line','none')||window.CSS.supports('-webkit-text-decoration-line','none'));var createReactDOMStyle_mapTransform=function mapTransform(transform){var type=Object.keys(transform)[0];var value=Object(normalizeValueWithProperty["a" /* default */])(transform[type],type);return type+"("+value+")";};var convertTransformMatrix=function convertTransformMatrix(transformMatrix){var matrix=transformMatrix.join(',');return"matrix3d("+matrix+")";};var resolveTransform=function resolveTransform(resolvedStyle,style){var transform=style.transform;if(Array.isArray(style.transform)){transform=style.transform.map(createReactDOMStyle_mapTransform).join(' ');}else if(style.transformMatrix){transform=convertTransformMatrix(style.transformMatrix);}resolvedStyle.transform=transform;};var createReactDOMStyle_createReactDOMStyle=function createReactDOMStyle(style){if(!style){return createReactDOMStyle_emptyObject;}var resolvedStyle={};Object.keys(style).sort().forEach(function(prop){var value=Object(normalizeValueWithProperty["a" /* default */])(style[prop],prop);if(value==null){return;}switch(prop){case'aspectRatio':case'elevation':case'overlayColor':case'resizeMode':case'tintColor':{break;}case'backgroundClip':{if(value==='text'){resolvedStyle.backgroundClip=value;resolvedStyle.WebkitBackgroundClip=value;}break;}case'flex':{if(value>0){resolvedStyle.flexGrow=value;resolvedStyle.flexShrink=1;resolvedStyle.flexBasis='0%';}else if(value===0){resolvedStyle.flexGrow=0;resolvedStyle.flexShrink=0;resolvedStyle.flexBasis='0%';}else if(value===-1){resolvedStyle.flexGrow=0;resolvedStyle.flexShrink=1;resolvedStyle.flexBasis='auto';}break;}case'font':{resolvedStyle[prop]=value.replace('System',constants["e" /* SYSTEM_FONT_STACK */]);break;}case'fontFamily':{if(value.indexOf('System')>-1){var stack=value.split(/,\s*/);stack[stack.indexOf('System')]=constants["e" /* SYSTEM_FONT_STACK */];resolvedStyle[prop]=stack.join(',');}else if(value==='monospace'){resolvedStyle[prop]=constants["a" /* MONOSPACE_FONT_STACK */];}else{resolvedStyle[prop]=value;}break;}case'fontVariant':{if(Array.isArray(value)&&value.length>0){resolvedStyle.fontVariant=value.join(' ');}break;}case'textAlignVertical':{resolvedStyle.verticalAlign=value==='center'?'middle':value;break;}case'textDecorationLine':{if(!supportsCSS3TextDecoration){resolvedStyle.textDecoration=value;}else{resolvedStyle.textDecorationLine=value;}break;}case'transform':case'transformMatrix':{resolveTransform(resolvedStyle,style);break;}case'writingDirection':{resolvedStyle.direction=value;break;}default:{var longFormProperties=constants["d" /* STYLE_SHORT_FORM_EXPANSIONS */][prop];if(longFormProperties){longFormProperties.forEach(function(longForm,i){if(typeof style[longForm]==='undefined'){resolvedStyle[longForm]=value;}});}else{resolvedStyle[prop]=Array.isArray(value)?value.join(','):value;}}}});return resolvedStyle;};/* harmony default export */ var StyleSheet_createReactDOMStyle = (createReactDOMStyle_createReactDOMStyle);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/hash/index.js
function murmurhash2_32_gc(str,seed){var l=str.length,h=seed^l,i=0,k;while(l>=4){k=str.charCodeAt(i)&0xff|(str.charCodeAt(++i)&0xff)<<8|(str.charCodeAt(++i)&0xff)<<16|(str.charCodeAt(++i)&0xff)<<24;k=(k&0xffff)*0x5bd1e995+(((k>>>16)*0x5bd1e995&0xffff)<<16);k^=k>>>24;k=(k&0xffff)*0x5bd1e995+(((k>>>16)*0x5bd1e995&0xffff)<<16);h=(h&0xffff)*0x5bd1e995+(((h>>>16)*0x5bd1e995&0xffff)<<16)^k;l-=4;++i;}switch(l){case 3:h^=(str.charCodeAt(i+2)&0xff)<<16;case 2:h^=(str.charCodeAt(i+1)&0xff)<<8;case 1:h^=str.charCodeAt(i)&0xff;h=(h&0xffff)*0x5bd1e995+(((h>>>16)*0x5bd1e995&0xffff)<<16);}h^=h>>>13;h=(h&0xffff)*0x5bd1e995+(((h>>>16)*0x5bd1e995&0xffff)<<16);h^=h>>>15;return h>>>0;}var hash=function hash(str){return murmurhash2_32_gc(str,1).toString(36);};/* harmony default export */ var vendor_hash = (hash);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/hyphenate-style-name/index.js
var hyphenate_style_name = __webpack_require__(101);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/inline-style-prefixer/lib/createPrefixer.js
var createPrefixer = __webpack_require__(112);
var createPrefixer_default = /*#__PURE__*/__webpack_require__.n(createPrefixer);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/inline-style-prefixer/lib/plugins/backgroundClip.js
var backgroundClip = __webpack_require__(113);
var backgroundClip_default = /*#__PURE__*/__webpack_require__.n(backgroundClip);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/inline-style-prefixer/lib/plugins/crossFade.js
var crossFade = __webpack_require__(114);
var crossFade_default = /*#__PURE__*/__webpack_require__.n(crossFade);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/inline-style-prefixer/lib/plugins/cursor.js
var cursor = __webpack_require__(115);
var cursor_default = /*#__PURE__*/__webpack_require__.n(cursor);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/inline-style-prefixer/lib/plugins/filter.js
var filter = __webpack_require__(116);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/inline-style-prefixer/lib/plugins/flex.js
var flex = __webpack_require__(117);
var flex_default = /*#__PURE__*/__webpack_require__.n(flex);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/inline-style-prefixer/lib/plugins/flexboxIE.js
var flexboxIE = __webpack_require__(118);
var flexboxIE_default = /*#__PURE__*/__webpack_require__.n(flexboxIE);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/inline-style-prefixer/lib/plugins/flexboxOld.js
var flexboxOld = __webpack_require__(119);
var flexboxOld_default = /*#__PURE__*/__webpack_require__.n(flexboxOld);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/inline-style-prefixer/lib/plugins/gradient.js
var gradient = __webpack_require__(120);
var gradient_default = /*#__PURE__*/__webpack_require__.n(gradient);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/inline-style-prefixer/lib/plugins/grid.js
var grid = __webpack_require__(121);
var grid_default = /*#__PURE__*/__webpack_require__.n(grid);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/inline-style-prefixer/lib/plugins/imageSet.js
var imageSet = __webpack_require__(122);
var imageSet_default = /*#__PURE__*/__webpack_require__.n(imageSet);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/inline-style-prefixer/lib/plugins/logical.js
var logical = __webpack_require__(123);
var logical_default = /*#__PURE__*/__webpack_require__.n(logical);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/inline-style-prefixer/lib/plugins/position.js
var position = __webpack_require__(124);
var position_default = /*#__PURE__*/__webpack_require__.n(position);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/inline-style-prefixer/lib/plugins/sizing.js
var sizing = __webpack_require__(125);
var sizing_default = /*#__PURE__*/__webpack_require__.n(sizing);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/inline-style-prefixer/lib/plugins/transition.js
var transition = __webpack_require__(126);
var transition_default = /*#__PURE__*/__webpack_require__.n(transition);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/prefixStyles/static.js
var w=['Webkit'];var m=['Moz'];var ms=['ms'];var wm=['Webkit','Moz'];var wms=['Webkit','ms'];var wmms=['Webkit','Moz','ms'];/* harmony default export */ var prefixStyles_static = ({plugins:[backgroundClip_default.a,crossFade_default.a,cursor_default.a,filter_default.a,flex_default.a,flexboxIE_default.a,flexboxOld_default.a,gradient_default.a,grid_default.a,imageSet_default.a,logical_default.a,position_default.a,sizing_default.a,transition_default.a],prefixMap:{animation:w,animationDelay:w,animationDirection:w,animationFillMode:w,animationDuration:w,animationIterationCount:w,animationName:w,animationPlayState:w,animationTimingFunction:w,appearance:wm,userSelect:wmms,textEmphasisPosition:w,textEmphasis:w,textEmphasisStyle:w,textEmphasisColor:w,boxDecorationBreak:w,clipPath:w,maskImage:w,maskMode:w,maskRepeat:w,maskPosition:w,maskClip:w,maskOrigin:w,maskSize:w,maskComposite:w,mask:w,maskBorderSource:w,maskBorderMode:w,maskBorderSlice:w,maskBorderWidth:w,maskBorderOutset:w,maskBorderRepeat:w,maskBorder:w,maskType:w,textDecorationStyle:w,textDecorationSkip:w,textDecorationLine:w,textDecorationColor:w,filter:w,fontFeatureSettings:w,breakAfter:wmms,breakBefore:wmms,breakInside:wmms,columnCount:wm,columnFill:wm,columnGap:wm,columnRule:wm,columnRuleColor:wm,columnRuleStyle:wm,columnRuleWidth:wm,columns:wm,columnSpan:wm,columnWidth:wm,writingMode:wms,flex:wms,flexBasis:w,flexDirection:wms,flexGrow:w,flexFlow:wms,flexShrink:w,flexWrap:wms,alignContent:w,alignItems:w,alignSelf:w,justifyContent:w,order:w,transform:w,transformOrigin:w,transformOriginX:w,transformOriginY:w,backfaceVisibility:w,perspective:w,perspectiveOrigin:w,transformStyle:w,transformOriginZ:w,backdropFilter:w,fontKerning:w,scrollSnapType:wms,scrollSnapPointsX:wms,scrollSnapPointsY:wms,scrollSnapDestination:wms,scrollSnapCoordinate:wms,shapeImageThreshold:w,shapeImageMargin:w,shapeImageOutside:w,hyphens:wmms,flowInto:wms,flowFrom:wms,regionFragment:wms,textOrientation:w,textAlignLast:m,tabSize:m,wrapFlow:ms,wrapThrough:ms,wrapMargin:ms,touchAction:ms,textSizeAdjust:['ms','Webkit'],borderImage:w,borderImageOutset:w,borderImageRepeat:w,borderImageSlice:w,borderImageSource:w,borderImageWidth:w,transitionDelay:w,transitionDuration:w,transitionProperty:w,transitionTimingFunction:w}});
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/prefixStyles/index.js
var prefixAll=createPrefixer_default()(prefixStyles_static);/* harmony default export */ var prefixStyles = (prefixAll);var prefixInlineStyles=function prefixInlineStyles(style){var prefixedStyles=prefixAll(style);Object.keys(prefixedStyles).forEach(function(prop){var value=prefixedStyles[prop];if(Array.isArray(value)){prefixedStyles[prop]=value[value.length-1];}});return prefixedStyles;};
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/compile.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function compile_objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var compile_cache={get:function get(property,value){if(compile_cache[property]!=null&&compile_cache[property].hasOwnProperty(value)&&compile_cache[property][value]!=null){return compile_cache[property][value];}},set:function set(property,value,object){if(compile_cache[property]==null){compile_cache[property]={};}return compile_cache[property][value]=object;}};function atomic(style){return Object.keys(style).sort().reduce(function(acc,property){var value=style[property];if(value!=null){var valueString=stringifyValueWithProperty(value,property);var cachedResult=compile_cache.get(property,valueString);if(cachedResult!=null){var identifier=cachedResult.identifier;acc[identifier]=cachedResult;}else{var _identifier=createIdentifier('r',property,value);var rules=createAtomicRules(_identifier,property,value);var _cachedResult=compile_cache.set(property,valueString,{property:property,value:stringifyValueWithProperty(value,property),identifier:_identifier,rules:rules});acc[_identifier]=_cachedResult;}}return acc;},{});}function classic(style,name){var _ref;var identifier=createIdentifier('css',name,style);var animationKeyframes=style.animationKeyframes,rest=compile_objectWithoutPropertiesLoose(style,["animationKeyframes"]);var rules=[];var selector="."+identifier;var animationName;if(animationKeyframes!=null){var _processKeyframesValu=processKeyframesValue(animationKeyframes),animationNames=_processKeyframesValu.animationNames,keyframesRules=_processKeyframesValu.rules;animationName=animationNames.join(',');rules.push.apply(rules,keyframesRules);}var block=createDeclarationBlock(_objectSpread({},rest,{animationName:animationName}));rules.push(""+selector+block);return _ref={},_ref[identifier]={identifier:identifier,rules:rules},_ref;}function inline(style){return prefixInlineStyles(StyleSheet_createReactDOMStyle(style));}function stringifyValueWithProperty(value,property){var normalizedValue=Object(normalizeValueWithProperty["a" /* default */])(value,property);return typeof normalizedValue!=='string'?JSON.stringify(normalizedValue||''):normalizedValue;}function createAtomicRules(identifier,property,value){var rules=[];var selector="."+identifier;switch(property){case'animationKeyframes':{var _processKeyframesValu2=processKeyframesValue(value),animationNames=_processKeyframesValu2.animationNames,keyframesRules=_processKeyframesValu2.rules;var block=createDeclarationBlock({animationName:animationNames.join(',')});rules.push.apply(rules,[""+selector+block].concat(keyframesRules));break;}case'placeholderTextColor':{var _block=createDeclarationBlock({color:value,opacity:1});rules.push(selector+"::-webkit-input-placeholder"+_block,selector+"::-moz-placeholder"+_block,selector+":-ms-input-placeholder"+_block,selector+"::placeholder"+_block);break;}case'pointerEvents':{var _createDeclarationBlo3;var finalValue=value;if(value==='auto'||value==='box-only'){finalValue='auto!important';if(value==='box-only'){var _createDeclarationBlo;var _block3=createDeclarationBlock((_createDeclarationBlo={},_createDeclarationBlo[property]='none',_createDeclarationBlo));rules.push(selector+">*"+_block3);}}else if(value==='none'||value==='box-none'){finalValue='none!important';if(value==='box-none'){var _createDeclarationBlo2;var _block4=createDeclarationBlock((_createDeclarationBlo2={},_createDeclarationBlo2[property]='auto',_createDeclarationBlo2));rules.push(selector+">*"+_block4);}}var _block2=createDeclarationBlock((_createDeclarationBlo3={},_createDeclarationBlo3[property]=finalValue,_createDeclarationBlo3));rules.push(""+selector+_block2);break;}case'scrollbarWidth':{var _createDeclarationBlo4;if(value==='none'){rules.push(selector+"::-webkit-scrollbar{display:none}");}var _block5=createDeclarationBlock((_createDeclarationBlo4={},_createDeclarationBlo4[property]=value,_createDeclarationBlo4));rules.push(""+selector+_block5);break;}default:{var _createDeclarationBlo5;var _block6=createDeclarationBlock((_createDeclarationBlo5={},_createDeclarationBlo5[property]=value,_createDeclarationBlo5));rules.push(""+selector+_block6);break;}}return rules;}function createDeclarationBlock(style){var domStyle=prefixStyles(StyleSheet_createReactDOMStyle(style));var declarationsString=Object.keys(domStyle).map(function(property){var value=domStyle[property];var prop=Object(hyphenate_style_name["default"])(property);if(Array.isArray(value)){return value.map(function(v){return prop+":"+v;}).join(';');}else{return prop+":"+value;}}).sort().join(';');return"{"+declarationsString+";}";}function createIdentifier(prefix,name,value){var hashedString=vendor_hash(name+stringifyValueWithProperty(value,name));return  false?undefined:prefix+"-"+hashedString;}function createKeyframes(keyframes){var prefixes=['-webkit-',''];var identifier=createIdentifier('r','animation',keyframes);var steps='{'+Object.keys(keyframes).map(function(stepName){var rule=keyframes[stepName];var block=createDeclarationBlock(rule);return""+stepName+block;}).join('')+'}';var rules=prefixes.map(function(prefix){return"@"+prefix+"keyframes "+identifier+steps;});return{identifier:identifier,rules:rules};}function processKeyframesValue(keyframesValue){if(typeof keyframesValue==='number'){throw new Error("Invalid CSS keyframes type: "+typeof keyframesValue);}var animationNames=[];var rules=[];var value=Array.isArray(keyframesValue)?keyframesValue:[keyframesValue];value.forEach(function(keyframes){if(typeof keyframes==='string'){animationNames.push(keyframes);}else{var _createKeyframes=createKeyframes(keyframes),identifier=_createKeyframes.identifier,keyframesRules=_createKeyframes.rules;animationNames.push(identifier);rules.push.apply(rules,keyframesRules);}});return{animationNames:animationNames,rules:rules};}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/initialRules.js
var resets=['html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}','body{margin:0;}','button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}','input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,'+'input::-webkit-search-cancel-button,input::-webkit-search-decoration,'+'input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}'];/* harmony default export */ var initialRules = (resets);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/modality.js
var focusVisibleAttributeName='data-focusvisible-polyfill';var modality_rule=":focus:not(["+focusVisibleAttributeName+"]){outline: none;}";var modality_modality=function modality(insertRule){insertRule(modality_rule);if(!ExecutionEnvironment["canUseDOM"]){return;}var hadKeyboardEvent=true;var hadFocusVisibleRecently=false;var hadFocusVisibleRecentlyTimeout=null;var inputTypesWhitelist={text:true,search:true,url:true,tel:true,email:true,password:true,number:true,date:true,month:true,week:true,time:true,datetime:true,'datetime-local':true};function isValidFocusTarget(el){if(el&&el!==document&&el.nodeName!=='HTML'&&el.nodeName!=='BODY'&&'classList'in el&&'contains'in el.classList){return true;}return false;}function focusTriggersKeyboardModality(el){var type=el.type;var tagName=el.tagName;var isReadOnly=el.readOnly;if(tagName==='INPUT'&&inputTypesWhitelist[type]&&!isReadOnly){return true;}if(tagName==='TEXTAREA'&&!isReadOnly){return true;}if(el.isContentEditable){return true;}return false;}function addFocusVisibleAttribute(el){if(el.hasAttribute(focusVisibleAttributeName)){return;}el.setAttribute(focusVisibleAttributeName,true);}function removeFocusVisibleAttribute(el){el.removeAttribute(focusVisibleAttributeName);}function removeAllFocusVisibleAttributes(){var list=document.querySelectorAll("["+focusVisibleAttributeName+"]");for(var i=0;i<list.length;i+=1){removeFocusVisibleAttribute(list[i]);}}function onKeyDown(e){if(e.key!=='Tab'&&(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){return;}if(isValidFocusTarget(document.activeElement)){addFocusVisibleAttribute(document.activeElement);}hadKeyboardEvent=true;}function onPointerDown(e){if(hadKeyboardEvent===true){removeAllFocusVisibleAttributes();}hadKeyboardEvent=false;}function onFocus(e){if(!isValidFocusTarget(e.target)){return;}if(hadKeyboardEvent||focusTriggersKeyboardModality(e.target)){addFocusVisibleAttribute(e.target);}}function onBlur(e){if(!isValidFocusTarget(e.target)){return;}if(e.target.hasAttribute(focusVisibleAttributeName)){hadFocusVisibleRecently=true;window.clearTimeout(hadFocusVisibleRecentlyTimeout);hadFocusVisibleRecentlyTimeout=window.setTimeout(function(){hadFocusVisibleRecently=false;window.clearTimeout(hadFocusVisibleRecentlyTimeout);},100);removeFocusVisibleAttribute(e.target);}}function onVisibilityChange(e){if(document.visibilityState==='hidden'){if(hadFocusVisibleRecently){hadKeyboardEvent=true;}addInitialPointerMoveListeners();}}function addInitialPointerMoveListeners(){document.addEventListener('mousemove',onInitialPointerMove);document.addEventListener('mousedown',onInitialPointerMove);document.addEventListener('mouseup',onInitialPointerMove);document.addEventListener('pointermove',onInitialPointerMove);document.addEventListener('pointerdown',onInitialPointerMove);document.addEventListener('pointerup',onInitialPointerMove);document.addEventListener('touchmove',onInitialPointerMove);document.addEventListener('touchstart',onInitialPointerMove);document.addEventListener('touchend',onInitialPointerMove);}function removeInitialPointerMoveListeners(){document.removeEventListener('mousemove',onInitialPointerMove);document.removeEventListener('mousedown',onInitialPointerMove);document.removeEventListener('mouseup',onInitialPointerMove);document.removeEventListener('pointermove',onInitialPointerMove);document.removeEventListener('pointerdown',onInitialPointerMove);document.removeEventListener('pointerup',onInitialPointerMove);document.removeEventListener('touchmove',onInitialPointerMove);document.removeEventListener('touchstart',onInitialPointerMove);document.removeEventListener('touchend',onInitialPointerMove);}function onInitialPointerMove(e){if(e.target.nodeName==='HTML'){return;}hadKeyboardEvent=false;removeInitialPointerMoveListeners();}document.addEventListener('keydown',onKeyDown,true);document.addEventListener('mousedown',onPointerDown,true);document.addEventListener('pointerdown',onPointerDown,true);document.addEventListener('touchstart',onPointerDown,true);document.addEventListener('focus',onFocus,true);document.addEventListener('blur',onBlur,true);document.addEventListener('visibilitychange',onVisibilityChange,true);addInitialPointerMoveListeners();};/* harmony default export */ var StyleSheet_modality = (modality_modality);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/createStyleResolver.js
function createStyleResolver(){var inserted,sheet,cache;var resolved={css:{},ltr:{},rtl:{},rtlNoSwap:{}};var init=function init(){inserted={css:{},ltr:{},rtl:{},rtlNoSwap:{}};sheet=createOrderedCSSStyleSheet(createCSSStyleSheet(constants["b" /* STYLE_ELEMENT_ID */]));cache={};StyleSheet_modality(function(rule){return sheet.insert(rule,constants["c" /* STYLE_GROUPS */].modality);});initialRules.forEach(function(rule){sheet.insert(rule,constants["c" /* STYLE_GROUPS */].reset);});};init();function addToCache(className,prop,value){if(!cache[prop]){cache[prop]={};}cache[prop][value]=className;}function getClassName(prop,value){var val=stringifyValueWithProperty(value,prop);return cache[prop]&&cache[prop].hasOwnProperty(val)&&cache[prop][val];}function _injectRegisteredStyle(id){var doLeftAndRightSwapInRTL=I18nManager["a" /* default */].doLeftAndRightSwapInRTL,isRTL=I18nManager["a" /* default */].isRTL;var dir=isRTL?doLeftAndRightSwapInRTL?'rtl':'rtlNoSwap':'ltr';if(!inserted[dir][id]){var style=StyleSheet_createCompileableStyle(StyleSheet_i18nStyle(Object(flattenStyle["a" /* default */])(id)));var results=atomic(style);Object.keys(results).forEach(function(key){var _results$key=results[key],identifier=_results$key.identifier,property=_results$key.property,rules=_results$key.rules,value=_results$key.value;addToCache(identifier,property,value);rules.forEach(function(rule){var group=constants["c" /* STYLE_GROUPS */].custom[property]||constants["c" /* STYLE_GROUPS */].atomic;sheet.insert(rule,group);});});inserted[dir][id]=true;}}function resolve(style,classList){var nextClassList=[];var props={};if(!style&&!classList){return props;}if(Array.isArray(classList)){modules_flattenArray(classList).forEach(function(identifier){if(identifier){if(inserted.css[identifier]==null&&resolved.css[identifier]!=null){var item=resolved.css[identifier];item.rules.forEach(function(rule){sheet.insert(rule,item.group);});inserted.css[identifier]=true;}nextClassList.push(identifier);}});}if(typeof style==='number'){_injectRegisteredStyle(style);var key=createCacheKey(style);props=_resolveStyle(style,key);}else if(!Array.isArray(style)){props=_resolveStyle(style);}else{var flatArray=modules_flattenArray(style);var isArrayOfNumbers=true;var cacheKey='';for(var i=0;i<flatArray.length;i++){var id=flatArray[i];if(typeof id!=='number'){isArrayOfNumbers=false;}else{if(isArrayOfNumbers){cacheKey+=id+'-';}_injectRegisteredStyle(id);}}var _key=isArrayOfNumbers?createCacheKey(cacheKey):null;props=_resolveStyle(flatArray,_key);}nextClassList.push.apply(nextClassList,props.classList);var finalProps={className:classListToString(nextClassList),classList:nextClassList};if(props.style){finalProps.style=props.style;}return finalProps;}function _resolveStyle(style,key){var doLeftAndRightSwapInRTL=I18nManager["a" /* default */].doLeftAndRightSwapInRTL,isRTL=I18nManager["a" /* default */].isRTL;var dir=isRTL?doLeftAndRightSwapInRTL?'rtl':'rtlNoSwap':'ltr';if(key!=null&&resolved[dir][key]!=null){return resolved[dir][key];}var flatStyle=Object(flattenStyle["a" /* default */])(style);var localizedStyle=StyleSheet_createCompileableStyle(StyleSheet_i18nStyle(flatStyle));var props=Object.keys(localizedStyle).sort().reduce(function(props,styleProp){var value=localizedStyle[styleProp];if(value!=null){var className=getClassName(styleProp,value);if(className){props.classList.push(className);}else{if(styleProp==='animationKeyframes'||styleProp==='placeholderTextColor'||styleProp==='pointerEvents'||styleProp==='scrollbarWidth'){var _atomic;var a=atomic((_atomic={},_atomic[styleProp]=value,_atomic));Object.keys(a).forEach(function(key){var _a$key=a[key],identifier=_a$key.identifier,rules=_a$key.rules;props.classList.push(identifier);rules.forEach(function(rule){sheet.insert(rule,constants["c" /* STYLE_GROUPS */].atomic);});});}else{if(!props.style){props.style={};}props.style[styleProp]=value;}}}return props;},{classList:[]});if(props.style){props.style=inline(props.style);}if(key!=null){resolved[dir][key]=props;}return props;}return{getStyleSheet:function getStyleSheet(){var textContent=sheet.getTextContent();if(!ExecutionEnvironment["canUseDOM"]){init();}return{id:constants["b" /* STYLE_ELEMENT_ID */],textContent:textContent};},createCSS:function createCSS(rules,group){var result={};Object.keys(rules).forEach(function(name){var style=rules[name];var compiled=classic(style,name);Object.keys(compiled).forEach(function(key){var _compiled$key=compiled[key],identifier=_compiled$key.identifier,rules=_compiled$key.rules;resolved.css[identifier]={group:group||constants["c" /* STYLE_GROUPS */].classic,rules:rules};result[name]=identifier;});});return result;},resolve:resolve,sheet:sheet};}var createCacheKey=function createCacheKey(id){var prefix='rn';return prefix+"-"+id;};var classListToString=function classListToString(list){return list.join(' ').trim();};
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js
var styleResolver=createStyleResolver();/* harmony default export */ var StyleSheet_styleResolver = __webpack_exports__["a"] = (styleResolver);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useResponderEvents; });

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(5);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js
var getBoundingClientRect = __webpack_require__(57);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/hooks/useResponderEvents/ResponderEventTypes.js
var BLUR='blur';var CONTEXT_MENU='contextmenu';var FOCUS_OUT='focusout';var MOUSE_DOWN='mousedown';var MOUSE_MOVE='mousemove';var MOUSE_UP='mouseup';var MOUSE_CANCEL='dragstart';var TOUCH_START='touchstart';var TOUCH_MOVE='touchmove';var TOUCH_END='touchend';var TOUCH_CANCEL='touchcancel';var SCROLL='scroll';var SELECT='select';var SELECTION_CHANGE='selectionchange';function isStartish(eventType){return eventType===TOUCH_START||eventType===MOUSE_DOWN;}function isMoveish(eventType){return eventType===TOUCH_MOVE||eventType===MOUSE_MOVE;}function isEndish(eventType){return eventType===TOUCH_END||eventType===MOUSE_UP||isCancelish(eventType);}function isCancelish(eventType){return eventType===TOUCH_CANCEL||eventType===MOUSE_CANCEL;}function isScroll(eventType){return eventType===SCROLL;}function isSelectionChange(eventType){return eventType===SELECT||eventType===SELECTION_CHANGE;}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/hooks/useResponderEvents/ResponderTouchHistoryStore.js
var __DEV__="production"!=='production';var MAX_TOUCH_BANK=20;var touchBank=[];var touchHistory={touchBank:touchBank,numberActiveTouches:0,indexOfSingleActiveTouch:-1,mostRecentTimeStamp:0};function timestampForTouch(touch){return touch.timeStamp||touch.timestamp;}function createTouchRecord(touch){return{touchActive:true,startPageX:touch.pageX,startPageY:touch.pageY,startTimeStamp:timestampForTouch(touch),currentPageX:touch.pageX,currentPageY:touch.pageY,currentTimeStamp:timestampForTouch(touch),previousPageX:touch.pageX,previousPageY:touch.pageY,previousTimeStamp:timestampForTouch(touch)};}function resetTouchRecord(touchRecord,touch){touchRecord.touchActive=true;touchRecord.startPageX=touch.pageX;touchRecord.startPageY=touch.pageY;touchRecord.startTimeStamp=timestampForTouch(touch);touchRecord.currentPageX=touch.pageX;touchRecord.currentPageY=touch.pageY;touchRecord.currentTimeStamp=timestampForTouch(touch);touchRecord.previousPageX=touch.pageX;touchRecord.previousPageY=touch.pageY;touchRecord.previousTimeStamp=timestampForTouch(touch);}function getTouchIdentifier(_ref){var identifier=_ref.identifier;if(identifier==null){console.error('Touch object is missing identifier.');}if(__DEV__){if(identifier>MAX_TOUCH_BANK){console.error('Touch identifier %s is greater than maximum supported %s which causes '+'performance issues backfilling array locations for all of the indices.',identifier,MAX_TOUCH_BANK);}}return identifier;}function recordTouchStart(touch){var identifier=getTouchIdentifier(touch);var touchRecord=touchBank[identifier];if(touchRecord){resetTouchRecord(touchRecord,touch);}else{touchBank[identifier]=createTouchRecord(touch);}touchHistory.mostRecentTimeStamp=timestampForTouch(touch);}function recordTouchMove(touch){var touchRecord=touchBank[getTouchIdentifier(touch)];if(touchRecord){touchRecord.touchActive=true;touchRecord.previousPageX=touchRecord.currentPageX;touchRecord.previousPageY=touchRecord.currentPageY;touchRecord.previousTimeStamp=touchRecord.currentTimeStamp;touchRecord.currentPageX=touch.pageX;touchRecord.currentPageY=touch.pageY;touchRecord.currentTimeStamp=timestampForTouch(touch);touchHistory.mostRecentTimeStamp=timestampForTouch(touch);}else{console.warn('Cannot record touch move without a touch start.\n',"Touch Move: "+printTouch(touch)+"\n","Touch Bank: "+printTouchBank());}}function recordTouchEnd(touch){var touchRecord=touchBank[getTouchIdentifier(touch)];if(touchRecord){touchRecord.touchActive=false;touchRecord.previousPageX=touchRecord.currentPageX;touchRecord.previousPageY=touchRecord.currentPageY;touchRecord.previousTimeStamp=touchRecord.currentTimeStamp;touchRecord.currentPageX=touch.pageX;touchRecord.currentPageY=touch.pageY;touchRecord.currentTimeStamp=timestampForTouch(touch);touchHistory.mostRecentTimeStamp=timestampForTouch(touch);}else{console.warn('Cannot record touch end without a touch start.\n',"Touch End: "+printTouch(touch)+"\n","Touch Bank: "+printTouchBank());}}function printTouch(touch){return JSON.stringify({identifier:touch.identifier,pageX:touch.pageX,pageY:touch.pageY,timestamp:timestampForTouch(touch)});}function printTouchBank(){var printed=JSON.stringify(touchBank.slice(0,MAX_TOUCH_BANK));if(touchBank.length>MAX_TOUCH_BANK){printed+=' (original size: '+touchBank.length+')';}return printed;}var ResponderTouchHistoryStore={recordTouchTrack:function recordTouchTrack(topLevelType,nativeEvent){if(isMoveish(topLevelType)){nativeEvent.changedTouches.forEach(recordTouchMove);}else if(isStartish(topLevelType)){nativeEvent.changedTouches.forEach(recordTouchStart);touchHistory.numberActiveTouches=nativeEvent.touches.length;if(touchHistory.numberActiveTouches===1){touchHistory.indexOfSingleActiveTouch=nativeEvent.touches[0].identifier;}}else if(isEndish(topLevelType)){nativeEvent.changedTouches.forEach(recordTouchEnd);touchHistory.numberActiveTouches=nativeEvent.touches.length;if(touchHistory.numberActiveTouches===1){for(var i=0;i<touchBank.length;i++){var touchTrackToCheck=touchBank[i];if(touchTrackToCheck!=null&&touchTrackToCheck.touchActive){touchHistory.indexOfSingleActiveTouch=i;break;}}if(__DEV__){var activeRecord=touchBank[touchHistory.indexOfSingleActiveTouch];if(!(activeRecord!=null&&activeRecord.touchActive)){console.error('Cannot find single active touch.');}}}}},touchHistory:touchHistory};/* harmony default export */ var useResponderEvents_ResponderTouchHistoryStore = (ResponderTouchHistoryStore);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/hooks/useResponderEvents/createResponderEvent.js
var emptyFunction=function emptyFunction(){};var emptyObject={};var emptyArray=[];function normalizeIdentifier(identifier){return identifier>20?identifier%20:identifier;}function createResponderEvent(domEvent){var rect;var propagationWasStopped=false;var changedTouches;var touches;var domEventChangedTouches=domEvent.changedTouches;var domEventType=domEvent.type;var metaKey=domEvent.metaKey===true;var shiftKey=domEvent.shiftKey===true;var force=domEventChangedTouches&&domEventChangedTouches[0].force||0;var identifier=normalizeIdentifier(domEventChangedTouches&&domEventChangedTouches[0].identifier||0);var clientX=domEventChangedTouches&&domEventChangedTouches[0].clientX||domEvent.clientX;var clientY=domEventChangedTouches&&domEventChangedTouches[0].clientY||domEvent.clientY;var pageX=domEventChangedTouches&&domEventChangedTouches[0].pageX||domEvent.pageX;var pageY=domEventChangedTouches&&domEventChangedTouches[0].pageY||domEvent.pageY;var preventDefault=typeof domEvent.preventDefault==='function'?domEvent.preventDefault.bind(domEvent):emptyFunction;var timestamp=domEvent.timeStamp;function normalizeTouches(touches){return Array.prototype.slice.call(touches).map(function(touch){return{force:touch.force,identifier:normalizeIdentifier(touch.identifier),get locationX(){return locationX(touch.clientX);},get locationY(){return locationY(touch.clientY);},pageX:touch.pageX,pageY:touch.pageY,target:touch.target,timestamp:timestamp};});}if(domEventChangedTouches!=null){changedTouches=normalizeTouches(domEventChangedTouches);touches=normalizeTouches(domEvent.touches);}else{var emulatedTouches=[{force:force,identifier:identifier,get locationX(){return locationX(clientX);},get locationY(){return locationY(clientY);},pageX:pageX,pageY:pageY,target:domEvent.target,timestamp:timestamp}];changedTouches=emulatedTouches;touches=domEventType==='mouseup'||domEventType==='dragstart'?emptyArray:emulatedTouches;}var responderEvent={bubbles:true,cancelable:true,currentTarget:null,defaultPrevented:domEvent.defaultPrevented,dispatchConfig:emptyObject,eventPhase:domEvent.eventPhase,isDefaultPrevented:function isDefaultPrevented(){return domEvent.defaultPrevented;},isPropagationStopped:function isPropagationStopped(){return propagationWasStopped;},isTrusted:domEvent.isTrusted,nativeEvent:{altKey:false,ctrlKey:false,metaKey:metaKey,shiftKey:shiftKey,changedTouches:changedTouches,force:force,identifier:identifier,get locationX(){return locationX(clientX);},get locationY(){return locationY(clientY);},pageX:pageX,pageY:pageY,target:domEvent.target,timestamp:timestamp,touches:touches,type:domEventType},persist:emptyFunction,preventDefault:preventDefault,stopPropagation:function stopPropagation(){propagationWasStopped=true;},target:domEvent.target,timeStamp:timestamp,touchHistory:useResponderEvents_ResponderTouchHistoryStore.touchHistory};function locationX(x){rect=rect||Object(getBoundingClientRect["a" /* default */])(responderEvent.currentTarget);if(rect){return x-rect.left;}}function locationY(y){rect=rect||Object(getBoundingClientRect["a" /* default */])(responderEvent.currentTarget);if(rect){return y-rect.top;}}return responderEvent;}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/isSelectionValid/index.js
function isSelectionValid(){var selection=window.getSelection();var string=selection.toString();var anchorNode=selection.anchorNode;var focusNode=selection.focusNode;var isTextNode=anchorNode&&anchorNode.nodeType===window.Node.TEXT_NODE||focusNode&&focusNode.nodeType===window.Node.TEXT_NODE;return string.length>=1&&string!=='\n'&&isTextNode;}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/hooks/useResponderEvents/utils.js
var keyName='__reactResponderId';function getEventPath(domEvent){if(domEvent.type==='selectionchange'){var target=window.getSelection().anchorNode;return composedPathFallback(target);}else{var path=domEvent.composedPath!=null?domEvent.composedPath():composedPathFallback(domEvent.target);return path;}}function composedPathFallback(target){var path=[];while(target!=null&&target!==document.body){path.push(target);target=target.parentNode;}return path;}function getResponderId(node){if(node!=null){return node[keyName];}return null;}function setResponderId(node,id){if(node!=null){node[keyName]=id;}}function getResponderPaths(domEvent){var idPath=[];var nodePath=[];var eventPath=getEventPath(domEvent);for(var i=0;i<eventPath.length;i++){var node=eventPath[i];var id=getResponderId(node);if(id!=null){idPath.push(id);nodePath.push(node);}}return{idPath:idPath,nodePath:nodePath};}function getLowestCommonAncestor(pathA,pathB){var pathALength=pathA.length;var pathBLength=pathB.length;if(pathALength===0||pathBLength===0||pathA[pathALength-1]!==pathB[pathBLength-1]){return null;}var itemA=pathA[0];var indexA=0;var itemB=pathB[0];var indexB=0;if(pathALength-pathBLength>0){indexA=pathALength-pathBLength;itemA=pathA[indexA];pathALength=pathBLength;}if(pathBLength-pathALength>0){indexB=pathBLength-pathALength;itemB=pathB[indexB];pathBLength=pathALength;}var depth=pathALength;while(depth--){if(itemA===itemB){return itemA;}itemA=pathA[indexA++];itemB=pathB[indexB++];}return null;}function hasTargetTouches(target,touches){if(!touches||touches.length===0){return false;}for(var i=0;i<touches.length;i++){var node=touches[i].target;if(node!=null){if(target.contains(node)){return true;}}}return false;}function hasValidSelection(domEvent){if(domEvent.type==='selectionchange'){return isSelectionValid();}return domEvent.type==='select';}function isPrimaryPointerDown(domEvent){var altKey=domEvent.altKey,button=domEvent.button,buttons=domEvent.buttons,ctrlKey=domEvent.ctrlKey,type=domEvent.type;var isTouch=type==='touchstart'||type==='touchmove';var isPrimaryMouseDown=type==='mousedown'&&(button===0||buttons===1);var isPrimaryMouseMove=type==='mousemove'&&buttons===1;var noModifiers=altKey===false&&ctrlKey===false;if(isTouch||isPrimaryMouseDown&&noModifiers||isPrimaryMouseMove&&noModifiers){return true;}return false;}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/hooks/useResponderEvents/ResponderSystem.js
var ResponderSystem_emptyObject={};var startRegistration=['onStartShouldSetResponderCapture','onStartShouldSetResponder',{bubbles:true}];var moveRegistration=['onMoveShouldSetResponderCapture','onMoveShouldSetResponder',{bubbles:true}];var scrollRegistration=['onScrollShouldSetResponderCapture','onScrollShouldSetResponder',{bubbles:false}];var shouldSetResponderEvents={touchstart:startRegistration,mousedown:startRegistration,touchmove:moveRegistration,mousemove:moveRegistration,scroll:scrollRegistration};var emptyResponder={id:null,idPath:null,node:null};var responderListenersMap=new Map();var isEmulatingMouseEvents=false;var trackedTouchCount=0;var currentResponder={id:null,node:null,idPath:null};function changeCurrentResponder(responder){currentResponder=responder;}function getResponderConfig(id){var config=responderListenersMap.get(id);return config!=null?config:ResponderSystem_emptyObject;}function eventListener(domEvent){var eventType=domEvent.type;var eventTarget=domEvent.target;if(eventType==='touchstart'){isEmulatingMouseEvents=true;}if(eventType==='touchmove'||trackedTouchCount>1){isEmulatingMouseEvents=false;}if(eventType==='mousedown'&&isEmulatingMouseEvents||eventType==='mousemove'&&isEmulatingMouseEvents||eventType==='mousemove'&&trackedTouchCount<1){return;}if(isEmulatingMouseEvents&&eventType==='mouseup'){if(trackedTouchCount===0){isEmulatingMouseEvents=false;}return;}var isStartEvent=isStartish(eventType)&&isPrimaryPointerDown(domEvent);var isMoveEvent=isMoveish(eventType);var isEndEvent=isEndish(eventType);var isScrollEvent=isScroll(eventType);var isSelectionChangeEvent=isSelectionChange(eventType);var responderEvent=createResponderEvent(domEvent);if(isStartEvent||isMoveEvent||isEndEvent){if(domEvent.touches){trackedTouchCount=domEvent.touches.length;}else{if(isStartEvent){trackedTouchCount=1;}else if(isEndEvent){trackedTouchCount=0;}}useResponderEvents_ResponderTouchHistoryStore.recordTouchTrack(eventType,responderEvent.nativeEvent);}var eventPaths=getResponderPaths(domEvent);var wasNegotiated=false;var wantsResponder;if(isStartEvent||isMoveEvent||isScrollEvent&&trackedTouchCount>0){var currentResponderIdPath=currentResponder.idPath;var eventIdPath=eventPaths.idPath;if(currentResponderIdPath!=null&&eventIdPath!=null){var lowestCommonAncestor=getLowestCommonAncestor(currentResponderIdPath,eventIdPath);if(lowestCommonAncestor!=null){var indexOfLowestCommonAncestor=eventIdPath.indexOf(lowestCommonAncestor);var index=indexOfLowestCommonAncestor+(lowestCommonAncestor===currentResponder.id?1:0);eventPaths={idPath:eventIdPath.slice(index),nodePath:eventPaths.nodePath.slice(index)};}else{eventPaths=null;}}if(eventPaths!=null){wantsResponder=findWantsResponder(eventPaths,domEvent,responderEvent);if(wantsResponder!=null){attemptTransfer(responderEvent,wantsResponder);wasNegotiated=true;}}}if(currentResponder.id!=null&&currentResponder.node!=null){var _currentResponder=currentResponder,id=_currentResponder.id,node=_currentResponder.node;var _getResponderConfig=getResponderConfig(id),onResponderStart=_getResponderConfig.onResponderStart,onResponderMove=_getResponderConfig.onResponderMove,onResponderEnd=_getResponderConfig.onResponderEnd,onResponderRelease=_getResponderConfig.onResponderRelease,onResponderTerminate=_getResponderConfig.onResponderTerminate,onResponderTerminationRequest=_getResponderConfig.onResponderTerminationRequest;responderEvent.bubbles=false;responderEvent.cancelable=false;responderEvent.currentTarget=node;if(isStartEvent){if(onResponderStart!=null){onResponderStart(responderEvent);}}else if(isMoveEvent){if(onResponderMove!=null){onResponderMove(responderEvent);}}else{var isTerminateEvent=isCancelish(eventType)||eventType==='contextmenu'||eventType==='blur'&&eventTarget===window||eventType==='blur'&&eventTarget.contains(node)&&domEvent.relatedTarget!==node||isScrollEvent&&trackedTouchCount===0||isScrollEvent&&eventTarget.contains(node)&&eventTarget!==node||isSelectionChangeEvent&&hasValidSelection(domEvent);var isReleaseEvent=isEndEvent&&!isTerminateEvent&&!hasTargetTouches(node,domEvent.touches);if(isEndEvent){if(onResponderEnd!=null){onResponderEnd(responderEvent);}}if(isReleaseEvent){if(onResponderRelease!=null){onResponderRelease(responderEvent);}changeCurrentResponder(emptyResponder);}if(isTerminateEvent){var shouldTerminate=true;if(eventType==='contextmenu'||eventType==='scroll'||eventType==='selectionchange'){if(wasNegotiated||onResponderTerminationRequest!=null&&onResponderTerminationRequest(responderEvent)===false){shouldTerminate=false;}}if(shouldTerminate){if(onResponderTerminate!=null){onResponderTerminate(responderEvent);}changeCurrentResponder(emptyResponder);isEmulatingMouseEvents=false;trackedTouchCount=0;}}}}}function findWantsResponder(eventPaths,domEvent,responderEvent){var shouldSetCallbacks=shouldSetResponderEvents[domEvent.type];if(shouldSetCallbacks!=null){var idPath=eventPaths.idPath,nodePath=eventPaths.nodePath;var shouldSetCallbackCaptureName=shouldSetCallbacks[0];var shouldSetCallbackBubbleName=shouldSetCallbacks[1];var bubbles=shouldSetCallbacks[2].bubbles;var check=function check(id,node,callbackName){var config=getResponderConfig(id);var shouldSetCallback=config[callbackName];if(shouldSetCallback!=null){if(shouldSetCallback(responderEvent)===true){return{id:id,node:node,idPath:idPath};}}};for(var i=idPath.length-1;i>=0;i--){var id=idPath[i];var node=nodePath[i];var result=check(id,node,shouldSetCallbackCaptureName);if(result!=null){return result;}if(responderEvent.isPropagationStopped()===true){return;}}if(bubbles){for(var _i=0;_i<idPath.length;_i++){var _id=idPath[_i];var _node=nodePath[_i];var _result=check(_id,_node,shouldSetCallbackBubbleName);if(_result!=null){return _result;}if(responderEvent.isPropagationStopped()===true){return;}}}else{var _id2=idPath[0];var _node2=nodePath[0];var target=domEvent.target;if(target===_node2){return check(_id2,_node2,shouldSetCallbackBubbleName);}}}}function attemptTransfer(responderEvent,wantsResponder){var _currentResponder2=currentResponder,currentId=_currentResponder2.id,currentNode=_currentResponder2.node;var id=wantsResponder.id,node=wantsResponder.node;var _getResponderConfig2=getResponderConfig(id),onResponderGrant=_getResponderConfig2.onResponderGrant,onResponderReject=_getResponderConfig2.onResponderReject;responderEvent.bubbles=false;responderEvent.cancelable=false;responderEvent.currentTarget=node;if(currentId==null){if(onResponderGrant!=null){responderEvent.currentTarget=node;responderEvent.dispatchConfig.registrationName='onResponderGrant';onResponderGrant(responderEvent);}changeCurrentResponder(wantsResponder);}else{var _getResponderConfig3=getResponderConfig(currentId),onResponderTerminate=_getResponderConfig3.onResponderTerminate,onResponderTerminationRequest=_getResponderConfig3.onResponderTerminationRequest;var allowTransfer=onResponderTerminationRequest!=null&&onResponderTerminationRequest(responderEvent);if(allowTransfer){if(onResponderTerminate!=null){responderEvent.currentTarget=currentNode;onResponderTerminate(responderEvent);}if(onResponderGrant!=null){onResponderGrant(responderEvent);}changeCurrentResponder(wantsResponder);}else{if(onResponderReject!=null){onResponderReject(responderEvent);}}}}var documentEventsCapturePhase=['blur','scroll'];var documentEventsBubblePhase=['mousedown','mousemove','mouseup','dragstart','touchstart','touchmove','touchend','touchcancel','contextmenu','select','selectionchange'];function attachListeners(){if(ExecutionEnvironment["canUseDOM"]&&window.__reactResponderSystemActive==null){window.addEventListener('blur',eventListener);documentEventsBubblePhase.forEach(function(eventType){document.addEventListener(eventType,eventListener);});documentEventsCapturePhase.forEach(function(eventType){document.addEventListener(eventType,eventListener,true);});window.__reactResponderSystemActive=true;}}function addNode(id,node,config){setResponderId(node,id);responderListenersMap.set(id,config);}function removeNode(id){if(currentResponder.id===id){terminateResponder();}if(responderListenersMap.has(id)){responderListenersMap.delete(id);}}function terminateResponder(){var _currentResponder3=currentResponder,id=_currentResponder3.id,node=_currentResponder3.node;if(id!=null&&node!=null){var _getResponderConfig4=getResponderConfig(id),onResponderTerminate=_getResponderConfig4.onResponderTerminate;if(onResponderTerminate!=null){var event=createResponderEvent({});event.currentTarget=node;onResponderTerminate(event);}changeCurrentResponder(emptyResponder);}isEmulatingMouseEvents=false;trackedTouchCount=0;}function getResponderNode(){return currentResponder.node;}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/hooks/useResponderEvents/index.js
var useResponderEvents_emptyObject={};var idCounter=0;function useStable(getInitialValue){var ref=react["useRef"](null);if(ref.current==null){ref.current=getInitialValue();}return ref.current;}function useResponderEvents(hostRef,config){if(config===void 0){config=useResponderEvents_emptyObject;}var id=useStable(function(){return idCounter++;});var isAttachedRef=react["useRef"](false);react["useEffect"](function(){attachListeners();return function(){removeNode(id);};},[id]);react["useEffect"](function(){var _config=config,onMoveShouldSetResponder=_config.onMoveShouldSetResponder,onMoveShouldSetResponderCapture=_config.onMoveShouldSetResponderCapture,onScrollShouldSetResponder=_config.onScrollShouldSetResponder,onScrollShouldSetResponderCapture=_config.onScrollShouldSetResponderCapture,onSelectionChangeShouldSetResponder=_config.onSelectionChangeShouldSetResponder,onSelectionChangeShouldSetResponderCapture=_config.onSelectionChangeShouldSetResponderCapture,onStartShouldSetResponder=_config.onStartShouldSetResponder,onStartShouldSetResponderCapture=_config.onStartShouldSetResponderCapture;var requiresResponderSystem=onMoveShouldSetResponder!=null||onMoveShouldSetResponderCapture!=null||onScrollShouldSetResponder!=null||onScrollShouldSetResponderCapture!=null||onSelectionChangeShouldSetResponder!=null||onSelectionChangeShouldSetResponderCapture!=null||onStartShouldSetResponder!=null||onStartShouldSetResponderCapture!=null;var node=hostRef.current;if(requiresResponderSystem){addNode(id,node,config);isAttachedRef.current=true;}else if(isAttachedRef.current){removeNode(id);isAttachedRef.current=false;}},[config,hostRef,id]);react["useDebugValue"]({isResponder:hostRef.current===getResponderNode()});react["useDebugValue"](config);}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/AccessibilityUtil/buttonLikeRoles.js
var buttonLikeRoles={button:true,menuitem:true};/* harmony default export */ var AccessibilityUtil_buttonLikeRoles = (buttonLikeRoles);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js
var isDisabled=function isDisabled(props){return props.disabled||Array.isArray(props.accessibilityStates)&&props.accessibilityStates.indexOf('disabled')>-1;};/* harmony default export */ var AccessibilityUtil_isDisabled = (isDisabled);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js
var accessibilityRoleToWebRole={adjustable:'slider',button:'button',header:'heading',image:'img',imagebutton:null,keyboardkey:null,label:null,link:'link',none:'presentation',search:'search',summary:'region',text:null};var propsToAriaRole=function propsToAriaRole(_ref){var accessibilityRole=_ref.accessibilityRole;if(accessibilityRole){var inferredRole=accessibilityRoleToWebRole[accessibilityRole];if(inferredRole!==null){return inferredRole||accessibilityRole;}}};/* harmony default export */ var AccessibilityUtil_propsToAriaRole = (propsToAriaRole);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js
var roleComponents={article:'article',banner:'header',complementary:'aside',contentinfo:'footer',form:'form',link:'a',list:'ul',listitem:'li',main:'main',navigation:'nav',region:'section'};var emptyObject={};var propsToAccessibilityComponent_propsToAccessibilityComponent=function propsToAccessibilityComponent(props){if(props===void 0){props=emptyObject;}if(props.accessibilityRole==='label'){return'label';}var role=AccessibilityUtil_propsToAriaRole(props);if(role){if(role==='heading'){var level=props['aria-level'];if(level!=null){return"h"+level;}return'h1';}return roleComponents[role];}};/* harmony default export */ var AccessibilityUtil_propsToAccessibilityComponent = (propsToAccessibilityComponent_propsToAccessibilityComponent);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js
var AccessibilityUtil={buttonLikeRoles:AccessibilityUtil_buttonLikeRoles,isDisabled:AccessibilityUtil_isDisabled,propsToAccessibilityComponent:AccessibilityUtil_propsToAccessibilityComponent,propsToAriaRole:AccessibilityUtil_propsToAriaRole};/* harmony default export */ var modules_AccessibilityUtil = __webpack_exports__["a"] = (AccessibilityUtil);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(260);

var iterableToArrayLimit = __webpack_require__(261);

var unsupportedIterableToArray = __webpack_require__(108);

var nonIterableRest = __webpack_require__(262);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var CSS_UNIT_RE=/^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;var getUnit=function getUnit(str){return str.match(CSS_UNIT_RE)[1];};var isNumeric=function isNumeric(n){return!isNaN(parseFloat(n))&&isFinite(n);};var multiplyStyleLengthValue=function multiplyStyleLengthValue(value,multiple){if(typeof value==='string'){var number=parseFloat(value)*multiple;var unit=getUnit(value);return""+number+unit;}else if(isNumeric(value)){return value*multiple;}};/* harmony default export */ __webpack_exports__["a"] = (multiplyStyleLengthValue);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getBoundingClientRect=function getBoundingClientRect(node){if(node!=null){var isElement=node.nodeType===1;if(isElement&&typeof node.getBoundingClientRect==='function'){return node.getBoundingClientRect();}}};/* harmony default export */ __webpack_exports__["a"] = (getBoundingClientRect);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _hooks_usePressEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function TouchableOpacity(props,forwardedRef){var accessible=props.accessible,activeOpacity=props.activeOpacity,delayPressIn=props.delayPressIn,delayPressOut=props.delayPressOut,delayLongPress=props.delayLongPress,disabled=props.disabled,focusable=props.focusable,onLongPress=props.onLongPress,onPress=props.onPress,onPressIn=props.onPressIn,onPressOut=props.onPressOut,rejectResponderTermination=props.rejectResponderTermination,style=props.style,rest=_objectWithoutPropertiesLoose(props,["accessible","activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"]);var hostRef=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);var setRef=Object(_modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(forwardedRef,hostRef);var _useState=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('0s'),duration=_useState[0],setDuration=_useState[1];var _useState2=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),opacityOverride=_useState2[0],setOpacityOverride=_useState2[1];var setOpacityTo=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function(value,duration){setOpacityOverride(value);setDuration(duration?duration/1000+"s":'0s');},[setOpacityOverride,setDuration]);var setOpacityActive=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function(duration){setOpacityTo(activeOpacity!==null&&activeOpacity!==void 0?activeOpacity:0.2,duration);},[activeOpacity,setOpacityTo]);var setOpacityInactive=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function(duration){setOpacityTo(null,duration);},[setOpacityTo]);var pressConfig=Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function(){return{cancelable:!rejectResponderTermination,disabled:disabled,delayLongPress:delayLongPress,delayPressStart:delayPressIn,delayPressEnd:delayPressOut,onLongPress:onLongPress,onPress:onPress,onPressStart:function onPressStart(event){setOpacityActive(event.dispatchConfig.registrationName==='onResponderGrant'?0:150);if(onPressIn!=null){onPressIn(event);}},onPressEnd:function onPressEnd(event){setOpacityInactive(250);if(onPressOut!=null){onPressOut(event);}}};},[delayLongPress,delayPressIn,delayPressOut,disabled,onLongPress,onPress,onPressIn,onPressOut,rejectResponderTermination,setOpacityActive,setOpacityInactive]);var pressEventHandlers=Object(_hooks_usePressEvents__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(hostRef,pressConfig);return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],_extends({},rest,pressEventHandlers,{accessibilityState:_objectSpread({disabled:disabled},props.accessibilityState),accessible:accessible!==false,focusable:focusable!==false&&onPress!==undefined,ref:setRef,style:[styles.root,!disabled&&styles.actionable,style,opacityOverride!=null&&{opacity:opacityOverride},{transitionDuration:duration}]}));}var styles=_StyleSheet__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].create({root:{transitionProperty:'opacity',transitionDuration:'0.15s',userSelect:'none'},actionable:{cursor:'pointer',touchAction:'manipulation'}});var MemoedTouchableOpacity=react__WEBPACK_IMPORTED_MODULE_0__["memo"](react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](TouchableOpacity));MemoedTouchableOpacity.displayName='TouchableOpacity';/* harmony default export */ __webpack_exports__["a"] = (MemoedTouchableOpacity);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Audio_namespaceObject; });

// UNUSED EXPORTS: Video, ResizeMode

// NAMESPACE OBJECT: /home/danny/Projects/InventedSpelling/node_modules/expo-av/build/Audio.js
var Audio_namespaceObject = {};
__webpack_require__.r(Audio_namespaceObject);
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT", function() { return RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP", function() { return RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4", function() { return RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_NB", function() { return RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_NB; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB", function() { return RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADIF", function() { return RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADIF; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADTS", function() { return RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADTS; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_RTP_AVP", function() { return RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_RTP_AVP; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG2TS", function() { return RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG2TS; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_WEBM", function() { return RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_WEBM; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT", function() { return RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB", function() { return RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB", function() { return RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC", function() { return RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_AUDIO_ENCODER_HE_AAC", function() { return RECORDING_OPTION_ANDROID_AUDIO_ENCODER_HE_AAC; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC_ELD", function() { return RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC_ELD; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_AC3", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_AC3; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_60958AC3", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_60958AC3; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLEIMA4", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLEIMA4; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4CELP", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4CELP; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4HVXC", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4HVXC; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4TWINVQ", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4TWINVQ; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE3", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE3; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE6", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE6; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_ULAW", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_ULAW; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_ALAW", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_ALAW; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN2", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN2; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_QUALCOMM", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_QUALCOMM; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER1", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER1; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER2", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER2; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER3", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER3; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLELOSSLESS", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLELOSSLESS; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_LD", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_LD; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_SBR", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_SBR; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_V2", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_V2; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE_V2", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE_V2; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_SPATIAL", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_SPATIAL; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR_WB", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR_WB; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_AUDIBLE", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_AUDIBLE; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_ILBC", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_ILBC; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_DVIINTELIMA", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_DVIINTELIMA; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_MICROSOFTGSM", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_MICROSOFTGSM; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_AES3", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_AES3; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_OUTPUT_FORMAT_ENHANCEDAC3", function() { return RECORDING_OPTION_IOS_OUTPUT_FORMAT_ENHANCEDAC3; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN", function() { return RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_AUDIO_QUALITY_LOW", function() { return RECORDING_OPTION_IOS_AUDIO_QUALITY_LOW; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_AUDIO_QUALITY_MEDIUM", function() { return RECORDING_OPTION_IOS_AUDIO_QUALITY_MEDIUM; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH", function() { return RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX", function() { return RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_CONSTANT", function() { return RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_CONSTANT; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_LONG_TERM_AVERAGE", function() { return RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_LONG_TERM_AVERAGE; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE_CONSTRAINED", function() { return RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE_CONSTRAINED; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE", function() { return RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTIONS_PRESET_HIGH_QUALITY", function() { return RECORDING_OPTIONS_PRESET_HIGH_QUALITY; });
__webpack_require__.d(Audio_namespaceObject, "RECORDING_OPTIONS_PRESET_LOW_QUALITY", function() { return RECORDING_OPTIONS_PRESET_LOW_QUALITY; });
__webpack_require__.d(Audio_namespaceObject, "PermissionStatus", function() { return PermissionStatus; });
__webpack_require__.d(Audio_namespaceObject, "getPermissionsAsync", function() { return getPermissionsAsync; });
__webpack_require__.d(Audio_namespaceObject, "requestPermissionsAsync", function() { return requestPermissionsAsync; });
__webpack_require__.d(Audio_namespaceObject, "Recording", function() { return Recording_Recording; });
__webpack_require__.d(Audio_namespaceObject, "Sound", function() { return Sound_Sound; });
__webpack_require__.d(Audio_namespaceObject, "setIsEnabledAsync", function() { return setIsEnabledAsync; });
__webpack_require__.d(Audio_namespaceObject, "PitchCorrectionQuality", function() { return AV_PitchCorrectionQuality; });
__webpack_require__.d(Audio_namespaceObject, "INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS", function() { return INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS; });
__webpack_require__.d(Audio_namespaceObject, "INTERRUPTION_MODE_IOS_DO_NOT_MIX", function() { return INTERRUPTION_MODE_IOS_DO_NOT_MIX; });
__webpack_require__.d(Audio_namespaceObject, "INTERRUPTION_MODE_IOS_DUCK_OTHERS", function() { return INTERRUPTION_MODE_IOS_DUCK_OTHERS; });
__webpack_require__.d(Audio_namespaceObject, "INTERRUPTION_MODE_ANDROID_DO_NOT_MIX", function() { return INTERRUPTION_MODE_ANDROID_DO_NOT_MIX; });
__webpack_require__.d(Audio_namespaceObject, "INTERRUPTION_MODE_ANDROID_DUCK_OTHERS", function() { return INTERRUPTION_MODE_ANDROID_DUCK_OTHERS; });
__webpack_require__.d(Audio_namespaceObject, "setAudioModeAsync", function() { return setAudioModeAsync; });

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(10);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(16);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/DeviceEventEmitter/index.js
var DeviceEventEmitter = __webpack_require__(78);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/emitter/EventEmitter.js + 2 modules
var emitter_EventEmitter = __webpack_require__(90);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/@unimodules/react-native-adapter/build/SyntheticPlatformEmitter.js
var SyntheticPlatformEmitter_SyntheticPlatformEmitter=function(){function SyntheticPlatformEmitter(){classCallCheck_default()(this,SyntheticPlatformEmitter);this._emitter=new emitter_EventEmitter["a" /* default */](DeviceEventEmitter["a" /* default */].sharedSubscriber);}createClass_default()(SyntheticPlatformEmitter,[{key:"emit",value:function emit(eventName,props){this._emitter.emit(eventName,props);}}]);return SyntheticPlatformEmitter;}();/* harmony default export */ var build_SyntheticPlatformEmitter = (new SyntheticPlatformEmitter_SyntheticPlatformEmitter());
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-av/build/ExponentAV.web.js
function getStatusFromMedia(media){if(!media){return{isLoaded:false,error:undefined};}var isPlaying=!!(media.currentTime>0&&!media.paused&&!media.ended&&media.readyState>2);var status={isLoaded:true,uri:media.src,progressUpdateIntervalMillis:100,durationMillis:media.duration*1000,positionMillis:media.currentTime*1000,shouldPlay:media.autoplay,isPlaying:isPlaying,isBuffering:false,rate:media.playbackRate,shouldCorrectPitch:false,volume:media.volume,isMuted:media.muted,isLooping:media.loop,didJustFinish:media.ended};return status;}function setStatusForMedia(media,status){if(status.positionMillis!==undefined){media.currentTime=status.positionMillis/1000;}if(status.shouldPlay!==undefined){if(status.shouldPlay){media.play();}else{media.pause();}}if(status.rate!==undefined){media.playbackRate=status.rate;}if(status.volume!==undefined){media.volume=status.volume;}if(status.isMuted!==undefined){media.muted=status.isMuted;}if(status.isLooping!==undefined){media.loop=status.isLooping;}return getStatusFromMedia(media);}/* harmony default export */ var ExponentAV_web = ({get name(){return'ExponentAV';},getStatusForVideo:function getStatusForVideo(element){return regenerator_default.a.async(function getStatusForVideo$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",getStatusFromMedia(element));case 1:case"end":return _context.stop();}}},null,null,null,Promise);},loadForVideo:function loadForVideo(element,nativeSource,fullInitialStatus){return regenerator_default.a.async(function loadForVideo$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",getStatusFromMedia(element));case 1:case"end":return _context2.stop();}}},null,null,null,Promise);},unloadForVideo:function unloadForVideo(element){return regenerator_default.a.async(function unloadForVideo$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:return _context3.abrupt("return",getStatusFromMedia(element));case 1:case"end":return _context3.stop();}}},null,null,null,Promise);},setStatusForVideo:function setStatusForVideo(element,status){return regenerator_default.a.async(function setStatusForVideo$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:return _context4.abrupt("return",setStatusForMedia(element,status));case 1:case"end":return _context4.stop();}}},null,null,null,Promise);},replayVideo:function replayVideo(element,status){return regenerator_default.a.async(function replayVideo$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:return _context5.abrupt("return",setStatusForMedia(element,status));case 1:case"end":return _context5.stop();}}},null,null,null,Promise);},setAudioMode:function setAudioMode(){return regenerator_default.a.async(function setAudioMode$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:case"end":return _context6.stop();}}},null,null,null,Promise);},setAudioIsEnabled:function setAudioIsEnabled(){return regenerator_default.a.async(function setAudioIsEnabled$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:case"end":return _context7.stop();}}},null,null,null,Promise);},getStatusForSound:function getStatusForSound(element){return regenerator_default.a.async(function getStatusForSound$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:return _context8.abrupt("return",getStatusFromMedia(element));case 1:case"end":return _context8.stop();}}},null,null,null,Promise);},loadForSound:function loadForSound(nativeSource,fullInitialStatus){var source,media,status;return regenerator_default.a.async(function loadForSound$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:source=typeof nativeSource==='string'?nativeSource:nativeSource.uri;media=new Audio(source);media.ontimeupdate=function(){build_SyntheticPlatformEmitter.emit('didUpdatePlaybackStatus',{key:media,status:getStatusFromMedia(media)});};media.onerror=function(){build_SyntheticPlatformEmitter.emit('ExponentAV.onError',{key:media,error:media.error.message});};status=setStatusForMedia(media,fullInitialStatus);return _context9.abrupt("return",[media,status]);case 6:case"end":return _context9.stop();}}},null,null,null,Promise);},unloadForSound:function unloadForSound(element){return regenerator_default.a.async(function unloadForSound$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:element.pause();element.removeAttribute('src');element.load();return _context10.abrupt("return",getStatusFromMedia(element));case 4:case"end":return _context10.stop();}}},null,null,null,Promise);},setStatusForSound:function setStatusForSound(element,status){return regenerator_default.a.async(function setStatusForSound$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:return _context11.abrupt("return",setStatusForMedia(element,status));case 1:case"end":return _context11.stop();}}},null,null,null,Promise);},replaySound:function replaySound(element,status){return regenerator_default.a.async(function replaySound$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:return _context12.abrupt("return",setStatusForMedia(element,status));case 1:case"end":return _context12.stop();}}},null,null,null,Promise);},getAudioRecordingStatus:function getAudioRecordingStatus(){return regenerator_default.a.async(function getAudioRecordingStatus$(_context13){while(1){switch(_context13.prev=_context13.next){case 0:case"end":return _context13.stop();}}},null,null,null,Promise);},prepareAudioRecorder:function prepareAudioRecorder(){return regenerator_default.a.async(function prepareAudioRecorder$(_context14){while(1){switch(_context14.prev=_context14.next){case 0:case"end":return _context14.stop();}}},null,null,null,Promise);},startAudioRecording:function startAudioRecording(){return regenerator_default.a.async(function startAudioRecording$(_context15){while(1){switch(_context15.prev=_context15.next){case 0:case"end":return _context15.stop();}}},null,null,null,Promise);},pauseAudioRecording:function pauseAudioRecording(){return regenerator_default.a.async(function pauseAudioRecording$(_context16){while(1){switch(_context16.prev=_context16.next){case 0:case"end":return _context16.stop();}}},null,null,null,Promise);},stopAudioRecording:function stopAudioRecording(){return regenerator_default.a.async(function stopAudioRecording$(_context17){while(1){switch(_context17.prev=_context17.next){case 0:case"end":return _context17.stop();}}},null,null,null,Promise);},unloadAudioRecorder:function unloadAudioRecorder(){return regenerator_default.a.async(function unloadAudioRecorder$(_context18){while(1){switch(_context18.prev=_context18.next){case 0:case"end":return _context18.stop();}}},null,null,null,Promise);}});
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(19);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@unimodules/react-native-adapter/build/Platform.js + 1 modules
var Platform = __webpack_require__(133);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/invariant/browser.js
var browser = __webpack_require__(89);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/NativeEventEmitter/index.js
var NativeEventEmitter = __webpack_require__(76);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Platform/index.js
var exports_Platform = __webpack_require__(15);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/@unimodules/react-native-adapter/build/EventEmitter.js
var nativeEmitterSubscriptionKey='@@nativeEmitterSubscription@@';var EventEmitter_EventEmitter=function(){function EventEmitter(nativeModule){classCallCheck_default()(this,EventEmitter);this._listenerCount=0;this._nativeModule=nativeModule;this._eventEmitter=new NativeEventEmitter["a" /* default */](nativeModule);}createClass_default()(EventEmitter,[{key:"addListener",value:function addListener(eventName,listener){var _this=this,_subscription;if(!this._listenerCount&&exports_Platform["a" /* default */].OS!=='ios'&&this._nativeModule.startObserving){this._nativeModule.startObserving();}this._listenerCount++;var nativeEmitterSubscription=this._eventEmitter.addListener(eventName,listener);var subscription=(_subscription={},defineProperty_default()(_subscription,nativeEmitterSubscriptionKey,nativeEmitterSubscription),defineProperty_default()(_subscription,"remove",function remove(){_this.removeSubscription(subscription);}),_subscription);return subscription;}},{key:"removeAllListeners",value:function removeAllListeners(eventName){var removedListenerCount=this._eventEmitter.listeners(eventName).length;this._eventEmitter.removeAllListeners(eventName);this._listenerCount-=removedListenerCount;browser_default()(this._listenerCount>=0,"EventEmitter must have a non-negative number of listeners");if(!this._listenerCount&&exports_Platform["a" /* default */].OS!=='ios'&&this._nativeModule.stopObserving){this._nativeModule.stopObserving();}}},{key:"removeSubscription",value:function removeSubscription(subscription){var nativeEmitterSubscription=subscription[nativeEmitterSubscriptionKey];if(!nativeEmitterSubscription){return;}this._eventEmitter.removeSubscription(nativeEmitterSubscription);this._listenerCount--;delete subscription[nativeEmitterSubscriptionKey];subscription.remove=function(){};if(!this._listenerCount&&exports_Platform["a" /* default */].OS!=='ios'&&this._nativeModule.stopObserving){this._nativeModule.stopObserving();}}},{key:"emit",value:function emit(eventName){var _this$_eventEmitter;for(var _len=arguments.length,params=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){params[_key-1]=arguments[_key];}(_this$_eventEmitter=this._eventEmitter).emit.apply(_this$_eventEmitter,[eventName].concat(params));}}]);return EventEmitter;}();
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/unimodules-permissions-interface/build/PermissionsInterface.js
var PermissionStatus;(function(PermissionStatus){PermissionStatus["GRANTED"]="granted";PermissionStatus["UNDETERMINED"]="undetermined";PermissionStatus["DENIED"]="denied";})(PermissionStatus||(PermissionStatus={}));
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-asset/build/Asset.js + 4 modules
var Asset = __webpack_require__(326);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-av/build/AV.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var AV_PitchCorrectionQuality;(function(PitchCorrectionQuality){PitchCorrectionQuality[PitchCorrectionQuality["Low"]=ExponentAV_web&&ExponentAV_web.Qualities&&ExponentAV_web.Qualities.Low]="Low";PitchCorrectionQuality[PitchCorrectionQuality["Medium"]=ExponentAV_web&&ExponentAV_web.Qualities&&ExponentAV_web.Qualities.Medium]="Medium";PitchCorrectionQuality[PitchCorrectionQuality["High"]=ExponentAV_web&&ExponentAV_web.Qualities&&ExponentAV_web.Qualities.High]="High";})(AV_PitchCorrectionQuality||(AV_PitchCorrectionQuality={}));var _DEFAULT_PROGRESS_UPDATE_INTERVAL_MILLIS=500;var _DEFAULT_INITIAL_PLAYBACK_STATUS={positionMillis:0,progressUpdateIntervalMillis:_DEFAULT_PROGRESS_UPDATE_INTERVAL_MILLIS,shouldPlay:false,rate:1.0,shouldCorrectPitch:false,volume:1.0,isMuted:false,isLooping:false};function getNativeSourceFromSource(source){var uri=null;var overridingExtension=null;var headers;if(typeof source==='string'&&Platform["a" /* default */].OS==='web'){return{uri:source,overridingExtension:overridingExtension,headers:headers};}var asset=_getAssetFromPlaybackSource(source);if(asset!=null){uri=asset.localUri||asset.uri;}else if(source!=null&&typeof source!=='number'&&'uri'in source&&typeof source.uri==='string'){uri=source.uri;}if(uri==null){return null;}if(source!=null&&typeof source!=='number'&&'overrideFileExtensionAndroid'in source&&typeof source.overrideFileExtensionAndroid==='string'){overridingExtension=source.overrideFileExtensionAndroid;}if(source!=null&&typeof source!=='number'&&'headers'in source&&typeof source.headers==='object'){headers=source.headers;}return{uri:uri,overridingExtension:overridingExtension,headers:headers};}function _getAssetFromPlaybackSource(source){if(source==null){return null;}var asset=null;if(typeof source==='number'){asset=Asset["a" /* Asset */].fromModule(source);}else if(source instanceof Asset["a" /* Asset */]){asset=source;}return asset;}function assertStatusValuesInBounds(status){if(typeof status.rate==='number'&&(status.rate<0||status.rate>32)){throw new RangeError('Rate value must be between 0.0 and 32.0');}if(typeof status.volume==='number'&&(status.volume<0||status.volume>1)){throw new RangeError('Volume value must be between 0.0 and 1.0');}}function getNativeSourceAndFullInitialStatusForLoadAsync(source,initialStatus,downloadFirst){var fullInitialStatus,asset,nativeSource;return regenerator_default.a.async(function getNativeSourceAndFullInitialStatusForLoadAsync$(_context){while(1){switch(_context.prev=_context.next){case 0:fullInitialStatus=initialStatus==null?_DEFAULT_INITIAL_PLAYBACK_STATUS:_objectSpread(_objectSpread({},_DEFAULT_INITIAL_PLAYBACK_STATUS),initialStatus);assertStatusValuesInBounds(fullInitialStatus);if(!(typeof source==='string'&&Platform["a" /* default */].OS==='web')){_context.next=4;break;}return _context.abrupt("return",{nativeSource:{uri:source,overridingExtension:null},fullInitialStatus:fullInitialStatus});case 4:asset=_getAssetFromPlaybackSource(source);if(!(downloadFirst&&asset)){_context.next=8;break;}_context.next=8;return regenerator_default.a.awrap(asset.downloadAsync());case 8:nativeSource=getNativeSourceFromSource(source);if(!(nativeSource===null)){_context.next=11;break;}throw new Error("Cannot load an AV asset from a null playback source");case 11:return _context.abrupt("return",{nativeSource:nativeSource,fullInitialStatus:fullInitialStatus});case 12:case"end":return _context.stop();}}},null,null,null,Promise);}function getUnloadedStatus(){var error=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;return _objectSpread({isLoaded:false},error?{error:error}:null);}var PlaybackMixin={playAsync:function playAsync(){return regenerator_default.a.async(function playAsync$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",this.setStatusAsync({shouldPlay:true}));case 1:case"end":return _context2.stop();}}},null,this,null,Promise);},playFromPositionAsync:function playFromPositionAsync(positionMillis){var tolerances,_args3=arguments;return regenerator_default.a.async(function playFromPositionAsync$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:tolerances=_args3.length>1&&_args3[1]!==undefined?_args3[1]:{};return _context3.abrupt("return",this.setStatusAsync({positionMillis:positionMillis,shouldPlay:true,seekMillisToleranceAfter:tolerances.toleranceMillisAfter,seekMillisToleranceBefore:tolerances.toleranceMillisBefore}));case 2:case"end":return _context3.stop();}}},null,this,null,Promise);},pauseAsync:function pauseAsync(){return regenerator_default.a.async(function pauseAsync$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:return _context4.abrupt("return",this.setStatusAsync({shouldPlay:false}));case 1:case"end":return _context4.stop();}}},null,this,null,Promise);},stopAsync:function stopAsync(){return regenerator_default.a.async(function stopAsync$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:return _context5.abrupt("return",this.setStatusAsync({positionMillis:0,shouldPlay:false}));case 1:case"end":return _context5.stop();}}},null,this,null,Promise);},setPositionAsync:function setPositionAsync(positionMillis){var tolerances,_args6=arguments;return regenerator_default.a.async(function setPositionAsync$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:tolerances=_args6.length>1&&_args6[1]!==undefined?_args6[1]:{};return _context6.abrupt("return",this.setStatusAsync({positionMillis:positionMillis,seekMillisToleranceAfter:tolerances.toleranceMillisAfter,seekMillisToleranceBefore:tolerances.toleranceMillisBefore}));case 2:case"end":return _context6.stop();}}},null,this,null,Promise);},setRateAsync:function setRateAsync(rate){var shouldCorrectPitch,pitchCorrectionQuality,_args7=arguments;return regenerator_default.a.async(function setRateAsync$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:shouldCorrectPitch=_args7.length>1&&_args7[1]!==undefined?_args7[1]:false;pitchCorrectionQuality=_args7.length>2&&_args7[2]!==undefined?_args7[2]:AV_PitchCorrectionQuality.Low;return _context7.abrupt("return",this.setStatusAsync({rate:rate,shouldCorrectPitch:shouldCorrectPitch,pitchCorrectionQuality:pitchCorrectionQuality}));case 3:case"end":return _context7.stop();}}},null,this,null,Promise);},setVolumeAsync:function setVolumeAsync(volume){return regenerator_default.a.async(function setVolumeAsync$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:return _context8.abrupt("return",this.setStatusAsync({volume:volume}));case 1:case"end":return _context8.stop();}}},null,this,null,Promise);},setIsMutedAsync:function setIsMutedAsync(isMuted){return regenerator_default.a.async(function setIsMutedAsync$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:return _context9.abrupt("return",this.setStatusAsync({isMuted:isMuted}));case 1:case"end":return _context9.stop();}}},null,this,null,Promise);},setIsLoopingAsync:function setIsLoopingAsync(isLooping){return regenerator_default.a.async(function setIsLoopingAsync$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:return _context10.abrupt("return",this.setStatusAsync({isLooping:isLooping}));case 1:case"end":return _context10.stop();}}},null,this,null,Promise);},setProgressUpdateIntervalAsync:function setProgressUpdateIntervalAsync(progressUpdateIntervalMillis){return regenerator_default.a.async(function setProgressUpdateIntervalAsync$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:return _context11.abrupt("return",this.setStatusAsync({progressUpdateIntervalMillis:progressUpdateIntervalMillis}));case 1:case"end":return _context11.stop();}}},null,this,null,Promise);}};
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-av/build/Audio/AudioAvailability.js
var _enabled=true;function isAudioEnabled(){return _enabled;}function throwIfAudioIsDisabled(){if(!_enabled){throw new Error('Cannot complete operation because audio is not enabled.');}}function setIsEnabledAsync(value){return regenerator_default.a.async(function setIsEnabledAsync$(_context){while(1){switch(_context.prev=_context.next){case 0:_enabled=value;_context.next=3;return regenerator_default.a.awrap(ExponentAV_web.setAudioIsEnabled(value));case 3:case"end":return _context.stop();}}},null,null,null,Promise);}
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(55);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-av/build/Audio/Sound.js
function Sound_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function Sound_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){Sound_ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{Sound_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Sound_Sound=function(){function Sound(){var _this=this;classCallCheck_default()(this,Sound);this._loaded=false;this._loading=false;this._key=null;this._lastStatusUpdate=null;this._lastStatusUpdateTime=null;this._subscriptions=[];this._eventEmitter=new EventEmitter_EventEmitter(ExponentAV_web);this._coalesceStatusUpdatesInMillis=100;this._onPlaybackStatusUpdate=null;this._internalStatusUpdateCallback=function(_ref){var key=_ref.key,status=_ref.status;if(_this._key===key){_this._callOnPlaybackStatusUpdateForNewStatus(status);}};this._internalErrorCallback=function(_ref2){var key=_ref2.key,error=_ref2.error;if(_this._key===key){_this._errorCallback(error);}};this._errorCallback=function(error){_this._clearSubscriptions();_this._loaded=false;_this._key=null;_this._callOnPlaybackStatusUpdateForNewStatus(getUnloadedStatus(error));};this.getStatusAsync=function _callee(){var status;return regenerator_default.a.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!_this._loaded){_context.next=2;break;}return _context.abrupt("return",_this._performOperationAndHandleStatusAsync(function(){return ExponentAV_web.getStatusForSound(_this._key);}));case 2:status=getUnloadedStatus();_this._callOnPlaybackStatusUpdateForNewStatus(status);return _context.abrupt("return",status);case 5:case"end":return _context.stop();}}},null,null,null,Promise);};}createClass_default()(Sound,[{key:"_callOnPlaybackStatusUpdateForNewStatus",value:function _callOnPlaybackStatusUpdateForNewStatus(status){var shouldDismissBasedOnCoalescing=this._lastStatusUpdateTime&&JSON.stringify(status)===this._lastStatusUpdate&&Date.now()-this._lastStatusUpdateTime.getTime()<this._coalesceStatusUpdatesInMillis;if(this._onPlaybackStatusUpdate!=null&&!shouldDismissBasedOnCoalescing){this._onPlaybackStatusUpdate(status);this._lastStatusUpdateTime=new Date();this._lastStatusUpdate=JSON.stringify(status);}}},{key:"_performOperationAndHandleStatusAsync",value:function _performOperationAndHandleStatusAsync(operation){var status;return regenerator_default.a.async(function _performOperationAndHandleStatusAsync$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:throwIfAudioIsDisabled();if(!this._loaded){_context2.next=9;break;}_context2.next=4;return regenerator_default.a.awrap(operation());case 4:status=_context2.sent;this._callOnPlaybackStatusUpdateForNewStatus(status);return _context2.abrupt("return",status);case 9:throw new Error('Cannot complete operation because sound is not loaded.');case 10:case"end":return _context2.stop();}}},null,this,null,Promise);}},{key:"_subscribeToNativeEvents",value:function _subscribeToNativeEvents(){if(this._loaded){this._subscriptions.push(this._eventEmitter.addListener('didUpdatePlaybackStatus',this._internalStatusUpdateCallback));this._subscriptions.push(this._eventEmitter.addListener('ExponentAV.onError',this._internalErrorCallback));}}},{key:"_clearSubscriptions",value:function _clearSubscriptions(){this._subscriptions.forEach(function(e){return e.remove();});this._subscriptions=[];}},{key:"setOnPlaybackStatusUpdate",value:function setOnPlaybackStatusUpdate(onPlaybackStatusUpdate){this._onPlaybackStatusUpdate=onPlaybackStatusUpdate;this.getStatusAsync();}},{key:"loadAsync",value:function loadAsync(source){var _this2=this;var initialStatus,downloadFirst,_await$getNativeSourc,nativeSource,fullInitialStatus,_args3=arguments;return regenerator_default.a.async(function loadAsync$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:initialStatus=_args3.length>1&&_args3[1]!==undefined?_args3[1]:{};downloadFirst=_args3.length>2&&_args3[2]!==undefined?_args3[2]:true;throwIfAudioIsDisabled();if(!this._loading){_context3.next=5;break;}throw new Error('The Sound is already loading.');case 5:if(this._loaded){_context3.next=15;break;}this._loading=true;_context3.next=9;return regenerator_default.a.awrap(getNativeSourceAndFullInitialStatusForLoadAsync(source,initialStatus,downloadFirst));case 9:_await$getNativeSourc=_context3.sent;nativeSource=_await$getNativeSourc.nativeSource;fullInitialStatus=_await$getNativeSourc.fullInitialStatus;return _context3.abrupt("return",new Promise(function(resolve,reject){var loadSuccess=function loadSuccess(result){var _result=slicedToArray_default()(result,2),key=_result[0],status=_result[1];_this2._key=key;_this2._loaded=true;_this2._loading=false;_this2._subscribeToNativeEvents();_this2._callOnPlaybackStatusUpdateForNewStatus(status);resolve(status);};var loadError=function loadError(error){_this2._loading=false;reject(error);};ExponentAV_web.loadForSound(nativeSource,fullInitialStatus).then(loadSuccess).catch(loadError);}));case 15:throw new Error('The Sound is already loaded.');case 16:case"end":return _context3.stop();}}},null,this,null,Promise);}},{key:"unloadAsync",value:function unloadAsync(){var key,status;return regenerator_default.a.async(function unloadAsync$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:if(!this._loaded){_context4.next=12;break;}this._loaded=false;key=this._key;this._key=null;_context4.next=6;return regenerator_default.a.awrap(ExponentAV_web.unloadForSound(key));case 6:status=_context4.sent;this._callOnPlaybackStatusUpdateForNewStatus(status);this._clearSubscriptions();return _context4.abrupt("return",status);case 12:return _context4.abrupt("return",this.getStatusAsync());case 13:case"end":return _context4.stop();}}},null,this,null,Promise);}},{key:"setStatusAsync",value:function setStatusAsync(status){var _this3=this;return regenerator_default.a.async(function setStatusAsync$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:assertStatusValuesInBounds(status);return _context5.abrupt("return",this._performOperationAndHandleStatusAsync(function(){return ExponentAV_web.setStatusForSound(_this3._key,status);}));case 2:case"end":return _context5.stop();}}},null,this,null,Promise);}},{key:"replayAsync",value:function replayAsync(){var _this4=this;var status,_args6=arguments;return regenerator_default.a.async(function replayAsync$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:status=_args6.length>0&&_args6[0]!==undefined?_args6[0]:{};if(!(status.positionMillis&&status.positionMillis!==0)){_context6.next=3;break;}throw new Error('Requested position after replay has to be 0.');case 3:return _context6.abrupt("return",this._performOperationAndHandleStatusAsync(function(){return ExponentAV_web.replaySound(_this4._key,Sound_objectSpread(Sound_objectSpread({},status),{},{positionMillis:0,shouldPlay:true}));}));case 4:case"end":return _context6.stop();}}},null,this,null,Promise);}}]);return Sound;}();Sound_Sound.create=function _callee2(source){var initialStatus,onPlaybackStatusUpdate,downloadFirst,_args7=arguments;return regenerator_default.a.async(function _callee2$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:initialStatus=_args7.length>1&&_args7[1]!==undefined?_args7[1]:{};onPlaybackStatusUpdate=_args7.length>2&&_args7[2]!==undefined?_args7[2]:null;downloadFirst=_args7.length>3&&_args7[3]!==undefined?_args7[3]:true;console.warn("Sound.create is deprecated in favor of Sound.createAsync with the same API except for the new method name");return _context7.abrupt("return",Sound_Sound.createAsync(source,initialStatus,onPlaybackStatusUpdate,downloadFirst));case 5:case"end":return _context7.stop();}}},null,null,null,Promise);};Sound_Sound.createAsync=function _callee3(source){var initialStatus,onPlaybackStatusUpdate,downloadFirst,sound,status,_args8=arguments;return regenerator_default.a.async(function _callee3$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:initialStatus=_args8.length>1&&_args8[1]!==undefined?_args8[1]:{};onPlaybackStatusUpdate=_args8.length>2&&_args8[2]!==undefined?_args8[2]:null;downloadFirst=_args8.length>3&&_args8[3]!==undefined?_args8[3]:true;sound=new Sound_Sound();sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);_context8.next=7;return regenerator_default.a.awrap(sound.loadAsync(source,initialStatus,downloadFirst));case 7:status=_context8.sent;return _context8.abrupt("return",{sound:sound,status:status});case 9:case"end":return _context8.stop();}}},null,null,null,Promise);};Object.assign(Sound_Sound.prototype,PlaybackMixin);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-av/build/Audio/Recording.js
function Recording_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function Recording_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){Recording_ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{Recording_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT=0;var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP=1;var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4=2;var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_NB=3;var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB=4;var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADIF=5;var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AAC_ADTS=6;var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_RTP_AVP=7;var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG2TS=8;var RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_WEBM=9;var RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT=0;var RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB=1;var RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB=2;var RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC=3;var RECORDING_OPTION_ANDROID_AUDIO_ENCODER_HE_AAC=4;var RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC_ELD=5;var RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM='lpcm';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_AC3='ac-3';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_60958AC3='cac3';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLEIMA4='ima4';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC='aac ';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4CELP='celp';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4HVXC='hvxc';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4TWINVQ='twvq';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE3='MAC3';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MACE6='MAC6';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_ULAW='ulaw';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_ALAW='alaw';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN='QDMC';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_QDESIGN2='QDM2';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_QUALCOMM='Qclp';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER1='.mp1';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER2='.mp2';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEGLAYER3='.mp3';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_APPLELOSSLESS='alac';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE='aach';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_LD='aacl';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD='aace';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_SBR='aacf';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_ELD_V2='aacg';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_HE_V2='aacp';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC_SPATIAL='aacs';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR='samr';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_AMR_WB='sawb';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_AUDIBLE='AUDB';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_ILBC='ilbc';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_DVIINTELIMA=0x6d730011;var RECORDING_OPTION_IOS_OUTPUT_FORMAT_MICROSOFTGSM=0x6d730031;var RECORDING_OPTION_IOS_OUTPUT_FORMAT_AES3='aes3';var RECORDING_OPTION_IOS_OUTPUT_FORMAT_ENHANCEDAC3='ec-3';var RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN=0;var RECORDING_OPTION_IOS_AUDIO_QUALITY_LOW=0x20;var RECORDING_OPTION_IOS_AUDIO_QUALITY_MEDIUM=0x40;var RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH=0x60;var RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX=0x7f;var RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_CONSTANT=0;var RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_LONG_TERM_AVERAGE=1;var RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE_CONSTRAINED=2;var RECORDING_OPTION_IOS_BIT_RATE_STRATEGY_VARIABLE=3;var RECORDING_OPTIONS_PRESET_HIGH_QUALITY={isMeteringEnabled:true,android:{extension:'.m4a',outputFormat:RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,audioEncoder:RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,sampleRate:44100,numberOfChannels:2,bitRate:128000},ios:{extension:'.caf',audioQuality:RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,sampleRate:44100,numberOfChannels:2,bitRate:128000,linearPCMBitDepth:16,linearPCMIsBigEndian:false,linearPCMIsFloat:false}};var RECORDING_OPTIONS_PRESET_LOW_QUALITY={isMeteringEnabled:true,android:{extension:'.3gp',outputFormat:RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP,audioEncoder:RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB,sampleRate:44100,numberOfChannels:2,bitRate:128000},ios:{extension:'.caf',audioQuality:RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,sampleRate:44100,numberOfChannels:2,bitRate:128000,linearPCMBitDepth:16,linearPCMIsBigEndian:false,linearPCMIsFloat:false}};var _recorderExists=false;var eventEmitter=Platform["a" /* default */].OS==='android'?new EventEmitter_EventEmitter(ExponentAV_web):null;function getPermissionsAsync(){return regenerator_default.a.async(function getPermissionsAsync$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",ExponentAV_web.getPermissionsAsync());case 1:case"end":return _context.stop();}}},null,null,null,Promise);}function requestPermissionsAsync(){return regenerator_default.a.async(function requestPermissionsAsync$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",ExponentAV_web.requestPermissionsAsync());case 1:case"end":return _context2.stop();}}},null,null,null,Promise);}var Recording_Recording=function(){function Recording(){var _this=this;classCallCheck_default()(this,Recording);this._subscription=null;this._canRecord=false;this._isDoneRecording=false;this._finalDurationMillis=0;this._uri=null;this._onRecordingStatusUpdate=null;this._progressUpdateTimeoutVariable=null;this._progressUpdateIntervalMillis=_DEFAULT_PROGRESS_UPDATE_INTERVAL_MILLIS;this._options=null;this._cleanupForUnloadedRecorder=function _callee(finalStatus){var _finalStatus$duration;return regenerator_default.a.async(function _callee$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_this._canRecord=false;_this._isDoneRecording=true;_this._finalDurationMillis=(_finalStatus$duration=finalStatus==null?void 0:finalStatus.durationMillis)!=null?_finalStatus$duration:0;_recorderExists=false;if(_this._subscription){_this._subscription.remove();_this._subscription=null;}_this._disablePolling();_context3.next=8;return regenerator_default.a.awrap(_this.getStatusAsync());case 8:return _context3.abrupt("return",_context3.sent);case 9:case"end":return _context3.stop();}}},null,null,null,Promise);};this._pollingLoop=function _callee2(){return regenerator_default.a.async(function _callee2$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:if(!(isAudioEnabled()&&_this._canRecord&&_this._onRecordingStatusUpdate!=null)){_context4.next=10;break;}_this._progressUpdateTimeoutVariable=setTimeout(_this._pollingLoop,_this._progressUpdateIntervalMillis);_context4.prev=2;_context4.next=5;return regenerator_default.a.awrap(_this.getStatusAsync());case 5:_context4.next=10;break;case 7:_context4.prev=7;_context4.t0=_context4["catch"](2);_this._disablePolling();case 10:case"end":return _context4.stop();}}},null,null,[[2,7]],Promise);};this.getStatusAsync=function _callee3(){var status;return regenerator_default.a.async(function _callee3$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:if(!_this._canRecord){_context5.next=2;break;}return _context5.abrupt("return",_this._performOperationAndHandleStatusAsync(function(){return ExponentAV_web.getAudioRecordingStatus();}));case 2:status={canRecord:false,isRecording:false,isDoneRecording:_this._isDoneRecording,durationMillis:_this._finalDurationMillis};_this._callOnRecordingStatusUpdateForNewStatus(status);return _context5.abrupt("return",status);case 5:case"end":return _context5.stop();}}},null,null,null,Promise);};}createClass_default()(Recording,[{key:"_disablePolling",value:function _disablePolling(){if(this._progressUpdateTimeoutVariable!=null){clearTimeout(this._progressUpdateTimeoutVariable);this._progressUpdateTimeoutVariable=null;}}},{key:"_enablePollingIfNecessaryAndPossible",value:function _enablePollingIfNecessaryAndPossible(){if(isAudioEnabled()&&this._canRecord&&this._onRecordingStatusUpdate!=null){this._disablePolling();this._pollingLoop();}}},{key:"_callOnRecordingStatusUpdateForNewStatus",value:function _callOnRecordingStatusUpdateForNewStatus(status){if(this._onRecordingStatusUpdate!=null){this._onRecordingStatusUpdate(status);}}},{key:"_performOperationAndHandleStatusAsync",value:function _performOperationAndHandleStatusAsync(operation){var status;return regenerator_default.a.async(function _performOperationAndHandleStatusAsync$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:throwIfAudioIsDisabled();if(!this._canRecord){_context6.next=9;break;}_context6.next=4;return regenerator_default.a.awrap(operation());case 4:status=_context6.sent;this._callOnRecordingStatusUpdateForNewStatus(status);return _context6.abrupt("return",status);case 9:throw new Error('Cannot complete operation because this recorder is not ready to record.');case 10:case"end":return _context6.stop();}}},null,this,null,Promise);}},{key:"setOnRecordingStatusUpdate",value:function setOnRecordingStatusUpdate(onRecordingStatusUpdate){this._onRecordingStatusUpdate=onRecordingStatusUpdate;if(onRecordingStatusUpdate==null){this._disablePolling();}else{this._enablePollingIfNecessaryAndPossible();}this.getStatusAsync();}},{key:"setProgressUpdateInterval",value:function setProgressUpdateInterval(progressUpdateIntervalMillis){this._progressUpdateIntervalMillis=progressUpdateIntervalMillis;this.getStatusAsync();}},{key:"prepareToRecordAsync",value:function prepareToRecordAsync(){var options,extensionRegex,_await$ExponentAV$pre,uri,status,currentStatus,_args7=arguments;return regenerator_default.a.async(function prepareToRecordAsync$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:options=_args7.length>0&&_args7[0]!==undefined?_args7[0]:RECORDING_OPTIONS_PRESET_LOW_QUALITY;throwIfAudioIsDisabled();if(!_recorderExists){_context7.next=4;break;}throw new Error('Only one Recording object can be prepared at a given time.');case 4:if(!this._isDoneRecording){_context7.next=6;break;}throw new Error('This Recording object is done recording; you must make a new one.');case 6:if(!(!options||!options.android||!options.ios)){_context7.next=8;break;}throw new Error('You must provide recording options for android and ios in order to prepare to record.');case 8:extensionRegex=/^\.\w+$/;if(!(!options.android.extension||!options.ios.extension||!extensionRegex.test(options.android.extension)||!extensionRegex.test(options.ios.extension))){_context7.next=11;break;}throw new Error("Your file extensions must match "+extensionRegex.toString()+".");case 11:if(this._canRecord){_context7.next=28;break;}if(eventEmitter){this._subscription=eventEmitter.addListener('Expo.Recording.recorderUnloaded',this._cleanupForUnloadedRecorder);}_context7.next=15;return regenerator_default.a.awrap(ExponentAV_web.prepareAudioRecorder(options));case 15:_await$ExponentAV$pre=_context7.sent;uri=_await$ExponentAV$pre.uri;status=_await$ExponentAV$pre.status;_recorderExists=true;this._uri=uri;this._options=options;this._canRecord=true;currentStatus=Recording_objectSpread(Recording_objectSpread({},status),{},{canRecord:true});this._callOnRecordingStatusUpdateForNewStatus(currentStatus);this._enablePollingIfNecessaryAndPossible();return _context7.abrupt("return",currentStatus);case 28:throw new Error('This Recording object is already prepared to record.');case 29:case"end":return _context7.stop();}}},null,this,null,Promise);}},{key:"startAsync",value:function startAsync(){return regenerator_default.a.async(function startAsync$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:return _context8.abrupt("return",this._performOperationAndHandleStatusAsync(function(){return ExponentAV_web.startAudioRecording();}));case 1:case"end":return _context8.stop();}}},null,this,null,Promise);}},{key:"pauseAsync",value:function pauseAsync(){return regenerator_default.a.async(function pauseAsync$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:return _context9.abrupt("return",this._performOperationAndHandleStatusAsync(function(){return ExponentAV_web.pauseAudioRecording();}));case 1:case"end":return _context9.stop();}}},null,this,null,Promise);}},{key:"stopAndUnloadAsync",value:function stopAndUnloadAsync(){var stopResult,stopError,status;return regenerator_default.a.async(function stopAndUnloadAsync$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:if(this._canRecord){_context10.next=6;break;}if(!this._isDoneRecording){_context10.next=5;break;}throw new Error('Cannot unload a Recording that has already been unloaded.');case 5:throw new Error('Cannot unload a Recording that has not been prepared.');case 6:_context10.prev=6;_context10.next=9;return regenerator_default.a.awrap(ExponentAV_web.stopAudioRecording());case 9:stopResult=_context10.sent;_context10.next=15;break;case 12:_context10.prev=12;_context10.t0=_context10["catch"](6);stopError=_context10.t0;case 15:_context10.next=17;return regenerator_default.a.awrap(ExponentAV_web.unloadAudioRecorder());case 17:_context10.next=19;return regenerator_default.a.awrap(this._cleanupForUnloadedRecorder(stopResult));case 19:status=_context10.sent;return _context10.abrupt("return",stopError?Promise.reject(stopError):status);case 21:case"end":return _context10.stop();}}},null,this,[[6,12]],Promise);}},{key:"getURI",value:function getURI(){return this._uri;}},{key:"createNewLoadedSound",value:function createNewLoadedSound(){var initialStatus,onPlaybackStatusUpdate,_args11=arguments;return regenerator_default.a.async(function createNewLoadedSound$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:initialStatus=_args11.length>0&&_args11[0]!==undefined?_args11[0]:{};onPlaybackStatusUpdate=_args11.length>1&&_args11[1]!==undefined?_args11[1]:null;console.warn("createNewLoadedSound is deprecated in favor of createNewLoadedSoundAsync, which has the same API aside from the method name");return _context11.abrupt("return",this.createNewLoadedSoundAsync(initialStatus,onPlaybackStatusUpdate));case 4:case"end":return _context11.stop();}}},null,this,null,Promise);}},{key:"createNewLoadedSoundAsync",value:function createNewLoadedSoundAsync(){var initialStatus,onPlaybackStatusUpdate,_args12=arguments;return regenerator_default.a.async(function createNewLoadedSoundAsync$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:initialStatus=_args12.length>0&&_args12[0]!==undefined?_args12[0]:{};onPlaybackStatusUpdate=_args12.length>1&&_args12[1]!==undefined?_args12[1]:null;if(!(this._uri==null||!this._isDoneRecording)){_context12.next=4;break;}throw new Error('Cannot create sound when the Recording has not finished!');case 4:return _context12.abrupt("return",Sound_Sound.createAsync({uri:this._uri},initialStatus,onPlaybackStatusUpdate,false));case 5:case"end":return _context12.stop();}}},null,this,null,Promise);}}]);return Recording;}();
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-av/build/Audio.js
var INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS=0;var INTERRUPTION_MODE_IOS_DO_NOT_MIX=1;var INTERRUPTION_MODE_IOS_DUCK_OTHERS=2;var INTERRUPTION_MODE_ANDROID_DO_NOT_MIX=1;var INTERRUPTION_MODE_ANDROID_DUCK_OTHERS=2;var _isValueValid=function _isValueValid(value,validValues){return validValues.filter(function(validValue){return validValue===value;}).length>0;};var _populateMissingKeys=function _populateMissingKeys(userAudioMode,defaultAudioMode){for(var key in defaultAudioMode){if(!userAudioMode.hasOwnProperty(key)){userAudioMode[key]=defaultAudioMode[key];}}return userAudioMode;};var defaultMode={allowsRecordingIOS:false,interruptionModeIOS:INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,playsInSilentModeIOS:false,staysActiveInBackground:false,interruptionModeAndroid:INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,shouldDuckAndroid:true,playThroughEarpieceAndroid:false};var currentAudioMode=null;function getCurrentAudioMode(){if(!currentAudioMode){return defaultMode;}return currentAudioMode;}function setAudioModeAsync(partialMode){var mode;return regenerator_default.a.async(function setAudioModeAsync$(_context){while(1){switch(_context.prev=_context.next){case 0:mode=_populateMissingKeys(partialMode,getCurrentAudioMode());if(_isValueValid(mode.interruptionModeIOS,[INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,INTERRUPTION_MODE_IOS_DO_NOT_MIX,INTERRUPTION_MODE_IOS_DUCK_OTHERS])){_context.next=3;break;}throw new Error("\"interruptionModeIOS\" was set to an invalid value.");case 3:if(_isValueValid(mode.interruptionModeAndroid,[INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,INTERRUPTION_MODE_ANDROID_DUCK_OTHERS])){_context.next=5;break;}throw new Error("\"interruptionModeAndroid\" was set to an invalid value.");case 5:if(!(typeof mode.allowsRecordingIOS!=='boolean'||typeof mode.playsInSilentModeIOS!=='boolean'||typeof mode.staysActiveInBackground!=='boolean'||typeof mode.shouldDuckAndroid!=='boolean'||typeof mode.playThroughEarpieceAndroid!=='boolean')){_context.next=7;break;}throw new Error('"allowsRecordingIOS", "playsInSilentModeIOS", "playThroughEarpieceAndroid", "staysActiveInBackground" and "shouldDuckAndroid" must be booleans.');case 7:currentAudioMode=mode;_context.next=10;return regenerator_default.a.awrap(ExponentAV_web.setAudioMode(mode));case 10:return _context.abrupt("return",_context.sent);case 11:case"end":return _context.stop();}}},null,null,null,Promise);}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-av/build/index.js


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _UIManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
var NativeModules={UIManager:_UIManager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]};/* harmony default export */ __webpack_exports__["a"] = (NativeModules);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AnimatedValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _AnimatedWithChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var _uniqueId=1;var AnimatedValueXY=function(_AnimatedWithChildren){_inheritsLoose(AnimatedValueXY,_AnimatedWithChildren);function AnimatedValueXY(valueIn){var _this;_this=_AnimatedWithChildren.call(this)||this;var value=valueIn||{x:0,y:0};if(typeof value.x==='number'&&typeof value.y==='number'){_this.x=new _AnimatedValue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](value.x);_this.y=new _AnimatedValue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](value.y);}else{fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(value.x instanceof _AnimatedValue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]&&value.y instanceof _AnimatedValue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],'AnimatedValueXY must be initialized with an object of numbers or '+'AnimatedValues.');_this.x=value.x;_this.y=value.y;}_this._listeners={};return _this;}var _proto=AnimatedValueXY.prototype;_proto.setValue=function setValue(value){this.x.setValue(value.x);this.y.setValue(value.y);};_proto.setOffset=function setOffset(offset){this.x.setOffset(offset.x);this.y.setOffset(offset.y);};_proto.flattenOffset=function flattenOffset(){this.x.flattenOffset();this.y.flattenOffset();};_proto.extractOffset=function extractOffset(){this.x.extractOffset();this.y.extractOffset();};_proto.__getValue=function __getValue(){return{x:this.x.__getValue(),y:this.y.__getValue()};};_proto.resetAnimation=function resetAnimation(callback){this.x.resetAnimation();this.y.resetAnimation();callback&&callback(this.__getValue());};_proto.stopAnimation=function stopAnimation(callback){this.x.stopAnimation();this.y.stopAnimation();callback&&callback(this.__getValue());};_proto.addListener=function addListener(callback){var _this2=this;var id=String(_uniqueId++);var jointCallback=function jointCallback(_ref){var number=_ref.value;callback(_this2.__getValue());};this._listeners[id]={x:this.x.addListener(jointCallback),y:this.y.addListener(jointCallback)};return id;};_proto.removeListener=function removeListener(id){this.x.removeListener(this._listeners[id].x);this.y.removeListener(this._listeners[id].y);delete this._listeners[id];};_proto.removeAllListeners=function removeAllListeners(){this.x.removeAllListeners();this.y.removeAllListeners();this._listeners={};};_proto.getLayout=function getLayout(){return{left:this.x,top:this.y};};_proto.getTranslateTransform=function getTranslateTransform(){return[{translateX:this.x},{translateY:this.y}];};return AnimatedValueXY;}(_AnimatedWithChildren__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);/* harmony default export */ __webpack_exports__["a"] = (AnimatedValueXY);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var unitlessNumbers={animationIterationCount:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,flex:true,flexGrow:true,flexOrder:true,flexPositive:true,flexShrink:true,flexNegative:true,fontWeight:true,gridRow:true,gridColumn:true,lineClamp:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true,scale:true,scaleX:true,scaleY:true,scaleZ:true,shadowOpacity:true};var prefixes=['ms','Moz','O','Webkit'];var prefixKey=function prefixKey(prefix,key){return prefix+key.charAt(0).toUpperCase()+key.substring(1);};Object.keys(unitlessNumbers).forEach(function(prop){prefixes.forEach(function(prefix){unitlessNumbers[prefixKey(prefix,prop)]=unitlessNumbers[prop];});});/* harmony default export */ __webpack_exports__["a"] = (unitlessNumbers);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__);
function getStyle(style){if(typeof style==='number'){return _ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getByID(style);}return style;}function flattenStyle(style){if(!style){return undefined;}if(false){}if(!Array.isArray(style)){return getStyle(style);}var result={};for(var i=0,styleLength=style.length;i<styleLength;++i){var computedStyle=flattenStyle(style[i]);if(computedStyle){for(var key in computedStyle){var value=computedStyle[key];result[key]=value;}}}return result;}/* harmony default export */ __webpack_exports__["a"] = (flattenStyle);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactNativePropRegistry; });
var emptyObject={};var objects={};var prefix='r';var uniqueID=1;var createKey=function createKey(id){return prefix+"-"+id;};var ReactNativePropRegistry=function(){function ReactNativePropRegistry(){}ReactNativePropRegistry.register=function register(object){var id=uniqueID++;if(false){}var key=createKey(id);objects[key]=object;return id;};ReactNativePropRegistry.getByID=function getByID(id){if(!id){return emptyObject;}var key=createKey(id);var object=objects[key];if(!object){console.warn('Invalid style with id `'+id+'`. Skipping ...');return emptyObject;}return object;};return ReactNativePropRegistry;}();

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _bezier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(127);
/* harmony import */ var _bezier__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bezier__WEBPACK_IMPORTED_MODULE_0__);
var _ease;var Easing=function(){function Easing(){}Easing.step0=function step0(n){return n>0?1:0;};Easing.step1=function step1(n){return n>=1?1:0;};Easing.linear=function linear(t){return t;};Easing.ease=function ease(t){if(!_ease){_ease=Easing.bezier(0.42,0,1,1);}return _ease(t);};Easing.quad=function quad(t){return t*t;};Easing.cubic=function cubic(t){return t*t*t;};Easing.poly=function poly(n){return function(t){return Math.pow(t,n);};};Easing.sin=function sin(t){return 1-Math.cos(t*Math.PI/2);};Easing.circle=function circle(t){return 1-Math.sqrt(1-t*t);};Easing.exp=function exp(t){return Math.pow(2,10*(t-1));};Easing.elastic=function elastic(bounciness){if(bounciness===void 0){bounciness=1;}var p=bounciness*Math.PI;return function(t){return 1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*p);};};Easing.back=function back(s){if(s===void 0){s=1.70158;}return function(t){return t*t*((s+1)*t-s);};};Easing.bounce=function bounce(t){if(t<1/2.75){return 7.5625*t*t;}if(t<2/2.75){var _t=t-1.5/2.75;return 7.5625*_t*_t+0.75;}if(t<2.5/2.75){var _t2=t-2.25/2.75;return 7.5625*_t2*_t2+0.9375;}var t2=t-2.625/2.75;return 7.5625*t2*t2+0.984375;};Easing.bezier=function bezier(x1,y1,x2,y2){return _bezier__WEBPACK_IMPORTED_MODULE_0___default()(x1,y1,x2,y2);};Easing.in=function _in(easing){return easing;};Easing.out=function out(easing){return function(t){return 1-easing(1-t);};};Easing.inOut=function inOut(easing){return function(t){if(t<0.5){return easing(t*2)/2;}return 1-easing((1-t)*2)/2;};};return Easing;}();/* harmony default export */ __webpack_exports__["a"] = (Easing);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var useLayoutEffectImpl=fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]?react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"]:react__WEBPACK_IMPORTED_MODULE_1__["useEffect"];/* harmony default export */ __webpack_exports__["a"] = (useLayoutEffectImpl);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AssetSourceResolver_web_AssetSourceResolver; });

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(10);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(16);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@unimodules/react-native-adapter/build/Platform.js + 1 modules
var Platform = __webpack_require__(133);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(26);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(29);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(20);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(132);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/@unimodules/react-native-adapter/build/errors/CodedError.js
function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=getPrototypeOf_default()(Derived),result;if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return possibleConstructorReturn_default()(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var CodedError_CodedError=function(_Error){inherits_default()(CodedError,_Error);var _super=_createSuper(CodedError);function CodedError(code,message){var _this;classCallCheck_default()(this,CodedError);_this=_super.call(this,message);_this.code=code;return _this;}return CodedError;}(wrapNativeSuper_default()(Error));
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/@unimodules/react-native-adapter/build/errors/UnavailabilityError.js
function UnavailabilityError_createSuper(Derived){var hasNativeReflectConstruct=UnavailabilityError_isNativeReflectConstruct();return function _createSuperInternal(){var Super=getPrototypeOf_default()(Derived),result;if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return possibleConstructorReturn_default()(this,result);};}function UnavailabilityError_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var UnavailabilityError_UnavailabilityError=function(_CodedError){inherits_default()(UnavailabilityError,_CodedError);var _super=UnavailabilityError_createSuper(UnavailabilityError);function UnavailabilityError(moduleName,propertyName){classCallCheck_default()(this,UnavailabilityError);return _super.call(this,'ERR_UNAVAILABLE',"The method or property "+moduleName+"."+propertyName+" is not available on "+Platform["a" /* default */].OS+", are you sure you've linked all the native dependencies properly?");}return UnavailabilityError;}(CodedError_CodedError);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/invariant/browser.js
var browser = __webpack_require__(89);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Dimensions/index.js
var Dimensions = __webpack_require__(17);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-asset/build/AssetSourceResolver.web.js
function getBasePath(_ref){var httpServerLocation=_ref.httpServerLocation;if(httpServerLocation[0]==='/'){return httpServerLocation.substr(1);}return httpServerLocation;}function getScale(){return Dimensions["a" /* default */].get('window').scale;}function getScaledAssetPath(asset){var scale=AssetSourceResolver_web_AssetSourceResolver.pickScale(asset.scales,getScale());var scaleSuffix=scale===1?'':'@'+scale+'x';var assetDir=getBasePath(asset);return assetDir+'/'+asset.name+scaleSuffix+'.'+asset.type;}var AssetSourceResolver_web_AssetSourceResolver=function(){function AssetSourceResolver(serverUrl,jsbundleUrl,asset){classCallCheck_default()(this,AssetSourceResolver);this.serverUrl=serverUrl;this.jsbundleUrl=jsbundleUrl;this.asset=asset;}createClass_default()(AssetSourceResolver,[{key:"isLoadedFromServer",value:function isLoadedFromServer(){return!!this.serverUrl;}},{key:"isLoadedFromFileSystem",value:function isLoadedFromFileSystem(){return!!(this.jsbundleUrl&&this.jsbundleUrl.startsWith('file://'));}},{key:"defaultAsset",value:function defaultAsset(){if(this.isLoadedFromServer()){return this.assetServerURL();}return this.scaledAssetURLNearBundle();}},{key:"assetServerURL",value:function assetServerURL(){browser_default()(!!this.serverUrl,'need server to load from');return this.fromSource(this.serverUrl+getScaledAssetPath(this.asset)+'?platform='+Platform["a" /* default */].OS+'&hash='+this.asset.hash);}},{key:"scaledAssetPath",value:function scaledAssetPath(){return this.fromSource(getScaledAssetPath(this.asset));}},{key:"scaledAssetURLNearBundle",value:function scaledAssetURLNearBundle(){var path=this.jsbundleUrl||'file://';return this.fromSource(path+getScaledAssetPath(this.asset));}},{key:"resourceIdentifierWithoutScale",value:function resourceIdentifierWithoutScale(){throw new UnavailabilityError_UnavailabilityError('react-native','resourceIdentifierWithoutScale()');}},{key:"drawableFolderInBundle",value:function drawableFolderInBundle(){throw new UnavailabilityError_UnavailabilityError('react-native','drawableFolderInBundle()');}},{key:"fromSource",value:function fromSource(source){return{__packager_asset:true,width:this.asset.width,height:this.asset.height,uri:source,scale:AssetSourceResolver.pickScale(this.asset.scales,getScale())};}}],[{key:"pickScale",value:function pickScale(scales,deviceScale){for(var i=0;i<scales.length;i++){if(scales[i]>=deviceScale){return scales[i];}}return scales[scales.length-1]||1;}}]);return AssetSourceResolver;}();

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireWildcard=__webpack_require__(109);Object.defineProperty(exports,"__esModule",{value:true});var _exportNames={};Object.defineProperty(exports,"default",{enumerable:true,get:function get(){return _ReactNativeSVG.default;}});var _ReactNativeSVG=_interopRequireWildcard(__webpack_require__(263));Object.keys(_ReactNativeSVG).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _ReactNativeSVG[key];}});});

/***/ }),
/* 70 */
/***/ (function(module, exports) {

var g;g=function(){return this;}();try{g=g||new Function("return this")();}catch(e){if(typeof window==="object")g=window;}module.exports=g;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css_color__WEBPACK_IMPORTED_MODULE_0__);
var processColor=function processColor(color){if(color===undefined||color===null){return color;}var int32Color=normalize_css_color__WEBPACK_IMPORTED_MODULE_0___default()(color);if(int32Color===undefined||int32Color===null){return undefined;}int32Color=(int32Color<<24|int32Color>>>8)>>>0;return int32Color;};/* harmony default export */ __webpack_exports__["a"] = (processColor);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ __webpack_exports__["a"] = (react_dom__WEBPACK_IMPORTED_MODULE_0__["render"]);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ __webpack_exports__["a"] = (react_dom__WEBPACK_IMPORTED_MODULE_0__["unmountComponentAtNode"]);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function RefreshControl(props){var colors=props.colors,enabled=props.enabled,onRefresh=props.onRefresh,progressBackgroundColor=props.progressBackgroundColor,progressViewOffset=props.progressViewOffset,refreshing=props.refreshing,size=props.size,tintColor=props.tintColor,title=props.title,titleColor=props.titleColor,rest=_objectWithoutPropertiesLoose(props,["colors","enabled","onRefresh","progressBackgroundColor","progressViewOffset","refreshing","size","tintColor","title","titleColor"]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_View__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],rest);}/* harmony default export */ __webpack_exports__["a"] = (RefreshControl);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vendor_react_native_NativeEventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony default export */ __webpack_exports__["a"] = (_vendor_react_native_NativeEventEmitter__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _hooks_usePressEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function createExtraStyles(activeOpacity,underlayColor){return{child:{opacity:activeOpacity!==null&&activeOpacity!==void 0?activeOpacity:0.85},underlay:{backgroundColor:underlayColor===undefined?'black':underlayColor}};}function hasPressHandler(props){return props.onPress!=null||props.onPressIn!=null||props.onPressOut!=null||props.onLongPress!=null;}function TouchableHighlight(props,forwardedRef){var accessible=props.accessible,activeOpacity=props.activeOpacity,children=props.children,delayPressIn=props.delayPressIn,delayPressOut=props.delayPressOut,delayLongPress=props.delayLongPress,disabled=props.disabled,focusable=props.focusable,onHideUnderlay=props.onHideUnderlay,onLongPress=props.onLongPress,onPress=props.onPress,onPressIn=props.onPressIn,onPressOut=props.onPressOut,onShowUnderlay=props.onShowUnderlay,rejectResponderTermination=props.rejectResponderTermination,style=props.style,testOnly_pressed=props.testOnly_pressed,underlayColor=props.underlayColor,rest=_objectWithoutPropertiesLoose(props,["accessible","activeOpacity","children","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onHideUnderlay","onLongPress","onPress","onPressIn","onPressOut","onShowUnderlay","rejectResponderTermination","style","testOnly_pressed","underlayColor"]);var hostRef=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);var setRef=Object(_modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(forwardedRef,hostRef);var _useState=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(testOnly_pressed===true?createExtraStyles(activeOpacity,underlayColor):null),extraStyles=_useState[0],setExtraStyles=_useState[1];var showUnderlay=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function(){if(!hasPressHandler(props)){return;}setExtraStyles(createExtraStyles(activeOpacity,underlayColor));if(onShowUnderlay!=null){onShowUnderlay();}},[activeOpacity,onShowUnderlay,props,underlayColor]);var hideUnderlay=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function(){if(testOnly_pressed===true){return;}if(hasPressHandler(props)){setExtraStyles(null);if(onHideUnderlay!=null){onHideUnderlay();}}},[onHideUnderlay,props,testOnly_pressed]);var pressConfig=Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function(){return{cancelable:!rejectResponderTermination,disabled:disabled,delayLongPress:delayLongPress,delayPressStart:delayPressIn,delayPressEnd:delayPressOut,onLongPress:onLongPress,onPress:onPress,onPressStart:function onPressStart(event){showUnderlay();if(onPressIn!=null){onPressIn(event);}},onPressEnd:function onPressEnd(event){hideUnderlay();if(onPressOut!=null){onPressOut(event);}}};},[delayLongPress,delayPressIn,delayPressOut,disabled,onLongPress,onPress,onPressIn,onPressOut,rejectResponderTermination,showUnderlay,hideUnderlay]);var pressEventHandlers=Object(_hooks_usePressEvents__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(hostRef,pressConfig);var child=react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children);return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],_extends({},rest,pressEventHandlers,{accessibilityState:_objectSpread({disabled:disabled},props.accessibilityState),accessible:accessible!==false,focusable:focusable!==false&&onPress!==undefined,ref:setRef,style:[styles.root,style,!disabled&&styles.actionable,extraStyles&&extraStyles.underlay]}),react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](child,{style:_StyleSheet__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].compose(child.props.style,extraStyles&&extraStyles.child)}));}var styles=_StyleSheet__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].create({root:{userSelect:'none'},actionable:{cursor:'pointer',touchAction:'manipulation'}});var MemoedTouchableHighlight=react__WEBPACK_IMPORTED_MODULE_0__["memo"](react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](TouchableHighlight));MemoedTouchableHighlight.displayName='TouchableHighlight';/* harmony default export */ __webpack_exports__["a"] = (MemoedTouchableHighlight);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vendor_react_native_NativeEventEmitter_RCTDeviceEventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony default export */ __webpack_exports__["a"] = (_vendor_react_native_NativeEventEmitter_RCTDeviceEventEmitter__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/InteractionManager/index.js + 1 modules
var InteractionManager = __webpack_require__(32);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/TouchHistoryMath/index.js
var TouchHistoryMath={centroidDimension:function centroidDimension(touchHistory,touchesChangedAfter,isXAxis,ofCurrent){var touchBank=touchHistory.touchBank;var total=0;var count=0;var oneTouchData=touchHistory.numberActiveTouches===1?touchHistory.touchBank[touchHistory.indexOfSingleActiveTouch]:null;if(oneTouchData!==null){if(oneTouchData.touchActive&&oneTouchData.currentTimeStamp>touchesChangedAfter){total+=ofCurrent&&isXAxis?oneTouchData.currentPageX:ofCurrent&&!isXAxis?oneTouchData.currentPageY:!ofCurrent&&isXAxis?oneTouchData.previousPageX:oneTouchData.previousPageY;count=1;}}else{for(var i=0;i<touchBank.length;i++){var touchTrack=touchBank[i];if(touchTrack!==null&&touchTrack!==undefined&&touchTrack.touchActive&&touchTrack.currentTimeStamp>=touchesChangedAfter){var toAdd=void 0;if(ofCurrent&&isXAxis){toAdd=touchTrack.currentPageX;}else if(ofCurrent&&!isXAxis){toAdd=touchTrack.currentPageY;}else if(!ofCurrent&&isXAxis){toAdd=touchTrack.previousPageX;}else{toAdd=touchTrack.previousPageY;}total+=toAdd;count++;}}}return count>0?total/count:TouchHistoryMath.noCentroid;},currentCentroidXOfTouchesChangedAfter:function currentCentroidXOfTouchesChangedAfter(touchHistory,touchesChangedAfter){return TouchHistoryMath.centroidDimension(touchHistory,touchesChangedAfter,true,true);},currentCentroidYOfTouchesChangedAfter:function currentCentroidYOfTouchesChangedAfter(touchHistory,touchesChangedAfter){return TouchHistoryMath.centroidDimension(touchHistory,touchesChangedAfter,false,true);},previousCentroidXOfTouchesChangedAfter:function previousCentroidXOfTouchesChangedAfter(touchHistory,touchesChangedAfter){return TouchHistoryMath.centroidDimension(touchHistory,touchesChangedAfter,true,false);},previousCentroidYOfTouchesChangedAfter:function previousCentroidYOfTouchesChangedAfter(touchHistory,touchesChangedAfter){return TouchHistoryMath.centroidDimension(touchHistory,touchesChangedAfter,false,false);},currentCentroidX:function currentCentroidX(touchHistory){return TouchHistoryMath.centroidDimension(touchHistory,0,true,true);},currentCentroidY:function currentCentroidY(touchHistory){return TouchHistoryMath.centroidDimension(touchHistory,0,false,true);},noCentroid:-1};/* harmony default export */ var react_native_TouchHistoryMath = (TouchHistoryMath);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/PanResponder/index.js
var currentCentroidXOfTouchesChangedAfter=react_native_TouchHistoryMath.currentCentroidXOfTouchesChangedAfter;var currentCentroidYOfTouchesChangedAfter=react_native_TouchHistoryMath.currentCentroidYOfTouchesChangedAfter;var previousCentroidXOfTouchesChangedAfter=react_native_TouchHistoryMath.previousCentroidXOfTouchesChangedAfter;var previousCentroidYOfTouchesChangedAfter=react_native_TouchHistoryMath.previousCentroidYOfTouchesChangedAfter;var currentCentroidX=react_native_TouchHistoryMath.currentCentroidX;var currentCentroidY=react_native_TouchHistoryMath.currentCentroidY;var PanResponder={_initializeGestureState:function _initializeGestureState(gestureState){gestureState.moveX=0;gestureState.moveY=0;gestureState.x0=0;gestureState.y0=0;gestureState.dx=0;gestureState.dy=0;gestureState.vx=0;gestureState.vy=0;gestureState.numberActiveTouches=0;gestureState._accountsForMovesUpTo=0;},_updateGestureStateOnMove:function _updateGestureStateOnMove(gestureState,touchHistory){gestureState.numberActiveTouches=touchHistory.numberActiveTouches;gestureState.moveX=currentCentroidXOfTouchesChangedAfter(touchHistory,gestureState._accountsForMovesUpTo);gestureState.moveY=currentCentroidYOfTouchesChangedAfter(touchHistory,gestureState._accountsForMovesUpTo);var movedAfter=gestureState._accountsForMovesUpTo;var prevX=previousCentroidXOfTouchesChangedAfter(touchHistory,movedAfter);var x=currentCentroidXOfTouchesChangedAfter(touchHistory,movedAfter);var prevY=previousCentroidYOfTouchesChangedAfter(touchHistory,movedAfter);var y=currentCentroidYOfTouchesChangedAfter(touchHistory,movedAfter);var nextDX=gestureState.dx+(x-prevX);var nextDY=gestureState.dy+(y-prevY);var dt=touchHistory.mostRecentTimeStamp-gestureState._accountsForMovesUpTo;gestureState.vx=(nextDX-gestureState.dx)/dt;gestureState.vy=(nextDY-gestureState.dy)/dt;gestureState.dx=nextDX;gestureState.dy=nextDY;gestureState._accountsForMovesUpTo=touchHistory.mostRecentTimeStamp;},create:function create(config){var interactionState={handle:null};var gestureState={stateID:Math.random(),moveX:0,moveY:0,x0:0,y0:0,dx:0,dy:0,vx:0,vy:0,numberActiveTouches:0,_accountsForMovesUpTo:0};var panHandlers={onStartShouldSetResponder:function onStartShouldSetResponder(event){return config.onStartShouldSetPanResponder==null?false:config.onStartShouldSetPanResponder(event,gestureState);},onMoveShouldSetResponder:function onMoveShouldSetResponder(event){return config.onMoveShouldSetPanResponder==null?false:config.onMoveShouldSetPanResponder(event,gestureState);},onStartShouldSetResponderCapture:function onStartShouldSetResponderCapture(event){if(event.nativeEvent.touches.length===1){PanResponder._initializeGestureState(gestureState);}gestureState.numberActiveTouches=event.touchHistory.numberActiveTouches;return config.onStartShouldSetPanResponderCapture!=null?config.onStartShouldSetPanResponderCapture(event,gestureState):false;},onMoveShouldSetResponderCapture:function onMoveShouldSetResponderCapture(event){var touchHistory=event.touchHistory;if(gestureState._accountsForMovesUpTo===touchHistory.mostRecentTimeStamp){return false;}PanResponder._updateGestureStateOnMove(gestureState,touchHistory);return config.onMoveShouldSetPanResponderCapture?config.onMoveShouldSetPanResponderCapture(event,gestureState):false;},onResponderGrant:function onResponderGrant(event){if(!interactionState.handle){interactionState.handle=InteractionManager["a" /* default */].createInteractionHandle();}gestureState.x0=currentCentroidX(event.touchHistory);gestureState.y0=currentCentroidY(event.touchHistory);gestureState.dx=0;gestureState.dy=0;if(config.onPanResponderGrant){config.onPanResponderGrant(event,gestureState);}return config.onShouldBlockNativeResponder==null?true:config.onShouldBlockNativeResponder(event,gestureState);},onResponderReject:function onResponderReject(event){clearInteractionHandle(interactionState,config.onPanResponderReject,event,gestureState);},onResponderRelease:function onResponderRelease(event){clearInteractionHandle(interactionState,config.onPanResponderRelease,event,gestureState);PanResponder._initializeGestureState(gestureState);},onResponderStart:function onResponderStart(event){var touchHistory=event.touchHistory;gestureState.numberActiveTouches=touchHistory.numberActiveTouches;if(config.onPanResponderStart){config.onPanResponderStart(event,gestureState);}},onResponderMove:function onResponderMove(event){var touchHistory=event.touchHistory;if(gestureState._accountsForMovesUpTo===touchHistory.mostRecentTimeStamp){return;}PanResponder._updateGestureStateOnMove(gestureState,touchHistory);if(config.onPanResponderMove){config.onPanResponderMove(event,gestureState);}},onResponderEnd:function onResponderEnd(event){var touchHistory=event.touchHistory;gestureState.numberActiveTouches=touchHistory.numberActiveTouches;clearInteractionHandle(interactionState,config.onPanResponderEnd,event,gestureState);},onResponderTerminate:function onResponderTerminate(event){clearInteractionHandle(interactionState,config.onPanResponderTerminate,event,gestureState);PanResponder._initializeGestureState(gestureState);},onResponderTerminationRequest:function onResponderTerminationRequest(event){return config.onPanResponderTerminationRequest==null?true:config.onPanResponderTerminationRequest(event,gestureState);}};return{panHandlers:panHandlers,getInteractionHandle:function getInteractionHandle(){return interactionState.handle;}};}};function clearInteractionHandle(interactionState,callback,event,gestureState){if(interactionState.handle){InteractionManager["a" /* default */].clearInteractionHandle(interactionState.handle);interactionState.handle=null;}if(callback){callback(event,gestureState);}}/* harmony default export */ var react_native_PanResponder = (PanResponder);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/PanResponder/index.js
/* harmony default export */ var exports_PanResponder = __webpack_exports__["a"] = (react_native_PanResponder);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/deepDiffer/index.js
var deepDiffer=function deepDiffer(one,two,maxDepth){if(maxDepth===void 0){maxDepth=-1;}if(maxDepth===0){return true;}if(one===two){return false;}if(typeof one==='function'&&typeof two==='function'){return false;}if(typeof one!=='object'||one===null){return one!==two;}if(typeof two!=='object'||two===null){return true;}if(one.constructor!==two.constructor){return true;}if(Array.isArray(one)){var len=one.length;if(two.length!==len){return true;}for(var ii=0;ii<len;ii++){if(deepDiffer(one[ii],two[ii],maxDepth-1)){return true;}}}else{for(var key in one){if(deepDiffer(one[key],two[key],maxDepth-1)){return true;}}for(var twoKey in two){if(one[twoKey]===undefined&&two[twoKey]!==undefined){return true;}}}return false;};/* harmony default export */ var react_native_deepDiffer = (deepDiffer);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/index.js + 1 modules
var StyleSheet = __webpack_require__(4);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__(3);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/index.js + 5 modules
var VirtualizedList = __webpack_require__(41);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__(2);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/FlatList/index.js
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var defaultProps=_objectSpread({},VirtualizedList["a" /* default */].defaultProps,{numColumns:1,removeClippedSubviews:false});var FlatList_FlatList=function(_React$PureComponent){_inheritsLoose(FlatList,_React$PureComponent);var _proto=FlatList.prototype;_proto.scrollToEnd=function scrollToEnd(params){if(this._listRef){this._listRef.scrollToEnd(params);}};_proto.scrollToIndex=function scrollToIndex(params){if(this._listRef){this._listRef.scrollToIndex(params);}};_proto.scrollToItem=function scrollToItem(params){if(this._listRef){this._listRef.scrollToItem(params);}};_proto.scrollToOffset=function scrollToOffset(params){if(this._listRef){this._listRef.scrollToOffset(params);}};_proto.recordInteraction=function recordInteraction(){if(this._listRef){this._listRef.recordInteraction();}};_proto.flashScrollIndicators=function flashScrollIndicators(){if(this._listRef){this._listRef.flashScrollIndicators();}};_proto.getScrollResponder=function getScrollResponder(){if(this._listRef){return this._listRef.getScrollResponder();}};_proto.getNativeScrollRef=function getNativeScrollRef(){if(this._listRef){return this._listRef.getScrollRef();}};_proto.getScrollableNode=function getScrollableNode(){if(this._listRef){return this._listRef.getScrollableNode();}};_proto.setNativeProps=function setNativeProps(props){if(this._listRef){this._listRef.setNativeProps(props);}};function FlatList(props){var _this;_this=_React$PureComponent.call(this,props)||this;_this._virtualizedListPairs=[];_this._captureRef=function(ref){_this._listRef=ref;};_this._getItem=function(data,index){var numColumns=_this.props.numColumns;if(numColumns>1){var ret=[];for(var kk=0;kk<numColumns;kk++){var _item=data[index*numColumns+kk];if(_item!=null){ret.push(_item);}}return ret;}else{return data[index];}};_this._getItemCount=function(data){return data?Math.ceil(data.length/_this.props.numColumns):0;};_this._keyExtractor=function(items,index){var _this$props=_this.props,keyExtractor=_this$props.keyExtractor,numColumns=_this$props.numColumns;if(numColumns>1){invariant_default()(Array.isArray(items),'FlatList: Encountered internal consistency error, expected each item to consist of an '+'array with 1-%s columns; instead, received a single item.',numColumns);return items.map(function(it,kk){return keyExtractor(it,index*numColumns+kk);}).join(':');}else{return keyExtractor(items,index);}};_this._renderItem=function(info){var _this$props2=_this.props,renderItem=_this$props2.renderItem,numColumns=_this$props2.numColumns,columnWrapperStyle=_this$props2.columnWrapperStyle;if(numColumns>1){var _item2=info.item,_index=info.index;invariant_default()(Array.isArray(_item2),'Expected array of items with numColumns > 1');return react["createElement"](View["a" /* default */],{style:StyleSheet["a" /* default */].compose(styles.row,columnWrapperStyle)},_item2.map(function(it,kk){var element=renderItem({item:it,index:_index*numColumns+kk,separators:info.separators});return element!=null?react["createElement"](react["Fragment"],{key:kk},element):null;}));}else{return renderItem(info);}};_this._checkProps(_this.props);if(_this.props.viewabilityConfigCallbackPairs){_this._virtualizedListPairs=_this.props.viewabilityConfigCallbackPairs.map(function(pair){return{viewabilityConfig:pair.viewabilityConfig,onViewableItemsChanged:_this._createOnViewableItemsChanged(pair.onViewableItemsChanged)};});}else if(_this.props.onViewableItemsChanged){_this._virtualizedListPairs.push({viewabilityConfig:_this.props.viewabilityConfig,onViewableItemsChanged:_this._createOnViewableItemsChanged(_this.props.onViewableItemsChanged)});}return _this;}_proto.componentDidUpdate=function componentDidUpdate(prevProps){invariant_default()(prevProps.numColumns===this.props.numColumns,'Changing numColumns on the fly is not supported. Change the key prop on FlatList when '+'changing the number of columns to force a fresh render of the component.');invariant_default()(prevProps.onViewableItemsChanged===this.props.onViewableItemsChanged,'Changing onViewableItemsChanged on the fly is not supported');invariant_default()(!react_native_deepDiffer(prevProps.viewabilityConfig,this.props.viewabilityConfig),'Changing viewabilityConfig on the fly is not supported');invariant_default()(prevProps.viewabilityConfigCallbackPairs===this.props.viewabilityConfigCallbackPairs,'Changing viewabilityConfigCallbackPairs on the fly is not supported');this._checkProps(this.props);};_proto._checkProps=function _checkProps(props){var getItem=props.getItem,getItemCount=props.getItemCount,horizontal=props.horizontal,numColumns=props.numColumns,columnWrapperStyle=props.columnWrapperStyle,onViewableItemsChanged=props.onViewableItemsChanged,viewabilityConfigCallbackPairs=props.viewabilityConfigCallbackPairs;invariant_default()(!getItem&&!getItemCount,'FlatList does not support custom data formats.');if(numColumns>1){invariant_default()(!horizontal,'numColumns does not support horizontal.');}else{invariant_default()(!columnWrapperStyle,'columnWrapperStyle not supported for single column lists');}invariant_default()(!(onViewableItemsChanged&&viewabilityConfigCallbackPairs),'FlatList does not support setting both onViewableItemsChanged and '+'viewabilityConfigCallbackPairs.');};_proto._pushMultiColumnViewable=function _pushMultiColumnViewable(arr,v){var _this$props3=this.props,numColumns=_this$props3.numColumns,keyExtractor=_this$props3.keyExtractor;v.item.forEach(function(item,ii){invariant_default()(v.index!=null,'Missing index!');var index=v.index*numColumns+ii;arr.push(_objectSpread({},v,{item:item,key:keyExtractor(item,index),index:index}));});};_proto._createOnViewableItemsChanged=function _createOnViewableItemsChanged(onViewableItemsChanged){var _this2=this;return function(info){var numColumns=_this2.props.numColumns;if(onViewableItemsChanged){if(numColumns>1){var changed=[];var viewableItems=[];info.viewableItems.forEach(function(v){return _this2._pushMultiColumnViewable(viewableItems,v);});info.changed.forEach(function(v){return _this2._pushMultiColumnViewable(changed,v);});onViewableItemsChanged({viewableItems:viewableItems,changed:changed});}else{onViewableItemsChanged(info);}}};};_proto.render=function render(){return react["createElement"](VirtualizedList["a" /* default */],_extends({},this.props,{renderItem:this._renderItem,getItem:this._getItem,getItemCount:this._getItemCount,keyExtractor:this._keyExtractor,ref:this._captureRef,viewabilityConfigCallbackPairs:this._virtualizedListPairs}));};return FlatList;}(react["PureComponent"]);FlatList_FlatList.defaultProps=defaultProps;var styles=StyleSheet["a" /* default */].create({row:{flexDirection:'row'}});/* harmony default export */ var react_native_FlatList = (FlatList_FlatList);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/FlatList/index.js
/* harmony default export */ var exports_FlatList = __webpack_exports__["a"] = (react_native_FlatList);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Platform/index.js
var Platform = __webpack_require__(15);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__(3);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/index.js + 5 modules
var VirtualizedList = __webpack_require__(41);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__(2);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/VirtualizedSectionList/index.js
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var VirtualizedSectionList_VirtualizedSectionList=function(_React$PureComponent){_inheritsLoose(VirtualizedSectionList,_React$PureComponent);var _proto=VirtualizedSectionList.prototype;_proto.scrollToLocation=function scrollToLocation(params){var index=params.itemIndex;for(var i=0;i<params.sectionIndex;i++){index+=this.props.getItemCount(this.props.sections[i].data)+2;}var viewOffset=0;if(params.itemIndex>0&&this.props.stickySectionHeadersEnabled){var frame=this._listRef._getFrameMetricsApprox(index-params.itemIndex);viewOffset=frame.length;}var toIndexParams=_objectSpread({},params,{viewOffset:viewOffset,index:index});this._listRef.scrollToIndex(toIndexParams);};_proto.getListRef=function getListRef(){return this._listRef;};function VirtualizedSectionList(props,context){var _this;_this=_React$PureComponent.call(this,props,context)||this;_this._keyExtractor=function(item,index){var info=_this._subExtractor(index);return info&&info.key||String(index);};_this._convertViewable=function(viewable){invariant_default()(viewable.index!=null,'Received a broken ViewToken');var info=_this._subExtractor(viewable.index);if(!info){return null;}var keyExtractor=info.section.keyExtractor||_this.props.keyExtractor;return _objectSpread({},viewable,{index:info.index,key:keyExtractor(viewable.item,info.index),section:info.section});};_this._onViewableItemsChanged=function(_ref){var viewableItems=_ref.viewableItems,changed=_ref.changed;if(_this.props.onViewableItemsChanged){_this.props.onViewableItemsChanged({viewableItems:viewableItems.map(_this._convertViewable,_assertThisInitialized(_this)).filter(Boolean),changed:changed.map(_this._convertViewable,_assertThisInitialized(_this)).filter(Boolean)});}};_this._renderItem=function(_ref2){var item=_ref2.item,index=_ref2.index;var info=_this._subExtractor(index);if(!info){return null;}var infoIndex=info.index;if(infoIndex==null){var section=info.section;if(info.header===true){var renderSectionHeader=_this.props.renderSectionHeader;return renderSectionHeader?renderSectionHeader({section:section}):null;}else{var renderSectionFooter=_this.props.renderSectionFooter;return renderSectionFooter?renderSectionFooter({section:section}):null;}}else{var renderItem=info.section.renderItem||_this.props.renderItem;var SeparatorComponent=_this._getSeparatorComponent(index,info);invariant_default()(renderItem,'no renderItem!');return react["createElement"](VirtualizedSectionList_ItemWithSeparator,{SeparatorComponent:SeparatorComponent,LeadingSeparatorComponent:infoIndex===0?_this.props.SectionSeparatorComponent:undefined,cellKey:info.key,index:infoIndex,item:item,leadingItem:info.leadingItem,leadingSection:info.leadingSection,onUpdateSeparator:_this._onUpdateSeparator,prevCellKey:(_this._subExtractor(index-1)||{}).key,ref:function ref(_ref3){_this._cellRefs[info.key]=_ref3;},renderItem:renderItem,section:info.section,trailingItem:info.trailingItem,trailingSection:info.trailingSection});}};_this._onUpdateSeparator=function(key,newProps){var ref=_this._cellRefs[key];ref&&ref.updateSeparatorProps(newProps);};_this._cellRefs={};_this._captureRef=function(ref){_this._listRef=ref;};_this.state=_this._computeState(props);return _this;}_proto.UNSAFE_componentWillReceiveProps=function UNSAFE_componentWillReceiveProps(nextProps){this.setState(this._computeState(nextProps));};_proto._computeState=function _computeState(props){var offset=props.ListHeaderComponent?1:0;var stickyHeaderIndices=[];var itemCount=props.sections?props.sections.reduce(function(v,section){stickyHeaderIndices.push(v+offset);return v+props.getItemCount(section.data)+2;},0):0;return{childProps:_objectSpread({},props,{renderItem:this._renderItem,ItemSeparatorComponent:undefined,data:props.sections,getItemCount:function getItemCount(){return itemCount;},getItem:function getItem(sections,index){return _getItem(props,sections,index);},keyExtractor:this._keyExtractor,onViewableItemsChanged:props.onViewableItemsChanged?this._onViewableItemsChanged:undefined,stickyHeaderIndices:props.stickySectionHeadersEnabled?stickyHeaderIndices:undefined})};};_proto.render=function render(){return react["createElement"](VirtualizedList["a" /* default */],_extends({},this.state.childProps,{ref:this._captureRef}));};_proto._subExtractor=function _subExtractor(index){var itemIndex=index;var _this$props=this.props,getItem=_this$props.getItem,getItemCount=_this$props.getItemCount,keyExtractor=_this$props.keyExtractor,sections=_this$props.sections;for(var i=0;i<sections.length;i++){var section=sections[i];var sectionData=section.data;var key=section.key||String(i);itemIndex-=1;if(itemIndex>=getItemCount(sectionData)+1){itemIndex-=getItemCount(sectionData)+1;}else if(itemIndex===-1){return{section:section,key:key+':header',index:null,header:true,trailingSection:sections[i+1]};}else if(itemIndex===getItemCount(sectionData)){return{section:section,key:key+':footer',index:null,header:false,trailingSection:sections[i+1]};}else{var extractor=section.keyExtractor||keyExtractor;return{section:section,key:key+':'+extractor(getItem(sectionData,itemIndex),itemIndex),index:itemIndex,leadingItem:getItem(sectionData,itemIndex-1),leadingSection:sections[i-1],trailingItem:getItem(sectionData,itemIndex+1),trailingSection:sections[i+1]};}}};_proto._getSeparatorComponent=function _getSeparatorComponent(index,info){info=info||this._subExtractor(index);if(!info){return null;}var ItemSeparatorComponent=info.section.ItemSeparatorComponent||this.props.ItemSeparatorComponent;var SectionSeparatorComponent=this.props.SectionSeparatorComponent;var isLastItemInList=index===this.state.childProps.getItemCount()-1;var isLastItemInSection=info.index===this.props.getItemCount(info.section.data)-1;if(SectionSeparatorComponent&&isLastItemInSection){return SectionSeparatorComponent;}if(ItemSeparatorComponent&&!isLastItemInSection&&!isLastItemInList){return ItemSeparatorComponent;}return null;};return VirtualizedSectionList;}(react["PureComponent"]);VirtualizedSectionList_VirtualizedSectionList.defaultProps=_objectSpread({},VirtualizedList["a" /* default */].defaultProps,{data:[]});var VirtualizedSectionList_ItemWithSeparator=function(_React$Component){_inheritsLoose(ItemWithSeparator,_React$Component);function ItemWithSeparator(){var _this2;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this2=_React$Component.call.apply(_React$Component,[this].concat(args))||this;_this2.state={separatorProps:{highlighted:false,leadingItem:_this2.props.item,leadingSection:_this2.props.leadingSection,section:_this2.props.section,trailingItem:_this2.props.trailingItem,trailingSection:_this2.props.trailingSection},leadingSeparatorProps:{highlighted:false,leadingItem:_this2.props.leadingItem,leadingSection:_this2.props.leadingSection,section:_this2.props.section,trailingItem:_this2.props.item,trailingSection:_this2.props.trailingSection}};_this2._separators={highlight:function highlight(){['leading','trailing'].forEach(function(s){return _this2._separators.updateProps(s,{highlighted:true});});},unhighlight:function unhighlight(){['leading','trailing'].forEach(function(s){return _this2._separators.updateProps(s,{highlighted:false});});},updateProps:function updateProps(select,newProps){var _this2$props=_this2.props,LeadingSeparatorComponent=_this2$props.LeadingSeparatorComponent,cellKey=_this2$props.cellKey,prevCellKey=_this2$props.prevCellKey;if(select==='leading'&&LeadingSeparatorComponent!=null){_this2.setState(function(state){return{leadingSeparatorProps:_objectSpread({},state.leadingSeparatorProps,{},newProps)};});}else{_this2.props.onUpdateSeparator(select==='leading'&&prevCellKey||cellKey,newProps);}}};return _this2;}ItemWithSeparator.getDerivedStateFromProps=function getDerivedStateFromProps(props,prevState){return{separatorProps:_objectSpread({},prevState.separatorProps,{leadingItem:props.item,leadingSection:props.leadingSection,section:props.section,trailingItem:props.trailingItem,trailingSection:props.trailingSection}),leadingSeparatorProps:_objectSpread({},prevState.leadingSeparatorProps,{leadingItem:props.leadingItem,leadingSection:props.leadingSection,section:props.section,trailingItem:props.item,trailingSection:props.trailingSection})};};var _proto2=ItemWithSeparator.prototype;_proto2.updateSeparatorProps=function updateSeparatorProps(newProps){this.setState(function(state){return{separatorProps:_objectSpread({},state.separatorProps,{},newProps)};});};_proto2.render=function render(){var _this$props2=this.props,LeadingSeparatorComponent=_this$props2.LeadingSeparatorComponent,SeparatorComponent=_this$props2.SeparatorComponent,item=_this$props2.item,index=_this$props2.index,section=_this$props2.section;var element=this.props.renderItem({item:item,index:index,section:section,separators:this._separators});var leadingSeparator=LeadingSeparatorComponent&&react["createElement"](LeadingSeparatorComponent,this.state.leadingSeparatorProps);var separator=SeparatorComponent&&react["createElement"](SeparatorComponent,this.state.separatorProps);return leadingSeparator||separator?react["createElement"](View["a" /* default */],null,leadingSeparator,element,separator):element;};return ItemWithSeparator;}(react["Component"]);function _getItem(props,sections,index){if(!sections){return null;}var itemIdx=index-1;for(var i=0;i<sections.length;i++){var section=sections[i];var sectionData=section.data;var itemCount=props.getItemCount(sectionData);if(itemIdx===-1||itemIdx===itemCount){return section;}else if(itemIdx<itemCount){return props.getItem(sectionData,itemIdx);}else{itemIdx-=itemCount+2;}}return null;}/* harmony default export */ var react_native_VirtualizedSectionList = (VirtualizedSectionList_VirtualizedSectionList);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/SectionList/index.js
function SectionList_extends(){SectionList_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return SectionList_extends.apply(this,arguments);}function SectionList_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function SectionList_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function SectionList_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){SectionList_ownKeys(Object(source),true).forEach(function(key){SectionList_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{SectionList_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function SectionList_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var defaultProps=SectionList_objectSpread({},react_native_VirtualizedSectionList.defaultProps,{stickySectionHeadersEnabled:Platform["a" /* default */].OS==='ios'});var SectionList_SectionList=function(_React$PureComponent){SectionList_inheritsLoose(SectionList,_React$PureComponent);function SectionList(){var _this;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_React$PureComponent.call.apply(_React$PureComponent,[this].concat(args))||this;_this._captureRef=function(ref){_this._wrapperListRef=ref;};return _this;}var _proto=SectionList.prototype;_proto.scrollToLocation=function scrollToLocation(params){if(this._wrapperListRef!=null){this._wrapperListRef.scrollToLocation(params);}};_proto.recordInteraction=function recordInteraction(){var listRef=this._wrapperListRef&&this._wrapperListRef.getListRef();listRef&&listRef.recordInteraction();};_proto.flashScrollIndicators=function flashScrollIndicators(){var listRef=this._wrapperListRef&&this._wrapperListRef.getListRef();listRef&&listRef.flashScrollIndicators();};_proto.getScrollResponder=function getScrollResponder(){var listRef=this._wrapperListRef&&this._wrapperListRef.getListRef();if(listRef){return listRef.getScrollResponder();}};_proto.getScrollableNode=function getScrollableNode(){var listRef=this._wrapperListRef&&this._wrapperListRef.getListRef();if(listRef){return listRef.getScrollableNode();}};_proto.setNativeProps=function setNativeProps(props){var listRef=this._wrapperListRef&&this._wrapperListRef.getListRef();if(listRef){listRef.setNativeProps(props);}};_proto.render=function render(){return react["createElement"](react_native_VirtualizedSectionList,SectionList_extends({},this.props,{ref:this._captureRef,getItemCount:function getItemCount(items){return items.length;},getItem:function getItem(items,index){return items[index];}}));};return SectionList;}(react["PureComponent"]);SectionList_SectionList.defaultProps=defaultProps;/* harmony default export */ var react_native_SectionList = (SectionList_SectionList);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/SectionList/index.js
/* harmony default export */ var exports_SectionList = __webpack_exports__["a"] = (react_native_SectionList);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _exports_StyleSheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _exports_StyleSheet_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var emptyObject={};var hasOwnProperty=Object.prototype.hasOwnProperty;var classes=_exports_StyleSheet_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].create({reset:{backgroundColor:'transparent',color:'inherit',font:'inherit',listStyle:'none',margin:0,textAlign:'inherit',textDecoration:'none'},cursor:{cursor:'pointer'}},_exports_StyleSheet_constants__WEBPACK_IMPORTED_MODULE_4__[/* STYLE_GROUPS */ "c"].classicReset);var pointerEventsStyles=_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].create({auto:{pointerEvents:'auto'},'box-none':{pointerEvents:'box-none'},'box-only':{pointerEvents:'box-only'},none:{pointerEvents:'none'}});var createDOMProps=function createDOMProps(component,props){if(!props){props=emptyObject;}var _props=props,accessibilityLabel=_props.accessibilityLabel,accessibilityLiveRegion=_props.accessibilityLiveRegion,accessibilityState=_props.accessibilityState,accessibilityValue=_props.accessibilityValue,accessible=_props.accessible,classList=_props.classList,dataSet=_props.dataSet,providedDisabled=_props.disabled,importantForAccessibility=_props.importantForAccessibility,nativeID=_props.nativeID,pointerEvents=_props.pointerEvents,providedStyle=_props.style,testID=_props.testID,accessibilityRole=_props.accessibilityRole,domProps=_objectWithoutPropertiesLoose(_props,["accessibilityLabel","accessibilityLiveRegion","accessibilityState","accessibilityValue","accessible","classList","dataSet","disabled","importantForAccessibility","nativeID","pointerEvents","style","testID","accessibilityRole"]);var disabled=accessibilityState!=null&&accessibilityState.disabled===true||providedDisabled;var role=_AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].propsToAriaRole(props);var isNativeInteractiveElement=role==='link'||component==='a'||component==='button'||component==='input'||component==='select'||component==='textarea'||domProps.contentEditable!=null;if(dataSet!=null){for(var prop in dataSet){if(hasOwnProperty.call(dataSet,prop)){var value=dataSet[prop];if(value!=null){domProps["data-"+prop]=value;}}}}if(accessibilityLabel!=null){domProps['aria-label']=accessibilityLabel;}if(accessibilityLiveRegion!=null){domProps['aria-live']=accessibilityLiveRegion==='none'?'off':accessibilityLiveRegion;}if(role!=null){domProps.role=role;}if(accessibilityState!=null){for(var _prop in accessibilityState){var _value=accessibilityState[_prop];if(_value!=null){if(_prop==='disabled'||_prop==='hidden'){if(_value===true){domProps["aria-"+_prop]=_value;domProps[_prop]=_value;}}else{domProps["aria-"+_prop]=_value;}}}}if(accessibilityValue!=null){for(var _prop2 in accessibilityValue){var _value2=accessibilityValue[_prop2];if(_value2!=null){domProps["aria-value"+_prop2]=_value2;}}}if(importantForAccessibility==='no-hide-descendants'){domProps['aria-hidden']=true;}if(disabled===true){domProps['aria-disabled']=true;domProps.disabled=true;}var focusable=!disabled&&importantForAccessibility!=='no'&&importantForAccessibility!=='no-hide-descendants';if(isNativeInteractiveElement){if(accessible===false||!focusable){domProps.tabIndex='-1';}else{domProps['data-focusable']=true;}}else if(role==='button'||role==='menuitem'||role==='textbox'){if(accessible!==false&&focusable){domProps['data-focusable']=true;domProps.tabIndex='0';}}else{if(accessible===true&&focusable){domProps['data-focusable']=true;domProps.tabIndex='0';}}var reactNativeStyle=_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].compose(pointerEvents&&pointerEventsStyles[pointerEvents],providedStyle);var needsCursor=(role==='button'||role==='link')&&!disabled;var needsReset=component==='a'||component==='button'||component==='li'||component==='ul'||role==='heading';var finalClassList=[needsReset&&classes.reset,needsCursor&&classes.cursor,classList];var _styleResolver$resolv=_exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].resolve(reactNativeStyle,finalClassList),className=_styleResolver$resolv.className,style=_styleResolver$resolv.style;if(className!=null&&className!==''){domProps.className=className;}if(style){domProps.style=style;}if(nativeID!=null){domProps.id=nativeID;}if(component==='a'&&domProps.target==='_blank'){domProps.rel=(domProps.rel||'')+" noopener noreferrer";}if(testID!=null){domProps['data-testid']=testID;}if(domProps['data-focusable']){var onClick=domProps.onClick;if(onClick!=null){if(disabled){domProps.onClick=function(e){e.stopPropagation();};}else if(!isNativeInteractiveElement){var onKeyDown=domProps.onKeyDown;domProps.onKeyDown=function(e){var key=e.key,repeat=e.repeat;var isSpacebarKey=key===' '||key==='Spacebar';var isButtonRole=role==='button'||role==='menuitem';if(onKeyDown!=null){onKeyDown(e);}if(!repeat&&key==='Enter'){onClick(e);}else if(isSpacebarKey&&isButtonRole){if(!repeat){onClick(e);}e.preventDefault();}};}}}return domProps;};/* harmony default export */ __webpack_exports__["a"] = (createDOMProps);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _modules_normalizeColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony import */ var _normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
var defaultOffset={height:0,width:0};var resolveShadowValue=function resolveShadowValue(style){var shadowColor=style.shadowColor,shadowOffset=style.shadowOffset,shadowOpacity=style.shadowOpacity,shadowRadius=style.shadowRadius;var _ref=shadowOffset||defaultOffset,height=_ref.height,width=_ref.width;var offsetX=Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(width);var offsetY=Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(height);var blurRadius=Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(shadowRadius||0);var color=Object(_modules_normalizeColor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(shadowColor||'black',shadowOpacity);if(color!=null&&offsetX!=null&&offsetY!=null&&blurRadius!=null){return offsetX+" "+offsetY+" "+blurRadius+" "+color;}};/* harmony default export */ __webpack_exports__["a"] = (resolveShadowValue);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emitter_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _RCTDeviceEventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var NativeEventEmitter=function(_EventEmitter){_inheritsLoose(NativeEventEmitter,_EventEmitter);function NativeEventEmitter(nativeModule){return _EventEmitter.call(this,_RCTDeviceEventEmitter__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].sharedSubscriber)||this;}var _proto=NativeEventEmitter.prototype;_proto.addListener=function addListener(eventType,listener,context){if(this._nativeModule!=null){this._nativeModule.addListener(eventType);}return _EventEmitter.prototype.addListener.call(this,eventType,listener,context);};_proto.removeAllListeners=function removeAllListeners(eventType){fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(eventType,'eventType argument is required.');var count=this.listeners(eventType).length;if(this._nativeModule!=null){this._nativeModule.removeListeners(count);}_EventEmitter.prototype.removeAllListeners.call(this,eventType);};_proto.removeSubscription=function removeSubscription(subscription){if(this._nativeModule!=null){this._nativeModule.removeListeners(1);}_EventEmitter.prototype.removeSubscription.call(this,subscription);};return NativeEventEmitter;}(_emitter_EventEmitter__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);/* harmony default export */ __webpack_exports__["a"] = (NativeEventEmitter);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emitter_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _emitter_EventSubscriptionVendor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var __DEV__="production"!=='production';function checkNativeEventModule(eventType){if(eventType){if(eventType.lastIndexOf('statusBar',0)===0){throw new Error('`'+eventType+'` event should be registered via the StatusBarIOS module');}if(eventType.lastIndexOf('keyboard',0)===0){throw new Error('`'+eventType+'` event should be registered via the Keyboard module');}if(eventType==='appStateDidChange'||eventType==='memoryWarning'){throw new Error('`'+eventType+'` event should be registered via the AppState module');}}}var RCTDeviceEventEmitter=function(_EventEmitter){_inheritsLoose(RCTDeviceEventEmitter,_EventEmitter);function RCTDeviceEventEmitter(){var _this;var sharedSubscriber=new _emitter_EventSubscriptionVendor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]();_this=_EventEmitter.call(this,sharedSubscriber)||this;_this.sharedSubscriber=sharedSubscriber;return _this;}var _proto=RCTDeviceEventEmitter.prototype;_proto.addListener=function addListener(eventType,listener,context){if(__DEV__){checkNativeEventModule(eventType);}return _EventEmitter.prototype.addListener.call(this,eventType,listener,context);};_proto.removeAllListeners=function removeAllListeners(eventType){if(__DEV__){checkNativeEventModule(eventType);}_EventEmitter.prototype.removeAllListeners.call(this,eventType);};_proto.removeSubscription=function removeSubscription(subscription){if(subscription.emitter!==this){subscription.emitter.removeSubscription(subscription);}else{_EventEmitter.prototype.removeSubscription.call(this,subscription);}};return RCTDeviceEventEmitter;}(_emitter_EventEmitter__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);/* harmony default export */ __webpack_exports__["a"] = (new RCTDeviceEventEmitter());

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0__);
var EventSubscriptionVendor=function(){function EventSubscriptionVendor(){this._subscriptionsForType={};this._currentSubscription=null;}var _proto=EventSubscriptionVendor.prototype;_proto.addSubscription=function addSubscription(eventType,subscription){fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default()(subscription.subscriber===this,'The subscriber of the subscription is incorrectly set.');if(!this._subscriptionsForType[eventType]){this._subscriptionsForType[eventType]=[];}var key=this._subscriptionsForType[eventType].length;this._subscriptionsForType[eventType].push(subscription);subscription.eventType=eventType;subscription.key=key;return subscription;};_proto.removeAllSubscriptions=function removeAllSubscriptions(eventType){if(eventType===undefined){this._subscriptionsForType={};}else{delete this._subscriptionsForType[eventType];}};_proto.removeSubscription=function removeSubscription(subscription){var eventType=subscription.eventType;var key=subscription.key;var subscriptionsForType=this._subscriptionsForType[eventType];if(subscriptionsForType){delete subscriptionsForType[key];}};_proto.getSubscriptionsForType=function getSubscriptionsForType(eventType){return this._subscriptionsForType[eventType];};return EventSubscriptionVendor;}();/* harmony default export */ __webpack_exports__["a"] = (EventSubscriptionVendor);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function mergeRefs(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return function forwardRef(node){args.forEach(function(ref){if(ref==null){return;}if(typeof ref==='function'){ref(node);return;}if(typeof ref==='object'){ref.current=node;return;}console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref "+String(ref));});};}

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _TextInputState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
var dismissKeyboard=function dismissKeyboard(){_TextInputState__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].blurTextInput(_TextInputState__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].currentlyFocusedField());};/* harmony default export */ __webpack_exports__["a"] = (dismissKeyboard);

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/emitter/EventSubscription.js
var EventSubscription=function(){function EventSubscription(subscriber){this.subscriber=subscriber;}var _proto=EventSubscription.prototype;_proto.remove=function remove(){this.subscriber.removeSubscription(this);};return EventSubscription;}();/* harmony default export */ var emitter_EventSubscription = (EventSubscription);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/emitter/EmitterSubscription.js
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var EmitterSubscription=function(_EventSubscription){_inheritsLoose(EmitterSubscription,_EventSubscription);function EmitterSubscription(emitter,subscriber,listener,context){var _this;_this=_EventSubscription.call(this,subscriber)||this;_this.emitter=emitter;_this.listener=listener;_this.context=context;return _this;}var _proto=EmitterSubscription.prototype;_proto.remove=function remove(){this.emitter.removeSubscription(this);};return EmitterSubscription;}(emitter_EventSubscription);/* harmony default export */ var emitter_EmitterSubscription = (EmitterSubscription);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/emitter/EventSubscriptionVendor.js
var EventSubscriptionVendor = __webpack_require__(86);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__(2);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/emitter/EventEmitter.js
var sparseFilterPredicate=function sparseFilterPredicate(){return true;};var EventEmitter_EventEmitter=function(){function EventEmitter(subscriber){this._subscriber=subscriber||new EventSubscriptionVendor["a" /* default */]();}var _proto=EventEmitter.prototype;_proto.addListener=function addListener(eventType,listener,context){return this._subscriber.addSubscription(eventType,new emitter_EmitterSubscription(this,this._subscriber,listener,context));};_proto.once=function once(eventType,listener,context){var _this=this;return this.addListener(eventType,function(){_this.removeCurrentListener();for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}listener.apply(context,args);});};_proto.removeAllListeners=function removeAllListeners(eventType){this._subscriber.removeAllSubscriptions(eventType);};_proto.removeCurrentListener=function removeCurrentListener(){invariant_default()(!!this._currentSubscription,'Not in an emitting cycle; there is no current subscription');this.removeSubscription(this._currentSubscription);};_proto.removeSubscription=function removeSubscription(subscription){invariant_default()(subscription.emitter===this,'Subscription does not belong to this emitter.');this._subscriber.removeSubscription(subscription);};_proto.listeners=function listeners(eventType){var subscriptions=this._subscriber.getSubscriptionsForType(eventType);return subscriptions?subscriptions.filter(sparseFilterPredicate).map(function(subscription){return subscription.listener;}):[];};_proto.emit=function emit(eventType){var subscriptions=this._subscriber.getSubscriptionsForType(eventType);if(subscriptions){for(var i=0,l=subscriptions.length;i<l;i++){var subscription=subscriptions[i];if(subscription&&subscription.listener){this._currentSubscription=subscription;subscription.listener.apply(subscription.context,Array.prototype.slice.call(arguments,1));}}this._currentSubscription=null;}};_proto.removeListener=function removeListener(eventType,listener){var subscriptions=this._subscriber.getSubscriptionsForType(eventType);if(subscriptions){for(var i=0,l=subscriptions.length;i<l;i++){var subscription=subscriptions[i];if(subscription&&subscription.listener===listener){subscription.remove();}}}};return EventEmitter;}();/* harmony default export */ var emitter_EventEmitter = __webpack_exports__["a"] = (EventEmitter_EventEmitter);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/isWebColor/index.js
var isWebColor=function isWebColor(color){return color==='currentcolor'||color==='currentColor'||color==='inherit'||color.indexOf('var(')===0;};/* harmony default export */ var modules_isWebColor = (isWebColor);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/processColor/index.js
var processColor = __webpack_require__(72);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/normalizeColor/index.js
var normalizeColor_normalizeColor=function normalizeColor(color,opacity){if(opacity===void 0){opacity=1;}if(color==null)return;if(typeof color==='string'&&modules_isWebColor(color)){return color;}var colorInt=Object(processColor["a" /* default */])(color);if(colorInt!=null){var r=colorInt>>16&255;var g=colorInt>>8&255;var b=colorInt&255;var a=(colorInt>>24&255)/255;var alpha=(a*opacity).toFixed(2);return"rgba("+r+","+g+","+b+","+alpha+")";}};/* harmony default export */ var modules_normalizeColor = __webpack_exports__["a"] = (normalizeColor_normalizeColor);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
var performance = __webpack_require__(278);

var performanceNow;
/**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */

if (performance.now) {
  performanceNow = function performanceNow() {
    return performance.now();
  };
} else {
  performanceNow = function performanceNow() {
    return Date.now();
  };
}

module.exports = performanceNow;

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export registerAsset */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAssetByID; });
var assets=[];function registerAsset(asset){return assets.push(asset);}function getAssetByID(assetId){return assets[assetId-1];}

/***/ }),
/* 94 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
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


/***/ }),
/* 96 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _modules_pick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _hooks_useElementLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
/* harmony import */ var _hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67);
/* harmony import */ var _modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var _hooks_usePlatformMethods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);
/* harmony import */ var _hooks_useResponderEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53);
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4);
/* harmony import */ var _modules_TextInputState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28);
var isSelectionStale=function isSelectionStale(node,selection){var selectionEnd=node.selectionEnd,selectionStart=node.selectionStart;var start=selection.start,end=selection.end;return start!==selectionStart||end!==selectionEnd;};var setSelection=function setSelection(node,selection){if(isSelectionStale(node,selection)){var start=selection.start,end=selection.end;try{node.setSelectionRange(start,end||start);}catch(e){}}};var forwardPropsList={accessibilityLabel:true,accessibilityLiveRegion:true,accessibilityRole:true,accessibilityState:true,accessibilityValue:true,accessible:true,autoCapitalize:true,autoComplete:true,autoCorrect:true,autoFocus:true,children:true,classList:true,defaultValue:true,dir:true,disabled:true,importantForAccessibility:true,maxLength:true,nativeID:true,onBlur:true,onChange:true,onClick:true,onClickCapture:true,onContextMenu:true,onFocus:true,onScroll:true,onTouchCancel:true,onTouchCancelCapture:true,onTouchEnd:true,onTouchEndCapture:true,onTouchMove:true,onTouchMoveCapture:true,onTouchStart:true,onTouchStartCapture:true,placeholder:true,pointerEvents:true,readOnly:true,ref:true,rows:true,spellCheck:true,style:true,value:true,testID:true,type:true,dataSet:true,onMouseDown:true,onMouseEnter:true,onMouseLeave:true,onMouseMove:true,onMouseOver:true,onMouseOut:true,onMouseUp:true};var pickProps=function pickProps(props){return Object(_modules_pick__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(props,forwardPropsList);};function isEventComposing(nativeEvent){return nativeEvent.isComposing||nativeEvent.keyCode===229;}var TextInput=Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function(props,forwardedRef){var _props$autoCapitalize=props.autoCapitalize,autoCapitalize=_props$autoCapitalize===void 0?'sentences':_props$autoCapitalize,autoComplete=props.autoComplete,autoCompleteType=props.autoCompleteType,_props$autoCorrect=props.autoCorrect,autoCorrect=_props$autoCorrect===void 0?true:_props$autoCorrect,blurOnSubmit=props.blurOnSubmit,clearTextOnFocus=props.clearTextOnFocus,dir=props.dir,_props$editable=props.editable,editable=_props$editable===void 0?true:_props$editable,_props$keyboardType=props.keyboardType,keyboardType=_props$keyboardType===void 0?'default':_props$keyboardType,_props$multiline=props.multiline,multiline=_props$multiline===void 0?false:_props$multiline,_props$numberOfLines=props.numberOfLines,numberOfLines=_props$numberOfLines===void 0?1:_props$numberOfLines,onBlur=props.onBlur,onChange=props.onChange,onChangeText=props.onChangeText,onContentSizeChange=props.onContentSizeChange,onFocus=props.onFocus,onKeyPress=props.onKeyPress,onLayout=props.onLayout,onMoveShouldSetResponder=props.onMoveShouldSetResponder,onMoveShouldSetResponderCapture=props.onMoveShouldSetResponderCapture,onResponderEnd=props.onResponderEnd,onResponderGrant=props.onResponderGrant,onResponderMove=props.onResponderMove,onResponderReject=props.onResponderReject,onResponderRelease=props.onResponderRelease,onResponderStart=props.onResponderStart,onResponderTerminate=props.onResponderTerminate,onResponderTerminationRequest=props.onResponderTerminationRequest,onScrollShouldSetResponder=props.onScrollShouldSetResponder,onScrollShouldSetResponderCapture=props.onScrollShouldSetResponderCapture,onSelectionChange=props.onSelectionChange,onSelectionChangeShouldSetResponder=props.onSelectionChangeShouldSetResponder,onSelectionChangeShouldSetResponderCapture=props.onSelectionChangeShouldSetResponderCapture,onStartShouldSetResponder=props.onStartShouldSetResponder,onStartShouldSetResponderCapture=props.onStartShouldSetResponderCapture,onSubmitEditing=props.onSubmitEditing,placeholderTextColor=props.placeholderTextColor,returnKeyType=props.returnKeyType,_props$secureTextEntr=props.secureTextEntry,secureTextEntry=_props$secureTextEntr===void 0?false:_props$secureTextEntr,selection=props.selection,selectTextOnFocus=props.selectTextOnFocus,spellCheck=props.spellCheck;var type;var inputMode;switch(keyboardType){case'email-address':type='email';break;case'number-pad':case'numeric':inputMode='numeric';break;case'decimal-pad':inputMode='decimal';break;case'phone-pad':type='tel';break;case'search':case'web-search':type='search';break;case'url':type='url';break;default:type='text';}if(secureTextEntry){type='password';}var dimensions=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({height:null,width:null});var hostRef=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);var handleContentSizeChange=Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function(){var node=hostRef.current;if(multiline&&onContentSizeChange&&node!=null){var newHeight=node.scrollHeight;var newWidth=node.scrollWidth;if(newHeight!==dimensions.current.height||newWidth!==dimensions.current.width){dimensions.current.height=newHeight;dimensions.current.width=newWidth;onContentSizeChange({nativeEvent:{contentSize:{height:dimensions.current.height,width:dimensions.current.width}}});}}},[hostRef,multiline,onContentSizeChange]);var imperativeRef=Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function(){return function(hostNode){if(hostNode!=null){hostNode.clear=function(){if(hostNode!=null){hostNode.value='';}};hostNode.isFocused=function(){return hostNode!=null&&_modules_TextInputState__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].currentlyFocusedField()===hostNode;};handleContentSizeChange();}};},[handleContentSizeChange]);function handleBlur(e){_modules_TextInputState__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]._currentlyFocusedNode=null;if(onBlur){e.nativeEvent.text=e.target.value;onBlur(e);}}function handleChange(e){var text=e.target.value;e.nativeEvent.text=text;handleContentSizeChange();if(onChange){onChange(e);}if(onChangeText){onChangeText(text);}}function handleFocus(e){var node=hostRef.current;if(node!=null){_modules_TextInputState__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]._currentlyFocusedNode=node;if(onFocus){e.nativeEvent.text=e.target.value;onFocus(e);}if(clearTextOnFocus){node.value='';}if(selectTextOnFocus){node.select();}}}function handleKeyDown(e){e.stopPropagation();var blurOnSubmitDefault=!multiline;var shouldBlurOnSubmit=blurOnSubmit==null?blurOnSubmitDefault:blurOnSubmit;var nativeEvent=e.nativeEvent;var isComposing=isEventComposing(nativeEvent);if(onKeyPress){onKeyPress(e);}if(e.key==='Enter'&&!e.shiftKey&&!isComposing&&!e.isDefaultPrevented()){if((blurOnSubmit||!multiline)&&onSubmitEditing){e.preventDefault();nativeEvent.text=e.target.value;onSubmitEditing(e);}if(shouldBlurOnSubmit&&hostRef.current!=null){hostRef.current.blur();}}}function handleSelectionChange(e){if(onSelectionChange){try{var node=e.target;var selectionStart=node.selectionStart,selectionEnd=node.selectionEnd;e.nativeEvent.selection={start:selectionStart,end:selectionEnd};e.nativeEvent.text=e.target.value;onSelectionChange(e);}catch(e){}}}Object(_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(function(){var node=hostRef.current;if(node!=null&&selection!=null){setSelection(node,selection);}if(document.activeElement===node){_modules_TextInputState__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]._currentlyFocusedNode=node;}},[hostRef,selection]);var component=multiline?'textarea':'input';var classList=[classes.textinput];var style=_StyleSheet__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].compose(props.style,placeholderTextColor&&{placeholderTextColor:placeholderTextColor});Object(_hooks_useElementLayout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(hostRef,onLayout);Object(_hooks_useResponderEvents__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(hostRef,{onMoveShouldSetResponder:onMoveShouldSetResponder,onMoveShouldSetResponderCapture:onMoveShouldSetResponderCapture,onResponderEnd:onResponderEnd,onResponderGrant:onResponderGrant,onResponderMove:onResponderMove,onResponderReject:onResponderReject,onResponderRelease:onResponderRelease,onResponderStart:onResponderStart,onResponderTerminate:onResponderTerminate,onResponderTerminationRequest:onResponderTerminationRequest,onScrollShouldSetResponder:onScrollShouldSetResponder,onScrollShouldSetResponderCapture:onScrollShouldSetResponderCapture,onSelectionChangeShouldSetResponder:onSelectionChangeShouldSetResponder,onSelectionChangeShouldSetResponderCapture:onSelectionChangeShouldSetResponderCapture,onStartShouldSetResponder:onStartShouldSetResponder,onStartShouldSetResponderCapture:onStartShouldSetResponderCapture});var supportedProps=pickProps(props);supportedProps.autoCapitalize=autoCapitalize;supportedProps.autoComplete=autoComplete||autoCompleteType||'on';supportedProps.autoCorrect=autoCorrect?'on':'off';supportedProps.classList=classList;supportedProps.dir=dir!==undefined?dir:'auto';supportedProps.enterkeyhint=returnKeyType;supportedProps.onBlur=handleBlur;supportedProps.onChange=handleChange;supportedProps.onFocus=handleFocus;supportedProps.onKeyDown=handleKeyDown;supportedProps.onSelect=handleSelectionChange;supportedProps.readOnly=!editable;supportedProps.rows=multiline?numberOfLines:undefined;supportedProps.spellCheck=spellCheck!=null?spellCheck:autoCorrect;supportedProps.style=style;supportedProps.type=multiline?undefined:type;supportedProps.inputMode=inputMode;var platformMethodsRef=Object(_hooks_usePlatformMethods__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(supportedProps);var setRef=Object(_modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(hostRef,platformMethodsRef,imperativeRef,forwardedRef);supportedProps.ref=setRef;return Object(_createElement__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(component,supportedProps);});TextInput.displayName='TextInput';TextInput.State=_modules_TextInputState__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"];var classes=_StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].create({textinput:{MozAppearance:'textfield',WebkitAppearance:'none',backgroundColor:'transparent',border:'0 solid black',borderRadius:0,boxSizing:'border-box',font:'14px System',margin:0,padding:0,resize:'none'}});/* harmony default export */ __webpack_exports__["a"] = (TextInput);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_pick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _hooks_usePressEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var forwardPropsList={accessibilityLabel:true,accessibilityLiveRegion:true,accessibilityRole:true,accessibilityState:true,accessibilityValue:true,accessible:true,children:true,disabled:true,focusable:true,importantForAccessibility:true,nativeID:true,onBlur:true,onFocus:true,onLayout:true,testID:true};var pickProps=function pickProps(props){return Object(_modules_pick__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props,forwardPropsList);};function TouchableWithoutFeedback(props,forwardedRef){var accessible=props.accessible,delayPressIn=props.delayPressIn,delayPressOut=props.delayPressOut,delayLongPress=props.delayLongPress,disabled=props.disabled,focusable=props.focusable,onLongPress=props.onLongPress,onPress=props.onPress,onPressIn=props.onPressIn,onPressOut=props.onPressOut,rejectResponderTermination=props.rejectResponderTermination;var hostRef=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);var pressConfig=Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function(){return{cancelable:!rejectResponderTermination,disabled:disabled,delayLongPress:delayLongPress,delayPressStart:delayPressIn,delayPressEnd:delayPressOut,onLongPress:onLongPress,onPress:onPress,onPressStart:onPressIn,onPressEnd:onPressOut};},[disabled,delayPressIn,delayPressOut,delayLongPress,onLongPress,onPress,onPressIn,onPressOut,rejectResponderTermination]);var pressEventHandlers=Object(_hooks_usePressEvents__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(hostRef,pressConfig);var element=react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(props.children);var children=[element.props.children];var supportedProps=pickProps(props);supportedProps.accessible=accessible!==false;supportedProps.accessibilityState=_objectSpread({disabled:disabled},props.accessibilityState);supportedProps.focusable=focusable!==false&&onPress!==undefined;supportedProps.ref=Object(_modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(forwardedRef,hostRef,element.ref);var elementProps=Object.assign(supportedProps,pressEventHandlers);return react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"].apply(react__WEBPACK_IMPORTED_MODULE_0__,[element,elementProps].concat(children));}var MemoedTouchableWithoutFeedback=react__WEBPACK_IMPORTED_MODULE_0__["memo"](react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](TouchableWithoutFeedback));MemoedTouchableWithoutFeedback.displayName='TouchableWithoutFeedback';/* harmony default export */ __webpack_exports__["a"] = (MemoedTouchableWithoutFeedback);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "unstable_createElement", function() { return /* reexport */ createElement["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "findNodeHandle", function() { return /* reexport */ findNodeHandle["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "processColor", function() { return /* reexport */ processColor["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "render", function() { return /* reexport */ exports_render["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return /* reexport */ unmountComponentAtNode["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "NativeModules", function() { return /* reexport */ NativeModules["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "AccessibilityInfo", function() { return /* reexport */ exports_AccessibilityInfo; });
__webpack_require__.d(__webpack_exports__, "Alert", function() { return /* reexport */ exports_Alert; });
__webpack_require__.d(__webpack_exports__, "Animated", function() { return /* reexport */ Animated["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Appearance", function() { return /* reexport */ exports_Appearance; });
__webpack_require__.d(__webpack_exports__, "AppRegistry", function() { return /* reexport */ AppRegistry["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "AppState", function() { return /* reexport */ AppState_AppState; });
__webpack_require__.d(__webpack_exports__, "BackHandler", function() { return /* reexport */ exports_BackHandler; });
__webpack_require__.d(__webpack_exports__, "Clipboard", function() { return /* reexport */ Clipboard; });
__webpack_require__.d(__webpack_exports__, "DeviceInfo", function() { return /* reexport */ exports_DeviceInfo; });
__webpack_require__.d(__webpack_exports__, "Dimensions", function() { return /* reexport */ Dimensions["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Easing", function() { return /* reexport */ Easing["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "I18nManager", function() { return /* reexport */ I18nManager["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Keyboard", function() { return /* reexport */ exports_Keyboard; });
__webpack_require__.d(__webpack_exports__, "InteractionManager", function() { return /* reexport */ InteractionManager["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "LayoutAnimation", function() { return /* reexport */ exports_LayoutAnimation; });
__webpack_require__.d(__webpack_exports__, "Linking", function() { return /* reexport */ exports_Linking; });
__webpack_require__.d(__webpack_exports__, "NativeEventEmitter", function() { return /* reexport */ NativeEventEmitter["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "PanResponder", function() { return /* reexport */ PanResponder["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "PixelRatio", function() { return /* reexport */ PixelRatio["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Platform", function() { return /* reexport */ Platform["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Share", function() { return /* reexport */ exports_Share; });
__webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return /* reexport */ StyleSheet["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "UIManager", function() { return /* reexport */ UIManager["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Vibration", function() { return /* reexport */ exports_Vibration; });
__webpack_require__.d(__webpack_exports__, "ActivityIndicator", function() { return /* reexport */ exports_ActivityIndicator; });
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ exports_Button; });
__webpack_require__.d(__webpack_exports__, "CheckBox", function() { return /* reexport */ exports_CheckBox; });
__webpack_require__.d(__webpack_exports__, "FlatList", function() { return /* reexport */ FlatList["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Image", function() { return /* reexport */ Image["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "ImageBackground", function() { return /* reexport */ exports_ImageBackground; });
__webpack_require__.d(__webpack_exports__, "KeyboardAvoidingView", function() { return /* reexport */ exports_KeyboardAvoidingView; });
__webpack_require__.d(__webpack_exports__, "Modal", function() { return /* reexport */ Modal; });
__webpack_require__.d(__webpack_exports__, "Picker", function() { return /* reexport */ exports_Picker; });
__webpack_require__.d(__webpack_exports__, "Pressable", function() { return /* reexport */ exports_Pressable; });
__webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return /* reexport */ exports_ProgressBar; });
__webpack_require__.d(__webpack_exports__, "RefreshControl", function() { return /* reexport */ RefreshControl["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SafeAreaView", function() { return /* reexport */ exports_SafeAreaView; });
__webpack_require__.d(__webpack_exports__, "ScrollView", function() { return /* reexport */ ScrollView["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SectionList", function() { return /* reexport */ SectionList["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "StatusBar", function() { return /* reexport */ StatusBar["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Switch", function() { return /* reexport */ exports_Switch; });
__webpack_require__.d(__webpack_exports__, "Text", function() { return /* reexport */ Text["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "TextInput", function() { return /* reexport */ TextInput["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Touchable", function() { return /* reexport */ exports_Touchable; });
__webpack_require__.d(__webpack_exports__, "TouchableHighlight", function() { return /* reexport */ TouchableHighlight["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "TouchableNativeFeedback", function() { return /* reexport */ TouchableNativeFeedback; });
__webpack_require__.d(__webpack_exports__, "TouchableOpacity", function() { return /* reexport */ TouchableOpacity["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "TouchableWithoutFeedback", function() { return /* reexport */ TouchableWithoutFeedback["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "View", function() { return /* reexport */ View["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "VirtualizedList", function() { return /* reexport */ exports_VirtualizedList; });
__webpack_require__.d(__webpack_exports__, "YellowBox", function() { return /* reexport */ exports_YellowBox; });
__webpack_require__.d(__webpack_exports__, "DrawerLayoutAndroid", function() { return /* reexport */ DrawerLayoutAndroid; });
__webpack_require__.d(__webpack_exports__, "InputAccessoryView", function() { return /* reexport */ InputAccessoryView; });
__webpack_require__.d(__webpack_exports__, "ToastAndroid", function() { return /* reexport */ ToastAndroid; });
__webpack_require__.d(__webpack_exports__, "PermissionsAndroid", function() { return /* reexport */ PermissionsAndroid; });
__webpack_require__.d(__webpack_exports__, "Settings", function() { return /* reexport */ Settings; });
__webpack_require__.d(__webpack_exports__, "Systrace", function() { return /* reexport */ Systrace; });
__webpack_require__.d(__webpack_exports__, "TVEventHandler", function() { return /* reexport */ TVEventHandler; });
__webpack_require__.d(__webpack_exports__, "DeviceEventEmitter", function() { return /* reexport */ DeviceEventEmitter["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "useColorScheme", function() { return /* reexport */ useColorScheme; });
__webpack_require__.d(__webpack_exports__, "useWindowDimensions", function() { return /* reexport */ useWindowDimensions; });

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/createElement/index.js
var createElement = __webpack_require__(18);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/findNodeHandle/index.js
var findNodeHandle = __webpack_require__(24);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/processColor/index.js
var processColor = __webpack_require__(72);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/render/index.js
var exports_render = __webpack_require__(73);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/unmountComponentAtNode/index.js
var unmountComponentAtNode = __webpack_require__(74);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/NativeModules/index.js
var NativeModules = __webpack_require__(61);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(5);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/AccessibilityInfo/index.js
function isScreenReaderEnabled(){return new Promise(function(resolve,reject){resolve(true);});}var prefersReducedMotionMedia=ExecutionEnvironment["canUseDOM"]?window.matchMedia('(prefers-reduced-motion: reduce)'):null;function isReduceMotionEnabled(){return new Promise(function(resolve,reject){resolve(prefersReducedMotionMedia?prefersReducedMotionMedia.matches:true);});}var handlers={};var AccessibilityInfo={isScreenReaderEnabled:isScreenReaderEnabled,isReduceMotionEnabled:isReduceMotionEnabled,fetch:isScreenReaderEnabled,addEventListener:function addEventListener(eventName,handler){if(eventName==='reduceMotionChanged'){if(!prefersReducedMotionMedia){return;}var listener=function listener(event){handler(event.matches);};prefersReducedMotionMedia.addEventListener('change',listener);handlers[handler]=listener;}return{remove:function remove(){return AccessibilityInfo.removeEventListener(eventName,handler);}};},setAccessibilityFocus:function setAccessibilityFocus(reactTag){},announceForAccessibility:function announceForAccessibility(announcement){},removeEventListener:function removeEventListener(eventName,handler){if(eventName==='reduceMotionChanged'){var listener=handlers[handler];if(!listener||!prefersReducedMotionMedia){return;}prefersReducedMotionMedia.removeEventListener('change',listener);}return;}};/* harmony default export */ var exports_AccessibilityInfo = (AccessibilityInfo);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Alert/index.js
var Alert=function(){function Alert(){}Alert.alert=function alert(){};return Alert;}();/* harmony default export */ var exports_Alert = (Alert);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Animated/index.js + 13 modules
var Animated = __webpack_require__(9);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Appearance/index.js
function getQuery(){return ExecutionEnvironment["canUseDOM"]&&window.matchMedia!=null?window.matchMedia('(prefers-color-scheme: dark)'):null;}var query=getQuery();var listenerMapping=new WeakMap();var Appearance={getColorScheme:function getColorScheme(){return query&&query.matches?'dark':'light';},addChangeListener:function addChangeListener(listener){var mappedListener=listenerMapping.get(listener);if(!mappedListener){mappedListener=function mappedListener(_ref){var matches=_ref.matches;listener({colorScheme:matches?'dark':'light'});};listenerMapping.set(listener,mappedListener);}if(query){query.addListener(mappedListener);}},removeChangeListener:function removeChangeListener(listener){var mappedListener=listenerMapping.get(listener);if(mappedListener){if(query){query.removeListener(mappedListener);}listenerMapping.delete(listener);}}};/* harmony default export */ var exports_Appearance = (Appearance);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/AppRegistry/index.js + 2 modules
var AppRegistry = __webpack_require__(44);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/array-find-index/index.js
var array_find_index = __webpack_require__(130);
var array_find_index_default = /*#__PURE__*/__webpack_require__.n(array_find_index);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__(2);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/AppState/index.js
function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var isPrefixed=ExecutionEnvironment["canUseDOM"]&&!document.hasOwnProperty('hidden')&&document.hasOwnProperty('webkitHidden');var EVENT_TYPES=['change','memoryWarning'];var VISIBILITY_CHANGE_EVENT=isPrefixed?'webkitvisibilitychange':'visibilitychange';var VISIBILITY_STATE_PROPERTY=isPrefixed?'webkitVisibilityState':'visibilityState';var AppStates={BACKGROUND:'background',ACTIVE:'active'};var listeners=[];var AppState_AppState=function(){function AppState(){}AppState.addEventListener=function addEventListener(type,handler){if(AppState.isAvailable){invariant_default()(EVENT_TYPES.indexOf(type)!==-1,'Trying to subscribe to unknown event: "%s"',type);if(type==='change'){var callback=function callback(){return handler(AppState.currentState);};listeners.push([handler,callback]);document.addEventListener(VISIBILITY_CHANGE_EVENT,callback,false);}}};AppState.removeEventListener=function removeEventListener(type,handler){if(AppState.isAvailable){invariant_default()(EVENT_TYPES.indexOf(type)!==-1,'Trying to remove listener for unknown event: "%s"',type);if(type==='change'){var listenerIndex=array_find_index_default()(listeners,function(pair){return pair[0]===handler;});invariant_default()(listenerIndex!==-1,'Trying to remove AppState listener for unregistered handler');var callback=listeners[listenerIndex][1];document.removeEventListener(VISIBILITY_CHANGE_EVENT,callback,false);listeners.splice(listenerIndex,1);}}};_createClass(AppState,null,[{key:"currentState",get:function get(){if(!AppState.isAvailable){return AppStates.ACTIVE;}switch(document[VISIBILITY_STATE_PROPERTY]){case'hidden':case'prerender':case'unloaded':return AppStates.BACKGROUND;default:return AppStates.ACTIVE;}}}]);return AppState;}();AppState_AppState.isAvailable=ExecutionEnvironment["canUseDOM"]&&document[VISIBILITY_STATE_PROPERTY];
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/BackHandler/index.js
function emptyFunction(){}var BackHandler={exitApp:emptyFunction,addEventListener:function addEventListener(){return{remove:emptyFunction};},removeEventListener:emptyFunction};/* harmony default export */ var exports_BackHandler = (BackHandler);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Clipboard/index.js
var clipboardAvailable;var Clipboard=function(){function Clipboard(){}Clipboard.isAvailable=function isAvailable(){if(clipboardAvailable===undefined){clipboardAvailable=typeof document.queryCommandSupported==='function'&&document.queryCommandSupported('copy');}return clipboardAvailable;};Clipboard.getString=function getString(){return Promise.resolve('');};Clipboard.setString=function setString(text){var success=false;var body=document.body;if(body){var node=document.createElement('span');node.textContent=text;node.style.opacity='0';node.style.position='absolute';node.style.whiteSpace='pre-wrap';node.style.userSelect='auto';body.appendChild(node);var selection=window.getSelection();selection.removeAllRanges();var range=document.createRange();range.selectNodeContents(node);selection.addRange(range);try{document.execCommand('copy');success=true;}catch(e){}selection.removeAllRanges();body.removeChild(node);}return success;};return Clipboard;}();
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Dimensions/index.js
var Dimensions = __webpack_require__(17);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/DeviceInfo/index.js
var DeviceInfo={Dimensions:{get windowPhysicalPixels(){var _Dimensions$get=Dimensions["a" /* default */].get('window'),width=_Dimensions$get.width,height=_Dimensions$get.height,fontScale=_Dimensions$get.fontScale,scale=_Dimensions$get.scale;return{width:width*scale,height:height*scale,scale:scale,fontScale:fontScale};},get screenPhysicalPixels(){var _Dimensions$get2=Dimensions["a" /* default */].get('screen'),width=_Dimensions$get2.width,height=_Dimensions$get2.height,fontScale=_Dimensions$get2.fontScale,scale=_Dimensions$get2.scale;return{width:width*scale,height:height*scale,scale:scale,fontScale:fontScale};}},get locale(){if(ExecutionEnvironment["canUseDOM"]){if(window.navigator.languages){return window.navigator.languages[0];}else{return window.navigator.language;}}},get totalMemory(){return ExecutionEnvironment["canUseDOM"]?window.navigator.deviceMemory:undefined;},get userAgent(){return ExecutionEnvironment["canUseDOM"]?window.navigator.userAgent:'';}};/* harmony default export */ var exports_DeviceInfo = (DeviceInfo);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Easing/index.js
var Easing = __webpack_require__(35);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/I18nManager/index.js
var I18nManager = __webpack_require__(33);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/dismissKeyboard/index.js
var dismissKeyboard = __webpack_require__(88);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Keyboard/index.js
var Keyboard={addListener:function addListener(){return{remove:function remove(){}};},dismiss:function dismiss(){Object(dismissKeyboard["a" /* default */])();},removeAllListeners:function removeAllListeners(){},removeListener:function removeListener(){}};/* harmony default export */ var exports_Keyboard = (Keyboard);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/InteractionManager/index.js + 1 modules
var InteractionManager = __webpack_require__(32);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Platform/index.js
var Platform = __webpack_require__(15);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/UIManager/index.js + 2 modules
var UIManager = __webpack_require__(14);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/LayoutAnimation/index.js
var __DEV__="production"!=='production';function configureNext(config,onAnimationDidEnd){if(!Platform["a" /* default */].isTesting){UIManager["a" /* default */].configureNextLayoutAnimation(config,onAnimationDidEnd!==null&&onAnimationDidEnd!==void 0?onAnimationDidEnd:function(){},function(){});}}function create(duration,type,property){return{duration:duration,create:{type:type,property:property},update:{type:type},delete:{type:type,property:property}};}var Presets={easeInEaseOut:create(300,'easeInEaseOut','opacity'),linear:create(500,'linear','opacity'),spring:{duration:700,create:{type:'linear',property:'opacity'},update:{type:'spring',springDamping:0.4},delete:{type:'linear',property:'opacity'}}};var LayoutAnimation={configureNext:configureNext,create:create,Types:Object.freeze({spring:'spring',linear:'linear',easeInEaseOut:'easeInEaseOut',easeIn:'easeIn',easeOut:'easeOut',keyboard:'keyboard'}),Properties:Object.freeze({opacity:'opacity',scaleX:'scaleX',scaleY:'scaleY',scaleXY:'scaleXY'}),checkConfig:function checkConfig(){console.error('LayoutAnimation.checkConfig(...) has been disabled.');},Presets:Presets,easeInEaseOut:configureNext.bind(null,Presets.easeInEaseOut),linear:configureNext.bind(null,Presets.linear),spring:configureNext.bind(null,Presets.spring)};/* harmony default export */ var react_native_LayoutAnimation = (LayoutAnimation);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/LayoutAnimation/index.js
/* harmony default export */ var exports_LayoutAnimation = (react_native_LayoutAnimation);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Linking/index.js
var initialURL=ExecutionEnvironment["canUseDOM"]?window.location.href:'';var Linking={addEventListener:function addEventListener(){},removeEventListener:function removeEventListener(){},canOpenURL:function canOpenURL(){return Promise.resolve(true);},getInitialURL:function getInitialURL(){return Promise.resolve(initialURL);},openURL:function openURL(url){try{Linking_open(url);return Promise.resolve();}catch(e){return Promise.reject(e);}},_validateURL:function _validateURL(url){invariant_default()(typeof url==='string','Invalid URL: should be a string. Was: '+url);invariant_default()(url,'Invalid URL: cannot be empty');}};var Linking_open=function open(url){if(ExecutionEnvironment["canUseDOM"]){window.location=new URL(url,window.location).toString();}};/* harmony default export */ var exports_Linking = (Linking);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/NativeEventEmitter/index.js
var NativeEventEmitter = __webpack_require__(76);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/PanResponder/index.js + 2 modules
var PanResponder = __webpack_require__(79);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/PixelRatio/index.js
var PixelRatio = __webpack_require__(47);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Share/index.js
function Share_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function Share_createClass(Constructor,protoProps,staticProps){if(protoProps)Share_defineProperties(Constructor.prototype,protoProps);if(staticProps)Share_defineProperties(Constructor,staticProps);return Constructor;}var Share_Share=function(){function Share(){}Share.share=function share(content,options){if(options===void 0){options={};}invariant_default()(typeof content==='object'&&content!==null,'Content to share must be a valid object');invariant_default()(typeof content.url==='string'||typeof content.message==='string','At least one of URL and message is required');invariant_default()(typeof options==='object'&&options!==null,'Options must be a valid object');invariant_default()(!content.title||typeof content.title==='string','Invalid title: title should be a string.');if(window.navigator.share!==undefined){return window.navigator.share({title:content.title,text:content.message,url:content.url});}else{return Promise.reject(new Error('Share is not supported in this browser'));}};Share_createClass(Share,null,[{key:"sharedAction",get:function get(){return'sharedAction';}},{key:"dismissedAction",get:function get(){return'dismissedAction';}}]);return Share;}();/* harmony default export */ var exports_Share = (Share_Share);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StyleSheet/index.js + 1 modules
var StyleSheet = __webpack_require__(4);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Vibration/index.js
var _vibrate=function vibrate(pattern){if('vibrate'in window.navigator){window.navigator.vibrate(pattern);}};var Vibration={cancel:function cancel(){_vibrate(0);},vibrate:function vibrate(pattern){if(pattern===void 0){pattern=400;}_vibrate(pattern);}};/* harmony default export */ var exports_Vibration = (Vibration);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__(3);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/ActivityIndicator/index.js
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var accessibilityValue={max:1,min:0};var ActivityIndicator_createSvgCircle=function createSvgCircle(style){return react_default.a.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:style});};var ActivityIndicator=Object(react["forwardRef"])(function(props,forwardedRef){var _props$animating=props.animating,animating=_props$animating===void 0?true:_props$animating,_props$color=props.color,color=_props$color===void 0?'#1976D2':_props$color,_props$hidesWhenStopp=props.hidesWhenStopped,hidesWhenStopped=_props$hidesWhenStopp===void 0?true:_props$hidesWhenStopp,_props$size=props.size,size=_props$size===void 0?'small':_props$size,style=props.style,other=_objectWithoutPropertiesLoose(props,["animating","color","hidesWhenStopped","size","style"]);var svg=react_default.a.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},ActivityIndicator_createSvgCircle({stroke:color,opacity:0.2}),ActivityIndicator_createSvgCircle({stroke:color,strokeDasharray:80,strokeDashoffset:60}));return react_default.a.createElement(View["a" /* default */],_extends({},other,{accessibilityRole:"progressbar",accessibilityValue:accessibilityValue,ref:forwardedRef,style:[styles.container,style]}),react_default.a.createElement(View["a" /* default */],{children:svg,style:[typeof size==='number'?{height:size,width:size}:indicatorSizes[size],styles.animation,!animating&&styles.animationPause,!animating&&hidesWhenStopped&&styles.hidesWhenStopped]}));});ActivityIndicator.displayName='ActivityIndicator';var styles=StyleSheet["a" /* default */].create({container:{alignItems:'center',justifyContent:'center'},hidesWhenStopped:{visibility:'hidden'},animation:{animationDuration:'0.75s',animationKeyframes:[{'0%':{transform:[{rotate:'0deg'}]},'100%':{transform:[{rotate:'360deg'}]}}],animationTimingFunction:'linear',animationIterationCount:'infinite'},animationPause:{animationPlayState:'paused'}});var indicatorSizes=StyleSheet["a" /* default */].create({small:{width:20,height:20},large:{width:36,height:36}});/* harmony default export */ var exports_ActivityIndicator = (ActivityIndicator);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/TouchableOpacity/index.js
var TouchableOpacity = __webpack_require__(59);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Text/index.js
var Text = __webpack_require__(30);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Button/index.js
var Button=react["forwardRef"](function(props,forwardedRef){var accessibilityLabel=props.accessibilityLabel,color=props.color,disabled=props.disabled,onPress=props.onPress,testID=props.testID,title=props.title;return react["createElement"](TouchableOpacity["a" /* default */],{accessibilityLabel:accessibilityLabel,accessibilityRole:"button",disabled:disabled,onPress:onPress,ref:forwardedRef,style:[Button_styles.button,color&&{backgroundColor:color},disabled&&Button_styles.buttonDisabled],testID:testID},react["createElement"](Text["a" /* default */],{style:[Button_styles.text,disabled&&Button_styles.textDisabled]},title));});Button.displayName='Button';var Button_styles=StyleSheet["a" /* default */].create({button:{backgroundColor:'#2196F3',borderRadius:2},text:{color:'#fff',fontWeight:'500',padding:8,textAlign:'center',textTransform:'uppercase'},buttonDisabled:{backgroundColor:'#dfdfdf'},textDisabled:{color:'#a1a1a1'}});/* harmony default export */ var exports_Button = (Button);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/CheckBox/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function CheckBox_extends(){CheckBox_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return CheckBox_extends.apply(this,arguments);}function CheckBox_objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var CheckBox=Object(react["forwardRef"])(function(props,forwardedRef){var color=props.color,disabled=props.disabled,onChange=props.onChange,onValueChange=props.onValueChange,style=props.style,value=props.value,other=CheckBox_objectWithoutPropertiesLoose(props,["color","disabled","onChange","onValueChange","style","value"]);function handleChange(event){var value=event.nativeEvent.target.checked;event.nativeEvent.value=value;onChange&&onChange(event);onValueChange&&onValueChange(value);}var fakeControl=react["createElement"](View["a" /* default */],{style:[CheckBox_styles.fakeControl,value&&CheckBox_styles.fakeControlChecked,value&&color&&{backgroundColor:color,borderColor:color},disabled&&CheckBox_styles.fakeControlDisabled,value&&disabled&&CheckBox_styles.fakeControlCheckedAndDisabled]});var nativeControl=Object(createElement["a" /* default */])('input',{checked:value,disabled:disabled,onChange:handleChange,ref:forwardedRef,style:[CheckBox_styles.nativeControl,CheckBox_styles.cursorInherit],type:'checkbox'});return react["createElement"](View["a" /* default */],CheckBox_extends({},other,{style:[CheckBox_styles.root,style,disabled&&CheckBox_styles.cursorDefault]}),fakeControl,nativeControl);});CheckBox.displayName='CheckBox';var CheckBox_styles=StyleSheet["a" /* default */].create({root:{cursor:'pointer',height:16,userSelect:'none',width:16},cursorDefault:{cursor:'default'},cursorInherit:{cursor:'inherit'},fakeControl:{alignItems:'center',backgroundColor:'#fff',borderColor:'#657786',borderRadius:2,borderStyle:'solid',borderWidth:2,height:'100%',justifyContent:'center',width:'100%'},fakeControlChecked:{backgroundColor:'#009688',backgroundImage:'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")',backgroundRepeat:'no-repeat',borderColor:'#009688'},fakeControlDisabled:{borderColor:'#CCD6DD'},fakeControlCheckedAndDisabled:{backgroundColor:'#AAB8C2',borderColor:'#AAB8C2'},nativeControl:_objectSpread({},StyleSheet["a" /* default */].absoluteFillObject,{height:'100%',margin:0,opacity:0,padding:0,width:'100%'})});/* harmony default export */ var exports_CheckBox = (CheckBox);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/FlatList/index.js + 2 modules
var FlatList = __webpack_require__(80);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Image/index.js + 1 modules
var Image = __webpack_require__(37);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/ImageBackground/index.js
function ImageBackground_extends(){ImageBackground_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return ImageBackground_extends.apply(this,arguments);}function ImageBackground_objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var emptyObject={};var ImageBackground=Object(react["forwardRef"])(function(props,forwardedRef){var children=props.children,_props$style=props.style,style=_props$style===void 0?emptyObject:_props$style,imageStyle=props.imageStyle,imageRef=props.imageRef,rest=ImageBackground_objectWithoutPropertiesLoose(props,["children","style","imageStyle","imageRef"]);var _StyleSheet$flatten=StyleSheet["a" /* default */].flatten(style),height=_StyleSheet$flatten.height,width=_StyleSheet$flatten.width;return react["createElement"](View["a" /* default */],{ref:forwardedRef,style:style},react["createElement"](Image["a" /* default */],ImageBackground_extends({},rest,{ref:imageRef,style:[StyleSheet["a" /* default */].absoluteFill,{width:width,height:height,zIndex:-1},imageStyle]})),children);});ImageBackground.displayName='ImageBackground';/* harmony default export */ var exports_ImageBackground = (ImageBackground);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/KeyboardAvoidingView/index.js
function KeyboardAvoidingView_extends(){KeyboardAvoidingView_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return KeyboardAvoidingView_extends.apply(this,arguments);}function KeyboardAvoidingView_objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var KeyboardAvoidingView_KeyboardAvoidingView=function(_React$Component){_inheritsLoose(KeyboardAvoidingView,_React$Component);function KeyboardAvoidingView(){var _this;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this;_this.frame=null;_this.onLayout=function(event){_this.frame=event.nativeEvent.layout;};return _this;}var _proto=KeyboardAvoidingView.prototype;_proto.relativeKeyboardHeight=function relativeKeyboardHeight(keyboardFrame){var frame=this.frame;if(!frame||!keyboardFrame){return 0;}var keyboardY=keyboardFrame.screenY-(this.props.keyboardVerticalOffset||0);return Math.max(frame.y+frame.height-keyboardY,0);};_proto.onKeyboardChange=function onKeyboardChange(event){};_proto.render=function render(){var _this$props=this.props,behavior=_this$props.behavior,contentContainerStyle=_this$props.contentContainerStyle,keyboardVerticalOffset=_this$props.keyboardVerticalOffset,rest=KeyboardAvoidingView_objectWithoutPropertiesLoose(_this$props,["behavior","contentContainerStyle","keyboardVerticalOffset"]);return react_default.a.createElement(View["a" /* default */],KeyboardAvoidingView_extends({onLayout:this.onLayout},rest));};return KeyboardAvoidingView;}(react_default.a.Component);/* harmony default export */ var exports_KeyboardAvoidingView = (KeyboardAvoidingView_KeyboardAvoidingView);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/UnimplementedView/index.js
function UnimplementedView_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var UnimplementedView_UnimplementedView=function(_React$Component){UnimplementedView_inheritsLoose(UnimplementedView,_React$Component);function UnimplementedView(){return _React$Component.apply(this,arguments)||this;}var _proto=UnimplementedView.prototype;_proto.setNativeProps=function setNativeProps(){};_proto.render=function render(){return react_default.a.createElement(View["a" /* default */],{style:[unimplementedViewStyles,this.props.style]},this.props.children);};return UnimplementedView;}(react_default.a.Component);var unimplementedViewStyles= false?undefined:{};/* harmony default export */ var modules_UnimplementedView = (UnimplementedView_UnimplementedView);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Modal/index.js
/* harmony default export */ var Modal = (modules_UnimplementedView);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/useMergeRefs/index.js
var useMergeRefs = __webpack_require__(22);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/hooks/usePlatformMethods.js
var usePlatformMethods = __webpack_require__(39);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Picker/PickerItem.js
function PickerItem(props){var color=props.color,label=props.label,testID=props.testID,value=props.value;var style={color:color};return Object(createElement["a" /* default */])('option',{style:style,testID:testID,value:value},label);}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Picker/index.js
function Picker_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function Picker_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){Picker_ownKeys(Object(source),true).forEach(function(key){Picker_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{Picker_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function Picker_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function Picker_objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var Picker=Object(react["forwardRef"])(function(props,forwardedRef){var children=props.children,enabled=props.enabled,onValueChange=props.onValueChange,selectedValue=props.selectedValue,style=props.style,testID=props.testID,itemStyle=props.itemStyle,mode=props.mode,prompt=props.prompt,other=Picker_objectWithoutPropertiesLoose(props,["children","enabled","onValueChange","selectedValue","style","testID","itemStyle","mode","prompt"]);var hostRef=Object(react["useRef"])(null);function handleChange(e){var _e$target=e.target,selectedIndex=_e$target.selectedIndex,value=_e$target.value;if(onValueChange){onValueChange(value,selectedIndex);}}var supportedProps=Picker_objectSpread({children:children,disabled:enabled===false?true:undefined,onChange:handleChange,style:[Picker_styles.initial,style],testID:testID,value:selectedValue},other);var platformMethodsRef=Object(usePlatformMethods["a" /* default */])(supportedProps);var setRef=Object(useMergeRefs["a" /* default */])(hostRef,platformMethodsRef,forwardedRef);supportedProps.ref=setRef;return Object(createElement["a" /* default */])('select',supportedProps);});Picker.Item=PickerItem;var Picker_styles=StyleSheet["a" /* default */].create({initial:{fontFamily:'System',fontSize:'inherit',margin:0}});/* harmony default export */ var exports_Picker = (Picker);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/hooks/usePressEvents/index.js + 1 modules
var usePressEvents = __webpack_require__(40);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Pressable/index.js
function Pressable_extends(){Pressable_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return Pressable_extends.apply(this,arguments);}function Pressable_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function Pressable_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){Pressable_ownKeys(Object(source),true).forEach(function(key){Pressable_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{Pressable_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function Pressable_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function Pressable_objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function Pressable(props,forwardedRef){var accessible=props.accessible,children=props.children,delayLongPress=props.delayLongPress,delayPressIn=props.delayPressIn,delayPressOut=props.delayPressOut,disabled=props.disabled,focusable=props.focusable,onBlur=props.onBlur,onFocus=props.onFocus,onLongPress=props.onLongPress,onPress=props.onPress,onPressMove=props.onPressMove,onPressIn=props.onPressIn,onPressOut=props.onPressOut,style=props.style,testOnly_pressed=props.testOnly_pressed,rest=Pressable_objectWithoutPropertiesLoose(props,["accessible","children","delayLongPress","delayPressIn","delayPressOut","disabled","focusable","onBlur","onFocus","onLongPress","onPress","onPressMove","onPressIn","onPressOut","style","testOnly_pressed"]);var _useForceableState=useForceableState(false),focused=_useForceableState[0],setFocused=_useForceableState[1];var _useForceableState2=useForceableState(testOnly_pressed===true),pressed=_useForceableState2[0],setPressed=_useForceableState2[1];var hostRef=Object(react["useRef"])(null);var setRef=Object(useMergeRefs["a" /* default */])(forwardedRef,hostRef);var pressConfig=Object(react["useMemo"])(function(){return{delayLongPress:delayLongPress,delayPressStart:delayPressIn,delayPressEnd:delayPressOut,disabled:disabled,onLongPress:onLongPress,onPress:onPress,onPressChange:setPressed,onPressStart:onPressIn,onPressMove:onPressMove,onPressEnd:onPressOut};},[delayLongPress,delayPressIn,delayPressOut,disabled,onLongPress,onPress,onPressIn,onPressMove,onPressOut,setPressed]);var pressEventHandlers=Object(usePressEvents["a" /* default */])(hostRef,pressConfig);var accessibilityState=Pressable_objectSpread({disabled:disabled},props.accessibilityState);var interactionState={focused:focused,pressed:pressed};function createFocusHandler(callback,value){return function(event){if(event.nativeEvent.target===hostRef.current){setFocused(value);if(callback!=null){callback(event);}}};}return react["createElement"](View["a" /* default */],Pressable_extends({},rest,pressEventHandlers,{accessibilityState:accessibilityState,accessible:accessible!==false,focusable:focusable!==false,onBlur:createFocusHandler(onBlur,false),onFocus:createFocusHandler(onFocus,true),ref:setRef,style:typeof style==='function'?style(interactionState):style}),typeof children==='function'?children(interactionState):children);}function useForceableState(forced){var _useState=Object(react["useState"])(false),pressed=_useState[0],setPressed=_useState[1];return[pressed||forced,setPressed];}var MemoedPressable=Object(react["memo"])(Object(react["forwardRef"])(Pressable));MemoedPressable.displayName='Pressable';/* harmony default export */ var exports_Pressable = (MemoedPressable);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/ProgressBar/index.js
function ProgressBar_extends(){ProgressBar_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return ProgressBar_extends.apply(this,arguments);}function ProgressBar_objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var ProgressBar=Object(react["forwardRef"])(function(props,ref){var _props$color=props.color,color=_props$color===void 0?'#1976D2':_props$color,_props$indeterminate=props.indeterminate,indeterminate=_props$indeterminate===void 0?false:_props$indeterminate,_props$progress=props.progress,progress=_props$progress===void 0?0:_props$progress,_props$trackColor=props.trackColor,trackColor=_props$trackColor===void 0?'transparent':_props$trackColor,style=props.style,other=ProgressBar_objectWithoutPropertiesLoose(props,["color","indeterminate","progress","trackColor","style"]);var percentageProgress=progress*100;var progressRef=Object(react["useRef"])(null);Object(react["useEffect"])(function(){var width=indeterminate?'25%':percentageProgress+"%";if(progressRef.current!=null){progressRef.current.setNativeProps({style:{width:width}});}},[indeterminate,percentageProgress,progressRef]);return react_default.a.createElement(View["a" /* default */],ProgressBar_extends({},other,{accessibilityRole:"progressbar",accessibilityValue:{max:100,min:0,now:indeterminate?null:percentageProgress},ref:ref,style:[ProgressBar_styles.track,style,{backgroundColor:trackColor}]}),react_default.a.createElement(View["a" /* default */],{ref:progressRef,style:[ProgressBar_styles.progress,indeterminate&&ProgressBar_styles.animation,{backgroundColor:color}]}));});ProgressBar.displayName='ProgressBar';var ProgressBar_styles=StyleSheet["a" /* default */].create({track:{height:5,overflow:'hidden',userSelect:'none',zIndex:0},progress:{height:'100%',zIndex:-1},animation:{animationDuration:'1s',animationKeyframes:[{'0%':{transform:[{translateX:'-100%'}]},'100%':{transform:[{translateX:'400%'}]}}],animationTimingFunction:'linear',animationIterationCount:'infinite'}});/* harmony default export */ var exports_ProgressBar = (ProgressBar);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/RefreshControl/index.js
var RefreshControl = __webpack_require__(75);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/SafeAreaView/index.js
function SafeAreaView_extends(){SafeAreaView_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return SafeAreaView_extends.apply(this,arguments);}function SafeAreaView_objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var cssFunction=function(){if(ExecutionEnvironment["canUseDOM"]&&window.CSS&&window.CSS.supports&&window.CSS.supports('top: constant(safe-area-inset-top)')){return'constant';}return'env';}();var SafeAreaView=Object(react["forwardRef"])(function(props,ref){var style=props.style,rest=SafeAreaView_objectWithoutPropertiesLoose(props,["style"]);return react_default.a.createElement(View["a" /* default */],SafeAreaView_extends({},rest,{ref:ref,style:StyleSheet["a" /* default */].compose(SafeAreaView_styles.root,style)}));});SafeAreaView.displayName='SafeAreaView';var SafeAreaView_styles=StyleSheet["a" /* default */].create({root:{paddingTop:cssFunction+"(safe-area-inset-top)",paddingRight:cssFunction+"(safe-area-inset-right)",paddingBottom:cssFunction+"(safe-area-inset-bottom)",paddingLeft:cssFunction+"(safe-area-inset-left)"}});/* harmony default export */ var exports_SafeAreaView = (SafeAreaView);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/ScrollView/index.js + 2 modules
var ScrollView = __webpack_require__(36);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/SectionList/index.js + 2 modules
var SectionList = __webpack_require__(81);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StatusBar/index.js
var StatusBar = __webpack_require__(27);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js
var multiplyStyleLengthValue = __webpack_require__(56);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Switch/index.js
function Switch_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function Switch_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){Switch_ownKeys(Object(source),true).forEach(function(key){Switch_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{Switch_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function Switch_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function Switch_extends(){Switch_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return Switch_extends.apply(this,arguments);}function Switch_objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var Switch_emptyObject={};var thumbDefaultBoxShadow='0px 1px 3px rgba(0,0,0,0.5)';var thumbFocusedBoxShadow=thumbDefaultBoxShadow+", 0 0 0 10px rgba(0,0,0,0.1)";var Switch=Object(react["forwardRef"])(function(props,forwardedRef){var accessibilityLabel=props.accessibilityLabel,_props$activeThumbCol=props.activeThumbColor,activeThumbColor=_props$activeThumbCol===void 0?'#009688':_props$activeThumbCol,_props$activeTrackCol=props.activeTrackColor,activeTrackColor=_props$activeTrackCol===void 0?'#A3D3CF':_props$activeTrackCol,_props$disabled=props.disabled,disabled=_props$disabled===void 0?false:_props$disabled,onValueChange=props.onValueChange,_props$style=props.style,style=_props$style===void 0?Switch_emptyObject:_props$style,_props$thumbColor=props.thumbColor,thumbColor=_props$thumbColor===void 0?'#FAFAFA':_props$thumbColor,_props$trackColor=props.trackColor,trackColor=_props$trackColor===void 0?'#939393':_props$trackColor,_props$value=props.value,value=_props$value===void 0?false:_props$value,other=Switch_objectWithoutPropertiesLoose(props,["accessibilityLabel","activeThumbColor","activeTrackColor","disabled","onValueChange","style","thumbColor","trackColor","value"]);var thumbRef=Object(react["useRef"])(null);function handleChange(event){if(onValueChange!=null){onValueChange(event.nativeEvent.target.checked);}}function handleFocusState(event){var isFocused=event.nativeEvent.type==='focus';var boxShadow=isFocused?thumbFocusedBoxShadow:thumbDefaultBoxShadow;if(thumbRef.current!=null){thumbRef.current.style.boxShadow=boxShadow;}}var _StyleSheet$flatten=StyleSheet["a" /* default */].flatten(style),styleHeight=_StyleSheet$flatten.height,styleWidth=_StyleSheet$flatten.width;var height=styleHeight||20;var minWidth=Object(multiplyStyleLengthValue["a" /* default */])(height,2);var width=styleWidth>minWidth?styleWidth:minWidth;var trackBorderRadius=Object(multiplyStyleLengthValue["a" /* default */])(height,0.5);var trackCurrentColor=function(){if(value===true){if(trackColor!=null&&typeof trackColor==='object'){return trackColor.true;}else{return activeTrackColor;}}else{if(trackColor!=null&&typeof trackColor==='object'){return trackColor.false;}else{return trackColor;}}}();var thumbCurrentColor=value?activeThumbColor:thumbColor;var thumbHeight=height;var thumbWidth=thumbHeight;var rootStyle=[Switch_styles.root,style,disabled&&Switch_styles.cursorDefault,{height:height,width:width}];var trackStyle=[Switch_styles.track,{backgroundColor:disabled?'#D5D5D5':trackCurrentColor,borderRadius:trackBorderRadius}];var thumbStyle=[Switch_styles.thumb,value&&Switch_styles.thumbActive,{backgroundColor:disabled?'#BDBDBD':thumbCurrentColor,height:thumbHeight,marginStart:value?Object(multiplyStyleLengthValue["a" /* default */])(thumbWidth,-1):0,width:thumbWidth}];var nativeControl=Object(createElement["a" /* default */])('input',{accessibilityLabel:accessibilityLabel,checked:value,disabled:disabled,onBlur:handleFocusState,onChange:handleChange,onFocus:handleFocusState,ref:forwardedRef,style:[Switch_styles.nativeControl,Switch_styles.cursorInherit],type:'checkbox'});return react["createElement"](View["a" /* default */],Switch_extends({},other,{style:rootStyle}),react["createElement"](View["a" /* default */],{style:trackStyle}),react["createElement"](View["a" /* default */],{ref:thumbRef,style:thumbStyle}),nativeControl);});Switch.displayName='Switch';var Switch_styles=StyleSheet["a" /* default */].create({root:{cursor:'pointer',userSelect:'none'},cursorDefault:{cursor:'default'},cursorInherit:{cursor:'inherit'},track:Switch_objectSpread({},StyleSheet["a" /* default */].absoluteFillObject,{height:'70%',margin:'auto',transitionDuration:'0.1s',width:'100%'}),thumb:{alignSelf:'flex-start',borderRadius:'100%',boxShadow:thumbDefaultBoxShadow,start:'0%',transform:[{translateZ:0}],transitionDuration:'0.1s'},thumbActive:{start:'100%'},nativeControl:Switch_objectSpread({},StyleSheet["a" /* default */].absoluteFillObject,{height:'100%',margin:0,opacity:0,padding:0,width:'100%'})});/* harmony default export */ var exports_Switch = (Switch);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/TextInput/index.js
var TextInput = __webpack_require__(97);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js + 4 modules
var AccessibilityUtil = __webpack_require__(54);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/PooledClass/index.js
var twoArgumentPooler=function twoArgumentPooler(a1,a2){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2);return instance;}else{return new Klass(a1,a2);}};var standardReleaser=function standardReleaser(instance){var Klass=this;instance.destructor();if(Klass.instancePool.length<Klass.poolSize){Klass.instancePool.push(instance);}};var DEFAULT_POOL_SIZE=10;var DEFAULT_POOLER=twoArgumentPooler;var addPoolingTo=function addPoolingTo(CopyConstructor,pooler){var NewKlass=CopyConstructor;NewKlass.instancePool=[];NewKlass.getPooled=pooler||DEFAULT_POOLER;if(!NewKlass.poolSize){NewKlass.poolSize=DEFAULT_POOL_SIZE;}NewKlass.release=standardReleaser;return NewKlass;};var PooledClass={addPoolingTo:addPoolingTo,twoArgumentPooler:twoArgumentPooler};/* harmony default export */ var react_native_PooledClass = (PooledClass);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Touchable/BoundingDimensions.js
var BoundingDimensions_twoArgumentPooler=react_native_PooledClass.twoArgumentPooler;function BoundingDimensions(width,height){this.width=width;this.height=height;}BoundingDimensions.prototype.destructor=function(){this.width=null;this.height=null;};BoundingDimensions.getPooledFromElement=function(element){return BoundingDimensions.getPooled(element.offsetWidth,element.offsetHeight);};react_native_PooledClass.addPoolingTo(BoundingDimensions,BoundingDimensions_twoArgumentPooler);/* harmony default export */ var Touchable_BoundingDimensions = (BoundingDimensions);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/normalize-css-color/index.js
var normalize_css_color = __webpack_require__(48);
var normalize_css_color_default = /*#__PURE__*/__webpack_require__.n(normalize_css_color);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Touchable/Position.js
var Position_twoArgumentPooler=react_native_PooledClass.twoArgumentPooler;function Position(left,top){this.left=left;this.top=top;}Position.prototype.destructor=function(){this.left=null;this.top=null;};react_native_PooledClass.addPoolingTo(Position,Position_twoArgumentPooler);/* harmony default export */ var Touchable_Position = (Position);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Touchable/index.js
function Touchable_objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function Touchable_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function Touchable_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){Touchable_ownKeys(Object(source),true).forEach(function(key){Touchable_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{Touchable_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function Touchable_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var extractSingleTouch=function extractSingleTouch(nativeEvent){var touches=nativeEvent.touches;var changedTouches=nativeEvent.changedTouches;var hasTouches=touches&&touches.length>0;var hasChangedTouches=changedTouches&&changedTouches.length>0;return!hasTouches&&hasChangedTouches?changedTouches[0]:hasTouches?touches[0]:nativeEvent;};var States={NOT_RESPONDER:'NOT_RESPONDER',RESPONDER_INACTIVE_PRESS_IN:'RESPONDER_INACTIVE_PRESS_IN',RESPONDER_INACTIVE_PRESS_OUT:'RESPONDER_INACTIVE_PRESS_OUT',RESPONDER_ACTIVE_PRESS_IN:'RESPONDER_ACTIVE_PRESS_IN',RESPONDER_ACTIVE_PRESS_OUT:'RESPONDER_ACTIVE_PRESS_OUT',RESPONDER_ACTIVE_LONG_PRESS_IN:'RESPONDER_ACTIVE_LONG_PRESS_IN',RESPONDER_ACTIVE_LONG_PRESS_OUT:'RESPONDER_ACTIVE_LONG_PRESS_OUT',ERROR:'ERROR'};var baseStatesConditions={NOT_RESPONDER:false,RESPONDER_INACTIVE_PRESS_IN:false,RESPONDER_INACTIVE_PRESS_OUT:false,RESPONDER_ACTIVE_PRESS_IN:false,RESPONDER_ACTIVE_PRESS_OUT:false,RESPONDER_ACTIVE_LONG_PRESS_IN:false,RESPONDER_ACTIVE_LONG_PRESS_OUT:false,ERROR:false};var IsActive=Touchable_objectSpread({},baseStatesConditions,{RESPONDER_ACTIVE_PRESS_OUT:true,RESPONDER_ACTIVE_PRESS_IN:true});var IsPressingIn=Touchable_objectSpread({},baseStatesConditions,{RESPONDER_INACTIVE_PRESS_IN:true,RESPONDER_ACTIVE_PRESS_IN:true,RESPONDER_ACTIVE_LONG_PRESS_IN:true});var IsLongPressingIn=Touchable_objectSpread({},baseStatesConditions,{RESPONDER_ACTIVE_LONG_PRESS_IN:true});var Signals={DELAY:'DELAY',RESPONDER_GRANT:'RESPONDER_GRANT',RESPONDER_RELEASE:'RESPONDER_RELEASE',RESPONDER_TERMINATED:'RESPONDER_TERMINATED',ENTER_PRESS_RECT:'ENTER_PRESS_RECT',LEAVE_PRESS_RECT:'LEAVE_PRESS_RECT',LONG_PRESS_DETECTED:'LONG_PRESS_DETECTED'};var Transitions={NOT_RESPONDER:{DELAY:States.ERROR,RESPONDER_GRANT:States.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:States.ERROR,RESPONDER_TERMINATED:States.ERROR,ENTER_PRESS_RECT:States.ERROR,LEAVE_PRESS_RECT:States.ERROR,LONG_PRESS_DETECTED:States.ERROR},RESPONDER_INACTIVE_PRESS_IN:{DELAY:States.RESPONDER_ACTIVE_PRESS_IN,RESPONDER_GRANT:States.ERROR,RESPONDER_RELEASE:States.NOT_RESPONDER,RESPONDER_TERMINATED:States.NOT_RESPONDER,ENTER_PRESS_RECT:States.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:States.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:States.ERROR},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:States.RESPONDER_ACTIVE_PRESS_OUT,RESPONDER_GRANT:States.ERROR,RESPONDER_RELEASE:States.NOT_RESPONDER,RESPONDER_TERMINATED:States.NOT_RESPONDER,ENTER_PRESS_RECT:States.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:States.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:States.ERROR},RESPONDER_ACTIVE_PRESS_IN:{DELAY:States.ERROR,RESPONDER_GRANT:States.ERROR,RESPONDER_RELEASE:States.NOT_RESPONDER,RESPONDER_TERMINATED:States.NOT_RESPONDER,ENTER_PRESS_RECT:States.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:States.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:States.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:States.ERROR,RESPONDER_GRANT:States.ERROR,RESPONDER_RELEASE:States.NOT_RESPONDER,RESPONDER_TERMINATED:States.NOT_RESPONDER,ENTER_PRESS_RECT:States.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:States.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:States.ERROR},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:States.ERROR,RESPONDER_GRANT:States.ERROR,RESPONDER_RELEASE:States.NOT_RESPONDER,RESPONDER_TERMINATED:States.NOT_RESPONDER,ENTER_PRESS_RECT:States.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:States.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:States.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:States.ERROR,RESPONDER_GRANT:States.ERROR,RESPONDER_RELEASE:States.NOT_RESPONDER,RESPONDER_TERMINATED:States.NOT_RESPONDER,ENTER_PRESS_RECT:States.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:States.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:States.ERROR},error:{DELAY:States.NOT_RESPONDER,RESPONDER_GRANT:States.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:States.NOT_RESPONDER,RESPONDER_TERMINATED:States.NOT_RESPONDER,ENTER_PRESS_RECT:States.NOT_RESPONDER,LEAVE_PRESS_RECT:States.NOT_RESPONDER,LONG_PRESS_DETECTED:States.NOT_RESPONDER}};var HIGHLIGHT_DELAY_MS=130;var PRESS_EXPAND_PX=20;var LONG_PRESS_THRESHOLD=500;var LONG_PRESS_DELAY_MS=LONG_PRESS_THRESHOLD-HIGHLIGHT_DELAY_MS;var LONG_PRESS_ALLOWED_MOVEMENT=10;var TouchableMixin={componentDidMount:function componentDidMount(){var _this=this;this._touchableNode=Object(findNodeHandle["a" /* default */])(this);if(this._touchableNode&&this._touchableNode.addEventListener){this._touchableBlurListener=function(e){if(_this._isTouchableKeyboardActive){if(_this.state.touchable.touchState&&_this.state.touchable.touchState!==States.NOT_RESPONDER){_this.touchableHandleResponderTerminate({nativeEvent:e});}_this._isTouchableKeyboardActive=false;}};this._touchableNode.addEventListener('blur',this._touchableBlurListener);}},componentWillUnmount:function componentWillUnmount(){if(this._touchableNode&&this._touchableNode.addEventListener){this._touchableNode.removeEventListener('blur',this._touchableBlurListener);}this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout);this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout);this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout);},touchableGetInitialState:function touchableGetInitialState(){return{touchable:{touchState:undefined,responderID:null}};},touchableHandleResponderTerminationRequest:function touchableHandleResponderTerminationRequest(){return!this.props.rejectResponderTermination;},touchableHandleStartShouldSetResponder:function touchableHandleStartShouldSetResponder(){return!this.props.disabled;},touchableLongPressCancelsPress:function touchableLongPressCancelsPress(){return true;},touchableHandleResponderGrant:function touchableHandleResponderGrant(e){var dispatchID=e.currentTarget;e.persist();this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout);this.pressOutDelayTimeout=null;this.state.touchable.touchState=States.NOT_RESPONDER;this.state.touchable.responderID=dispatchID;this._receiveSignal(Signals.RESPONDER_GRANT,e);var delayMS=this.touchableGetHighlightDelayMS!==undefined?Math.max(this.touchableGetHighlightDelayMS(),0):HIGHLIGHT_DELAY_MS;delayMS=isNaN(delayMS)?HIGHLIGHT_DELAY_MS:delayMS;if(delayMS!==0){this.touchableDelayTimeout=setTimeout(this._handleDelay.bind(this,e),delayMS);}else{this._handleDelay(e);}var longDelayMS=this.touchableGetLongPressDelayMS!==undefined?Math.max(this.touchableGetLongPressDelayMS(),10):LONG_PRESS_DELAY_MS;longDelayMS=isNaN(longDelayMS)?LONG_PRESS_DELAY_MS:longDelayMS;this.longPressDelayTimeout=setTimeout(this._handleLongDelay.bind(this,e),longDelayMS+delayMS);},touchableHandleResponderRelease:function touchableHandleResponderRelease(e){this.pressInLocation=null;this._receiveSignal(Signals.RESPONDER_RELEASE,e);},touchableHandleResponderTerminate:function touchableHandleResponderTerminate(e){this.pressInLocation=null;this._receiveSignal(Signals.RESPONDER_TERMINATED,e);},touchableHandleResponderMove:function touchableHandleResponderMove(e){if(!this.state.touchable.positionOnActivate){return;}var positionOnActivate=this.state.touchable.positionOnActivate;var dimensionsOnActivate=this.state.touchable.dimensionsOnActivate;var pressRectOffset=this.touchableGetPressRectOffset?this.touchableGetPressRectOffset():{left:PRESS_EXPAND_PX,right:PRESS_EXPAND_PX,top:PRESS_EXPAND_PX,bottom:PRESS_EXPAND_PX};var pressExpandLeft=pressRectOffset.left;var pressExpandTop=pressRectOffset.top;var pressExpandRight=pressRectOffset.right;var pressExpandBottom=pressRectOffset.bottom;var hitSlop=this.touchableGetHitSlop?this.touchableGetHitSlop():null;if(hitSlop){pressExpandLeft+=hitSlop.left||0;pressExpandTop+=hitSlop.top||0;pressExpandRight+=hitSlop.right||0;pressExpandBottom+=hitSlop.bottom||0;}var touch=extractSingleTouch(e.nativeEvent);var pageX=touch&&touch.pageX;var pageY=touch&&touch.pageY;if(this.pressInLocation){var movedDistance=this._getDistanceBetweenPoints(pageX,pageY,this.pressInLocation.pageX,this.pressInLocation.pageY);if(movedDistance>LONG_PRESS_ALLOWED_MOVEMENT){this._cancelLongPressDelayTimeout();}}var isTouchWithinActive=pageX>positionOnActivate.left-pressExpandLeft&&pageY>positionOnActivate.top-pressExpandTop&&pageX<positionOnActivate.left+dimensionsOnActivate.width+pressExpandRight&&pageY<positionOnActivate.top+dimensionsOnActivate.height+pressExpandBottom;if(isTouchWithinActive){var prevState=this.state.touchable.touchState;this._receiveSignal(Signals.ENTER_PRESS_RECT,e);var curState=this.state.touchable.touchState;if(curState===States.RESPONDER_INACTIVE_PRESS_IN&&prevState!==States.RESPONDER_INACTIVE_PRESS_IN){this._cancelLongPressDelayTimeout();}}else{this._cancelLongPressDelayTimeout();this._receiveSignal(Signals.LEAVE_PRESS_RECT,e);}},touchableHandleFocus:function touchableHandleFocus(e){this.props.onFocus&&this.props.onFocus(e);},touchableHandleBlur:function touchableHandleBlur(e){this.props.onBlur&&this.props.onBlur(e);},_remeasureMetricsOnActivation:function _remeasureMetricsOnActivation(){var tag=this.state.touchable.responderID;if(tag==null){return;}UIManager["a" /* default */].measure(tag,this._handleQueryLayout);},_handleQueryLayout:function _handleQueryLayout(l,t,w,h,globalX,globalY){if(!l&&!t&&!w&&!h&&!globalX&&!globalY){return;}this.state.touchable.positionOnActivate&&Touchable_Position.release(this.state.touchable.positionOnActivate);this.state.touchable.dimensionsOnActivate&&Touchable_BoundingDimensions.release(this.state.touchable.dimensionsOnActivate);this.state.touchable.positionOnActivate=Touchable_Position.getPooled(globalX,globalY);this.state.touchable.dimensionsOnActivate=Touchable_BoundingDimensions.getPooled(w,h);},_handleDelay:function _handleDelay(e){this.touchableDelayTimeout=null;this._receiveSignal(Signals.DELAY,e);},_handleLongDelay:function _handleLongDelay(e){this.longPressDelayTimeout=null;var curState=this.state.touchable.touchState;if(curState!==States.RESPONDER_ACTIVE_PRESS_IN&&curState!==States.RESPONDER_ACTIVE_LONG_PRESS_IN){console.error('Attempted to transition from state `'+curState+'` to `'+States.RESPONDER_ACTIVE_LONG_PRESS_IN+'`, which is not supported. This is '+'most likely due to `Touchable.longPressDelayTimeout` not being cancelled.');}else{this._receiveSignal(Signals.LONG_PRESS_DETECTED,e);}},_receiveSignal:function _receiveSignal(signal,e){var responderID=this.state.touchable.responderID;var curState=this.state.touchable.touchState;var nextState=Transitions[curState]&&Transitions[curState][signal];if(!responderID&&signal===Signals.RESPONDER_RELEASE){return;}if(!nextState){throw new Error('Unrecognized signal `'+signal+'` or state `'+curState+'` for Touchable responder `'+responderID+'`');}if(nextState===States.ERROR){throw new Error('Touchable cannot transition from `'+curState+'` to `'+signal+'` for responder `'+responderID+'`');}if(curState!==nextState){this._performSideEffectsForTransition(curState,nextState,signal,e);this.state.touchable.touchState=nextState;}},_cancelLongPressDelayTimeout:function _cancelLongPressDelayTimeout(){this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout);this.longPressDelayTimeout=null;},_isHighlight:function _isHighlight(state){return state===States.RESPONDER_ACTIVE_PRESS_IN||state===States.RESPONDER_ACTIVE_LONG_PRESS_IN;},_savePressInLocation:function _savePressInLocation(e){var touch=extractSingleTouch(e.nativeEvent);var pageX=touch&&touch.pageX;var pageY=touch&&touch.pageY;var locationX=touch&&touch.locationX;var locationY=touch&&touch.locationY;this.pressInLocation={pageX:pageX,pageY:pageY,locationX:locationX,locationY:locationY};},_getDistanceBetweenPoints:function _getDistanceBetweenPoints(aX,aY,bX,bY){var deltaX=aX-bX;var deltaY=aY-bY;return Math.sqrt(deltaX*deltaX+deltaY*deltaY);},_performSideEffectsForTransition:function _performSideEffectsForTransition(curState,nextState,signal,e){var curIsHighlight=this._isHighlight(curState);var newIsHighlight=this._isHighlight(nextState);var isFinalSignal=signal===Signals.RESPONDER_TERMINATED||signal===Signals.RESPONDER_RELEASE;if(isFinalSignal){this._cancelLongPressDelayTimeout();}var isInitialTransition=curState===States.NOT_RESPONDER&&nextState===States.RESPONDER_INACTIVE_PRESS_IN;var isActiveTransition=!IsActive[curState]&&IsActive[nextState];if(isInitialTransition||isActiveTransition){this._remeasureMetricsOnActivation();}if(IsPressingIn[curState]&&signal===Signals.LONG_PRESS_DETECTED){this.touchableHandleLongPress&&this.touchableHandleLongPress(e);}if(newIsHighlight&&!curIsHighlight){this._startHighlight(e);}else if(!newIsHighlight&&curIsHighlight){this._endHighlight(e);}if(IsPressingIn[curState]&&signal===Signals.RESPONDER_RELEASE){var hasLongPressHandler=!!this.props.onLongPress;var pressIsLongButStillCallOnPress=IsLongPressingIn[curState]&&(!hasLongPressHandler||!this.touchableLongPressCancelsPress());var shouldInvokePress=!IsLongPressingIn[curState]||pressIsLongButStillCallOnPress;if(shouldInvokePress&&this.touchableHandlePress){if(!newIsHighlight&&!curIsHighlight){this._startHighlight(e);this._endHighlight(e);}this.touchableHandlePress(e);}}this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout);this.touchableDelayTimeout=null;},_playTouchSound:function _playTouchSound(){UIManager["a" /* default */].playTouchSound();},_startHighlight:function _startHighlight(e){this._savePressInLocation(e);this.touchableHandleActivePressIn&&this.touchableHandleActivePressIn(e);},_endHighlight:function _endHighlight(e){var _this2=this;if(this.touchableHandleActivePressOut){if(this.touchableGetPressOutDelayMS&&this.touchableGetPressOutDelayMS()){this.pressOutDelayTimeout=setTimeout(function(){_this2.touchableHandleActivePressOut(e);},this.touchableGetPressOutDelayMS());}else{this.touchableHandleActivePressOut(e);}}},touchableHandleKeyEvent:function touchableHandleKeyEvent(e){var type=e.type,key=e.key;if(key==='Enter'||key===' '){if(type==='keydown'){if(!this._isTouchableKeyboardActive){if(!this.state.touchable.touchState||this.state.touchable.touchState===States.NOT_RESPONDER){this.touchableHandleResponderGrant(e);this._isTouchableKeyboardActive=true;}}}else if(type==='keyup'){if(this._isTouchableKeyboardActive){if(this.state.touchable.touchState&&this.state.touchable.touchState!==States.NOT_RESPONDER){this.touchableHandleResponderRelease(e);this._isTouchableKeyboardActive=false;}}}e.stopPropagation();if(!(key==='Enter'&&AccessibilityUtil["a" /* default */].propsToAriaRole(this.props)==='link')){e.preventDefault();}}},withoutDefaultFocusAndBlur:{}};var touchableHandleFocus=TouchableMixin.touchableHandleFocus,touchableHandleBlur=TouchableMixin.touchableHandleBlur,TouchableMixinWithoutDefaultFocusAndBlur=Touchable_objectWithoutPropertiesLoose(TouchableMixin,["touchableHandleFocus","touchableHandleBlur"]);TouchableMixin.withoutDefaultFocusAndBlur=TouchableMixinWithoutDefaultFocusAndBlur;var Touchable={Mixin:TouchableMixin,TOUCH_TARGET_DEBUG:false,renderDebugView:function renderDebugView(_ref){var color=_ref.color,hitSlop=_ref.hitSlop;if(!Touchable.TOUCH_TARGET_DEBUG){return null;}if(false){}var debugHitSlopStyle={};hitSlop=hitSlop||{top:0,bottom:0,left:0,right:0};for(var key in hitSlop){debugHitSlopStyle[key]=-hitSlop[key];}var normalizedColor=normalize_css_color_default()(color);if(typeof normalizedColor!=='number'){return null;}var hexColor='#'+('00000000'+normalizedColor.toString(16)).substr(-8);return react_default.a.createElement(View["a" /* default */],{pointerEvents:"none",style:Touchable_objectSpread({position:'absolute',borderColor:hexColor.slice(0,-2)+'55',borderWidth:1,borderStyle:'dashed',backgroundColor:hexColor.slice(0,-2)+'0F'},debugHitSlopStyle)});}};/* harmony default export */ var exports_Touchable = (Touchable);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/TouchableHighlight/index.js
var TouchableHighlight = __webpack_require__(77);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/TouchableNativeFeedback/index.js
/* harmony default export */ var TouchableNativeFeedback = (modules_UnimplementedView);
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js
var TouchableWithoutFeedback = __webpack_require__(98);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/index.js + 5 modules
var VirtualizedList = __webpack_require__(41);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/VirtualizedList/index.js
/* harmony default export */ var exports_VirtualizedList = (VirtualizedList["a" /* default */]);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/YellowBox/index.js
function YellowBox(props){return react_default.a.createElement(modules_UnimplementedView,props);}YellowBox.ignoreWarnings=function(){};/* harmony default export */ var exports_YellowBox = (YellowBox);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/DrawerLayoutAndroid/index.js
/* harmony default export */ var DrawerLayoutAndroid = (modules_UnimplementedView);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/InputAccessoryView/index.js
/* harmony default export */ var InputAccessoryView = (modules_UnimplementedView);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/ToastAndroid/index.js
/* harmony default export */ var ToastAndroid = (modules_UnimplementedView);
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/PermissionsAndroid/index.js
/* harmony default export */ var PermissionsAndroid = ({});
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Settings/index.js
/* harmony default export */ var Settings = ({});
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Systrace/index.js
/* harmony default export */ var Systrace = ({});
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/TVEventHandler/index.js
/* harmony default export */ var TVEventHandler = ({});
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/DeviceEventEmitter/index.js
var DeviceEventEmitter = __webpack_require__(78);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/useColorScheme/index.js
function useColorScheme(){var _React$useState=react["useState"](exports_Appearance.getColorScheme()),colorScheme=_React$useState[0],setColorScheme=_React$useState[1];react["useEffect"](function(){function listener(appearance){setColorScheme(appearance.colorScheme);}exports_Appearance.addChangeListener(listener);return function(){return exports_Appearance.removeChangeListener(listener);};});return colorScheme;}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/useWindowDimensions/index.js
function useWindowDimensions(){var _useState=Object(react["useState"])(function(){return Dimensions["a" /* default */].get('window');}),dims=_useState[0],setDims=_useState[1];Object(react["useEffect"])(function(){function handleChange(_ref){var window=_ref.window;setDims(window);}Dimensions["a" /* default */].addEventListener('change',handleChange);setDims(Dimensions["a" /* default */].get('window'));return function(){Dimensions["a" /* default */].removeEventListener('change',handleChange);};},[]);return dims;}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/index.js


/***/ }),
/* 100 */
/***/ (function(module, exports) {

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

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _SpringConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(103);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var SpringAnimation=function(_Animation){_inheritsLoose(SpringAnimation,_Animation);function SpringAnimation(config){var _config$overshootClam,_config$restDisplacem,_config$restSpeedThre,_config$velocity,_config$velocity2,_config$delay,_config$isInteraction,_config$iterations;var _this;_this=_Animation.call(this)||this;_this._overshootClamping=(_config$overshootClam=config.overshootClamping)!==null&&_config$overshootClam!==void 0?_config$overshootClam:false;_this._restDisplacementThreshold=(_config$restDisplacem=config.restDisplacementThreshold)!==null&&_config$restDisplacem!==void 0?_config$restDisplacem:0.001;_this._restSpeedThreshold=(_config$restSpeedThre=config.restSpeedThreshold)!==null&&_config$restSpeedThre!==void 0?_config$restSpeedThre:0.001;_this._initialVelocity=(_config$velocity=config.velocity)!==null&&_config$velocity!==void 0?_config$velocity:0;_this._lastVelocity=(_config$velocity2=config.velocity)!==null&&_config$velocity2!==void 0?_config$velocity2:0;_this._toValue=config.toValue;_this._delay=(_config$delay=config.delay)!==null&&_config$delay!==void 0?_config$delay:0;_this._useNativeDriver=Object(_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_3__[/* shouldUseNativeDriver */ "c"])(config);_this.__isInteraction=(_config$isInteraction=config.isInteraction)!==null&&_config$isInteraction!==void 0?_config$isInteraction:!_this._useNativeDriver;_this.__iterations=(_config$iterations=config.iterations)!==null&&_config$iterations!==void 0?_config$iterations:1;if(config.stiffness!==undefined||config.damping!==undefined||config.mass!==undefined){var _config$stiffness,_config$damping,_config$mass;fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(config.bounciness===undefined&&config.speed===undefined&&config.tension===undefined&&config.friction===undefined,'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one');_this._stiffness=(_config$stiffness=config.stiffness)!==null&&_config$stiffness!==void 0?_config$stiffness:100;_this._damping=(_config$damping=config.damping)!==null&&_config$damping!==void 0?_config$damping:10;_this._mass=(_config$mass=config.mass)!==null&&_config$mass!==void 0?_config$mass:1;}else if(config.bounciness!==undefined||config.speed!==undefined){var _config$bounciness,_config$speed;fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(config.tension===undefined&&config.friction===undefined&&config.stiffness===undefined&&config.damping===undefined&&config.mass===undefined,'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one');var springConfig=_SpringConfig__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].fromBouncinessAndSpeed((_config$bounciness=config.bounciness)!==null&&_config$bounciness!==void 0?_config$bounciness:8,(_config$speed=config.speed)!==null&&_config$speed!==void 0?_config$speed:12);_this._stiffness=springConfig.stiffness;_this._damping=springConfig.damping;_this._mass=1;}else{var _config$tension,_config$friction;var _springConfig=_SpringConfig__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].fromOrigamiTensionAndFriction((_config$tension=config.tension)!==null&&_config$tension!==void 0?_config$tension:40,(_config$friction=config.friction)!==null&&_config$friction!==void 0?_config$friction:7);_this._stiffness=_springConfig.stiffness;_this._damping=_springConfig.damping;_this._mass=1;}fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(_this._stiffness>0,'Stiffness value must be greater than 0');fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(_this._damping>0,'Damping value must be greater than 0');fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(_this._mass>0,'Mass value must be greater than 0');return _this;}var _proto=SpringAnimation.prototype;_proto.__getNativeAnimationConfig=function __getNativeAnimationConfig(){var _this$_initialVelocit;return{type:'spring',overshootClamping:this._overshootClamping,restDisplacementThreshold:this._restDisplacementThreshold,restSpeedThreshold:this._restSpeedThreshold,stiffness:this._stiffness,damping:this._damping,mass:this._mass,initialVelocity:(_this$_initialVelocit=this._initialVelocity)!==null&&_this$_initialVelocit!==void 0?_this$_initialVelocit:this._lastVelocity,toValue:this._toValue,iterations:this.__iterations};};_proto.start=function start(fromValue,onUpdate,onEnd,previousAnimation,animatedValue){var _this2=this;this.__active=true;this._startPosition=fromValue;this._lastPosition=this._startPosition;this._onUpdate=onUpdate;this.__onEnd=onEnd;this._lastTime=Date.now();this._frameTime=0.0;if(previousAnimation instanceof SpringAnimation){var internalState=previousAnimation.getInternalState();this._lastPosition=internalState.lastPosition;this._lastVelocity=internalState.lastVelocity;this._initialVelocity=this._lastVelocity;this._lastTime=internalState.lastTime;}var start=function start(){if(_this2._useNativeDriver){_this2.__startNativeAnimation(animatedValue);}else{_this2.onUpdate();}};if(this._delay){this._timeout=setTimeout(start,this._delay);}else{start();}};_proto.getInternalState=function getInternalState(){return{lastPosition:this._lastPosition,lastVelocity:this._lastVelocity,lastTime:this._lastTime};};_proto.onUpdate=function onUpdate(){var MAX_STEPS=64;var now=Date.now();if(now>this._lastTime+MAX_STEPS){now=this._lastTime+MAX_STEPS;}var deltaTime=(now-this._lastTime)/1000;this._frameTime+=deltaTime;var c=this._damping;var m=this._mass;var k=this._stiffness;var v0=-this._initialVelocity;var zeta=c/(2*Math.sqrt(k*m));var omega0=Math.sqrt(k/m);var omega1=omega0*Math.sqrt(1.0-zeta*zeta);var x0=this._toValue-this._startPosition;var position=0.0;var velocity=0.0;var t=this._frameTime;if(zeta<1){var envelope=Math.exp(-zeta*omega0*t);position=this._toValue-envelope*((v0+zeta*omega0*x0)/omega1*Math.sin(omega1*t)+x0*Math.cos(omega1*t));velocity=zeta*omega0*envelope*(Math.sin(omega1*t)*(v0+zeta*omega0*x0)/omega1+x0*Math.cos(omega1*t))-envelope*(Math.cos(omega1*t)*(v0+zeta*omega0*x0)-omega1*x0*Math.sin(omega1*t));}else{var _envelope=Math.exp(-omega0*t);position=this._toValue-_envelope*(x0+(v0+omega0*x0)*t);velocity=_envelope*(v0*(t*omega0-1)+t*x0*(omega0*omega0));}this._lastTime=now;this._lastPosition=position;this._lastVelocity=velocity;this._onUpdate(position);if(!this.__active){return;}var isOvershooting=false;if(this._overshootClamping&&this._stiffness!==0){if(this._startPosition<this._toValue){isOvershooting=position>this._toValue;}else{isOvershooting=position<this._toValue;}}var isVelocity=Math.abs(velocity)<=this._restSpeedThreshold;var isDisplacement=true;if(this._stiffness!==0){isDisplacement=Math.abs(this._toValue-position)<=this._restDisplacementThreshold;}if(isOvershooting||isVelocity&&isDisplacement){if(this._stiffness!==0){this._lastPosition=this._toValue;this._lastVelocity=0;this._onUpdate(this._toValue);}this.__debouncedOnEnd({finished:true});return;}this._animationFrame=requestAnimationFrame(this.onUpdate.bind(this));};_proto.stop=function stop(){_Animation.prototype.stop.call(this);this.__active=false;clearTimeout(this._timeout);global.cancelAnimationFrame(this._animationFrame);this.__debouncedOnEnd({finished:false});};return SpringAnimation;}(_Animation__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);/* harmony default export */ __webpack_exports__["a"] = (SpringAnimation);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(70)))

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fromOrigamiTensionAndFriction */
/* unused harmony export fromBouncinessAndSpeed */
function stiffnessFromOrigamiValue(oValue){return(oValue-30)*3.62+194;}function dampingFromOrigamiValue(oValue){return(oValue-8)*3+25;}function fromOrigamiTensionAndFriction(tension,friction){return{stiffness:stiffnessFromOrigamiValue(tension),damping:dampingFromOrigamiValue(friction)};}function fromBouncinessAndSpeed(bounciness,speed){function normalize(value,startValue,endValue){return(value-startValue)/(endValue-startValue);}function projectNormal(n,start,end){return start+n*(end-start);}function linearInterpolation(t,start,end){return t*end+(1-t)*start;}function quadraticOutInterpolation(t,start,end){return linearInterpolation(2*t-t*t,start,end);}function b3Friction1(x){return 0.0007*Math.pow(x,3)-0.031*Math.pow(x,2)+0.64*x+1.28;}function b3Friction2(x){return 0.000044*Math.pow(x,3)-0.006*Math.pow(x,2)+0.36*x+2;}function b3Friction3(x){return 0.00000045*Math.pow(x,3)-0.000332*Math.pow(x,2)+0.1078*x+5.84;}function b3Nobounce(tension){if(tension<=18){return b3Friction1(tension);}else if(tension>18&&tension<=44){return b3Friction2(tension);}else{return b3Friction3(tension);}}var b=normalize(bounciness/1.7,0,20);b=projectNormal(b,0,0.8);var s=normalize(speed/1.7,0,20);var bouncyTension=projectNormal(s,0.5,200);var bouncyFriction=quadraticOutInterpolation(b,b3Nobounce(bouncyTension),0.01);return{stiffness:stiffnessFromOrigamiValue(bouncyTension),damping:dampingFromOrigamiValue(bouncyFriction)};}/* harmony default export */ __webpack_exports__["a"] = ({fromOrigamiTensionAndFriction:fromOrigamiTensionAndFriction,fromBouncinessAndSpeed:fromBouncinessAndSpeed});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _Easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var _easeInOut;function easeInOut(){if(!_easeInOut){_easeInOut=_Easing__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].inOut(_Easing__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ease);}return _easeInOut;}var TimingAnimation=function(_Animation){_inheritsLoose(TimingAnimation,_Animation);function TimingAnimation(config){var _config$easing,_config$duration,_config$delay,_config$iterations,_config$isInteraction;var _this;_this=_Animation.call(this)||this;_this._toValue=config.toValue;_this._easing=(_config$easing=config.easing)!==null&&_config$easing!==void 0?_config$easing:easeInOut();_this._duration=(_config$duration=config.duration)!==null&&_config$duration!==void 0?_config$duration:500;_this._delay=(_config$delay=config.delay)!==null&&_config$delay!==void 0?_config$delay:0;_this.__iterations=(_config$iterations=config.iterations)!==null&&_config$iterations!==void 0?_config$iterations:1;_this._useNativeDriver=Object(_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_2__[/* shouldUseNativeDriver */ "c"])(config);_this.__isInteraction=(_config$isInteraction=config.isInteraction)!==null&&_config$isInteraction!==void 0?_config$isInteraction:!_this._useNativeDriver;return _this;}var _proto=TimingAnimation.prototype;_proto.__getNativeAnimationConfig=function __getNativeAnimationConfig(){var frameDuration=1000.0/60.0;var frames=[];for(var dt=0.0;dt<this._duration;dt+=frameDuration){frames.push(this._easing(dt/this._duration));}frames.push(this._easing(1));return{type:'frames',frames:frames,toValue:this._toValue,iterations:this.__iterations};};_proto.start=function start(fromValue,onUpdate,onEnd,previousAnimation,animatedValue){var _this2=this;this.__active=true;this._fromValue=fromValue;this._onUpdate=onUpdate;this.__onEnd=onEnd;var start=function start(){if(_this2._duration===0&&!_this2._useNativeDriver){_this2._onUpdate(_this2._toValue);_this2.__debouncedOnEnd({finished:true});}else{_this2._startTime=Date.now();if(_this2._useNativeDriver){_this2.__startNativeAnimation(animatedValue);}else{_this2._animationFrame=requestAnimationFrame(_this2.onUpdate.bind(_this2));}}};if(this._delay){this._timeout=setTimeout(start,this._delay);}else{start();}};_proto.onUpdate=function onUpdate(){var now=Date.now();if(now>=this._startTime+this._duration){if(this._duration===0){this._onUpdate(this._toValue);}else{this._onUpdate(this._fromValue+this._easing(1)*(this._toValue-this._fromValue));}this.__debouncedOnEnd({finished:true});return;}this._onUpdate(this._fromValue+this._easing((now-this._startTime)/this._duration)*(this._toValue-this._fromValue));if(this.__active){this._animationFrame=requestAnimationFrame(this.onUpdate.bind(this));}};_proto.stop=function stop(){_Animation.prototype.stop.call(this);this.__active=false;clearTimeout(this._timeout);global.cancelAnimationFrame(this._animationFrame);this.__debouncedOnEnd({finished:false});};return TimingAnimation;}(_Animation__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);/* harmony default export */ __webpack_exports__["a"] = (TimingAnimation);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(70)))

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47 /*/*/)
      break;
    else
      code = 47 /*/*/;
    if (code === 47 /*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 /*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process.cwd();
        path = cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },

  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0) return '.';

    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';

    if (isAbsolute) return '/' + path;
    return path;
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
  },

  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /*/*/)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /*/*/)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47 /*/*/)
        lastCommonSep = i;
    }

    var out = '';
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 /*/*/)
        ++toStart;
      return to.slice(toStart);
    }
  },

  _makeLong: function _makeLong(path) {
    return path;
  },

  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },

  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },

  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47 /*/*/;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
    // We saw a non-dot character immediately before the dot
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};

posix.posix = posix;

module.exports = posix;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(286)))

/***/ }),
/* 106 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(107);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(106)["default"];

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: setStatusBarBackgroundColor, setStatusBarNetworkActivityIndicatorVisible, setStatusBarHidden, setStatusBarStyle, setStatusBarTranslucent, StatusBar

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-status-bar/build/StatusBar.types.js

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/StatusBar/index.js
var StatusBar = __webpack_require__(27);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-status-bar/build/setStatusBarBackgroundColor.js
function setStatusBarBackgroundColor(backgroundColor,animated){StatusBar["a" /* default */].setBackgroundColor(backgroundColor,animated);}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-status-bar/build/setStatusBarNetworkActivityIndicatorVisible.js
function setStatusBarNetworkActivityIndicatorVisible(visible){StatusBar["a" /* default */].setNetworkActivityIndicatorVisible(visible);}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-status-bar/build/setStatusBarHidden.js
function setStatusBarHidden(hidden,animation){StatusBar["a" /* default */].setHidden(hidden,animation);}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-status-bar/build/styleToBarStyle.web.js
function styleToBarStyle(){var style=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'auto';var colorScheme=arguments.length>1?arguments[1]:undefined;if(!colorScheme){colorScheme='light';}var resolvedStyle=style;if(style==='auto'){resolvedStyle=colorScheme==='light'?'dark':'light';}else if(style==='inverted'){resolvedStyle=colorScheme==='light'?'light':'dark';}return resolvedStyle==='light'?'light-content':'dark-content';}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-status-bar/build/setStatusBarStyle.js
function setStatusBarStyle(style){StatusBar["a" /* default */].setBarStyle(styleToBarStyle(style));}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-status-bar/build/setStatusBarTranslucent.js
function setStatusBarTranslucent(translucent){StatusBar["a" /* default */].setTranslucent(translucent);}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-status-bar/build/ExpoStatusBar.js
function ExpoStatusBar(props){return null;}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-status-bar/build/StatusBar.js


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = __webpack_require__(266);

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(267);

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = __webpack_require__(268);

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__(269);

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  return function prefix(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefix(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  };
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = backgroundClip;

// https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip#Browser_compatibility
function backgroundClip(property, value) {
  if (typeof value === 'string' && value === 'text') {
    return ['-webkit-text', 'text'];
  }
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__(58);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__(58);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;
var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize'
  // Full expanded syntax is flex-grow | flex-shrink | flex-basis.
};var flexShorthandMappings = {
  auto: '1 1 auto',
  inherit: 'inherit',
  initial: '0 1 auto',
  none: '0 0 auto',
  unset: 'unset'
};
var isUnitlessNumber = /^\d+(\.\d+)?$/;

function flexboxIE(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
  if (property === 'flex') {
    // For certain values we can do straight mappings based on the spec
    // for the expansions.
    if (Object.prototype.hasOwnProperty.call(flexShorthandMappings, value)) {
      style.msFlex = flexShorthandMappings[value];
      return;
    }
    // Here we have no direct mapping, so we favor looking for a
    // unitless positive number as that will be the most common use-case.
    if (isUnitlessNumber.test(value)) {
      style.msFlex = value + ' 1 0%';
      return;
    }

    // The next thing we can look for is if there are multiple values.
    var flexValues = value.split(/\s/);
    // If we only have a single value that wasn't a positive unitless
    // or a pre-mapped value, then we can assume it is a unit value.
    switch (flexValues.length) {
      case 1:
        style.msFlex = '1 1 ' + value;
        return;
      case 2:
        // If we have 2 units, then we expect that the first will
        // always be a unitless number and represents flex-grow.
        // The second unit will represent flex-shrink for a unitless
        // value, or flex-basis otherwise.
        if (isUnitlessNumber.test(flexValues[1])) {
          style.msFlex = flexValues[0] + ' ' + flexValues[1] + ' 0%';
        } else {
          style.msFlex = flexValues[0] + ' 1 ' + flexValues[1];
        }
        return;
      default:
        style.msFlex = value;
    }
  }
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__(58);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return value.replace(values, function (grad) {
        return prefix + grad;
      });
    });
  }
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = grid;
function isSimplePositionValue(value) {
  return typeof value === 'number' && !isNaN(value);
}

function isComplexSpanValue(value) {
  return typeof value === 'string' && value.includes('/');
}

var alignmentValues = ['center', 'end', 'start', 'stretch'];

var displayValues = {
  'inline-grid': ['-ms-inline-grid', 'inline-grid'],
  grid: ['-ms-grid', 'grid']
};

var propertyConverters = {
  alignSelf: function alignSelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridRowAlign = value;
    }
  },

  gridColumn: function gridColumn(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    } else if (isComplexSpanValue(value)) {
      var _value$split = value.split('/'),
          _value$split2 = _slicedToArray(_value$split, 2),
          start = _value$split2[0],
          end = _value$split2[1];

      propertyConverters.gridColumnStart(+start, style);

      var _end$split = end.split(/ ?span /),
          _end$split2 = _slicedToArray(_end$split, 2),
          maybeSpan = _end$split2[0],
          maybeNumber = _end$split2[1];

      if (maybeSpan === '') {
        propertyConverters.gridColumnEnd(+start + +maybeNumber, style);
      } else {
        propertyConverters.gridColumnEnd(+end, style);
      }
    } else {
      propertyConverters.gridColumnStart(value, style);
    }
  },

  gridColumnEnd: function gridColumnEnd(value, style) {
    var msGridColumn = style.msGridColumn;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridColumn)) {
      style.msGridColumnSpan = value - msGridColumn;
    }
  },

  gridColumnStart: function gridColumnStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    }
  },

  gridRow: function gridRow(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    } else if (isComplexSpanValue(value)) {
      var _value$split3 = value.split('/'),
          _value$split4 = _slicedToArray(_value$split3, 2),
          start = _value$split4[0],
          end = _value$split4[1];

      propertyConverters.gridRowStart(+start, style);

      var _end$split3 = end.split(/ ?span /),
          _end$split4 = _slicedToArray(_end$split3, 2),
          maybeSpan = _end$split4[0],
          maybeNumber = _end$split4[1];

      if (maybeSpan === '') {
        propertyConverters.gridRowEnd(+start + +maybeNumber, style);
      } else {
        propertyConverters.gridRowEnd(+end, style);
      }
    } else {
      propertyConverters.gridRowStart(value, style);
    }
  },

  gridRowEnd: function gridRowEnd(value, style) {
    var msGridRow = style.msGridRow;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridRow)) {
      style.msGridRowSpan = value - msGridRow;
    }
  },

  gridRowStart: function gridRowStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    }
  },

  gridTemplateColumns: function gridTemplateColumns(value, style) {
    style.msGridColumns = value;
  },

  gridTemplateRows: function gridTemplateRows(value, style) {
    style.msGridRows = value;
  },

  justifySelf: function justifySelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridColumnAlign = value;
    }
  }
};

function grid(property, value, style) {
  if (property === 'display' && value in displayValues) {
    return displayValues[value];
  }

  if (property in propertyConverters) {
    var propertyConverter = propertyConverters[property];
    propertyConverter(value, style);
  }
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__(58);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logical;
var alternativeProps = {
  marginBlockStart: ['WebkitMarginBefore'],
  marginBlockEnd: ['WebkitMarginAfter'],
  marginInlineStart: ['WebkitMarginStart', 'MozMarginStart'],
  marginInlineEnd: ['WebkitMarginEnd', 'MozMarginEnd'],
  paddingBlockStart: ['WebkitPaddingBefore'],
  paddingBlockEnd: ['WebkitPaddingAfter'],
  paddingInlineStart: ['WebkitPaddingStart', 'MozPaddingStart'],
  paddingInlineEnd: ['WebkitPaddingEnd', 'MozPaddingEnd'],
  borderBlockStart: ['WebkitBorderBefore'],
  borderBlockStartColor: ['WebkitBorderBeforeColor'],
  borderBlockStartStyle: ['WebkitBorderBeforeStyle'],
  borderBlockStartWidth: ['WebkitBorderBeforeWidth'],
  borderBlockEnd: ['WebkitBorderAfter'],
  borderBlockEndColor: ['WebkitBorderAfterColor'],
  borderBlockEndStyle: ['WebkitBorderAfterStyle'],
  borderBlockEndWidth: ['WebkitBorderAfterWidth'],
  borderInlineStart: ['WebkitBorderStart', 'MozBorderStart'],
  borderInlineStartColor: ['WebkitBorderStartColor', 'MozBorderStartColor'],
  borderInlineStartStyle: ['WebkitBorderStartStyle', 'MozBorderStartStyle'],
  borderInlineStartWidth: ['WebkitBorderStartWidth', 'MozBorderStartWidth'],
  borderInlineEnd: ['WebkitBorderEnd', 'MozBorderEnd'],
  borderInlineEndColor: ['WebkitBorderEndColor', 'MozBorderEndColor'],
  borderInlineEndStyle: ['WebkitBorderEndStyle', 'MozBorderEndStyle'],
  borderInlineEndWidth: ['WebkitBorderEndWidth', 'MozBorderEndWidth']
};

function logical(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
    var alternativePropList = alternativeProps[property];
    for (var i = 0, len = alternativePropList.length; i < len; ++i) {
      style[alternativePropList[i]] = value;
    }
  }
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(270);

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(58);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(110);

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var NEWTON_ITERATIONS=4;var NEWTON_MIN_SLOPE=0.001;var SUBDIVISION_PRECISION=0.0000001;var SUBDIVISION_MAX_ITERATIONS=10;var kSplineTableSize=11;var kSampleStepSize=1.0/(kSplineTableSize-1.0);var float32ArraySupported=typeof Float32Array==='function';function A(aA1,aA2){return 1.0-3.0*aA2+3.0*aA1;}function B(aA1,aA2){return 3.0*aA2-6.0*aA1;}function C(aA1){return 3.0*aA1;}function calcBezier(aT,aA1,aA2){return((A(aA1,aA2)*aT+B(aA1,aA2))*aT+C(aA1))*aT;}function getSlope(aT,aA1,aA2){return 3.0*A(aA1,aA2)*aT*aT+2.0*B(aA1,aA2)*aT+C(aA1);}function binarySubdivide(aX,_aA,_aB,mX1,mX2){var currentX,currentT,i=0,aA=_aA,aB=_aB;do{currentT=aA+(aB-aA)/2.0;currentX=calcBezier(currentT,mX1,mX2)-aX;if(currentX>0.0){aB=currentT;}else{aA=currentT;}}while(Math.abs(currentX)>SUBDIVISION_PRECISION&&++i<SUBDIVISION_MAX_ITERATIONS);return currentT;}function newtonRaphsonIterate(aX,_aGuessT,mX1,mX2){var aGuessT=_aGuessT;for(var i=0;i<NEWTON_ITERATIONS;++i){var currentSlope=getSlope(aGuessT,mX1,mX2);if(currentSlope===0.0){return aGuessT;}var currentX=calcBezier(aGuessT,mX1,mX2)-aX;aGuessT-=currentX/currentSlope;}return aGuessT;}module.exports=function bezier(mX1,mY1,mX2,mY2){if(!(mX1>=0&&mX1<=1&&mX2>=0&&mX2<=1)){throw new Error('bezier x values must be in [0, 1] range');}var sampleValues=float32ArraySupported?new Float32Array(kSplineTableSize):new Array(kSplineTableSize);if(mX1!==mY1||mX2!==mY2){for(var i=0;i<kSplineTableSize;++i){sampleValues[i]=calcBezier(i*kSampleStepSize,mX1,mX2);}}function getTForX(aX){var intervalStart=0.0;var currentSample=1;var lastSample=kSplineTableSize-1;for(;currentSample!==lastSample&&sampleValues[currentSample]<=aX;++currentSample){intervalStart+=kSampleStepSize;}--currentSample;var dist=(aX-sampleValues[currentSample])/(sampleValues[currentSample+1]-sampleValues[currentSample]);var guessForT=intervalStart+dist*kSampleStepSize;var initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope>=NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT,mX1,mX2);}else if(initialSlope===0.0){return guessForT;}else{return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);}}return function BezierEasing(x){if(mX1===mY1&&mX2===mY2){return x;}if(x===0){return 0;}if(x===1){return 1;}return calcBezier(getTForX(x),mY1,mY2);};};

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var DecayAnimation=function(_Animation){_inheritsLoose(DecayAnimation,_Animation);function DecayAnimation(config){var _config$deceleration,_config$isInteraction,_config$iterations;var _this;_this=_Animation.call(this)||this;_this._deceleration=(_config$deceleration=config.deceleration)!==null&&_config$deceleration!==void 0?_config$deceleration:0.998;_this._velocity=config.velocity;_this._useNativeDriver=Object(_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__[/* shouldUseNativeDriver */ "c"])(config);_this.__isInteraction=(_config$isInteraction=config.isInteraction)!==null&&_config$isInteraction!==void 0?_config$isInteraction:!_this._useNativeDriver;_this.__iterations=(_config$iterations=config.iterations)!==null&&_config$iterations!==void 0?_config$iterations:1;return _this;}var _proto=DecayAnimation.prototype;_proto.__getNativeAnimationConfig=function __getNativeAnimationConfig(){return{type:'decay',deceleration:this._deceleration,velocity:this._velocity,iterations:this.__iterations};};_proto.start=function start(fromValue,onUpdate,onEnd,previousAnimation,animatedValue){this.__active=true;this._lastValue=fromValue;this._fromValue=fromValue;this._onUpdate=onUpdate;this.__onEnd=onEnd;this._startTime=Date.now();if(this._useNativeDriver){this.__startNativeAnimation(animatedValue);}else{this._animationFrame=requestAnimationFrame(this.onUpdate.bind(this));}};_proto.onUpdate=function onUpdate(){var now=Date.now();var value=this._fromValue+this._velocity/(1-this._deceleration)*(1-Math.exp(-(1-this._deceleration)*(now-this._startTime)));this._onUpdate(value);if(Math.abs(this._lastValue-value)<0.1){this.__debouncedOnEnd({finished:true});return;}this._lastValue=value;if(this.__active){this._animationFrame=requestAnimationFrame(this.onUpdate.bind(this));}};_proto.stop=function stop(){_Animation.prototype.stop.call(this);this.__active=false;global.cancelAnimationFrame(this._animationFrame);this.__debouncedOnEnd({finished:false});};return DecayAnimation;}(_Animation__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);/* harmony default export */ __webpack_exports__["a"] = (DecayAnimation);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(70)))

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(0);
var factory = __webpack_require__(277);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (arr, predicate, ctx) {
	if (typeof Array.prototype.findIndex === 'function') {
		return arr.findIndex(predicate, ctx);
	}

	if (typeof predicate !== 'function') {
		throw new TypeError('predicate must be a function');
	}

	var list = Object(arr);
	var len = list.length;

	if (len === 0) {
		return -1;
	}

	for (var i = 0; i < len; i++) {
		if (predicate.call(ctx, list[i], i, list)) {
			return i;
		}
	}

	return -1;
};


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setCustomSourceTransformer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolveAssetSource; });
/* unused harmony export pickScale */
/* harmony import */ var react_native_web_dist_exports_NativeModules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _AssetRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);
/* harmony import */ var _AssetSourceResolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);
var _customSourceTransformer;var _serverURL;var _scriptURL;var _sourceCodeScriptURL;function getSourceCodeScriptURL(){if(_sourceCodeScriptURL){return _sourceCodeScriptURL;}var sourceCode=nativeExtensions&&nativeExtensions.SourceCode;if(!sourceCode){sourceCode=react_native_web_dist_exports_NativeModules__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]&&react_native_web_dist_exports_NativeModules__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SourceCode;}_sourceCodeScriptURL=sourceCode.scriptURL;return _sourceCodeScriptURL;}function getDevServerURL(){if(_serverURL===undefined){var sourceCodeScriptURL=getSourceCodeScriptURL();var match=sourceCodeScriptURL&&sourceCodeScriptURL.match(/^https?:\/\/.*?\//);if(match){_serverURL=match[0];}else{_serverURL=null;}}return _serverURL;}function _coerceLocalScriptURL(scriptURL){if(scriptURL){if(scriptURL.startsWith('assets://')){return null;}scriptURL=scriptURL.substring(0,scriptURL.lastIndexOf('/')+1);if(!scriptURL.includes('://')){scriptURL='file://'+scriptURL;}}return null;}function getScriptURL(){if(_scriptURL===undefined){_scriptURL=_coerceLocalScriptURL(getSourceCodeScriptURL());}return _scriptURL;}function setCustomSourceTransformer(transformer){_customSourceTransformer=transformer;}function resolveAssetSource(source){if(typeof source==='object'){return source;}var asset=Object(_AssetRegistry__WEBPACK_IMPORTED_MODULE_1__[/* getAssetByID */ "a"])(source);if(!asset){return undefined;}var resolver=new _AssetSourceResolver__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](getDevServerURL(),getScriptURL(),asset);if(_customSourceTransformer){return _customSourceTransformer(resolver);}return resolver.defaultAsset();}Object.defineProperty(resolveAssetSource,'setCustomSourceTransformer',{get:function get(){return setCustomSourceTransformer;}});var pickScale=_AssetSourceResolver__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].pickScale;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(20);

var setPrototypeOf = __webpack_require__(94);

var isNativeFunction = __webpack_require__(283);

var construct = __webpack_require__(284);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Platform/index.js
var Platform = __webpack_require__(15);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/@unimodules/react-native-adapter/build/environment/browser.web.js
var _window$document;var isDOMAvailable=typeof window!=='undefined'&&!!((_window$document=window.document)!=null&&_window$document.createElement);var canUseEventListeners=isDOMAvailable&&!!(window.addEventListener||window.attachEvent);var canUseViewport=isDOMAvailable&&!!window.screen;
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/@unimodules/react-native-adapter/build/Platform.js
var Platform_Platform={OS:Platform["a" /* default */].OS,select:Platform["a" /* default */].select,isDOMAvailable:isDOMAvailable,canUseEventListeners:canUseEventListeners,canUseViewport:canUseViewport};/* harmony default export */ var build_Platform = __webpack_exports__["a"] = (Platform_Platform);

/***/ }),
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(95),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.13.1";


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(107);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 139 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 140 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = autobind;


// The following React methods should not be automatically bound.
var REACT_EXCLUDE_METHODS = {
  getChildContext: true,
  render: true,
  componentWillMount: true,
  componentDidMount: true,
  componentWillReceiveProps: true,
  shouldComponentUpdate: true,
  componentWillUpdate: true,
  componentDidUpdate: true,
  componentWillUnmount: true
};

function isExcluded(methodName) {
  return REACT_EXCLUDE_METHODS[methodName] === true;
}

function isFunction(item) {
  return typeof item === 'function';
}

function autobind(instance, proto) {
  if (proto == null) {
    proto = Object.getPrototypeOf(instance);
  }
  var propertyNames = Object.getOwnPropertyNames(proto);
  for (var _iterator = propertyNames, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var name = _ref;

    var value = proto[name];
    if (isFunction(value) && !isExcluded(name)) {
      instance[name] = proto[name].bind(instance);
    }
  }
}

/***/ }),
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 261 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 262 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireWildcard=__webpack_require__(109);var _interopRequireDefault=__webpack_require__(96);Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.Pattern=exports.Marker=exports.ForeignObject=exports.Mask=exports.Use=exports.TextPath=exports.TSpan=exports.Text=exports.Symbol=exports.Svg=exports.Stop=exports.Rect=exports.RadialGradient=exports.Polyline=exports.Polygon=exports.Path=exports.LinearGradient=exports.Line=exports.Image=exports.G=exports.Ellipse=exports.Defs=exports.ClipPath=exports.Circle=exports.WebShape=void 0;var _createClass2=_interopRequireDefault(__webpack_require__(16));var _classCallCheck2=_interopRequireDefault(__webpack_require__(10));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(29));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(20));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(71));var _inherits2=_interopRequireDefault(__webpack_require__(26));var _defineProperty2=_interopRequireDefault(__webpack_require__(19));var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(264));var React=_interopRequireWildcard(__webpack_require__(0));var _reactNative=__webpack_require__(99);var _SvgTouchableMixin=_interopRequireDefault(__webpack_require__(279));var _resolve=__webpack_require__(280);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var createElement=_reactNative.createElement||_reactNative.unstable_createElement;var prepare=function prepare(self){var props=arguments.length>1&&arguments[1]!==undefined?arguments[1]:self.props;var translate=props.translate,scale=props.scale,rotation=props.rotation,skewX=props.skewX,skewY=props.skewY,originX=props.originX,originY=props.originY,fontFamily=props.fontFamily,fontSize=props.fontSize,fontWeight=props.fontWeight,fontStyle=props.fontStyle,style=props.style,forwardedRef=props.forwardedRef,onPress=props.onPress,onPressIn=props.onPressIn,onPressOut=props.onPressOut,onLongPress=props.onLongPress,rest=(0,_objectWithoutProperties2.default)(props,["translate","scale","rotation","skewX","skewY","originX","originY","fontFamily","fontSize","fontWeight","fontStyle","style","forwardedRef","onPress","onPressIn","onPressOut","onLongPress"]);var hasTouchableProperty=onPress||onPressIn||onPressOut||onLongPress;var clean=_objectSpread({},hasTouchableProperty?{onStartShouldSetResponder:self.touchableHandleStartShouldSetResponder,onResponderTerminationRequest:self.touchableHandleResponderTerminationRequest,onResponderGrant:self.touchableHandleResponderGrant,onResponderMove:self.touchableHandleResponderMove,onResponderRelease:self.touchableHandleResponderRelease,onResponderTerminate:self.touchableHandleResponderTerminate}:null,{},rest);var transform=[];if(originX!=null||originY!=null){transform.push("translate(".concat(originX||0,", ").concat(originY||0,")"));}if(translate!=null){transform.push("translate(".concat(translate,")"));}if(scale!=null){transform.push("scale(".concat(scale,")"));}if(rotation!=null){transform.push("rotate(".concat(rotation,")"));}if(skewX!=null){transform.push("skewX(".concat(skewX,")"));}if(skewY!=null){transform.push("skewY(".concat(skewY,")"));}if(originX!=null||originY!=null){transform.push("translate(".concat(-originX||0,", ").concat(-originY||0,")"));}if(transform.length){clean.transform=transform.join(' ');}if(forwardedRef){clean.ref=forwardedRef;}var styles={};if(fontFamily!=null){styles.fontFamily=fontFamily;}if(fontSize!=null){styles.fontSize=fontSize;}if(fontWeight!=null){styles.fontWeight=fontWeight;}if(fontStyle!=null){styles.fontStyle=fontStyle;}clean.style=(0,_resolve.resolve)(style,styles);return clean;};var getBoundingClientRect=function getBoundingClientRect(node){if(node){var isElement=node.nodeType===1;if(isElement&&typeof node.getBoundingClientRect==='function'){return node.getBoundingClientRect();}}};var measureLayout=function measureLayout(node,callback){var relativeNode=node&&node.parentNode;if(relativeNode){setTimeout(function(){var relativeRect=getBoundingClientRect(relativeNode);var _getBoundingClientRec=getBoundingClientRect(node),height=_getBoundingClientRec.height,left=_getBoundingClientRec.left,top=_getBoundingClientRec.top,width=_getBoundingClientRec.width;var x=left-relativeRect.left;var y=top-relativeRect.top;callback(x,y,width,height,left,top);},0);}};function remeasure(){var tag=this.state.touchable.responderID;if(tag==null){return;}measureLayout(tag,this._handleQueryLayout);}var WebShape=function(_React$Component){(0,_inherits2.default)(WebShape,_React$Component);function WebShape(props,context){var _this;(0,_classCallCheck2.default)(this,WebShape);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(WebShape).call(this,props,context));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"_remeasureMetricsOnActivation",void 0);(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"touchableHandleStartShouldSetResponder",void 0);(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"touchableHandleResponderMove",void 0);(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"touchableHandleResponderGrant",void 0);(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"touchableHandleResponderRelease",void 0);(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"touchableHandleResponderTerminate",void 0);(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"touchableHandleResponderTerminationRequest",void 0);(0,_SvgTouchableMixin.default)((0,_assertThisInitialized2.default)(_this));_this._remeasureMetricsOnActivation=remeasure.bind((0,_assertThisInitialized2.default)(_this));return _this;}return WebShape;}(React.Component);exports.WebShape=WebShape;var Circle=function(_WebShape){(0,_inherits2.default)(Circle,_WebShape);function Circle(){(0,_classCallCheck2.default)(this,Circle);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Circle).apply(this,arguments));}(0,_createClass2.default)(Circle,[{key:"render",value:function render(){return createElement('circle',prepare(this));}}]);return Circle;}(WebShape);exports.Circle=Circle;var ClipPath=function(_WebShape2){(0,_inherits2.default)(ClipPath,_WebShape2);function ClipPath(){(0,_classCallCheck2.default)(this,ClipPath);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ClipPath).apply(this,arguments));}(0,_createClass2.default)(ClipPath,[{key:"render",value:function render(){return createElement('clipPath',prepare(this));}}]);return ClipPath;}(WebShape);exports.ClipPath=ClipPath;var Defs=function(_WebShape3){(0,_inherits2.default)(Defs,_WebShape3);function Defs(){(0,_classCallCheck2.default)(this,Defs);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Defs).apply(this,arguments));}(0,_createClass2.default)(Defs,[{key:"render",value:function render(){return createElement('defs',prepare(this));}}]);return Defs;}(WebShape);exports.Defs=Defs;var Ellipse=function(_WebShape4){(0,_inherits2.default)(Ellipse,_WebShape4);function Ellipse(){(0,_classCallCheck2.default)(this,Ellipse);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Ellipse).apply(this,arguments));}(0,_createClass2.default)(Ellipse,[{key:"render",value:function render(){return createElement('ellipse',prepare(this));}}]);return Ellipse;}(WebShape);exports.Ellipse=Ellipse;var G=function(_WebShape5){(0,_inherits2.default)(G,_WebShape5);function G(){(0,_classCallCheck2.default)(this,G);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(G).apply(this,arguments));}(0,_createClass2.default)(G,[{key:"render",value:function render(){var _this$props=this.props,x=_this$props.x,y=_this$props.y,rest=(0,_objectWithoutProperties2.default)(_this$props,["x","y"]);if((x||y)&&!rest.translate){rest.translate="".concat(x||0,", ").concat(y||0);}return createElement('g',prepare(this,rest));}}]);return G;}(WebShape);exports.G=G;var Image=function(_WebShape6){(0,_inherits2.default)(Image,_WebShape6);function Image(){(0,_classCallCheck2.default)(this,Image);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Image).apply(this,arguments));}(0,_createClass2.default)(Image,[{key:"render",value:function render(){return createElement('image',prepare(this));}}]);return Image;}(WebShape);exports.Image=Image;var Line=function(_WebShape7){(0,_inherits2.default)(Line,_WebShape7);function Line(){(0,_classCallCheck2.default)(this,Line);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Line).apply(this,arguments));}(0,_createClass2.default)(Line,[{key:"render",value:function render(){return createElement('line',prepare(this));}}]);return Line;}(WebShape);exports.Line=Line;var LinearGradient=function(_WebShape8){(0,_inherits2.default)(LinearGradient,_WebShape8);function LinearGradient(){(0,_classCallCheck2.default)(this,LinearGradient);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(LinearGradient).apply(this,arguments));}(0,_createClass2.default)(LinearGradient,[{key:"render",value:function render(){return createElement('linearGradient',prepare(this));}}]);return LinearGradient;}(WebShape);exports.LinearGradient=LinearGradient;var Path=function(_WebShape9){(0,_inherits2.default)(Path,_WebShape9);function Path(){(0,_classCallCheck2.default)(this,Path);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Path).apply(this,arguments));}(0,_createClass2.default)(Path,[{key:"render",value:function render(){return createElement('path',prepare(this));}}]);return Path;}(WebShape);exports.Path=Path;var Polygon=function(_WebShape10){(0,_inherits2.default)(Polygon,_WebShape10);function Polygon(){(0,_classCallCheck2.default)(this,Polygon);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Polygon).apply(this,arguments));}(0,_createClass2.default)(Polygon,[{key:"render",value:function render(){return createElement('polygon',prepare(this));}}]);return Polygon;}(WebShape);exports.Polygon=Polygon;var Polyline=function(_WebShape11){(0,_inherits2.default)(Polyline,_WebShape11);function Polyline(){(0,_classCallCheck2.default)(this,Polyline);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Polyline).apply(this,arguments));}(0,_createClass2.default)(Polyline,[{key:"render",value:function render(){return createElement('polyline',prepare(this));}}]);return Polyline;}(WebShape);exports.Polyline=Polyline;var RadialGradient=function(_WebShape12){(0,_inherits2.default)(RadialGradient,_WebShape12);function RadialGradient(){(0,_classCallCheck2.default)(this,RadialGradient);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(RadialGradient).apply(this,arguments));}(0,_createClass2.default)(RadialGradient,[{key:"render",value:function render(){return createElement('radialGradient',prepare(this));}}]);return RadialGradient;}(WebShape);exports.RadialGradient=RadialGradient;var Rect=function(_WebShape13){(0,_inherits2.default)(Rect,_WebShape13);function Rect(){(0,_classCallCheck2.default)(this,Rect);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Rect).apply(this,arguments));}(0,_createClass2.default)(Rect,[{key:"render",value:function render(){return createElement('rect',prepare(this));}}]);return Rect;}(WebShape);exports.Rect=Rect;var Stop=function(_WebShape14){(0,_inherits2.default)(Stop,_WebShape14);function Stop(){(0,_classCallCheck2.default)(this,Stop);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Stop).apply(this,arguments));}(0,_createClass2.default)(Stop,[{key:"render",value:function render(){return createElement('stop',prepare(this));}}]);return Stop;}(WebShape);exports.Stop=Stop;var Svg=function(_WebShape15){(0,_inherits2.default)(Svg,_WebShape15);function Svg(){(0,_classCallCheck2.default)(this,Svg);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Svg).apply(this,arguments));}(0,_createClass2.default)(Svg,[{key:"render",value:function render(){return createElement('svg',prepare(this));}}]);return Svg;}(WebShape);exports.Svg=Svg;var Symbol=function(_WebShape16){(0,_inherits2.default)(Symbol,_WebShape16);function Symbol(){(0,_classCallCheck2.default)(this,Symbol);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Symbol).apply(this,arguments));}(0,_createClass2.default)(Symbol,[{key:"render",value:function render(){return createElement('symbol',prepare(this));}}]);return Symbol;}(WebShape);exports.Symbol=Symbol;var Text=function(_WebShape17){(0,_inherits2.default)(Text,_WebShape17);function Text(){(0,_classCallCheck2.default)(this,Text);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Text).apply(this,arguments));}(0,_createClass2.default)(Text,[{key:"render",value:function render(){return createElement('text',prepare(this));}}]);return Text;}(WebShape);exports.Text=Text;var TSpan=function(_WebShape18){(0,_inherits2.default)(TSpan,_WebShape18);function TSpan(){(0,_classCallCheck2.default)(this,TSpan);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(TSpan).apply(this,arguments));}(0,_createClass2.default)(TSpan,[{key:"render",value:function render(){return createElement('tspan',prepare(this));}}]);return TSpan;}(WebShape);exports.TSpan=TSpan;var TextPath=function(_WebShape19){(0,_inherits2.default)(TextPath,_WebShape19);function TextPath(){(0,_classCallCheck2.default)(this,TextPath);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(TextPath).apply(this,arguments));}(0,_createClass2.default)(TextPath,[{key:"render",value:function render(){return createElement('textPath',prepare(this));}}]);return TextPath;}(WebShape);exports.TextPath=TextPath;var Use=function(_WebShape20){(0,_inherits2.default)(Use,_WebShape20);function Use(){(0,_classCallCheck2.default)(this,Use);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Use).apply(this,arguments));}(0,_createClass2.default)(Use,[{key:"render",value:function render(){return createElement('use',prepare(this));}}]);return Use;}(WebShape);exports.Use=Use;var Mask=function(_WebShape21){(0,_inherits2.default)(Mask,_WebShape21);function Mask(){(0,_classCallCheck2.default)(this,Mask);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Mask).apply(this,arguments));}(0,_createClass2.default)(Mask,[{key:"render",value:function render(){return createElement('mask',prepare(this));}}]);return Mask;}(WebShape);exports.Mask=Mask;var ForeignObject=function(_WebShape22){(0,_inherits2.default)(ForeignObject,_WebShape22);function ForeignObject(){(0,_classCallCheck2.default)(this,ForeignObject);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ForeignObject).apply(this,arguments));}(0,_createClass2.default)(ForeignObject,[{key:"render",value:function render(){return createElement('foreignObject',prepare(this));}}]);return ForeignObject;}(WebShape);exports.ForeignObject=ForeignObject;var Marker=function(_WebShape23){(0,_inherits2.default)(Marker,_WebShape23);function Marker(){(0,_classCallCheck2.default)(this,Marker);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Marker).apply(this,arguments));}(0,_createClass2.default)(Marker,[{key:"render",value:function render(){return createElement('marker',prepare(this));}}]);return Marker;}(WebShape);exports.Marker=Marker;var Pattern=function(_WebShape24){(0,_inherits2.default)(Pattern,_WebShape24);function Pattern(){(0,_classCallCheck2.default)(this,Pattern);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Pattern).apply(this,arguments));}(0,_createClass2.default)(Pattern,[{key:"render",value:function render(){return createElement('pattern',prepare(this));}}]);return Pattern;}(WebShape);exports.Pattern=Pattern;var _default=Svg;exports.default=_default;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(265);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

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

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 265 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__(110);

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var newStyle = {};
    var requiredPrefixes = prefixProperties[property];
    var capitalizedProperty = (0, _capitalizeString2.default)(property);
    var keys = Object.keys(style);
    for (var i = 0; i < keys.length; i++) {
      var styleProperty = keys[i];
      if (styleProperty === property) {
        for (var j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }
      newStyle[styleProperty] = style[styleProperty];
    }
    return newStyle;
  }
  return style;
}

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(101);

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(95),r=__webpack_require__(272);function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0}}b&&ra()}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b))}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a])}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea()}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La()}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return!0;if(Oa.call(Pa,a))return!1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return!1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new v(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new v(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new v(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new v(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new v(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new v(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new v(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new v(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new v(a,5,!1,a.toLowerCase(),null,!1)});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C[b]=new v(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!0)});var Wa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var Ya=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,Za=E?Symbol.for("react.element"):60103,$a=E?Symbol.for("react.portal"):60106,ab=E?Symbol.for("react.fragment"):60107,bb=E?Symbol.for("react.strict_mode"):60108,cb=E?Symbol.for("react.profiler"):60114,db=E?Symbol.for("react.provider"):60109,eb=E?Symbol.for("react.context"):60110,fb=E?Symbol.for("react.concurrent_mode"):60111,gb=E?Symbol.for("react.forward_ref"):60112,hb=E?Symbol.for("react.suspense"):60113,ib=E?Symbol.for("react.suspense_list"):
60120,jb=E?Symbol.for("react.memo"):60115,kb=E?Symbol.for("react.lazy"):60116,lb=E?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return"function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return"Fragment";case $a:return"Portal";case cb:return"Profiler";case bb:return"StrictMode";case hb:return"Suspense";case ib:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return"Context.Consumer";case db:return"Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d)}finally{(Ja=f)||La()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{Ma(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else{Ja=!0;try{Fa(Ce,a)}finally{Ja=!1,La()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Wa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null)}var m=0!==(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g))}S!==
jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};Ha=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd)},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.13.1",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.13.1";


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(273);
} else {}


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(275);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = emptyFunction;

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(95);

// -- Inlined from fbjs --

var emptyObject = {};

if (false) {}

var validateFormat = function validateFormat(format) {};

if (false) {}

function _invariant(condition, format, a, b, c, d, e, f) {
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

var warning = function(){};

if (false) { var printWarning; }

// /-- Inlined from fbjs --

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (false) {} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Similar to ReactClassInterface but for static methods.
   */
  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (false) {}
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (false) {}
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (false) {}
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (false) {}
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (false) { var isMixinValid, typeofSpec; }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (false) {}
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
          ? ReactClassStaticInterface[name]
          : null;

        _invariant(
          specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClass: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be ' +
            'due to a mixin.',
          name
        );

        Constructor[name] = createMergedResultFunction(Constructor[name], property);

        return;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (false) { var _bind, componentName; }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (false) {}
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (false) {}

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (false) {}
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (false) {}

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (false) {}

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */


var ExecutionEnvironment = __webpack_require__(5);

var performance;

if (ExecutionEnvironment.canUseDOM) {
  performance = window.performance || window.msPerformance || window.webkitPerformance;
}

module.exports = performance || {};

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(96);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(19));var _reactNative=__webpack_require__(99);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var PRESS_RETENTION_OFFSET={top:20,left:20,right:20,bottom:30};var Mixin=_reactNative.Touchable.Mixin;var _touchableHandleStartShouldSetResponder=Mixin.touchableHandleStartShouldSetResponder,_touchableHandleResponderTerminationRequest=Mixin.touchableHandleResponderTerminationRequest,_touchableHandleResponderGrant=Mixin.touchableHandleResponderGrant,_touchableHandleResponderMove=Mixin.touchableHandleResponderMove,_touchableHandleResponderRelease=Mixin.touchableHandleResponderRelease,_touchableHandleResponderTerminate=Mixin.touchableHandleResponderTerminate,touchableGetInitialState=Mixin.touchableGetInitialState;var SvgTouchableMixin=_objectSpread({},Mixin,{touchableHandleStartShouldSetResponder:function touchableHandleStartShouldSetResponder(e){var onStartShouldSetResponder=this.props.onStartShouldSetResponder;if(onStartShouldSetResponder){return onStartShouldSetResponder(e);}else{return _touchableHandleStartShouldSetResponder.call(this,e);}},touchableHandleResponderTerminationRequest:function touchableHandleResponderTerminationRequest(e){var onResponderTerminationRequest=this.props.onResponderTerminationRequest;if(onResponderTerminationRequest){return onResponderTerminationRequest(e);}else{return _touchableHandleResponderTerminationRequest.call(this,e);}},touchableHandleResponderGrant:function touchableHandleResponderGrant(e){var onResponderGrant=this.props.onResponderGrant;if(onResponderGrant){return onResponderGrant(e);}else{return _touchableHandleResponderGrant.call(this,e);}},touchableHandleResponderMove:function touchableHandleResponderMove(e){var onResponderMove=this.props.onResponderMove;if(onResponderMove){return onResponderMove(e);}else{return _touchableHandleResponderMove.call(this,e);}},touchableHandleResponderRelease:function touchableHandleResponderRelease(e){var onResponderRelease=this.props.onResponderRelease;if(onResponderRelease){return onResponderRelease(e);}else{return _touchableHandleResponderRelease.call(this,e);}},touchableHandleResponderTerminate:function touchableHandleResponderTerminate(e){var onResponderTerminate=this.props.onResponderTerminate;if(onResponderTerminate){return onResponderTerminate(e);}else{return _touchableHandleResponderTerminate.call(this,e);}},touchableHandlePress:function touchableHandlePress(e){var onPress=this.props.onPress;onPress&&onPress(e);},touchableHandleActivePressIn:function touchableHandleActivePressIn(e){var onPressIn=this.props.onPressIn;onPressIn&&onPressIn(e);},touchableHandleActivePressOut:function touchableHandleActivePressOut(e){var onPressOut=this.props.onPressOut;onPressOut&&onPressOut(e);},touchableHandleLongPress:function touchableHandleLongPress(e){var onLongPress=this.props.onLongPress;onLongPress&&onLongPress(e);},touchableGetPressRectOffset:function touchableGetPressRectOffset(){var pressRetentionOffset=this.props.pressRetentionOffset;return pressRetentionOffset||PRESS_RETENTION_OFFSET;},touchableGetHitSlop:function touchableGetHitSlop(){var hitSlop=this.props.hitSlop;return hitSlop;},touchableGetHighlightDelayMS:function touchableGetHighlightDelayMS(){var delayPressIn=this.props.delayPressIn;return delayPressIn||0;},touchableGetLongPressDelayMS:function touchableGetLongPressDelayMS(){var delayLongPress=this.props.delayLongPress;return delayLongPress===0?0:delayLongPress||500;},touchableGetPressOutDelayMS:function touchableGetPressOutDelayMS(){var delayPressOut=this.props.delayPressOut;return delayPressOut||0;}});var touchKeys=Object.keys(SvgTouchableMixin);var touchVals=touchKeys.map(function(key){return SvgTouchableMixin[key];});var numTouchKeys=touchKeys.length;var _default=function _default(target){for(var i=0;i<numTouchKeys;i++){var key=touchKeys[i];var val=touchVals[i];if(typeof val==='function'){target[key]=val.bind(target);}else{target[key]=val;}}target.state=touchableGetInitialState();};exports.default=_default;

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(96);Object.defineProperty(exports,"__esModule",{value:true});exports.resolve=resolve;var _extends2=_interopRequireDefault(__webpack_require__(100));var _toConsumableArray2=_interopRequireDefault(__webpack_require__(7));var _reactNative=__webpack_require__(99);function resolve(styleProp,cleanedProps){if(styleProp){return _reactNative.StyleSheet?[styleProp,cleanedProps]:styleProp[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]?Object.assign.apply(Object,[{}].concat((0,_toConsumableArray2.default)(styleProp),[cleanedProps])):(0,_extends2.default)({},styleProp,cleanedProps);}else{return cleanedProps;}}

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),
/* 283 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(94);

var isNativeReflectConstruct = __webpack_require__(285);

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 285 */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 286 */
/***/ (function(module, exports) {

var process=module.exports={};var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){return setTimeout(fun,0);}if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{return cachedSetTimeout(fun,0);}catch(e){try{return cachedSetTimeout.call(null,fun,0);}catch(e){return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){return clearTimeout(marker);}if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{return cachedClearTimeout(marker);}catch(e){try{return cachedClearTimeout.call(null,marker);}catch(e){return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[];};process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};

/***/ }),
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ registerRootComponent; });

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/AppRegistry/index.js + 2 modules
var AppRegistry = __webpack_require__(44);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo/build/environment/react-native-logs.fx.js
AppRegistry["a" /* default */];var originalWarn=console.warn;console.warn=function warn(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}if(args.length>0&&typeof args[0]==='string'&&(/^Require cycle: .*node_modules/.test(args[0])||/Use UIManager\.getViewManagerConfig\('LottieAnimationView'\) instead\./.test(args[0])||/ReactNative\.NativeModules\.LottieAnimationView\.getConstants/.test(args[0]))){return;}originalWarn.apply(console,args);};var originalError=console.error;console.error=function error(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}if(args.length>0&&typeof args[0]==='string'&&/^Warning: .* has been extracted/.test(args[0])){return;}originalError.apply(console,args);};
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo/build/Expo.fx.web.js

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/Platform/index.js
var Platform = __webpack_require__(15);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(19);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(10);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(16);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(26);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(29);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(20);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-error-recovery/build/ErroRecoveryStore.js
var recoveredPropsToSave=null;function getRecoveryPropsToSave(){return recoveredPropsToSave;}function setRecoveryPropsToSave(props){recoveredPropsToSave=JSON.stringify(props);}
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@unimodules/react-native-adapter/build/Platform.js + 1 modules
var build_Platform = __webpack_require__(133);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-error-recovery/build/ExpoErrorRecovery.web.js
var LOCAL_STORAGE_KEY='EXPO_ERROR_RECOVERY_STORAGE';function _consumeRecoveryProps(){if(!build_Platform["a" /* default */].isDOMAvailable)return null;try{var props=localStorage.getItem(LOCAL_STORAGE_KEY);localStorage.removeItem(LOCAL_STORAGE_KEY);return props;}catch(e){}return null;}/* harmony default export */ var ExpoErrorRecovery_web = ({get name(){return'ExpoErrorRecovery';},saveRecoveryProps:function saveRecoveryProps(props){if(!build_Platform["a" /* default */].isDOMAvailable)return;try{localStorage.setItem(LOCAL_STORAGE_KEY,props);}catch(e){}},recoveredProps:_consumeRecoveryProps()});
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-error-recovery/build/ErrorRecovery.js
var recoveredProps=_getRecoveredProps();function setRecoveryProps(props){setRecoveryPropsToSave(props);}function _getRecoveredProps(){if(ExpoErrorRecovery_web.recoveredProps){return JSON.parse(ExpoErrorRecovery_web.recoveredProps);}return null;}
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react/index.js
var react = __webpack_require__(0);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo/build/launch/withExpoRoot.web.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=getPrototypeOf_default()(Derived),result;if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return possibleConstructorReturn_default()(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function withExpoRoot(AppRootComponent){return function(_React$Component){inherits_default()(ExpoRootComponent,_React$Component);var _super=_createSuper(ExpoRootComponent);function ExpoRootComponent(){classCallCheck_default()(this,ExpoRootComponent);return _super.apply(this,arguments);}createClass_default()(ExpoRootComponent,[{key:"render",value:function render(){var props=_objectSpread(_objectSpread({},this.props),{},{exp:_objectSpread(_objectSpread({},this.props.exp),{},{errorRecovery:recoveredProps})});return react["createElement"](AppRootComponent,Object.assign({},props));}}]);return ExpoRootComponent;}(react["Component"]);}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo/build/launch/registerRootComponent.js
function registerRootComponent(component){AppRegistry["a" /* default */].registerComponent('main',function(){return withExpoRoot(component);});if(Platform["a" /* default */].OS==='web'){var _document$getElementB;var rootTag=(_document$getElementB=document.getElementById('root'))!=null?_document$getElementB:document.getElementById('main');AppRegistry["a" /* default */].runApplication('main',{rootTag:rootTag});}}

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Asset_Asset; });

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(10);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(16);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@unimodules/react-native-adapter/build/Platform.js + 1 modules
var Platform = __webpack_require__(133);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/modules/AssetRegistry/index.js
var AssetRegistry = __webpack_require__(93);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(19);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/path-browserify/index.js
var path_browserify = __webpack_require__(105);
var path_browserify_default = /*#__PURE__*/__webpack_require__.n(path_browserify);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/react-native-web/dist/exports/PixelRatio/index.js
var PixelRatio = __webpack_require__(47);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/url-parse/index.js
var url_parse = __webpack_require__(46);
var url_parse_default = /*#__PURE__*/__webpack_require__.n(url_parse);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-asset/build/AssetSourceResolver.web.js + 2 modules
var AssetSourceResolver_web = __webpack_require__(68);

// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-asset/build/PlatformUtils.web.js
var PlatformUtils_web = __webpack_require__(34);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-asset/build/AssetSources.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var assetMapOverride=Object(PlatformUtils_web["c" /* getManifest */])().assetMapOverride;function selectAssetSource(meta){if(assetMapOverride&&assetMapOverride.hasOwnProperty(meta.hash)){meta=_objectSpread(_objectSpread({},meta),assetMapOverride[meta.hash]);}var scale=AssetSourceResolver_web["a" /* default */].pickScale(meta.scales,PixelRatio["a" /* default */].get());var index=meta.scales.findIndex(function(s){return s===scale;});var hash=meta.fileHashes?meta.fileHashes[index]||meta.fileHashes[0]:meta.hash;var uri=meta.fileUris?meta.fileUris[index]||meta.fileUris[0]:meta.uri;if(uri){return{uri:resolveUri(uri),hash:hash};}var assetUrlOverride=Object(PlatformUtils_web["c" /* getManifest */])().assetUrlOverride;if(assetUrlOverride){var _uri=path_browserify_default.a.join(assetUrlOverride,hash);return{uri:resolveUri(_uri),hash:hash};}var fileScale=scale===1?'':"@"+scale+"x";var fileExtension=meta.type?"."+encodeURIComponent(meta.type):'';var suffix="/"+encodeURIComponent(meta.name)+fileScale+fileExtension+"?platform="+encodeURIComponent(Platform["a" /* default */].OS)+"&hash="+encodeURIComponent(meta.hash);if(/^https?:\/\//.test(meta.httpServerLocation)){var _uri2=meta.httpServerLocation+suffix;return{uri:_uri2,hash:hash};}if(Object(PlatformUtils_web["c" /* getManifest */])().developer){var baseUrl=new url_parse_default.a(Object(PlatformUtils_web["c" /* getManifest */])().bundleUrl);baseUrl.set('pathname',meta.httpServerLocation+suffix);return{uri:baseUrl.href,hash:hash};}return{uri:"https://d1wp6m56sqw74a.cloudfront.net/~assets/"+encodeURIComponent(hash),hash:hash};}function resolveUri(uri){if(!PlatformUtils_web["d" /* manifestBaseUrl */]){return uri;}var _URL=new url_parse_default.a(uri),protocol=_URL.protocol;if(protocol!==''){return uri;}var baseUrl=new url_parse_default.a(PlatformUtils_web["d" /* manifestBaseUrl */]);var resolvedPath=uri.startsWith('/')?uri:path_browserify_default.a.join(baseUrl.pathname,uri);baseUrl.set('pathname',resolvedPath);return baseUrl.href;}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-asset/build/AssetUris.js
function getFilename(url){var _URL=new url_parse_default.a(url,{}),pathname=_URL.pathname;return pathname.substring(pathname.lastIndexOf('/')+1);}function getFileExtension(url){var filename=getFilename(url);var dotIndex=filename.lastIndexOf('.');return dotIndex>0?filename.substring(dotIndex):'';}function getManifestBaseUrl(manifestUrl){var urlObject=new url_parse_default.a(manifestUrl,{});if(urlObject.protocol==='exp:'){urlObject.set('protocol','http:');}else if(urlObject.protocol==='exps:'){urlObject.set('protocol','https:');}var directory=urlObject.pathname.substring(0,urlObject.pathname.lastIndexOf('/')+1);urlObject.set('pathname',directory);urlObject.set('query','');urlObject.set('hash','');return urlObject.href;}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-asset/build/ImageAssets.js
function isImageType(type){return /^(jpeg|jpg|gif|png|bmp|webp|heic)$/i.test(type);}function getImageInfoAsync(url){return new Promise(function(resolve,reject){var img=new Image();img.onerror=reject;img.onload=function(){resolve({name:getFilename(url),width:img.naturalWidth,height:img.naturalHeight});};img.src=url;});}
// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-asset/build/LocalAssets.web.js
function getLocalAssetUri(hash,type){return null;}
// EXTERNAL MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-asset/build/resolveAssetSource.web.js
var resolveAssetSource_web = __webpack_require__(131);

// CONCATENATED MODULE: /home/danny/Projects/InventedSpelling/node_modules/expo-asset/build/Asset.js
var Asset_Asset=function(){function Asset(_ref){var name=_ref.name,type=_ref.type,_ref$hash=_ref.hash,hash=_ref$hash===void 0?null:_ref$hash,uri=_ref.uri,width=_ref.width,height=_ref.height;classCallCheck_default()(this,Asset);this.hash=null;this.localUri=null;this.width=null;this.height=null;this.downloading=false;this.downloaded=false;this._downloadCallbacks=[];this.name=name;this.type=type;this.hash=hash;this.uri=uri;if(typeof width==='number'){this.width=width;}if(typeof height==='number'){this.height=height;}if(hash){this.localUri=getLocalAssetUri(hash,type);if(this.localUri){this.downloaded=true;}}if(Platform["a" /* default */].OS==='web'){if(!name){this.name=getFilename(uri);}if(!type){this.type=getFileExtension(uri);}}}createClass_default()(Asset,[{key:"downloadAsync",value:function downloadAsync(){var _this=this;var _await$ImageAssets$ge,width,height,name;return regenerator_default.a.async(function downloadAsync$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!this.downloaded){_context.next=2;break;}return _context.abrupt("return",this);case 2:if(!this.downloading){_context.next=6;break;}_context.next=5;return regenerator_default.a.awrap(new Promise(function(resolve,reject){_this._downloadCallbacks.push({resolve:resolve,reject:reject});}));case 5:return _context.abrupt("return",this);case 6:this.downloading=true;_context.prev=7;if(!(Platform["a" /* default */].OS==='web')){_context.next=22;break;}if(!isImageType(this.type)){_context.next=21;break;}_context.next=12;return regenerator_default.a.awrap(getImageInfoAsync(this.uri));case 12:_await$ImageAssets$ge=_context.sent;width=_await$ImageAssets$ge.width;height=_await$ImageAssets$ge.height;name=_await$ImageAssets$ge.name;this.width=width;this.height=height;this.name=name;_context.next=22;break;case 21:this.name=getFilename(this.uri);case 22:_context.next=24;return regenerator_default.a.awrap(Object(PlatformUtils_web["b" /* downloadAsync */])(this.uri,this.hash,this.type,this.name));case 24:this.localUri=_context.sent;this.downloaded=true;this._downloadCallbacks.forEach(function(_ref2){var resolve=_ref2.resolve;return resolve();});_context.next=33;break;case 29:_context.prev=29;_context.t0=_context["catch"](7);this._downloadCallbacks.forEach(function(_ref3){var reject=_ref3.reject;return reject(_context.t0);});throw _context.t0;case 33:_context.prev=33;this.downloading=false;this._downloadCallbacks=[];return _context.finish(33);case 37:return _context.abrupt("return",this);case 38:case"end":return _context.stop();}}},null,this,[[7,29,33,37]],Promise);}}],[{key:"loadAsync",value:function loadAsync(moduleId){var moduleIds=Array.isArray(moduleId)?moduleId:[moduleId];return Promise.all(moduleIds.map(function(moduleId){return Asset.fromModule(moduleId).downloadAsync();}));}},{key:"fromModule",value:function fromModule(virtualAssetModule){if(typeof virtualAssetModule==='string'){return Asset.fromURI(virtualAssetModule);}var meta=Object(AssetRegistry["a" /* getAssetByID */])(virtualAssetModule);if(!meta){throw new Error("Module \""+virtualAssetModule+"\" is missing from the asset registry");}if(!PlatformUtils_web["a" /* IS_ENV_WITH_UPDATES_ENABLED */]){var _resolveAssetSource=Object(resolveAssetSource_web["a" /* default */])(virtualAssetModule),uri=_resolveAssetSource.uri;var asset=new Asset({name:meta.name,type:meta.type,hash:meta.hash,uri:uri,width:meta.width,height:meta.height});if(Platform["a" /* default */].OS==='android'&&!uri.includes(':')&&(meta.width||meta.height)){asset.localUri=asset.uri;asset.downloaded=true;}Asset.byHash[meta.hash]=asset;return asset;}return Asset.fromMetadata(meta);}},{key:"fromMetadata",value:function fromMetadata(meta){var metaHash=meta.hash;if(Asset.byHash[metaHash]){return Asset.byHash[metaHash];}var _AssetSources$selectA=selectAssetSource(meta),uri=_AssetSources$selectA.uri,hash=_AssetSources$selectA.hash;var asset=new Asset({name:meta.name,type:meta.type,hash:hash,uri:uri,width:meta.width,height:meta.height});Asset.byHash[metaHash]=asset;return asset;}},{key:"fromURI",value:function fromURI(uri){if(Asset.byUri[uri]){return Asset.byUri[uri];}var type='';if(uri.indexOf(';base64')>-1){type=uri.split(';')[0].split('/')[1];}else{var extension=getFileExtension(uri);type=extension.startsWith('.')?extension.substring(1):extension;}var asset=new Asset({name:'',type:type,hash:null,uri:uri});Asset.byUri[uri]=asset;return asset;}}]);return Asset;}();Asset_Asset.byHash={};Asset_Asset.byUri={};

/***/ })
]]);
//# sourceMappingURL=2.0deb3b26.chunk.js.map