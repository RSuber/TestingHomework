"use strict";
var assert = require('chai').assert;
var expect = require('chai').expect;
//Write a function called sum() that returns
//continue with divide(),multiply() and subtract()


describe('Math', function() {
    it('adds', function() {
        //given
        function sum(a, b) {
            return a + b
        };
        //when
        var a = 5
        var b = 10
            //then
        expect(a + b).to.equal(15);
    });
    it('subtracts', function() {
        //given
        function divide(a, b) {
            return a - b
        };
        //when
        var a = 50
        var b = 10
            //then
        expect(a - b).to.equal(40);
    });
    it('multiplies', function() {
        //given
        function multiply(a, b) {
            return a * b
        };
        //when
        var a = 5
        var b = 10
            //then
        expect(a * b).to.equal(50);
    });
    it('divide', function() {
        //given
        function divide(a, b) {
            return a / b
        };
        //when
        var a = 10
        var b = 5
            //then
        expect(a / b).to.equal(2);
    });

})
