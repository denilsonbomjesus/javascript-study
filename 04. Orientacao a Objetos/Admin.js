import User from "./User.js";

export default class Admin extends User {
	constructor(nome, email, nascimento, role ='admin', ativo =true) {
		super(nome, email, nascimento, role, ativo)

	}

	nomeAdmin(){ // retornaria undefined sem o metodo get nome() na classe User
		return `${this.nome}`
	}

	criarCurso(nomeDoCurso, vagas) {
		return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
	}
}

/*
const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2023-21-20')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.criarCurso('JS', 29))
*/