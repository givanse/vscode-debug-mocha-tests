import {expect} from 'chai';
import average from '../src/average.js';

describe('Average', function() {

  it('returns the correct result', function() {
    const result = average([3, 3, 3]);
    expect(result).to.be.equal(3);
  });

});
