var Swipe = require('../lib/swipe.js');
var simulant = require('simulant');

describe('Alert', function(){
	it('should detect swipes', function(){
		var swiped = false;
		//Set up the egg, probably refactor to a beforeEach or something
		function reward(){
			swiped = true;
			console.log('swiped!');
		}
		var pattern = ["UP","UP"];
		var el = document.createElement('div');
		el.id = "swipeTest";
		el.style.background="blue";
		el.textContent = "foobar";

		Swipe.checkSwipe(el, pattern, reward);

		document.body.appendChild(el);
		el.addEventListener("touchstart",function(event){
			console.log('touched!');
			console.log(event);
		});

		//Figure out element position, then figure out where to touch it and where to touch up
		//https://developer.mozilla.org/en-US/docs/Web/API/Touch 
		simulant.fire(el, 'touchstart');
		// simulant.fire(el, 'touchEnd');

		should.equal(swiped, true);
	})
})