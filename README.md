Store Prototype
===============

Simple class for creating event-driven Data Stores.

Install from npm with `npm install --save store-prototype` and use as per the example below.

## Example:

```
var Store = require('store-prototype');

var MyStore = new Store();
var _things = {};

MyStore.extend({
	
	getThing: function(key) {
		return _things[key];
	},
	
	addThing: function(key, data) {
		_things[key] = data;
		this.notifyChange();
	},
	
	removeThing: function(key) {
		delete _things[key];
		this.notifyChange();
	}
	
});

MyStore.addChangeListener(function() {
	console.log('Things changed!');
});

```
