const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
let Card = require('../src/Card');
const Turn = require('../src/Turn');


describe('Round', function(){

  it ('should be a function', function() {
    const testCard = new Card(1, 'What color is the sky?', ['Blue', 'Yellow', 'Banana'], 'Blue');
    const testCard2 = new Card(2, 'What is the coolest animal?', ['Cat', 'Dog', 'Unicorn'], 'Unicorn');
    const testCard3 = new Card(3, 'What is 2 plus 2?', ['4', '1', '1145'], '4');
    const deck = new Deck([testCard, testCard2, testCard3]);
    const round1 = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should return the current card', function(){
    const testCard = new Card(1, 'What color is the sky?', ['Blue', 'Yellow', 'Banana'], 'Blue');
    const testCard2 = new Card(2, 'What is the coolest animal?', ['Cat', 'Dog', 'Unicorn'], 'Unicorn');
    const testCard3 = new Card(3, 'What is 2 plus 2?', ['4', '1', '1145'], '4');
    const deck = new Deck([testCard, testCard2, testCard3]);
    const round1 = new Round(deck);

    expect(round1.returnCurrentCard()).to.equal(testCard);
  });

  it('should count the number of turns', function(){
    const testCard = new Card(1, 'What color is the sky?', ['Blue', 'Yellow', 'Banana'], 'Blue');
    const testCard2 = new Card(2, 'What is the coolest animal?', ['Cat', 'Dog', 'Unicorn'], 'Unicorn');
    const testCard3 = new Card(3, 'What is 2 plus 2?', ['4', '1', '1145'], '4');
    const deck = new Deck([testCard, testCard2, testCard3]);
    const round1 = new Round(deck);

    round1.takeTurn('Blue', testCard);
    round1.takeTurn('Dog', testCard2);

    expect(round1.turns).to.equal(2);
  });

});
