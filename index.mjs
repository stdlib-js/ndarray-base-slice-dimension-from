// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndims@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function m(m,o,l,a,j){var h,p,v;if(0===(p=r(m)))throw new TypeError(d("invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.",p));if(-1===(v=n(o,p-1)))throw new RangeError(d("invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",p,o));return(h=t(null,p))[v]=new s(l,null),i(m,e(h),a,j)}export{m as default};
//# sourceMappingURL=index.mjs.map
