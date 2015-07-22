Store Prototype
===============

Simple class for creating event-driven Data Stores.

Install from npm with `npm install --save store-prototype` and use as per the example below.

See [this gist](https://gist.github.com/JedWatson/18eb2582f5d957053a1d) for a more complete usage example.

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

## Named changes

You can provide a key to `addChangeListener` and `notifyChange` to get a little bit more granular control over when change listeners are called.

```
MyStore.addChangeListener('key', function() {
	console.log('things changed because key!');
});
MyStore.notifyChange(); // ...
MyStore.notifyChange('key'); // things changed because key!
```
