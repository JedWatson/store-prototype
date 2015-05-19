var Store = function() {
	var _changeListeners = [];
	var _eventListeners = {};
	this.notifyChange = function(name) {
		if (_eventListeners[name]) {
			_eventListeners[name].forEach(function(fn) {
	    		fn();
			});
		}
		_changeListeners.forEach(function(fn) {
    		fn();
		});
	},
	this.addChangeListener = function(name, fn) {
		if (arguments.length === 1) {
			fn = name;
			name = null;
		}
		if (name) {
			if (!_eventListeners[name]) {
				_eventListeners[name] = [];
			}
			_eventListeners[name].push(fn);
		} else {
			_changeListeners.push(fn);
		}
	},
	this.removeChangeListener = function(name, fn) {
		if (arguments.length === 1) {
			fn = name;
			name = null;
		}
		if (name) {
			if (_eventListeners[name]) {
				_eventListeners[name] = _eventListeners[name].filter(function(i) {
					return fn !== i;
				});
			}
		} else {
			_changeListeners = _changeListeners.filter(function(i) {
				return fn !== i;
			});
		}
	}
	return this.extend.apply(this, arguments);
}

Store.prototype.extend = function() {
	for (var i = 0; i < arguments.length; i++) {
		var source = arguments[i];
		for (var key in source) {
			if (source.hasOwnProperty(key)) {
				this[key] = source[key];
			}
		}
	}
	return this;
}

module.exports = Store;
