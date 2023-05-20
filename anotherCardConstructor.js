const card1P1 = document.getElementById('card1P1');
const card2P1 = document.getElementById('card2P1');
const card3P1 = document.getElementById('card3P1');

const card1P2 = document.getElementById('card1P2');
const card2P2 = document.getElementById('card2P2');
const card3P2 = document.getElementById('card3P2');

const card1P3 = document.getElementById('card1P3');
const card2P3 = document.getElementById('card2P3');
const card3P3 = document.getElementById('card3P3');

const card1P4 = document.getElementById('card1P4');
const card2P4 = document.getElementById('card2P4');
const card3P4 = document.getElementById('card3P4');

const vira = document.getElementById('vira');

const ouros = 100;
const espadas = 1000;
const copas = 10000;
const paus = 100000;

let ouros4 =   { id: 1, Name: '4', naipe: 'ouros', value: 1, pick: true };
let espadas4 = { id: 1, Name: '4', naipe: 'espadas', value: 1, pick: true };
let copas4 =   { id: 1, Name: '4', naipe: 'copas', value: 1, pick: true };
let paus4 =    { id: 1, Name: '4', naipe: 'paus', value: 1, pick: true };

let ouros5 =   { id: 2, Name: '5', naipe: 'ouros', value: 2, pick: true };
let espadas5 = { id: 2, Name: '5', naipe: 'espadas', value: 2, pick: true };
let copas5 =   { id: 2, Name: '5', naipe: 'copas', value: 2, pick: true };
let paus5 =    { id: 2, Name: '5', naipe: 'paus', value: 2, pick: true };

let ouros6 =   { id: 3, Name: '5', naipe: 'ouros', value: 3, pick: true };
let espadas6 = { id: 3, Name: '5', naipe: 'espadas', value: 3, pick: true };
let copas6 =   { id: 3, Name: '5', naipe: 'copas', value: 3, pick: true };
let paus6 =    { id: 3, Name: '5', naipe: 'paus', value: 3, pick: true };

let ouros7 =   { id: 4, Name: '7', naipe: 'ouros', value: 4, pick: true };
let espadas7 = { id: 4, Name: '7', naipe: 'espadas', value: 4, pick: true };
let copas7 =   { id: 4, Name: '7', naipe: 'copas', value: 4, pick: true };
let paus7 =    { id: 4, Name: '7', naipe: 'paus', value: 4, pick: true };

let ourosQ =   { id: 5, Name: 'Q', naipe: 'ouros', value: 5, pick: true };
let espadasQ = { id: 5, Name: 'Q', naipe: 'espadas', value: 5, pick: true };
let copasQ =   { id: 5, Name: 'Q', naipe: 'copas', value: 5, pick: true };
let pausQ =    { id: 5, Name: 'Q', naipe: 'paus', value: 5, pick: true };

let ourosJ =   { id: 6, Name: 'J', naipe: 'ouros', value: 6, pick: true };
let espadasJ = { id: 6, Name: 'J', naipe: 'espadas', value: 6, pick: true };
let copasJ =   { id: 6, Name: 'J', naipe: 'copas', value: 6, pick: true };
let pausJ =    { id: 6, Name: 'J', naipe: 'paus', value: 6, pick: true };

let ourosK =   { id: 7, Name: 'K', naipe: 'ouros', value: 7, pick: true };
let espadasK = { id: 7, Name: 'K', naipe: 'espadas', value: 7, pick: true };
let copasK =   { id: 7, Name: 'K', naipe: 'copas', value: 7, pick: true };
let pausK =    { id: 7, Name: 'K', naipe: 'paus', value: 7, pick: true };

let ourosA =   { id: 8, Name: 'A', naipe: 'ouros', value: 8, pick: true };
let espadasA = { id: 8, Name: 'A', naipe: 'espadas', value: 8, pick: true };
let copasA =   { id: 8, Name: 'A', naipe: 'copas', value: 8, pick: true };
let pausA =    { id: 8, Name: 'A', naipe: 'paus', value: 8, pick: true };

let ouros2 =   { id: 9, Name: '2', naipe: 'ouros', value: 9, pick: true };
let espadas2 = { id: 9, Name: '2', naipe: 'espadas', value: 9, pick: true };
let copas2 =   { id: 9, Name: '2', naipe: 'copas', value: 9, pick: true };
let paus2 =    { id: 9, Name: '2', naipe: 'paus', value: 9, pick: true };

let ouros3 =   { id: 10, Name: '3', naipe: 'ouros', value: 10, pick: true };
let espadas3 = { id: 10, Name: '3', naipe: 'espadas', value: 10, pick: true };
let copas3 =   { id: 10, Name: '3', naipe: 'copas', value: 10, pick: true };
let paus3 =    { id: 10, Name: '3', naipe: 'paus', value: 10, pick: true };

