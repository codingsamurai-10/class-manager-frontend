import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './containers/NavBar';
import React from 'react';
import { UserContext } from './containers/UserContext';

function App() {

  const [profileInfo, setProfileInfo] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/profile')
      .then(data => {
        return data.json();
      })
      .then(json => {
        setProfileInfo(json);
      });
  }, []);

  return (

    <UserContext.Provider value={profileInfo}>
      <Router>
        <div className="App">
          <NavBar className="nav-bar" />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
