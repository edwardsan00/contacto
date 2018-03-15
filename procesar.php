<?php

 	$nombre = $_POST['nombre'];
    $email  = $_POST['email'];
    $telf = $_POST['telf'];
    $mensaje = $_POST['mensaje'];
  

$para = 'edwardsan00@gmail.com';
$titulo = 'MENSAJE DESDE LANDINGPAGE BARNES';
$mensaje = '
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
</head>
<style>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body{
		font-family: "Roboto", sans-serif;
		font-size: 16px;
	}
</style>
<body>
	<div style="background-color: #24ad7c; height: 3em;	color: white;">
		  <p style="line-height: 3em; padding-left: 1em; text-align: center;">Este es un mensaje enviado desde la landingpage de Barnes</p>
	</div>
	<div style="min-height: 200px;">
		<p style="font-weight: bold;
		padding: .3em 1em;font-size: 1em;line-height: 1.5em;">Nombre: <span style="font-weight: 300;
		letter-spacing: .05em;">' .$nombre. '</span></p> 
		<p style="font-weight: bold;
		padding: .3em 1em;font-size: 1em;line-height: 1.5em;">Correo Electronico: <span style="font-weight: 300;
		letter-spacing: .05em;">' .$email. '</span></p>
		<p style="font-weight: bold;
		padding: .3em 1em;font-size: 1em;line-height: 1.5em;">Telefono: <span style="font-weight: 300;
		letter-spacing: .05em;">' .$telf. '</span></p>
		<p style="font-weight: bold;
		padding: .3em 1em;font-size: 1em;line-height: 1.5em;">Mensaje: <span style="font-weight: 300;
		letter-spacing: .05em;	">' .$mensaje. '</span></p>
  	</div>
  	<div style="background-color: #f59b10;
		height: 2em;">
  		<p style="color: white;
		line-height: 2em;
		text-align: center;">hydropumps.com.pe</p>
  	</div>
</body>
</html>
';
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$cabeceras .= 'To: '.$nombre.' '.$email.'' . "\r\n";
$cabeceras .= 'From: atencion@goodpools.com.pe' . "\r\n";

mail($para, $titulo, $mensaje, $cabeceras);


?>