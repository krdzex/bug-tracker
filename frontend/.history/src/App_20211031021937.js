import './App.css';
import DashBoard from './Components/DashBoard';
import Menu from './Components/Menu';
import SubRouter from './SubRouter';

function App() {
  return (
    <div className="App">
      <SubRouter />
      <Menu />
      <DashBoard />
    </div>
  );
}

export default App;
