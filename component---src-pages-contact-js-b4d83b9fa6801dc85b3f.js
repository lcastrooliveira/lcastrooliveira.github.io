(self.webpackChunklcastrooliveira_blog=self.webpackChunklcastrooliveira_blog||[]).push([[501],{6923:function(t,e,r){var n;!function(o){"use strict";function i(t){var e=t&&t.Promise||o.Promise,r=t&&t.XMLHttpRequest||o.XMLHttpRequest,n=o;return function(){var t=Object.create(n,{fetch:{value:void 0,writable:!0}});return function(t){if(!t.fetch){var n="URLSearchParams"in t,o="Symbol"in t&&"iterator"in Symbol,i="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),a="FormData"in t,s="ArrayBuffer"in t;if(s)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=function(t){return t&&DataView.prototype.isPrototypeOf(t)},f=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};m.prototype.append=function(t,e){t=h(t),e=p(e);var r=this.map[t];this.map[t]=r?r+","+e:e},m.prototype.delete=function(t){delete this.map[h(t)]},m.prototype.get=function(t){return t=h(t),this.has(t)?this.map[t]:null},m.prototype.has=function(t){return this.map.hasOwnProperty(h(t))},m.prototype.set=function(t,e){this.map[h(t)]=p(e)},m.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},m.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),y(t)},m.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),y(t)},m.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),y(t)},o&&(m.prototype[Symbol.iterator]=m.prototype.entries);var l=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];x.prototype.clone=function(){return new x(this,{body:this._bodyInit})},_.call(x.prototype),_.call(T.prototype),T.prototype.clone=function(){return new T(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new m(this.headers),url:this.url})},T.error=function(){var t=new T(null,{status:0,statusText:""});return t.type="error",t};var d=[301,302,303,307,308];T.redirect=function(t,e){if(-1===d.indexOf(e))throw new RangeError("Invalid status code");return new T(null,{status:e,headers:{location:t}})},t.Headers=m,t.Request=x,t.Response=T,t.fetch=function(t,n){return new e((function(e,o){var a=new x(t,n),s=new r;s.onload=function(){var t,r,n={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",r=new m,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var e=t.split(":"),n=e.shift().trim();if(n){var o=e.join(":").trim();r.append(n,o)}})),r)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;e(new T(o,n))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(a.method,a.url,!0),"include"===a.credentials?s.withCredentials=!0:"omit"===a.credentials&&(s.withCredentials=!1),"responseType"in s&&i&&(s.responseType="blob"),a.headers.forEach((function(t,e){s.setRequestHeader(e,t)})),s.send(void 0===a._bodyInit?null:a._bodyInit)}))},t.fetch.polyfill=!0}function h(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function p(t){return"string"!=typeof t&&(t=String(t)),t}function y(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function m(t){this.map={},t instanceof m?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function v(t){if(t.bodyUsed)return e.reject(new TypeError("Already read"));t.bodyUsed=!0}function b(t){return new e((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function w(t){var e=new FileReader,r=b(e);return e.readAsArrayBuffer(t),r}function g(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(i&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(a&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(n&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(s&&i&&c(t))this._bodyArrayBuffer=g(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!s||!ArrayBuffer.prototype.isPrototypeOf(t)&&!f(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=g(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=v(this);if(t)return t;if(this._bodyBlob)return e.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return e.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?v(this)||e.resolve(this._bodyArrayBuffer):this.blob().then(w)}),this.text=function(){var t,r,n,o=v(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,r=new FileReader,n=b(r),r.readAsText(t),n;if(this._bodyArrayBuffer)return e.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return e.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(A)}),this.json=function(){return this.text().then(JSON.parse)},this}function x(t,e){var r,n,o=(e=e||{}).body;if(t instanceof x){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new m(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new m(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),l.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function A(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function T(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new m(e.headers),this.url=e.url||"",this._initBody(t)}}(void 0!==t?t:this),{fetch:t.fetch,Headers:t.Headers,Request:t.Request,Response:t.Response}}()}void 0===(n=function(){return i}.call(e,r,e,t))||(t.exports=n)}("undefined"!=typeof self?self:void 0!==r.g?r.g:this)},9483:function(t,e,r){var n=r(7854),o=r(4411),i=r(6330),a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a constructor")}},1070:function(t,e,r){var n=r(7854);t.exports=n.Promise},8523:function(t,e,r){"use strict";var n=r(9662),o=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n})),this.resolve=n(e),this.reject=n(r)};t.exports.f=function(t){return new o(t)}},9478:function(t,e,r){var n=r(9670),o=r(111),i=r(8523);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},6707:function(t,e,r){var n=r(9670),o=r(9483),i=r(5112)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||null==(r=n(a)[i])?e:o(r)}},7727:function(t,e,r){"use strict";var n=r(2109),o=r(1913),i=r(1070),a=r(7293),s=r(5005),u=r(614),c=r(6707),f=r(9478),l=r(1320);if(n({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=c(this,s("Promise")),r=u(t);return this.then(r?function(r){return f(e,t()).then((function(){return r}))}:t,r?function(r){return f(e,t()).then((function(){throw r}))}:t)}}),!o&&u(i)){var d=s("Promise").prototype.finally;i.prototype.finally!==d&&l(i.prototype,"finally",d,{unsafe:!0})}},855:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return G}});var n=r(977),o=r(4029),i=r(9785),a=(r(7727),r(7294));var s=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){return e.reject(r)}))}))};var u=function(t){return new this((function(e,r){if(!t||void 0===t.length)return r(new TypeError(typeof t+" "+t+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var n=Array.prototype.slice.call(t);if(0===n.length)return e([]);var o=n.length;function i(t,r){if(r&&("object"==typeof r||"function"==typeof r)){var a=r.then;if("function"==typeof a)return void a.call(r,(function(e){i(t,e)}),(function(r){n[t]={status:"rejected",reason:r},0==--o&&e(n)}))}n[t]={status:"fulfilled",value:r},0==--o&&e(n)}for(var a=0;a<n.length;a++)i(a,n[a])}))},c=setTimeout,f="undefined"!=typeof setImmediate?setImmediate:null;function l(t){return Boolean(t&&void 0!==t.length)}function d(){}function h(t){if(!(this instanceof h))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],w(t,this)}function p(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,h._immediateFn((function(){var r=1===t._state?e.onFulfilled:e.onRejected;if(null!==r){var n;try{n=r(t._value)}catch(o){return void m(e.promise,o)}y(e.promise,n)}else(1===t._state?y:m)(e.promise,t._value)}))):t._deferreds.push(e)}function y(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if(e instanceof h)return t._state=3,t._value=e,void v(t);if("function"==typeof r)return void w((n=r,o=e,function(){n.apply(o,arguments)}),t)}t._state=1,t._value=e,v(t)}catch(i){m(t,i)}var n,o}function m(t,e){t._state=2,t._value=e,v(t)}function v(t){2===t._state&&0===t._deferreds.length&&h._immediateFn((function(){t._handled||h._unhandledRejectionFn(t._value)}));for(var e=0,r=t._deferreds.length;e<r;e++)p(t,t._deferreds[e]);t._deferreds=null}function b(t,e,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=r}function w(t,e){var r=!1;try{t((function(t){r||(r=!0,y(e,t))}),(function(t){r||(r=!0,m(e,t))}))}catch(n){if(r)return;r=!0,m(e,n)}}h.prototype.catch=function(t){return this.then(null,t)},h.prototype.then=function(t,e){var r=new this.constructor(d);return p(this,new b(t,e,r)),r},h.prototype.finally=s,h.all=function(t){return new h((function(e,r){if(!l(t))return r(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(t);if(0===n.length)return e([]);var o=n.length;function i(t,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,(function(e){i(t,e)}),r)}n[t]=a,0==--o&&e(n)}catch(u){r(u)}}for(var a=0;a<n.length;a++)i(a,n[a])}))},h.allSettled=u,h.resolve=function(t){return t&&"object"==typeof t&&t.constructor===h?t:new h((function(e){e(t)}))},h.reject=function(t){return new h((function(e,r){r(t)}))},h.race=function(t){return new h((function(e,r){if(!l(t))return r(new TypeError("Promise.race accepts an array"));for(var n=0,o=t.length;n<o;n++)h.resolve(t[n]).then(e,r)}))},h._immediateFn="function"==typeof f&&function(t){f(t)}||function(t){c(t,0)},h._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};var g=h,_=r(6923),x=r.n(_);function A(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function E(t,e,r){return e&&T(t.prototype,e),r&&T(t,r),t}var F="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",j=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;var S,B=function(t){return function(t){for(var e,r,n,o,i="",a=0,s=(t=String(t)).length%3;a<t.length;){if((r=t.charCodeAt(a++))>255||(n=t.charCodeAt(a++))>255||(o=t.charCodeAt(a++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");i+=F.charAt((e=r<<16|n<<8|o)>>18&63)+F.charAt(e>>12&63)+F.charAt(e>>6&63)+F.charAt(63&e)}return s?i.slice(0,s-3)+"===".substring(s):i}(JSON.stringify(t))},O=function(t){var e="@formspree/core@".concat("2.6.2");return t?"".concat(t," ").concat(e):e},C=function(){return navigator.webdriver||!!document.documentElement.getAttribute(function(t){if(t=String(t).replace(/[\t\n\f\r ]+/g,""),!j.test(t))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");t+="==".slice(2-(3&t.length));for(var e,r,n,o="",i=0;i<t.length;)e=F.indexOf(t.charAt(i++))<<18|F.indexOf(t.charAt(i++))<<12|(r=F.indexOf(t.charAt(i++)))<<6|(n=F.indexOf(t.charAt(i++))),o+=64===r?String.fromCharCode(e>>16&255):64===n?String.fromCharCode(e>>16&255,e>>8&255):String.fromCharCode(e>>16&255,e>>8&255,255&e);return o}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom},P=function(){function t(){A(this,t),this.loadedAt=1*new Date,this.webdriver=C()}return E(t,[{key:"teardown",value:function(){}},{key:"data",value:function(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}}]),t}(),R=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};A(this,t),this.project=e.project,"undefined"!=typeof window&&this.startBrowserSession()}return E(t,[{key:"startBrowserSession",value:function(){this.session||(this.session=new P)}},{key:"teardown",value:function(){this.session&&this.session.teardown()}},{key:"submitForm",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.endpoint||"https://formspree.io",o=r.fetchImpl||x()({Promise:g}).fetch,i=this.project?"".concat(n,"/p/").concat(this.project,"/f/").concat(t):"".concat(n,"/f/").concat(t),a=function(t){return t instanceof FormData?t:JSON.stringify(t)},s={Accept:"application/json","Formspree-Client":O(r.clientName)};this.session&&(s["Formspree-Session-Data"]=B(this.session.data())),e instanceof FormData||(s["Content-Type"]="application/json");var u={method:"POST",mode:"cors",body:a(e),headers:s};return o(i,u).then((function(t){return t.json().then((function(e){return{body:e,response:t}}))}))}}]),t}(),U=function(){var t;return S||(S=new R(t)),S};function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function I(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function D(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function k(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var q=a.createContext({client:void 0});q.displayName="Formspree";function L(){return(0,a.useContext)(q).client||U()}var M="2.2.4";function H(t){return void 0!==t.preventDefault}var N=function(t){var e=t.prefix,r=t.field,n=t.errors,o=D(t,["prefix","field","errors"]),i=(n||[]).find((function(t){return t.field==r}));return i?a.createElement("div",o,e," ",i.message):null},z=r(5414),V=r(6819),X=r(6896),G=function(t){var e=t.location,r=(0,i.Z)(),s=(0,V.ql)().locale,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=k((0,a.useState)(!1),2),n=r[0],o=r[1],i=k((0,a.useState)(!1),2),s=i[0],u=i[1],c=k((0,a.useState)([]),2),f=c[0],l=c[1],d=L(),h=e.client||d;if(!h)throw new Error("You must provide a Formspree client");if(!t)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');var p=!!e.debug,y=e.data;return[{submitting:n,succeeded:s,errors:f},function(r){var n=H(r)?function(t){t.preventDefault();var e=t.target;if("FORM"!=e.tagName)throw new Error("submit was triggered for a non-form element");return new FormData(e)}(r):r,i=function(t,e){n instanceof FormData?n.append(t,e):n=Object.assign(n,I({},t,e))};if("object"===Z(y))for(var a in y)"function"==typeof y[a]?i(a,y[a].call(null)):i(a,y[a]);return o(!0),h.submitForm(t,n,{endpoint:e.endpoint,clientName:"@formspree/react@".concat(M)}).then((function(t){var e,r=t.response.status;return 200===r?(p&&console.log("Form submitted",t),u(!0),l([])):r>=400&&r<500?((e=t.body).errors&&l(e.errors),p&&console.log("Validation error",t),u(!1)):(p&&console.log("Unexpected error",t),u(!1)),t})).catch((function(t){throw p&&console.log("Unexpected error",t),u(!1),t})).finally((function(){o(!1)}))},function(){o(!1),u(!1),l([])}]}("mrgjpoow"),c=u[0],f=u[1];return c.succeeded?(0,n.tZ)(X.Z,null,(0,n.tZ)(o.kC,{id:"contact-outer",color:"white",bg:"primary",sx:{flex:"1 1 auto",flexDirection:"column",padding:"20px"}},(0,n.tZ)(o.X6,null,r.formatMessage({id:"thanksContactForm"})),(0,n.tZ)(o.rU,{href:"/",style:{textDecoration:"underline"}},r.formatMessage({id:"goBackToBlogContactForm"})))):(0,n.tZ)(X.Z,null,(0,n.tZ)(z.Z,null,(0,n.tZ)("title",null,r.formatMessage({id:"getInTouchTitleContactForm"})),(0,n.tZ)("meta",{property:"og:title",content:r.formatMessage({id:"getInTouchTitleContactForm"})+" | lcastrooliveira.dev"}),(0,n.tZ)("meta",{property:"og:url",content:e.url}),(0,n.tZ)("meta",{property:"og:locale",content:s})),(0,n.tZ)(o.kC,{id:"contact-outer",as:"form",onSubmit:f,color:"white",bg:"primary",sx:{flex:"1 1 auto",flexDirection:"column"}},(0,n.tZ)(o.kC,{id:"contact-inner",p:2,sx:{flexDirection:"column",padding:"15px"}},(0,n.tZ)(o.X6,{style:{alignSelf:"center"}},r.formatMessage({id:"getInTouchTitleContactForm"})),(0,n.tZ)(o.__,{htmlFor:"email"},r.formatMessage({id:"emailAddressContactForm"})),(0,n.tZ)(o.II,{name:"email",id:"email",type:"email",mb:4,required:!0}),(0,n.tZ)(N,{prefix:"Email",field:"email",errors:c.errors}),(0,n.tZ)(o.__,{htmlFor:"message"},r.formatMessage({id:"messageContactForm"})),(0,n.tZ)(o.gx,{name:"message",id:"message",rows:8,mb:4,required:!0}),(0,n.tZ)(N,{prefix:"Message",field:"message",errors:c.errors}),(0,n.tZ)(o.zx,{variant:"secondary",sx:{":hover":{cursor:"pointer"},alignSelf:"flex-start"},type:"submit",disabled:c.submitting},r.formatMessage({id:"submitContactForm"})))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-b4d83b9fa6801dc85b3f.js.map