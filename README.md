
<!--#echo json="package.json" key="name" underline="=" -->
ordered-map-extended-pmb
========================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
JS Map on steroids.
<!--/#echo -->



API
---

This module exports one function:

### upgradeMap([origMap])

If `origMap` is false-y, operates as if `origMap` were a `new Map()`.
Adds extra methods to `origMap` (in-place) and returns `origMap`.
The extra methods are:


### .toDict()

Return the entries as a plain old JS object.


### .del(key)

Alias for `.delete`.


### .keyList()

Return the list of keys, as a traditional Array.


### .valList()

Return the list of values, as a traditional Array.


### .upd(dict)

Update the map with entries from `dict`.
Returns the map.


### .weakUpd(dict)

Update the map with those entries from `dict`
whose key did not exist in the map yet.
Returns the map.


### .getOrInit(key, initVal[, initFunc])

Returns the value for `key` if there is one.
Otherwise, adds an entry for `key` with initial value `initVal`.
If `initFunc` is truthy, the entry will instead be initialized with
the result of `initFunc(initVal)`.
The value that has been set will also be returned.


### .getOrInitPr(key, initVal[, initFunc])

Like `.getOrInit`, but supports Promises in `initVal`,
and if `initFunc` is given, its result is `await`ed.
Asynchronous initialization can cause race conditions between multiple
`.getOrInitPr` and/or other code that might set the value while
`.getOrInitPr` is (a)waiting.
In that case, it will flinch and throw a race condition Error,
which will thus be delivered as a rejected promise.
Since it flinces from `.set()`ting its own (too late) initial value,
that value usually would be lost. For cases where you do need it,
it is reported on the `.lostVal` property of the Error.











Usage
-----

see [test/basics.mjs](test/basics.mjs).



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
