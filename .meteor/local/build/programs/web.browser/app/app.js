var require = meteorInstall({"client":{"template.main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/template.main.js                                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.body.addContent((function() {                                                                               // 2
  var view = this;                                                                                                   // 3
  return HTML.Raw('<div id="render-target"></div>');                                                                 // 4
}));                                                                                                                 // 5
Meteor.startup(Template.body.renderToDocument);                                                                      // 6
                                                                                                                     // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.jsx":["react","meteor/meteor","react-dom","meteor/kadira:flow-router","react-mounter","../imports/ui/Registration.jsx","../imports/ui/AddClient.jsx","../imports/ui/Login.jsx","../imports/ui/ManageUser.jsx","../imports/ui/ManageClient.jsx","../imports/ui/ForgotPassword.jsx",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/main.jsx                                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var React;module.import('react',{"default":function(v){React=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var render;module.import('react-dom',{"render":function(v){render=v}});var FlowRouter;module.import('meteor/kadira:flow-router',{"FlowRouter":function(v){FlowRouter=v}});var mount;module.import('react-mounter',{"mount":function(v){mount=v}});var Registration;module.import('../imports/ui/Registration.jsx',{"default":function(v){Registration=v}});var AddClient;module.import('../imports/ui/AddClient.jsx',{"default":function(v){AddClient=v}});var Login;module.import('../imports/ui/Login.jsx',{"default":function(v){Login=v}});var ManageUser;module.import('../imports/ui/ManageUser.jsx',{"default":function(v){ManageUser=v}});var ManageClient;module.import('../imports/ui/ManageClient.jsx',{"default":function(v){ManageClient=v}});var ForgotPassword;module.import('../imports/ui/ForgotPassword.jsx',{"default":function(v){ForgotPassword=v}});
                                                                                                                     // 2
                                                                                                                     // 3
                                                                                                                     // 4
                                                                                                                     // 5
                                                                                                                     //
                                                                                                                     // 7
                                                                                                                     // 8
                                                                                                                     // 9
                                                                                                                     // 10
                                                                                                                     // 11
                                                                                                                     // 12
                                                                                                                     //
var PageComponent = function PageComponent(_ref) {                                                                   // 14
  var name = _ref.name;                                                                                              // 14
  return React.createElement(                                                                                        // 14
    'body',                                                                                                          // 14
    null,                                                                                                            // 14
    name                                                                                                             // 14
  );                                                                                                                 // 14
};                                                                                                                   // 14
                                                                                                                     //
FlowRouter.route('/', {                                                                                              // 16
  name: 'Login',                                                                                                     // 17
  action: function () {                                                                                              // 18
    function action(params) {                                                                                        // 16
      mount(PageComponent, { name: React.createElement(Login, null) });                                              // 19
    }                                                                                                                // 20
                                                                                                                     //
    return action;                                                                                                   // 16
  }()                                                                                                                // 16
});                                                                                                                  // 16
                                                                                                                     //
FlowRouter.route('/ManageClient', {                                                                                  // 23
  name: 'ManageClient',                                                                                              // 24
  action: function () {                                                                                              // 25
    function action(params) {                                                                                        // 23
      mount(PageComponent, { name: React.createElement(ManageClient, null) });                                       // 26
    }                                                                                                                // 27
                                                                                                                     //
    return action;                                                                                                   // 23
  }()                                                                                                                // 23
});                                                                                                                  // 23
                                                                                                                     //
FlowRouter.route('/ManageUser', {                                                                                    // 30
  name: 'ManageUser',                                                                                                // 31
  action: function () {                                                                                              // 32
    function action(params) {                                                                                        // 30
      mount(PageComponent, { name: React.createElement(ManageUser, null) });                                         // 33
    }                                                                                                                // 34
                                                                                                                     //
    return action;                                                                                                   // 30
  }()                                                                                                                // 30
});                                                                                                                  // 30
                                                                                                                     //
FlowRouter.route('/AddClient', {                                                                                     // 37
  name: 'AddClient',                                                                                                 // 38
  action: function () {                                                                                              // 39
    function action(params) {                                                                                        // 37
      mount(PageComponent, { name: React.createElement(AddClient, null) });                                          // 40
    }                                                                                                                // 41
                                                                                                                     //
    return action;                                                                                                   // 37
  }()                                                                                                                // 37
});                                                                                                                  // 37
                                                                                                                     //
FlowRouter.route('/Registration', {                                                                                  // 44
  name: 'Registration',                                                                                              // 45
  action: function () {                                                                                              // 46
    function action(params) {                                                                                        // 44
      mount(PageComponent, { name: React.createElement(Registration, null) });                                       // 47
    }                                                                                                                // 48
                                                                                                                     //
    return action;                                                                                                   // 44
  }()                                                                                                                // 44
});                                                                                                                  // 44
                                                                                                                     //
