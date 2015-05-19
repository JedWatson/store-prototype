var demand = require('must');
var Store = require('../store');

describe('Store', function() {
	describe('constructur', function() {
		it('should return an instance of Store', function() {
			var s = new Store();
			s.must.be.an.instanceof(Store);
		});
	});
});
