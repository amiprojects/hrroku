import React, { Component } from 'react';



export default class AddClient extends Component {



  add_client(){

  		if($("#client_id").val().trim()=="" || $("#company_name").val().trim()=="" || $("#addr").val().trim()=="" || $("#mail").val().trim()=="" || $("#mob").val().trim()=="" || $("#website").val().trim()=="" || $("#city").val().trim()=="" || $("#state").val().trim()=="" || $("#pin").val().trim()=="" || $("#contact_name").val().trim()=="" || $("#contact_number").val().trim()=="" || $("#job_title").val().trim()==""){

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
             var client_id=$("#client_id").val();
             var company_name=$("#company_name").val();
             var company_address=$("#addr").val();
             var company_mail=$("#mail").val();
             var company_mobile=$("#mob").val();
             var company_website=$("#website").val();
             var company_city=$("#city").val();
             var company_state=$("#state").val();
             var company_pin=$("#pin").val();
             var company_contact_person_name=$("#contact_name").val();
             var company_contact_person_number=$("#contact_number").val();
             var company_contact_person_job_title=$("#job_title").val();

             var e = document.getElementById("country");
             var company_country = e.options[e.selectedIndex].value;






            if(Client.find({ email: company_mail }).fetch()!=""){
                $("#error-div").show();
                setTimeout(function(){ $("#error-div").hide(); }, 5000);
            }
            else{

                Client.insert({
                    client_id:client_id,
					client_company_name:company_name,
					client_address:company_address,
					client_email:company_mail,
					client_phone_number:company_mobile,
					client_website:company_website,
					client_city:company_city,
					client_state:company_state,
					client_country:company_country,
					client_pin:company_pin,
					client_contact_person_name:company_contact_person_name,
					client_contact_person_number:company_contact_person_number,
					client_contact_person_job_title:company_contact_person_job_title,
					is_active:"1",
					created_by_id:"1",
					created_date_time:new Date(),
					last_modified_id:"1",
					last_modified_date_time:new Date(),
					client_aptitude_url:company_name.toLowerCase()+".aptitude.com",
					is_schema_generated:"0"
                });
            }


        }


    }


  }

  set_client_id(){
	    var last_id;
			var item = Client.find().fetch();
	     $.map(item,function(val){
	     	last_id=val.client_id;
	     });
  	     $("#client_id").val(parseInt(last_id)+1);
  }



  render() {
    return (

    		<div id="add" >
			    <div className="hed_top">
			  <div className="mid_container">
			    <div className="logo">Aptitude</div>
			    <div className="hed_top_right">
			      <label>Logged in as Srinivas</label>
			      <a href="#"><img src="/images/logout.png" />Log Out</a></div>
			  </div>
			</div>
			<div className="no_pad clearfix">
			  <div className="clearfix overflow">
			    <div className="col-md-2 no_pad">
			      <div className="collapse navbar-collapse navbar-ex1-collapse">
			        <ul className="nav navbar-nav side-nav">
			          <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i>CLIENT<b className="caret"></b></a>
			            <ul className="dropdown-menu">
			              <li><a href="#">Add Client</a></li>
			              <li><a href="#">Manage Client</a></li>
			            </ul>
			          </li>
			          <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-file"></i>FORM<b className="caret"></b></a>
			            <ul className="dropdown-menu">
			              <li><a href="#">Add Form</a></li>
			              <li><a href="#">Manage Form</a></li>
			            </ul>
			          </li>
			          <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i>USER<b className="caret"></b></a>
			            <ul className="dropdown-menu">
			              <li><a href="#">Add User</a></li>
			              <li><a href="#">Manage User</a></li>
			            </ul>
			          </li>
			          <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bar-chart-o"></i>MAP<b className="caret"></b></a>
			            <ul className="dropdown-menu">
			              <li><a href="#">Client Map</a></li>
			              <li><a href="#">Mapining Management</a></li>
			            </ul>
			          </li>
			        </ul>
			      </div>
			    </div>
			    <div className="col-md-9 registration_form pad_t50">
			      <div className="col-md-8 col-md-offset-2">
			        <div className="card"></div>
			        <div className="card">
			          <h1 className="title">Add Client</h1>

			           <div id="error-div"><span>Email ID already exists.</span></div>
        			   <div id="error-div-mail"><span>This is not a valid Email address</span></div>


			          <form className="form_pad">
			            <div className="row">
			              <div className="col-md-6">
			                <div className="input-container">
			                  <input type="autogenerated" required="required" id="client_id" onClick={this.set_client_id}/>
			                  <label for="">Client ID</label>
			                  <div className="bar"></div>
			                </div>
			                <div className="input-container">
			                  <input type="text" required="required" id="company_name"/>
			                  <label for="">Company Name</label>
			                  <div className="bar"></div>
			                </div>
			                <div className="input-container">
			                  <input type="text" required="required" id="addr"/>
			                  <label for=" ">Address</label>
			                  <div className="bar"></div>
			                </div>
			                <div className="input-container">
			                  <input type="text" required="required" id="mail"/>
			                  <label for=" ">Email</label>
			                  <div className="bar"></div>
			                </div>
			                <div className="input-container">
			                  <input type="number"  required="required" id="mob"/>
			                  <label for=" ">Phone No</label>
			                  <div className="bar"></div>
			                </div>
			                <div className="input-container">
			                  <input type="text"  required="required" id="website"/>
			                  <label for="">Website</label>
			                  <div className="bar"></div>
			                </div>
			              </div>
			              <div className="col-md-6">
			                <div className="input-container">
			                  <input type="text" required="required" id="city"/>
			                  <label for="">City</label>
			                  <div className="bar"></div>
			                </div>
			                <div className="input-container">
			                  <input type="text" required="required" id="state"/>
			                  <label for="">State</label>
			                  <div className="bar"></div>
			                </div>
			                <div className="input-container">
			                  <select id="country">
			                    <option>Country</option>
			                  </select>
			                </div>
			                <div className="input-container">
			                  <input type="num" required="required" id="pin"/>
			                  <label for=" ">Pin Code</label>
			                  <div className="bar"></div>
			                </div>
			                <div className="input-container">
			                  <input type="text" required="required" id="contact_name"/>
			                  <label for=" ">Contact Name</label>
			                  <div className="bar"></div>
			                </div>
			                <div className="input-container">
			                  <input type="num" required="required" id="contact_number"/>
			                  <label for=" ">Contact No</label>
			                  <div className="bar"></div>
			                </div>
			                <div className="input-container">
			                  <input type="text" required="required" id="job_title"/>
			                  <label for=" ">Job Title</label>
			                  <div className="bar"></div>
			                </div>
			              </div>
			            </div>
			            <div className="button-container">
			              <button onClick={this.add_client}><span>SAVE</span></button>
			            </div>
			          </form>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
			<div className="footer no_margin">
			  <ul>
			    <li><a href="#">Home</a></li>
			    <li><a href="#">About Us</a></li>
			    <li><a href="#">Services</a></li>
			    <li><a href="#">Projects</a></li>
			  </ul>
			</div>
			</div>

		);

	}

}
