import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Forms,Clients } from '../api/collections.js';
import { ShowForms } from '../../client/FormList.jsx';
import { ShowClients } from '../../client/ClientList.jsx';
import { FormListPopup } from '../../client/FormListPopup.jsx';

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
		table=$("#clientDatatable").DataTable();
	}
	showFormCondition(){
	   	render(<FormCondition />,document.getElementById('innerBody'));
	
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
												<a className="optionColor" onClick={this.showFormCondition}>
													 <li>
														  <i className="fa fa-list-alt"></i>Conditional Form
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
		var bpop;
		bpop = $("#loadForms").bPopup();
	    render(<PopUp />,document.getElementById('innerBody'));
	}
	render() {
		return (<div id="createPage">
					<div className="createClientInnerDiv">
						<div className="createClientMainGap"></div>
						<div className="createClientMainDiv">
							<div className="clientTitle"><span className="clientTitlestyle">Create Page</span></div>
							<div className="clientForm">
								<div className="form-group">
									<label>Choose Client</label>
									<select className="form-control" id="clienttName">
										<option>Client Name</option>
									</select>
								</div>
							</div>
							<div className="clientForm1">
								<div className="form-group">
									<label>Choose Template</label>
									<select className="form-control" id="templateName" onClick={this.addForm}>
										<option>Select Template</option>
									</select>
								</div>
							</div>
							<div className="clientFormFull">
								<div className="form-group">
									<label>Title</label>
									<input type="text" className="form-control" id="title" placeholder="Title"/>
								</div>
							</div>
							<div className="clientFormFull">
								<div className="form-group">
									<label>Id</label>
									<input type="text" className="form-control" id="title" placeholder="Id"/>
								</div>
							</div>
							<div className="clientForm">
								<div className="form-group">
									<label>Meta Keyboard</label>
									<input type="text" className="form-control" id="metaKey" placeholder="Meta Keyboard"/>
								</div>
							</div>
							<div className="clientForm1">
								<div className="form-group">
									<label>Meta Description</label>
									<input type="text" className="form-control" id="metaKey" placeholder="Meta Description"/>
								</div>
							</div>
							<div className="clientForm">
								<div className="form-group">
									<label>Preview url</label>
									<input type="text" className="form-control" id="previewUrl" placeholder="http://mydomain.com/page"/>
								</div>
							</div>
							<div className="clientForm1">
								<div className="form-group">
									<label>Publish url</label>
									<input type="text" className="form-control" id="publishUrl" placeholder="http://mydomain.com/page"/>
								</div>
							</div>
							<div className="clientForm">
								<div className="form-group">
									<label>Status</label><br/>
									<input type="radio"  name="status" id="draft"/> Draft 
									<input type="radio"  name="status" id="publish"/> Publish 
								</div>
							</div>
						</div>
						<div className="createClientMainGap"></div>
					</div>
					<div className="addclientButtons">
						<button className="btn btn-primary" id="saveFromData">Save</button>			
						<button className="btn btn-primary" id="backToPreview">Cancel</button>							    
					</div>		
					<div className="formSettingsSpace"></div>
				</div>
		);
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
		if(($("#companyName").val() == "") || ($("#companyAddress").val() == "") || ($("#companyDescription").val() == "") || ($("#contactPersonName").val() == "") || ($("#companyContact").val() == "") || ($("#companyEmail").val() == "") || ($("#contactPersonMobile").val() == "") || ($("#companyWebsite").val() == "")){
				alert("All fields are mandatory.");
		}else{
			if(Clients.find({comapanyMobile: $("#companyContact").val() , name: $("#companyName").val()}).count()>1){
				alert("This company already exists!");
			}else{
				Clients.update($("#companyId").val(), {
				  $set: { 
					name : $("#editCompanyName").val(),
					address : $("#editCompanyAddress").val(),
					description : $("#editCompanyDescription").val(),
					contactPersonName : $("#editContactName").val(),
					comapanyMobile : $("#editCompanyContact").val(),
					comapanyEmail : $("#editCompanyEmail").val(),
					contactPersonMobile : $("#editcontactPersonMobile").val()
				  },
				});
				$("#editClientPopup").bPopup().close();
			}
		}
		
		
		window.sessionStorage.setItem("companyName",$("#companyName").val());
		window.sessionStorage.setItem("companyAddress",$("#companyAddress").val());
		window.sessionStorage.setItem("companyDescription",$("#companyDescription").val());
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
		alert("New client information added successfully");
		$("#companyName").val("");
		$("#companyAddress").val("");
		$("#companyDescription").val("");
		$("#contactPersonName").val("");
		$("#companyContact").val("");
		$("#companyEmail").val("");
		$("#contactPersonMobile").val("");
		$("#companyWebsite").val("");
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
	resetNewClientInfo(){
		$("#companyName").val("");
		$("#companyAddress").val("");
		$("#companyDescription").val("");
		$("#contactPersonName").val("");
		$("#companyContact").val("");
		$("#companyEmail").val("");
		$("#contactPersonMobile").val("");
		$("#companyWebsite").val("");
		
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
											<input type="text" className="form-control" id="companyWebsite" placeholder="Company Website"/>
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
							    <button className="btn btn-primary" id="backToPreview" onClick={this.resetNewClientInfo}>Cancel</button>							    
							</div>		
							<div className="formSettingsSpace"></div>
						</div>);
	
	}
}

