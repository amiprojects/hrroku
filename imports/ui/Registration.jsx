import React, { Component } from 'react';



// App component - represents the whole app
export default class Registration extends Component {


 user_registration(){
    
    //db.User.remove();

    var user_id;
    if(User.find().count()==0){
        user_id=1;        
    }
    else{
        user_id=User.find().count()+1;        
    }

    
    
    var sex; 
    if (document.getElementById('male').checked) {
        sex = document.getElementById('male').value;
    }
    else if(document.getElementById('female').checked){
        sex = document.getElementById('female').value;
    }

     
     var uname=$("#uname").val();
     var fname=$("#fname").val();
     var lname=$("#lname").val();
     var mail=$("#mail").val();
     var pwd=$("#pwd").val();
     var addr=$("#addr").val();     
     var dob=$("#dob").val();
     var mob=$("#mob").val();
     var squestion=$("#squestion").val();
     var sanswer=$("#sanswer").val();

     
     User.insert({
      user_id:user_id,
      role_id:"",
      userName: uname,
      password: pwd,
      firstName: fname, 
      lastName: lname,
      date_of_birth: dob,
      sex:sex,
      email: mail,
      mobile: mob,
      address: addr,
      is_active:"0",
      registraion_accepted_by:"0",
      created_by:"1",
      created_date_time:new Date(),
      last_modified_date_time:new Date(),
      last_modified_by:"1",
      security_question: squestion,
      security_answer: sanswer     
    });

    alert("Registration success...");
    }
    


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
                <input type="text" required="required" id="uname"/>
                <label for="">User Name</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="text" required="required" id="fname"/>
                <label for=" ">First Name</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="text" required="required" id="lname"/>
                <label for=" ">Last Name</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="text" required="required" id="mail"/>
                <label for=" ">Email Id</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="password" required="required" id="pwd"/>
                <label for=" ">Password</label>
                <div className="bar"></div>
              </div>
              <div className="input-container">
                <input type="text" required="required" id="addr"/>
                <label for=" ">Parmanent Address</label>
                <div className="bar"></div>
              </div>
              
            </div>
            <div className="col-md-6">
              <div className="input-container">
                <input type="text"  required="required" placeholder="" id="dob"/>
                <label for=" ">Date Of Birth</label>
              <div className="bar"></div>
            </div>
            <div className="input-container gender">
                <div> Gender</div>
                <span>
                <input type="radio" name="m" id="male"/>
                Male</span> <span>
                <input type="radio" name="m" id="female"/>
                Female </span></div>
            <div className="input-container">
                <input type="num" required="required" id="mob"/>
                <label for=" ">Phone No</label>
                <div className="bar"></div>
            </div>
            <div className="input-container">
                <input type="text" required="required" id="squestion"/>
                <label for=" ">Security Question</label>
                <div className="bar"></div>
            </div>
            <div className="input-container">
                <input type="text" required="required" id="sanswer"/>
                <label for=" ">Security Answer</label>
                <div className="bar"></div>
            </div>
              
               
            </div>
            </div>
            <div className="button-container">
            <button onClick={this.user_registration}><span>SAVE</span></button>
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