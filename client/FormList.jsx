import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Forms } from '../imports/api/collections.js';

// This stateless React component renders its 'forms' props as a list
function _ShowForms({forms}) {
  return (<div id="formList">
			<div className="formListContainer">	
				<div className="wrapper">
					{forms.map(x => <div className="box" onClick={hello.bind(this, x._id, x.name,x.description,x.formDesignJson,x.createdAt)} key={x._id} id={x._id}>
								<div className="boxHeaderDiv">
									   <div className="boxHeaderInnerDiv">											
											<span className="formTitleSideGap">
												  {x.name}
											</span>
									   </div>
									   <div className="formActionDiv">
											<a className="actionButton"><i className="fa fa-eye faSsizeNew"></i></a>
											<a className="actionButton"><i className="fa fa-pencil-square-o faSsizeNew"></i></a>
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

var hello = function(id,name,desc,fJsn,crtDt) {
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




// Creates the 'ShowForms' React component. Subscribes to 'forms/all' publication,
// and passes the contents of 'Forms' as a React property.
export const ShowForms = createContainer(() => {
	
  return {
    forms: Forms.find().fetch(),
  };
}, _ShowForms);