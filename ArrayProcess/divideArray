Given two arrays of positive integers a and b, find how many elements in array a are divisible by all the elements in array b.

Example

For a = [5, 10, 15, 20, 25, 30] , b = [1, 5], the output should be devideArray(a, b) = 6
For a = [5, 6, 7, 8, 9, 10, 11, 12] , b = [2, 3], the output should be devideArray(a, b) = 2


function divideArray(a, b){
    let count = 0;
    a.map(ele=>{
        let check = true;
        b.map(i=>{
            if(ele%i!=0)check=false;
        });
        if(check)count++;
    });
    return count;
}
