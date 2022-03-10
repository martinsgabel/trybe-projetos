
// parametros (num apostado)
// checar se numApostado é igual à numSorteado

// HOF:
// gerar num aleatória de 1 à 5
// retornar "Tente novamente" ou "Parabéns você ganhou"

const funcSorteio = (numSorteado, numEscolhido) => { 
    return numSorteado === numEscolhido ? "Parabéns você ganhou" : "Tente novamente";
}

const funcResultado = (numEscolhido,callback) => { 
    let numSorteado = Math.floor(Math.random()*6);

    console.log(numSorteado);

    return callback(numSorteado, numEscolhido);
}

console.log(funcResultado(3, funcSorteio));
