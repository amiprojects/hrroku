import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
//import App from '../imports/ui/App.jsx';
import FullPage from '../imports/ui/Page.jsx';
import ShowForms from './FormList.jsx';
 
Meteor.startup(() => {
	render(<FullPage />, document.getElementById('render-target'));
	$.getScript('../../client/assets/demo.js', function(){
             showFormData(" ");
	});

});



