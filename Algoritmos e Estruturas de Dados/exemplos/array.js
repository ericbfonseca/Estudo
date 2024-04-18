/* const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i-1] +  fibonacci[i-2];
}
for (let i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
} */

let numbers = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9];

numbers[numbers.length] = 10;

numbers.push(11);
numbers.push(12, 13);

console.log(numbers);

Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
};

numbers.insertFirstPosition(-1)
numbers.unshift(-2);
numbers.unshift(-3, -4);
console.log(numbers)

function isEven(x) {
    // devolve true se x for múltiplo de 2 (par)
    console.log(x);
    return x % 2 === 0 ? true : false;
}

const myMap = numbers.map(isEven);
console.log(myMap);

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);