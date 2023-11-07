//Segundo desafio de Lógica de Programação
//Devo desenvolver uma calculadora de relação de vitórias com base nas instruções dadas

function contadorPartidas() {
    let wins = Math.floor(Math.random()*100);
    let partidas = 100;
    return partidas - wins;
}
let wins = contadorPartidas();

console.log("O Herói tem o saldo "+wins+" de vitórias e está no nível "+rank);