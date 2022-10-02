function sameNums(num) {
    let num_as_str = num.toString()
    let num_as_arr = num_as_str.split('')
    let num_as_set = new Set(num_as_arr)
    if (num_as_set.size > 1){
        console.log(`false`)
    }else{
        console.log(`true`)
    }
    let total = 0
    for (const numAsStrElement of num_as_str) {
        total += Number(numAsStrElement)
    }
    console.log(total)
}

sameNums(1234)