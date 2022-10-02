function storeCatalogue(arr) {

    let obj = {}

    for (const el of arr) {
        let dict_letter = el[0]
        if(obj.hasOwnProperty(dict_letter)){
            obj[dict_letter].push(el)
        }else{
            obj[dict_letter] = [el]
        }
    }

    const sorted = Object.keys(obj)
        .sort()
        .reduce((accumulator, key) => {
            accumulator[key] = obj[key];

            return accumulator;
        }, {});



    for (const ks of Object.keys(sorted)) {
        console.log(ks[0])
        for (const vs of sorted[ks]) {
            console.log(`  ${vs}`)
        }
    }

}

storeCatalogue(['Banana : 2',
'Rubics Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'])