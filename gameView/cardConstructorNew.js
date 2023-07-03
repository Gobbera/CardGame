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

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const player3 = document.getElementById('player3');
const player4 = document.getElementById('player4');

const mark1 = document.getElementById('mark1');
const mark2 = document.getElementById('mark2');
const mark3 = document.getElementById('mark3');

const teamBrownScoreBoard = document.getElementById('teamBrownScoreBoard');
const teamPurpleScoreBoard = document.getElementById('teamPurpleScoreBoard');

const vira = document.getElementById('vira');

const viraContainer = document.getElementById('viraContainer');

const ouros = 100;
const espadas = 1000;
const copas = 10000;
const paus = 100000;

let ouros4 = { id: 1, Name: '4', naipe: 'ouros', value: 1, pick: true, naipesOnValueQuantity: 4, cardColor: 'redColor' };
let espadas4 = { id: 1, Name: '4', naipe: 'espadas', value: 1, pick: true, naipesOnValueQuantity: 4, cardColor: 'blackColor' };
let copas4 = { id: 1, Name: '4', naipe: 'copas', value: 1, pick: true, naipesOnValueQuantity: 4, cardColor: 'redColor' };
let paus4 = { id: 1, Name: '4', naipe: 'paus', value: 1, pick: true, naipesOnValueQuantity: 4, cardColor: 'blackColor' };

let ouros5 = { id: 2, Name: '5', naipe: 'ouros', value: 2, pick: true, naipesOnValueQuantity: 5, cardColor: 'redColor' };
let espadas5 = { id: 2, Name: '5', naipe: 'espadas', value: 2, pick: true, naipesOnValueQuantity: 5, cardColor: 'blackColor' };
let copas5 = { id: 2, Name: '5', naipe: 'copas', value: 2, pick: true, naipesOnValueQuantity: 5, cardColor: 'redColor' };
let paus5 = { id: 2, Name: '5', naipe: 'paus', value: 2, pick: true, naipesOnValueQuantity: 5, cardColor: 'blackColor' };

let ouros6 = { id: 3, Name: '6', naipe: 'ouros', value: 3, pick: true, naipesOnValueQuantity: 6, cardColor: 'redColor' };
let espadas6 = { id: 3, Name: '6', naipe: 'espadas', value: 3, pick: true, naipesOnValueQuantity: 6, cardColor: 'blackColor' };
let copas6 = { id: 3, Name: '6', naipe: 'copas', value: 3, pick: true, naipesOnValueQuantity: 6, cardColor: 'redColor' };
let paus6 = { id: 3, Name: '6', naipe: 'paus', value: 3, pick: true, naipesOnValueQuantity: 6, cardColor: 'blackColor' };

let ouros7 = { id: 4, Name: '7', naipe: 'ouros', value: 4, pick: true, naipesOnValueQuantity: 7, cardColor: 'redColor' };
let espadas7 = { id: 4, Name: '7', naipe: 'espadas', value: 4, pick: true, naipesOnValueQuantity: 7, cardColor: 'blackColor' };
let copas7 = { id: 4, Name: '7', naipe: 'copas', value: 4, pick: true, naipesOnValueQuantity: 7, cardColor: 'redColor' };
let paus7 = { id: 4, Name: '7', naipe: 'paus', value: 4, pick: true, naipesOnValueQuantity: 7, cardColor: 'blackColor' };

let ourosQ = { id: 5, Name: 'Q', naipe: 'ouros', value: 5, pick: true, naipesOnValueQuantity: 11, cardColor: 'redColor' };
let espadasQ = { id: 5, Name: 'Q', naipe: 'espadas', value: 5, pick: true, naipesOnValueQuantity: 11, cardColor: 'blackColor' };
let copasQ = { id: 5, Name: 'Q', naipe: 'copas', value: 5, pick: true, naipesOnValueQuantity: 11, cardColor: 'redColor' };
let pausQ = { id: 5, Name: 'Q', naipe: 'paus', value: 5, pick: true, naipesOnValueQuantity: 11, cardColor: 'blackColor' };

