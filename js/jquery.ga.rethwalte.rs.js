$(function() {
	var color = Math.ceil(Math.random()*3);
	$('head').append('<link rel="shortcut icon" href="favicon-' + color + '.ico" type="image/x-icon">');
	$('#card').addClass('card-' + color);
	$('#core').bind('mouseover', function() {
		$(this).children('#additional').stop().animate({
			color: '#5E5D58'
		}, 200, 'easeOutExpo');
		$(this).children('#additional').children('a').stop().animate({
			color: '#333'
		}, 200, 'easeOutExpo');
	}).bind('mouseout', function() {
		$(this).children('#additional').stop().animate({
			color: '#DEDED6'
		}, 1000, 'easeOutExpo');
		$(this).children('#additional').children('a').stop().animate({
			color: '#DEDED6'
		}, 1000, 'easeOutExpo');
	});
	var commonEaseOver = 'easeOutElastic';
	var commonEaseOut = 'easeOutExpo';
	var commonTimeOver = 400;
	var commonTimeOut = 200;
	$('#link-area').bind('mouseover', function() {
		$('#select-lt').stop().animate({
			left: -16,
			top: -16,
			opacity: 1
		}, commonTimeOver, commonEaseOver);
		$('#select-rt').stop().animate({
			right: -16,
			top: -16,
			opacity: 1
		}, commonTimeOver, commonEaseOver);
		$('#select-lb').stop().animate({
			left: -16,
			bottom: -16,
			opacity: 1
		}, commonTimeOver, commonEaseOver);
		$('#select-rb').stop().animate({
			right: -16,
			bottom: -16,
			opacity: 1
		}, commonTimeOver, commonEaseOver);
	}).bind('mouseout', function() {
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
});