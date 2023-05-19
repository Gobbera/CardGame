class Card {
    constructor(suit, rank) {
      this.suit = suit;
      this.rank = rank;
    }
  }
  
  class Deck {
    constructor() {
      this.cards = [];
      this.dealtCards = [];
    }
}
 
function createDeck() {
      const suits = ["hearts", "diamonds", "spades", "clubs"];
      const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
      for (let suit of suits) {
        for (let rank of ranks) {
          this.cards.push(new Card(suit, rank));
        }
      }
}
createDeck();

console.log(cards);