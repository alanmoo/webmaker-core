var should = require('should');
var React = require('react');
var Tappable = require('react-tappable');
var simulant = require('simulant');

// Make console.warn throw
var warn = console.warn;
console.warn = function (warning) {
  throw new Error(warning);
  warn.apply(console, arguments);
};

//TODO: Why does switching this regex to /\.test\.js make karma blow up?
var context = require.context('./', false, /-test\.js$/);
context.keys().forEach(context);