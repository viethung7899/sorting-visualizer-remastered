export const ACTION = {
  SET_ARRAY: 'SET_ARRAY',
  SET_ALGORITHM: 'SET_ALGORITHM',
  CHANGE_SPEED: 'CHANGE_SPEED',
  MARK: 'MARK',
  UNMARK: 'UNMARK',
  SWAP: 'SWAP',
  WAIT: 'WAIT',
  MODIFY: 'MODIFY',
};

export const setArray = (size) => {
  return {
    type: ACTION.SET_ARRAY,
    size,
  };
};

export const setAlgorithm = (algorithm) => {
  return {
    type: ACTION.SET_ALGORITHM,
    algorithm,
  };
};

export const changeSpeed = (speed) => {
  return {
    type: ACTION.CHANGE_SPEED,
    speed,
  };
};

export const mark = (status, ...indices) => {
  return {
    type: ACTION.MARK,
    payload: {
      status,
      indices,
    },
  };
};

export const unmark = (...indices) => {
  return {
    type: ACTION.UNMARK,
    indices,
  };
};

export const swap = (i1, i2) => {
  return {
    type: ACTION.SWAP,
    payload: { i1, i2 },
  };
};

export const modify = (index, value) => {
  return {
    type: ACTION.MODIFY,
    payload: {
      index,
      value,
    },
  };
};

export const wait = {
  type: ACTION.WAIT,
};
