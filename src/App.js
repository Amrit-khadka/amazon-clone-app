import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'


import './App.css';

function App() {
  return (
    <Router>

      <div className="app">
      <Header />

      <Switch>
      
        <Route path="/login">
          <h1>Login Page</h1>
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        {/** this is default route */}
        <Route path="/"> 
          <Home />
        </Route>

      </Switch>
      
      </div>

    </Router>
   
  
  );
}

export default App;
