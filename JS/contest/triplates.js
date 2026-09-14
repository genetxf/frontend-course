function compareTriplets(a, b) {
    let a_score = 0, b_score = 0;
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        const element2 = b[i];

        if (element > element2) {
            a_score++;
        } else if (element < element2){ 
            b_score++;
        }
    }
    return [a_score, b_score];

}
console.log(compareTriplets([17, 28, 30], [99, 16, 8])); 