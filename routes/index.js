
/*
 * GET home page.
 */
 var async = require("async");
exports.index = function(req, res){
	if(req.session.name != null){
        
       
		res.render("profile");
	}else{
		 res.render('homepage', { title: 'Express' });
	
    }
 
};