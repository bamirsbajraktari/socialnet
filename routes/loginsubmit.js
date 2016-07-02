/**
 * New node file
 */
var url = require('url');
var db=require("../dbconn.js");
var async = require("async");

exports.login=function(req,res,next){
	var url_parts = req.body;
	
async.parallel([
                
function(callback){
	
	
	db.checkLogin(url_parts.username,url_parts.password,function(err,results){
		if(!err){
			
			callback(null,results);	 
		}
		 
	});
                          
}  ],
		
		
		
 function(err,results){
console.log(results[0].firstname);
if(results == "loginerror"){
	res.send("loginerror");
}else{
	//this.header('Location', "/");
	req.session.username=results[0].username;
	req.session.userID=results[0].userID;
	console.log("Session set:"+ req.session.username);
	res.send("success");
}
		
	
});
};
