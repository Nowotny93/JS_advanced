function carFactory(obj){

    let small_engine = { power: 90, volume: 1800 }
    let normal_engine = { power: 120, volume: 2400 }
    let monster_engine = { power: 200, volume: 3500 }

    let typ = obj.carriage
    let col = obj.color

    let new_obj = {
        model: obj.model,
        engine: {},
        carriage: {},
        wheels: []
    }

    if (obj.power <= 90) {
        new_obj.engine = small_engine
    } else if (obj.power > 90 && obj.power <= 120) {
        new_obj.engine = normal_engine
    } else if (obj.power > 120 && obj.power <= 200) {
        new_obj.engine = monster_engine
    }

    new_obj.carriage = {type: typ, color: col}

    if (obj.wheelsize % 2 === 0){
        let needed_inches = obj.wheelsize - 1
        for (let i = 0; i < 4; i++){
            new_obj.wheels.push(needed_inches)
        }
    }else{
        for (let i = 0; i < 4; i++){
            new_obj.wheels.push(obj.wheelsize)
        }
    }

    console.log(new_obj)
}

carFactory({ model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17 })