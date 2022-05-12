class Deck {
  constructor(cardArray){
    this.cardArray = cardArray;
    // console.log(this.cardArray);
    // console.log(this.cardArray[0].id)
  }

  countCards() {
    return this.cardArray.length;
  }
}



module.exports = Deck;
