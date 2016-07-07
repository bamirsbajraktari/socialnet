/**
 * New node file
 */


var mysql=require('mysql');


var conn=mysql.createConnection({
	host:"192.168.1.5",
    port:"3306",
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


exports.conn=conn;


exports.getusers=function(name,callback){
	var query="select * from user where username=?";
	
		conn.query(query,name,function(err,results){
			if(err){
				console.log("error :"+err);
				callback(true);
				
			}
			callback(false,results);
		});


};


exports.checkLogin=function(username,password,callback){
	var query="select * from user where username='"+username+"' and password='"+password+"'";
	console.log(query);
	
	
		
	conn.query(query,function(err,rows){
		if(err){
			console.log("error :"+err);
			callback(false,"loginerror");
			return;
		}else if(rows.length === 0){
			callback(false,"loginerror");
			return;
		}
		callback(false,rows[0]);
	});
	
};


