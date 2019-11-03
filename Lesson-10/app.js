//  Задание 1:

  
function filterNumbersArr(array) {

    var newArr = array.filter(function(item) {
        return (item > 0);
    });

    return newArr;
}

filterNumbersArr([-1, 0, 2, 34, -2]);


//  Задание 2:

function getFirstPositive(array) {

    var firstPositive = array.find(function(item) {
        return (item > 0);
    });

    return firstPositive;
}

getFirstPositive([-1, 0, 2, 34, -2]);


// Задание 3:

function isPalindrome(string) {

    if ( string.toLowerCase() === string.toLowerCase().split('').reverse().join('') ) {
        return true;
    } else {
        return false;
    }

}


// Задание 4:

function areAnagrams(string1, string2) {

    if ( string1.toLowerCase().split('').sort().join('') === string2.toLowerCase().split('').sort().join('') ) {
        return true;
    } else {
        return false;
    }

}


//  Задание 5:
 
function divideArr(array, arrLength) {

    var newArr = [];

    for (var i = 0; i < array.length; i += arrLength) {

        newArr.push( array.slice(i, i + arrLength) );

    }
    return newArr;

}