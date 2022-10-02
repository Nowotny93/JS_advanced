function cookingByNum(num, cmd1, cmd2, cmd3, cmd4, cmd5) {
    let united = [cmd1, cmd2, cmd3, cmd4, cmd5]
    let output = Number(num)
    for (const command of united) {
        if (command === 'chop'){
            output /= 2
            console.log(output)
        }else if (command === 'dice'){
            output = Math.sqrt(output)
            console.log(output)
        }else if (command === 'spice'){
            output += 1
            console.log(output)
        }else if (command === 'bake'){
            output *= 3
            console.log(output)
        }else{
            output -= (20 * output)/100
            console.log(output)
        }
    }
}

cookingByNum('9', 'dice', 'spice', 'chop', 'bake', 'fillet')