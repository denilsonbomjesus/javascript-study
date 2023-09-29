const nome = "Salvatore";
const sobrenome = "Addams";

// concatenacao (+)

console.log(nome + " " + sobrenome);

// unicode codes

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

/* padronizar uma comparação entre strings: o JavaScript diferencia 
minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.*/
//exemplo: teste errado

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

// transformando todos os caracteres em letras minúsculas.

const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

const inputMinusculo = input1.toLowerCase();

console.log(cidade1 === inputMinusculo); // true

// length

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

// > Template -> `` e ${}

const meuNome = 'Salvatore';
const idade = 19;
const minhaCidade = 'Recife';

const apresentacao = `Meu nome é ${meuNome}, tenho ${idade} anos e nasci na cidade de ${minhaCidade}.`;

console.log(apresentacao);

// > com Operador Ternario

const bebidaMaior = 'vodka';
const bebidaMenor = 'suco';

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)