
// (...) : rest operator => neste exemplo, pegando todo o array de numeros
// function expression
const conta = function(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if ( operador === '+' ) acumulador += numero;
    if ( operador === '-' ) acumulador -= numero;
    if ( operador === '/' ) acumulador /= numero;
    if ( operador === '*' ) acumulador *= numero;
  }

  console.log(acumulador)
}

conta('+', 1, 20, 30, 40, 50)