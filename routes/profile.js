
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


