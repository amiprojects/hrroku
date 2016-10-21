import React, { Component } from 'react';
 
 export default class Registration extends Component {
 
 render() {
    return (

    <body>

    <div className="hed_top">
        
      <div className="mid_container">
        <div className="logoin">Appitude</div>
      </div>
    </div>
<div className="mid_content registration_form">
  <div className="container">
    <div className="col-md-6 col-md-offset-3">
      <div className="card"></div>
      <div className="card">
        <h1 className="title">Registration</h1>
        <form className="form_pad">
          <div className="row">
            <div className="col-md-6">
              <div className="input-container">
                <input type="text" required="required"/>
                <label for="">User Name</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="text" required="required"/>
                <label for=" ">Frist Name</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="text" required="required"/>
                <label for=" ">Last Name</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="text" required="required"/>
                <label for=" ">Email Id</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="password" required="required"/>
                <label for=" ">Password</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="text" required="required"/>
                <label for=" ">Parmanent Address</label>
                <div className="bar"></div>
              </div>
              
            </div>
            <div className="col-md-6">
              <div className="input-container">
                <input type="calender"  required="required"/>
                <label for=" ">Date Of Birth</label>
              <div className="bar"></div>
            </div>
            <div className="input-container gender">
                <div> Gender</div>
                <span>
                <input type="radio" />
                Male</span> <span>
                <input type="radio" />
                Female </span></div>
            <div className="input-container">
                <input type="num" required="required"/>
                <label for=" ">Phone No</label>
                <div className="bar"></div>
            </div>
            <div className="input-container">
                <input type="text" required="required"/>
                <label for=" ">Security Question</label>
                <div className="bar"></div>
            </div>
            <div className="input-container">
                <input type="text" required="required"/>
                <label for=" ">Security Answer</label>
                <div className="bar"></div>
            </div>
              
               
            </div>
            </div>
            <div className="button-container">
            <button><span>SAVE</span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
   
  </body>

    );

 }

}



