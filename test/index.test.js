var expect = require('chai').expect;
var grunt  = require('grunt');
var index  = require('../index');

describe('Interface', function() {

	it('should be a function', function() {
		expect( index ).to.be.a('function');
	});

	it('should take one argument', function(){
		expect( index.length ).to.equal(1);
	});

});

describe('Plugin', function(){

	it('should expose a function in grunt', function(){

		index(grunt);
		expect( grunt.recursivelyLoadTasks ).to.be.a('function');

	});

});

describe('Exposed function', function(){

	it('should take three arguments', function() {

		index(grunt);
		expect( grunt.recursivelyLoadTasks.length ).to.equal(3);

	});

});
