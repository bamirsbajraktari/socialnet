    var db=require("../dbconn.js");
//var async = require("async");
 exports.getUserInfo =  function (username,callback){
	var query="select * from user where username='"+username+"'";

	
		
	db.conn.query(query,function(err,rows){

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

} ; 
    
