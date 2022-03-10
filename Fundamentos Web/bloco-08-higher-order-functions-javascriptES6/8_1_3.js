// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

// HOF 
// 3 parametros: corretas, respostas, callback
// retornar o total da contagem de respostas certas.

// CALLBACK
// checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante.
// v = +1 | f = -0.5 | NA = 0

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificaAprovacao = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
    let erros = 0;
    let acertos = 0;
    let none= 0;
    for (let index = 0; index < RIGHT_ANSWERS.length; index++) {           
        if (STUDENT_ANSWERS[index] === 'N.A') {
            none+=1;
        } else if (STUDENT_ANSWERS[index] === RIGHT_ANSWERS[index]) {
            acertos+=1;
        } else if (STUDENT_ANSWERS[index] !== RIGHT_ANSWERS[index]) {
            erros+=0.5;      
        }
    }

    pontos = acertos - erros;
    // return console.log(`O Estudante acertou ${acertos} questões`,erros, acertos, none, pontos);
    return `O Estudante acertou ${acertos} questões`;
}

const resultadoAprovacao = (callback) => { console.log(callback);}

resultadoAprovacao(verificaAprovacao(RIGHT_ANSWERS, STUDENT_ANSWERS));