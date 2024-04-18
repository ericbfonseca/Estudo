let entrada = [2,6,7,3,9,4,1,8];

function BubbleSort(vetor) {
    let v = vetor;
    let n = v.length; // tamanho do vetor

    console.log(`vetor de entrada ${v}; tamnaho do vetor: ${n}`);

    for(i = 1; i <= n -1 ; i++) {
        for (j =0 ; j <= n - 1 - i; j++) {
            if (v[j] > v[j+1]) {
                let aux = v[j];
                v[j] = v[j+1];
                v[j+1] = aux;
            }
        }
    }

    return v;
}

let saida = BubbleSort(entrada);

console.log(`Vetor de Saída: ${saida}`)

