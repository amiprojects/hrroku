var require = meteorInstall({"collections":{"init.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// collections/init.js                                                      //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Role = new Mongo.Collection('role');                                        // 1
User = new Mongo.Collection('user');                                        // 2
                                                                            //
Role.allow({                                                                // 5
	insert: function insert(userId, doc) {                                     // 6
		return true;                                                              // 7
	},                                                                         // 8
	update: function update(userId, doc) {                                     // 9
		return true;                                                              // 10
	}                                                                          // 11
});                                                                         // 5
                                                                            //
User.allow({                                                                // 14
	insert: function insert(userId, doc) {                                     // 15
		return true;                                                              // 16
	},                                                                         // 17
	update: function update(userId, doc) {                                     // 18
		return true;                                                              // 19
	},                                                                         // 20
	remove: function remove(userId, doc) {                                     // 21
		return true;                                                              // 22
	}                                                                          // 23
});                                                                         // 14
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
