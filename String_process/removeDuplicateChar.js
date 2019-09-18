

function removeDuplicateCharacters(str){
    let arr = str.split("");
    let rs = [];
    while (arr.length){
        let current = arr.shift();
        if( arr.includes(current) ){
            arr = arr.filter(ele=>ele!=current);
        }else {
            rs.push(current);
        }
    }
    return rs.join("");
}
