/**
 * New node file
 */
exports.check = function(req, res){
var route=req.params['username'];


	res.render("profile",{title:route});

	
	
 
};