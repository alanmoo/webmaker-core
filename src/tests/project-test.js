var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var should = require('should');
var React = require('react');
// var Project = require('../pages/project/project.jsx');

describe('Project', function(){
	it('should render', function(){
		var foo = 2;
		should.equal(foo,2);
		// console.log(Project.render);
	})
})