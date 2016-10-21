import React, { Component } from 'react';
 
 export default class Dashboard extends Component {
 
  render() {
    return (

      <body id="home">
        <div className="hed_top">
          <div className="mid_container">
            <div className="logo"> Aptitude </div>
            <div className="hed_top_right">
              <label>Logged in as Srinivas</label>
              <a href="#"><img src="/images/logout.png" />Log Out</a></div>
          </div>
        </div>
        <div className="no_pad clearfix">
          <div className="clearfix overflow">
            <div className="col-md-2 no_pad">
              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav side-nav">
                  <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i>CLIENT<b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Add Client</a></li>
                      <li><a href="#">Manage Client</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-file"></i>FORM<b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Add Form</a></li>
                      <li><a href="#">Manage Form</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i>USER<b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Add User</a></li>
                      <li><a href="#">Manage User</a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bar-chart-o"></i>MAP<b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Client Map</a></li>
                      <li><a href="#">Mapining Management</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer no_margin">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>
        <script src="/js/jquery-1.10.2.js"></script>
        <script src="/js/bootstrap.js"></script>


        <script src="http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
        <script src="http://cdn.oesmith.co.uk/morris-0.4.3.min.js"></script>
        <script src="/js/jquery.tablesorter.js"></script>
        <script src="/js/tables.js"></script>

      </body>
    );
  }
}