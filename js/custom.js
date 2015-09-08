$(document).ready(function(){


$('li').mouseover(function() { 
	console.log( $(this) )

	$(this).find( ".p1, .p2, .p3" ).show();
	$(this).find( "img" ).hide();
    // $('.p1').show(); 
    // $('.img1').hide();
});

$('li').mouseleave(function() { 
	console.log( $(this) )
	$(this).find( ".p1, .p2, .p3" ).hide();
	$(this).find( "img" ).show();
    // $('.p1').hide(); 
    // $('.img1').show();
});


        $('.fancybox').fancybox({
            
            openEffect  : 'elastic',
            closeEffect : 'elastic'
        });

        $(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',


	});

      $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").fancybox();


});