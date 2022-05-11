class Round{
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
  }

  returnCurrentCard(){
    let currentCard = this.deck.cardArray[this.turns];
    // console.log(currentCard);
    return currentCard;
  }

  takeTurn(){
    //updates turn count
    this.turns++;

    //instantiates new turn
    let turn1 = new Turn(guess, cardObj);
    console.log(turn1);
    //evaluates guesses
    //gives giveFeedback
    //seems that turn already does this?





    //stores ids of incorrect guesses
    //feedback is returned
  }

  calculatePercentCorrect(){
    //calculates % of correct guesses
  }

  endRound(){
    //method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!
  }
}


module.exports = Round;
