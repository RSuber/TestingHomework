// TUESDAY TESTING HOMEWORK//
"use strict";
var assert = require('chai').assert;
var expect =require('chai').expect;
class Muppet {
    NameAge(name,age) {
            this.name = name;
            this.age = age;
        }
}
class Frog extends Muppet {
  constructor(name,age,color) {
    super (name,age)
  this.color = color;
}
  speak() {
  return ("ribbit-ribbit");
}
};
var Kermit = new Frog(Kermit,12,green)

describe('Muppet',function(){
  it('itspeaks',function(){
  var Kermit = new Frog(Kermit,12,green);
  var Speak = console.log("ribbit-ribbit")
  expect(Kermit.speak()).to.equal(Speak);
  })
})
