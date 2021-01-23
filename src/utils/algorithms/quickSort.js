import { STATUS } from '../constants';
import { mark, swap, unmark, wait } from '../actions';
import { swapArray } from '../utils';

// Quick sort
const quickSortHelper = (array, low, high) => {
  const actions = [];
  if (low < high) {
    const { index, partitionActions } = partition(array, low, high);
    actions.push(...partitionActions);
    actions.push(mark(STATUS.SORTED, index));
    actions.push(...quickSortHelper(array, low, index - 1));
    actions.push(...quickSortHelper(array, index + 1, high));
  } else if (low === high) {
    actions.push(mark(STATUS.SORTED, low));
  }

  return actions;
};

const partition = (array, low, high) => {
  const actions = [];
  const { pivotActions, value } = pickPivot(array, low, high);
  actions.push(...pivotActions);
  let index = low;
  for (let j = low; j < high; j++) {
    if (array[j] < value) {
      actions.push(
        mark(STATUS.SELECTED, index, j),
        wait,
        swap(index, j),
        wait,
        unmark(index, j)
      );
      swapArray(array, index, j);
      index++;
    }
  }
  swapArray(array, index, high);
  actions.push(
    mark(STATUS.RESERVE, index),
    wait,
    swap(index, high),
    wait,
    unmark(high),
    wait
  );

  return {
    index: index,
    partitionActions: actions,
  };
};

const pickPivot = (array, low, high) => {
  const actions = [];
  let mid = Math.floor((low + high) / 2);
  let minIndex = low;
  if (array[mid] < array[minIndex]) {
    minIndex = mid;
  }
  if (array[high] < array[minIndex]) {
    minIndex = high;
  }
  actions.push(
    mark(STATUS.RESERVE, minIndex),
    wait,
    unmark(minIndex),
    swap(minIndex, high),
    wait,
    mark(STATUS.RESERVE, high),
    wait
  );
  swapArray(array, minIndex, high);

  return {
    pivotActions: actions,
    value: array[high],
  };
};

const quickSort = (array) => {
  return quickSortHelper(array, 0, array.length - 1);
};

export default quickSort;
