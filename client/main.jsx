import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import Registration from '../imports/ui/Registration.jsx';
import AddClient from '../imports/ui/AddClient.jsx';
import Login from '../imports/ui/Login.jsx';
import ManageUser from '../imports/ui/ManageUser.jsx';
import ManageClient from '../imports/ui/ManageClient.jsx';
import ForgotPassword from '../imports/ui/ForgotPassword.jsx';

var PageComponent = ({name}) => (<body>{name}</body>);

FlowRouter.route('/', {
  name: 'Login',
  action(params) {
    mount(PageComponent, {name: <Login />});
  },
});

FlowRouter.route('/ManageClient', {
  name: 'ManageClient',
  action(params) {
    mount(PageComponent, {name: <ManageClient />});
  },
});

FlowRouter.route('/ManageUser', {
  name: 'ManageUser',
  action(params) {
    mount(PageComponent, {name: <ManageUser />});
  },
});

FlowRouter.route('/AddClient', {
  name: 'AddClient',
  action(params) {
    mount(PageComponent, {name: <AddClient />});
  },
});

FlowRouter.route('/Registration', {
  name: 'Registration',
  action(params) {
    mount(PageComponent, {name: <Registration />});
  },
});

FlowRouter.route('/ForgotPassword', {
  name: 'ForgotPassword',
  action(params) {
    mount(PageComponent, {name: <ForgotPassword />});
  },
});
