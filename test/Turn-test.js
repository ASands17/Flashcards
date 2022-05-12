const chai = require('chai');
const expect = chai.expect;


const Turn = require('../src/Turn');
let Card = require('../src/Card');

describe ('Turn', function() {
  const testCard = new Card(1, 'What color is the sky?', ['Blue', 'Yellow', 'Banana'], 'Blue');
  const testCard2 = new Card(2, 'What is the coolest animal?', ['Cat', 'Dog', 'Unicorn'], 'Unicorn');
  const testCard3 = new Card(3, 'What is 2 plus 2?', ['4', '1', '1145'], '4');

  const turn = new Turn('answer', testCard);
  const turn2 = new Turn('attempt', testCard2);
  const turn3 = new Turn('guess', testCard3);

  it('should be a function', function(){
    expect(Turn).to.be.a('function');
  });

  it('should take in a string as its first argument', function(){
    expect('answer').to.be.a('string');
  });

  it('should take in an instance of card as the second argument', function(){
    expect(testCard3).to.be.an.instanceof(Card);
  });

  it('should return the player guess', function(){
    expect(turn3.returnGuess()).to.equal('guess');
  });

  it('should return the current card', function() {
    const turn3 = new Turn('2', testCard3);
    expect(turn3.returnCard()).to.equal(testCard3);
  });

  it('should check if the guess is the correct answer', function() {
    expect(turn3.evaluateGuess()).to.be.a('boolean');
  });

  it('should give feedback to the player', function() {
    expect(turn3.giveFeedback()).to.be.a('string');
  });

});
