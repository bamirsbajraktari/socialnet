
/*
 * GET home page.
 */
<<<<<<< HEAD
 
=======
 var async = require("async");
>>>>>>> e256ddfe426cdb1bf248cdcf70f6db98de92f755
exports.index = function(req, res){
	if(req.session.username != null){
        var profile = require('../functions/profileFunctions');
       profile.getUserInfo(req.session.username,function(err,user){
           console.log(user);
<<<<<<< HEAD
          res.render("index",{user:user}); 
=======
          res.render("profile",{user:user}); 
>>>>>>> e256ddfe426cdb1bf248cdcf70f6db98de92f755
           
       });
		
	}else{
		 res.render('homepage', { title: 'Express' });
	
    }
 
};