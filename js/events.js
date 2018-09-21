$(document).ready(function(){
	$('.eventsBar a').click(function(){
		classVal = $(this).attr('class');
		clubName = classVal.toLowerCase();
		console.log($(this).parent().next().children().hasClass('.'+clubName));

		//Adding active class to clubName and those Events only
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').html($(this).attr('Class'));
			$(this).parent().next().children().removeClass('disabled');
			return;
		}
		$(this).addClass("active").siblings().removeClass("active");
		console.log(clubName);
		$(this).parent().next().children().not('.'+clubName).addClass('disabled');		
		$(this).parent().next().children().filter('.'+clubName).removeClass('disabled');

	});


	$('.eventBox').click(function(){
		console.log("I am clicked");
		desc = $(this).attr('data-modal');
		console.log(desc);
		$(this).parent().parent().find("#"+desc).addClass("show");
		//$(this).parent().parent().find(".overlay").css({"visibility": "visible","background":"#e74c3c"});
		console.log($(this).parent().parent().find('#'+desc));
	});
	
	$('.closeButton').click(function(){
		$(this).parent().parent().removeClass('show');
	});

});