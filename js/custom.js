$(document).ready(function(){


$('li').mouseover(function() { 
	console.log( $(this) )

	$(this).find( ".p1, .p2" ).show();
	$(this).find( "img" ).hide();
    // $('.p1').show(); 
    // $('.img1').hide();
});

$('li').mouseleave(function() { 
	console.log( $(this) )
	$(this).find( ".p1, .p2" ).hide();
	$(this).find( "img" ).show();
    // $('.p1').hide(); 
    // $('.img1').show();
});



// $(function() {
// $('.img1').mouseover(function() { 
// 	console.log(':)')
//     $('.p1').show(); 
//     $('.img1').hide();
// }, function() { 
//     $('.p1').toggle(); 
// });
// });

// $(function() {
// $('.p1').mouseover(function() { 
//     $('.img').show(); 
//     $('.p1').hide();
// }, function() { 
//     $('.img1').toggle(); 
// });
// });

});