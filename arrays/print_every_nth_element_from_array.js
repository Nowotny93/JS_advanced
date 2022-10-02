function everyNthElFromArray(arr, num) {
    let new_arr = []
    for (let i = 0; i<arr.length; i++){
        if (i % num === 0){
            new_arr.push(arr[i])
        }
    }
    console.log(new_arr)
}

everyNthElFromArray(['1',
'2',
'3',
'4',
'5'],
6)