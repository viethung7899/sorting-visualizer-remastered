import React, { useContext } from 'react';

import DataContext from '../../contexts/DataContext';
import { MAX_VALUE } from '../../utils/constants';
import './Visualizer.scss';

const Visualizer = (props) => {
  const { state } = useContext(DataContext);

  return (
    <div class="hero-body p-0 visualize-container has-background-light">
      {state.array.map((data) => {
        return (
          <div
            className={`node ${data.status}`}
            style={{ height: `${(data.value / MAX_VALUE) * 90}vh` }}
          ></div>
        );
      })}
    </div>
  );
};

export default Visualizer;
