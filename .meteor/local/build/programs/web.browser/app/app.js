var require = meteorInstall({"client":{"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/template.main.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.body.addContent((function() {                                                                                // 2
  var view = this;                                                                                                    // 3
  return HTML.Raw('<div id="render-target"></div>');                                                                  // 4
}));                                                                                                                  // 5
Meteor.startup(Template.body.renderToDocument);                                                                       // 6
                                                                                                                      // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"js":{"regiatration.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/js/regiatration.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.jsx":["react","meteor/meteor","react-dom","../imports/ui/Login.jsx","../imports/ui/Registration.jsx","../imports/ui/ForgotPassword.jsx","../imports/ui/Dashboard.jsx",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/main.jsx                                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var React;module.import('react',{"default":function(v){React=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var render;module.import('react-dom',{"render":function(v){render=v}});var Login;module.import('../imports/ui/Login.jsx',{"default":function(v){Login=v}});var Registration;module.import('../imports/ui/Registration.jsx',{"default":function(v){Registration=v}});var ForgotPassword;module.import('../imports/ui/ForgotPassword.jsx',{"default":function(v){ForgotPassword=v}});var Dashboard;module.import('../imports/ui/Dashboard.jsx',{"default":function(v){Dashboard=v}});
                                                                                                                      // 2
                                                                                                                      // 3
                                                                                                                      //
                                                                                                                      // 5
                                                                                                                      // 6
                                                                                                                      // 7
                                                                                                                      // 8
                                                                                                                      //
Meteor.startup(function () {                                                                                          // 15
  render(React.createElement(Registration, null), document.getElementById('render-target'));                          // 16
  render(React.createElement(Dashboard, null), document.getElementById('render-target'));                             // 17
  render(React.createElement(Login, null), document.getElementById('render-target'));                                 // 18
  render(React.createElement(Registration, null), document.getElementById('render-target'));                          // 19
  render(React.createElement(ForgotPassword, null), document.getElementById('render-target'));                        // 20
});                                                                                                                   // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"imports":{"ui":{"Dashboard.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/Dashboard.jsx                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck;module.import("babel-runtime/helpers/classCallCheck",{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import("babel-runtime/helpers/possibleConstructorReturn",{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import("babel-runtime/helpers/inherits",{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                                      //
                                                                                                                      //
                                                                                                                      // 1
                                                                                                                      //
