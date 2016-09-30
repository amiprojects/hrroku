import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Forms,Clients } from '../api/collections.js';
import { ShowForms } from '../../client/FormList.jsx';
import { ShowClients } from '../../client/ClientList.jsx';

var HeaderPart = React.createClass({
  render: function() {
    return (<div className="pageHeader"><span className="headerTitle">Aptitude</span></div>);
  }
});

var BodyPart = React.createClass({
	render: function() {
		return (<div className="bodyMain">
					<SideMenu />
					<InnerBody />
				</div>);
	}
});


class SideMenu extends Component {
	showSubmenu(){
		$("#formOption").toggle();
	}
	showAdminSubmenu(){
		$("#pageOption").toggle();
	}
	
	showFormBuilder(){
		render(<CreateForm />,document.getElementById('innerBody'));		
	}
	
	showFormList(){
		
		render(<ShowForms />,document.getElementById('innerBody'));
	}
	
	showCreatePage(){
		render(<CreatePage />,document.getElementById('innerBody'));		
	}
	
	showPageList(){
		render(<PageLists />,document.getElementById('innerBody'));
	}
	
	showClientSubmenu(){
		$("#clientOption").toggle();
	}
	
	createClient(){
		render(<CreateClientPage />,document.getElementById('innerBody'));
	}
	
	showClientList(){
		render(<ShowClients />,document.getElementById('innerBody'));
	}
	
	
	
	render(){
		return (<div className="bodySideAreaMenu">								 
				  <div className="sideAreaMenu">
						<div className="wideMenuBodySideGap"></div>
						<div className="wideMenuBody">
						   <div className="wideMenuHeader">
								<div className="wideMenuHeaderText">
									PAGES
								</div>
								<div className="wideMenuHeaderText">
									<b>
										Form Builder
									</b>
								</div>
						   </div>
						   <div className="wideMenuItem">							         
									 <ul className="wideMenu" onClick={this.showSubmenu}>									    
											<li>								       
													<a className="optionColor">
														<i className="fa fa-file-text-o"></i>Form	
													</a>															
											  <ul className="wideMenuSubmenu" id="formOption">
												 <a className="optionColor" onClick={this.showFormBuilder}> 
													 <li>
														 <i className="fa fa-plus-circle"></i>Create
													 </li>
												 </a>
												 <a className="optionColor" onClick={this.showFormList}>
													 <li>
														  <i className="fa fa-list-alt"></i>List
													 </li>
												 </a>										  
											  </ul>
											</li>										
									 </ul>
								
								 <ul className="wideMenu" onClick={this.showAdminSubmenu}>
									 <li>
										   <a className="optionColor">
												 <i className="fa fa-file-text"></i>Page
										   </a>
										  <ul className="wideMenuSubmenu" id="pageOption">
											 <a className="optionColor" onClick={this.showCreatePage}>
												 <li>
													 <i className="fa fa-file"></i>Create
												 </li>
											 </a>
											 <a className="optionColor" onClick={this.showPageList}>
												 <li>
													  <i className="fa fa-list-alt"></i>List Page
												 </li>
											 </a>										  
										  </ul>
									 </li>
								 </ul>
								 <ul className="wideMenu" onClick={this.showClientSubmenu}>
									 <li>
										   <a className="optionColor">
												<i className="fa fa-users"></i>Client   
										   </a>
										  <ul className="wideMenuSubmenu" id="clientOption">
											 <a className="optionColor" onClick={this.createClient}>
												 <li>
													 <i className="fa fa-plus-circle"></i>Create
												 </li>
											 </a>
											 <a className="optionColor" onClick={this.showClientList}> 
												 <li>
													  <i className="fa fa-list-alt"></i>List
												 </li>
											 </a>										  
										  </ul>
									 </li>
								 </ul>
						   </div>
						</div>
						<div className="wideMenuBodySideGap"></div>
				  </div>					  
			   </div>);
		
	}
	
}
var CreateForm = React.createClass({

	getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    var buildWrap = $(document.getElementById('fb-editor')),
		renderWrap = $(document.getElementById('fb-rendered-form')),
		editBtn = document.getElementById('edit-form'),
		formData = '',
		editing = true,
		fbOptions = {
		  dataType: 'json'
		};
	  if (formData) {
		fbOptions.formData = JSON.parse(formData);
	  }
	  var formBuilder = $(buildWrap).formBuilder(fbOptions).data('formBuilder');

	  $('.form-builder-save').click(function(e) {
		  buildWrap.toggle();
		 renderWrap.toggle();
		$("#mainForm").formRender({
		  dataType: 'json',
		  formData: formBuilder.formData
		});
		window.sessionStorage.setItem('formData', JSON.stringify(formBuilder.formData));
	  });

	  editBtn.onclick = function() {
	   buildWrap.toggle();
	   renderWrap.toggle()
	  };
  },
	render() {
		return (<div className="wrapperDiv">
					<FormCreator />
					<FormRender />
					<FormSettings />
				</div>);
	}
});

