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

let ouros4 = { Name: '4', manilha: 'ouros', value: 1, pick: true };
let espadas4 = { Name: '4', manilha: 'espadas', value: 1, pick: true };
let copas4 = { Name: '4', manilha: 'copas', value: 1, pick: true };
let paus4 = { Name: '4', manilha: 'paus', value: 1, pick: true };

let ouros5 = { Name: '5', manilha: 'ouros', value: 2, pick: true };
let espadas5 = { Name: '5', manilha: 'espadas', value: 2, pick: true };
let copas5 = { Name: '5', manilha: 'copas', value: 2, pick: true };
let paus5 = { Name: '5', manilha: 'paus', value: 2, pick: true };

let ouros6 = { Name: '5', manilha: 'ouros', value: 3, pick: true };
let espadas6 = { Name: '5', manilha: 'espadas', value: 3, pick: true };
let copas6 = { Name: '5', manilha: 'copas', value: 3, pick: true };
let paus6 = { Name: '5', manilha: 'paus', value: 3, pick: true };

let ouros7 = { Name: '7', manilha: 'ouros', value: 4, pick: true };
let espadas7 = { Name: '7', manilha: 'espadas', value: 4, pick: true };
let copas7 = { Name: '7', manilha: 'copas', value: 4, pick: true };
let paus7 = { Name: '7', manilha: 'paus', value: 4, pick: true };

let ourosQ = { Name: 'Q', manilha: 'ouros', value: 5, pick: true };
let espadasQ = { Name: 'Q', manilha: 'espadas', value: 5, pick: true };
let copasQ = { Name: 'Q', manilha: 'copas', value: 5, pick: true };
let pausQ = { Name: 'Q', manilha: 'paus', value: 5, pick: true };

let ourosJ = { Name: 'J', manilha: 'ouros', value: 6, pick: true };
let espadasJ = { Name: 'J', manilha: 'espadas', value: 6, pick: true };
let copasJ = { Name: 'J', manilha: 'copas', value: 6, pick: true };
let pausJ = { Name: 'J', manilha: 'paus', value: 6, pick: true };

let ourosK = { Name: 'K', manilha: 'ouros', value: 7, pick: true };
let espadasK = { Name: 'K', manilha: 'espadas', value: 7, pick: true };
let copasK = { Name: 'K', manilha: 'copas', value: 7, pick: true };
let pausK = { Name: 'K', manilha: 'paus', value: 7, pick: true };

let ourosA = { Name: 'A', manilha: 'ouros', value: 8, pick: true };
let espadasA = { Name: 'A', manilha: 'espadas', value: 8, pick: true };
let copasA = { Name: 'A', manilha: 'copas', value: 8, pick: true };
let pausA = { Name: 'A', manilha: 'paus', value: 8, pick: true };

let ouros2 = { Name: '2', manilha: 'ouros', value: 9, pick: true };
let espadas2 = { Name: '2', manilha: 'espadas', value: 9, pick: true };
let copas2 = { Name: '2', manilha: 'copas', value: 9, pick: true };
let paus2 = { Name: '2', manilha: 'paus', value: 9, pick: true };

let ouros3 = { Name: '3', manilha: 'ouros', value: 10, pick: true };
let espadas3 = { Name: '3', manilha: 'espadas', value: 10, pick: true };
let copas3 = { Name: '3', manilha: 'copas', value: 10, pick: true };
let paus3 = { Name: '3', manilha: 'paus', value: 10, pick: true };

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
            card1P1.innerText = card.Name + ' ' + card.manilha;
            getCard();
            card2P1.innerText = card.Name + ' ' + card.manilha;
            getCard();
            card3P1.innerText = card.Name + ' ' + card.manilha;
        //}
    }
    function player2Deck () {
        //for (let i = 0; i < 3; i++) {
            getCard();
            card1P2.innerText = card.Name + ' ' + card.manilha;
            getCard();
            card2P2.innerText = card.Name + ' ' + card.manilha;
            getCard();
            card3P2innerText = card.Name + ' ' + card.manilha;
        //}
    }
    function player3Deck () {
        //for (let i = 0; i < 3; i++) {
            getCard();
            card1P3.innerText = card.Name + ' ' + card.manilha;
            getCard();
            card2P3.innerText = card.Name + ' ' + card.manilha;
            getCard();
            card3P3.innerText = card.Name + ' ' + card.manilha;
        //}
    }
    function player4Deck () {
        //for (let i = 0; i < 3; i++) {
            getCard();
            card1P4.innerText = card.Name + ' ' + card.manilha;
            getCard();
            card2P4.innerText = card.Name + ' ' + card.manilha;
            getCard();
            card3P4.innerText = card.Name + ' ' + card.manilha;
        //}
    }
    player1Deck();  
    player2Deck();  
    player3Deck();  
    player4Deck();  


