// utilizando Number() e String()

// > String()

let telefone1 = 12341234;
console.log("O telefone é " + String(telefone1)); 
/* teremos a conversão do número 12341234 para uma string “12341234” e assim 
poderemos fazer a concatenação entre as strings */

// toString

let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString()); 
/* o .toString() é uma outra forma para  fazer essa conversão, que é mais 
parecida com outras linguagens de programação.*/

var usuarioConectado = false;
console.log(String(usuarioConectado)); // conversão booleana para string, teremos uma string “false”.

usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// > Number()

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // conversão de String para números

//  operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis:

let largura2 = "10";
let altura2 = "5";
console.log( + largura * + altura); // conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna NaN
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado = false;
console.log(Number(usuarioConectado)); // conversão da booleana para número, sendo que false retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true para o número 1.

/*
	== compara o valor
	=== compara o valor e o tipo de dado (boa pratica)
*/