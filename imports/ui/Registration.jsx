import React, { Component } from 'react';


// App component - represents the whole app
export default class Registration extends Component {


 user_registration(){

    //db.User.remove();

    if(($("#uname").val().trim()=="" || $("#fname").val().trim()=="" || $("#lname").val().trim()=="" || $("#mail").val().trim()=="" || $("#pwd").val().trim()=="" || $("#addr").val().trim()=="" || $("#dob").val().trim()=="" || $("#sanswer").val().trim()=="")){



    }
    else{

        var x = $("#mail").val();
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
            $("#error-div-mail").show();
            setTimeout(function(){ $("#error-div-mail").hide(); }, 5000);

        }

        else{

            var sex_flag;
            if (document.getElementById('male').checked) {
                sex_flag = "Male";
            }
            else if(document.getElementById('female').checked){
                sex_flag = "Female";
            }


             var uname=$("#uname").val();
             var fname=$("#fname").val();
             var lname=$("#lname").val();
             var mail=$("#mail").val();
             var pwd=$("#pwd").val();
             var addr=$("#addr").val();
             var dob=$("#dob").val();
             var mob=$("#mob").val();

             var sanswer=$("#sanswer").val();

             var e = document.getElementById("security_question");
             var squestion = e.options[e.selectedIndex].value;

             if(squestion==""){

             }
             else{
                    var dat=new Date();
                    var dt=dat.getFullYear().toString()+(dat.getMonth() + 1).toString()+dat.getDate().toString()+dat.getHours().toString()+dat.getMinutes().toString()+dat.getSeconds().toString()+dat.getMilliseconds().toString();




                    if(User.find({ email: mail }).fetch()!=""){
                        $("#error-div").show();
                        setTimeout(function(){ $("#error-div").hide(); }, 5000);
                    }
                    else{

                        User.insert({
                          user_id:dt,
                          role_id:"",
                          userName: uname,
                          password: pwd,
                          firstName: fname,
                          lastName: lname,
                          date_of_birth: dob,
                          sex:sex_flag,
                          email: mail,
                          mobile: mob,
                          address: addr,
                          is_active:"0",
                          registraion_accepted_by:"",
                          created_by:dt,
                          created_date_time:new Date(),
                          last_modified_date_time:new Date(),
                          last_modified_by:dt,
                          security_question: squestion,
                          security_answer: sanswer
                        });
                    }
             }

        }


    }

  }



  render() {
    return (
        <div>
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

        <div id="error-div"><span>Email ID already exists.</span></div>
        <div id="error-div-mail"><span>This is not a valid Email address</span></div>


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
                <input type="radio" name="m" id="male" />
                Male</span> <span>
                <input type="radio" name="m" id="female" />
                Female </span></div>
            <div className="input-container">
                <input type="number" required="required" id="mob"/>
                <label for=" ">Phone No</label>
                <div className="bar"></div>
            </div>

            <span>Security Question</span>
            <select id="security_question">
              <option value="">Select a security question</option>
              <option value="">Question1</option>
              <option value="">Question2</option>
              <option value="">Question3</option>
            </select>

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
               </div>



    );
  }
}
