import { Compare, defaultCompare } from './util';
import { Node } from './models/Node';

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = null;
    }
    // métodos
    insert(key) { // insere uma nova chave na árvore
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }
    insertNode(node, key) { // adiciona um nó em uma posição que não seja root
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }
    search(key) { // busca uma chave na árvore e devolve true se existir, e false se não existir
    }
    inOrderTraverse() { // visita todos os nós da árvore usando um percurso em-ordem(in-roder)
    }
    preOrderTraverse() {// visita todos os nós da árvores usando um percurso pré-ordem (pre-order)
    }
    postOrderTraverse() { // visita todos os nós da árvore usando um percurso pós-ordem (post-order)
    }
    min() { // retorna a chave/valor mínimo da árvore
    }
    max() { // retorna a chave/valor máximo da árvore
    }
    remove(key) { // remove a chave da árvore
    }
}