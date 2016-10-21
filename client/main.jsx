import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import Login from '../imports/ui/Login.jsx';
import Registration from '../imports/ui/Registration.jsx';
import ForgotPassword from '../imports/ui/ForgotPassword.jsx';
import Dashboard from '../imports/ui/Dashboard.jsx';





 
Meteor.startup(() => {
	
    render(<Dashboard />, document.getElementById('render-target')); 
	render(<Login />, document.getElementById('render-target')); 
 	render(<Registration />, document.getElementById('render-target'));	
  	render(<ForgotPassword />, document.getElementById('render-target')); 
  	
  	
  
});