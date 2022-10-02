function sum(arr){
    let sum = 0
    for (let num of arr){
        sum += Number(sum)
    }
    return sum
}

module.exports = sum