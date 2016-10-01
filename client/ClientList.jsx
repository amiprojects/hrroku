import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Clients } from '../imports/api/collections.js';

function _ShowClients({clients}) {
  return (<div id="clientListView">
						    <div className="clientListTableDiv">
						        <table className="table table-striped" id="clientDatatable">
									<thead>
										<tr>
											<th>Company Logo</th>
											<th>Company Name</th>
											<th>Contact Name</th>
											<th>View Details</th>
										</tr>
									</thead>
									<tbody>
										{clients.map(x => <tr key={x._id} id={x._id}>
											<td><img src="images/default.png" className="formImg"/></td>
											<td>{x.name}</td>
											<td>{x.contactPersonName}</td>
											<td>
												<a className="actionButton viewClientData" onClick={viewEachClient.bind(this, x._id, x.name,x.address,x.description,x.contactPersonName,x.comapanyMobile,x.comapanyEmail,x.creationDate,x.contactPersonMobile,x.companyWebsite)}><i className="fa fa-eye faSsize"></i></a>
												<a className="actionButton editClientData" onClick={editEachClient.bind(this, x._id, x.name,x.address,x.description,x.contactPersonName,x.comapanyMobile,x.comapanyEmail,x.creationDate,x.contactPersonMobile,x.companyWebsite)}><i className="fa fa-pencil-square-o faSsize"></i></a> 
												<a className="actionButton deleteClientData"><i className="fa fa-times faSsize"></i></a>
											</td>
										</tr>)}
									</tbody>
								</table>
							</div>
						</div>);
		  
		  
}

var viewEachClient = function(id, name,address,description,contactPersonMobile,comapanyMobile,comapanyEmail,creationDate,contactPersonName,companyWebsite) {
		window.sessionStorage.setItem("openClientId",id);
		window.sessionStorage.setItem("openClientName",name);
		window.sessionStorage.setItem("openClientAddress",address);
		window.sessionStorage.setItem("openClientDesc",description);
		window.sessionStorage.setItem("contactPersonMobile",contactPersonMobile);
		window.sessionStorage.setItem("openClientNo",comapanyMobile);
		window.sessionStorage.setItem("openClientEmail",comapanyEmail);
		window.sessionStorage.setItem("openClientCrtDt",creationDate);
		window.sessionStorage.setItem("openContactPerson",contactPersonName);
		window.sessionStorage.setItem("openClientWebsite",companyWebsite);
		
		render(<ViewClientDet />,document.getElementById('innerBody'));

}



var ViewClientDet = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    document.getElementById('company_name').disabled=true;	
    document.getElementById('company_contact').disabled=true;	
    document.getElementById('company_address').disabled=true;	
    document.getElementById('company_description').disabled=true;	
    document.getElementById('company_email').disabled=true;	
    document.getElementById('contact_person').disabled=true;	
    document.getElementById('contactPersonMobile').disabled=true;
    document.getElementById('companyWebsite').disabled=true;
  },
  render: function() {
    return (<div id="createNewClient">
			<div className="createClientInnerDiv">
				<div className="createClientMainGap"></div>
				<div className="createClientMainDiv">
					<div className="clientTitle"><span className="clientTitlestyle">View client</span></div>
					<div className="clientForm">
						<div className="form-group">
							<label>Company Name</label>
							<input type="text" className="form-control" id="company_name" placeholder="Company Name" value={sessionStorage.getItem("openClientName")}/>
						</div>
					</div>
					<div className="clientForm1">
						<div className="form-group">
							<label>Company Contact Number</label>
							<input type="text" className="form-control" id="company_contact" placeholder="Company Contact" value={sessionStorage.getItem("openClientNo")}/>
						</div>
					</div>
					<div className="clientFormFull">
						<div className="form-group">
							<label>Company Address</label>
							<textarea className="form-control" id="company_address" rows="3" placeholder="Company Address">{sessionStorage.getItem("openClientAddress")}</textarea>
						</div>
					</div>
					<div className="clientFormFull">
						<div className="form-group">
							<label>Company Description</label>
							<textarea className="form-control" id="company_description" rows="3" placeholder="Company Description">{sessionStorage.getItem("openClientDesc")}</textarea>
						</div>
					</div>
					<div className="clientFormFull">
						<div className="form-group">
							<label>Client Website</label>
							<input type="text" className="form-control" id="companyWebsite" placeholder="Company Website" value={sessionStorage.getItem("openClientWebsite")}/>
						</div>
					</div>
					<div className="clientForm">
						<div className="form-group">
							<label>Company Email</label>
							<input type="text" className="form-control" id="company_email" placeholder="Company Email" value={sessionStorage.getItem("openClientEmail")}/>
						</div>
					</div>
					<div className="clientForm1">
						<div className="form-group">
							<label>Contact Person Name</label>
							<input type="text" className="form-control" id="contact_person" placeholder="Contact Person Name" value={sessionStorage.getItem("openContactPerson")}/>
						</div>
					</div>
					<div className="clientForm">
						<div className="form-group">
							<label>Contact Person Mobile</label>
							<input type="text" className="form-control" id="contactPersonMobile" placeholder="Contact Person Mobile" value={sessionStorage.getItem("contactPersonMobile")}/>
						</div>
					</div>							
				</div>
				<div className="createClientMainGap"></div>
			</div>		
			<div className="formSettingsSpace"></div>
		</div>
    );
  }
});

