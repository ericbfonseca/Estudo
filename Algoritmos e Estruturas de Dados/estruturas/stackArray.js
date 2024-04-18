// Implementação de uma pilha utilizando Arrays
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) { // adiciona um novo elemento no topó da pilha
        this.items.push(element);
    };
    pop() { // remove o elemento que está no topo da pilha. retorna o elemento removido
        return this.items.pop();
    };
    peek() { // retorna o elemento que está no topo da pilha
        return this.items[this.items.length - 1];
    };
    isEmpty() { // retorna true se pilha vazia e false se há elementos na pilha
        return this.items.length === 0;
    };
    clear() { // remove todos os elementos da pilha
        this.items = [];
    };
    size() { // retorna o número de elementos na pilha
        return this.items.length;
    };
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);
console.log(stack.peek());

stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size());