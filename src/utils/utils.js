import ColorPallete from './colorPallete';
import * as helpers from './helpers';

const baseArr = [1, 2, 3, 4];
export function getBlocks(count, isInitial = false) {
  if (isInitial) {
    return mapSequenceToColors(baseArr);
  }
  let result = [];

  let lastElement = 0;
  if (count > 4) {
    while (result.length < count) {
      const drop = shuffle(lastElement);
      result = [...result, ...drop];
      lastElement = drop[drop.length - 1];
    }

    return mapSequenceToColors(result.splice(0, count));
  } else {
    return mapSequenceToColors(shuffle(lastElement));
  }
}

function shuffle(lastElement) {
  return helpers.getShuffledArr(baseArr.filter(b => b !== lastElement));
}

function mapSequenceToColors(sequence) {
  return sequence.map(s => ColorPallete[s]);
}
