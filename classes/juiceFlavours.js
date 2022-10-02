function juiceFlavours(arr) {
    let flavoursDict = new Map()

    for (const el of arr) {
        let splitted_el = el.split('=>')
        let frt = splitted_el[0]
        let qty = Number(splitted_el[1])

        if (flavoursDict.has(frt)){
            let needed_qty = flavoursDict.get(frt)
            needed_qty += qty
            flavoursDict.set(frt, needed_qty)
        }else{
            flavoursDict.set(frt, qty)
        }
    }
    let bottlesDict = new Map()
    let flavoursDictAsArr = Array.from(flavoursDict)

    for (const el of flavoursDictAsArr) {
        let frt = el[0]
        let qty = Math.floor(Number(el[1]) / 1000)
        bottlesDict.set(frt, qty)
    }

    for (const el of bottlesDict) {
        if(el[1] === 0){
            bottlesDict.delete(el[0])
        }
    }

    for (let kvp of bottlesDict) {
        console.log(`${kvp[0]}=> ${kvp[1]}`);
}

}

juiceFlavours(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])