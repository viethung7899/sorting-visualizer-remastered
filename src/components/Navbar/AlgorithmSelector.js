import { useContext } from 'react';

import DataContext from '../../contexts/DataContext';
import { ALGORITHM } from '../../utils/algorithms';
import { setAlgorithm } from '../../utils/actions';

const AlgorithmSelector = ({ closeNavMenu }) => {
  const { state, dispatch } = useContext(DataContext);

  return (
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">Algorithms</a>

      <div class="navbar-dropdown">
        {Object.entries(ALGORITHM).map(([key, value]) => {
          return (
            <a
              key={key}
              class={`navbar-item ${
                state.algorithm === value && 'has-text-weight-bold'
              }`}
              onClick={() => closeNavMenu(() => dispatch(setAlgorithm(value)))}
            >
              {value.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AlgorithmSelector;
