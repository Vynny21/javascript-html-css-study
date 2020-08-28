function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (min - max) + min)
}

function esperaAi(msg, time) {
  return new Promise((resolve, reject) => {
    // rejeitando a promise
    if (typeof msg !== 'string') reject('BAD VALUE')

    setInterval(() => {
      resolve(msg)
      }, time)
    }
  )
}

// As promises agem em paralelo
esperaAi('Conexão com o BD', rand(1, 3))
  .then(response => { 
    console.log(response);
    return esperaAi('Buscando dados da base', rand(1, 3))
  })
  .then(response => {
    console.log(response);
    return esperaAi(2222, rand(1, 3))
  })
  .then(response => {
    console.log(response) //aqui ele exibe a frase 3
  })
  .then(() => console.log('Exibe dados da tela'))
  .catch(e => { console.log('ERROR', e) })

console.log('Isto aqui será exibido antes de tudo.')

//uma função só vai executar depois de outra função == função de callback
// esperaAi('Frase 1', rand(1, 3), function() {
//   esperaAi('Frase 2', rand(1, 3), function() {
//     esperaAi('Frase 3', rand(1, 3))
//   })
// })
