/**
 * New node file
 * 
 */
//var db=require("../dbconn.js");
var async = require("async");
var profile = require('../functions/profileFunctions');
exports.renderUser=function(req,res,next){
     
       profile.getUserInfo(req.session.username,function(err,user){
           console.log(user);
          res.render("profile",{user:user}); 
           
       });
    
};