var Dashboard = function (_Component) {                                                                               //
  _inherits(Dashboard, _Component);                                                                                   //
                                                                                                                      //
  function Dashboard() {                                                                                              //
    _classCallCheck(this, Dashboard);                                                                                 //
                                                                                                                      //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                       //
  }                                                                                                                   //
                                                                                                                      //
  Dashboard.prototype.render = function () {                                                                          //
    function render() {                                                                                               //
      return React.createElement(                                                                                     // 6
        "body",                                                                                                       // 8
        null,                                                                                                         // 8
        React.createElement(                                                                                          // 9
          "div",                                                                                                      // 9
          { className: "hed_top" },                                                                                   // 9
          React.createElement(                                                                                        // 10
            "div",                                                                                                    // 10
            { className: "mid_container" },                                                                           // 10
            React.createElement(                                                                                      // 11
              "div",                                                                                                  // 11
              { className: "logo" },                                                                                  // 11
              " Aptitude "                                                                                            // 11
            ),                                                                                                        // 11
            React.createElement(                                                                                      // 12
              "div",                                                                                                  // 12
              { className: "hed_top_right" },                                                                         // 12
              React.createElement(                                                                                    // 13
                "label",                                                                                              // 13
                null,                                                                                                 // 13
                "Logged in as Srinivas"                                                                               // 13
              ),                                                                                                      // 13
              React.createElement(                                                                                    // 14
                "a",                                                                                                  // 14
                { href: "#" },                                                                                        // 14
                React.createElement("img", { src: "/images/logout.png" }),                                            // 14
                "Log Out"                                                                                             // 14
              )                                                                                                       // 14
            )                                                                                                         // 12
          )                                                                                                           // 10
        ),                                                                                                            // 9
        React.createElement(                                                                                          // 17
          "div",                                                                                                      // 17
          { className: "no_pad clearfix" },                                                                           // 17
          React.createElement(                                                                                        // 18
            "div",                                                                                                    // 18
            { className: "clearfix overflow" },                                                                       // 18
            React.createElement(                                                                                      // 19
              "div",                                                                                                  // 19
              { className: "col-md-2 no_pad" },                                                                       // 19
              React.createElement(                                                                                    // 20
                "div",                                                                                                // 20
                { className: "collapse navbar-collapse navbar-ex1-collapse" },                                        // 20
                React.createElement(                                                                                  // 21
                  "ul",                                                                                               // 21
                  { className: "nav navbar-nav side-nav" },                                                           // 21
                  React.createElement(                                                                                // 22
                    "li",                                                                                             // 22
                    { className: "dropdown" },                                                                        // 22
                    React.createElement(                                                                              // 22
                      "a",                                                                                            // 22
                      { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                         // 22
                      React.createElement("i", { className: "fa fa-user" }),                                          // 22
                      "CLIENT",                                                                                       // 22
                      React.createElement("b", { className: "caret" })                                                // 22
                    ),                                                                                                // 22
                    React.createElement(                                                                              // 23
                      "ul",                                                                                           // 23
                      { className: "dropdown-menu" },                                                                 // 23
                      React.createElement(                                                                            // 24
                        "li",                                                                                         // 24
                        null,                                                                                         // 24
                        React.createElement(                                                                          // 24
                          "a",                                                                                        // 24
                          { href: "#" },                                                                              // 24
                          "Add Client"                                                                                // 24
                        )                                                                                             // 24
                      ),                                                                                              // 24
                      React.createElement(                                                                            // 25
                        "li",                                                                                         // 25
                        null,                                                                                         // 25
                        React.createElement(                                                                          // 25
                          "a",                                                                                        // 25
                          { href: "#" },                                                                              // 25
                          "Manage Client"                                                                             // 25
                        )                                                                                             // 25
                      )                                                                                               // 25
                    )                                                                                                 // 23
                  ),                                                                                                  // 22
                  React.createElement(                                                                                // 28
                    "li",                                                                                             // 28
                    { className: "dropdown" },                                                                        // 28
                    React.createElement(                                                                              // 28
                      "a",                                                                                            // 28
                      { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                         // 28
                      React.createElement("i", { className: "fa fa-file" }),                                          // 28
                      "FORM",                                                                                         // 28
                      React.createElement("b", { className: "caret" })                                                // 28
                    ),                                                                                                // 28
                    React.createElement(                                                                              // 29
                      "ul",                                                                                           // 29
                      { className: "dropdown-menu" },                                                                 // 29
                      React.createElement(                                                                            // 30
                        "li",                                                                                         // 30
                        null,                                                                                         // 30
                        React.createElement(                                                                          // 30
                          "a",                                                                                        // 30
                          { href: "#" },                                                                              // 30
                          "Add Form"                                                                                  // 30
                        )                                                                                             // 30
                      ),                                                                                              // 30
                      React.createElement(                                                                            // 31
                        "li",                                                                                         // 31
                        null,                                                                                         // 31
                        React.createElement(                                                                          // 31
                          "a",                                                                                        // 31
                          { href: "#" },                                                                              // 31
                          "Manage Form"                                                                               // 31
                        )                                                                                             // 31
                      )                                                                                               // 31
                    )                                                                                                 // 29
                  ),                                                                                                  // 28
                  React.createElement(                                                                                // 34
                    "li",                                                                                             // 34
                    { className: "dropdown" },                                                                        // 34
                    React.createElement(                                                                              // 34
                      "a",                                                                                            // 34
                      { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                         // 34
                      React.createElement("i", { className: "fa fa-user" }),                                          // 34
                      "USER",                                                                                         // 34
                      React.createElement("b", { className: "caret" })                                                // 34
                    ),                                                                                                // 34
                    React.createElement(                                                                              // 35
                      "ul",                                                                                           // 35
                      { className: "dropdown-menu" },                                                                 // 35
                      React.createElement(                                                                            // 36
                        "li",                                                                                         // 36
                        null,                                                                                         // 36
                        React.createElement(                                                                          // 36
                          "a",                                                                                        // 36
                          { href: "#" },                                                                              // 36
                          "Add User"                                                                                  // 36
                        )                                                                                             // 36
                      ),                                                                                              // 36
                      React.createElement(                                                                            // 37
                        "li",                                                                                         // 37
                        null,                                                                                         // 37
                        React.createElement(                                                                          // 37
                          "a",                                                                                        // 37
                          { href: "#" },                                                                              // 37
                          "Manage User"                                                                               // 37
                        )                                                                                             // 37
                      )                                                                                               // 37
                    )                                                                                                 // 35
                  ),                                                                                                  // 34
                  React.createElement(                                                                                // 40
                    "li",                                                                                             // 40
                    { className: "dropdown" },                                                                        // 40
                    React.createElement(                                                                              // 40
                      "a",                                                                                            // 40
                      { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                         // 40
                      React.createElement("i", { className: "fa fa-bar-chart-o" }),                                   // 40
                      "MAP",                                                                                          // 40
                      React.createElement("b", { className: "caret" })                                                // 40
                    ),                                                                                                // 40
                    React.createElement(                                                                              // 41
                      "ul",                                                                                           // 41
                      { className: "dropdown-menu" },                                                                 // 41
                      React.createElement(                                                                            // 42
                        "li",                                                                                         // 42
                        null,                                                                                         // 42
                        React.createElement(                                                                          // 42
                          "a",                                                                                        // 42
                          { href: "#" },                                                                              // 42
                          "Client Map"                                                                                // 42
                        )                                                                                             // 42
                      ),                                                                                              // 42
                      React.createElement(                                                                            // 43
                        "li",                                                                                         // 43
                        null,                                                                                         // 43
                        React.createElement(                                                                          // 43
                          "a",                                                                                        // 43
                          { href: "#" },                                                                              // 43
                          "Mapining Management"                                                                       // 43
                        )                                                                                             // 43
                      )                                                                                               // 43
                    )                                                                                                 // 41
                  )                                                                                                   // 40
                )                                                                                                     // 21
              )                                                                                                       // 20
            )                                                                                                         // 19
          )                                                                                                           // 18
        ),                                                                                                            // 17
        React.createElement(                                                                                          // 51
          "div",                                                                                                      // 51
          { className: "footer no_margin" },                                                                          // 51
          React.createElement(                                                                                        // 52
            "ul",                                                                                                     // 52
            null,                                                                                                     // 52
            React.createElement(                                                                                      // 53
              "li",                                                                                                   // 53
              null,                                                                                                   // 53
              React.createElement(                                                                                    // 53
                "a",                                                                                                  // 53
                { href: "#" },                                                                                        // 53
                "Home"                                                                                                // 53
              )                                                                                                       // 53
            ),                                                                                                        // 53
            React.createElement(                                                                                      // 54
              "li",                                                                                                   // 54
              null,                                                                                                   // 54
              React.createElement(                                                                                    // 54
                "a",                                                                                                  // 54
                { href: "#" },                                                                                        // 54
                "About Us"                                                                                            // 54
              )                                                                                                       // 54
            ),                                                                                                        // 54
            React.createElement(                                                                                      // 55
              "li",                                                                                                   // 55
              null,                                                                                                   // 55
              React.createElement(                                                                                    // 55
                "a",                                                                                                  // 55
                { href: "#" },                                                                                        // 55
                "Services"                                                                                            // 55
              )                                                                                                       // 55
            ),                                                                                                        // 55
            React.createElement(                                                                                      // 56
              "li",                                                                                                   // 56
              null,                                                                                                   // 56
              React.createElement(                                                                                    // 56
                "a",                                                                                                  // 56
                { href: "#" },                                                                                        // 56
                "Projects"                                                                                            // 56
              )                                                                                                       // 56
            )                                                                                                         // 56
          )                                                                                                           // 52
        ),                                                                                                            // 51
        React.createElement("script", { src: "/js/jquery-1.10.2.js" }),                                               // 59
        React.createElement("script", { src: "/js/bootstrap.js" }),                                                   // 60
        React.createElement("script", { src: "http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js" }),
        React.createElement("script", { src: "http://cdn.oesmith.co.uk/morris-0.4.3.min.js" }),                       // 64
        React.createElement("script", { src: "/js/jquery.tablesorter.js" }),                                          // 65
        React.createElement("script", { src: "/js/tables.js" })                                                       // 66
      );                                                                                                              // 8
    }                                                                                                                 // 70
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return Dashboard;                                                                                                   //
}(Component);                                                                                                         //
                                                                                                                      //
module.export("default",exports.default=(Dashboard));                                                                 //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ForgotPassword.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/ForgotPassword.jsx                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck;module.import("babel-runtime/helpers/classCallCheck",{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import("babel-runtime/helpers/possibleConstructorReturn",{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import("babel-runtime/helpers/inherits",{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                                      //
                                                                                                                      //
                                                                                                                      // 1
                                                                                                                      //
// App component - represents the whole app                                                                           //
                                                                                                                      //
var ForgotPassword = function (_Component) {                                                                          //
  _inherits(ForgotPassword, _Component);                                                                              //
                                                                                                                      //
  function ForgotPassword() {                                                                                         //
    _classCallCheck(this, ForgotPassword);                                                                            //
                                                                                                                      //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                       //
  }                                                                                                                   //
                                                                                                                      //
  ForgotPassword.prototype.render = function () {                                                                     //
    function render() {                                                                                               //
      return React.createElement(                                                                                     // 8
        "body",                                                                                                       // 9
        null,                                                                                                         // 9
        React.createElement(                                                                                          // 10
          "div",                                                                                                      // 10
          { className: "hed_top" },                                                                                   // 10
          React.createElement(                                                                                        // 11
            "div",                                                                                                    // 11
            { className: "mid_container" },                                                                           // 11
            React.createElement(                                                                                      // 12
              "div",                                                                                                  // 12
              { className: "logoin" },                                                                                // 12
              React.createElement("img", { src: "images/logo.jpg" })                                                  // 12
            )                                                                                                         // 12
          )                                                                                                           // 11
        ),                                                                                                            // 10
        React.createElement(                                                                                          // 15
          "div",                                                                                                      // 15
          { className: "mid_content" },                                                                               // 15
          React.createElement(                                                                                        // 16
            "div",                                                                                                    // 16
            { className: "login_col" },                                                                               // 16
            React.createElement("div", { className: "card" }),                                                        // 17
            React.createElement(                                                                                      // 18
              "div",                                                                                                  // 18
              { className: "card" },                                                                                  // 18
              React.createElement(                                                                                    // 19
                "h1",                                                                                                 // 19
                { className: "title" },                                                                               // 19
                "Forget Password"                                                                                     // 19
              ),                                                                                                      // 19
              React.createElement(                                                                                    // 20
                "form",                                                                                               // 20
                null,                                                                                                 // 20
                React.createElement(                                                                                  // 22
                  "div",                                                                                              // 22
                  { className: "input-container" },                                                                   // 22
                  React.createElement("input", { type: "text", id: "Username", required: "required" }),               // 23
                  React.createElement(                                                                                // 24
                    "label",                                                                                          // 24
                    { "for": "Username" },                                                                            // 24
                    "Email Id"                                                                                        // 24
                  ),                                                                                                  // 24
                  React.createElement("div", { className: "bar" })                                                    // 25
                ),                                                                                                    // 22
                React.createElement(                                                                                  // 27
                  "div",                                                                                              // 27
                  { className: "input-container" },                                                                   // 27
                  React.createElement("input", { type: "text", id: "Password", required: "required" }),               // 28
                  React.createElement(                                                                                // 29
                    "label",                                                                                          // 29
                    { "for": "Password" },                                                                            // 29
                    "User Name"                                                                                       // 29
                  ),                                                                                                  // 29
                  React.createElement("div", { className: "bar" })                                                    // 30
                ),                                                                                                    // 27
                React.createElement(                                                                                  // 32
                  "div",                                                                                              // 32
                  { className: "button-container" },                                                                  // 32
                  React.createElement(                                                                                // 33
                    "button",                                                                                         // 33
                    null,                                                                                             // 33
                    React.createElement(                                                                              // 33
                      "span",                                                                                         // 33
                      null,                                                                                           // 33
                      "ok"                                                                                            // 33
                    )                                                                                                 // 33
                  )                                                                                                   // 33
                )                                                                                                     // 32
              )                                                                                                       // 20
            )                                                                                                         // 18
          )                                                                                                           // 16
        )                                                                                                             // 15
      );                                                                                                              // 9
    }                                                                                                                 // 45
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return ForgotPassword;                                                                                              //
}(Component);                                                                                                         //
                                                                                                                      //
module.export("default",exports.default=(ForgotPassword));                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Login.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/Login.jsx                                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                                      //
                                                                                                                      //
                                                                                                                      // 1
                                                                                                                      //
// App component - represents the whole app                                                                           //
                                                                                                                      //
var Login = function (_Component) {                                                                                   //
  _inherits(Login, _Component);                                                                                       //
                                                                                                                      //
  function Login() {                                                                                                  //
    _classCallCheck(this, Login);                                                                                     //
                                                                                                                      //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                       //
  }                                                                                                                   //
                                                                                                                      //
  Login.prototype.switch_to_frgt_pwd = function () {                                                                  //
    function switch_to_frgt_pwd() {                                                                                   //
      FlowRouter.go('ForgotPassword.jsx');                                                                            // 8
    }                                                                                                                 // 9
                                                                                                                      //
    return switch_to_frgt_pwd;                                                                                        //
  }();                                                                                                                //
                                                                                                                      //
  Login.prototype.render = function () {                                                                              //
    function render() {                                                                                               //
      return React.createElement(                                                                                     // 12
        'body',                                                                                                       // 13
        null,                                                                                                         // 13
        React.createElement(                                                                                          // 14
          'div',                                                                                                      // 14
          { className: 'hed_top' },                                                                                   // 14
          React.createElement(                                                                                        // 16
            'div',                                                                                                    // 16
            { className: 'mid_container' },                                                                           // 16
            React.createElement(                                                                                      // 17
              'div',                                                                                                  // 17
              { className: 'logoin' },                                                                                // 17
              'Appitude'                                                                                              // 17
            )                                                                                                         // 17
          )                                                                                                           // 16
        ),                                                                                                            // 14
        React.createElement(                                                                                          // 20
          'div',                                                                                                      // 20
          { className: 'mid_content' },                                                                               // 20
          React.createElement(                                                                                        // 21
            'div',                                                                                                    // 21
            { className: 'login_col' },                                                                               // 21
            React.createElement('div', { className: 'card' }),                                                        // 22
            React.createElement(                                                                                      // 23
              'div',                                                                                                  // 23
              { className: 'card' },                                                                                  // 23
              React.createElement(                                                                                    // 24
                'h1',                                                                                                 // 24
                { className: 'title' },                                                                               // 24
                'Login'                                                                                               // 24
              ),                                                                                                      // 24
              React.createElement(                                                                                    // 25
                'form',                                                                                               // 25
                null,                                                                                                 // 25
                React.createElement(                                                                                  // 27
                  'div',                                                                                              // 27
                  { className: 'input-container' },                                                                   // 27
                  React.createElement('input', { type: 'text', id: 'Username', required: 'required' }),               // 28
                  React.createElement(                                                                                // 29
                    'label',                                                                                          // 29
                    { 'for': 'Username' },                                                                            // 29
                    'User Name'                                                                                       // 29
                  ),                                                                                                  // 29
                  React.createElement('div', { className: 'bar' })                                                    // 30
                ),                                                                                                    // 27
                React.createElement(                                                                                  // 32
                  'div',                                                                                              // 32
                  { className: 'input-container' },                                                                   // 32
                  React.createElement('input', { type: 'password', id: 'Password', required: 'required' }),           // 33
                  React.createElement(                                                                                // 34
                    'label',                                                                                          // 34
                    { 'for': 'Password' },                                                                            // 34
                    'Password'                                                                                        // 34
                  ),                                                                                                  // 34
                  React.createElement('div', { className: 'bar' })                                                    // 35
                ),                                                                                                    // 32
                React.createElement(                                                                                  // 37
                  'div',                                                                                              // 37
                  { className: 'button-container' },                                                                  // 37
                  React.createElement(                                                                                // 38
                    'button',                                                                                         // 38
                    null,                                                                                             // 38
                    React.createElement(                                                                              // 38
                      'span',                                                                                         // 38
                      null,                                                                                           // 38
                      'submit'                                                                                        // 38
                    )                                                                                                 // 38
                  )                                                                                                   // 38
                ),                                                                                                    // 37
                React.createElement(                                                                                  // 40
                  'div',                                                                                              // 40
                  { className: 'sign' },                                                                              // 40
                  React.createElement(                                                                                // 40
                    'a',                                                                                              // 40
                    { href: '#' },                                                                                    // 40
                    'New Registration'                                                                                // 40
                  ),                                                                                                  // 40
                  '  ',                                                                                               // 40
                  React.createElement(                                                                                // 40
                    'a',                                                                                              // 40
                    { href: '/ForgotPassword' },                                                                      // 40
                    'Forget Password'                                                                                 // 40
                  )                                                                                                   // 40
                )                                                                                                     // 40
              )                                                                                                       // 25
            )                                                                                                         // 23
          )                                                                                                           // 21
        )                                                                                                             // 20
      );                                                                                                              // 13
    }                                                                                                                 // 50
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return Login;                                                                                                       //
}(Component);                                                                                                         //
                                                                                                                      //
module.export("default",exports.default=(Login));                                                                     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Registration.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/Registration.jsx                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                                      //
                                                                                                                      //
                                                                                                                      // 1
                                                                                                                      //
// App component - represents the whole app                                                                           //
                                                                                                                      //
var Registration = function (_Component) {                                                                            //
  _inherits(Registration, _Component);                                                                                //
                                                                                                                      //
  function Registration() {                                                                                           //
    _classCallCheck(this, Registration);                                                                              //
                                                                                                                      //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                       //
  }                                                                                                                   //
                                                                                                                      //
  Registration.prototype.user_registration = function () {                                                            //
    function user_registration() {                                                                                    //
                                                                                                                      //
      //db.User.remove();                                                                                             //
                                                                                                                      //
      var user_id;                                                                                                    // 13
      if (User.find().count() == 0) {                                                                                 // 14
        user_id = 1;                                                                                                  // 15
      } else {                                                                                                        // 16
        user_id = User.find().count() + 1;                                                                            // 18
      }                                                                                                               // 19
                                                                                                                      //
      var sex;                                                                                                        // 23
      if (document.getElementById('male').checked) {                                                                  // 24
        sex = document.getElementById('male').value;                                                                  // 25
      } else if (document.getElementById('female').checked) {                                                         // 26
        sex = document.getElementById('female').value;                                                                // 28
      }                                                                                                               // 29
                                                                                                                      //
      var uname = $("#uname").val();                                                                                  // 32
      var fname = $("#fname").val();                                                                                  // 33
      var lname = $("#lname").val();                                                                                  // 34
      var mail = $("#mail").val();                                                                                    // 35
      var pwd = $("#pwd").val();                                                                                      // 36
      var addr = $("#addr").val();                                                                                    // 37
      var dob = $("#dob").val();                                                                                      // 38
      var mob = $("#mob").val();                                                                                      // 39
      var squestion = $("#squestion").val();                                                                          // 40
      var sanswer = $("#sanswer").val();                                                                              // 41
                                                                                                                      //
      User.insert({                                                                                                   // 44
        user_id: user_id,                                                                                             // 45
        role_id: "",                                                                                                  // 46
        userName: uname,                                                                                              // 47
        password: pwd,                                                                                                // 48
        firstName: fname,                                                                                             // 49
        lastName: lname,                                                                                              // 50
        date_of_birth: dob,                                                                                           // 51
        sex: sex,                                                                                                     // 52
        email: mail,                                                                                                  // 53
        mobile: mob,                                                                                                  // 54
        address: addr,                                                                                                // 55
        is_active: "0",                                                                                               // 56
        registraion_accepted_by: "0",                                                                                 // 57
        created_by: "1",                                                                                              // 58
        created_date_time: new Date(),                                                                                // 59
        last_modified_date_time: new Date(),                                                                          // 60
        last_modified_by: "1",                                                                                        // 61
        security_question: squestion,                                                                                 // 62
        security_answer: sanswer                                                                                      // 63
      });                                                                                                             // 44
                                                                                                                      //
      alert("Registration success...");                                                                               // 66
    }                                                                                                                 // 67
                                                                                                                      //
    return user_registration;                                                                                         //
  }();                                                                                                                //
                                                                                                                      //
  Registration.prototype.render = function () {                                                                       //
    function render() {                                                                                               //
      return React.createElement(                                                                                     // 72
        'body',                                                                                                       // 73
        null,                                                                                                         // 73
        React.createElement(                                                                                          // 74
          'div',                                                                                                      // 74
          { className: 'hed_top' },                                                                                   // 74
          React.createElement(                                                                                        // 76
            'div',                                                                                                    // 76
            { className: 'mid_container' },                                                                           // 76
            React.createElement(                                                                                      // 77
              'div',                                                                                                  // 77
              { className: 'logoin' },                                                                                // 77
              'Appitude'                                                                                              // 77
            )                                                                                                         // 77
          )                                                                                                           // 76
        ),                                                                                                            // 74
        React.createElement(                                                                                          // 80
          'div',                                                                                                      // 80
          { className: 'mid_content registration_form' },                                                             // 80
          React.createElement(                                                                                        // 81
            'div',                                                                                                    // 81
            { className: 'container' },                                                                               // 81
            React.createElement(                                                                                      // 82
              'div',                                                                                                  // 82
              { className: 'col-md-6 col-md-offset-3' },                                                              // 82
              React.createElement('div', { className: 'card' }),                                                      // 83
              React.createElement(                                                                                    // 84
                'div',                                                                                                // 84
                { className: 'card' },                                                                                // 84
                React.createElement(                                                                                  // 85
                  'h1',                                                                                               // 85
                  { className: 'title' },                                                                             // 85
                  'Registration'                                                                                      // 85
                ),                                                                                                    // 85
                React.createElement(                                                                                  // 86
                  'form',                                                                                             // 86
                  { className: 'form_pad' },                                                                          // 86
                  React.createElement(                                                                                // 87
                    'div',                                                                                            // 87
                    { className: 'row' },                                                                             // 87
                    React.createElement(                                                                              // 88
                      'div',                                                                                          // 88
                      { className: 'col-md-6' },                                                                      // 88
                      React.createElement(                                                                            // 89
                        'div',                                                                                        // 89
                        { className: 'input-container' },                                                             // 89
                        React.createElement('input', { type: 'text', required: 'required', id: 'uname' }),            // 90
                        React.createElement(                                                                          // 91
                          'label',                                                                                    // 91
                          { 'for': '' },                                                                              // 91
                          'User Name'                                                                                 // 91
                        ),                                                                                            // 91
                        React.createElement('div', { className: 'bar' })                                              // 92
                      ),                                                                                              // 89
                      React.createElement(                                                                            // 94
                        'div',                                                                                        // 94
                        { className: 'input-container' },                                                             // 94
                        React.createElement('input', { type: 'text', required: 'required', id: 'fname' }),            // 95
                        React.createElement(                                                                          // 96
                          'label',                                                                                    // 96
                          { 'for': ' ' },                                                                             // 96
                          'First Name'                                                                                // 96
                        ),                                                                                            // 96
                        React.createElement('div', { className: 'bar' })                                              // 97
                      ),                                                                                              // 94
                      React.createElement(                                                                            // 99
                        'div',                                                                                        // 99
                        { className: 'input-container' },                                                             // 99
                        React.createElement('input', { type: 'text', required: 'required', id: 'lname' }),            // 100
                        React.createElement(                                                                          // 101
                          'label',                                                                                    // 101
                          { 'for': ' ' },                                                                             // 101
                          'Last Name'                                                                                 // 101
                        ),                                                                                            // 101
                        React.createElement('div', { className: 'bar' })                                              // 102
                      ),                                                                                              // 99
                      React.createElement(                                                                            // 104
                        'div',                                                                                        // 104
                        { className: 'input-container' },                                                             // 104
                        React.createElement('input', { type: 'text', required: 'required', id: 'mail' }),             // 105
                        React.createElement(                                                                          // 106
                          'label',                                                                                    // 106
                          { 'for': ' ' },                                                                             // 106
                          'Email Id'                                                                                  // 106
                        ),                                                                                            // 106
                        React.createElement('div', { className: 'bar' })                                              // 107
                      ),                                                                                              // 104
                      React.createElement(                                                                            // 109
                        'div',                                                                                        // 109
                        { className: 'input-container' },                                                             // 109
                        React.createElement('input', { type: 'password', required: 'required', id: 'pwd' }),          // 110
                        React.createElement(                                                                          // 111
                          'label',                                                                                    // 111
                          { 'for': ' ' },                                                                             // 111
                          'Password'                                                                                  // 111
                        ),                                                                                            // 111
                        React.createElement('div', { className: 'bar' })                                              // 112
                      ),                                                                                              // 109
                      React.createElement(                                                                            // 114
                        'div',                                                                                        // 114
                        { className: 'input-container' },                                                             // 114
                        React.createElement('input', { type: 'text', required: 'required', id: 'addr' }),             // 115
                        React.createElement(                                                                          // 116
                          'label',                                                                                    // 116
                          { 'for': ' ' },                                                                             // 116
                          'Parmanent Address'                                                                         // 116
                        ),                                                                                            // 116
                        React.createElement('div', { className: 'bar' })                                              // 117
                      )                                                                                               // 114
                    ),                                                                                                // 88
                    React.createElement(                                                                              // 121
                      'div',                                                                                          // 121
                      { className: 'col-md-6' },                                                                      // 121
                      React.createElement(                                                                            // 122
                        'div',                                                                                        // 122
                        { className: 'input-container' },                                                             // 122
                        React.createElement('input', { type: 'text', required: 'required', placeholder: '', id: 'dob' }),
                        React.createElement(                                                                          // 124
                          'label',                                                                                    // 124
                          { 'for': ' ' },                                                                             // 124
                          'Date Of Birth'                                                                             // 124
                        ),                                                                                            // 124
                        React.createElement('div', { className: 'bar' })                                              // 125
                      ),                                                                                              // 122
                      React.createElement(                                                                            // 127
                        'div',                                                                                        // 127
                        { className: 'input-container gender' },                                                      // 127
                        React.createElement(                                                                          // 128
                          'div',                                                                                      // 128
                          null,                                                                                       // 128
                          ' Gender'                                                                                   // 128
                        ),                                                                                            // 128
                        React.createElement(                                                                          // 129
                          'span',                                                                                     // 129
                          null,                                                                                       // 129
                          React.createElement('input', { type: 'radio', name: 'm', id: 'male' }),                     // 130
                          'Male'                                                                                      // 129
                        ),                                                                                            // 129
                        ' ',                                                                                          // 127
                        React.createElement(                                                                          // 131
                          'span',                                                                                     // 131
                          null,                                                                                       // 131
                          React.createElement('input', { type: 'radio', name: 'm', id: 'female' }),                   // 132
                          'Female '                                                                                   // 131
                        )                                                                                             // 131
                      ),                                                                                              // 127
                      React.createElement(                                                                            // 134
                        'div',                                                                                        // 134
                        { className: 'input-container' },                                                             // 134
                        React.createElement('input', { type: 'num', required: 'required', id: 'mob' }),               // 135
                        React.createElement(                                                                          // 136
                          'label',                                                                                    // 136
                          { 'for': ' ' },                                                                             // 136
                          'Phone No'                                                                                  // 136
                        ),                                                                                            // 136
                        React.createElement('div', { className: 'bar' })                                              // 137
                      ),                                                                                              // 134
                      React.createElement(                                                                            // 139
                        'div',                                                                                        // 139
                        { className: 'input-container' },                                                             // 139
                        React.createElement('input', { type: 'text', required: 'required', id: 'squestion' }),        // 140
                        React.createElement(                                                                          // 141
                          'label',                                                                                    // 141
                          { 'for': ' ' },                                                                             // 141
                          'Security Question'                                                                         // 141
                        ),                                                                                            // 141
                        React.createElement('div', { className: 'bar' })                                              // 142
                      ),                                                                                              // 139
                      React.createElement(                                                                            // 144
                        'div',                                                                                        // 144
                        { className: 'input-container' },                                                             // 144
                        React.createElement('input', { type: 'text', required: 'required', id: 'sanswer' }),          // 145
                        React.createElement(                                                                          // 146
                          'label',                                                                                    // 146
                          { 'for': ' ' },                                                                             // 146
                          'Security Answer'                                                                           // 146
                        ),                                                                                            // 146
                        React.createElement('div', { className: 'bar' })                                              // 147
                      )                                                                                               // 144
                    )                                                                                                 // 121
                  ),                                                                                                  // 87
                  React.createElement(                                                                                // 153
                    'div',                                                                                            // 153
                    { className: 'button-container' },                                                                // 153
                    React.createElement(                                                                              // 154
                      'button',                                                                                       // 154
                      { onClick: this.user_registration },                                                            // 154
                      React.createElement(                                                                            // 154
                        'span',                                                                                       // 154
                        null,                                                                                         // 154
                        'SAVE'                                                                                        // 154
                      )                                                                                               // 154
                    )                                                                                                 // 154
                  )                                                                                                   // 153
                )                                                                                                     // 86
              )                                                                                                       // 84
            )                                                                                                         // 82
          )                                                                                                           // 81
        )                                                                                                             // 80
      );                                                                                                              // 73
    }                                                                                                                 // 166
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return Registration;                                                                                                //
}(Component);                                                                                                         //
                                                                                                                      //
module.export("default",exports.default=(Registration));                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"collections":{"init.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// collections/init.js                                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Role = new Mongo.Collection('role');                                                                                  // 1
User = new Mongo.Collection('user');                                                                                  // 2
                                                                                                                      //
Role.allow({                                                                                                          // 5
	insert: function () {                                                                                                // 6
		function insert(userId, doc) {                                                                                      // 6
			return true;                                                                                                       // 7
		}                                                                                                                   // 8
                                                                                                                      //
		return insert;                                                                                                      // 6
	}(),                                                                                                                 // 6
	update: function () {                                                                                                // 9
		function update(userId, doc) {                                                                                      // 9
			return true;                                                                                                       // 10
		}                                                                                                                   // 11
                                                                                                                      //
		return update;                                                                                                      // 9
	}()                                                                                                                  // 9
});                                                                                                                   // 5
                                                                                                                      //
User.allow({                                                                                                          // 14
	insert: function () {                                                                                                // 15
		function insert(userId, doc) {                                                                                      // 15
			return true;                                                                                                       // 16
		}                                                                                                                   // 17
                                                                                                                      //
		return insert;                                                                                                      // 15
	}(),                                                                                                                 // 15
	update: function () {                                                                                                // 18
		function update(userId, doc) {                                                                                      // 18
			return true;                                                                                                       // 19
		}                                                                                                                   // 20
                                                                                                                      //
		return update;                                                                                                      // 18
	}(),                                                                                                                 // 18
	remove: function () {                                                                                                // 21
		function remove(userId, doc) {                                                                                      // 21
			return true;                                                                                                       // 22
		}                                                                                                                   // 23
                                                                                                                      //
		return remove;                                                                                                      // 21
	}()                                                                                                                  // 21
});                                                                                                                   // 14
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css",".jsx"]});
require("./client/template.main.js");
require("./client/js/regiatration.js");
require("./collections/init.js");
require("./client/main.jsx");