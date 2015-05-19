var demand = require('must');
var Store = require('../store');

describe('Store', function() {
	describe('#constructor', function() {
		it('should return an instance of Store', function() {
			var s = new Store();
			s.must.be.an.instanceof(Store);
		});
		it('should extend itself', function() {
			var x = {};
			var s = new Store({ prop: x });
			s.prop.must.be(x);
		});
	});
	describe('#extend()', function() {
		it('should extend the store', function() {
			var s = new Store();
			var x = {};
			s.extend({ prop: x });
			s.prop.must.be(x);
		});
	});
	describe('change listeners', function() {
		it('should fire on every notifyChange', function() {
			var s = new Store();
			var called = 0;
			function l() { called++; }
			s.addChangeListener(l);
			s.notifyChange();
			called.must.be(1);
			s.notifyChange('name');
			called.must.be(2);
		});
		it('should not fire after being removed', function() {
			var s = new Store();
			var called1 = false;
			var called2 = false;
			function l1() { called1 = true; }
			function l2() { called2 = true; }
			s.addChangeListener(l1);
			s.addChangeListener(l2);
			s.removeChangeListener(l1);
			s.notifyChange();
			called1.must.be(false);
			called2.must.be(true);
		});
	});
	describe('named listeners', function() {
		it('should fire on notifyChange(name)', function() {
			var s = new Store();
			var called = false;
			function l() { called = true; }
			s.addChangeListener('test', l);
			s.notifyChange('test');
			called.must.be(true);
		});
		it('should not fire on notifyChange()', function() {
			var s = new Store();
			var called = false;
			function l() { called = true; }
			s.addChangeListener('test', l);
			s.notifyChange();
			called.must.be(false);
		});
	});
});
