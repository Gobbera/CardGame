
/* 
let naipe = ['ouros','espadas','copas','paus']

console.log(naipe)

let value = ['as','2','3','4','5','6','7','8','9','10','dama','valete','reis']

let deck = [];

for(let i = 0; i < value.length; i++) {
    for(let j = 0; j < naipe.length; j++) {
        let card =  value[i] + ' de ' + naipe[j];
        deck.push(card)
    }
}

    console.log(deck);
 */

const quatro = 1;
const cinco = 2; 
const seis = 3;
const sete = 4;
const oito = 5;
const nove = 6;
const dez = 7;
const dama = 8;
const valete = 9;
const reis = 10;     
const as = 11;
const dois = 12;
const tres = 13;


let value = []

value.push(quatro,cinco,seis,sete,oito,nove,dez,dama,valete,reis,as,dois,tres)

console.log(value)

let randomIndex = Math.floor(Math.random() * value.length);
let manilha = value[randomIndex];
console.log(manilha);

    let ouros = 100;
    let espadas = 1000;
    let copas = 10000;
    let paus = 100000;


    function atr () {
        ouros = manilha + ouros;
        espadas = manilha + espadas;
        copas = manilha + copas;
        paus = manilha + paus;
    }    
    atr();
    console.log(ouros)
