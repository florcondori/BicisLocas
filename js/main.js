function validateForm(){
	var nombre = document.getElementById('name').value;
	var apellido = document.getElementById('lastname').value;
	var email = document.getElementById('input-email').value;
	var password = document.getElementById('input-password').value;
	var tipo_bici = document.getElementById('tipo-bici').value;
	

	if(nombre =="" || apellido =="" || email =="" || password ==""){
		alert("llenar campos obliggatorios");
	}
	

}