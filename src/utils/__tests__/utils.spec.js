import * as utils from '../utils';
import * as helpers from '../helpers';

describe('Random sequence tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('should return initial sequence', () => {
    const result = utils.getBlocks(4, true);

    expect(result).toEqual(['red', 'green', 'blue', 'orange']);
  });

  it('should return random sequence', () => {
    jest.spyOn(helpers, 'getShuffledArr').mockReturnValue([4, 2, 1, 3]);
    const result = utils.getBlocks(4);

    expect(result).toEqual(['orange', 'green', 'red', 'blue']);
  });

  it('should not return two colors consecutively', () => {
    const checkers = [5, 9, 100, 45];

    checkers.forEach(c => {
      const result = utils.getBlocks(c);
      expect(result.length === c);
      const continuity = checkContinuity(result);
      expect(continuity).toBeFalsy();
    });
  });
});

function checkContinuity(result) {
  let consecutives = false;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === result[i + 1]) consecutives = true;
  }
  return consecutives;
}