let deck = [
      ouros4, espadas4, copas4, paus4, ouros5, espadas5, copas5, paus5, ouros6, espadas6, copas6, paus6,
      ouros7, espadas7, copas7, paus7, ourosQ, espadasQ, copasQ, pausQ, ourosJ, espadasJ, copasJ, pausJ,
      ourosK, espadasK, copasK, pausK, ourosA, espadasA, copasA, pausA, ouros2, espadas2, copas2, paus2,
      ouros3, espadas3, copas3, paus3
    ]
      
    let card;
    function getCard () {
        let randomCard = Math.floor(Math.random() * deck.length);
        card = deck[randomCard];
        if(card.pick == false) {
            getCard();
        }
        card.pick = false;
    }
    function player1Deck () {
        //for (let i = 0; i < 3; i++) { TODO: TALVEZ MUDE O METODO PARA QUE A APLICACAO SEJA ESCALAVEL
            getCard();
            card1P1.innerText = card.Name + ' ' + card.naipe;
            card1P1.dataset.value = card.value;
            card1P1.dataset.naipe = card.naipe;
            card1P1.dataset.id = card.id;
            getCard();
            card2P1.innerText = card.Name + ' ' + card.naipe;
            card2P1.dataset.value = card.value;
            card2P1.dataset.naipe = card.naipe;
            card2P1.dataset.id = card.id;
            getCard();
            card3P1.innerText = card.Name + ' ' + card.naipe;
            card3P1.dataset.value = card.value;
            card3P1.dataset.naipe = card.naipe;
            card3P1.dataset.id = card.id;
        //}
    }
    function player2Deck () {
        //for (let i = 0; i < 3; i++) {
            getCard();
            card1P2.innerText = card.Name + ' ' + card.naipe;
            card1P2.dataset.value = card.value;
            card1P2.dataset.naipe = card.naipe;
            card1P2.dataset.id = card.id;
            getCard();
            card2P2.innerText = card.Name + ' ' + card.naipe;
            card2P2.dataset.value = card.value;
            card2P2.dataset.naipe = card.naipe;
            card2P2.dataset.id = card.id;
            getCard();
            card3P2.innerText = card.Name + ' ' + card.naipe;
            card3P2.dataset.value = card.value;
            card3P2.dataset.naipe = card.naipe;
            card3P2.dataset.id = card.id;
        //}
    }
    function player3Deck () {
        //for (let i = 0; i < 3; i++) {
            getCard();
            card1P3.innerText = card.Name + ' ' + card.naipe;
            card1P3.dataset.value = card.value;
            card1P3.dataset.naipe = card.naipe;
            card1P3.dataset.id = card.id;
            getCard();
            card2P3.innerText = card.Name + ' ' + card.naipe;
            card2P3.dataset.value = card.value;
            card2P3.dataset.naipe = card.naipe;
            card2P3.dataset.id = card.id;
            getCard();
            card3P3.innerText = card.Name + ' ' + card.naipe;
            card3P3.dataset.value = card.value;
            card3P3.dataset.naipe = card.naipe;
            card3P3.dataset.id = card.id;
        //}
    }
    function player4Deck () {
        //for (let i = 0; i < 3; i++) {
            getCard();
            card1P4.innerText = card.Name + ' ' + card.naipe;
            card1P4.dataset.value = card.value;
            card1P4.dataset.naipe = card.naipe;
            card1P4.dataset.id = card.id;
            getCard();
            card2P4.innerText = card.Name + ' ' + card.naipe;
            card2P4.dataset.value = card.value;
            card2P4.dataset.naipe = card.naipe;
            card2P4.dataset.id = card.id;
            getCard();
            card3P4.innerText = card.Name + ' ' + card.naipe;
            card3P4.dataset.value = card.value;
            card3P4.dataset.naipe = card.naipe;
            card3P4.dataset.id = card.id;
        //}
    }
    function viras () {
        getCard();
        vira.innerText = card.Name + ' ' + card.naipe;
        vira.dataset.value = card.value;
        vira.dataset.id = card.id;
    }
    player1Deck();  
    player2Deck();  
    player3Deck();  
    player4Deck();  
    viras();
    
    
    let allCardsInGame = document.getElementsByClassName('card');
    
    function roundRuleSettings () {
        for (let i = 0; i < 11; i++) {
            if (vira.dataset.id == allCardsInGame[i].dataset.id) {
                if (allCardsInGame[i].dataset.naipe == 'ouros') {
                    allCardsInGame[i].dataset.value = ouros;
                } 
                if (allCardsInGame[i].dataset.naipe == 'espadas') {
                    allCardsInGame[i].dataset.value = espadas;
                } 
                if (allCardsInGame[i].dataset.naipe == 'copas') {
                    allCardsInGame[i].dataset.value = copas;
                } 
                if (allCardsInGame[i].dataset.naipe == 'paus') {
                    allCardsInGame[i].dataset.value = paus;
                } 
            }
        }
    } 
    roundRuleSettings();

    let cardsOnTable = [];
    let playerTurn = 0;
    
    function throwCard (id) {
        let cardThrowed = document.getElementById(id);
        cardThrowed = cardThrowed.dataset.value;
        cardsOnTable.push(cardThrowed);
        playerTurn += 1;
        if (playerTurn === 4) {
            whoWin();
        }
    }

    function whoWin () {
        if (cardsOnTable[0] > cardsOnTable[1] && cardsOnTable[2] && cardsOnTable[3]) {
            roundConditions(1);
        }
        if (cardsOnTable[1] > cardsOnTable[0] && cardsOnTable[2] && cardsOnTable[3]) {
            roundConditions(2);
        }
        if (cardsOnTable[2] > cardsOnTable[0] && cardsOnTable[1] && cardsOnTable[3]) {
            roundConditions(3);
        }
        if (cardsOnTable[3] > cardsOnTable[0] && cardsOnTable[1] && cardsOnTable[2]) {
            roundConditions(4);
        }
    }
    
    function roundConditions(op) {
        switch(op) {
            case 1: //vitoria jogador 1
                console.log("vitoraP1");
                break;
            case 2: //vitoria jogador 2
                console.log("vitoraP2");
                break;
            case 3: //vitoria jogador 3
                console.log("vitoraP3");        
                break;
            case 4: //vitoria jogador 4
                console.log("vitoraP4");
                break;
            default:
                console.log("default");
        }
    }

