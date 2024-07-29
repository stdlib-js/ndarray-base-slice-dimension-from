"use strict";var l=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var o=l(function(p,u){"use strict";var v=require("@stdlib/slice-base-args2multislice"),c=require("@stdlib/slice-ctor"),f=require("@stdlib/ndarray-base-ndims"),q=require("@stdlib/ndarray-base-slice"),g=require("@stdlib/ndarray-base-normalize-index"),w=require("@stdlib/array-base-filled"),s=require("@stdlib/string-format");function b(i,r,m,t,d){var n,e,a;if(e=f(i),e===0)throw new TypeError(s("invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.",e));if(a=g(r,e-1),a===-1)throw new RangeError(s("invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",e,r));return n=w(null,e),n[a]=new c(m,null),q(i,v(n),t,d)}u.exports=b});var h=o();module.exports=h;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
