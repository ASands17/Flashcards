const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
let Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.prototypeQuestions = prototypeQuestions;
    this.cardArray = [];
    this.currentRound = 0;
  }

  start() {
    this.currentRound++
    this.prototypeQuestions.forEach((question) => {
      this.cardArray.push(new Card(question.id, question.question, question.answers, question.correctAnswer))
    });

    let startDeck = new Deck(this.cardArray);
    let startRound = new Round(startDeck);

    this.printMessage(startDeck, startRound);
    this.printQuestion(startRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
