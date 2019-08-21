/* 
Read the following functions. For each one, figure out:
-What does the function do?
-Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n), O(n!)
-Run the function with different inputs sizes and see how long it takes
-When the input size doubles, what happens to the time it takes to run?
*/

const myMysteryFunction0=function(array){
    const myFavoriteNum= 7;
    for(let i=0; i<array.length; i++){
        if(array[i]===myFavoriteNum){
            return true;
        }
     }
     return false;
    }
    myMysteryFunction0([1,2,3,4,5,6,7,8,9,10,11,12,1,3,13,145,12345,67]);

// function iterate through all of the characters in the array and trying to find out if myfavarite number existed
// it is linear so O(n),
//when the size doubles it more time

const myMysteryFunction1=function(array){
    const index=4;
    return array[index];
}
myMysteryFunction1([1,2,5,6,7,8,4]);

// this function finds the specific charcter with the sertain index in the array
// it is constant so O(1); it will always take the same time, best algorithm
// it is always same time, 

const myMysteryFunction2=function(n){
    let primes=[];
    for(let i=2; i<n; i++){
            if(i%2===0){
                let factorFound=true;
            }
        }
        if(factorFound===false){
            primes.push(i);
        }
    } 
    return primes.length;

}

myMysteryFunction2([1,2,3,4,5,6,7,8,9,10]);

const myMysteryFunction3=function(array){
    myLength=array.length;
    if(myLength%2===0){
        return "even length";
    }else{
        return "odd length";
    }
}

myMysteryFunction3([1,2,3,4,5,6,7,8]);
myMysteryFunction0([2,3,4,5,6,7,8]);

//function trying to find out if the lenght of array even ot odd
//O(n) it is linear, it has to go through all of the charters in the array
// if size grows it takes more time and space

myMysteryFunction4=function(string){
    let eCounts=0;
    for(let i=0; i<string.length; i++){
        if(string[i]==="e"){
            eCounts++;
        }
    }
    return eCounts;
}

myMysteryFunction4("Senay");
// it is O(n),linear

myMysteryFunction5=function(array){
    let sorted=array.sort();
    return sorted;
}

myMysteryFunction5(["s","a","e","n","y"]);
//O(n) it is linear, space and time will be increase by size


myMysteryFunction6=function(dic, key){
    let value=dic[key];
    return value;
}
//O(1) it is constant

const myMysteryFunction8=function(dictonary){
    for(var key in dictionary){
        let value=dictionary[key];
        if(value===key){
            return true;
        }
        return false;
    }
}

// O(n^2); i will increase by the size of the dictionary but it hast to allthe keys in the dic and after that it has to check if value matches

const myMysteryFunction7=function(array){
    let lookingFor=9;
    let lowerBound=0;
    let upperBound=array.length-1;
    let guessIndex=Math.floor(upperBound/2);
    while(lowerBound<=upperBound){
        if(lookingFor===array[guessIndex]){
            return true;
        }else if(lookingFor<array[guessIndex]){
            upperBound=guessIndex-1;
        }else{
            lowerBound=guessIndex+1;
        }
        guessIndex=Math.floor((lowerBound+upperBound)/2);
    }
    return false;
}

myMysteryFunction7([1,2,3,4,5,6,7,8,9,0]);
//this is a great example of binary search which has O(logn) complexity, it is logaritmatic