$(document).ready(function(){
	
		
	$(".color1" ).click(function(){
		$("#colors" ).attr("href", "css/color/color1.css" );
		return false;
	});
	
	
	
	$(".color3" ).click(function(){
		$("#colors" ).attr("href", "css/color/color3.css" );
		return false;
	});
	

	$(".color5" ).click(function(){
		$("#colors" ).attr("href", "css/color/color5.css" );
		return false;
	});
	
		

	$('.icon').click (function(event){
		event.preventDefault();
		if( $ (this).hasClass('inOut')  ){
			$('.mp-color').stop().animate({right:'0px'},500 );
		} else{
			$('.mp-color').stop().animate({right:'-200px'},500 );
		} 
		$(this).toggleClass('inOut');
		return false;

	}  );

	
	
	
	
} );
