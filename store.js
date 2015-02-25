var Store = function() {
	var _changeListeners = [];
	this.notifyChange = function() {
		_changeListeners.forEach(function(listener) {
    		listener();
		});
	},
	this.addChangeListener = function(listener) {
		_changeListeners.push(listener);
	},
	this.removeChangeListener = function(listener) {
		_changeListeners = _changeListeners.filter(function(l) {
			return listener !== l;
		});
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
