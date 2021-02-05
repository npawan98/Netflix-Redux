import React from 'react';
import './App.css';
import HomeScreen from './Pages/HomeScreen';
import Login from './Pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const user = null ;
  // const user = {
  //   name:"pawan"
  // }
  return (
    <div className="app">
    
      <Router>
      {!user ? (
        <Login/>
      ): (
        <Switch>
          <Route exact path="/user">
            <h1>user</h1>
          </Route>

          <Route exact path="/">
            <HomeScreen/>
          </Route>
         
        </Switch>

      ) }
        
    </Router>
    </div>
  );
}

export default App;
