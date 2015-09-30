// Make console.warn throw
var warn = console.warn;
console.warn = function (warning) {
  throw new Error(warning);
  warn.apply(console, arguments);
};


var should = require('should');
var foo = 2;

describe('foo', function(){
	it('should equal 2', function(){
		should.equal(foo, 2);
	})
})