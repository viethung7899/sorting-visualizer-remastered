import { STATUS } from '../constants';
import { mark, swap, unmark, wait } from '../actions';
import { swapArray } from '../utils';

const insertionSort = (array) => {
  const actions = [];
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
      actions.push(mark(STATUS.SELECTED, j - 1, j), wait);
      actions.push(swap(j - 1, j));
      swapArray(array, j - 1, j);
      actions.push(unmark(j - 1, j));
    }
  }

  for (let i = 0; i < array.length; i++) {
    actions.push(mark(STATUS.SORTED, i), wait);
  }

  return actions;
};

export default insertionSort;