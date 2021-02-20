import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import AdminHome from './Pages/AdminHome/AdminHome';



function App() {

  /*const [currentUser, setCurrentUser] = useState({
    isChecked: false,
    user: null,
  });*/

  return (
    <Router>
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/registration' component={Registration}/>
          <Route path='/adminHome' component={AdminHome}/>
      </Switch>
    </Router>
  );
}

export default App;