var InnerBody = React.createClass({
	render: function() {
		return (<div className="bodyInnerDiv" id="innerBody">
					<CreateForm/>
				</div>);
	}
});


var FormCreator = React.createClass({
	render: function() {
		return (<div id="fb-editor" className="formEditorDiv">
				   <div className="headerTab">
						<ul className="tab">
							<li className="activeTab"><a id="addFieldTab" href="#" className="tablinks activeTab">Create Form</a></li>
							<li><a id="formAppearanceTab" href="#" className="tablinks">Preview</a></li>
							<li><a id="formSettingTab" href="#"  className="tablinks">Save</a></li>
						</ul>
				   </div>
			</div>);
	}
}); 

class FormRender extends Component {
	
	
	showFormSettingsPage(){
		$("#formSettingsPage").show();
		$("#fb-rendered-form").hide();
	}
	
	
	render() {
		return (<div id="fb-rendered-form">
					<div className="headerTab">
						<ul className="tab">
							<li className="activeTab"><a id="addFieldTab" href="#" className="tablinks activeTab">Create Form</a></li>
							<li className="activeTab"><a id="formAppearanceTab" href="#" className="tablinks activeTab">Preview</a></li>
							<li><a id="formSettingTab" href="#"  className="tablinks">Save</a></li>
						</ul>
				   </div>						    
				<div className="formRenderDiv">
					<div id="mainForm"></div>
					<div className="formRenderButtons">									
						<button id="formSettings" className="btn btn-primary" onClick={this.showFormSettingsPage}>Next</button>
						<button id="edit-form" className="btn btn-primary">Back</button>
					</div>
				</div>
			</div>);
	}

}


class FormSettings extends Component {
	
	backToFormRender(){
		$("#fb-rendered-form").show();
		$("#formSettingsPage").hide();
	}
	
