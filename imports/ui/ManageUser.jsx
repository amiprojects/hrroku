import React, { Component } from 'react';

export default class ManageUser extends Component {

  render() {

        setTimeout(function() {

		  	if(User.find().fetch()==""){
		    }
			else{

			    var flag=2;

			    var item = User.find().fetch();


			  $.map(item,function(val){
			    if(flag % 2 == 0){

			    	if(val.is_active==0){
			    			$("#user_list_docs").append('<tr >'+
			        		'<td>'+val.user_id+'</td>'+
								'<td>'+val.firstName+" "+val.lastName+'</td>'+
								'<td>'+val.mobile+'</td>'+
								'<td>Deactive</td>'+
								'<td><div className="button-container">'+
									'<button onClick={this.active_user}><span>Active</span></button>'+
								  '</div></td>'+
								'<td><a href="#"><i className="fa fa-edit font20"></i></a></td>'+
								'</tr>');
			    	}
			    	else if(val.is_active==1){
			    			$("#user_list_docs").append('<tr >'+
			        		'<td>'+val.user_id+'</td>'+
								'<td>'+val.firstName+" "+val.lastName+'</td>'+
								'<td>'+val.mobile+'</td>'+
								'<td>Active</td>'+
								'<td><div className="button-container">'+
									'<button onClick={this.deactive_user}><span>Deactive</span></button>'+
								  '</div></td>'+
								'<td><a href="#"><i className="fa fa-edit font20"></i></a></td>'+
								'</tr>');
			    	}

			    }
			    else{

			    	if(val.is_active==0){
			    			$("#user_list_docs").append( '<tr style="background-color:#eee;" >'+
				            	'<td>'+val.user_id+'</td>'+
										'<td>'+val.firstName+" "+val.lastName+'</td>'+
										'<td>'+val.mobile+'</td>'+
										'<td>Deactive</td>'+
										'<td><div className="button-container">'+
											'<button onClick={this.active_user}><span>Active</span></button>'+
										  '</div></td>'+
										'<td><a href="#"><i className="fa fa-edit font20"></i></a></td>'+
										'</tr>');
			    	}
			    	else if(val.is_active==1){
			    			$("#user_list_docs").append( '<tr style="background-color:#eee;" >'+
				            	'<td>'+val.user_id+'</td>'+
										'<td>'+val.firstName+" "+val.lastName+'</td>'+
										'<td>'+val.mobile+'</td>'+
										'<td>Active</td>'+
										'<td><div className="button-container">'+
											'<button onClick={this.deactive_user}><span>Deactive</span></button>'+
										  '</div></td>'+
										'<td><a href="#"><i className="fa fa-edit font20"></i></a></td>'+
										'</tr>');
			    	}

			    }

					flag++;
			  });
			}


		}, 1000);




    return (
        <div  >
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

						<ul>
						  <li><a href="#">Add Client</a></li>
						  <li><a href="#">Manage Client</a></li>
						</ul>
					  </li>
					  <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-file"></i>FORM<b className="caret"></b></a>

						<ul>
						  <li><a href="#">Add Form</a></li>
						  <li><a href="#">Manage Form</a></li>
						</ul>
					  </li>
					  <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i>USER<b className="caret"></b></a>

						<ul>
						  <li><a href="#">Add User</a></li>
						  <li><a href="#">Manage User</a></li>
						</ul>
					  </li>
					  <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bar-chart-o"></i>MAP<b className="caret"></b></a>

						<ul>
						  <li><a href="#">Client Map</a></li>
						  <li><a href="#">Mapining Management</a></li>
						</ul>
					  </li>
					</ul>
				  </div>
				</div>
				<div className="col-md-9 registration_form pad_t50">
				  <div className="col-md-10 col-md-offset-1">
					<h1 className="title">Manage User</h1>


					<div className="category">

					<label>Category </label>  <select><option>Select Category</option></select>
					</div>

					<div id="user_status_change"><span></span></div>
					<table width="100%" border="0" cellspacing="0" cellpadding="0" className="table_cont">

							<th>Staff Id</th>
							<th>Name</th>
							<th>Mobile</th>
							<th>Status</th>
							<th>Access</th>
							<th>Edit</th>

                            <tbody id="user_list_docs">

					        </tbody>

					</table>
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
