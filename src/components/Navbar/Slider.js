import React, { useContext } from 'react';
import {MIN_SIZE, MAX_SIZE} from '../../utils/constants'
import DataContext from '../../contexts/DataContext';
import {setArray} from '../../utils/actions';

const Slider = ({disabled, reset}) => {
  const { state, dispatch } = useContext(DataContext);

  const handleChange = (e) => {
    e.preventDefault();
    reset();
    dispatch(setArray(+e.target.value))
  };

  return (
    <>
      <span>Size</span>
      <input
        class="slider is-fullwidth mx-2"
        step="1"
        min={MIN_SIZE}
        max={MAX_SIZE}
        type="range"
        value={state.array.length}
        onChange={handleChange}
        disabled={disabled}
      />
      <span>{state.array.length}</span>
    </>
  );
};

export default Slider;
