import { STATUS } from './constants';

export const randomArray = (length, max) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push({
      value: Math.floor(Math.random() * max),
      status: STATUS.UNSORTED,
    });
  }

  return array;
};

export const swapArray = (array, i1, i2) => {
  const tmp = array[i1];
  array[i1] = array[i2];
  array[i2] = tmp;
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
