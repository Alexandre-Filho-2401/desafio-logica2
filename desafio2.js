//Segundo desafio de Lógica de Programação
//Devo desenvolver uma calculadora de relação de vitórias com base nas instruções dadas

//A função gera um numero de vitórias qualquer com base em 100 partidas
function contadorPartidas() {
    let wins = Math.floor(Math.random()*100);
    let partidas = 100;
    return partidas - wins;
}
let wins=contadorPartidas();
let rank;

switch(true){
    case wins<=10:
        rank="Ferro";
        break
    case wins<=20:
        rank="Bronze";
        break
    case wins<=50:
        rank="Prata";
        break
    case wins<=80:
        rank="Ouro"
        break
    case wins<=90:
        rank="Diamante";
        break
    case wins<=100:
        rank="Lendario";
        break
    default:
        rank="Imortal";
}

console.log("O Herói tem o saldo "+wins+" de vitórias e está no nível "+rank);