let ourosJ = { id: 6, Name: 'J', naipe: 'ouros', value: 6, pick: true, naipesOnValueQuantity: 11, cardColor: 'redColor' };
let espadasJ = { id: 6, Name: 'J', naipe: 'espadas', value: 6, pick: true, naipesOnValueQuantity: 11, cardColor: 'blackColor' };
let copasJ = { id: 6, Name: 'J', naipe: 'copas', value: 6, pick: true, naipesOnValueQuantity: 11, cardColor: 'redColor' };
let pausJ = { id: 6, Name: 'J', naipe: 'paus', value: 6, pick: true, naipesOnValueQuantity: 11, cardColor: 'blackColor' };

let ourosK = { id: 7, Name: 'K', naipe: 'ouros', value: 7, pick: true, naipesOnValueQuantity: 11, cardColor: 'redColor' };
let espadasK = { id: 7, Name: 'K', naipe: 'espadas', value: 7, pick: true, naipesOnValueQuantity: 11, cardColor: 'blackColor' };
let copasK = { id: 7, Name: 'K', naipe: 'copas', value: 7, pick: true, naipesOnValueQuantity: 11, cardColor: 'redColor' };
let pausK = { id: 7, Name: 'K', naipe: 'paus', value: 7, pick: true, naipesOnValueQuantity: 11, cardColor: 'blackColor' };

let ourosA = { id: 8, Name: 'A', naipe: 'ouros', value: 8, pick: true, naipesOnValueQuantity: 1, cardColor: 'redColor' };
let espadasA = { id: 8, Name: 'A', naipe: 'espadas', value: 8, pick: true, naipesOnValueQuantity: 1, cardColor: 'blackColor' };
let copasA = { id: 8, Name: 'A', naipe: 'copas', value: 8, pick: true, naipesOnValueQuantity: 1, cardColor: 'redColor' };
let pausA = { id: 8, Name: 'A', naipe: 'paus', value: 8, pick: true, naipesOnValueQuantity: 1, cardColor: 'blackColor' };

let ouros2 = { id: 9, Name: '2', naipe: 'ouros', value: 9, pick: true , naipesOnValueQuantity: 2, cardColor: 'redColor' };
let espadas2 = { id: 9, Name: '2', naipe: 'espadas', value: 9, pick: true , naipesOnValueQuantity: 2, cardColor: 'blackColor' };
let copas2 = { id: 9, Name: '2', naipe: 'copas', value: 9, pick: true , naipesOnValueQuantity: 2, cardColor: 'redColor' };
let paus2 = { id: 9, Name: '2', naipe: 'paus', value: 9, pick: true , naipesOnValueQuantity: 2, cardColor: 'blackColor' };

let ouros3 = { id: 10, Name: '3', naipe: 'ouros', value: 10, pick: true ,naipesOnValueQuantity: 3, cardColor: 'redColor' };
let espadas3 = { id: 10, Name: '3', naipe: 'espadas', value: 10, pick: true, naipesOnValueQuantity: 3, cardColor: 'blackColor' };
let copas3 = { id: 10, Name: '3', naipe: 'copas', value: 10, pick: true, naipesOnValueQuantity: 3, cardColor: 'redColor' };
let paus3 = { id: 10, Name: '3', naipe: 'paus', value: 10, pick: true, naipesOnValueQuantity: 3, cardColor: 'blackColor' };

let deck = [
    ouros4, espadas4, copas4, paus4,
    ouros5, espadas5, copas5, paus5,
    ouros6, espadas6, copas6, paus6,
    ouros7, espadas7, copas7, paus7,
    ourosQ, espadasQ, copasQ, pausQ,
    ourosJ, espadasJ, copasJ, pausJ,
    ourosK, espadasK, copasK, pausK,
    ourosA, espadasA, copasA, pausA,
    ouros2, espadas2, copas2, paus2,
    ouros3, espadas3, copas3, paus3
]

