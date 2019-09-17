
function compareSumOfDigits(input){
    let n = 0;
    let dif = 0;
    while( n < input.length ){
        +input[n]%2==0? dif -= +input[n]: dif += +input[n];
        n++;
    }
    return dif;
}
