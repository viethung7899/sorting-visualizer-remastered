import { useContext } from 'react';

import DataContext from '../../contexts/DataContext';
import { SPEED } from '../../utils/constants';
import { changeSpeed } from '../../utils/actions';

const SpeedSelector = ({ closeNavMenu }) => {
  const { state, dispatch } = useContext(DataContext);

  return (
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">Animation speed</a>

      <div class="navbar-dropdown">
        {Object.entries(SPEED).map(([key, value]) => {
          return (
            <a
              key={key}
              class={`navbar-item ${state.speed === value && 'has-text-weight-bold'}`}
              onClick={() => closeNavMenu(() => dispatch(changeSpeed(value)))}
            >
              {value.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SpeedSelector;
