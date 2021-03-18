import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './containers/NavBar';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar className="nav-bar" />
    </div>
    </Router>
  );
}

export default App;
