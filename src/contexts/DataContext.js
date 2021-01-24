import React, { createContext, useReducer } from 'react';

import { randomArray } from '../utils/utils';
import { SPEED, MAX_VALUE } from '../utils/constants';
import { ALGORITHM } from '../utils/algorithms';
import reducer from './reducer';

const DataContext = createContext();

const initState = {
  array: randomArray(50, MAX_VALUE),
  speed: SPEED.FAST,
  algorithm: ALGORITHM.QUICK,
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
