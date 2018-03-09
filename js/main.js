
		var $form = $('#contacto'),
			$nombre = $('#nombre'),
			$email = $('#email'),
			$telf = $('#telf'),
			$mensaje = $('#mensaje'),
			$btn = $('#enviar');

		$btn.on('click', function(event){
			event.preventDefault();
			if(validarCamposVacios()){
				let datosValidados = (validarDatos($nombre.val(), $email.val(), $telf.val(), $mensaje.val()));
				if(datosValidados == false){
					alert("Corrija los datos a enviar");
					return;
				} else {
					$.ajax({                        
			           type: "POST",                 
			           url: './process.php',                     
			           data: datosValidados,
			           success(data){
			             console.log(data);              
			           },
			           error(data){
			           	console.log(data)
			           }
			       });
				}
									
			}
		});

		var validarDatos = function(nombre, email, telf, mensaje){
			let no = /^[a-zA-Z\s]*$/,
				em = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/,
				te = /^\d*$/;

				if(validarForm(nombre, no) && validarForm(email, em) && validarForm(telf, te)){
					return {
						nombre: validarForm(nombre, no),
						email: validarForm(email, em),
						telf: validarForm(telf, te),
						mensaje: mensaje
					}
				} else {
					return false;
				}
			}


		var validarForm = function(cadena, tipo){
			if(!cadena.search(tipo))
				return cadena.trim();
			else
				return false;
		}

		var validarCamposVacios = function(){
			    if($nombre.val() == ""){
			        alert("El campo Nombre no puede estar vacío.");
			        $nombre.focus(); 
			        return false;
			    }
			    if($email.val() == ""){
			        alert("El campo Email no puede estar vacío.");
			        $email.focus();
			        return false;
			    }
			    if($telf.val() == ""){
			        alert("El campo Telefono no puede estar vacío.");
			        $telf.focus();
			        return false;
			    }
			    if($mensaje.val() == ""){
			        alert("El campo Mensaje no puede estar vacío.");
			        $mensaje.focus();
			        return false;
			    }
			    return true;
		}