	saveFormDate(){
		    if(($("#formNameVal").val() == "") || ($("#formDecsription").val() == "") ){
				alert("All fields are mandatory");
			}else{
				window.sessionStorage.setItem("formName",$("#formNameVal").val());
				window.sessionStorage.setItem("formDesc",$("#formDecsription").val());
				Forms.insert({
				  name: sessionStorage.getItem("formName"),
				  description: sessionStorage.getItem("formDesc"),
				  isActive:true,
				  formDesignJson:  sessionStorage.getItem("formData"),
				  createdAt: new Date(), // current time
				});
				alert("Data has been saved successfully");
				sessionStorage.setItem("formData","");
				sessionStorage.setItem("formName","");
				sessionStorage.setItem("formDesc","");
				$("#formNameVal").val("");
				$("#formDecsription").val("");
				render(<ShowForms />,document.getElementById('innerBody'));
			}
				
	}
	
	
	render() {
		return (<div id="formSettingsPage">
					<div className="headerTab">
						<ul className="tab">
							<li className="activeTab"><a id="addFieldTab" href="#" className="tablinks activeTab">Create Form</a></li>
							<li className="activeTab"><a id="formAppearanceTab" href="#" className="tablinks activeTab">Preview</a></li>
							<li className="activeTab"><a id="formSettingTab" href="#" className="tablinks activeTab">Save</a></li>
						</ul>
				   </div>                                			
					<div className="formSettingsMainDiv">															   
						   <div className="formSettingsBody">
								 <div className="formSettingsFieldTitle">
									  Form Settings
								 </div>
								 <div className="formSettingsField">
									   <div className="formSettingsFieldName">Form Name</div>
									   <div className="formSettingsFieldPlace">
											<input className="form-control inputType" type="text" ref="formName" id="formNameVal" placeholder="Untitled Form"/>
									   </div>
								 </div>
								 <div className="formSettingsSpace"></div>
								 <div className="formSettingsField">
									   <div className="formSettingsFieldName">
											Description
									   </div>
									   <div className="formSettingsFieldPlace">
											<textarea className="form-control inputType" id="formDecsription" ref="formDescription" placeholder="Please fill this form"></textarea>
									   </div>
								 </div>
								 <div className="formSettingsSpace"></div>
						   </div>
						   <div className="formSettingsButtons">
								<button className="btn btn-primary" id="saveFromData" onClick={this.saveFormDate}>Save</button>			
								<button className="btn btn-primary" id="backToPreview" onClick={this.backToFormRender}>Back</button>											
						   </div>									   
					</div>									   
			</div>);
	}
}

class CreatePage extends Component {
	addForm(){
		$("#createPage").append('<div className="createPageEditorDiv">Loading Forms....</div>');
	}
	render() {
		return (<div className="createPage">
						    <div className="createPageHeader">							    
								      Create new page								
							</div>
							<div className="createPageTitleDiv">
							    <div className="form-group">
									<label>Add Title</label>
									<input type="text" className="form-control" id="pageTitle"/>
								</div>
							</div>
							<div className="createPageMetaInfo">
									<div className="metaInfoBody"></div>
							</div>
						    <div className="createPageEditorDiv"><button className="btn btn-primary" onClick={this.addForm}>Add Form</button></div>							
		</div>);
	}
}


var PageLists = React.createClass({
	
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $("#pageListId").dataTable({
		"sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>"
		, "sPaginationType": "bootstrap"
		, "oLanguage": {
			"sLengthMenu": "_MENU_ records per page"
		}
	});	
  },
  render: function() {
    return (
      <div id="pageList">
			<div className="formListContainer">                               						
				<table className="table table-striped formList" id="pageListId">
					<thead>
						<tr>
							<th>
								Image
							</th>
							<th>
								Name
							</th>
							<th>
								Description
							</th>
							<th>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<img src="images/default.png" className="formImg"/>
							</td>
							<td>
								Page 1
							</td>
							<td>
								Page 1 Description
							</td>
							<td>
								<button className="btn btn-default">
									View Page
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<img src="images/default.png" className="formImg"/>
							</td>
							<td>
								Page 2
							</td>
							<td>
								Page 2 Description
							</td>
							<td>
								<button className="btn btn-default">
									View Page
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<img src="images/default.png" className="formImg"/>
							</td>
							<td>
								Page 1
							</td>
							<td>
								Page 1 Description
							</td>
							<td>
								<button className="btn btn-default">
									View Page
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
    );
  }

}); 

