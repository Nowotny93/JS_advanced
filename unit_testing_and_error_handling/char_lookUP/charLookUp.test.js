const { expect } =require('chai')
const lookupChar =require('./charLookUp')

describe("lookup char tests", function(){
     it("string not correct", function(){
         let actual = lookupChar(1, 2); // undefined

         assert.equal(actual, undefined);
     })
     it("index not correct", function(){
         let actual = lookupChar("aa", "aaa"); // undefined

         assert.equal(actual, undefined);
     })
     it("negative index", function(){
         let actual = lookupChar("aa", -1);

         assert.equal(actual, "Incorrect index");
     })

    it("index bigger than string", function(){
        let str = "aa"
        let idx = 4
        let actual = lookupChar(str, idx);

         assert.equal(actual, "Incorrect index");
     })

    it("index bigger than string", function(){
        let str = "aa"
        let idx = 2
        let actual = lookupChar(str, idx);

         assert.equal(actual, "Incorrect index");
     })
 })