let cardName;
let cardValueColor;
let naipe;
let naipeImage;
let naipeImageAlt;
let naipesOnValueQuantity;
let royalityClass;
let card;

function getCard() {
    let randomCard = Math.floor(Math.random() * deck.length);
    card = deck[randomCard];
    if (card.pick == false) {
        getCard();
    }
    card.pick = false;
    cardName = card.Name
    naipesOnValueQuantity = card.naipesOnValueQuantity;
    royalityClass = `/images/naipes/${card.Name}_Naipe_${card.naipe}.png`
    naipeImage = `/images/naipes/Naipe_${card.naipe}.png`;
    cardValueColor = card.cardColor;
    chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage, royalityClass, cardName);
}


function player1Deck() {
    getCard();
    card1P1.innerText = card.Name + ' ' + card.naipe;
    card1P1.dataset.name = card.Name;
    card1P1.dataset.value = card.value;
    card1P1.dataset.naipe = card.naipe;
    card1P1.dataset.id = card.id;
    card1P1.innerHTML = naipesOnValueQuantity;
    player1.insertAdjacentElement("beforeend", card1P1);
    getCard();
    card2P1.innerText = card.Name + ' ' + card.naipe;
    card2P1.dataset.name = card.Name;
    card2P1.dataset.value = card.value;
    card2P1.dataset.naipe = card.naipe;
    card2P1.dataset.id = card.id;
    card2P1.innerHTML = naipesOnValueQuantity;
    player1.insertAdjacentElement("beforeend", card2P1);
    getCard();
    card3P1.innerText = card.Name + ' ' + card.naipe;
    card3P1.dataset.name = card.Name;
    card3P1.dataset.value = card.value;
    card3P1.dataset.naipe = card.naipe;
    card3P1.dataset.id = card.id;
    card3P1.innerHTML = naipesOnValueQuantity;
    player1.insertAdjacentElement("beforeend", card3P1);
}
function player2Deck() {
    getCard();
    card1P2.innerText = card.Name + ' ' + card.naipe;
    card1P2.dataset.name = card.Name;
    card1P2.dataset.value = card.value;
    card1P2.dataset.naipe = card.naipe;
    card1P2.dataset.id = card.id;
    card1P2.innerHTML = naipesOnValueQuantity;
    player2.insertAdjacentElement("beforeend", card1P2);
    getCard();
    card2P2.innerText = card.Name + ' ' + card.naipe;
    card2P2.dataset.name = card.Name;
    card2P2.dataset.value = card.value;
    card2P2.dataset.naipe = card.naipe;
    card2P2.dataset.id = card.id;
    card2P2.innerHTML = naipesOnValueQuantity;
    player2.insertAdjacentElement("beforeend", card2P2);
    getCard();
    card3P2.innerText = card.Name + ' ' + card.naipe;
    card3P2.dataset.name = card.Name;
    card3P2.dataset.value = card.value;
    card3P2.dataset.naipe = card.naipe;
    card3P2.dataset.id = card.id;
    card3P2.innerHTML = naipesOnValueQuantity;
    player2.insertAdjacentElement("beforeend", card3P2);
}
function player3Deck() {
    getCard();
    card1P3.innerText = card.Name + ' ' + card.naipe;
    card1P3.dataset.name = card.Name;
    card1P3.dataset.value = card.value;
    card1P3.dataset.naipe = card.naipe;
    card1P3.dataset.id = card.id;
    card1P3.innerHTML = naipesOnValueQuantity;
    player3.insertAdjacentElement("beforeend", card1P3);
    getCard();
    card2P3.innerText = card.Name + ' ' + card.naipe;
    card2P3.dataset.name = card.Name;
    card2P3.dataset.value = card.value;
    card2P3.dataset.naipe = card.naipe;
    card2P3.dataset.id = card.id;
    card2P3.innerHTML = naipesOnValueQuantity;
    player3.insertAdjacentElement("beforeend", card2P3);
    getCard();
    card3P3.innerText = card.Name + ' ' + card.naipe;
    card3P3.dataset.name = card.Name;
    card3P3.dataset.value = card.value;
    card3P3.dataset.naipe = card.naipe;
    card3P3.dataset.id = card.id;
    card3P3.innerHTML = naipesOnValueQuantity;
    player3.insertAdjacentElement("beforeend", card3P3);

}
function player4Deck() {
    getCard();
    card1P4.innerText = card.Name + ' ' + card.naipe;
    card1P4.dataset.name = card.Name;
    card1P4.dataset.value = card.value;
    card1P4.dataset.naipe = card.naipe;
    card1P4.dataset.id = card.id;
    card1P4.innerHTML = naipesOnValueQuantity;
    player4.insertAdjacentElement("beforeend", card1P4);
    getCard();
    card2P4.innerText = card.Name + ' ' + card.naipe;
    card2P4.dataset.name = card.Name;
    card2P4.dataset.value = card.value;
    card2P4.dataset.naipe = card.naipe;
    card2P4.dataset.id = card.id;
    card2P4.innerHTML = naipesOnValueQuantity;
    player4.insertAdjacentElement("beforeend", card2P4);
    getCard();
    card3P4.innerText = card.Name + ' ' + card.naipe;
    card3P4.dataset.name = card.Name;
    card3P4.dataset.value = card.value;
    card3P4.dataset.naipe = card.naipe;
    card3P4.dataset.id = card.id;
    card3P4.innerHTML = naipesOnValueQuantity;
    player4.insertAdjacentElement("beforeend", card3P4);
}
function viras() {
    getCard();
    vira.innerText = card.Name + ' ' + card.naipe;
    vira.dataset.value = card.value;
    vira.dataset.id = card.id;
    vira.innerHTML = naipesOnValueQuantity;
    viraContainer.insertAdjacentElement("beforeend", vira);
    vira.style.pointerEvents = 'none';
}


