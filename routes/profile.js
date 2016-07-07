<<<<<<< HEAD
exports.showprofile = function(req, res){
	if(req.session.username != null){
        var profile = require('../functions/profileFunctions');
       profile.getUserInfo(req.session.username,function(err,user){
           console.log(user);
          res.render("profile",{user:user}); 
           
       });
		
	}else{
		 res.render('homepage', { title: 'Express' });
	
    }
 
};

=======
/**
 * New node file
 * 
 */
var db=require("../dbconn.js");
var async = require("async");
exports.renderUser=function(req,res,next){

    
    

    
res.send("profili");
    

};



>>>>>>> e256ddfe426cdb1bf248cdcf70f6db98de92f755
