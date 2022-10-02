const {expect} =require('chai');
const sum =require('./sumNumbers');


describe('Sum numbers', () => {
    it('sums single number', ()=>{
        expect(sum[1]).to.equal(1);
    })
})