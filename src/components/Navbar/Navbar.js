import React, { useContext, useState } from 'react';

import Slider from './Slider';
import DataContext from '../../contexts/DataContext';
import algorithms from '../../utils/algorithms';
import { ACTION, setArray, mark } from '../../utils/actions';
import { sleep } from '../../utils/utils';
import AlgorithmSelector from './AlgorithmSelector';
import SpeedSelector from './SpeedSelector';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [running, setRunning] = useState(false);
  const { state, dispatch } = useContext(DataContext);

  const sort = async () => {
    const { array, speed, algorithm } = state;
    setRunning(true);
    const actions = algorithms(array)[algorithm.key]();
    for (let action of actions) {
      if (action.type === ACTION.WAIT) await sleep(speed.value);
      else dispatch(action);
    }
    setRunning(false);
  };

  const closeNavMenu = (action) => {
    action();
    setIsActive(false);
  };

  return (
    <div className="hero-head">
      <nav
        class="navbar has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <h1 className="is-size-4">
              <strong>Sorting Visualizer</strong>
            </h1>
          </a>

          {/* Navigation button */}
          <div
            onClick={() => setIsActive(!isActive)}
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div
          id="navbarBasicExample"
          class={`navbar-menu ${isActive ? 'is-active' : ''}`}
        >
          <div class="navbar-start">
            <AlgorithmSelector closeNavMenu={closeNavMenu} />
            <SpeedSelector closeNavMenu={closeNavMenu} />

            <div class="navbar-item">
              <Slider disabled={running} />
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div className="buttons">
                <button
                  className="button is-primary"
                  onClick={() => closeNavMenu(() => sort())}
                >
                  <strong>Sort</strong>
                </button>
                <button
                  class="button is-danger"
                  onClick={() => dispatch(setArray(state.array.length))}
                  disabled={running}
                >
                  <strong>Randomize</strong>
                </button>
                <button class="button is-light">
                  <strong>View source code</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
