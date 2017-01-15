import {expect} from 'chai';
import average from '../src/average.js';

describe('Average', function() {

  it('returns the correct result', function() {
    const r = average([3, 3, 3]);
    expect(r).to.be.equal(3);
  });

});
