    var db=require("../dbconn.js");
//var async = require("async");
 exports.getUserInfo =  function (username,callback){
	var query="select * from user where username='"+username+"'";
	
	
<<<<<<< HEAD
	
		
	db.conn.query(query,function(err,rows){
=======
	db.pool.getConnection(function(err,conn){
		if(err){
			conn.release();
			console.log("error connecting to database"+err.stack);
		}
		
	conn.query(query,function(err,rows){
>>>>>>> e256ddfe426cdb1bf248cdcf70f6db98de92f755
        console.log(query);
		if(err){
			console.log("error :"+err);
			callback(false,"loginerror");
			return;
		}else if(rows.length === 0){
			callback(false,"loginerror");
			return;
		}
        console.log("Rows :"+ rows);
		callback(false,rows);
	});
<<<<<<< HEAD
	
=======
	});
>>>>>>> e256ddfe426cdb1bf248cdcf70f6db98de92f755
} ; 
    
