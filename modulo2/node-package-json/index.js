//a) podemos acessar os paâmetros através da propriedade process.argv[]

var nome = process.argv[2]
var idade = Number(process.argv[3])
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`); 