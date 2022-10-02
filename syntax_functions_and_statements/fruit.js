function fruit(fruit, weight, price){
    let weight_in_kg = (weight / 1000)
    console.log(`I need $${(weight_in_kg * price).toFixed(2)} to buy ${(weight_in_kg).toFixed(2)} kilograms ${fruit}.`)
}

fruit('apple', 1563, 2.35)