var require = meteorInstall({"collections":{"init.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// collections/init.js                                                      //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Role = new Mongo.Collection('role');                                        // 1
User = new Mongo.Collection('user');                                        // 2
Client = new Mongo.Collection('aptitude_client');                           // 3
                                                                            //
Role.allow({                                                                // 6
	insert: function insert(userId, doc) {                                     // 7
		return true;                                                              // 8
	},                                                                         // 9
	update: function update(userId, doc) {                                     // 10
		return true;                                                              // 11
	}                                                                          // 12
});                                                                         // 6
                                                                            //
User.allow({                                                                // 15
	insert: function insert(userId, doc) {                                     // 16
		return true;                                                              // 17
	},                                                                         // 18
	update: function update(userId, doc) {                                     // 19
		return true;                                                              // 20
	},                                                                         // 21
	remove: function remove(userId, doc) {                                     // 22
		return true;                                                              // 23
	}                                                                          // 24
});                                                                         // 15
                                                                            //
Client.allow({                                                              // 27
	insert: function insert(userId, doc) {                                     // 28
		return true;                                                              // 29
	},                                                                         // 30
	update: function update(userId, doc) {                                     // 31
		return true;                                                              // 32
	},                                                                         // 33
	remove: function remove(userId, doc) {                                     // 34
		return true;                                                              // 35
	}                                                                          // 36
});                                                                         // 27
//////////////////////////////////////////////////////////////////////////////

}},"server":{"main.js":["meteor/meteor",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/main.js                                                           //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
                                                                            //
Meteor.startup(function () {                                                // 3
  // code to run on server at startup                                       //
});                                                                         // 5
//////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".jsx"]});
require("./collections/init.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
