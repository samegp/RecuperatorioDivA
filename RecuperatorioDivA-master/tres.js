/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let lugar;
	let temporada;
	let cantidad;
	let lugarMasConcurrido;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let sexoMayorPasajeros;
	let mayorCantidadPasajeros = 0;
	let contadorInvierno = 0;
	let acumuladorInvierno = 0;
	let promedioInvierno;
	let i;
	let flag;

	do{
		// Validaciones
		sexo = prompt("ingrese el sexo de la persona titular: ");
		while(sexo != "m" && sexo != "f"){

			sexo = prompt("opción inválida. Por favor reingrese nuevamente: ")
		}
		lugar = prompt("por favor indique el lugar donde desea vacacionar: bariloche, cataratas o salta");
		while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta")){

			lugar = prompt("ha ingresado un lugar invalido. por favor ingrese el lugar donde desea vacacionar nuevamente");
		}
		temporada = prompt("por favor indique la temporada en la cual desea vacacionar: otoño, invierno, verano o primavera");
		while (!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera")){

			temporada = prompt("ha ingresado una temporada invalida. por favor ingrese nuevamente la temporada en la cual desea vacacionar");
		}
		cantidad = parseInt(prompt("por favor ingrese la cantidad de personas que viajan: "));
		while(cantidad < 0 || isNaN(cantidad)){

			cantidad = prompt("Error. por favor reingrese el numero de viajantes");
		}

		//Para el punto A
		if(lugar == "bariloche"){

			contadorBariloche++;

		}else if(lugar == "cataratas"){

			contadorCataratas++;

		}else{

			contadorSalta++;
		}

		//Para el punto B
		if (flag == 0 || cantidad > mayorCantidadPasajeros){
			mayorCantidadPasajeros = cantidad;
			sexoMayorPasajeros = sexo;
			flga = 1
		}

		//Para el punto C
		if(temporada == "invierno"){
			contadorInvierno++;
			acumuladorInvierno += cantidad;
		}

		i = prompt("desea ingresar otro viaje?: s/n");

	} while(i == "s"){
	}
	// Complemento del punto A
	if(contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
		lugarMasConcurrido = "bariloche";
	}else if(contadorCataratas >= contadorBariloche && contadorCataratas > contadorSalta){
		lugarMasConcurrido = "cataratas";
	}else{
		lugarMasConcurrido = "salta";
	}

	//Complemento del punto C
	if(contadorInvierno != 0){
		promedioInvierno = acumuladorInvierno / contadorInvierno;
	}

	document.write("el lugar mas elegido es " + lugarMasConcurrido + "</br>");
	document.write("el sexo del titular que lleva mas pasajeros es " + sexoMayorPasajeros + "</br>");
	document.write("el promedio de personas por viaje, en la temporada de invierno es de: " + promedioInvierno);
	
}
