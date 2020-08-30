function retornaFunção(name) {
  const name = 'Vini'
  return function() {
    return name
  };
}

const funcao1 = retornaFunção('Luiz')
const funcao2 = retornaFunção('Vini')
console.dir(funcao1)
console.dir(funcao2)

console.log(funcao1, funcao2)