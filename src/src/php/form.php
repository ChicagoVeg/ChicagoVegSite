<?php
		$data = json_decode(file_get_contents('php://input'), true);
        $name=""; $email=""; $message=""; $captcha=""; $to=""; $headers=""; $subject=""; $body="";

        if(isset($data['name'])){
          $name=$data['name'];
        }

		if(isset($data['email'])){
          $email=$data['email'];
        }

		if(isset($data['message'])){
          $message=$data['message'];
        }

		if(isset($data['g-recaptcha-response'])){
          $captcha=$data['g-recaptcha-response'];
	  }

		if($captcha !== '' && !$captcha){
          http_response_code(400);
          exit;
        }

/*     $to = 'greenish_green@chicagoveg.com'; */
   $to = 'info@chicagoveg.com';
	$subject = 'Message from ChicagoVeg site';
	$body = "From: $name\n E-Mail: $email\n Message:\n $message";
	$headers = "Reply-To: $email" . "\r\n" ;

	session_start();

        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LdW6RQTAAAAAFjQ6gMirvZmRKvLjHX5Il01Lfpw&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
        if($response == false)
        {
           http_response_code(400);
        }else if (mail ($to, $subject, $body, $headers))
        {
        	http_response_code(200);
        }else {
          http_response_code(400);
        }

        session_destroy();
?>
