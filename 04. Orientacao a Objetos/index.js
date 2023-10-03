import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

const novoUser = new User('Mariana', 'm@m.com', '2021-12-21')
console.log(novoUser) // retorna vazio pois os atributos nao foram iniciados
console.log(novoUser.exibirInfos()) 

const novoAdmin = new Admin('Roberto', 'r@m.com', '2022-02-11')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())
//console.log(novoAdmin.nomeAdmin())
console.log(novoAdmin.nome)
novoAdmin.nome = 'Andre'
console.log(novoAdmin.nome)