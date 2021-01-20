import Slider from './Slider';

const Navbar = () => {
  return (
    <div className="hero-head">
      <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h1 className="is-size-4">Sorting Visualizer</h1>
        </a>

        {/* Navigation button */}
        <div
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

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Algorithms</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">Bubble sort</a>
              <a class="navbar-item">Selection sort</a>
              <a class="navbar-item">Insertion sort</a>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Animation speed</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">Slow</a>
              <a class="navbar-item">Medium</a>
              <a class="navbar-item">Fast</a>
            </div>
          </div>

          <div class="navbar-item">
            <Slider />
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div className="buttons">
              <button class="button is-danger">
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
