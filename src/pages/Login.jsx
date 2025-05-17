import React from 'react';
 import { useState } from 'react';
import './Login.css'
import {Link} from 'react-router-dom'


function Login(){
    return(
      <div className="parent2">
         <div className="parent1">
          <form action="" id="Login-form">
          <h1>Login</h1>
           <label htmlFor="email">Email:</label>
           <input type="text" id="email" placeholder="Enter Your Email"/>
           <label htmlFor="passkey">Password:</label>
           <input type="password" id="passkey" placeholder='Enter Your PassKey'/>
           <p>
             Dont Have an Account? <Link to="/signin">Sign-in</Link>
           </p>
           <button>Login</button>
          </form>
          
        </div>
      </div>
       
    )
}
export default Login;