const Turn = require('../src/Turn');

class Round{
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cardArray[this.turns];
    this.incorrectGuesses = [];
    this.currentTurn;
  }

  returnCurrentCard(){
    this.currentCard = this.deck.cardArray[this.turns];
    return this.currentCard;
  }

  takeTurn(guess, cardObj){
    this.currentTurn = new Turn(guess, cardObj);
    this.turns++;
    let currentGuess = this.currentTurn.evaluateGuess();
    if (!currentGuess){
      this.incorrectGuesses.push(cardObj.id);
    }
    return this.currentTurn.giveFeedback();
  }

  calculatePercentCorrect(){
    if (this.incorrectGuesses.length === 0 && this.turns === this.deck.cardArray.length) {
      return (100 + "%");
    }

    if (this.incorrectGuesses.length === 0 && this.turns !== this.deck.cardArray.length) {
      const score = this.turns/this.deck.cardArray.length * 100
      return `${(score.toFixed(2))}%`;
    }

    var percentageCorrect = 100 - (this.incorrectGuesses.length / this.deck.cardArray.length) * 100;

    return percentageCorrect + "%";

  }

  endRound(){
    console.log(`** Round over! ** You answered ${calculatePercentCorrect()} of the questions correctly!`)
  }
}


module.exports = Round;
