

function extractIncreasingSubsequenceFromArray(arr) {
    let myArr = [arr[0]]
    for (const el of arr) {
        if(el > myArr[myArr.length-1]){
            myArr.push(el)
        }
    }
    console.log(myArr)
}

extractIncreasingSubsequenceFromArray([20,
3,
2,
15,
6,
1])