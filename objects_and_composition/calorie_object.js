function calorieObject(arr){
    let obj = {}
    for (let i = 0; i< arr.length; i++){
        if (i % 2 !== 0){
            continue
        }else{
            obj[arr[i]] = Number(arr[i+1])
        }
    }
    console.log(obj)
}

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])