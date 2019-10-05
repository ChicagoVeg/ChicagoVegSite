;(function ($) {
	'use strict';

	window.chicagoVeg = window.chicagoVeg || {};

$(function () {
	var opts = {
  		  lines: 15 // The number of lines to draw
		, length: 26 // The length of each line
		, width: 3 // The line thickness
		, radius: 18 // The radius of the inner circle
		, scale: 1 // Scales overall size of the spinner
		, corners: 1 // Corner roundness (0..1)
		, color: '#000' // #rgb or #rrggbb or array of colors
		, opacity: 0.25 // Opacity of the lines
		, rotate: 0 // The rotation offset
		, direction: 1 // 1: clockwise, -1: counterclockwise
		, speed: 1 // Rounds per second
		, trail: 60 // Afterglow percentage
		, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
		, zIndex: 2e9 // The z-index (defaults to 2000000000)
		, className: 'spinner' // The CSS class to assign to the spinner
		, top: '50%' // Top position relative to parent
		, left: '50%' // Left position relative to parent
		, shadow: false // Whether to render a shadow
		, hwaccel: false // Whether to use hardware acceleration
		, position: 'absolute' // Element positioning
		}
		var target = $('#sending-message-spinner')[0];
		window.chicagoVeg.spinner = new Spinner(opts);


});

	$('#nameBox, #emailBox, #messageBox').on('mousedown', function () {
		$('#messageSent').hide();
		$('#messageNotSent').hide();
	});

	$('#contactForm').submit(function (e) {
		var isCaptureCorrect = !!($('.g-recaptcha-response').val());
	e.preventDefault();

	// user trying to send message without first performing captcha challenge
		if (!isCaptureCorrect) {
			alert('Captcha images need to be correctly identified');
			return;
		}

$.ajax({
	method: "POST",
	url: "src/php/form.php",
	cache: false,
dataTpe: 'json',
	data: JSON.stringify({
		'name':  $('#nameBox').val().trim(),
		'email': $('#emailBox').val().trim(),
		'message': $('#messageBox').val().trim(),
		'g-recaptcha-response': $('.g-recaptcha-response').val()
	}),
	beforeSend: function () {
		window.chicagoVeg.spinner.spin($('#sending-message-spinner')[0]);
		 $('input[type="submit"]').prop('disabled', true);
	},
	success: function () {
		$('#nameBox').val('');
	   $('#emailBox').val('');
	   $('#messageBox').val('');

		alert('Message Sent - Thank You!');
	},
	error: function() {
		alert('message was not sent');
	},
	complete: function() {
		window.chicagoVeg.spinner.stop();
		 $('input[type="submit"]').prop('disabled', false);
	}
});
	});
})(window.jQuery)