var editEachClient = function(id, name,address,description,contactPersonMobile,comapanyMobile,comapanyEmail,creationDate,contactPersonName,companyWebsite) {
		window.sessionStorage.setItem("openClientId",id);
		window.sessionStorage.setItem("openClientName",name);
		window.sessionStorage.setItem("openClientAddress",address);
		window.sessionStorage.setItem("openClientDesc",description);
		window.sessionStorage.setItem("contactPersonMobile",contactPersonMobile);
		window.sessionStorage.setItem("openClientNo",comapanyMobile);
		window.sessionStorage.setItem("openClientEmail",comapanyEmail);
		window.sessionStorage.setItem("openClientCrtDt",creationDate);
		window.sessionStorage.setItem("openContactPerson",contactPersonName);
		window.sessionStorage.setItem("openClientWebsite",companyWebsite);
		
		render(<EditClientDet />,document.getElementById('innerBody'));

}

class EditClientDet extends Component {
  updateClient(){
	
		if(($("#companyName").val() == "") || ($("#companyAddress").val() == "") || ($("#companyDescription").val() == "") || ($("#contactPersonName").val() == "") || ($("#companyContact").val() == "") || ($("#companyEmail").val() == "") || ($("#contactPersonMobile").val() == "") || ($("#companyWebsite").val() == "")){
				alert("All fields are mandatory.");
		}else{
			if(Clients.find({comapanyMobile: $("#companyContact").val() , name: $("#companyName").val()}).count()>1){
				alert("This company already exists!");
			}else{
				Clients.update($("#openClientId").val(), {
				  $set: { 
					name : $("#companyName").val(),
					address : $("#companyAddress").val(),
					description : $("#companyDescription").val(),
					contactPersonName : $("#contactPersonName").val(),
					comapanyMobile : $("#companyContact").val(),
					comapanyEmail : $("#companyEmail").val(),
					contactPersonMobile : $("#contactPersonMobile").val(),
					companyWebsite :$("#companyWebsite").val()
				  },
				});
			
				render(<ShowClients />,document.getElementById('innerBody'));
				
			}
		}

	}
	resetClientInfo(){
		/*$("#company_name").val({sessionStorage.getItem("openClientName")});
		$("#companyAddress").val({sessionStorage.getItem("openClientAddress")});
		$("#companyDescription").val({sessionStorage.getItem("openClientDesc")});
		$("#contactPersonName").val({sessionStorage.getItem("openContactPerson")});
		$("#company_contact").val({sessionStorage.getItem("openClientNo")});
		$("#companyEmail").val({sessionStorage.getItem("openClientEmail")});
		$("#contactPersonMobile").val({sessionStorage.getItem("contactPersonMobile")});
		$("#companyWebsite").val({sessionStorage.getItem("openClientWebsite")});*/
		
	}
	
	render() {
		return (<div id="createNewClient">
				<div className="createClientInnerDiv">
					<div className="createClientMainGap"></div>
					<div className="createClientMainDiv">
						<div className="clientTitle"><span className="clientTitlestyle">Update Client</span></div>
						<div className="clientForm">
							<div className="form-group">
								<label>Company Name</label>
								<input type="text" className="form-control" id="companyName" placeholder="Company Name" value={sessionStorage.getItem("openClientName")}/>
							</div>
						</div>
						<div className="clientForm1">
							<div className="form-group">
								<label>Company Contact Number</label>
								<input type="text" className="form-control" id="companyContact" placeholder="Company Contact" value={sessionStorage.getItem("openClientNo")}/>
							</div>
						</div>
						<div className="clientFormFull">
							<div className="form-group">
								<label>Company Address</label>
								<textarea className="form-control" id="companyAddress" rows="3" placeholder="Company Address">{sessionStorage.getItem("openClientAddress")}</textarea>
							</div>
						</div>
						<div className="clientFormFull">
							<div className="form-group">
								<label>Company Description</label>
								<textarea className="form-control" id="companyDescription" rows="3" placeholder="Company Description">{sessionStorage.getItem("openClientDesc")}</textarea>
							</div>
						</div>
						<div className="clientFormFull">
							<div className="form-group">
								<label>Client Website</label>
								<input type="text" className="form-control" id="companyWebsite" placeholder="Company Website" value={sessionStorage.getItem("openClientWebsite")}/>
							</div>
						</div>
						<div className="clientForm">
							<div className="form-group">
								<label>Company Email</label>
								<input type="text" className="form-control" id="companyEmail" placeholder="Company Email" value={sessionStorage.getItem("openClientEmail")}/>
							</div>
						</div>
						<div className="clientForm1">
							<div className="form-group">
								<label>Contact Person Name</label>
								<input type="text" className="form-control" id="contactPersonName" placeholder="Contact Person Name" value={sessionStorage.getItem("openContactPerson")}/>
							</div>
						</div>
						<div className="clientForm">
							<div className="form-group">
								<label>Contact Person Mobile</label>
								<input type="text" className="form-control" id="contactPersonMobile" placeholder="Contact Person Mobile" value={sessionStorage.getItem("contactPersonMobile")}/>
							</div>
						</div>							
					</div>
					<div className="createClientMainGap"></div>
				</div>
				<div className="addclientButtons">
					<button className="btn btn-primary" id="saveFromData" onClick={this.updateClient}>Update</button>			
					<button className="btn btn-primary" id="backToPreview" onClick={this.resetClientInfo}>Cancel</button>	
					<input type="hidden" id="formId" value={sessionStorage.getItem("openClientId")}/>
				</div>		
				<div className="formSettingsSpace"></div>
			</div>);
	
	}
}


// Creates the 'ShowForms' React component. Subscribes to 'forms/all' publication,
// and passes the contents of 'Forms' as a React property.
export const ShowClients = createContainer(() => {
	
  return {
    clients: Clients.find().fetch(),
  };
}, _ShowClients);