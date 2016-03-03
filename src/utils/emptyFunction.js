/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */

function makeEmptyFunction(arg) {
   return function() {
     return arg;
   };
}

function emptyFunction() {}

emptyFunction.thatReturnsFalse = makeEmptyFunction(false)
emptyFunction.thatReturnsTrue = makeEmptyFunction(true)
emptyFunction.thatReturnsNull = makeEmptyFunction(null)
emptyFunction.thatReturnsThis = function() { return this }
emptyFunction.thatReturnsArgument = function(arg) { return arg }

export default emptyFunction