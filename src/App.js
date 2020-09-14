import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import './App.css';


function App() {
  const[{user}, dispatch ] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...

    //always listening when we login or logout
    auth.onAuthStateChanged( authUser => {
      console.log('User is >>>>', authUser);

      if ( authUser) {
        // the user just logged in / the user was logged in
        // doesn't matter even the page refresh
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
      }
    })

  }, [])



  return (
    <Router>

      <div className="app">
        
      <Switch>
      
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        {/** this is default route */}
        <Route path="/"> 
          <Header />
          <Home />
        </Route>

      </Switch>
      
      </div>

    </Router>
   
  
  );
}

export default App;
