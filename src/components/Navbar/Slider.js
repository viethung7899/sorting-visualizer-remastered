import React, { useContext } from 'react';
import DataContext from '../../contexts/DataContext';
import {setArray} from '../../utils/actions'

const Slider = ({disabled}) => {
  const { state, dispatch } = useContext(DataContext);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setArray(+e.target.value))
  };

  return (
    <>
      <span>Size</span>
      <input
        class="slider is-fullwidth mx-2"
        step="1"
        min="3"
        max="150"
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