let allCardsInGame = document.getElementsByClassName('card');

function roundRuleSettings() {
    let virass = parseInt(vira.dataset.id);
    virass += 1;
    if (virass === 11) { virass = 1; }
    for (let i = 0; i < 11; i++) {
        if (virass == parseInt(allCardsInGame[i].parentElement.dataset.id)) {
            if (allCardsInGame[i].parentElement.dataset.naipe == 'ouros') {
                allCardsInGame[i].parentElement.dataset.value = ouros;
            }
            if (allCardsInGame[i].parentElement.dataset.naipe == 'espadas') {
                allCardsInGame[i].parentElement.dataset.value = espadas;
            }
            if (allCardsInGame[i].parentElement.dataset.naipe == 'copas') {
                allCardsInGame[i].parentElement.dataset.value = copas;
            }
            if (allCardsInGame[i].parentElement.dataset.naipe == 'paus') {
                allCardsInGame[i].parentElement.dataset.value = paus;
            }
        }
    }
}
let p1, p2, p3, p4;

let cardsOnTable = [p1, p2, p3, p4];
let playerTurn = 0;

function throwCard(id, IdNextPlayerTurn, IdPlayerTurn) {
    let cardThrowed = document.getElementById(id);
    cardThrowed.classList.add('toPositionOnTable');
    cardThrowed = cardThrowed.dataset.value;
    if (IdPlayerTurn === 1) {
        cardsOnTable[0] = parseInt(cardThrowed);
    }
    if (IdPlayerTurn === 2) {
        cardsOnTable[1] = parseInt(cardThrowed);
    }
    if (IdPlayerTurn === 3) {
        cardsOnTable[2] = parseInt(cardThrowed);
    }
    if (IdPlayerTurn === 4) {
        cardsOnTable[3] = parseInt(cardThrowed);
    }
    console.log('cartas na mesa/valores', cardsOnTable);
    playerTurn += 1;
    if (playerTurn === 4) {
        if (cardsOnTable[0] > cardsOnTable[1] &&
            cardsOnTable[0] > cardsOnTable[2] &&
            cardsOnTable[0] > cardsOnTable[3]) {
            roundConditions(1, 1);
            return;
        }
        if (cardsOnTable[1] > cardsOnTable[0] &&
            cardsOnTable[1] > cardsOnTable[2] &&
            cardsOnTable[1] > cardsOnTable[3]) {
            roundConditions(1, 2);
            return;
        }
        if (cardsOnTable[2] > cardsOnTable[0] &&
            cardsOnTable[2] > cardsOnTable[1] &&
            cardsOnTable[2] > cardsOnTable[3]) {
            roundConditions(1, 3);
            return;
        }
        if (cardsOnTable[3] > cardsOnTable[0] &&
            cardsOnTable[3] > cardsOnTable[1] &&
            cardsOnTable[3] > cardsOnTable[2]) {
            roundConditions(1, 4);
            return;
        }
        let posicaoMaiorItem = -1;

        for (let i = 0; i < cardsOnTable.length; i++) {
            for (let j = i + 1; j < cardsOnTable.length; j++) {
                if (cardsOnTable[i] === cardsOnTable[j]) {
                    posicaoMaiorItem = j;
                }
            }
        }
        if (posicaoMaiorItem !== -1) {
            switch (posicaoMaiorItem) {
                case 0:
                    posicaoMaiorItem = 1;
                    break;
                case 1:
                    posicaoMaiorItem = 2;
                    break;
                case 2:
                    posicaoMaiorItem = 3;
                    break;
                case 3:
                    posicaoMaiorItem = 4;
                    break;
            }
            roundConditions(2, posicaoMaiorItem);
            return;
        }
    }
    nextPlayerTurn(IdNextPlayerTurn);
}


