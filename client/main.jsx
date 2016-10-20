import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 

import Login from '../imports/ui/Login.jsx';
import ForgotPassword from '../imports/ui/ForgotPassword.jsx';

 
Meteor.startup(() => {
  render(<ForgotPassword />, document.getElementById('render-target'));
  render(<Login />, document.getElementById('render-target'));
  
});