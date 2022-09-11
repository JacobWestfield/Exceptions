'use strict';


function getDiff(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return 'Arrays are not even. Try again'
    }
    return arr1.map((el, index) => {
        return el - arr2[index]
    });
}

console.log(getDiff([1, 6, 7], [44, 1, 5])); // [ -43, 5, 2]
console.log(getDiff([1, 2, 3], [4, 5, 6, 5]));// Arrays are not even. Try again

function getDivison(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return 'Arrays are not even. Try again'
    }
    return arr1.map((el, index) => {
        return el / arr2[index]
    });
}

console.log(getDivison([1, 6, 7], [44, 1, 5])); // [ 0.022727272727272728, 6, 1.4 ] 
console.log(getDivison([1, 2, 3], [4, 5, 6, 5]));// Arrays are not even. Try again