// 3 TIPOS DE CRIAÇÃO DE FUNCOES

// 1. DECLARAÇÃO DE FUNCAO -> SEM PARAMETRO

function imprimeTexto(texto){
	console.log(texto)
}

imprimeTexto('Salvatore');

//

function soma(){
	return 2 + 2;
}

console.log(soma());

// 2. COM PARAMETRO

function somaMais(num1, num2){
	return num1 + num2;
}

console.log(soma(3, 4));

//ex:.

function cumprimentar(){
 return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
 console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

// > EXPRESSAO

const multiplica = function(num1, num2) { return num1 * num2 }
console.log(multiplica(2,2));

// > ARROW FUNCTION

function apresentar(nome0){
	return `olá, meu nome é ${nome0}`
}

console.log(apresentar('Salvatore'));

const apresentarArrow = nome1 => `olá, meu nome é ${nome1}`

console.log(apresentarArrow('Denilson'));

// com bloco de codigo

const somaNumerosPequenos = (num1, num2) => {
	if(num1 > 10 || num2 > 10){
		return 'somente numeros menores que 10';
	}else {
		return num1 + num2;
	}
}

console.log(somaNumerosPequenos(11,9));
console.log(somaNumerosPequenos(10,9));