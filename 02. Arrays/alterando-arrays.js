// slice() - dividir

const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
];

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2)

console.log(sala1);
console.log(sala2);

// splice() - atualizar

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
//nomes.push("rodrigo")
nomes.splice(1, 2, "rodrigo")

console.log(nomes)

// exemplo

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)

// concatenando arrays

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

const salasUnificadas = salaJS.concat(salaPython)

console.log(salasUnificadas)
//ex

const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat)
console.log(arrayOriginal)

const arrayOriginal1 = [50, 60, 70]
const arrayConcat1 = arrayOriginal.concat([80, [90, 100]])

console.log(arrayConcat1)
console.log(arrayOriginal1)

// lista com duas dimensoes

const alunos1 = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos1, medias]

console.log(listaDeAlunosEMedias)

//console.log('o aluno da posicao 1 de alunos1 é' ${listaDeAlunosEMedias[0][1]});

// exemplo

const nomes1 = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes1, idades, faculdade];

console.log(funcionarios)