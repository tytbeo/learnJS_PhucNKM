function isTournament(n, fromV, toV){

    String.prototype.reverseString = function(){
        let arr = this.split("");
        arr = arr.reverse();
        return arr.join("");
    }
    
    if(n*(n-1)/2 != fromV.length ) return false;
    if(n<2) return false;

    let arr = [];
    fromV.map((ele,i)=>{
        arr.push( ele +""+ toV[i] );
    });

    while( arr.length ){
        let val = arr.shift();
        if( arr.includes( val ) || arr.includes( val.reverseString() ) ){
            return false;
        }
    }
    return true;
}

