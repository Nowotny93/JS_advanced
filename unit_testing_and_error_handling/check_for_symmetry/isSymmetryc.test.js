const { expect } =require('chai')
const isSymmetric =require('./isSymmetryc')


describe('returns true for valid symmetric output', () => {
    it('sums single number', () => {
        expect(isSymmetric([1, 1])).to.true;
    });

    it('returns false for valid non-symmetric output', () => {
        expect(isSymmetric([1, 2])).to.false;
    });

    it('returns false for invalid argument', () => {
        expect(isSymmetric('a')).to.false;
    });

    it('returns true for valid odd-element array', () => {
        expect(isSymmetric([1, 1, 1])).to.true;
    });

    it('returns true for valid symmetric string array', () => {
        expect(isSymmetric(['a', 'a'])).to.true;
    });
})

