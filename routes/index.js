
/*
 * GET home page.
 */

exports.index = function(req, res){
	if(req.session.name=="session"){
		res.render('index', { title: 'Express' });
	}else{
		 res.render('homepage', { title: 'Express' });
	}
 
};