class Queue {
    constructor() {
        this.count = 0; // controla o tamanho da fila
        this.lowestCount = 0; //controle do primeiro elemento da fila
        this.items ={};
    }
    enqueue (element) { // adiciona um novo elemento no final da fila
        this.items[this.count] = element;
        this.count++;
    }
    dequeue () { // remove o primeiro elemento da fila e retorna esse elemento
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    peek() { // retorna o primeiro elemento da fila
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    size() { // retorna o número de elementos contidos na fila
        return this.count - this.lowestCount;
    }
    isEmpty() { // se fila vazia retorna true
        return this.size() === 0;
    }
    clear() {
        this.itemss = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString  = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
}

// const queue = new Queue();
// console.log(queue.isEmpty());

// queue.enqueue('John');
// queue.enqueue('Jack');
// console.log(queue.toString());

// queue.enqueue('Camila');

// console.log(queue.toString());
// console.log(queue.size());
// console.log(queue.isEmpty());
// queue.dequeue();
// queue.dequeue();
// console.log(queue.toString());

// Implementando Fila Circular - Simulando o jogo Batata Quente
function hotPotato(elementsList, num) {
    const queue = new Queue();
    const elimitatedList = [];
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        elimitatedList.push(queue.dequeue());
    }
    return {
        elimitated: elimitatedList,
        winner: queue.dequeue()
    }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 15);
result.elimitated.forEach(name => {
    console.log(`${name} foi eliminado do Jogo Batata Quente!`);
});
console.log(`O vencedor é: ${result.winner}`);