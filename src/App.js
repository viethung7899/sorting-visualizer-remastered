import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Visualizer from './components/Visualizer/Visualizer';

function App() {
  return (
    <div className="App hero is-fullheight">
      <Navbar />
      <Visualizer />
    </div>
  );
}

export default App;
