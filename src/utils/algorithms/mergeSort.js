import { STATUS } from '../constants';
import { mark, modify, unmark, wait } from '../actions';

// Sort the result from the cache into the array
const mergeSortHelper = (cache, low, high, array) => {
  const actions = [];
  if (high - low <= 1) return actions;
  const mid = Math.floor((low + high) / 2);

  // Recursive sort array and save the result into cache
  actions.push(...mergeSortHelper(array, low, mid, cache));
  actions.push(...mergeSortHelper(array, mid, high, cache));

  // Merge th eresult from the cahgne to the array
  actions.push(...merge(cache, low, mid, high, array));

  // Display the modified array
  for (let i = low; i < high; i++) {
    actions.push(
      mark(STATUS.SELECTED, i),
      wait,
      modify(i, array[i]),
      wait,
      unmark(i),
      wait
    );
  }
  return actions;
};

// Marge the result from the array into the cache
const merge = (array, low, mid, high, cache) => {
  const actions = [];
  let i = low,
    j = mid;
  // Mark up the middle point
  actions.push(mark(STATUS.RESERVE, mid), wait);
  for (let k = low; k < high; k++) {
    // Mark up the comparision
    const _i = i < mid ? i : mid - 1;
    const _j = j < high ? j : high - 1;
    if (_j !== mid) actions.push(mark(STATUS.SELECTED, _j));
    actions.push(mark(STATUS.SELECTED, _i), wait);
    if (_j !== mid) actions.push(unmark(_j));
    actions.push(unmark(_i), wait);

    // Merge from cache to array
    if (i < mid && (j >= high || array[i] <= array[j])) {
      cache[k] = array[i];
      i++;
    } else {
      cache[k] = array[j];
      j++;
    }
  }
  actions.push(unmark(mid));
  return actions;
};

const mergeSort = (array) => {
  const cache = array.slice();
  const actions = mergeSortHelper(cache, 0, array.length, array);
  array.forEach((_, index) => {
    actions.push(mark(STATUS.SORTED, index), wait);
  });
  return actions;
};

export default mergeSort;
