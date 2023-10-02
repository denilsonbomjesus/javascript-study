// for

const numeros = [100, 200, 300, 400, 500, 600];

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}

// media for

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

console.log(somaDasNotas);

const media1 = somaDasNotas / notas.length;

console.log(`A média das notas é ${media1}.`);

//se quisermos percorrer matrizes, um único for não será suficiente. Mas podemos usar o for várias vezes, uma para cada dimensão da matriz. Assim, uma matriz de duas dimensões usará dois for, um dentro do outro. Começaremos criando mais alguns arrays e uma matriz de 2 dimensões.

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

//Com a matriz criada, vamos iterar sobre os elementos. Mas não poderemos usar o mesmo for utilizado da última vez, já que agora notasGerais[i] contém um array e não mais um valor numérico. Por isso usaremos outro for para acessar esse array.

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

//No primeiro for criamos uma let i e vamos executar o bloco de código enquanto i for menor que notasGerais.length. Como temos 3 elementos (nesse caso, arrays), o primeiro for será executado 3 vezes, com i=0,i=1,i=2.
//O segundo for tem uma nova variável, a let j, já que não podemos usar uma nova let i porque ela já está definida, e vamos executá-lo enquanto j for menor que notasGerais[i].length. Como cada notasGerais[i] é um array, podemos obter a propriedade de tamanho dele utilizando o .length.
//O código dentro do segundo for vai acumular o valor de notasGerais[i][j], lembrando que notasGerais[i] é um dos 3 arrays iniciais. Assim, o parâmetro [j] vai acessar o elemento dentro array escolhido pelo notasGerais[i], retornando um número que podemos usar na nossa conta.

console.log(media) //No entanto, este código retorna uma média de 24. Como tal média é possível se não temos nenhum número maior do que 10? O que acontece é que para conseguir a média entre todos os arrays, temos que somar as médias dos arrays de notas, 8+7+9 edividir pela quantidade de arrays em notasGerais.

media = media/notasGerais.length

console.log(media)

// media for-of

const n = [10, 6.5, 8, 7.5];

let somaN = 0;

for (let newN of notas){
    somaN += newN;
}

const media2 = somaN / n.length;

console.log(media2)

// imprime numeros pares com array dinamico

const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);