class Popup extends Component {
	render() {
		return(
			<div id="loadForms">
				<span id="close" className="button b-close"><span>X</span></span>
				    <FormListPopup />
			</div>
		);
	}
}


class FormCondition extends Component {

  openConditionPopup(){
      	render(<PopupCondition />,document.getElementById('innerBody'));		
  }
render() {
		return(
			<div className="formConditionDiv">
						    <div className="formConditionMainDiv">
								<div className="formConditionSideDiv">
								    <button className=" customField icon-select ui-sortable-handle">Select</button>
								    <button className="customField icon-radio-group ui-sortable-handle">Radio Group</button>
								</div>
								<div className="formConditionBodyDiv">
								     <div className="form-elements"><div className="form-group required-wrap"><label for="required-frmb-0-fld-2">Required</label><input type="checkbox" className="fld-required" name="required" value="true" id="cnd-required-frmb-0-fld-2"/></div><div className="form-group label-wrap"><label for="label-frmb-0-fld-2">Label</label> <input type="text" value="Radio Group" name="label" placeholder="Label" className="fld-label form-control" id="cnd-label-frmb-0-fld-2"/></div><div className="form-group description-wrap"><label for="description-frmb-0-fld-2">Help Text</label> <input type="text" value="" name="description" placeholder="" className="fld-description form-control" id="cnd-description-frmb-0-fld-2"/></div><div className="form-group className-wrap"><label for="className-frmb-0-fld-2">Class</label> <input type="text" value="radio-group" name="className" placeholder="space separated classes" className="fld-className form-control" id="cnd-className-frmb-0-fld-2"/></div><div className="form-group name-wrap"><label for="name-frmb-0-fld-2">Name</label> <input type="text" value="radio-group-1475308621487" name="name" placeholder="" className="fld-name form-control" id="cnd-name-frmb-0-fld-2"/></div><div className="form-group access-wrap"><label>Access</label><input type="checkbox" className="fld-enable-roles" name="enable-roles" value="" id="cnd-enable-roles-frmb-0-fld-2"/> <label for="enable-roles-frmb-0-fld-2" className="roles-label">Limit access to one or more of the following roles:</label><div className="available-roles"><input type="checkbox" name="roles[]" value="1" id="cnd-fld-frmb-0-fld-2-roles-1" className="roles-field"/><label for="fld-frmb-0-fld-2-roles-1">Administrator</label><br/></div></div><div className="form-group other-wrap"><label>Enable "Other"</label><input type="checkbox" className="fld-enable-other" name="enable-other" value="" id="cnd-enable-other-frmb-0-fld-2"/> <label for="enable-other-frmb-0-fld-2" className="other-label">Let users to enter an unlisted option</label></div><div className="form-group field-options"><label className="false-label">Options</label><div className="sortable-options-wrap"><ol className="sortable-options ui-sortable"><li className="ui-sortable-handle"><input type="radio" className="option-selected" value="true" name="radio-group-1475308621487" checked="true"/><input type="text" className="option-label" value="Option 1" name="radio-group-1475308621487" placeholder="Label"/><input type="text" className="option-value" value="option-1" name="radio-group-1475308621487" placeholder="Value"/><a className="remove btn" title="Remove Element">×</a><label for="required-frmb-0-fld-2">(Conditional)</label><input type="checkbox" className="fld-required" name="required" value="true" id="cnd-required-frmb-0-fld-2" onClick={this.openConditionPopup}/></li><li className="ui-sortable-handle"><input type="radio" className="option-selected" value="false" name="radio-group-1475308621487"/><input type="text" className="option-label" value="Option 2" name="radio-group-1475308621487" placeholder="Label"/><input type="text" className="option-value" value="option-2" name="radio-group-1475308621487" placeholder="Value"/><a className="remove btn" title="Remove Element">×</a><label for="required-frmb-0-fld-2">(Conditional)</label><input type="checkbox" className="fld-required" name="required" value="true" id="cnd-required-frmb-0-fld-2" onClick={this.openConditionPopup}/></li><li className="ui-sortable-handle"><input type="radio" className="option-selected" value="false" name="radio-group-1475308621487" /><input type="text" className="option-label" value="Option 3" name="radio-group-1475308621487" placeholder="Label"/><input type="text" className="option-value" value="option-3" name="radio-group-1475308621487" placeholder="Value"/><a className="remove btn" title="Remove Element">×</a><label for="required-frmb-0-fld-2">(Conditional)</label><input type="checkbox" className="fld-required" name="required" value="true" id="cnd-required-frmb-0-fld-2" onClick={this.openConditionPopup}/></li></ol></div></div><a className="close-field">Close</a></div>
							 
								</div>
							</div>
						</div>
		);
	}
}
class PopupCondition1 extends Component {
	showfields(){	
	  if($(".selectType").val() == "radio"){
		  render(<PopupCondition1 />,document.getElementById('innerBody'));	
	  }else if($(".selectType").val() == "text"){
		render(<PopupCondition2 />,document.getElementById('innerBody'));		  
	  }else{
		
	  }
	 		
	}
	render() {
		return(
			<div className="formConditionDiv">
				 <div className="formConditionMainDiv">
				    <div className="formConditionBodyDiv">
					       <div className="clientForm">
							<div className="form-group">
								<label>Select Type</label>
								<select type="text" className="form-control selectType" onChange={this.showfields}>
								  <option value="radio">Radio</option>
								  <option value="text">Text</option>
								</select>
							</div>
						</div>
						<div className="clientFormFull">
							<div className="form-elements"><div className="form-group required-wrap"><label for="required-frmb-0-fld-2">Required</label><input type="checkbox" className="fld-required" name="required" value="true" id="cnd-required-frmb-0-fld-2"/></div><div className="form-group label-wrap"><label for="label-frmb-0-fld-2">Label</label> <input type="text" value="Radio Group" name="label" placeholder="Label" className="fld-label form-control" id="cnd-label-frmb-0-fld-2"/></div><div className="form-group description-wrap"><label for="description-frmb-0-fld-2">Help Text</label> <input type="text" value="" name="description" placeholder="" className="fld-description form-control" id="cnd-description-frmb-0-fld-2"/></div><div className="form-group className-wrap"><label for="className-frmb-0-fld-2">Class</label> <input type="text" value="radio-group" name="className" placeholder="space separated classes" className="fld-className form-control" id="cnd-className-frmb-0-fld-2"/></div><div className="form-group name-wrap"><label for="name-frmb-0-fld-2">Name</label> <input type="text" value="radio-group-1475308621487" name="name" placeholder="" className="fld-name form-control" id="cnd-name-frmb-0-fld-2"/></div><div className="form-group access-wrap"><label>Access</label><input type="checkbox" className="fld-enable-roles" name="enable-roles" value="" id="cnd-enable-roles-frmb-0-fld-2"/> <label for="enable-roles-frmb-0-fld-2" className="roles-label">Limit access to one or more of the following roles:</label><div className="available-roles"><input type="checkbox" name="roles[]" value="1" id="cnd-fld-frmb-0-fld-2-roles-1" className="roles-field"/><label for="fld-frmb-0-fld-2-roles-1">Administrator</label><br/></div></div><div className="form-group other-wrap"><label>Enable "Other"</label><input type="checkbox" className="fld-enable-other" name="enable-other" value="" id="cnd-enable-other-frmb-0-fld-2"/> <label for="enable-other-frmb-0-fld-2" className="other-label">Let users to enter an unlisted option</label></div><div className="form-group field-options"><label className="false-label">Options</label><div className="sortable-options-wrap"><ol className="sortable-options ui-sortable"><li className="ui-sortable-handle"><input type="radio" className="option-selected" value="true" name="radio-group-1475308621487" checked="true"/><input type="text" className="option-label" value="Option 1" name="radio-group-1475308621487" placeholder="Label"/><input type="text" className="option-value" value="option-1" name="radio-group-1475308621487" placeholder="Value"/><a className="remove btn" title="Remove Element">×</a><label for="required-frmb-0-fld-2">(Conditional)</label><input type="checkbox" className="fld-required" name="required" value="true" id="cnd-required-frmb-0-fld-2"/></li><li className="ui-sortable-handle"><input type="radio" className="option-selected" value="false" name="radio-group-1475308621487"/><input type="text" className="option-label" value="Option 2" name="radio-group-1475308621487" placeholder="Label"/><input type="text" className="option-value" value="option-2" name="radio-group-1475308621487" placeholder="Value"/><a className="remove btn" title="Remove Element">×</a><label for="required-frmb-0-fld-2">(Conditional)</label><input type="checkbox" className="fld-required" name="required" value="true" id="cnd-required-frmb-0-fld-2"/></li><li className="ui-sortable-handle"><input type="radio" className="option-selected" value="false" name="radio-group-1475308621487"/><input type="text" className="option-label" value="Option 3" name="radio-group-1475308621487" placeholder="Label"/><input type="text" className="option-value" value="option-3" name="radio-group-1475308621487" placeholder="Value"/><a className="remove btn" title="Remove Element">×</a><label for="required-frmb-0-fld-2">(Conditional)</label><input type="checkbox" className="fld-required" name="required" value="true" id="cnd-required-frmb-0-fld-2"/></li></ol></div></div><a className="close-field">Close</a></div>
						</div>
					</div>
				 </div>
			</div>
		);
	}
}
class PopupCondition2 extends Component {
	showfields(){	
	  if($(".selectType").val() == "radio"){
	      
		  render(<PopupCondition1 />,document.getElementById('innerBody'));	
	  }else if($(".selectType").val() == "text"){
		
		render(<PopupCondition2 />,document.getElementById('innerBody'));		  
	  }else{
		alert("nothing");
	  }
	 		
	}
	render() {
		return(
			<div className="formConditionDiv">
				 <div className="formConditionMainDiv">
				    <div className="formConditionBodyDiv">
					       <div className="clientForm">
							<div className="form-group">
								<label>Select Type</label>
								<select type="text" className="form-control selectType" onChange={this.showfields}>
								  <option value="radio">Radio</option>
								  <option value="text" selected="selected">Text</option>
								</select>
							</div>
						</div>
						<div className="clientFormFull">
							<div className="form-elements"><div className="form-group required-wrap"><label for="required-frmb-0-fld-2">Required</label><input type="checkbox" className="fld-required" name="required" value="true" id="cnd-required-frmb-0-fld-2"/></div><div className="form-group label-wrap"><label for="label-frmb-0-fld-2">Label</label> <input type="text" value="Text" name="label" placeholder="Label" className="fld-label form-control" id="cnd-label-frmb-0-fld-2"/></div><div className="form-group description-wrap"><label for="description-frmb-0-fld-2">Help Text</label> <input type="text" value="" name="description" placeholder="" className="fld-description form-control" id="cnd-description-frmb-0-fld-2"/></div><div className="form-group className-wrap"><label for="className-frmb-0-fld-2">Class</label> <input type="text" value="text" name="className" placeholder="space separated classes" className="fld-className form-control" id="cnd-className-frmb-0-fld-2"/></div><div className="form-group name-wrap"><label for="name-frmb-0-fld-2">Name</label> <input type="text" value="text-1475308621487" name="name" placeholder="" className="fld-name form-control" id="cnd-name-frmb-0-fld-2"/></div><a className="close-field">Close</a></div>
						</div>
					</div>
				 </div>
			</div>
		);
	}
}
class PopupCondition extends Component {
    showfields(){	
	  if($(".selectType").val() == "radio"){
	      alert("radio");
		  render(<PopupCondition1 />,document.getElementById('innerBody'));	
	  }else if($(".selectType").val() == "text"){
		alert("text");
		render(<PopupCondition2 />,document.getElementById('innerBody'));		  
	  }else{
		alert("nothing");
	  }
	 		
	}
	render() {
		return(
			<div className="formConditionDiv">
				 <div className="formConditionMainDiv">
				    <div className="formConditionBodyDiv">
					       <div className="clientForm">
							<div className="form-group">
								<label>Select Type</label>
								<select type="text" className="form-control selectType" onChange={this.showfields}>
								  <option value="">Select Type</option>
								  <option value="radio">Radio</option>
								  <option value="text">Text</option>
								</select>
							</div>
						</div>
					</div>
				 </div>
			</div>
		);
	}
}
export default class FullPage extends Component {
	

	render() {
		return (<div className="main">
					<HeaderPart />
					<BodyPart />					
					<Popup />					
				</div>
		);
	}
	
}