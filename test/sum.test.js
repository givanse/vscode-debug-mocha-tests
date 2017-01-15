import {expect} from 'chai';
import sum from '../src/sum.js';

describe('Sum', function() {

  it('returns the correct result', function() {
    const r = sum([3, 3, 3]);
    expect(r).to.be.equal(9);
  });

});
