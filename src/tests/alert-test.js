var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var should = require('should');
var React = require('react');
var Alert = require('../components/alert/alert.jsx');
var Tappable = require('react-tappable');
var simulant = require('simulant');

describe('Alert', function(){
	it('should render', function(){
		var alertA = TestUtils.renderIntoDocument(<Alert>Test2</Alert>);
		// alertA.show();
		var node = alertA.getDOMNode();
		document.body.appendChild(alertA.getDOMNode());
		console.log(node.offsetWidth);
		console.log(node.offsetHeight);
		simulant.fire(node, 'touchStart');
		should.equal(alertA.state.touched, true);
	})
})