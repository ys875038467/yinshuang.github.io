var _typeof3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(e){return void 0===e?"undefined":_typeof3(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof3(e)},_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return void 0===e?"undefined":_typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof2(e)},Oauthcallback=function(n){var o={};function r(e){var t;return(o[e]||(t=o[e]={i:e,l:!1,exports:{}},n[e].call(t.exports,t,t.exports,r),t.l=!0,t)).exports}return r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==(void 0===t?"undefined":_typeof(t))&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){var o=n(1);e.exports=function(){var e=o.Query.parse();e.code&&(window.location.href=decodeURIComponent(e.bkurl+"?code="+e.code))}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.http=t.Query=t.isString=void 0,t.getTargetContainer=function(e){return e instanceof Element?e:o(e)?document.getElementById(e):document.createElement("div")};var c=n(2),o=t.isString=function(e){return"[object String]"===toString.call(e)},l=t.Query={parse:function(e){var n,t=0<arguments.length&&void 0!==e?e:window.location.search;return t?(n={},("?"===t[0]?t.substring(1):t).split("&").forEach(function(e){var e=function(e){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e)){var t=e,n=[],o=!0,e=!1,r=void 0;try{for(var i,u=t[Symbol.iterator]();!(o=(i=u.next()).done)&&(n.push(i.value),2!==n.length);o=!0);}catch(t){e=!0,r=t}finally{try{!o&&u.return&&u.return()}finally{if(e)throw r}}return n}throw new TypeError("Invalid attempt to destructure non-iterable instance")}(e.split("=")),t=e[0],e=e[1];t&&(n[t]=e)}),n):{}},stringify:function(t,e){var n=1<arguments.length&&void 0!==e?e:"?",o=Object.keys(t).map(function(e){return e+"="+encodeURIComponent(t[e]||"")}).join("&");return o?n+o:""}};function r(f){return function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"https://gitee.com/api/v5",r=new XMLHttpRequest,o=localStorage.getItem(c.LS_ACCESS_TOKEN_KEY),n=""+n+e,i=null,u=("GET"!==f&&"DELETE"!==f||(n+=l.stringify(t)),new Promise(function(n,o){r.addEventListener("load",function(){var e=r.getResponseHeader("content-type"),t=r.responseText;/json/.test(e)?(e=r.responseText?JSON.parse(t):{}).message?o(new Error(e.message)):n(e):n(t)}),r.addEventListener("error",function(e){return o(e)})}));return r.open(f,n,!0),r.setRequestHeader("Accept","application/json, text/plain"),o&&r.setRequestHeader("Authorization","token "+o),"GET"!==f&&"DELETE"!==f&&(i=JSON.stringify(t),r.setRequestHeader("Content-Type","application/json")),r.send(i),u}}t.http={get:r("GET"),post:r("POST"),delete:r("DELETE"),put:r("PUT")}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.LS_ACCESS_TOKEN_KEY="giteement-comments-token",t.LS_USER_KEY="giteement-user-info",t.NOT_INITIALIZED_ERROR=new Error("Comments Not Initialized")}]);