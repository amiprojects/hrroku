Role = new Mongo.Collection('role'); 
User = new Mongo.Collection('user');
Client = new Mongo.Collection('aptitude_client'); 


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

Client.allow({
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