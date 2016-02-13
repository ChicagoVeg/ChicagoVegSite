;(function ($) {
	'use strict';

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
	success: function () {
		$('#nameBox').val('');
	   $('#emailBox').val('');
	   $('#messageBox').val('');

		alert('message sent');
	},
	error: function() {
		alert('message not sent');
	}
});
	});
})(window.jQuery)
