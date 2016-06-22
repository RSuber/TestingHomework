"use strict";
var assert = require('chai').assert;
var expect = require('chai').expect;

function summation(arr) {
    var total = 0;
    for (var i = 0; i <= arr.length - 1; i++) {
        total += arr[i];
    }
    return total
};
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
describe("sum of all numbers", function() {
    it('sums it up', function() {
        //given
        function summation(arr) {
            var total = 0;
            for (var i = 0; i <= arr.length - 1; i++) {
                total += arr[i];
            }
            return total
        };
        //when
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        var new1 = summation(numbers)
            //then
        expect(new1).to.equal(45)
    });
})
