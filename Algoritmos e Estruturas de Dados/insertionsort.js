let entrada = [2,6,7,3,9,4,1,8];
let saida = [];

function InsertionSort(vetor) {
    
    let l = vetor;
    let n = l.length;

    console.log(`Vetor de entrada: ${l}`)
    console.log(`Tamanho do vetor: ${n}`)

    for (let i  = 1; i <= n - 1; i++) {
        console.log('Laço FOR');
        console.log(`para i = ${i}`);
        let pivo = l[i];
        console.log(`Pivô: ${pivo}`);

        let j = i - 1;
        console.log(`J = ${j}`);

        while (j >= 0 && l[j] > pivo) {
            console.log('Laço WHILE');
            console.log(`enquanto j = ${j} e l[${j}] = ${l[j]}`)
            l[j+1] = l[j];
            console.log(`l[j+1] = ${l[j+1]}`)
            j = j - 1;
            console.log(`j = ${j}`)
        }
        l[j+1] = pivo;
        console.log(`l[j+1] = ${l[j+1]}`)
    }
        
    return l;
}

saida = InsertionSort(entrada);

console.log(`Vetor de saída: [${saida}]`)
