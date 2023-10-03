import User from "./User.js"

export default class Docente extends User {
	constructor(nome, email, nascimento, role="docente", ativo=true){
		super(nome, email, nascimento, role, ativo)
	}

	aprovaEstudante(estudante, curso) {
		return `estudante ${estudante} aprovado no curso ${curso}`
	}

}

/*
const novoDocente = new Docente('Denilson','d@s.com', '2003-14-06')
console.log(novoDocente)
console.log(novoDocente.aprovaEstudante('Carlos','JS'))
*/