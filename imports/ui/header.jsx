import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';


export default class Header extends Component {
  pressBtn(){
    FlowRouter.go("/");
  }

  render() {
    return(
    <div className="hed_top">
      <div className="mid_container">
      <div className="logo">Aptitude</div>
      <div className="hed_top_right">
        <label>Logged in as Srinivas</label>
        <a href="" onClick={this.pressBtn}><img src="images/logout.png" />Log Out</a></div>
      </div>
    </div>
    );
  }
}
