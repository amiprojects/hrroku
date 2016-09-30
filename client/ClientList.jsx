import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Clients } from '../imports/api/collections.js';

function _ShowClients({clients}) {
  return (<div id="clientListView">
						    <div class="clientListTableDiv">
						        <table class="table table-striped" id="clientDatatable">
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
											<td><button onClick={showC.bind(this, x._id, x.name,x.address,x.description,x.contactPersonName,x.comapanyMobile,x.comapanyEmail,x.creationDate,x.contactPersonMobile,x.companyWebsite)}></button></td>
										</tr>)}
									</tbody>
								</table>
							</div>
						</div>);
		  
		  
}

var showC = function(id, name,address,description,contactPersonName,comapanyMobile,comapanyEmail,creationDate,contactPersonMobile,companyWebsite) {
		window.sessionStorage.setItem("openFormId",id);
		window.sessionStorage.setItem("openFormName",name);
		window.sessionStorage.setItem("openFormDecs",address);
		window.sessionStorage.setItem("openFormFjsn",description);
		window.sessionStorage.setItem("openFormCrtDt",contactPersonName);
		window.sessionStorage.setItem("openFormId",comapanyMobile);
		window.sessionStorage.setItem("openFormName",comapanyEmail);
		window.sessionStorage.setItem("openFormDecs",creationDate);
		window.sessionStorage.setItem("openFormFjsn",contactPersonMobile);
		window.sessionStorage.setItem("openFormCrtDt",companyWebsite);

}


var OpenForm = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $("#formElements").formRender({
		  dataType: 'json',
		  formData: JSON.parse(sessionStorage.getItem("openFormFjsn"))
	});	
  },
  render: function() {
    return (
      <div id="viewFormDiv">
		<div className="formViewCont">
			<div className="formPage">
				<div className="formTitle">
					<span id="formTitle">{sessionStorage.getItem("openFormName")}</span>
				</div>
				<div id="formElements" className="formElementCont"></div>
			</div>
		</div>
	  </div>
    );
  }
});




// Creates the 'ShowForms' React component. Subscribes to 'forms/all' publication,
// and passes the contents of 'Forms' as a React property.
export const ShowClients = createContainer(() => {
	
  return {
    clients: Clients.find().fetch(),
  };
}, _ShowClients);