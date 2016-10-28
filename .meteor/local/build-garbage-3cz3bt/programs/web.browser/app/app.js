var require = meteorInstall({"client":{"template.main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// client/template.main.js                                                                                   //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
                                                                                                             // 1
Template.body.addContent((function() {                                                                       // 2
  var view = this;                                                                                           // 3
  return HTML.Raw('<div id="render-target"></div>');                                                         // 4
}));                                                                                                         // 5
Meteor.startup(Template.body.renderToDocument);                                                              // 6
                                                                                                             // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.jsx":["react","meteor/meteor","react-dom","../imports/ui/Registration.jsx","../imports/ui/AddClient.jsx","../imports/ui/Login.jsx",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// client/main.jsx                                                                                           //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var React;module.import('react',{"default":function(v){React=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var render;module.import('react-dom',{"render":function(v){render=v}});var Registration;module.import('../imports/ui/Registration.jsx',{"default":function(v){Registration=v}});var AddClient;module.import('../imports/ui/AddClient.jsx',{"default":function(v){AddClient=v}});var Login;module.import('../imports/ui/Login.jsx',{"default":function(v){Login=v}});
                                                                                                             // 2
                                                                                                             // 3
                                                                                                             //
                                                                                                             // 6
                                                                                                             // 7
                                                                                                             // 8
                                                                                                             //
Meteor.startup(function () {                                                                                 // 11
  render(React.createElement(AddClient, null), document.getElementById('render-target'));                    // 12
  render(React.createElement(Login, null), document.getElementById('render-target'));                        // 13
  render(React.createElement(Registration, null), document.getElementById('render-target'));                 // 14
});                                                                                                          // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"imports":{"ui":{"AddClient.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/AddClient.jsx                                                                                  //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck;module.import("babel-runtime/helpers/classCallCheck",{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import("babel-runtime/helpers/possibleConstructorReturn",{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import("babel-runtime/helpers/inherits",{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                             //
                                                                                                             //
                                                                                                             // 1
                                                                                                             //
var AddClient = function (_Component) {                                                                      //
	_inherits(AddClient, _Component);                                                                           //
                                                                                                             //
	function AddClient() {                                                                                      //
		_classCallCheck(this, AddClient);                                                                          //
                                                                                                             //
		return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                //
	}                                                                                                           //
                                                                                                             //
	AddClient.prototype.add_client = function () {                                                              //
		function add_client() {                                                                                    //
			if ($("#client_id").val().trim() == "" || $("#company_name").val().trim() == "" || $("#addr").val().trim() == "" || $("#mail").val().trim() == "" || $("#mob").val().trim() == "" || $("#website").val().trim() == "" || $("#city").val().trim() == "" || $("#state").val().trim() == "" || $("#pin").val().trim() == "" || $("#contact_name").val().trim() == "" || $("#contact_number").val().trim() == "" || $("#job_title").val().trim() == "") {} else {
                                                                                                             //
				var x = $("#mail").val();                                                                                // 13
				var atpos = x.indexOf("@");                                                                              // 14
				var dotpos = x.lastIndexOf(".");                                                                         // 15
				if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {                                         // 16
					$("#error-div-mail").show();                                                                            // 17
					setTimeout(function () {                                                                                // 18
						$("#error-div-mail").hide();                                                                           // 18
					}, 5000);                                                                                               // 18
				} else {                                                                                                 // 20
                                                                                                             //
					var client_id = Client.find().count() + 1;                                                              // 25
					var company_name = $("#company_name").val();                                                            // 26
					var company_address = $("#addr").val();                                                                 // 27
					var company_mail = $("#mail").val();                                                                    // 28
					var company_mobile = $("#mob").val();                                                                   // 29
					var company_website = $("#website").val();                                                              // 30
					var company_city = $("#city").val();                                                                    // 31
					var company_state = $("#state").val();                                                                  // 32
					var company_pin = $("#pin").val();                                                                      // 33
					var company_contact_person_name = $("#contact_name").val();                                             // 34
					var company_contact_person_number = $("#contact_number").val();                                         // 35
					var company_contact_person_job_title = $("#job_title").val();                                           // 36
                                                                                                             //
					var e = document.getElementById("country");                                                             // 38
					var company_country = e.options[e.selectedIndex].value;                                                 // 39
                                                                                                             //
					if (Client.find({ email: company_mail }).fetch() != "") {                                               // 46
						$("#error-div").show();                                                                                // 47
						setTimeout(function () {                                                                               // 48
							$("#error-div").hide();                                                                               // 48
						}, 5000);                                                                                              // 48
					} else {                                                                                                // 49
                                                                                                             //
						Client.insert({                                                                                        // 52
							client_id: client_id,                                                                                 // 53
							client_company_name: company_name,                                                                    // 54
							client_address: company_address,                                                                      // 55
							client_email: company_mail,                                                                           // 56
							client_phone_number: company_mobile,                                                                  // 57
							client_website: company_website,                                                                      // 58
							client_city: company_city,                                                                            // 59
							client_state: company_state,                                                                          // 60
							client_country: company_country,                                                                      // 61
							client_pin: company_pin,                                                                              // 62
							client_contact_person_name: company_contact_person_name,                                              // 63
							client_contact_person_number: company_contact_person_number,                                          // 64
							client_contact_person_job_title: company_contact_person_job_title,                                    // 65
							is_active: "1",                                                                                       // 66
							created_by_id: "1",                                                                                   // 67
							created_date_time: new Date(),                                                                        // 68
							last_modified_id: "1",                                                                                // 69
							last_modified_date_time: new Date(),                                                                  // 70
							client_aptitude_url: company_name.toLowerCase() + ".aptitude.com",                                    // 71
							is_schema_generated: "0"                                                                              // 72
						});                                                                                                    // 52
					}                                                                                                       // 74
				}                                                                                                        // 77
			}                                                                                                         // 80
		}                                                                                                          // 81
                                                                                                             //
		return add_client;                                                                                         //
	}();                                                                                                        //
                                                                                                             //
	AddClient.prototype.render = function () {                                                                  //
		function render() {                                                                                        //
			return React.createElement(                                                                               // 84
				"body",                                                                                                  // 86
				{ id: "add", onload: this.load_client_id },                                                              // 86
				React.createElement(                                                                                     // 87
					"div",                                                                                                  // 87
					{ className: "hed_top" },                                                                               // 87
					React.createElement(                                                                                    // 88
						"div",                                                                                                 // 88
						{ className: "mid_container" },                                                                        // 88
						React.createElement(                                                                                   // 89
							"div",                                                                                                // 89
							{ className: "logo" },                                                                                // 89
							"Aptitude"                                                                                            // 89
						),                                                                                                     // 89
						React.createElement(                                                                                   // 90
							"div",                                                                                                // 90
							{ className: "hed_top_right" },                                                                       // 90
							React.createElement(                                                                                  // 91
								"label",                                                                                             // 91
								null,                                                                                                // 91
								"Logged in as Srinivas"                                                                              // 91
							),                                                                                                    // 91
							React.createElement(                                                                                  // 92
								"a",                                                                                                 // 92
								{ href: "#" },                                                                                       // 92
								React.createElement("img", { src: "/images/logout.png" }),                                           // 92
								"Log Out"                                                                                            // 92
							)                                                                                                     // 92
						)                                                                                                      // 90
					)                                                                                                       // 88
				),                                                                                                       // 87
				React.createElement(                                                                                     // 95
					"div",                                                                                                  // 95
					{ className: "no_pad clearfix" },                                                                       // 95
					React.createElement(                                                                                    // 96
						"div",                                                                                                 // 96
						{ className: "clearfix overflow" },                                                                    // 96
						React.createElement(                                                                                   // 97
							"div",                                                                                                // 97
							{ className: "col-md-2 no_pad" },                                                                     // 97
							React.createElement(                                                                                  // 98
								"div",                                                                                               // 98
								{ className: "collapse navbar-collapse navbar-ex1-collapse" },                                       // 98
								React.createElement(                                                                                 // 99
									"ul",                                                                                               // 99
									{ className: "nav navbar-nav side-nav" },                                                           // 99
									React.createElement(                                                                                // 100
										"li",                                                                                              // 100
										{ className: "dropdown" },                                                                         // 100
										React.createElement(                                                                               // 100
											"a",                                                                                              // 100
											{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                           // 100
											React.createElement("i", { className: "fa fa-user" }),                                            // 100
											"CLIENT",                                                                                         // 100
											React.createElement("b", { className: "caret" })                                                  // 100
										),                                                                                                 // 100
										React.createElement(                                                                               // 101
											"ul",                                                                                             // 101
											{ className: "dropdown-menu" },                                                                   // 101
											React.createElement(                                                                              // 102
												"li",                                                                                            // 102
												null,                                                                                            // 102
												React.createElement(                                                                             // 102
													"a",                                                                                            // 102
													{ href: "#" },                                                                                  // 102
													"Add Client"                                                                                    // 102
												)                                                                                                // 102
											),                                                                                                // 102
											React.createElement(                                                                              // 103
												"li",                                                                                            // 103
												null,                                                                                            // 103
												React.createElement(                                                                             // 103
													"a",                                                                                            // 103
													{ href: "#" },                                                                                  // 103
													"Manage Client"                                                                                 // 103
												)                                                                                                // 103
											)                                                                                                 // 103
										)                                                                                                  // 101
									),                                                                                                  // 100
									React.createElement(                                                                                // 106
										"li",                                                                                              // 106
										{ className: "dropdown" },                                                                         // 106
										React.createElement(                                                                               // 106
											"a",                                                                                              // 106
											{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                           // 106
											React.createElement("i", { className: "fa fa-file" }),                                            // 106
											"FORM",                                                                                           // 106
											React.createElement("b", { className: "caret" })                                                  // 106
										),                                                                                                 // 106
										React.createElement(                                                                               // 107
											"ul",                                                                                             // 107
											{ className: "dropdown-menu" },                                                                   // 107
											React.createElement(                                                                              // 108
												"li",                                                                                            // 108
												null,                                                                                            // 108
												React.createElement(                                                                             // 108
													"a",                                                                                            // 108
													{ href: "#" },                                                                                  // 108
													"Add Form"                                                                                      // 108
												)                                                                                                // 108
											),                                                                                                // 108
											React.createElement(                                                                              // 109
												"li",                                                                                            // 109
												null,                                                                                            // 109
												React.createElement(                                                                             // 109
													"a",                                                                                            // 109
													{ href: "#" },                                                                                  // 109
													"Manage Form"                                                                                   // 109
												)                                                                                                // 109
											)                                                                                                 // 109
										)                                                                                                  // 107
									),                                                                                                  // 106
									React.createElement(                                                                                // 112
										"li",                                                                                              // 112
										{ className: "dropdown" },                                                                         // 112
										React.createElement(                                                                               // 112
											"a",                                                                                              // 112
											{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                           // 112
											React.createElement("i", { className: "fa fa-user" }),                                            // 112
											"USER",                                                                                           // 112
											React.createElement("b", { className: "caret" })                                                  // 112
										),                                                                                                 // 112
										React.createElement(                                                                               // 113
											"ul",                                                                                             // 113
											{ className: "dropdown-menu" },                                                                   // 113
											React.createElement(                                                                              // 114
												"li",                                                                                            // 114
												null,                                                                                            // 114
												React.createElement(                                                                             // 114
													"a",                                                                                            // 114
													{ href: "#" },                                                                                  // 114
													"Add User"                                                                                      // 114
												)                                                                                                // 114
											),                                                                                                // 114
											React.createElement(                                                                              // 115
												"li",                                                                                            // 115
												null,                                                                                            // 115
												React.createElement(                                                                             // 115
													"a",                                                                                            // 115
													{ href: "#" },                                                                                  // 115
													"Manage User"                                                                                   // 115
												)                                                                                                // 115
											)                                                                                                 // 115
										)                                                                                                  // 113
									),                                                                                                  // 112
									React.createElement(                                                                                // 118
										"li",                                                                                              // 118
										{ className: "dropdown" },                                                                         // 118
										React.createElement(                                                                               // 118
											"a",                                                                                              // 118
											{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },                           // 118
											React.createElement("i", { className: "fa fa-bar-chart-o" }),                                     // 118
											"MAP",                                                                                            // 118
											React.createElement("b", { className: "caret" })                                                  // 118
										),                                                                                                 // 118
										React.createElement(                                                                               // 119
											"ul",                                                                                             // 119
											{ className: "dropdown-menu" },                                                                   // 119
											React.createElement(                                                                              // 120
												"li",                                                                                            // 120
												null,                                                                                            // 120
												React.createElement(                                                                             // 120
													"a",                                                                                            // 120
													{ href: "#" },                                                                                  // 120
													"Client Map"                                                                                    // 120
												)                                                                                                // 120
											),                                                                                                // 120
											React.createElement(                                                                              // 121
												"li",                                                                                            // 121
												null,                                                                                            // 121
												React.createElement(                                                                             // 121
													"a",                                                                                            // 121
													{ href: "#" },                                                                                  // 121
													"Mapining Management"                                                                           // 121
												)                                                                                                // 121
											)                                                                                                 // 121
										)                                                                                                  // 119
									)                                                                                                   // 118
								)                                                                                                    // 99
							)                                                                                                     // 98
						),                                                                                                     // 97
						React.createElement(                                                                                   // 127
							"div",                                                                                                // 127
							{ className: "col-md-9 registration_form pad_t50" },                                                  // 127
							React.createElement(                                                                                  // 128
								"div",                                                                                               // 128
								{ className: "col-md-8 col-md-offset-2" },                                                           // 128
								React.createElement("div", { className: "card" }),                                                   // 129
								React.createElement(                                                                                 // 130
									"div",                                                                                              // 130
									{ className: "card" },                                                                              // 130
									React.createElement(                                                                                // 131
										"h1",                                                                                              // 131
										{ className: "title" },                                                                            // 131
										"Add Client"                                                                                       // 131
									),                                                                                                  // 131
									React.createElement(                                                                                // 133
										"div",                                                                                             // 133
										{ id: "error-div" },                                                                               // 133
										React.createElement(                                                                               // 133
											"span",                                                                                           // 133
											null,                                                                                             // 133
											"Email ID already exists."                                                                        // 133
										)                                                                                                  // 133
									),                                                                                                  // 133
									React.createElement(                                                                                // 134
										"div",                                                                                             // 134
										{ id: "error-div-mail" },                                                                          // 134
										React.createElement(                                                                               // 134
											"span",                                                                                           // 134
											null,                                                                                             // 134
											"This is not a valid Email address"                                                               // 134
										)                                                                                                  // 134
									),                                                                                                  // 134
									React.createElement(                                                                                // 137
										"form",                                                                                            // 137
										{ className: "form_pad" },                                                                         // 137
										React.createElement(                                                                               // 138
											"div",                                                                                            // 138
											{ className: "row" },                                                                             // 138
											React.createElement(                                                                              // 139
												"div",                                                                                           // 139
												{ className: "col-md-6" },                                                                       // 139
												React.createElement(                                                                             // 140
													"div",                                                                                          // 140
													{ className: "input-container" },                                                               // 140
													React.createElement("input", { type: "autogenerated", required: "required", id: "client_id" }),
													React.createElement(                                                                            // 142
														"label",                                                                                       // 142
														{ "for": "" },                                                                                 // 142
														"Client ID"                                                                                    // 142
													),                                                                                              // 142
													React.createElement("div", { className: "bar" })                                                // 143
												),                                                                                               // 140
												React.createElement(                                                                             // 145
													"div",                                                                                          // 145
													{ className: "input-container" },                                                               // 145
													React.createElement("input", { type: "text", required: "required", id: "company_name" }),       // 146
													React.createElement(                                                                            // 147
														"label",                                                                                       // 147
														{ "for": "" },                                                                                 // 147
														"Company Name"                                                                                 // 147
													),                                                                                              // 147
													React.createElement("div", { className: "bar" })                                                // 148
												),                                                                                               // 145
												React.createElement(                                                                             // 150
													"div",                                                                                          // 150
													{ className: "input-container" },                                                               // 150
													React.createElement("input", { type: "text", required: "required", id: "addr" }),               // 151
													React.createElement(                                                                            // 152
														"label",                                                                                       // 152
														{ "for": " " },                                                                                // 152
														"Address"                                                                                      // 152
													),                                                                                              // 152
													React.createElement("div", { className: "bar" })                                                // 153
												),                                                                                               // 150
												React.createElement(                                                                             // 155
													"div",                                                                                          // 155
													{ className: "input-container" },                                                               // 155
													React.createElement("input", { type: "text", required: "required", id: "mail" }),               // 156
													React.createElement(                                                                            // 157
														"label",                                                                                       // 157
														{ "for": " " },                                                                                // 157
														"Email"                                                                                        // 157
													),                                                                                              // 157
													React.createElement("div", { className: "bar" })                                                // 158
												),                                                                                               // 155
												React.createElement(                                                                             // 160
													"div",                                                                                          // 160
													{ className: "input-container" },                                                               // 160
													React.createElement("input", { type: "number", required: "required", id: "mob" }),              // 161
													React.createElement(                                                                            // 162
														"label",                                                                                       // 162
														{ "for": " " },                                                                                // 162
														"Phone No"                                                                                     // 162
													),                                                                                              // 162
													React.createElement("div", { className: "bar" })                                                // 163
												),                                                                                               // 160
												React.createElement(                                                                             // 165
													"div",                                                                                          // 165
													{ className: "input-container" },                                                               // 165
													React.createElement("input", { type: "text", required: "required", id: "website" }),            // 166
													React.createElement(                                                                            // 167
														"label",                                                                                       // 167
														{ "for": "" },                                                                                 // 167
														"Website"                                                                                      // 167
													),                                                                                              // 167
													React.createElement("div", { className: "bar" })                                                // 168
												)                                                                                                // 165
											),                                                                                                // 139
											React.createElement(                                                                              // 171
												"div",                                                                                           // 171
												{ className: "col-md-6" },                                                                       // 171
												React.createElement(                                                                             // 172
													"div",                                                                                          // 172
													{ className: "input-container" },                                                               // 172
													React.createElement("input", { type: "text", required: "required", id: "city" }),               // 173
													React.createElement(                                                                            // 174
														"label",                                                                                       // 174
														{ "for": "" },                                                                                 // 174
														"City"                                                                                         // 174
													),                                                                                              // 174
													React.createElement("div", { className: "bar" })                                                // 175
												),                                                                                               // 172
												React.createElement(                                                                             // 177
													"div",                                                                                          // 177
													{ className: "input-container" },                                                               // 177
													React.createElement("input", { type: "text", required: "required", id: "state" }),              // 178
													React.createElement(                                                                            // 179
														"label",                                                                                       // 179
														{ "for": "" },                                                                                 // 179
														"State"                                                                                        // 179
													),                                                                                              // 179
													React.createElement("div", { className: "bar" })                                                // 180
												),                                                                                               // 177
												React.createElement(                                                                             // 182
													"div",                                                                                          // 182
													{ className: "input-container" },                                                               // 182
													React.createElement(                                                                            // 183
														"select",                                                                                      // 183
														{ id: "country" },                                                                             // 183
														React.createElement(                                                                           // 184
															"option",                                                                                     // 184
															null,                                                                                         // 184
															"Country"                                                                                     // 184
														)                                                                                              // 184
													)                                                                                               // 183
												),                                                                                               // 182
												React.createElement(                                                                             // 187
													"div",                                                                                          // 187
													{ className: "input-container" },                                                               // 187
													React.createElement("input", { type: "num", required: "required", id: "pin" }),                 // 188
													React.createElement(                                                                            // 189
														"label",                                                                                       // 189
														{ "for": " " },                                                                                // 189
														"Pin Code"                                                                                     // 189
													),                                                                                              // 189
													React.createElement("div", { className: "bar" })                                                // 190
												),                                                                                               // 187
												React.createElement(                                                                             // 192
													"div",                                                                                          // 192
													{ className: "input-container" },                                                               // 192
													React.createElement("input", { type: "text", required: "required", id: "contact_name" }),       // 193
													React.createElement(                                                                            // 194
														"label",                                                                                       // 194
														{ "for": " " },                                                                                // 194
														"Contact Name"                                                                                 // 194
													),                                                                                              // 194
													React.createElement("div", { className: "bar" })                                                // 195
												),                                                                                               // 192
												React.createElement(                                                                             // 197
													"div",                                                                                          // 197
													{ className: "input-container" },                                                               // 197
													React.createElement("input", { type: "num", required: "required", id: "contact_number" }),      // 198
													React.createElement(                                                                            // 199
														"label",                                                                                       // 199
														{ "for": " " },                                                                                // 199
														"Contact No"                                                                                   // 199
													),                                                                                              // 199
													React.createElement("div", { className: "bar" })                                                // 200
												),                                                                                               // 197
												React.createElement(                                                                             // 202
													"div",                                                                                          // 202
													{ className: "input-container" },                                                               // 202
													React.createElement("input", { type: "text", required: "required", id: "job_title" }),          // 203
													React.createElement(                                                                            // 204
														"label",                                                                                       // 204
														{ "for": " " },                                                                                // 204
														"Job Title"                                                                                    // 204
													),                                                                                              // 204
													React.createElement("div", { className: "bar" })                                                // 205
												)                                                                                                // 202
											)                                                                                                 // 171
										),                                                                                                 // 138
										React.createElement(                                                                               // 209
											"div",                                                                                            // 209
											{ className: "button-container" },                                                                // 209
											React.createElement(                                                                              // 210
												"button",                                                                                        // 210
												{ onClick: this.add_client },                                                                    // 210
												React.createElement(                                                                             // 210
													"span",                                                                                         // 210
													null,                                                                                           // 210
													"SAVE"                                                                                          // 210
												)                                                                                                // 210
											)                                                                                                 // 210
										)                                                                                                  // 209
									)                                                                                                   // 137
								)                                                                                                    // 130
							)                                                                                                     // 128
						)                                                                                                      // 127
					)                                                                                                       // 96
				),                                                                                                       // 95
				React.createElement(                                                                                     // 218
					"div",                                                                                                  // 218
					{ className: "footer no_margin" },                                                                      // 218
					React.createElement(                                                                                    // 219
						"ul",                                                                                                  // 219
						null,                                                                                                  // 219
						React.createElement(                                                                                   // 220
							"li",                                                                                                 // 220
							null,                                                                                                 // 220
							React.createElement(                                                                                  // 220
								"a",                                                                                                 // 220
								{ href: "#" },                                                                                       // 220
								"Home"                                                                                               // 220
							)                                                                                                     // 220
						),                                                                                                     // 220
						React.createElement(                                                                                   // 221
							"li",                                                                                                 // 221
							null,                                                                                                 // 221
							React.createElement(                                                                                  // 221
								"a",                                                                                                 // 221
								{ href: "#" },                                                                                       // 221
								"About Us"                                                                                           // 221
							)                                                                                                     // 221
						),                                                                                                     // 221
						React.createElement(                                                                                   // 222
							"li",                                                                                                 // 222
							null,                                                                                                 // 222
							React.createElement(                                                                                  // 222
								"a",                                                                                                 // 222
								{ href: "#" },                                                                                       // 222
								"Services"                                                                                           // 222
							)                                                                                                     // 222
						),                                                                                                     // 222
						React.createElement(                                                                                   // 223
							"li",                                                                                                 // 223
							null,                                                                                                 // 223
							React.createElement(                                                                                  // 223
								"a",                                                                                                 // 223
								{ href: "#" },                                                                                       // 223
								"Projects"                                                                                           // 223
							)                                                                                                     // 223
						)                                                                                                      // 223
					)                                                                                                       // 219
				)                                                                                                        // 218
			);                                                                                                        // 86
		}                                                                                                          // 230
                                                                                                             //
		return render;                                                                                             //
	}();                                                                                                        //
                                                                                                             //
	return AddClient;                                                                                           //
}(Component);                                                                                                //
                                                                                                             //
module.export("default",exports.default=(AddClient));                                                        //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Login.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/Login.jsx                                                                                      //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                             //
                                                                                                             //
                                                                                                             // 1
                                                                                                             //
// App component - represents the whole app                                                                  //
                                                                                                             //
var Login = function (_Component) {                                                                          //
  _inherits(Login, _Component);                                                                              //
                                                                                                             //
  function Login() {                                                                                         //
    _classCallCheck(this, Login);                                                                            //
                                                                                                             //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                              //
  }                                                                                                          //
                                                                                                             //
  Login.prototype.switch_to_frgt_pwd = function () {                                                         //
    function switch_to_frgt_pwd() {                                                                          //
      FlowRouter.go('ForgotPassword.jsx');                                                                   // 8
    }                                                                                                        // 9
                                                                                                             //
    return switch_to_frgt_pwd;                                                                               //
  }();                                                                                                       //
                                                                                                             //
  Login.prototype.render = function () {                                                                     //
    function render() {                                                                                      //
      return React.createElement(                                                                            // 12
        'body',                                                                                              // 13
        null,                                                                                                // 13
        React.createElement(                                                                                 // 14
          'div',                                                                                             // 14
          { className: 'hed_top' },                                                                          // 14
          React.createElement(                                                                               // 16
            'div',                                                                                           // 16
            { className: 'mid_container' },                                                                  // 16
            React.createElement(                                                                             // 17
              'div',                                                                                         // 17
              { className: 'logoin' },                                                                       // 17
              'Appitude'                                                                                     // 17
            )                                                                                                // 17
          )                                                                                                  // 16
        ),                                                                                                   // 14
        React.createElement(                                                                                 // 20
          'div',                                                                                             // 20
          { className: 'mid_content' },                                                                      // 20
          React.createElement(                                                                               // 21
            'div',                                                                                           // 21
            { className: 'login_col' },                                                                      // 21
            React.createElement('div', { className: 'card' }),                                               // 22
            React.createElement(                                                                             // 23
              'div',                                                                                         // 23
              { className: 'card' },                                                                         // 23
              React.createElement(                                                                           // 24
                'h1',                                                                                        // 24
                { className: 'title' },                                                                      // 24
                'Login'                                                                                      // 24
              ),                                                                                             // 24
              React.createElement(                                                                           // 25
                'form',                                                                                      // 25
                null,                                                                                        // 25
                React.createElement(                                                                         // 27
                  'div',                                                                                     // 27
                  { className: 'input-container' },                                                          // 27
                  React.createElement('input', { type: 'text', id: 'Username', required: 'required' }),      // 28
                  React.createElement(                                                                       // 29
                    'label',                                                                                 // 29
                    { 'for': 'Username' },                                                                   // 29
                    'User Name'                                                                              // 29
                  ),                                                                                         // 29
                  React.createElement('div', { className: 'bar' })                                           // 30
                ),                                                                                           // 27
                React.createElement(                                                                         // 32
                  'div',                                                                                     // 32
                  { className: 'input-container' },                                                          // 32
                  React.createElement('input', { type: 'password', id: 'Password', required: 'required' }),  // 33
                  React.createElement(                                                                       // 34
                    'label',                                                                                 // 34
                    { 'for': 'Password' },                                                                   // 34
                    'Password'                                                                               // 34
                  ),                                                                                         // 34
                  React.createElement('div', { className: 'bar' })                                           // 35
                ),                                                                                           // 32
                React.createElement(                                                                         // 37
                  'div',                                                                                     // 37
                  { className: 'button-container' },                                                         // 37
                  React.createElement(                                                                       // 38
                    'button',                                                                                // 38
                    null,                                                                                    // 38
                    React.createElement(                                                                     // 38
                      'span',                                                                                // 38
                      null,                                                                                  // 38
                      'submit'                                                                               // 38
                    )                                                                                        // 38
                  )                                                                                          // 38
                ),                                                                                           // 37
                React.createElement(                                                                         // 40
                  'div',                                                                                     // 40
                  { className: 'sign' },                                                                     // 40
                  React.createElement(                                                                       // 40
                    'a',                                                                                     // 40
                    { href: '#' },                                                                           // 40
                    'New Registration'                                                                       // 40
                  ),                                                                                         // 40
                  '  ',                                                                                      // 40
                  React.createElement(                                                                       // 40
                    'a',                                                                                     // 40
                    { href: '/ForgotPassword' },                                                             // 40
                    'Forget Password'                                                                        // 40
                  )                                                                                          // 40
                )                                                                                            // 40
              )                                                                                              // 25
            )                                                                                                // 23
          )                                                                                                  // 21
        )                                                                                                    // 20
      );                                                                                                     // 13
    }                                                                                                        // 50
                                                                                                             //
    return render;                                                                                           //
  }();                                                                                                       //
                                                                                                             //
  return Login;                                                                                              //
}(Component);                                                                                                //
                                                                                                             //
module.export("default",exports.default=(Login));                                                            //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Registration.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/Registration.jsx                                                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _classCallCheck;module.import("babel-runtime/helpers/classCallCheck",{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import("babel-runtime/helpers/possibleConstructorReturn",{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import("babel-runtime/helpers/inherits",{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                                             //
                                                                                                             //
                                                                                                             // 1
                                                                                                             //
// App component - represents the whole app                                                                  //
                                                                                                             //
var Registration = function (_Component) {                                                                   //
  _inherits(Registration, _Component);                                                                       //
                                                                                                             //
  function Registration() {                                                                                  //
    _classCallCheck(this, Registration);                                                                     //
                                                                                                             //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                              //
  }                                                                                                          //
                                                                                                             //
  Registration.prototype.user_registration = function () {                                                   //
    function user_registration() {                                                                           //
                                                                                                             //
      //db.User.remove();                                                                                    //
                                                                                                             //
      if ($("#uname").val().trim() == "" || $("#fname").val().trim() == "" || $("#lname").val().trim() == "" || $("#mail").val().trim() == "" || $("#pwd").val().trim() == "" || $("#addr").val().trim() == "" || $("#dob").val().trim() == "" || $("#sanswer").val().trim() == "") {} else {
                                                                                                             //
        var x = $("#mail").val();                                                                            // 19
        var atpos = x.indexOf("@");                                                                          // 20
        var dotpos = x.lastIndexOf(".");                                                                     // 21
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {                                     // 22
          $("#error-div-mail").show();                                                                       // 23
          setTimeout(function () {                                                                           // 24
            $("#error-div-mail").hide();                                                                     // 24
          }, 5000);                                                                                          // 24
        } else {                                                                                             // 26
                                                                                                             //
          var sex_flag;                                                                                      // 30
          if (document.getElementById('male').checked) {                                                     // 31
            sex_flag = "Male";                                                                               // 32
          } else if (document.getElementById('female').checked) {                                            // 33
            sex_flag = "Female";                                                                             // 35
          }                                                                                                  // 36
                                                                                                             //
          var uname = $("#uname").val();                                                                     // 39
          var fname = $("#fname").val();                                                                     // 40
          var lname = $("#lname").val();                                                                     // 41
          var mail = $("#mail").val();                                                                       // 42
          var pwd = $("#pwd").val();                                                                         // 43
          var addr = $("#addr").val();                                                                       // 44
          var dob = $("#dob").val();                                                                         // 45
          var mob = $("#mob").val();                                                                         // 46
                                                                                                             //
          var sanswer = $("#sanswer").val();                                                                 // 48
                                                                                                             //
          var e = document.getElementById("security_question");                                              // 50
          var squestion = e.options[e.selectedIndex].value;                                                  // 51
                                                                                                             //
          if (squestion == "") {} else {                                                                     // 53
            var dat = new Date();                                                                            // 57
            var dt = dat.getFullYear().toString() + (dat.getMonth() + 1).toString() + dat.getDate().toString() + dat.getHours().toString() + dat.getMinutes().toString() + dat.getSeconds().toString() + dat.getMilliseconds().toString();
                                                                                                             //
            if (User.find({ email: mail }).fetch() != "") {                                                  // 63
              $("#error-div").show();                                                                        // 64
              setTimeout(function () {                                                                       // 65
                $("#error-div").hide();                                                                      // 65
              }, 5000);                                                                                      // 65
            } else {                                                                                         // 66
                                                                                                             //
              User.insert({                                                                                  // 69
                user_id: dt,                                                                                 // 70
                role_id: "",                                                                                 // 71
                userName: uname,                                                                             // 72
                password: pwd,                                                                               // 73
                firstName: fname,                                                                            // 74
                lastName: lname,                                                                             // 75
                date_of_birth: dob,                                                                          // 76
                sex: sex_flag,                                                                               // 77
                email: mail,                                                                                 // 78
                mobile: mob,                                                                                 // 79
                address: addr,                                                                               // 80
                is_active: "0",                                                                              // 81
                registraion_accepted_by: "",                                                                 // 82
                created_by: dt,                                                                              // 83
                created_date_time: new Date(),                                                               // 84
                last_modified_date_time: new Date(),                                                         // 85
                last_modified_by: dt,                                                                        // 86
                security_question: squestion,                                                                // 87
                security_answer: sanswer                                                                     // 88
              });                                                                                            // 69
            }                                                                                                // 90
          }                                                                                                  // 91
        }                                                                                                    // 93
      }                                                                                                      // 96
    }                                                                                                        // 98
                                                                                                             //
    return user_registration;                                                                                //
  }();                                                                                                       //
                                                                                                             //
  Registration.prototype.render = function () {                                                              //
    function render() {                                                                                      //
      return React.createElement(                                                                            // 103
        "body",                                                                                              // 104
        null,                                                                                                // 104
        React.createElement(                                                                                 // 105
          "div",                                                                                             // 105
          { className: "hed_top" },                                                                          // 105
          React.createElement(                                                                               // 107
            "div",                                                                                           // 107
            { className: "mid_container" },                                                                  // 107
            React.createElement(                                                                             // 108
              "div",                                                                                         // 108
              { className: "logoin" },                                                                       // 108
              "Appitude"                                                                                     // 108
            )                                                                                                // 108
          )                                                                                                  // 107
        ),                                                                                                   // 105
        React.createElement(                                                                                 // 111
          "div",                                                                                             // 111
          { className: "mid_content registration_form" },                                                    // 111
          React.createElement(                                                                               // 112
            "div",                                                                                           // 112
            { className: "container" },                                                                      // 112
            React.createElement(                                                                             // 113
              "div",                                                                                         // 113
              { className: "col-md-6 col-md-offset-3" },                                                     // 113
              React.createElement("div", { className: "card" }),                                             // 114
              React.createElement(                                                                           // 115
                "div",                                                                                       // 115
                { className: "card" },                                                                       // 115
                React.createElement(                                                                         // 116
                  "h1",                                                                                      // 116
                  { className: "title" },                                                                    // 116
                  "Registration"                                                                             // 116
                ),                                                                                           // 116
                React.createElement(                                                                         // 118
                  "div",                                                                                     // 118
                  { id: "error-div" },                                                                       // 118
                  React.createElement(                                                                       // 118
                    "span",                                                                                  // 118
                    null,                                                                                    // 118
                    "Email ID already exists."                                                               // 118
                  )                                                                                          // 118
                ),                                                                                           // 118
                React.createElement(                                                                         // 119
                  "div",                                                                                     // 119
                  { id: "error-div-mail" },                                                                  // 119
                  React.createElement(                                                                       // 119
                    "span",                                                                                  // 119
                    null,                                                                                    // 119
                    "This is not a valid Email address"                                                      // 119
                  )                                                                                          // 119
                ),                                                                                           // 119
                React.createElement(                                                                         // 122
                  "form",                                                                                    // 122
                  { className: "form_pad" },                                                                 // 122
                  React.createElement(                                                                       // 123
                    "div",                                                                                   // 123
                    { className: "row" },                                                                    // 123
                    React.createElement(                                                                     // 124
                      "div",                                                                                 // 124
                      { className: "col-md-6" },                                                             // 124
                      React.createElement(                                                                   // 125
                        "div",                                                                               // 125
                        { className: "input-container" },                                                    // 125
                        React.createElement("input", { type: "text", required: "required", id: "uname" }),   // 126
                        React.createElement(                                                                 // 127
                          "label",                                                                           // 127
                          { "for": "" },                                                                     // 127
                          "User Name"                                                                        // 127
                        ),                                                                                   // 127
                        React.createElement("div", { className: "bar" })                                     // 128
                      ),                                                                                     // 125
                      React.createElement(                                                                   // 130
                        "div",                                                                               // 130
                        { className: "input-container" },                                                    // 130
                        React.createElement("input", { type: "text", required: "required", id: "fname" }),   // 131
                        React.createElement(                                                                 // 132
                          "label",                                                                           // 132
                          { "for": " " },                                                                    // 132
                          "First Name"                                                                       // 132
                        ),                                                                                   // 132
                        React.createElement("div", { className: "bar" })                                     // 133
                      ),                                                                                     // 130
                      React.createElement(                                                                   // 135
                        "div",                                                                               // 135
                        { className: "input-container" },                                                    // 135
                        React.createElement("input", { type: "text", required: "required", id: "lname" }),   // 136
                        React.createElement(                                                                 // 137
                          "label",                                                                           // 137
                          { "for": " " },                                                                    // 137
                          "Last Name"                                                                        // 137
                        ),                                                                                   // 137
                        React.createElement("div", { className: "bar" })                                     // 138
                      ),                                                                                     // 135
                      React.createElement(                                                                   // 140
                        "div",                                                                               // 140
                        { className: "input-container" },                                                    // 140
                        React.createElement("input", { type: "text", required: "required", id: "mail" }),    // 141
                        React.createElement(                                                                 // 142
                          "label",                                                                           // 142
                          { "for": " " },                                                                    // 142
                          "Email Id"                                                                         // 142
                        ),                                                                                   // 142
                        React.createElement("div", { className: "bar" })                                     // 143
                      ),                                                                                     // 140
                      React.createElement(                                                                   // 145
                        "div",                                                                               // 145
                        { className: "input-container" },                                                    // 145
                        React.createElement("input", { type: "password", required: "required", id: "pwd" }),
                        React.createElement(                                                                 // 147
                          "label",                                                                           // 147
                          { "for": " " },                                                                    // 147
                          "Password"                                                                         // 147
                        ),                                                                                   // 147
                        React.createElement("div", { className: "bar" })                                     // 148
                      ),                                                                                     // 145
                      React.createElement(                                                                   // 150
                        "div",                                                                               // 150
                        { className: "input-container" },                                                    // 150
                        React.createElement("input", { type: "text", required: "required", id: "addr" }),    // 151
                        React.createElement(                                                                 // 152
                          "label",                                                                           // 152
                          { "for": " " },                                                                    // 152
                          "Parmanent Address"                                                                // 152
                        ),                                                                                   // 152
                        React.createElement("div", { className: "bar" })                                     // 153
                      )                                                                                      // 150
                    ),                                                                                       // 124
                    React.createElement(                                                                     // 157
                      "div",                                                                                 // 157
                      { className: "col-md-6" },                                                             // 157
                      React.createElement(                                                                   // 158
                        "div",                                                                               // 158
                        { className: "input-container" },                                                    // 158
                        React.createElement("input", { type: "text", required: "required", placeholder: "", id: "dob" }),
                        React.createElement(                                                                 // 160
                          "label",                                                                           // 160
                          { "for": " " },                                                                    // 160
                          "Date Of Birth"                                                                    // 160
                        ),                                                                                   // 160
                        React.createElement("div", { className: "bar" })                                     // 161
                      ),                                                                                     // 158
                      React.createElement(                                                                   // 163
                        "div",                                                                               // 163
                        { className: "input-container gender" },                                             // 163
                        React.createElement(                                                                 // 164
                          "div",                                                                             // 164
                          null,                                                                              // 164
                          " Gender"                                                                          // 164
                        ),                                                                                   // 164
                        React.createElement(                                                                 // 165
                          "span",                                                                            // 165
                          null,                                                                              // 165
                          React.createElement("input", { type: "radio", name: "m", id: "male" }),            // 166
                          "Male"                                                                             // 165
                        ),                                                                                   // 165
                        " ",                                                                                 // 163
                        React.createElement(                                                                 // 167
                          "span",                                                                            // 167
                          null,                                                                              // 167
                          React.createElement("input", { type: "radio", name: "m", id: "female" }),          // 168
                          "Female "                                                                          // 167
                        )                                                                                    // 167
                      ),                                                                                     // 163
                      React.createElement(                                                                   // 170
                        "div",                                                                               // 170
                        { className: "input-container" },                                                    // 170
                        React.createElement("input", { type: "number", required: "required", id: "mob" }),   // 171
                        React.createElement(                                                                 // 172
                          "label",                                                                           // 172
                          { "for": " " },                                                                    // 172
                          "Phone No"                                                                         // 172
                        ),                                                                                   // 172
                        React.createElement("div", { className: "bar" })                                     // 173
                      ),                                                                                     // 170
                      React.createElement(                                                                   // 176
                        "span",                                                                              // 176
                        null,                                                                                // 176
                        "Security Question"                                                                  // 176
                      ),                                                                                     // 176
                      React.createElement(                                                                   // 177
                        "select",                                                                            // 177
                        { id: "security_question" },                                                         // 177
                        React.createElement(                                                                 // 178
                          "option",                                                                          // 178
                          { value: "" },                                                                     // 178
                          "Select a security question"                                                       // 178
                        ),                                                                                   // 178
                        React.createElement(                                                                 // 179
                          "option",                                                                          // 179
                          { value: "" },                                                                     // 179
                          "Question1"                                                                        // 179
                        ),                                                                                   // 179
                        React.createElement(                                                                 // 180
                          "option",                                                                          // 180
                          { value: "" },                                                                     // 180
                          "Question2"                                                                        // 180
                        ),                                                                                   // 180
                        React.createElement(                                                                 // 181
                          "option",                                                                          // 181
                          { value: "" },                                                                     // 181
                          "Question3"                                                                        // 181
                        )                                                                                    // 181
                      ),                                                                                     // 177
                      React.createElement(                                                                   // 184
                        "div",                                                                               // 184
                        { className: "input-container" },                                                    // 184
                        React.createElement("input", { type: "text", required: "required", id: "sanswer" }),
                        React.createElement(                                                                 // 186
                          "label",                                                                           // 186
                          { "for": " " },                                                                    // 186
                          "Security Answer"                                                                  // 186
                        ),                                                                                   // 186
                        React.createElement("div", { className: "bar" })                                     // 187
                      )                                                                                      // 184
                    )                                                                                        // 157
                  ),                                                                                         // 123
                  React.createElement(                                                                       // 193
                    "div",                                                                                   // 193
                    { className: "button-container" },                                                       // 193
                    React.createElement(                                                                     // 194
                      "button",                                                                              // 194
                      { onClick: this.user_registration },                                                   // 194
                      React.createElement(                                                                   // 194
                        "span",                                                                              // 194
                        null,                                                                                // 194
                        "SAVE"                                                                               // 194
                      )                                                                                      // 194
                    )                                                                                        // 194
                  )                                                                                          // 193
                )                                                                                            // 122
              )                                                                                              // 115
            )                                                                                                // 113
          )                                                                                                  // 112
        )                                                                                                    // 111
      );                                                                                                     // 104
    }                                                                                                        // 206
                                                                                                             //
    return render;                                                                                           //
  }();                                                                                                       //
                                                                                                             //
  return Registration;                                                                                       //
}(Component);                                                                                                //
                                                                                                             //
module.export("default",exports.default=(Registration));                                                     //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"collections":{"init.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// collections/init.js                                                                                       //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
Role = new Mongo.Collection('role');                                                                         // 1
User = new Mongo.Collection('user');                                                                         // 2
Client = new Mongo.Collection('aptitude_client');                                                            // 3
                                                                                                             //
Role.allow({                                                                                                 // 6
	insert: function () {                                                                                       // 7
		function insert(userId, doc) {                                                                             // 7
			return true;                                                                                              // 8
		}                                                                                                          // 9
                                                                                                             //
		return insert;                                                                                             // 7
	}(),                                                                                                        // 7
	update: function () {                                                                                       // 10
		function update(userId, doc) {                                                                             // 10
			return true;                                                                                              // 11
		}                                                                                                          // 12
                                                                                                             //
		return update;                                                                                             // 10
	}()                                                                                                         // 10
});                                                                                                          // 6
                                                                                                             //
User.allow({                                                                                                 // 15
	insert: function () {                                                                                       // 16
		function insert(userId, doc) {                                                                             // 16
			return true;                                                                                              // 17
		}                                                                                                          // 18
                                                                                                             //
		return insert;                                                                                             // 16
	}(),                                                                                                        // 16
	update: function () {                                                                                       // 19
		function update(userId, doc) {                                                                             // 19
			return true;                                                                                              // 20
		}                                                                                                          // 21
                                                                                                             //
		return update;                                                                                             // 19
	}(),                                                                                                        // 19
	remove: function () {                                                                                       // 22
		function remove(userId, doc) {                                                                             // 22
			return true;                                                                                              // 23
		}                                                                                                          // 24
                                                                                                             //
		return remove;                                                                                             // 22
	}()                                                                                                         // 22
});                                                                                                          // 15
                                                                                                             //
Client.allow({                                                                                               // 27
	insert: function () {                                                                                       // 28
		function insert(userId, doc) {                                                                             // 28
			return true;                                                                                              // 29
		}                                                                                                          // 30
                                                                                                             //
		return insert;                                                                                             // 28
	}(),                                                                                                        // 28
	update: function () {                                                                                       // 31
		function update(userId, doc) {                                                                             // 31
			return true;                                                                                              // 32
		}                                                                                                          // 33
                                                                                                             //
		return update;                                                                                             // 31
	}(),                                                                                                        // 31
	remove: function () {                                                                                       // 34
		function remove(userId, doc) {                                                                             // 34
			return true;                                                                                              // 35
		}                                                                                                          // 36
                                                                                                             //
		return remove;                                                                                             // 34
	}()                                                                                                         // 34
});                                                                                                          // 27
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css",".jsx"]});
require("./client/template.main.js");
require("./collections/init.js");
require("./client/main.jsx");