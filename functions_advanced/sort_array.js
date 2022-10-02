function sortArray(arr, cmd){
    if (cmd ==='asc'){
        arr.sort(function(a, b){return a - b});
    }
    arr.sort(function(a,b){return b - a});
    console.log(arr);
}

sortArray([14, 7, 17, 6, 8], 'desc');

