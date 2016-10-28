import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

// App component - represents the whole app
export default class Login extends Component {

loginTo(){
  var uname=$("#Username").val();
  var pass=$("#Password").val();


  if(User.find({ userName: uname }).fetch()==""){
      $("#error-div-no-uname-exists").show();
      setTimeout(function(){ $("#error-div-no-uname-exists").hide(); }, 5000);
  }
  else{
      var item = User.find({ userName: uname }).fetch();
      $.map(item,function(val){
        original_pass=val.password;

        if(pass == original_pass){

        }else{
          $("#error-div-incorrect-pass").show();
          setTimeout(function(){ $("#error-div-incorrect-pass").hide(); }, 5000);
        }
      });
      FlowRouter.go('/ManageClient');
  }

}

  frgtPass(){
      FlowRouter.go('/ForgotPassword');
  }

  reg(){
    FlowRouter.go('/Registration');
  }

  render() {
    return (
        <div>
        <div className="hed_top">

        <div className="mid_container">
        <div className="logoin">Appitude</div>
        </div>
        </div>
              <div className="mid_content">
                <div className="login_col">
                  <div className="card"></div>
                  <div className="card">
                    <h1 className="title">Login</h1>

                    <div id="error-div-no-uname-exists"><span>Incorrect user name or password.</span></div>
                    <div id="error-div-incorrect-pass"><span>Incorrect user name or password.</span></div>

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
                        <button onClick={this.loginTo}><span>submit</span></button>
                      </div>
                      <div className="sign"><a href="" onClick={this.reg}>New Registration</a>  <a href="" onClick={this.frgtPass}>Forget Password</a></div>
                    </form>
                  </div>
                </div>
               </div>
               </div>



    );
  }
}
