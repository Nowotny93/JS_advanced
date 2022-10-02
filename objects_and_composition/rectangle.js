function rectangle(width, height, color) {

    let obj = {width, height, color, calcArea() {
            return obj.width * obj.height
        }
    }

    return obj
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
