import React, { createContext, useReducer, useState } from 'react';

import { randomArray, sleep } from '../utils/utils';
import { SPEED, MAX_VALUE } from '../utils/constants';
import { ALGORITHM } from '../utils/algorithms';
import reducer from './reducer';

const DataContext = createContext();

const initState = {
  array: randomArray(10, MAX_VALUE),
  speed: SPEED.SLOW,
  algorithm: ALGORITHM.BUBBLE,
};

export const DataContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
