Role = new Mongo.Collection('role'); 
User = new Mongo.Collection('user');  


Role.allow({
	insert: function(userId, doc){
		return true;
	},
	update: function(userId, doc){
		return true;
	}
});

User.allow({
	insert: function(userId, doc){
		return true;
	},
	update: function(userId, doc){
		return true;
	},
	remove: function(userId, doc){
		return true;
	}
});
