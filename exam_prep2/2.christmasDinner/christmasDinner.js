class ChristmasDinner{

    constructor(budget) {
        this.budget = budget;
        this.dishes = []
        this.products = []
        this.guests = {}
    }

    set budget(value){
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value
    }

    get budget(){
        return this._budget
    }

    shopping(product){
        let typePr = product[0]
        let pricePr = product[1]
        if (this.budget < pricePr){
            throw new Error(`Not enough money to buy this product`)
        }else{
            this.products.push(typePr)
            this.budget -= pricePr
            return `You have successfully bought ${typePr}!`
        }
    }

    recipes(recipe){
        let recipeProduct = recipe.productsList
        let recipeName = recipe.recipeName
        let allAreInside = false
        for (const pr of recipeProduct) {
            if (this.products.includes(pr)){
                allAreInside = true
            }else{
                allAreInside = false
            }
        }
        if (allAreInside){
            this.dishes.push(recipe)
            return `${recipeName} has been successfully cooked!`
        }else{
            return `We do not have this product`
        }
    }

    inviteGuests(name, dish){
        let isPresent = false
        for (const obj of this.dishes) {
            let neededPrName = obj.recipeName
            if (neededPrName === dish) {
                isPresent = true
                break
            }else{
                isPresent = false
            }
        }
        if (!isPresent){
            return `We do not have this dish`
        }
        if (this.guests.hasOwnProperty(name)){
            return `This guest has already been invited`
        }else{
            this.guests[name] = dish
            return `You have successfully invited ${name}!`
        }
    }

    showAttendance() {
        let output = '';
        Object.keys(this.guests).forEach(name => {
            let dish = this.guests[name];
            let products = [];
            this.dishes.forEach((curDish) => {
                if (curDish.recipeName === dish) {
                    products = curDish.productsList;
                }
            });
            output += `${name} will eat ${dish}, which consists of ${products.join(', ')}\n`;
        });
        return output.trim();
    }
}


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());