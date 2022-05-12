const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
let Card = require('../src/Card');
const Turn = require('../src/Turn');
const Game = require('../src/Game');
let game = new Game();

describe('Game', function(){

  const testCard = new Card(1, 'What color is the sky?', ['Blue', 'Yellow', 'Banana'], 'Blue');
  const testCard2 = new Card(2, 'What is the coolest animal?', ['Cat', 'Dog', 'Unicorn'], 'Unicorn');
  const testCard3 = new Card(3, 'What is 2 plus 2?', ['4', '1', '1145'], '4');
  const deck = new Deck([testCard, testCard2, testCard3]);
  const round1 = new Round(deck);

  it ('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should track the current round', function() {
    expect(game.currentRound).to.equal(0);

  });

  it('should create new instances of card', function(){
    expect(game.cardArray[10]).to.be.an.instanceof(Card);
  })

  it('should create a new instances of round', function(){
    expect(round1).to.be.an.instanceof(Round);
  })


});
