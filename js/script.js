$(document).ready(function(){
	//will automatically hide #lightboxes
	$('.lightbox').hide();
	$('.modal-lightbox').hide();

	//when you click the link..
	$(".lightbox-link").click(function(e){
		//prevent the default action (opening image in new window)
		e.preventDefault();
		//grabs the href attr from the link in html (.lightbox-link)
		// var image = $(this).attr('href')

		//testing if the .lightbox div exists
		if($('.lightbox').length > 0){
			//if it does, it will simply show it
			$('.lightbox').show();
		}else{
				//if not, this builds the div and appends it to body 
				//(update: i built the lightbox div in index.html and hid it)
			// var lightbox = 
			// 	'<div id="lightbox">'+
			// 		'<div id="content">'+
			// 			'<img src="' + image + '"/>' +
			// 		'</div>' +
			// 	'</div>';
			// $('body').append(lightbox);
			console.log("didnt work")
		};
	
	});
		//when you click anywhere in the lightbox div (entire screen) it will hide it
		$('.lightbox').on('click', function(){
			$('.lightbox').hide();
		});

	$('button').on('click' , function(){
		$('.modal-lightbox').show();
	});

	$('#x-out').on('click' , function(){
		$('.modal-lightbox').hide();
	});
})

/*tutorial - http://webdesign.tutsplus.com/articles/super-simple-lightbox-with-css-and-jquery--webdesign-3528*/