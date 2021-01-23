import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Visualizer from './components/Visualizer/Visualizer';
import { DataContextProvider } from './contexts/DataContext';

function App() {
  return (
    <DataContextProvider>
      <div className="App hero is-fullheight">
        <Navbar />
        <Visualizer />
      </div>
    </DataContextProvider>
  );
}

export default App;
