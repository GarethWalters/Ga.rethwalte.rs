$(function()
{
	$('#1x').click(function(a) {
		a.preventDefault();
		$('#2x').removeClass('current');
		$(this).addClass('current');
		$('.shot').width(320);
		$('.shot img').css('border-radius', '6px');
		$('.description').css({
			'font-size': 12,
		});
	});
	
	$('#2x').click(function(a) {
		a.preventDefault();
		$('#1x').removeClass('current');
		$(this).addClass('current');
		$('.shot').width(640);
		$('.shot img').css('border-radius', '12px');
		$('.description').css({
			'font-size': 20,
		});
	});
});