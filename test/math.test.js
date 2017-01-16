import {expect} from 'chai';
import Math from '../src/math.js';

describe('Math', function() {

  let math = null;

  before(function() {
    math = new Math();
  });

  it('has a method called `average`', function() {
    const result = typeof math.average;
    expect(result).to.be.equal('function');
  });

});
