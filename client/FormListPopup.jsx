import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Forms } from '../imports/api/collections.js';

// This stateless React component renders its 'forms' props as a list
function _ShowForms({forms}) {
  return (<div id="formList">
			<div className="formListContainer">	
				<div className="wrapper">
					{forms.map(x => <div className="box" key={x._id} id={x._id} onClick={viewFullForm.bind(this, x._id, x.name,x.description,x.formDesignJson,x.createdAt)}>
								<div className="boxHeaderDiv">
									   <div className="boxHeaderInnerDiv1">											
											<span className="formTitleSideGap">
												  {x.name}
											</span>
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




// Creates the 'FormListPopup' React component. Subscribes to 'forms/all' publication,
// and passes the contents of 'Forms' as a React property.
export const FormListPopup = createContainer(() => {
	
  return {
    forms: Forms.find().fetch(),
  };
}, _ShowForms);