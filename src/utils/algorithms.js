import { STATUS } from './constants';
import { mark, swap, unmark, wait } from './actions';
import { swapArray } from './utils';

// Constants
export const ALGORITHM = {
  BUBBLE: {key: 'bubbleSort', name: 'Bubble sort'},
  SELECTION: {key: 'selectionSort', name: 'Selection sort'},
  INSERTION: {key: 'insertionSort', name: 'Insertion sort'}
};

// Bubble sort
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

// Selection sort
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

// Insertion sort
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

const algorithms = (data) => {
  const array = data.map((item) => item.value);
  return {
    bubbleSort: () => bubbleSort(array),
    selectionSort: () => selectionSort(array),
    insertionSort: () => insertionSort(array),
  };
};

export default algorithms;
