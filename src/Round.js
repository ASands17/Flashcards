const Turn = require('../src/Turn');

class Round{
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cardArray[this.turns];
    this.incorrectGuesses = [];
  }

  returnCurrentCard(){
    this.currentCard = this.deck.cardArray[this.turns];
    return this.currentCard;
  }

  takeTurn(guess, cardObj){
    let turn1 = new Turn(guess, cardObj);
    this.turns++;
    let currentGuess = turn1.evaluateGuess();
    if (!currentGuess){
      this.incorrectGuesses.push(cardObj.id);
    }
    return turn1.giveFeedback();
  }

  calculatePercentCorrect(){
    var percentangeCorrect = 100-(this.incorrectGuesses.length/deck.cardArray.length) * 100;
    if (this.incorrectGuesses.length === 0) {
      return (100+"%");
    } else {
      return percentageCorrect+"%";
    }
  }

  endRound(){
    console.log(`** Round over! ** You answered ${calculatePercentCorrect()} of the questions correctly!`)
  }
}


module.exports = Round;
