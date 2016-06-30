/**
 * login-script.js
 * Created by Bamirs Bajraktari date 30-06-2016
 */
$(function(){
	
	
/**
 *Login button click event  
 */
$("#loginBtn").click(function(e){
	e.preventDefault();
//get variables to sent
	var username=$("#username").val();//username
	var password=$("#password").val();//password
	var remember=false;
	if($("#rememberme").prop('checked')){
		remember=true;
	}
	//alert(remember);
	
if(username.length > 0 && username.length > 4){//check if is set username	
	
	if(password.length >= 6){// check if password is ok
	
		//sending request to server
	var request=$.ajax({
		method:"POST",
		url:"/login",
		data:{username:username,password:password,remember:remember}
	});	
		
	request.done(function(msg){
		alert(msg);
	});	
		
		
		
		
	}else{
		alert("this password is not valid");
	}// password if end
	
}else if(username.length < 4 && username.length > 0){
	alert("this username is too short ");
}else{
	alert("Username not set");
}
	
	
});
/**
 *Login button click event  end of function
 */	
	
	
	
	
});
/**
*End of script login-script.js
*
*/