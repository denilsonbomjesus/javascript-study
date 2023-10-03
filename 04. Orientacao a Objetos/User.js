// #criar atributo privad0 -> #

export default class  User{
	#nome
	#email
	#nascimento
	#role
	#ativo
	constructor(nome, email, nascimento,role, ativo = true){
		this.#nome = nome
		this.#email = email
		this.#nascimento = nascimento
		this.#role = role || 'estudante'
		this.#ativo = ativo
	}

	// get e set

	get nome(){
		return this.#nome
	}

	get email(){
		return this.#email
	}

	get nascimento(){
		return this.#nascimento
	}

	get role(){
		return this.#role
	}

	get ativo(){
		return this.#ativo
	}

	set nome(novoNome){
		if (novoNome === ''){
			throw new Error('formato invalido')
		}
		this.#nome = novoNome
	}

	/* //metodo privado -> muito melhor usar get e set
	#montaObjUser() {
		return ({
			nome: this.#nome,
			email: this.#email,
			nascimento: this.#nascimento,
			role: this.#role,
			ativo: this.#ativo
		})
	}
	*/

	exibirInfos(){
		/* //chamada de metodo privado
		const objUser = this.#montaObjUser()
		return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}`
		*/
		return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
	}
}

/*
const novoUser = new User('Denilson', 'eu@.com', '2023-02-03')
console.log(novoUser)
console.log(novoUser.exibirInfos())

console.log(User.prototype.isPrototypeOf(novoUser))
*/