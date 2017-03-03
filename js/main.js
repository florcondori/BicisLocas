function validateForm(){
	//obtener los datos del formulario
	var nombre = document.getElementById('name').value;
	var apellido = document.getElementById('lastname').value;
	var email = document.getElementById('input-email').value;
	var password = document.getElementById('input-password').value;
	var tipo_bici = document.getElementById('tipo-bici').value;
	
	var stringDominio = email.substr(email.indexOf("@")+1);
	console.log(stringDominio);
	// declarar expresiones regulares
	var soloLetras = /^[A-Z a-z]{2,50}$/;//solo letras , *permite repetidas, con espacios
	var primerMayuscula = /^[A-Z]{1}/;//la primera letra en Mayuscula
	var expresionDominio = /^[a-z0-9]+\.[a-z]{2,3}$/;//dominio7.com

	if(nombre =="" || apellido =="" || email =="" || password =="" || tipo_bici == "0"){//validar si no se ingresa informacion
		alert("Llenar campos obliggatorios");
	}else{
		if(soloLetras.test(nombre) && soloLetras.test(apellido)){
			if(primerMayuscula.test(nombre) && primerMayuscula.test(apellido)){
				alert("Tu [Nombre y Apellido] estan bien escritos");
				if(expresionDominio.test(stringDominio)){
					alert("tu email esta bien escrito");
					if(password.length>=6 && password!="password" && password!="123456" && password!="098754"){
						alert("Datos ingresados correctamente");
					}
					else{
						alert("El password debe contener como minimo 6 caracteres y difirente a [password ó 123456 ó 098754]");
					}
				}else{
					alert("Tu correo esta mal escrito, deberia ser: email@d6minio.com");
				}
			}
			else{
				alert("La primera de letra [Nombre y Apellido] debe estar en mayuscula");
			}
			
		}else{
			alert("Los campos [Nombre y Apellido] solo deben contener letras");
		}
	}
	

}