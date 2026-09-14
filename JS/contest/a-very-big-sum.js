function plusMinus(arr) {
    let plus = 0, minus = 0, zero = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > 0) {
            plus++
        } else if (element < 0) {
            minus++;
        } else { 
            zero++;
        }
        
    }

    console.log((plus / arr.length).toFixed(6));
    console.log((minus / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
    // return [parseFloat(`0.${plus}000`), `0.${minus}000`, `0.${zero}000`];
}


console.log(plusMinus([-4, 3, -9, 0, 4, 1]));