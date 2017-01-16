import {expect} from 'chai';
import suml from '../src/sum.js';

describe('Sum', function() {

  it('returns the correct result', function() {
    const result = suml([3, 3, 3]);
    expect(result).to.be.equal(9);
  });

});
