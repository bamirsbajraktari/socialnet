/**
 * New node file
 */
exports.logout = function(req, res){
	req.session.destroy(function(err){
		console.log("session Destroied");
		res.send("ok");
	});
	
 
};