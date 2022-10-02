function wordsUpperCase(str) {
    let str_to_arr = str.split(',')
    let new_arr = []
    for (const strToArrElement of str_to_arr) {
        new_arr.push(strToArrElement.toUpperCase())
    }
    console.log(new_arr.join())
}

wordsUpperCase('Hi, how are you?')