function roundConditions(op, IdNextPlayerTurn) {
    console.log(cardsOnTable);
    playerTurn = 0;
    cardsOnTable = [p1, p2, p3, p4]
    switch (op) {
        case 1: //vitoria jogador
            console.log("vitoraP" + IdNextPlayerTurn);
            setWinnerPoint(IdNextPlayerTurn);
            nextPlayerTurn(IdNextPlayerTurn);
            setTimeout(() => {
                removeCardsFromTable();
            }, 2000);
        break;
        case 2: //empate
            console.log("empate");
            setWinnerPoint('5');
            nextPlayerTurn(IdNextPlayerTurn);
            setTimeout(() => {
                removeCardsFromTable();
            }, 2000);
        break;
    }
}

let round = 0;
let drawCount = 0;
let teamPurpleCount = 0;
let teamBrownCount = 0;

function setWinnerPoint (player) {
    const op = parseInt(player);
    switch (op) {
        case 1:
            if (round === 1) {
                mark2.style.backgroundColor = 'purple';
                teamPurpleCount += 1;
                if (teamPurpleCount === 2) {
                    mark3.style.backgroundColor = 'purple';
                    setWinnerRound('purple');
                    break;
                }
                break;
            }
            if (round === 2) {
                mark3.style.backgroundColor = 'purple';
                setWinnerRound('purple');
                break;
            }
            mark1.style.backgroundColor = 'purple';
            teamPurpleCount += 1;
            break;
        case 2:
            if (round === 1) {
                mark2.style.backgroundColor = 'brown';
                teamBrownCount += 1;
                if (teamBrownCount === 2) {
                    mark3.style.backgroundColor = 'brown';
                    setWinnerRound('brown');
                    break;
                }
                break;
            }
            if (round === 2) {
                mark3.style.backgroundColor = 'brown';
                setWinnerRound('brown');
                break;
            }
            mark1.style.backgroundColor = 'brown';
            teamBrownCount += 1;
            break;
        case 3:
            if (round === 1) {
                mark2.style.backgroundColor = 'purple';
                teamPurpleCount += 1;
                if (teamPurpleCount === 2) {
                    mark3.style.backgroundColor = 'purple';
                    setWinnerRound('purple');
                    break;
                }
                break;
            }
            if (round === 2) {
                mark3.style.backgroundColor = 'purple';
                setWinnerRound('purple');
                break;
            }
            mark1.style.backgroundColor = 'purple';
            teamPurpleCount += 1;
            break;
        case 4:
            if (round === 1) {
                mark2.style.backgroundColor = 'brown';
                teamBrownCount += 1;
                if (teamBrownCount === 2) {
                    mark3.style.backgroundColor = 'brown';
                    setWinnerRound('brown');
                    break;
                }
                break;
            }
            if (round === 2) {
                mark3.style.backgroundColor = 'brown';
                setWinnerRound('brown');
                break;
            }
            mark1.style.backgroundColor = 'brown';
            teamBrownCount += 1;
            break;
        case 5:
            if (round === 1) {
                mark2.style.backgroundColor = 'yellow';
                console.log('empate1');
                drawCount = 1;
                break;
            }
            if (round === 2) {
                mark3.style.backgroundColor = 'yellow';
                console.log('empate2');
                break;
            }
            mark1.style.backgroundColor = 'yellow';
            drawCount = 1; 
            break;
    }
    round += 1;
    console.log('round:', round, 'drawCount:', drawCount, 'teamPurpleRoundCount:', teamPurpleCount, 'teamBrownRoundCount:', teamBrownCount);
}

