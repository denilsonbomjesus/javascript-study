const funcionarios = [
  ["Ana", "Juliana", "Leonardo"],
  [30, 35, 28]
];
// imprimir a frase “Leonardo tem idade 28”

console.log(`${funcionarios[0][2]} tem idade ${funcionarios[1][2]}`)

//Para imprimir o nome, acessamos a lista de nomes escrevendo funcionarios[0] e, logo em seguida, adicionamos [2] para acessar o nome da posição 2. Para imprimir a idade, acessamos a lista de idades escrevendo funcionarios[1] e, logo em seguida, adicionamos [2] para acessar a idade da posição 2.

// procurar na lista

// o método includes() confere se o elemento passado por parâmetro está incluso em uma lista;
//o método indexOf() retorna o índice do elemento passado por parâmetro.

// ...
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        //const alunos = listaDeAlunosEMedias[0];
        //const medias = listaDeAlunosEMedias[1];
        
        const [alunos, medias] = listaDeAlunosEMedias;
        
        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Juliana");