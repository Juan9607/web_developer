// realizado por juan sebastian cardenas arevalo
var current_fs, next_fs, previous_fs; 


const nombre=document.getElementById("nombre");
const pApellido=document.getElementById("pApellido");
const sApellido=document.getElementById("sApellido");
const fecha=document.getElementById('Fecha_nac');
const mail=document.getElementById("mail");
const tel=document.getElementById("tel");
const Pais=document.getElementById("Pais");
const Ciudad=document.getElementById("Ciudad");
const EstadoCivil=document.getElementById("EstadoCivil");
const sexoH=document.getElementById("h");
const sexoM=document.getElementById("m");
const fijo=document.getElementById("fijo");
const portatil=document.getElementById("portatil");
const empresa=document.getElementById("empresa");
const nit=document.getElementById("nit");
const dir=document.getElementById("dir");
const contact=document.getElementById("contact");
const cargo=document.getElementById("cargo");
const inicio=document.getElementById("inicio");
const fin=document.getElementById("fin");
const transacciones=document.getElementById("transacciones");
const dir_pedido=document.getElementById("dir_pedido");
const nece=document.getElementById("nece");







$(".next").click(function(){

	if(nombre.value.length==0){
		alert('Por favor indique cual es su nombre (Máx 20 caracteres)')
		return false
	}
	if(pApellido.value.length==0){
		alert('Por favor indique cual es su primer apellido (Máx 20 caracteres)')
		return false
	}
	if(sApellido.value.length==0){
		alert('Por favor indique cual es su segundo apellido (Máx 20 caracteres)')
		return false
	}
	
	if(fecha.value==0){
		alert('Por favor indique cual es su fecha de nacimiento')
		return false
	}
	if(mail.value.length==0){
		alert('Por favor indique cual es su email')
		return false
	}
	var a=0
	for(i=0;i<mail.value.length; i++){
		if(mail.value[i]=='@'){
			a=1
			break;
		}
	}
	if(a==0){
		alert('Ingresa un email valido')
		return false
	}
	if(tel.value.length==0){
		alert('Por favor indique cual es su numero de celular')
		return false
	}
	if(Pais.value.length==0){
		alert('Por favor indique cual es su pais')
		return false
	}
	if(Ciudad.value.length==0){
		alert('Por favor indique cual es su ciudad')
		return false
	}
	if(EstadoCivil.value.length==0){
		alert('Por favor indique su estado civil')
		return false
	}
	if((sexoH.checked==false )&&(sexoM.checked==false)){
		alert('Por favor selecciona tu sexo')
		return false
	}
	if(cond.checked==false){
		alert('Por favor acepta el uso de tus datos')
		return false
	}

	current_fs = $(this).parent();
	next_fs = $(this).parent().next();

	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");	
	//show the next fieldset
	current_fs.hide();
	next_fs.show(); 
	$('body, html').animate({
		scrollTop: '0px'
	}, 800)	
		//hide the current fieldset with style
});

$(".dos").click(function(){

	//Second

	if(empresa.value.length==0){
		alert('Por favor indique el nombre de su empresa')
		return false
	}
	if(nit.value.length==0){
		alert('Por favor indique el nit de su empresa')
		return false
	}
	if(dir.value.length==0){
		alert('Por favor indique la dirección de su empresa')
		return false
	}
	if(contact.value.length==0){
		alert('Por favor indique un numero de contacto')
		return false
	}
	if(cargo.value.length==0){
		alert('Por favor indique su cargo en la empresa')
		return false
	}
	if(inicio.value==0){
		alert('Por favor indique su antiguedad en la empresa')
		return false
	}
	if(fin.value==0){
		alert('Por favor indique su antiguedad en la empresa')
		return false
	}

	current_fs = $(this).parent();
	next_fs = $(this).parent().next();

	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");	
	//show the next fieldset
	current_fs.hide();
	next_fs.show(); 
	$('body, html').animate({
		scrollTop: '0px'
	}, 800)	
		//hide the current fieldset with style
});

$(".tres").click(function(){

	if(transacciones.value.length==0){
		alert('Por favor indique el numero de transacciones')
		return false
	}
	if(dir_pedido.value.length==0){
		alert('Por qué necesitas un datafono?')
		return false
	}
	if((fijo.checked==false )&&(portatil.checked==false)){
		alert('Por favor selecciona el tipo de datafono')
		return false
	}
	if(nece.value.length==0){
		alert('Completa el campo de necesidades de tu negocio')
		return false
	}


	current_fs = $(this).parent();
	next_fs = $(this).parent().next();

	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");	
	//show the next fieldset
	current_fs.hide();
	next_fs.show(); 
	$('body, html').animate({
		scrollTop: '0px'
	}, 800)	
		//hide the current fieldset with style
});


