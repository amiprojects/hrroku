import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Forms } from '../imports/api/collections.js';

// This stateless React component renders its 'forms' props as a list
function _ShowForms({forms}) {
  return (<div id="formList">
			<div className="formListContainer">	
				<div className="wrapper">
					{forms.map(x => <div className="box" key={x._id} id={x._id}>
								<div className="boxHeaderDiv">
									   <div className="boxHeaderInnerDiv">											
											<span className="formTitleSideGap">
												  {x.name}
											</span>
									   </div>
									   <div className="formActionDiv">
											<a className="actionButton" onClick={viewFullForm.bind(this, x._id, x.name,x.description,x.formDesignJson,x.createdAt)} ><i className="fa fa-eye faSsizeNew"></i></a>
											<a className="actionButton" onClick={editFullForm.bind(this, x._id, x.name,x.description,x.formDesignJson,x.createdAt)}><i className="fa fa-pencil-square-o faSsizeNew"></i></a>
											<a className="actionButton deleteFormData"><i className="fa fa-times faSsizeNew"></i></a>											
									   </div>
								</div>
							   <div className="boxBobyDiv">	
									 <img className="formImageSize" src="images/form.png"/>									   
							   </div>
							</div>)}
				</div>									
			</div>
		  </div>);
}

var viewFullForm = function(id,name,desc,fJsn,crtDt) {
		window.sessionStorage.setItem("openFormId",id);
		window.sessionStorage.setItem("openFormName",name);
		window.sessionStorage.setItem("openFormDecs",desc);
		window.sessionStorage.setItem("openFormFjsn",fJsn);
		window.sessionStorage.setItem("openFormCrtDt",crtDt);

		render(<OpenForm />,document.getElementById('innerBody'));
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



var editFullForm = function(id,name,desc,fJsn,crtDt) {
		window.sessionStorage.setItem("openFormId",id);
		window.sessionStorage.setItem("openFormName",name);
		window.sessionStorage.setItem("openFormDecs",desc);
		window.sessionStorage.setItem("openFormFjsn",fJsn);
		window.sessionStorage.setItem("openFormCrtDt",crtDt);

		render(<UpdateForm />,document.getElementById('innerBody'));
}



var UpdateForm = React.createClass({

  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    var buildWrap = $(document.getElementById('fb-editor')),
		renderWrap = $(document.getElementById('fb-rendered-form')),
		editBtn = document.getElementById('edit-form'),
		formData = sessionStorage.getItem("openFormFjsn"),
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
					<FormUpdator />
					<FormUpdateRender />
					<FormUpdateSettings />
				</div>);
	}
});


var FormUpdator = React.createClass({
	render: function() {
		return (<div id="fb-editor" className="formEditorDiv">
				   <div className="headerTab">
						<ul className="tab">
							<li className="activeTab"><a id="addFieldTab" href="#" className="tablinks activeTab">Update Form</a></li>
							<li><a id="formAppearanceTab" href="#" className="tablinks">Preview</a></li>
							<li><a id="formSettingTab" href="#"  className="tablinks">Save</a></li>
						</ul>
				   </div>
			</div>);
	}
}); 

class FormUpdateRender extends Component {
	
	
	showFormSettingsPage(){
		$("#formSettingsPage").show();
		$("#fb-rendered-form").hide();
	}
	
	
	render() {
		return (<div id="fb-rendered-form">
					<div className="headerTab">
						<ul className="tab">
							<li className="activeTab"><a id="addFieldTab" href="#" className="tablinks activeTab">Update Form</a></li>
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


class FormUpdateSettings extends Component {
	
	backToFormRender(){
		$("#fb-rendered-form").show();
		$("#formSettingsPage").hide();
	}
	
	updateFormData(){
		if($("#formNameVal").val()=="" || sessionStorage.getItem("formData")==""){
			alert("Form name and form design are mandatory!");			
		}else{
			if(Forms.find({name: $("#formNameVal").val()}).count()>1){
				alert("This form name already exists!");
			}else{
				Forms.update($("#formId").val(), {
					$set: {
						formDesignJson : sessionStorage.getItem("formData") ,
						name : $("#formNameVal").val() ,
						description : $("#formDecsription").val() 				
					},
				});
				
				sessionStorage.setItem("formData","");
				$("#formDecsription").val("");
				$("#formName").val("");
				render(<ShowForms />,document.getElementById('innerBody'));
			}
		}
		
	}
	
	
	render() {
		return (<div id="formSettingsPage">
					<div className="headerTab">
						<ul className="tab">
							<li className="activeTab"><a id="addFieldTab" href="#" className="tablinks activeTab">Update Form</a></li>
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
											<input className="form-control inputType" type="text" ref="formName" id="formNameVal" placeholder="Untitled Form" value={sessionStorage.getItem("openFormName")}/>
									   </div>
								 </div>
								 <div className="formSettingsSpace"></div>
								 <div className="formSettingsField">
									   <div className="formSettingsFieldName">
											Description
									   </div>
									   <div className="formSettingsFieldPlace">
											<textarea className="form-control inputType" id="formDecsription" ref="formDescription" placeholder="Please fill this form">{sessionStorage.getItem("openFormDecs")}</textarea>
									   </div>
								 </div>
								 <div className="formSettingsSpace"></div>
						   </div>
						   <div className="formSettingsButtons">
								<button className="btn btn-primary" id="saveFromData" onClick={this.updateFormData}>Update</button>			
								<button className="btn btn-primary" id="backToPreview" onClick={this.backToFormRender}>Back</button>	
								<input type="hidden" id="formId" value={sessionStorage.getItem("openFormId")}/>
						   </div>									   
					</div>									   
			</div>);
	}
}






// Creates the 'ShowForms' React component. Subscribes to 'forms/all' publication,
// and passes the contents of 'Forms' as a React property.
export const ShowForms = createContainer(() => {
	
  return {
    forms: Forms.find().fetch(),
  };
}, _ShowForms);