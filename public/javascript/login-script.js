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
		url:"/loginsubmit",
		data:{username:username,password:password,remember:remember}
	});	
		
	request.done(function(msg){
		if(msg == "success"){
            window.location="/";
        }else{
            //incorrect login
$("#errorMessage").html("Given username or password is incorrect!");
$(".username-error").css("display","block");
            $(".password-error").css("display","block");
$("#login-form-cont").addClass("loginerror shake animated");
  setTimeout(function(){
    $("#login-form-cont").removeClass("shake animated");
  },1000); 
          
        }
	});	
		
		
		
		
	}else if(password.length == 0){
		//alert("this password is not valid");
        $("#errorMessage").html("Please fill password box!");
        $(".password-error").css("display","block");
        $("#login-form-cont").addClass("loginerror shake animated");
  setTimeout(function(){
    $("#login-form-cont").removeClass("shake animated");
  },1000);
        
	}else{
        
       	//alert("this password is not valid");
        $("#errorMessage").html("Password must be between 6-15 characters!");
        $(".password-error").css("display","block");
        $("#login-form-cont").addClass("loginerror shake animated");
  setTimeout(function(){
    $("#login-form-cont").removeClass("shake animated");
  },1000); 
    }// password if end
	
}else if(username.length < 4 && username.length > 0){
	//alert("this username is too short ");
     $("#errorMessage").html("This username is too short!");
    $(".username-error").css("display","block");
        $("#login-form-cont").addClass("loginerror shake animated");
  setTimeout(function(){
    $("#login-form-cont").removeClass("shake animated");
  },1000);
        
}else        
{
    
      $("#errorMessage").html("Please set Username or Email!");
    $(".username-error").css("display","block");
        $("#login-form-cont").addClass("loginerror shake animated");
  setTimeout(function(){
    $("#login-form-cont").removeClass("shake animated");
  },1000); 
}
	
	
});
/**
 *Login button click event  end of function
 */	
	
	/**
    *pastro divet e erroreve
    */
$("#username").focus(function(){
   $(".username-error").css("display","none");
   $(".password-error").css("display","none");
    $("#errorMessage").html("");
    $("#login-form-cont").removeClass("loginerror");
});	
    $("#password").focus(function(){
   $(".username-error").css("display","none");
   $(".password-error").css("display","none");
    $("#errorMessage").html("");
    $("#login-form-cont").removeClass("loginerror");
});
    
    
    
	
});
/**
*End of script login-script.js
*
*/