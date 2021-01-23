// Algorithms
import bubbleSort from './algorithms/bubbleSort';
import insertionSort from './algorithms/insertionSort';
import selectionSort from './algorithms/selectionSort';
import quickSort from './algorithms/quickSort';
import heapSort from './algorithms/heapSort';
import mergeSort from './algorithms/mergeSort';

// Constants
export const ALGORITHM = {
  BUBBLE: { key: 'bubbleSort', name: 'Bubble sort' },
  SELECTION: { key: 'selectionSort', name: 'Selection sort' },
  INSERTION: { key: 'insertionSort', name: 'Insertion sort' },
  QUICK: { key: 'quickSort', name: 'Quicksort' },
  HEAP: { key: 'heapSort', name: 'Heap sort' },
  MERGE: { key: 'mergeSort', name: 'Merge sort' },
};

const algorithms = (data) => {
  const array = data.map((item) => item.value);
  return {
    bubbleSort: () => bubbleSort(array),
    selectionSort: () => selectionSort(array),
    insertionSort: () => insertionSort(array),
    quickSort: () => quickSort(array),
    heapSort: () => heapSort(array),
    mergeSort: () => mergeSort(array),
  };
};

export default algorithms;