FlowRouter.route('/ForgotPassword', {                                                                                // 51
  name: 'ForgotPassword',                                                                                            // 52
  action: function () {                                                                                              // 53
    function action(params) {                                                                                        // 51
      mount(PageComponent, { name: React.createElement(ForgotPassword, null) });                                     // 54
    }                                                                                                                // 55
                                                                                                                     //
    return action;                                                                                                   // 51
  }()                                                                                                                // 51
});                                                                                                                  // 51
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"imports":{"ui":{"AddClient.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/AddClient.jsx                                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck;module.import("babel-runtime/helpers/classCallCheck",{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import("babel-runtime/helpers/possibleConstructorReturn",{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import("babel-runtime/helpers/inherits",{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                                     //
                                                                                                                     //
                                                                                                                     // 1
                                                                                                                     //
var AddClient = function (_Component) {                                                                              //
		_inherits(AddClient, _Component);                                                                                  //
                                                                                                                     //
		function AddClient() {                                                                                             //
				_classCallCheck(this, AddClient);                                                                                //
                                                                                                                     //
				return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                      //
		}                                                                                                                  //
                                                                                                                     //
		AddClient.prototype.add_client = function () {                                                                     //
				function add_client() {                                                                                          //
                                                                                                                     //
						if ($("#client_id").val().trim() == "" || $("#company_name").val().trim() == "" || $("#addr").val().trim() == "" || $("#mail").val().trim() == "" || $("#mob").val().trim() == "" || $("#website").val().trim() == "" || $("#city").val().trim() == "" || $("#state").val().trim() == "" || $("#pin").val().trim() == "" || $("#contact_name").val().trim() == "" || $("#contact_number").val().trim() == "" || $("#job_title").val().trim() == "") {} else {
                                                                                                                     //
								var x = $("#mail").val();                                                                                    // 16
								var atpos = x.indexOf("@");                                                                                  // 17
								var dotpos = x.lastIndexOf(".");                                                                             // 18
								if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {                                             // 19
										$("#error-div-mail").show();                                                                               // 20
										setTimeout(function () {                                                                                   // 21
												$("#error-div-mail").hide();                                                                             // 21
										}, 5000);                                                                                                  // 21
								} else {                                                                                                     // 23
										var client_id = $("#client_id").val();                                                                     // 26
										var company_name = $("#company_name").val();                                                               // 27
										var company_address = $("#addr").val();                                                                    // 28
										var company_mail = $("#mail").val();                                                                       // 29
										var company_mobile = $("#mob").val();                                                                      // 30
										var company_website = $("#website").val();                                                                 // 31
										var company_city = $("#city").val();                                                                       // 32
										var company_state = $("#state").val();                                                                     // 33
										var company_pin = $("#pin").val();                                                                         // 34
										var company_contact_person_name = $("#contact_name").val();                                                // 35
										var company_contact_person_number = $("#contact_number").val();                                            // 36
										var company_contact_person_job_title = $("#job_title").val();                                              // 37
                                                                                                                     //
										var e = document.getElementById("country");                                                                // 39
										var company_country = e.options[e.selectedIndex].value;                                                    // 40
                                                                                                                     //
										if (Client.find({ email: company_mail }).fetch() != "") {                                                  // 47
												$("#error-div").show();                                                                                  // 48
												setTimeout(function () {                                                                                 // 49
														$("#error-div").hide();                                                                                // 49
												}, 5000);                                                                                                // 49
										} else {                                                                                                   // 50
                                                                                                                     //
												Client.insert({                                                                                          // 53
														client_id: client_id,                                                                                  // 54
														client_company_name: company_name,                                                                     // 55
														client_address: company_address,                                                                       // 56
														client_email: company_mail,                                                                            // 57
														client_phone_number: company_mobile,                                                                   // 58
														client_website: company_website,                                                                       // 59
														client_city: company_city,                                                                             // 60
														client_state: company_state,                                                                           // 61
														client_country: company_country,                                                                       // 62
														client_pin: company_pin,                                                                               // 63
														client_contact_person_name: company_contact_person_name,                                               // 64
														client_contact_person_number: company_contact_person_number,                                           // 65
														client_contact_person_job_title: company_contact_person_job_title,                                     // 66
														is_active: "1",                                                                                        // 67
														created_by_id: "1",                                                                                    // 68
														created_date_time: new Date(),                                                                         // 69
														last_modified_id: "1",                                                                                 // 70
														last_modified_date_time: new Date(),                                                                   // 71
														client_aptitude_url: company_name.toLowerCase() + ".aptitude.com",                                     // 72
														is_schema_generated: "0"                                                                               // 73
												});                                                                                                      // 53
										}                                                                                                          // 75
								}                                                                                                            // 78
						}                                                                                                              // 81
				}                                                                                                                // 84
                                                                                                                     //
				return add_client;                                                                                               //
		}();                                                                                                               //
                                                                                                                     //
		AddClient.prototype.set_client_id = function () {                                                                  //
				function set_client_id() {                                                                                       //
						var last_id;                                                                                                   // 87
						var item = Client.find().fetch();                                                                              // 88
						$.map(item, function (val) {                                                                                   // 89
								last_id = val.client_id;                                                                                     // 90
						});                                                                                                            // 91
						$("#client_id").val(parseInt(last_id) + 1);                                                                    // 92
				}                                                                                                                // 93
                                                                                                                     //
				return set_client_id;                                                                                            //
		}();                                                                                                               //
                                                                                                                     //
		AddClient.prototype.render = function () {                                                                         //
				function render() {                                                                                              //
						return React.createElement(                                                                                    // 98
								"div",                                                                                                       // 100
								{ id: "add" },                                                                                               // 100
								React.createElement(                                                                                         // 101
										"div",                                                                                                     // 101
										{ className: "hed_top" },                                                                                  // 101
										React.createElement(                                                                                       // 102
												"div",                                                                                                   // 102
												{ className: "mid_container" },                                                                          // 102
												React.createElement(                                                                                     // 103
														"div",                                                                                                 // 103
														{ className: "logo" },                                                                                 // 103
														"Aptitude"                                                                                             // 103
												),                                                                                                       // 103
												React.createElement(                                                                                     // 104
														"div",                                                                                                 // 104
														{ className: "hed_top_right" },                                                                        // 104
														React.createElement(                                                                                   // 105
																"label",                                                                                             // 105
																null,                                                                                                // 105
																"Logged in as Srinivas"                                                                              // 105
														),                                                                                                     // 105
														React.createElement(                                                                                   // 106
																"a",                                                                                                 // 106
																{ href: "#" },                                                                                       // 106
																React.createElement("img", { src: "/images/logout.png" }),                                           // 106
																"Log Out"                                                                                            // 106
														)                                                                                                      // 106
												)                                                                                                        // 104
										)                                                                                                          // 102
								),                                                                                                           // 101
								React.createElement(                                                                                         // 109
										"div",                                                                                                     // 109
										{ className: "no_pad clearfix" },                                                                          // 109
										React.createElement(                                                                                       // 110
												"div",                                                                                                   // 110
												{ className: "clearfix overflow" },                                                                      // 110
												React.createElement(                                                                                     // 111
														"div",                                                                                                 // 111
														{ className: "col-md-2 no_pad" },                                                                      // 111
														React.createElement(                                                                                   // 112
																"div",                                                                                               // 112
																{ className: "collapse navbar-collapse navbar-ex1-collapse" },                                       // 112
																React.createElement(                                                                                 // 113
																		"ul",                                                                                              // 113
																		{ className: "nav navbar-nav side-nav" },                                                          // 113
																		React.createElement(                                                                               // 114
																				"li",                                                                                            // 114
																				{ className: "dropdown" },                                                                       // 114
																				React.createElement(                                                                             // 114
																						"a",                                                                                           // 114
																						{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                        // 114
																						React.createElement("i", { className: "fa fa-user" }),                                         // 114
																						"CLIENT",                                                                                      // 114
																						React.createElement("b", { className: "caret" })                                               // 114
																				),                                                                                               // 114
																				React.createElement(                                                                             // 115
																						"ul",                                                                                          // 115
																						{ className: "dropdown-menu" },                                                                // 115
																						React.createElement(                                                                           // 116
																								"li",                                                                                        // 116
																								null,                                                                                        // 116
																								React.createElement(                                                                         // 116
																										"a",                                                                                       // 116
																										{ href: "#" },                                                                             // 116
																										"Add Client"                                                                               // 116
																								)                                                                                            // 116
																						),                                                                                             // 116
																						React.createElement(                                                                           // 117
																								"li",                                                                                        // 117
																								null,                                                                                        // 117
																								React.createElement(                                                                         // 117
																										"a",                                                                                       // 117
																										{ href: "#" },                                                                             // 117
																										"Manage Client"                                                                            // 117
																								)                                                                                            // 117
																						)                                                                                              // 117
																				)                                                                                                // 115
																		),                                                                                                 // 114
																		React.createElement(                                                                               // 120
																				"li",                                                                                            // 120
																				{ className: "dropdown" },                                                                       // 120
																				React.createElement(                                                                             // 120
																						"a",                                                                                           // 120
																						{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                        // 120
																						React.createElement("i", { className: "fa fa-file" }),                                         // 120
																						"FORM",                                                                                        // 120
																						React.createElement("b", { className: "caret" })                                               // 120
																				),                                                                                               // 120
																				React.createElement(                                                                             // 121
																						"ul",                                                                                          // 121
																						{ className: "dropdown-menu" },                                                                // 121
																						React.createElement(                                                                           // 122
																								"li",                                                                                        // 122
																								null,                                                                                        // 122
																								React.createElement(                                                                         // 122
																										"a",                                                                                       // 122
																										{ href: "#" },                                                                             // 122
																										"Add Form"                                                                                 // 122
																								)                                                                                            // 122
																						),                                                                                             // 122
																						React.createElement(                                                                           // 123
																								"li",                                                                                        // 123
																								null,                                                                                        // 123
																								React.createElement(                                                                         // 123
																										"a",                                                                                       // 123
																										{ href: "#" },                                                                             // 123
																										"Manage Form"                                                                              // 123
																								)                                                                                            // 123
																						)                                                                                              // 123
																				)                                                                                                // 121
																		),                                                                                                 // 120
																		React.createElement(                                                                               // 126
																				"li",                                                                                            // 126
																				{ className: "dropdown" },                                                                       // 126
																				React.createElement(                                                                             // 126
																						"a",                                                                                           // 126
																						{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                        // 126
																						React.createElement("i", { className: "fa fa-user" }),                                         // 126
																						"USER",                                                                                        // 126
																						React.createElement("b", { className: "caret" })                                               // 126
																				),                                                                                               // 126
																				React.createElement(                                                                             // 127
																						"ul",                                                                                          // 127
																						{ className: "dropdown-menu" },                                                                // 127
																						React.createElement(                                                                           // 128
																								"li",                                                                                        // 128
																								null,                                                                                        // 128
																								React.createElement(                                                                         // 128
																										"a",                                                                                       // 128
																										{ href: "#" },                                                                             // 128
																										"Add User"                                                                                 // 128
																								)                                                                                            // 128
																						),                                                                                             // 128
																						React.createElement(                                                                           // 129
																								"li",                                                                                        // 129
																								null,                                                                                        // 129
																								React.createElement(                                                                         // 129
																										"a",                                                                                       // 129
																										{ href: "#" },                                                                             // 129
																										"Manage User"                                                                              // 129
																								)                                                                                            // 129
																						)                                                                                              // 129
																				)                                                                                                // 127
																		),                                                                                                 // 126
																		React.createElement(                                                                               // 132
																				"li",                                                                                            // 132
																				{ className: "dropdown" },                                                                       // 132
																				React.createElement(                                                                             // 132
																						"a",                                                                                           // 132
																						{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                        // 132
																						React.createElement("i", { className: "fa fa-bar-chart-o" }),                                  // 132
																						"MAP",                                                                                         // 132
																						React.createElement("b", { className: "caret" })                                               // 132
																				),                                                                                               // 132
																				React.createElement(                                                                             // 133
																						"ul",                                                                                          // 133
																						{ className: "dropdown-menu" },                                                                // 133
																						React.createElement(                                                                           // 134
																								"li",                                                                                        // 134
																								null,                                                                                        // 134
																								React.createElement(                                                                         // 134
																										"a",                                                                                       // 134
																										{ href: "#" },                                                                             // 134
																										"Client Map"                                                                               // 134
																								)                                                                                            // 134
																						),                                                                                             // 134
																						React.createElement(                                                                           // 135
																								"li",                                                                                        // 135
																								null,                                                                                        // 135
																								React.createElement(                                                                         // 135
																										"a",                                                                                       // 135
																										{ href: "#" },                                                                             // 135
																										"Mapining Management"                                                                      // 135
																								)                                                                                            // 135
																						)                                                                                              // 135
																				)                                                                                                // 133
																		)                                                                                                  // 132
																)                                                                                                    // 113
														)                                                                                                      // 112
												),                                                                                                       // 111
												React.createElement(                                                                                     // 141
														"div",                                                                                                 // 141
														{ className: "col-md-9 registration_form pad_t50" },                                                   // 141
														React.createElement(                                                                                   // 142
																"div",                                                                                               // 142
																{ className: "col-md-8 col-md-offset-2" },                                                           // 142
																React.createElement("div", { className: "card" }),                                                   // 143
																React.createElement(                                                                                 // 144
																		"div",                                                                                             // 144
																		{ className: "card" },                                                                             // 144
																		React.createElement(                                                                               // 145
																				"h1",                                                                                            // 145
																				{ className: "title" },                                                                          // 145
																				"Add Client"                                                                                     // 145
																		),                                                                                                 // 145
																		React.createElement(                                                                               // 147
																				"div",                                                                                           // 147
																				{ id: "error-div" },                                                                             // 147
																				React.createElement(                                                                             // 147
																						"span",                                                                                        // 147
																						null,                                                                                          // 147
																						"Email ID already exists."                                                                     // 147
																				)                                                                                                // 147
																		),                                                                                                 // 147
																		React.createElement(                                                                               // 148
																				"div",                                                                                           // 148
																				{ id: "error-div-mail" },                                                                        // 148
																				React.createElement(                                                                             // 148
																						"span",                                                                                        // 148
																						null,                                                                                          // 148
																						"This is not a valid Email address"                                                            // 148
																				)                                                                                                // 148
																		),                                                                                                 // 148
																		React.createElement(                                                                               // 151
																				"form",                                                                                          // 151
																				{ className: "form_pad" },                                                                       // 151
																				React.createElement(                                                                             // 152
																						"div",                                                                                         // 152
																						{ className: "row" },                                                                          // 152
																						React.createElement(                                                                           // 153
																								"div",                                                                                       // 153
																								{ className: "col-md-6" },                                                                   // 153
																								React.createElement(                                                                         // 154
																										"div",                                                                                     // 154
																										{ className: "input-container" },                                                          // 154
																										React.createElement("input", { type: "autogenerated", required: "required", id: "client_id", onClick: this.set_client_id }),
																										React.createElement(                                                                       // 156
																												"label",                                                                                 // 156
																												{ "for": "" },                                                                           // 156
																												"Client ID"                                                                              // 156
																										),                                                                                         // 156
																										React.createElement("div", { className: "bar" })                                           // 157
																								),                                                                                           // 154
																								React.createElement(                                                                         // 159
																										"div",                                                                                     // 159
																										{ className: "input-container" },                                                          // 159
																										React.createElement("input", { type: "text", required: "required", id: "company_name" }),  // 160
																										React.createElement(                                                                       // 161
																												"label",                                                                                 // 161
																												{ "for": "" },                                                                           // 161
																												"Company Name"                                                                           // 161
																										),                                                                                         // 161
																										React.createElement("div", { className: "bar" })                                           // 162
																								),                                                                                           // 159
																								React.createElement(                                                                         // 164
																										"div",                                                                                     // 164
																										{ className: "input-container" },                                                          // 164
																										React.createElement("input", { type: "text", required: "required", id: "addr" }),          // 165
																										React.createElement(                                                                       // 166
																												"label",                                                                                 // 166
																												{ "for": " " },                                                                          // 166
																												"Address"                                                                                // 166
																										),                                                                                         // 166
																										React.createElement("div", { className: "bar" })                                           // 167
																								),                                                                                           // 164
																								React.createElement(                                                                         // 169
																										"div",                                                                                     // 169
																										{ className: "input-container" },                                                          // 169
																										React.createElement("input", { type: "text", required: "required", id: "mail" }),          // 170
																										React.createElement(                                                                       // 171
																												"label",                                                                                 // 171
																												{ "for": " " },                                                                          // 171
																												"Email"                                                                                  // 171
																										),                                                                                         // 171
																										React.createElement("div", { className: "bar" })                                           // 172
																								),                                                                                           // 169
																								React.createElement(                                                                         // 174
																										"div",                                                                                     // 174
																										{ className: "input-container" },                                                          // 174
																										React.createElement("input", { type: "number", required: "required", id: "mob" }),         // 175
																										React.createElement(                                                                       // 176
																												"label",                                                                                 // 176
																												{ "for": " " },                                                                          // 176
																												"Phone No"                                                                               // 176
																										),                                                                                         // 176
																										React.createElement("div", { className: "bar" })                                           // 177
																								),                                                                                           // 174
																								React.createElement(                                                                         // 179
																										"div",                                                                                     // 179
																										{ className: "input-container" },                                                          // 179
																										React.createElement("input", { type: "text", required: "required", id: "website" }),       // 180
																										React.createElement(                                                                       // 181
																												"label",                                                                                 // 181
																												{ "for": "" },                                                                           // 181
																												"Website"                                                                                // 181
																										),                                                                                         // 181
																										React.createElement("div", { className: "bar" })                                           // 182
																								)                                                                                            // 179
																						),                                                                                             // 153
																						React.createElement(                                                                           // 185
																								"div",                                                                                       // 185
																								{ className: "col-md-6" },                                                                   // 185
																								React.createElement(                                                                         // 186
																										"div",                                                                                     // 186
																										{ className: "input-container" },                                                          // 186
																										React.createElement("input", { type: "text", required: "required", id: "city" }),          // 187
																										React.createElement(                                                                       // 188
																												"label",                                                                                 // 188
																												{ "for": "" },                                                                           // 188
																												"City"                                                                                   // 188
																										),                                                                                         // 188
																										React.createElement("div", { className: "bar" })                                           // 189
																								),                                                                                           // 186
																								React.createElement(                                                                         // 191
																										"div",                                                                                     // 191
																										{ className: "input-container" },                                                          // 191
																										React.createElement("input", { type: "text", required: "required", id: "state" }),         // 192
																										React.createElement(                                                                       // 193
																												"label",                                                                                 // 193
																												{ "for": "" },                                                                           // 193
																												"State"                                                                                  // 193
																										),                                                                                         // 193
																										React.createElement("div", { className: "bar" })                                           // 194
																								),                                                                                           // 191
																								React.createElement(                                                                         // 196
																										"div",                                                                                     // 196
																										{ className: "input-container" },                                                          // 196
																										React.createElement(                                                                       // 197
																												"select",                                                                                // 197
																												{ id: "country" },                                                                       // 197
																												React.createElement(                                                                     // 198
																														"option",                                                                              // 198
																														null,                                                                                  // 198
																														"Country"                                                                              // 198
																												)                                                                                        // 198
																										)                                                                                          // 197
																								),                                                                                           // 196
																								React.createElement(                                                                         // 201
																										"div",                                                                                     // 201
																										{ className: "input-container" },                                                          // 201
																										React.createElement("input", { type: "num", required: "required", id: "pin" }),            // 202
																										React.createElement(                                                                       // 203
																												"label",                                                                                 // 203
																												{ "for": " " },                                                                          // 203
																												"Pin Code"                                                                               // 203
																										),                                                                                         // 203
																										React.createElement("div", { className: "bar" })                                           // 204
																								),                                                                                           // 201
																								React.createElement(                                                                         // 206
																										"div",                                                                                     // 206
																										{ className: "input-container" },                                                          // 206
																										React.createElement("input", { type: "text", required: "required", id: "contact_name" }),  // 207
																										React.createElement(                                                                       // 208
																												"label",                                                                                 // 208
																												{ "for": " " },                                                                          // 208
																												"Contact Name"                                                                           // 208
																										),                                                                                         // 208
																										React.createElement("div", { className: "bar" })                                           // 209
																								),                                                                                           // 206
																								React.createElement(                                                                         // 211
																										"div",                                                                                     // 211
																										{ className: "input-container" },                                                          // 211
																										React.createElement("input", { type: "num", required: "required", id: "contact_number" }),
																										React.createElement(                                                                       // 213
																												"label",                                                                                 // 213
																												{ "for": " " },                                                                          // 213
																												"Contact No"                                                                             // 213
																										),                                                                                         // 213
																										React.createElement("div", { className: "bar" })                                           // 214
																								),                                                                                           // 211
																								React.createElement(                                                                         // 216
																										"div",                                                                                     // 216
																										{ className: "input-container" },                                                          // 216
																										React.createElement("input", { type: "text", required: "required", id: "job_title" }),     // 217
																										React.createElement(                                                                       // 218
																												"label",                                                                                 // 218
																												{ "for": " " },                                                                          // 218
																												"Job Title"                                                                              // 218
																										),                                                                                         // 218
																										React.createElement("div", { className: "bar" })                                           // 219
																								)                                                                                            // 216
																						)                                                                                              // 185
																				),                                                                                               // 152
																				React.createElement(                                                                             // 223
																						"div",                                                                                         // 223
																						{ className: "button-container" },                                                             // 223
																						React.createElement(                                                                           // 224
																								"button",                                                                                    // 224
																								{ onClick: this.add_client },                                                                // 224
																								React.createElement(                                                                         // 224
																										"span",                                                                                    // 224
																										null,                                                                                      // 224
																										"SAVE"                                                                                     // 224
																								)                                                                                            // 224
																						)                                                                                              // 224
																				)                                                                                                // 223
																		)                                                                                                  // 151
																)                                                                                                    // 144
														)                                                                                                      // 142
												)                                                                                                        // 141
										)                                                                                                          // 110
								),                                                                                                           // 109
								React.createElement(                                                                                         // 232
										"div",                                                                                                     // 232
										{ className: "footer no_margin" },                                                                         // 232
										React.createElement(                                                                                       // 233
												"ul",                                                                                                    // 233
												null,                                                                                                    // 233
												React.createElement(                                                                                     // 234
														"li",                                                                                                  // 234
														null,                                                                                                  // 234
														React.createElement(                                                                                   // 234
																"a",                                                                                                 // 234
																{ href: "#" },                                                                                       // 234
																"Home"                                                                                               // 234
														)                                                                                                      // 234
												),                                                                                                       // 234
												React.createElement(                                                                                     // 235
														"li",                                                                                                  // 235
														null,                                                                                                  // 235
														React.createElement(                                                                                   // 235
																"a",                                                                                                 // 235
																{ href: "#" },                                                                                       // 235
																"About Us"                                                                                           // 235
														)                                                                                                      // 235
												),                                                                                                       // 235
												React.createElement(                                                                                     // 236
														"li",                                                                                                  // 236
														null,                                                                                                  // 236
														React.createElement(                                                                                   // 236
																"a",                                                                                                 // 236
																{ href: "#" },                                                                                       // 236
																"Services"                                                                                           // 236
														)                                                                                                      // 236
												),                                                                                                       // 236
												React.createElement(                                                                                     // 237
														"li",                                                                                                  // 237
														null,                                                                                                  // 237
														React.createElement(                                                                                   // 237
																"a",                                                                                                 // 237
																{ href: "#" },                                                                                       // 237
																"Projects"                                                                                           // 237
														)                                                                                                      // 237
												)                                                                                                        // 237
										)                                                                                                          // 233
								)                                                                                                            // 232
						);                                                                                                             // 100
				}                                                                                                                // 244
                                                                                                                     //
				return render;                                                                                                   //
		}();                                                                                                               //
                                                                                                                     //
		return AddClient;                                                                                                  //
}(Component);                                                                                                        //
                                                                                                                     //
module.export("default",exports.default=(AddClient));                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ForgotPassword.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/ForgotPassword.jsx                                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck;module.import("babel-runtime/helpers/classCallCheck",{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import("babel-runtime/helpers/possibleConstructorReturn",{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import("babel-runtime/helpers/inherits",{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                                     //
                                                                                                                     //
                                                                                                                     // 1
                                                                                                                     //
// App component - represents the whole app                                                                          //
                                                                                                                     //
var ForgotPassword = function (_Component) {                                                                         //
  _inherits(ForgotPassword, _Component);                                                                             //
                                                                                                                     //
  function ForgotPassword() {                                                                                        //
    _classCallCheck(this, ForgotPassword);                                                                           //
                                                                                                                     //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                      //
  }                                                                                                                  //
                                                                                                                     //
  ForgotPassword.prototype.render = function () {                                                                    //
    function render() {                                                                                              //
      return React.createElement(                                                                                    // 8
        "div",                                                                                                       // 8
        null,                                                                                                        // 8
        React.createElement(                                                                                         // 9
          "div",                                                                                                     // 9
          { className: "hed_top" },                                                                                  // 9
          React.createElement(                                                                                       // 10
            "div",                                                                                                   // 10
            { className: "mid_container" },                                                                          // 10
            React.createElement(                                                                                     // 11
              "div",                                                                                                 // 11
              { className: "logoin" },                                                                               // 11
              React.createElement("img", { src: "images/logo.jpg" })                                                 // 11
            )                                                                                                        // 11
          )                                                                                                          // 10
        ),                                                                                                           // 9
        React.createElement(                                                                                         // 14
          "div",                                                                                                     // 14
          { className: "mid_content" },                                                                              // 14
          React.createElement(                                                                                       // 15
            "div",                                                                                                   // 15
            { className: "login_col" },                                                                              // 15
            React.createElement("div", { className: "card" }),                                                       // 16
            React.createElement(                                                                                     // 17
              "div",                                                                                                 // 17
              { className: "card" },                                                                                 // 17
              React.createElement(                                                                                   // 18
                "h1",                                                                                                // 18
                { className: "title" },                                                                              // 18
                "Forget Password"                                                                                    // 18
              ),                                                                                                     // 18
              React.createElement(                                                                                   // 19
                "form",                                                                                              // 19
                null,                                                                                                // 19
                React.createElement(                                                                                 // 20
                  "div",                                                                                             // 20
                  { className: "input-container" },                                                                  // 20
                  React.createElement("input", { type: "text", id: "Username", required: "required" }),              // 21
                  React.createElement(                                                                               // 22
                    "label",                                                                                         // 22
                    { "for": "Username" },                                                                           // 22
                    "Email Id"                                                                                       // 22
                  ),                                                                                                 // 22
                  React.createElement("div", { className: "bar" })                                                   // 23
                ),                                                                                                   // 20
                React.createElement(                                                                                 // 25
                  "div",                                                                                             // 25
                  { className: "input-container" },                                                                  // 25
                  React.createElement("input", { type: "text", id: "Password", required: "required" }),              // 26
                  React.createElement(                                                                               // 27
                    "label",                                                                                         // 27
                    { "for": "Password" },                                                                           // 27
                    "User Name"                                                                                      // 27
                  ),                                                                                                 // 27
                  React.createElement("div", { className: "bar" })                                                   // 28
                ),                                                                                                   // 25
                React.createElement(                                                                                 // 30
                  "div",                                                                                             // 30
                  { className: "button-container" },                                                                 // 30
                  React.createElement(                                                                               // 31
                    "button",                                                                                        // 31
                    null,                                                                                            // 31
                    React.createElement(                                                                             // 31
                      "span",                                                                                        // 31
                      null,                                                                                          // 31
                      "ok"                                                                                           // 31
                    )                                                                                                // 31
                  )                                                                                                  // 31
                )                                                                                                    // 30
              )                                                                                                      // 19
            )                                                                                                        // 17
          )                                                                                                          // 15
        )                                                                                                            // 14
      );                                                                                                             // 8
    }                                                                                                                // 38
                                                                                                                     //
    return render;                                                                                                   //
  }();                                                                                                               //
                                                                                                                     //
  return ForgotPassword;                                                                                             //
}(Component);                                                                                                        //
                                                                                                                     //
module.export("default",exports.default=(ForgotPassword));                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Login.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/meteor",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/Login.jsx                                                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
                                                                                                                     //
                                                                                                                     //
                                                                                                                     // 1
                                                                                                                     // 2
                                                                                                                     //
// App component - represents the whole app                                                                          //
                                                                                                                     //
var Login = function (_Component) {                                                                                  //
  _inherits(Login, _Component);                                                                                      //
                                                                                                                     //
  function Login() {                                                                                                 //
    _classCallCheck(this, Login);                                                                                    //
                                                                                                                     //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                      //
  }                                                                                                                  //
                                                                                                                     //
  Login.prototype.loginTo = function () {                                                                            //
    function loginTo() {                                                                                             //
      var uname = $("#Username").val();                                                                              // 8
      var pass = $("#Password").val();                                                                               // 9
                                                                                                                     //
      if (User.find({ userName: uname }).fetch() == "") {                                                            // 12
        $("#error-div-no-uname-exists").show();                                                                      // 13
        setTimeout(function () {                                                                                     // 14
          $("#error-div-no-uname-exists").hide();                                                                    // 14
        }, 5000);                                                                                                    // 14
      } else {                                                                                                       // 15
        var item = User.find({ userName: uname }).fetch();                                                           // 17
        $.map(item, function (val) {                                                                                 // 18
          original_pass = val.password;                                                                              // 19
                                                                                                                     //
          if (pass == original_pass) {} else {                                                                       // 21
            $("#error-div-incorrect-pass").show();                                                                   // 24
            setTimeout(function () {                                                                                 // 25
              $("#error-div-incorrect-pass").hide();                                                                 // 25
            }, 5000);                                                                                                // 25
          }                                                                                                          // 26
        });                                                                                                          // 27
        FlowRouter.go('/ManageClient');                                                                              // 28
      }                                                                                                              // 29
    }                                                                                                                // 31
                                                                                                                     //
    return loginTo;                                                                                                  //
  }();                                                                                                               //
                                                                                                                     //
  Login.prototype.frgtPass = function () {                                                                           //
    function frgtPass() {                                                                                            //
      FlowRouter.go('/ForgotPassword');                                                                              // 34
    }                                                                                                                // 35
                                                                                                                     //
    return frgtPass;                                                                                                 //
  }();                                                                                                               //
                                                                                                                     //
  Login.prototype.reg = function () {                                                                                //
    function reg() {                                                                                                 //
      FlowRouter.go('/Registration');                                                                                // 38
    }                                                                                                                // 39
                                                                                                                     //
    return reg;                                                                                                      //
  }();                                                                                                               //
                                                                                                                     //
  Login.prototype.render = function () {                                                                             //
    function render() {                                                                                              //
      return React.createElement(                                                                                    // 42
        'div',                                                                                                       // 43
        null,                                                                                                        // 43
        React.createElement(                                                                                         // 44
          'div',                                                                                                     // 44
          { className: 'hed_top' },                                                                                  // 44
          React.createElement(                                                                                       // 46
            'div',                                                                                                   // 46
            { className: 'mid_container' },                                                                          // 46
            React.createElement(                                                                                     // 47
              'div',                                                                                                 // 47
              { className: 'logoin' },                                                                               // 47
              'Appitude'                                                                                             // 47
            )                                                                                                        // 47
          )                                                                                                          // 46
        ),                                                                                                           // 44
        React.createElement(                                                                                         // 50
          'div',                                                                                                     // 50
          { className: 'mid_content' },                                                                              // 50
          React.createElement(                                                                                       // 51
            'div',                                                                                                   // 51
            { className: 'login_col' },                                                                              // 51
            React.createElement('div', { className: 'card' }),                                                       // 52
            React.createElement(                                                                                     // 53
              'div',                                                                                                 // 53
              { className: 'card' },                                                                                 // 53
              React.createElement(                                                                                   // 54
                'h1',                                                                                                // 54
                { className: 'title' },                                                                              // 54
                'Login'                                                                                              // 54
              ),                                                                                                     // 54
              React.createElement(                                                                                   // 56
                'div',                                                                                               // 56
                { id: 'error-div-no-uname-exists' },                                                                 // 56
                React.createElement(                                                                                 // 56
                  'span',                                                                                            // 56
                  null,                                                                                              // 56
                  'Incorrect user name or password.'                                                                 // 56
                )                                                                                                    // 56
              ),                                                                                                     // 56
              React.createElement(                                                                                   // 57
                'div',                                                                                               // 57
                { id: 'error-div-incorrect-pass' },                                                                  // 57
                React.createElement(                                                                                 // 57
                  'span',                                                                                            // 57
                  null,                                                                                              // 57
                  'Incorrect user name or password.'                                                                 // 57
                )                                                                                                    // 57
              ),                                                                                                     // 57
              React.createElement(                                                                                   // 59
                'form',                                                                                              // 59
                null,                                                                                                // 59
                React.createElement(                                                                                 // 61
                  'div',                                                                                             // 61
                  { className: 'input-container' },                                                                  // 61
                  React.createElement('input', { type: 'text', id: 'Username', required: 'required' }),              // 62
                  React.createElement(                                                                               // 63
                    'label',                                                                                         // 63
                    { 'for': 'Username' },                                                                           // 63
                    'User Name'                                                                                      // 63
                  ),                                                                                                 // 63
                  React.createElement('div', { className: 'bar' })                                                   // 64
                ),                                                                                                   // 61
                React.createElement(                                                                                 // 66
                  'div',                                                                                             // 66
                  { className: 'input-container' },                                                                  // 66
                  React.createElement('input', { type: 'password', id: 'Password', required: 'required' }),          // 67
                  React.createElement(                                                                               // 68
                    'label',                                                                                         // 68
                    { 'for': 'Password' },                                                                           // 68
                    'Password'                                                                                       // 68
                  ),                                                                                                 // 68
                  React.createElement('div', { className: 'bar' })                                                   // 69
                ),                                                                                                   // 66
                React.createElement(                                                                                 // 71
                  'div',                                                                                             // 71
                  { className: 'button-container' },                                                                 // 71
                  React.createElement(                                                                               // 72
                    'button',                                                                                        // 72
                    { onClick: this.loginTo },                                                                       // 72
                    React.createElement(                                                                             // 72
                      'span',                                                                                        // 72
                      null,                                                                                          // 72
                      'submit'                                                                                       // 72
                    )                                                                                                // 72
                  )                                                                                                  // 72
                ),                                                                                                   // 71
                React.createElement(                                                                                 // 74
                  'div',                                                                                             // 74
                  { className: 'sign' },                                                                             // 74
                  React.createElement(                                                                               // 74
                    'a',                                                                                             // 74
                    { href: '', onClick: this.reg },                                                                 // 74
                    'New Registration'                                                                               // 74
                  ),                                                                                                 // 74
                  '  ',                                                                                              // 74
                  React.createElement(                                                                               // 74
                    'a',                                                                                             // 74
                    { href: '', onClick: this.frgtPass },                                                            // 74
                    'Forget Password'                                                                                // 74
                  )                                                                                                  // 74
                )                                                                                                    // 74
              )                                                                                                      // 59
            )                                                                                                        // 53
          )                                                                                                          // 51
        )                                                                                                            // 50
      );                                                                                                             // 43
    }                                                                                                                // 84
                                                                                                                     //
    return render;                                                                                                   //
  }();                                                                                                               //
                                                                                                                     //
  return Login;                                                                                                      //
}(Component);                                                                                                        //
                                                                                                                     //
module.export("default",exports.default=(Login));                                                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ManageClient.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/meteor",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/ManageClient.jsx                                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
                                                                                                                     //
                                                                                                                     //
                                                                                                                     // 1
                                                                                                                     // 2
                                                                                                                     //
var ManageClient = function (_Component) {                                                                           //
	_inherits(ManageClient, _Component);                                                                                //
                                                                                                                     //
	function ManageClient() {                                                                                           //
		_classCallCheck(this, ManageClient);                                                                               //
                                                                                                                     //
		return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                        //
	}                                                                                                                   //
                                                                                                                     //
	ManageClient.prototype.pressBtn = function () {                                                                     //
		function pressBtn() {                                                                                              //
			FlowRouter.go("/");                                                                                               // 7
		}                                                                                                                  // 8
                                                                                                                     //
		return pressBtn;                                                                                                   //
	}();                                                                                                                //
                                                                                                                     //
	ManageClient.prototype.gotoAddClient = function () {                                                                //
		function gotoAddClient() {                                                                                         //
			//alert("add client");                                                                                            //
			FlowRouter.go("/AddClient");                                                                                      // 12
		}                                                                                                                  // 13
                                                                                                                     //
		return gotoAddClient;                                                                                              //
	}();                                                                                                                //
                                                                                                                     //
	ManageClient.prototype.gotoMngClient = function () {                                                                //
		function gotoMngClient() {                                                                                         //
			//alert("manage client");                                                                                         //
			FlowRouter.go("/ManageClient");                                                                                   // 17
		}                                                                                                                  // 18
                                                                                                                     //
		return gotoMngClient;                                                                                              //
	}();                                                                                                                //
                                                                                                                     //
	ManageClient.prototype.gotoMngUser = function () {                                                                  //
		function gotoMngUser() {                                                                                           //
			//alert("manage user");                                                                                           //
			FlowRouter.go("/ManageUser");                                                                                     // 22
		}                                                                                                                  // 23
                                                                                                                     //
		return gotoMngUser;                                                                                                //
	}();                                                                                                                //
                                                                                                                     //
	ManageClient.prototype.render = function () {                                                                       //
		function render() {                                                                                                //
                                                                                                                     //
			setTimeout(function () {                                                                                          // 27
                                                                                                                     //
				if (Client.find().fetch() == "") {} else {                                                                       // 29
                                                                                                                     //
					var flag = 2;                                                                                                   // 33
                                                                                                                     //
					var item = Client.find().fetch();                                                                               // 35
                                                                                                                     //
					$.map(item, function (val) {                                                                                    // 38
						if (flag % 2 == 0) {                                                                                           // 39
                                                                                                                     //
							if (val.is_active == 0) {                                                                                     // 41
								$("#user_list_docs").append('<tr >' + '<td>' + val.client_id + '</td>' + '<td>' + val.client_company_name + '</td>' + '<td>' + val.client_phone_number + '</td>' + '<td>Deactive</td>' + '<td><div className="button-container">' + '<button><span>Active</span></button>' + '</div></td>' + '<td><a href="#"><i className="fa fa-edit font20"></i></a></td>' + '</tr>');
							} else if (val.is_active == 1) {                                                                              // 52
								$("#user_list_docs").append('<tr >' + '<td>' + val.client_id + '</td>' + '<td>' + val.client_company_name + '</td>' + '<td>' + val.client_phone_number + '</td>' + '<td>Active</td>' + '<td><div className="button-container">' + '<button><span>Deactive</span></button>' + '</div></td>' + '<td><a href="#"><i className="fa fa-edit font20"></i></a></td>' + '</tr>');
							}                                                                                                             // 64
						} else {                                                                                                       // 66
                                                                                                                     //
							if (val.is_active == 0) {                                                                                     // 69
								$("#user_list_docs").append('<tr style="background-color:#eee;" >' + '<td>' + val.client_id + '</td>' + '<td>' + val.client_company_name + '</td>' + '<td>' + val.client_phone_number + '</td>' + '<td>Deactive</td>' + '<td><div className="button-container">' + '<button><span>Active</span></button>' + '</div></td>' + '<td><a href="#"><i className="fa fa-edit font20"></i></a></td>' + '</tr>');
							} else if (val.is_active == 1) {                                                                              // 80
								$("#user_list_docs").append('<tr style="background-color:#eee;" >' + '<td>' + val.client_id + '</td>' + '<td>' + val.client_company_name + '</td>' + '<td>' + val.client_phone_number + '</td>' + '<td>Active</td>' + '<td><div className="button-container">' + '<button><span>Deactive</span></button>' + '</div></td>' + '<td><a href="#"><i className="fa fa-edit font20"></i></a></td>' + '</tr>');
							}                                                                                                             // 92
						}                                                                                                              // 94
                                                                                                                     //
						flag++;                                                                                                        // 96
					});                                                                                                             // 97
				}                                                                                                                // 98
			}, 1000);                                                                                                         // 101
                                                                                                                     //
			return React.createElement(                                                                                       // 106
				'div',                                                                                                           // 107
				null,                                                                                                            // 107
				React.createElement(                                                                                             // 108
					'div',                                                                                                          // 108
					{ className: 'hed_top' },                                                                                       // 108
					React.createElement(                                                                                            // 109
						'div',                                                                                                         // 109
						{ className: 'mid_container' },                                                                                // 109
						React.createElement(                                                                                           // 110
							'div',                                                                                                        // 110
							{ className: 'logo' },                                                                                        // 110
							'Aptitude'                                                                                                    // 110
						),                                                                                                             // 110
						React.createElement(                                                                                           // 111
							'div',                                                                                                        // 111
							{ className: 'hed_top_right' },                                                                               // 111
							React.createElement(                                                                                          // 112
								'label',                                                                                                     // 112
								null,                                                                                                        // 112
								'Logged in as Srinivas'                                                                                      // 112
							),                                                                                                            // 112
							React.createElement(                                                                                          // 113
								'a',                                                                                                         // 113
								{ href: '', onClick: this.pressBtn },                                                                        // 113
								React.createElement('img', { src: 'images/logout.png' }),                                                    // 113
								'Log Out'                                                                                                    // 113
							)                                                                                                             // 113
						)                                                                                                              // 111
					)                                                                                                               // 109
				),                                                                                                               // 108
				React.createElement(                                                                                             // 116
					'div',                                                                                                          // 116
					{ className: 'no_pad clearfix' },                                                                               // 116
					React.createElement(                                                                                            // 117
						'div',                                                                                                         // 117
						{ className: 'clearfix overflow' },                                                                            // 117
						React.createElement(                                                                                           // 118
							'div',                                                                                                        // 118
							{ className: 'col-md-2 no_pad' },                                                                             // 118
							React.createElement(                                                                                          // 119
								'div',                                                                                                       // 119
								{ className: 'collapse navbar-collapse navbar-ex1-collapse' },                                               // 119
								React.createElement(                                                                                         // 120
									'ul',                                                                                                       // 120
									{ className: 'nav navbar-nav side-nav' },                                                                   // 120
									React.createElement(                                                                                        // 121
										'li',                                                                                                      // 121
										{ className: 'dropdown' },                                                                                 // 121
										React.createElement(                                                                                       // 121
											'a',                                                                                                      // 121
											{ href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },                                   // 121
											React.createElement('i', { className: 'fa fa-user' }),                                                    // 121
											'CLIENT',                                                                                                 // 121
											React.createElement('b', { className: 'caret' })                                                          // 121
										),                                                                                                         // 121
										React.createElement(                                                                                       // 123
											'ul',                                                                                                     // 123
											null,                                                                                                     // 123
											React.createElement(                                                                                      // 124
												'li',                                                                                                    // 124
												null,                                                                                                    // 124
												React.createElement(                                                                                     // 124
													'a',                                                                                                    // 124
													{ href: '', onClick: this.gotoAddClient },                                                              // 124
													'Add Client'                                                                                            // 124
												)                                                                                                        // 124
											),                                                                                                        // 124
											React.createElement(                                                                                      // 125
												'li',                                                                                                    // 125
												null,                                                                                                    // 125
												React.createElement(                                                                                     // 125
													'a',                                                                                                    // 125
													{ href: '', onClick: this.gotoMngClient },                                                              // 125
													'Manage Client'                                                                                         // 125
												)                                                                                                        // 125
											)                                                                                                         // 125
										)                                                                                                          // 123
									),                                                                                                          // 121
									React.createElement(                                                                                        // 128
										'li',                                                                                                      // 128
										{ className: 'dropdown' },                                                                                 // 128
										React.createElement(                                                                                       // 128
											'a',                                                                                                      // 128
											{ href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },                                   // 128
											React.createElement('i', { className: 'fa fa-file' }),                                                    // 128
											'FORM',                                                                                                   // 128
											React.createElement('b', { className: 'caret' })                                                          // 128
										),                                                                                                         // 128
										React.createElement(                                                                                       // 130
											'ul',                                                                                                     // 130
											null,                                                                                                     // 130
											React.createElement(                                                                                      // 131
												'li',                                                                                                    // 131
												null,                                                                                                    // 131
												React.createElement(                                                                                     // 131
													'a',                                                                                                    // 131
													{ href: '#' },                                                                                          // 131
													'Add Form'                                                                                              // 131
												)                                                                                                        // 131
											),                                                                                                        // 131
											React.createElement(                                                                                      // 132
												'li',                                                                                                    // 132
												null,                                                                                                    // 132
												React.createElement(                                                                                     // 132
													'a',                                                                                                    // 132
													{ href: '#' },                                                                                          // 132
													'Manage Form'                                                                                           // 132
												)                                                                                                        // 132
											)                                                                                                         // 132
										)                                                                                                          // 130
									),                                                                                                          // 128
									React.createElement(                                                                                        // 135
										'li',                                                                                                      // 135
										{ className: 'dropdown' },                                                                                 // 135
										React.createElement(                                                                                       // 135
											'a',                                                                                                      // 135
											{ href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },                                   // 135
											React.createElement('i', { className: 'fa fa-user' }),                                                    // 135
											'USER',                                                                                                   // 135
											React.createElement('b', { className: 'caret' })                                                          // 135
										),                                                                                                         // 135
										React.createElement(                                                                                       // 137
											'ul',                                                                                                     // 137
											null,                                                                                                     // 137
											React.createElement(                                                                                      // 138
												'li',                                                                                                    // 138
												null,                                                                                                    // 138
												React.createElement(                                                                                     // 138
													'a',                                                                                                    // 138
													{ href: '#' },                                                                                          // 138
													'Add User'                                                                                              // 138
												)                                                                                                        // 138
											),                                                                                                        // 138
											React.createElement(                                                                                      // 139
												'li',                                                                                                    // 139
												null,                                                                                                    // 139
												React.createElement(                                                                                     // 139
													'a',                                                                                                    // 139
													{ href: '', onClick: this.gotoMngUser },                                                                // 139
													'Manage User'                                                                                           // 139
												)                                                                                                        // 139
											)                                                                                                         // 139
										)                                                                                                          // 137
									),                                                                                                          // 135
									React.createElement(                                                                                        // 142
										'li',                                                                                                      // 142
										{ className: 'dropdown' },                                                                                 // 142
										React.createElement(                                                                                       // 142
											'a',                                                                                                      // 142
											{ href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },                                   // 142
											React.createElement('i', { className: 'fa fa-bar-chart-o' }),                                             // 142
											'MAP',                                                                                                    // 142
											React.createElement('b', { className: 'caret' })                                                          // 142
										),                                                                                                         // 142
										React.createElement(                                                                                       // 144
											'ul',                                                                                                     // 144
											null,                                                                                                     // 144
											React.createElement(                                                                                      // 145
												'li',                                                                                                    // 145
												null,                                                                                                    // 145
												React.createElement(                                                                                     // 145
													'a',                                                                                                    // 145
													{ href: '#' },                                                                                          // 145
													'Client Map'                                                                                            // 145
												)                                                                                                        // 145
											),                                                                                                        // 145
											React.createElement(                                                                                      // 146
												'li',                                                                                                    // 146
												null,                                                                                                    // 146
												React.createElement(                                                                                     // 146
													'a',                                                                                                    // 146
													{ href: '#' },                                                                                          // 146
													'Mapining Management'                                                                                   // 146
												)                                                                                                        // 146
											)                                                                                                         // 146
										)                                                                                                          // 144
									)                                                                                                           // 142
								)                                                                                                            // 120
							)                                                                                                             // 119
						),                                                                                                             // 118
						React.createElement(                                                                                           // 152
							'div',                                                                                                        // 152
							{ className: 'col-md-9 registration_form pad_t50' },                                                          // 152
							React.createElement(                                                                                          // 153
								'div',                                                                                                       // 153
								{ className: 'col-md-10 col-md-offset-1' },                                                                  // 153
								React.createElement(                                                                                         // 154
									'h1',                                                                                                       // 154
									{ className: 'title' },                                                                                     // 154
									'Manage Client'                                                                                             // 154
								),                                                                                                           // 154
								React.createElement(                                                                                         // 157
									'div',                                                                                                      // 157
									{ id: 'user_status_change' },                                                                               // 157
									React.createElement('span', null)                                                                           // 157
								),                                                                                                           // 157
								React.createElement(                                                                                         // 158
									'table',                                                                                                    // 158
									{ width: '100%', border: '0', cellspacing: '0', cellpadding: '0', className: 'table_cont' },                // 158
									React.createElement(                                                                                        // 160
										'th',                                                                                                      // 160
										null,                                                                                                      // 160
										'Staff Id'                                                                                                 // 160
									),                                                                                                          // 160
									React.createElement(                                                                                        // 161
										'th',                                                                                                      // 161
										null,                                                                                                      // 161
										'Name'                                                                                                     // 161
									),                                                                                                          // 161
									React.createElement(                                                                                        // 162
										'th',                                                                                                      // 162
										null,                                                                                                      // 162
										'Mobile'                                                                                                   // 162
									),                                                                                                          // 162
									React.createElement(                                                                                        // 163
										'th',                                                                                                      // 163
										null,                                                                                                      // 163
										'Status'                                                                                                   // 163
									),                                                                                                          // 163
									React.createElement(                                                                                        // 164
										'th',                                                                                                      // 164
										null,                                                                                                      // 164
										'Access'                                                                                                   // 164
									),                                                                                                          // 164
									React.createElement(                                                                                        // 165
										'th',                                                                                                      // 165
										null,                                                                                                      // 165
										'Edit'                                                                                                     // 165
									),                                                                                                          // 165
									React.createElement('tbody', { id: 'user_list_docs' })                                                      // 167
								)                                                                                                            // 158
							)                                                                                                             // 153
						)                                                                                                              // 152
					)                                                                                                               // 117
				),                                                                                                               // 116
				React.createElement(                                                                                             // 176
					'div',                                                                                                          // 176
					{ className: 'footer no_margin' },                                                                              // 176
					React.createElement(                                                                                            // 177
						'ul',                                                                                                          // 177
						null,                                                                                                          // 177
						React.createElement(                                                                                           // 178
							'li',                                                                                                         // 178
							null,                                                                                                         // 178
							React.createElement(                                                                                          // 178
								'a',                                                                                                         // 178
								{ href: '#' },                                                                                               // 178
								'Home'                                                                                                       // 178
							)                                                                                                             // 178
						),                                                                                                             // 178
						React.createElement(                                                                                           // 179
							'li',                                                                                                         // 179
							null,                                                                                                         // 179
							React.createElement(                                                                                          // 179
								'a',                                                                                                         // 179
								{ href: '#' },                                                                                               // 179
								'About Us'                                                                                                   // 179
							)                                                                                                             // 179
						),                                                                                                             // 179
						React.createElement(                                                                                           // 180
							'li',                                                                                                         // 180
							null,                                                                                                         // 180
							React.createElement(                                                                                          // 180
								'a',                                                                                                         // 180
								{ href: '#' },                                                                                               // 180
								'Services'                                                                                                   // 180
							)                                                                                                             // 180
						),                                                                                                             // 180
						React.createElement(                                                                                           // 181
							'li',                                                                                                         // 181
							null,                                                                                                         // 181
							React.createElement(                                                                                          // 181
								'a',                                                                                                         // 181
								{ href: '#' },                                                                                               // 181
								'Projects'                                                                                                   // 181
							)                                                                                                             // 181
						)                                                                                                              // 181
					)                                                                                                               // 177
				)                                                                                                                // 176
			);                                                                                                                // 107
		}                                                                                                                  // 187
                                                                                                                     //
		return render;                                                                                                     //
	}();                                                                                                                //
                                                                                                                     //
	return ManageClient;                                                                                                //
}(Component);                                                                                                        //
                                                                                                                     //
module.export("default",exports.default=(ManageClient));                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ManageUser.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/ManageUser.jsx                                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck;module.import("babel-runtime/helpers/classCallCheck",{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import("babel-runtime/helpers/possibleConstructorReturn",{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import("babel-runtime/helpers/inherits",{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                                     //
                                                                                                                     //
                                                                                                                     // 1
                                                                                                                     //
var ManageUser = function (_Component) {                                                                             //
	_inherits(ManageUser, _Component);                                                                                  //
                                                                                                                     //
	function ManageUser() {                                                                                             //
		_classCallCheck(this, ManageUser);                                                                                 //
                                                                                                                     //
		return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                        //
	}                                                                                                                   //
                                                                                                                     //
	ManageUser.prototype.render = function () {                                                                         //
		function render() {                                                                                                //
                                                                                                                     //
			setTimeout(function () {                                                                                          // 7
                                                                                                                     //
				if (User.find().fetch() == "") {} else {                                                                         // 9
                                                                                                                     //
					var flag = 2;                                                                                                   // 13
                                                                                                                     //
					var item = User.find().fetch();                                                                                 // 15
                                                                                                                     //
					$.map(item, function (val) {                                                                                    // 18
						if (flag % 2 == 0) {                                                                                           // 19
                                                                                                                     //
							if (val.is_active == 0) {                                                                                     // 21
								$("#user_list_docs").append('<tr >' + '<td>' + val.user_id + '</td>' + '<td>' + val.firstName + " " + val.lastName + '</td>' + '<td>' + val.mobile + '</td>' + '<td>Deactive</td>' + '<td><div className="button-container">' + '<button onClick={this.active_user}><span>Active</span></button>' + '</div></td>' + '<td><a href="#"><i className="fa fa-edit font20"></i></a></td>' + '</tr>');
							} else if (val.is_active == 1) {                                                                              // 32
								$("#user_list_docs").append('<tr >' + '<td>' + val.user_id + '</td>' + '<td>' + val.firstName + " " + val.lastName + '</td>' + '<td>' + val.mobile + '</td>' + '<td>Active</td>' + '<td><div className="button-container">' + '<button onClick={this.deactive_user}><span>Deactive</span></button>' + '</div></td>' + '<td><a href="#"><i className="fa fa-edit font20"></i></a></td>' + '</tr>');
							}                                                                                                             // 44
						} else {                                                                                                       // 46
                                                                                                                     //
							if (val.is_active == 0) {                                                                                     // 49
								$("#user_list_docs").append('<tr style="background-color:#eee;" >' + '<td>' + val.user_id + '</td>' + '<td>' + val.firstName + " " + val.lastName + '</td>' + '<td>' + val.mobile + '</td>' + '<td>Deactive</td>' + '<td><div className="button-container">' + '<button onClick={this.active_user}><span>Active</span></button>' + '</div></td>' + '<td><a href="#"><i className="fa fa-edit font20"></i></a></td>' + '</tr>');
							} else if (val.is_active == 1) {                                                                              // 60
								$("#user_list_docs").append('<tr style="background-color:#eee;" >' + '<td>' + val.user_id + '</td>' + '<td>' + val.firstName + " " + val.lastName + '</td>' + '<td>' + val.mobile + '</td>' + '<td>Active</td>' + '<td><div className="button-container">' + '<button onClick={this.deactive_user}><span>Deactive</span></button>' + '</div></td>' + '<td><a href="#"><i className="fa fa-edit font20"></i></a></td>' + '</tr>');
							}                                                                                                             // 72
						}                                                                                                              // 74
                                                                                                                     //
						flag++;                                                                                                        // 76
					});                                                                                                             // 77
				}                                                                                                                // 78
			}, 1000);                                                                                                         // 81
                                                                                                                     //
			return React.createElement(                                                                                       // 86
				"div",                                                                                                           // 87
				null,                                                                                                            // 87
				React.createElement(                                                                                             // 88
					"div",                                                                                                          // 88
					{ className: "hed_top" },                                                                                       // 88
					React.createElement(                                                                                            // 89
						"div",                                                                                                         // 89
						{ className: "mid_container" },                                                                                // 89
						React.createElement(                                                                                           // 90
							"div",                                                                                                        // 90
							{ className: "logo" },                                                                                        // 90
							"Aptitude"                                                                                                    // 90
						),                                                                                                             // 90
						React.createElement(                                                                                           // 91
							"div",                                                                                                        // 91
							{ className: "hed_top_right" },                                                                               // 91
							React.createElement(                                                                                          // 92
								"label",                                                                                                     // 92
								null,                                                                                                        // 92
								"Logged in as Srinivas"                                                                                      // 92
							),                                                                                                            // 92
							React.createElement(                                                                                          // 93
								"a",                                                                                                         // 93
								{ href: "#" },                                                                                               // 93
								React.createElement("img", { src: "images/logout.png" }),                                                    // 93
								"Log Out"                                                                                                    // 93
							)                                                                                                             // 93
						)                                                                                                              // 91
					)                                                                                                               // 89
				),                                                                                                               // 88
				React.createElement(                                                                                             // 96
					"div",                                                                                                          // 96
					{ className: "no_pad clearfix" },                                                                               // 96
					React.createElement(                                                                                            // 97
						"div",                                                                                                         // 97
						{ className: "clearfix overflow" },                                                                            // 97
						React.createElement(                                                                                           // 98
							"div",                                                                                                        // 98
							{ className: "col-md-2 no_pad" },                                                                             // 98
							React.createElement(                                                                                          // 99
								"div",                                                                                                       // 99
								{ className: "collapse navbar-collapse navbar-ex1-collapse" },                                               // 99
								React.createElement(                                                                                         // 100
									"ul",                                                                                                       // 100
									{ className: "nav navbar-nav side-nav" },                                                                   // 100
									React.createElement(                                                                                        // 101
										"li",                                                                                                      // 101
										{ className: "dropdown" },                                                                                 // 101
										React.createElement(                                                                                       // 101
											"a",                                                                                                      // 101
											{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                                   // 101
											React.createElement("i", { className: "fa fa-user" }),                                                    // 101
											"CLIENT",                                                                                                 // 101
											React.createElement("b", { className: "caret" })                                                          // 101
										),                                                                                                         // 101
										React.createElement(                                                                                       // 103
											"ul",                                                                                                     // 103
											null,                                                                                                     // 103
											React.createElement(                                                                                      // 104
												"li",                                                                                                    // 104
												null,                                                                                                    // 104
												React.createElement(                                                                                     // 104
													"a",                                                                                                    // 104
													{ href: "#" },                                                                                          // 104
													"Add Client"                                                                                            // 104
												)                                                                                                        // 104
											),                                                                                                        // 104
											React.createElement(                                                                                      // 105
												"li",                                                                                                    // 105
												null,                                                                                                    // 105
												React.createElement(                                                                                     // 105
													"a",                                                                                                    // 105
													{ href: "#" },                                                                                          // 105
													"Manage Client"                                                                                         // 105
												)                                                                                                        // 105
											)                                                                                                         // 105
										)                                                                                                          // 103
									),                                                                                                          // 101
									React.createElement(                                                                                        // 108
										"li",                                                                                                      // 108
										{ className: "dropdown" },                                                                                 // 108
										React.createElement(                                                                                       // 108
											"a",                                                                                                      // 108
											{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                                   // 108
											React.createElement("i", { className: "fa fa-file" }),                                                    // 108
											"FORM",                                                                                                   // 108
											React.createElement("b", { className: "caret" })                                                          // 108
										),                                                                                                         // 108
										React.createElement(                                                                                       // 110
											"ul",                                                                                                     // 110
											null,                                                                                                     // 110
											React.createElement(                                                                                      // 111
												"li",                                                                                                    // 111
												null,                                                                                                    // 111
												React.createElement(                                                                                     // 111
													"a",                                                                                                    // 111
													{ href: "#" },                                                                                          // 111
													"Add Form"                                                                                              // 111
												)                                                                                                        // 111
											),                                                                                                        // 111
											React.createElement(                                                                                      // 112
												"li",                                                                                                    // 112
												null,                                                                                                    // 112
												React.createElement(                                                                                     // 112
													"a",                                                                                                    // 112
													{ href: "#" },                                                                                          // 112
													"Manage Form"                                                                                           // 112
												)                                                                                                        // 112
											)                                                                                                         // 112
										)                                                                                                          // 110
									),                                                                                                          // 108
									React.createElement(                                                                                        // 115
										"li",                                                                                                      // 115
										{ className: "dropdown" },                                                                                 // 115
										React.createElement(                                                                                       // 115
											"a",                                                                                                      // 115
											{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                                   // 115
											React.createElement("i", { className: "fa fa-user" }),                                                    // 115
											"USER",                                                                                                   // 115
											React.createElement("b", { className: "caret" })                                                          // 115
										),                                                                                                         // 115
										React.createElement(                                                                                       // 117
											"ul",                                                                                                     // 117
											null,                                                                                                     // 117
											React.createElement(                                                                                      // 118
												"li",                                                                                                    // 118
												null,                                                                                                    // 118
												React.createElement(                                                                                     // 118
													"a",                                                                                                    // 118
													{ href: "#" },                                                                                          // 118
													"Add User"                                                                                              // 118
												)                                                                                                        // 118
											),                                                                                                        // 118
											React.createElement(                                                                                      // 119
												"li",                                                                                                    // 119
												null,                                                                                                    // 119
												React.createElement(                                                                                     // 119
													"a",                                                                                                    // 119
													{ href: "#" },                                                                                          // 119
													"Manage User"                                                                                           // 119
												)                                                                                                        // 119
											)                                                                                                         // 119
										)                                                                                                          // 117
									),                                                                                                          // 115
									React.createElement(                                                                                        // 122
										"li",                                                                                                      // 122
										{ className: "dropdown" },                                                                                 // 122
										React.createElement(                                                                                       // 122
											"a",                                                                                                      // 122
											{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                                   // 122
											React.createElement("i", { className: "fa fa-bar-chart-o" }),                                             // 122
											"MAP",                                                                                                    // 122
											React.createElement("b", { className: "caret" })                                                          // 122
										),                                                                                                         // 122
										React.createElement(                                                                                       // 124
											"ul",                                                                                                     // 124
											null,                                                                                                     // 124
											React.createElement(                                                                                      // 125
												"li",                                                                                                    // 125
												null,                                                                                                    // 125
												React.createElement(                                                                                     // 125
													"a",                                                                                                    // 125
													{ href: "#" },                                                                                          // 125
													"Client Map"                                                                                            // 125
												)                                                                                                        // 125
											),                                                                                                        // 125
											React.createElement(                                                                                      // 126
												"li",                                                                                                    // 126
												null,                                                                                                    // 126
												React.createElement(                                                                                     // 126
													"a",                                                                                                    // 126
													{ href: "#" },                                                                                          // 126
													"Mapining Management"                                                                                   // 126
												)                                                                                                        // 126
											)                                                                                                         // 126
										)                                                                                                          // 124
									)                                                                                                           // 122
								)                                                                                                            // 100
							)                                                                                                             // 99
						),                                                                                                             // 98
						React.createElement(                                                                                           // 132
							"div",                                                                                                        // 132
							{ className: "col-md-9 registration_form pad_t50" },                                                          // 132
							React.createElement(                                                                                          // 133
								"div",                                                                                                       // 133
								{ className: "col-md-10 col-md-offset-1" },                                                                  // 133
								React.createElement(                                                                                         // 134
									"h1",                                                                                                       // 134
									{ className: "title" },                                                                                     // 134
									"Manage User"                                                                                               // 134
								),                                                                                                           // 134
								React.createElement(                                                                                         // 137
									"div",                                                                                                      // 137
									{ className: "category" },                                                                                  // 137
									React.createElement(                                                                                        // 139
										"label",                                                                                                   // 139
										null,                                                                                                      // 139
										"Category "                                                                                                // 139
									),                                                                                                          // 139
									"  ",                                                                                                       // 137
									React.createElement(                                                                                        // 139
										"select",                                                                                                  // 139
										null,                                                                                                      // 139
										React.createElement(                                                                                       // 139
											"option",                                                                                                 // 139
											null,                                                                                                     // 139
											"Select Category"                                                                                         // 139
										)                                                                                                          // 139
									)                                                                                                           // 139
								),                                                                                                           // 137
								React.createElement(                                                                                         // 142
									"div",                                                                                                      // 142
									{ id: "user_status_change" },                                                                               // 142
									React.createElement("span", null)                                                                           // 142
								),                                                                                                           // 142
								React.createElement(                                                                                         // 143
									"table",                                                                                                    // 143
									{ width: "100%", border: "0", cellspacing: "0", cellpadding: "0", className: "table_cont" },                // 143
									React.createElement(                                                                                        // 145
										"th",                                                                                                      // 145
										null,                                                                                                      // 145
										"Staff Id"                                                                                                 // 145
									),                                                                                                          // 145
									React.createElement(                                                                                        // 146
										"th",                                                                                                      // 146
										null,                                                                                                      // 146
										"Name"                                                                                                     // 146
									),                                                                                                          // 146
									React.createElement(                                                                                        // 147
										"th",                                                                                                      // 147
										null,                                                                                                      // 147
										"Mobile"                                                                                                   // 147
									),                                                                                                          // 147
									React.createElement(                                                                                        // 148
										"th",                                                                                                      // 148
										null,                                                                                                      // 148
										"Status"                                                                                                   // 148
									),                                                                                                          // 148
									React.createElement(                                                                                        // 149
										"th",                                                                                                      // 149
										null,                                                                                                      // 149
										"Access"                                                                                                   // 149
									),                                                                                                          // 149
									React.createElement(                                                                                        // 150
										"th",                                                                                                      // 150
										null,                                                                                                      // 150
										"Edit"                                                                                                     // 150
									),                                                                                                          // 150
									React.createElement("tbody", { id: "user_list_docs" })                                                      // 152
								)                                                                                                            // 143
							)                                                                                                             // 133
						)                                                                                                              // 132
					)                                                                                                               // 97
				),                                                                                                               // 96
				React.createElement(                                                                                             // 161
					"div",                                                                                                          // 161
					{ className: "footer no_margin" },                                                                              // 161
					React.createElement(                                                                                            // 162
						"ul",                                                                                                          // 162
						null,                                                                                                          // 162
						React.createElement(                                                                                           // 163
							"li",                                                                                                         // 163
							null,                                                                                                         // 163
							React.createElement(                                                                                          // 163
								"a",                                                                                                         // 163
								{ href: "#" },                                                                                               // 163
								"Home"                                                                                                       // 163
							)                                                                                                             // 163
						),                                                                                                             // 163
						React.createElement(                                                                                           // 164
							"li",                                                                                                         // 164
							null,                                                                                                         // 164
							React.createElement(                                                                                          // 164
								"a",                                                                                                         // 164
								{ href: "#" },                                                                                               // 164
								"About Us"                                                                                                   // 164
							)                                                                                                             // 164
						),                                                                                                             // 164
						React.createElement(                                                                                           // 165
							"li",                                                                                                         // 165
							null,                                                                                                         // 165
							React.createElement(                                                                                          // 165
								"a",                                                                                                         // 165
								{ href: "#" },                                                                                               // 165
								"Services"                                                                                                   // 165
							)                                                                                                             // 165
						),                                                                                                             // 165
						React.createElement(                                                                                           // 166
							"li",                                                                                                         // 166
							null,                                                                                                         // 166
							React.createElement(                                                                                          // 166
								"a",                                                                                                         // 166
								{ href: "#" },                                                                                               // 166
								"Projects"                                                                                                   // 166
							)                                                                                                             // 166
						)                                                                                                              // 166
					)                                                                                                               // 162
				)                                                                                                                // 161
			);                                                                                                                // 87
		}                                                                                                                  // 172
                                                                                                                     //
		return render;                                                                                                     //
	}();                                                                                                                //
                                                                                                                     //
	return ManageUser;                                                                                                  //
}(Component);                                                                                                        //
                                                                                                                     //
module.export("default",exports.default=(ManageUser));                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Registration.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/Registration.jsx                                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck;module.import("babel-runtime/helpers/classCallCheck",{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import("babel-runtime/helpers/possibleConstructorReturn",{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import("babel-runtime/helpers/inherits",{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                                     //
                                                                                                                     //
                                                                                                                     // 1
                                                                                                                     //
// App component - represents the whole app                                                                          //
                                                                                                                     //
var Registration = function (_Component) {                                                                           //
  _inherits(Registration, _Component);                                                                               //
                                                                                                                     //
  function Registration() {                                                                                          //
    _classCallCheck(this, Registration);                                                                             //
                                                                                                                     //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                      //
  }                                                                                                                  //
                                                                                                                     //
  Registration.prototype.user_registration = function () {                                                           //
    function user_registration() {                                                                                   //
                                                                                                                     //
      //db.User.remove();                                                                                            //
                                                                                                                     //
      if ($("#uname").val().trim() == "" || $("#fname").val().trim() == "" || $("#lname").val().trim() == "" || $("#mail").val().trim() == "" || $("#pwd").val().trim() == "" || $("#addr").val().trim() == "" || $("#dob").val().trim() == "" || $("#sanswer").val().trim() == "") {} else {
                                                                                                                     //
        var x = $("#mail").val();                                                                                    // 19
        var atpos = x.indexOf("@");                                                                                  // 20
        var dotpos = x.lastIndexOf(".");                                                                             // 21
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {                                             // 22
          $("#error-div-mail").show();                                                                               // 23
          setTimeout(function () {                                                                                   // 24
            $("#error-div-mail").hide();                                                                             // 24
          }, 5000);                                                                                                  // 24
        } else {                                                                                                     // 26
                                                                                                                     //
          var sex_flag;                                                                                              // 30
          if (document.getElementById('male').checked) {                                                             // 31
            sex_flag = "Male";                                                                                       // 32
          } else if (document.getElementById('female').checked) {                                                    // 33
            sex_flag = "Female";                                                                                     // 35
          }                                                                                                          // 36
                                                                                                                     //
          var uname = $("#uname").val();                                                                             // 39
          var fname = $("#fname").val();                                                                             // 40
          var lname = $("#lname").val();                                                                             // 41
          var mail = $("#mail").val();                                                                               // 42
          var pwd = $("#pwd").val();                                                                                 // 43
          var addr = $("#addr").val();                                                                               // 44
          var dob = $("#dob").val();                                                                                 // 45
          var mob = $("#mob").val();                                                                                 // 46
                                                                                                                     //
          var sanswer = $("#sanswer").val();                                                                         // 48
                                                                                                                     //
          var e = document.getElementById("security_question");                                                      // 50
          var squestion = e.options[e.selectedIndex].value;                                                          // 51
                                                                                                                     //
          if (squestion == "") {} else {                                                                             // 53
            var dat = new Date();                                                                                    // 57
            var dt = dat.getFullYear().toString() + (dat.getMonth() + 1).toString() + dat.getDate().toString() + dat.getHours().toString() + dat.getMinutes().toString() + dat.getSeconds().toString() + dat.getMilliseconds().toString();
                                                                                                                     //
            if (User.find({ email: mail }).fetch() != "") {                                                          // 63
              $("#error-div").show();                                                                                // 64
              setTimeout(function () {                                                                               // 65
                $("#error-div").hide();                                                                              // 65
              }, 5000);                                                                                              // 65
            } else {                                                                                                 // 66
                                                                                                                     //
              User.insert({                                                                                          // 69
                user_id: dt,                                                                                         // 70
                role_id: "",                                                                                         // 71
                userName: uname,                                                                                     // 72
                password: pwd,                                                                                       // 73
                firstName: fname,                                                                                    // 74
                lastName: lname,                                                                                     // 75
                date_of_birth: dob,                                                                                  // 76
                sex: sex_flag,                                                                                       // 77
                email: mail,                                                                                         // 78
                mobile: mob,                                                                                         // 79
                address: addr,                                                                                       // 80
                is_active: "0",                                                                                      // 81
                registraion_accepted_by: "",                                                                         // 82
                created_by: dt,                                                                                      // 83
                created_date_time: new Date(),                                                                       // 84
                last_modified_date_time: new Date(),                                                                 // 85
                last_modified_by: dt,                                                                                // 86
                security_question: squestion,                                                                        // 87
                security_answer: sanswer                                                                             // 88
              });                                                                                                    // 69
            }                                                                                                        // 90
          }                                                                                                          // 91
        }                                                                                                            // 93
      }                                                                                                              // 96
    }                                                                                                                // 98
                                                                                                                     //
    return user_registration;                                                                                        //
  }();                                                                                                               //
                                                                                                                     //
  Registration.prototype.render = function () {                                                                      //
    function render() {                                                                                              //
      return React.createElement(                                                                                    // 103
        "div",                                                                                                       // 104
        null,                                                                                                        // 104
        React.createElement(                                                                                         // 105
          "div",                                                                                                     // 105
          { className: "hed_top" },                                                                                  // 105
          React.createElement(                                                                                       // 107
            "div",                                                                                                   // 107
            { className: "mid_container" },                                                                          // 107
            React.createElement(                                                                                     // 108
              "div",                                                                                                 // 108
              { className: "logoin" },                                                                               // 108
              "Appitude"                                                                                             // 108
            )                                                                                                        // 108
          )                                                                                                          // 107
        ),                                                                                                           // 105
        React.createElement(                                                                                         // 111
          "div",                                                                                                     // 111
          { className: "mid_content registration_form" },                                                            // 111
          React.createElement(                                                                                       // 112
            "div",                                                                                                   // 112
            { className: "container" },                                                                              // 112
            React.createElement(                                                                                     // 113
              "div",                                                                                                 // 113
              { className: "col-md-6 col-md-offset-3" },                                                             // 113
              React.createElement("div", { className: "card" }),                                                     // 114
              React.createElement(                                                                                   // 115
                "div",                                                                                               // 115
                { className: "card" },                                                                               // 115
                React.createElement(                                                                                 // 116
                  "h1",                                                                                              // 116
                  { className: "title" },                                                                            // 116
                  "Registration"                                                                                     // 116
                ),                                                                                                   // 116
                React.createElement(                                                                                 // 118
                  "div",                                                                                             // 118
                  { id: "error-div" },                                                                               // 118
                  React.createElement(                                                                               // 118
                    "span",                                                                                          // 118
                    null,                                                                                            // 118
                    "Email ID already exists."                                                                       // 118
                  )                                                                                                  // 118
                ),                                                                                                   // 118
                React.createElement(                                                                                 // 119
                  "div",                                                                                             // 119
                  { id: "error-div-mail" },                                                                          // 119
                  React.createElement(                                                                               // 119
                    "span",                                                                                          // 119
                    null,                                                                                            // 119
                    "This is not a valid Email address"                                                              // 119
                  )                                                                                                  // 119
                ),                                                                                                   // 119
                React.createElement(                                                                                 // 122
                  "form",                                                                                            // 122
                  { className: "form_pad" },                                                                         // 122
                  React.createElement(                                                                               // 123
                    "div",                                                                                           // 123
                    { className: "row" },                                                                            // 123
                    React.createElement(                                                                             // 124
                      "div",                                                                                         // 124
                      { className: "col-md-6" },                                                                     // 124
                      React.createElement(                                                                           // 125
                        "div",                                                                                       // 125
                        { className: "input-container" },                                                            // 125
                        React.createElement("input", { type: "text", required: "required", id: "uname" }),           // 126
                        React.createElement(                                                                         // 127
                          "label",                                                                                   // 127
                          { "for": "" },                                                                             // 127
                          "User Name"                                                                                // 127
                        ),                                                                                           // 127
                        React.createElement("div", { className: "bar" })                                             // 128
                      ),                                                                                             // 125
                      React.createElement(                                                                           // 130
                        "div",                                                                                       // 130
                        { className: "input-container" },                                                            // 130
                        React.createElement("input", { type: "text", required: "required", id: "fname" }),           // 131
                        React.createElement(                                                                         // 132
                          "label",                                                                                   // 132
                          { "for": " " },                                                                            // 132
                          "First Name"                                                                               // 132
                        ),                                                                                           // 132
                        React.createElement("div", { className: "bar" })                                             // 133
                      ),                                                                                             // 130
                      React.createElement(                                                                           // 135
                        "div",                                                                                       // 135
                        { className: "input-container" },                                                            // 135
                        React.createElement("input", { type: "text", required: "required", id: "lname" }),           // 136
                        React.createElement(                                                                         // 137
                          "label",                                                                                   // 137
                          { "for": " " },                                                                            // 137
                          "Last Name"                                                                                // 137
                        ),                                                                                           // 137
                        React.createElement("div", { className: "bar" })                                             // 138
                      ),                                                                                             // 135
                      React.createElement(                                                                           // 140
                        "div",                                                                                       // 140
                        { className: "input-container" },                                                            // 140
                        React.createElement("input", { type: "text", required: "required", id: "mail" }),            // 141
                        React.createElement(                                                                         // 142
                          "label",                                                                                   // 142
                          { "for": " " },                                                                            // 142
                          "Email Id"                                                                                 // 142
                        ),                                                                                           // 142
                        React.createElement("div", { className: "bar" })                                             // 143
                      ),                                                                                             // 140
                      React.createElement(                                                                           // 145
                        "div",                                                                                       // 145
                        { className: "input-container" },                                                            // 145
                        React.createElement("input", { type: "password", required: "required", id: "pwd" }),         // 146
                        React.createElement(                                                                         // 147
                          "label",                                                                                   // 147
                          { "for": " " },                                                                            // 147
                          "Password"                                                                                 // 147
                        ),                                                                                           // 147
                        React.createElement("div", { className: "bar" })                                             // 148
                      ),                                                                                             // 145
                      React.createElement(                                                                           // 150
                        "div",                                                                                       // 150
                        { className: "input-container" },                                                            // 150
                        React.createElement("input", { type: "text", required: "required", id: "addr" }),            // 151
                        React.createElement(                                                                         // 152
                          "label",                                                                                   // 152
                          { "for": " " },                                                                            // 152
                          "Parmanent Address"                                                                        // 152
                        ),                                                                                           // 152
                        React.createElement("div", { className: "bar" })                                             // 153
                      )                                                                                              // 150
                    ),                                                                                               // 124
                    React.createElement(                                                                             // 157
                      "div",                                                                                         // 157
                      { className: "col-md-6" },                                                                     // 157
                      React.createElement(                                                                           // 158
                        "div",                                                                                       // 158
                        { className: "input-container" },                                                            // 158
                        React.createElement("input", { type: "text", required: "required", placeholder: "", id: "dob" }),
                        React.createElement(                                                                         // 160
                          "label",                                                                                   // 160
                          { "for": " " },                                                                            // 160
                          "Date Of Birth"                                                                            // 160
                        ),                                                                                           // 160
                        React.createElement("div", { className: "bar" })                                             // 161
                      ),                                                                                             // 158
                      React.createElement(                                                                           // 163
                        "div",                                                                                       // 163
                        { className: "input-container gender" },                                                     // 163
                        React.createElement(                                                                         // 164
                          "div",                                                                                     // 164
                          null,                                                                                      // 164
                          " Gender"                                                                                  // 164
                        ),                                                                                           // 164
                        React.createElement(                                                                         // 165
                          "span",                                                                                    // 165
                          null,                                                                                      // 165
                          React.createElement("input", { type: "radio", name: "m", id: "male" }),                    // 166
                          "Male"                                                                                     // 165
                        ),                                                                                           // 165
                        " ",                                                                                         // 163
                        React.createElement(                                                                         // 167
                          "span",                                                                                    // 167
                          null,                                                                                      // 167
                          React.createElement("input", { type: "radio", name: "m", id: "female" }),                  // 168
                          "Female "                                                                                  // 167
                        )                                                                                            // 167
                      ),                                                                                             // 163
                      React.createElement(                                                                           // 170
                        "div",                                                                                       // 170
                        { className: "input-container" },                                                            // 170
                        React.createElement("input", { type: "number", required: "required", id: "mob" }),           // 171
                        React.createElement(                                                                         // 172
                          "label",                                                                                   // 172
                          { "for": " " },                                                                            // 172
                          "Phone No"                                                                                 // 172
                        ),                                                                                           // 172
                        React.createElement("div", { className: "bar" })                                             // 173
                      ),                                                                                             // 170
                      React.createElement(                                                                           // 176
                        "span",                                                                                      // 176
                        null,                                                                                        // 176
                        "Security Question"                                                                          // 176
                      ),                                                                                             // 176
                      React.createElement(                                                                           // 177
                        "select",                                                                                    // 177
                        { id: "security_question" },                                                                 // 177
                        React.createElement(                                                                         // 178
                          "option",                                                                                  // 178
                          { value: "" },                                                                             // 178
                          "Select a security question"                                                               // 178
                        ),                                                                                           // 178
                        React.createElement(                                                                         // 179
                          "option",                                                                                  // 179
                          { value: "" },                                                                             // 179
                          "Question1"                                                                                // 179
                        ),                                                                                           // 179
                        React.createElement(                                                                         // 180
                          "option",                                                                                  // 180
                          { value: "" },                                                                             // 180
                          "Question2"                                                                                // 180
                        ),                                                                                           // 180
                        React.createElement(                                                                         // 181
                          "option",                                                                                  // 181
                          { value: "" },                                                                             // 181
                          "Question3"                                                                                // 181
                        )                                                                                            // 181
                      ),                                                                                             // 177
                      React.createElement(                                                                           // 184
                        "div",                                                                                       // 184
                        { className: "input-container" },                                                            // 184
                        React.createElement("input", { type: "text", required: "required", id: "sanswer" }),         // 185
                        React.createElement(                                                                         // 186
                          "label",                                                                                   // 186
                          { "for": " " },                                                                            // 186
                          "Security Answer"                                                                          // 186
                        ),                                                                                           // 186
                        React.createElement("div", { className: "bar" })                                             // 187
                      )                                                                                              // 184
                    )                                                                                                // 157
                  ),                                                                                                 // 123
                  React.createElement(                                                                               // 193
                    "div",                                                                                           // 193
                    { className: "button-container" },                                                               // 193
                    React.createElement(                                                                             // 194
                      "button",                                                                                      // 194
                      { onClick: this.user_registration },                                                           // 194
                      React.createElement(                                                                           // 194
                        "span",                                                                                      // 194
                        null,                                                                                        // 194
                        "SAVE"                                                                                       // 194
                      )                                                                                              // 194
                    )                                                                                                // 194
                  )                                                                                                  // 193
                )                                                                                                    // 122
              )                                                                                                      // 115
            )                                                                                                        // 113
          )                                                                                                          // 112
        )                                                                                                            // 111
      );                                                                                                             // 104
    }                                                                                                                // 206
                                                                                                                     //
    return render;                                                                                                   //
  }();                                                                                                               //
                                                                                                                     //
  return Registration;                                                                                               //
}(Component);                                                                                                        //
                                                                                                                     //
module.export("default",exports.default=(Registration));                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"collections":{"init.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// collections/init.js                                                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Role = new Mongo.Collection('role');                                                                                 // 1
User = new Mongo.Collection('user');                                                                                 // 2
Client = new Mongo.Collection('aptitude_client');                                                                    // 3
                                                                                                                     //
Role.allow({                                                                                                         // 6
	insert: function () {                                                                                               // 7
		function insert(userId, doc) {                                                                                     // 7
			return true;                                                                                                      // 8
		}                                                                                                                  // 9
                                                                                                                     //
		return insert;                                                                                                     // 7
	}(),                                                                                                                // 7
	update: function () {                                                                                               // 10
		function update(userId, doc) {                                                                                     // 10
			return true;                                                                                                      // 11
		}                                                                                                                  // 12
                                                                                                                     //
		return update;                                                                                                     // 10
	}()                                                                                                                 // 10
});                                                                                                                  // 6
                                                                                                                     //
User.allow({                                                                                                         // 15
	insert: function () {                                                                                               // 16
		function insert(userId, doc) {                                                                                     // 16
			return true;                                                                                                      // 17
		}                                                                                                                  // 18
                                                                                                                     //
		return insert;                                                                                                     // 16
	}(),                                                                                                                // 16
	update: function () {                                                                                               // 19
		function update(userId, doc) {                                                                                     // 19
			return true;                                                                                                      // 20
		}                                                                                                                  // 21
                                                                                                                     //
		return update;                                                                                                     // 19
	}(),                                                                                                                // 19
	remove: function () {                                                                                               // 22
		function remove(userId, doc) {                                                                                     // 22
			return true;                                                                                                      // 23
		}                                                                                                                  // 24
                                                                                                                     //
		return remove;                                                                                                     // 22
	}()                                                                                                                 // 22
});                                                                                                                  // 15
                                                                                                                     //
Client.allow({                                                                                                       // 27
	insert: function () {                                                                                               // 28
		function insert(userId, doc) {                                                                                     // 28
			return true;                                                                                                      // 29
		}                                                                                                                  // 30
                                                                                                                     //
		return insert;                                                                                                     // 28
	}(),                                                                                                                // 28
	update: function () {                                                                                               // 31
		function update(userId, doc) {                                                                                     // 31
			return true;                                                                                                      // 32
		}                                                                                                                  // 33
                                                                                                                     //
		return update;                                                                                                     // 31
	}(),                                                                                                                // 31
	remove: function () {                                                                                               // 34
		function remove(userId, doc) {                                                                                     // 34
			return true;                                                                                                      // 35
		}                                                                                                                  // 36
                                                                                                                     //
		return remove;                                                                                                     // 34
	}()                                                                                                                 // 34
});                                                                                                                  // 27
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css",".jsx"]});
require("./client/template.main.js");
require("./collections/init.js");
require("./client/main.jsx");