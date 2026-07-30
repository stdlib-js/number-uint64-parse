"use strict";var l=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(n){throw r=0,n}}};var o=l(function(T,v){"use strict";var m=require("@stdlib/array-uint32"),w=require("@stdlib/assert-is-between"),f=require("@stdlib/assert-is-integer").isPrimitive,h=require("@stdlib/assert-is-string").isPrimitive,c=require("@stdlib/assert-is-empty-string").isPrimitive,E=require("@stdlib/number-uint64-base-string2words").assign,q=require("@stdlib/number-uint64-ctor"),d=require("@stdlib/string-base-left-trim"),b=require("@stdlib/string-base-lowercase"),s=require("@stdlib/string-base-slice"),p=require("@stdlib/string-base-trim"),t=require("@stdlib/string-format"),y=/^0x/,S=/^0b/,R=/^0o/,V="0123456789abcdefghijklmnopqrstuvwxyz",g=new m(2);function x(i){var r=s(V,0,i);return new RegExp(t("[^%s]",r))}function F(i,r){var n,e,a;if(!h(i))throw new TypeError(t("invalid argument. First argument must be a string. Value: `%s`.",i));if(e=p(i),e[0]==="-")throw new SyntaxError(t("invalid argument. First argument must be a string encoding a nonnegative integer. Value: `%s`.",i));if(e[0]==="+"&&(e=d(s(e,1,e.length))),e=b(e),arguments.length<2)S.test(e)?n=2:R.test(e)?n=8:y.test(e)?n=16:n=10,n!==10&&(e=s(e,2));else if(f(r))if(w(r,2,36))n=r;else throw new RangeError(t("invalid argument. Second argument must be an integer on the interval [2, 36]. Value: `%s`.",r));else throw new TypeError(t("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(c(e))throw new SyntaxError(t("invalid argument. First argument must be a string encoding a nonnegative integer. Value: `%s`.",i));for(a=0;a<e.length-1&&e[a]==="0";)a+=1;if(e=s(e,a,e.length),x(n).test(e))throw new SyntaxError(t("invalid argument. First argument must be a string encoding a nonnegative integer. Value: `%s`.",i));try{E(e,n,g,1,0)}catch(u){throw u instanceof RangeError?new RangeError(t("invalid argument. First argument must be a string encoding a nonnegative integer on the interval [0, 2^64-1]. Value: `%s`.",i)):u}return q.of(g[0],g[1])}v.exports=F});var I=o();module.exports=I;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
