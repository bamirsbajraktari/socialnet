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
			console.log(results);
			callback(null,results);	 
		}
		 
	});
                          
}  ],
		
		
		
 function(err,results){


		res.send(results);
	
});
};
