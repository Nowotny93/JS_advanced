function roadRadar(speed, region) {
    if (region === 'city'){
        const limit_city = 50;

        if(speed > limit_city){
            const violation = speed - limit_city
            if (violation <= 20){
                const status = 'speeding'
                console.log(`The speed is ${violation} km/h faster than the allowed speed of ${limit_city} - ${status}`)
            }else if (violation > 20 && violation <= 40){
                const status = 'excessive speeding'
                console.log(`The speed is ${violation} km/h faster than the allowed speed of ${limit_city} - ${status}`)
            }else{
                const status = 'reckless driving'
                console.log(`The speed is ${violation} km/h faster than the allowed speed of ${limit_city} - ${status}`)
            }
        }else{
            console.log(`Driving ${speed} km/h in a ${limit_city} zone`)
        }
    }else if (region === 'residential') {
        const limit_city = 20

        if (speed > limit_city) {
            const violation = speed - limit_city
            if (violation <= 20) {
                const status = 'speeding'
                console.log(`The speed is ${violation} km/h faster than the allowed speed of ${limit_city} - ${status}`)
            } else if (violation > 20 && violation <= 40) {
                const status = 'excessive speeding'
                console.log(`The speed is ${violation} km/h faster than the allowed speed of ${limit_city} - ${status}`)
            } else {
                const status = 'reckless driving'
                console.log(`The speed is ${violation} km/h faster than the allowed speed of ${limit_city} - ${status}`)
            }
        } else {
            console.log(`Driving ${speed} km/h in a ${limit_city} zone`)
        }
    }else if (region === 'interstate') {
        const limit_city = 90

        if (speed > limit_city) {
            const violation = speed - limit_city
            if (violation <= 20) {
                const status = 'speeding'
                console.log(`The speed is ${violation} km/h faster than the allowed speed of ${limit_city} - ${status}`)
            } else if (violation > 20 && violation <= 40) {
                const status = 'excessive speeding'
                console.log(`The speed is ${violation} km/h faster than the allowed speed of ${limit_city} - ${status}`)
            } else {
                const status = 'reckless driving'
                console.log(`The speed is ${violation} km/h faster than the allowed speed of ${limit_city} - ${status}`)
            }
        } else {
            console.log(`Driving ${speed} km/h in a ${limit_city} zone`)
        }
    }else if (region === 'motorway') {
        const limit_city = 130

        if (speed > limit_city) {
            const violation = speed - limit_city
            if (violation <= 20) {
                const status = 'speeding'
                console.log(`The speed is ${violation} km/h faster than the allowed speed of ${limit_city} - ${status}`)
            } else if (violation > 20 && violation <= 40) {
                const status = 'excessive speeding'
                console.log(`The speed is ${violation} km/h faster than the allowed speed of ${limit_city} - ${status}`)
            } else {
                const status = 'reckless driving'
                console.log(`The speed is ${violation} km/h faster than the allowed speed of ${limit_city} - ${status}`)
            }
        } else {
            console.log(`Driving ${speed} km/h in a ${limit_city} zone`)
        }
    }
}

roadRadar(200, 'motorway')