let purplePoints = 0;
let brownPoints = 0;

function setWinnerRound(winner) {
    if (winner === 'purple') {
        console.log('time purple ganhou');
        purplePoints += 1;
        console.log('Pontos do time purple:', purplePoints);
        teamPurpleScoreBoard.innerHTML = purplePoints.toString();
    }
    if (winner === 'brown') {
        console.log('time brown ganhou');
        brownPoints += 1;
        console.log('Pontos do time brown:', brownPoints);
        teamBrownScoreBoard.innerHTML = brownPoints.toString();
    }
    deck.forEach(function(carta) {
        carta.pick = true;
    });
    setTimeout(() => {
        mark1.style.backgroundColor = 'transparent';
        mark2.style.backgroundColor = 'transparent';
        mark3.style.backgroundColor = 'transparent';
        startGame();
    }, 3000);
}

function removeCard(card) {
    setTimeout(() => {
        card.innerHTML = '';
        card.classList.remove('toPositionOnTable');
        card.classList.add('toPositionOnOrigem')
        card.classList.remove('toPositionOnOrigem');
    }, 300);
}


const playerTurnIndicator = document.getElementById('playerTurnIndicator');


function nextPlayerTurn(IdNextPlayerTurn) {
    switch (IdNextPlayerTurn) {
        case 1:
            playerTurnIndicator.innerText = 'Vez de ' + 'jogador 1';

            player1.style.pointerEvents = 'auto';
            player2.style.pointerEvents = 'none';
            player3.style.pointerEvents = 'none';
            player4.style.pointerEvents = 'none';
            break;
        case 2:
            playerTurnIndicator.innerText = 'Vez de ' + 'jogador 2';

            player1.style.pointerEvents = 'none';
            player2.style.pointerEvents = 'auto';
            player3.style.pointerEvents = 'none';
            player4.style.pointerEvents = 'none';
            break;
        case 3:
            playerTurnIndicator.innerText = 'Vez de ' + 'jogador 3';

            player1.style.pointerEvents = 'none';
            player2.style.pointerEvents = 'none';
            player3.style.pointerEvents = 'auto';
            player4.style.pointerEvents = 'none';
            break;
        case 4:
            playerTurnIndicator.innerText = 'Vez de ' + 'jogador 4';

            player1.style.pointerEvents = 'none';
            player2.style.pointerEvents = 'none';
            player3.style.pointerEvents = 'none';
            player4.style.pointerEvents = 'auto';
            break;
    }
}

