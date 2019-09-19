A pangram is a sentence using every letter of a given alphabet at least once

Given a sentence, check whether it is a pangram or not.

Example

For sentence = "The quick brown fox jumps over the lazy dog.", the output should be isPangram(sentence) = true;
For sentence = "abcdefghijklmnopqrstuvwxya", the output should be isPangram(sentence) = false.


function isPangram(sentence = "" ) {

    let AscArr = range(97, 122);
    sentence = sentence.toLowerCase();
    sentence = sentence.replace( /[^a-z]/g , "");
    let arr = sentence.split("");

    while(arr.length){
        if( AscArr.includes( arr[0].charCodeAt() ) ){
            AscArr = AscArr.filter(ele=>ele!=arr[0].charCodeAt());    
            arr = arr.filter(ele=>ele!=arr[0]);
        }else{
            return false;
        }
    }
    
    if (AscArr.length) {
        return false;
    }else{
        return true;
    }
    

}

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
