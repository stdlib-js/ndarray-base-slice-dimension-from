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

'use strict';

var array = require( '@stdlib/ndarray-array' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var zeroTo = require( '@stdlib/array-base-zero-to' );
var sliceDimensionFrom = require( './../lib' );

// Create a linear ndarray buffer:
var buf = zeroTo( 27 );

// Create an ndarray:
var x = array( buf, {
	'shape': [ 3, 3, 3 ]
});

// Get the last two rows of each matrix:
var y1 = sliceDimensionFrom( x, 1, 1, false, false );
// returns <ndarray>

var a1 = ndarray2array( y1 );
console.log( a1 );
// => [ [ [ 3, 4, 5 ], [ 6, 7, 8 ] ], [ [ 12, 13, 14 ], [ 15, 16, 17 ] ], [ [ 21, 22, 23 ], [ 24, 25, 26 ] ] ]

// Get the last columns of each matrix:
var y2 = sliceDimensionFrom( x, 2, 1, false, false );
// returns <ndarray>

var a2 = ndarray2array( y2 );
console.log( a2 );
// => [ [ [ 1, 2 ], [ 4, 5 ], [ 7, 8 ] ], [ [ 10, 11 ], [ 13, 14 ], [ 16, 17 ] ], [ [ 19, 20 ], [ 22, 23 ], [ 25, 26 ] ] ]

// Get the last two matrices:
var y3 = sliceDimensionFrom( x, 0, 1, false, false );
// returns <ndarray>

var a3 = ndarray2array( y3 );
console.log( a3 );
// => [ [ [ 9, 10, 11 ], [ 12, 13, 14 ], [ 15, 16, 17 ] ], [ [ 18, 19, 20 ], [ 21, 22, 23 ], [ 24, 25, 26 ] ] ]
