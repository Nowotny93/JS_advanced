function heroicInventory(arr) {
    let all_data = []
    for (const argument of arr) {
        let [name, level, items] = argument.split('/')
        let obj = {name: name, level: Number(level), items: items.split(',')}
        all_data.push(obj)
    }
    let myJSON = JSON.stringify(all_data)
    console.log(myJSON)
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])