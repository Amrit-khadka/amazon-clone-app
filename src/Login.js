import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
  const history = useHistory();
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');


  const signIn = e => {
    e.preventDefault(); // no refreshing

    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
          history.push('/')
        })
        .catch(error => alert(error.message))

    // some fancy firebase login here.
    
  }

  const register = e => {
    e.preventDefault();

    // do some fancy firebase login here..
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          // it successfully create a new user with email & password
          if (auth) {
            history.push('/')
          }
          // console.log(auth);
        })
        .catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img 
          className="login__logo"
          src="data:image/png;base64,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"
        />
        
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={ e => setEmail(e.target.value) } />

            <h5>Password</h5>
            <input type="password" value={password} onChange={ e => setPassword(e.target.value)} />

            <button type="submit" onClick={signIn} className="login__signInButton"> Sign In</button>
        </form>

        <p>
          By signing-in you agree to the Amazon Fake Clone's Conditions of Use and Privacy Notice. 
        </p>
        <button type="submit" onClick={register} className="login__registerButton">Create your Amazon Account</button>
      </div>
     
    </div>
  )
}

export default Login
