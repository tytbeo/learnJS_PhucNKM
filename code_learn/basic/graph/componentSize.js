
function componentSize(matrix, vertex){
    let arr = [vertex];
    matrix.map((a,i)=>{
        a.map((b,j)=>{
            if(b && i != j  ){
                if(( arr.includes(i) )){
                    arr.push(j);
                }else if ( arr.includes(j) ){
                    arr.push(i);
                }
            }
        })
    });
    return [...new Set(arr)].length ;

}
