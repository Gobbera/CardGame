
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
    
    value.push(quatro, cinco, seis, sete, oito, nove, dez, dama, valete, reis, as, dois, tres)
    
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

        let card1;
        let card2;
        let card3;
        let card4;

        function startGame() {
            let naipe = ['ouros', 'espadas', 'copas', 'paus'];
            let value = ['4', '5', '6', '7', '8', '9', '10', 'dama', 'valete', 'reis', 'as', '2', '3'];
            let deck = [];
            let playerDeck1 = [];
            let playerDeck2 = [];
            let playerDeck3 = [];
            let playerDeck4 = [];
            let manilha = [];
          
            for (let i = 0; i < value.length; i++) {
              for (let j = 0; j < naipe.length; j++) {
                let card = value[i] + ' de ' + naipe[j];
                deck.push(card);
              }
            }
          
            let randomIndex0 = Math.floor(Math.random() * deck.length);
                if (randomIndex0 >= deck.length) {
                    randomIndex0 = deck.length - 1;
                  }  
            let removedCard0 = deck.splice(randomIndex0, 1);
            manilha.push(removedCard0[0]);
          
            for (let i = 0; i < 3; i++) {
              let randomIndex1 = Math.floor(Math.random() * deck.length);
              let randomIndex2 = Math.floor(Math.random() * deck.length);
              let randomIndex3 = Math.floor(Math.random() * deck.length);
              let randomIndex4 = Math.floor(Math.random() * deck.length);
          
              if (randomIndex1 >= deck.length) {
                randomIndex1 = deck.length - 1;
              }
              if (randomIndex2 >= deck.length) {
                randomIndex2 = deck.length - 1;
              }
              if (randomIndex3 >= deck.length) {
                randomIndex3 = deck.length - 1;
              }
              if (randomIndex4 >= deck.length) {
                randomIndex4 = deck.length - 1;
              }
              
              let removedCard1 = deck.splice(randomIndex1, 1);
              let removedCard2 = deck.splice(randomIndex2, 1);
              let removedCard3 = deck.splice(randomIndex3, 1);
              let removedCard4 = deck.splice(randomIndex4, 1);
              playerDeck1.push(removedCard1[0]);
              playerDeck2.push(removedCard2[0]);
              playerDeck3.push(removedCard3[0]);
              playerDeck4.push(removedCard4[0]);
            }
          
            console.log('Player deck1:', playerDeck1);
            console.log('Player deck2:', playerDeck2);
            console.log('Player deck3:', playerDeck3);
            console.log('Manilha:', manilha);
            console.log('Deck:', deck);
          }
            
        startGame();
        
        let cardWin;

        function cardWinner () {
            if (card1 > card2 && card1 > card3 && card1 > card4 && card1 > manilha) {
                cardWin = card1;
                console.log('venceu o turno a carta ' + cardWin);
            }
            if (card2 > card1 && card2 > card3 && card2 > card4 && card2 > manilha) {
                cardWin = card2;
                console.log('venceu o turno a carta ' + cardWin);
            }
            if (card3 > card1 && card3 > card2 && card3 > card4 && card3 > manilha) {
                cardWin = card3;
                console.log('venceu o turno a carta ' + cardWin);
            }
            if (card4 > card1 && card4 > card2 && card4 > card3 && card4 > manilha) {
                cardWin = card4;
                console.log('venceu o turno a carta ' + cardWin);
            }
        }
        cardWinner();