const cardThrowedViewP1 = document.getElementById('cardThrowedViewP1');
const cardThrowedViewP2 = document.getElementById('cardThrowedViewP2');
const cardThrowedViewP3 = document.getElementById('cardThrowedViewP3');
const cardThrowedViewP4 = document.getElementById('cardThrowedViewP4');
const cardSlot1 = document.getElementById('cardSlot1');
const cardSlot2 = document.getElementById('cardSlot2');
const cardSlot3 = document.getElementById('cardSlot3');
const cardSlot4 = document.getElementById('cardSlot4');

function showLastCardThrowedOnTableP1(card) {
    setTimeout(() => {
        cardSlot1.innerHTML = card.innerHTML;
        cardThrowedViewP1.insertAdjacentElement("beforeend", cardSlot1);
        cardThrowedViewP1.style.pointerEvents = 'none';
    }, 300);
}
function showLastCardThrowedOnTableP2(card) {
    setTimeout(() => {
        cardSlot2.innerHTML = card.innerHTML;
        cardThrowedViewP2.insertAdjacentElement("beforeend", cardSlot2);
        cardThrowedViewP2.style.pointerEvents = 'none';
    }, 300);
}
function showLastCardThrowedOnTableP3(card) {
    setTimeout(() => {
        cardSlot3.innerHTML = card.innerHTML;
        cardThrowedViewP3.insertAdjacentElement("beforeend", cardSlot3);
        cardThrowedViewP3.style.pointerEvents = 'none';
    }, 300);
}
function showLastCardThrowedOnTableP4(card) {
    setTimeout(() => {
        cardSlot4.innerHTML = card.innerHTML;
        cardThrowedViewP4.insertAdjacentElement("beforeend", cardSlot4);
        cardThrowedViewP4.style.pointerEvents = 'none';
    }, 300);
}

function removeCardsFromTable () {
    cardSlot1.innerHTML = '';
    cardSlot2.innerHTML = '';
    cardSlot3.innerHTML = '';
    cardSlot4.innerHTML = '';
}

function startGame() {
    round = 0;
    drawCount = 0;
    teamPurpleCount = 0;
    teamBrownCount = 0;
    console.log('round:', round, 'drawCount:', drawCount, 'teamPurpleCount:', teamPurpleCount, 'teamBrownCount:', teamBrownCount);
    player1Deck();
    player2Deck();
    player3Deck();
    player4Deck();
    viras();
    roundRuleSettings();
    nextPlayerTurn(1);
}

function chooseNaipesQuantityOnValue(op, naipeImage, royalityClass) {
    let cardBody = `<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">${cardName}</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">${cardName}</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">`;
    switch(op) {
        case 1:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; align-self: center;"></img>
            </div>`;
            break;
        case 2:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 48px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 48px; top: 20%;"></img>
            </div>`
            break;
        case 3:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 48px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 48px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; align-self: center;"></img>
            </div>`
            break;
        case 4:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            </div>`
            break;
        case 5:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; align-self: center;"></img>
            </div>`
            break;
        case 6:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; align-self: center;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; align-self: center;"></img>
            </div>`
            break;
        case 7:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; align-self: center;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; align-self: center;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; top: 30%;;"></img>
            </div>`
            break;
        case 8:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; align-self: center;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; align-self: center;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; top: 30%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; bottom: 30%;"></img>
            </div>`
            break;
        case 9:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 35%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; top: 35%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; bottom: 35%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; align-self: center;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; bottom: 35%;"></img>
            </div>`
            break;
        case 10:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 35%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; top: 35%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; bottom: 35%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; top: 30%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; bottom: 30%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; bottom: 35%;"></img>
            </div>`
            break;
        case 11:
            naipesOnValueQuantity = cardBody +
            `<img class="drawledCard" src="${royalityClass}" alt="${naipeImageAlt}"></img>
            </div>`
            break;
    }
}



startGame();