// Função Fatorial com recursividade
function factorial(n) {
    if (n < 0) {
        return 'Entrada inválida';
    }
    if (n === 1 || n === 0) { // caso de base. 1! = 1 e 0! = 1
        return 1;
    }
    return n * factorial(n - 1); // chamada recursiva
}

console.log (`5! = ${factorial(5)}`);

// Função Sequencia de Fibonacci com recursividade
function fibonacci(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`Fibonacci de 5 = ${fibonacci(4)}`)