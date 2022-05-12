const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
let Card = require('../src/Card');
const Turn = require('../src/Turn');
const Game = require('../src/Game');
let game = new Game();

describe('Game', function(){

  it ('should be a function', function() {
    expect(Game).to.be.a('function');

  });

  it('should create new instances of card', function(){
    game.start();
  })
});
