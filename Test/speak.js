"use strict";
var assert = require('chai').assert;
var expect = require('chai').expect;
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

describe('Muppet',function(){
  it('itspeaks',function(){
  //given
  var Kermit = new Frog("Kermit",12,"green")
  //when
  var Speak = Kermit.speak();
  //then
  expect(Speak).to.equal('ribbit-ribbit');
}),
it('isgreen',function(){
//given
var Kermit = new Frog("Kermit",12,"green")
//when
var myFrog = Kermit.color;
//then
expect(myFrog).to.equal("green");
})
})
