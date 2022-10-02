function rotateArray(arr, num) {
    for (let i = 0; i < num; i++){
        let last_el = arr.pop()
        arr.unshift(last_el)
    }
    console.log(arr.join(' '))
}

rotateArray(['Banana',
'Orange',
'Coconut',
'Apple'],
15)