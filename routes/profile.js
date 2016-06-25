/**
 * New node file
 * 
 */
var db=require("../dbconn.js");
var async = require("async");
exports.renderUser=function(req,res,next){

async.parallel([
                
function(callback){
	
	
	db.getusers("bamirs",function(err,results){
		if(!err){
			console.log(results[0].emri);
			callback(null,{emri:results[0].emri});	 
		}
		 
	});
                          
},

function(callback){
	
	
	db.getusers("bamirs",function(err,results){
		if(!err){
			console.log(results);
			callback(null,{mbiemri:results[0].mbiemri});
		}
		 
	});


}           
                
                ],
		
		
		
 function(err,results){

console.log(results);

		res.render("profile",{result:results});
	
});
};



