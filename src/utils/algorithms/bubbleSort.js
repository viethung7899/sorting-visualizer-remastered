import { STATUS } from '../constants';
import { mark, swap, unmark, wait } from '../actions';
import { swapArray } from '../utils';

const bubbleSort = (array) => {
  const actions = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      actions.push(mark(STATUS.SELECTED, j, j + 1), wait);
      if (array[j] > array[j + 1]) {
        swapArray(array, j, j + 1);
        actions.push(swap(j, j + 1), wait);
      }
      actions.push(unmark(j, j + 1));
    }
    actions.push(mark(STATUS.SORTED, array.length - i - 1));
  }
  actions.push(mark(STATUS.SORTED, 0));

  return actions;
};

export default bubbleSort;