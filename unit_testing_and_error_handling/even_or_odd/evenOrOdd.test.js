const { expect } =require('chai')
const isOddOrEven =require('./evenOrOdd')


 describe("Is odd or even tests", function(){
     it("Pass number to return undefined", function(){
         let actual = isOddOrEven(2); // undefined

         assert.equal(actual, undefined);
     })
     it("Pass string to return even", function(){
         let actual = isOddOrEven("aa"); // even

         assert.equal(actual, "even");
     })
     it("Pass string to return odd", function(){
         let actual = isOddOrEven("a"); // even

         assert.equal(actual, "odd");
     })
 })