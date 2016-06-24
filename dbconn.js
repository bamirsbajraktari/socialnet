/**
 * New node file
 */


var mysql=require('mysql');


var conn=mysql.createConnection({
	host:"192.168.1.5",
	user:"socialnet",
	password:"socialnet2016",
	database:"socialnet"
});

conn.connect(function(err){
	if(err){
		console.log("Couldn't connect to database  :"+err);
	}else{
		console.log("Connection to database was successful!");
	}
});
//conn.connect();





exports.getusers=function(name,callback){
	var query="select * from users where emri=?";
	conn.query(query,name,function(err,results){
		if(err){
			console.log("error :"+err);
			callback(true);
			return;
		}
		callback(false,results);
	});
};
