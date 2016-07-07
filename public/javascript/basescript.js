$(function(){
    
        //  changes mouse cursor when highlighting loawer right of box
    $(document).on('mousemove', 'textarea', function(e) {
		var a = $(this).offset().top + $(this).outerHeight() - 16,	//	top border of bottom-right-corner-box area
			b = $(this).offset().left + $(this).outerWidth() - 16;	//	left border of bottom-right-corner-box area
		$(this).css({
			cursor: e.pageY > a && e.pageX > b ? 'nw-resize' : ''
		});
	})
    //  the following simple make the textbox "Auto-Expand" as it is typed in
    .on('keyup', 'textarea', function(e) {
        //  the following will help the text expand as typing takes place
        while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
            $(this).height($(this).height()+1);
        };
    });
    
    
   //share image/file/post button click
$("#sharePostSubmit").click(function(e){
var form = $('#sharepostform')[0]; // You need to use standart javascript object here
var formData = new FormData(form);

 $.ajax("/uploadFile",{
   type:"POST",processData: false,
    contentType: false,
    data: formData  ,
     success:function(msg){
         alert(msg);
     }
 }); 
    
   e.preventDefault(); 
    
}); 
    
    
    
    
/*open menu of user on header bar*/    
$(".header-profile-img").click(function(e){
    e.stopPropagation();
   if($("#header-nav").hasClass("fadeInDown")){
           $("#header-nav").removeClass("fadeInDown");
    }else{
           $("#header-nav").addClass("fadeInDown");	
    }
	
 });//header profile image click    
    
    
    
/* dont notify document for clicking this element */
$(".profile-img-nav").click(function(e){
e.stopPropagation();

});//dont notify document for clickin this element
    
    
    
/*close modals on click anywhere of document*/
$(document).click(function(e){
	
if($("#header-nav").hasClass("fadeInDown")){
$("#header-nav").removeClass("fadeInDown");
}

});// document on click
    
    
});//document ready