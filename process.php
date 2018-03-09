<?php

 	$nombre = $_POST['nombre'];
    $email  = $_POST['email'];
    $telf = $_POST['telf'];
    $mensaje = $_POST['mensaje'];

/*    echo "Nombre:" .$nombre;
    echo "Email:" .$email;
    echo "Telefono: " .$telf;
    echo "Mensaje: " .$mensaje;
*/
$mail = "Prueba de mensaje";
//Titulo
$titulo = "PRUEBA DE TITULO";
//cabecera
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=utf8\r\n"; 
//dirección del remitente 
$headers .= "From: Barnes Landingpage\r\n";
//Enviamos el mensaje a tu_dirección_email 
$bool = mail("atencion@hydropumps.com.pe",$titulo,$mail,$headers);
if($bool){
    echo "Mensaje enviado";
}else{
    echo "Mensaje no enviado";
}


?>