class CreateClientPage extends Component {
	addNewClient(){
		window.sessionStorage.setItem("companyName",$("#companyName").val());
		window.sessionStorage.setItem("companyAddress",$("#companyAddress").val());
		window.sessionStorage.setItem("companyDescription",$("#companyDescription").val());
		window.sessionStorage.setItem("contactPersonName",$("#contactPersonName").val());
		window.sessionStorage.setItem("contactPersonName",$("#contactPersonName").val());
		window.sessionStorage.setItem("companyContact",$("#companyContact").val());
		window.sessionStorage.setItem("companyEmail",$("#companyEmail").val());
		window.sessionStorage.setItem("contactPersonMobile",$("#contactPersonMobile").val());
		window.sessionStorage.setItem("companyWebsite",$("#companyWebsite").val());
		Clients.insert({
				  name :sessionStorage.getItem("companyName"),
				  address :sessionStorage.getItem("companyAddress"),
				  description : sessionStorage.getItem("companyDescription"),
				  contactPersonName : sessionStorage.getItem("contactPersonName"),
				  comapanyMobile : sessionStorage.getItem("companyContact"),
				  comapanyEmail : sessionStorage.getItem("companyEmail"),
				  creationDate : new Date(),
				  isActive : true,
				  contactPersonMobile : sessionStorage.getItem("contactPersonMobile"),
				  companyWebsite :sessionStorage.getItem("companyWebsite")
		});
		alert("Data added successfully");
		window.sessionStorage.setItem("companyName","");
		window.sessionStorage.setItem("companyAddress","");
		window.sessionStorage.setItem("companyDescription","");
		window.sessionStorage.setItem("contactPersonName","");
		window.sessionStorage.setItem("contactPersonName","");
		window.sessionStorage.setItem("companyContact","");
		window.sessionStorage.setItem("companyEmail","");
		window.sessionStorage.setItem("contactPersonMobile","");
		window.sessionStorage.setItem("companyWebsite","");
	}
	render() {
		return (<div id="createNewClient">
						    <div className="createClientInnerDiv">
							    <div className="createClientMainGap"></div>
							    <div className="createClientMainDiv">
									<div className="clientTitle"><span className="clientTitlestyle">Create new client</span></div>
									<div className="clientForm">
										<div className="form-group">
											<label>Company Name</label>
											<input type="text" className="form-control" id="companyName" placeholder="Company Name"/>
										</div>
									</div>
									<div className="clientForm1">
										<div className="form-group">
											<label>Company Contact Number</label>
											<input type="text" className="form-control" id="companyContact" placeholder="Company Contact"/>
										</div>
									</div>
									<div className="clientFormFull">
										<div className="form-group">
											<label>Company Address</label>
											<textarea className="form-control" id="companyAddress" rows="3" placeholder="Company Address"></textarea>
										</div>
									</div>
									<div className="clientFormFull">
										<div className="form-group">
											<label>Company Description</label>
											<textarea className="form-control" id="companyDescription" rows="3" placeholder="Company Description"></textarea>
										</div>
									</div>
									<div className="clientFormFull">
										<div className="form-group">
											<label>Client Website</label>
											<input type="text" className="form-control" id="companyWebsite" placeholder="Company Email"/>
										</div>
									</div>
									<div className="clientForm">
										<div className="form-group">
											<label>Company Email</label>
											<input type="text" className="form-control" id="companyEmail" placeholder="Company Email"/>
										</div>
									</div>
									<div className="clientForm1">
										<div className="form-group">
											<label>Contact Person Name</label>
											<input type="text" className="form-control" id="contactPersonName" placeholder="Contact Person Name"/>
										</div>
									</div>
									<div className="clientForm">
										<div className="form-group">
											<label>Contact Person Mobile</label>
											<input type="text" className="form-control" id="contactPersonMobile" placeholder="Contact Person Mobile"/>
										</div>
									</div>							
								</div>
								<div className="createClientMainGap"></div>
							</div>
							<div className="addclientButtons">
							    <button className="btn btn-primary" id="saveFromData" onClick={this.addNewClient}>Save</button>			
							    <button className="btn btn-primary" id="backToPreview">Cancel</button>							    
							</div>		
							<div className="formSettingsSpace"></div>
						</div>);
	
	}
}



export default class FullPage extends Component {
	

	render() {
		return (<div className="main">
					<HeaderPart />
					<BodyPart />
				</div>
		);
	}
	
}