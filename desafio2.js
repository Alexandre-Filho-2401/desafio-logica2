//Segundo desafio de Lógica de Programação
//Devo desenvolver uma calculadora de relação de vitórias com base nas instruções dadas

let wins = 0;
let rank = 5;

function partida(){
    let cont=math.floor(math.random()*2);
    if(cont=1){
        wins+=1;
    }
}
for(let i=1;i<=100;i++) {
    partida();
}

console.log("O Herói tem o saldo "+wins+" de vitórias e está no nível "+rank);