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

 // $(".nav-tabs a").click(function(){
 //        $(this).tab('show');
 //    });

 //  $('li img').on('click',function(){
 //                var src = $(this).attr('src');
 //                var img = '<img src="' + src + '" class="img-responsive"/>';
 //                $('#myModal').modal();
 //                $('#myModal').on('shown.bs.modal', function(){
 //                    $('#myModal .modal-body').html(img);
 //                });
 //                $('#myModal').on('hidden.bs.modal', function(){
 //                    $('#myModal .modal-body').html('');
 //                });
 //           });
document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};

});