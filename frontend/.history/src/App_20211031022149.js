import { BrowserRouter } from 'react-router-dom';
import './App.css';

import SubRouter from './SubRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      </BrowserRouter>
      <SubRouter />
    </div>
  );
}

export default App;
