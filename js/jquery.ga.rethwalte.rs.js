// getRGB function taken from jQuery color plugin: 
// http://plugins.jquery.com/files/jquery.color.js.txt
function getRGB(color)
{
	var result;
	
	// Example: rgb(255,255,255)
	if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
	{
		return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];
	}
	
	// Example: rgb(255%,255%,255%)
	if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
	{
		return [parseFloat(result[1]) * 2.55, parseFloat(result[2]) * 2.55, parseFloat(result[3]) * 2.55];
	}
	
	// Example: #FFFFFF
	if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
	{
		return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
	}
	
	// Example: #FFF
	if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
	{
		return [parseInt(result[1] + result[1], 16), parseInt(result[2] + result[2], 16), parseInt(result[3] + result[3], 16)];
	}
}

$(function()
{
	var colors = [
		'e0be00',	// Yellow
		'00cfdc',	// Blue
		'de003a',	// Red
		'444'		// Gray
	];
	
	var chosenColor;
	
	// Always choose blue for the first color (per session.)
	// if ($.cookie('viewed'))
	// {
		chosenColor = colors[Math.floor(Math.random() * 4)];
	// }
	// else
	// {
	// 	chosenColor = colors[1];
	// 	$.cookie('viewed', 'true');
	// }
	
	$('head').append('<link rel="shortcut icon" href="favicon-' + chosenColor + '.ico" type="image/x-icon">');
	$('body').css('background', '#' + chosenColor);
	
	// Drop shadow color
	var rgb = getRGB($('body').css('background-color'));
	for (var i = 0; i < rgb.length; i++)
	{
		rgb[i] = Math.max(0, rgb[i] - 40);
	}
	var darkColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
	// $('#additional').css('text-shadow', '0 0.5px 0 ' + darkColor);
	$('#bar').css('background', darkColor);
	$('#submit-button').css('background', darkColor);
	$('#submit-button').hover(function() {
		$(this).css('color', '#' + chosenColor);
	}, function() {
		$(this).css('color', '#fff');
	});
	
	// Common vars
	var commonEaseOver = 'easeOutElastic';
	var commonEaseOut = 'easeOutExpo';
	var commonTimeOver = 400;
	var commonTimeOut = 200;
	var fullOpacity = 0.40;
	
	// Email hover animation
	$('#link-area').bind('mouseover', function()
	{
		$('#select-lt').stop().animate({
			left: -16,
			top: -16,
			opacity: fullOpacity
		}, commonTimeOver, commonEaseOver);
		$('#select-rt').stop().animate({
			right: -16,
			top: -16,
			opacity: fullOpacity
		}, commonTimeOver, commonEaseOver);
		$('#select-lb').stop().animate({
			left: -16,
			bottom: -16,
			opacity: fullOpacity
		}, commonTimeOver, commonEaseOver);
		$('#select-rb').stop().animate({
			right: -16,
			bottom: -16,
			opacity: fullOpacity
		}, commonTimeOver, commonEaseOver);
	}).bind('mouseout', function()
	{
		$('#select-lt').stop().animate({
			left: -32,
			top: -32,
			opacity: 0
		}, commonTimeOut, commonEaseOut);
		$('#select-rt').stop().animate({
			right: -32,
			top: -32,
			opacity: 0
		}, commonTimeOut, commonEaseOut);
		$('#select-lb').stop().animate({
			left: -32,
			bottom: -32,
			opacity: 0
		}, commonTimeOut, commonEaseOut);
		$('#select-rb').stop().animate({
			right: -32,
			bottom: -32,
			opacity: 0
		}, commonTimeOut, commonEaseOut);
	});

	// Contact form

	// Get the form.
    var form = $('#contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
	$(form).submit(function(event) {
	    // Stop the browser from submitting the form.
	    event.preventDefault();

	    // Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
		    type: 'POST',
		    url: $(form).attr('action'),
		    data: formData
		}).done(function(response) {
		    // Make sure that the formMessages div has the 'success' class.
		    $(formMessages).removeClass('error');
		    $(formMessages).addClass('success');

		    // Set the message text.
		    $(formMessages).text("Thank You! Your message has been sent.");

		    // Clear the form.
		    $('#name').val('');
		    $('#email').val('');
		    $('#message').val('');
		}).fail(function(data) {
		    // Make sure that the formMessages div has the 'error' class.
		    $(formMessages).removeClass('success');
		    $(formMessages).addClass('error');

		    // Set the message text.
		    if (data.responseText !== '') {
		        $(formMessages).text(data.responseText);
		    } else {
		        $(formMessages).text('An error occured and your message could not be sent at this time.');
		    }
		});
	});
});