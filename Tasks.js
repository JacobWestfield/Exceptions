'use strict';

//Task 1

function getFloat(part1, part2) {
    if (typeof part1 !== 'number' || typeof part2 !== 'number') {
        alert('You have to type numbers');
    }
    if (!part1) return `0.${part2}`;
    if (!part2) return `${part1}.0`;
    return `${part1}.${part2}`
}

let a = +prompt('Type first number');
let b = +prompt('Type second number');
alert(getFloat(a, b))



//Task 2

function getString() {
    let str = prompt('Type string')
    if (!str) {
        alert('Your string is empty');
        getString()
    };
    alert(str)
}

getString();