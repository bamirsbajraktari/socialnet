
/*
 * GET home page.
 */

exports.render = function(req, res){
  res.render('welcome', { title: 'Welcome Page' });
};