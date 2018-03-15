	//Variables
	let formulario = document.querySelector('#contacto'),
		nombre = document.querySelector('#nombre'),
		email = document.querySelector('#email'),
		telf = document.querySelector('#telf'),
		mensaje = document.querySelector('#mensaje'),
		btnEnviar = document.querySelector('#enviar');

	//Handlers
	formulario.addEventListener('submit', function(e){
		e.preventDefault();

		verificandoDatos(validarFormulario());
		//enviarFormulario();
	});


	//Funciones
	
	var validarFormulario = function(){
		var datosObtenidos = [];
		for(var i = 0; i < formulario.elements.length - 1; i++){
			if(formulario.elements[i].value == ""){
				formulario.elements[i].classList.add('danger');
				formulario.elements[i].addEventListener('focus', function(){
					this.classList.remove('danger');
				});
			} else {
				if(validarCaracteres(formulario.elements[i].name, formulario.elements[i].value)){
					datosObtenidos[i] = formulario.elements[i].value;
				}else{
					formulario.elements[i].classList.add('danger');
				}
			}
		}
		return datosObtenidos;
	}

	var validarCaracteres = function(dato, valor){
			if(dato == 'nombre'){
				let regexNombre = /^[a-zA-Z\s]*$/;
				return comprobarCaracteres(valor, regexNombre);
			}
			if(dato == 'email'){
				let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
				return comprobarCaracteres(valor, regexEmail);
			}
			if(dato == 'telf'){
				let regexTelef = /^\d*$/;
				return comprobarCaracteres(valor, regexTelef);
			}		
			if(dato == 'mensaje'){
				return true;
			}
	}

	var comprobarCaracteres = function(dato, tipo){
			if(!dato.search(tipo))
				return dato.trim();
			else
				return false;
		}

	var verificandoDatos = function(datos){
		if(datos.length == 4){
			let datosVacios = 0;
			for(let j = 0; j<datos.length; j++){
				if(datos[j] == undefined){
					datosVacios++;
				}
			}
			if(datosVacios>0){
				return false;
			} else {
				let dataObj = {
					nombre: nombre.value,
					email: email.value,
					telf: telf.value,
					mensaje: mensaje.value
				}
				return enviarFormulario(dataObj);	
			}
		}
	}

	var limpiarFormulario = function(){
		formulario.reset();
	}

	var enviarFormulario = function(datos){
		$.ajax({                        
	       type: "POST",                 
	       url: './procesar.php',                     
	       data: datos,
	       success(data){
	       		limpiarFormulario();
				alert("Mensaje Enviado");        
	       },
	       error(d,e){
	       	console.log(e)
	       }
	   });
	}