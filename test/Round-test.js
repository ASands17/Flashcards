const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
let Card = require('../src/Card');
const Turn = require('../src/Turn');


describe('Round', function(){

  const testCard = new Card(1, 'What color is the sky?', ['Blue', 'Yellow', 'Banana'], 'Blue');
  const testCard2 = new Card(2, 'What is the coolest animal?', ['Cat', 'Dog', 'Unicorn'], 'Unicorn');
  const testCard3 = new Card(3, 'What is 2 plus 2?', ['4', '1', '1145'], '4');
  const deck = new Deck([testCard, testCard2, testCard3]);
  const round1 = new Round(deck);

  it ('should be a function', function() {
    expect(Round).to.be.a('function');
  });



  it('should return the current card', function(){
    expect(round1.returnCurrentCard()).to.equal(testCard);
  });



  it('should count the number of turns', function(){
    round1.takeTurn('Blue', testCard);
    round1.takeTurn('Dog', testCard2);
    expect(round1.turns).to.equal(2);
  });


  it('should instantiate a new turn instance', function(){
    round1.takeTurn('Blue', testCard);
    expect(round1.currentTurn).to.be.an.instanceof(Turn);
  })


  it('should have the next card become current card', function(){
    const deck = new Deck([testCard, testCard2, testCard3]);
    const round1 = new Round(deck);
    var firstCard = round1.currentCard;

    round1.takeTurn('Blue', testCard);
    round1.returnCurrentCard();
    expect(round1.currentCard).to.equal(testCard2);
  });


  it('stores the id of incorrect guesses', function(){
    const deck = new Deck([testCard, testCard2, testCard3]);
    const round1 = new Round(deck);

    var firstCard = round1.currentCard;
    round1.takeTurn('Yellow', testCard);

    expect(round1.incorrectGuesses).to.deep.equal([1]);
  })


   it('should return "Correct!" for correct answers', function(){
     var firstCard = round1.currentCard;
     expect(round1.takeTurn('Blue', testCard)).to.equal("Correct!");
   })


   it('should return "Incorrect!" for correct answers', function(){
     var firstCard = round1.currentCard;

     expect(round1.takeTurn('Yellow', testCard)).to.equal("Incorrect!");
   })


  it('calculates percentage of correct guesses', function(){
    // const deck = new Deck([testCard, testCard2, testCard3]);
    // const round1 = new Round(deck);

    var firstCard = round1.currentCard;
    round1.takeTurn('Blue', firstCard);
    round1.calculatePercentCorrect();

    expect(round1.calculatePercentCorrect()).to.equal("33.33%");

  })

});
