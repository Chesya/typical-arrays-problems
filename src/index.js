exports.min = function min (array) {
    if (array == undefined || array.length == 0) {
        return 0;
    } else {
        var min = 0;
        for (  let i=0;i<array.length; i++){
            if (array[i] < min) { min = array[i]}
        }
        return min;
    }
}

exports.max = function max (array) {
    if (array == undefined || array.length == 0) {
        return 0;
    } else {
        var max = 0;
        for (  let i=0;i<array.length; i++){
            if (array[i] > max) { max = array[i]}
        }
        return max;
    }
}

exports.avg = function avg (array) {
    if (array == undefined || array.length == 0) {
        return 0;
    } else {
        var sum = 0, avg = 0;
        for ( let i=0;i<array.length; i++){
            sum = sum + array[i];
        }
        return avg = sum/array.length;
    }
}
