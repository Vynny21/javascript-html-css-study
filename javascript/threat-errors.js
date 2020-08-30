
//throw = erros mais resumidos direto na bloco de decisão
function soma(x, y) {
  if (
    typeof x !== 'number' || typeof y !== 'number'
  ) {
    // lançando um proprio erro
    throw new Error('x e y precisam ser numeros')
  }

  return x + y
}

// capturar e tratar definitamente os erros
try {
  console.log(soma(1, 4))
  console.log(soma('soma'))
} catch(error) {
  console.log('Deu erro!')
} finally {
  //vai ser sempre tratado
}
