/**
 * New node file
 */


var mysql=require('mysql');


var pool=mysql.createPool({
	
	host:"192.168.1.5",
	user:"socialnet",
	password:"socialnet2016",
	database:"socialnet"
});

/*conn.connect(function(err){
	if(err){
		console.log("Couldn't connect to database  :"+err);
	}else{
//		console.log("Connection to database was successful!");
//	}
//});*/
//conn.connect();





exports.getusers=function(name,callback){
	var query="select * from users where emri=?";
	pool.getConnection(function(err,conn){
		if(err){
			conn.release();
			console.log("error connecting to database"+err.stack);
		}
		conn.query(query,name,function(err,results){
			if(err){
				console.log("error :"+err);
				callback(true);
				
			}
			callback(false,results);
		});
	});

};


exports.checkLogin=function(username,password,callback){
	var query="select * from users where username='"+username+"' and password='"+password+"'";
	console.log(query);
	
	pool.getConnection(function(err,conn){
		if(err){
			conn.release();
			console.log("error connecting to database"+err.stack);
		}
		
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
	});
};


