import { STATUS } from '../constants';
import { mark, swap, unmark, wait } from '../actions';
import { swapArray } from '../utils';

const selectionSort = (array) => {
  const actions = [];
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let minIndex = i;
    actions.push(mark(STATUS.RESERVE, i), wait);
    // Find minimum
    for (let j = i + 1; j < array.length; j++) {
      actions.push(mark(STATUS.SELECTED, j), wait);
      if (min > array[j]) {
        actions.push(unmark(minIndex));
        min = array[j];
        minIndex = j;
        actions.push(mark(STATUS.RESERVE, minIndex), wait);
      }
      if (j !== minIndex) {
        actions.push(unmark(j))
      }
    }
    swapArray(array, i, minIndex);
    actions.push(
      unmark(minIndex),
      swap(i, minIndex),
      mark(STATUS.SORTED, i),
      wait
    );
  }

  return actions;
};

export default selectionSort;