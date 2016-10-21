import React, { Component } from 'react';

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
 


export default class Login extends Component {





  render() {
    return (
        <body>
        <div className="hed_top">
        
        <div className="mid_container">
        <div className="logoin">Aptitude</div>
        </div>
        </div>
              <div className="mid_content">
                <div className="login_col">
                  <div className="card"></div>
                  <div className="card">
                    <h1 className="title">Login</h1>
                    <form>
                       
                      <div className="input-container">
                        <input type="text" id="Username" required="required"/>
                        <label for="Username">User Name</label>
                        <div className="bar"></div>
                      </div>
                      <div className="input-container">
                        <input type="password" id="Password" required="required"/>
                        <label for="Password">Password</label>
                        <div className="bar"></div>
                      </div>
                      <div className="button-container">
                        <button><span>submit</span></button>
                      </div>
                      <div className="sign"><a href="#">New Registration</a>  <a onClick={this.switch_to_frgt_pwd}>Forget Password</a></div>
                    </form>
                  </div>
                </div>
               </div>
               </body>
              

        
    );
  }
}