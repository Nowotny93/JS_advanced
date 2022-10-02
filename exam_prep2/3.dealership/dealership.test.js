const dealership = require('./dealership');
const expect = require('chai').expect;

describe('work', () => {
    describe('newCarCost', () => {

        let oldCarModel = 'Audi A4 B8'
        let oldCarModel1 = 'Audi A3 B8'
        let newCarPrice = 30000


        it('discount granted', () => {
            expect(dealership.newCarCost(oldCarModel, newCarPrice)).to.equal(15000);
        });

        it('discount not granted', () => {
            expect(dealership.newCarCost(oldCarModel1, newCarPrice)).to.equal(30000);
        });

        it("carEquipment", function () {
            let extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation',];
            let selectedExtras = [0, 3];

            let expected = ['heated seats', 'navigation'];
            expect(dealership.carEquipment(extras, selectedExtras)).to.deep.equal(expected);
        });

        it("carEquipment", function () {
            let extras = ['heated seats', 'navigation'];
            let selectedExtras = [0, 5];

            let expected = ['heated seats', undefined];
            expect(dealership.carEquipment(extras, selectedExtras)).to.deep.equal(expected);
        });

        it("euroCategory", function () {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(10)).to.equal('We have added 5% discount to the final price: 14250.');
        });
    })
})