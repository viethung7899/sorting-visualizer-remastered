import { STATUS } from '../constants';
import { mark, swap, unmark, wait } from '../actions';
import { swapArray } from '../utils';

const bubbleDown = (array, index, last) => {
  const actions = [];
  let maxIndex = 2 * index + 1;
  while (maxIndex <= last) {
    if (maxIndex < last && array[maxIndex] < array[maxIndex + 1]) maxIndex++;
    if (array[index] < array[maxIndex]) {
      actions.push(
        mark(STATUS.SELECTED, index, maxIndex),
        wait,
        swap(index, maxIndex),
        wait,
        unmark(index, maxIndex),
        wait
      );
      swapArray(array, index, maxIndex);
      index = maxIndex;
      maxIndex = 2 * index + 1;
    } else {
      maxIndex = last + 1;
    }
  }

  return actions;
};

const heapSort = (array) => {
  const actions = [];
  const start = Math.floor((array.length - 2) / 2);
  for (let index = start; index >= 0; index--) {
    actions.push(...bubbleDown(array, index, array.length - 1));
  }
  // Sort
  for (let i = 0; i < array.length; i++) {
    actions.push(
      mark(STATUS.SELECTED, 0, array.length - i - 1),
      wait,
      swap(0, array.length - i - 1),
      wait,
      unmark(0, array.length - i - 1),
      wait
    );
    swapArray(array, 0, array.length - i - 1);

    actions.push(mark(STATUS.SORTED, array.length - i - 1));
    actions.push(...bubbleDown(array, 0, array.length - i - 2));
  }

  return actions;
};

export default heapSort;
