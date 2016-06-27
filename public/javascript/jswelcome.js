/**
 * New node file
 */
 $(document).ready(function(){
    

	$("#loginbtn").click(function(e){
		e.preventDefault();
		var username=$("#username").val();
		var password=$("#password").val();
		checkLogin(username,password);
		
	}); 
	 
	 
	 
	 
	function checkLogin(username,password) {
		
		$.post("/login",{username:username,password:password},function(data){
			alert(data[0].emri);
			
			
		},"json");
		
		
	}
	  
	  
    });