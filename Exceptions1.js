'use strict';

//нахождение простой суммы (исключение - не числа)
function getSum(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'There is no number(s) in parameters'
    }
    return num1 + num2
}

//получение даты из массива цифр (исключение - длинна массива не равна 8)
function getDate(dateArray) {
    if (typeof dateArray !== 'array')
        if (dateArray.length !== 8) {
            return 'Incorrect date format'
        }
    return `${dateArray.slice(0, 1).join('')}.${dateArray.slice(2, 3).join('')}.${dateArray.slice(4).join('')}`
}

function checkPrep(bool) {
    if (typeof bool !== 'boolean') {
        return 'Incorrect condition. Must be true or false'
    }
    return !bool
}


console.log(getSum(1, 2));
console.log(getSum('a', 'b'));

console.log(getDate([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(getDate('a'));

console.log(checkPrep(true));
console.log(checkPrep('a'));