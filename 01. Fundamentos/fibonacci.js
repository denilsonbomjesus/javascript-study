let atual = 0;
let anterior = 1;
let seq = 0;

for(let i = 0; i<10; i++){

	seq = atual + anterior;
	anterior = atual;
	atual = seq;

	console.log(seq);
}	
