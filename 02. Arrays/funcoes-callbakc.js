// for-Each -> funcao callback (chamar de volta)

const notas1 = [10, 6.5, 8, 7.5]

let somaNotas = 0;

notas1.forEach(function (nota, indice) {
    console.log(nota, "->", indice);
    somaNotas += nota;

});

const media = somaNotas / notas1.length;

console.log(`A média das notas é ${media}.`);

// callbacks

const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function (nome) {
  console.log(nome);
});

nomes.forEach((nome) => {
 console.log(nome);
});

function imprimeNome(nome) {
  console.log(nome);
}

nomes.forEach(imprimeNome);


// metodo map() -> bom para reescrever arrays

const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);

// aletrando strings com map()

const nomes1 = ["ana Julia", "Caio vinicius", "BIA silva"];

//const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());
const nomesPadronizados = nomes1.map((nome) => {
 return nome.toUpperCase();

 });

 console.log(nomesPadronizados)