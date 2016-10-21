import React, { Component } from 'react';




export default class AddPage extends Component {





  render() {
    return (
        <body>
			<div className="hed_top">
			  <div className="mid_container">
				<div className="logo">Aptitude</div>
				<div className="hed_top_right">
				  <label>Logged in as Srinivas</label>
				  <a href="#"><img src="images/logout.png" />Log Out</a></div>
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
				  <div className="col-md-6 col-md-offset-3">
					<div className="card"></div>
					<div className="card">
					  <h1 className="title">Assign From to Client</h1>
					  <form className="form_pad">
						<div className="row">
						  <div className="col-md-12">
							<div className="input-container">
							  <input type="text" required="required"/>
							  <label for="">Page Name</label>
							  <div className="bar"></div>
							</div>
							<div className="input-container">
							 <select> <option> Client ID </option> </select>
							</div>
							
							<div className="input-container">
							 <select> <option> Conmpany Name </option> </select>
							</div>
							
							
							 <div className="input-container">
							 <select> <option> Form ID </option> </select>
							</div>
							
							
							<div className="input-container">
							 <select> <option> Form Name </option> </select>
							</div>
							
							
						  </div>
						</div>
						<div className="button-container">
						  <button><span>submit</span></button>
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
			</body>
    );
  }
}