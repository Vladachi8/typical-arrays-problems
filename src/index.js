
exports.min = function min (array) {
    if (array === undefined || array.length === 0){
        return 0;
    }   else{
        let min = array[0];
        for (let i = 0; i < array.length; i++){
            (min < array[i]) ? min = min : min = array[i];
        }
        return min;
    }
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0){
        return 0;
    }   else{
        let max = array[0];
        for (let i = 0; i < array.length; i++){
            (max > array[i]) ? max = max : max = array[i];
        }
        return max;
    }
}

exports.avg = function avg (array) {  
    if (array === undefined || array.length === 0){
        return 0;
    }   else{
        return array.reduce(function(a,b) {return a+b;}) / array.length;
    }
}
