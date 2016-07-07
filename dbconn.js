/**
 * New node file
 */


var mysql=require('mysql');


<<<<<<< HEAD
var conn=mysql.createConnection({
	host:"192.168.1.5",
    port:"3306",
=======
var pool=mysql.createPool({
	host:"80.78.68.112",
    port:"21034",
>>>>>>> e256ddfe426cdb1bf248cdcf70f6db98de92f755
	user:"socialnet",
	password:"socialnet2016",
	database:"socialnet"
});

<<<<<<< HEAD
conn.connect(function(err){
	if(err){
		console.log("Couldn't connect to database  :"+err);
	}else{
		console.log("Connection to database was successful!");
	}
});
//conn.connect();


exports.conn=conn;
=======
/*conn.connect(function(err){
	if(err){
		console.log("Couldn't connect to database  :"+err);
	}else{
//		console.log("Connection to database was successful!");
//	}
//});*/
//conn.connect();


exports.pool=pool;
>>>>>>> e256ddfe426cdb1bf248cdcf70f6db98de92f755


exports.getusers=function(name,callback){
	var query="select * from user where username=?";
<<<<<<< HEAD
	
=======
	pool.getConnection(function(err,conn){
		if(err){
			conn.release();
			console.log("error connecting to database"+err.stack);
		}
>>>>>>> e256ddfe426cdb1bf248cdcf70f6db98de92f755
		conn.query(query,name,function(err,results){
			if(err){
				console.log("error :"+err);
				callback(true);
				
			}
			callback(false,results);
		});
<<<<<<< HEAD

=======
	});
>>>>>>> e256ddfe426cdb1bf248cdcf70f6db98de92f755

};


exports.checkLogin=function(username,password,callback){
	var query="select * from user where username='"+username+"' and password='"+password+"'";
	console.log(query);
	
<<<<<<< HEAD
	
=======
	pool.getConnection(function(err,conn){
		if(err){
			conn.release();
			console.log("error connecting to database"+err.stack);
		}
>>>>>>> e256ddfe426cdb1bf248cdcf70f6db98de92f755
		
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
<<<<<<< HEAD
	
=======
	});
>>>>>>> e256ddfe426cdb1bf248cdcf70f6db98de92f755
};


